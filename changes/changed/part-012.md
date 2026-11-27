# Changed — Bundle Modifications Report (Part 012 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `12 / 154` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (3996 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 963. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7664` → after: `L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7523) · [Before (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7664)

```diff
-         this.material && this.look === OW || (null === (mW = this.material) || void 0 === mW || mW.dispose(!0, !0), this.material = ec(this.Hx.TZ.bD(), WW, iW), this.look = OW);
+         this.material && this.look === GR || (null === (yR = this.material) || void 0 === yR || yR.dispose(!0, !0), this.material = Ni(this.xw.lK.jH(), RR, JR), this.look = GR);
```

#### 964. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7668` → after: `L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7527) · [Before (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7668)

```diff
-     var yw = OW(40354);
+     var Bf = GR(40409);
```

#### 965. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7671-L7672` → after: `L7530-L7531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7530-L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7530-L7531) · [Before (L7671-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7671-L7672)

```diff
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new yw.e((() => cc.d.get("forcedCameraDirectionTransitionMs")), (WW => {
-           cc.d.apply(WW)
+         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new Bf.d((() => Zi.c.get("forcedCameraDirectionTransitionMs")), (RR => {
+           Zi.c.apply(RR)
```

#### 966. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7676` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7535) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7676)

```diff
-         return Boolean(bW.d.getModelOverride(WW))
+         return Boolean(aR.b.getModelOverride(RR))
```

#### 967. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7708-L7712` → after: `L7567-L7571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7567-L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7567-L7571) · [Before (L7708-L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7708-L7712)

```diff
-     var Jw = OW(1351),
-       hw = OW(5150),
-       Hw = OW(40203),
-       nw = OW(1937),
-       uw = OW(1907);
+     var pf = GR(1449),
+       gf = GR(5242),
+       bf = GR(40246),
+       vf = GR(2011),
+       Of = GR(1984);
```

#### 968. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7758` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7617) · [Before (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7758)

```diff
-         return this.hasBoxes && gw(WW) ? WW.val : WW
+         return this.hasBoxes && of(RR) ? RR.val : RR
```

#### 969. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7764` → after: `L7623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7623) · [Before (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7764)

```diff
-           if (this.hasBoxes && gw(mW) ? yield {
+           if (this.hasBoxes && of(yR) ? yield {
```

#### 970. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7782` → after: `L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7641) · [Before (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7782)

```diff
-               if (this.hasBoxes && gw(NW) ? yield {
+               if (this.hasBoxes && of(uR) ? yield {
```

#### 971. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7827` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7686) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7827)

```diff
-     function gw(WW) {
+     function of(RR) {
```

#### 972. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7836` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7695) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7836)

```diff
-         super(`${ow.name} has been mutated during iteration`)
+         super(`${xf.name} has been mutated during iteration`)
```

#### 973. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7847-L7848` → after: `L7706-L7707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7706-L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7706-L7707) · [Before (L7847-L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7847-L7848)

```diff
-         const NW = (0, IW.d)().blockDataOwner.getBlockData(WW[0], WW[1], WW[2]),
-           PW = null !== (iW = null === NW || void 0 === NW || null === (OW = NW.persisted) || void 0 === OW || null === (mW = OW.shared) || void 0 === mW ? void 0 : mW.passkeyLastUpdated) && void 0 !== iW ? iW : 0;
+         const uR = (0, kR.e)().blockDataOwner.getBlockData(RR[0], RR[1], RR[2]),
+           ZR = null !== (JR = null === uR || void 0 === uR || null === (GR = uR.persisted) || void 0 === GR || null === (yR = GR.shared) || void 0 === yR ? void 0 : yR.passkeyLastUpdated) && void 0 !== JR ? JR : 0;
```

#### 974. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7858-L7866` → after: `L7717-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7717-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7717-L7725) · [Before (L7858-L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7858-L7866)

```diff
-     var fw = OW(40366),
-       Cw = OW(40392),
-       Xw = OW(40394),
-       Bw = OW(5126),
-       qw = OW(5203),
-       Rw = OW(1339),
-       Gw = OW(40402),
-       Iw = OW(5136),
-       aw = OW(5089);
+     var zf = GR(40419),
+       Sf = GR(40441),
+       jf = GR(40448),
+       df = GR(5218),
+       Ef = GR(5310),
+       Yf = GR(1444),
+       kf = GR(40455),
+       Qf = GR(5227),
+       Ff = GR(5191);
```

#### 975. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7869-L7871` → after: `L7728-L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7728-L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7728-L7730) · [Before (L7869-L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7869-L7871)

```diff
-         this.Hx = WW, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.thirdPersonHeld = !1, this.zoomKeysHeld = new Set, thi … [truncated]
-           const OW = this.Hx.camera.yG;
-           this.Hx.EY.kOW(this.Hx.Dv).cameraZoomChanged(iW, WW), 0 !== OW && 0 === this.Hx.camera.yG && this.disableFrontFacing()
+         this.xw = RR, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.thirdPersonHeld = !1, this.zoomKeysHeld = new Set, thi … [truncated]
+           const GR = this.xw.camera.w6;
+           this.xw.zC.uyR(this.xw.WH).cameraZoomChanged(JR, RR), 0 !== GR && 0 === this.xw.camera.w6 && this.disableFrontFacing()
```

#### 976. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7873` → after: `L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7732) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7873)

```diff
-         const iW = jW.l.subscribe("SwapCameraZoom", (() => {
+         const JR = LR.n.subscribe("SwapCameraZoom", (() => {
```

#### 977. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7876` → after: `L7735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7735) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7876)

```diff
-           OW = cc.d.subscribe("playerZoom", (WW => {
+           GR = Zi.c.subscribe("playerZoom", (RR => {
```

#### 978. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7879` → after: `L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7738) · [Before (L7879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7879)

```diff
-           mW = cc.d.subscribe("holdThirdPerson", (WW => {
+           yR = Zi.c.subscribe("holdThirdPerson", (RR => {
```

#### 979. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7883` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7742) · [Before (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7883)

```diff
-           this.endTemporaryThirdPerson(), this.Hx.camera.nG.reset(), jW.l.unsubscribe(iW), OW(), mW()
+           this.endTemporaryThirdPerson(), this.xw.camera.J_.reset(), LR.n.unsubscribe(JR), GR(), yR()
```

#### 980. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7891` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7750) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7891)

```diff
-         if (WW) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.Hx.camera.yG, void(this.locked = !0);
+         if (RR) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.xw.camera.w6, void(this.locked = !0);
```

#### 981. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7902` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7761) · [Before (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7902)

```diff
-         return this.locked ? null !== (WW = null === (iW = this.deferredZoom) || void 0 === iW ? void 0 : iW.zoom) && void 0 !== WW ? WW : this.lockedZoom : this.Hx.camera.yG
+         return this.locked ? null !== (RR = null === (JR = this.deferredZoom) || void 0 === JR ? void 0 : JR.zoom) && void 0 !== RR ? RR : this.lockedZoom : this.xw.camera.w6
```

#### 982. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7908-L7909` → after: `L7767-L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7767-L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7767-L7768) · [Before (L7908-L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7908-L7909)

```diff
-             const WW = this.Hx.EY.getState(this.Hx.Dv, "cameraShake").frontFacing;
-             if (!(0 === this.Hx.camera.yG && !WW)) return;
+             const RR = this.xw.zC.getState(this.xw.WH, "cameraShake").frontFacing;
+             if (!(0 === this.xw.camera.w6 && !RR)) return;
```

#### 983. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7921` → after: `L7780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7780) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7921)

```diff
-         iW ? this.zoomKeysHeld.add(WW) : this.zoomKeysHeld.delete(WW), this.Hx.EY.getState(this.Hx.Dv, "playerCameraAdjustment").zoomKeyPressed = this.zoomKeysHeld.size > 0, iW && !this.Hx.gM.canUseZoomKey && jW.l.iZ("showBottomMessage", {
+         JR ? this.zoomKeysHeld.add(RR) : this.zoomKeysHeld.delete(RR), this.xw.zC.getState(this.xw.WH, "playerCameraAdjustment").zoomKeyPressed = this.zoomKeysHeld.size > 0, JR && !this.xw.jW.canUseZoomKey && LR.n.JK("showBottomMessage", {
```

#### 984. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7935` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7794) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7935)

```diff
-         const iW = WW - this.Hx.camera.yG;
+         const JR = RR - this.xw.camera.w6;
```

#### 985. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7943-L7944` → after: `L7802-L7803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7802-L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7802-L7803) · [Before (L7943-L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7943-L7944)

```diff
-         const iW = this.Hx.camera.yG;
-         WW < 0 ? this.Hx.camera.yG = 0 : WW > (this.Hx.gM.maxPlayerZoom || 10) ? this.Hx.camera.yG = this.Hx.gM.maxPlayerZoom || 10 : this.Hx.camera.yG = WW, this.onCameraZoomSet(iW, WW)
+         const JR = this.xw.camera.w6;
+         RR < 0 ? this.xw.camera.w6 = 0 : RR > (this.xw.jW.maxPlayerZoom || 10) ? this.xw.camera.w6 = this.xw.jW.maxPlayerZoom || 10 : this.xw.camera.w6 = RR, this.onCameraZoomSet(JR, RR)
```

#### 986. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7947` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7806) · [Before (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7947)

```diff
-         this.Hx.EY.kOW(this.Hx.Dv).shouldChangeCameraZoom(WW) && (0 === this.Hx.camera.yG && 1 === WW ? WW++ : 2 === this.Hx.camera.yG && -1 === WW && WW--, this.setCameraZoomNoValidation(this.Hx.camera.yG + WW))
+         this.xw.zC.uyR(this.xw.WH).shouldChangeCameraZoom(RR) && (0 === this.xw.camera.w6 && 1 === RR ? RR++ : 2 === this.xw.camera.w6 && -1 === RR && RR--, this.setCameraZoomNoValidation(this.xw.camera.w6 + RR))
```

#### 987. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7950` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7809) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7950)

```diff
-         this.locked || (this.Hx.EY.getState(this.Hx.Dv, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.Hx.camera.yG ? this.setCameraZoom(this.Hx.gM.zoomOutDistance || 3) : (this.setCameraZoom(this.Hx.gM.zoomOutDistance || 3), 0 !== th … [truncated]
+         this.locked || (this.xw.zC.getState(this.xw.WH, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.xw.camera.w6 ? this.setCameraZoom(this.xw.jW.zoomOutDistance || 3) : (this.setCameraZoom(this.xw.jW.zoomOutDistance || 3), 0 !== th … [truncated]
```

#### 988. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7953` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7812) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7953)

```diff
-         this.Hx.EY.getState(this.Hx.Dv, "cameraShake").frontFacing = !1, this.Hx.camera.bj[0] = 0, this.Hx.camera.bj[1] = 0, this.Hx.camera.bj[2] = 0
+         this.xw.zC.getState(this.xw.WH, "cameraShake").frontFacing = !1, this.xw.camera.nL[0] = 0, this.xw.camera.nL[1] = 0, this.xw.camera.nL[2] = 0
```

#### 989. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7956` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7815) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7956)

```diff
-         this.Hx.EY.getState(this.Hx.Dv, "cameraShake").frontFacing = !0, this.Hx.camera.bj[0] = Math.PI, this.Hx.camera.bj[1] = 0, this.Hx.camera.bj[2] = Math.PI
+         this.xw.zC.getState(this.xw.WH, "cameraShake").frontFacing = !0, this.xw.camera.nL[0] = Math.PI, this.xw.camera.nL[1] = 0, this.xw.camera.nL[2] = Math.PI
```

#### 990. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7959` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7818) · [Before (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7959)

```diff
-         this.Hx.EY.kOW(this.Hx.Dv).cameraZoomSet(WW, iW), jW.l.iZ("cameraZoomSet", this.Hx.camera.yG), 0 === this.Hx.camera.yG && this.disableFrontFacing()
+         this.xw.zC.uyR(this.xw.WH).cameraZoomSet(RR, JR), LR.n.JK("cameraZoomSet", this.xw.camera.w6), 0 === this.xw.camera.w6 && this.disableFrontFacing()
```

#### 991. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7962-L7963` → after: `L7821-L7822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7821-L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7821-L7822) · [Before (L7962-L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7962-L7963)

```diff
-     var zw = OW(37838),
-       Fw = OW(40407);
+     var sf = GR(37766),
+       hf = GR(40462);
```

#### 992. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7973` → after: `L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7832) · [Before (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7973)

```diff
-         this.Hx = WW, this.pointerLockWrapper = iW, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = WW => {
+         this.xw = RR, this.pointerLockWrapper = JR, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = RR => {
```

#### 993. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7977` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7836) · [Before (L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7977)

```diff
-           "mouse" !== WW.pointerType ? "pen" !== WW.pointerType && !Et(WW) || !this.Hx.container.element.contains(WW.target) || (0, zw.j)(WW.target) || null === (iW = this.tapListener) || void 0 === iW || iW.call(this, WW.clientX, WW.clientY) : this.followPoint(WW.clientX, WW.cli … [truncated]
+           "mouse" !== RR.pointerType ? "pen" !== RR.pointerType && !uV(RR) || !this.xw.container.element.contains(RR.target) || (0, sf.n)(RR.target) || null === (JR = this.tapListener) || void 0 === JR || JR.call(this, RR.clientX, RR.clientY) : this.followPoint(RR.clientX, RR.cli … [truncated]
```

#### 994. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7981` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7840) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7981)

```diff
-         WW !== this.active && (this.active = WW, this.Hx.container.RV(!WW), WW ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(Ot)) : (window.removeEventListener(" … [truncated]
+         RR !== this.active && (this.active = RR, this.xw.container.aE(!RR), RR ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(yV)) : (window.removeEventListener(" … [truncated]
```

#### 995. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L7993` → after: `L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7852) · [Before (L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L7993)

```diff
-         const mW = this.Hx.container.canvas.getBoundingClientRect();
+         const yR = this.xw.container.canvas.getBoundingClientRect();
```

#### 996. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8009-L8013` → after: `L7868-L7872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7868-L7872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7868-L7872) · [Before (L8009-L8013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8009-L8013)

```diff
-     var Nt = OW(7444),
-       Pt = OW(38782),
-       Lt = OW(2085),
-       ct = OW(40416),
-       wt = OW(40287);
+     var ZV = GR(7581),
+       qV = GR(38779),
+       iV = GR(2194),
+       fV = GR(40464),
+       VV = GR(40333);
```

#### 997. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8016` → after: `L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7875) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8016)

```diff
-         this.Hx = WW, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
+         this.xw = RR, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
```

#### 998. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8026-L8027` → after: `L7885-L7886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7885-L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7885-L7886) · [Before (L8026-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8026-L8027)

```diff
-         }, this.flyAccel = new Nt.c, this.flyVertMoveDir = 0, this.toggles = new ML.i((WW => {
-           this.canUsefreeCam = WW, this.enabled && !this.canUsefreeCam && this.WK(!1), jW.l.iZ("freeCameraChanged")
+         }, this.flyAccel = new ZV.c, this.flyVertMoveDir = 0, this.toggles = new Uq.g((RR => {
+           this.canUsefreeCam = RR, this.enabled && !this.canUsefreeCam && this.JA(!1), LR.n.JK("freeCameraChanged")
```

#### 999. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8029` → after: `L7888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7888) · [Before (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8029)

```diff
-         const iW = jW.l.subscribe("userContextUpdated", (WW => {
+         const JR = LR.n.subscribe("userContextUpdated", (RR => {
```

#### 1000. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8033` → after: `L7892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7892) · [Before (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8033)

```diff
-           jW.l.unsubscribe(iW), this.WK(!1);
+           LR.n.unsubscribe(JR), this.JA(!1);
```

#### 1001. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8050` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7909) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8050)

```diff
-         this.WK(!this.enabled)
+         this.JA(!this.enabled)
```

#### 1002. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8054` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7913) · [Before (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8054)

```diff
-         return this.panelMovesFly() || this.enabled && !(null === (WW = this.Hx.bloxd.client) || void 0 === WW || !WW.isReplayMode())
+         return this.panelMovesFly() || this.enabled && !(null === (RR = this.xw.bloxd.client) || void 0 === RR || !RR.isReplayMode())
```

#### 1003. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8060` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7919) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8060)

```diff
-         WW ? (this.WK(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, jW.l.iZ("freeCameraChanged"))) : this.movesFlyIt && this.WK(!1)
+         RR ? (this.JA(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, LR.n.JK("freeCameraChanged"))) : this.movesFlyIt && this.JA(!1)
```

#### 1004. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8063` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7922) · [Before (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8063)

```diff
-         WW !== this.blocked && (this.blocked = WW, WW && this.WK(!1), jW.l.iZ("freeCameraChanged"))
+         RR !== this.blocked && (this.blocked = RR, RR && this.JA(!1), LR.n.JK("freeCameraChanged"))
```

#### 1005. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8081` → after: `L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7940) · [Before (L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8081)

```diff
-         for (const mW of Lt.j) {
+         for (const yR of iV.k) {
```

#### 1006. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8083` → after: `L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7942) · [Before (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8083)

```diff
-           if (null !== (OW = Lt.v[mW]) && void 0 !== OW && OW.includes(iW)) return !0
+           if (null !== (GR = iV.t[yR]) && void 0 !== GR && GR.includes(JR)) return !0
```

#### 1007. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8088` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7947) · [Before (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8088)

```diff
-         (Pt.b.isCameraDetachedFromPlayer(this.Hx) || Pt.b.detachCamera(this.Hx)) && (this.tickHandler = WW => {
+         (qV.e.isCameraDetachedFromPlayer(this.xw) || qV.e.detachCamera(this.xw)) && (this.tickHandler = RR => {
```

#### 1008. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8090` → after: `L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7949) · [Before (L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8090)

```diff
-         }, this.Hx.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+         }, this.xw.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
```

#### 1009. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8094-L8096` → after: `L7953-L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7953-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7953-L7955) · [Before (L8094-L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8094-L8096)

```diff
-         this.tickHandler && (this.Hx.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !Pt.b.isCameraDetachedFromPlayer(this.Hx) || null !== (WW = this.Hx.bloxd.client) && void 0 !== WW && WW.isReplayMode() || Pt.b.reattachCamera(this.Hx), this.clearMovementInpu … [truncated]
-         const OW = null !== (iW = this.Hx.bloxd.client) && void 0 !== iW && iW.isReplayMode() ? void 0 : this.Hx.EY.YOW();
-         for (const mW of ["forward", "backward", "left", "right"]) OW && this.Hx.inputs.state[mW] && (OW[mW] = !0);
+         this.tickHandler && (this.xw.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !qV.e.isCameraDetachedFromPlayer(this.xw) || null !== (RR = this.xw.bloxd.client) && void 0 !== RR && RR.isReplayMode() || qV.e.reattachCamera(this.xw), this.clearMovementInpu … [truncated]
+         const GR = null !== (JR = this.xw.bloxd.client) && void 0 !== JR && JR.isReplayMode() ? void 0 : this.xw.zC.VyR();
+         for (const yR of ["forward", "backward", "left", "right"]) GR && this.xw.inputs.state[yR] && (GR[yR] = !0);
```

#### 1010. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8123` → after: `L7982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7982) · [Before (L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8123)

```diff
-         if ((null === (iW = this.Hx.bloxd.client) || void 0 === iW || !iW.isReplayMode()) && !this.Hx.EY.jOW(this.Hx.Dv).isAlive) return void this.WK(!1);
+         if ((null === (JR = this.xw.bloxd.client) || void 0 === JR || !JR.isReplayMode()) && !this.xw.zC.yyR(this.xw.WH).isAlive) return void this.JA(!1);
```

#### 1011. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8126-L8127` → after: `L7985-L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L7985-L7986) · [Before (L8126-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8126-L8127)

```diff
-           EW = mW * this.Hx.Fv,
-           NW = this.Hx.camera.heading,
+           tR = yR * this.xw.lH,
+           uR = this.xw.camera.heading,
```

#### 1012. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8146` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8005) · [Before (L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8146)

```diff
-         const UW = 12 * (1 + this.flyAccel.RW);
+         const nR = 12 * (1 + this.flyAccel.YR);
```

#### 1013. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8150` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8009) · [Before (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8150)

```diff
-           const WW = (xW > 1 ? 1 / xW : 1) * UW * mW;
+           const RR = (wR > 1 ? 1 / wR : 1) * nR * yR;
```

#### 1014. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8155-L8156` → after: `L8014-L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8014-L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8014-L8015) · [Before (L8155-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8155-L8156)

```diff
-         const KW = this.Hx.EY.Vk(this.Hx.camera.lG);
-         this.Hx.EY.setPosition(this.Hx.camera.lG, [KW[0] + kW, KW[1] + MW, KW[2] + sW])
+         const CR = this.xw.zC.vW(this.xw.camera.R6);
+         this.xw.zC.setPosition(this.xw.camera.R6, [CR[0] + UR, CR[1] + AR, CR[2] + WR])
```

#### 1015. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8160` → after: `L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8019) · [Before (L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8160)

```diff
-         jW.l.iZ("freeCameraChanged"), (0, ct.e)(WW), null !== (iW = this.Hx.bloxd.client) && void 0 !== iW && iW.isReplayMode() && jW.l.iZ("replayViewer|uiRefresh")
+         LR.n.JK("freeCameraChanged"), (0, fV.e)(RR), null !== (JR = this.xw.bloxd.client) && void 0 !== JR && JR.isReplayMode() && LR.n.JK("replayViewer|uiRefresh")
```

#### 1016. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8163-L8166` → after: `L8022-L8025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8022-L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8022-L8025) · [Before (L8163-L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8163-L8166)

```diff
-     var Zt = OW(2012),
-       xt = OW(40419),
-       lt = OW(37915),
-       At = OW(40440),
+     var wV = GR(2102),
+       rV = GR(40466),
+       eV = GR(37845),
+       aV = GR(40482),
```

#### 1017. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8168-L8171` → after: `L8027-L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8027-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8027-L8030) · [Before (L8168-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8168-L8171)

```diff
-       jt = OW(38806),
-       Ut = OW(40431),
-       kt = OW(40141),
-       st = OW(745);
+       nV = GR(38808),
+       UV = GR(40476),
+       WV = GR(40176),
+       AV = GR(798);
```

#### 1018. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8175-L8177` → after: `L8034-L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8034-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8034-L8036) · [Before (L8175-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8175-L8177)

```diff
-       EW.heading = iW + WW.bj[1] + (mW ? WW.cameraRotationOffset[1] : 0);
-       const NW = OW + WW.bj[0] + (mW ? WW.cameraRotationOffset[0] : 0);
-       (0, lt.m)((0, lt.f)(EW.heading, NW, Mt), EW)
+       tR.heading = JR + RR.nL[1] + (yR ? RR.cameraRotationOffset[1] : 0);
+       const uR = GR + RR.nL[0] + (yR ? RR.cameraRotationOffset[0] : 0);
+       (0, eV.o)((0, eV.e)(tR.heading, uR, CV), tR)
```

#### 1019. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8183` → after: `L8042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8042) · [Before (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8183)

```diff
-       kW().set(St, EW[0], EW[1], 0), kW().tj(St, St, kW().ZERO, WW.lZ + WW.bj[2] + PW[2]), kW().cj(St, St, kW().ZERO, OW + WW.bj[0] + PW[0]), kW().wj(St, St, kW().ZERO, iW + WW.bj[1] + PW[1]), kW().add(NW, NW, St)
+       UR().set(MV, tR[0], tR[1], 0), UR().wa(MV, MV, UR().ZERO, RR.rK + RR.nL[2] + ZR[2]), UR().ge(MV, MV, UR().ZERO, GR + RR.nL[0] + ZR[0]), UR().ta(MV, MV, UR().ZERO, JR + RR.nL[1] + ZR[1]), UR().add(uR, uR, MV)
```

#### 1020. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8189` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8048) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8189)

```diff
-       return Pt.b.copyReattachedTargetPosition(WW, yt) ? WW.camera.W4(yt, iW, OW, Pt.b.getSavedZoomDistance(WW), mW) : null
+       return qV.e.copyReattachedTargetPosition(RR, lV) ? RR.camera.Q_(lV, JR, GR, qV.e.getSavedZoomDistance(RR), yR) : null
```

#### 1021. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8193` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8052) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8193)

```diff
-       return (0, Ut.g)(WW) ? (0, VW.b)(WW) : null
+       return (0, UV.f)(RR) ? (0, PR.d)(RR) : null
```

#### 1022. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8197` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8056) · [Before (L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8197)

```diff
-         this.Hx = WW, this.view = iW, this.pickEntity = OW, this.defaultPose = (0, Fw.m)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.cameraHiddenPlayer = null, this.pickTargetedBlock = (WW, iW, OW) => this.pickDist … [truncated]
+         this.xw = RR, this.view = JR, this.pickEntity = GR, this.defaultPose = (0, hf.j)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.cameraHiddenPlayer = null, this.pickTargetedBlock = (RR, JR, GR) => this.pickDist … [truncated]
```

#### 1023. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8200-L8201` → after: `L8059-L8060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8059-L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8059-L8060) · [Before (L8200-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8200-L8201)

```diff
-             PW = this.Hx.TZ.nD,
-             LW = null === this.cameraHiddenPlayer ? null : null !== (mW = null === (EW = this.Hx.EY.XiW(this.cameraHiddenPlayer)) || void 0 === EW ? void 0 : EW.uD) && void 0 !== mW ? mW : null,
+             ZR = this.xw.lK.RP,
+             qR = null === this.cameraHiddenPlayer ? null : null !== (yR = null === (tR = this.xw.zC.vGR(this.cameraHiddenPlayer)) || void 0 === tR ? void 0 : tR.JI) && void 0 !== yR ? yR : null,
```

#### 1024. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8206` → after: `L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8065) · [Before (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8206)

```diff
-             return null !== (wW = this.pickEntity(WW, iW, null !== NW && void 0 !== NW ? NW : OW)) && void 0 !== wW ? wW : NW
+             return null !== (fR = this.pickEntity(RR, JR, null !== uR && void 0 !== uR ? uR : GR)) && void 0 !== fR ? fR : uR
```

#### 1025. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8210` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8069) · [Before (L8210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8210)

```diff
-         }, this.isUntargeted = WW => !this.Hx.QWW(WW)
+         }, this.isUntargeted = RR => !this.xw.PJR(RR)
```

#### 1026. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8213` → after: `L8072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8072) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8213)

```diff
-         return this.Hx.Av
+         return this.xw.UH
```

#### 1027. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8217` → after: `L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8076) · [Before (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8217)

```diff
-         return null !== iW && this.Hx.EY.YG(iW) ? (0, zL.getDrawnPosition)(this.Hx, iW, this.feet) : null
+         return null !== JR && this.xw.zC.f6(JR) ? (0, Qq.getDrawnPosition)(this.xw, JR, this.feet) : null
```

#### 1028. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8222-L8223` → after: `L8081-L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8081-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8081-L8082) · [Before (L8222-L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8222-L8223)

```diff
-           return WW.EY.YG(iW) ? ((0, zL.getDrawnPosition)(WW, iW, OW), null !== WW.bloxd.getLifeformType(iW) && (OW[1] += WW.bloxd.getLifeformEyeHeight(iW)), OW) : null
-         }(this.Hx, iW, this.aim)
+           return RR.zC.f6(JR) ? ((0, Qq.getDrawnPosition)(RR, JR, GR), null !== RR.bloxd.getLifeformType(JR) && (GR[1] += RR.bloxd.getLifeformEyeHeight(JR)), GR) : null
+         }(this.xw, JR, this.aim)
```

#### 1029. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8228` → after: `L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8087) · [Before (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8228)

```diff
-         return null === NW ? null : NW === this.Hx.Dv ? this.view.heading : null !== (iW = null !== (OW = null === (mW = (0, RL.getCaughtUpMeshRotation)(this.Hx, NW)) || void 0 === mW ? void 0 : mW.renderRotation[1]) && void 0 !== OW ? OW : null === (EW = this.Hx.EY.aiW(NW)) || v … [truncated]
+         return null === uR ? null : uR === this.xw.WH ? this.view.heading : null !== (JR = null !== (GR = null === (yR = (0, jq.getCaughtUpMeshRotation)(this.xw, uR)) || void 0 === yR ? void 0 : yR.renderRotation[1]) && void 0 !== GR ? GR : null === (tR = this.xw.zC.oGR(uR)) || v … [truncated]
```

#### 1030. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8233` → after: `L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8092) · [Before (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8233)

```diff
-         return null === mW || mW === this.Hx.Dv || null === this.Hx.bloxd.getLifeformType(mW) ? null : null !== (iW = null === (OW = this.Hx.EY.aiW(mW)) || void 0 === OW ? void 0 : OW.cameraPitch) && void 0 !== iW ? iW : null
+         return null === yR || yR === this.xw.WH || null === this.xw.bloxd.getLifeformType(yR) ? null : null !== (JR = null === (GR = this.xw.zC.oGR(yR)) || void 0 === GR ? void 0 : GR.cameraPitch) && void 0 !== JR ? JR : null
```

#### 1031. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8238-L8240` → after: `L8097-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8097-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8097-L8099) · [Before (L8238-L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8238-L8240)

```diff
-         if (null === mW || mW === this.Hx.Dv || null === this.Hx.bloxd.getLifeformType(mW)) return null;
-         const EW = (0, RL.getCaughtUpMeshRotation)(this.Hx, mW);
-         return EW ? (0, RL.getRemoteTargetHeading)(this.Hx, EW) : null !== (iW = null === (OW = this.Hx.EY.aiW(mW)) || void 0 === OW ? void 0 : OW.heading) && void 0 !== iW ? iW : null
+         if (null === yR || yR === this.xw.WH || null === this.xw.bloxd.getLifeformType(yR)) return null;
+         const tR = (0, jq.getCaughtUpMeshRotation)(this.xw, yR);
+         return tR ? (0, jq.getRemoteTargetHeading)(this.xw, tR) : null !== (JR = null === (GR = this.xw.zC.oGR(yR)) || void 0 === GR ? void 0 : GR.heading) && void 0 !== JR ? JR : null
```

#### 1032. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8244` → after: `L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8103) · [Before (L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8244)

```diff
-         if (null === OW || OW === this.Hx.Dv || "Player" !== this.Hx.bloxd.getLifeformType(OW)) return null;
+         if (null === GR || GR === this.xw.WH || "Player" !== this.xw.bloxd.getLifeformType(GR)) return null;
```

#### 1033. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8246` → after: `L8105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8105) · [Before (L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8246)

```diff
-           EW = this.Hx.EY.YG(OW);
+           tR = this.xw.zC.f6(GR);
```

#### 1034. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8249` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8108) · [Before (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8249)

```diff
-         return Math.abs(iW[0] - mW[0]) < NW && Math.abs(iW[2] - mW[2]) < NW && iW[1] > mW[1] && iW[1] < mW[1] + EW.height ? OW : null
+         return Math.abs(JR[0] - yR[0]) < uR && Math.abs(JR[2] - yR[2]) < uR && JR[1] > yR[1] && JR[1] < yR[1] + tR.height ? GR : null
```

#### 1035. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8253-L8255` → after: `L8112-L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8112-L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8112-L8114) · [Before (L8253-L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8253-L8255)

```diff
-           Hx: mW
-         } = this, EW = mW.camera.O4(mW.fiW(WW, null, this.localFrom), iW, OW);
-         return EW < OW - 1e-6 ? EW : null
+           xw: yR
+         } = this, tR = yR.camera.F_(yR.gGR(RR, null, this.localFrom), JR, GR);
+         return tR < GR - 1e-6 ? tR : null
```

#### 1036. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8268` → after: `L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8127) · [Before (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8268)

```diff
-         const EW = this.Hx.Kl(WW, iW, OW, mW);
+         const tR = this.xw.Ur(RR, JR, GR, yR);
```

#### 1037. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8272` → after: `L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8131) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8272)

```diff
-         return (0, Zt.x)(this.Hx.TZ.o4().fov)
+         return (0, wV.y)(this.xw.lK.Z2().fov)
```

#### 1038. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8275` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8134) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8275)

```diff
-         return (0, Zt.x)((0, kt.getSettingsFov)())
+         return (0, wV.y)((0, WV.getSettingsFov)())
```

#### 1039. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8278` → after: `L8137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8137) · [Before (L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8278)

```diff
-         return (0, st.l)(this.Hx.TZ.engine)
+         return (0, AV.n)(this.xw.lK.engine)
```

#### 1040. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8282` → after: `L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8141) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8282)

```diff
-           Hx: WW
+           xw: RR
```

#### 1041. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8286-L8288` → after: `L8145-L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8145-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8145-L8147) · [Before (L8286-L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8286-L8288)

```diff
-         if (OW.fov = this.getDefaultFov(), Pt.b.isCameraDetachedFromPlayer(WW)) return function(WW, iW) {
-           const OW = Pt.b.getPlayerFacingHeading(WW),
-             mW = Pt.b.getPlayerFacingPitch(WW),
+         if (GR.fov = this.getDefaultFov(), qV.e.isCameraDetachedFromPlayer(RR)) return function(RR, JR) {
+           const GR = qV.e.getPlayerFacingHeading(RR),
+             yR = qV.e.getPlayerFacingPitch(RR),
```

#### 1042. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8291` → after: `L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8150) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8291)

```diff
-           null !== EW && (WW.sF(Tt, iW.position), Yt(WW.camera, OW, mW, NW, Pt.b.getSavedRigShift(WW), iW.position)), Kt(WW.camera, OW, mW, NW, iW)
+           null !== tR && (RR.x_(pV, JR.position), BV(RR.camera, GR, yR, uR, qV.e.getSavedRigShift(RR), JR.position)), XV(RR.camera, GR, yR, uR, JR)
```

#### 1043. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8293-L8294` → after: `L8152-L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8152-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8152-L8153) · [Before (L8293-L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8293-L8294)

```diff
-         const mW = 0 !== iW.JG;
-         return kW().copy(OW.position, iW.Vk()), Yt(iW, iW.heading, iW.pitch, mW, WW.TZ.o4().f4, OW.position), Kt(iW, iW.heading, iW.pitch, mW, OW), OW
+         const yR = 0 !== JR.I6;
+         return UR().copy(GR.position, JR.vW()), BV(JR, JR.heading, JR.pitch, yR, RR.lK.Z2().y5, GR.position), XV(JR, JR.heading, JR.pitch, yR, GR), GR
```

#### 1044. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8297` → after: `L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8156) · [Before (L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8297)

```diff
-     var nt = OW(37840);
+     var OV = GR(37771);
```

#### 1045. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8300` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8159) · [Before (L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8300)

```diff
-         this.Hx = WW, this.oZ = iW, this.pointer = OW, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.xw = RR, this.NK = JR, this.pointer = GR, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 1046. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8314` → after: `L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8173) · [Before (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8314)

```diff
-         const mW = gt(this.Hx, this.eye);
+         const yR = cV(this.xw, this.eye);
```

#### 1047. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8318` → after: `L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8177) · [Before (L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8318)

```diff
-             LW = null === PW || PW <= Qw ? NW : PW;
+             qR = null === ZR || ZR <= RV ? uR : ZR;
```

#### 1048. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8320` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8179) · [Before (L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8320)

```diff
-         }(mW, OW, this.copyRay(), this.oZ.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(mW), !0
+         }(yR, GR, this.copyRay(), this.NK.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(yR), !0
```

#### 1049. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8324` → after: `L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8183) · [Before (L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8324)

```diff
-           Hx: OW
+           xw: GR
```

#### 1050. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8328` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8187) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8328)

```diff
-         if (iW && (0, nt.k)(this.screenPoint[1])) return;
+         if (JR && (0, OV.g)(this.screenPoint[1])) return;
```

#### 1051. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8338` → after: `L8197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8197) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8338)

```diff
-           if (null === PW || PW <= Qw) return (0, Fw.j)(OW, EW);
+           if (null === ZR || ZR <= RV) return (0, hf.i)(GR, tR);
```

#### 1052. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8341` → after: `L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8200) · [Before (L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8341)

```diff
-           if (LW < it) return (0, Fw.j)(OW, EW);
+           if (qR < GV) return (0, hf.i)(GR, tR);
```

#### 1053. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8343` → after: `L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8202) · [Before (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8343)

```diff
-         }(EW, WW, mW, this.oZ.pickCursorTarget, this.cursorAim), (0, Fw.j)(EW, NW.eye), (0, Fw.j)(WW, NW.camera), (0, Fw.j)(mW, NW.ray), this.msSincePick = 0), vt(OW, this.cursorAim, Pt.b.getPlayerFacingHeading(OW), Pt.b.getPlayerFacingPitch(OW))
+         }(tR, RR, yR, this.NK.pickCursorTarget, this.cursorAim), (0, hf.i)(tR, uR.eye), (0, hf.i)(RR, uR.camera), (0, hf.i)(yR, uR.ray), this.msSincePick = 0), oV(GR, this.cursorAim, qV.e.getPlayerFacingHeading(GR), qV.e.getPlayerFacingPitch(GR))
```

#### 1054. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8347` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8206) · [Before (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8347)

```diff
-           Hx: iW
+           xw: JR
```

#### 1055. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8355` → after: `L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8214) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8355)

```diff
-         })(WW, this.tapPoint, this.tapAim) && vt(iW, this.tapAim, Pt.b.getPlayerFacingHeading(iW), Pt.b.getPlayerFacingPitch(iW))
+         })(RR, this.tapPoint, this.tapAim) && oV(JR, this.tapAim, qV.e.getPlayerFacingHeading(JR), qV.e.getPlayerFacingPitch(JR))
```

#### 1056. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8359` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8218) · [Before (L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8359)

```diff
-           Hx: WW
+           xw: RR
```

#### 1057. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8380` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8239) · [Before (L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8380)

```diff
-         }(iW.heading + iW.bj[1], iW.pitch + iW.bj[0], iW.lZ + iW.bj[2], WW.TZ.o4().fov, this.oZ.getAspectRatio(), OW, mW, this.ray)
+         }(JR.heading + JR.nL[1], JR.pitch + JR.nL[0], JR.rK + JR.nL[2], RR.lK.Z2().fov, this.NK.getAspectRatio(), GR, yR, this.ray)
```

#### 1058. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8394` → after: `L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8253) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8394)

```diff
-       et.heading = OW, et.pitch = mW, (0, lt.m)(iW, et), Pt.b.setPlayerFacing(WW, et.heading, et.pitch)
+       HV.heading = GR, HV.pitch = yR, (0, eV.o)(JR, HV), qV.e.setPlayerFacing(RR, HV.heading, HV.pitch)
```

#### 1059. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8398` → after: `L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8257) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8398)

```diff
-       return kW().copy(iW, WW.bloxd.getLifeformEyePos(WW.Dv, !1))
+       return UR().copy(JR, RR.bloxd.getLifeformEyePos(RR.WH, !1))
```

#### 1060. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8400` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8259) · [Before (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8400)

```diff
-     var Dt = OW(40442);
+     var PV = GR(40491);
```

#### 1061. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8413-L8416` → after: `L8272-L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8272-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8272-L8275) · [Before (L8413-L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8413-L8416)

```diff
-         if (mW) return this.pointedAt.heading = WW, this.pointedAt.pitch = iW, this.heading = (0, At.b)(this.heading, 0, 0, this.pointedAt, OW, EW), EW;
-         if (!this.hasWritten) return EW.jH = 0, EW.UH = 0, EW.pointedAt = void 0, EW;
-         const NW = (0, lt.y)(this.writtenHeading, WW);
-         return this.heading = (0, At.b)(this.heading, NW, iW - this.writtenPitch, void 0, OW, EW), EW
+         if (yR) return this.pointedAt.heading = RR, this.pointedAt.pitch = JR, this.heading = (0, aV.c)(this.heading, 0, 0, this.pointedAt, GR, tR), tR;
+         if (!this.hasWritten) return tR.bD = 0, tR.PD = 0, tR.pointedAt = void 0, tR;
+         const uR = (0, eV.x)(this.writtenHeading, RR);
+         return this.heading = (0, aV.c)(this.heading, uR, JR - this.writtenPitch, void 0, GR, tR), tR
```

#### 1062. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8439` → after: `L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8298) · [Before (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8439)

```diff
-         tW = null !== wW && wW > Qw ? wW : Math.max(Qw, cW);
+         VR = null !== fR && fR > RV ? fR : Math.max(RV, iR);
```

#### 1063. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8448-L8449` → after: `L8307-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8307-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8307-L8308) · [Before (L8448-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8448-L8449)

```diff
-         EW = Math.max(-mW, Math.min(mW, (0, lt.y)(WW, iW)));
-       return (0, lt.w)(WW + EW)
+         tR = Math.max(-yR, Math.min(yR, (0, eV.x)(RR, JR)));
+       return (0, eV.v)(RR + tR)
```

#### 1064. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8453-L8457` → after: `L8312-L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8312-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8312-L8316) · [Before (L8453-L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8453-L8457)

```diff
-         this.Hx = WW, this.cameraController = iW, this.freeCameraController = OW, this.cursor = mW, this.oZ = void 0, this.director = void 0, this.view = new pt, this.look = {
-           jH: 0,
-           UH: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.biW = [0, 0, 0], this.jiW = [0, 0, 0], this.rayDirection = [0, 0, 0], this.hiddenWatched = null, this.cameraPosition = [0,  … [truncated]
-         const PW = cc.d.subscribe("gameCamera", (WW => {
+         this.xw = RR, this.cameraController = JR, this.freeCameraController = GR, this.cursor = yR, this.NK = void 0, this.director = void 0, this.view = new mV, this.look = {
+           bD: 0,
+           PD: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.GGR = [0, 0, 0], this.yGR = [0, 0, 0], this.rayDirection = [0, 0, 0], this.hiddenWatched = null, this.cameraPosition = [0,  … [truncated]
+         const ZR = Zi.c.subscribe("gameCamera", (RR => {
```

#### 1065. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8473` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8332) · [Before (L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8473)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && WW.oZ.JOW([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && RR.NK.ryR([])
```

#### 1066. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8475-L8476` → after: `L8334-L8335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8334-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8334-L8335) · [Before (L8475-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8475-L8476)

```diff
-         WW.on("hZ", tW), mW.listenForTaps(((iW, OW) => {
-           this.aimAtClientPoint(iW, OW), WW.miW()
+         RR.on("gK", VR), yR.listenForTaps(((JR, GR) => {
+           this.aimAtClientPoint(JR, GR), RR.SJR()
```

#### 1067. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8478` → after: `L8337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8337) · [Before (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8478)

```diff
-         const ZW = jW.l.subscribe("localPlayerTeleported", (WW => {
+         const KR = LR.n.subscribe("localPlayerTeleported", (RR => {
```

#### 1068. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8485` → after: `L8344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8344) · [Before (L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8485)

```diff
-           PW(), mW.listenForTaps(null), jW.l.unsubscribe(ZW), WW.off("beforeRender", LW), WW.off("afterRender", cW), WW.off("beforePhysicsTick", wW), WW.off("hZ", tW), this.release({
+           ZR(), yR.listenForTaps(null), LR.n.unsubscribe(KR), RR.off("beforeRender", qR), RR.off("afterRender", iR), RR.off("beforePhysicsTick", fR), RR.off("gK", VR), this.release({
```

#### 1069. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8487` → after: `L8346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8346) · [Before (L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8487)

```diff
-           }), this.screen.clear(), WW.oZ.JOW([]), this.hideWatched(null)
+           }), this.screen.clear(), RR.NK.ryR([]), this.hideWatched(null)
```

#### 1070. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8497` → after: `L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8356) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8497)

```diff
-         const iW = (0, At.e)(WW);
+         const JR = (0, aV.d)(RR);
```

#### 1071. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8511` → after: `L8370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8370) · [Before (L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8511)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (iW = this.Hx.bloxd.client) && void 0 !== iW && iW.isReplayMode()) return this.Hx.oZ.JOW([]), this.hideWatched(null), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (JR = this.xw.bloxd.client) && void 0 !== JR && JR.isReplayMode()) return this.xw.NK.ryR([]), this.hideWatched(null), this.yieldToReplay(), void this.screen.clear();
```

#### 1072. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8514-L8517` → after: `L8373-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8373-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8373-L8376) · [Before (L8514-L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8514-L8517)

```diff
-         } = this.Hx;
-         this.detached || this.view.followBody(Pt.b.getPlayerFacingHeading(this.Hx));
-         const mW = Pt.b.takeLookPointed(this.Hx);
-         null !== OW.xI || null !== OW.mI || null === this.mouseTurns && !mW ? (this.look.jH = 0, this.look.UH = 0, this.look.pointedAt = void 0) : this.view.readLook(OW.heading, OW.pitch, "look" === this.mouseTurns, mW, this.look);
+         } = this.xw;
+         this.detached || this.view.followBody(qV.e.getPlayerFacingHeading(this.xw));
+         const yR = qV.e.takeLookPointed(this.xw);
+         null !== GR.L_ || null !== GR.e_ || null === this.mouseTurns && !yR ? (this.look.bD = 0, this.look.PD = 0, this.look.pointedAt = void 0) : this.view.readLook(GR.heading, GR.pitch, "look" === this.mouseTurns, yR, this.look);
```

#### 1073. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8519` → after: `L8378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8378) · [Before (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8519)

```diff
-         if (this.Hx.oZ.JOW(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !EW) return this.hideWatched(null), void this.release();
+         if (this.xw.NK.ryR(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !tR) return this.hideWatched(null), void this.release();
```

#### 1074. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8523` → after: `L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8382) · [Before (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8523)

```diff
-         "movement" !== this.facing || NW || this.turnBodyTowardsMovement(WW), this.cursorAim.hZ(WW), this.applyPose(EW)
+         "movement" !== this.facing || uR || this.turnBodyTowardsMovement(RR), this.cursorAim.gK(RR), this.applyPose(tR)
```

#### 1075. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8529` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8388) · [Before (L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8529)

```diff
-         return !Pt.b.isCameraDetachedFromPlayer(this.Hx) && (this.setControlsLocked(!0), Pt.b.detachCamera(this.Hx, {
+         return !qV.e.isCameraDetachedFromPlayer(this.xw) && (this.setControlsLocked(!0), qV.e.detachCamera(this.xw, {
```

#### 1076. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8531` → after: `L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8390) · [Before (L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8531)

```diff
-         }) ? (this.detached = !0, this.Hx.lU = this.Hx.bloxd.getBlockReach(this.Hx.Dv), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.xw.Ln = this.xw.bloxd.getBlockReach(this.xw.WH), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 1077. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8537` → after: `L8396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8396) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8537)

```diff
-           Hx: OW
+           xw: GR
```

#### 1078. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8540-L8541` → after: `L8399-L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8399-L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8399-L8400) · [Before (L8540-L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8540-L8541)

```diff
-         } = OW, EW = Pt.b.getPlayerFacingHeading(OW), NW = Pt.b.getPlayerFacingPitch(OW), PW = null !== (iW = Jt(OW, EW, NW, this.reattachedPosition)) && void 0 !== iW ? iW : Pt.b.getSavedZoomDistance(OW);
-         this.giveUpView(), Pt.b.reattachCamera(OW), mW.JG = PW, mW.heading = EW, mW.pitch = NW, mW.K8(), (0, bc.p)(OW), this.setControlsLocked(!1, WW)
+         } = GR, tR = qV.e.getPlayerFacingHeading(GR), uR = qV.e.getPlayerFacingPitch(GR), ZR = null !== (JR = gV(GR, tR, uR, this.reattachedPosition)) && void 0 !== JR ? JR : qV.e.getSavedZoomDistance(GR);
+         this.giveUpView(), qV.e.reattachCamera(GR), yR.I6 = ZR, yR.heading = tR, yR.pitch = uR, yR.k_(), (0, ri.p)(GR), this.setControlsLocked(!1, RR)
```

#### 1079. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8546` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8405) · [Before (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8546)

```diff
-           PW = "follow" === NW.mode && "eye" === NW.anchor && null !== (iW = NW.target) && void 0 !== iW ? iW : null;
+           ZR = "follow" === uR.mode && "eye" === uR.anchor && null !== (JR = uR.target) && void 0 !== JR ? JR : null;
```

#### 1080. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8549` → after: `L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8408) · [Before (L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8549)

```diff
-           for (const tW of [PW, null !== (cW = null === (wW = this.hiddenWatched) || void 0 === wW ? void 0 : wW.eId) && void 0 !== cW ? cW : null]) {
+           for (const VR of [ZR, null !== (iR = null === (fR = this.hiddenWatched) || void 0 === fR ? void 0 : fR.eId) && void 0 !== iR ? iR : null]) {
```

#### 1081. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8551` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8410) · [Before (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8551)

```diff
-             const iW = null === tW ? null : this.oZ.getPlayerHolding(tW, WW);
+             const JR = null === VR ? null : this.NK.getPlayerHolding(VR, RR);
```

#### 1082. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8560` → after: `L8419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8419) · [Before (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8560)

```diff
-         null !== this.hiddenWatched && this.hiddenWatched.noaId !== (null === (OW = LW) || void 0 === OW ? void 0 : OW.noaId) && (0, bt.setCameraForceHidden)(this.Hx, this.hiddenWatched.noaId, !1), this.hiddenWatched = LW, this.oZ.cameraHiddenPlayer = null !== (mW = null === (EW  … [truncated]
+         null !== this.hiddenWatched && this.hiddenWatched.noaId !== (null === (GR = qR) || void 0 === GR ? void 0 : GR.noaId) && (0, LV.setCameraForceHidden)(this.xw, this.hiddenWatched.noaId, !1), this.hiddenWatched = qR, this.NK.cameraHiddenPlayer = null !== (yR = null === (tR  … [truncated]
```

#### 1083. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8563` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8422) · [Before (L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8563)

```diff
-         this.detached && (this.giveUpView(), Pt.b.setFacingMode(this.Hx, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), qV.e.setFacingMode(this.xw, "frozen"), this.setControlsLocked(!1, {
```

#### 1084. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8568` → after: `L8427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8427) · [Before (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8568)

```diff
-         this.detached = !1, this.Hx.biW = null, this.Hx.jiW = null, this.publishView()
+         this.detached = !1, this.xw.GGR = null, this.xw.yGR = null, this.publishView()
```

#### 1085. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8579-L8582` → after: `L8438-L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8438-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8438-L8441) · [Before (L8579-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8579-L8582)

```diff
-           Hx: OW
-         } = this, mW = OW.EY.aiW(OW.Dv);
-         let EW = Pt.b.getPlayerFacingHeading(OW);
-         const NW = null !== (iW = mW.ridingVehicleEId) && void 0 !== iW ? iW : null;
+           xw: GR
+         } = this, yR = GR.zC.oGR(GR.WH);
+         let tR = qV.e.getPlayerFacingHeading(GR);
+         const uR = null !== (JR = yR.ridingVehicleEId) && void 0 !== JR ? JR : null;
```

#### 1086. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8584-L8585` → after: `L8443-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8443-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8443-L8444) · [Before (L8584-L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8584-L8585)

```diff
-             if (!(0, jt.b)(WW, iW)) return !0;
-             const OW = WW.bloxd.getResolvedPhysicsSettings(WW.Dv, WW.EY.HiW(WW.Dv).physicsState);
+             if (!(0, nV.c)(RR, JR)) return !0;
+             const GR = RR.bloxd.getResolvedPhysicsSettings(RR.WH, RR.zC.aGR(RR.WH).physicsState);
```

#### 1087. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8593` → after: `L8452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8452) · [Before (L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8593)

```diff
-         Pt.b.setPlayerFacing(OW, EW, (LW = Pt.b.getPlayerFacingPitch(OW), cW = WW, LW * Math.max(0, 1 - cW / 1e3 * 8)))
+         qV.e.setPlayerFacing(GR, tR, (qR = qV.e.getPlayerFacingPitch(GR), iR = RR, qR * Math.max(0, 1 - iR / 1e3 * 8)))
```

#### 1088. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8597` → after: `L8456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8456) · [Before (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8597)

```diff
-           Hx: iW
+           xw: JR
```

#### 1089. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8601` → after: `L8460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8460) · [Before (L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8601)

```diff
-         iW.EY.setPosition(OW.lG, WW.position), OW.heading = (0, lt.w)(WW.heading), OW.pitch = (0, lt.g)(WW.pitch), OW.K8(), (0, bc.p)(iW), iW.TZ.o4().fov = (0, Zt.i)(WW.fov), this.view.noteWritten(OW.heading, OW.pitch), (0, Fw.j)(WW.position, this.cameraPosition), "camera" === th … [truncated]
+         JR.zC.setPosition(GR.R6, RR.position), GR.heading = (0, eV.v)(RR.heading), GR.pitch = (0, eV.h)(RR.pitch), GR.k_(), (0, ri.p)(JR), JR.lK.Z2().fov = (0, wV.g)(RR.fov), this.view.noteWritten(GR.heading, GR.pitch), (0, hf.i)(RR.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1090. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8605` → after: `L8464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8464) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8605)

```diff
-           Hx: iW
+           xw: JR
```

#### 1091. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8609` → after: `L8468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8468) · [Before (L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8609)

```diff
-         Ct(gt(iW, this.eye), WW, (0, lt.f)(OW.heading, OW.pitch, this.rayDirection), iW.lU, this.oZ.pickTargetedBlock, this.aim), vt(iW, this.aim, OW.heading, OW.pitch)
+         SV(cV(JR, this.eye), RR, (0, eV.e)(GR.heading, GR.pitch, this.rayDirection), JR.Ln, this.NK.pickTargetedBlock, this.aim), oV(JR, this.aim, GR.heading, GR.pitch)
```

#### 1092. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8613` → after: `L8472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8472) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8613)

```diff
-           Hx: WW
+           xw: RR
```

#### 1093. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8615` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8474) · [Before (L8615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8615)

```diff
-         WW.biW = WW.fiW(gt(WW, this.eye), null, this.biW), WW.jiW = Pt.b.copyPlayerFacingDirection(WW, this.jiW)
+         RR.GGR = RR.gGR(cV(RR, this.eye), null, this.GGR), RR.yGR = qV.e.copyPlayerFacingDirection(RR, this.yGR)
```

#### 1094. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8618` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8477) · [Before (L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8618)

```diff
-     var qt = OW(35056);
+     var EV = GR(34957);
```

#### 1095. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8625` → after: `L8484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8484) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8625)

```diff
-       return null !== (OW = null !== (mW = WW.inclination) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.inclination) && void 0 !== OW ? OW : -.2
+       return null !== (GR = null !== (yR = RR.inclination) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.inclination) && void 0 !== GR ? GR : -.2
```

#### 1096. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8631` → after: `L8490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8490) · [Before (L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8631)

```diff
-         return null !== (OW = null !== (mW = WW.useSunPosition) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.useSunPosition) && void 0 !== OW ? OW : Gt
+         return null !== (GR = null !== (yR = RR.useSunPosition) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.useSunPosition) && void 0 !== GR ? GR : kV
```

#### 1097. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8636-L8637` → after: `L8495-L8496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8495-L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8495-L8496) · [Before (L8636-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8636-L8637)

```diff
-           return null !== (OW = null !== (mW = WW.sunPosition) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.sunPosition) && void 0 !== OW ? OW : It
-         }(WW, iW), PW = new rW.fA(mW, EW, NW);
+           return null !== (GR = null !== (yR = RR.sunPosition) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.sunPosition) && void 0 !== GR ? GR : QV
+         }(RR, JR), ZR = new FR.Fe(yR, tR, uR);
```

#### 1098. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8650` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8509) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8650)

```diff
-       const EW = null !== OW && void 0 !== OW ? OW : rt(WW, iW),
+       const tR = null !== GR && void 0 !== GR ? GR : FV(RR, JR),
```

#### 1099. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8653` → after: `L8512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8512) · [Before (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8653)

```diff
-           return null !== (OW = null !== (mW = WW.azimuth) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.azimuth) && void 0 !== OW ? OW : .55
+           return null !== (GR = null !== (yR = RR.azimuth) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.azimuth) && void 0 !== GR ? GR : .55
```

#### 1100. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8657` → after: `L8516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8516) · [Before (L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8657)

```diff
-           return null !== (OW = null !== (mW = WW.up) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.up) && void 0 !== OW ? OW : Rt
+           return null !== (GR = null !== (yR = RR.up) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.up) && void 0 !== GR ? GR : YV
```

#### 1101. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8661-L8662` → after: `L8520-L8521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8520-L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8520-L8521) · [Before (L8661-L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8661-L8662)

```diff
-         wW = new rW.fA(Math.cos(cW) * Math.cos(LW), Math.sin(-LW), Math.sin(cW) * Math.cos(LW)),
-         tW = new rW.fA(PW[0], PW[1], PW[2]),
+         fR = new FR.Fe(Math.cos(iR) * Math.cos(qR), Math.sin(-qR), Math.sin(iR) * Math.cos(qR)),
+         VR = new FR.Fe(ZR[0], ZR[1], ZR[2]),
```

#### 1102. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8664-L8665` → after: `L8523-L8524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8523-L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8523-L8524) · [Before (L8664-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8664-L8665)

```diff
-       rW.Quaternion.FromUnitVectorsToRef(rW.fA.UpReadOnly, tW, ZW);
-       const xW = new rW.fA;
+       FR.Quaternion.FromUnitVectorsToRef(FR.Fe.UpReadOnly, VR, KR);
+       const wR = new FR.Fe;
```

#### 1103. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8691-L8694` → after: `L8550-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8550-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8550-L8553) · [Before (L8691-L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8691-L8694)

```diff
-         this.Hx = WW, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const iW = this.Hx.gM.skyBox;
-         "object" === typeof iW && "earth" === iW.type && (this.earthSkyBox = iW), this.sunOpacity = this.Hx.gM.dayNightSunOpacity, this.moonOpacity = this.Hx.gM.dayNightMoonOpacity;
-         const OW = cc.d.subscribe("dayNightSunOpacity", (WW => {
+         this.xw = RR, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const JR = this.xw.jW.skyBox;
+         "object" === typeof JR && "earth" === JR.type && (this.earthSkyBox = JR), this.sunOpacity = this.xw.jW.dayNightSunOpacity, this.moonOpacity = this.xw.jW.dayNightMoonOpacity;
+         const GR = Zi.c.subscribe("dayNightSunOpacity", (RR => {
```

#### 1104. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8697` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8556) · [Before (L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8697)

```diff
-           mW = cc.d.subscribe("dayNightMoonOpacity", (WW => {
+           yR = Zi.c.subscribe("dayNightMoonOpacity", (RR => {
```

#### 1105. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8700` → after: `L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8559) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8700)

```diff
-           EW = cc.d.subscribe("dayNightStarOpacity", (WW => {
+           tR = Zi.c.subscribe("dayNightStarOpacity", (RR => {
```

#### 1106. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8703` → after: `L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8562) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8703)

```diff
-           NW = cc.d.subscribe("skyBox", (WW => {
+           uR = Zi.c.subscribe("skyBox", (RR => {
```

#### 1107. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8708` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8567) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8708)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.Hx.gM.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.xw.jW.dayNightStarOpacity)
```

#### 1108. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8710` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8569) · [Before (L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8710)

```diff
-       yOW() {
+       KyR() {
```

#### 1109. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8720` → after: `L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8579) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8720)

```diff
-         "object" === typeof WW && "earth" === WW.type ? this.earthSkyBox = WW : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof RR && "earth" === RR.type ? this.earthSkyBox = RR : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1110. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8735-L8736` → after: `L8594-L8595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8594-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8594-L8595) · [Before (L8735-L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8735-L8736)

```diff
-         null === WW && (null === (OW = this.sunMesh) || void 0 === OW || OW.WK(!1));
-         null === iW && (null === (mW = this.moonMesh) || void 0 === mW || mW.WK(!1));
+         null === RR && (null === (GR = this.sunMesh) || void 0 === GR || GR.JA(!1));
+         null === JR && (null === (yR = this.moonMesh) || void 0 === yR || yR.JA(!1));
```

#### 1111. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8739` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8598) · [Before (L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8739)

```diff
-         }), this.sunMesh.WK(!0)), null !== iW && ((0, qW.c)(this.moonMat, {
+         }), this.sunMesh.JA(!0)), null !== JR && ((0, dR.c)(this.moonMat, {
```

#### 1112. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8741` → after: `L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8600) · [Before (L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8741)

```diff
-         }), this.moonMesh.WK(!0)))
+         }), this.moonMesh.JA(!0)))
```

#### 1113. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8747` → after: `L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8606) · [Before (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8747)

```diff
-         }), this.starsMesh.WK(!0)) : null === (iW = this.starsMesh) || void 0 === iW || iW.WK(!1)
+         }), this.starsMesh.JA(!0)) : null === (JR = this.starsMesh) || void 0 === JR || JR.JA(!1)
```

#### 1114. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8752-L8754` → after: `L8611-L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8611-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8611-L8613) · [Before (L8752-L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8752-L8754)

```diff
-           TZ: WW
-         } = this.Hx, {
-           rb: iW
+           lK: RR
+         } = this.xw, {
+           tL: JR
```

#### 1115. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8756-L8757` → after: `L8615-L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8615-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8615-L8616) · [Before (L8756-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8756-L8757)

```diff
-         this.starsMesh = (0, sW.r)(WW, "dayNightStars", (0, KW.g)());
-         const OW = qt.e.map((WW => qt.i + WW)),
+         this.starsMesh = (0, WR.m)(RR, "dayNightStars", (0, CR.l)());
+         const GR = EV.f.map((RR => EV.h + RR)),
```

#### 1116. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8759` → after: `L8618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8618) · [Before (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8759)

```diff
-             rootUrl: qt.i,
+             rootUrl: EV.h,
```

#### 1117. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8763` → after: `L8622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8622) · [Before (L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8763)

```diff
-             samplingMode: MW.k.nearest
+             samplingMode: AR.f.nearest
```

#### 1118. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8765` → after: `L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8624) · [Before (L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8765)

```diff
-           EW = (0, MW.p)(iW, mW),
+           tR = (0, AR.o)(JR, yR),
```

#### 1119. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8769-L8770` → after: `L8628-L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8628-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8628-L8629) · [Before (L8769-L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8769-L8770)

```diff
-             alphaMode: JW.b.add,
-             transparencyMode: JW.n.alphaBlend
+             alphaMode: pR.e.add,
+             transparencyMode: pR.v.alphaBlend
```

#### 1120. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8774` → after: `L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8633) · [Before (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8774)

```diff
-           rb: iW,
+           tL: JR,
```

#### 1121. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8777-L8778` → after: `L8636-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8636-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8636-L8637) · [Before (L8777-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8777-L8778)

```diff
-         const PW = yW.e.BILLBOARDMODE_ALL | yW.e.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, sW.r)(WW, "dayNightSun", (0, KW.f)({
+         const ZR = BR.d.BILLBOARDMODE_ALL | BR.d.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, WR.m)(RR, "dayNightSun", (0, CR.k)({
```

#### 1122. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8781` → after: `L8640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8640) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8781)

```diff
-         })), this.sunMat = iZ(iW, "dayNightSun", qt.l), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = PW, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, sW.r)(WW, "dayNightMoon", (0, KW.f)({
+         })), this.sunMat = JK(JR, "dayNightSun", EV.k), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = ZR, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, WR.m)(RR, "dayNightMoon", (0, CR.k)({
```

#### 1123. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8784` → after: `L8643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8643) · [Before (L8784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8784)

```diff
-         })), this.moonMat = iZ(iW, "dayNightMoon", qt.c), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = PW, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.WK(!1), this.sunMesh.WK(!1), this.moonMesh.WK(!1)
+         })), this.moonMat = JK(JR, "dayNightMoon", EV.b), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = ZR, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.JA(!1), this.sunMesh.JA(!1), this.moonMesh.JA(!1)
```

#### 1124. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8787` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8646) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8787)

```diff
-         WW.infiniteDistance = !0, WW.renderingGroupId = -1, WW.Fb = !1, WW.pA = !0, WW.XA = !0, WW.applyFog = !1, this.Hx.TZ.Wj(WW, !1, this.Hx.Wl, !1)
+         RR.infiniteDistance = !0, RR.renderingGroupId = -1, RR.ZL = !1, RR.Qe = !0, RR.se = !0, RR.applyFog = !1, this.xw.lK.iL(RR, !1, this.xw.Fw, !1)
```

#### 1125. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8793-L8796` → after: `L8652-L8655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8652-L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8652-L8655) · [Before (L8793-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8793-L8796)

```diff
-           TZ: WW
-         } = this.Hx, iW = .8 * WW.o4().far, OW = function() {
-           const WW = bW.d.getSkyBox("default");
-           return "earth" === (null === WW || void 0 === WW ? void 0 : WW.type) ? WW : void 0
+           lK: RR
+         } = this.xw, JR = .8 * RR.Z2().far, GR = function() {
+           const RR = aR.b.getSkyBox("default");
+           return "earth" === (null === RR || void 0 === RR ? void 0 : RR.type) ? RR : void 0
```

#### 1126. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8798` → after: `L8657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8657) · [Before (L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8798)

```diff
-         (0, nW.q)(this.sunMesh, mW.x * iW, mW.y * iW, mW.z * iW);
+         (0, vR.i)(this.sunMesh, yR.x * JR, yR.y * JR, yR.z * JR);
```

#### 1127. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8801` → after: `L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8660) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8801)

```diff
-         (0, nW.q)(this.moonMesh, NW.x * iW, NW.y * iW, NW.z * iW)
+         (0, vR.i)(this.moonMesh, uR.x * JR, uR.y * JR, uR.z * JR)
```

#### 1128. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8806-L8807` → after: `L8665-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8665-L8666) · [Before (L8806-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8806-L8807)

```diff
-           TZ: WW
-         } = this.Hx, {
+           lK: RR
+         } = this.xw, {
```

#### 1129. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8809-L8810` → after: `L8668-L8669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8668-L8669) · [Before (L8809-L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8809-L8810)

```diff
-         } = WW.o4(), OW = .95 * iW;
-         this.starsMesh.YZ.set(OW, OW, OW);
+         } = RR.Z2(), GR = .95 * JR;
+         this.starsMesh.MK.set(GR, GR, GR);
```

#### 1130. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8813` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8672) · [Before (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8813)

```diff
-         this.sunMesh.YZ.set(EW, EW, EW);
+         this.sunMesh.MK.set(tR, tR, tR);
```

#### 1131. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8815` → after: `L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8674) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8815)

```diff
-         this.moonMesh.YZ.set(NW, NW, NW)
+         this.moonMesh.MK.set(uR, uR, uR)
```

#### 1132. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8828` → after: `L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8687) · [Before (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8828)

```diff
-         samplingMode: MW.k.nearest,
+         samplingMode: AR.f.nearest,
```

#### 1133. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8835` → after: `L8694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8694) · [Before (L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8835)

```diff
-         rb: WW,
+         tL: RR,
```

#### 1134. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8844-L8855` → after: `L8703-L8714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8703-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8703-L8714) · [Before (L8844-L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8844-L8855)

```diff
-     var OZ = OW(2937),
-       mZ = OW(39088),
-       EZ = OW(38450),
-       NZ = OW(38691),
-       PZ = OW(38511),
-       LZ = OW(805),
-       cZ = OW(3831),
-       wZ = OW(4970),
-       tZ = OW(119),
-       ZZ = OW(299),
-       xZ = OW(315),
-       lZ = OW(40448);
+     var GK = GR(3017),
+       yK = GR(39062),
+       tK = GR(38414),
+       uK = GR(38675),
+       ZK = GR(38475),
+       qK = GR(858),
+       iK = GR(3933),
+       fK = GR(5064),
+       VK = GR(123),
+       KK = GR(327),
+       wK = GR(342),
+       rK = GR(40495);
```

#### 1135. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8859` → after: `L8718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8718) · [Before (L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8859)

```diff
-       return (0, xZ.l)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+       return (0, wK.j)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
```

#### 1136. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8863` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8722) · [Before (L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8863)

```diff
-       return `${WW.getMode()}|${WW.qb()}`
+       return `${RR.getMode()}|${RR.sa()}`
```

#### 1137. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8867` → after: `L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8726) · [Before (L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8867)

```diff
-       console.error(`Shader pack failed to compile for "${WW.failure.material}":`, WW.failure.message)
+       console.error(`Shader pack failed to compile for "${RR.failure.material}":`, RR.failure.message)
```

#### 1138. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8871` → after: `L8730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8730) · [Before (L8871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8871)

```diff
-         this.page = WW, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, jW.l.subscribe(AZ, (WW => {
+         this.page = RR, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, LR.n.subscribe(eK, (RR => {
```

#### 1139. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8877` → after: `L8736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8736) · [Before (L8877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8877)

```diff
-           iW === this.game && this.inGame && jW.l.iZ("chat", (0, wZ.j)(OW, mW))
+           JR === this.game && this.inGame && LR.n.JK("chat", (0, fK.f)(GR, yR))
```

#### 1140. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8885` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8744) · [Before (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8885)

```diff
-         if ((0, LL.t)("webgpuloss")) {
+         if ((0, uq.n)("webgpuloss")) {
```

#### 1141. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8887` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8746) · [Before (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8887)

```diff
-             status: "uW"
+             status: "xR"
```

#### 1142. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8892-L8894` → after: `L8751-L8753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8751-L8753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8751-L8753) · [Before (L8892-L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8892-L8894)

```diff
-           status: "uW"
-         } : (jW.l.iZ("matchmakeAndPlayStepCompleted", {
-           step: si.k.SHADER_PACK,
+           status: "xR"
+         } : (LR.n.JK("matchmakeAndPlayStepCompleted", {
+           step: WJ.j.SHADER_PACK,
```

#### 1143. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8896` → after: `L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8755) · [Before (L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8896)

```diff
-         }), "ok" === NW.status && (this.inGame = !0, void 0 !== NW.couldntRun && this.notify(wZ.e, NW.couldntRun), WW && !WW.isRunning() && this.notify("shaderPack:offInThisGame"), WW && this.failedModelCode.has(WW.defineFor("model")) && this.notifyModelFallback(), this.recheck(W … [truncated]
+         }), "ok" === uR.status && (this.inGame = !0, void 0 !== uR.couldntRun && this.notify(fK.c, uR.couldntRun), RR && !RR.isRunning() && this.notify("shaderPack:offInThisGame"), RR && this.failedModelCode.has(RR.defineFor("model")) && this.notifyModelFallback(), this.recheck(R … [truncated]
```

#### 1144. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8921-L8922` → after: `L8780-L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8780-L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8780-L8781) · [Before (L8921-L8922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8921-L8922)

```diff
-           const cW = null !== (PW = null !== NW && void 0 !== NW ? NW : null === EW || void 0 === EW ? void 0 : EW.message) && void 0 !== PW ? PW : EW,
-             wW = () => LW.packVariant === WW.defineFor(LW.program) && ("model" === LW.program || LW.lighting === WW.qb());
+           const iR = null !== (ZR = null !== uR && void 0 !== uR ? uR : null === tR || void 0 === tR ? void 0 : tR.message) && void 0 !== ZR ? ZR : tR,
+             fR = () => qR.packVariant === RR.defineFor(qR.program) && ("model" === qR.program || qR.lighting === RR.sa());
```

#### 1145. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8924` → after: `L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8783) · [Before (L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8924)

```diff
-             OW || (this.failedModelCode.add(LW.packVariant), this.inGame && wW() && (console.error(`Shader pack program ${mW} failed in game, so its models are drawn without the pack:`, cW), this.notifyModelFallback()))
+             GR || (this.failedModelCode.add(qR.packVariant), this.inGame && fR() && (console.error(`Shader pack program ${yR} failed in game, so its models are drawn without the pack:`, iR), this.notifyModelFallback()))
```

#### 1146. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8930` → after: `L8789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8789) · [Before (L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8930)

```diff
-               console.error(`Shader pack program ${mW} failed in game:`, cW)
+               console.error(`Shader pack program ${yR} failed in game:`, iR)
```

#### 1147. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8956` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8815) · [Before (L8956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8956)

```diff
-         const NW = null !== (mW = (0, lZ.harnessShaderPackMode)()) && void 0 !== mW ? mW : (0, LZ.k)(iW);
+         const uR = null !== (yR = (0, rK.harnessShaderPackMode)()) && void 0 !== yR ? yR : (0, qK.h)(JR);
```

#### 1148. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8958` → after: `L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8817) · [Before (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8958)

```diff
-           if ((0, aN.j)(EW.variants, NW)) {
+           if ((0, Yu.i)(tR.variants, uR)) {
```

#### 1149. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8970` → after: `L8829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8829) · [Before (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8970)

```diff
-           if (!(0, aN.j)(EW.pack.variants, NW)) return {
+           if (!(0, Yu.i)(tR.pack.variants, uR)) return {
```

#### 1150. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8977-L8978` → after: `L8836-L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8836-L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8836-L8837) · [Before (L8977-L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8977-L8978)

```diff
-               const WW = (0, cZ.g)();
-               if ("default" === (null === WW || void 0 === WW ? void 0 : WW.source)) return (0, xZ.l)() && !(0, ZZ.e)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
+               const RR = (0, iK.j)();
+               if ("default" === (null === RR || void 0 === RR ? void 0 : RR.source)) return (0, wK.j)() && !(0, KK.d)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
```

#### 1151. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8980-L8982` → after: `L8839-L8841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8839-L8841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8839-L8841) · [Before (L8980-L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8980-L8982)

```diff
-               return !0 === (null === iW || void 0 === iW ? void 0 : iW.endsWith(tZ.c)) || !0 === (null === iW || void 0 === iW ? void 0 : iW.endsWith(ZZ.b)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== PW ? PW : function() {
-               const WW = (0, cZ.g)();
+               return !0 === (null === JR || void 0 === JR ? void 0 : JR.endsWith(VK.c)) || !0 === (null === JR || void 0 === JR ? void 0 : JR.endsWith(KK.c)) ? "shaderPack:failedNoWebGpu" : null
+             }()) && void 0 !== ZR ? ZR : function() {
+               const RR = (0, iK.j)();
```

#### 1152. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8996-L8997` → after: `L8855-L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8855-L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8855-L8856) · [Before (L8996-L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L8996-L8997)

```diff
-         return "uW" === cW.status ? {
-           status: "uW"
+         return "xR" === iR.status ? {
+           status: "xR"
```

#### 1153. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9029` → after: `L8888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8888) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9029)

```diff
-               message: `The check failed: ${mW instanceof Error?mW.message:String(mW)}`
+               message: `The check failed: ${yR instanceof Error?yR.message:String(yR)}`
```

#### 1154. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9046` → after: `L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8905) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9046)

```diff
-         this.lastPassedCheck = null, this.endGame(), jW.l.iZ(wZ.f, "shaderPack:failedToCompile")
+         this.lastPassedCheck = null, this.endGame(), LR.n.JK(fK.d, "shaderPack:failedToCompile")
```

#### 1155. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9057` → after: `L8916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8916) · [Before (L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9057)

```diff
-         jW.l.iZ(AZ, OW, !0)
+         LR.n.JK(eK, GR, !0)
```

#### 1156. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9060-L9061` → after: `L8919-L8920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8919-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8919-L8920) · [Before (L9060-L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9060-L9061)

```diff
-     var sZ = OW(39967),
-       MZ = OW(40452);
+     var WK = GR(39964),
+       AK = GR(40498);
```

#### 1157. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9064` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8923) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9064)

```diff
-         this.Hx = WW, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new WZ(WW), this.setupSkyBox(), this.setupFog(), this.setupLighting()
+         this.xw = RR, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new RK(RR), this.setupSkyBox(), this.setupFog(), this.setupLighting()
```

#### 1158. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9067` → after: `L8926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8926) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9067)

```diff
-         const WW = cc.d.subscribe("skyBox", (WW => {
+         const RR = Zi.c.subscribe("skyBox", (RR => {
```

#### 1159. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9070-L9071` → after: `L8929-L8930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8929-L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8929-L8930) · [Before (L9070-L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9070-L9071)

```diff
-         this.Hx.TZ.yOW = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.yOW()
+         this.xw.lK.KyR = () => {
+           this.updateSkyboxSize(), this.dayAndNightSky.KyR()
```

#### 1160. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9074` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8933) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9074)

```diff
-           WW(), this.Hx.TZ.yOW = null, this.skyBoxRequestId++, null === (iW = this.skyBoxMesh) || void 0 === iW || iW.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.Hx.TZ.vWW = null, this.Hx.TZ.model.earthSky = null
+           RR(), this.xw.lK.KyR = null, this.skyBoxRequestId++, null === (JR = this.skyBoxMesh) || void 0 === JR || JR.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.xw.lK.AJR = null, this.xw.lK.model.earthSky = null
```

#### 1161. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9080-L9081` → after: `L8939-L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8939-L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8939-L8940) · [Before (L9080-L9081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9080-L9081)

```diff
-           TZ: WW
-         } = this.Hx, {
+           lK: RR
+         } = this.xw, {
```

#### 1162. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9083-L9084` → after: `L8942-L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8942-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8942-L8943) · [Before (L9083-L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9083-L9084)

```diff
-         } = WW.o4();
-         this.skyBoxMesh.YZ.set(iW, iW, iW)
+         } = RR.Z2();
+         this.skyBoxMesh.MK.set(JR, JR, JR)
```

#### 1163. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9087` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8946) · [Before (L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9087)

```diff
-         if (this.Hx.kA)
+         if (this.xw.Be)
```

#### 1164. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9089` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8948) · [Before (L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9089)

```diff
-             const WW = "object" === typeof iW ? iW : {
+             const RR = "object" === typeof JR ? JR : {
```

#### 1165. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9096-L9098` → after: `L8955-L8957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8955-L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8955-L8957) · [Before (L9096-L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9096-L9098)

```diff
-               } = zt(WW, "earth" === (null === OW || void 0 === OW ? void 0 : OW.type) ? OW : void 0);
-             this.Hx.TZ.vWW = [mW, EW, NW]
-           } else this.Hx.TZ.vWW = null
+               } = TV(RR, "earth" === (null === GR || void 0 === GR ? void 0 : GR.type) ? GR : void 0);
+             this.xw.lK.AJR = [yR, tR, uR]
+           } else this.xw.lK.AJR = null
```

#### 1166. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9101-L9103` → after: `L8960-L8962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8960-L8962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8960-L8962) · [Before (L9101-L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9101-L9103)

```diff
-         const iW = "string" === typeof WW ? WW : WW.type,
-           OW = bW.d.getSkyBox(iW);
-         if (void 0 === OW && "earth" !== iW) return void console.error(`Skybox "${iW}" not found, ignoring update...`);
+         const JR = "string" === typeof RR ? RR : RR.type,
+           GR = aR.b.getSkyBox(JR);
+         if (void 0 === GR && "earth" !== JR) return void console.error(`Skybox "${JR}" not found, ignoring update...`);
```

#### 1167. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9112-L9114` → after: `L8971-L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8971-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8971-L8973) · [Before (L9112-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9112-L9114)

```diff
-           rb: NW,
-           Lb: PW
-         } = this.Hx.TZ, LW = "earth" === iW || "earth" === OW.type;
+           tL: uR,
+           La: ZR
+         } = this.xw.lK, qR = "earth" === JR || "earth" === GR.type;
```

#### 1168. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9116` → after: `L8975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8975) · [Before (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9116)

```diff
-           (0, mZ.b)();
+           (0, yK.c)();
```

#### 1169. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9120-L9121` → after: `L8979-L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8979-L8980) · [Before (L9120-L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9120-L9121)

```diff
-         const cW = (0, sW.r)(this.Hx.TZ, OZ.b.SKYBOX, (0, KW.g)()),
-           wW = LW ? (0, sZ.j)(NW) : null;
+         const iR = (0, WR.m)(this.xw.lK, GK.b.SKYBOX, (0, CR.l)()),
+           fR = qR ? (0, WK.h)(uR) : null;
```

#### 1170. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9125-L9126` → after: `L8984-L8985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8984-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8984-L8985) · [Before (L9125-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9125-L9126)

```diff
-             iW = (0, MZ.d)(VP.d.get("clientEscMenuOptions").pixelScale),
-             mW = (0, MZ.h)(WW, iW, (0, kt.getSettingsFov)()),
+             JR = (0, AK.e)(oZ.d.get("clientEscMenuOptions").pixelScale),
+             yR = (0, AK.i)(RR, JR, (0, WV.getSettingsFov)()),
```

#### 1171. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9130` → after: `L8989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8989) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9130)

```diff
-               reflectionTexture: (0, MW.p)(NW, {
+               reflectionTexture: (0, AR.o)(uR, {
```

#### 1172. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9139` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L8998) · [Before (L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9139)

```diff
-             rb: NW,
+             tL: uR,
```

#### 1173. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9144` → after: `L9003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9003) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9144)

```diff
-         cW.Fb = !1, cW.XA = !0, cW.pA = !0, cW.applyFog = this.shouldApplyFogToSkyBox(), cW.renderingGroupId = -1, cW.qA();
+         iR.ZL = !1, iR.se = !0, iR.Qe = !0, iR.applyFog = this.shouldApplyFogToSkyBox(), iR.renderingGroupId = -1, iR.Ra();
```

#### 1174. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9151` → after: `L9010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9010) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9151)

```diff
-         }), (0, Ei.g)(tW), (0, sZ.e)(cW, (() => {
+         }), (0, tJ.d)(VR), (0, WK.e)(iR, (() => {
```

#### 1175. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9157` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9016) · [Before (L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9157)

```diff
-         null === (OW = this.skyBoxMesh) || void 0 === OW || OW.dispose(!1, !0), this.skyBoxMesh = WW, this.earthSkyKey = iW, this.updateSkyboxSize(), WW && this.Hx.TZ.Wj(WW, !1, this.Hx.Wl, !1), this.Hx.TZ.model.earthSky = null !== (mW = iW && (0, EZ.f)(iW)) && void 0 !== mW ? mW … [truncated]
+         null === (GR = this.skyBoxMesh) || void 0 === GR || GR.dispose(!1, !0), this.skyBoxMesh = RR, this.earthSkyKey = JR, this.updateSkyboxSize(), RR && this.xw.lK.iL(RR, !1, this.xw.Fw, !1), this.xw.lK.model.earthSky = null !== (yR = JR && (0, tK.f)(JR)) && void 0 !== yR ? yR … [truncated]
```

#### 1176. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9161` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9020) · [Before (L9161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9161)

```diff
-         const WW = jW.l.subscribe("fogChunkDistanceChanged", (() => {
+         const RR = LR.n.subscribe("fogChunkDistanceChanged", (() => {
```

#### 1177. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9164` → after: `L9023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9023) · [Before (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9164)

```diff
-           iW = cc.d.subscribe("fogChunkDistanceOverride", (() => {
+           JR = Zi.c.subscribe("fogChunkDistanceOverride", (() => {
```

#### 1178. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9167` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9026) · [Before (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9167)

```diff
-           OW = cc.d.subscribe("fogBlockDistanceOverride", (() => {
+           GR = Zi.c.subscribe("fogBlockDistanceOverride", (() => {
```

#### 1179. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9170` → after: `L9029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9029) · [Before (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9170)

```diff
-           mW = cc.d.subscribe("fogColourOverride", (() => {
+           yR = Zi.c.subscribe("fogColourOverride", (() => {
```

#### 1180. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9173` → after: `L9032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9032) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9173)

```diff
-           EW = cc.d.subscribe("fogOnSkybox", (() => {
+           tR = Zi.c.subscribe("fogOnSkybox", (() => {
```

#### 1181. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9177` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9036) · [Before (L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9177)

```diff
-           jW.l.unsubscribe(WW), iW(), OW(), mW(), EW()
+           LR.n.unsubscribe(RR), JR(), GR(), yR(), tR()
```

#### 1182. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9181` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9040) · [Before (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9181)

```diff
-         return !0 === this.Hx.gM.fogOnSkybox
+         return !0 === this.xw.jW.fogOnSkybox
```

#### 1183. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9185` → after: `L9044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9044) · [Before (L9185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9185)

```diff
-         const OW = null !== (WW = this.Hx.gM.fogChunkDistanceOverride) && void 0 !== WW ? WW : VP.d.get("clientEscMenuOptions").fogChunkDistance,
+         const GR = null !== (RR = this.xw.jW.fogChunkDistanceOverride) && void 0 !== RR ? RR : oZ.d.get("clientEscMenuOptions").fogChunkDistance,
```

#### 1184. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9191` → after: `L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9050) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9191)

```diff
-         NW && (null === (iW = (0, EZ.f)(NW)) || void 0 === iW ? void 0 : iW.fog) !== EW && (0, SW.cb)(NW, {
+         uR && (null === (JR = (0, tK.f)(uR)) || void 0 === JR ? void 0 : JR.fog) !== tR && (0, XR.fb)(uR, {
```

#### 1185. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9195-L9201` → after: `L9054-L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9054-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9054-L9060) · [Before (L9195-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9195-L9201)

```diff
-         }), this.Hx.TZ.Lb));
-         const PW = this.Hx.gM.fogColourOverride,
-           cW = PW ? (0, LW.X)(PW) : SZ;
-         let wW = 100 * AW.f.jZ,
-           tW = 101 * AW.f.jZ;
-         const ZW = this.Hx.gM.fogBlockDistanceOverride;
-         (0, gW.K)(ZW) ? !VP.d.get("clientEscMenuOptions").showFog && (0, gW.K)(this.Hx.gM.fogChunkDistanceOverride) || (wW = AW.f.jZ * OW, tW = 0 === OW ? 5 : AW.f.jZ * (OW + 1)): (wW = 0, tW = ZW), (0, NZ.o)(this.Hx.TZ, wW, tW, cW)
+         }), this.xw.lK.La));
+         const ZR = this.xw.jW.fogColourOverride,
+           iR = ZR ? (0, qR.M)(ZR) : XK;
+         let fR = 100 * eR.g.LK,
+           VR = 101 * eR.g.LK;
+         const KR = this.xw.jW.fogBlockDistanceOverride;
+         (0, oR.I)(KR) ? !oZ.d.get("clientEscMenuOptions").showFog && (0, oR.I)(this.xw.jW.fogChunkDistanceOverride) || (fR = eR.g.LK * GR, VR = 0 === GR ? 5 : eR.g.LK * (GR + 1)): (fR = 0, VR = KR), (0, uK.q)(this.xw.lK, fR, VR, iR)
```

#### 1186. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9205` → after: `L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9064) · [Before (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9205)

```diff
-         const WW = cc.d.subscribe("lightingOverride", (() => {
+         const RR = Zi.c.subscribe("lightingOverride", (() => {
```

#### 1187. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9208` → after: `L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9067) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9208)

```diff
-           iW = cc.d.subscribe("skyLightColourOverride", (() => {
+           JR = Zi.c.subscribe("skyLightColourOverride", (() => {
```

#### 1188. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9211` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9070) · [Before (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9211)

```diff
-           OW = cc.d.subscribe("ambientLightColourOverride", (() => {
+           GR = Zi.c.subscribe("ambientLightColourOverride", (() => {
```

#### 1189. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9214` → after: `L9073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9073) · [Before (L9214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9214)

```diff
-           mW = cc.d.subscribe("visionMinLightColour", (() => {
+           yR = Zi.c.subscribe("visionMinLightColour", (() => {
```

#### 1190. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9217` → after: `L9076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9076) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9217)

```diff
-           EW = jW.l.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           tR = LR.n.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 1191. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9221` → after: `L9080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9080) · [Before (L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9221)

```diff
-           WW(), iW(), OW(), mW(), jW.l.unsubscribe(EW)
+           RR(), JR(), GR(), yR(), LR.n.unsubscribe(tR)
```

#### 1192. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9227-L9228` → after: `L9086-L9087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9086-L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9086-L9087) · [Before (L9227-L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9227-L9228)

```diff
-         } = this.Hx.gM, iW = VP.d.get("clientEscMenuOptions").enableLighting, OW = null !== WW && void 0 !== WW ? WW : iW, mW = this.Hx.TZ.qb !== OW;
-         this.Hx.TZ.qb = OW, mW && ((0, PZ.g)(), OW && this.Hx.bY.requeueChunksForLighting(), kZ.lightingChanged(this.Hx.kA));
+         } = this.xw.jW, JR = oZ.d.get("clientEscMenuOptions").enableLighting, GR = null !== RR && void 0 !== RR ? RR : JR, yR = this.xw.lK.sa !== GR;
+         this.xw.lK.sa = GR, yR && ((0, ZK.f)(), GR && this.xw.BX.requeueChunksForLighting(), UK.lightingChanged(this.xw.Be));
```

#### 1193. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9233-L9234` → after: `L9092-L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9092-L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9092-L9093) · [Before (L9233-L9234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9233-L9234)

```diff
-         } = this.Hx.gM;
-         this.Hx.TZ.skyLightColourOverride = EW ? (0, LW.X)(EW) : null, this.Hx.TZ.ambientLightColourOverride = NW ? (0, LW.X)(NW) : null, this.Hx.TZ.visionMinLightColour = PW ? (0, LW.X)(PW) : null
+         } = this.xw.jW;
+         this.xw.lK.skyLightColourOverride = tR ? (0, qR.M)(tR) : null, this.xw.lK.ambientLightColourOverride = uR ? (0, qR.M)(uR) : null, this.xw.lK.visionMinLightColour = ZR ? (0, qR.M)(ZR) : null
```

#### 1194. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9242` → after: `L9101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9101) · [Before (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9242)

```diff
-       const XW = null === (EW = null !== (NW = OW.infiniteDistance) && void 0 !== NW ? NW : null === mW || void 0 === mW ? void 0 : mW.infiniteDistance) || void 0 === EW || EW;
+       const SR = null === (tR = null !== (uR = GR.infiniteDistance) && void 0 !== uR ? uR : null === yR || void 0 === yR ? void 0 : yR.infiniteDistance) || void 0 === tR || tR;
```

#### 1195. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9244-L9246` → after: `L9103-L9105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9103-L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9103-L9105) · [Before (L9244-L9246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9244-L9246)

```diff
-       const BW = null !== (PW = OW.sunPosition) && void 0 !== PW ? PW : null === mW || void 0 === mW ? void 0 : mW.sunPosition,
-         qW = null !== (LW = OW.up) && void 0 !== LW ? LW : null === mW || void 0 === mW ? void 0 : mW.up;
-       (0, SW.cb)(iW, {
+       const jR = null !== (ZR = GR.sunPosition) && void 0 !== ZR ? ZR : null === yR || void 0 === yR ? void 0 : yR.sunPosition,
+         dR = null !== (qR = GR.up) && void 0 !== qR ? qR : null === yR || void 0 === yR ? void 0 : yR.up;
+       (0, XR.fb)(JR, {
```

#### 1196. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9248-L9255` → after: `L9107-L9114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9107-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9107-L9114) · [Before (L9248-L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9248-L9255)

```diff
-         inclination: null !== (cW = null !== (wW = OW.inclination) && void 0 !== wW ? wW : null === mW || void 0 === mW ? void 0 : mW.inclination) && void 0 !== cW ? cW : -.2,
-         turbidity: null !== (tW = null !== (ZW = OW.turbidity) && void 0 !== ZW ? ZW : null === mW || void 0 === mW ? void 0 : mW.turbidity) && void 0 !== tW ? tW : 10,
-         luminance: null !== (xW = null !== (lW = OW.luminance) && void 0 !== lW ? lW : null === mW || void 0 === mW ? void 0 : mW.luminance) && void 0 !== xW ? xW : .1,
-         rayleigh: null !== (AW = null !== (bW = OW.rayleigh) && void 0 !== bW ? bW : null === mW || void 0 === mW ? void 0 : mW.rayleigh) && void 0 !== AW ? AW : 2,
-         mieCoefficient: null !== (jW = null !== (UW = OW.mieCoefficient) && void 0 !== UW ? UW : null === mW || void 0 === mW ? void 0 : mW.mieCoefficient) && void 0 !== jW ? jW : .005,
-         mieDirectionalG: null !== (kW = null !== (sW = OW.mieDirectionalG) && void 0 !== sW ? sW : null === mW || void 0 === mW ? void 0 : mW.mieDirectionalG) && void 0 !== kW ? kW : .8,
-         distance: null !== (MW = null !== (KW = OW.distance) && void 0 !== KW ? KW : null === mW || void 0 === mW ? void 0 : mW.distance) && void 0 !== MW ? MW : 500,
-         useSunPosition: null !== (YW = null !== (yW = OW.useSunPosition) && void 0 !== yW ? yW : null === mW || void 0 === mW ? void 0 : mW.useSunPosition) && void 0 !== YW ? YW : Gt,
+         inclination: null !== (iR = null !== (fR = GR.inclination) && void 0 !== fR ? fR : null === yR || void 0 === yR ? void 0 : yR.inclination) && void 0 !== iR ? iR : -.2,
+         turbidity: null !== (VR = null !== (KR = GR.turbidity) && void 0 !== KR ? KR : null === yR || void 0 === yR ? void 0 : yR.turbidity) && void 0 !== VR ? VR : 10,
+         luminance: null !== (wR = null !== (rR = GR.luminance) && void 0 !== rR ? rR : null === yR || void 0 === yR ? void 0 : yR.luminance) && void 0 !== wR ? wR : .1,
+         rayleigh: null !== (eR = null !== (aR = GR.rayleigh) && void 0 !== aR ? aR : null === yR || void 0 === yR ? void 0 : yR.rayleigh) && void 0 !== eR ? eR : 2,
+         mieCoefficient: null !== (LR = null !== (nR = GR.mieCoefficient) && void 0 !== nR ? nR : null === yR || void 0 === yR ? void 0 : yR.mieCoefficient) && void 0 !== LR ? LR : .005,
+         mieDirectionalG: null !== (UR = null !== (WR = GR.mieDirectionalG) && void 0 !== WR ? WR : null === yR || void 0 === yR ? void 0 : yR.mieDirectionalG) && void 0 !== UR ? UR : .8,
+         distance: null !== (AR = null !== (CR = GR.distance) && void 0 !== CR ? CR : null === yR || void 0 === yR ? void 0 : yR.distance) && void 0 !== AR ? AR : 500,
+         useSunPosition: null !== (MR = null !== (BR = GR.useSunPosition) && void 0 !== BR ? BR : null === yR || void 0 === yR ? void 0 : yR.useSunPosition) && void 0 !== MR ? MR : kV,
```

#### 1197. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9257-L9260` → after: `L9116-L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9116-L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9116-L9119) · [Before (L9257-L9260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9257-L9260)

```diff
-         cameraOffset: [null !== (TW = null !== (JW = OW.xCameraOffset) && void 0 !== JW ? JW : null === mW || void 0 === mW ? void 0 : mW.xCameraOffset) && void 0 !== TW ? TW : 0, null !== (hW = null !== (HW = OW.yCameraOffset) && void 0 !== HW ? HW : null === mW || void 0 === mW … [truncated]
-         azimuth: null !== (oW = null !== (dW = OW.azimuth) && void 0 !== dW ? dW : null === mW || void 0 === mW ? void 0 : mW.azimuth) && void 0 !== oW ? oW : .55,
-         sunPosition: [null !== (eW = null === BW || void 0 === BW ? void 0 : BW[0]) && void 0 !== eW ? eW : It[0], null !== (vW = null === BW || void 0 === BW ? void 0 : BW[1]) && void 0 !== vW ? vW : It[1], null !== (gW = null === BW || void 0 === BW ? void 0 : BW[2]) && void 0  … [truncated]
-         up: [null !== (DW = null === qW || void 0 === qW ? void 0 : qW[0]) && void 0 !== DW ? DW : Rt[0], null !== (VW = null === qW || void 0 === qW ? void 0 : qW[1]) && void 0 !== VW ? VW : Rt[1], null !== (pW = null === qW || void 0 === qW ? void 0 : qW[2]) && void 0 !== pW ?  … [truncated]
+         cameraOffset: [null !== (lR = null !== (pR = GR.xCameraOffset) && void 0 !== pR ? pR : null === yR || void 0 === yR ? void 0 : yR.xCameraOffset) && void 0 !== lR ? lR : 0, null !== (gR = null !== (bR = GR.yCameraOffset) && void 0 !== bR ? bR : null === yR || void 0 === yR … [truncated]
+         azimuth: null !== (xR = null !== (NR = GR.azimuth) && void 0 !== NR ? NR : null === yR || void 0 === yR ? void 0 : yR.azimuth) && void 0 !== xR ? xR : .55,
+         sunPosition: [null !== (DR = null === jR || void 0 === jR ? void 0 : jR[0]) && void 0 !== DR ? DR : QV[0], null !== (HR = null === jR || void 0 === jR ? void 0 : jR[1]) && void 0 !== HR ? HR : QV[1], null !== (oR = null === jR || void 0 === jR ? void 0 : jR[2]) && void 0  … [truncated]
+         up: [null !== (cR = null === dR || void 0 === dR ? void 0 : dR[0]) && void 0 !== cR ? cR : YV[0], null !== (PR = null === dR || void 0 === dR ? void 0 : dR[1]) && void 0 !== PR ? PR : YV[1], null !== (IR = null === dR || void 0 === dR ? void 0 : dR[2]) && void 0 !== IR ?  … [truncated]
```

#### 1198. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9270` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9129) · [Before (L9270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9270)

```diff
-           }(0, SW.cb)(iW, {
+           }(0, XR.fb)(JR, {
```

#### 1199. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9274` → after: `L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9133) · [Before (L9274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9274)

```diff
-       }(WW, iW, null !== (fW = null !== (CW = OW.vertexTint) && void 0 !== CW ? CW : null === mW || void 0 === mW ? void 0 : mW.vertexTint) && void 0 !== fW ? fW : [255, 255, 255])
+       }(RR, JR, null !== (mR = null !== (zR = GR.vertexTint) && void 0 !== zR ? zR : null === yR || void 0 === yR ? void 0 : yR.vertexTint) && void 0 !== mR ? mR : [255, 255, 255])
```

#### 1200. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9279` → after: `L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9138) · [Before (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9279)

```diff
-       return null !== (OW = null !== (mW = WW.dithering) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.dithering) && void 0 !== OW && OW
+       return null !== (GR = null !== (yR = RR.dithering) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.dithering) && void 0 !== GR && GR
```

#### 1201. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9281` → after: `L9140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9140) · [Before (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9281)

```diff
-     var JZ = OW(38358);
+     var pK = GR(38317);
```

#### 1202. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9295` → after: `L9154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9154) · [Before (L9295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9295)

```diff
-         this.Hx = WW, this.rendererId = iW, this.config = OW, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
+         this.xw = RR, this.rendererId = JR, this.config = GR, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
```

#### 1203. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9297` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9156) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9297)

```diff
-         })), uZ.registerRenderer(this.Hx, this)
+         })), OK.registerRenderer(this.xw, this)
```

#### 1204. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9300` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9159) · [Before (L9300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9300)

```diff
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), uZ.unregisterRenderer(this.Hx, this))
+         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), OK.unregisterRenderer(this.xw, this))
```

#### 1205. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9308` → after: `L9167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9167) · [Before (L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9308)

```diff
-         }, WW.on("hZ", uZ.tickHandler))
+         }, RR.on("gK", OK.tickHandler))
```

#### 1206. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9311` → after: `L9170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9170) · [Before (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9311)

```diff
-         delete uZ.allRenderers[iW.rendererId], uZ.tickHandler && 0 === Object.keys(uZ.allRenderers).length && (WW.off("hZ", uZ.tickHandler), uZ.tickHandler = null)
+         delete OK.allRenderers[JR.rendererId], OK.tickHandler && 0 === Object.keys(OK.allRenderers).length && (RR.off("gK", OK.tickHandler), OK.tickHandler = null)
```

#### 1207. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9322` → after: `L9181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9181) · [Before (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9322)

```diff
-         const mW = [(0, gW.y)(WW), (0, gW.y)(iW), (0, gW.y)(OW)],
+         const yR = [(0, oR.x)(RR), (0, oR.x)(JR), (0, oR.x)(GR)],
```

#### 1208. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9330` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9189) · [Before (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9330)

```diff
-                     (EW.isChunkBound && NW.isChunkBound ? iW : OW).push(...mW(WW, vZ(EW.offset), vZ(NW.offset)))
+                     (tR.isChunkBound && uR.isChunkBound ? JR : GR).push(...yR(RR, HK(tR.offset), HK(uR.offset)))
```

#### 1209. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9333` → after: `L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9192) · [Before (L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9333)

```diff
-         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${WW}-${iW}-${OW}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", EW, this.borderMaterial, mW), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${WW}-${iW}-${OW}`, t … [truncated]
+         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${RR}-${JR}-${GR}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", tR, this.borderMaterial, yR), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${RR}-${JR}-${GR}`, t … [truncated]
```

#### 1210. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9336-L9337` → after: `L9195-L9196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9195-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9195-L9196) · [Before (L9336-L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9336-L9337)

```diff
-         const EW = (0, sW.r)(this.Hx.TZ, WW, function(WW) {
-           return (0, JZ.i)(WW.map((WW => {
+         const tR = (0, WR.m)(this.xw.lK, RR, function(RR) {
+           return (0, pK.c)(RR.map((RR => {
```

#### 1211. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9339` → after: `L9198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9198) · [Before (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9339)

```diff
-             return [(0, KW.f)({
+             return [(0, CR.k)({
```

#### 1212. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9345` → after: `L9204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9204) · [Before (L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9345)

```diff
-         return EW.material = OW, EW.Fb = !1, this.Hx.TZ.Wj(EW, !0, mW), EW
+         return tR.material = GR, tR.ZL = !1, this.xw.lK.iL(tR, !0, yR), tR
```

#### 1213. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9351` → after: `L9210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9210) · [Before (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9351)

```diff
-           rb: this.Hx.TZ.rb,
+           tL: this.xw.lK.tL,
```

#### 1214. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9353` → after: `L9212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9212) · [Before (L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9353)

```diff
-             ...SW.d,
+             ...XR.e,
```

#### 1215. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9358` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9217) · [Before (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9358)

```diff
-             transparencyMode: JW.n.alphaBlend
+             transparencyMode: pR.v.alphaBlend
```

#### 1216. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9382` → after: `L9241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9241) · [Before (L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9382)

```diff
-       return 0 === WW ? -.01 : WW === gW.A ? gW.A + HZ : WW + HZ
+       return 0 === RR ? -.01 : RR === oR.A ? oR.A + bK : RR + bK
```

#### 1217. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9388` → after: `L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9247) · [Before (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9388)

```diff
-         this.Hx = WW, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(gZ), this.sampleZ = new Float64Array(gZ), this.sampleY = new Float64Array(gZ), this.sampleAirborne = new Uint8Array(gZ), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
+         this.xw = RR, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(oK), this.sampleZ = new Float64Array(oK), this.sampleY = new Float64Array(oK), this.sampleAirborne = new Uint8Array(oK), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
```

#### 1218. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9397` → after: `L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9256) · [Before (L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9397)

```diff
-         const iW = cc.d.subscribe("groundArrowPath", (WW => {
+         const JR = Zi.c.subscribe("groundArrowPath", (RR => {
```

#### 1219. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9406` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9265) · [Before (L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9406)

```diff
-         this.config = WW, this.renderer.setColour(WW.colour), this.renderCallback || (this.renderCallback = WW => this.onBeforeRender(WW), this.Hx.on("beforeRender", this.renderCallback))
+         this.config = RR, this.renderer.setColour(RR.colour), this.renderCallback || (this.renderCallback = RR => this.onBeforeRender(RR), this.xw.on("beforeRender", this.renderCallback))
```

#### 1220. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9414` → after: `L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9273) · [Before (L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9414)

```diff
-         const WW = this.Hx.EY.YG(this.Hx.Dv);
+         const RR = this.xw.zC.f6(this.xw.WH);
```

#### 1221. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9416` → after: `L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9275) · [Before (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9416)

```diff
-         kW().copy(this.worldOffset, this.Hx.Wl), kW().add(this.playerPos, WW.Yz, this.worldOffset);
+         UR().copy(this.worldOffset, this.xw.Fw), UR().add(this.playerPos, RR.B_, this.worldOffset);
```

#### 1222. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9425` → after: `L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9284) · [Before (L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9425)

```diff
-         if (gc.endAtSolidFace && this.Hx.oZ.kR(Math.floor(iW[0]), Math.floor(iW[1]), Math.floor(iW[2]))) {
+         if (Hi.endAtSolidFace && this.xw.NK.aT(Math.floor(JR[0]), Math.floor(JR[1]), Math.floor(JR[2]))) {
```

#### 1223. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9472` → after: `L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9331) · [Before (L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9472)

```diff
-         return this.Hx.oZ.kR(WW, iW, OW) && !this.Hx.oZ.kR(WW, iW + 1, OW)
+         return this.xw.NK.aT(RR, JR, GR) && !this.xw.NK.aT(RR, JR + 1, GR)
```

#### 1224. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9475` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9334) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9475)

```diff
-         this.renderCallback && (this.Hx.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
+         this.renderCallback && (this.xw.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
```

#### 1225. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9478-L9479` → after: `L9337-L9338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9337-L9338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9337-L9338) · [Before (L9478-L9479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9478-L9479)

```diff
-     var pZ = OW(37972),
-       fZ = OW(38986);
+     var IK = GR(37927),
+       mK = GR(38977);
```

#### 1226. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9482` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9341) · [Before (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9482)

```diff
-         this.Hx = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (WW, iW, OW, mW, EW) => {
+         this.xw = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (RR, JR, GR, yR, tR) => {
```

#### 1227. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9484` → after: `L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9343) · [Before (L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9484)

```diff
-         }, this.Hx = WW, this.bloxd = iW
+         }, this.xw = RR, this.bloxd = JR
```

#### 1228. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9487` → after: `L9346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9346) · [Before (L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9487)

```diff
-         if (!(EW in fZ.e)) return console.error(`Called for non multiblock ${EW}`), !1;
+         if (!(tR in mK.f)) return console.error(`Called for non multiblock ${tR}`), !1;
```

#### 1229. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9494-L9496` → after: `L9353-L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9353-L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9353-L9355) · [Before (L9494-L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9494-L9496)

```diff
-           of fZ.e[EW].positions) {
-           const EW = this.bloxd.Yk(iW + PW, OW + LW, mW + cW);
-           if (this.Hx.QWW(EW) || !this.bloxd.playerCanChangePos(WW, iW + PW, OW + LW, mW + cW, tW.j[NW].id)) return !1
+           of mK.f[tR].positions) {
+           const tR = this.bloxd.rW(JR + ZR, GR + qR, yR + iR);
+           if (this.xw.PJR(tR) || !this.bloxd.playerCanChangePos(RR, JR + ZR, GR + qR, yR + iR, VR.l[uR].id)) return !1
```

#### 1230. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9508` → after: `L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9367) · [Before (L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9508)

```diff
-           of fZ.e[iW].positions) OW.push([WW[0] + EW, WW[1] + NW, WW[2] + PW]);
+           of mK.f[JR].positions) GR.push([RR[0] + tR, RR[1] + uR, RR[2] + ZR]);
```

#### 1231. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9512` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9371) · [Before (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9512)

```diff
-         if (WW in fZ.d) {
+         if (RR in mK.c) {
```

#### 1232. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9529` → after: `L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9388) · [Before (L9529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9529)

```diff
-             of fZ.e[EW].positions) {
+             of mK.f[tR].positions) {
```

#### 1233. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9533` → after: `L9392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9392) · [Before (L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9533)

```diff
-               lW = this.bloxd.Yk(EW, ZW, xW);
+               rR = this.bloxd.rW(tR, KR, wR);
```

#### 1234. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9546` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9405) · [Before (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9546)

```diff
-             block: (0, tW.f)(WW),
+             block: (0, VR.h)(RR),
```

#### 1235. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9560-L9561` → after: `L9419-L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9419-L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9419-L9420) · [Before (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9560-L9561)

```diff
-         } = fZ.d[WW], cW = iW - NW, wW = OW - PW, tW = mW - LW, ZW = this.bloxd.Yk(cW, wW, tW);
-         if (ZW in fZ.e)
+         } = mK.c[RR], iR = JR - uR, fR = GR - ZR, VR = yR - qR, KR = this.bloxd.rW(iR, fR, VR);
+         if (KR in mK.f)
```

#### 1236. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9568` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9427) · [Before (L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9568)

```diff
-             of fZ.e[ZW].positions)
+             of mK.f[KR].positions)
```

#### 1237. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9586-L9588` → after: `L9445-L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9445-L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9445-L9447) · [Before (L9586-L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9586-L9588)

```diff
-         const LW = this.bloxd.Yk(WW, iW, OW),
-           cW = null !== (EW = this.getRestoredTop(WW, iW, OW, LW, mW, PW)) && void 0 !== EW ? EW : mW;
-         if (LW in fZ.d) {
+         const qR = this.bloxd.rW(RR, JR, GR),
+           iR = null !== (tR = this.getRestoredTop(RR, JR, GR, qR, yR, ZR)) && void 0 !== tR ? tR : yR;
+         if (qR in mK.c) {
```

#### 1238. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9601` → after: `L9460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9460) · [Before (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9601)

```diff
-             of fZ.e[mW].positions) {
+             of mK.f[yR].positions) {
```

#### 1239. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9605` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9464) · [Before (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9605)

```diff
-             this.bloxd.Yk(mW, wW, tW) === WW && NW(mW, wW, tW, 0, !0)
+             this.bloxd.rW(yR, fR, VR) === RR && uR(yR, fR, VR, 0, !0)
```

#### 1240. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9608` → after: `L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9467) · [Before (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9608)

```diff
-         if (cW in fZ.d) {
+         if (iR in mK.c) {
```

#### 1241. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9614` → after: `L9473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9473) · [Before (L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9614)

```diff
-           } = fZ.d[cW];
+           } = mK.c[iR];
```

#### 1242. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9621` → after: `L9480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9480) · [Before (L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9621)

```diff
-             of fZ.e[mW].positions) {
+             of mK.f[yR].positions) {
```

#### 1243. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9625-L9628` → after: `L9484-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9484-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9484-L9487) · [Before (L9625-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9625-L9628)

```diff
-             if (!this.bloxd.JR(mW, lW, AW)) continue;
-             const bW = this.bloxd.Yk(mW, lW, AW),
-               jW = !this.Hx.ZZ.kR(bW);
-             NW(mW, lW, AW, tW.j[cW].id, jW)
+             if (!this.bloxd.lT(yR, rR, eR)) continue;
+             const aR = this.bloxd.rW(yR, rR, eR),
+               LR = !this.xw.KK.aT(aR);
+             uR(yR, rR, eR, VR.l[iR].id, LR)
```

#### 1244. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9635-L9636` → after: `L9494-L9495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9494-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9494-L9495) · [Before (L9635-L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9635-L9636)

```diff
-         const PW = null === (EW = tW.j[mW]) || void 0 === EW ? void 0 : EW.attachedTop;
-         return !!PW && (null === (NW = tW.j[this.bloxd.Yk(WW, iW, OW)]) || void 0 === NW ? void 0 : NW.meta.rootId) === tW.j[PW].meta.rootId
+         const ZR = null === (tR = VR.l[yR]) || void 0 === tR ? void 0 : tR.attachedTop;
+         return !!ZR && (null === (uR = VR.l[this.bloxd.rW(RR, JR, GR)]) || void 0 === uR ? void 0 : uR.meta.rootId) === VR.l[ZR].meta.rootId
```

#### 1245. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9640-L9645` → after: `L9499-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9499-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9499-L9504) · [Before (L9640-L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9640-L9645)

```diff
-         const LW = tW.j[EW],
-           cW = (null === LW || void 0 === LW ? void 0 : LW.attachedTop) && tW.j[LW.attachedTop],
-           wW = null === (PW = tW.j[mW]) || void 0 === PW ? void 0 : PW.meta.rootId;
-         if (null === NW || !cW || wW === LW.meta.rootId || wW === cW.meta.rootId || !this.bloxd.JR(WW, iW - 1, OW)) return null;
-         const ZW = tW.j[this.bloxd.Yk(WW, iW - 1, OW)];
-         return (null === ZW || void 0 === ZW ? void 0 : ZW.meta.rootId) === LW.meta.rootId ? tW.j[ZW.attachedTop].id : null
+         const qR = VR.l[tR],
+           iR = (null === qR || void 0 === qR ? void 0 : qR.attachedTop) && VR.l[qR.attachedTop],
+           fR = null === (ZR = VR.l[yR]) || void 0 === ZR ? void 0 : ZR.meta.rootId;
+         if (null === uR || !iR || fR === qR.meta.rootId || fR === iR.meta.rootId || !this.bloxd.lT(RR, JR - 1, GR)) return null;
+         const KR = VR.l[this.bloxd.rW(RR, JR - 1, GR)];
+         return (null === KR || void 0 === KR ? void 0 : KR.meta.rootId) === qR.meta.rootId ? VR.l[KR.attachedTop].id : null
```

#### 1246. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9649-L9655` → after: `L9508-L9514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9508-L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9508-L9514) · [Before (L9649-L9655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9649-L9655)

```diff
-         const ZW = null === (LW = tW.j[mW]) || void 0 === LW ? void 0 : LW.attachedTop,
-           xW = null === (cW = tW.j[EW]) || void 0 === cW ? void 0 : cW.attachedTop;
-         if (!ZW && !xW || !this.bloxd.JR(WW, iW + 1, OW)) return;
-         const lW = this.bloxd.Yk(WW, iW + 1, OW),
-           AW = !!ZW && (null === (wW = tW.j[lW]) || void 0 === wW ? void 0 : wW.meta.rootId) === tW.j[ZW].meta.rootId,
-           bW = xW ? tW.j[xW].id : 0;
-         ZW && xW && tW.j[mW].meta.rootId === tW.j[EW].meta.rootId ? AW && lW !== bW && NW(WW, iW + 1, OW, bW, !0) : !xW || !AW && 0 !== lW || null !== PW && !this.placerCanAddTop(PW, WW, iW + 1, OW, bW) ? AW && NW(WW, iW + 1, OW, 0, !0) : NW(WW, iW + 1, OW, bW, !0)
+         const KR = null === (qR = VR.l[yR]) || void 0 === qR ? void 0 : qR.attachedTop,
+           wR = null === (iR = VR.l[tR]) || void 0 === iR ? void 0 : iR.attachedTop;
+         if (!KR && !wR || !this.bloxd.lT(RR, JR + 1, GR)) return;
+         const rR = this.bloxd.rW(RR, JR + 1, GR),
+           eR = !!KR && (null === (fR = VR.l[rR]) || void 0 === fR ? void 0 : fR.meta.rootId) === VR.l[KR].meta.rootId,
+           aR = wR ? VR.l[wR].id : 0;
+         KR && wR && VR.l[yR].meta.rootId === VR.l[tR].meta.rootId ? eR && rR !== aR && uR(RR, JR + 1, GR, aR, !0) : !wR || !eR && 0 !== rR || null !== ZR && !this.placerCanAddTop(ZR, RR, JR + 1, GR, aR) ? eR && uR(RR, JR + 1, GR, 0, !0) : uR(RR, JR + 1, GR, aR, !0)
```

#### 1247. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9661` → after: `L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9520) · [Before (L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9661)

```diff
-     var XZ = OW(5774);
+     var SK = GR(5912);
```

#### 1248. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9665` → after: `L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9524) · [Before (L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9665)

```diff
-       (null === WW || void 0 === WW ? void 0 : WW.chestStr) !== gW.e || Object.isFrozen(WW) || (WW.chestStr = (0, gW.G)(WW.chestStr))
+       (null === RR || void 0 === RR ? void 0 : RR.chestStr) !== oR.f || Object.isFrozen(RR) || (RR.chestStr = (0, oR.H)(RR.chestStr))
```

#### 1249. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9672` → after: `L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9531) · [Before (L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9672)

```diff
-         if (this.storage.get(WW, iW, OW) && console.error(new Error(`adding chunk x y z ${WW} ${iW} ${OW} to dataowner that already exists`).stack), 0 === mW.length) return void this.storage.set(WW, iW, OW, BZ);
+         if (this.storage.get(RR, JR, GR) && console.error(new Error(`adding chunk x y z ${RR} ${JR} ${GR} to dataowner that already exists`).stack), 0 === yR.length) return void this.storage.set(RR, JR, GR, jK);
```

#### 1250. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9682-L9683` → after: `L9541-L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9541-L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9541-L9542) · [Before (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9682-L9683)

```diff
-           const WW = (0, gW.O)(NW),
-             iW = null !== PW && void 0 !== PW ? PW : {
+           const RR = (0, oR.P)(uR),
+             JR = null !== ZR && void 0 !== ZR ? ZR : {
```

#### 1251. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9687` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9546) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9687)

```diff
-           qZ(iW.persisted), EW[`${WW[0]}|${WW[1]}|${WW[2]}`] = iW
+           dK(JR.persisted), tR[`${RR[0]}|${RR[1]}|${RR[2]}`] = JR
```

#### 1252. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9716` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9575) · [Before (L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9716)

```diff
-           if ((0, gW.K)(WW)) console.error("ChunkInfo block at local pos", PW, "was nullish:", WW);
+           if ((0, oR.I)(RR)) console.error("ChunkInfo block at local pos", ZR, "was nullish:", RR);
```

#### 1253. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9729` → after: `L9588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9588) · [Before (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9729)

```diff
-           NW = [WW * AW.f.jZ, iW * AW.f.jZ, OW * AW.f.jZ];
+           uR = [RR * eR.g.LK, JR * eR.g.LK, GR * eR.g.LK];
```

#### 1254. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9734` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9593) · [Before (L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9734)

```diff
-             EW = this.bloxd.Yk(OW[0], OW[1], OW[2]);
+             tR = this.bloxd.rW(GR[0], GR[1], GR[2]);
```

#### 1255. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9740-L9742` → after: `L9599-L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9599-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9599-L9601) · [Before (L9740-L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9740-L9742)

```diff
-         const mW = (0, gW.U)(WW),
-           EW = (0, gW.U)(iW),
-           NW = (0, gW.U)(OW),
+         const yR = (0, oR.X)(RR),
+           tR = (0, oR.X)(JR),
+           uR = (0, oR.X)(GR),
```

#### 1256. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9745` → after: `L9604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9604) · [Before (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9745)

```diff
-         delete PW[`${(0,gW.W)(WW)}|${(0,gW.W)(iW)}|${(0,gW.W)(OW)}`]
+         delete ZR[`${(0,oR.Z)(RR)}|${(0,oR.Z)(JR)}|${(0,oR.Z)(GR)}`]
```

#### 1257. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9750` → after: `L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9609) · [Before (L9750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9750)

```diff
-         const NW = AW.f.jZ;
+         const uR = eR.g.LK;
```

#### 1258. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9765` → after: `L9624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9624) · [Before (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9765)

```diff
-         return this.storage.get((0, gW.U)(WW), (0, gW.U)(iW), (0, gW.U)(OW))[`${(0,gW.W)(WW)}|${(0,gW.W)(iW)}|${(0,gW.W)(OW)}`]
+         return this.storage.get((0, oR.X)(RR), (0, oR.X)(JR), (0, oR.X)(GR))[`${(0,oR.Z)(RR)}|${(0,oR.Z)(JR)}|${(0,oR.Z)(GR)}`]
```

#### 1259. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9780-L9782` → after: `L9639-L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9639-L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9639-L9641) · [Before (L9780-L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9780-L9782)

```diff
-         const NW = (0, gW.U)(WW),
-           PW = (0, gW.U)(iW),
-           LW = (0, gW.U)(OW);
+         const uR = (0, oR.X)(RR),
+           ZR = (0, oR.X)(JR),
+           qR = (0, oR.X)(GR);
```

#### 1260. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9785` → after: `L9644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9644) · [Before (L9785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9785)

```diff
-         const wW = `${(0,gW.W)(WW)}|${(0,gW.W)(iW)}|${(0,gW.W)(OW)}`,
+         const fR = `${(0,oR.Z)(RR)}|${(0,oR.Z)(JR)}|${(0,oR.Z)(GR)}`,
```

#### 1261. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9791` → after: `L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9650) · [Before (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9791)

```diff
-         const NW = arguments.length >= 4 ? mW : this.getBlockData(WW, iW, OW),
+         const uR = arguments.length >= 4 ? yR : this.getBlockData(RR, JR, GR),
```

#### 1262. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9817-L9820` → after: `L9676-L9679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9676-L9679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9676-L9679) · [Before (L9817-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9817-L9820)

```diff
-     var GZ = OW(38195),
-       IZ = OW(40459),
-       aZ = OW(40463),
-       rZ = OW(39234),
+     var YK = GR(38150),
+       kK = GR(40514),
+       QK = GR(40516),
+       FK = GR(39214),
```

#### 1263. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9827` → after: `L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9686) · [Before (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9827)

```diff
-         this.bloxd = void 0, this.books = new Map, this.bloxd = WW, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.Hx.Dv)
+         this.bloxd = void 0, this.books = new Map, this.bloxd = RR, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.xw.WH)
```

#### 1264. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9834` → after: `L9693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9693) · [Before (L9834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9834)

```diff
-           base: IZ.c,
+           base: kK.e,
```

#### 1265. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9843` → after: `L9702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9702) · [Before (L9843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9843)

```diff
-           EW = (0, aZ.b)(null !== OW && void 0 !== OW ? OW : Wx);
+           tR = (0, QK.d)(null !== GR && void 0 !== GR ? GR : Rw);
```

#### 1266. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9858` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9717) · [Before (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9858)

```diff
-         return void 0 !== EW ? EW : Object.hasOwn(mW.base, iW) ? mW.base[iW] : void 0
+         return void 0 !== tR ? tR : Object.hasOwn(yR.base, JR) ? yR.base[JR] : void 0
```

#### 1267. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9869` → after: `L9728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9728) · [Before (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9869)

```diff
-           iW(PW, null !== (NW = null === EW || void 0 === EW ? void 0 : EW.get(PW)) && void 0 !== NW ? NW : mW[PW])
+           JR(ZR, null !== (uR = null === tR || void 0 === tR ? void 0 : tR.get(ZR)) && void 0 !== uR ? uR : yR[ZR])
```

#### 1268. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9877` → after: `L9736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9736) · [Before (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9877)

```diff
-         return void 0 !== mW && (mW.base !== IZ.c || (null !== (iW = null === (OW = mW.overrides) || void 0 === OW ? void 0 : OW.size) && void 0 !== iW ? iW : 0) > 0)
+         return void 0 !== yR && (yR.base !== kK.e || (null !== (JR = null === (GR = yR.overrides) || void 0 === GR ? void 0 : GR.size) && void 0 !== JR ? JR : 0) > 0)
```

#### 1269. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9885` → after: `L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9744) · [Before (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9885)

```diff
-           xL: EW,
+           nq: tR,
```

#### 1270. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9897` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9756) · [Before (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9897)

```diff
-               xL: LW,
+               nq: qR,
```

#### 1271. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9901` → after: `L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9760) · [Before (L9901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9901)

```diff
-               xL: LW,
+               nq: qR,
```

#### 1272. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9910` → after: `L9769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9769) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9910)

```diff
-         Array.isArray(EW) ? NW = EW : (NW = FZ, FZ[0] = EW, FZ.length = 1);
+         Array.isArray(tR) ? uR = tR : (uR = sK, sK[0] = tR, sK.length = 1);
```

#### 1273. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9968` → after: `L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9827) · [Before (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9968)

```diff
-         if (!1 !== this.bloxd.ZZ.metadatas[OW].stackable) {
+         if (!1 !== this.bloxd.KK.metadatas[GR].stackable) {
```

#### 1274. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9978-L9979` → after: `L9837-L9838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9837-L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9837-L9838) · [Before (L9978-L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9978-L9979)

```diff
-             lL: 0,
-             WZ: null,
+             Uq: 0,
+             RK: null,
```

#### 1275. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9992` → after: `L9851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9851) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9992)

```diff
-             WZ: lW,
+             RK: rR,
```

#### 1276. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L9996-L9997` → after: `L9855-L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9855-L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9855-L9856) · [Before (L9996-L9997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L9996-L9997)

```diff
-           lL: xW / wW,
-           WZ: lW,
+           Uq: wR / fR,
+           RK: rR,
```

#### 1277. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10027` → after: `L9886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9886) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10027)

```diff
-         if (!1 !== this.bloxd.ZZ.metadatas[iW].stackable) {
+         if (!1 !== this.bloxd.KK.metadatas[JR].stackable) {
```

#### 1278. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10047` → after: `L9906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9906) · [Before (L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10047)

```diff
-           WZ: NW,
+           RK: uR,
```

#### 1279. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10095-L10096` → after: `L9954-L9955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9954-L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9954-L9955) · [Before (L10095-L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10095-L10096)

```diff
-       const OW = IZ.e[WW];
-       return OW ? void 0 === iW ? OW : (iW <= 0 && (iW = 1), OW.map((WW => {
+       const GR = kK.g[RR];
+       return GR ? void 0 === JR ? GR : (JR <= 0 && (JR = 1), GR.map((RR => {
```

#### 1280. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10107-L10110` → after: `L9966-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9966-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9966-L9969) · [Before (L10107-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10107-L10110)

```diff
-     var mx = OW(39663),
-       Ex = OW(39667),
-       Nx = OW(1230),
-       Px = OW(7453);
+     var yw = GR(39633),
+       tw = GR(39642),
+       uw = GR(1336),
+       Zw = GR(7588);
```

#### 1281. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10114` → after: `L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9973) · [Before (L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10114)

```diff
-           ...GZ.n
+           ...YK.o
```

#### 1282. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10118-L10120` → after: `L9977-L9979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9977-L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9977-L9979) · [Before (L10118-L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10118-L10120)

```diff
-     var cx = OW(39661),
-       wx = OW(38797),
-       tx = OW(35225);
+     var iw = GR(39630),
+       fw = GR(38800),
+       Vw = GR(35150);
```

#### 1283. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10124` → after: `L9983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9983) · [Before (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10124)

```diff
-         this.bloxd = WW, this.enchanter = void 0, Zx ??= new wx.d(GZ.n), this.enchanter = Zx
+         this.bloxd = RR, this.enchanter = void 0, Kw ??= new fw.d(YK.o), this.enchanter = Kw
```

#### 1284. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10127` → after: `L9986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9986) · [Before (L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10127)

```diff
-         return this.bloxd.isClient && console.assert(WW === this.bloxd.Hx.Dv || WW === this.bloxd.Hx.Av, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(iW)
+         return this.bloxd.isClient && console.assert(RR === this.bloxd.xw.WH || RR === this.bloxd.xw.UH, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(JR)
```

#### 1285. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10130-L10133` → after: `L9989-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9989-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9989-L9992) · [Before (L10130-L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10130-L10133)

```diff
-         if (this.bloxd.isClient && console.assert(WW === this.bloxd.Hx.Dv || WW === this.bloxd.Hx.Av, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(WW, "canCraft")) return !1;
-         if (!(0, tx.q)(OW)) return !1;
-         const mW = this.bloxd.EY.ziW(WW).getItemAtIdx(iW);
-         return 0 !== this.getPossibleEnchantments(WW, null === mW || void 0 === mW ? void 0 : mW.name).length && !(!mW || (0, tx.o)(mW.attributes))
+         if (this.bloxd.isClient && console.assert(RR === this.bloxd.xw.WH || RR === this.bloxd.xw.UH, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(RR, "canCraft")) return !1;
+         if (!(0, Vw.v)(GR)) return !1;
+         const yR = this.bloxd.zC.PGR(RR).getItemAtIdx(JR);
+         return 0 !== this.getPossibleEnchantments(RR, null === yR || void 0 === yR ? void 0 : yR.name).length && !(!yR || (0, Vw.r)(yR.attributes))
```

#### 1286. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10136` → after: `L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9995) · [Before (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10136)

```diff
-         return (0, tx.q)(WW)
+         return (0, Vw.v)(RR)
```

#### 1287. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10139` → after: `L9998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR9998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L9998) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10139)

```diff
-         return (0, tx.b)(WW, iW)
+         return (0, Vw.e)(RR, JR)
```

#### 1288. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10142` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10001) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10142)

```diff
-         return (0, tx.g)(WW)
+         return (0, Vw.k)(RR)
```

#### 1289. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10145` → after: `L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10004) · [Before (L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10145)

```diff
-         return (0, tx.e)(WW, iW)
+         return (0, Vw.i)(RR, JR)
```

#### 1290. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10147-L10151` → after: `L10006-L10010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10006-L10010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10006-L10010) · [Before (L10147-L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10147-L10151)

```diff
-     }(0, tW.l)("Coal Ore"), (0, tW.l)("Iron Ore"), (0, tW.l)("Gold Ore"), (0, tW.l)("Diamond Ore"), (0, tW.l)("Moonstone Ore"), (0, tW.l)("Pure Coal Ore"), (0, tW.l)("Pure Iron Ore"), (0, tW.l)("Pure Gold Ore"), (0, tW.l)("Pure Diamond Ore"), (0, tW.l)("Pure Moonstone Ore"), (0,  … [truncated]
-     var lx = OW(38822),
-       Ax = OW(38208),
-       bx = OW(38824);
-     new Set(Object.keys(bx.e).map((WW => WW.toLowerCase())));
+     }(0, VR.n)("Coal Ore"), (0, VR.n)("Iron Ore"), (0, VR.n)("Gold Ore"), (0, VR.n)("Diamond Ore"), (0, VR.n)("Moonstone Ore"), (0, VR.n)("Pure Coal Ore"), (0, VR.n)("Pure Iron Ore"), (0, VR.n)("Pure Gold Ore"), (0, VR.n)("Pure Diamond Ore"), (0, VR.n)("Pure Moonstone Ore"), (0,  … [truncated]
+     var rw = GR(38818),
+       ew = GR(38166),
+       aw = GR(38821);
+     new Set(Object.keys(aw.g).map((RR => RR.toLowerCase())));
```

#### 1291. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10153` → after: `L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10012) · [Before (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10153)

```diff
-       return `${WW}ByBlock`
+       return `${RR}ByBlock`
```

#### 1292. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10157` → after: `L10016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10016) · [Before (L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10157)

```diff
-       return void 0 === iW ? WW : {
+       return void 0 === JR ? RR : {
```

#### 1293. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10178` → after: `L10037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10037) · [Before (L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10178)

```diff
-         const mW = null !== (OW = this.resolved) && void 0 !== OW ? OW : this.buildResolvedSettings(WW, iW);
+         const yR = null !== (GR = this.resolved) && void 0 !== GR ? GR : this.buildResolvedSettings(RR, JR);
```

#### 1294. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10184` → after: `L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10043) · [Before (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10184)

```diff
-         const mW = null !== (OW = this.blockLookups) && void 0 !== OW ? OW : this.buildBlockLookups(WW, iW);
+         const yR = null !== (GR = this.blockLookups) && void 0 !== GR ? GR : this.buildBlockLookups(RR, JR);
```

#### 1295. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10191` → after: `L10050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10050) · [Before (L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10191)

```diff
-         const OW = (0, lx.l)(WW, iW),
+         const GR = (0, rw.m)(RR, JR),
```

#### 1296. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10207` → after: `L10066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10066) · [Before (L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10207)

```diff
-         const OW = (0, lx.h)(WW).getBlockLookupsForTier(iW),
+         const GR = (0, rw.k)(RR).getBlockLookupsForTier(JR),
```

#### 1297. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10213` → after: `L10072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10072) · [Before (L10213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10213)

```diff
-         const NW = (0, lx.l)(WW, iW);
+         const uR = (0, rw.m)(RR, JR);
```

#### 1298. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10215-L10216` → after: `L10074-L10075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10074-L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10074-L10075) · [Before (L10215-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10215-L10216)

```diff
-           speedMultiplier: void 0 === EW ? OW.speedMultiplier : (0, lx.d)(Ux(NW.speedMultiplierByBlock, EW)),
-           canAutoStep: void 0 === mW ? OW.canAutoStep : (0, lx.b)(Ux(NW.canAutoStepByBlock, mW))
+           speedMultiplier: void 0 === tR ? GR.speedMultiplier : (0, rw.h)(nw(uR.speedMultiplierByBlock, tR)),
+           canAutoStep: void 0 === yR ? GR.canAutoStep : (0, rw.d)(nw(uR.canAutoStepByBlock, yR))
```

#### 1299. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10220` → after: `L10079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10079) · [Before (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10220)

```diff
-     var sx = OW(39359);
+     var Ww = GR(39335);
```

#### 1300. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10224` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10083) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10224)

```diff
-         this.BL = new WeakMap
+         this.Qq = new WeakMap
```

#### 1301. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10227` → after: `L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10086) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10227)

```diff
-         return NW && (mW > iW || EW > OW) ? (this.BL.set(WW, {
+         return uR && (yR > JR || tR > GR) ? (this.Qq.set(RR, {
```

#### 1302. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10233` → after: `L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10092) · [Before (L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10233)

```diff
-         }) : (this.BL.delete(WW), {
+         }) : (this.Qq.delete(RR), {
```

#### 1303. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10239` → after: `L10098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10098) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10239)

```diff
-         return this.BL.get(WW)
+         return this.Qq.get(RR)
```

#### 1304. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10242` → after: `L10101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10101) · [Before (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10242)

```diff
-         this.BL.delete(WW)
+         this.Qq.delete(RR)
```

#### 1305. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10245-L10246` → after: `L10104-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10104-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10104-L10105) · [Before (L10245-L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10245-L10246)

```diff
-     var Sx = OW(5807),
-       Yx = OW(40469);
+     var Xw = GR(5953),
+       Mw = GR(40522);
```

#### 1306. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10249` → after: `L10108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10108) · [Before (L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10249)

```diff
-         this.isClient = iW, this.callbacks = OW, this.Hx = void 0, this.EY = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.ZZ = new  … [truncated]
+         this.isClient = JR, this.callbacks = GR, this.xw = void 0, this.zC = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.KK = new  … [truncated]
```

#### 1307. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10272` → after: `L10131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10131) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10272)

```diff
-         this.multiblockManager.xH(WW, iW, OW, mW, EW, NW)
+         this.multiblockManager.lD(RR, JR, GR, yR, tR, uR)
```

#### 1308. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10275` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10134) · [Before (L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10275)

```diff
-         const NW = this.Yk(WW, iW, OW);
+         const uR = this.rW(RR, JR, GR);
```

#### 1309. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10280` → after: `L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10139) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10280)

```diff
-         return EW in fZ.e ? this.multiblockManager.playerCanPlaceItem(WW, iW, OW, mW, EW) : this.playerCanChangePos(WW, iW, OW, mW, EW, NW)
+         return tR in mK.f ? this.multiblockManager.playerCanPlaceItem(RR, JR, GR, yR, tR) : this.playerCanChangePos(RR, JR, GR, yR, tR, uR)
```

#### 1310. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10285` → after: `L10144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10144) · [Before (L10285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10285)

```diff
-         return this.isClient ? this.JR(iW, OW, mW) && this.posSatisfiesModifyConstraints(WW, iW, OW, mW) && (!this.Hx.ZZ.kR(EW) || this.Hx.oZ.BX.has(EW) || !this.Hx.EY.piW(iW, OW, mW, this.Hx.ZZ.yX(EW), NW ? WW : null)) : this.JR(iW, OW, mW) && this.posSatisfiesModifyConstraints( … [truncated]
+         return this.isClient ? this.lT(JR, GR, yR) && this.posSatisfiesModifyConstraints(RR, JR, GR, yR) && (!this.xw.KK.aT(tR) || this.xw.NK.Rk.has(tR) || !this.xw.zC.pGR(JR, GR, yR, this.xw.KK.hY(tR), uR ? RR : null)) : this.lT(JR, GR, yR) && this.posSatisfiesModifyConstraints( … [truncated]
```

#### 1311. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10294` → after: `L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10153) · [Before (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10294)

```diff
-         return 1 === iW ? `Partially Full ${WW}` : 2 === iW ? `Half Full ${WW}` : 3 === iW ? `Nearly Full ${WW}` : 4 === iW ? WW : "Bowl"
+         return 1 === JR ? `Partially Full ${RR}` : 2 === JR ? `Half Full ${RR}` : 3 === JR ? `Nearly Full ${RR}` : 4 === JR ? RR : "Bowl"
```

#### 1312. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10301-L10302` → after: `L10160-L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10160-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10160-L10161) · [Before (L10301-L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10301-L10302)

```diff
-           if (this.ZZ.metadatas[WW]) return this.ZZ.metadatas[WW].id;
-           throw new Error(`Invalid block name. You sent ${WW}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
+           if (this.KK.metadatas[RR]) return this.KK.metadatas[RR].id;
+           throw new Error(`Invalid block name. You sent ${RR}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
```

#### 1313. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10307` → after: `L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10166) · [Before (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10307)

```diff
-         return WW && WW !== Sx.b ? this.ZZ.metadatas[WW].name : Sx.b
+         return RR && RR !== Xw.b ? this.KK.metadatas[RR].name : Xw.b
```

#### 1314. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10310` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10169) · [Before (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10310)

```diff
-         const iW = this.ZZ.metadatas;
+         const JR = this.KK.metadatas;
```

#### 1315. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10317-L10318` → after: `L10176-L10177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10176-L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10176-L10177) · [Before (L10317-L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10317-L10318)

```diff
-         if (!WW || WW === Sx.b) return Sx.f;
-         const iW = this.ZZ.metadatas[WW];
+         if (!RR || RR === Xw.b) return Xw.d;
+         const JR = this.KK.metadatas[RR];
```

#### 1316. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10320-L10321` → after: `L10179-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10179-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10179-L10180) · [Before (L10320-L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10320-L10321)

```diff
-           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${WW}`);
-           throw new Error(`Item ${WW} not found in registry`)
+           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${RR}`);
+           throw new Error(`Item ${RR} not found in registry`)
```

#### 1317. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10326` → after: `L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10185) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10326)

```diff
-         if (Yx.d.has(OW) && (this.isClient || "Player" === this.getEntityType(WW))) {
+         if (Mw.b.has(GR) && (this.isClient || "Player" === this.getEntityType(RR))) {
```

#### 1318. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10328-L10329` → after: `L10187-L10188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10187-L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10187-L10188) · [Before (L10328-L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10328-L10329)

```diff
-             EW = this.getClientPredictedOption(WW, (0, Yx.h)(mW, OW));
-           if (!(0, gW.K)(EW)) return EW
+             tR = this.getClientPredictedOption(RR, (0, Mw.d)(yR, GR));
+           if (!(0, oR.I)(tR)) return tR
```

#### 1319. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10335-L10336` → after: `L10194-L10195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10194-L10195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10194-L10195) · [Before (L10335-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10335-L10336)

```diff
-         const mW = null === (OW = this.ZZ.metadatas[WW]) || void 0 === OW ? void 0 : OW[iW];
-         return (0, gW.K)(mW) && "displayName" === iW ? this.getItemName(WW) : mW
+         const yR = null === (GR = this.KK.metadatas[RR]) || void 0 === GR ? void 0 : GR[JR];
+         return (0, oR.I)(yR) && "displayName" === JR ? this.getItemName(RR) : yR
```

#### 1320. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10346` → after: `L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10205) · [Before (L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10346)

```diff
-         return wW ? Math.max(0, null !== (NW = this.getItemStat(WW, wW, "attackRange")) && void 0 !== NW ? NW : PW) : PW
+         return fR ? Math.max(0, null !== (uR = this.getItemStat(RR, fR, "attackRange")) && void 0 !== uR ? uR : ZR) : ZR
```

#### 1321. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10350` → after: `L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10209) · [Before (L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10350)

```diff
-         return null !== (iW = this.getClientPredictedOption(WW, "blockReach")) && void 0 !== iW ? iW : AW.f.lU
+         return null !== (JR = this.getClientPredictedOption(RR, "blockReach")) && void 0 !== JR ? JR : eR.g.Ln
```

#### 1322. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10356-L10361` → after: `L10215-L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10215-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10215-L10220) · [Before (L10356-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10356-L10361)

```diff
-           const PW = null === (mW = GZ.n[null === OW || void 0 === OW ? void 0 : OW.name]) || void 0 === mW ? void 0 : mW.harvests,
-             cW = null === (EW = GZ.n[null === OW || void 0 === OW ? void 0 : OW.name]) || void 0 === EW ? void 0 : EW.level;
-           return !(0, LW.uc)({
-             blockHarvestType: this.ZZ.metadatas[iW].harvestType,
-             blockHarvestLevel: this.ZZ.metadatas[iW].harvestLevel,
-             harvestLevel: null !== (NW = this.getItemStat(WW, iW, "harvestLevel")) && void 0 !== NW ? NW : 0,
+           const ZR = null === (yR = YK.o[null === GR || void 0 === GR ? void 0 : GR.name]) || void 0 === yR ? void 0 : yR.harvests,
+             iR = null === (tR = YK.o[null === GR || void 0 === GR ? void 0 : GR.name]) || void 0 === tR ? void 0 : tR.level;
+           return !(0, qR.yc)({
+             blockHarvestType: this.KK.metadatas[JR].harvestType,
+             blockHarvestLevel: this.KK.metadatas[JR].harvestLevel,
+             harvestLevel: null !== (uR = this.getItemStat(RR, JR, "harvestLevel")) && void 0 !== uR ? uR : 0,
```

#### 1323. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10369` → after: `L10228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10228) · [Before (L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10369)

```diff
-         return (0, LW.Td)(this.getItemStat(WW, iW, "drops"), this.getItemStat(WW, iW, "specialToolDrop"), (() => this.getMetaInfo(iW).rootName), OW)
+         return (0, qR.$d)(this.getItemStat(RR, JR, "drops"), this.getItemStat(RR, JR, "specialToolDrop"), (() => this.getMetaInfo(JR).rootName), GR)
```

#### 1324. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10373` → after: `L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10232) · [Before (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10373)

```diff
-         return iW && null !== (OW = null === (mW = tW.j[WW]) || void 0 === mW ? void 0 : mW.ut) && void 0 !== OW ? OW : 1
+         return JR && null !== (GR = null === (yR = VR.l[RR]) || void 0 === yR ? void 0 : yR.HV) && void 0 !== GR ? GR : 1
```

#### 1325. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10384` → after: `L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10243) · [Before (L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10384)

```diff
-         return this.Hx.EY.liW(WW, "inventory") ? this.Hx.EY.ziW(WW).getItemAtSelectedSlot() : null
+         return this.xw.zC.RGR(RR, "inventory") ? this.xw.zC.PGR(RR).getItemAtSelectedSlot() : null
```

#### 1326. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10387` → after: `L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10246) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10387)

```diff
-         return (0, Ki.g)(this.Hx, WW, !1).length >= 1
+         return (0, CJ.g)(this.xw, RR, !1).length >= 1
```

#### 1327. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10391` → after: `L10250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10250) · [Before (L10391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10391)

```diff
-         const mW = this.ZZ.metadatas;
+         const yR = this.KK.metadatas;
```

#### 1328. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10397` → after: `L10256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10256) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10397)

```diff
-             !(0, gW.K)(iW) && (void 0 === EW || iW > EW) && (EW = iW);
+             !(0, oR.I)(JR) && (void 0 === tR || JR > tR) && (tR = JR);
```

#### 1329. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10403` → after: `L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10262) · [Before (L10403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10403)

```diff
-             void 0 === OW && (OW = (0, Yx.h)(this.getItemName(LW), "stoodOnSpeedMultiplier"), this.stoodOnOptions[LW] = OW), void 0 === PW && (PW = this.getPlayerReader(WW));
+             void 0 === GR && (GR = (0, Mw.d)(this.getItemName(qR), "stoodOnSpeedMultiplier"), this.stoodOnOptions[qR] = GR), void 0 === ZR && (ZR = this.getPlayerReader(RR));
```

#### 1330. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10406` → after: `L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10265) · [Before (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10406)

```diff
-           }(0, gW.K)(iW) && (this.stoodOnKnown[LW] || (this.stoodOnDefaults[LW] = this.getDefaultItemStat(LW, "stoodOnSpeedMultiplier"), this.stoodOnKnown[LW] = !0), iW = this.stoodOnDefaults[LW]), !(0, gW.K)(iW) && (void 0 === EW || iW > EW) && (EW = iW)
+           }(0, oR.I)(JR) && (this.stoodOnKnown[qR] || (this.stoodOnDefaults[qR] = this.getDefaultItemStat(qR, "stoodOnSpeedMultiplier"), this.stoodOnKnown[qR] = !0), JR = this.stoodOnDefaults[qR]), !(0, oR.I)(JR) && (void 0 === tR || JR > tR) && (tR = JR)
```

#### 1331. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10408` → after: `L10267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10267) · [Before (L10408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10408)

```diff
-         return null !== (OW = EW) && void 0 !== OW ? OW : 1
+         return null !== (GR = tR) && void 0 !== GR ? GR : 1
```

#### 1332. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10411` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10270) · [Before (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10411)

```diff
-         const iW = this.ZZ.metadatas,
+         const JR = this.KK.metadatas,
```

#### 1333. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10417` → after: `L10276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10276) · [Before (L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10417)

```diff
-           (0, gW.K)(WW) || (OW.push(EW), mW.push(Number(WW)))
+           (0, oR.I)(RR) || (GR.push(tR), yR.push(Number(RR)))
```

#### 1334. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10425` → after: `L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10284) · [Before (L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10425)

```diff
-         const mW = this.ZZ.metadatas;
+         const yR = this.KK.metadatas;
```

#### 1335. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10430` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10289) · [Before (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10430)

```diff
-             const iW = (0, Yx.h)(this.getItemName(WW), "stoodOnSpeedMultiplier");
+             const JR = (0, Mw.d)(this.getItemName(RR), "stoodOnSpeedMultiplier");
```

#### 1336. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10441` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10300) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10441)

```diff
-           if (!(0, gW.K)(OW))
+           if (!(0, oR.I)(GR))
```

#### 1337. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10452` → after: `L10311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10311) · [Before (L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10452)

```diff
-         return 1 === iW ? mW = .5 * OW : 2 === iW ? mW = .75 * OW : iW >= this.maxBunnyHops && (mW = OW), 1 + mW
+         return 1 === JR ? yR = .5 * GR : 2 === JR ? yR = .75 * GR : JR >= this.maxBunnyHops && (yR = GR), 1 + yR
```

#### 1338. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10469` → after: `L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10328) · [Before (L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10469)

```diff
-         return this.Hx.pickBlock(iW, OW, this.getBlockReach(WW))
+         return this.xw.pickBlock(JR, GR, this.getBlockReach(RR))
```

#### 1339. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10488-L10490` → after: `L10347-L10349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10347-L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10347-L10349) · [Before (L10488-L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10488-L10490)

```diff
-         } = null !== (mW = null === (EW = WW.attributes.customAttributes) || void 0 === EW ? void 0 : EW._k) && void 0 !== mW ? mW : {};
-         WW.attributes.customAttributes = Object.assign(null !== (NW = WW.attributes.customAttributes) && void 0 !== NW ? NW : {}, {
-           author: this.getEntityName(this.isClient ? this.Hx.Dv : OW),
+         } = null !== (yR = null === (tR = RR.attributes.customAttributes) || void 0 === tR ? void 0 : tR._k) && void 0 !== yR ? yR : {};
+         RR.attributes.customAttributes = Object.assign(null !== (uR = RR.attributes.customAttributes) && void 0 !== uR ? uR : {}, {
+           author: this.getEntityName(this.isClient ? this.xw.WH : GR),
```

#### 1340. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10492` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10351) · [Before (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10492)

```diff
-           _k: void 0 === (null === LW || void 0 === LW ? void 0 : LW.text) ? wW : {
+           _k: void 0 === (null === qR || void 0 === qR ? void 0 : qR.text) ? fR : {
```

#### 1341. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10499` → after: `L10358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10358) · [Before (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10499)

```diff
-         const NW = tW.j[mW].name,
+         const uR = VR.l[yR].name,
```

#### 1342. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10501` → after: `L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10360) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10501)

```diff
-         NW !== PW && this.xH(WW, iW, OW, (0, tW.l)(PW))
+         uR !== ZR && this.lD(RR, JR, GR, (0, VR.n)(ZR))
```

#### 1343. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10505-L10506` → after: `L10364-L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10364-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10364-L10365) · [Before (L10505-L10506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10505-L10506)

```diff
-         const mW = tW.j[WW].name.split("|");
-         return `${mW[0]}|meta|${null!==(OW=mW[2])&&void 0!==OW?OW:"rot1"}|${iW>0?"full":"empty"}`
+         const yR = VR.l[RR].name.split("|");
+         return `${yR[0]}|meta|${null!==(GR=yR[2])&&void 0!==GR?GR:"rot1"}|${JR>0?"full":"empty"}`
```

#### 1344. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10509` → after: `L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10368) · [Before (L10509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10509)

```diff
-         const OW = tW.j[WW].name,
+         const GR = VR.l[RR].name,
```

#### 1345. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10513` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10372) · [Before (L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10513)

```diff
-           return `${0===iW?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(EW=mW[2])&&void 0!==EW?EW:"rot1"}|books${iW}`
+           return `${0===JR?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(tR=yR[2])&&void 0!==tR?tR:"rot1"}|books${JR}`
```

#### 1346. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10520` → after: `L10379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10379) · [Before (L10520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10520)

```diff
-         const EW = this.EY.ziW(WW).getItems();
+         const tR = this.zC.PGR(RR).getItems();
```

#### 1347. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10523` → after: `L10382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10382) · [Before (L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10523)

```diff
-           if (LW.s.includes(null === WW || void 0 === WW ? void 0 : WW.name)) {
+           if (qR.q.includes(null === RR || void 0 === RR ? void 0 : RR.name)) {
```

#### 1348. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10541` → after: `L10400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10400) · [Before (L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10541)

```diff
-         if (this.EY.liW(WW, "itemState")) return "Item";
+         if (this.zC.RGR(RR, "itemState")) return "Item";
```

#### 1349. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10545` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10404) · [Before (L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10545)

```diff
-           return -1 === WW ? iW : iW.slice(0, WW)
+           return -1 === RR ? JR : JR.slice(0, RR)
```

#### 1350. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10547` → after: `L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10406) · [Before (L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10547)

```diff
-         return console.error(new Error(`Tried to get entity type for entity ${WW} but it doesn't exist in networked state`).stack), null
+         return console.error(new Error(`Tried to get entity type for entity ${RR} but it doesn't exist in networked state`).stack), null
```

#### 1351. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10553` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10412) · [Before (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10553)

```diff
-           PW = kW().copy(this.tempVec2, AW.k[NW.pose]);
+           ZR = UR().copy(this.tempVec2, eR.m[uR.pose]);
```

#### 1352. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10557-L10558` → after: `L10416-L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10416-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10416-L10417) · [Before (L10557-L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10557-L10558)

```diff
-         if (iW.type === Px.p.DEFAULT) {
-           const iW = (0, mx.e)(this.lF(WW), this.getLifeformType(WW));
+         if (JR.type === Zw.k.DEFAULT) {
+           const JR = (0, yw.f)(this.p_(RR), this.getLifeformType(RR));
```

#### 1353. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10563` → after: `L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10422) · [Before (L10563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10563)

```diff
-         mW && (wW += Math.max(Math.abs(mW[0]), Math.abs(mW[2])), tW += mW[1]), (wW > Ex.f || tW > Ex.e) && ((iW.type !== Px.p.DEFAULT || mW) && this.onCollisionBoxCapped(), wW = Math.min(wW, Ex.f), tW = Math.min(tW, Ex.e)), this.updatePositionAndPhysicsImpl(WW, iW, OW, null !== m … [truncated]
+         yR && (fR += Math.max(Math.abs(yR[0]), Math.abs(yR[2])), VR += yR[1]), (fR > tw.h || VR > tw.e) && ((JR.type !== Zw.k.DEFAULT || yR) && this.onCollisionBoxCapped(), fR = Math.min(fR, tw.h), VR = Math.min(VR, tw.e)), this.updatePositionAndPhysicsImpl(RR, JR, GR, null !== y … [truncated]
```

#### 1354. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10566-L10567` → after: `L10425-L10426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10425-L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10425-L10426) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10566-L10567)

```diff
-         const NW = this.Hx.EY.YG(WW),
-           PW = null === OW && !(0, zW.z)(iW.type),
+         const uR = this.xw.zC.f6(RR),
+           ZR = null === GR && !(0, TR.v)(JR.type),
```

#### 1355. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10569` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10428) · [Before (L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10569)

```diff
-         this.Hx.EY.HOW(WW, LW.width, LW.height, LW.width)
+         this.xw.zC.ayR(RR, qR.width, qR.height, qR.width)
```

#### 1356. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10572` → after: `L10431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10431) · [Before (L10572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10572)

```diff
-         const iW = this.Hx.EY.YG(WW),
+         const JR = this.xw.zC.f6(RR),
```

#### 1357. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10578-L10579` → after: `L10437-L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10437-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10437-L10438) · [Before (L10578-L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10578-L10579)

```diff
-         const mW = this.Hx.EY.YG(WW),
-           EW = null !== (OW = mW.Wl) && void 0 !== OW ? OW : this.Hx.Wl;
+         const yR = this.xw.zC.f6(RR),
+           tR = null !== (GR = yR.Fw) && void 0 !== GR ? GR : this.xw.Fw;
```

#### 1358. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10595` → after: `L10454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10454) · [Before (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10595)

```diff
-                 const NW = !0 === mW ? Mx : mW;
+                 const uR = !0 === yR ? Aw : yR;
```

#### 1359. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10600` → after: `L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10459) · [Before (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10600)

```diff
-         }(mW.JiW, EW, iW.width, iW.height, ((iW, OW, mW) => this.JR(iW, OW, mW) ? this.getBlockCollisionForPlayer(WW, iW, OW, mW, this.getClientPredictedBlock(WW, iW, OW, mW)) : null))
+         }(yR.rGR, tR, JR.width, JR.height, ((JR, GR, yR) => this.lT(JR, GR, yR) ? this.getBlockCollisionForPlayer(RR, JR, GR, yR, this.getClientPredictedBlock(RR, JR, GR, yR)) : null))
```

#### 1360. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10603` → after: `L10462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10462) · [Before (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10603)

```diff
-         const iW = this.Hx.EY.YG(WW),
+         const JR = this.xw.zC.f6(RR),
```

#### 1361. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10605` → after: `L10464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10464) · [Before (L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10605)

```diff
-         void 0 !== OW && (this.playerBodyGrowth.clear(iW), this.Hx.EY.HOW(WW, OW.width, OW.height, OW.width))
+         void 0 !== GR && (this.playerBodyGrowth.clear(JR), this.xw.zC.ayR(RR, GR.width, GR.height, GR.width))
```

#### 1362. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10609` → after: `L10468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10468) · [Before (L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10609)

```diff
-         return null !== (iW = null === (OW = this.vehicleSettingOverridesByEId.get(WW)) || void 0 === OW ? void 0 : OW.getOverrides()) && void 0 !== iW ? iW : null
+         return null !== (JR = null === (GR = this.vehicleSettingOverridesByEId.get(RR)) || void 0 === GR ? void 0 : GR.getOverrides()) && void 0 !== JR ? JR : null
```

#### 1363. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10630` → after: `L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10489) · [Before (L10630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10630)

```diff
-         return this.EY.HiW(WW).physicsState
+         return this.zC.aGR(RR).physicsState
```

#### 1364. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10636` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10495) · [Before (L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10636)

```diff
-           this.updatePositionAndPhysics(iW, OW, !1, null !== WW && void 0 !== WW ? WW : void 0, !0)
+           this.updatePositionAndPhysics(JR, GR, !1, null !== RR && void 0 !== RR ? RR : void 0, !0)
```

#### 1365. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10642` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10501) · [Before (L10642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10642)

```diff
-         return void 0 === mW ? (0, lx.l)(iW.type, iW.tier) : mW.getResolvedSettings(iW.type, iW.tier)
+         return void 0 === yR ? (0, rw.m)(JR.type, JR.tier) : yR.getResolvedSettings(JR.type, JR.tier)
```

#### 1366. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10647` → after: `L10506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10506) · [Before (L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10647)

```diff
-         return void 0 === mW ? (0, lx.h)(iW.type).getBlockLookupsForTier(iW.tier) : mW.getBlockLookups(iW.type, iW.tier)
+         return void 0 === yR ? (0, rw.k)(JR.type).getBlockLookupsForTier(JR.tier) : yR.getBlockLookups(JR.type, JR.tier)
```

#### 1367. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10652-L10653` → after: `L10511-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10511-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10511-L10512) · [Before (L10652-L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10652-L10653)

```diff
-           EY: OW
-         } = this.Hx, mW = OW.getState(WW, OW.names.nZ);
+           zC: GR
+         } = this.xw, yR = GR.getState(RR, GR.names.vK);
```

#### 1368. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10658-L10659` → after: `L10517-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10517-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10517-L10518) · [Before (L10658-L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10658-L10659)

```diff
-         if (null === OW) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${WW}"`);
-         const mW = this.Hx.EY.jB(null !== iW && void 0 !== iW ? iW : this.Hx.Dv),
+         if (null === GR) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${RR}"`);
+         const yR = this.xw.zC.Lk(null !== JR && void 0 !== JR ? JR : this.xw.WH),
```

#### 1369. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10663-L10664` → after: `L10522-L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10522-L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10522-L10523) · [Before (L10663-L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10663-L10664)

```diff
-           } = (0, lx.l)(EW.type, EW.tier);
-         mW.Sj[1] = 0, mW.applyImpulse([0, NW, 0]), this.useConsumableVehicleImpl(iW, WW, OW)
+           } = (0, rw.m)(tR.type, tR.tier);
+         yR.BL[1] = 0, yR.applyImpulse([0, uR, 0]), this.useConsumableVehicleImpl(JR, RR, GR)
```

#### 1370. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10667` → after: `L10526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10526) · [Before (L10667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10667)

```diff
-         const mW = this.Hx.EY.jB(WW),
+         const yR = this.xw.zC.Lk(RR),
```

#### 1371. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10676-L10677` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L10535-L10536) · [Before (L10676-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L10676-L10677)

```diff
-           EW = AW.f.gliderFuelCooldown * OW,
-           NW = this.isClient ? EW : Math.max(0, EW - AW.f.gliderFuelServerLeewayMs);
+           tR = eR.g.gliderFuelCooldown * GR,
+           uR = this.isClient ? tR : Math.max(0, tR - eR.g.gliderFuelServerLeewayMs);
```
