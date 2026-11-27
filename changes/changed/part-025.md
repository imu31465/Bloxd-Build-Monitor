# Changed — Bundle Modifications Report (Part 025 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `25 / 82` (**278** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 024](part-024.md) · [Part 026 →](part-026.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/613.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/613.js` (69 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9)

#### 27. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L391-L393` → after: `L441-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L441-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L441-L442) · [Before (L391-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L391-L393)

```diff
-     function be(ee) {
-       const ie = ye ??= new WeakMap;
-       ie.set(ee, (ie.get(ee) ?? 0) + 1)
+     function yW(WW, iW, OW) {
+       return [iW = Math.max(0, Math.min(WW.length, iW)), Math.max(iW, Math.min(WW.length, OW))]
```

#### 28. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L396-L397` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L445-L446) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L396-L397)

```diff
-     function Me(ee) {
-       be(ee.texture)
+     function TW(WW, iW) {
+       return cW(WW, iW, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
```

#### 29. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L442-L447` → after: `L450-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L450-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L450-L456) · [Before (L442-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L442-L447)

```diff
-       ie._passes.length = 0, ee._currentProcessedTask = ie;
-       try {
-         ie.record()
-       } finally {
-         ee._currentProcessedTask = null
-       }
+       let OW = WW.charCodeAt(iW);
+       if (!((mW = OW) >= 55296 && mW < 56320) || iW + 1 == WW.length) return OW;
+       var mW;
+       let EW = WW.charCodeAt(iW + 1);
+       return function(WW) {
+         return WW >= 56320 && WW < 57344
+       }(EW) ? EW - 56320 + (OW - 55296 << 10) + 65536 : OW
```

#### 30. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L452-L462` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L460-L461) · [Before (L452-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L452-L462)

```diff
-       const ie = ee.worldMatrixVersion;
-       if (ee._viewVer === ie) return ee._viewCache;
-       const He = ee._viewCache,
-         ye = ee.worldMatrix,
-         be = ee._useFloatingOrigin,
-         Me = be ? 0 : ye[12],
-         Ke = be ? 0 : ye[13],
-         Ue = be ? 0 : ye[14];
-       return He[0] = ye[0], He[1] = ye[4], He[2] = ye[8], He[3] = 0, He[4] = ye[1], He[5] = ye[5], He[6] = ye[9], He[7] = 0, He[8] = ye[2], He[9] = ye[6], He[10] = ye[10], He[11] = 0, He[12] = -(ye[0] * Me + ye[1] * Ke + ye[2] * Ue), He[13] = -(ye[4] * Me + ye[5] * Ke + ye[6] * U … [truncated]
-     }
-     var Fe = null;
+       return WW <= 65535 ? String.fromCharCode(WW) : (WW -= 65536, String.fromCharCode(55296 + (WW >> 10), 56320 + (1023 & WW)))
+     }
```

#### 31. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L465` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L464) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L465)

```diff
-       return ee._projFov === ee.fov && ee._projNear === ee.nearPlane && ee._projFar === ee.farPlane || (ee._projFov = ee.fov, ee._projNear = ee.nearPlane, ee._projFar = ee.farPlane, ee._projRev = (ee._projRev ?? 0) + 1), ee.worldMatrixVersion + (ee._projRev ?? 0)
+       return WW < 65536 ? 1 : 2
```

#### 32. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L467-L486` → after: `L466-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L466-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L466-L565) · [Before (L467-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L467-L486)

```diff
- 
-     function oe(ee, ie) {
-       const He = Je(ee);
-       if (ee._projVer === He && ee._projAspect === ie) return ee._projCache;
-       const ye = ee._projCache;
-       return null !== Fe && ee.ortho ? Fe(ee, ie, ye) : function(ee, ie, He, ye, be) {
-         const Me = 1 / Math.tan(.5 * ie),
-           Ke = be - ye;
-         ee[0] = Me / He, ee[5] = Me, ee[10] = -ye / Ke, ee[11] = 1, ee[14] = be * ye / Ke
-       }(ye, ee.fov, ie, ee.nearPlane, ee.farPlane), ee._projVer = He, ee._projAspect = ie, ye
-     }
-     var Re = He(44851);
- 
-     function ke(ee, ie, He) {
-       return ee._device.createBuffer({
-         label: He,
- ... (4 more removed lines; see GitHub link above)
+     const nW = /\r\n?|\n/;
+     var uW = function(WW) {
+       return WW[WW.Simple = 0] = "Simple", WW[WW.TrackDel = 1] = "TrackDel", WW[WW.TrackBefore = 2] = "TrackBefore", WW[WW.TrackAfter = 3] = "TrackAfter", WW
+     }(uW || (uW = {}));
+     class oW {
+       constructor(WW) {
+         this.sections = WW
+       }
+       get length() {
+         let WW = 0;
+         for (let iW = 0; iW < this.sections.length; iW += 2) WW += this.sections[iW];
+         return WW
+       }
+       get newLength() {
+         let WW = 0;
+         for (let iW = 0; iW < this.sections.length; iW += 2) {
+ ... (84 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L488-L501` → after: `L567-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L567-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L567-L619) · [Before (L488-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L488-L501)

```diff
-     var qe = He(44904),
-       fe = null;
- 
-     function Te(ee) {
-       const ie = ee._device,
-         He = fe ??= new WeakMap;
-       let ye = He.get(ie);
-       return ye || (ye = ie.createBindGroupLayout({
-         label: "yp",
-         entries: [{
-           binding: 0,
-           visibility: Re.f.VERTEX | Re.f.FRAGMENT,
-           buffer: {
-             type: "uniform"
+     class dW extends oW {
+       constructor(WW, iW) {
+         super(WW), this.inserted = iW
+       }
+       apply(WW) {
+         if (this.length != WW.length) throw new RangeError("Applying change set to a document with the wrong length");
+         return gW(this, ((iW, OW, mW, EW, NW) => WW = WW.replace(mW, mW + (OW - iW), NW)), !1), WW
+       }
+       mapDesc(WW) {
+         return DW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
+       }
+       invert(WW) {
+         let iW = this.sections.slice(),
+           OW = [];
+         for (let mW = 0, EW = 0; mW < iW.length; mW += 2) {
+           let NW = iW[mW],
+ ... (37 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L503-L507` → after: `L621-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L621-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L621-L625) · [Before (L503-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L503-L507)

```diff
-         }, {
-           binding: 1,
-           visibility: Re.f.FRAGMENT,
-           buffer: {
-             type: "uniform"
+           let cW = WW[NW++];
+           for (; PW < cW;) {
+             if (EW.done) break WW;
+             let WW = Math.min(EW.len, cW - PW);
+             eW(iW, WW, -1), eW(mW, WW, -1 == EW.ins ? -1 : 0 == EW.off ? EW.ins : 0), EW.forward(WW), PW += WW
```

#### 35. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L509-L519` → after: `L627-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L627-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L627-L631) · [Before (L509-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L509-L519)

```diff
-         }]
-       }), He.set(ie, ye)), ye
-     }
- 
-     function pe(ee, ie, He) {
-       const ye = ee._device,
-         be = ke(ee, ie.byteLength, He);
-       try {
-         ye.queue.writeBuffer(be, 0, ie.buffer, ie.byteOffset, ie.byteLength)
-       } catch (Me) {
-         throw be.destroy(), Me
+         }
+         return {
+           changes: new dW(iW, OW),
+           filtered: oW.create(mW)
+         }
```

#### 36. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L521-L538` → after: `L633-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L633-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L633-L640) · [Before (L521-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L521-L538)

```diff
-       return be
-     }
-     var Xe = He(44924),
-       ze = new Ke.i(1),
-       Be = new Ke.d(ze.buffer);
- 
-     function Ee(ee) {
-       let ie = 0;
-       for (const He of ee) ie += He._lightVersion ?? 0;
-       return ie
-     }
- 
-     function ge(ee, ie) {
-       ee.fill(0);
-       let He = 0;
-       for (const ye of ie) {
- ... (2 more removed lines; see GitHub link above)
+       toJSON() {
+         let WW = [];
+         for (let iW = 0; iW < this.sections.length; iW += 2) {
+           let OW = this.sections[iW],
+             mW = this.sections[iW + 1];
+           mW < 0 ? WW.push(OW) : 0 == mW ? WW.push([OW]) : WW.push([OW].concat(this.inserted[iW >> 1].toJSON()))
+         }
+         return WW
```

#### 37. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L540-L541` → after: `L642-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L642-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L642-L646) · [Before (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L540-L541)

```diff
-       ze[0] = He, ee[0] = Be[0]
-     }
+       static of (WW, iW, OW) {
+         let mW = [],
+           EW = [],
+           NW = 0,
+           PW = null;
```

#### 38. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L543-L559` → after: `L648-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L648-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L648-L697) · [Before (L543-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L543-L559)

```diff
-     function Oe(ee, ie) {
-       let He = ie._lightGpuState;
-       const ye = 16 + 16 * Xe.b * 4;
-       if (He && He._byteSize === ye) return He;
-       const be = !He;
-       He?._buffer.destroy();
-       const Me = new Ke.d(ye / 4);
-       return ge(Me, ie.lights), ee._applyLightFoOffset?.(Me, ie), He = {
-         _buffer: pe(ee, Me),
-         _scratch: Me,
-         iN: Ee(ie.lights) + (ee._lightFoVersion?.(ie) ?? 0),
-         _listVersion: ie._lightListVersion ?? 0,
-         _lightCount: ie.lights.length,
-         _byteSize: ye
-       }, ie._lightGpuState = He, be && ie._disposables.push((() => {
-         ie._lightGpuState?._buffer.destroy(), ie._lightGpuState = void 0
- ... (1 more removed lines; see GitHub link above)
+         function LW() {
+           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !mW.length) return;
+           NW < iW && eW(mW, iW - NW, -1);
+           let WW = new dW(mW, EW);
+           PW = PW ? PW.compose(WW.map(PW)) : WW, mW = [], EW = [], NW = 0
+         }
+         return function WW(cW) {
+           if (Array.isArray(cW))
+             for (let iW of cW) WW(iW);
+           else if (cW instanceof dW) {
+             if (cW.length != iW) throw new RangeError(`Mismatched change set length (got ${cW.length}, expected ${iW})`);
+             LW(), PW = PW ? PW.compose(cW.map(PW)) : cW
+           } else {
+             let {
+               from: WW,
+               to: PW = WW,
+ ... (34 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L562-L569` → after: `L700-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L700-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L700-L704) · [Before (L562-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L562-L569)

```diff
-     function de(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const be = ie;
-       if (0 === ye && 16 === be.length) return void ee.set(be, He);
-       const Me = ye,
-         Ke = He;
-       ee[Ke + 0] = be[Me + 0], ee[Ke + 1] = be[Me + 1], ee[Ke + 2] = be[Me + 2], ee[Ke + 3] = be[Me + 3], ee[Ke + 4] = be[Me + 4], ee[Ke + 5] = be[Me + 5], ee[Ke + 6] = be[Me + 6], ee[Ke + 7] = be[Me + 7], ee[Ke + 8] = be[Me + 8], ee[Ke + 9] = be[Me + 9], ee[Ke + 10] = be[Me + 10 … [truncated]
+     function eW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == iW && OW <= 0) return;
+       let EW = WW.length - 2;
+       EW >= 0 && OW <= 0 && OW == WW[EW + 1] ? WW[EW] += iW : EW >= 0 && 0 == iW && 0 == WW[EW] ? WW[EW + 1] += OW : mW ? (WW[EW] += iW, WW[EW + 1] += OW) : WW.push(iW, OW)
```

#### 40. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L572-L606` → after: `L707-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L707-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L707-L714) · [Before (L572-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L572-L606)

```diff
-     function We(ee, ie, He, ye, be) {
-       ee.fill(0);
-       const Me = function(ee, ie) {
-           const He = Je(ee);
-           if (ee._vpVer === He && ee._vpAspect === ie) return ee._vpCache;
-           const ye = ee._vpCache;
-           return function(ee, ie, He, ye, be, Me) {
-             const Ke = He[ye],
-               Ue = He[ye + 1],
-               Fe = He[ye + 2],
-               Je = He[ye + 3],
-               oe = He[ye + 4],
-               Re = He[ye + 5],
-               ke = He[ye + 6],
-               qe = He[ye + 7],
-               fe = He[ye + 8],
- ... (19 more removed lines; see GitHub link above)
+     function vW(WW, iW, OW) {
+       if (0 == OW.length) return;
+       let mW = iW.length - 2 >> 1;
+       if (mW < WW.length) WW[WW.length - 1] = WW[WW.length - 1].append(OW);
+       else {
+         for (; WW.length < mW;) WW.push(bW.empty);
+         WW.push(OW)
+       }
```

#### 41. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L609-L616` → after: `L717-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L717-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L717-L729) · [Before (L609-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L609-L616)

```diff
-     function te(ee, ie) {
-       return {
-         _renderables: ee,
-         _opaqueBindings: [],
-         _directBindings: [],
-         _transparentBindings: [],
-         _ob: [],
-         _lastVersion: ie
+     function gW(WW, iW, OW) {
+       let mW = WW.inserted;
+       for (let EW = 0, NW = 0, PW = 0; PW < WW.sections.length;) {
+         let LW = WW.sections[PW++],
+           cW = WW.sections[PW++];
+         if (cW < 0) EW += LW, NW += LW;
+         else {
+           let wW = EW,
+             tW = NW,
+             ZW = bW.empty;
+           for (; wW += LW, tW += cW, cW && mW && (ZW = ZW.append(mW[PW - 2 >> 1])), !(OW || PW == WW.sections.length || WW.sections[PW + 1] < 0);) LW = WW.sections[PW++], cW = WW.sections[PW++];
+           iW(EW, wW, NW, tW, ZW), EW = wW, NW = tW
+         }
```

#### 42. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L621-L719` → after: `L734-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L734-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L734-L770) · [Before (L621-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L621-L719)

```diff
-       ee.clr ??= !0;
-       const be = ee.rt._descriptor,
-         Me = ee.depth?._descriptor,
-         Fe = {
-           _colorFormat: be.format,
-           _depthStencilFormat: Me?.dFormat ?? be.dFormat,
-           _depthCompare: be.depthCompare ?? Me?.depthCompare,
-           _sampleCount: be.samples
-         },
-         oe = {
-           loadOp: "clear",
-           storeOp: "store"
-         },
-         Re = {
-           ...te([], -1),
-           name: ee.name,
- ... (83 more removed lines; see GitHub link above)
+       let mW = [],
+         EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
+         NW = new pW(WW),
+         PW = new pW(iW),
+         LW = 0;
+       for (let cW = -1;;) {
+         if (++LW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
+         if (NW.done && PW.len || PW.done && NW.len) throw new Error("Mismatched change set lengths");
+         if (-1 == NW.ins && -1 == PW.ins) {
+           let WW = Math.min(NW.len, PW.len);
+           eW(mW, WW, -1), NW.forward(WW), PW.forward(WW)
+         } else if (PW.ins >= 0 && (NW.ins < 0 || cW == NW.i || 0 == NW.off && (PW.len < NW.len || PW.len == NW.len && !OW))) {
+           let WW = PW.len;
+           for (eW(mW, PW.ins, -1); WW;) {
+             if (++LW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
+             let iW = Math.min(NW.len, WW);
+ ... (21 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L779-L809` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L773) · [Before (L779-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L779-L809)

```diff
-         ee._renderPassDescriptor.depthStencilAttachment = Ke
-       }(ee, Ue), ee._updateContext.targetWidth = Ue._width, ee._updateContext.targetHeight = Ue._height), be && (Object.assign(ee, Je), Fe?._release(ee.engine, [Je._batchState])), Je
-     }
- 
-     function Ae(ee, ie) {
-       const He = ee.engine,
-         ye = ee._config,
-         Me = ye.rt,
-         Ke = ee.yp,
-         Ue = ee._opaqueBindings,
-         Fe = ee._ob,
-         Je = ee._sceneBG;
-       if (function(ee, ie, He, ye) {
-           const be = ie?.viewport;
-           if (!be) return;
-           const Me = Math.floor(be.x * He),
- ... (15 more removed lines; see GitHub link above)
+       }
```

#### 44. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L813-L826` → after: `L777-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L777-L795) · [Before (L813-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L813-L826)

```diff
-       let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const ye = Oe(ie, ee.yp)._buffer;
-       if (ye === ee._lightsUBO) return;
-       const be = ie._device.createBindGroup({
-         layout: Te(ie),
-         entries: [{
-           binding: 0,
-           resource: {
-             buffer: ee._sceneUBO
-           }
-         }, {
-           binding: 1,
-           resource: {
-             buffer: ye
+       let OW = [],
+         mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
+         EW = new pW(WW),
+         NW = new pW(iW),
+         PW = 0;
+       for (let LW = !1;;) {
+         if (++PW > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
+         if (EW.done && NW.done) return mW ? dW.createSet(OW, mW) : oW.create(OW);
+         if (0 == EW.ins) eW(OW, EW.len, 0, LW), EW.next();
+         else if (0 != NW.len || NW.done) {
+           if (EW.done || NW.done) throw new Error("Mismatched change set lengths");
+           {
+             let WW = Math.min(EW.len2, NW.len),
+               iW = OW.length;
+             if (-1 == EW.ins) {
+               let iW = -1 == NW.ins ? -1 : NW.off ? 0 : NW.ins;
+ ... (3 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L828-L830` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L797-L798) · [Before (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L828-L830)

```diff
-         }]
-       });
-       ee._lightsUBO = ye, ee._sceneBG = be, He && (ee._ob = [])
+         } else eW(OW, 0, NW.ins, LW), mW && vW(mW, OW, NW.text), NW.next()
+       }
```

#### 46. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L832-L842` → after: `L800-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L800-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L800-L832) · [Before (L832-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L832-L842)

```diff
- 
-     function Ve(ee, ie) {
-       for (const He of ee) He.update?.(ie)
-     }
- 
-     function ae(ee, ie, He) {
-       let ye = null,
-         be = 0;
-       for (const Me of ie) {
-         const ie = Me.renderable.mesh;
-         ie && !1 === ie.visible || (Me.pipeline !== ye && (ee.setPipeline(Me.pipeline), ye = Me.pipeline), be += Me.draw(ee, He))
+     class pW {
+       constructor(WW) {
+         this.set = WW, this.i = 0, this.next()
+       }
+       next() {
+         let {
+           sections: WW
+         } = this.set;
+         this.i < WW.length ? (this.len = WW[this.i++], this.ins = WW[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
+       }
+       get done() {
+         return -2 == this.ins
+       }
+       get len2() {
+         return this.ins < 0 ? this.len : this.ins
+       }
+ ... (17 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L846-L858` → after: `L835-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L835-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L835-L877) · [Before (L846-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L846-L858)

```diff
- 
-     function ce(ee) {
-       const ie = ee._materialSwapQueue;
-       if (!ie[0] || ee._runtimeBuilds?.w) return;
-       let ye, be, Me;
-       const Ke = ee._renderables;
-       for (const He of ie) {
-         const ie = He.material;
-         if (!ie) continue;
-         const Ue = He._runtimeThinBuild;
-         if (Ue) {
-           be = Ue(ee, He, be);
-           continue
+     class fW {
+       constructor(WW, iW, OW) {
+         this.from = WW, this.to = iW, this.flags = OW
+       }
+       get anchor() {
+         return 32 & this.flags ? this.to : this.from
+       }
+       get head() {
+         return 32 & this.flags ? this.from : this.to
+       }
+       get empty() {
+         return this.from == this.to
+       }
+       get assoc() {
+         return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
+       }
+ ... (27 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L860-L864` → after: `L879-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L879-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L879-L921) · [Before (L860-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L860-L864)

```diff
-         const Fe = ee._groups.get(ie._buildGroup),
-           Je = Fe?.r;
-         if (!Je) {
-           (Me ??= []).push(He);
-           continue
+       }
+       static fromJSON(WW) {
+         if (!WW || "number" != typeof WW.anchor || "number" != typeof WW.head) throw new RangeError("Invalid JSON representation for SelectionRange");
+         return CW.range(WW.anchor, WW.head)
+       }
+       static create(WW, iW, OW) {
+         return new fW(WW, iW, OW)
+       }
+     }
+     class CW {
+       constructor(WW, iW) {
+         this.kj = WW, this.mainIndex = iW
+       }
+       map(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
+         return WW.empty ? this : CW.create(this.kj.map((OW => OW.map(WW, iW))), this.mainIndex)
+ ... (27 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L866-L868` → after: `L923-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L923-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L923-L938) · [Before (L866-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L866-L868)

```diff
-         if (Fe._w?.(He)) {
-           (Me ??= []).push([He, ie]);
-           continue
+       }
+       static fromJSON(WW) {
+         if (!WW || !Array.isArray(WW.kj) || "number" != typeof WW.main || WW.main >= WW.kj.length) throw new RangeError("Invalid JSON representation for EditorSelection");
+         return new CW(WW.kj.map((WW => fW.fromJSON(WW))), WW.main)
+       }
+       static single(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
+         return new CW([CW.range(WW, iW)], 0)
+       }
+       static create(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (0 == WW.length) throw new RangeError("A selection needs at least one range");
+         for (let OW = 0, mW = 0; mW < WW.length; mW++) {
+           let EW = WW[mW];
+           if (EW.empty ? EW.from <= OW : EW.from < OW) return CW.normalized(WW.slice(), iW);
+           OW = EW.to
```

#### 50. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L870-L879` → after: `L940-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L940-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L940-L963) · [Before (L870-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L870-L879)

```diff
-         const oe = ee._meshDisposables.get(He);
-         oe && (ee._meshDisposables.delete(He), (0, qe.c)(ee.surface.engine, (() => oe.forEach((ee => ee())))));
-         const Re = Fe.o;
-         let ke;
-         for (let ee = Ke.length; ee--;) Ke[ee].mesh === He && (ke = Ke.splice(ee, 1)[0]);
-         ie._csmGen = -~ie._csmGen;
-         const fe = Je(ee, He);
-         if (Re) {
-           const ee = Re.indexOf(ke);
-           ee < 0 ? Re.push(fe) : Re[ee] = fe
+         return new CW(WW, iW)
+       }
+       static cursor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         return fW.create(WW, WW, (0 == iW ? 0 : iW < 0 ? 8 : 16) | (null == OW ? 7 : Math.min(6, OW)) | (null !== mW && void 0 !== mW ? mW : 16777215) << 6)
+       }
+       static range(WW, iW, OW, mW, EW) {
+         let NW = (null !== OW && void 0 !== OW ? OW : 16777215) << 6 | (null == mW ? 7 : Math.min(6, mW));
+         return EW || WW == iW || (EW = iW < WW ? 1 : -1), iW < WW ? fW.create(iW, WW, 48 | NW) : fW.create(WW, iW, (EW ? EW < 0 ? 8 : 16 : 0) | NW)
+       }
+       static normalized(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = WW[iW];
+         WW.sort(((WW, iW) => WW.from - iW.from)), iW = WW.indexOf(OW);
+ ... (8 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L881` → after: `L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L965) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L881)

```diff
-         ye = Ke.push(fe)
+         return new CW(WW, iW)
```

#### 52. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L883-L895` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L967) · [Before (L883-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L883-L895)

```diff
-       if (ye && (Ke.sort(((ee, ie) => ee.order - ie.order)), ee._renderableVersion++, ee._materialEpoch++), ie.length = 0, !Me) return be;
-       const Ue = Me;
-       return He.e(671).then((() => He(63923))).then((ie => {
-         let {
-           C: He
-         } = ie;
-         return He(ee, Ue, be)
-       }), (ie => {
-         const He = ee._runtimeBuilds;
-         He ? He._x(ie) : console.error(ie)
-       }))
-     }
-     var xe = null;
+     }
```

#### 53. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L898-L944` → after: `L970-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L970-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L970-L1026) · [Before (L898-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L898-L944)

```diff
-       const He = ee.engine,
-         be = {
-           _kind: "yp",
-           surface: ee,
-           clearColor: {
-             r: .2,
-             g: .2,
-             b: .3,
-             a: 1
-           },
-           camera: null,
-           lights: [],
-           meshes: [],
-           animationGroups: [],
-           fog: null,
-           clipPlane: null,
- ... (31 more removed lines; see GitHub link above)
+       for (let OW of WW.kj)
+         if (OW.to > iW) throw new RangeError("Selection points outside of document")
+     }
+     let BW = 0;
+     class qW {
+       constructor(WW, iW, OW, mW, EW) {
+         this.combine = WW, this.compareInput = iW, this.compare = OW, this.isStatic = mW, this.id = BW++, this.default = WW([]), this.extensions = "function" == typeof EW ? EW(this) : EW
+       }
+       get reader() {
+         return this
+       }
+       static define() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         return new qW(WW.combine || (WW => WW), WW.compareInput || ((WW, iW) => WW === iW), WW.compare || (WW.combine ? (WW, iW) => WW === iW : RW), !!WW.static, WW.enables)
+       }
+       of(WW) {
+ ... (41 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L946-L948` → after: `L1028-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1028-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1028-L1034) · [Before (L946-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L946-L948)

```diff
-           _record: () => be._frameGraph.execute(),
-           _resize() {
-             be._frameGraph.build()
+           reconfigure: (WW, iW) => {
+             let LW, cW = iW.config.address[EW];
+             if (null != cW) {
+               let EW = ti(iW, cW);
+               if (this.dependencies.every((OW => OW instanceof qW ? iW.facet(OW) === WW.facet(OW) : !(OW instanceof FW) || iW.field(OW, !1) == WW.field(OW, !1))) || (PW ? IW(LW = OW(WW), EW, mW) : mW(LW = OW(WW), EW))) return WW.values[NW] = EW, 0
+             } else LW = OW(WW);
+             return WW.values[NW] = LW, 1
```

#### 55. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L950-L1028` → after: `L1036-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1036-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1036-L1038) · [Before (L950-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L950-L1028)

```diff
-         },
-         Ke = function() {
-           const ee = {
-             _tasks: [],
-             _currentProcessedTask: null,
-             build() {
-               for (let ie = 0; ie < ee._tasks.length; ie++) Me(ee, ee._tasks[ie]);
-               for (const ie of ee._tasks)
-                 for (const ee of ie._passes) ee._initialize()
-             },
-             execute() {
-               let ie = 0;
-               for (const He of ee._tasks)
-                 if (!1 !== He.executionEnabled)
-                   if (He.execute) ie += He.execute();
-                   else
- ... (63 more removed lines; see GitHub link above)
+         }
+       }
+     }
```

#### 56. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1031-L1071` → after: `L1041-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1041-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1041-L1050) · [Before (L1031-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1031-L1071)

```diff
-       let Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       (ie < 1 || He < 1) && (0, ye.b)(676, ie, He);
-       const Je = ee._device,
-         oe = Ue.mipMaps ?? !1,
-         Re = Ue.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         ke = oe ? (0, Fe.e)(ie, He) : 1,
-         qe = Je.createTexture({
-           size: {
-             width: ie,
-             height: He
-           },
-           format: Re,
-           mipLevelCount: ke,
-           usage: be.i.TEXTURE_BINDING | be.i.COPY_DST | be.i.RENDER_ATTACHMENT
-         }),
-         fe = {
- ... (25 more removed lines; see GitHub link above)
+       if (WW.length != iW.length) return !1;
+       for (let mW = 0; mW < WW.length; mW++)
+         if (!OW(WW[mW], iW[mW])) return !1;
+       return !0
+     }
+ 
+     function aW(WW, iW) {
+       let OW = !1;
+       for (let mW of iW) 1 & wi(WW, mW) && (OW = !0);
+       return OW
```

#### 57. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1075-L1091` → after: `L1054-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1054-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1054-L1090) · [Before (L1075-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1075-L1091)

```diff
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const be = ye.invertY ?? !0,
-         Me = ye.premultiplyAlpha ?? !1;
-       ee._device.queue.copyExternalImageToTexture({
-         source: He,
-         flipY: be
-       }, {
-         texture: ie.texture,
-         premultipliedAlpha: Me
-       }, [ie.width, ie.height]);
-       const Ke = ie._recoverySource;
-       Ke && "dynamic" === Ke.kind && (Ke.source = He, Ke.flipY = be, Ke.premultipliedAlpha = Me), ie.texture.mipLevelCount > 1 && (0, Ue.generateMipmaps)(ee, ie.texture)
-     }
-   },
-   44880: (ee, ie, He) => {
-     He.d(ie, {
- ... (1 more removed lines; see GitHub link above)
+       let mW = OW.map((iW => WW[iW.id])),
+         EW = OW.map((WW => WW.type)),
+         NW = mW.filter((WW => !(1 & WW))),
+         PW = WW[iW.id] >> 1;
+ 
+       function LW(WW) {
+         let OW = [];
+         for (let iW = 0; iW < mW.length; iW++) {
+           let NW = ti(WW, mW[iW]);
+           if (2 == EW[iW])
+             for (let WW of NW) OW.push(WW);
+           else OW.push(NW)
+         }
+         return iW.combine(OW)
+       }
+       return {
+ ... (21 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1093-L1169` → after: `L1092-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1092-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1092-L1211) · [Before (L1093-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1093-L1169)

```diff
-     var ye = He(44844),
-       be = He(44851),
-       Me = He(44856),
-       Ke = He(44858),
-       Ue = He(44870);
-     async function Fe(ee, ie) {
-       let Fe = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [Je, oe] = function(ee) {
-         const ie = ee,
-           He = [
-             [ie.displayWidth, ie.displayHeight],
-             [ie.videoWidth, ie.videoHeight],
-             [ie.naturalWidth, ie.naturalHeight],
-             [ie.width, ie.height]
-           ];
-         for (const [ye, be] of He)
- ... (61 more removed lines; see GitHub link above)
+     class FW {
+       constructor(WW, iW, OW, mW, EW) {
+         this.id = WW, this.createF = iW, this.updateF = OW, this.compareF = mW, this.spec = EW, this.provides = void 0
+       }
+       static define(WW) {
+         let iW = new FW(BW++, WW.create, WW.update, WW.compare || ((WW, iW) => WW === iW), WW);
+         return WW.provide && (iW.provides = WW.provide(iW)), iW
+       }
+       create(WW) {
+         let iW = WW.facet(zW).find((WW => WW.field == this));
+         return ((null === iW || void 0 === iW ? void 0 : iW.create) || this.createF)(WW)
+       }
+       slot(WW) {
+         let iW = WW[this.id] >> 1;
+         return {
+           create: WW => (WW.values[iW] = this.create(WW), 1),
+ ... (104 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1171-L1183` → after: `L1213-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1213-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1213-L1228) · [Before (L1171-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1171-L1183)

```diff
-             const [Ue, Fe] = await Promise.all([ze.popErrorScope(), ze.popErrorScope()]);
-             if (He) throw He;
-             const Je = Fe ?? Ue;
-             if (Je) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Je.message}`, {
-               cause: Je
-             });
-             const oe = Xe.texture;
-             return oe && Me || (0, ye.b)(677), {
-               texture: oe,
-               view: oe.createView(),
-               sampler: Me,
-               width: Re,
-               height: ke
+             return NW(WW, ii), mW.reduce(((WW, iW) => WW.concat(iW)))
+           }(WW, iW, NW)) ZW instanceof FW ? mW.push(ZW) : (EW[ZW.facet.id] || (EW[ZW.facet.id] = [])).push(ZW);
+         let PW = Object.create(null),
+           LW = [],
+           cW = [];
+         for (let ZW of mW) PW[ZW.id] = cW.length << 1, cW.push((WW => ZW.slot(WW)));
+         let wW = null === OW || void 0 === OW ? void 0 : OW.config.facets;
+         for (let ZW in EW) {
+           let WW = EW[ZW],
+             iW = WW[0].facet,
+             mW = wW && wW[ZW] || [];
+           if (WW.every((WW => 0 == WW.type)))
+             if (PW[iW.id] = LW.length << 1 | 1, RW(mW, WW)) LW.push(OW.facet(iW));
+             else {
+               let mW = iW.combine(WW.map((WW => WW.value)));
+               LW.push(OW && iW.compare(mW, OW.facet(iW)) ? OW.facet(iW) : mW)
```

#### 60. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1185-L1210` → after: `L1230-L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1230-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1230-L1442) · [Before (L1185-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1185-L1210)

```diff
-           }, te = await (ee._dlr?.x(Te, Re, ke, Be, Ee, Oe, de, fe, We)) ?? await We(Te);
-         return (0, Me.c)(te), te
-       } catch (ze) {
-         throw Xe.texture?.destroy(), ze
-       } finally {
-         pe?.close()
-       }
-     }
-   },
-   44862: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       generateMipmaps: () => qe,
-       recordMipmaps: () => fe
-     });
-     var ye = He(44851),
-       be = He(44858),
- ... (10 more removed lines; see GitHub link above)
+           else {
+             for (let iW of WW) 0 == iW.type ? (PW[iW.id] = LW.length << 1 | 1, LW.push(iW.value)) : (PW[iW.id] = cW.length << 1, cW.push((WW => iW.dynamicSlot(WW))));
+             PW[iW.id] = cW.length << 1, cW.push((OW => rW(OW, iW, WW)))
+           }
+         }
+         let tW = cW.map((WW => WW(PW)));
+         return new ci(WW, NW, tW, PW, LW, EW)
+       }
+     }
+ 
+     function wi(WW, iW) {
+       if (1 & iW) return 2;
+       let OW = iW >> 1,
+         mW = WW.status[OW];
+       if (4 == mW) throw new Error("Cyclic dependency between fields and/or facets");
+       if (2 & mW) return mW;
+ ... (197 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1213-L1223` → after: `L1445-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1445-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1445-L1635) · [Before (L1213-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1213-L1223)

```diff
-       const ie = ee._device;
-       ie !== Re && (Ue?.clear(), Ue = null, Fe = null, Je = null, oe = null, Re = null, Re = ie), Fe ??= ie.createShaderModule({
-         code: Ke
-       }), Je ??= function(ee) {
-         return (0, be.d)(ee, Me)
-       }(ee), oe ??= ie.createBindGroupLayout({
-         entries: [{
-           binding: 0,
-           visibility: ye.f.FRAGMENT,
-           texture: {
-             sampleType: "float"
+       return iW => {
+         if (!/\S/.test(iW)) return ui.Space;
+         if (function(WW) {
+             if (di) return di.test(WW);
+             for (let iW = 0; iW < WW.length; iW++) {
+               let OW = WW[iW];
+               if (/\w/.test(OW) || OW > "\x80" && (OW.toUpperCase() != OW.toLowerCase() || oi.test(OW))) return !0
+             }
+             return !1
+           }(iW)) return ui.Word;
+         for (let OW = 0; OW < WW.length; OW++)
+           if (iW.indexOf(WW[OW]) > -1) return ui.Word;
+         return ui.Other
+       }
+     }
+     class vi {
+ ... (175 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1225-L1230` → after: `L1637-L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1637-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1637-L1900) · [Before (L1225-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1225-L1230)

```diff
-         }, {
-           binding: 1,
-           visibility: ye.f.FRAGMENT,
-           sampler: {}
-         }]
-       })
+         }
+       for (let EW in iW) void 0 === mW[EW] && (mW[EW] = iW[EW]);
+       return mW
+     }
+     vi.allowMultipleSelections = xi, vi.tabSize = qW.define({
+       combine: WW => WW.length ? WW[0] : 4
+     }), vi.lineSeparator = li, vi.readOnly = Ui, vi.phrases = qW.define({
+       compare(WW, iW) {
+         let OW = Object.keys(WW),
+           mW = Object.keys(iW);
+         return OW.length == mW.length && OW.every((OW => WW[OW] == iW[OW]))
+       }
+     }), vi.languageData = Zi, vi.changeFilter = Ai, vi.transactionFilter = bi, vi.transactionExtender = ji, Pi.reconfigure = Ki.define();
+     class Di {
+       eq(WW) {
+         return this == WW
+ ... (248 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1234-L1236` → after: `L1904-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L1904-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L1904-L2004) · [Before (L1234-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1234-L1236)

```diff
-       const ye = ee._device,
-         be = ye.createCommandEncoder();
-       fe(ee, ie, be, He), ye.queue.submit([be.finish()])
+       let mW = new Map;
+       for (let NW of WW)
+         for (let WW = 0; WW < NW.chunk.length; WW++) NW.chunk[WW].tEW <= 0 && mW.set(NW.chunk[WW], NW.chunkPos[WW]);
+       let EW = new Set;
+       for (let NW of iW)
+         for (let WW = 0; WW < NW.chunk.length; WW++) {
+           let iW = mW.get(NW.chunk[WW]);
+           null == iW || (OW ? OW.mapPos(iW) : iW) != NW.chunkPos[WW] || (null === OW || void 0 === OW ? void 0 : OW.touchesRange(iW, iW + NW.chunk[WW].length)) || EW.add(NW.chunk[WW])
+         }
+       return EW
+     }
+     class Gi {
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.layer = WW, this.skip = iW, this.ZEW = OW, this.rank = mW
+       }
+ ... (85 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1239-L1262` → after: `L2007-L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L2007-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L2007-L2051) · [Before (L1239-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1239-L1262)

```diff
-     function fe(ee, ie, He, ye) {
-       if (ie.mipLevelCount <= 1) return;
-       const be = ee._device,
-         Me = function(ee, ie) {
-           const He = ee._device;
-           ke(ee), Ue ??= new Map;
-           let ye = Ue.get(ie);
-           return ye || (ye = He.createRenderPipeline({
-             layout: He.createPipelineLayout({
-               bindGroupLayouts: [oe]
-             }),
-             vertex: {
-               module: Fe,
-               entryPoint: "vs"
-             },
-             fragment: {
- ... (8 more removed lines; see GitHub link above)
+     function ai(WW, iW) {
+       for (let OW = WW[iW];;) {
+         let mW = 1 + (iW << 1);
+         if (mW >= WW.length) break;
+         let EW = WW[mW];
+         if (mW + 1 < WW.length && EW.compare(WW[mW + 1]) >= 0 && (EW = WW[mW + 1], mW++), OW.compare(EW) < 0) break;
+         WW[mW] = OW, WW[iW] = EW, iW = mW
+       }
+     }
+     class ri {
+       constructor(WW, iW, OW) {
+         this.ZEW = OW, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ii.from(WW, iW, OW)
+       }
+       goto(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
+         return this.cursor.goto(WW, iW), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = WW, this.endSide = iW, this.openStart = -1, this.next(), this
+ ... (29 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1264-L1305` → after: `L2053-L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L2053-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L2053-L2083) · [Before (L1264-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1264-L1305)

```diff
-           }), Ue.set(ie, ye)), ye
-         }(ee, ie.format),
-         Ke = null != ye ? {
-           dimension: "2d",
-           baseArrayLayer: ye,
-           arrayLayerCount: 1
-         } : {};
-       for (let Ue = 1; Ue < ie.mipLevelCount; Ue++) {
-         const ee = ie.createView({
-             baseMipLevel: Ue - 1,
-             mipLevelCount: 1,
-             ...Ke
-           }),
-           ye = ie.createView({
-             baseMipLevel: Ue,
-             mipLevelCount: 1,
- ... (26 more removed lines; see GitHub link above)
+             this.removeActive(mW), OW && Qi(OW, mW)
+           } else {
+             if (!this.cursor.value) {
+               this.to = this.endSide = 1e9;
+               break
+             }
+             if (this.cursor.from > WW) {
+               this.to = this.cursor.from, this.endSide = this.cursor.startSide;
+               break
+             } {
+               let WW = this.cursor.value;
+               if (WW.point) {
+                 if (!(iW && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
+                   this.point = WW, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = WW.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
+                   break
+                 }
+ ... (15 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1308-L1309` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L2114) · [Before (L1308-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1308-L1309)

```diff
-   },
-   44870: (ee, ie, He) => {
+ 
```

#### 67. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1311` → after: `L2116-L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L2116-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L2116-L2117) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1311)

```diff
-       return Math.floor(Math.log2(Math.max(ee, ie))) + 1
+       for (let OW = iW, mW = WW.length - 1; OW < mW; OW++) WW[OW] = WW[OW + 1];
+       WW.pop()
```

#### 68. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1329-L1363` → after: `L2120-L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L2120-L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L2120-L2136) · [Before (L1329-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1329-L1363)

```diff
-     function Je(ee, ie, He, Ue) {
-       let Je = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (ie < 1 || He < 1 || Ue < 1) && (0, ye.b)(722, ie, He, Ue);
-       const oe = ee._device,
-         Re = Je.mipMaps ?? !0,
-         ke = Je.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         qe = oe.createTexture({
-           size: {
-             width: ie,
-             height: He,
-             depthOrArrayLayers: Ue
-           },
-           dimension: "2d",
-           format: ke,
-           mipLevelCount: Re ? (0, Fe.e)(ie, He) : 1,
-           usage: be.i.TEXTURE_BINDING | be.i.COPY_DST | be.i.RENDER_ATTACHMENT
- ... (19 more removed lines; see GitHub link above)
+     function WO(WW, iW, OW) {
+       for (let mW = WW.length - 1; mW >= iW; mW--) WW[mW + 1] = WW[mW];
+       WW[iW] = OW
+     }
+ 
+     function iO(WW, iW) {
+       let OW = -1,
+         mW = 1e9;
+       for (let EW = 0; EW < iW.length; EW++)(iW[EW] - mW || WW[EW].endSide - WW[OW].endSide) < 0 && (OW = EW, mW = iW[EW]);
+       return OW
+     }
+ 
+     function OO(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length,
+         mW = 0;
+       for (let EW = 0; EW < OW && EW < WW.length;) 9 == WW.charCodeAt(EW) ? (mW += iW - mW % iW, EW++) : (mW++, EW = TW(WW, EW));
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/613.js` (Changed code · before: `L1367-L1378` → after: `L2140-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9R2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5dd0679d8b50c33597723c87da21fff4b1de9e4f3f40d3aef96ebc79a481f8b9) · [After (L2140-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/613.js#L2140-L2145) · [Before (L1367-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/613.js#L1367-L1378)

```diff
-       let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (He < 0 || He >= ie.layers || (0 | He) !== He) && (0, ye.b)(723, ie.layers, He);
-       const Ke = Me.invertY ?? !0,
-         Fe = Me.premultiplyAlpha ?? !1;
-       ee._device.queue.copyExternalImageToTexture({
-         source: be,
-         flipY: Ke
-       }, {
-         texture: ie.texture,
-         origin: [0, 0, He],
-         premultipliedAlpha: Fe
-       }, [ie.width, ie.height, 1]), ie.texture.mipLevelCount > 1 && (0, Ue.generateMipmaps)(ee, ie.texture, He)
+       for (let EW = 0, NW = 0;;) {
+         if (NW >= iW) return EW;
+         if (EW == WW.length) break;
+         NW += 9 == WW.charCodeAt(EW) ? OW - NW % OW : 1, EW = TW(WW, EW)
+       }
+       return !0 === mW ? -1 : WW.length
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/614.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/614.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267e)

#### 1. `bundles/bloxd.io/chunks/js/614.js` (Changed code · before: `L4` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267e) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/614.js#L4-L11) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/614.js#L4)

```diff
-   44936: (ee, ie, He) => {
+   53593: WW => {
+     function iW(WW) {
+       var iW = new Error("Cannot find module '" + WW + "'");
+       throw iW.code = "MODULE_NOT_FOUND", iW
+     }
+     iW.keys = () => [], iW.resolve = iW, iW.id = 53593, WW.exports = iW
+   },
+   53643: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/614.js` (Changed code · before: `L6` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267eR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267e) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/614.js#L13-L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/614.js#L6)

```diff
-       parseShaderPack: () => ye
+       d: () => mW,
+       e: () => EW
```

#### 3. `bundles/bloxd.io/chunks/js/614.js` (Changed code · before: `L10-L26` → after: `L4284-L4285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267eR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267e) · [After (L4284-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/614.js#L4284-L4285) · [Before (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/614.js#L10-L26)

```diff
-       var ie, He;
-       const ye = ee.get("shaderPackUrl"),
-         be = null !== (ie = ee.get("shaderPackMode")) && void 0 !== ie ? ie : "strict";
-       if (null === ye) {
-         if (ee.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
-       }
-       if ("lite" !== ee.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(ee) {
-           return "strict" === ee || "allow" === ee
-         }(be)) throw new Error(`Unknown shaderPackMode "${be}" - use strict or allow`);
-       const Me = (null !== (He = ee.get("variants")) && void 0 !== He ? He : "").split(",").find((ee => ee.trim().startsWith("liteShaderPack")));
-       if (void 0 !== Me) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Me.trim()}`);
-       return {
-         url: ye,
-         mode: be
- ... (1 more removed lines; see GitHub link above)
+       var iW = new Error("Cannot find module '" + WW + "'");
+       throw iW.code = "MODULE_NOT_FOUND", iW
```

#### 4. `bundles/bloxd.io/chunks/js/614.js` (Changed code · before: `L28` → after: `L4287-L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267eR4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7e69aba6d2cdaf3842a940e3bd59f824cc0294742dc998e9473520c854d6267e) · [After (L4287-L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/614.js#L4287-L4296) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/614.js#L28)

```diff
-   }
+     iW.keys = () => [], iW.resolve = iW, iW.id = 53629, WW.exports = iW
+   },
+   53588: () => {},
+   53613: () => {},
+   53603: () => {},
+   53631: () => {},
+   53609: () => {},
+   53605: () => {},
+   53601: () => {},
+   53622: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/615.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/615.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87)

#### 1. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/615.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/615.js#L4)

```diff
-   44963: (ee, ie, He) => {
+   53577: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/615.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/615.js#L6)

```diff
-       b: () => Je
+       e: () => mW
```

#### 3. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L8-L145` → after: `L8-L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L8-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/615.js#L8-L6410) · [Before (L8-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/615.js#L8-L145)

```diff
-     var ye = He(37917),
-       be = He(37938),
-       Me = He(41104),
-       Ke = He(37920),
-       Ue = He(38022);
-     class Fe {
-       constructor(ee, ie, He, ye) {
-         this.name = ee, this.worldAxisForNormal = ie, this.worldAxisForFileX = He, this.worldAxisForFileY = ye
-       }
-     }
-     class Je {
-       static _NearestPow2Floor(ee) {
-         return ee <= 1 ? 1 : 1 << Math.floor(Math.log2(ee))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(ee) {
-         if (!ee.isCube) return null;
- ... (122 more removed lines; see GitHub link above)
+     const mW = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (6387 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L147` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/615.js#L6412) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/615.js#L147)

```diff
-   44954: (ee, ie, He) => {
+   53569: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L149` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/615.js#L6414) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/615.js#L149)

```diff
-       DDSTools: () => fe
+       e: () => mW
```

#### 6. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L151-L429` → after: `L6416-L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R6416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L6416-L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/615.js#L6416-L7363) · [Before (L151-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/615.js#L151-L429)

```diff
-     var ye = He(37938),
-       be = He(39467),
-       Me = He(44963),
-       Ke = He(41178);
-     const Ue = 131072,
-       Fe = 131072;
- 
-     function Je(ee) {
-       return ee.charCodeAt(0) + (ee.charCodeAt(1) << 8) + (ee.charCodeAt(2) << 16) + (ee.charCodeAt(3) << 24)
-     }
-     const oe = Je("DXT1"),
-       Re = Je("DXT3"),
-       ke = Je("DXT5"),
-       qe = Je("DX10");
-     class fe {
-       static GetDDSInfo(ee) {
- ... (263 more removed lines; see GitHub link above)
+     const mW = String.raw`import type {
+ 	GameApi,
+ 	Console,
+ 	EntityId,
+ 	Pos,
+ 	LifeformId,
+ 	PlayerId,
+ 	PlayerDbId,
+ 	LifeformBodyPart,
+ 	PlayerAttemptDamageOtherPlayerOpts,
+ 	HittingSoundOverride,
+ 	DamageCause,
+ 	ItemName,
+ 	EnchantmentAttributes,
+ 	EnchantmentPerk,
+ 	EnchantmentTier,
+ ... (932 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/616.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/616.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27)

#### 1. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/616.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/616.js#L2)

```diff
- export const ids = [615, 616];
+ export const ids = [616];
```

#### 2. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L4-L6` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/616.js#L4-L16) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/616.js#L4-L6)

```diff
-   44978: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       _DDSTextureLoader: () => Me
+   53583: (WW, iW, OW) => {
+     function mW() {
+       return mW = Object.assign ? Object.assign.bind() : function(WW) {
+         for (var iW = 1; iW < arguments.length; iW++) {
+           var OW = arguments[iW];
+           for (var mW in OW)({}).hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
+         }
+         return WW
+       }, mW.apply(null, arguments)
+     }
+     OW.d(iW, {
+       b: () => xW,
+       d: () => LW
```

#### 3. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L8-L24` → after: `L18-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L18-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/616.js#L18-L218) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/616.js#L8-L24)

```diff
-     var ye = He(41104),
-       be = He(44954);
-     class Me {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(ee, ie, He, Me) {
-         const Ke = ie.Nf();
-         let Ue, Fe = !1,
-           Je = 1e3;
-         if (Array.isArray(ee))
-           for (let ye = 0; ye < ee.length; ye++) {
-             const He = ee[ye];
-             Ue = be.DDSTools.GetDDSInfo(He), ie.width = Ue.width, ie.height = Ue.height, Fe = (Ue.isRGB || Ue.isLuminance || Ue.mipmapCount > 1) && ie.generateMipMaps, Ke._unpackFlipY(Ue.isCompressed), be.DDSTools.UploadDDSLevels(Ke, ie, He, Ue, Fe, 6, -1, ye), Ue.isFourCC || 1 ! … [truncated]
-           } else {
-             const Me = ee;
- ... (1 more removed lines; see GitHub link above)
+     var EW = !1;
+     try {
+       EW = "undefined" !== typeof localStorage
+     } catch (AW) {}
+     var NW = "undefined" !== typeof process,
+       PW = EW && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || NW && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(WW) {
+         return ""
+       };
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L26-L468` → after: `L220-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L220-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/616.js#L220-L230) · [Before (L26-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/616.js#L26-L468)

```diff
-         Ke._setCubeMapTextureParams(ie, Fe, Je), ie.isReady = !0, ie.onLoadedObservable.notifyObservers(ie), ie.onLoadedObservable.clear(), Me && Me({
-           isDDS: !0,
-           width: ie.width,
-           info: Ue,
-           data: ee,
-           texture: ie
-         })
-       }
-       loadData(ee, ie, He) {
-         const ye = be.DDSTools.GetDDSInfo(ee),
-           Me = (ye.isRGB || ye.isLuminance || ye.mipmapCount > 1) && ie.generateMipMaps && Math.max(ye.width, ye.height) >> ye.mipmapCount - 1 === 1;
-         He(ye.width, ye.height, Me, ye.isFourCC, (() => {
-           be.DDSTools.UploadDDSLevels(ie.Nf(), ie, ee, ye, Me, 1)
-         }))
-       }
-     }
- ... (427 more removed lines; see GitHub link above)
+         }),
+         updateFile: function(iW) {
+           var OW = EW.has(iW.fileName);
+           return WW.writeFile(iW.fileName, iW.text), EW.set(iW.fileName, iW), OW
+         },
+         deleteFile: function(iW) {
+           var OW = EW.has(iW.fileName);
+           return EW.delete(iW.fileName), WW.deleteFile(iW.fileName), OW
+         }
+       }
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/617.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/617.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79)

#### 1. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L4-L80` → after: `L4-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L4-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L4-L2300) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L4-L80)

```diff
-   44993: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       _ENVTextureLoader: () => te
-     });
-     var ye = He(41044),
-       be = He(37917),
-       Me = He(37938),
-       Ke = He(41104),
-       Ue = He(40924),
-       Fe = He(41111),
-       Je = (He(41199), He(44998)),
-       oe = He(39467),
-       Re = (He(45011), He(45032), He(41175));
-     const ke = "image/png",
-       qe = [134, 22, 135, 150, 246, 214, 150, 54];
- 
- ... (61 more removed lines; see GitHub link above)
+   53597: (WW, iW, OW) => {
+     var mW = "/index.js",
+       EW = {};
+     (WW => {
+       var iW = Object.defineProperty,
+         EW = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (WW, OW) => {
+           for (var mW in OW) iW(WW, mW, {
+             get: OW[mW],
+             enumerable: !0
+           })
+         }),
+         NW = {};
+       EW(NW, {
+         ANONYMOUS: () => r2,
+         AccessFlags: () => wN,
+         AssertionLevel: () => KO,
+ ... (2281 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L82-L85` → after: `L2302-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2302-L2304) · [Before (L82-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L82-L85)

```diff
-       return Promise.all(Me)
-     }
-     async function Be(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
-       return await new Promise(((Re, ke) => {
+ 
+       function jW(WW, iW, OW) {
+         let mW = OW;
```

#### 3. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L87-L98` → after: `L2306-L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2306-L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2306-L2335) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L87-L98)

```diff
-           const He = ie.createTexture(null, !0, !0, null, 1, null, (ee => {
-             ke(ee)
-           }), ee);
-           ye?.onEffectCreatedObservable.addOnce((Ue => {
-             Ue.executeWhenCompiled((() => {
-               ye.externalTextureSamplerBinding = !0, ye.onApply = ye => {
-                 ye._bindTexture("textureSampler", He), ye.setFloat2("scale", 1, ie._features.needsInvertingBitmap && ee instanceof ImageBitmap ? -1 : 1)
-               }, ie.scenes.length && (ie.scenes[0].postProcessManager.directRender([ye], Je, !0, Me, Ke), ie.restoreDefaultFramebuffer(), He.dispose(), URL.revokeObjectURL(be), Re())
-             }))
-           }))
-         } else {
-           if (ie._uploadImageToTexture(oe, ee, Me, Ke), Ue) {
+           let OW = 0;
+           for (const EW of WW) mW = iW(mW, EW, OW), OW++
+         }
+         return mW
+       }
+ 
+       function UW(WW, iW, OW) {
+         const mW = [];
+         sm.assertEqual(WW.length, iW.length);
+         for (let EW = 0; EW < WW.length; EW++) mW.push(OW(WW[EW], iW[EW], EW));
+         return mW
+       }
+ 
+       function kW(WW, iW) {
+         if (WW.length <= 1) return WW;
+         const OW = [];
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L100` → after: `L2337-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2337-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2337-L2397) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L100)

```diff
-             He && ie._uploadImageToTexture(He._texture, ee, Me, 0)
+             if (iW(OW, mW)) return OW
+           }
+       }
+ 
+       function KW(WW, iW, OW) {
+         if (void 0 !== WW)
+           for (let mW = OW ?? WW.length - 1; mW >= 0; mW--) {
+             const OW = WW[mW];
+             if (iW(OW, mW)) return OW
+           }
+       }
+ 
+       function SW(WW, iW, OW) {
+         if (void 0 === WW) return -1;
+         for (let mW = OW ?? 0; mW < WW.length; mW++)
+           if (iW(WW[mW], mW)) return mW;
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L104-L160` → after: `L2400-L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2400-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2400-L2435) · [Before (L104-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L104-L160)

```diff
-       }))
-     }
-     async function Ee(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke;
-       const ye = ee.Nf();
-       ee.format = 5, ee.type = 0, ee.generateMipMaps = !0, ee._cachedAnisotropicFilteringLevel = null, ye.updateTextureSamplingMode(3, ee), await Oe(ee, ie, !0, He), ee.isReady = !0
-     }
-     async function ge(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke,
-         be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const Me = ee.Nf(),
-         Ke = new Ue.b(Me, 5),
-         Je = new Fe.c(Me, Ke);
-       ee._irradianceTexture = Je, Je._dominantDirection = be, Ke.isCube = !0, Ke.format = 5, Ke.type = 0, Ke.generateMipMaps = !0, Ke._cachedAnisotropicFilteringLevel = null, Ke.generateMipMaps = !0, Ke.width = He, Ke.height = He, Me.updateTextureSamplingMode(3, Ke), await Oe(Ke, … [truncated]
-     }
-     async function Oe(ee, ie, be) {
- ... (41 more removed lines; see GitHub link above)
+         return WW
+       }
+ 
+       function HW(WW, iW) {
+         let OW = 0;
+         for (let mW = 0; mW < WW.length; mW++) iW(WW[mW], mW, WW) && (WW[OW] = WW[mW], OW++);
+         WW.length = OW
+       }
+ 
+       function nW(WW) {
+         WW.length = 0
+       }
+ 
+       function uW(WW, iW) {
+         let OW;
+         if (void 0 !== WW) {
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L164-L188` → after: `L2448-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2448-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2448-L2482) · [Before (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L164-L188)

```diff
-       const Oe = [];
-       for (let He = 0; He < ie.length; He++)
-         for (let ye = 0; ye < 6; ye++) {
-           const be = ie[He][ye],
-             Me = (0, Re.j)(be),
-             Ue = new Blob([Me], {
-               type: Ke
-             }),
-             Fe = URL.createObjectURL(Ue);
-           let Je;
-           if (qe._features.forceBitmapOverHTMLImageElement) Je = qe.createImageBitmap(Ue, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none"
-           }).then((async ie => await Be(ie, qe, fe, pe, Fe, ye, He, Te, ze, Xe, ee)));
-           else {
-             const ie = new Image;
- ... (9 more removed lines; see GitHub link above)
+ 
+       function vW(WW, iW) {
+         let OW;
+         if (void 0 !== WW)
+           for (let mW = 0; mW < WW.length; mW++) {
+             const EW = iW(WW[mW], mW);
+             EW && (OW = EO(EW) ? ti(OW, EW) : Li(OW, EW))
+           }
+         return OW ?? wW
+       }
+ 
+       function gW(WW, iW) {
+         const OW = [];
+         if (void 0 !== WW)
+           for (let mW = 0; mW < WW.length; mW++) {
+             const EW = iW(WW[mW], mW);
+ ... (19 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L192` → after: `L2494-L2528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2494-L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2494-L2528) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L192)

```diff
-       if (await Promise.all(Oe), ie.length < oe) {
+         return OW
+       }
+ 
+       function fW(WW, iW) {
+         const OW = [];
+         if (void 0 !== WW)
+           for (let mW = 0; mW < WW.length; mW++) {
+             const EW = iW(WW[mW], mW);
+             void 0 !== EW && OW.push(EW)
+           }
+         return OW
+       }
+ 
+       function* CW(WW, iW) {
+         for (const OW of WW) {
+           const WW = iW(OW);
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L194-L204` → after: `L2530-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2530-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2530-L2564) · [Before (L194-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L194-L204)

```diff
-         const ye = Math.pow(2, oe - 1 - ie.length),
-           be = ye * ye * 4;
-         switch (ee.type) {
-           case 0:
-             He = new Uint8Array(be);
-             break;
-           case 2:
-             He = new Uint16Array(be);
-             break;
-           case 1:
-             He = new Float32Array(be)
+         if (void 0 !== WW) {
+           mW = [];
+           const EW = WW.length;
+           let NW, PW, LW = 0,
+             cW = 0;
+           for (; LW < EW;) {
+             for (; cW < EW;) {
+               if (PW = iW(WW[cW], cW), 0 === cW) NW = PW;
+               else if (PW !== NW) break;
+               cW++
+             }
+             if (LW < cW) {
+               const iW = OW(WW.slice(LW, cW), NW, LW, cW);
+               iW && mW.push(iW), LW = cW
+             }
+             NW = PW, cW++
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L206-L207` → after: `L2566-L2576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2566-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2566-L2576) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L206-L207)

```diff
-         for (let Me = ie.length; Me < oe; Me++)
-           for (let ie = 0; ie < 6; ie++) qe._uploadArrayBufferViewToTexture(Xe?.texture || ee, He, ie, Me)
+         return !1
+       }
+ 
+       function aW(WW, iW, OW) {
+         let mW;
+         for (let EW = 0; EW < WW.length; EW++) iW(WW[EW]) ? mW = void 0 === mW ? EW : mW : void 0 !== mW && (OW(mW, EW), mW = void 0);
+         void 0 !== mW && OW(mW, WW.length)
+       }
+ 
+       function rW(WW, iW) {
+         return void 0 === iW || 0 === iW.length ? WW : void 0 === WW || 0 === WW.length ? iW : [...WW, ...iW]
```

#### 10. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L209-L211` → after: `L2578-L2580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2578-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2578-L2580) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L209-L211)

```diff
-       if (Xe) {
-         const ie = ee._irradianceTexture;
-         ee._irradianceTexture = null, qe._releaseTexture(ee), Xe._swapAndDie(ee), ee._irradianceTexture = ie
+ 
+       function zW(WW, iW) {
+         return iW
```

#### 11. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L216-L225` → after: `L2583-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2583-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2583-L2584) · [Before (L216-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L216-L225)

```diff
-     function de(ee, ie) {
-       const He = (ie = Te(ie)).irradiance;
-       if (!He) return;
-       const ye = new Ke.e;
-       be.p.FromArrayToRef(He.x, 0, ye.x), be.p.FromArrayToRef(He.y, 0, ye.y), be.p.FromArrayToRef(He.z, 0, ye.z), be.p.FromArrayToRef(He.xx, 0, ye.xx), be.p.FromArrayToRef(He.yy, 0, ye.yy), be.p.FromArrayToRef(He.zz, 0, ye.zz), be.p.FromArrayToRef(He.yz, 0, ye.yz), be.p.FromArray … [truncated]
-     }
-     var We = He(45036);
-     class te {
-       constructor() {
-         this.supportCascades = !1
+       function FW(WW) {
+         return WW.map(zW)
```

#### 12. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L227-L228` → after: `L2586-L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2586-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2586-L2587) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L227-L228)

```diff
-       loadCubeData(ee, ie, He, ye, be) {
-         if (Array.isArray(ee)) return;
+ 
+       function QW(WW, iW, OW) {
```

#### 13. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L230-L334` → after: `L2589-L2607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2589-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2589-L2607) · [Before (L230-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L230-L334)

```diff
-         if (Me) {
-           ie.width = Me.width, ie.height = Me.width;
-           try {
-             (0, We.d)(), de(ie, Me), ze(ie, ee, Me).then((() => {
-               ie.isReady = !0, ie.onLoadedObservable.notifyObservers(ie), ie.onLoadedObservable.clear(), ye && ye()
-             }), (ee => {
-               be?.("Can not upload environment levels", ee)
-             }))
-           } catch (Ke) {
-             be?.("Can not upload environment file", Ke)
-           }
-         } else be && be("Can not parse the environment file", null)
-       }
-       loadData() {
-         throw ".env not supported in 2d."
-       }
- ... (89 more removed lines; see GitHub link above)
+         ! function(WW, iW, OW) {
+           iW.sort(((iW, mW) => OW(WW[iW], WW[mW]) || JO(iW, mW)))
+         }(WW, mW, OW);
+         let EW = WW[mW[0]];
+         const NW = [mW[0]];
+         for (let PW = 1; PW < mW.length; PW++) {
+           const OW = mW[PW],
+             LW = WW[OW];
+           iW(EW, LW) || (NW.push(OW), EW = LW)
+         }
+         return NW.sort(), NW.map((iW => WW[iW]))
+       }
+ 
+       function Wi(WW, iW, OW) {
+         return 0 === WW.length ? [] : 1 === WW.length ? WW.slice() : OW ? QW(WW, iW, OW) : function(WW, iW) {
+           const OW = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L336-L337` → after: `L2609-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2609-L2611) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L336-L337)

```diff
-       static _AreaElement(ee, ie) {
-         return Math.atan2(ee * ie, Math.sqrt(ee * ee + ie * ie + 1))
+ 
+       function ii() {
+         return []
```

#### 15. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L339-L356` → after: `L2613-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2613-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2613-L2640) · [Before (L339-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L339-L356)

```diff
-       static _DownsampleFace(ee, ie, He, ye) {
-         const be = ee instanceof Float32Array ? ee : Float32Array.from(ee),
-           Me = He * He * ye,
-           Ke = new Float32Array(Me),
-           Ue = ie / He,
-           Fe = 1 / (Ue * Ue);
-         for (let oe = 0; oe < He; oe++) {
-           const ee = Math.floor(oe * Ue),
-             Me = Math.floor((oe + 1) * Ue);
-           for (let Je = 0; Je < He; Je++) {
-             const Re = Math.floor(Je * Ue),
-               ke = Math.floor((Je + 1) * Ue),
-               qe = (oe * He + Je) * ye;
-             for (let He = 0; He < ye; He++) {
-               let Ue = 0;
-               for (let Ke = ee; Ke < Me; Ke++)
- ... (2 more removed lines; see GitHub link above)
+ 
+       function Oi(WW, iW, OW, mW, EW) {
+         if (0 === WW.length) return WW.push(iW), !0;
+         const NW = Hi(WW, iW, AO, OW);
+         if (NW < 0) {
+           if (mW && !EW) {
+             const OW = ~NW;
+             if (OW > 0 && mW(iW, WW[OW - 1])) return !1;
+             if (OW < WW.length && mW(iW, WW[OW])) return WW.splice(OW, 1, iW), !0
+           }
+           return WW.splice(~NW, 0, iW), !0
+         }
+         return !!EW && (WW.splice(NW, 0, iW), !0)
+       }
+ 
+       function mi(WW, iW, OW) {
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L365-L376` → after: `L2684-L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2684-L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2684-L2792) · [Before (L365-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L365-L376)

```diff
-       static ConvertCubeMapToSphericalPolynomial(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const He = ie > 0 ? this._NearestPow2Floor(ie) : 0;
-         if (He > 0 && ee.size > He) {
-           const ie = 5 === ee.format ? 4 : 3,
-             ye = ["right", "left", "up", "down", "front", "back"],
-             be = {};
-           for (const Me of ye) be[Me] = this._DownsampleFace(ee[Me], ee.size, He, ie);
-           ee = {
-             ...ee,
-             ...be,
-             size: He
+ 
+       function Li(WW, iW) {
+         return void 0 === iW ? WW : void 0 === WW ? [iW] : (WW.push(iW), WW)
+       }
+ 
+       function ci(WW, iW) {
+         return void 0 === WW ? iW : void 0 === iW ? WW : EO(WW) ? EO(iW) ? rW(WW, iW) : Li(WW, iW) : EO(iW) ? Li(iW, WW) : [WW, iW]
+       }
+ 
+       function wi(WW, iW) {
+         return iW < 0 ? WW.length + iW : iW
+       }
+ 
+       function ti(WW, iW, OW, mW) {
+         if (void 0 === iW || 0 === iW.length) return WW;
+         if (void 0 === WW) return iW.slice(OW, mW);
+ ... (93 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L379-L457` → after: `L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2795) · [Before (L379-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L379-L457)

```diff
-         const ye = new Me.c;
-         let Fe = 0;
-         const Je = 2 / ee.size,
-           oe = Je,
-           Re = .5 * Je,
-           ke = Re - 1;
-         for (let Me = 0; Me < 6; Me++) {
-           const ie = this._FileFaces[Me],
-             He = ee[ie.name];
-           let qe = ke;
-           const fe = 5 === ee.format ? 4 : 3;
-           for (let Me = 0; Me < ee.size; Me++) {
-             let Te = ke;
-             for (let oe = 0; oe < ee.size; oe++) {
-               const ke = ie.worldAxisForFileX.scale(Te).add(ie.worldAxisForFileY.scale(qe)).add(ie.worldAxisForNormal);
-               ke.normalize();
- ... (63 more removed lines; see GitHub link above)
+         return ~NW
```

#### 18. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L459-L461` → after: `L2797-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L2797-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L2797-L125584) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(ee, ie) {
-         let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return ie.Nf().isWebGPU ? await He.e(652).then((() => He(63962))) : await He.e(634).then((() => He(63955))), await (0, be.d)("rgbdEncode", ee, ie, ye, 1, 5)
+ 
+       function ui(WW, iW, OW, mW, EW) {
+         if (WW && WW.length > 0) {
+           const NW = WW.length;
+           if (NW > 0) {
+             let PW = void 0 === mW || mW < 0 ? 0 : mW;
+             const LW = void 0 === EW || PW + EW > NW - 1 ? NW - 1 : PW + EW;
+             let cW;
+             for (arguments.length <= 2 ? (cW = WW[PW], PW++) : cW = OW; PW <= LW;) cW = iW(cW, WW[PW], PW), PW++;
+             return cW
+           }
+         }
+         return OW
+       }
+       var oi = Object.prototype.hasOwnProperty;
+ 
+ ... (122772 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L463` → after: `L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/617.js#L125586) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/617.js#L463)

```diff
-     }
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/618.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/618.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a)

#### 1. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L4-L6)

```diff
-   44972: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       _IESTextureLoader: () => Ue
+   53663: (WW, iW, OW) => {
+     OW.d(iW, {
+       collectImportedWorldCodePluginNames: () => wW
```

#### 2. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L8` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L8-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L8)

```diff
-     var ye = He(37938);
+     var mW = OW(3327),
+       EW = OW(38010),
+       NW = OW(53597),
+       PW = OW.n(NW);
```

#### 3. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L11` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L14-L22) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L11)

```diff
-       return ee.split(" ").filter((ee => "" !== ee)).map((ee => parseFloat(ee)))
+       return PW().isImportDeclaration(WW) && PW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
+         const iW = WW.importClause;
+         if (!iW) return !0;
+         if (iW.isTypeOnly) return !1;
+         const OW = iW.namedBindings;
+         return !(OW && !PW().isNamespaceImport(OW)) || !!iW.name || OW.elements.some((WW => !WW.isTypeOnly))
+       }(WW) || PW().isExportDeclaration(WW) && WW.moduleSpecifier && PW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
+         return !WW.isTypeOnly && (!WW.exportClause || !PW().isNamedExports(WW.exportClause) || 0 === WW.exportClause.elements.length || WW.exportClause.elements.some((WW => !WW.isTypeOnly)))
+       }(WW) ? WW.moduleSpecifier.text : PW().isImportEqualsDeclaration(WW) && !WW.isTypeOnly && PW().isExternalModuleReference(WW.moduleReference) && WW.moduleReference.expression && PW().isStringLiteral(WW.moduleReference.expression) ? WW.moduleReference.expression.text : PW().i … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L15-L18` → after: `L26-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L26-L37) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L15-L18)

```diff
-       for (; He.length !== ie;) {
-         const ie = be(ee.lines[ee.index++]);
-         He.push(...ie)
-       }
+       if (!iW.startsWith("./") && !iW.startsWith("../")) return;
+       const EW = ((WW.includes("/") ? WW.slice(0, WW.lastIndexOf("/") + 1) : "") + iW).split("/"),
+         NW = [];
+       for (const mW of EW)
+         if ("" !== mW && "." !== mW)
+           if (".." !== mW) NW.push(mW);
+           else {
+             if (0 === NW.length) return;
+             NW.pop()
+           } const PW = NW.join("/");
+       for (const LW of [PW, `${PW}.ts`, `${PW}.js`])
+         if (LW in OW && !(0, mW.i)(LW)) return LW
```

#### 5. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L21-L44` → after: `L40-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L40-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L40-L63) · [Before (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L21-L44)

```diff
-     function Ke(ee, ie, He) {
-       let be = 0,
-         Me = 0,
-         Ke = 0,
-         Ue = 0,
-         Fe = 0,
-         Je = 0;
-       for (let ye = 0; ye < ee.numberOfHorizontalAngles - 1; ye++)
-         if (He < ee.horizontalAngles[ye + 1] || ye === ee.numberOfHorizontalAngles - 2) {
-           Me = ye, Ke = ee.horizontalAngles[ye], Ue = ee.horizontalAngles[ye + 1];
-           break
-         } for (let ye = 0; ye < ee.numberOfVerticalAngles - 1; ye++)
-         if (ie < ee.verticalAngles[ye + 1] || ye === ee.numberOfVerticalAngles - 2) {
-           be = ye, Fe = ee.verticalAngles[ye], Je = ee.verticalAngles[ye + 1];
-           break
-         } const oe = Ue - Ke,
- ... (8 more removed lines; see GitHub link above)
+     function wW(WW) {
+       const iW = new Set,
+         OW = (0, EW.d)(WW);
+       if (!OW) return [];
+       const mW = [OW],
+         NW = new Set;
+       for (; mW.length > 0;) {
+         const OW = mW.pop();
+         if (!OW || NW.has(OW)) continue;
+         NW.add(OW);
+         const wW = PW().createSourceFile(OW, WW[OW], PW().ScriptTarget.Latest, !1),
+           tW = wW => {
+             const ZW = LW(wW),
+               xW = ZW ? (0, EW.r)(ZW) : null;
+             if (xW) iW.add(xW);
+             else if (ZW) {
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L46-L100` → after: `L65-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L65-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L65-L69) · [Before (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L46-L100)

```diff
-     class Ue {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(ee, ie, He) {
-         const ye = function(ee) {
-           const ie = {
-               lines: new TextDecoder("utf-8").decode(ee).split("\n"),
-               index: 0
-             },
-             He = {
-               version: ie.lines[0],
-               candelaValues: [],
- ... (39 more removed lines; see GitHub link above)
+   },
+   53629: WW => {
+     function iW(WW) {
+       var iW = new Error("Cannot find module '" + WW + "'");
+       throw iW.code = "MODULE_NOT_FOUND", iW
```

#### 7. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L102` → after: `L71-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L71-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/618.js#L71-L79) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/618.js#L102)

```diff
-   }
+     iW.keys = () => [], iW.resolve = iW, iW.id = 53629, WW.exports = iW
+   },
+   53613: () => {},
+   53603: () => {},
+   53631: () => {},
+   53609: () => {},
+   53605: () => {},
+   53601: () => {},
+   53622: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/619.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/619.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be)

#### 1. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L4)

```diff
-   44986: (ee, ie, He) => {
+   53646: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L6)

```diff
-       _BasisTextureLoader: () => ze
+       default: () => SW
```

#### 3. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L8-L11` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L8-L18) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L8-L11)

```diff
-     var ye, be = He(41203),
-       Me = He(39467),
-       Ke = He(41593),
-       Ue = He(40924);
+     var mW = OW(62),
+       EW = OW(5488),
+       NW = OW(1782),
+       PW = OW(1089),
+       LW = OW.n(PW),
+       cW = OW(1532),
+       wW = OW(1172),
+       tW = OW(5460),
+       ZW = OW(5467),
+       xW = OW(5470),
+       lW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L13-L23` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L20-L23) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L13-L23)

```diff
-     function Fe() {
-       const ee = 0,
-         ie = 1,
-         He = 2,
-         ye = 3,
-         be = 6,
-         Me = 8,
-         Ke = 9,
-         Ue = 10,
-         Fe = 14;
-       let Je = null;
+     function AW(WW) {
+       return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     tW.c.registerLanguage("javascript", ZW.e), tW.c.registerLanguage("typescript", xW.b);
```

#### 5. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L25-L42` → after: `L25-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L25-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L25-L154) · [Before (L25-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L25-L42)

```diff
-       function oe(ee, ie, He, ye, be) {
-         const Me = ee.getImageTranscodedSizeInBytes(ie, He, ye);
-         let Ke = new Uint8Array(Me);
-         if (!ee.transcodeImage(Ke, ie, He, ye, 1, 0)) return null;
-         if (be) {
-           Ke = function(ee, ie, He, ye) {
-             const be = new Uint16Array(4),
-               Me = new Uint16Array(He * ye),
-               Ke = He / 4,
-               Ue = ye / 4;
-             for (let Fe = 0; Fe < Ue; Fe++)
-               for (let ye = 0; ye < Ke; ye++) {
-                 const Ue = ie + 8 * (Fe * Ke + ye);
-                 be[0] = ee[Ue] | ee[Ue + 1] << 8, be[1] = ee[Ue + 2] | ee[Ue + 3] << 8, be[2] = (2 * (31 & be[0]) + 1 * (31 & be[1])) / 3 | (2 * (2016 & be[0]) + 1 * (2016 & be[1])) / 3 & 2016 | (2 * (63488 & be[0]) + 1 * (63488 & be[1])) / 3 & 63488, be[3] = (2 * (31 & be[1]) +  … [truncated]
-                 for (let ie = 0; ie < 4; ie++) {
-                   const Ke = ee[Ue + 4 + ie];
- ... (2 more removed lines; see GitHub link above)
+     function bW(WW, iW) {
+       const OW = AW(WW).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${iW}" title="${OW}" aria-label="${OW}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+     }
+ 
+     function jW(WW, iW) {
+       const OW = [],
+         mW = WW.toLowerCase(),
+         EW = iW.toLowerCase();
+       let NW = 0;
+       for (; NW < WW.length;) {
+         const PW = mW.indexOf(EW, NW);
+         if (-1 === PW) {
+           OW.push(WW.slice(NW));
+           break
+         }
+ ... (114 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L46-L57` → after: `L170-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L170-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L170-L230) · [Before (L46-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L46-L57)

```diff
-           }(Ke, 0, ee.getImageWidth(ie, He) + 3 & -4, ee.getImageHeight(ie, He) + 3 & -4)
-         }
-         return Ke
-       }
-       onmessage = Re => {
-         if ("init" === Re.data.action) {
-           if (Re.data.url) try {
-             importScripts(Re.data.url)
-           } catch (ke) {
-             postMessage({
-               action: "error",
-               error: ke
+           }(zW.id, zW.content, QW, aW ? oW : void 0) : ""), [zW, QW, aW, oW]);
+         (0, mW.useEffect)((() => {
+           const WW = uW.current;
+           if (!WW) return;
+           const iW = WW => {
+             var iW, OW, mW, EW, NW;
+             const PW = null === (iW = (OW = WW.target).closest) || void 0 === iW ? void 0 : iW.call(OW, ".DocsCopyButton");
+             if (!PW) return;
+             WW.preventDefault(), WW.stopPropagation();
+             const LW = null !== (mW = null === (EW = PW.parentElement) || void 0 === EW || null === (NW = EW.querySelector("code")) || void 0 === NW ? void 0 : NW.textContent) && void 0 !== mW ? mW : "";
+             navigator.clipboard.writeText(LW.trimEnd()).then((() => {
+               PW.classList.add("Copied"), setTimeout((() => {
+                 PW.classList.remove("Copied")
+               }), 1500)
+             })).catch((WW => {
+               console.warn("Could not copy documentation code", WW)
+ ... (45 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L60-L65` → after: `L257-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L257-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L257-L277) · [Before (L60-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L60-L65)

```diff
-           Je || (Je = BASIS({
-             wasmBinary: Re.data.wasmBinary
-           })), null !== Je && Je.then((ee => {
-             BASIS = ee, ee.initializeBasis(), postMessage({
-               action: "init"
-             })
+         }), [Pi, Li]);
+         const wi = (0, mW.useCallback)((WW => {
+           if (WW) {
+             const [iW, OW] = WW.slice(1).split("-");
+             OW && (BW.current = {
+               docId: iW,
+               subsection: OW
+             }), iW && Ei(iW)
+           }
+         }), [Ei]);
+         (0, mW.useEffect)((() => {
+           const WW = BW.current;
+           WW && hW === WW.docId && (setTimeout((() => {
+             Ni(WW.subsection)
+           }), 0), BW.current = null)
+         })), (0, mW.useEffect)((() => {
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L67-L77` → after: `L279-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L279-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L279-L312) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L67-L77)

```diff
-         } else if ("transcode" === Re.data.action) {
-           const Je = Re.data.config,
-             ke = Re.data.imageData,
-             qe = new BASIS.BasisFile(ke),
-             fe = function(ee) {
-               const ie = ee.getHasAlpha(),
-                 He = ee.getNumImages(),
-                 ye = [];
-               for (let be = 0; be < He; be++) {
-                 const ie = {
-                     levels: []
+         }), [hW, wi]);
+         const ti = Object.values(KW).find((WW => (null === WW || void 0 === WW ? void 0 : WW.pageStep) === qW));
+         return (0, lW.jsx)(sW.j, {
+           tutorial: "docsOverview",
+           step: null !== (SW = null === ti || void 0 === ti ? void 0 : ti.pageStep) && void 0 !== SW ? SW : "docsPanel",
+           text: FW(null !== (YW = null === ti || void 0 === ti ? void 0 : ti.pageText) && void 0 !== YW ? YW : "codeEditor:tutorialDocsPanel"),
+           enabled: JW,
+           placement: "left",
+           onPrevious: ti ? void 0 : TW,
+           children: (0, lW.jsxs)("div", {
+             className: "DocsPanel",
+             ref: nW,
+             children: [(0, lW.jsxs)("div", {
+               className: "DocsSidebar",
+               style: {
+                 width: fW,
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L79-L85` → after: `L314-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L314-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L314-L407) · [Before (L79-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L79-L85)

```diff
-                   He = ee.getNumLevels(be);
-                 for (let ye = 0; ye < He; ye++) {
-                   const He = {
-                     width: ee.getImageWidth(be, ye),
-                     height: ee.getImageHeight(be, ye)
-                   };
-                   ie.levels.push(He)
+                   children: [(0, lW.jsxs)("div", {
+                     className: "SearchResultTitle",
+                     children: [WW.doc.title, (0, lW.jsx)("span", {
+                       className: "SearchResultCount",
+                       children: WW.matchCount
+                     })]
+                   }), (0, lW.jsx)("div", {
+                     className: "SearchResultSnippet",
+                     children: jW(WW.snippet, oW)
+                   })]
+                 }, WW.doc.id))) : EW.b.map((WW => {
+                   const iW = (0, lW.jsxs)("div", {
+                       className: LW()("DocsNavItem", {
+                         Active: WW.id === (null === zW || void 0 === zW ? void 0 : zW.id)
+                       }),
+                       "data-pad-focusable": !0,
+ ... (78 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L87-L129` → after: `L409-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L409-L410) · [Before (L87-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L87-L129)

```diff
-                 ye.push(ie)
-               }
-               return {
-                 hasAlpha: ie,
-                 images: ye
-               }
-             }(qe);
-           let Te = Re.data.ignoreSupportedFormats ? null : function(Je, oe) {
-               let Re = null;
-               Je.supportedCompressionFormats && (Re = Je.supportedCompressionFormats.astc ? Ue : Je.supportedCompressionFormats.bc7 ? be : Je.supportedCompressionFormats.s3tc ? oe.hasAlpha ? ye : He : Je.supportedCompressionFormats.pvrtc ? oe.hasAlpha ? Ke : Me : Je.supportedComp … [truncated]
-               return Re
-             }(Re.data.config, fe),
-             pe = !1;
-           null === Te && (pe = !0, Te = fe.hasAlpha ? ye : He);
-           let Xe = !0;
-           qe.startTranscoding() || (Xe = !1);
- ... (27 more removed lines; see GitHub link above)
+               })]
+             })]
```

#### 11. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L131-L181` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/619.js#L412) · [Before (L131-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/619.js#L131-L181)

```diff
-         }
-       }
-     }! function(ee) {
-       ee[ee.cTFETC1 = 0] = "cTFETC1", ee[ee.cTFETC2 = 1] = "cTFETC2", ee[ee.cTFBC1 = 2] = "cTFBC1", ee[ee.cTFBC3 = 3] = "cTFBC3", ee[ee.cTFBC4 = 4] = "cTFBC4", ee[ee.cTFBC5 = 5] = "cTFBC5", ee[ee.cTFBC7 = 6] = "cTFBC7", ee[ee.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", ee[ee.cTFPVR … [truncated]
-     }(ye || (ye = {}));
-     const Je = {
-       JSModuleURL: `${be.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
-       WasmModuleURL: `${be.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
-     };
-     let oe = null,
-       Re = null,
-       ke = 0;
-     const qe = async () => (oe || (oe = new Promise(((ee, ie) => {
-       Re ? ee(Re) : be.h.LoadFileAsync(be.h.GetBabylonScriptURL(Je.WasmModuleURL)).then((He => {
-         if ("function" !== typeof URL) return ie("Basis transcoder requires an environment with a URL constructor");
-         const ye = URL.createObjectURL(new Blob([`(${Fe})()`], {
- ... (35 more removed lines; see GitHub link above)
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/620.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/620.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147)

#### 1. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L4)

```diff
-   45019: (ee, ie, He) => {
+   53667: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L6)

```diff
-       e: () => Xe
+       ensureLocalBloxdTypes: () => UW
```

#### 3. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L8-L1057` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L8-L17) · [Before (L8-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L8-L1057)

```diff
-     var ye = He(37931),
-       be = He(37917),
-       Me = He(41593),
-       Ke = He(41256),
-       Ue = He(41044),
-       Fe = He(39467),
-       Je = He(41238),
-       oe = He(41269),
-       Re = He(37925),
-       ke = He(40995),
-       qe = He(41216),
-       fe = He(41301);
-     class Te {
-       get renderList() {
-         return this._renderList
-       }
- ... (1034 more removed lines; see GitHub link above)
+     var mW = OW(5506),
+       EW = OW(53577),
+       NW = OW(53569),
+       PW = OW(38001),
+       LW = OW(38010),
+       cW = OW(38018);
+     const wW = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 4. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L1059-L1063` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L19-L20) · [Before (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L1059-L1063)

```diff
-     function Xe(ee, ie, He, ye) {
-       let be = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== be || ye || (be = ""), pe(ee, ie, He, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", be, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         ye && ye(ee)
-       }))
+     function tW(WW) {
+       return WW.replace(/^\//, "")
```

#### 5. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L1066-L1069` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L23-L24) · [Before (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L1066-L1069)

```diff
-     function ze() {
-       Re && (Re?.then((ee => {
-         ee.canvas instanceof HTMLCanvasElement && ee.canvas.remove(), ee.dumpEngine && (ee.dumpEngine.engine.dispose(), ee.dumpEngine.renderer.dispose(), ee.dumpEngine.wrapper.dispose())
-       })), Re = null)
+     function ZW(WW) {
+       return tW((0, LW.v)(WW.name, "")).replace(/\/$/, "")
```

#### 6. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L1079-L1082` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L27-L28) · [Before (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L1079-L1082)

```diff
-     function ge() {
-       if (Ee) return;
-       Ee = !0;
-       Me.h.DumpData = Xe, Me.h.DumpDataAsync = pe, Me.h.DumpFramebuffer = Te
+     function xW(WW) {
+       return WW.typesVfsPath.slice(WW.typesVfsPath.lastIndexOf("/") + 1)
```

#### 7. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L1179-L1364` → after: `L31-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L31-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L31-L42) · [Before (L1179-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L1179-L1364)

```diff
-     function qe(ee, ie, He, ye, be, Me, Ue, Fe) {
-       const Je = ie.Nf();
-       return ie.isReady = !1, be = be ?? ie.samplingMode, ye = ye ?? ie.type, Me = Me ?? ie.format, Ue = Ue ?? ie.width, Fe = Fe ?? ie.height, -1 === ye && (ye = 0), new Promise((oe => {
-         const Re = new Ke.b("postprocess", ee, null, null, 1, null, be, Je, !1, void 0, ye, void 0, null, !1, Me);
-         Re.externalTextureSamplerBinding = !0;
-         const ke = Je.createRenderTargetTexture({
-           width: Ue,
-           height: Fe
-         }, {
-           generateDepthBuffer: !1,
-           generateMipMaps: !1,
-           generateStencilBuffer: !1,
-           samplingMode: be,
-           type: ye,
-           format: Me
-         });
- ... (170 more removed lines; see GitHub link above)
+     function lW(WW) {
+       return JSON.stringify({
+         name: WW.specifier,
+         types: xW(WW)
+       }, null, "\t") + "\n"
+     }
+     async function AW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+       const OW = [];
+       for await (const [mW, EW] of WW.entries()) {
+         const WW = iW ? `${iW}/${mW}` : mW;
+         "directory" !== EW.kind ? OW.push(WW) : OW.push(...await AW(EW, WW))
```

#### 8. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L1368-L1976` → after: `L46-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L46-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L46-L66) · [Before (L1368-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L1368-L1976)

```diff
-     const Te = {
-       CreateResizedCopy: function(ee, ie, He) {
-         let Me = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const Ke = ee.Xx(),
-           Ue = Ke.Nf(),
-           Fe = new be.e("resized" + ee.name, {
-             width: ie,
-             height: He
-           }, Ke, !ee.noMipmap, !0, ee._texture.type, !1, ee.samplingMode, !1);
-         Fe.wrapU = ee.wrapU, Fe.wrapV = ee.wrapV, Fe.uOffset = ee.uOffset, Fe.vOffset = ee.vOffset, Fe.uScale = ee.uScale, Fe.vScale = ee.vScale, Fe.uAng = ee.uAng, Fe.vAng = ee.vAng, Fe.wAng = ee.wAng, Fe.coordinatesIndex = ee.coordinatesIndex, Fe.level = ee.level, Fe.anisotropi … [truncated]
-         const Je = new oe("pass", 1, null, Me ? ye.e.BILINEAR_SAMPLINGMODE : ye.e.NEAREST_SAMPLINGMODE, Ue, !1, 0);
-         return Je.externalTextureSamplerBinding = !0, Je.onEffectCreatedObservable.addOnce((ie => {
-           ie.executeWhenCompiled((() => {
-             Je.onApply = function(ie) {
-               ie.setTexture("textureSampler", ee)
-             };
- ... (593 more removed lines; see GitHub link above)
+     async function bW(WW, iW, OW) {
+       const mW = ZW(iW),
+         EW = await (0, cW.i)(WW, mW);
+       if (!EW) return;
+       const NW = new Set([xW(iW), "package.json"]);
+       if (OW)
+         for (const cW of Object.keys(iW.files)) NW.add(cW);
+       const PW = await AW(EW),
+         LW = new Set;
+       for (const ZW of PW) {
+         if (NW.has(ZW)) continue;
+         await (0, cW.C)(WW, `${mW}/${ZW}`);
+         const iW = ZW.split("/");
+         for (let WW = 1; WW < iW.length; WW++) LW.add(iW.slice(0, WW).join("/"))
+       }
+       const wW = [...LW].sort(((WW, iW) => iW.split("/").length - WW.split("/").length));
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L1979-L2018` → after: `L69-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L69-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/620.js#L69-L107) · [Before (L1979-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/620.js#L1979-L2018)

```diff
-     Me.FragmentUrl = "pass";
-     class Ke extends ye.f {
-       _gatherImports(ee, ie) {
-         ee ? (this._webGPUReady = !0, ie.push(Promise.all([He.e(681).then((() => He(64015)))]))) : ie.push(Promise.all([He.e(682).then((() => He(64018)))])), super._gatherImports(ee, ie)
-       }
-       constructor(ee) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: ee,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || be.b.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: Ke.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
-       }
- ... (24 more removed lines; see GitHub link above)
+ 
+     function jW(WW) {
+       const iW = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const mW of Object.values(PW.e)) iW[mW.specifier] = [`.${mW.typesVfsPath}`];
+       const OW = [];
+       for (const mW of WW)
+         for (const WW of Object.keys(mW.files)) OW.push(tW((0, LW.v)(mW.name, WW)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/621.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/621.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778)

#### 1. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/621.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/621.js#L4)

```diff
-   45043: (ee, ie, He) => {
+   53803: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/621.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/621.js#L6)

```diff
-       _HDRTextureLoader: () => oe
+       installImageBitmapTextureLoader: () => wW
```

#### 3. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L8-L81` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/621.js#L8-L10) · [Before (L8-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/621.js#L8-L81)

```diff
-     var ye = He(37917);
-     class be {
-       static ConvertPanoramaToCubemap(ee, ie, He, ye) {
-         let be, Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!ee) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (ee.length != ie * He * 3) {
-           if (ee.length != ie * He * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           be = 4
-         } else be = 3;
-         return {
-           front: this.CreateCubemapTexture(ye, this.FACE_FRONT, ee, ie, He, Me, Ke, be),
-           back: this.CreateCubemapTexture(ye, this.FACE_BACK, ee, ie, He, Me, Ke, be),
-           left: this.CreateCubemapTexture(ye, this.FACE_LEFT, ee, ie, He, Me, Ke, be),
-           right: this.CreateCubemapTexture(ye, this.FACE_RIGHT, ee, ie, He, Me, Ke, be),
-           up: this.CreateCubemapTexture(ye, this.FACE_UP, ee, ie, He, Me, Ke, be),
- ... (58 more removed lines; see GitHub link above)
+     var mW = OW(41412),
+       EW = OW(53812),
+       NW = OW(4390);
```

#### 4. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L84-L86` → after: `L13-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/621.js#L13-L21) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/621.js#L84-L86)

```diff
-       let He, ye = "";
-       for (let be = ie; be < ee.length - ie && (He = String.fromCharCode(ee[be]), "\n" != He); be++) ye += He;
-       return ye
+       if ("string" === typeof WW) {
+         const OW = (0, NW.h)(WW);
+         return OW ? new Blob([(0, NW.c)(OW.base64)], {
+           type: OW.mimeType || iW
+         }) : null
+       }
+       return WW instanceof Blob ? WW : new Blob([WW], {
+         type: iW
+       })
```

#### 5. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L89-L109` → after: `L44-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/621.js#L44-L63) · [Before (L89-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/621.js#L89-L109)

```diff
-     function Ue(ee) {
-       let ie = Ke(ee, 0);
-       if ("#" != ie[0] || "?" != ie[1]) throw "Bad HDR Format.";
-       let He = !1,
-         ye = !1,
-         be = 0;
-       do {
-         be += ie.length + 1, ie = Ke(ee, be), "FORMAT=32-bit_rle_rgbe" == ie ? ye = !0 : 0 == ie.length && (He = !0)
-       } while (!He);
-       if (!ye) throw "HDR Bad header format, unsupported FORMAT";
-       be += ie.length + 1, ie = Ke(ee, be);
-       const Me = /^-Y (.*) \+X (.*)$/g.exec(ie);
-       if (!Me || Me.length < 3) throw "HDR Bad header format, no size";
-       const Ue = parseInt(Me[2]),
-         Fe = parseInt(Me[1]);
-       if (Ue < 8 || Ue > 32767) throw "HDR Bad header format, unsupported size";
- ... (5 more removed lines; see GitHub link above)
+     function wW() {
+       "idle" === cW && "function" === typeof createImageBitmap && (cW = "pending", async function() {
+         const WW = document.createElement("canvas");
+         WW.width = 1, WW.height = 2;
+         const iW = WW.getContext("2d");
+         if (!iW) throw new Error("2d context unavailable");
+         iW.fillStyle = "#f00", iW.fillRect(0, 0, 1, 1), iW.fillStyle = "#0f0", iW.fillRect(0, 1, 1, 1);
+         const OW = PW(WW.toDataURL(), "");
+         if (!OW) throw new Error("toDataURL did not produce a base64 data URL");
+         const mW = await createImageBitmap(OW, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: "flipY"
+         });
+         iW.drawImage(mW, 0, 0);
+         const EW = iW.getImageData(0, 0, 1, 1).data;
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L111-L172` → after: `L65-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/621.js#L65-L72) · [Before (L111-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/621.js#L111-L172)

```diff
- 
-     function Fe(ee, ie) {
-       return function(ee, ie) {
-         let He = ie.height;
-         const ye = ie.width;
-         let be, Ke, Ue, Fe, oe, Re, ke, qe, fe = ie.dataPosition;
-         const Te = new ArrayBuffer(4 * ye),
-           pe = new Uint8Array(Te),
-           Xe = new ArrayBuffer(ie.width * ie.height * 4 * 3),
-           ze = new Float32Array(Xe);
-         for (; He > 0;) {
-           if (be = ee[fe++], Ke = ee[fe++], Ue = ee[fe++], Fe = ee[fe++], 2 != be || 2 != Ke || 128 & Ue || ie.width < 8 || ie.width > 32767) return Je(ee, ie);
-           if ((Ue << 8 | Fe) != ye) throw "HDR Bad header format, wrong scan line width";
-           for (Re = 0, qe = 0; qe < 4; qe++)
-             for (ke = (qe + 1) * ye; Re < ke;)
-               if (be = ee[fe++], Ke = ee[fe++], be > 128) {
- ... (46 more removed lines; see GitHub link above)
+   },
+   53812: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW.i,
+       f: () => mW.s
+     });
+     var mW = OW(41558);
+     (0, mW.z)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/622.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/622.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5)

#### 1. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L4-L6)

```diff
-   45046: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       _KTXTextureLoader: () => fe
+   53878: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L8-L24` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L8-L19) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L8-L24)

```diff
-     var ye = He(39467);
-     class be {
-       constructor(ee, ie) {
-         if (this.data = ee, this.isInvalid = !1, !be.IsValid(ee)) return this.isInvalid = !0, void ye.e.Error("texture missing KTX identifier");
-         const He = Uint32Array.BYTES_PER_ELEMENT,
-           Me = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * He),
-           Ke = 67305985 === Me.getUint32(0, !0);
-         return this.glType = Me.getUint32(1 * He, Ke), this.glTypeSize = Me.getUint32(2 * He, Ke), this.glFormat = Me.getUint32(3 * He, Ke), this.glInternalFormat = Me.getUint32(4 * He, Ke), this.glBaseInternalFormat = Me.getUint32(5 * He, Ke), this.pixelWidth = Me.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(ee, ie) {
-         switch (this.loadType) {
-           case be.COMPRESSED_2D:
-             this._upload2DCompressedLevels(ee, ie);
-           case be.TEX_2D:
-           case be.COMPRESSED_3D:
-           case be.TEX_3D:
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(53868),
+       EW = OW(53885);
+ 
+     function NW(WW) {
+       (0, EW.d)(WW), (0, mW.s)(WW);
+       const iW = WW._surfaces;
+       for (const OW of iW) OW._renderingContexts.length = 0, OW._ro?.disconnect(), OW._context.unconfigure();
+       iW.length = 0;
+       try {
+         WW._disposeManagedResources?.(), WW._disposeStorageBuffers?.()
+       } finally {
+         WW._device.destroy()
```

#### 3. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L26-L36` → after: `L21-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L21-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L21-L62) · [Before (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L26-L36)

```diff
-       _upload2DCompressedLevels(ee, ie) {
-         let He = be.HEADER_LEN + this.bytesOfKeyValueData,
-           ye = this.pixelWidth,
-           Me = this.pixelHeight;
-         const Ke = ie ? this.numberOfMipmapLevels : 1;
-         for (let be = 0; be < Ke; be++) {
-           const ie = new Int32Array(this.data.buffer, this.data.byteOffset + He, 1)[0];
-           He += 4;
-           for (let Ke = 0; Ke < this.numberOfFaces; Ke++) {
-             const Ue = new Uint8Array(this.data.buffer, this.data.byteOffset + He, ie);
-             ee.Nf()._uploadCompressedDataToTextureDirectly(ee, ee.format, ye, Me, Ue, Ke, be), He += ie, He += 3 - (ie + 3) % 4
+     }
+   },
+   53868: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => xW,
+       f: () => UW,
+       i: () => lW,
+       l: () => AW,
+       o: () => MW,
+       p: () => kW,
+       s: () => sW
+     });
+     var mW = OW(53822);
+     var EW = "Babylon Lite v1.32.0",
+       NW = OW(53875);
+ 
+ ... (26 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L38-L46` → after: `L64-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L64-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L64-L76) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L38-L46)

```diff
-           ye = Math.max(1, .5 * ye), Me = Math.max(1, .5 * Me)
-         }
-       }
-       static IsValid(ee) {
-         if (ee.byteLength >= 12) {
-           const ie = new Uint8Array(ee.buffer, ee.byteOffset, 12);
-           if (171 === ie[0] && 75 === ie[1] && 84 === ie[2] && 88 === ie[3] && 32 === ie[4] && 49 === ie[5] && 49 === ie[6] && 187 === ie[7] && 13 === ie[8] && 10 === ie[9] && 26 === ie[10] && 10 === ie[11]) return !0
-         }
-         return !1
+         });
+       return AW._eager = !0, {
+         engine: WW,
+         canvas: iW,
+         format: tW,
+         msaaSamples: lW,
+         scRT: AW,
+         maxDevicePixelRatio: OW?.maxDevicePixelRatio ?? 1 / 0,
+         _uniqueId: LW++,
+         _context: cW,
+         _configureFormat: wW,
+         _alphaMode: xW,
+         _renderingContexts: []
```

#### 5. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L53-L55` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L80-L85) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L53-L55)

```diff
-     function oe(ee, ie) {
-       const He = ie?.jsDecoderModule || KTX2DECODER;
-       ee && (ee.wasmBaseUrl && (He.Transcoder.WasmBaseUrl = ee.wasmBaseUrl), ee.wasmUASTCToASTC && (He.LiteTranscoder_UASTC_ASTC.WasmModuleURL = ee.wasmUASTCToASTC), ee.wasmUASTCToBC7 && (He.LiteTranscoder_UASTC_BC7.WasmModuleURL = ee.wasmUASTCToBC7), ee.wasmUASTCToRGBA_UNORM &&  … [truncated]
+     function wW(WW) {
+       const iW = WW._context.getCurrentTexture(),
+         OW = WW.scRT;
+       OW._colorTexture = iW, OW._colorView = iW.createView({
+         format: WW.format
+       }), OW._width = iW.width, OW._height = iW.height
```

#### 6. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L59-L155` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L89-L104) · [Before (L59-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L59-L155)

```diff
-       let ie;
-       "undefined" === typeof ee && "undefined" !== typeof KTX2DECODER && (ee = KTX2DECODER), onmessage = He => {
-         if (He.data) switch (He.data.action) {
-           case "init": {
-             const ye = He.data.urls;
-             ye && (ye.jsDecoderModule && "undefined" === typeof ee && (importScripts(ye.jsDecoderModule), ee = KTX2DECODER), oe(ye)), He.data.wasmBinaries && oe(void 0, {
-               ...He.data.wasmBinaries,
-               jsDecoderModule: ee
-             }), ie = new ee.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             ee.KTX2Decoder.DefaultDecoderOptions = He.data.options;
-             break;
- ... (81 more removed lines; see GitHub link above)
+       const iW = WW.canvas;
+       if (!PW(iW)) return;
+       const OW = WW._w ?? iW.clientWidth,
+         mW = WW._h ?? iW.clientHeight;
+       if (!(OW > 0 && mW > 0)) return;
+       const EW = Math.min(globalThis.devicePixelRatio || 1, WW.maxDevicePixelRatio);
+       ZW(WW, OW * EW | 0, mW * EW | 0)
+     }
+ 
+     function ZW(WW, iW, OW) {
+       const mW = WW.canvas,
+         EW = 0 | iW,
+         NW = 0 | OW;
+       if (EW > 0 && NW > 0 && (EW !== mW.width || NW !== mW.height)) {
+         mW.width = EW, mW.height = NW, WW.scRT._width = EW, WW.scRT._height = NW;
+         for (const iW of WW._renderingContexts) iW._resize?.()
```

#### 7. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L157-L159` → after: `L106-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L106-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L106-L138) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L157-L159)

```diff
-       async _uploadAsync(ee, ie, He) {
-         const ye = await this._decodeAsync(ee, He);
-         this._createTexture(ye, ie, He)
+     }
+     var xW = 0;
+ 
+     function lW(WW, iW) {
+       return -1 !== WW._renderingContexts.indexOf(iW)
+     }
+ 
+     function AW(WW, iW) {
+       return -1 === WW._renderingContexts.indexOf(iW) && (WW._renderingContexts.push(iW), !0)
+     }
+     var bW = null;
+     var jW = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
+     async function UW(WW, iW) {
+       const NW = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance",
+         ...bW ? bW() : {}
+ ... (17 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L161-L209` → after: `L140-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L140-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L140-L149) · [Before (L161-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L161-L209)

```diff
-       async _decodeAsync(ee, ie) {
-         const He = this._engine.getCaps(),
-           ye = {
-             astc: !!He.astc,
-             bptc: !!He.bptc,
-             s3tc: !!He.s3tc,
-             pvrtc: !!He.pvrtc,
-             etc2: !!He.etc2,
-             etc1: !!He.etc1
-           };
-         if (ke._WorkerPoolPromise) {
-           const He = await ke._WorkerPoolPromise;
-           return await new Promise(((be, Me) => {
-             He.push(((He, Ke) => {
-               const Ue = ee => {
-                   He.removeEventListener("error", Ue), He.removeEventListener("message", Fe), Me(ee), Ke()
- ... (33 more removed lines; see GitHub link above)
+       let lW, AW, UW, kW;
+       if (xW) {
+         const [{
+           wrapRenderableForFO: WW,
+           lightFoVersion: iW,
+           applyLightFoOffset: mW
+         }, {
+           makePackMeshWorld: EW
+         }] = await Promise.all([OW.e(675).then((() => OW(64479))), OW.e(676).then((() => OW(64482)))]);
+         lW = WW, AW = EW, UW = iW, kW = mW
```

#### 9. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L211-L232` → after: `L151-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L151-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L151-L210) · [Before (L211-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L211-L232)

```diff
-       _createTexture(ee, ie, He) {
-         if ((ee.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
-         this._engine._bindTextureDirectly(3553, ie), He && (He.transcodedFormat = ee.transcodedFormat, He.isInGammaSpace = ee.isInGammaSpace, He.hasAlpha = ee.hasAlpha, He.transcoderName = ee.transcoderName);
-         let ye = !0;
-         switch (ee.transcodedFormat) {
-           case 32856:
-             ie.type = 0, ie.format = 5;
-             break;
-           case 33321:
-             ie.type = 0, ie.format = 6;
-             break;
-           case 33323:
-             ie.type = 0, ie.format = 7;
-             break;
-           default:
-             ie.format = ee.transcodedFormat, ye = !1
- ... (6 more removed lines; see GitHub link above)
+       const sW = {
+           _device: LW
+         },
+         MW = [sW];
+       return Object.assign(sW, {
+         engine: sW,
+         surfaces: MW,
+         _surfaces: MW,
+         _device: LW,
+         _options: iW,
+         drawCallCount: 0,
+         gpuFrameTimeMs: 0,
+         useHighPrecisionMatrix: ZW,
+         useFloatingOrigin: xW,
+         _animFrameId: 0,
+         _renderFn: null,
+ ... (44 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L234-L239` → after: `L212-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L212-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L212-L215) · [Before (L234-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L234-L239)

```diff
-         ie._extension = ".ktx2", ie.isReady = !0, this._engine._bindTextureDirectly(3553, null)
-       }
-       static IsValid(ee) {
-         if (ee.byteLength >= 12) {
-           const ie = new Uint8Array(ee.buffer, ee.byteOffset, 12);
-           if (171 === ie[0] && 75 === ie[1] && 84 === ie[2] && 88 === ie[3] && 32 === ie[4] && 50 === ie[5] && 48 === ie[6] && 187 === ie[7] && 13 === ie[8] && 10 === ie[9] && 26 === ie[10] && 10 === ie[11]) return !0
+         const iW = WW._currentEncoder;
+         for (let WW = 0; WW < OW.length; WW++) {
+           const mW = OW[WW];
+           mW._captureService?.(mW, iW)
```

#### 11. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L241` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L217-L219) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L241)

```diff
-         return !1
+         WW._gpuTimerEnd?.(iW), WW._cbs[0] = iW.finish(), WW._device.queue.submit(WW._cbs), WW._flushGpuRetirements?.(WW), WW.drawCallCount = mW, WW._gpuTimerResolve?.()
+       } finally {
+         WW._currentEncoder = void 0
```

#### 12. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L246-L305` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L240-L243) · [Before (L246-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L246-L305)

```diff
-       switch (ee) {
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
-         case 37841:
- ... (44 more removed lines; see GitHub link above)
+       for (const OW of WW) try {
+         OW()
+       } catch (iW) {
+         console.error("GPU resource retirement failed.", iW)
```

#### 13. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L307-L317` → after: `L245-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L245-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L245-L295) · [Before (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L307-L317)

```diff
-       get isDirty() {
-         return this._isDirty
-       }
-       get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
-         return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
-       }
-       set useRGBAIfASTCBC7NotAvailableWhenUASTC(ee) {
-         this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== ee && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = ee, this._isDirty = !0)
-       }
-       get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
-         return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
+     }
+ 
+     function NW(WW, iW) {
+       WW._flushGpuRetirements ??= PW, (WW._retirements ??= []).push(iW)
+     }
+ 
+     function PW(WW) {
+       const iW = WW._retirements;
+       if (!iW) return;
+       WW._retirements = null;
+       const OW = WW._retiring ??= new Set;
+       OW.add(iW), queueMicrotask((() => {
+         WW._device.queue.onSubmittedWorkDone().then((() => {
+           OW.delete(iW), mW(iW)
+         })).catch((() => {}))
+       }))
+ ... (35 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L319-L320` → after: `L297-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L297-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L297-L338) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L319-L320)

```diff
-       set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(ee) {
-         this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== ee && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = ee, this._isDirty = !0)
+     }
+ 
+     function PW(WW, iW) {
+       if (WW._eager) return void WW._syncEager?.(iW);
+       LW(WW);
+       const OW = WW._descriptor,
+         {
+           width: NW,
+           height: PW
+         } = (WW._resolveSize ?? EW)(OW);
+       WW._width = NW, WW._height = PW;
+       const cW = iW._device;
+       OW.format && (WW._colorTexture = cW.createTexture({
+         label: OW.lbl,
+         size: {
+           width: NW,
+ ... (26 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L322-L323` → after: `L340-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L340-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L340-L427) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L322-L323)

```diff
-       get forceRGBA() {
-         return this._forceRGBA
+     }
+   },
+   53896: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW,
+       g: () => EW,
+       h: () => NW
+     });
+     var mW = Float32Array,
+       EW = Float64Array,
+       NW = Uint32Array
+   },
+   53901: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+ ... (72 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L325-L326` → after: `L429-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L429-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L429-L446) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L325-L326)

```diff
-       set forceRGBA(ee) {
-         this._forceRGBA !== ee && (this._forceRGBA = ee, this._isDirty = !0)
+       let wW = LW.get(cW);
+       return wW || LW.set(cW, wW = EW.createSampler(iW)), wW
+     }
+   },
+   53891: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => DW,
+       e: () => fW
+     });
+     var mW = OW(53875),
+       EW = OW(53868);
+ 
+     function NW(WW, iW) {
+       iW._passes.length = 0, WW._currentProcessedTask = iW;
+       try {
+         iW.record()
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L328-L329` → after: `L448-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L448-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L448-L519) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L328-L329)

```diff
-       get forceR8() {
-         return this._forceR8
+     }
+     var PW = OW(53896);
+ 
+     function LW(WW) {
+       const iW = WW.worldMatrixVersion;
+       if (WW._viewVer === iW) return WW._viewCache;
+       const OW = WW._viewCache,
+         mW = WW.worldMatrix,
+         EW = WW._useFloatingOrigin,
+         NW = EW ? 0 : mW[12],
+         PW = EW ? 0 : mW[13],
+         LW = EW ? 0 : mW[14];
+       return OW[0] = mW[0], OW[1] = mW[4], OW[2] = mW[8], OW[3] = 0, OW[4] = mW[1], OW[5] = mW[5], OW[6] = mW[9], OW[7] = 0, OW[8] = mW[2], OW[9] = mW[6], OW[10] = mW[10], OW[11] = 0, OW[12] = -(mW[0] * NW + mW[1] * PW + mW[2] * LW), OW[13] = -(mW[4] * NW + mW[5] * PW + mW[6] * L … [truncated]
+     }
+     var cW = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L331-L332` → after: `L521-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L521-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L521-L538) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L331-L332)

```diff
-       set forceR8(ee) {
-         this._forceR8 !== ee && (this._forceR8 = ee, this._isDirty = !0)
+       return EW
+     }
+     var UW = OW(53901),
+       kW = new PW.h(1),
+       sW = new PW.e(kW.buffer);
+ 
+     function MW(WW) {
+       let iW = 0;
+       for (const OW of WW) iW += OW._lightVersion ?? 0;
+       return iW
+     }
+ 
+     function KW(WW, iW) {
+       WW.fill(0);
+       let OW = 0;
+       for (const mW of iW) {
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L334-L335` → after: `L540-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L540-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L540-L616) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L334-L335)

```diff
-       get forceRG8() {
-         return this._forceRG8
+       kW[0] = OW, WW[0] = sW[0]
+     }
+ 
+     function SW(WW, iW) {
+       let OW = iW._lightGpuState;
+       const mW = 16 + 16 * UW.b * 4;
+       if (OW && OW._byteSize === mW) return OW;
+       const EW = !OW;
+       OW?._buffer.destroy();
+       const NW = new PW.e(mW / 4);
+       return KW(NW, iW.lights), WW._applyLightFoOffset?.(NW, iW), OW = {
+         _buffer: jW(WW, NW),
+         _scratch: NW,
+         zC: MW(iW.lights) + (WW._lightFoVersion?.(iW) ?? 0),
+         _listVersion: iW._lightListVersion ?? 0,
+         _lightCount: iW.lights.length,
+ ... (61 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L337-L338` → after: `L618-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L618-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L618-L746) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L337-L338)

```diff
-       set forceRG8(ee) {
-         this._forceRG8 !== ee && (this._forceRG8 = ee, this._isDirty = !0)
+     }
+ 
+     function JW(WW, iW, OW) {
+       WW.clr ??= !0;
+       const EW = WW.rt._descriptor,
+         NW = WW.depth?._descriptor,
+         cW = {
+           _colorFormat: EW.format,
+           _depthStencilFormat: NW?.dFormat ?? EW.dFormat,
+           _depthCompare: EW.depthCompare ?? NW?.depthCompare,
+           _sampleCount: EW.samples
+         },
+         tW = {
+           loadOp: "clear",
+           storeOp: "store"
+         },
+ ... (113 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L340-L341` → after: `L748-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L748-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L748-L760) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L340-L341)

```diff
-       get bypassTranscoders() {
-         return this._bypassTranscoders
+       const {
+         _opaqueBindings: tW,
+         _directBindings: ZW,
+         _transparentBindings: xW
+       } = wW;
+       try {
+         for (const OW of iW) {
+           const iW = OW.bind(WW.engine, WW._targetSignature);
+           wW._batchState = WW._targetSignature._collectBatches?.(wW._batchState, iW), OW.isTransparent || OW._transmissive ? xW.push(iW) : OW._direct ? ZW.push(iW) : tW.push(iW)
+         }
+         tW.sort(HW), ZW.sort(HW), OW && oW(WW, WW.engine, !1)
+       } catch (lW) {
+         throw wW._batchState?._release(void 0, NW ?? [cW]), lW
```

#### 22. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L343-L344` → after: `L762-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L762-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L762-L806) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L343-L344)

```diff
-       set bypassTranscoders(ee) {
-         this._bypassTranscoders !== ee && (this._bypassTranscoders = ee, this._isDirty = !0)
+       return OW && (! function(WW, iW) {
+         const OW = WW._config,
+           mW = WW._colorAttachment;
+         mW.view = iW._colorView, WW._renderPassDescriptor.colorAttachments = iW._colorView ? [mW] : [];
+         const EW = OW.depth ?? iW,
+           NW = EW._depthView;
+         let PW;
+         if (NW) {
+           const WW = EW._descriptor,
+             iW = (OW.depth ? EW._eager : !1 === OW.depthClear) ? "load" : "clear";
+           PW = {
+             view: NW,
+             depthClearValue: WW.depthClearValue ?? 0,
+             depthLoadOp: iW,
+             depthStoreOp: "store"
+           }, WW.dFormat?.includes("stencil") && (PW.stencilClearValue = 0, PW.stencilLoadOp = iW, PW.stencilStoreOp = "store")
+ ... (29 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L346-L357` → after: `L808-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L808-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L808-L821) · [Before (L346-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L346-L357)

```diff
-       _getKTX2DecoderOptions() {
-         if (!this._isDirty) return this._ktx2DecoderOptions;
-         this._isDirty = !1;
-         const ee = {};
-         return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (ee.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (ee.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (ee.forceR8 = this._force … [truncated]
-           UASTC: {
-             transcodeFormat: [Ke.BC1_RGB, Ke.BC3_RGBA],
-             yes: {
-               transcodeFormat: Ke.RGBA32,
-               engineFormat: 32856,
-               roundToMultiple4: !1
-             }
+       let tW = LW.length;
+       return iW.executeBundles(cW), iW.setBindGroup(0, wW), tW += eW(iW, WW._directBindings, OW), tW += eW(iW, WW._transparentBindings, OW), tW
+     }
+ 
+     function oW(WW, iW) {
+       let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+       const mW = SW(iW, WW.rb)._buffer;
+       if (mW === WW._lightsUBO) return;
+       const EW = iW._device.createBindGroup({
+         layout: bW(iW),
+         entries: [{
+           binding: 0,
+           resource: {
+             buffer: WW._sceneUBO
```

#### 24. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L359` → after: `L823-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L823-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L823-L842) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L359)

```diff
-         }), this._ktx2DecoderOptions = ee, ee
+         }, {
+           binding: 1,
+           resource: {
+             buffer: mW
+           }
+         }]
+       });
+       WW._lightsUBO = mW, WW._sceneBG = EW, OW && (WW._ob = [])
+     }
+ 
+     function dW(WW, iW) {
+       for (const OW of WW) OW.update?.(iW)
+     }
+ 
+     function eW(WW, iW, OW) {
+       let mW = null,
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L361-L364` → after: `L844-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L844-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L844-L881) · [Before (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L361-L364)

```diff
-     };
-     class fe {
-       constructor() {
-         this.supportCascades = !1
+       return EW
+     }
+ 
+     function vW(WW) {
+       const iW = WW._materialSwapQueue;
+       if (!iW[0] || WW._runtimeBuilds?.w) return;
+       let mW, EW, NW;
+       const PW = WW._renderables;
+       for (const OW of iW) {
+         const iW = OW.material;
+         if (!iW) continue;
+         const LW = OW._runtimeThinBuild;
+         if (LW) {
+           EW = LW(WW, OW, EW);
+           continue
+         }
+ ... (22 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L366-L374` → after: `L883-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L883-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L883-L998) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L366-L374)

```diff
-       loadCubeData(ee, ie, He, ye) {
-         if (Array.isArray(ee)) return;
-         ie._invertVScale = !ie.invertY;
-         const Me = ie.Nf(),
-           Ke = new be(ee, 6),
-           Ue = qe(Ke.glInternalFormat);
-         null !== Ue ? (ie.format = Ue, ie._useSRGBBuffer = Me._getUseSRGBBuffer(!0, !ie.generateMipMaps), ie._gammaSpace = !0) : ie.format = Ke.glInternalFormat;
-         const Fe = Ke.numberOfMipmapLevels > 1 && ie.generateMipMaps;
-         Me._unpackFlipY(!0), Ke.uploadLevels(ie, ie.generateMipMaps), ie.width = Ke.pixelWidth, ie.height = Ke.pixelHeight, Me._setCubeMapTextureParams(ie, Fe, Ke.numberOfMipmapLevels - 1), ie.isReady = !0, ie.onLoadedObservable.notifyObservers(ie), ie.onLoadedObservable.clear(), … [truncated]
+       if (mW && (PW.sort(((WW, iW) => WW.order - iW.order)), WW._renderableVersion++, WW._materialEpoch++), iW.length = 0, !NW) return EW;
+       const LW = NW;
+       return OW.e(680).then((() => OW(64503))).then((iW => {
+         let {
+           C: OW
+         } = iW;
+         return OW(WW, LW, EW)
+       }), (iW => {
+         const OW = WW._runtimeBuilds;
+         OW ? OW._x(iW) : console.error(iW)
+       }))
+     }
+     var gW = null;
+ 
+     function DW(WW, iW) {
+       const OW = WW.engine,
+ ... (100 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L376-L390` → after: `L1000-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1000-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1000-L1006) · [Before (L376-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L376-L390)

```diff
-       loadData(ee, ie, He, Me) {
-         if (be.IsValid(ee)) {
-           ie._invertVScale = !ie.invertY;
-           const ye = new be(ee, 1),
-             Me = qe(ye.glInternalFormat);
-           null !== Me ? (ie.format = Me, ie._useSRGBBuffer = ie.Nf()._getUseSRGBBuffer(!0, !ie.generateMipMaps), ie._gammaSpace = !0) : ie.format = ye.glInternalFormat, He(ye.pixelWidth, ye.pixelHeight, ie.generateMipMaps, !0, (() => {
-             ye.uploadLevels(ie, ie.generateMipMaps)
-           }), ye.isInvalid)
-         } else if (ke.IsValid(ee)) {
-           new ke(ie.Nf())._uploadAsync(ee, ie, Me).then((() => {
-             He(ie.width, ie.height, ie.generateMipMaps, !0, (() => {}), !1)
-           }), (ee => {
-             ye.e.Warn(`Failed to load KTX2 texture data: ${ee.message}`), He(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else ye.e.Error("texture missing KTX identifier"), He(0, 0, !1, !1, (() => {}), !0)
+       return EW._disposables.push((() => PW.dispose())), EW
+     }
+     async function VW(WW) {
+       const iW = WW;
+       for (iW._built || (iW._materialSwapQueue.length = 0); iW._deferredBuilders.length;) {
+         const WW = iW._deferredBuilders.splice(0);
+         await Promise.all(WW.map((WW => WW())))
```

#### 28. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L394` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1018) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L394)

```diff
-   45055: (ee, ie, He) => {
+   53862: (WW, iW, OW) => {
```

#### 29. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L396` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1020-L1021) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L396)

```diff
-       c: () => be
+       e: () => wW,
+       f: () => tW
```

#### 30. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L398-L426` → after: `L1023-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1023-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1023-L1071) · [Before (L398-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L398-L426)

```diff
-     class ye {
-       constructor(ee) {
-         this._pendingActions = new Array, this._workerInfos = ee.map((ee => ({
-           workerPromise: Promise.resolve(ee),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const ee of this._workerInfos) ee.workerPromise.then((ee => {
-           ee.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(ee) {
-         this._executeOnIdleWorker(ee) || this._pendingActions.push(ee)
-       }
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(53822),
+       EW = OW(53828),
+       NW = OW(53833),
+       PW = OW(53836),
+       LW = OW(53845),
+       cW = OW(53853);
+ 
+     function wW(WW, iW, OW) {
+       let LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       (iW < 1 || OW < 1) && (0, mW.c)(676, iW, OW);
+       const wW = WW._device,
+         tW = LW.mipMaps ?? !1,
+         ZW = LW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
+         xW = tW ? (0, cW.d)(iW, OW) : 1,
+         lW = wW.createTexture({
+           size: {
+ ... (33 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L428-L441` → after: `L1073-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1073-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1073-L1190) · [Before (L428-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L428-L441)

```diff
-     class be extends ye {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.DefaultOptions;
-         super([]), this._maxWorkers = ee, this._createWorkerAsync = ie, this._options = He
-       }
-       push(ee) {
-         if (!this._executeOnIdleWorker(ee))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const ie = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(ie), this._execute(ie, ee)
-           } else this._pendingActions.push(ee)
+ 
+     function tW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const EW = mW.invertY ?? !0,
+         NW = mW.premultiplyAlpha ?? !1;
+       WW._device.queue.copyExternalImageToTexture({
+         source: OW,
+         flipY: EW
+       }, {
+         texture: iW.texture,
+         premultipliedAlpha: NW
+       }, [iW.width, iW.height]);
+       const PW = iW._recoverySource;
+       PW && "dynamic" === PW.kind && (PW.source = OW, PW.flipY = EW, PW.premultipliedAlpha = NW), iW.texture.mipLevelCount > 1 && (0, LW.generateMipmaps)(WW, iW.texture)
+     }
+   },
+ ... (102 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L443-L453` → after: `L1192-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1192-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1192-L1305) · [Before (L443-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L443-L453)

```diff
-       _execute(ee, ie) {
-         ee.timeoutId && (clearTimeout(ee.timeoutId), delete ee.timeoutId), super._execute(ee, ((He, ye) => {
-           ie(He, (() => {
-             ye(), ee.idle && (ee.timeoutId = setTimeout((() => {
-               ee.workerPromise.then((ee => {
-                 ee.terminate()
-               }));
-               const ie = this._workerInfos.indexOf(ee); - 1 !== ie && this._workerInfos.splice(ie, 1)
-             }), this._options.idleTimeElapsedBeforeRelease))
-           }))
-         }))
+     }
+   },
+   53845: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       generateMipmaps: () => lW,
+       recordMipmaps: () => AW
+     });
+     var mW = OW(53828),
+       EW = OW(53836),
+       NW = {
+         magFilter: "linear",
+         minFilter: "linear"
+       };
+     var PW = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
+       LW = null,
+       cW = null,
+ ... (98 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L456-L457` → after: `L1308-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L1308-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/622.js#L1308-L1378) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/622.js#L456-L457)

```diff
-     be.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+   },
+   53853: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return Math.floor(Math.log2(Math.max(WW, iW))) + 1
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+   53819: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       d: () => tW
+     });
+     var mW = OW(53822),
+       EW = OW(53828),
+ ... (55 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/623.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/623.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786)

#### 1. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/623.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/623.js#L4-L6)

```diff
-   45058: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       _TGATextureLoader: () => Ue
+   53924: (WW, iW, OW) => {
+     OW.d(iW, {
+       parseShaderPack: () => mW
```

#### 2. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L11` → after: `L10-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/623.js#L10-L22) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/623.js#L11)

```diff
-       let ie = 0;
+       var iW, OW;
+       const mW = WW.get("shaderPackUrl"),
+         EW = null !== (iW = WW.get("shaderPackMode")) && void 0 !== iW ? iW : "strict";
+       if (null === mW) {
+         if (WW.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
+       }
+       if ("lite" !== WW.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(WW) {
+           return "strict" === WW || "allow" === WW
+         }(EW)) throw new Error(`Unknown shaderPackMode "${EW}" - use strict or allow`);
+       const NW = (null !== (OW = WW.get("variants")) && void 0 !== OW ? OW : "").split(",").find((WW => WW.trim().startsWith("liteShaderPack")));
+       if (void 0 !== NW) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${NW.trim()}`);
```

#### 3. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L13-L170` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/623.js#L24-L25) · [Before (L13-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/623.js#L13-L170)

```diff
-         id_length: ee[ie++],
-         colormap_type: ee[ie++],
-         image_type: ee[ie++],
-         colormap_index: ee[ie++] | ee[ie++] << 8,
-         colormap_length: ee[ie++] | ee[ie++] << 8,
-         colormap_size: ee[ie++],
-         origin: [ee[ie++] | ee[ie++] << 8, ee[ie++] | ee[ie++] << 8],
-         width: ee[ie++] | ee[ie++] << 8,
-         height: ee[ie++] | ee[ie++] << 8,
-         pixel_size: ee[ie++],
-         flags: ee[17]
-       }
-     }
- 
-     function Me(ee, ie) {
-       if (ie.length < 19) return void ye.e.Error("Unable to load TGA file - Not enough data to contain header");
- ... (142 more removed lines; see GitHub link above)
+         url: mW,
+         mode: EW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/624.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/624.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76)

#### 1. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L4-L7)

```diff
-   45062: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       ReadExrDataAsync: () => Ri,
-       _ExrTextureLoader: () => oi
+   53951: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => wW
```

#### 2. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L9-L170` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L8-L15) · [Before (L9-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L9-L170)

```diff
-     var ye = He(39467),
-       be = He(37938),
-       Me = He(41178);
-     const Ke = 4,
-       Ue = 4,
-       Fe = 1,
-       Je = 2,
-       oe = 8,
-       Re = 65536,
-       ke = Re >> 3,
-       qe = 14,
-       fe = 65537,
-       Te = 1 << qe,
-       pe = Te - 1,
-       Xe = 59,
-       ze = 63,
- ... (146 more removed lines; see GitHub link above)
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(41506),
+       PW = OW(38249),
+       LW = OW(38372);
+     class cW {
+       constructor(WW, iW, OW, mW) {
+         this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
```

#### 3. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L173-L213` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L18-L20) · [Before (L173-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L173-L213)

```diff
- 
-     function ce(ee, ie) {
-       let He = 0,
-         ye = Math.floor((ee.length + 1) / 2),
-         be = 0;
-       const Me = ee.length - 1;
-       for (; !(be > Me) && (ie[be++] = ee[He++], !(be > Me));) ie[be++] = ee[ye++]
-     }! function(ee) {
-       ee[ee.NO_COMPRESSION = 0] = "NO_COMPRESSION", ee[ee.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", ee[ee.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", ee[ee.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", ee[ee.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", ee[ee.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(Ee || (Ee = {})),
-     function(ee) {
-       ee[ee.INCREASING_Y = 0] = "INCREASING_Y", ee[ee.DECREASING_Y = 1] = "DECREASING_Y"
-     }(ge || (ge = {}));
-     const xe = 20000630;
- 
-     function Le(ee, ie) {
- ... (25 more removed lines; see GitHub link above)
+     class wW {
+       static _NearestPow2Floor(WW) {
+         return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
```

#### 4. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L215-L224` → after: `L22-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L22-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L22-L61) · [Before (L215-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L215-L224)

```diff
-     }
-     const Ce = 32768,
-       ve = 65535;
- 
-     function ue(ee, ie, He, ye, be) {
-       for (; He < ee;) ie = ie << 8 | we(ye, be), He += 8;
-       return {
-         l: ie >> (He -= ee) & (1 << ee) - 1,
-         c: ie,
-         lc: He
+       static ConvertCubeMapTextureToSphericalPolynomial(WW) {
+         if (!WW.isCube) return null;
+         WW.bD()?.VA().flushFramebuffer();
+         const iW = WW.getSize().width,
+           OW = WW._sphericalPolynomialTargetSize,
+           mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
+           EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
+           NW = mW > 0 && mW < iW && EW,
+           PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
+           LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
+           cW = WW.readPixels(0, PW, void 0, !1),
+           wW = WW.readPixels(1, PW, void 0, !1);
+         let tW, ZW;
+         WW.isRenderTarget ? (tW = WW.readPixels(3, PW, void 0, !1), ZW = WW.readPixels(2, PW, void 0, !1)) : (tW = WW.readPixels(2, PW, void 0, !1), ZW = WW.readPixels(3, PW, void 0, !1));
+         const xW = WW.readPixels(4, PW, void 0, !1),
+           lW = WW.readPixels(5, PW, void 0, !1),
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L226-L231` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L63-L64) · [Before (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L226-L231)

```diff
-     }
- 
-     function me(ee, ie, He, ye) {
-       return {
-         c: ee = ee << 8 | we(He, ye),
-         lc: ie += 8
+       static _AreaElement(WW, iW) {
+         return Math.atan2(WW * iW, Math.sqrt(WW * WW + iW * iW + 1))
```

#### 6. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L233-L239` → after: `L66-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L66-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L66-L85) · [Before (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L233-L239)

```diff
-     }
- 
-     function le(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-       if (ee == ie) {
-         if (ye < 8) {
-           const ee = me(He, ye, be, Me);
-           He = ee.c, ye = ee.lc
+       static _DownsampleFace(WW, iW, OW, mW) {
+         const EW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
+           NW = OW * OW * mW,
+           PW = new Float32Array(NW),
+           LW = iW / OW,
+           cW = 1 / (LW * LW);
+         for (let tW = 0; tW < OW; tW++) {
+           const WW = Math.floor(tW * LW),
+             NW = Math.floor((tW + 1) * LW);
+           for (let wW = 0; wW < OW; wW++) {
+             const ZW = Math.floor(wW * LW),
+               xW = Math.floor((wW + 1) * LW),
+               lW = (tW * OW + wW) * mW;
+             for (let OW = 0; OW < mW; OW++) {
+               let LW = 0;
+               for (let PW = WW; PW < NW; PW++)
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L241-L251` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L87-L90) · [Before (L241-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L241-L251)

```diff
-         let ee = He >> (ye -= 8);
-         if (ee = new Uint8Array([ee])[0], Ue.value + ee > Fe) return null;
-         const ie = Ke[Ue.value - 1];
-         for (; ee-- > 0;) Ke[Ue.value++] = ie
-       } else {
-         if (!(Ue.value < Fe)) return null;
-         Ke[Ue.value++] = ee
-       }
-       return {
-         c: He,
-         lc: ye
+         if (WW instanceof Float32Array) return PW;
+         const wW = new(0, WW.constructor)(NW);
+         for (let tW = 0; tW < NW; tW++) wW[tW] = PW[tW] + .5 | 0;
+         return wW
```

#### 8. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L253-L333` → after: `L92-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L92-L103) · [Before (L253-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L253-L333)

```diff
-     }
-     const Se = new Array(59);
- 
-     function ne(ee, ie, He, ye, be, Me) {
-       const Ke = ie;
-       let Ue = 0,
-         Fe = 0;
-       for (; ye <= be; ye++) {
-         if (Ke.value - ie.value > He) return;
-         let Je = ue(6, Ue, Fe, ee, Ke);
-         const oe = Je.l;
-         if (Ue = Je.c, Fe = Je.lc, Me[ye] = oe, oe == ze) {
-           if (Ke.value - ie.value > He) throw new Error("Error in HufUnpackEncTable");
-           Je = ue(8, Ue, Fe, ee, Ke);
-           let oe = Je.l + Be;
-           if (Ue = Je.c, Fe = Je.lc, ye + oe > be + 1) throw new Error("Error in HufUnpackEncTable");
- ... (65 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = iW > 0 ? this._NearestPow2Floor(iW) : 0;
+         if (OW > 0 && WW.size > OW) {
+           const iW = 5 === WW.format ? 4 : 3,
+             mW = ["right", "left", "up", "down", "front", "back"],
+             EW = {};
+           for (const NW of mW) EW[NW] = this._DownsampleFace(WW[NW], WW.size, OW, iW);
+           WW = {
+             ...WW,
+             ...EW,
+             size: OW
```

#### 9. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L336-L360` → after: `L106-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L106-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L106-L132) · [Before (L336-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L336-L360)

```diff
-       }(oe, Ue, Fe, Re),
-       function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-         let Je = 0,
-           oe = 0;
-         const Re = Ke,
-           ke = Math.trunc(ye.value + (be + 7) / 8);
-         for (; ye.value < ke;) {
-           let be = me(Je, oe, He, ye);
-           for (Je = be.c, oe = be.lc; oe >= qe;) {
-             const Ke = ie[Je >> oe - qe & pe];
-             if (Ke.len) {
-               oe -= Ke.len;
-               const ee = le(Ke.lit, Me, Je, oe, He, ye, Ue, Fe, Re);
-               ee && (Je = ee.c, oe = ee.lc)
-             } else {
-               if (!Ke.p) throw new Error("hufDecode issues");
- ... (9 more removed lines; see GitHub link above)
+         const mW = new NW.e;
+         let cW = 0;
+         const wW = 2 / WW.size,
+           tW = wW,
+           ZW = .5 * wW,
+           xW = ZW - 1;
+         for (let NW = 0; NW < 6; NW++) {
+           const iW = this._FileFaces[NW],
+             OW = WW[iW.name];
+           let lW = xW;
+           const AW = 5 === WW.format ? 4 : 3;
+           for (let NW = 0; NW < WW.size; NW++) {
+             let bW = xW;
+             for (let tW = 0; tW < WW.size; tW++) {
+               const xW = iW.worldAxisForFileX.scale(bW).add(iW.worldAxisForFileY.scale(lW)).add(iW.worldAxisForNormal);
+               xW.normalize();
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L362-L363` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L134-L136) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L362-L363)

```diff
-               }
-               if (ie == Ke.lit) throw new Error("HufDecode issues")
+               } else UW = (0, EW.Clamp)(UW, 0, MW), kW = (0, EW.Clamp)(kW, 0, MW), sW = (0, EW.Clamp)(sW, 0, MW);
+               const KW = new LW.b(UW, kW, sW);
+               mW.addLight(xW, KW, jW), cW += jW, bW += wW
```

#### 11. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L367-L397` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L141-L142) · [Before (L367-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L367-L397)

```diff
-         const fe = 8 - be & 7;
-         for (Je >>= fe, oe -= fe; oe > 0;) {
-           const ee = ie[Je << qe - oe & pe];
-           if (!ee.len) throw new Error("HufDecode issues");
-           {
-             oe -= ee.len;
-             const ie = le(ee.lit, Me, Je, oe, He, ye, Ue, Fe, Re);
-             ie && (Je = ie.c, oe = ie.lc)
-           }
-         }
-       }(oe, Re, ee, He, Je, Fe, Me, be, {
-         value: 0
-       })
-     }
- 
-     function he(ee) {
- ... (15 more removed lines; see GitHub link above)
+         const lW = 6 * (4 * Math.PI) / 6 / cW;
+         return mW.scaleInPlace(lW), mW.convertIncidentRadianceToIrradiance(), mW.convertIrradianceToLambertianRadiance(), NW.f.FromHarmonics(mW)
```

#### 12. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L401-L408` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L158-L159) · [Before (L401-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L401-L408)

```diff
-     function re(ee, ie) {
-       const He = he(ee),
-         ye = he(ie),
-         be = He - (ye >> 1) & ve;
-       return {
-         a: ye + be - Ce & ve,
-         b: be
-       }
+     function wW(WW) {
+       return WW.charCodeAt(0) + (WW.charCodeAt(1) << 8) + (WW.charCodeAt(2) << 16) + (WW.charCodeAt(3) << 24)
```

#### 13. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L410-L436` → after: `L161-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L161-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L161-L188) · [Before (L410-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L410-L436)

```diff
- 
-     function Qe(ee, ie, He, ye, be, Me, Ke) {
-       const Ue = Ke < 16384,
-         Fe = He > be ? be : He;
-       let Je, oe, Re = 1;
-       for (; Re <= Fe;) Re <<= 1;
-       for (Re >>= 1, Je = Re, Re >>= 1; Re >= 1;) {
-         oe = 0;
-         const Ke = oe + Me * (be - Je),
-           Fe = Me * Re,
-           ke = Me * Je,
-           qe = ye * Re,
-           fe = ye * Je;
-         let Te, pe, Xe, ze;
-         for (; oe <= Ke; oe += ke) {
-           let be = oe;
- ... (11 more removed lines; see GitHub link above)
+     const tW = wW("DXT1"),
+       ZW = wW("DXT3"),
+       xW = wW("DXT5"),
+       lW = wW("DX10");
+     class AW {
+       static GetDDSInfo(WW) {
+         const iW = new Int32Array(WW.buffer, WW.byteOffset, 31),
+           OW = new Int32Array(WW.buffer, WW.byteOffset, 35);
+         let mW = 1;
+         iW[2] & LW && (mW = Math.max(1, iW[7]));
+         const EW = iW[21],
+           NW = EW === lW ? OW[32] : 0;
+         let PW = 0;
+         switch (EW) {
+           case 113:
+             PW = 2;
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L445-L452` → after: `L191-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L191-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L191-L201) · [Before (L445-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L445-L452)

```diff
-         if (be & Re) {
-           let be = oe;
-           const Me = oe + ye * (He - Je);
-           for (; be <= Me; be += fe) {
-             const He = be + qe;
-             let ye;
-             ye = Ue ? Ge(ee[be + ie], ee[He + ie]) : re(ee[be + ie], ee[He + ie]), Te = ye.a, ee[He + ie] = ye.b, ee[be + ie] = Te
-           }
+         return {
+           width: iW[4],
+           height: iW[3],
+           mipmapCount: mW,
+           isFourCC: 4 === (4 & iW[20]),
+           isRGB: 64 === (64 & iW[20]),
+           isLuminance: (iW[20] & cW) === cW,
+           isCube: 512 === (512 & iW[28]),
+           isCompressed: EW === tW || EW === ZW || EW === xW,
+           dxgiFormat: NW,
+           textureType: PW
```

#### 15. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L456-L467` → after: `L204-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L204-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L204-L218) · [Before (L456-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L456-L467)

```diff
-       return oe
-     }
- 
-     function ei(ee) {
-       return new DataView(ee.array.buffer, ee.offset.value, ee.size)
-     }
- 
-     function ii(ee) {
-       const ie = ee.viewer.buffer.slice(ee.offset.value, ee.offset.value + ee.size),
-         He = new Uint8Array(function(ee) {
-           let ie = ee.byteLength;
-           const He = [];
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         const LW = new Float32Array(mW),
+           cW = new Uint16Array(EW, OW);
+         let wW = 0;
+         for (let tW = 0; tW < iW; tW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + tW * WW);
+             LW[wW] = (0, PW.d)(cW[OW]), LW[wW + 1] = (0, PW.d)(cW[OW + 1]), LW[wW + 2] = (0, PW.d)(cW[OW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = NW : LW[wW + 3] = (0, PW.d)(cW[OW + 3]), wW += 4
+           }
+         return LW
+       }
+       static _GetHalfFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         if (AW.StoreLODInAlphaChannel) {
+           const LW = new Uint16Array(mW),
+             cW = new Uint16Array(EW, OW);
```

#### 16. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L469-L480` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L220-L223) · [Before (L469-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L469-L480)

```diff
-           const be = new DataView(ee);
-           for (; ie > 0;) {
-             const ee = be.getInt8(ye++);
-             if (ee < 0) {
-               const Me = -ee;
-               ie -= Me + 1;
-               for (let ee = 0; ee < Me; ee++) He.push(be.getUint8(ye++))
-             } else {
-               const Me = ee;
-               ie -= 2;
-               const Ke = be.getUint8(ye++);
-               for (let ee = 0; ee < Me + 1; ee++) He.push(Ke)
+           for (let OW = 0; OW < iW; OW++)
+             for (let iW = 0; iW < WW; iW++) {
+               const mW = 4 * (iW + OW * WW);
+               LW[wW] = cW[mW], LW[wW + 1] = cW[mW + 1], LW[wW + 2] = cW[mW + 2], LW[wW + 3] = (0, PW.k)(NW), wW += 4
```

#### 17. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L521-L540` → after: `L227-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L227-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L227-L232) · [Before (L521-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L521-L540)

```diff
-       return new DataView(be.buffer)
-     }
- 
-     function bi(ee) {
-       const ie = ee.viewer,
-         He = {
-           value: ee.offset.value
-         },
-         ye = new Uint16Array(ee.width * ee.scanlineBlockSize * (ee.channels * ee.type)),
-         be = new Uint8Array(ke);
-       let Me = 0;
-       const Ke = new Array(ee.channels);
-       for (let Je = 0; Je < ee.channels; Je++) Ke[Je] = {}, Ke[Je].start = Me, Ke[Je].end = Ke[Je].start, Ke[Je].nx = ee.width, Ke[Je].ny = ee.lines, Ke[Je].size = ee.type, Me += Ke[Je].nx * Ke[Je].ny * Ke[Je].size;
-       const Ue = Ze(ie, He),
-         Fe = Ze(ie, He);
-       if (Fe >= ke) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
- ... (4 more removed lines; see GitHub link above)
+         return new Uint16Array(EW, OW, mW)
+       }
+       static _GetFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         if (AW.StoreLODInAlphaChannel) {
+           const PW = new Float32Array(mW),
+             LW = new Float32Array(EW, OW);
```

#### 18. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L542-L544` → after: `L234-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L234-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L234-L238) · [Before (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L542-L544)

```diff
-           for (let be = 0; be < Re; ++be)(0 == be || ee[be >> 3] & 1 << (7 & be)) && (ie[He++] = be);
-           const ye = He - 1;
-           for (; He < Re;) ie[He++] = 0;
+           for (let OW = 0; OW < iW; OW++)
+             for (let iW = 0; iW < WW; iW++) {
+               const mW = 4 * (iW + OW * WW);
+               PW[cW] = LW[mW], PW[cW + 1] = LW[mW + 1], PW[cW + 2] = LW[mW + 2], PW[cW + 3] = NW, cW += 4
+             }
```

#### 19. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L656-L670` → after: `L243-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L243-L249) · [Before (L656-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L656-L670)

```diff
-       if (1 === be.type) switch (ye) {
-         case Mi.Float:
-           be.getter = Ae, be.inputSize = Je;
-           break;
-         case Mi.HalfFloat:
-           be.getter = Ze, be.inputSize = Je
-       } else {
-         if (2 !== be.type) throw new Error("Unsupported pixelType " + be.type + " for " + ee.compression);
-         switch (ye) {
-           case Mi.Float:
-             be.getter = Pe, be.inputSize = Ue;
-             break;
-           case Mi.HalfFloat:
-             be.getter = Ye, be.inputSize = Ue
-         }
+       static _GetFloatAsHalfFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         const LW = new Uint16Array(mW),
+           cW = new Float32Array(EW, OW);
+         let wW = 0;
+         for (let tW = 0; tW < iW; tW++)
+           for (let iW = 0; iW < WW; iW++) LW[wW] = (0, PW.k)(cW[wW]), LW[wW + 1] = (0, PW.k)(cW[wW + 1]), LW[wW + 2] = (0, PW.k)(cW[wW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = (0, PW.k)(NW) : LW[wW + 3] = (0, PW.k)(cW[wW + 3]), wW += 4;
+         return LW
```

#### 20. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L672-L683` → after: `L251-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L251-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L251-L260) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L672-L683)

```diff
-       be.blockCount = be.height / be.scanlineBlockSize;
-       for (let Ue = 0; Ue < be.blockCount; Ue++) De(ie, He);
-       const Fe = be.width * be.height * be.outputChannels;
-       switch (ye) {
-         case Mi.Float:
-           be.byteArray = new Float32Array(Fe), be.textureType = 1, Ke && be.byteArray.fill(1, 0, Fe);
-           break;
-         case Mi.HalfFloat:
-           be.byteArray = new Uint16Array(Fe), be.textureType = 2, Ke && be.byteArray.fill(15360, 0, Fe);
-           break;
-         default:
-           throw new Error("Unsupported type: " + ye)
+       static _GetFloatAsUIntRGBAArrayBuffer(WW, iW, OW, EW, NW, PW) {
+         const LW = new Uint8Array(EW),
+           cW = new Float32Array(NW, OW);
+         let wW = 0;
+         for (let tW = 0; tW < iW; tW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + tW * WW);
+             LW[wW] = 255 * (0, mW.Clamp)(cW[OW]), LW[wW + 1] = 255 * (0, mW.Clamp)(cW[OW + 1]), LW[wW + 2] = 255 * (0, mW.Clamp)(cW[OW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = PW : LW[wW + 3] = 255 * (0, mW.Clamp)(cW[OW + 3]), wW += 4
+           }
+         return LW
```

#### 21. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L685-L715` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L262-L269) · [Before (L685-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L685-L715)

```diff
-       let oe = 0;
-       for (const Ue of ee.channels) void 0 !== be.decodeChannels[Ue.name] && (be.channelLineOffsets[Ue.name] = oe * be.width), oe += 2 * Ue.pixelType;
-       return be.bytesPerLine = be.width * oe, be.outLineWidth = be.width * be.outputChannels, "INCREASING_Y" === ee.lineOrder ? be.scanOrder = ee => ee : be.scanOrder = ee => be.height - 1 - ee, 4 == be.outputChannels ? (be.format = 5, be.linearSpace = !0) : (be.format = 6, be.li … [truncated]
-     }
- 
-     function Ji(ee, ie, He, ye) {
-       const be = {
-         value: 0
-       };
-       for (let Me = 0; Me < ee.height / ee.scanlineBlockSize; Me++) {
-         const Ke = de(He, ye) - ie.dataWindow.yMin;
-         ee.size = We(He, ye), ee.lines = Ke + ee.scanlineBlockSize > ee.height ? ee.height - Ke : ee.scanlineBlockSize;
-         const Ue = ee.size < ee.lines * ee.bytesPerLine && ee.uncompress ? ee.uncompress(ee) : ei(ee);
-         ye.value += ee.size;
-         for (let He = 0; He < ee.scanlineBlockSize; He++) {
-           const ye = Me * ee.scanlineBlockSize,
- ... (15 more removed lines; see GitHub link above)
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(WW, iW, OW, EW, NW, LW) {
+         const cW = new Uint8Array(EW),
+           wW = new Uint16Array(NW, OW);
+         let tW = 0;
+         for (let ZW = 0; ZW < iW; ZW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + ZW * WW);
+             cW[tW] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW])), cW[tW + 1] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 1])), cW[tW + 2] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 2])), AW.StoreLODInAlphaChannel ? cW[tW + 3] = LW : cW[tW + 3] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 3])), tW … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L717` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L271) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L717)

```diff
-         }
+         return cW
```

#### 23. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L719-L723` → after: `L273-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L273-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L273-L282) · [Before (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L719-L723)

```diff
-     }
-     Ui.DefaultOutputType = Mi.HalfFloat, Ui.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class oi {
-       constructor() {
-         this.supportCascades = !1
+       static _GetRGBAArrayBuffer(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+         const wW = new Uint8Array(mW),
+           tW = new Uint8Array(EW, OW);
+         let ZW = 0;
+         for (let xW = 0; xW < iW; xW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + xW * WW);
+             wW[ZW] = tW[OW + NW], wW[ZW + 1] = tW[OW + PW], wW[ZW + 2] = tW[OW + LW], wW[ZW + 3] = tW[OW + cW], ZW += 4
+           }
+         return wW
```

#### 24. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L725-L726` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L284-L285) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L725-L726)

```diff
-       loadCubeData(ee, ie, He, ye, be) {
-         throw ".exr not supported in Cube."
+       static _ExtractLongWordOrder(WW) {
+         return 0 === WW || 255 === WW || -16777216 === WW ? 0 : 1 + AW._ExtractLongWordOrder(WW >> 8)
```

#### 25. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L728-L744` → after: `L287-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L287-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L287-L296) · [Before (L728-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L728-L744)

```diff
-       loadData(ee, ie, He) {
-         const be = new DataView(ee.buffer),
-           Me = {
-             value: 0
-           },
-           Ke = Le(be, Me);
-         Fi(Ke, be, Me, Ui.DefaultOutputType).then((ee => {
-           Ji(ee, Ke, be, Me);
-           const ye = Ke.dataWindow.xMax - Ke.dataWindow.xMin + 1,
-             Ue = Ke.dataWindow.yMax - Ke.dataWindow.yMin + 1;
-           He(ye, Ue, ie.generateMipMaps, !1, (() => {
-             const He = ie.Nf();
-             ie.format = Ke.format, ie.type = ee.textureType, ie.invertY = !1, ie._gammaSpace = !Ke.linearSpace, ee.byteArray && He._uploadDataToTextureDirectly(ie, ee.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((ee => {
-           ye.e.Error("Failed to load EXR texture: ", ee)
- ... (1 more removed lines; see GitHub link above)
+       static _GetRGBArrayBuffer(WW, iW, OW, mW, EW, NW, PW, LW) {
+         const cW = new Uint8Array(mW),
+           wW = new Uint8Array(EW, OW);
+         let tW = 0;
+         for (let ZW = 0; ZW < iW; ZW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 3 * (iW + ZW * WW);
+             cW[tW] = wW[OW + NW], cW[tW + 1] = wW[OW + PW], cW[tW + 2] = wW[OW + LW], tW += 3
+           }
+         return cW
```

#### 26. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L746-L765` → after: `L298-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L298-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L298-L307) · [Before (L746-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L746-L765)

```diff
-     }
-     async function Ri(ee) {
-       const ie = new DataView(ee),
-         He = {
-           value: 0
-         },
-         be = Le(ie, He);
-       try {
-         const ee = await Fi(be, ie, He, Mi.Float);
-         return Ji(ee, be, ie, He), ee.byteArray ? {
-           width: be.dataWindow.xMax - be.dataWindow.xMin + 1,
-           height: be.dataWindow.yMax - be.dataWindow.yMin + 1,
-           data: new Float32Array(ee.byteArray)
-         } : (ye.e.Error("Failed to decode EXR data: No byte array available."), {
-           width: 0,
-           height: 0,
- ... (4 more removed lines; see GitHub link above)
+       static _GetLuminanceArrayBuffer(WW, iW, OW, mW, EW) {
+         const NW = new Uint8Array(mW),
+           PW = new Uint8Array(EW, OW);
+         let LW = 0;
+         for (let cW = 0; cW < iW; cW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = iW + cW * WW;
+             NW[LW] = PW[OW], LW++
+           }
+         return NW
```

#### 27. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L767-L770` → after: `L309-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L309-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/624.js#L309-L426) · [Before (L767-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/624.js#L767-L770)

```diff
-       return {
-         width: 0,
-         height: 0,
-         data: null
+       static UploadDDSLevels(WW, iW, OW, mW, PW, cW) {
+         let wW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           bW = arguments.length > 7 ? arguments[7] : void 0,
+           jW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           UW = null;
+         mW.sphericalPolynomial && (UW = []);
+         const kW = !!WW.getCaps().s3tc;
+         iW.generateMipMaps = PW;
+         const sW = new Int32Array(OW.buffer, OW.byteOffset, 31);
+         let MW, KW, SW, YW, yW, TW, JW, hW = 0,
+           HW = 0,
+           nW = 1;
+         if (542327876 !== sW[0]) return void EW.b.Error("Invalid magic number in DDS header");
+         if (!mW.isFourCC && !mW.isRGB && !mW.isLuminance) return void EW.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (mW.isCompressed && !kW) return void EW.b.Error("Compressed textures are not supported on this platform.");
+         let uW = sW[22];
+ ... (102 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/625.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/625.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95)

#### 1. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L2)

```diff
- export const ids = [625];
+ export const ids = [624, 625];
```

#### 2. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L4-L6)

```diff
-   45227: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
+   53960: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _DDSTextureLoader: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L8-L14` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L8-L40) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "bumpVertex",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(41506),
+       EW = OW(53948);
+     class NW {
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(WW, iW, OW, NW) {
+         const PW = iW.VA();
+         let LW, cW = !1,
+           wW = 1e3;
+         if (Array.isArray(WW))
+           for (let mW = 0; mW < WW.length; mW++) {
+             const OW = WW[mW];
+             LW = EW.DDSTools.GetDDSInfo(OW), iW.width = LW.width, iW.height = LW.height, cW = (LW.isRGB || LW.isLuminance || LW.mipmapCount > 1) && iW.generateMipMaps, PW._unpackFlipY(LW.isCompressed), EW.DDSTools.UploadDDSLevels(PW, iW, OW, LW, cW, 6, -1, mW), LW.isFourCC || 1 ! … [truncated]
+           } else {
+             const NW = WW;
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L17` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L43) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L17)

```diff
-   45139: (ee, ie, He) => {
+   53951: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L19` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L45) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L19)

```diff
-       d: () => Ke
+       b: () => wW
```

#### 6. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L21-L27` → after: `L47-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L47-L55) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L21-L27)

```diff
-     var ye = He(40954);
-     const be = "bumpVertexDeclaration",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(41506),
+       PW = OW(38249),
+       LW = OW(38372);
+     class cW {
+       constructor(WW, iW, OW, mW) {
+         this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L30` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L186) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L30)

```diff
-   45098: (ee, ie, He) => {
+   53948: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L32` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L188) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L32)

```diff
-       e: () => Ke
+       DDSTools: () => AW
```

#### 9. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L34-L41` → after: `L190-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L190-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L190-L198) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L34-L41)

```diff
-     var ye = He(40954);
-     He(45085), He(45091);
-     const be = "defaultUboDeclaration",
-       Me = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(38285),
+       EW = OW(39911),
+       NW = OW(53951),
+       PW = OW(41586);
+     const LW = 131072,
+       cW = 131072;
+ 
+     function wW(WW) {
+       return WW.charCodeAt(0) + (WW.charCodeAt(1) << 8) + (WW.charCodeAt(2) << 16) + (WW.charCodeAt(3) << 24)
```

#### 10. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L43-L104` → after: `L200-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L200-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/625.js#L200-L466) · [Before (L43-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/625.js#L43-L104)

```diff
-   },
-   45070: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       defaultVertexShader: () => he
-     });
-     var ye = He(40954),
-       be = He(45076);
-     const Me = "defaultVertexDeclaration",
-       Ke = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     ye.d.IncludesShadersStore[Me] || (ye.d.IncludesShadersStore[Me] = Ke);
-     const Ue = {
-       name: Me,
-       shader: Ke
-     };
-     var Fe = He(45085),
-       Je = He(45091),
- ... (46 more removed lines; see GitHub link above)
+     const tW = wW("DXT1"),
+       ZW = wW("DXT3"),
+       xW = wW("DXT5"),
+       lW = wW("DX10");
+     class AW {
+       static GetDDSInfo(WW) {
+         const iW = new Int32Array(WW.buffer, WW.byteOffset, 31),
+           OW = new Int32Array(WW.buffer, WW.byteOffset, 35);
+         let mW = 1;
+         iW[2] & LW && (mW = Math.max(1, iW[7]));
+         const EW = iW[21],
+           NW = EW === lW ? OW[32] : 0;
+         let PW = 0;
+         switch (EW) {
+           case 113:
+             PW = 2;
+ ... (251 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/626.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/626.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2)

#### 1. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L4-L6)

```diff
-   45208: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
+   53970: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _ENVTextureLoader: () => TW
```

#### 2. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L8-L14` → after: `L8-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L8-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L8-L28) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimation",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(41458),
+       EW = OW(38241),
+       NW = OW(38285),
+       PW = OW(41506),
+       LW = OW(41371),
+       cW = OW(41511),
+       wW = (OW(41612), OW(53977)),
+       tW = OW(39911),
+       ZW = (OW(53986), OW(54011), OW(41582));
+     const xW = "image/png",
+       lW = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function AW(WW) {
+       const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       let OW = 0;
+       for (let PW = 0; PW < lW.length; PW++)
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L16-L27` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L30-L37) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L16-L27)

```diff
-   },
-   45116: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bakedVertexAnimationDeclaration",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function bW(WW) {
+       if (WW.version > 2) throw new Error(`Unsupported babylon environment map version "${WW.version}". Latest supported version is "2".`);
+       return 2 === WW.version ? WW : WW = {
+         ...WW,
+         version: 2,
+         imageType: xW
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L29-L40` → after: `L39-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L39-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L39-L52) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L29-L40)

```diff
-   },
-   45114: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bonesDeclaration",
-       Me = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function jW(WW, iW) {
+       const OW = (iW = bW(iW)).specular;
+       let mW = Math.log2(iW.width);
+       if (mW = Math.round(mW) + 1, OW.mipmaps.length !== 6 * mW) throw new Error(`Unsupported specular mipmaps number "${OW.mipmaps.length}"`);
+       const EW = new Array(mW);
+       for (let NW = 0; NW < mW; NW++) {
+         EW[NW] = new Array(6);
+         for (let mW = 0; mW < 6; mW++) {
+           const PW = OW.mipmaps[6 * NW + mW];
+           EW[NW][mW] = new Uint8Array(WW.buffer, WW.byteOffset + iW.binaryDataPosition + PW.position, PW.length)
+         }
+       }
+       return EW
```

#### 5. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L42-L53` → after: `L54-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L54-L66) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L42-L53)

```diff
-   },
-   45206: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bonesVertex",
-       Me = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function UW(WW, iW) {
+       iW = bW(iW);
+       const OW = new Array(6),
+         mW = iW.irradiance?.irradianceTexture;
+       if (mW) {
+         if (6 !== mW.faces.length) throw new Error(`Incorrect irradiance texture faces number "${mW.faces.length}"`);
+         for (let EW = 0; EW < 6; EW++) {
+           const NW = mW.faces[EW];
+           OW[EW] = new Uint8Array(WW.buffer, WW.byteOffset + iW.binaryDataPosition + NW.position, NW.length)
+         }
+       }
+       return OW
```

#### 6. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L55-L66` → after: `L68-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L68-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L68-L82) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L55-L66)

```diff
-   },
-   45234: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertex",
-       Me = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function kW(WW, iW, OW) {
+       const mW = (OW = bW(OW)).specular;
+       if (!mW) return Promise.resolve([]);
+       WW._lodGenerationScale = mW.lodGenerationScale;
+       const NW = [],
+         PW = jW(iW, OW);
+       NW.push(MW(WW, PW, OW.imageType));
+       const LW = OW.irradiance?.irradianceTexture;
+       if (LW) {
+         const mW = UW(iW, OW);
+         let PW = null;
+         OW.irradiance?.irradianceTexture?.dominantDirection && (PW = EW.q.FromArray(OW.irradiance.irradianceTexture.dominantDirection)), NW.push(KW(WW, mW, LW.size, OW.imageType, PW))
+       }
+       return Promise.all(NW)
```

#### 7. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L68-L79` → after: `L84-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L84-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L84-L104) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L68-L79)

```diff
-   },
-   45143: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertexDeclaration",
-       Me = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     async function sW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
+       return await new Promise(((ZW, xW) => {
+         if (OW) {
+           const OW = iW.createTexture(null, !0, !0, null, 1, null, (WW => {
+             xW(WW)
+           }), WW);
+           mW?.onEffectCreatedObservable.addOnce((LW => {
+             LW.executeWhenCompiled((() => {
+               mW.externalTextureSamplerBinding = !0, mW.onApply = mW => {
+                 mW._bindTexture("textureSampler", OW), mW.setFloat2("scale", 1, iW._features.needsInvertingBitmap && WW instanceof ImageBitmap ? -1 : 1)
+               }, iW.scenes.length && (iW.scenes[0].postProcessManager.directRender([mW], wW, !0, NW, PW), iW.restoreDefaultFramebuffer(), OW.dispose(), URL.revokeObjectURL(EW), ZW())
+             }))
+           }))
+         } else {
+           if (iW._uploadImageToTexture(tW, WW, NW, PW), LW) {
+             const OW = cW[PW];
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L81-L92` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L106-L109) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L81-L92)

```diff
-   },
-   45076: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "decalVertexDeclaration",
-       Me = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     async function MW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xW;
+       const mW = WW.VA();
+       WW.format = 5, WW.type = 0, WW.generateMipMaps = !0, WW._cachedAnisotropicFilteringLevel = null, mW.updateTextureSamplingMode(3, WW), await SW(WW, iW, !0, OW), WW.isReady = !0
```

#### 9. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L94-L105` → after: `L111-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L111-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L111-L117) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L94-L105)

```diff
-   },
-   45238: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertex",
-       Me = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     async function KW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xW,
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+       const NW = WW.VA(),
+         PW = new LW.e(NW, 5),
+         wW = new cW.c(NW, PW);
+       WW._irradianceTexture = wW, wW._dominantDirection = EW, PW.isCube = !0, PW.format = 5, PW.type = 0, PW.generateMipMaps = !0, PW._cachedAnisotropicFilteringLevel = null, PW.generateMipMaps = !0, PW.width = OW, PW.height = OW, NW.updateTextureSamplingMode(3, PW), await SW(PW, … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L107-L144` → after: `L119-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L119-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L119-L213) · [Before (L107-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L107-L144)

```diff
-   },
-   45152: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertexDeclaration",
-       Me = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45105: (ee, ie, He) => {
-     He.d(ie, {
- ... (22 more removed lines; see GitHub link above)
+     async function SW(WW, iW, EW) {
+       let PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xW;
+       if (!(0, mW.i)(WW.width)) throw new Error("Texture size must be a power of two");
+       const tW = (0, NW.ILog2)(WW.width) + 1,
+         lW = WW.VA();
+       let AW = !1,
+         bW = !1,
+         jW = null,
+         UW = null,
+         kW = null;
+       const MW = lW.getCaps();
+       MW.textureLOD ? lW._features.supportRenderAndCopyToLodForFloatTextures ? MW.textureHalfFloatRender && MW.textureHalfFloatLinearFiltering ? (AW = !0, WW.type = 2) : MW.textureFloatRender && MW.textureFloatLinearFiltering && (AW = !0, WW.type = 1) : AW = !1 : (AW = !1, bW = E … [truncated]
+       let KW = 0;
+       if (AW) lW.isWebGPU ? (KW = 1, await OW.e(660).then((() => OW(64519)))) : await OW.e(642).then((() => OW(64523))), jW = new wW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, lW, !1, void 0, WW.type, void 0, null, !1, void 0, KW), WW._isRGBD = !1, WW.invertY = !1, UW  … [truncated]
+         generateDepthBuffer: !1,
+         generateMipMaps: !0,
+ ... (79 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L146-L157` → after: `L215-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L215-L220) · [Before (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L146-L157)

```diff
-   },
-   45200: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "instancesVertex",
-       Me = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function YW(WW, iW) {
+       const OW = (iW = bW(iW)).irradiance;
+       if (!OW) return;
+       const mW = new PW.f;
+       EW.q.FromArrayToRef(OW.x, 0, mW.x), EW.q.FromArrayToRef(OW.y, 0, mW.y), EW.q.FromArrayToRef(OW.z, 0, mW.z), EW.q.FromArrayToRef(OW.xx, 0, mW.xx), EW.q.FromArrayToRef(OW.yy, 0, mW.yy), EW.q.FromArrayToRef(OW.zz, 0, mW.zz), EW.q.FromArrayToRef(OW.yz, 0, mW.yz), EW.q.FromArray … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L159-L170` → after: `L222-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L222-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L222-L245) · [Before (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L159-L170)

```diff
-   },
-   45159: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "lightVxFragmentDeclaration",
-       Me = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var yW = OW(54015);
+     class TW {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData(WW, iW, OW, mW, EW) {
+         if (Array.isArray(WW)) return;
+         const NW = AW(WW);
+         if (NW) {
+           iW.width = NW.width, iW.height = NW.width;
+           try {
+             (0, yW.c)(), YW(iW, NW), kW(iW, WW, NW).then((() => {
+               iW.isReady = !0, iW.onLoadedObservable.notifyObservers(iW), iW.onLoadedObservable.clear(), mW && mW()
+             }), (WW => {
+               EW?.("Can not upload environment levels", WW)
+             }))
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L173` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L248) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L173)

```diff
-   45168: (ee, ie, He) => {
+   54015: (WW, iW, OW) => {
```

#### 14. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L177-L196` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L252-L274) · [Before (L177-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L177-L196)

```diff
-     var ye = He(40954);
-     const be = "lightVxUboDeclaration",
-       Me = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45186: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthDeclaration",
-       Me = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
- ... (4 more removed lines; see GitHub link above)
+     var mW = OW(53951),
+       EW = OW(41511);
+     let NW = !1;
+ 
+     function PW() {
+       NW || (NW = !0, EW.c.prototype._sphericalPolynomialTargetSize = 0, EW.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(EW.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L199-L329` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L277) · [Before (L199-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L199-L329)

```diff
-   45259: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthVertex",
-       Me = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45130: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
- ... (115 more removed lines; see GitHub link above)
+   53951: (WW, iW, OW) => {
```

#### 16. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L333-L339` → after: `L281-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L281-L289) · [Before (L333-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L333-L339)

```diff
-     var ye = He(40954);
-     const be = "samplerVertexImplementation",
-       Me = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(41506),
+       PW = OW(38249),
+       LW = OW(38372);
+     class cW {
+       constructor(WW, iW, OW, mW) {
+         this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
+       }
```

#### 17. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L341-L352` → after: `L291-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L291-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L291-L416) · [Before (L341-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L341-L352)

```diff
-   },
-   45085: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "sceneUboDeclaration",
-       Me = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     class wW {
+       static _NearestPow2Floor(WW) {
+         return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(WW) {
+         if (!WW.isCube) return null;
+         WW.bD()?.VA().flushFramebuffer();
+         const iW = WW.getSize().width,
+           OW = WW._sphericalPolynomialTargetSize,
+           mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
+           EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
+           NW = mW > 0 && mW < iW && EW,
+           PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
+           LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
+           cW = WW.readPixels(0, PW, void 0, !1),
+           wW = WW.readPixels(1, PW, void 0, !1);
+ ... (110 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L355` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L420) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L355)

```diff
-   45242: (ee, ie, He) => {
+   53986: (WW, iW, OW) => {
```

#### 19. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L359-L404` → after: `L424-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L424-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/626.js#L424-L462) · [Before (L359-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/626.js#L359-L404)

```diff
-     var ye = He(40954);
-     const be = "shadowsVertex",
-       Me = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45102: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "uvAttributeDeclaration",
-       Me = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
- ... (30 more removed lines; see GitHub link above)
+     var mW = OW(53977),
+       EW = OW(53995);
+     class NW {
+       static ExpandRGBDTexture(WW) {
+         const iW = WW._texture;
+         if (!iW || !WW.isRGBD) return;
+         const EW = iW.VA(),
+           NW = EW.getCaps(),
+           PW = iW.isReady;
+         let LW = !1;
+         NW.textureHalfFloatRender && NW.textureHalfFloatLinearFiltering ? (LW = !0, iW.type = 2) : NW.textureFloatRender && NW.textureFloatLinearFiltering && (LW = !0, iW.type = 1), LW && (iW.isReady = !1, iW._isRGBD = !1, iW.invertY = !1);
+         const cW = async () => {
+           const NW = EW.isWebGPU,
+             PW = NW ? 1 : 0;
+           iW.isReady = !1, NW ? await OW.e(660).then((() => OW(64519))) : await OW.e(642).then((() => OW(64523)));
+           const LW = new mW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, EW, !1, void 0, iW.type, void 0, null, !1, void 0, PW);
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/627.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/627.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb)

#### 1. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/627.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/627.js#L4-L6)

```diff
-   45269: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
+   53955: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _IESTextureLoader: () => LW
```

#### 2. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/627.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/627.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "decalFragmentDeclaration",
-       Me = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(38285);
+ 
+     function EW(WW) {
+       return WW.split(" ").filter((WW => "" !== WW)).map((WW => parseFloat(WW)))
```

#### 3. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L16-L27` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/627.js#L13-L18) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/627.js#L16-L27)

```diff
-   },
-   45407: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "depthPrePass",
-       Me = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function NW(WW, iW, OW) {
+       for (; OW.length !== iW;) {
+         const iW = EW(WW.lines[WW.index++]);
+         OW.push(...iW)
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L29-L40` → after: `L20-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L20-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/627.js#L20-L44) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/627.js#L29-L40)

```diff
-   },
-   45294: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "lightFragmentDeclaration",
-       Me = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function PW(WW, iW, OW) {
+       let EW = 0,
+         NW = 0,
+         PW = 0,
+         LW = 0,
+         cW = 0,
+         wW = 0;
+       for (let mW = 0; mW < WW.numberOfHorizontalAngles - 1; mW++)
+         if (OW < WW.horizontalAngles[mW + 1] || mW === WW.numberOfHorizontalAngles - 2) {
+           NW = mW, PW = WW.horizontalAngles[mW], LW = WW.horizontalAngles[mW + 1];
+           break
+         } for (let mW = 0; mW < WW.numberOfVerticalAngles - 1; mW++)
+         if (iW < WW.verticalAngles[mW + 1] || mW === WW.numberOfVerticalAngles - 2) {
+           EW = mW, cW = WW.verticalAngles[mW], wW = WW.verticalAngles[mW + 1];
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L42-L183` → after: `L46-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/627.js#L46-L100) · [Before (L42-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/627.js#L42-L183)

```diff
-   },
-   45300: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "lightUboDeclaration",
-       Me = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45305: (ee, ie, He) => {
-     He.d(ie, {
- ... (126 more removed lines; see GitHub link above)
+     class LW {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".ies not supported in Cube."
+       }
+       loadData(WW, iW, OW) {
+         const mW = function(WW) {
+           const iW = {
+               lines: new TextDecoder("utf-8").decode(WW).split("\n"),
+               index: 0
+             },
+             OW = {
+               version: iW.lines[0],
+               candelaValues: [],
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/628.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/628.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb)

#### 1. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L4-L252` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/628.js#L4) · [Before (L4-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/628.js#L4-L252)

```diff
-   45403: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bumpFragment",
-       Me = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45372: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
- ... (233 more removed lines; see GitHub link above)
+   53968: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L254` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/628.js#L6) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/628.js#L254)

```diff
-       geometryPixelShader: () => Pe
+       _BasisTextureLoader: () => kW
```

#### 3. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L256-L261` → after: `L8-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L8-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/628.js#L8-L135) · [Before (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/628.js#L256-L261)

```diff
-     var ye = He(40954),
-       be = He(45277),
-       Me = He(45380);
-     const Ke = "mrtFragmentDeclaration",
-       Ue = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     ye.d.IncludesShadersStore[Ke] || (ye.d.IncludesShadersStore[Ke] = Ue);
+     var mW, EW = OW(41620),
+       NW = OW(39911),
+       PW = OW(41992),
+       LW = OW(41371);
+ 
+     function cW() {
+       const WW = 0,
+         iW = 1,
+         OW = 2,
+         mW = 3,
+         EW = 6,
+         NW = 8,
+         PW = 9,
+         LW = 10,
+         cW = 14;
+       let wW = null;
+ ... (112 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L263-L264` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/628.js#L137-L138) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/628.js#L263-L264)

```diff
-       name: Ke,
-       shader: Ue
+       JSModuleURL: `${EW.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${EW.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 5. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L266-L290` → after: `L140-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L140-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/628.js#L140-L284) · [Before (L266-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/628.js#L266-L290)

```diff
-     var Je = He(45364),
-       oe = He(45329),
-       Re = He(45372),
-       ke = He(45105),
-       qe = He(64119),
-       fe = He(64313),
-       Te = He(45085),
-       pe = He(64095),
-       Xe = He(64317),
-       ze = He(64155),
-       Be = He(45336),
-       Ee = He(64319),
-       ge = He(64324),
-       Oe = He(45396),
-       de = He(45403),
-       We = He(64337),
- ... (9 more removed lines; see GitHub link above)
+     let tW = null,
+       ZW = null,
+       xW = 0;
+     const lW = async () => (tW || (tW = new Promise(((WW, iW) => {
+       ZW ? WW(ZW) : EW.f.LoadFileAsync(EW.f.GetBabylonScriptURL(wW.WasmModuleURL)).then((OW => {
+         if ("function" !== typeof URL) return iW("Basis transcoder requires an environment with a URL constructor");
+         const mW = URL.createObjectURL(new Blob([`(${cW})()`], {
+           type: "application/javascript"
+         }));
+         ZW = new Worker(mW), async function(WW, iW, OW) {
+           return await new Promise(((mW, NW) => {
+             const PW = iW => {
+               "init" === iW.data.action ? (WW.removeEventListener("message", PW), mW(WW)) : "error" === iW.data.action && NW(iW.data.error || "error initializing worker")
+             };
+             WW.addEventListener("message", PW), WW.postMessage({
+               action: "init",
+ ... (129 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/629.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/629.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec)

#### 1. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L4)

```diff
-   45208: (ee, ie, He) => {
+   53997: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L8-L14` → after: `L8-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L8-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L8-L341) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimation",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(38276),
+       EW = OW(38241),
+       NW = OW(41992),
+       PW = OW(41665),
+       LW = OW(41458),
+       cW = OW(39911),
+       wW = OW(41649),
+       tW = OW(41675),
+       ZW = OW(38253),
+       xW = OW(41420),
+       lW = OW(41628),
+       AW = OW(41710);
+     class bW {
+       get renderList() {
+         return this._renderList
+       }
+ ... (318 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L16-L27` → after: `L343-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L343-L742) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L16-L27)

```diff
-   },
-   45116: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bakedVertexAnimationDeclaration",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     bW.REFRESHRATE_RENDER_ONCE = 0, bW.REFRESHRATE_RENDER_ONEVERYFRAME = 1, bW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
+     var jW = OW(41415);
+     class UW extends NW.h {
+       get renderListPredicate() {
+         return this._objectRenderer.renderListPredicate
+       }
+       set renderListPredicate(WW) {
+         this._objectRenderer.renderListPredicate = WW
+       }
+       get renderList() {
+         return this._objectRenderer.renderList
+       }
+       set renderList(WW) {
+         this._objectRenderer.renderList = WW
+       }
+       get particleSystemList() {
+ ... (384 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L30` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L747) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L30)

```diff
-   45114: (ee, ie, He) => {
+   53980: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L32` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L749-L750) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L32)

```diff
-       e: () => Ke
+       d: () => wW,
+       g: () => tW
```

#### 6. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L34-L37` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L752-L756) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L34-L37)

```diff
-     var ye = He(40954);
-     const be = "bonesDeclaration",
-       Me = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41660),
+       EW = OW(39271),
+       NW = OW(38276),
+       PW = OW(41389),
+       LW = OW(41840);
```

#### 7. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L39-L40` → after: `L758-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L758-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L758-L810) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L39-L40)

```diff
-       name: be,
-       shader: Me
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+     };
+     class wW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cW;
+         this._fullscreenViewport = new EW.e(0, 0, 1, 1);
+         const OW = iW.positions ?? cW.positions,
+           NW = iW.indices ?? cW.indices;
+         this.engine = WW, this._vertexBuffers = {
+           [mW.k.PositionKind]: new mW.k(WW, OW, mW.k.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = WW.createIndexBuffer(NW), this._indexBufferLength = NW.length, this._onContextRestoredObserver = WW.DA.add((() => {
+           this._indexBuffer = WW.createIndexBuffer(NW);
+           for (const WW in this._vertexBuffers) {
+             this._vertexBuffers[WW]._rebuild()
+           }
+ ... (37 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L42-L53` → after: `L812-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L812-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L812-L932) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L42-L53)

```diff
-   },
-   45206: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bonesVertex",
-       Me = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     class tW {
+       static RegisterShaderCodeProcessing(WW, iW) {
+         iW ? tW._CustomShaderCodeProcessing[WW ?? ""] = iW : delete tW._CustomShaderCodeProcessing[WW ?? ""]
+       }
+       static _GetShaderCodeProcessing(WW) {
+         return tW._CustomShaderCodeProcessing[WW] ?? tW._CustomShaderCodeProcessing[""]
+       }
+       get name() {
+         return this.options.name
+       }
+       set name(WW) {
+         this.options.name = WW
+       }
+       isReady() {
+         return this._drawWrapper.effect?.isReady() ?? !1
+       }
+ ... (105 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L56-L58` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L936-L944) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L56-L58)

```diff
-   45227: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
+   54011: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       Dispose: () => kW,
+       DumpData: () => UW,
+       DumpDataAsync: () => jW,
+       DumpFramebuffer: () => bW,
+       DumpTools: () => sW,
+       EncodeImageAsync: () => AW,
+       RegisterDumpTools: () => KW
```

#### 10. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L60-L66` → after: `L946-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L946-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L946-L993) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L60-L66)

```diff
-     var ye = He(40954);
-     const be = "bumpVertex",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(41516),
+       EW = OW(53980),
+       NW = OW(41620),
+       PW = OW(38285),
+       LW = OW(38270),
+       cW = OW(39911),
+       wW = OW(41574),
+       tW = OW(41519);
+     let ZW = null;
+     async function xW() {
+       return ZW || (ZW = async function() {
+         const WW = LW.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         WW instanceof OffscreenCanvas && cW.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: iW
+         } = await Promise.resolve().then((() => OW(41384)));
+ ... (32 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L68-L79` → after: `L995-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L995-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L995-L1036) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L68-L79)

```diff
-   },
-   45234: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertex",
-       Me = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     let lW = (() => {
+       var WW;
+       let iW, OW = [];
+       return WW = class {
+         static async EncodeImageAsync(WW, iW, OW, mW, EW, PW) {
+           const LW = await xW(),
+             cW = LW.dumpEngine;
+           cW.engine.setSize(iW, OW, !0);
+           const wW = cW.engine.createRawTexture(WW, iW, OW, 5, !1, !EW, 1);
+           return cW.renderer.setViewport(), cW.renderer.applyEffectWrapper(cW.wrapper), cW.wrapper.effect._bindTexture("textureSampler", wW), cW.renderer.draw(), wW.dispose(), await new Promise(((WW, iW) => {
+             NW.f.ToBlob(LW.canvas, (OW => {
+               OW ? WW(OW) : iW(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
+             }), mW, PW)
+           }))
+         }
+       }, (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L81-L92` → after: `L1038-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1038-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1038-L1056) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L81-L92)

```diff
-   },
-   45143: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertexDeclaration",
-       Me = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     async function jW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         EW = arguments.length > 4 ? arguments[4] : void 0,
+         LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         tW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         ZW = arguments.length > 7 ? arguments[7] : void 0;
+       if (OW instanceof Float32Array) {
+         const WW = new Uint8Array(OW.length);
+         let iW = OW.length;
+         for (; iW--;) {
+           const mW = OW[iW];
+           WW[iW] = Math.round(255 * (0, PW.Clamp)(mW))
+         }
+         OW = WW
+       }
+       const xW = await lW.EncodeImageAsync(OW, WW, iW, mW, LW, ZW);
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L94-L105` → after: `L1058-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1058-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1058-L1063) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L94-L105)

```diff
-   },
-   64101: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function UW(WW, iW, OW, mW) {
+       let EW = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== EW || mW || (EW = ""), jW(WW, iW, OW, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", EW, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         mW && mW(WW)
+       }))
```

#### 14. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L107-L118` → after: `L1065-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1065-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1065-L1069) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L107-L118)

```diff
-   },
-   45125: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "instancesDeclaration",
-       Me = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+ 
+     function kW() {
+       ZW && (ZW?.then((WW => {
+         WW.canvas instanceof HTMLCanvasElement && WW.canvas.remove(), WW.dumpEngine && (WW.dumpEngine.engine.dispose(), WW.dumpEngine.renderer.dispose(), WW.dumpEngine.wrapper.dispose())
+       })), ZW = null)
```

#### 15. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L130-L131` → after: `L1072-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1072-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1072-L1082) · [Before (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L130-L131)

```diff
-       name: be,
-       shader: Me
+       DumpData: UW,
+       DumpDataAsync: jW,
+       DumpFramebuffer: bW,
+       Dispose: kW
+     };
+     let MW = !1;
+ 
+     function KW() {
+       if (MW) return;
+       MW = !0;
+       NW.f.DumpData = UW, NW.f.DumpDataAsync = jW, NW.f.DumpFramebuffer = bW
```

#### 16. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L134` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1085) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L134)

```diff
-   45197: (ee, ie, He) => {
+   53995: (WW, iW, OW) => {
```

#### 17. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L136` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1087-L1089) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L136)

```diff
-       b: () => Ke
+       c: () => lW,
+       f: () => AW,
+       i: () => bW
```

#### 18. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L138-L144` → after: `L1091-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1091-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1091-L1202) · [Before (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L138-L144)

```diff
-     var ye = He(40954);
-     const be = "morphTargetsVertex",
-       Me = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(41992),
+       EW = OW(53997),
+       NW = OW(41516),
+       PW = OW(53977),
+       LW = OW(41538),
+       cW = OW(54003),
+       wW = OW(41519);
+     class tW extends PW.c {
+       getClassName() {
+         return "PassPostProcess"
+       }
+       constructor(WW, iW) {
+         let OW = arguments.length > 4 ? arguments[4] : void 0;
+         const mW = {
+           size: "number" === typeof iW ? iW : void 0,
+           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+ ... (96 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L146-L157` → after: `L1204-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1204-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1204-L1366) · [Before (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L146-L157)

```diff
-   },
-   45178: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "morphTargetsVertexDeclaration",
-       Me = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     async function AW(WW, iW, NW) {
+       let LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+         wW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         tW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+       await async function(WW) {
+         if (WW.isReady()) return;
+         if (WW.loadingError) throw new Error(WW.errorObject?.message || `Texture ${WW.name} errored while loading.`);
+         const iW = WW.onLoadObservable;
+         if (iW) return await new Promise((WW => iW.addOnce((() => WW()))));
+         const OW = WW._texture?.onLoadedObservable;
+         if (OW) return await new Promise((WW => OW.addOnce((() => WW()))));
+         throw new Error(`Cannot determine readiness of texture ${WW.name}.`)
+       }(WW);
+       const xW = WW.getInternalTexture(),
+         lW = WW.is3D || !!xW?.is3D,
+ ... (147 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L169-L170` → after: `L1369-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1369-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1369-L1392) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L169-L170)

```diff
-       name: be,
-       shader: Me
+       CreateResizedCopy: function(WW, iW, OW) {
+         let NW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const PW = WW.bD(),
+           LW = PW.VA(),
+           cW = new EW.e("resized" + WW.name, {
+             width: iW,
+             height: OW
+           }, PW, !WW.noMipmap, !0, WW._texture.type, !1, WW.samplingMode, !1);
+         cW.wrapU = WW.wrapU, cW.wrapV = WW.wrapV, cW.uOffset = WW.uOffset, cW.vOffset = WW.vOffset, cW.uScale = WW.uScale, cW.vScale = WW.vScale, cW.uAng = WW.uAng, cW.vAng = WW.vAng, cW.wAng = WW.wAng, cW.coordinatesIndex = WW.coordinatesIndex, cW.level = WW.level, cW.anisotropi … [truncated]
+         const wW = new tW("pass", 1, null, NW ? mW.h.BILINEAR_SAMPLINGMODE : mW.h.NEAREST_SAMPLINGMODE, LW, !1, 0);
+         return wW.externalTextureSamplerBinding = !0, wW.onEffectCreatedObservable.addOnce((iW => {
+           iW.executeWhenCompiled((() => {
+             wW.onApply = function(iW) {
+               iW.setTexture("textureSampler", WW)
+             };
+             const iW = cW.renderTarget;
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L173` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1395) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L173)

```diff
-   45176: (ee, ie, He) => {
+   53977: (WW, iW, OW) => {
```

#### 22. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L177-L183` → after: `L1399-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1399-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1399-L1952) · [Before (L177-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L177-L183)

```diff
-     var ye = He(40954);
-     const be = "morphTargetsVertexGlobalDeclaration",
-       Me = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(41516),
+       EW = OW(41628),
+       NW = OW(38276),
+       PW = OW(38241),
+       LW = OW(41389),
+       cW = OW(41519),
+       wW = OW(41538),
+       tW = OW(38299),
+       ZW = OW(41423),
+       xW = OW(41458),
+       lW = OW(53980);
+     let AW = (() => {
+         var WW;
+         let iW, LW, ZW, AW, bW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW = [],
+           nW = [],
+           uW = [],
+ ... (538 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L186` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1955) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L186)

```diff
-   45085: (ee, ie, He) => {
+   54003: (WW, iW, OW) => {
```

#### 24. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L188` → after: `L1957-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1957-L1958) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L188)

```diff
-       b: () => Ke
+       e: () => PW,
+       h: () => NW
```

#### 25. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L190-L196` → after: `L1960-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1960-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1960-L1977) · [Before (L190-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L190-L196)

```diff
-     var ye = He(40954);
-     const be = "sceneUboDeclaration",
-       Me = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(53980),
+       EW = OW(38270);
+     class NW extends mW.g {
+       _gatherImports(WW, iW) {
+         WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(688).then((() => OW(64585)))]))) : iW.push(Promise.all([OW.e(689).then((() => OW(64588)))])), super._gatherImports(WW, iW)
+       }
+       constructor(WW) {
+         let iW = arguments.length > 2 ? arguments[2] : void 0;
+         const OW = {
+           name: WW,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || EW.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: NW.FragmentUrl,
+           ...iW
+         };
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L198-L240` → after: `L1979-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L1979-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/629.js#L1979-L2018) · [Before (L198-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/629.js#L198-L240)

```diff
-   },
-   64407: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       geometryVertexShader: () => De
-     });
-     var ye = He(40954),
-       be = He(45114),
-       Me = He(45116),
-       Ke = He(45176),
-       Ue = He(45178),
-       Fe = He(45125);
-     const Je = "geometryVertexDeclaration",
-       oe = "uniform mat4 viewProjection;uniform mat4 view;";
-     ye.d.IncludesShadersStore[Je] || (ye.d.IncludesShadersStore[Je] = oe);
-     const Re = {
-       name: Je,
- ... (27 more removed lines; see GitHub link above)
+     NW.FragmentUrl = "pass";
+     class PW extends mW.g {
+       _gatherImports(WW, iW) {
+         WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(690).then((() => OW(64592)))]))) : iW.push(Promise.all([OW.e(691).then((() => OW(64598)))])), super._gatherImports(WW, iW)
+       }
+       constructor(WW) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: WW,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || EW.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: PW.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (24 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/630.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/630.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9)

#### 1. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/630.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/630.js#L4-L6)

```diff
-   45098: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
+   54017: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _HDRTextureLoader: () => tW
```

#### 2. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L8-L15` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/630.js#L8-L74) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/630.js#L8-L15)

```diff
-     var ye = He(40954);
-     He(45085), He(45091);
-     const be = "defaultUboDeclaration",
-       Me = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(38241);
+     class EW {
+       static ConvertPanoramaToCubemap(WW, iW, OW, mW) {
+         let EW, NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!WW) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (WW.length != iW * OW * 3) {
+           if (WW.length != iW * OW * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           EW = 4
+         } else EW = 3;
+         return {
+           front: this.CreateCubemapTexture(mW, this.FACE_FRONT, WW, iW, OW, NW, PW, EW),
+           back: this.CreateCubemapTexture(mW, this.FACE_BACK, WW, iW, OW, NW, PW, EW),
+           left: this.CreateCubemapTexture(mW, this.FACE_LEFT, WW, iW, OW, NW, PW, EW),
+           right: this.CreateCubemapTexture(mW, this.FACE_RIGHT, WW, iW, OW, NW, PW, EW),
+           up: this.CreateCubemapTexture(mW, this.FACE_UP, WW, iW, OW, NW, PW, EW),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L17-L90` → after: `L76-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/630.js#L76-L171) · [Before (L17-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/630.js#L17-L90)

```diff
-   },
-   45264: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       defaultPixelShader: () => Qe
-     });
-     var ye = He(40954),
-       be = He(45269);
-     const Me = "defaultFragmentDeclaration",
-       Ke = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     ye.d.IncludesShadersStore[Me] || (ye.d.IncludesShadersStore[Me] = Ke);
-     const Ue = {
-       name: Me,
-       shader: Ke
-     };
-     var Fe = He(45085),
-       Je = He(45091),
- ... (58 more removed lines; see GitHub link above)
+ 
+     function NW(WW, iW, OW, mW, EW, NW) {
+       EW > 0 ? (EW = function(WW, iW) {
+         return iW > 1023 ? WW * Math.pow(2, 1023) * Math.pow(2, iW - 1023) : iW < -1074 ? WW * Math.pow(2, -1074) * Math.pow(2, iW + 1074) : WW * Math.pow(2, iW)
+       }(1, EW - 136), WW[NW + 0] = iW * EW, WW[NW + 1] = OW * EW, WW[NW + 2] = mW * EW) : (WW[NW + 0] = 0, WW[NW + 1] = 0, WW[NW + 2] = 0)
+     }
+ 
+     function PW(WW, iW) {
+       let OW, mW = "";
+       for (let EW = iW; EW < WW.length - iW && (OW = String.fromCharCode(WW[EW]), "\n" != OW); EW++) mW += OW;
+       return mW
+     }
+ 
+     function LW(WW) {
+       let iW = PW(WW, 0);
+       if ("#" != iW[0] || "?" != iW[1]) throw "Bad HDR Format.";
+ ... (80 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/631.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/631.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7)

#### 1. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/631.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/631.js#L4-L6)

```diff
-   45396: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   54022: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _KTXTextureLoader: () => AW
```

#### 2. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L8-L14` → after: `L8-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L8-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/631.js#L8-L391) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/631.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragment",
-       Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(39911);
+     class EW {
+       constructor(WW, iW) {
+         if (this.data = WW, this.isInvalid = !1, !EW.IsValid(WW)) return this.isInvalid = !0, void mW.b.Error("texture missing KTX identifier");
+         const OW = Uint32Array.BYTES_PER_ELEMENT,
+           NW = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * OW),
+           PW = 67305985 === NW.getUint32(0, !0);
+         return this.glType = NW.getUint32(1 * OW, PW), this.glTypeSize = NW.getUint32(2 * OW, PW), this.glFormat = NW.getUint32(3 * OW, PW), this.glInternalFormat = NW.getUint32(4 * OW, PW), this.glBaseInternalFormat = NW.getUint32(5 * OW, PW), this.pixelWidth = NW.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(WW, iW) {
+         switch (this.loadType) {
+           case EW.COMPRESSED_2D:
+             this._upload2DCompressedLevels(WW, iW);
+           case EW.TEX_2D:
+           case EW.COMPRESSED_3D:
+           case EW.TEX_3D:
+ ... (368 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L17` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/631.js#L394) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/631.js#L17)

```diff
-   45380: (ee, ie, He) => {
+   54026: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L21-L145` → after: `L398-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L398-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/631.js#L398-L457) · [Before (L21-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/631.js#L21-L145)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragmentDeclaration",
-       Me = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45422: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogFragment",
-       Me = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
- ... (109 more removed lines; see GitHub link above)
+     class mW {
+       constructor(WW) {
+         this._pendingActions = new Array, this._workerInfos = WW.map((WW => ({
+           workerPromise: Promise.resolve(WW),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const WW of this._workerInfos) WW.workerPromise.then((WW => {
+           WW.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(WW) {
+         this._executeOnIdleWorker(WW) || this._pendingActions.push(WW)
+       }
+ ... (44 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/632.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/632.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e)

#### 1. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/632.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/632.js#L4-L6)

```diff
-   45396: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   54033: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _TGATextureLoader: () => LW
```

#### 2. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L8-L11` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/632.js#L8-L86) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/632.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragment",
-       Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(39911);
+ 
+     function EW(WW) {
+       let iW = 0;
+       return {
+         id_length: WW[iW++],
+         colormap_type: WW[iW++],
+         image_type: WW[iW++],
+         colormap_index: WW[iW++] | WW[iW++] << 8,
+         colormap_length: WW[iW++] | WW[iW++] << 8,
+         colormap_size: WW[iW++],
+         origin: [WW[iW++] | WW[iW++] << 8, WW[iW++] | WW[iW++] << 8],
+         width: WW[iW++] | WW[iW++] << 8,
+         height: WW[iW++] | WW[iW++] << 8,
+         pixel_size: WW[iW++],
+         flags: WW[17]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L13-L112` → after: `L88-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L88-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/632.js#L88-L99) · [Before (L13-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/632.js#L13-L112)

```diff
-       name: be,
-       shader: Me
-     }
-   },
-   45380: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneFragmentDeclaration",
-       Me = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
- ... (84 more removed lines; see GitHub link above)
+       GetTGAHeader: EW,
+       UploadContent: NW,
+       _getImageData8bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+         const wW = OW,
+           tW = iW,
+           ZW = WW.width,
+           xW = WW.height;
+         let lW, AW, bW, jW = 0;
+         const UW = new Uint8Array(ZW * xW * 4);
+         for (bW = mW; bW !== NW; bW += EW)
+           for (AW = PW; AW !== cW; AW += LW, jW++) lW = wW[jW], UW[4 * (AW + ZW * bW) + 3] = 255, UW[4 * (AW + ZW * bW) + 2] = tW[3 * lW + 0], UW[4 * (AW + ZW * bW) + 1] = tW[3 * lW + 1], UW[4 * (AW + ZW * bW) + 0] = tW[3 * lW + 2];
+         return UW
```

#### 4. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L114-L121` → after: `L101-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L101-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/632.js#L101-L171) · [Before (L114-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/632.js#L114-L121)

```diff
-       fe = "skyPixelShader",
-       Te = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     ye.d.ShadersStore[fe] || (ye.d.ShadersStore[fe] = Te);
-     const pe = [be.d, Me.e, Ke.d, Ue.d, Fe.b, Je.e, oe.b, qe];
-     for (const ze of pe) ye.d.IncludesShadersStore[ze.name] || (ye.d.IncludesShadersStore[ze.name] = ze.shader);
-     const Xe = {
-       name: fe,
-       shader: Te
+       _getImageData16bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+         const wW = OW,
+           tW = WW.width,
+           ZW = WW.height;
+         let xW, lW, AW, bW = 0;
+         const jW = new Uint8Array(tW * ZW * 4);
+         for (AW = mW; AW !== NW; AW += EW)
+           for (lW = PW; lW !== cW; lW += LW, bW += 2) {
+             xW = wW[bW + 0] + (wW[bW + 1] << 8);
+             const WW = 255 * ((31744 & xW) >> 10) / 31 | 0,
+               iW = 255 * ((992 & xW) >> 5) / 31 | 0,
+               OW = 255 * (31 & xW) / 31 | 0;
+             jW[4 * (lW + tW * AW) + 0] = WW, jW[4 * (lW + tW * AW) + 1] = iW, jW[4 * (lW + tW * AW) + 2] = OW, jW[4 * (lW + tW * AW) + 3] = 32768 & xW ? 0 : 255
+           }
+         return jW
+       },
+ ... (55 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/633.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/633.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813)

#### 1. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/633.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/633.js#L4-L6)

```diff
-   45105: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
+   54040: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       ReadExrDataAsync: () => Zi,
+       _ExrTextureLoader: () => ti
```

#### 2. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L8-L30` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/633.js#L9-L771) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/633.js#L8-L30)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   63943: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       rgbdDecodePixelShader: () => Fe
-     });
-     var ye = He(40954),
-       be = He(45105);
-     const Me = "rgbdDecodePixelShader",
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(39911),
+       EW = OW(38285),
+       NW = OW(41586);
+     const PW = 4,
+       LW = 4,
+       cW = 1,
+       wW = 2,
+       tW = 8,
+       ZW = 65536,
+       xW = ZW >> 3,
+       lW = 14,
+       AW = 65537,
+       bW = 1 << lW,
+       jW = bW - 1,
+       UW = 59,
+       kW = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/634.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/634.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4)

#### 1. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/634.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/634.js#L4)

```diff
-   45105: (ee, ie, He) => {
+   54217: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/634.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/634.js#L6)

```diff
-       d: () => Ke
+       c: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/634.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/634.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "bumpVertex",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L17` → after: `L17-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L17-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/634.js#L17-L44) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/634.js#L17)

```diff
-   63955: (ee, ie, He) => {
+   54126: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpVertexDeclaration",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54077: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L19` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/634.js#L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/634.js#L19)

```diff
-       rgbdEncodePixelShader: () => Fe
+       defaultVertexShader: () => aW
```

#### 6. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L21-L27` → after: `L48-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L48-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/634.js#L48-L101) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/634.js#L21-L27)

```diff
-     var ye = He(40954),
-       be = He(45105);
-     const Me = "rgbdEncodePixelShader",
-       Ke = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     ye.d.ShadersStore[Me] || (ye.d.ShadersStore[Me] = Ke);
-     const Ue = [be.d];
-     for (const Je of Ue) ye.d.IncludesShadersStore[Je.name] || (ye.d.IncludesShadersStore[Je.name] = Je.shader);
+     var mW = OW(41392),
+       EW = OW(54054);
+     const NW = "defaultVertexDeclaration",
+       PW = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     mW.c.IncludesShadersStore[NW] || (mW.c.IncludesShadersStore[NW] = PW);
+     const LW = {
+       name: NW,
+       shader: PW
+     };
+     var cW = OW(54061),
+       wW = OW(54070),
+       tW = OW(54077),
+       ZW = OW(54084),
+       xW = OW(54093),
+       lW = OW(54096),
+       AW = OW(54099),
+ ... (38 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/635.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/635.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97)

#### 1. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L4-L8` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L4-L8) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L4-L8)

```diff
-   45208: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+   54199: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 2. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L11-L21)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45116: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54099: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 3. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L24-L34` → after: `L24-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L24-L34) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L24-L34)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45114: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54096: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 4. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L37-L47` → after: `L37-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L37-L47) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L37-L47)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45206: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54190: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 5. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L50-L60` → after: `L50-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L50-L60) · [Before (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L50-L60)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45234: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54222: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 6. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L63-L73` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L63-L73) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L63-L73)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45143: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54132: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 7. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L76-L86` → after: `L76-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L76-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L76-L99) · [Before (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L76-L86)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45238: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54054: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "decalVertexDeclaration",
+       NW = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L89-L99` → after: `L102-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L102-L112) · [Before (L89-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L89-L99)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45152: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54138: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 9. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L102-L112` → after: `L115-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L115-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L115-L138) · [Before (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L102-L112)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45125: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54093: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L115-L125` → after: `L141-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L141-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L141-L151) · [Before (L115-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L115-L125)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45200: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54181: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 11. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L128-L138` → after: `L154-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L154-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L154-L398) · [Before (L128-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L128-L138)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45251: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54143: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "lightVxFragmentDeclaration",
+       NW = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (229 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L141-L167` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/635.js#L401) · [Before (L141-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/635.js#L141-L167)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45780: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       colorVertexShader: () => ze
-     });
-     var ye = He(40954),
-       be = He(45114),
-       Me = He(45116),
-       Ke = He(45143),
-       Ue = He(45152),
-       Fe = He(45125),
- ... (11 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/636.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/636.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98)

#### 1. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L4)

```diff
-   45125: (ee, ie, He) => {
+   54252: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L6)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "instancesDeclaration",
-       Me = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "decalFragmentDeclaration",
+       NW = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L17)

```diff
-   45200: (ee, ie, He) => {
+   54368: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L19)

```diff
-       c: () => Ke
+       d: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "instancesVertex",
-       Me = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "depthPrePass",
+       NW = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L30-L32)

```diff
-   64456: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       greasedLineVertexShader: () => Je
+   54270: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
```

#### 8. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L34-L41` → after: `L34-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L34-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/636.js#L34-L180) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/636.js#L34-L41)

```diff
-     var ye = He(40954),
-       be = He(45125),
-       Me = He(45200);
-     const Ke = "greasedLineVertexShader",
-       Ue = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     ye.d.ShadersStore[Ke] || (ye.d.ShadersStore[Ke] = Ue);
-     const Fe = [be.c, Me.c];
-     for (const oe of Fe) ye.d.IncludesShadersStore[oe.name] || (ye.d.IncludesShadersStore[oe.name] = oe.shader);
+     var mW = OW(41392);
+     const EW = "lightFragmentDeclaration",
+       NW = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54277: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "lightUboDeclaration",
+       NW = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+ ... (131 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/637.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/637.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544)

#### 1. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L4)

```diff
-   45227: (ee, ie, He) => {
+   54357: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L6)

```diff
-       e: () => Ke
+       b: () => PW
```
