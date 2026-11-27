# Changed — Bundle Modifications Report (Part 007 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `7 / 82` (**304** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 46. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L422-L423` → after: `L1056-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1056-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1056-L1070) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L422-L423)

```diff
-     function Ue(ee) {
-       ee !== Me && (Me = ee, ye.h.yR(be, ee))
+     function kW() {
+       var WW;
+       null === (WW = bW) || void 0 === WW || WW.droppedCopy()
+     }
+     async function sW(WW) {
+       var iW;
+       null === (iW = bW) || void 0 === iW || iW.takeRecords();
+       const {
+         clientHintsRead: mW,
+         debugDeviceLines: EW
+       } = await OW.e(35).then((() => OW(35106)));
+       await mW, wW.p.save({
+         ...WW,
+         device: EW()
+       })
```

#### 47. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L426` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1073) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L426)

```diff
-   37627: (ee, ie, He) => {
+   40951: (WW, iW, OW) => {
```

#### 48. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L429-L430` → after: `L1076-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1076-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1076-L1083) · [Before (L429-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L429-L430)

```diff
-       e: () => Ke,
-       i: () => ye
+       h: () => bW,
+       i: () => wW,
+       k: () => ZW,
+       o: () => xW,
+       p: () => cW,
+       r: () => PW,
+       t: () => tW,
+       v: () => jW
```

#### 49. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L433-L434` → after: `L1157-L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1157-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1157-L1158) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L433-L434)

```diff
-       constructor(ee) {
-         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = ee
+       constructor() {
+         this.shown = null, this.needed = null, this.neededSince = 0
```

#### 50. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L436-L438` → after: `L1160-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1160-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1160-L1163) · [Before (L436-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L436-L438)

```diff
-       setMultiplierType(ee, ie) {
-         var He;
-         this.multipliers[ee] = ie, null === (He = this._onUpdate) || void 0 === He || He.call(this)
+       update(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const OW = this.shown;
+         return WW !== this.needed && (this.needed = WW, this.neededSince = iW, null === WW && (this.shown = null)), this.shown !== this.needed && iW - this.neededSince > 200 && (this.shown = this.needed), this.shown !== OW
```

#### 51. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L440-L442` → after: `L1165-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1165-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1165-L1261) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L440-L442)

```diff
-       removeMultiplier(ee) {
-         var ie;
-         delete this.multipliers[ee], null === (ie = this._onUpdate) || void 0 === ie || ie.call(this)
+     }
+ 
+     function AW(WW) {
+       return [{
+         translationKey: `touchKeys:${WW}`
+       }]
+     }
+     const bW = {
+       open: AW("open"),
+       close: AW("close"),
+       milk: AW("milk"),
+       shear: AW("shear"),
+       tame: AW("tame"),
+       feed: AW("feed"),
+       ride: AW("ride")
+     };
+ ... (81 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L444-L445` → after: `L1263-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1263-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1263-L1509) · [Before (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L444-L445)

```diff
-       getMultiplierType(ee) {
-         return this.multipliers[ee]
+     }
+     var wW = OW(39955),
+       tW = OW(5725),
+       ZW = OW(192),
+       xW = OW(3083),
+       lW = OW(39311),
+       AW = OW(182),
+       bW = OW(4337),
+       jW = OW(27),
+       UW = OW(352),
+       kW = OW.n(UW),
+       sW = OW(39083),
+       MW = OW(38431),
+       KW = OW(38694),
+       SW = OW(38437),
+       YW = OW(39145),
+ ... (231 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L447-L450` → after: `L1511-L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1511-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1511-L1525) · [Before (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L447-L450)

```diff
-       getTotalMultipliedVal() {
-         let ee = 1;
-         for (const ie in this.multipliers) ee *= this.multipliers[ie];
-         return ee
+       switch (LW.status) {
+         case "loading":
+           return LW.loaded;
+         case "failed":
+           return null;
+         case "ready": {
+           const iW = NW.instantiate(LW.typeName);
+           NW.WK(iW, !0), NW.setPosition(iW, 0, 0, 0), NW.setRotationEuler(iW, 0, 0, 0), NW.set(iW, "aOpacity", 1), NW.set(iW, "aLightLevels", FW.d);
+           const [EW, PW, cW] = Array.isArray(OW) ? OW : [OW, OW, OW], wW = mW.bakeInScaling;
+           if (NW.setScale(iW, -EW * wW, PW * wW, cW * wW), WW.kA) {
+             const [WW, OW, EW, PW] = mW.shaderPackItem(0, void 0);
+             NW.set(iW, "aShaderPackItem", WW, OW * wW, EW, PW)
+           }
+           return iW
+         }
```

#### 54. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L455-L456` → after: `L1561-L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1561-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1561-L1587) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L455-L456)

```diff
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = ee
+         this.bloxd = void 0, this.Hx = void 0
+       }
+       static sourcesFor(WW) {
+         const iW = bi.sourcesByScene.get(WW);
+         if (iW) return iW;
+         const OW = {
+           boxes: new Map,
+           particleEmitter: null
+         };
+         return bi.sourcesByScene.set(WW, OW), (0, GW.g)(WW, (() => {
+           for (const WW of [...OW.boxes.values(), OW.particleEmitter]) null === WW || void 0 === WW || WW._rebuild()
+         })), OW
+       }
+       init(WW) {
+         this.bloxd = WW, this.Hx = WW.Hx;
+         const iW = (0, GW.g)(this.Hx.TZ.bD(), (() => {
+ ... (11 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L458-L461` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1589) · [Before (L458-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L458-L461)

```diff
-       setBooleanType(ee, ie) {
-         const He = this._getTotalBooleanVal();
-         this.booleans[ee] = !!ie;
-         const ye = this.getTotalBooleanVal();
+       handleParticleSystemUpdate(WW, iW, OW) {
```

#### 56. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L463` → after: `L1591-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1591-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1591-L1745) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L463)

```diff
-         ye !== He && (null === (be = this._onUpdate) || void 0 === be || be.call(this, ye, this.booleans));
+         (0, pW.e)(this.Hx).mergeParticleSystemUpdate((0, VW.b)(WW), iW, OW);
+         const EW = null === (mW = this.bloxd.meshParticleSystems[WW]) || void 0 === mW ? void 0 : mW[iW];
+         (0, gW.K)(EW) || (0, dW.d)(EW, OW)
+       }
+       getLatestParticleSystemUpdate(WW, iW) {
+         return (0, pW.e)(this.Hx).getParticleSystemUpdate((0, VW.b)(WW), null !== iW && void 0 !== iW ? iW : "__root__")
+       }
+       addBoard(WW, iW, OW, mW) {
+         var EW, NW, PW;
+         this.removeBoard(WW, iW, OW);
+         const LW = this.bloxd.blockDataOwner.getBlockData(WW, iW, OW),
+           cW = null !== (EW = null === LW || void 0 === LW || null === (NW = LW.persisted.shared.text) || void 0 === NW ? void 0 : NW.toString()) && void 0 !== EW ? EW : "",
+           wW = null !== (PW = null === LW || void 0 === LW ? void 0 : LW.persisted.shared.textSize) && void 0 !== PW ? PW : 0;
+         this.addBoardTextEntity([WW, iW, OW], 25, (() => {
+           const WW = {
+             position: rW.fA.Zero(),
+ ... (139 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L466-L472` → after: `L1748-L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1748-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1748-L1752) · [Before (L466-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L466-L472)

```diff
-       removeBoolean(ee) {
-         const ie = this._getTotalBooleanVal();
-         delete this.booleans[ee];
-         const He = this._getTotalBooleanVal();
-         var ye;
-         null !== He && He !== ie && (null === (ye = this._onUpdate) || void 0 === ye || ye.call(this, He, this.booleans));
-         return null !== He && void 0 !== He && He
+       newSingleBurstParticleSystem(WW) {
+         const iW = this.Hx.TZ.bD(),
+           OW = this.newParticleSystem(iW, WW);
+         (0, dW.t)(this.Hx, OW), OW.createBoxEmitter(new rW.fA(Math.min(WW.dir1[0], WW.dir2[0]), Math.min(WW.dir1[1], WW.dir2[1]), Math.min(WW.dir1[2], WW.dir2[2])), new rW.fA(Math.max(WW.dir1[0], WW.dir2[0]), Math.max(WW.dir1[1], WW.dir2[1]), Math.max(WW.dir1[2], WW.dir2[2])), ne … [truncated]
+         new oW.f(OW, WW.maxLifeTime).emitAmount(WW.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(WW)
```

#### 58. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L474-L475` → after: `L1754-L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1754-L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1754-L2011) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L474-L475)

```diff
-       getBooleanType(ee) {
-         return this.booleans[ee]
+       tryRetainParticleShader(WW) {
+         if (WW instanceof TW.d) return !1;
+         const iW = `${WW.blendMode}|${WW.useRampGradients}`,
+           OW = bi.warmParticleShaderKeys,
+           mW = this.Hx.TZ.bD();
+         return bi.warmedForScene !== mW && (bi.warmedForScene = mW, OW.clear()), !(OW.has(iW) || OW.size >= bi.MAX_WARM_PARTICLE_SHADERS) && (OW.add(iW), !0)
+       }
+       getEntityMesh(WW, iW, OW) {
+         const mW = this.Hx.TZ.bD();
+         if ("BloxdBlock" === WW) {
+           var EW, NW, PW;
+           const WW = Array.isArray(iW.size) ? iW.size[1] : iW.size,
+             mW = null !== (EW = iW.meshOffset) && void 0 !== EW ? EW : kW().fi(0, WW / 2, 0),
+             LW = WW + .3,
+             cW = ti(this.Hx, iW.blockName, iW.size);
+           if ("number" === typeof cW) return OW(cW), {
+ ... (242 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L477-L478` → after: `L2013-L2036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2013-L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2013-L2036) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L477-L478)

```diff
-       getTotalBooleanVal() {
-         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       getParticleEmitter(WW, iW, OW) {
+         const mW = `ParticleEmitter|${JSON.stringify(WW)}`,
+           EW = this.Hx.TZ.bD(),
+           NW = bi.sourcesFor(EW);
+         if (!NW.particleEmitter) {
+           const WW = (0, sW.r)(this.Hx.TZ, `${mW}EntityMesh`, (0, KW.d)({
+             width: 1,
+             height: 1,
+             depth: 1
+           }));
+           WW.visibility = 0, WW.pA = !0, WW.XA = !0, WW.WK(!1), WW.Fb = !1, (0, HW.f)(WW) || WW.bD().pD(WW), (0, XW.h)(WW), NW.particleEmitter = WW
+         }
+         const PW = NW.particleEmitter.createInstance(`${mW}EntityMeshInstance`);
+         PW.YZ.set(WW.width, WW.height, WW.depth), PW.Fb = !1, PW.position.set(0, 0, 0);
+         const LW = this.newMeshParticleSystem(PW, WW);
+         if ((0, gW.K)(WW.dir1) || (LW.direction1._x = WW.dir1[0], LW.direction1._y = WW.dir1[1], LW.direction1._z = WW.dir1[2]), (0, gW.K)(WW.dir2) || (LW.direction2._x = WW.dir2[0], LW.direction2._y = WW.dir2[1], LW.direction2._z = WW.dir2[2]), "ring" === WW.emitterShape && (LW. … [truncated]
+ ... (8 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L480` → after: `L2038-L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2038-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2038-L2061) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L480)

```diff
-       forceUpdate() {
+     }
+     bi.sourcesByScene = new WeakMap, bi.MAX_WARM_PARTICLE_SHADERS = 12, bi.warmParticleShaderKeys = new Set, bi.warmedForScene = null;
+     var ji = OW(39228),
+       Ui = OW(39),
+       ki = OW(1239),
+       si = OW(154),
+       Mi = OW(5211),
+       Ki = OW(38841),
+       Si = OW(5713),
+       Yi = OW(1217),
+       yi = OW(1365),
+       Ti = OW(39398),
+       Ji = OW(2780),
+       Hi = OW(40907);
+     class ni extends Ji.EventEmitter {
+       constructor(WW, iW) {
+ ... (8 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L482` → after: `L2063-L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2063-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2063-L2107) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L482)

```diff
-         null === (ee = this._onUpdate) || void 0 === ee || ee.call(this, this.getTotalBooleanVal(), this.booleans)
+         this.kY = new Hi.d(this.element, 10), this.kY.Fv = iW.Fv, this.kY.XV = iW.XV, this.qV = (mW = this.element, "pointerLockElement" in document && "function" === typeof mW.requestPointerLock), this.GV = !!iW.rV, this.kY.rV = this.GV && this.qV, this.kY.zV = iW.zV, this.kY.mp … [truncated]
+           WW !== this.JV.hV && (this.JV.hV = WW, WW && (this.Hx.camera.Ip = !0), this.emit(WW ? "gainedPointerLock" : "lostPointerLock"), WW && (this.JV.oV = !0))
+         }, this.kY.uZ = () => {
+           this.kY.Lk = WW.TZ.resize.bind(WW.TZ),
+             function(WW) {
+               if ("pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document) {
+                 WW.JV.HV = !0;
+                 var iW = function(OW) {
+                   WW.JV.HV = !1, document.removeEventListener(OW.type, iW)
+                 };
+                 document.addEventListener("touchmove", iW)
+               }
+             }(this), this.element.addEventListener("mouseenter", (() => {
+               this.JV.oV = !0
+             })), this.element.addEventListener("mouseleave", (() => {
+               this.JV.oV = !1
+ ... (29 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L484-L485` → after: `L2109-L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2109-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2109-L2110) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L484-L485)

```diff
-       _getTotalBooleanVal() {
-         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       get lH() {
+         return this.JV.lH
```

#### 63. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L488-L492` → after: `L2113-L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2113-L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2113-L2123) · [Before (L488-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L488-L492)

```diff
-     class Me extends be {
-       getTotalBooleanVal() {
-         const ee = this._getTotalBooleanVal();
-         if (null === ee) throw new Error("Should not be gotten before at least 1 type has been initialised");
-         return ee
+ 
+     function ui(WW) {
+       var iW = WW.WC || null;
+       "string" === typeof iW && (iW = document.querySelector(iW));
+       var OW = iW || function() {
+         var WW = document.createElement("div");
+         return WW.tabIndex = 1, WW.style.outline = "none", WW.style.position = "fixed", WW.style.left = "0px", WW.style.right = "0px", WW.style.top = "0px", WW.style.bottom = "0px", WW.style.height = "100%", WW.style.overflow = "hidden", document.body.appendChild(WW), document.bo … [truncated]
+       }();
+       return {
+         element: OW,
+         canvas: oi(OW)
```

#### 64. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L494-L498` → after: `L2125-L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2125-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2125-L2148) · [Before (L494-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L494-L498)

```diff
-       _getTotalBooleanVal() {
-         let ee = !1,
-           ie = !0;
-         for (const He in this.booleans) ee = !0, ie &&= this.booleans[He];
-         return ee ? ie : null
+     }
+ 
+     function oi(WW) {
+       var iW = WW.querySelector("canvas");
+       return iW || ((iW = document.createElement("canvas")).style.position = "absolute", iW.style.left = "0px", iW.style.top = "0px", iW.style.height = "100%", iW.style.width = "100%", iW.id = "noa-canvas", WW.insertBefore(iW, WW.firstChild)), iW
+     }
+     OW(40914);
+     class di extends Ji.EventEmitter {
+       constructor() {
+         super(...arguments), this.snapshots = [], this.depth = 0
+       }
+       mC(WW, iW) {
+         const OW = this._events[WW];
+         if (void 0 === OW) return;
+         if ("function" === typeof OW) return void OW.call(this, iW);
+         const mW = OW.length,
+ ... (8 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L501-L505` → after: `L2151-L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2151-L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2151-L2159) · [Before (L501-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L501-L505)

```diff
-     class Ke extends be {
-       getTotalBooleanVal() {
-         const ee = this._getTotalBooleanVal();
-         if (null === ee) throw new Error("Should not be gotten before at least 1 type has been initialised");
-         return ee
+     var ei = OW(3891),
+       vi = OW.n(ei),
+       gi = OW(40922),
+       Di = OW.n(gi);
+     var Vi = OW(40925),
+       fi = OW(352);
+     class Ci {
+       constructor(WW, iW, OW, mW, EW, NW, PW) {
+         this.Mx = new Vi(WW.base, WW.vec), this.FP = iW, this.JC = !0, this.friction = OW, this.restitution = mW, this.gravityMultiplier = EW, this.Vx = NW, this.YC = !!PW, this.zx = -1, this.fluidDrag = -1, this.fluidDragVert = -1, this.fluidDragHoriz = -1, this.Xx = null, this. … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L507-L511` → after: `L2161-L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2161-L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2161-L2189) · [Before (L507-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L507-L511)

```diff
-       _getTotalBooleanVal() {
-         let ee = !1,
-           ie = !1;
-         for (const He in this.booleans) ee = !0, ie ||= this.booleans[He];
-         return ee ? ie : null
+       loadFromCopy(WW) {
+         this.Mx.base[0] = WW.Mx.base[0], this.Mx.base[1] = WW.Mx.base[1], this.Mx.base[2] = WW.Mx.base[2], this.Mx.vec[0] = WW.Mx.vec[0], this.Mx.vec[1] = WW.Mx.vec[1], this.Mx.vec[2] = WW.Mx.vec[2], this.Mx.max[0] = WW.Mx.max[0], this.Mx.max[1] = WW.Mx.max[1], this.Mx.max[2] = W … [truncated]
+       }
+       loadStateFromCopy(WW) {
+         fi.copy(this.Mx.base, WW.Mx.base), fi.copy(this.Mx.vec, WW.Mx.vec), fi.copy(this.Mx.max, WW.Mx.max), fi.copy(this.Sj, WW.Sj), fi.copy(this.resting, WW.resting), this.inFluid = WW.inFluid, this.ratioInFluid = WW.ratioInFluid, fi.copy(this.eC, WW.eC), fi.copy(this.gC, WW.gC … [truncated]
+       }
+       setPosition(WW) {
+         Xi(WW), fi.subtract(WW, WW, this.Mx.base), this.Mx.translate(WW), this.pC()
+       }
+       Vk() {
+         return fi.clone(this.Mx.base)
+       }
+       applyForce(WW) {
+         Xi(WW), this.eC[0] = this.eC[0] + WW[0], this.eC[1] = this.eC[1] + WW[1], this.eC[2] = this.eC[2] + WW[2], this.pC()
+       }
+       applyImpulse(WW) {
+ ... (13 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L514-L556` → after: `L2192-L41119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2192-L41119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L2192-L41119) · [Before (L514-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L514-L556)

```diff
-   },
-   37620: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Me,
-       f: () => ye,
-       j: () => be
-     });
-     const ye = 15,
-       be = 3,
-       Me = 30
-   },
-   7083: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke,
-       f: () => be,
-       j: () => Fe,
- ... (27 more removed lines; see GitHub link above)
+     var Xi = WW => {};
+     var Bi = OW(40925);
+ 
+     function qi(WW) {
+       return WW(new Bi([0, 0, 0], [1, 1, 1]), 1, 1, 0, 1, null, !1)
+     }
+ 
+     function Ri() {
+       this.zx = .1, this.fluidDrag = .4, this.Fx = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
+     }
+     class Gi {
+       constructor(WW, iW, OW) {
+         WW = Object.assign(new Ri, WW), this.gravity = WW.gravity, this.zx = WW.zx, this.Fx = WW.Fx, this.fluidDrag = WW.fluidDrag, this.minBounceImpulse = WW.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.Bx = WW.Bx, this.uC = WW.uC, this.rollbac … [truncated]
+           return new Ci(WW, iW, OW, mW, EW, NW, PW)
+         })), this.testSolid = iW, this.testFluid = OW
+       }
+ ... (38912 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/110.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/110.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a)

#### 1. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L2)

```diff
- export const ids = [108, 110];
+ export const ids = [110];
```

#### 2. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L77` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L4) · [Before (L4-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L4-L77)

```diff
-   37224: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       countDecodesAs: () => Re,
-       decodedAudio: () => ke
-     });
-     var ye = He(3189),
-       be = He(5338);
-     const Me = be.Howler,
-       Ke = new Map;
-     let Ue = 0;
-     const Fe = {
-         song: 0,
-         sound: 0
-       },
-       Je = new WeakMap,
-       oe = new WeakSet;
- ... (58 more removed lines; see GitHub link above)
+   5615: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L84-L86` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L11-L13) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L84-L86)

```diff
-     var ye, be = He(5340),
-       Me = He(3791),
-       Ke = He(5055);
+     var mW, EW = OW(5618),
+       NW = OW(4653),
+       PW = OW(5356);
```

#### 4. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L91` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L18) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L91)

```diff
-       if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
+       if (LW.ctx || !LW.usingWebAudio || "undefined" === typeof AudioContext || !(0, PW.k)()) return;
```

#### 5. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L103` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L30) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L103)

```diff
-       be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
+       EW.gain.setValueAtTime(LW._muted ? 0 : null !== (WW = LW._volume) && void 0 !== WW ? WW : 1, mW.currentTime), EW.connect(mW.destination), LW.ctx = mW, LW.masterGain = EW, null === (iW = LW._setup) || void 0 === iW || iW.call(LW)
```

#### 6. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L130` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L57) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L130)

```diff
-     }, (0, Ke.f)() && (Ue._unlockAudio = () => {
+     }, (0, PW.k)() && (LW._unlockAudio = () => {
```

#### 7. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L155` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L82) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L155)

```diff
-           } else "afterPaint" === ye && (ye = "queued", (0, Me.c)(ie.timeStamp, (() => {
+           } else "afterPaint" === mW && (mW = "queued", (0, NW.b)(iW.timeStamp, (() => {
```

#### 8. `bundles/bloxd.io/chunks/js/110.js` (Changed code · before: `L163` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7aR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1615fd3ee094e9391c6fa3f110160b5f0d173f27fb5facbd5f48edf4fbf9a7a) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/110.js#L90) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/110.js#L163)

```diff
-       for (const Me of Ke.b) document.addEventListener(Me, Je, {
+       for (const NW of PW.d) document.addEventListener(NW, wW, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/111.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/111.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4)

#### 1. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/111.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/111.js#L3)

```diff
- export const ids = [111];
+ export const ids = [110, 111];
```

#### 2. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L5-L68` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/111.js#L4-L40) · [Before (L5-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/111.js#L5-L68)

```diff
-   5340: (ee, ie, He) => {
-     var ye;
-     ! function() {
-       var be = function() {
-         this.init()
-       };
-       be.prototype = {
-         init: function() {
-           var ee = this || Me;
-           return ee._counter = 1e3, ee._html5AudioPool = [], ee.html5PoolSize = 10, ee._codecs = {}, ee._howls = [], ee._muted = !1, ee._volume = 1, ee._canPlayEvent = "canplaythrough", ee._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, e … [truncated]
-         },
-         volume: function(ee) {
-           var ie = this || Me;
-           if (ee = parseFloat(ee), ie.ctx || qe(), "undefined" !== typeof ee && ee >= 0 && ee <= 1) {
-             if (ie._volume = ee, ie._muted) return ie;
-             ie.usingWebAudio && ie.masterGain.gain.setValueAtTime(ee, Me.ctx.currentTime);
- ... (48 more removed lines; see GitHub link above)
+   37569: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       countDecodesAs: () => ZW,
+       decodedAudio: () => xW
+     });
+     var mW = OW(4020),
+       EW = OW(5615);
+     const NW = EW.Howler,
+       PW = new Map;
+     let LW = 0;
+     const cW = {
+         song: 0,
+         sound: 0
+       },
+       wW = new WeakMap,
+       tW = new WeakSet;
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L70-L125` → after: `L42-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/111.js#L42-L50) · [Before (L70-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/111.js#L70-L125)

```diff
-             ie = "undefined" !== typeof Audio ? new Audio : null
-           } catch (oe) {
-             return ee
-           }
-           if (!ie || "function" !== typeof ie.canPlayType) return ee;
-           var He = ie.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             ye = ee._navigator ? ee._navigator.userAgent : "",
-             be = ye.match(/OPR\/([0-6].)/g),
-             Ke = be && parseInt(be[0].split("/")[1], 10) < 33,
-             Ue = -1 !== ye.indexOf("Safari") && -1 === ye.indexOf("Chrome"),
-             Fe = ye.match(/Version\/(.*?) /),
-             Je = Ue && Fe && parseInt(Fe[1], 10) < 15;
-           return ee._codecs = {
-             mp3: !(Ke || !He && !ie.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!He,
-             opus: !!ie.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (40 more removed lines; see GitHub link above)
+             null === mW || void 0 === mW || mW(WW)
+           } finally {
+             const OW = iW.find((WW => "loaded" === WW._state));
+             void 0 !== OW && "string" === typeof OW._src && function(WW, iW, OW) {
+               var mW;
+               LW += OW - (null !== (mW = PW.get(iW)) && void 0 !== mW ? mW : 0), PW.set(iW, OW);
+               const EW = wW.get(WW);
+               void 0 !== EW && cW[EW]++
+             }(OW, OW._src, WW.length * WW.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 4. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L730-L733` → after: `L54-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L54-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/111.js#L54-L186) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/111.js#L730-L733)

```diff
-       void 0 === (ye = function() {
-         return {
-           Howler: Me,
-           Howl: Ke
+         if (!iW) return OW(WW, tW, EW);
+         const ZW = OW(WW).then(tW);
+         return ZW.catch((WW => {
+           null === EW || void 0 === EW || EW(WW)
+         })), ZW
+       }
+     }(0, mW.h)(xW);
+     const AW = EW.Howl.prototype,
+       bW = AW.init;
+     AW.init = function(WW) {
+       return EW.Howler.volume(), NW.ctx && lW(NW.ctx), bW.call(this, WW)
+     };
+     const jW = AW.unload;
+     AW.unload = function() {
+       const WW = this._src,
+         iW = jW.call(this);
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L735-L737` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/111.js#L188-L191) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/111.js#L735-L737)

```diff
-       }.apply(ie, [])) || (ee.exports = ye), ie.Howler = Me, ie.Howl = Ke, "undefined" !== typeof He.g ? (He.g.HowlerGlobal = be, He.g.Howler = Me, He.g.Howl = Ke, He.g.Sound = Ue) : "undefined" !== typeof window && (window.HowlerGlobal = be, window.Howler = Me, window.Howl = Ke, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function UW() {
```

#### 6. `bundles/bloxd.io/chunks/js/111.js` (Changed code · before: `L739-L893` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-569aa21d44912875a95c2f29f93c945056d484073a07a0e6b648fb457c00efc4) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/111.js#L193-L195) · [Before (L739-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/111.js#L739-L893)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(ee) {
-         var ie = this;
-         if (!ie.ctx || !ie.ctx.listener) return ie;
-         for (var He = ie._howls.length - 1; He >= 0; He--) ie._howls[He].stereo(ee);
-         return ie
-       }, HowlerGlobal.prototype.pos = function(ee, ie, He) {
-         var ye = this;
-         return ye.ctx && ye.ctx.listener ? (ie = "number" !== typeof ie ? ye._pos[1] : ie, He = "number" !== typeof He ? ye._pos[2] : He, "number" !== typeof ee ? ye._pos : (ye._pos = [ee, ie, He], "undefined" !== typeof ye.ctx.listener.positionX ? (ye.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(ee, ie, He, ye, be, Me) {
-         var Ke = this;
-         if (!Ke.ctx || !Ke.ctx.listener) return Ke;
-         var Ue = Ke._orientation;
-         return ie = "number" !== typeof ie ? Ue[1] : ie, He = "number" !== typeof He ? Ue[2] : He, ye = "number" !== typeof ye ? Ue[3] : ye, be = "number" !== typeof be ? Ue[4] : be, Me = "number" !== typeof Me ? Ue[5] : Me, "number" !== typeof ee ? Ue : (Ke._orientation = [ee, i … [truncated]
-       }, Howl.prototype.init = (ee = Howl.prototype.init, function(ie) {
-         var He = this;
-         return He._orientation = ie.orientation || [1, 0, 0], He._stereo = ie.stereo || null, He._pos = ie.pos || null, He._pannerAttr = {
- ... (139 more removed lines; see GitHub link above)
+       (LW.volume(), LW.ctx && LW.autoUnlock) && (null === (WW = LW._unlockAudio) || void 0 === WW || WW.call(LW))
+     }
+     bW && (LW._autoSuspend = () => AW > 0 ? EW.Howler : bW())
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/112.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/112.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e)

#### 1. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L2)

```diff
- export const ids = [112];
+ export const ids = [110, 111, 112];
```

#### 2. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L4)

```diff
-   5345: (ee, ie, He) => {
+   37569: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L6-L16` → after: `L6-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L6-L13) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L6-L16)

```diff
-       default: () => Se
-     });
-     var ye = He(59),
-       be = He(1515),
-       Me = He(347),
-       Ke = He(1186),
-       Ue = He(1603),
-       Fe = He(1207),
-       Je = He(1538),
-       oe = He(1490),
-       Re = He(2833);
+       countDecodesAs: () => ZW,
+       decodedAudio: () => xW
+     });
+     var mW = OW(4020),
+       EW = OW(5615);
+     const NW = EW.Howler,
+       PW = new Map;
+     let LW = 0;
```

#### 4. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L18-L19` → after: `L15-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L15-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L15-L64) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L18-L19)

```diff
-       retries: 2,
-       minTimeout: 2e3
+         song: 0,
+         sound: 0
+       },
+       wW = new WeakMap,
+       tW = new WeakSet;
+ 
+     function ZW(WW, iW) {
+       return wW.set(WW, iW), WW
+     }
+ 
+     function xW() {
+       return {
+         bytes: LW,
+         songsDecoded: cW.song,
+         soundsDecoded: cW.sound
+       }
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L21-L47` → after: `L66-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L66-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L66-L247) · [Before (L21-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L21-L47)

```diff
-     var qe = He(1062),
-       fe = He(1600),
-       Te = He(1075),
-       pe = He(1956),
-       Xe = He(1127),
-       ze = He(1169),
-       Be = He(3865),
-       Ee = He(1320),
-       ge = He(1438),
-       Oe = He(1502),
-       de = He(2769),
-       We = He(2784),
-       te = He(5354),
-       Ze = He(2202),
-       we = He(1053),
-       De = He.n(we),
- ... (11 more removed lines; see GitHub link above)
+     const jW = AW.unload;
+     AW.unload = function() {
+       const WW = this._src,
+         iW = jW.call(this);
+       if ("string" !== typeof WW) return iW;
+       const OW = PW.get(WW);
+       return void 0 !== OW && function(WW) {
+         return !NW._howls.some((iW => iW._src === WW || "string" === typeof iW._src && WW.indexOf(iW._src) >= 0))
+       }(WW) && (PW.delete(WW), LW -= OW), iW
+     }
+   },
+   37606: (WW, iW, OW) => {
+     async function mW(WW) {
+       const iW = await fetch(WW, {
+         priority: "low"
+       });
+ ... (166 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L50-L69` → after: `L250-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L250-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L250-L316) · [Before (L50-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L50-L69)

```diff
-       let {
-         icon: ie,
-         label: He,
-         value: ye
-       } = ee;
-       return (0, ve.jsxs)("div", {
-         className: "PlayerProfileStat",
-         children: [(0, ve.jsx)(Pe.e, {
-           name: ie,
-           className: "PlayerProfileStatIcon"
-         }), (0, ve.jsxs)("div", {
-           className: "PlayerProfileStatText",
-           children: [(0, ve.jsx)("div", {
-             className: "PlayerProfileStatLabel SmallTextLight",
-             children: He
-           }), (0, ve.jsx)("div", {
- ... (4 more removed lines; see GitHub link above)
+       return EW = WW, () => {
+         EW === WW && (EW = null)
+       }
+     }
+ 
+     function PW() {
+       return null !== EW
+     }
+ 
+     function LW(WW, iW, OW, NW) {
+       const PW = function(WW, iW) {
+         return "randomCannon" === WW || "randomFirecracker" === WW ? "explosion" : WW.startsWith("gun") ? /_shot_|^headshot/.test(iW) ? "combat" : null : WW.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(iW) ? "combat" : /^(chestOpen|chestClose|doorOpen|d … [truncated]
+       }(WW, iW);
+       if (null === PW || !EW) return;
+       OW * OW + NW * NW >= mW && EW(PW, Math.PI / 2 - Math.atan2(NW, OW))
+     }
+ ... (51 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L71` → after: `L318-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L318-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L318-L324) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L71)

```diff
-     }
+   },
+   37583: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       d: () => EW,
+       f: () => mW
+     });
```

#### 8. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L74-L129` → after: `L327-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L327-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L327-L347) · [Before (L74-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L74-L129)

```diff
-       let {
-         profile: ie
-       } = ee;
-       const {
-         t: He,
-         selectedLanguage: ye
-       } = (0, Xe.v)();
-       let be = He("homePage:profileUnknown");
-       if (ie.lastOnline) {
-         const ee = (0, Xe.l)(ye.code, "homePage:profileTimeAgo");
-         be = He("homePage:profileTimeAgo", {
-           time: (0, Me.ib)(ee, ie.lastOnline, Date.now())
-         })
-       }
-       let Ke = He("homePage:profileUnknown");
-       return ie.accountCreatedAt && (Ke = new Date(ie.accountCreatedAt).toLocaleDateString(void 0, {
- ... (40 more removed lines; see GitHub link above)
+       return WW.replace(/[_\-\s]*\d+$/, "") || WW
+     }
+ 
+     function EW(WW, iW, OW) {
+       return OW <= 0 ? 0 : WW * OW / Math.max(iW, OW)
+     }
+ 
+     function NW(WW, iW) {
+       const OW = WW.getDurationMs();
+       return OW > 0 ? WW.loudness * Math.max(0, 1 - (iW - WW.startMs) / OW) : 0
+     }
+     class PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
+         this.maxVoices = WW, this.maxPerGroup = iW, this.voices = []
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L131-L145` → after: `L349-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L349-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L349-L373) · [Before (L131-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L131-L145)

```diff
-       })), [ii, Hi] = (0, ye.useState)(0);
-       (0, ye.useEffect)(de.d, []), (0, ye.useEffect)((() => {
-         Ve.gameBridge.send("leaveGame", {
-           reloadPath: null
-         }), Ye.e.set({
-           gameState: "landingPage",
-           openEverythingMenuName: null,
-           openInGameMenuName: null
-         })
-       }), [ae.key]);
-       const yi = () => {
-         const ee = (0, Oe.getPreviousLocation)();
-         null === ee || ee.startsWith("/play") ? (0, Oe.navigateToHomePage)() : ie(-1)
-       };
-       (0, Ce.c)(yi), (0, ye.useEffect)((() => {
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, WW)) && (this.voices.push(WW), !0)
+       }
+       dropLeastWorth(WW, iW) {
+         let OW = null,
+           mW = 1 / 0;
+         for (const EW of WW) {
+           if (!EW.canStop()) continue;
+           const WW = NW(EW, iW.startMs);
+           WW < mW && (OW = EW, mW = WW)
+         }
+         return !(!OW || iW.loudness < mW) && (this.voices.splice(this.voices.indexOf(OW), 1), OW.stop(), !0)
+       }
+     }
+   },
+   37626: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L147-L419` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L375-L377) · [Before (L147-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L147-L419)

```diff
-         if (se) return;
-         if (!me) return void ei({
-           status: "notFound",
-           playerKey: Se
-         });
-         const ie = "urlId" in me && (null === (ee = he.current) || void 0 === ee ? void 0 : ee.urlId) === me.urlId && Ne.current === je;
-         if (ie && Ge.current) return;
-         const He = ie ? null : We.d.peek(je, me);
-         let ye = !1;
-         const be = ee => "loaded" === ee.status && (ee.playerKey === Se || "urlId" in me && ee.profile.urlId === me.urlId);
-         return He ? (Ne.current = je, Ge.current = !1, ei({
-           status: "loaded",
-           profile: He,
-           playerKey: Se
-         }), We.d.invalidate(me)) : ei((ee => be(ee) ? ee : {
-           status: "loading"
- ... (257 more removed lines; see GitHub link above)
+         this.multipliers[WW] = iW, null === (OW = this._onUpdate) || void 0 === OW || OW.call(this)
+       }
+       removeMultiplier(WW) {
```

#### 11. `bundles/bloxd.io/chunks/js/112.js` (Changed code · before: `L421-L543` → after: `L379-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4eR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7853e3bed2c43445222f5aaa30972c8a3b34608ee9b5a3cf031b3465bbad9e4e) · [After (L379-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/112.js#L379-L460) · [Before (L421-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/112.js#L421-L543)

```diff
-         if (!be || !Re) return;
-         oe.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: pe.name
-             }
-           },
-           prefixText: Me.x[ie],
-           placeholderText: "playBloxd",
-           initialValue: null !== (ee = null === He || void 0 === He ? void 0 : He.handle) && void 0 !== ee ? ee : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: He ? "general:remove" : void 0
-         }).getResult().then((async ee => {
-           if ("notificationTornDown" !== ee && null !== ee) try {
- ... (107 more removed lines; see GitHub link above)
+         delete this.multipliers[WW], null === (iW = this._onUpdate) || void 0 === iW || iW.call(this)
+       }
+       getMultiplierType(WW) {
+         return this.multipliers[WW]
+       }
+       getTotalMultipliedVal() {
+         let WW = 1;
+         for (const iW in this.multipliers) WW *= this.multipliers[iW];
+         return WW
+       }
+     }
+     class EW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = WW
+       }
+ ... (66 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L39` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/113.js#L5-L9) · [Before (L4-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/113.js#L4-L39)

```diff
-   5364: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => Ee
-     });
-     var ye = He(1515),
-       be = He(59),
-       Me = He(1127),
-       Ke = He(1075),
-       Ue = He(1062),
-       Fe = He(2129),
-       Je = He(1502),
-       oe = He(1320),
-       Re = He(1057),
-       ke = He(18),
-       qe = He(1438),
-       fe = He(1323),
- ... (20 more removed lines; see GitHub link above)
+   5618: (WW, iW, OW) => {
+     var mW;
+     ! function() {
+       var EW = function() {
+         this.init()
```

#### 2. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L41-L53` → after: `L11-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/113.js#L11-L728) · [Before (L41-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/113.js#L41-L53)

```diff
- 
-     function Ee() {
-       const {
-         t: ee
-       } = (0, Me.v)(), ie = (0, Je.useNavigatePreserveSearch)(), He = (0, ye.u)(), {
-         isUserContextUpdating: Ee
-       } = (0, Ke.b)(), ge = (0, Fe.e)(), Oe = (0, Ue.g)(), de = (We = He.pathname).startsWith(pe.v) ? null : We.startsWith(Be.docs) ? "docs" : We.startsWith(Be.leaderboard) ? "leaderboard" : "myGames";
-       var We;
-       const te = function(ee) {
-         if (!ee.startsWith(pe.v)) return {
-           title: "studio:leaveStudio",
-           icon: "left-from-bracket",
-           to: "/"
+       EW.prototype = {
+         init: function() {
+           var WW = this || NW;
+           return WW._counter = 1e3, WW._html5AudioPool = [], WW.html5PoolSize = 10, WW._codecs = {}, WW._howls = [], WW._muted = !1, WW._volume = 1, WW._canPlayEvent = "canplaythrough", WW._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, W … [truncated]
+         },
+         volume: function(WW) {
+           var iW = this || NW;
+           if (WW = parseFloat(WW), iW.ctx || lW(), "undefined" !== typeof WW && WW >= 0 && WW <= 1) {
+             if (iW._volume = WW, iW._muted) return iW;
+             iW.usingWebAudio && iW.masterGain.gain.setValueAtTime(WW, NW.ctx.currentTime);
+             for (var OW = 0; OW < iW._howls.length; OW++)
+               if (!iW._howls[OW]._webAudio)
+                 for (var mW = iW._howls[OW]._getSoundIds(), EW = 0; EW < mW.length; EW++) {
+                   var PW = iW._howls[OW]._soundById(mW[EW]);
+                   PW && PW._node && (PW._node.volume = PW._volume * WW)
+                 }
+ ... (702 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L55` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/113.js#L730) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/113.js#L55)

```diff
-         const ie = (0, Je.getPreviousLocation)();
+       void 0 === (mW = function() {
```

#### 4. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L57-L59` → after: `L732-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L732-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/113.js#L732-L887) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/113.js#L57-L59)

```diff
-           title: "general:back",
-           icon: "arrow-left",
-           to: null !== ie && ie.startsWith(Be.myGames) ? -1 : Be.myGames
+           Howler: NW,
+           Howl: PW
+         }
+       }.apply(iW, [])) || (WW.exports = mW), iW.Howler = NW, iW.Howl = PW, "undefined" !== typeof OW.g ? (OW.g.HowlerGlobal = EW, OW.g.Howler = NW, OW.g.Howl = PW, OW.g.Sound = LW) : "undefined" !== typeof window && (window.HowlerGlobal = EW, window.Howler = NW, window.Howl = PW, … [truncated]
+     }(),
+     function() {
+       var WW;
+       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(WW) {
+         var iW = this;
+         if (!iW.ctx || !iW.ctx.listener) return iW;
+         for (var OW = iW._howls.length - 1; OW >= 0; OW--) iW._howls[OW].stereo(WW);
+         return iW
+       }, HowlerGlobal.prototype.pos = function(WW, iW, OW) {
+         var mW = this;
+         return mW.ctx && mW.ctx.listener ? (iW = "number" !== typeof iW ? mW._pos[1] : iW, OW = "number" !== typeof OW ? mW._pos[2] : OW, "number" !== typeof WW ? mW._pos : (mW._pos = [WW, iW, OW], "undefined" !== typeof mW.ctx.listener.positionX ? (mW.ctx.listener.positionX.setT … [truncated]
+       }, HowlerGlobal.prototype.orientation = function(WW, iW, OW, mW, EW, NW) {
+ ... (140 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L61-L113` → after: `L889-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L889-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/113.js#L889-L893) · [Before (L61-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/113.js#L61-L113)

```diff
-       }(He.pathname);
-       return (0, be.useEffect)((() => {
-         ke.e.set({
-           gameState: "studio",
-           openEverythingMenuName: null
-         })
-       }), []), (0, Xe.jsxs)("div", {
-         className: "StudioLayout AnimFadeIn",
-         children: [ge && (0, Xe.jsx)("aside", {
-           className: "StudioLayoutLeft",
-           children: (0, Xe.jsx)(Te.c, {})
-         }), (0, Xe.jsxs)("div", {
-           className: "StudioLayoutRight",
-           children: [(0, Xe.jsxs)("div", {
-             className: "StudioTop",
-             children: [(0, Xe.jsx)(Re.b, {
- ... (37 more removed lines; see GitHub link above)
+       }(Sound.prototype.reset);
+       var iW = function(WW, iW) {
+         "spatial" === (iW = iW || "spatial") ? (WW._panner = Howler.ctx.createPanner(), WW._panner.coneInnerAngle = WW._pannerAttr.coneInnerAngle, WW._panner.coneOuterAngle = WW._pannerAttr.coneOuterAngle, WW._panner.coneOuterGain = WW._pannerAttr.coneOuterGain, WW._panner.distan … [truncated]
+       }
+     }()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/114.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/114.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731)

#### 1. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L4-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L4-L346) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L4)

```diff
-   5388: (ee, ie, He) => {
+   5627: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => BW
+     });
+     var mW = OW(62),
+       EW = OW(1616),
+       NW = OW(344),
+       PW = OW(1223),
+       LW = OW(1713),
+       cW = OW(1259),
+       wW = OW(1642),
+       tW = OW(1584),
+       ZW = OW(3682);
+     const xW = {
+       retries: 2,
+       minTimeout: 2e3
+ ... (327 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L8` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L350) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L8)

```diff
-     var ye = He(1053),
+     var mW = OW(1089),
```

#### 3. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L10-L16` → after: `L352-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L352-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L352-L386) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L10-L16)

```diff
-       Me = He(1323),
-       Ke = He(1320),
-       Ue = He(3892),
-       Fe = He(125),
-       Je = He(3937),
-       oe = He(3927),
-       Re = He(1228);
+       NW = OW(5329),
+       PW = OW(1172),
+       LW = OW(1391),
+       cW = OW(1532),
+       wW = OW(1584),
+       tW = OW(1422),
+       ZW = OW(3479),
+       xW = OW(1283);
+     const lW = {
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
+       },
+       tiktok: {
+         icon: "tiktok",
+ ... (19 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L20` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L390) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L20)

```diff
-         game: ie
+         platform: iW
```

#### 5. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L22-L41` → after: `L392-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L392-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L392-L511) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L22-L41)

```diff
-       const He = (0, Fe.is99NightsCrazyGamesBundle)() ? "large" : "small",
-         ye = (0, Je.h)(ie, He),
-         ke = (0, Ue.f)(ye),
-         qe = void 0 !== ke.blurhash;
-       return (0, Re.jsxs)("div", {
-         className: "SchematicImageContainer",
-         children: [ke.isLoading && !qe && (0, Re.jsx)(Ke.b, {
-           loaderType: "Secondary"
-         }), !ke.failed && (null !== ke.src || qe) && (0, Re.jsx)("div", {
-           className: be()("SchematicImage", oe.l, {
-             SchematicImageFadeIn: ke.fadeIn && !qe
-           }),
-           style: (0, oe.i)(ke),
-           children: (0, Re.jsx)(oe.e, {
-             image: ke
-           })
- ... (4 more removed lines; see GitHub link above)
+       const OW = "youtube" === iW;
+       return (0, xW.jsxs)("span", {
+         className: EW()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: OW
+         }),
+         children: [OW && (0, xW.jsx)(ZW.e, {
+           variant: "white"
+         }), !OW && (0, xW.jsx)(LW.c, {
+           name: lW[iW].icon,
+           kit: "brands"
+         })]
+       })
+     }
+ 
+     function bW(WW) {
+       let {
+ ... (104 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L46-L125` → after: `L516-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L516-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L516-L520) · [Before (L46-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L46-L125)

```diff
-   },
-   5373: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => te
-     });
-     He(5382);
-     var ye = He(59),
-       be = He(1053),
-       Me = He.n(be),
-       Ke = He(335),
-       Ue = He(1040),
-       Fe = He(1169),
-       Je = He(1127),
-       oe = He(1075),
-       Re = He(1490),
-       ke = He(5388),
- ... (64 more removed lines; see GitHub link above)
+ 
+     function jW(WW) {
+       let {
+         socialLinks: iW,
+         editable: OW = !1,
```

#### 7. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L127-L231` → after: `L522-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L522-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L522-L538) · [Before (L127-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L127-L231)

```diff
-         isUserContextUpdating: be
-       } = (0, oe.b)(), {
-         isCreating: Be,
-         create: Ee
-       } = (0, Xe.d)(), [te, Ze] = (0, ye.useState)(null), [we, De] = (0, ye.useState)(null), [Pe, Ae] = (0, ye.useState)(!1);
-       (0, ye.useEffect)((() => {
-         be || (Ae(!1), Re.b.getPublishedGamePreviews(He, {
-           searchQuery: null,
-           pageNumber: 1,
-           pageSize: 50,
-           onlyFavouriteGames: !1,
-           onlyOwnedGames: !0,
-           onlyApprovedGames: !1,
-           schematicIdsToExclude: [],
-           gameCategories: [],
-           upAndComing: !1
- ... (89 more removed lines; see GitHub link above)
+         onLinksUpdated: EW
+       } = WW;
+       if (!OW && 0 === iW.length) return null;
+       const PW = new Map(iW.map((WW => [WW.platform, WW]))),
+         LW = OW ? NW.t : iW.map((WW => WW.platform));
+       return (0, xW.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, xW.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: LW.map((WW => (0, xW.jsx)(bW, {
+             platform: WW,
+             link: PW.get(WW),
+             editable: OW,
+             userContext: mW,
+             onLinksUpdated: EW
+           }, WW)))
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/114.js` (Changed code · before: `L235-L304` → after: `L542-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4262cce187d172d3718e72fb40d1650ca708d5faefc7c22893f5d8516aa93731) · [After (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/114.js#L542-L544) · [Before (L235-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/114.js#L235-L304)

```diff
-   5395: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke,
-       e: () => Me
-     });
-     var ye = He(1536),
-       be = He(1228);
- 
-     function Me(ee) {
-       let {
-         thumbnail: ie,
-         name: He
-       } = ee;
-       return (0, be.jsxs)("div", {
-         className: "StudioTableGameCell",
-         children: [(0, be.jsx)("div", {
- ... (54 more removed lines; see GitHub link above)
+   5634: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/115.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/115.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387)

#### 1. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/115.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/115.js#L4-L6)

```diff
-   5388: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ke
+   5651: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => MW
```

#### 2. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L8-L16` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/115.js#L8-L40) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/115.js#L8-L16)

```diff
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(1323),
-       Ke = He(1320),
-       Ue = He(3892),
-       Fe = He(125),
-       Je = He(3937),
-       oe = He(3927),
-       Re = He(1228);
+     var mW = OW(1616),
+       EW = OW(62),
+       NW = OW(1172),
+       PW = OW(1107),
+       LW = OW(1095),
+       cW = OW(2192),
+       wW = OW(1605),
+       tW = OW(1383),
+       ZW = OW(1091),
+       xW = OW(25),
+       lW = OW(1532),
+       AW = OW(1391),
+       bW = OW(3591),
+       jW = OW(1638),
+       UW = OW(1283);
+     const kW = [{
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/115.js` (Changed code · before: `L18-L42` → after: `L42-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cde1f91459c2d31d8beb247191c13a0a80480c518e88cf66e71cfb46434f387) · [After (L42-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/115.js#L42-L110) · [Before (L18-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/115.js#L18-L42)

```diff
-     function ke(ee) {
-       let {
-         game: ie
-       } = ee;
-       const He = (0, Fe.is99NightsCrazyGamesBundle)() ? "large" : "small",
-         ye = (0, Je.h)(ie, He),
-         ke = (0, Ue.f)(ye),
-         qe = void 0 !== ke.blurhash;
-       return (0, Re.jsxs)("div", {
-         className: "SchematicImageContainer",
-         children: [ke.isLoading && !qe && (0, Re.jsx)(Ke.b, {
-           loaderType: "Secondary"
-         }), !ke.failed && (null !== ke.src || qe) && (0, Re.jsx)("div", {
-           className: be()("SchematicImage", oe.l, {
-             SchematicImageFadeIn: ke.fadeIn && !qe
-           }),
- ... (9 more removed lines; see GitHub link above)
+     function MW() {
+       const {
+         t: WW
+       } = (0, NW.B)(), iW = (0, wW.useNavigatePreserveSearch)(), OW = (0, mW.u)(), {
+         isUserContextUpdating: MW
+       } = (0, PW.e)(), KW = (0, cW.e)(), SW = (0, LW.h)(), YW = (yW = OW.pathname).startsWith(jW.z) ? null : yW.startsWith(sW.docs) ? "docs" : yW.startsWith(sW.leaderboard) ? "leaderboard" : "myGames";
+       var yW;
+       const TW = function(WW) {
+         if (!WW.startsWith(jW.z)) return {
+           title: "studio:leaveStudio",
+           icon: "left-from-bracket",
+           to: "/"
+         };
+         const iW = (0, wW.getPreviousLocation)();
+         return {
+           title: "general:back",
+ ... (53 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/116.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/116.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6)

#### 1. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L4)

```diff
-   5388: (ee, ie, He) => {
+   5668: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L6)

```diff
-       d: () => ke
+       b: () => xW
```

#### 3. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L8)

```diff
-     var ye = He(1053),
+     var mW = OW(1089),
```

#### 4. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L10-L16` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L10-L16) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L10-L16)

```diff
-       Me = He(1323),
-       Ke = He(1320),
-       Ue = He(3892),
-       Fe = He(125),
-       Je = He(3937),
-       oe = He(3927),
-       Re = He(1228);
+       NW = OW(1391),
+       PW = OW(1383),
+       LW = OW(4746),
+       cW = OW(136),
+       wW = OW(4787),
+       tW = OW(4776),
+       ZW = OW(1283);
```

#### 5. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L23)

```diff
-         ye = (0, Je.h)(ie, He),
+         mW = (0, wW.f)(iW, OW),
```

#### 6. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L28)

```diff
-         children: [ke.isLoading && !qe && (0, Re.jsx)(Ke.b, {
+         children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
```

#### 7. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L31)

```diff
-           className: be()("SchematicImage", oe.l, {
+           className: EW()("SchematicImage", tW.j, {
```

#### 8. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L34-L35)

```diff
-           style: (0, oe.i)(ke),
-           children: (0, Re.jsx)(oe.e, {
+           style: (0, tW.f)(xW),
+           children: (0, ZW.jsx)(tW.b, {
```

#### 9. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L40)

```diff
-           children: (0, Re.jsx)(Me.e, {
+           children: (0, ZW.jsx)(NW.c, {
```

#### 10. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L47` → after: `L47-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L47-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L47-L235) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L47)

```diff
-   5552: (ee, ie, He) => {
+   5660: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => TW
+     });
+     OW(5662);
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(327),
+       LW = OW(1065),
+       cW = OW(1217),
+       wW = OW(1172),
+       tW = OW(1107),
+       ZW = OW(1584),
+       xW = OW(5668),
+       lW = OW(1532),
+ ... (173 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L51-L63` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L240-L241) · [Before (L51-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L51-L63)

```diff
-     var ye = He(59),
-       be = He(1053),
-       Me = He.n(be),
-       Ke = He(5454),
-       Ue = He(1320),
-       Fe = He(1127),
-       Je = He(3473),
-       oe = He(3618),
-       Re = He(1323),
-       ke = He(3482),
-       qe = He(5557),
-       fe = He(5578),
-       Te = He(1228);
+     var mW = OW(1638),
+       EW = OW(1283);
```

#### 12. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L67-L71` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L245-L246) · [Before (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L67-L71)

```diff
-         folderName: ie,
-         onTexturePackUpdated: be,
-         disabled: pe = !1,
-         maxFileSizeMb: Xe,
-         packOwner: ze
+         thumbnail: iW,
+         name: OW
```

#### 13. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L127-L140` → after: `L249-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L249-L251) · [Before (L127-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L127-L140)

```diff
-         className: "CustomTexturePackContainer",
-         children: [(0, Te.jsxs)("div", {
-           className: "CustomTextureWarning",
-           children: [Be("settingsMenu:customTextureWarning"), ".", (0, Te.jsx)("br", {}), Be("settingsMenu:viewDocumentation"), ":", " ", (0, Te.jsx)("a", {
-             href: "https://github.com/Bloxdy/texturePacks",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "github.com/Bloxdy/texturePacks"
-           })]
-         }), Oe && (0, Te.jsxs)("div", {
-           className: "CustomTextureError",
-           children: [Be("general:error"), ": ", Oe]
-         }), We && (0, Te.jsx)("div", {
-           className: "CustomTextureError",
+         className: "StudioTableGameCell",
+         children: [(0, EW.jsx)("div", {
+           className: "StudioTableThumbnail",
```

#### 14. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L142-L182` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L253-L255) · [Before (L142-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L142-L182)

```diff
-         }), (0, Te.jsxs)("div", {
-           ...De({
-             className: Me()("CustomTextureFolderUpload", {
-               ActiveDrag: Ae,
-               Disabled: pe
-             })
-           }),
-           children: [(0, Te.jsx)("input", {
-             ...Pe({
-               webkitdirectory: "true"
-             })
-           }), Ee && (0, Te.jsx)("div", {
-             className: "CustomTextureFolderUploadLoading",
-             children: (0, Te.jsx)(Ue.b, {})
-           }), !Ee && !Ae && ie && (0, Te.jsxs)(Te.Fragment, {
-             children: [(0, Te.jsx)("div", {
- ... (25 more removed lines; see GitHub link above)
+         }), (0, EW.jsx)("span", {
+           className: "StudioTableGameName",
+           children: OW
```

#### 15. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L205-L207` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L262) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L205-L207)

```diff
-         disabled: ie,
-         openFolderPicker: He,
-         onFiles: Ke
+         game: iW
```

#### 16. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L209-L234` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L264-L267) · [Before (L209-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L209-L234)

```diff
-       const {
-         t: oe
-       } = (0, Me.v)(), Re = (0, ye.useRef)(null);
-       return (0, Fe.jsxs)("div", {
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
-         children: [(0, Fe.jsx)("input", {
-           ref: Re,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(ee) {
-             const ie = Array.from(ee.target.files);
-             ee.target.value = "", Ke(ie)
-           }
-         }), Je() && (0, Fe.jsx)(be.c, {
- ... (10 more removed lines; see GitHub link above)
+       return (0, EW.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, mW.o)(iW),
+         alt: ""
```

#### 17. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L238-L684` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L271) · [Before (L238-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L238-L684)

```diff
-   5501: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => fe,
-       e: () => Ee,
-       f: () => Te,
-       j: () => Be
-     });
-     var ye = He(59),
-       be = He(5510),
-       Me = He(4729),
-       Ke = He(1351),
-       Ue = He(5537),
-       Fe = He(1053),
-       Je = He.n(Fe),
-       oe = He(1340),
-       Re = He(1768),
- ... (431 more removed lines; see GitHub link above)
+   5673: (WW, iW, OW) => {
```

#### 18. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L688` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L275-L276) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L688)

```diff
-     var ye = He(1053),
+     var mW = OW(62),
+       EW = OW(1089),
```

#### 19. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L690` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L278) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L690)

```diff
-       Me = He(1228);
+       PW = OW(1283);
```

#### 20. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L694-L701` → after: `L282-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L282-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L282-L286) · [Before (L694-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L694-L701)

```diff
-         options: ie,
-         value: He,
-         onChange: ye,
-         ariaLabel: Ke,
-         className: Ue,
-         reselectable: Fe = !1,
-         keepsFocus: Je = !1,
-         padTabs: oe
+         columns: iW,
+         rows: OW,
+         getRowKey: EW,
+         renderRow: LW,
+         className: cW
```

#### 21. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L703-L730` → after: `L288-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L288-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L288-L300) · [Before (L703-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L703-L730)

```diff
-       const Re = void 0 !== oe;
-       return (0, Me.jsx)("div", {
-         className: be()("SegmentedToggle", Ue),
-         role: "group",
-         "aria-label": Ke,
-         "data-pad-tabs": oe,
-         children: ie.map((ee => {
-           const ie = ee.value === He;
-           return (0, Me.jsx)("button", {
-             type: "button",
-             "aria-pressed": ie,
-             "data-pad-tab": Re || void 0,
-             "data-pad-selected": Re && ie ? "true" : void 0,
-             "data-pad-default-focus": Re && ie || void 0,
-             "aria-label": ee.ariaLabel,
-             title: ee.ariaLabel,
- ... (12 more removed lines; see GitHub link above)
+       return (0, PW.jsxs)("table", {
+         className: NW()("Table", cW),
+         children: [(0, PW.jsx)("thead", {
+           children: (0, PW.jsx)("tr", {
+             children: iW.map((WW => (0, PW.jsx)("th", {
+               children: WW.header
+             }, WW.key)))
+           })
+         }), (0, PW.jsx)("tbody", {
+           children: OW.map(((WW, iW) => (0, PW.jsx)(mW.Fragment, {
+             children: LW(WW, iW)
+           }, EW(WW))))
+         })]
```

#### 22. `bundles/bloxd.io/chunks/js/116.js` (Changed code · before: `L734-L994` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb741dea4948c5cfcfbad6d2b64aee129265a17243bfcfa537e9d4d3263ead6) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/116.js#L304) · [Before (L734-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/116.js#L734-L994)

```diff
-   5544: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Me,
-       d: () => Ke
-     });
-     var ye = He(59);
-     const be = new WeakMap,
-       Me = ee => {
-         var ie;
-         const He = ee.closest("[data-pad-slider]");
-         return He && null !== (ie = be.get(He)) && void 0 !== ie ? ie : null
-       },
-       Ke = (ee, ie) => {
-         const He = (0, ye.useRef)(ie);
-         He.current = ie, (0, ye.useEffect)((() => {
-           if (ee.current) return ((ee, ie) => (be.set(ee, ie), () => {
- ... (245 more removed lines; see GitHub link above)
+   5662: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 1. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L4)

```diff
-   7114: (ee, ie, He) => {
+   5668: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L8-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L8) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L8-L16)

```diff
-     var ye = He(59),
-       be = He(1438),
-       Me = He(1490),
-       Ke = He(3871),
-       Ue = He(1075),
-       Fe = He(1320),
-       Je = He(1351),
-       oe = He(1323),
-       Re = He(1053),
+     var mW = OW(1089),
```

#### 3. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L18-L19` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L10-L16) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L18-L19)

```diff
-       qe = He(7112),
-       fe = He(1228);
+       NW = OW(1391),
+       PW = OW(1383),
+       LW = OW(4746),
+       cW = OW(136),
+       wW = OW(4787),
+       tW = OW(4776),
+       ZW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L23-L83` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L20) · [Before (L23-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L23-L83)

```diff
-         info: ie,
-         className: He
-       } = ee;
-       const {
-         statusText: ye,
-         rowText: be
-       } = (0, qe.h)();
-       return (0, fe.jsxs)("div", {
-         className: ke()("GameApprovalInfoDetails", He),
-         children: [(0, fe.jsxs)("div", {
-           className: ke()("GameApprovalInfoSummary", ie.overallPassed ? "Passed" : "Failed"),
-           children: [(0, fe.jsx)(oe.e, {
-             name: ie.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, fe.jsx)("span", {
-             children: ye(ie.status)
-           })]
- ... (45 more removed lines; see GitHub link above)
+         game: iW
```

#### 5. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L85-L107` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L22-L25) · [Before (L85-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L85-L107)

```diff
-       const {
-         t: ke
-       } = (0, pe.v)(), {
-         userContext: qe
-       } = (0, Ue.b)(), Xe = (0, Ke.c)(), [ze, Be] = (0, ye.useState)(null), [Ee, ge] = (0, ye.useState)(null), [Oe, de] = (0, ye.useState)(!1), We = (0, ye.useCallback)((() => {
-         ge(null), Me.b.getGameApprovalInfo(qe, ie).then((ee => {
-           Xe.current && Be(ee)
-         })).catch((ee => {
-           console.error("Failed to get game approval info", ee), Xe.current && ge(ke("studio:approvalLoadFailed"))
-         }))
-       }), [qe, ie, Xe, ke]);
-       (0, ye.useEffect)((() => {
-         We()
-       }), [We]);
-       const te = ee => {
-         Oe || (de(!0), Me.b.setGameApproval(qe, ie, ee).then((() => {
- ... (7 more removed lines; see GitHub link above)
+       const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         mW = (0, wW.f)(iW, OW),
+         xW = (0, LW.f)(mW),
+         lW = void 0 !== xW.blurhash;
```

#### 6. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L109-L167` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L27-L42) · [Before (L109-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L109-L167)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, fe.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: ke("studio:approvalTitle")
-         }), !ze && !Ee && (0, fe.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, fe.jsx)(Fe.b, {})
-         }), Ee && (0, fe.jsx)("div", {
-           className: "ApprovalInfoPopupError",
-           children: Ee
-         }), ze && (0, fe.jsxs)(fe.Fragment, {
-           children: [(0, fe.jsx)(Te, {
-             info: ze
-           }), He && (0, fe.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== ze.manualOverride && (0, fe.jsx)(Je.g, {
- ... (43 more removed lines; see GitHub link above)
+         className: "SchematicImageContainer",
+         children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
+           loaderType: "Secondary"
+         }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
+           className: EW()("SchematicImage", tW.j, {
+             SchematicImageFadeIn: xW.fadeIn && !lW
+           }),
+           style: (0, tW.f)(xW),
+           children: (0, ZW.jsx)(tW.b, {
+             image: xW
+           })
+         }), xW.failed && (0, ZW.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, ZW.jsx)(NW.c, {
+             name: "face-dizzy"
+           })
```

#### 7. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L172-L254` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L47) · [Before (L172-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L172-L254)

```diff
-   7112: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue,
-       h: () => Ke
-     });
-     var ye = He(347),
-       be = He(1127);
-     const Me = {
-       manuallyApproved: "studio:approvalStatusManuallyApproved",
-       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
-       manuallyDenied: "studio:approvalStatusManuallyDenied",
-       autoApproved: "studio:approvalStatusAutoApproved",
-       notApproved: "studio:approvalStatusNotApproved",
-       notIndexed: "studio:approvalStatusNotIndexed"
-     };
- 
- ... (67 more removed lines; see GitHub link above)
+   7511: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L258-L260` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L51-L53) · [Before (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L258-L260)

```diff
-     var ye = He(59),
-       be = He(1515),
-       Me = He(1053),
+     OW(5662);
+     var mW = OW(62),
+       EW = OW(1089),
```

#### 9. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L262-L369` → after: `L55-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L55-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L55-L90) · [Before (L262-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L262-L369)

```diff
-       Ue = He(1040),
-       Fe = He(1169),
-       Je = He(1033),
-       oe = He(347),
-       Re = He(1538),
-       ke = He(1027),
-       qe = He(1127),
-       fe = He(1075),
-       Te = He(335),
-       pe = He(1490),
-       Xe = He(18),
-       ze = He(1983),
-       Be = He(1438),
-       Ee = He(1323),
-       ge = He(1320),
-       Oe = He(5388),
- ... (92 more removed lines; see GitHub link above)
+       PW = OW(327),
+       LW = OW(1065),
+       cW = OW(1217),
+       wW = OW(1049),
+       tW = OW(1172),
+       ZW = OW(1584),
+       xW = OW(4792),
+       lW = OW(1107),
+       AW = OW(5668),
+       bW = OW(3610),
+       jW = OW(1532),
+       UW = OW(5271),
+       kW = OW(5673),
+       sW = OW(1383),
+       MW = OW(1605),
+       KW = OW(5268),
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L371-L378` → after: `L92-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L92-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L92-L94) · [Before (L371-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L371-L378)

```diff
-         minute: {
-           stepMinutes: 1,
-           untilMinutes: 20
-         },
-         fiveMinutes: {
-           stepMinutes: 5,
-           untilMinutes: 60
-         }
+         playsPerDay: null,
+         avgPlaytimeMinutes: null,
+         retention: null
```

#### 11. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L446-L451` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L99) · [Before (L446-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L446-L451)

```diff
-         icon: ie,
-         label: He,
-         onClick: ye,
-         disabled: be = !1,
-         active: Me = !1,
-         small: Ke = !1
+         position: iW
```

#### 12. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L453-L468` → after: `L101-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L101-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L101-L111) · [Before (L453-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L453-L468)

```diff
-       return (0, Pe.jsx)(me.g, {
-         tooltipInner: He,
-         placement: "top",
-         delayShow: 0,
-         children: (0, Pe.jsxs)(Be.M, {
-           className: Ke ? "StudioSmallIconButton" : void 0,
-           active: Me,
-           disabled: be,
-           onClick: ye,
-           children: [(0, Pe.jsx)(Ee.e, {
-             name: ie
-           }), (0, Pe.jsx)("span", {
-             className: "VisuallyHidden",
-             children: He
-           })]
-         })
+       const OW = yW.e[iW];
+       return (0, JW.jsxs)("td", {
+         className: NW()("StudioLeaderboardPosition", {
+           StudioLeaderboardTopPosition: void 0 !== OW,
+           [`StudioLeaderboardTopPosition${iW}`]: void 0 !== OW
+         }),
+         children: [void 0 !== OW && (0, JW.jsx)("img", {
+           className: "StudioLeaderboardPositionItem",
+           src: OW,
+           alt: ""
+         }), iW]
```

#### 13. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L475-L477` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L117) · [Before (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L475-L477)

```diff
-         fileNameParts: ie,
-         getTable: He,
-         disabled: ye = !1
+         discoverability: iW
```

#### 14. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L480-L495` → after: `L120-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L120-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L120-L131) · [Before (L480-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L480-L495)

```diff
-         t: be
-       } = (0, qe.v)();
-       return (0, Pe.jsx)(oi, {
-         small: !0,
-         icon: "download",
-         label: be("Export Data"),
-         disabled: ye,
-         onClick: () => {
-           const ee = He().map((ee => ee.map(Mi).join(","))).join("\r\n");
-           (0, Ji.downloadBlob)(new Blob([`${Ri}${ee}`], {
-             type: "text/csv;charset=utf-8"
-           }), function(ee) {
-             const ie = ee.map(Fi).filter((ee => "" !== ee)).join(" - ");
-             return `${""===ie?"export":ie}.csv`
-           }(ie))
-         }
+         playsPerDay: OW,
+         avgPlaytimeMinutes: EW,
+         retention: NW
+       } = null === iW ? eW : (0, xW.m)(iW);
+       return (0, JW.jsxs)(mW.Fragment, {
+         children: [(0, JW.jsx)("td", {
+           children: null !== OW ? (0, xW.d)(OW) : "-"
+         }), (0, JW.jsx)("td", {
+           children: null !== EW ? (0, xW.h)(EW) : "-"
+         }), (0, JW.jsx)("td", {
+           children: null !== NW ? (0, xW.k)(NW) : "-"
+         })]
```

#### 15. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L505-L509` → after: `L136-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L136-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L136-L141) · [Before (L505-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L505-L509)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       return new Date(ee).toLocaleDateString(void 0, {
-         day: "numeric",
-         month: "short",
-         timeZone: ie ? "UTC" : void 0
+       let {
+         discoverability: iW
+       } = WW;
+       return (0, JW.jsx)("td", {
+         className: "StudioLeaderboardEngagementScore",
+         children: void 0 !== (null === iW || void 0 === iW ? void 0 : iW.engagementScore) ? (0, cW.V)(Math.round(iW.engagementScore)) : "-"
```

#### 16. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L513-L529` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L145-L146) · [Before (L513-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L513-L529)

```diff
-     function Ti(ee) {
-       return new Date(ee).toLocaleTimeString(void 0, qi)
-     }
-     var Xi = He(5628);
-     const zi = 864e5;
- 
-     function Bi(ee, ie) {
-       return "1d" === ie ? fi(ee, !0) : `${fi(ee)}, ${Ti(ee)}`
-     }
- 
-     function Ei(ee) {
-       let {
-         point: ie,
-         label: He,
-         formatValue: ye,
-         noDataLabel: be
- ... (1 more removed lines; see GitHub link above)
+     function VW() {
+       var WW, iW;
```

#### 17. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L532-L533` → after: `L149-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L149-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L149-L252) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L532-L533)

```diff
-       } = (0, qe.v)(), Ke = ee => null === ee || void 0 === ee ? be : ye(ee), Ue = ie.comparisonBand;
-       return Ue ? (0, Pe.jsxs)(Pe.Fragment, {
+       } = (0, tW.B)(), EW = (0, MW.useNavigatePreserveSearch)(), {
+         userContext: NW,
+         isUserContextUpdating: yW
+       } = (0, lW.e)(), eW = (0, SW.m)(), [VW, pW] = (0, KW.q)(), fW = (CW = VW.get(nW), hW.some((WW => WW.scope === CW)) ? CW : oW);
+       var CW;
+       const XW = function(WW) {
+           return PW.T.includes(WW) ? WW : null
+         }(VW.get(uW)),
+         BW = (0, KW.f)(VW.get(KW.b)),
+         [qW, RW] = (0, mW.useState)(null),
+         [GW, IW] = (0, mW.useState)(!1);
+ 
+       function aW(WW) {
+         pW((iW => {
+           (0, KW.j)(iW, nW, WW.scope === oW ? null : WW.scope), (0, KW.j)(iW, uW, WW.category), (0, KW.m)(iW, WW.page)
+         }))
+ ... (88 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L535-L539` → after: `L254-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L254-L258) · [Before (L535-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L535-L539)

```diff
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: He
-         }), (0, Pe.jsxs)("div", {
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [Me("studio:comparisonPercentile80"), ": ", Ke(Ue[1])]
+           className: "StudioPageHeader",
+           children: (0, JW.jsx)("h1", {
+             className: "StudioPageTitle",
+             children: OW("studio:leaderboard")
+           })
```

#### 19. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L541-L542` → after: `L260-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L260-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L260-L282) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L541-L542)

```diff
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [Me("studio:comparisonPercentile50"), ": ", Ke(ie.comparisonValue)]
+           className: "StudioLeaderboardBanner",
+           children: [!FW && (0, JW.jsx)("div", {
+             children: OW("studio:leaderboardBanner")
+           }), FW && (0, JW.jsx)("div", {
+             children: OW("studio:leaderboardDormantBanner")
+           }), (0, JW.jsx)("div", {
+             children: OW("studio:leaderboardMetricsBanner", {
+               days: dW
+             })
+           })]
+         }), rW && (0, JW.jsx)("div", {
+           className: "StudioLeaderboardScopes",
+           children: hW.map((WW => (0, JW.jsx)(jW.Z, {
+             active: fW === WW.scope,
+             onClick: () => {
+               aW({
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L544-L545` → after: `L284-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L284-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L284-L393) · [Before (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L544-L545)

```diff
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [Me("studio:comparisonPercentile20"), ": ", Ke(Ue[0])]
+           className: "StudioLeaderboardCategories",
+           children: [(0, JW.jsx)(jW.Z, {
+             active: null === XW,
+             onClick: () => {
+               aW({
+                 scope: fW,
+                 category: null,
+                 page: 1
+               })
+             },
+             children: OW("studio:leaderboardAllCategories")
+           }), PW.T.map((WW => (0, JW.jsx)(jW.Z, {
+             active: XW === WW,
+             onClick: () => {
+               aW({
+                 scope: fW,
+ ... (94 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L552-L560` → after: `L397-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L397-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L397-L404) · [Before (L552-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L552-L560)

```diff
- 
-     function gi(ee, ie, He) {
-       return He ? [`${ie}: ${ee("studio:comparisonPercentile20")}`, `${ie}: ${ee("studio:comparisonPercentile50")}`, `${ie}: ${ee("studio:comparisonPercentile80")}`] : [ie]
-     }
- 
-     function Oi(ee, ie) {
-       var He, ye, be, Me, Ke, Ue;
-       return ie ? [null !== (He = null === (ye = ee.comparisonBand) || void 0 === ye ? void 0 : ye[0]) && void 0 !== He ? He : null, null !== (be = ee.comparisonValue) && void 0 !== be ? be : null, null !== (Me = null === (Ke = ee.comparisonBand) || void 0 === Ke ? void 0 : Ke[1] … [truncated]
-     }
+   },
+   5676: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       e: () => NW
+     });
+     var mW = OW(1638),
+       EW = OW(1283);
```

#### 22. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L564-L572` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L408-L409) · [Before (L564-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L564-L572)

```diff
-         active: ie,
-         payload: He,
-         label: ye,
-         interval: be,
-         formatValue: Me,
-         noDataLabel: Ke,
-         comparisonLabel: Ue,
-         showValue: Fe = !0,
-         lines: Je
+         thumbnail: iW,
+         name: OW
```

#### 23. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L577` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L412) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L577)

```diff
-         className: "StudioStatsChartTooltip",
+         className: "StudioTableGameCell",
```

#### 24. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L579-L600` → after: `L414-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L414-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L414-L418) · [Before (L579-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L579-L600)

```diff
-           className: "StudioStatsChartTooltipTitle SmallTextLight",
-           children: Bi(ye, be)
-         }), Fe && (0, Pe.jsx)("div", {
-           className: "StudioStatsChartTooltipValue",
-           children: null === oe.value ? Ke : Me(oe.value)
-         }), null === Je || void 0 === Je ? void 0 : Je.map(((ee, ie) => {
-           var He;
-           const ye = null === (He = oe.lineValues) || void 0 === He ? void 0 : He[ie];
-           return (0, Pe.jsxs)("div", {
-             className: "StudioStatsChartTooltipLine SmallTextLight",
-             children: [(0, Pe.jsx)("span", {
-               className: "StudioStatsChartTooltipLineSwatch",
-               style: {
-                 backgroundColor: ee.colour
-               }
-             }), ee.label, ": ", null === ye || void 0 === ye ? Ke : Me(ye)]
- ... (6 more removed lines; see GitHub link above)
+           className: "StudioTableThumbnail",
+           children: iW
+         }), (0, EW.jsx)("span", {
+           className: "StudioTableGameName",
+           children: OW
```

#### 25. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L622-L624` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L425) · [Before (L622-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L622-L624)

```diff
-         viewBox: ie,
-         text: He,
-         alignLeft: ye
+         game: iW
```

#### 26. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L626-L631` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L427-L430) · [Before (L626-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L626-L631)

```diff
-       return void 0 === (null === ie || void 0 === ie ? void 0 : ie.x) || void 0 === ie.y ? null : (0, Pe.jsx)("text", {
-         className: "StudioStatsChartMarkerLabel",
-         x: ie.x + (ye ? -5 : 5),
-         y: ie.y + 10,
-         textAnchor: ye ? "end" : "start",
-         children: He
+       return (0, EW.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, mW.o)(iW),
+         alt: ""
```

#### 27. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L634-L640` → after: `L433-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L433-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L433-L441) · [Before (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L634-L640)

```diff
- 
-     function wi(ee) {
-       const ie = new Set;
-       return ee.forEach(((He, ye) => {
-         if (null === He) return;
-         [ee[ye - 1], ee[ye + 1]].some((ee => void 0 !== ee && null !== ee)) || ie.add(ye)
-       })), ie
+   },
+   7392: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     const mW = {
+       1: OW(7401),
+       2: OW(7406),
+       3: OW(7411)
```

#### 28. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L645-L649` → after: `L455-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L455-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L455-L459) · [Before (L645-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L645-L649)

```diff
-         swatchClassName: ie,
-         colour: He,
-         isFill: ye,
-         label: be,
-         JV: Me
+         columns: iW,
+         rows: OW,
+         getRowKey: EW,
+         renderRow: LW,
+         className: cW
```

#### 29. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L651-L670` → after: `L461-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L461-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L461-L467) · [Before (L651-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L651-L670)

```diff
-       const {
-         t: Ue
-       } = (0, qe.v)();
-       return (0, Pe.jsxs)("span", {
-         className: "StudioStatsChartLegendEntry",
-         children: [(0, Pe.jsx)("span", {
-           className: Ke()("StudioStatsChartLegendSwatch", ie),
-           style: ye ? {
-             backgroundColor: He
-           } : {
-             color: He
-           }
-         }), be, void 0 !== Me && (0, Pe.jsx)("span", {
-           ...(0, Be.R)(),
-           className: "StudioStatsChartLegendRemove",
-           title: Ue("general:remove"),
- ... (4 more removed lines; see GitHub link above)
+       return (0, PW.jsxs)("table", {
+         className: NW()("Table", cW),
+         children: [(0, PW.jsx)("thead", {
+           children: (0, PW.jsx)("tr", {
+             children: iW.map((WW => (0, PW.jsx)("th", {
+               children: WW.header
+             }, WW.key)))
```

#### 30. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L675-L32289` → after: `L476-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L476-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/117.js#L476-L485) · [Before (L675-L32289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/117.js#L675-L32289)

```diff
- 
-     function Pi(ee) {
-       let {
-         seriesLabel: ie,
-         seriesColour: He,
-         comparisonLabel: ye,
-         comparisonIsBand: be,
-         lines: Me
-       } = ee;
-       const {
-         t: Ke
-       } = (0, qe.v)();
-       return (0, Pe.jsxs)("div", {
-         className: "StudioStatsChartLegend SmallTextLight",
-         children: [void 0 !== ie && void 0 !== He && (0, Pe.jsx)(Di, {
-           colour: He,
- ... (31599 more removed lines; see GitHub link above)
+   },
+   5662: () => {},
+   7401: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   7406: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   7411: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 1. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L4)

```diff
-   5415: (ee, ie, He) => {
+   5668: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L6-L8)

```diff
-       c: () => Re,
-       d: () => oe,
-       g: () => ke
+       b: () => xW
```

#### 3. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L10-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L8) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L10-L12)

```diff
-     He(5420);
-     var ye = He(1127),
-       be = He(1053),
+     var mW = OW(1089),
```

#### 4. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14-L17` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L10-L16) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L14-L17)

```diff
-       Ke = He(1351),
-       Ue = (He(59), He(4729)),
-       Fe = He(1323),
-       Je = He(1228);
+       NW = OW(1391),
+       PW = OW(1383),
+       LW = OW(4746),
+       cW = OW(136),
+       wW = OW(4787),
+       tW = OW(4776),
+       ZW = OW(1283);
```

#### 5. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L21-L26` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L20) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L21-L26)

```diff
-         children: ie,
-         label: He,
-         className: be,
-         circleInfoText: Ue,
-         disabled: oe,
-         onLabelClick: Re
+         game: iW
```

#### 6. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L28-L38` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L22-L25) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L28-L38)

```diff
-       const {
-         t: ke
-       } = (0, ye.v)(), qe = (0, Je.jsxs)("div", {
-         className: Me()("Label", {
-           ClickableLabel: void 0 !== Re
-         }),
-         onClick: Re,
-         children: [ke(He), Ue && (0, Je.jsx)(Fe.e, {
-           name: "circle-info"
-         })]
-       });
+       const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         mW = (0, wW.f)(iW, OW),
+         xW = (0, LW.f)(mW),
+         lW = void 0 !== xW.blurhash;
```

#### 7. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L40-L47` → after: `L27-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L27-L32) · [Before (L40-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L40-L47)

```diff
-         className: Me()("LabeledInput", {
-           [be]: be,
-           DisabledLabelInput: oe
-         }),
-         children: [Ue && (0, Je.jsx)(Ke.g, {
-           tooltipInner: (0, Je.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: ke(Ue)
+         className: "SchematicImageContainer",
+         children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
+           loaderType: "Secondary"
+         }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
+           className: EW()("SchematicImage", tW.j, {
+             SchematicImageFadeIn: xW.fadeIn && !lW
```

#### 8. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L49-L97` → after: `L34-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L34-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L34-L43) · [Before (L49-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L49-L97)

```diff
-           children: qe
-         }), !Ue && qe, ie]
-       })
-     }
- 
-     function Re(ee) {
-       let {
-         checked: ie,
-         setChecked: He,
-         disabled: ye = !1
-       } = ee;
-       return (0, Je.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         "aria-disabled": ye || void 0,
-         onClick: ee => {
- ... (33 more removed lines; see GitHub link above)
+           style: (0, tW.f)(xW),
+           children: (0, ZW.jsx)(tW.b, {
+             image: xW
+           })
+         }), xW.failed && (0, ZW.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, ZW.jsx)(NW.c, {
+             name: "face-dizzy"
+           })
+         })]
```

#### 9. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L101` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L47) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L101)

```diff
-   5424: (ee, ie, He) => {
+   5947: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L105` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L51-L52) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L105)

```diff
-     var ye = He(1053),
+     var mW = OW(62),
+       EW = OW(1089),
```

#### 11. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L107-L138` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L54-L63) · [Before (L107-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L107-L138)

```diff
-       Me = He(5018),
-       Ke = He(1127),
-       Ue = He(1228);
-     const Fe = [...Me.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
- 
-     function Je(ee) {
-       const {
-         disabled: ie,
-         hideWrapper: He
-       } = ee, {
-         t: ye
-       } = (0, Ke.v)(), Je = ee.advancedMode ? Fe.map((ie => [ie, ee.callbacks[ie]])) : Me.m.map((ie => [ie, ee.callbacks[ie]])), Re = (0, Ue.jsx)("div", {
-         className: be()("PluginsGrid", {
-           SectionBody: !He
-         }),
-         children: Je.map((ee => {
- ... (16 more removed lines; see GitHub link above)
+       PW = OW(5864),
+       LW = OW(1383),
+       cW = OW(1172),
+       wW = OW(4344),
+       tW = OW(4464),
+       ZW = OW(1391),
+       xW = OW(4349),
+       lW = OW(5952),
+       AW = OW(5978),
+       bW = OW(1283);
```

#### 12. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L142-L147` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L67-L71) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L142-L147)

```diff
-         plugin: ie,
-         callbacks: {
-           isEnabled: He,
-           JY: ye
-         },
-         disabled: Me
+         folderName: iW,
+         onTexturePackUpdated: EW,
+         disabled: jW = !1,
+         maxFileSizeMb: UW,
+         packOwner: kW
```

#### 13. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L151` → after: `L75-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L75-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L75-L125) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L151)

```diff
-       } = (0, Ke.v)(), Je = He();
+       } = (0, cW.B)(), [MW, KW] = (0, mW.useState)(!1), [SW, YW] = (0, mW.useState)(null), [yW, TW] = (0, mW.useState)(null), JW = (0, mW.useRef)(null);
+       async function hW(WW) {
+         KW(!0);
+         try {
+           const iW = await (0, wW.m)(WW);
+           if ("customGame" === kW && (0, tW.q)(iW)) return void YW(sW(tW.e));
+           if (void 0 !== UW) {
+             const WW = JSON.stringify(iW).length / 1048576;
+             if (WW > UW) return void YW(sW("customTexturePack:packTooBig", {
+               size: WW.toFixed(1),
+               max: UW
+             }))
+           }
+           YW(null), TW(null), EW(iW), JW.current = iW,
+             function(WW, iW) {
+               const mW = WW.modelOverrides;
+ ... (35 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L153-L167` → after: `L127-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L127-L141) · [Before (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L153-L167)

```diff
-         className: be()("PluginCard", {
-           PluginCardEnabled: Je,
-           PluginCardDisabledForm: Me
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": Me || void 0,
-         onClick: () => {
-           Me || ye(!Je)
-         },
-         children: [(0, Ue.jsx)("div", {
-           className: "PluginCardIcon",
-           children: (0, Ue.jsx)("img", {
-             src: `/textures/games/classic/customGames/${ie}.png`,
-             alt: ie
-           })
+         className: "CustomTexturePackContainer",
+         children: [(0, bW.jsxs)("div", {
+           className: "CustomTextureWarning",
+           children: [sW("settingsMenu:customTextureWarning"), ".", (0, bW.jsx)("br", {}), sW("settingsMenu:viewDocumentation"), ":", " ", (0, bW.jsx)("a", {
+             href: "https://github.com/Bloxdy/texturePacks",
+             target: "_blank",
+             rel: "noreferrer",
+             children: "github.com/Bloxdy/texturePacks"
+           })]
+         }), SW && (0, bW.jsxs)("div", {
+           className: "CustomTextureError",
+           children: [sW("general:error"), ": ", SW]
+         }), yW && (0, bW.jsx)("div", {
+           className: "CustomTextureError",
+           children: yW
```

#### 15. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L169-L175` → after: `L143-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L143-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L143-L181) · [Before (L169-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L169-L175)

```diff
-           className: "PluginCardBody",
-           children: [(0, Ue.jsx)("div", {
-             className: "PluginCardTitle",
-             children: Fe(Re[ie])
-           }), (0, Ue.jsx)("div", {
-             className: "PluginCardDescription",
-             children: Fe(ke[ie])
+           ...HW({
+             className: NW()("CustomTextureFolderUpload", {
+               ActiveDrag: uW,
+               Disabled: jW
+             })
+           }),
+           children: [(0, bW.jsx)("input", {
+             ...nW({
+               webkitdirectory: "true"
+             })
+           }), MW && (0, bW.jsx)("div", {
+             className: "CustomTextureFolderUploadLoading",
+             children: (0, bW.jsx)(LW.d, {})
+           }), !MW && !uW && iW && (0, bW.jsxs)(bW.Fragment, {
+             children: [(0, bW.jsx)("div", {
+               className: "CustomTextureFolderUploadIcon Active",
+ ... (23 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L202` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L187) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L202)

```diff
-   5440: (ee, ie, He) => {
+   5978: (WW, iW, OW) => {
```

#### 17. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L206-L210` → after: `L192-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L192-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L192-L201) · [Before (L206-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L206-L210)

```diff
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(1127),
-       Ke = He(1323),
-       Ue = He(1228);
+     var mW = OW(62),
+       EW = OW(1532),
+       NW = OW(1172),
+       PW = OW(100),
+       LW = OW(4304),
+       cW = OW(1283);
+ 
+     function wW() {
+       return !(0, PW.isMobile)()
+     }
```

#### 18. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L214-L215` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L205-L207) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L214-L215)

```diff
-         textKey: ie,
-         allowed: He
+         disabled: iW,
+         openFolderPicker: OW,
+         onFiles: PW
```

#### 19. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L219-L225` → after: `L211-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L211-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L211-L233) · [Before (L219-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L219-L225)

```diff
-       } = (0, Me.v)();
-       return (0, Ue.jsxs)("li", {
-         className: be()("PolicyListItem", He ? "Allowed" : "NotAllowed"),
-         children: [(0, Ue.jsx)(Ke.e, {
-           name: He ? "check" : "x"
-         }), (0, Ue.jsx)("span", {
-           children: ye(ie)
+       } = (0, NW.B)(), ZW = (0, mW.useRef)(null);
+       return (0, cW.jsxs)("div", {
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, cW.jsx)("input", {
+           ref: ZW,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+           onChange: function(WW) {
+             const iW = Array.from(WW.target.files);
+             WW.target.value = "", PW(iW)
+           }
+         }), wW() && (0, cW.jsx)(EW.f, {
+           disabled: iW,
+           onClick: OW,
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L247` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L238) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L247)

```diff
-   5437: (ee, ie, He) => {
+   5910: (WW, iW, OW) => {
```

#### 21. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L249-L250` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L240-L243) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L249-L250)

```diff
-       c: () => Ee,
-       e: () => ge
+       e: () => AW,
+       h: () => MW,
+       k: () => bW,
+       n: () => sW
```

#### 22. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L252-L253` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L245-L250) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L252-L253)

```diff
-     var ye = He(59),
-       be = He(1053),
+     var mW = OW(62),
+       EW = OW(5919),
+       NW = OW(5041),
+       PW = OW(1434),
+       LW = OW(4171),
+       cW = OW(1089),
```

#### 23. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L255-L272` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L252-L255) · [Before (L255-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L255-L272)

```diff
-       Ke = He(77),
-       Ue = He(2310),
-       Fe = He(1127),
-       Je = He(5415),
-       oe = He(1323),
-       Re = He(1342),
-       ke = He(1438),
-       qe = He(4968),
-       fe = He(5440),
-       Te = He(1228);
- 
-     function pe(ee) {
-       return (0, Ke.createPortal)((0, Te.jsx)(Re.d, {
-         ...ee
-       }), document.body)
-     }
- ... (2 more removed lines; see GitHub link above)
+       tW = OW(1422),
+       ZW = OW(1856),
+       xW = OW(5940),
+       lW = OW(1283);
```

#### 24. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L276` → after: `L259-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L259-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L259-L265) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L276)

```diff
-         onScrolledToEnd: ie
+         label: iW,
+         onClick: OW,
+         checked: mW,
+         circleInfoText: EW,
+         className: LW,
+         disabled: cW,
+         note: tW
```

#### 25. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L278-L289` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L267-L268) · [Before (L278-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L278-L289)

```diff
-       const He = (0, ye.useRef)(null),
-         {
-           after: be
-         } = (0, qe.c)(He, "y");
-       return (0, ye.useEffect)((() => {
-         be || null === ie || void 0 === ie || ie()
-       }), [be, ie]), (0, Te.jsx)("div", {
-         ref: He,
-         className: Me()("PublishingPolicyRows", {
-           PublishingPolicyRowsMoreBelow: be
-         }),
-         tabIndex: 0,
+       return (0, lW.jsxs)("div", {
+         "aria-disabled": cW || void 0,
```

#### 26. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L291-L307` → after: `L270-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L270-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L270-L275) · [Before (L291-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L291-L307)

```diff
-         children: (0, Te.jsx)(fe.e, {
-           allowed: Xe,
-           notAllowed: ze
-         })
-       })
-     }
- 
-     function Ee(ee) {
-       let {
-         onAnswer: ie
-       } = ee;
-       const [He, be] = (0, ye.useState)(!1), [Me, Ke] = (0, ye.useState)(!1), Ue = (0, ye.useCallback)((() => {
-         Ke(!0)
-       }), []);
-       return (0, Te.jsx)(pe, {
-         close: () => {
- ... (1 more removed lines; see GitHub link above)
+         className: wW()("SettingBox CheckboxContainer", {
+           [LW]: LW,
+           SettingBoxDisabled: cW
+         }),
+         onClick: () => {
+           cW || OW(!mW)
```

#### 27. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L309-L336` → after: `L277-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L277-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L277-L282) · [Before (L309-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L309-L336)

```diff
-         disableExitButton: !0,
-         body: (0, Te.jsxs)(Re.k, {
-           className: "PublishingPolicyPopup",
-           title: "worldBuilder:publishingPolicy",
-           padStartsOn: "content",
-           confirm: {
-             text: "worldBuilder:publishAsGame",
-             disabled: !He,
-             onClick: () => {
-               ie(!0)
-             }
-           },
-           cancel: {
-             text: "general:cancel",
-             onClick: () => {
-               ie(!1)
- ... (12 more removed lines; see GitHub link above)
+         children: [(0, lW.jsxs)("div", {
+           className: "CheckboxInputAndText",
+           children: [(0, lW.jsx)("label", {
+             className: "CheckboxClickableLabel",
+             children: (0, lW.jsx)(NW.e, {
+               className: "SettingsCheckbox",
```

#### 28. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L338-L339` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L284-L285) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L338-L339)

```diff
-               setChecked: be,
-               disabled: !Me
+               disabled: cW,
+               onChange: () => {}
```

#### 29. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L342-L367` → after: `L297-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L297-L299) · [Before (L342-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L342-L367)

```diff
-         })
-       })
-     }
- 
-     function ge() {
-       const {
-         t: ee
-       } = (0, Fe.v)(), [ie, He] = (0, ye.useState)(!1);
-       return (0, Te.jsxs)(Te.Fragment, {
-         children: [(0, Te.jsxs)(ke.M, {
-           className: "PublishingPolicyLink",
-           onClick: () => {
-             He(!0)
-           },
-           children: [(0, Te.jsx)(oe.e, {
-             name: "shield-halved"
- ... (10 more removed lines; see GitHub link above)
+         }), tW && (0, lW.jsx)("div", {
+           className: "SettingNote",
+           children: tW
```

#### 30. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L400-L403` → after: `L306-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L306-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L306-L320) · [Before (L400-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L400-L403)

```diff
-         icon: ie,
-         title: He,
-         disabled: ye,
-         children: be
+         name: iW,
+         onChange: OW,
+         min: EW,
+         max: NW,
+         step: LW,
+         initValue: cW,
+         circleInfoText: tW,
+         format: ZW,
+         className: xW,
+         padStep: AW,
+         disabled: bW = !1,
+         selectableMax: jW,
+         cappedNote: UW,
+         note: sW,
+         onChangeComplete: MW
```

#### 31. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L406-L407` → after: `L332-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L332-L335) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L406-L407)

```diff
-         className: qe()("ManageCard", {
-           ManageCardDisabled: ye
+         className: wW()("SettingBox SettingsSliderDiv", {
+           [xW]: xW,
+           SettingBoxDisabled: bW,
+           SliderCapped: yW
```

#### 32. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L410-L425` → after: `L339-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L339-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L339-L342) · [Before (L410-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L410-L425)

```diff
-           className: "ManageCardHead",
-           children: [(0, Ee.jsx)("div", {
-             className: "ManageCardIcon",
-             children: (0, Ee.jsx)(oe.e, {
-               name: ie
-             })
-           }), (0, Ee.jsx)("div", {
-             children: (0, Ee.jsx)("h2", {
-               className: "ManageCardTitle",
-               children: He
-             })
-           })]
-         }), (0, Ee.jsxs)("div", {
-           className: "ManageCardBody",
-           children: [be, ye && (0, Ee.jsx)("div", {
-             className: "ManageCardDisabledOverlay"
+           className: "SliderText",
+           children: [`${iW}: ${ZW?ZW(KW):KW}`, tW && (0, lW.jsx)(PW.d, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: tW
```

#### 33. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L433-L435` → after: `L378-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L378-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L378-L393) · [Before (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L433-L435)

```diff
-         label: ie,
-         caption: He,
-         children: ye
+         value: iW,
+         min: OW,
+         max: NW,
+         step: PW,
+         onChange: LW,
+         orientation: cW,
+         reverse: wW,
+         setIsChanging: tW,
+         tooltip: ZW,
+         labels: AW,
+         handleLabel: bW,
+         format: kW,
+         onChangeStart: sW,
+         onChangeComplete: MW,
+         padStep: KW,
+         disabled: SW = !1
```

#### 34. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L437-L445` → after: `L395-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L395-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L395-L465) · [Before (L437-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L437-L445)

```diff
-       return (0, Ee.jsxs)("div", {
-         className: "ManageStackedField",
-         children: [(0, Ee.jsx)("div", {
-           className: "ManageStackedFieldLabel",
-           children: ie
-         }), ye, He && (0, Ee.jsx)("div", {
-           className: "ManageStackedFieldCaption",
-           children: He
-         })]
+       const YW = (0, mW.useRef)(null),
+         yW = (0, mW.useRef)(null);
+       (0, mW.useLayoutEffect)((() => {
+         var WW, iW, OW;
+         const mW = null !== (WW = null === (iW = YW.current) || void 0 === iW ? void 0 : iW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
+         null === mW || void 0 === mW || mW.setAttribute("data-pad-slider", ""), null === mW || void 0 === mW || mW.setAttribute("data-pad-focusable", ""), null === mW || void 0 === mW || null === (OW = mW.querySelector(".rangeslider__handle")) || void 0 === OW || OW.setAttribute( … [truncated]
+       }), []), (0, mW.useLayoutEffect)((() => {
+         var WW, iW;
+         SW ? null === (WW = yW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (iW = yW.current) || void 0 === iW || iW.removeAttribute("aria-disabled")
+       }), [SW]);
+       const TW = Math.max(UW(PW), UW(OW)),
+         JW = WW => {
+           if (WW >= NW) return NW;
+           if (WW <= OW) return OW;
+           const iW = Number((Math.round((WW - OW) / PW) * PW + OW).toFixed(TW));
+           return Math.min(NW, Math.max(OW, iW))
+ ... (55 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L452-L454` → after: `L483-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L483-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L483-L486) · [Before (L452-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L452-L454)

```diff
-         caption: He,
-         disabled: ye,
-         children: be
+         options: OW,
+         value: mW,
+         onChange: EW,
+         circleInfoText: NW
```

#### 36. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L457-L459` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L489) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L457-L459)

```diff
-         className: qe()("ManageField", {
-           ManageFieldDisabled: ye
-         }),
+         className: "SettingBox SegmentedSettingRow",
```

#### 37. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L461-L467` → after: `L491-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L491-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L491-L494) · [Before (L461-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L461-L467)

```diff
-           className: "ManageFieldText",
-           children: [(0, Ee.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: ie
-           }), (0, Ee.jsx)("div", {
-             className: "ManageFieldCaption",
-             children: He
+           className: "SliderText",
+           children: [iW, NW && (0, lW.jsx)(PW.d, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: NW
```

#### 38. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L469-L471` → after: `L496-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L496-L500) · [Before (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L469-L471)

```diff
-         }), (0, Ee.jsx)("div", {
-           className: "ManageFieldControl",
-           children: be
+         }), (0, lW.jsx)(LW.c, {
+           ariaLabel: iW,
+           options: OW,
+           value: mW,
+           onChange: EW
```

#### 39. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L477` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L525) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L477)

```diff
-       var ie, He;
+       var iW;
```

#### 40. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L479-L482` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L527) · [Before (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L479-L482)

```diff
-         schematicData: ye,
-         updateSchematicData: be,
-         publishFormEnabled: Me,
-         formEnabled: Ke
+         setApplySettingsCallback: OW
```

#### 41. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L484-L513` → after: `L529-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L529-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L529-L556) · [Before (L484-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L484-L513)

```diff
-       const {
-         t: Fe
-       } = (0, Ue.v)(), Je = !Me, oe = {
-         tpRequests: {
-           isEnabled: () => !ye.disableTpRequests,
-           JY: ee => be("disableTpRequests", !ee)
-         },
-         spawnProtection: {
-           isEnabled: () => !ye.disableSpawnProtection,
-           JY: ee => be("disableSpawnProtection", !ee)
-         },
-         spawnReset: {
-           isEnabled: () => !!ye.enableSpawnReset,
-           JY: ee => be("enableSpawnReset", ee)
-         },
-         smpMarketplace: {
- ... (14 more removed lines; see GitHub link above)
+       const [, PW] = (0, NW.useReducer)((WW => WW + 1), 0), LW = (0, NW.useRef)(!1), cW = (0, NW.useRef)(null);
+ 
+       function jW(WW, iW) {
+         wW.d.setFromJson(WW, "player");
+         const mW = wW.d.saveTexturePack();
+         if (lW.K) {
+           const WW = wW.d.toJson();
+           mW.then((iW => {
+             iW && (0, AW.c)(WW)
+           }))
+         } else LW.current ||= iW, cW.current !== wW.d.getId() || wW.d.getId() === EW.n.CUSTOM && LW.current ? OW((() => ZW.n)) : OW(null);
+         PW()
+       }
+       async function kW(WW) {
+         if (wW.d.getId() !== WW.metaData.id) {
+           if (wW.d.getId() === EW.n.CUSTOM && wW.d.getFromFolderName()) {
+ ... (12 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L515-L642` → after: `L558-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L558-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L558-L578) · [Before (L515-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L515-L642)

```diff
-       };
-       return (0, Ee.jsxs)(Ee.Fragment, {
-         children: [!1 === ye.schematicContainsSpawnBlock && (0, Ee.jsx)("div", {
-           className: "ManageWarningBanner",
-           children: Fe("worldBuilder:mustContainSpawnBlock")
-         }), (0, Ee.jsxs)("div", {
-           className: "ManageSettingsGrid",
-           children: [(0, Ee.jsxs)(ge, {
-             icon: "globe",
-             title: Fe("worldBuilder:worldRulesSection"),
-             disabled: !Ke,
-             children: [(0, Ee.jsx)(de, {
-               label: Fe("classic:defaultGamemode"),
-               caption: Fe("classic:defaultGamemodeDescription"),
-               disabled: Je,
-               children: (0, Ee.jsx)(ze.e, {
- ... (112 more removed lines; see GitHub link above)
+       }(0, NW.useEffect)((() => {
+         cW.current = wW.d.getId()
+       }), []);
+       const sW = mW.d,
+         MW = [sW, ...Object.values(EW.n).filter((WW => WW !== sW))];
+       return (0, bW.jsx)(bW.Fragment, {
+         children: (0, bW.jsxs)("div", {
+           className: "TexturePackCategory SettingsMenuRightInner",
+           children: [(0, bW.jsx)("div", {
+             className: "TexturePackList",
+             children: MW.map((WW => (0, bW.jsx)(UW, {
+               id: WW,
+               isSelected: WW === wW.d.getId(),
+               setSelected: kW
+             }, WW)))
+           }), wW.d.getId() === EW.n.CUSTOM && (0, bW.jsx)(xW.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L644-L654` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L580) · [Before (L644-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L644-L654)

```diff
-         }), (0, Ee.jsx)(ge, {
-           icon: "layer-group",
-           title: Fe("worldBuilder:pluginsSection"),
-           disabled: !Ke,
-           children: (0, Ee.jsx)(Be.c, {
-             callbacks: oe,
-             disabled: Je,
-             advancedMode: !0,
-             hideWrapper: !0
-           })
-         })]
+         })
```

#### 44. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L711-L714` → after: `L586-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L586-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L586-L589) · [Before (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L711-L714)

```diff
-         schematicId: He,
-         hasReadUploadPolicy: be,
-         onPolicyValidationError: Fe,
-         onThumbnailReady: Je
+         id: iW,
+         isSelected: OW,
+         setSelected: PW,
+         disabled: wW = !1
```

#### 45. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L716-L724` → after: `L591-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L591-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L591-L608) · [Before (L716-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L716-L724)

```diff
-       const {
-         t: ke
-       } = (0, Ue.v)(), [fe, Te] = (0, ye.useState)(null), [pe, Xe] = (0, ye.useState)(""), [ze, Be] = (0, ye.useState)(""), [ge, Oe] = (0, ye.useState)(!0), [de, We] = (0, ye.useState)(!1), te = (0, ye.useRef)(!1), [Ze, we] = (0, ye.useState)(null), [De, Pe] = (0, ye.useState)(!1 … [truncated]
-         getRootProps: ce,
-         getInputProps: xe,
-         isDragActive: Le
-       } = (0, Ye.d)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+       const [tW, ZW] = (0, NW.useState)(!0), [xW, lW] = (0, NW.useState)(""), [AW, jW] = (0, NW.useState)(""), [UW, kW] = (0, NW.useState)(""), sW = (0, NW.useRef)({});
+       return (0, NW.useEffect)((() => {
+         (0, mW.j)(iW).then((WW => {
+           var iW;
+           WW && (sW.current = WW, ZW(!1), lW(sW.current.metaData.name), jW(sW.current.metaData.author), kW(null !== (iW = sW.current.metaData.previewImage) && void 0 !== iW ? iW : ""))
+         })).catch((WW => {
+           console.warn(`Failed to fetch texture pack ${iW}`, WW)
+         }))
+       }), [iW]), (0, bW.jsxs)("div", {
+         "data-pad-focusable": !0,
+         "aria-disabled": wW || void 0,
+         className: LW()("TexturePack", {
+           Selected: OW,
+           Custom: iW === EW.n.CUSTOM,
+           Disabled: wW
+         }),
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L726-L738` → after: `L610-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L610-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L610-L613) · [Before (L726-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L726-L738)

```diff
-         multiple: !1,
-         onDrop: async ee => {
-           if (0 === ee.length) return;
-           const ie = ee[0],
-             He = ++ae.current;
-           we(null), Pe(!1), Te(null), Xe(ie.name);
-           try {
-             const ee = await Ce(ie);
-             if (He !== ae.current) return;
-             Te(ee), Pe(ee.heavilyCompressed)
-           } catch (ye) {
-             if (He !== ae.current) return;
-             we(ke(ye instanceof ve ? "thumbnail:portraitImagesNotAllowed" : ye instanceof ue ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
+         children: [(0, bW.jsx)("div", {
+           className: "TexturePackBg",
+           style: {
+             backgroundImage: UW ? `url(${UW})` : void 0
```

#### 47. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L803-L834` → after: `L616-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L616-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L616-L622) · [Before (L803-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L803-L834)

```diff
-           className: "ThumbnailUploadError",
-           children: ke("thumbnail:imageRequired")
-         }), (0, Ee.jsx)(Ke.d, {
-           className: qe()("ThumbnailUploadNameInput", {
-             ValidationError: se
-           }),
-           placeholderText: ke("thumbnail:thumbnailName"),
-           defaultValue: ze,
-           onValueChange: ee => {
-             Be(ee)
-           },
-           maxLength: Re.m
-         }), se && (0, Ee.jsx)("div", {
-           className: "ThumbnailUploadError",
-           children: ke("thumbnail:nameRequired", {
-             min: Re.o,
- ... (16 more removed lines; see GitHub link above)
+           className: "TexturePackName",
+           children: (0, bW.jsx)(cW.d, {})
+         }), !tW && xW && (0, bW.jsx)("div", {
+           className: "TexturePackName",
+           children: xW
+         }), !tW && AW && (0, bW.jsx)("div", {
+           className: "TexturePackAuthor",
```

#### 48. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L963-L1004` → after: `L637-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L637-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L637-L641) · [Before (L963-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L963-L1004)

```diff
-     function ne(ee) {
-       let {
-         imageUrl: ie,
-         thumbnailName: He,
-         onClose: ye
-       } = ee;
-       const {
-         t: be
-       } = (0, Ue.v)();
-       return (0, Ee.jsxs)("div", {
-         className: "ThumbnailDeleteConfirm",
-         children: [(0, Ee.jsx)("div", {
-           className: "ThumbnailDeleteConfirmTitle",
-           children: be("thumbnail:deleteThumbnail")
-         }), (0, Ee.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
- ... (26 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const mW = {};
+       for (const EW in OW) mW[EW] = `\0${EW}\0`;
+       return WW(iW, mW).replace(/\0(\w+)\0/g, ((WW, iW) => OW[iW]))
```

#### 49. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1047-L1068` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L645) · [Before (L1047-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1047-L1068)

```diff
-       let {
-         rejectedThumbnails: ie,
-         isAcknowledging: He,
-         onAcknowledge: ye
-       } = ee;
-       const {
-         t: be
-       } = (0, Ue.v)();
-       return (0, Ee.jsxs)("div", {
-         className: "ManageWarningBanner ThumbnailRejectionNotice",
-         children: [(0, Ee.jsx)("div", {
-           className: "ThumbnailRejectionNoticeTitle",
-           children: be("thumbnail:rejectedByModerators")
-         }), ie.map((ee => (0, Ee.jsx)(Ne, {
-           rejected: ee
-         }, ee.thumbnail.id))), (0, Ee.jsx)(Me.m, {
- ... (6 more removed lines; see GitHub link above)
+       return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
```

#### 50. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1072-L1119` → after: `L649-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L649-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L649-L652) · [Before (L1072-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1072-L1119)

```diff
-       var ie;
-       let {
-         rejected: {
-           thumbnail: He,
-           rejection: ye
-         }
-       } = ee;
-       const {
-         t: be
-       } = (0, Ue.v)(), Me = null !== (ie = (0, je.b)(Ie, ye.policyId)) && void 0 !== ie ? ie : Ie["custom-game-bad-thumbnail"], Ke = new Date(ye.at).toLocaleDateString();
-       return (0, Ee.jsxs)("div", {
-         className: "RejectedThumbnail",
-         children: [(0, Ee.jsxs)("div", {
-           className: "RejectedThumbnailImage",
-           children: [null !== He.preview && (0, Ee.jsx)("img", {
-             src: He.preview,
- ... (32 more removed lines; see GitHub link above)
+       const iW = new Map(WW.map((WW => [cW(WW).join("."), WW])));
+       if (0 === iW.size) return [];
+       const OW = tW([...iW.values()]);
+       return 0 === OW[0].length ? [] : OW
```

#### 51. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1124` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L656) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1124)

```diff
-       return null !== ee.preview ? ee.preview : ee.approved ? `${Ge.clientSideServerUrls.s3Url}/${(0,Ze.f)(ee.id)}` : null
+       return EW.map((iW => iW(WW)))
```

#### 52. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1128-L1131` → after: `L661-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L661-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L661-L669) · [Before (L1128-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1128-L1131)

```diff
-       return null !== ee.pendingKey ? {
-         pendingKey: ee.pendingKey
-       } : {
-         thumbnailId: ee.id
+       const iW = EW.map((iW => new Set(WW.map(iW)))),
+         OW = iW.reduce(((WW, iW) => WW * iW.size), 1),
+         mW = iW.every(((WW, iW) => 1 === WW.size || WW.size === wW[iW]));
+       if (OW === WW.length && mW) return [EW.filter(((WW, OW) => 1 === iW[OW].size)).map((iW => iW(WW[0])))];
+       let NW = null;
+       for (let PW = 0; PW < EW.length; PW++) {
+         if (1 === iW[PW].size) continue;
+         const OW = ZW(WW, EW[PW]).flatMap(tW);
+         (null === NW || OW.length < NW.length) && (NW = OW)
```

#### 53. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1135-L1212` → after: `L674-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L674-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L674-L679) · [Before (L1135-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1135-L1212)

```diff
-     function ei(ee) {
-       var ie, He;
-       let {
-         schematicData: Ke,
-         updateSchematicData: Je,
-         publishFormEnabled: Re,
-         onClose: ke
-       } = ee;
-       const {
-         t: fe
-       } = (0, Ue.v)(), {
-         userContext: Te,
-         isUserContextUpdating: pe
-       } = (0, Pe.b)(), Xe = (0, De.c)(), [ze, Be] = (0, ye.useState)([]), [ge, Oe] = (0, ye.useState)([]), [de, We] = (0, ye.useState)(!0), [te, Ze] = (0, ye.useState)(!1), [Ye, Ve] = (0, ye.useState)(null !== (ie = Ke.customThumbnailId) && void 0 !== ie ? ie : null), [ae, ce] =  … [truncated]
- 
-       function le(ee, ie) {
- ... (62 more removed lines; see GitHub link above)
+     function ZW(WW, iW) {
+       const OW = new Map;
+       for (const EW of WW) {
+         var mW;
+         const WW = iW(EW);
+         OW.set(WW, [...null !== (mW = OW.get(WW)) && void 0 !== mW ? mW : [], EW])
```

#### 54. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1214-L1361` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L681) · [Before (L1214-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1214-L1361)

```diff
-       return (0, ye.useEffect)((() => {
-         !1 === pe && je()
-       }), [pe, je]), (0, Ee.jsxs)("div", {
-         className: "BloxdForm ThumbnailSection",
-         children: [(0, Ee.jsxs)("div", {
-           className: "SectionTitle",
-           children: [fe("thumbnail:gameThumbnail"), ae && (0, Ee.jsx)("span", {
-             className: qe()("ThumbnailActionMsg", `ThumbnailActionMsg--${ae.type}`),
-             children: ae.text
-           })]
-         }), (0, Ee.jsxs)("div", {
-           className: "SectionBody",
-           children: [ge.length > 0 && (0, Ee.jsx)(he, {
-             rejectedThumbnails: ge,
-             isAcknowledging: te,
-             onAcknowledge: async function() {
- ... (132 more removed lines; see GitHub link above)
+       return [...OW.values()]
```

#### 55. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1363-L1379` → after: `L683-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L683-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L683-L691) · [Before (L1363-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1363-L1379)

```diff
-     var ii = He(2181),
-       Hi = He(5491),
-       yi = He(5496),
-       bi = He(5552);
- 
-     function Mi(ee) {
-       let {
-         schematicData: ie,
-         setTexturePack: He,
-         initializeTexturePack: be,
-         publishFormEnabled: Me
-       } = ee;
-       const {
-         t: Ke
-       } = (0, Ue.v)(), [Fe, Je] = (0, ye.useState)(null), [oe, Re] = (0, ye.useState)(null), [ke, fe] = (0, ye.useState)(!1), Te = (0, De.c)(), pe = Me && !ke, Xe = ie.customTexturePackKey;
- 
- ... (1 more removed lines; see GitHub link above)
+   },
+   5940: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW,
+       d: () => PW
+     });
+     var mW = OW(62);
+     const EW = new WeakMap,
+       NW = WW => {
```

#### 56. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1381-L1405` → after: `L693-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L693-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L693-L703) · [Before (L1381-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1381-L1405)

```diff
-         Je(ee.metaData.id), Re(null !== (ie = ee.metaData.fromFolderName) && void 0 !== ie ? ie : null), (ee.metaData.id !== ii.o.CUSTOM || ee.metaData.fromFolderName) && He(ee)
-       }
-       return (0, ye.useEffect)((() => {
-         Xe && (fe(!0), (0, Hi.e)(Xe).then((ee => {
-           var ie;
-           Te.current && (ee ? (Je(ee.metaData.id), Re(null !== (ie = ee.metaData.fromFolderName) && void 0 !== ie ? ie : null), be(ee)) : console.error(`No texture pack at ${Xe}`))
-         })).catch((ee => {
-           console.error("Error fetching texture pack: ", ee)
-         })).finally((() => {
-           fe(!1)
-         })))
-       }), [Xe, be, Te]), (0, Ee.jsxs)("div", {
-         className: "BloxdForm TexturePackSection",
-         children: [(0, Ee.jsx)("div", {
-           className: "SectionTitle",
-           children: Ke("customTexturePack:customTexturePack")
- ... (9 more removed lines; see GitHub link above)
+         const OW = WW.closest("[data-pad-slider]");
+         return OW && null !== (iW = EW.get(OW)) && void 0 !== iW ? iW : null
+       },
+       PW = (WW, iW) => {
+         const OW = (0, mW.useRef)(iW);
+         OW.current = iW, (0, mW.useEffect)((() => {
+           if (WW.current) return ((WW, iW) => (EW.set(WW, iW), () => {
+             EW.get(WW) === iW && EW.delete(WW)
+           }))(WW.current, {
+             adjust: WW => {
+               OW.current.adjust(WW)
```

#### 57. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1407-L1518` → after: `L705-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L705-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L705-L709) · [Before (L1407-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1407-L1518)

```diff
-             children: (0, Ee.jsx)("div", {
-               className: "TexturePackName",
-               children: "No Override"
-             })
-           }), Object.values(ii.o).map((ee => (0, Ee.jsx)(yi.f, {
-             id: ee,
-             isSelected: ee === Fe,
-             setSelected: ze,
-             disabled: !pe
-           }, ee)))]
-         }), Fe === ii.o.CUSTOM && (0, Ee.jsx)(bi.e, {
-           folderName: oe,
-           onTexturePackUpdated: ze,
-           disabled: !pe,
-           maxFileSizeMb: 25,
-           packOwner: "customGame"
- ... (96 more removed lines; see GitHub link above)
+             setFraction: WW => {
+               OW.current.setFraction(WW)
+             },
+             endDrag: () => {
+               OW.current.endDrag()
```

#### 58. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1536-L1537` → after: `L712-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L712-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L712-L729) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1536-L1537)

```diff
-         })]
-       })
+         }), [WW])
+       }
+   },
+   5961: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
+     });
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
+   },
+   5984: (WW, iW, OW) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1540-L1579` → after: `L732-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L732-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L732-L738) · [Before (L1540-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1540-L1579)

```diff
-     function oi(ee) {
-       let {
-         editor: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ue.v)(), {
-         schematicData: ye,
-         formEnabled: be,
-         hasUnsavedChanges: Ke,
-         publishSuspendedUntil: Re
-       } = ie, ke = (0, ae.e)(), qe = !0 === ye.gamePublished ? Re : null, fe = be && Ke && null === qe;
-       return (0, Ee.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [null !== qe && (0, Ee.jsx)("div", {
-           className: "SchematicPageFooterNotice",
- ... (24 more removed lines; see GitHub link above)
+     function EW(WW, iW) {
+       if (WW === iW) return !0;
+       if ("object" !== typeof WW || "object" !== typeof iW || null === WW || null === iW || Array.isArray(WW) !== Array.isArray(iW)) return !1;
+       const OW = WW,
+         mW = iW,
+         NW = Object.keys(OW);
+       return NW.length === Object.keys(mW).length && NW.every((WW => Object.prototype.hasOwnProperty.call(mW, WW) && EW(OW[WW], mW[WW])))
```

#### 60. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1583-L1594` → after: `L754-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L754-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L754-L755) · [Before (L1583-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1583-L1594)

```diff
-       let {
-         schematic: ie,
-         onSchematicUpdate: He,
-         onClose: be,
-         inSourceWorld: Ke
-       } = ee;
-       const {
-         t: Fe
-       } = (0, Ue.v)();
- 
-       function Je() {
-         null === be || void 0 === be || be()
+       NW = {
+         pack: WW.metaData.id === mW.d ? null : WW
```

#### 61. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1627-L1643` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L760) · [Before (L1627-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1627-L1643)

```diff
-       let {
-         schematic: ie,
-         onSchematicUpdate: He,
-         onClose: ye,
-         inSourceWorld: Me
-       } = ee;
-       be.NotificationProvider.showCustomPopup({
-         body: ee => (0, Ee.jsx)(Ri, {
-           schematic: ie,
-           onSchematicUpdate: He,
-           onClose: ee,
-           inSourceWorld: Me
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: ye,
-         unlockPointerKey: "schematicPagePopup"
- ... (1 more removed lines; see GitHub link above)
+       return !(null === NW || !(0, EW.c)(NW.pack, WW)) && (NW = null, !0)
```

#### 62. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1646` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L763) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1646)

```diff
-   5428: (ee, ie, He) => {
+   5970: (WW, iW, OW) => {
```

#### 63. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1648` → after: `L765-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L765-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L765-L774) · [Before (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1648)

```diff
-       c: () => qe
+       A: () => tW,
+       D: () => xW,
+       e: () => LW,
+       i: () => PW,
+       l: () => mW,
+       o: () => bW,
+       p: () => ZW,
+       r: () => EW,
+       v: () => NW,
+       x: () => wW
```

#### 64. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1650-L1659` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L776) · [Before (L1650-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1650-L1659)

```diff
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(1127),
-       Ke = He(1323),
-       Ue = He(1438),
-       Fe = He(1351),
-       Je = He(1320),
-       oe = He(5437),
-       Re = He(5448),
-       ke = He(1228);
+     const mW = 5;
```

#### 65. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1662-L1743` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L779) · [Before (L1662-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1662-L1743)

```diff
-       let {
-         editor: ie,
-         className: He,
-         publishRefusal: ye = null
-       } = ee;
-       const {
-         t: qe
-       } = (0, Me.v)(), {
-         schematicData: fe,
-         formEnabled: Te,
-         publishFormEnabled: pe,
-         publishSuspendedUntil: Xe
-       } = ie, ze = !Te || !pe, Be = (0, Re.e)();
-       return (0, ke.jsxs)("div", {
-         className: be()("PublishButtonContainer", He),
-         children: [ie.canEditSourceWorld && (0, ke.jsxs)(Ue.c, {
- ... (66 more removed lines; see GitHub link above)
+       return WW === mW
```

#### 66. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1757-L1796` → after: `L782-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L782-L783) · [Before (L1757-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1757-L1796)

```diff
-     function Ue() {
-       let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       const {
-         userContext: ie
-       } = (0, Ke.b)(), [He, Me] = (0, ye.useState)((() => ({
-         loading: ee && ie.isLoggedIn(),
-         eligibility: null
-       })));
-       if ((0, ye.useEffect)((() => {
-           if (!ee || !ie.isLoggedIn()) return void Me({
-             loading: !1,
-             eligibility: null
-           });
-           let He = !1;
-           return be.b.getCreatorEligibility(ie).then((ee => {
-             He || Me({
- ... (24 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return [...WW.features]
```

#### 67. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1799-L1807` → after: `L789-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L789-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L789-L796) · [Before (L1799-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1799-L1807)

```diff
-     function Fe() {
-       const {
-         t: ee,
-         selectedLanguage: ie
-       } = (0, Me.v)();
-       return (He, ye) => ee(He, {
-         date: (0, Me.f)(ie.code, He, ye, {
-           dateStyle: "medium",
-           timeStyle: "short"
+     function wW(WW) {
+       if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
+       const iW = [];
+       for (const [OW, mW] of Object.entries(WW)) {
+         if ("string" !== typeof mW) return `${OW} isn't text.`;
+         iW.push({
+           path: OW,
+           source: mW
```

#### 68. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1809` → after: `L798-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L798-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L798-L814) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1809)

```diff
-       })
+       }
+       return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
+         function(WW) {
+           if (0 === WW.length) return "The pack has no .wgsl files.";
+           if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
+           const iW = new Set;
+           for (const {
+               path: OW
+             }
+             of WW) {
+             const WW = lW(OW);
+             if (null !== WW) return WW;
+             if (iW.has(OW)) return `The pack has two files at ${OW}.`;
+             iW.add(OW)
+           }
+           return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1812-L1826` → after: `L817-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L817-L820) · [Before (L1812-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1812-L1826)

```diff
-     function Je() {
-       const {
-         t: ee,
-         selectedLanguage: ie
-       } = (0, Me.v)();
-       return He => {
-         const ye = "worldBuilder:publishSuspended";
-         return ee(ye, {
-           date: (0, Me.f)(ie.code, ye, He, {
-             dateStyle: "medium",
-             timeStyle: "short",
-             timeZone: "UTC"
-           })
-         })
-       }
+     function tW(WW) {
+       const iW = {};
+       for (const OW of WW) iW[OW.path] = OW.source;
+       return iW
```

#### 70. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1850-L1872` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L824) · [Before (L1850-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1850-L1872)

```diff
-       return {
-         schematicId: ee.schematicId,
-         name: ee.name,
-         description: ee.description,
-         gamePublished: ie,
-         gameCategory: ee.gameCategory,
-         defaultGamemode: ee.defaultGamemode,
-         voidDeathHeight: ee.voidDeathHeight,
-         disableKeepInventory: ee.disableKeepInventory,
-         disableTpRequests: ee.disableTpRequests,
-         disableLobbySpawn: ee.disableLobbySpawn,
-         disableMobs: ee.disableMobs,
-         disableSpawnProtection: ee.disableSpawnProtection,
-         disableFallDamage: ee.disableFallDamage,
-         worldBorder: ee.worldBorder,
-         hideLobbyCode: ee.hideLobbyCode,
- ... (7 more removed lines; see GitHub link above)
+       return WW < iW ? -1 : WW > iW ? 1 : 0
```

#### 71. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1876-L1896` → after: `L828-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L828-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L828-L835) · [Before (L1876-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1876-L1896)

```diff
-       var ie, He;
-       let {
-         onNavigateAway: Be,
-         inSourceWorld: Ee = !1,
-         canManage: ge = !0
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const {
-         userContext: Oe
-       } = (0, Te.b)(), de = (0, pe.useNavigatePreserveSearch)(), [We, te] = (0, ye.useState)({
-         ...ee
-       }), [Ze, we] = (0, ye.useState)("Enter"), [De, Pe] = (0, ye.useState)(void 0), [Ae, Ye] = (0, ye.useState)(!1), Ve = (0, ye.useRef)(ze(ee, ee.gamePublished)), ae = (0, ye.useRef)(void 0), ce = "Enter" === Ze, xe = null !== (ie = null === (He = (0, Xe.c)(ge).eligibility) ||  … [truncated]
- 
-       function ve(ee, ie) {
-         te((He => ({
-           ...He,
-           [ee]: ie
- ... (5 more removed lines; see GitHub link above)
+       const iW = new TextEncoder;
+       let OW = 0;
+       for (const {
+           source: mW
+         }
+         of WW) OW += iW.encode(mW).byteLength;
+       return OW
+     }
```

#### 72. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1898-L1900` → after: `L837-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L837-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L837-L843) · [Before (L1898-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1898-L1900)

```diff
-       function me() {
-         return (0, Fe.w)((0, Me.v)(We.schematicId), We)
-       }
+     function lW(WW) {
+       if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
+       if (WW.length > cW) return `A file path is over ${cW} characters.`;
+       if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
+       return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
+     }
+     const AW = /^(.*)\[rot\[([1-4])$/;
```

#### 73. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1902-L1927` → after: `L845-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L845-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L845-L859) · [Before (L1902-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1902-L1927)

```diff
-       function le(ee, ie) {
-         we("Loading");
-         const He = ze(We, ee),
-           ye = De !== ae.current ? De : void 0;
-         Re.b.updateSchematic(Oe, He, ye, ie).then((ie => {
-           let {
-             customTexturePackKey: ye
-           } = ie;
-           we("Success"), ve("customTexturePackKey", ye), Ve.current = He, ae.current = void 0, Pe(void 0), !ee || We.gamePublished || Be || fe.f.showGamePublished(We.name, me()), setTimeout((() => {
-             ve("gamePublished", ee), we("Enter")
-           }), 1e3)
-         })).catch((ee => {
-           if (ee instanceof Ke.b && ee.errorMessageForUser === Ue.H && void 0 === ie) return we("Enter"), void Ye(!0);
-           var He;
-           (console.error("Failed to save schematic:", ee), we("Error"), ee instanceof Ke.b && ee.errorMessageForUser) && qe.NotificationProvider.showAlertPopup({
-             title: "worldBuilder:changesNotSaved",
- ... (10 more removed lines; see GitHub link above)
+     function bW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const mW = new Map;
+       iW.forEach(((WW, iW) => {
+         let {
+           numAnimStates: OW,
+           animStartIdx: EW
+         } = WW;
+         for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
+       }));
+       const EW = Object.entries(WW),
+         NW = new Map;
+       for (const [bW, jW] of EW) {
+         const WW = AW.exec(bW);
+         "1" === WW?.[2] && NW.set(WW[1], jW + 1)
```

#### 74. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1929-L1952` → after: `L861-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L861-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L861-L866) · [Before (L1929-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1929-L1952)

```diff
-       return {
-         schematicData: We,
-         updateSchematicData: ve,
-         setTexturePack: Pe,
-         initializeTexturePack: ue,
-         updateState: Ze,
-         formEnabled: ce,
-         publishFormEnabled: Le,
-         hasUnsavedChanges: Ce,
-         publishSuspendedUntil: xe,
-         canEditSourceWorld: !Ee,
-         saveSchematic: le,
-         unpublishSchematic: function() {
-           qe.NotificationProvider.showPromptPopup({
-             icon: "rocket-launch",
-             title: "worldBuilder:unpublishAsGameConfirmTitle",
- ... (8 more removed lines; see GitHub link above)
+       const PW = WW => {
+           const iW = AW.exec(WW);
+           return iW && NW.has(iW[1]) ? {
+             root: iW[1],
+             rotation: Number(iW[2]) - 1
+           } : null
```

#### 75. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1954-L1956` → after: `L868-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L868-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L868-L874) · [Before (L1954-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1954-L1956)

```diff
-         askingPublishingPolicy: Ae,
-         answerPublishingPolicy: function(ee) {
-           Ye(!1), ee && le(!0, Ue.J)
+         LW = new Set(EW.map((WW => {
+           let [iW] = WW;
+           return PW(iW)?.root ?? iW
+         }))),
+         cW = (WW, OW) => {
+           const mW = WW.replace(/_?0$/, "");
+           return (iW[OW]?.numAnimStates ?? 0) > 1 && !LW.has(mW) ? mW : WW
```

#### 76. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1958-L1972` → after: `L876-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L876-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L876-L904) · [Before (L1958-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1958-L1972)

```diff
-         editSourceWorld: function() {
-           we("Loading"), ke.c.getSourceWorld(We.schematicId).then((ee => {
-             oe.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), (0, Je.l)("other"), de((0, be.b)("classic", ee)), null === Be || void 0 === Be || Be()
-           })).catch((ee => {
-             console.error("Failed to get source world:", ee), we("Error"), setTimeout((() => {
-               we("Enter")
-             }), 1e3)
-           }))
-         },
-         playGame: function() {
-           oe.gameBridge.send("leaveGame", {
-             reloadPath: "/"
-           }), de(me()), null === Be || void 0 === Be || Be()
+         wW = new Map;
+       for (const [AW, bW] of EW) wW.set(bW, cW(PW(AW)?.root ?? AW, bW));
+       const tW = EW.reduce(((WW, iW) => {
+           let [, OW] = iW;
+           return Math.max(WW, OW + 1)
+         }), 0),
+         ZW = Array.from({
+           length: tW
+         }, ((WW, iW) => ({
+           id: iW + 1,
+           rotation: 0
+         }))),
+         xW = new Map,
+         lW = new Map;
+       for (const [AW, bW] of EW) {
+         const WW = PW(AW),
+ ... (13 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L1976-L1977` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/118.js#L944) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/118.js#L1976-L1977)

```diff
-   },
-   5420: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L4)

```diff
-   37147: (ee, ie, He) => {
+   7485: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L8` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L8-L16) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L8)

```diff
-     var ye = He(1053),
+     var mW = OW(62),
+       EW = OW(1532),
+       NW = OW(1584),
+       PW = OW(4723),
+       LW = OW(1107),
+       cW = OW(1383),
+       wW = OW(1434),
+       tW = OW(1391),
+       ZW = OW(1089),
```

#### 3. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10-L12` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L18-L19) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L10-L12)

```diff
-       Me = He(59),
-       Ke = He(4968),
-       Ue = He(1228);
+       lW = OW(7482),
+       AW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16-L17` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L23-L24) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L16-L17)

```diff
-         locked: ie,
-         children: He
+         info: iW,
+         className: OW
```

#### 5. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L19-L28` → after: `L26-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L26-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L26-L62) · [Before (L19-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L19-L28)

```diff
-       const ye = (0, Me.useRef)(null),
-         Fe = (0, Ke.c)(ye, "y");
-       return (0, Ue.jsx)("div", {
-         ref: ye,
-         className: be()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: Fe.before,
-           CreateCustomLobbyBodyMoreBelow: Fe.after
-         }),
-         "data-pad-ignore": ie || void 0,
-         children: He
+       const {
+         statusText: mW,
+         rowText: EW
+       } = (0, lW.h)();
+       return (0, AW.jsxs)("div", {
+         className: xW()("GameApprovalInfoDetails", OW),
+         children: [(0, AW.jsxs)("div", {
+           className: xW()("GameApprovalInfoSummary", iW.overallPassed ? "Passed" : "Failed"),
+           children: [(0, AW.jsx)(tW.c, {
+             name: iW.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, AW.jsx)("span", {
+             children: mW(iW.status)
+           })]
+         }), iW.rows.length > 0 && (0, AW.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: iW.rows.map((WW => {
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L31-L48` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L65-L66) · [Before (L31-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L31-L48)

```diff
-   },
-   37222: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       showFirstWorldSetupPopup: () => Te
-     });
-     He(5420), He(37132);
-     var ye = He(5018),
-       be = He(59),
-       Me = He(4974),
-       Ke = He(1127),
-       Ue = He(1340),
-       Fe = He(37147),
-       Je = He(5424),
-       oe = He(1438),
-       Re = He(3871),
-       ke = He(37144),
- ... (2 more removed lines; see GitHub link above)
+     var jW = OW(1172),
+       UW = OW(1422);
```

#### 7. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L56-L58` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L70) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L56-L58)

```diff
-         body: He => (0, fe.jsx)(pe, {
-           flow: ie,
-           close: He,
+         body: () => (0, AW.jsx)(sW, {
```

#### 8. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L61-L64` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L73-L75) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L61-L64)

```diff
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           ie.closed = !0, ie.requested || (0, qe.c)()
-         }
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
```

#### 9. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L70-L75` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L81-L83) · [Before (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L70-L75)

```diff
-         flow: ie,
-         close: He,
-         onCreating: Ue,
-         onCreated: Te,
-         onFailedClosed: pe,
-         join: Xe
+         schematicId: iW,
+         canOverride: OW,
+         onApprovalChanged: ZW
```

#### 10. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L79` → after: `L87-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L87-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L87-L95) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L79)

```diff
-       } = (0, Ke.v)(), [Be, Ee] = (0, be.useState)(ye.t), [ge, Oe] = (0, be.useState)(!1), [de, We] = (0, be.useState)(""), te = (0, Re.c)();
+       } = (0, jW.B)(), {
+         userContext: lW
+       } = (0, LW.e)(), UW = (0, PW.c)(), [kW, sW] = (0, mW.useState)(null), [MW, KW] = (0, mW.useState)(null), [SW, YW] = (0, mW.useState)(!1), yW = (0, mW.useCallback)((() => {
+         KW(null), NW.e.getGameApprovalInfo(lW, iW).then((WW => {
+           UW.current && sW(WW)
+         })).catch((WW => {
+           console.error("Failed to get game approval info", WW), UW.current && KW(xW("studio:approvalLoadFailed"))
+         }))
+       }), [lW, iW, UW, xW]);
```

#### 11. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L81-L97` → after: `L97-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L97-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L97-L107) · [Before (L81-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L81-L97)

```diff
-         (0, qe.j)()
-       }), []);
-       const Ze = ee => ({
-         isEnabled: () => Be.plugins[ee],
-         JY: ie => {
-           (0, qe.d)({
-             plugin: ee,
-             enabled: ie
-           }), Ee({
-             ...Be,
-             plugins: {
-               ...Be.plugins,
-               [ee]: ie
-             }
-           })
-         }
- ... (1 more removed lines; see GitHub link above)
+         yW()
+       }), [yW]);
+       const TW = WW => {
+         SW || (YW(!0), NW.e.setGameApproval(lW, iW, WW).then((() => {
+           null === ZW || void 0 === ZW || ZW(), UW.current && yW()
+         })).catch((WW => {
+           console.error("Failed to set game approval", WW)
+         })).finally((() => {
+           UW.current && YW(!1)
+         })))
+       };
```

#### 12. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L99-L142` → after: `L109-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L109-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L109-L165) · [Before (L99-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L99-L142)

```diff
-         className: "CreateCustomLobby",
-         children: [(0, fe.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, fe.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: ze("homePage:myWorld")
-           })
-         }), (0, fe.jsx)(Fe.c, {
-           locked: ge,
-           children: (0, fe.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [(0, fe.jsx)(ke.c, {
-               value: Be.defaultGamemode,
-               onChange: ee => {
-                 (0, ye.w)(ee) && ee !== Be.defaultGamemode && ((0, qe.d)({
-                   defaultGamemode: ee
- ... (28 more removed lines; see GitHub link above)
+         className: "ApprovalInfoPopupBody",
+         children: [(0, AW.jsx)("h1", {
+           className: "ApprovalInfoPopupTitle",
+           children: xW("studio:approvalTitle")
+         }), !kW && !MW && (0, AW.jsx)("div", {
+           className: "ApprovalInfoPopupLoader",
+           children: (0, AW.jsx)(cW.d, {})
+         }), MW && (0, AW.jsx)("div", {
+           className: "ApprovalInfoPopupError",
+           children: MW
+         }), kW && (0, AW.jsxs)(AW.Fragment, {
+           children: [(0, AW.jsx)(bW, {
+             info: kW
+           }), OW && (0, AW.jsxs)("div", {
+             className: "ApprovalInfoPopupActions",
+             children: [!0 !== kW.manualOverride && (0, AW.jsx)(wW.f, {
+ ... (41 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L170` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L172) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L170)

```diff
-   5424: (ee, ie, He) => {
+   7482: (WW, iW, OW) => {
```

#### 14. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L172` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L174-L175) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L172)

```diff
-       c: () => Je
+       e: () => LW,
+       h: () => PW
```

#### 15. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L174-L179` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L177-L186) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L174-L179)

```diff
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(5018),
-       Ke = He(1127),
-       Ue = He(1228);
-     const Fe = [...Me.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+     var mW = OW(344),
+       EW = OW(1172);
+     const NW = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
```

#### 16. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L181` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L188) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L181)

```diff
-     function Je(ee) {
+     function PW() {
```

#### 17. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L183-L206` → after: `L190-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L190-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L190-L251) · [Before (L183-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L183-L206)

```diff
-         disabled: ie,
-         hideWrapper: He
-       } = ee, {
-         t: ye
-       } = (0, Ke.v)(), Je = ee.advancedMode ? Fe.map((ie => [ie, ee.callbacks[ie]])) : Me.m.map((ie => [ie, ee.callbacks[ie]])), Re = (0, Ue.jsx)("div", {
-         className: be()("PluginsGrid", {
-           SectionBody: !He
-         }),
-         children: Je.map((ee => {
-           let [He, ye] = ee;
-           return (0, Ue.jsx)(oe, {
-             plugin: He,
-             callbacks: ye,
-             disabled: ie
-           }, He)
-         }))
- ... (8 more removed lines; see GitHub link above)
+         t: WW,
+         selectedLanguage: iW
+       } = (0, EW.B)();
+       return {
+         statusText: iW => WW(NW[iW]),
+         rowText: OW => {
+           const NW = (WW, OW) => (0, mW.$)((0, EW.k)(iW.code, WW), 0, OW),
+             PW = (iW, OW) => null === OW ? iW : WW("studio:approvalWithMinDays", {
+               value: iW,
+               days: OW
+             });
+           switch (OW.kind) {
+             case "ownerAccountAge": {
+               const iW = OW.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: WW("studio:approvalAccountAgeLabel"),
+ ... (46 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L211-L216` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L288-L289) · [Before (L211-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L211-L216)

```diff
-         plugin: ie,
-         callbacks: {
-           isEnabled: He,
-           JY: ye
-         },
-         disabled: Me
+         schematicId: iW,
+         takedown: OW
```

#### 19. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L220` → after: `L293-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L293-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L293-L307) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L220)

```diff
-       } = (0, Ke.v)(), Je = He();
+       } = (0, lW.B)(), {
+         userContext: NW
+       } = (0, AW.e)(), [PW, LW] = (0, mW.useState)(function(WW) {
+         switch (WW) {
+           case "available":
+             return "closed";
+           case "asked":
+             return "sent";
+           case "unavailable":
+             return null
+         }
+       }(OW.review)), [cW, wW] = (0, mW.useState)(""), [tW, ZW] = (0, mW.useState)(null), xW = null !== OW.policyId && null !== OW.at ? EW("creatorModeration:bannerTitle", {
+         date: new Date(OW.at).toLocaleDateString(),
+         policyName: (0, HW.h)(EW, OW.policyId)
+       }) : EW("creatorModeration:bannerTitleLegacy");
```

#### 20. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L222-L230` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L309) · [Before (L222-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L222-L230)

```diff
-         className: be()("PluginCard", {
-           PluginCardEnabled: Je,
-           PluginCardDisabledForm: Me
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": Me || void 0,
-         onClick: () => {
-           Me || ye(!Je)
-         },
+         className: "ManageWarningBanner StudioTakedownBanner",
```

#### 21. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L232-L235` → after: `L311-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L311-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L311-L315) · [Before (L232-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L232-L235)

```diff
-           className: "PluginCardIcon",
-           children: (0, Ue.jsx)("img", {
-             src: `/textures/games/classic/customGames/${ie}.png`,
-             alt: ie
+           className: "StudioTakedownBannerTitle",
+           children: xW
+         }), null !== OW.reason && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:moderatorNote", {
+             reason: OW.reason
```

#### 22. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L237-L244` → after: `L317-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L317-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L317-L350) · [Before (L237-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L237-L244)

```diff
-         }), (0, Ue.jsxs)("div", {
-           className: "PluginCardBody",
-           children: [(0, Ue.jsx)("div", {
-             className: "PluginCardTitle",
-             children: Fe(Re[ie])
-           }), (0, Ue.jsx)("div", {
-             className: "PluginCardDescription",
-             children: Fe(ke[ie])
+         }), (0, nW.jsx)("div", {
+           children: (0, HW.e)(EW, OW.policyId)
+         }), 1 === OW.recentStrikeCount && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:strikeOne")
+         }), OW.recentStrikeCount > 1 && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:strikeMany", {
+             count: OW.recentStrikeCount
+           })
+         }), "closed" === PW && (0, nW.jsx)(sW.f, {
+           className: "StudioTakedownBannerAction",
+           onClick: () => {
+             LW("writing")
+           },
+           children: EW("creatorModeration:askForReview")
+         }), ("writing" === PW || "sending" === PW) && (0, nW.jsxs)("div", {
+           className: "StudioTakedownBannerReview",
+ ... (18 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L246-L248` → after: `L352-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L352-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L352-L356) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L246-L248)

```diff
-         }), (0, Ue.jsx)("span", {
-           className: "PluginCardToggleLabel",
-           children: Fe(Je ? "general:on" : "general:off")
+         }), "sent" === PW && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:reviewSent")
+         }), null !== tW && (0, nW.jsx)("div", {
+           className: "StudioTakedownBannerError",
+           children: tW
```

#### 24. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L253-L259` → after: `L365-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L365-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L365-L368) · [Before (L253-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L253-L259)

```diff
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+         "1h": 60,
+         "24h": 1440,
+         "7d": 10080,
+         "30d": 43200
```

#### 25. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L262-L268` → after: `L371-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L371-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L371-L392) · [Before (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L262-L268)

```diff
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
+         minute: {
+           stepMinutes: 1,
+           untilMinutes: 20
+         },
+         fiveMinutes: {
+           stepMinutes: 5,
+           untilMinutes: 60
+         }
+       };
+ 
+     function VW(WW, iW) {
+       const OW = OW => WW.percentiles[iW.indexOf(OW)];
+       return {
+         count: WW.count,
+         playerCount: WW.playerCount,
+         sum: WW.sum,
+ ... (6 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L270-L282` → after: `L394-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L394-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L394-L442) · [Before (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L270-L282)

```diff
-   },
-   37144: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Je,
-       g: () => oe
-     });
-     He(59);
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(5018),
-       Ke = He(335),
-       Ue = He(1127),
-       Fe = He(1228);
+     }
+     var pW = OW(4792),
+       fW = OW(5995),
+       CW = OW(1434),
+       XW = OW(6014),
+       BW = OW(6423),
+       qW = OW(7382),
+       RW = OW(7360),
+       GW = OW(7375),
+       IW = OW(6936),
+       aW = OW(7356),
+       rW = OW(7358),
+       zW = OW(7300),
+       FW = OW(4292),
+       QW = OW(7386),
+       Wi = OW(7252),
+ ... (33 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L286-L288` → after: `L446-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L446-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L446-L476) · [Before (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L286-L288)

```diff
-         value: ie,
-         onChange: He,
-         showAll: ye,
+         icon: iW,
+         label: OW,
+         onClick: mW,
+         disabled: EW = !1,
+         active: NW = !1,
+         small: PW = !1
+       } = WW;
+       return (0, nW.jsx)(CW.f, {
+         tooltipInner: OW,
+         placement: "top",
+         delayShow: 0,
+         children: (0, nW.jsxs)(sW.Z, {
+           className: PW ? "StudioSmallIconButton" : void 0,
+           active: NW,
+           disabled: EW,
+           onClick: mW,
+ ... (15 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L293` → after: `L481-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L481-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L481-L575) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L293)

```diff
-       } = (0, Ue.v)();
+       } = (0, lW.B)();
+       return (0, nW.jsx)(ti, {
+         small: !0,
+         icon: "download",
+         label: EW("Export Data"),
+         disabled: mW,
+         onClick: () => {
+           const WW = OW().map((WW => WW.map(Ni).join(","))).join("\r\n");
+           (0, wi.downloadBlob)(new Blob([`${Zi}${WW}`], {
+             type: "text/csv;charset=utf-8"
+           }), function(WW) {
+             const iW = WW.map(ci).filter((WW => "" !== WW)).join(" - ");
+             return `${""===iW?"export":iW}.csv`
+           }(iW))
+         }
+       })
+ ... (79 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L295-L297` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L577) · [Before (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L295-L297)

```diff
-         className: be()("BloxdForm GamemodeForm", {
-           BasicOptions: !ye
-         }),
+         className: "StudioStatsChartTooltip",
```

#### 30. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L299-L316` → after: `L579-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L579-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L579-L600) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L299-L316)

```diff
-           className: "SectionTitle",
-           children: oe("classic:defaultGamemode")
-         }), (0, Fe.jsx)("div", {
-           className: "SectionBody",
-           children: Me.B.map((ee => ye || (0, Me.w)(ee) ? (0, Fe.jsx)("button", {
-             type: "button",
-             className: be()("WorldGamemode", {
-               Selected: ie === ee
-             }),
-             disabled: Je,
-             onClick: () => {
-               He(ee)
-             },
-             style: {
-               "--background-image": `url(${Ke.x[ee]})`
-             },
- ... (2 more removed lines; see GitHub link above)
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: ki(mW, EW)
+         }), cW && (0, nW.jsx)("div", {
+           className: "StudioStatsChartTooltipValue",
+           children: null === tW.value ? PW : NW(tW.value)
+         }), null === wW || void 0 === wW ? void 0 : wW.map(((WW, iW) => {
+           var OW;
+           const mW = null === (OW = tW.lineValues) || void 0 === OW ? void 0 : OW[iW];
+           return (0, nW.jsxs)("div", {
+             className: "StudioStatsChartTooltipLine SmallTextLight",
+             children: [(0, nW.jsx)("span", {
+               className: "StudioStatsChartTooltipLineSwatch",
+               style: {
+                 backgroundColor: WW.colour
+               }
+             }), WW.label, ": ", null === mW || void 0 === mW ? PW : NW(mW)]
+ ... (6 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L323-L327` → after: `L622-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L622-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L622-L630) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L323-L327)

```diff
-         mapTypes: ie,
-         value: He,
-         onChange: ye,
-         showAll: Je,
-         disabled: oe = !1,
+         viewBox: iW,
+         text: OW,
+         alignLeft: mW
+       } = WW;
+       return void 0 === (null === iW || void 0 === iW ? void 0 : iW.x) || void 0 === iW.y ? null : (0, nW.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: iW.x + (mW ? -5 : 5),
+         y: iW.y + 10,
+         textAnchor: mW ? "end" : "start",
```

#### 32. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L332` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L686) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L332)

```diff
-       } = (0, Ue.v)();
+       } = (0, lW.B)();
```

#### 33. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L334-L352` → after: `L688-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L688-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L688-L873) · [Before (L334-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L334-L352)

```diff
-         className: be()("BloxdForm MapTypeForm", {
-           BasicOptions: !Je
-         }),
-         children: [(0, Fe.jsx)("div", {
-           className: "SectionTitle",
-           children: ke("customLobby:mapType")
-         }), (0, Fe.jsx)("div", {
-           className: "SectionBody",
-           children: ie.map((ee => Je || (0, Me.y)(ee) ? (0, Fe.jsx)("button", {
-             type: "button",
-             className: be()("MapType", {
-               Selected: He === ee
-             }),
-             disabled: oe,
-             onClick: () => {
-               ye(ee)
- ... (3 more removed lines; see GitHub link above)
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== iW && void 0 !== OW && (0, nW.jsx)(Hi, {
+           colour: OW,
+           isFill: !0,
+           label: iW
+         }), null === NW || void 0 === NW ? void 0 : NW.map(((WW, iW) => (0, nW.jsx)(Hi, {
+           colour: WW.colour,
+           isFill: !0,
+           label: WW.label,
+           mH: WW.mH
+         }, `StudioChartLegendLine-${iW}`))), void 0 !== mW && EW && (0, nW.jsxs)(nW.Fragment, {
+           children: [(0, nW.jsx)(Hi, {
+             swatchClassName: "StudioStatsChartLegendSwatchComparisonBand",
+             colour: Oi.comparison,
+             isFill: !1,
+             label: PW("studio:comparisonLegendBand", {
+ ... (170 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L354-L356` → after: `L875-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L875-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L875-L1002) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L354-L356)

```diff
-             children: Ke.l[ee]
-           }, ee) : null))
-         }), Re]
+             children: [(0, nW.jsx)(qW.d, {
+               stroke: Oi.grid,
+               strokeOpacity: .3,
+               strokeDasharray: "3 3",
+               vertical: !1
+             }), (0, nW.jsx)(RW.c, {
+               dataKey: "dateMs",
+               type: "number",
+               domain: ["dataMin", "dataMax"],
+               scale: "time",
+               tickFormatter: WW => function(WW, iW, OW) {
+                 return "1d" === iW ? Ai(WW, !0) : OW > 1.5 * Ui ? Ai(WW) : bi(WW)
+               }(WW, PW, TW),
+               stroke: Oi.axis,
+               hZ: {
+                 fontSize: 11
+ ... (112 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L359-L361` → after: `L1005-L32337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1005-L32337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/119.js#L1005-L32337) · [Before (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/119.js#L359-L361)

```diff
-   },
-   5420: () => {},
-   37132: () => {}
+ 
+     function di(WW) {
+       return Array.isArray(WW.labels) && Array.isArray(WW.values)
+     }
+     const ei = 11,
+       vi = 6,
+       gi = 2,
+       Di = 30,
+       Vi = 6,
+       fi = 18,
+       Ci = 140,
+       Xi = 4,
+       Bi = {
+         top: 8,
+         right: 8,
+         bottom: 0,
+ ... (31317 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L4-L19)

```diff
-   5482: (ee, ie) => {
-     ie.e = function(ee, ie) {
-       if (ee && ie) {
-         var He = Array.isArray(ie) ? ie : ie.split(","),
-           ye = ee.name || "",
-           be = (ee.type || "").toLowerCase(),
-           Me = be.replace(/\/.*$/, "");
-         return He.some((function(ee) {
-           var ie = ee.trim().toLowerCase();
-           return "." === ie.charAt(0) ? ye.toLowerCase().endsWith(ie) : ie.endsWith("/*") ? Me === ie.replace(/\/.*$/, "") : be === ie
-         }))
-       }
-       return !0
-     }
-   },
-   5454: (ee, ie, He) => {
+   5693: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L21` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L6-L8) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L21)

```diff
-       d: () => qi
+       d: () => ZW,
+       e: () => tW,
+       f: () => xW
```

#### 3. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L23-L35` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L10-L17) · [Before (L23-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L23-L35)

```diff
-     var ye = He(59),
-       be = He(5461),
-       Me = He.n(be);
- 
-     function Ke(ee, ie, He, ye) {
-       return new(He || (He = Promise))((function(be, Me) {
-         function Ke(ee) {
-           try {
-             Fe(ye.next(ee))
-           } catch (ie) {
-             Me(ie)
-           }
-         }
+     OW(5701);
+     var mW = OW(1172),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1434),
+       LW = (OW(62), OW(5041)),
+       cW = OW(1391),
+       wW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L37-L52` → after: `L19-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L19-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L19-L51) · [Before (L37-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L37-L52)

```diff
-         function Ue(ee) {
-           try {
-             Fe(ye.throw(ee))
-           } catch (ie) {
-             Me(ie)
-           }
-         }
- 
-         function Fe(ee) {
-           var ie;
-           ee.done ? be(ee.value) : (ie = ee.value, ie instanceof He ? ie : new He((function(ee) {
-             ee(ie)
-           }))).then(Ke, Ue)
-         }
-         Fe((ye = ye.apply(ee, ie || [])).next())
-       }))
+     function tW(WW) {
+       let {
+         children: iW,
+         label: OW,
+         className: EW,
+         circleInfoText: LW,
+         disabled: tW,
+         onLabelClick: ZW
+       } = WW;
+       const {
+         t: xW
+       } = (0, mW.B)(), lW = (0, wW.jsxs)("div", {
+         className: NW()("Label", {
+           ClickableLabel: void 0 !== ZW
+         }),
+         onClick: ZW,
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L55-L60` → after: `L54-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L54-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L54-L65) · [Before (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L55-L60)

```diff
-     function Ue(ee, ie) {
-       var He, ye, be, Me, Ke = {
-         label: 0,
-         sent: function() {
-           if (1 & be[0]) throw be[1];
-           return be[1]
+     function ZW(WW) {
+       let {
+         checked: iW,
+         setChecked: OW,
+         disabled: mW = !1
+       } = WW;
+       return (0, wW.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         "aria-disabled": mW || void 0,
+         onClick: WW => {
+           mW || OW(!iW)
```

#### 6. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L62-L128` → after: `L67-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L67-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L67-L74) · [Before (L62-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L62-L128)

```diff
-         trys: [],
-         ops: []
-       };
-       return Me = {
-         next: Ue(0),
-         throw: Ue(1),
-         return: Ue(2)
-       }, "function" === typeof Symbol && (Me[Symbol.iterator] = function() {
-         return this
-       }), Me;
- 
-       function Ue(Ue) {
-         return function(Fe) {
-           return function(Ue) {
-             if (He) throw new TypeError("Generator is already executing.");
-             for (; Me && (Me = 0, Ue[0] && (Ke = 0)), Ke;) try {
- ... (51 more removed lines; see GitHub link above)
+         children: (0, wW.jsx)(LW.e, {
+           checked: iW,
+           onChange: WW => {
+             OW(WW.target.checked)
+           },
+           disabled: mW
+         })
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L132-L151` → after: `L77-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L77-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L77-L98) · [Before (L132-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L132-L151)

```diff
-     function Fe(ee, ie) {
-       var He = "function" === typeof Symbol && ee[Symbol.iterator];
-       if (!He) return ee;
-       var ye, be, Me = He.call(ee),
-         Ke = [];
-       try {
-         for (;
-           (void 0 === ie || ie-- > 0) && !(ye = Me.next()).done;) Ke.push(ye.value)
-       } catch (Ue) {
-         be = {
-           error: Ue
-         }
-       } finally {
-         try {
-           ye && !ye.done && (He = Me.return) && He.call(Me)
-         } finally {
- ... (4 more removed lines; see GitHub link above)
+     function xW(WW) {
+       let {
+         checked: iW,
+         setChecked: OW,
+         disabled: mW
+       } = WW;
+       return (0, wW.jsx)("div", {
+         className: NW()("SwitchContainer", {
+           SwitchContainerDisabled: mW
+         }),
+         onClick: () => {
+           mW || OW(!iW)
+         },
+         children: (0, wW.jsx)(LW.e, {
+           className: "SwitchCheckbox",
+           checked: iW,
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L154-L157` → after: `L112-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L112-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L112-L137) · [Before (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L154-L157)

```diff
-     function Je(ee, ie, He) {
-       if (He || 2 === arguments.length)
-         for (var ye, be = 0, Me = ie.length; be < Me; be++) !ye && be in ie || (ye || (ye = Array.prototype.slice.call(ie, 0, be)), ye[be] = ie[be]);
-       return ee.concat(ye || Array.prototype.slice.call(ie))
+     function wW(WW) {
+       const {
+         disabled: iW,
+         hideWrapper: OW
+       } = WW, {
+         t: mW
+       } = (0, PW.B)(), wW = WW.advancedMode ? cW.map((iW => [iW, WW.callbacks[iW]])) : NW.n.map((iW => [iW, WW.callbacks[iW]])), ZW = (0, LW.jsx)("div", {
+         className: EW()("PluginsGrid", {
+           SectionBody: !OW
+         }),
+         children: wW.map((WW => {
+           let [OW, mW] = WW;
+           return (0, LW.jsx)(tW, {
+             plugin: OW,
+             callbacks: mW,
+             disabled: iW
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L244-L254` → after: `L140-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L140-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L140-L166) · [Before (L244-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L244-L254)

```diff
-     function Re(ee, ie) {
-       var He = function(ee) {
-         var ie = ee.name;
-         if (ie && -1 !== ie.lastIndexOf(".") && !ee.type) {
-           var He = ie.split(".").pop().toLowerCase(),
-             ye = oe.get(He);
-           ye && Object.defineProperty(ee, "type", {
-             value: ye,
-             writable: !1,
-             configurable: !1,
-             enumerable: !0
+     function tW(WW) {
+       let {
+         plugin: iW,
+         callbacks: {
+           isEnabled: OW,
+           WK: mW
+         },
+         disabled: NW
+       } = WW;
+       const {
+         t: cW
+       } = (0, PW.B)(), wW = OW();
+       return (0, LW.jsxs)("div", {
+         className: EW()("PluginCard", {
+           PluginCardEnabled: wW,
+           PluginCardDisabledForm: NW
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L256-L268` → after: `L168-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L168-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L168-L181) · [Before (L256-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L256-L268)

```diff
-         }
-         return ee
-       }(ee);
-       if ("string" !== typeof He.path) {
-         var ye = ee.webkitRelativePath;
-         Object.defineProperty(He, "path", {
-           value: "string" === typeof ie ? ie : "string" === typeof ye && ye.length > 0 ? ye : ee.name,
-           writable: !1,
-           configurable: !1,
-           enumerable: !0
-         })
-       }
-       return He
+         }), (0, LW.jsxs)("div", {
+           className: "PluginCardBody",
+           children: [(0, LW.jsx)("div", {
+             className: "PluginCardTitle",
+             children: cW(ZW[iW])
+           }), (0, LW.jsx)("div", {
+             className: "PluginCardDescription",
+             children: cW(xW[iW])
+           })]
+         }), (0, LW.jsx)("span", {
+           className: "PluginCardToggleLabel",
+           children: cW(wW ? "general:on" : "general:off")
+         })]
+       })
```

#### 11. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L270` → after: `L183-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L183-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L183-L210) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L270)

```diff
-     var ke = [".DS_Store", "Thumbs.db"];
+     const ZW = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
+       },
+       xW = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L273` → after: `L213-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L213-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L213-L227) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L273)

```diff
-       return "object" === typeof ee && null !== ee
+       let {
+         textKey: iW,
+         allowed: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, NW.B)();
+       return (0, LW.jsxs)("li", {
+         className: EW()("PolicyListItem", OW ? "Allowed" : "NotAllowed"),
+         children: [(0, LW.jsx)(PW.c, {
+           name: OW ? "check" : "x"
+         }), (0, LW.jsx)("span", {
+           children: mW(iW)
+         })]
+       })
```

#### 13. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L277-L279` → after: `L231-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L231-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L231-L244) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L277-L279)

```diff
-       return ze(ee.target.files).map((function(ee) {
-         return Re(ee)
-       }))
+       let {
+         allowed: iW,
+         notAllowed: OW
+       } = WW;
+       return (0, LW.jsxs)("ul", {
+         className: "PolicyList",
+         children: [iW.map((WW => (0, LW.jsx)(cW, {
+           textKey: WW,
+           allowed: !0
+         }, WW))), OW.map((WW => (0, LW.jsx)(cW, {
+           textKey: WW,
+           allowed: !1
+         }, WW)))]
+       })
```

#### 14. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L283-L296` → after: `L267-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L267-L269) · [Before (L283-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L283-L296)

```diff
-       return Ke(this, void 0, void 0, (function() {
-         return Ue(this, (function(ie) {
-           switch (ie.label) {
-             case 0:
-               return [4, Promise.all(ee.map((function(ee) {
-                 return ee.getFile()
-               })))];
-             case 1:
-               return [2, ie.sent().map((function(ee) {
-                 return Re(ee)
-               }))]
-           }
-         }))
-       }))
+       return (0, PW.createPortal)((0, bW.jsx)(ZW.d, {
+         ...WW
+       }), document.body)
```

#### 15. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L299-L316` → after: `L274-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L274-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L274-L295) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L299-L316)

```diff
-     function pe(ee, ie) {
-       return Ke(this, void 0, void 0, (function() {
-         var He;
-         return Ue(this, (function(ye) {
-           switch (ye.label) {
-             case 0:
-               return ee.items ? (He = ze(ee.items).filter((function(ee) {
-                 return "file" === ee.kind
-               })), "drop" !== ie ? [2, He] : [4, Promise.all(He.map(Be))]) : [3, 2];
-             case 1:
-               return [2, Xe(Ee(ye.sent()))];
-             case 2:
-               return [2, Xe(ze(ee.files).map((function(ee) {
-                 return Re(ee)
-               })))]
-           }
- ... (2 more removed lines; see GitHub link above)
+     function sW(WW) {
+       let {
+         onScrolledToEnd: iW
+       } = WW;
+       const OW = (0, mW.useRef)(null),
+         {
+           after: EW
+         } = (0, lW.d)(OW, "y");
+       return (0, mW.useEffect)((() => {
+         EW || null === iW || void 0 === iW || iW()
+       }), [EW, iW]), (0, bW.jsx)("div", {
+         ref: OW,
+         className: NW()("PublishingPolicyRows", {
+           PublishingPolicyRowsMoreBelow: EW
+         }),
+         tabIndex: 0,
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L320-L322` → after: `L299-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L299-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L299-L343) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L320-L322)

```diff
-       return ee.filter((function(ee) {
-         return -1 === ke.indexOf(ee.name)
-       }))
+       let {
+         onAnswer: iW
+       } = WW;
+       const [OW, EW] = (0, mW.useState)(!1), [NW, PW] = (0, mW.useState)(!1), LW = (0, mW.useCallback)((() => {
+         PW(!0)
+       }), []);
+       return (0, bW.jsx)(jW, {
+         close: () => {
+           iW(!1)
+         },
+         disableExitButton: !0,
+         body: (0, bW.jsxs)(ZW.i, {
+           className: "PublishingPolicyPopup",
+           title: "worldBuilder:publishingPolicy",
+           padStartsOn: "content",
+           confirm: {
+ ... (29 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L325-L331` → after: `L346-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L346-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L346-L369) · [Before (L325-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L325-L331)

```diff
-     function ze(ee) {
-       if (null === ee) return [];
-       for (var ie = [], He = 0; He < ee.length; He++) {
-         var ye = ee[He];
-         ie.push(ye)
-       }
-       return ie
+     function KW() {
+       const {
+         t: WW
+       } = (0, cW.B)(), [iW, OW] = (0, mW.useState)(!1);
+       return (0, bW.jsxs)(bW.Fragment, {
+         children: [(0, bW.jsxs)(xW.Z, {
+           className: "PublishingPolicyLink",
+           onClick: () => {
+             OW(!0)
+           },
+           children: [(0, bW.jsx)(tW.c, {
+             name: "shield-halved"
+           }), " ", WW("worldBuilder:publishingPolicy")]
+         }), iW && (0, bW.jsx)(jW, {
+           close: () => {
+             OW(!1)
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L335-L337` → after: `L400-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L400-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L400-L429) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L335-L337)

```diff
-       if ("function" !== typeof ee.webkitGetAsEntry) return ge(ee);
-       var ie = ee.webkitGetAsEntry();
-       return ie && ie.isDirectory ? de(ie) : ge(ee)
+       let {
+         icon: iW,
+         title: OW,
+         disabled: mW,
+         children: EW
+       } = WW;
+       return (0, KW.jsxs)("div", {
+         className: lW()("ManageCard", {
+           ManageCardDisabled: mW
+         }),
+         children: [(0, KW.jsxs)("div", {
+           className: "ManageCardHead",
+           children: [(0, KW.jsx)("div", {
+             className: "ManageCardIcon",
+             children: (0, KW.jsx)(tW.c, {
+               name: iW
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L341-L343` → after: `L433-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L433-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L433-L447) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L341-L343)

```diff
-       return ee.reduce((function(ee, ie) {
-         return Je(Je([], Fe(ee), !1), Fe(Array.isArray(ie) ? Ee(ie) : [ie]), !1)
-       }), [])
+       let {
+         label: iW,
+         caption: OW,
+         children: mW
+       } = WW;
+       return (0, KW.jsxs)("div", {
+         className: "ManageStackedField",
+         children: [(0, KW.jsx)("div", {
+           className: "ManageStackedFieldLabel",
+           children: iW
+         }), mW, OW && (0, KW.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: OW
+         })]
+       })
```

#### 20. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L347-L350` → after: `L451-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L451-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L451-L474) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L347-L350)

```diff
-       var ie = ee.getAsFile();
-       if (!ie) return Promise.reject("".concat(ee, " is not a File"));
-       var He = Re(ie);
-       return Promise.resolve(He)
+       let {
+         label: iW,
+         caption: OW,
+         disabled: mW,
+         children: EW
+       } = WW;
+       return (0, KW.jsxs)("div", {
+         className: lW()("ManageField", {
+           ManageFieldDisabled: mW
+         }),
+         children: [(0, KW.jsxs)("div", {
+           className: "ManageFieldText",
+           children: [(0, KW.jsx)("div", {
+             className: "ManageFieldLabel",
+             children: iW
+           }), (0, KW.jsx)("div", {
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L354-L356` → after: `L478-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L478-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L478-L684) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L354-L356)

```diff
-       return Ke(this, void 0, void 0, (function() {
-         return Ue(this, (function(ie) {
-           return [2, ee.isDirectory ? de(ee) : We(ee)]
+       var iW, OW;
+       let {
+         schematicData: mW,
+         updateSchematicData: EW,
+         publishFormEnabled: NW,
+         formEnabled: PW
+       } = WW;
+       const {
+         t: cW
+       } = (0, LW.B)(), wW = !NW, tW = {
+         tpRequests: {
+           isEnabled: () => !mW.disableTpRequests,
+           WK: WW => EW("disableTpRequests", !WW)
+         },
+         spawnProtection: {
+           isEnabled: () => !mW.disableSpawnProtection,
+ ... (191 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L358` → after: `L686-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L686-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L686-L713) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L358)

```diff
-       }))
+       }(WW), OW = await
+       function(WW) {
+         return new Promise(((iW, OW) => {
+           const mW = new Image;
+           mW.onload = () => iW(mW), mW.onerror = () => OW(new Error("Failed to load image")), mW.src = WW
+         }))
+       }(iW);
+       if (OW.naturalHeight > OW.naturalWidth) throw new fW;
+       const mW = 1024 * DW,
+         {
+           dataUrl: EW,
+           finalQuality: NW
+         } = function(WW, iW) {
+           const OW = document.createElement("canvas");
+           OW.width = WW.naturalWidth, OW.height = WW.naturalHeight, OW.getContext("2d").drawImage(WW, 0, 0);
+           let mW = .92,
+ ... (12 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L362-L390` → after: `L719-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L719-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L719-L821) · [Before (L362-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L362-L390)

```diff
-       var ie = ee.createReader();
-       return new Promise((function(ee, He) {
-         var ye = [];
-         ! function be() {
-           var Me = this;
-           ie.readEntries((function(ie) {
-             return Ke(Me, void 0, void 0, (function() {
-               var Me, Ke, Fe;
-               return Ue(this, (function(Ue) {
-                 switch (Ue.label) {
-                   case 0:
-                     if (ie.length) return [3, 5];
-                     Ue.label = 1;
-                   case 1:
-                     return Ue.trys.push([1, 3, , 4]), [4, Promise.all(ye)];
-                   case 2:
- ... (13 more removed lines; see GitHub link above)
+       var iW;
+       let {
+         schematicId: OW,
+         hasReadUploadPolicy: EW,
+         onPolicyValidationError: cW,
+         onThumbnailReady: wW
+       } = WW;
+       const {
+         t: xW
+       } = (0, LW.B)(), [AW, bW] = (0, mW.useState)(null), [jW, UW] = (0, mW.useState)(""), [kW, sW] = (0, mW.useState)(""), [MW, SW] = (0, mW.useState)(!0), [YW, yW] = (0, mW.useState)(!1), TW = (0, mW.useRef)(!1), [JW, hW] = (0, mW.useState)(null), [HW, nW] = (0, mW.useState)(!1 … [truncated]
+         getRootProps: vW,
+         getInputProps: gW,
+         isDragActive: DW
+       } = (0, dW.e)({
+         accept: {
+           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+ ... (87 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L392-L394` → after: `L823-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L823-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L823-L863) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L392-L394)

```diff
-           }))
-         }()
-       }))
+           },
+           maxLength: ZW.n
+         }), GW && (0, KW.jsx)("div", {
+           className: "ThumbnailUploadError",
+           children: xW("thumbnail:nameRequired", {
+             min: ZW.o,
+             max: ZW.n
+           })
+         }), (0, KW.jsxs)("label", {
+           className: "ThumbnailUploadCheckbox",
+           children: [(0, KW.jsx)("input", {
+             type: "checkbox",
+             checked: MW,
+             onChange: WW => {
+               SW(WW.target.checked)
+             }
+ ... (25 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L398-L409` → after: `L868-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L868-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L868-L970) · [Before (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L398-L409)

```diff
-       return Ke(this, void 0, void 0, (function() {
-         return Ue(this, (function(ie) {
-           return [2, new Promise((function(ie, He) {
-             ee.file((function(He) {
-               var ye = Re(He, ee.fullPath);
-               ie(ye)
-             }), (function(ee) {
-               He(ee)
-             }))
-           }))]
-         }))
-       }))
+       let {
+         schematicId: iW,
+         ownedThumbnailCount: OW,
+         onClose: EW,
+         onThumbnailReady: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, LW.B)(), {
+         userContext: wW
+       } = (0, uW.e)(), [xW, AW] = (0, mW.useState)(!1), [bW, jW] = (0, mW.useState)(!1), [UW, kW] = (0, mW.useState)(!1), sW = (0, mW.useRef)(), {
+         loading: MW,
+         eligibility: SW
+       } = (0, vW.b)(), YW = (0, vW.e)();
+       (0, mW.useEffect)((() => () => {
+         clearTimeout(sW.current)
+ ... (87 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L414-L420` → after: `L974-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L974-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L974-L1014) · [Before (L414-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L414-L420)

```diff
-       return function(ee) {
-         if (Array.isArray(ee)) return Ve(ee)
-       }(ee) || function(ee) {
-         if ("undefined" !== typeof Symbol && null != ee[Symbol.iterator] || null != ee["@@iterator"]) return Array.from(ee)
-       }(ee) || Ye(ee) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       let {
+         imageUrl: iW,
+         thumbnailName: OW,
+         onClose: mW
+       } = WW;
+       const {
+         t: EW
+       } = (0, LW.B)();
+       return (0, KW.jsxs)("div", {
+         className: "ThumbnailDeleteConfirm",
+         children: [(0, KW.jsx)("div", {
+           className: "ThumbnailDeleteConfirmTitle",
+           children: EW("thumbnail:deleteThumbnail")
+         }), (0, KW.jsxs)("div", {
+           className: "ThumbnailDeleteConfirmImageContainer",
+           children: [null !== iW && (0, KW.jsx)("img", {
+ ... (25 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L423-L431` → after: `L1056-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1056-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1056-L1078) · [Before (L423-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L423-L431)

```diff
-     function we(ee, ie) {
-       var He = Object.keys(ee);
-       if (Object.getOwnPropertySymbols) {
-         var ye = Object.getOwnPropertySymbols(ee);
-         ie && (ye = ye.filter((function(ie) {
-           return Object.getOwnPropertyDescriptor(ee, ie).enumerable
-         }))), He.push.apply(He, ye)
-       }
-       return He
+     function rW(WW) {
+       let {
+         rejectedThumbnails: iW,
+         isAcknowledging: OW,
+         onAcknowledge: mW
+       } = WW;
+       const {
+         t: EW
+       } = (0, LW.B)();
+       return (0, KW.jsxs)("div", {
+         className: "ManageWarningBanner ThumbnailRejectionNotice",
+         children: [(0, KW.jsx)("div", {
+           className: "ThumbnailRejectionNoticeTitle",
+           children: EW("thumbnail:rejectedByModerators")
+         }), iW.map((WW => (0, KW.jsx)(zW, {
+           rejected: WW
+ ... (7 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L435-L443` → after: `L1082-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1082-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1082-L1129) · [Before (L435-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L435-L443)

```diff
-       for (var ie = 1; ie < arguments.length; ie++) {
-         var He = null != arguments[ie] ? arguments[ie] : {};
-         ie % 2 ? we(Object(He), !0).forEach((function(ie) {
-           Pe(ee, ie, He[ie])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : we(Object(He)).forEach((function(ie) {
-           Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
-         }))
-       }
-       return ee
+       var iW;
+       let {
+         rejected: {
+           thumbnail: OW,
+           rejection: mW
+         }
+       } = WW;
+       const {
+         t: EW
+       } = (0, LW.B)(), NW = null !== (iW = (0, GW.c)(aW, mW.policyId)) && void 0 !== iW ? iW : aW["custom-game-bad-thumbnail"], PW = new Date(mW.at).toLocaleDateString();
+       return (0, KW.jsxs)("div", {
+         className: "RejectedThumbnail",
+         children: [(0, KW.jsxs)("div", {
+           className: "RejectedThumbnailImage",
+           children: [null !== OW.preview && (0, KW.jsx)("img", {
+             src: OW.preview,
+ ... (32 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L446-L452` → after: `L1133-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1133-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1133-L1134) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L446-L452)

```diff
-     function Pe(ee, ie, He) {
-       return ie in ee ? Object.defineProperty(ee, ie, {
-         value: He,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : ee[ie] = He, ee
+     function QW(WW) {
+       return null !== WW.preview ? WW.preview : WW.approved ? `${FW.clientSideServerUrls.s3Url}/${(0,hW.h)(WW.id)}` : null
```

#### 30. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L455-L478` → after: `L1137-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1137-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1137-L1142) · [Before (L455-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L455-L478)

```diff
-     function Ae(ee, ie) {
-       return function(ee) {
-         if (Array.isArray(ee)) return ee
-       }(ee) || function(ee, ie) {
-         var He = null == ee ? null : "undefined" !== typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
-         if (null == He) return;
-         var ye, be, Me = [],
-           Ke = !0,
-           Ue = !1;
-         try {
-           for (He = He.call(ee); !(Ke = (ye = He.next()).done) && (Me.push(ye.value), !ie || Me.length !== ie); Ke = !0);
-         } catch (Fe) {
-           Ue = !0, be = Fe
-         } finally {
-           try {
-             Ke || null == He.return || He.return()
- ... (8 more removed lines; see GitHub link above)
+     function Wi(WW) {
+       return null !== WW.pendingKey ? {
+         pendingKey: WW.pendingKey
+       } : {
+         thumbnailId: WW.id
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L481-L485` → after: `L1145-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1145-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1145-L1192) · [Before (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L481-L485)

```diff
-     function Ye(ee, ie) {
-       if (ee) {
-         if ("string" === typeof ee) return Ve(ee, ie);
-         var He = Object.prototype.toString.call(ee).slice(8, -1);
-         return "Object" === He && ee.constructor && (He = ee.constructor.name), "Map" === He || "Set" === He ? Array.from(ee) : "Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He) ? Ve(ee, ie) : void 0
+     function ii(WW) {
+       var iW, OW;
+       let {
+         schematicData: PW,
+         updateSchematicData: wW,
+         publishFormEnabled: ZW,
+         onClose: xW
+       } = WW;
+       const {
+         t: AW
+       } = (0, LW.B)(), {
+         userContext: bW,
+         isUserContextUpdating: jW
+       } = (0, uW.e)(), UW = (0, nW.c)(), [kW, sW] = (0, mW.useState)([]), [MW, SW] = (0, mW.useState)([]), [YW, yW] = (0, mW.useState)(!0), [TW, JW] = (0, mW.useState)(!1), [hW, dW] = (0, mW.useState)(null !== (iW = PW.customThumbnailId) && void 0 !== iW ? iW : null), [eW, vW] =  … [truncated]
+ 
+       function XW(WW, iW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L489-L521` → after: `L1195-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1195-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1195-L1212) · [Before (L489-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L489-L521)

```diff
-     function Ve(ee, ie) {
-       (null == ie || ie > ee.length) && (ie = ee.length);
-       for (var He = 0, ye = new Array(ie); He < ie; He++) ye[He] = ee[He];
-       return ye
-     }
-     var ae = "file-invalid-type",
-       ce = "file-too-large",
-       xe = "file-too-small",
-       Le = "too-many-files",
-       Ce = function(ee) {
-         ee = Array.isArray(ee) && 1 === ee.length ? ee[0] : ee;
-         var ie = Array.isArray(ee) ? "one of ".concat(ee.join(", ")) : ee;
-         return {
-           code: ae,
-           message: "File type must be ".concat(ie)
-         }
- ... (17 more removed lines; see GitHub link above)
+       function IW() {
+         DW.current = Date.now(), pW.current = null;
+         const WW = VW.current;
+         VW.current = null, XW({
+           text: AW("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), HW.e.setSchematicThumbnail(bW, PW.schematicId, WW).then((() => {
+           UW.current && (XW({
+             text: AW("thumbnail:thumbnailUpdated"),
+             type: "success"
+           }, !0), gW.current = WW, wW("customThumbnailId", WW), wW("customThumbnailBlurhash", void 0), wW("customThumbnailVariants", void 0))
+         })).catch((WW => {
+           UW.current && (XW({
+             text: WW.errorMessageForUser ? AW(WW.errorMessageForUser, WW.errorMessageTranslationParams) : AW("thumbnail:failedToSetThumbnail"),
+             type: "error"
+           }, !0), dW(gW.current))
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L523-L525` → after: `L1214-L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1214-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1214-L1371) · [Before (L523-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L523-L525)

```diff
-     function le(ee, ie) {
-       var He = "application/x-moz-file" === ee.type || (0, te.e)(ee, ie);
-       return [He, He ? null : Ce(ie)]
+       function aW(WW) {
+         dW(WW), VW.current = WW;
+         const iW = Date.now() - DW.current;
+         iW >= 1e3 ? IW() : (XW({
+           text: AW("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), pW.current || (pW.current = setTimeout((() => {
+           IW()
+         }), 1e3 - iW)))
+       }
+       return (0, mW.useEffect)((() => {
+         !1 === jW && BW()
+       }), [jW, BW]), (0, KW.jsxs)("div", {
+         className: "BloxdForm ThumbnailSection",
+         children: [(0, KW.jsxs)("div", {
+           className: "SectionTitle",
+ ... (142 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L528-L536` → after: `L1378-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1378-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1378-L1434) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L528-L536)

```diff
-     function Se(ee, ie, He) {
-       if (ne(ee.size))
-         if (ne(ie) && ne(He)) {
-           if (ee.size > He) return [!1, ve(He)];
-           if (ee.size < ie) return [!1, ue(ie)]
-         } else {
-           if (ne(ie) && ee.size < ie) return [!1, ue(ie)];
-           if (ne(He) && ee.size > He) return [!1, ve(He)]
-         } return [!0, null]
+     function Pi(WW) {
+       let {
+         schematicData: iW,
+         setTexturePack: OW,
+         initializeTexturePack: EW,
+         publishFormEnabled: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, LW.B)(), [cW, wW] = (0, mW.useState)(null), [tW, ZW] = (0, mW.useState)(null), [xW, AW] = (0, mW.useState)(!1), bW = (0, nW.c)(), jW = NW && !xW, UW = iW.customTexturePackKey;
+ 
+       function kW(WW) {
+         var iW;
+         wW(WW.metaData.id), ZW(null !== (iW = WW.metaData.fromFolderName) && void 0 !== iW ? iW : null), (WW.metaData.id !== Oi.n.CUSTOM || WW.metaData.fromFolderName) && OW(WW)
+       }
+       return (0, mW.useEffect)((() => {
+ ... (41 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L540` → after: `L1439-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1439-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1439-L1477) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L540)

```diff
-       return void 0 !== ee && null !== ee
+       var iW;
+       let {
+         gameCategory: OW,
+         setGameCategory: mW,
+         disabled: EW
+       } = WW;
+       const PW = null !== (iW = (0, AW.jb)(OW)) && void 0 !== iW ? iW : "other";
+       return (0, KW.jsxs)("div", {
+         className: "GameCategoryPicker",
+         children: [(0, KW.jsx)(kW.e, {
+           label: "worldBuilder:gameCategoryGroup",
+           className: "GameCategoryGroup",
+           disabled: EW,
+           children: (0, KW.jsx)(sW.e, {
+             options: AW.$.map((WW => ({
+               value: WW,
+ ... (23 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L544` → after: `L1482-L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1482-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1482-L1547) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L544)

```diff
-       return "function" === typeof ee.isPropagationStopped ? ee.isPropagationStopped() : "undefined" !== typeof ee.cancelBubble && ee.cancelBubble
+       let {
+         editor: iW,
+         onClose: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, LW.B)(), {
+         schematicData: EW,
+         updateSchematicData: NW,
+         publishFormEnabled: cW,
+         formEnabled: wW
+       } = iW;
+       return (0, KW.jsxs)(KW.Fragment, {
+         children: [(0, KW.jsxs)(SW, {
+           icon: "pen-to-square",
+           title: mW("worldBuilder:basicsSection"),
+ ... (50 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L548-L550` → after: `L1551-L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1551-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1551-L1589) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L548-L550)

```diff
-       return ee.dataTransfer ? Array.prototype.some.call(ee.dataTransfer.types, (function(ee) {
-         return "Files" === ee || "application/x-moz-file" === ee
-       })) : !!ee.target && !!ee.target.files
+       let {
+         editor: iW
+       } = WW;
+       const {
+         t: OW
+       } = (0, LW.B)(), {
+         schematicData: mW,
+         formEnabled: EW,
+         hasUnsavedChanges: PW,
+         publishSuspendedUntil: ZW
+       } = iW, xW = (0, vW.i)(), lW = !0 === mW.gamePublished ? ZW : null, AW = EW && PW && null === lW;
+       return (0, KW.jsxs)("footer", {
+         className: "SchematicPageFooter",
+         children: [null !== lW && (0, KW.jsx)("div", {
+           className: "SchematicPageFooterNotice",
+           children: xW(lW)
+ ... (23 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L554-L555` → after: `L1593-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1593-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1593-L1601) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L554-L555)

```diff
-       ee.preventDefault()
-     }
+       let {
+         schematic: iW,
+         onSchematicUpdate: OW,
+         onClose: EW,
+         inSourceWorld: PW
+       } = WW;
+       const {
+         t: cW
+       } = (0, LW.B)();
```

#### 39. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L557-L563` → after: `L1603-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1603-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1603-L1604) · [Before (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L557-L563)

```diff
-     function he() {
-       for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-       return function(ee) {
-         for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
-         return ie.some((function(ie) {
-           return !je(ee) && ie && ie.apply(void 0, [ee].concat(ye)), je(ee)
-         }))
+       function wW() {
+         null === EW || void 0 === EW || EW()
```

#### 40. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L568` → after: `L1637-L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1637-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1637-L1653) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L568)

```diff
-       return "audio/*" === ee || "video/*" === ee || "image/*" === ee || "text/*" === ee || /\w+\/[-+.\w]+/g.test(ee)
+       let {
+         schematic: iW,
+         onSchematicUpdate: OW,
+         onClose: mW,
+         inSourceWorld: NW
+       } = WW;
+       EW.NotificationProvider.showCustomPopup({
+         body: WW => (0, KW.jsx)(xi, {
+           schematic: iW,
+           onSchematicUpdate: OW,
+           onClose: WW,
+           inSourceWorld: NW
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: mW,
+         unlockPointerKey: "schematicPagePopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L572` → after: `L1672-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1672-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1672-L1737) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L572)

```diff
-       return /^.*\.[\w]+$/.test(ee)
+       let {
+         editor: iW,
+         className: OW,
+         publishRefusal: mW = null
+       } = WW;
+       const {
+         t: lW
+       } = (0, NW.B)(), {
+         schematicData: AW,
+         formEnabled: bW,
+         publishFormEnabled: jW,
+         publishSuspendedUntil: UW
+       } = iW, kW = !bW || !jW, sW = (0, ZW.i)();
+       return (0, xW.jsxs)("div", {
+         className: EW()("PublishButtonContainer", OW),
+         children: [iW.canEditSourceWorld && (0, xW.jsxs)(LW.f, {
+ ... (50 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L574-L586` → after: `L1739-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1739-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1739-L1753) · [Before (L574-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L574-L586)

```diff
-     var re = ["children"],
-       Qe = ["open"],
-       ei = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
-       ii = ["refKey", "onChange", "onClick"];
- 
-     function Hi(ee) {
-       return function(ee) {
-         if (Array.isArray(ee)) return Mi(ee)
-       }(ee) || function(ee) {
-         if ("undefined" !== typeof Symbol && null != ee[Symbol.iterator] || null != ee["@@iterator"]) return Array.from(ee)
-       }(ee) || bi(ee) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+   },
+   5897: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     var mW = OW(1185);
+     async function EW(WW) {
+       const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === iW.status || 403 === iW.status) return null;
+       if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
+       return await iW.json()
```

#### 43. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L589-L606` → after: `L1767-L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1767-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1767-L1792) · [Before (L589-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L589-L606)

```diff
-     function yi(ee, ie) {
-       return function(ee) {
-         if (Array.isArray(ee)) return ee
-       }(ee) || function(ee, ie) {
-         var He = null == ee ? null : "undefined" !== typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
-         if (null == He) return;
-         var ye, be, Me = [],
-           Ke = !0,
-           Ue = !1;
-         try {
-           for (He = He.call(ee); !(Ke = (ye = He.next()).done) && (Me.push(ye.value), !ie || Me.length !== ie); Ke = !0);
-         } catch (Fe) {
-           Ue = !0, be = Fe
-         } finally {
-           try {
-             Ke || null == He.return || He.return()
- ... (2 more removed lines; see GitHub link above)
+     function LW() {
+       let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       const {
+         userContext: iW
+       } = (0, PW.e)(), [OW, NW] = (0, mW.useState)((() => ({
+         loading: WW && iW.isLoggedIn(),
+         eligibility: null
+       })));
+       if ((0, mW.useEffect)((() => {
+           if (!WW || !iW.isLoggedIn()) return void NW({
+             loading: !1,
+             eligibility: null
+           });
+           let OW = !1;
+           return EW.e.getCreatorEligibility(iW).then((WW => {
+             OW || NW({
+ ... (10 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L609-L612` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1806) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L609-L612)

```diff
-         return Me
-       }(ee, ie) || bi(ee, ie) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       }
```

#### 45. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L615-L620` → after: `L1809-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1809-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1809-L1819) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L615-L620)

```diff
-     function bi(ee, ie) {
-       if (ee) {
-         if ("string" === typeof ee) return Mi(ee, ie);
-         var He = Object.prototype.toString.call(ee).slice(8, -1);
-         return "Object" === He && ee.constructor && (He = ee.constructor.name), "Map" === He || "Set" === He ? Array.from(ee) : "Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He) ? Mi(ee, ie) : void 0
-       }
+     function cW() {
+       const {
+         t: WW,
+         selectedLanguage: iW
+       } = (0, NW.B)();
+       return (OW, mW) => WW(OW, {
+         date: (0, NW.e)(iW.code, OW, mW, {
+           dateStyle: "medium",
+           timeStyle: "short"
+         })
+       })
```

#### 46. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L623-L626` → after: `L1822-L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1822-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1822-L1836) · [Before (L623-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L623-L626)

```diff
-     function Mi(ee, ie) {
-       (null == ie || ie > ee.length) && (ie = ee.length);
-       for (var He = 0, ye = new Array(ie); He < ie; He++) ye[He] = ee[He];
-       return ye
+     function wW() {
+       const {
+         t: WW,
+         selectedLanguage: iW
+       } = (0, NW.B)();
+       return OW => {
+         const mW = "worldBuilder:publishSuspended";
+         return WW(mW, {
+           date: (0, NW.e)(iW.code, mW, OW, {
+             dateStyle: "medium",
+             timeStyle: "short",
+             timeZone: "UTC"
+           })
+         })
+       }
```

#### 47. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L630-L635` → after: `L1860-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1860-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1860-L1882) · [Before (L630-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L630-L635)

```diff
-       var He = Object.keys(ee);
-       if (Object.getOwnPropertySymbols) {
-         var ye = Object.getOwnPropertySymbols(ee);
-         ie && (ye = ye.filter((function(ie) {
-           return Object.getOwnPropertyDescriptor(ee, ie).enumerable
-         }))), He.push.apply(He, ye)
+       return {
+         schematicId: WW.schematicId,
+         name: WW.name,
+         description: WW.description,
+         gamePublished: iW,
+         gameCategory: WW.gameCategory,
+         defaultGamemode: WW.defaultGamemode,
+         voidDeathHeight: WW.voidDeathHeight,
+         disableKeepInventory: WW.disableKeepInventory,
+         disableTpRequests: WW.disableTpRequests,
+         disableLobbySpawn: WW.disableLobbySpawn,
+         disableMobs: WW.disableMobs,
+         disableSpawnProtection: WW.disableSpawnProtection,
+         disableFallDamage: WW.disableFallDamage,
+         worldBorder: WW.worldBorder,
+         hideLobbyCode: WW.hideLobbyCode,
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L641-L650` → after: `L1887-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1887-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1887-L1897) · [Before (L641-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L641-L650)

```diff
-       for (var ie = 1; ie < arguments.length; ie++) {
-         var He = null != arguments[ie] ? arguments[ie] : {};
-         ie % 2 ? Ki(Object(He), !0).forEach((function(ie) {
-           Fi(ee, ie, He[ie])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Ki(Object(He)).forEach((function(ie) {
-           Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
-         }))
-       }
-       return ee
-     }
+       var iW, OW;
+       let {
+         onNavigateAway: sW,
+         inSourceWorld: MW = !1,
+         canManage: KW = !0
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: SW
+       } = (0, bW.e)(), YW = (0, jW.useNavigatePreserveSearch)(), [yW, TW] = (0, mW.useState)({
+         ...WW
+       }), [JW, hW] = (0, mW.useState)("Enter"), [HW, nW] = (0, mW.useState)(void 0), [uW, oW] = (0, mW.useState)(!1), dW = (0, mW.useRef)(kW(WW, WW.gamePublished)), eW = (0, mW.useRef)(void 0), vW = "Enter" === JW, gW = null !== (iW = null === (OW = (0, UW.b)(KW).eligibility) ||  … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L652-L659` → after: `L1899-L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1899-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1899-L1907) · [Before (L652-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L652-L659)

```diff
-     function Fi(ee, ie, He) {
-       return ie in ee ? Object.defineProperty(ee, ie, {
-         value: He,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : ee[ie] = He, ee
-     }
+       function pW(WW, iW) {
+         TW((OW => ({
+           ...OW,
+           [WW]: iW
+         })))
+       }
+       const fW = (0, mW.useCallback)((WW => {
+         eW.current = WW, nW(WW)
+       }), []);
```

#### 50. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L661-L672` → after: `L1909-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1909-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1909-L1910) · [Before (L661-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L661-L672)

```diff
-     function Ji(ee, ie) {
-       if (null == ee) return {};
-       var He, ye, be = function(ee, ie) {
-         if (null == ee) return {};
-         var He, ye, be = {},
-           Me = Object.keys(ee);
-         for (ye = 0; ye < Me.length; ye++) He = Me[ye], ie.indexOf(He) >= 0 || (be[He] = ee[He]);
-         return be
-       }(ee, ie);
-       if (Object.getOwnPropertySymbols) {
-         var Me = Object.getOwnPropertySymbols(ee);
-         for (ye = 0; ye < Me.length; ye++) He = Me[ye], ie.indexOf(He) >= 0 || Object.prototype.propertyIsEnumerable.call(ee, He) && (be[He] = ee[He])
+       function CW() {
+         return (0, cW.w)((0, NW.r)(yW.schematicId), yW)
```

#### 51. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L753-L889` → after: `L1913-L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1913-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1913-L1962) · [Before (L753-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L753-L889)

```diff
-     function qi() {
-       var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-         ie = Ui(Ui({}, Ri), ee),
-         He = ie.accept,
-         be = ie.disabled,
-         Me = ie.getFilesFromEvent,
-         Ke = ie.maxSize,
-         Ue = ie.minSize,
-         Fe = ie.multiple,
-         Je = ie.maxFiles,
-         oe = ie.onDragEnter,
-         Re = ie.onDragLeave,
-         ke = ie.onDragOver,
-         qe = ie.onDrop,
-         fe = ie.onDropAccepted,
-         Te = ie.onDropRejected,
- ... (121 more removed lines; see GitHub link above)
+       function XW(WW, iW) {
+         hW("Loading");
+         const OW = kW(yW, WW),
+           mW = HW !== eW.current ? HW : void 0;
+         ZW.e.updateSchematic(SW, OW, mW, iW).then((iW => {
+           let {
+             customTexturePackKey: mW
+           } = iW;
+           hW("Success"), pW("customTexturePackKey", mW), dW.current = OW, eW.current = void 0, nW(void 0), !WW || yW.gamePublished || sW || AW.g.showGamePublished(yW.name, CW()), setTimeout((() => {
+             pW("gamePublished", WW), hW("Enter")
+           }), 1e3)
+         })).catch((WW => {
+           if (WW instanceof PW.c && WW.errorMessageForUser === LW.A && void 0 === iW) return hW("Enter"), void oW(!0);
+           var OW;
+           (console.error("Failed to save schematic:", WW), hW("Error"), WW instanceof PW.c && WW.errorMessageForUser) && lW.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+ ... (34 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1009-L1010` → after: `L1965-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1965-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1965-L1967) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L1009-L1010)

```diff
-         Pi = function(ee) {
-           return de ? null : wi(ee)
+         askingPublishingPolicy: uW,
+         answerPublishingPolicy: function(WW) {
+           oW(!1), WW && XW(!0, LW.B)
```

#### 53. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1012-L1013` → after: `L1969-L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1969-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1969-L1978) · [Before (L1012-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L1012-L1013)

```diff
-         Ai = function(ee) {
-           We && ee.stopPropagation()
+         editSourceWorld: function() {
+           hW("Loading"), xW.b.getSourceWorld(yW.schematicId).then((WW => {
+             tW.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, wW.l)("other"), YW((0, EW.e)("classic", WW)), null === sW || void 0 === sW || sW()
+           })).catch((WW => {
+             console.error("Failed to get source world:", WW), hW("Error"), setTimeout((() => {
+               hW("Enter")
+             }), 1e3)
+           }))
```

#### 54. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1015-L1076` → after: `L1980-L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L1980-L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L1980-L1985) · [Before (L1015-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L1015-L1076)

```diff
-         Yi = (0, ye.useMemo)((function() {
-           return function() {
-             var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               ie = ee.refKey,
-               He = void 0 === ie ? "ref" : ie,
-               ye = ee.role,
-               Me = ee.onKeyDown,
-               Ke = ee.onFocus,
-               Ue = ee.onBlur,
-               Fe = ee.onClick,
-               Je = ee.onDragEnter,
-               oe = ee.onDragOver,
-               Re = ee.onDragLeave,
-               ke = ee.onDrop,
-               qe = Ji(ee, ei);
-             return Ui(Ui(Fi({
- ... (46 more removed lines; see GitHub link above)
+         playGame: function() {
+           tW.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), YW(CW()), null === sW || void 0 === sW || sW()
+         }
+       }
```

#### 55. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1079-L1112` → after: `L2034-L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2034-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L2034-L2053) · [Before (L1079-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L1079-L1112)

```diff
-     function fi(ee, ie) {
-       switch (ie.type) {
-         case "focus":
-           return Ui(Ui({}, ee), {}, {
-             qV: !0
-           });
-         case "blur":
-           return Ui(Ui({}, ee), {}, {
-             qV: !1
-           });
-         case "openDialog":
-           return Ui(Ui({}, ki), {}, {
-             isFileDialogActive: !0
-           });
-         case "closeDialog":
-           return Ui(Ui({}, ee), {}, {
- ... (18 more removed lines; see GitHub link above)
+     function cW(WW) {
+       return PW.find((iW => iW.name === WW))
+     }
+ 
+     function wW(WW) {
+       return null === WW ? void 0 : LW.get(WW)
+     }
+     const tW = new Uint8Array(65536);
+     for (const [bW, jW] of LW) tW[bW] = "source" === jW.state ? 1 : 2;
+     const ZW = new Map;
+     for (const bW of PW) ZW.set(bW.stillId, bW.family);
+ 
+     function xW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L1115-L1116` → after: `L2057-L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R2057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L2057-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/120.js#L2057-L2071) · [Before (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/120.js#L1115-L1116)

```diff
-     function Ti() {}
-   }
+     function AW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
+         let WW = 0;
+         for (const iW of PW) WW = Math.max(WW, iW.stillId, iW.sourceId, iW.fallingId, ...iW.flowingIds);
+         return WW
+       }() + 1;
+       const iW = new Uint8Array(WW);
+       for (const OW of PW) {
+         const mW = ("water" === OW.family ? 1 : 2) << 4;
+         for (const EW of [OW.stillId, OW.sourceId, OW.fallingId, ...OW.flowingIds]) EW < WW && (iW[EW] = mW)
+       }
+       return iW
+     }
+   },
+   5701: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/121.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/121.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a)

#### 1. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L80` → after: `L4-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/121.js#L4-L63) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/121.js#L4-L80)

```diff
-   5518: (ee, ie, He) => {
-     function ye(ee) {
-       return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
-         return typeof ee
-       } : function(ee) {
-         return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
-       }, ye(ee)
-     }
-     Object.defineProperty(ie, "__esModule", {
-       value: !0
-     }), ie.default = void 0;
-     var be = Re(He(1053)),
-       Me = function(ee, ie) {
-         if (!ie && ee && ee.__esModule) return ee;
-         if (null === ee || "object" !== ye(ee) && "function" !== typeof ee) return {
-           default: ee
- ... (61 more removed lines; see GitHub link above)
+   37497: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW
+     });
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(62),
+       PW = OW(5277),
+       LW = OW(1283);
+ 
+     function cW(WW) {
+       let {
+         locked: iW,
+         children: OW
+       } = WW;
+       const mW = (0, NW.useRef)(null),
+ ... (44 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L82-L218` → after: `L65-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L65-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/121.js#L65-L93) · [Before (L82-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/121.js#L82-L218)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var Me, Ke = !0,
-         Ue = !1;
-       return {
-         s: function() {
-           He = He.call(ee)
-         },
-         n: function() {
-           var ee = He.next();
-           return Ke = ee.done, ee
-         },
-         e: function(ee) {
-           Ue = !0, Me = ee
-         },
-         f: function() {
- ... (121 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function jW(WW) {
+       let {
+         flow: iW,
+         close: OW,
+         onCreating: LW,
+         onCreated: bW,
+         onFailedClosed: jW,
+         join: UW
+       } = WW;
+       const {
+         t: kW
+       } = (0, PW.B)(), [sW, MW] = (0, EW.useState)(mW.C), [KW, SW] = (0, EW.useState)(!1), [YW, yW] = (0, EW.useState)(""), TW = (0, ZW.c)();
+       (0, EW.useEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L644` → after: `L97-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L97-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/121.js#L97-L259) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/121.js#L644)

```diff
-         return ee
+       });
+       return (0, AW.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, AW.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, AW.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: kW("homePage:myWorld")
+           })
+         }), (0, AW.jsx)(cW.b, {
+           locked: KW,
+           children: (0, AW.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, AW.jsx)(xW.c, {
+               value: sW.defaultGamemode,
+               onChange: WW => {
+ ... (147 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L646-L684` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/121.js#L261-L268) · [Before (L646-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/121.js#L646-L684)

```diff
-       Re = function(ee) {
-         return ee && ee.ownerDocument && ee.ownerDocument.defaultView || Me
-       },
-       ke = ze(0, 0, 0, 0);
- 
-     function qe(ee) {
-       return parseFloat(ee) || 0
-     }
- 
-     function fe(ee) {
-       for (var ie = [], He = 1; He < arguments.length; He++) ie[He - 1] = arguments[He];
-       return ie.reduce((function(ie, He) {
-         return ie + qe(ee["border-" + He + "-width"])
-       }), 0)
-     }
- 
- ... (23 more removed lines; see GitHub link above)
+       xW = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 5. `bundles/bloxd.io/chunks/js/121.js` (Changed code · before: `L686-L800` → after: `L270-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739aR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-79a8b139135c92a08200bdbea6da0531e166c887b15deff862ea49fff60f739a) · [After (L270-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/121.js#L270-L361) · [Before (L686-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/121.js#L686-L800)

```diff
-       return ze(be.left, be.top, Ue, Fe)
-     }
-     var pe = "undefined" !== typeof SVGGraphicsElement ? function(ee) {
-       return ee instanceof Re(ee).SVGGraphicsElement
-     } : function(ee) {
-       return ee instanceof Re(ee).SVGElement && "function" === typeof ee.getBBox
-     };
- 
-     function Xe(ee) {
-       return be ? pe(ee) ? function(ee) {
-         var ie = ee.getBBox();
-         return ze(0, 0, ie.width, ie.height)
-       }(ee) : Te(ee) : ke
-     }
- 
-     function ze(ee, ie, He, ye) {
- ... (99 more removed lines; see GitHub link above)
+   },
+   37489: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       f: () => tW
+     });
+     OW(62);
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(5318),
+       PW = OW(327),
+       LW = OW(1172),
+       cW = OW(1283);
+ 
+     function wW(WW) {
+       let {
+ ... (76 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/122.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/122.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260)

#### 1. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L2)

```diff
- export const ids = [122, 706];
+ export const ids = [122];
```

#### 2. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L43` → after: `L4-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L4-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L4-L202) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L4-L43)

```diff
-   5469: (ee, ie, He) => {
-     var ye = He(5475);
- 
-     function be() {}
- 
-     function Me() {}
-     Me.resetWarningCache = be, ee.exports = function() {
-       function ee(ee, ie, He, be, Me, Ke) {
-         if (Ke !== ye) {
-           var Ue = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw Ue.name = "Invariant Violation", Ue
-         }
-       }
- 
-       function ie() {
-         return ee
- ... (24 more removed lines; see GitHub link above)
+   42593: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => lW,
+       g: () => wW,
+       i: () => ZW,
+       l: () => tW,
+       m: () => xW
+     });
+     var mW = OW(1217),
+       EW = OW(3083),
+       NW = OW(38333),
+       PW = OW(38702);
+     class LW {
+       constructor(WW, iW) {
+         this.pose = WW, this.nodes = void 0, this.nodes = WW.boneNames.map((WW => iW.get(WW)))
+       }
+ ... (183 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L45-L46` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L204) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L45-L46)

```diff
-       return He.PropTypes = He, He
-     }
+     (0, PW.m)(xW)
```

#### 4. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L48-L49` → after: `L206-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L206-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L206-L247) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L48-L49)

```diff
-   5461: (ee, ie, He) => {
-     ee.exports = He(5469)()
+   39915: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       d: () => ZW
+     });
+     var mW = OW(38379),
+       EW = OW(38472),
+       NW = OW(38388),
+       PW = OW(38405);
+     const LW = "bloxdTextLodBias",
+       cW = [{
+         name: LW,
+         type: "float"
+       }],
+       wW = "bloxdTextSample",
+       tW = {
+ ... (26 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L51-L52` → after: `L249-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L249-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L249-L286) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L51-L52)

```diff
-   5475: ee => {
-     ee.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
+   42601: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CapeMaterialPlugin: () => MW,
+       HueTintMaterialPlugin: () => KW,
+       LifeformMaterialPlugin: () => SW,
+       OverlayMaterialPlugin: () => YW
+     });
+     var mW = OW(42603),
+       EW = OW(39198);
+     class NW extends((0, mW.d)(EW.b)) {}(0, mW.g)(EW.b, NW);
+     var PW = OW(38485);
+     class LW extends((0, mW.d)(PW.e)) {}(0, mW.g)(PW.e, LW);
+     var cW = OW(39025);
+     class wW extends((0, mW.d)(cW.f)) {}(0, mW.g)(cW.f, wW);
+     var tW = OW(38511),
+       ZW = OW(41782),
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L54-L94` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L288) · [Before (L54-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L54-L94)

```diff
-   7235: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => oe
-     });
-     var ye = He(1502),
-       be = He(1438),
-       Me = He(1127),
-       Ke = He(7238),
-       Ue = He(7213),
-       Fe = He(7201),
-       Je = He(1228);
- 
-     function oe() {
-       const {
-         t: ee
-       } = (0, Me.v)(), ie = (0, ye.useNavigatePreserveSearch)();
- ... (25 more removed lines; see GitHub link above)
+   10106: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L98-L204` → after: `L292-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L292-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L292-L297) · [Before (L98-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L98-L204)

```diff
-       i: () => Re,
-       l: () => fe
-     });
-     var ye = He(59),
-       be = He(7206),
-       Me = He(1490),
-       Ke = He(7201),
-       Ue = He(7220),
-       Fe = He(1075);
-     const Je = "shaderPackListingView",
-       oe = "shaderPackListingFilterOpen";
- 
-     function Re() {
-       var ee;
-       const [ie, He] = (0, Ue.d)(Je, be.C[0]);
-       return [null !== (ee = be.C.find((ee => ee === ie))) && void 0 !== ee ? ee : be.C[0], He]
- ... (91 more removed lines; see GitHub link above)
+       h: () => LW,
+       j: () => cW
+     });
+     var mW = OW(27);
+     const EW = "touchSprintChanged";
+     let NW = !0;
```

#### 8. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L210-L224` → after: `L303-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L303-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L303-L305) · [Before (L210-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L210-L224)

```diff
-     function ke() {
-       Je = null
-     }
- 
-     function qe(ee) {
-       return ee.playerHasRank("developer") || ee.playerHasRank("admin")
-     }
-     const fe = ["terrain", "water", "models", "sunShadows", "strict"],
-       Te = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
-         strict: "shaderPackListing:filterAllGames"
-       };
+     function LW(WW) {
+       WW !== NW && (NW = WW, mW.l.iZ(EW, WW))
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L227-L236` → after: `L308-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L308-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L308-L331) · [Before (L227-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L227-L236)

```diff
-       return ee.withFeatures.includes(ie) ? "with" : ee.withoutFeatures.includes(ie) ? "without" : null
-     }
- 
-     function Xe(ee) {
-       return null === ee ? "with" : "with" === ee ? "without" : null
-     }
- 
-     function ze(ee) {
-       return "with" === ee ? "only" : null === ee ? "include" : void 0
-     }
+       return null !== WW && null !== iW && WW > iW
+     }
+   },
+   42603: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => XW,
+       d: () => sW,
+       g: () => rW
+     });
+     var mW = OW(41782),
+       EW = OW(42612),
+       NW = OW(42652),
+       PW = OW(42616),
+       LW = OW(38995),
+       cW = OW(39004),
+       wW = OW(39009),
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L239-L266` → after: `L334-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L334-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L334-L476) · [Before (L239-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L239-L266)

```diff
-       const He = pe(ee, ie),
-         ye = ee => ee.filter((ee => ee !== ie));
-       return {
-         withFeatures: null === He ? [...ee.withFeatures, ie] : ye(ee.withFeatures),
-         withoutFeatures: "with" === He ? [...ee.withoutFeatures, ie] : ye(ee.withoutFeatures)
-       }
-     }
-     const Ee = "section",
-       ge = "sort",
-       Oe = "filters",
-       de = "q",
-       We = "banned",
-       te = "popular",
-       Ze = "strict";
- 
-     function we(ee) {
- ... (12 more removed lines; see GitHub link above)
+       return Object.assign((function(WW, OW, mW, EW) {
+         return iW(this.featureState, WW, OW, mW, EW)
+       }), {
+         cZ: WW
+       })
+     }
+ 
+     function sW(WW) {
+       const iW = class extends AW.e {
+           constructor(iW, OW) {
+             const mW = (0, jW.bb)(iW),
+               EW = mW && (0, jW.v)(mW, WW.name);
+             for (var NW = arguments.length, PW = new Array(NW > 2 ? NW - 2 : 0), LW = 2; LW < NW; LW++) PW[LW - 2] = arguments[LW];
+             super(iW, WW.name, WW.priority, EW ? EW.defines : WW.defines(...PW), !1), this.featureState = void 0, this.featureState = OW, this._pluginManager._addPlugin(this), this._enable(!0), (0, jW.x)(this._material, WW, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+ ... (127 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L271-L306` → after: `L481-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L481-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L481-L537) · [Before (L271-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L271-L306)

```diff
-       var He;
-       const ye = Ve(ie);
-       (0, Me.i)(ee, Ee, "explore" === ie.section ? null : ie.section), (0, Me.i)(ee, ge, ie.sort === te ? null : ie.sort), (0, Me.i)(ee, Oe, ye === Ze ? null : ye), (0, Me.i)(ee, de, ie.searchQuery), (0, Me.i)(ee, We, null !== (He = ze(ie.banned)) && void 0 !== He ? He : null), ( … [truncated]
-     }
- 
-     function Pe(ee) {
-       const ie = new URLSearchParams;
-       return De(ie, {
-         section: "explore",
-         sort: te,
-         withFeatures: "strict" === ee ? [ee] : [ee, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${Ke}?${ie.toString()}`
- ... (20 more removed lines; see GitHub link above)
+       if (!(iW instanceof mW.StandardMaterial) || iW.specularTexture) return;
+       const {
+         r: OW,
+         g: EW,
+         b: NW
+       } = iW.specularColor;
+       0 === OW && 0 === EW && 0 === NW && (WW.SPECULARTERM = !1)
+     }(0, tW.h)({
+       disableUnusedSpecularTerm: XW
+     });
+     var BW = OW(38437),
+       qW = OW(38683);
+     const RW = new RegExp(`^#define ${wW.c}\\s*$`, "m");
+     class GW extends(sW(wW.i)) {
+       constructor(WW, iW) {
+         super(WW, iW), this.JA = !1, iW.ditherOnlyWhileFading && (qW.h.add(WW), this.prewarmDitherTwins(WW))
+ ... (41 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L308-L320` → after: `L539-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L539-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L539-L778) · [Before (L308-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L308-L320)

```diff
-       ce = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
-       };
- 
-     function xe(ee) {
-       return Math.round(100 * Math.max(0, 1 - 1 / ee))
-     }
- 
-     function Le(ee, ie, He, be) {
+       write: (WW, iW, OW) => {
+         (0, BW.Z)(WW.mirror, iW, OW)
+       },
+       addFeature: (WW, iW, OW) => {
+         const mW = aW.get(iW.feature);
+         if (!mW) throw new Error(`${iW.feature.name} has no plugin class (registerPluginClass)`);
+         new mW(WW.mirror, iW.state, ...OW)
+       },
+       texture: (WW, iW, OW) => {
+         let {
+           url: mW,
+           noMipmap: EW,
+           invertY: NW,
+           samplingMode: LW,
+           data: cW,
+           sets: wW
+ ... (224 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L322-L344` → after: `L780-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L780-L781) · [Before (L322-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L322-L344)

```diff
-       ee.isBanned && Me.push({
-         tone: "warning",
-         text: be("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: Ke
-       } = ee;
-       if (null === ee.brokenError || Ke && !Ke.error || Me.push({
-           tone: "warning",
-           text: be("shaderPackListing:ownerBroken"),
-           detail: ee.brokenError
-         }), null !== Ke && void 0 !== Ke && Ke.error) Me.push({
-         tone: "warning",
-         text: be(ie ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
-         detail: (0, ye.l)(Ke.error) ? null : Ke.error
- ... (7 more removed lines; see GitHub link above)
+       for (let wW = 0; wW < NW; wW += LW) {
+         const WW = Math.min(NW, wW + LW);
```

#### 14. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L346-L348` → after: `L783-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L783-L784) · [Before (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L346-L348)

```diff
-           tone: "info",
-           text: Ue,
-           detail: null
+           pixels: PW.slice(wW * mW, WW * mW),
+           layers: WW - wW
```

#### 15. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L351-L381` → after: `L787-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L787-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L787-L788) · [Before (L351-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L351-L381)

```diff
-       return ee.listed || Me.push({
-         tone: "info",
-         text: be("shaderPackListing:ownerUnlisted"),
-         detail: null
-       }), Me
-     }
- 
-     function Ce(ee) {
-       return Math.max(1, Math.round(ee / 1024))
-     }
- 
-     function ve(ee, ie, He) {
-       return ee instanceof be.b && ee.errorMessageForUser ? ee.errorMessageForUser : ie(He)
-     }
-   },
-   7220: (ee, ie, He) => {
- ... (15 more removed lines; see GitHub link above)
+       return cW
+     }
```

#### 16. `bundles/bloxd.io/chunks/js/122.js` (Changed code · before: `L384-L391` → after: `L791-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c79517fe22d4647e1e2ba41db793af703387564925393bb274c2b2547c0a3260) · [After (L791-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/122.js#L791-L809) · [Before (L384-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/122.js#L384-L391)

```diff
-       h: () => Me
-     });
-     var ye = He(35);
-     const be = "shaderPack";
-     async function Me() {
-       var ee;
-       let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (ee = await ye.e.getItem(be, ie)) && void 0 !== ee ? ee : null
+       i: () => NW
+     });
+     const EW = new WeakMap;
+ 
+     function NW(WW, iW, OW) {
+       var mW, NW;
+       const PW = null !== (mW = EW.get(WW)) && void 0 !== mW ? mW : new Map;
+       EW.set(WW, PW);
+       const LW = null !== (NW = PW.get(iW[0])) && void 0 !== NW ? NW : [];
+       PW.set(iW[0], LW);
+       const cW = LW.find((WW => WW.urls.length === iW.length && WW.urls.every(((WW, OW) => WW === iW[OW]))));
+       if (cW) return cW.built;
+       const wW = {
+         urls: [...iW],
+         built: OW()
+       };
+ ... (3 more added lines; see GitHub link above)
```
