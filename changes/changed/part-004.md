# Changed — Bundle Modifications Report (Part 004 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `4 / 58` (**287** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/112.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/112.js` (115 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295)

#### 46. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1410` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L847) · [Before (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1410)

```diff
-       zz._cachedVertexBuffers = null
+       qq._prev._next = qq._next, qq._next._prev = qq._prev, delete qq._next, delete qq._prev
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1412-L1428` → after: `L849-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L849-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L849-L857) · [Before (L1412-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1412-L1428)

```diff
-     class wz {
-       constructor(zz) {
-         this.engine = zz, this.pages = []
-       }
-       static forEngine(zz) {
-         const uz = zz;
-         if (!(uz.PR >= 2) || !Xz.test(uz.getGlInfo().renderer)) return null;
-         let bz = fz.get(zz);
-         if (!bz) {
-           const Ez = new wz(uz);
-           bz = Ez, fz.set(zz, Ez);
-           const nz = zz.onContextRestoredObservable.add((() => {
-             for (const zz of Ez.pages) zz.restore()
-           }));
-           zz.aT.addOnce((() => {
-             zz.onContextRestoredObservable.remove(nz), Ez.dispose(), fz.delete(zz)
- ... (1 more removed lines; see GitHub link above)
+ 
+     function xE(qq, Eq) {
+       if ("_next" !== qq && "_prev" !== qq) return Eq
+     }
+     var AE = class {
+         constructor() {
+           lq(this, "_sentinel");
+           let qq = {};
+           qq._next = qq._prev = qq, this._sentinel = qq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1430-L1440` → after: `L859-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L859-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L859-L862) · [Before (L1430-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1430-L1440)

```diff
-         return bz
-       }
-       allocate(zz) {
-         const uz = Math.max(16, 16 * Math.ceil(zz / 16));
-         for (const Ez of this.pages) {
-           const zz = Ez.take(uz);
-           if (zz >= 0) return {
-             page: Ez,
-             start: zz,
-             size: uz
-           }
+         dequeue() {
+           let qq = this._sentinel,
+             Eq = qq._prev;
+           if (Eq !== qq) return mE(Eq), Eq
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1442-L1446` → after: `L864-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L864-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L864-L866) · [Before (L1442-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1442-L1446)

```diff
-         const bz = new rz(this.engine, Math.max(65536, uz));
-         return this.pages.push(bz), {
-           page: bz,
-           start: bz.take(uz),
-           size: uz
+         enqueue(qq) {
+           let Eq = this._sentinel;
+           qq._prev && qq._next && mE(qq), qq._next = Eq._next, Eq._next._prev = qq, Eq._next = qq, qq._prev = Eq
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1448-L1465` → after: `L868-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L868-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L868-L929) · [Before (L1448-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1448-L1465)

```diff
-       }
-       release(zz) {
-         const uz = zz.page;
-         uz.give(zz.start, zz.size), uz.aZ() && (this.pages[0] !== uz || uz.data.length > 65536) && (uz.dispose(), this.pages.splice(this.pages.indexOf(uz), 1))
-       }
-       servesEngine(zz) {
-         return zz === this.engine
-       }
-       upload() {
-         for (const zz of this.pages) zz.upload()
-       }
-       get pageCount() {
-         return this.pages.length
-       }
-       dispose() {
-         for (const zz of this.pages) zz.dispose();
- ... (2 more removed lines; see GitHub link above)
+         toString() {
+           let qq = [],
+             Eq = this._sentinel,
+             gq = Eq._prev;
+           for (; gq !== Eq;) qq.push(JSON.stringify(gq, xE)), gq = gq._prev;
+           return "[" + qq.join(", ") + "]"
+         }
+       },
+       cE = () => 1;
+ 
+     function uE(qq, Eq) {
+       if (qq.nodeCount() <= 1) return [];
+       let gq = function(qq, Eq) {
+         let gq = new Jq,
+           Yq = 0,
+           lq = 0;
+ ... (46 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1471-L1474` → after: `L933-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L933-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L933-L947) · [Before (L1471-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1471-L1474)

```diff
-       if (!(nz <= Ez)) {
-         if (uz < 0 || uz + (nz - Ez) > zz.size) throw new Error(`ThinInstanceArena: write of ${nz-Ez} floats at ${uz} overruns a ${zz.size}-float slot`);
-         zz.page.write(zz.start + uz, bz, Ez, nz)
-       }
+       let Oq = [],
+         mq = lq ? Oq : void 0;
+       return (qq.inEdges(Yq.v) || []).forEach((Yq => {
+         let mq = qq.edge(Yq),
+           xq = qq.node(Yq.v);
+         lq && Oq.push({
+           v: Yq.v,
+           w: Yq.w
+         }), xq.out -= mq, WE(Eq, gq, xq)
+       })), (qq.outEdges(Yq.v) || []).forEach((Yq => {
+         let lq = qq.edge(Yq),
+           Oq = Yq.w,
+           mq = qq.node(Oq);
+         mq.in -= lq, WE(Eq, gq, mq)
+       })), qq.removeNode(Yq.v), mq
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1476-L1529` → after: `L949-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L949-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L949-L952) · [Before (L1476-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1476-L1529)

```diff
-     class rz {
-       constructor(zz, uz) {
-         this.engine = zz, this.data = void 0, this.buffer = void 0, this.free = void 0, this.runs = [], this.sorted = [], this.data = new Float32Array(uz), this.free = [0, uz], this.buffer = new((0, Oz.c)().ArenaBuffer)(zz, this.data, !1, 0, !1, !0)
-       }
-       take(zz) {
-         const uz = this.free;
-         for (let bz = 0; bz < uz.length; bz += 2)
-           if (uz[bz + 1] >= zz) {
-             const Ez = uz[bz];
-             return uz[bz + 1] === zz ? uz.splice(bz, 2) : (uz[bz] += zz, uz[bz + 1] -= zz), Ez
-           } return -1
-       }
-       give(zz, uz) {
-         const bz = this.free;
-         let Ez = 0;
-         for (; Ez < bz.length && bz[Ez] < zz;) Ez += 2;
- ... (38 more removed lines; see GitHub link above)
+ 
+     function WE(qq, Eq, gq) {
+       var Yq, lq, Oq;
+       gq.out ? gq.in ? null == (Oq = qq[gq.out - gq.in + Eq]) || Oq.enqueue(gq) : null == (lq = qq[qq.length - 1]) || lq.enqueue(gq) : null == (Yq = qq[0]) || Yq.enqueue(gq)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1531-L1572` → after: `L954-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L954-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L954-L965) · [Before (L1531-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1531-L1572)

```diff
-     const oz = "matrix";
-     class Nz {
-       constructor(zz, uz, bz, Ez, nz, iz) {
-         let lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         this.callbacks = uz, this.initialCapacity = bz, this.capacityIsConst = Ez, this.strides = nz, this.flushQueue = iz, this.nextId = 0, this.pickable = void 0, this.arena = void 0, this.idToMetadata = {}, this.meshVariations = {}, this.bounds = void 0, this.tempBuffers = {}, … [truncated]
-         const Mz = zz.lG(),
-           tz = Nz.tempVector.set(Math.abs(Mz.minimum.x), Math.abs(Mz.minimum.y), Math.abs(Mz.minimum.z));
-         if (tz.maximizeInPlaceFromFloats(Math.abs(Mz.maximum.x), Math.abs(Mz.maximum.y), Math.abs(Mz.maximum.z)), this.bounds = {
-             sphere: {
-               radius: tz.length()
-             }
-           }, zz.bR = !0, zz.pK = !1, zz.yzz = !0, zz.iR = !0, zz.Zx(!1), this.setPickable(!1), bz < 1 || !Number.isInteger(bz)) throw new Error(`Capacity must be a positive integer, not ${bz}`);
-         for (const Hz in this.strides) {
-           const zz = this.strides[Hz];
-           if (zz < 1 || zz > 16 || !Number.isInteger(zz)) throw new Error(`Invalid stride for ${Hz}, expected a positive integer <= 16, not ${zz}`);
-           this.tempBuffers[Hz] = new Float32Array(zz)
- ... (26 more removed lines; see GitHub link above)
+ 
+     function NE(qq, Eq) {
+       var gq;
+       ("greedy" === qq.graph().acyclicer ? uE(qq, (gq = qq, qq => gq.edge(qq).weight)) : function(qq, Eq) {
+         let gq = [],
+           Yq = {},
+           lq = {};
+ 
+         function Oq(Eq) {
+           Object.hasOwn(lq, Eq) || (lq[Eq] = !0, Yq[Eq] = !0, qq.outEdges(Eq).forEach((qq => {
+             Object.hasOwn(Yq, qq.w) ? gq.push(qq) : Oq(qq.w)
+           })), delete Yq[Eq])
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1574-L1582` → after: `L967-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L967-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L967-L985) · [Before (L1574-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1574-L1582)

```diff
-         for (const zz in this.idToMetadata) delete this.idToMetadata[zz]
-       }
-       has(zz) {
-         return void 0 !== this.idToMetadata[zz]
-       }
-       count() {
-         let zz = 0;
-         for (const uz in this.meshVariations) {
-           zz += this.meshVariations[uz].numRegisteredThinInstances()
+ 
+         function mq(Oq) {
+           var xq;
+           Object.hasOwn(lq, Oq) || (lq[Oq] = !0, Yq[Oq] = !0, null == (xq = qq.outEdges(Oq)) || xq.forEach((lq => {
+             var xq, Aq;
+             Object.hasOwn(Yq, lq.w) || (null == (xq = Eq.node(Oq)) ? void 0 : xq.rank) > (null == (Aq = Eq.node(lq.w)) ? void 0 : Aq.rank) && function(qq, Eq, gq) {
+               let Yq = new Set;
+ 
+               function lq(Eq) {
+                 var Oq;
+                 if (qq.sources().includes(Eq)) return !0;
+                 Yq.add(Eq);
+                 for (let mq of null != (Oq = qq.inEdges(Eq)) ? Oq : [])
+                   if ((mq.v !== gq.v || mq.w !== gq.w) && !Yq.has(mq.v) && lq(mq.v)) return !0;
+                 return !1
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L1584-L37348` → after: `L987-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L987-L992) · [Before (L1584-L37348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L1584-L37348)

```diff
-         return zz
-       }
-       Zx(zz, uz) {
-         if ("boolean" !== typeof uz) throw new Error(`ThinInstanceMesh.setEnabled: ${zz} given ${uz}, not a boolean`);
-         const bz = this.idToMetadata[zz];
-         if (void 0 === bz) throw new Error(`ThinInstanceMesh.setEnabled: ${zz} not found`);
-         const {
-           meshVariation: Ez
-         } = bz;
-         Ez.Zx(zz, uz)
-       }
-       configureMeshVariation(zz, uz) {
-         if (this.hasMeshVariationBeenConfigured(zz)) throw new Error(`Failed to configure mesh variation ${zz} since it is already configured`);
-         const bz = this.meshVariations[Nz.DEFAULT_MESH_VARIATION_NAME].mesh,
-           Ez = bz.clone(`${bz.name}_${zz}`, null, !0);
-         Ez.makeGeometryUnique(), Ez.metadata = {}, Ez.parent = null, Ez.Zx(!1), this.callbacks.Blz(Ez), uz(Ez), this.meshVariations[zz] = new vz(Ez, this.initialCapacity, this.capacityIsConst, this.strides, this.flushQueue, this.arena)
- ... (35749 more removed lines; see GitHub link above)
+         let xq = Oq;
+         return Eq && "function" == typeof Eq.node && (xq = mq), qq.sources().forEach(xq), qq.nodes().forEach(xq), gq
+       }(qq, null != Eq ? Eq : null)).forEach((Eq => {
+         let gq = qq.edge(Eq);
+         qq.removeEdge(Eq), gq.forwardName = Eq.name, gq.reversed = !0, qq.setEdge(Eq.w, Eq.v, gq, Dq("rev"))
+       }))
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37352` → after: `L996-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L996-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L996-L1017) · [Before (L37352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37352)

```diff
-       return Number.isFinite(zz.timeFraction) && pz(zz.pre) && pz(zz.post)
+       qq.graph().dummyChains = [], qq.edges().forEach((Eq => function(qq, Eq) {
+         let gq, Yq, lq, Oq = Eq.v,
+           mq = qq.node(Oq).rank,
+           xq = Eq.w,
+           Aq = qq.node(xq).rank,
+           cq = Eq.name,
+           uq = qq.edge(Eq),
+           Bq = uq.labelRank;
+         if (Aq === mq + 1) return;
+         for (qq.removeEdge(Eq), lq = 0, ++mq; mq < Aq; ++lq, ++mq) uq.points = [], Yq = {
+           width: 0,
+           height: 0,
+           edgeLabel: uq,
+           edgeObj: Eq,
+           rank: mq
+         }, gq = kq(qq, "edge", Yq, "_d"), mq === Bq && (Yq.width = uq.width, Yq.height = uq.height, Yq.dummy = "edge-label", Yq.labelpos = uq.labelpos), qq.setEdge(Oq, gq, {
+ ... (6 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37356-L37392` → after: `L1021-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1021-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1021-L1030) · [Before (L37356-L37392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37356-L37392)

```diff
-       return Number.isFinite(zz[0]) && Number.isFinite(zz[1]) && Number.isFinite(zz[2])
-     }
- 
-     function dz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
-       const tz = iz - uz,
-         Hz = iz - Ez,
-         Oz = Mz - Ez,
-         pz = [null, null, null];
-       for (let dz = 0; dz < pz.length; dz++) pz[dz] = Fz(zz[dz], bz[dz], nz[dz], lz[dz], tz, Oz);
-       return {
-         Wi: Hz,
-         ji: pz
-       }
-     }
- 
-     function Fz(zz, uz, bz, Ez, iz, lz) {
- ... (21 more removed lines; see GitHub link above)
+       let Eq = {};
+       qq.sources().forEach((function gq(Yq) {
+         let lq = qq.node(Yq);
+         if (Object.hasOwn(Eq, Yq)) return lq.rank;
+         Eq[Yq] = !0;
+         let Oq = qq.outEdges(Yq),
+           mq = Oq ? Oq.map((Eq => null == Eq ? Number.POSITIVE_INFINITY : gq(Eq.w) - qq.edge(Eq).minlen)) : [],
+           xq = wq(Math.min, mq);
+         return xq === Number.POSITIVE_INFINITY && (xq = 0), lq.rank = xq
+       }))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37396-L37401` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1034) · [Before (L37396-L37401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37396-L37401)

```diff
-       return null === uz ? zz : uz(zz)
-     }
- 
-     function Kz(zz) {
-       const [uz, bz, Ez] = zz, lz = -(0, iz.j)(uz), Mz = -(0, iz.j)(bz), tz = (0, iz.j)(Ez), Hz = nz.d.quaternionFromEulerZYX(lz, Mz, tz);
-       return nz.d.eulerYXZFromQuaternion(Hz)
+       return qq.node(Eq.w).rank - qq.node(Eq.v).rank - qq.edge(Eq).minlen
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37403-L37405` → after: `L1036-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1036-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1036-L1045) · [Before (L37403-L37405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37403-L37405)

```diff
-     Hz.LERP_MODE_SCHEMA_MAPPING = {
-       linear: Ez.j.Linear,
-       catmullrom: Ez.j.CatmullRomSpline
+     var jE = function(qq) {
+       let Eq = new Jq({
+           directed: !1
+         }),
+         gq = qq.nodes();
+       if (0 === gq.length) throw new Error("Graph must have at least one node");
+       let Yq, lq, Oq = gq[0],
+         mq = qq.nodeCount();
+       for (Eq.setNode(Oq, {}); HE(Eq, qq) < mq && (Yq = oE(Eq, qq), Yq);) lq = Eq.hasNode(Yq.v) ? dE(qq, Yq) : -dE(qq, Yq), PE(Eq, qq, lq);
+       return Eq
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37423-L37455` → after: `L1049-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1049-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1049-L1056) · [Before (L37423-L37455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37423-L37455)

```diff
-       return Math.abs(nz.d.computeShortestRotation(zz[0], uz[0])) + Math.abs(nz.d.computeShortestRotation(zz[1], uz[1])) + Math.abs(nz.d.computeShortestRotation(zz[2], uz[2]))
-     }
-     const oz = new tz
-   },
-   37838: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Mz,
-       d: () => tz
-     });
-     var Ez = bz(332),
-       nz = bz.n(Ez),
-       iz = bz(37840),
-       lz = bz.n(iz);
- 
-     function Mz(zz) {
-       return {
- ... (17 more removed lines; see GitHub link above)
+       return qq.nodes().forEach((function gq(Yq) {
+         let lq = Eq.nodeEdges(Yq);
+         lq && lq.forEach((lq => {
+           let Oq = lq.v,
+             mq = Yq === Oq ? lq.w : Oq;
+           !qq.hasNode(mq) && !dE(Eq, lq) && (qq.setNode(mq, {}), qq.setEdge(Yq, mq, {}), gq(mq))
+         }))
+       })), qq.nodeCount()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37459-L37464` → after: `L1060-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1060-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1060-L1063) · [Before (L37459-L37464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37459-L37464)

```diff
-       var bz;
-       const Ez = dz(zz),
-         iz = zz.zN.Km(uz),
-         lz = zz.zN.Iy(uz),
-         Mz = [iz.od.base[0] + lz.width / 2, iz.od.base[1] + lz.height / 2, iz.od.base[2] + lz.width / 2];
-       nz().add(Mz, Mz, null !== (bz = lz.kd) && void 0 !== bz ? bz : zz.kd), pz(zz, zz.zN.getState(uz, "collideEntitiesProjectile"), Ez, Mz)
+       return Eq.edges().reduce(((gq, Yq) => {
+         let lq = Number.POSITIVE_INFINITY;
+         return qq.hasNode(Yq.v) !== qq.hasNode(Yq.w) && (lq = dE(Eq, Yq)), lq < gq[0] ? [lq, Yq] : gq
+       }), [Number.POSITIVE_INFINITY, null])[1]
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37470-L37483` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1067) · [Before (L37470-L37483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37470-L37483)

```diff
-       let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.zN.Gs(uz.RL);
-       if (null === uz._lastPos) return void(uz._lastPos = nz().clone(Ez));
-       nz().sub(Hz, Ez, uz._lastPos);
-       const iz = nz().length(Hz);
-       0 === iz && (Hz[0] = 1e-4);
-       for (let nz = 0; nz < Oz.length; nz++) {
-         const Ez = bz[nz];
-         if (!zz.zN.U1(Ez.RL, "collideEntities")) continue;
-         if (!Ez.lbz) continue;
-         const pz = lz().distance(uz._lastPos, Hz, Oz[nz]);
-         if (Mz = uz._lastPos, tz = Oz[nz], (Mz[0] >= tz[0][0] && Mz[0] <= tz[1][0] && Mz[1] >= tz[0][1] && Mz[1] <= tz[1][1] && Mz[2] >= tz[0][2] && Mz[2] <= tz[1][2] || Math.abs(pz) <= iz) && (uz.callback(Ez.RL), !zz.zN.U1(uz.RL, "collideEntitiesProjectile"))) break
-       }
-       var Mz, tz;
-       nz().copy(uz._lastPos, Ez)
+       qq.nodes().forEach((qq => Eq.node(qq).rank += gq))
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37487-L37540` → after: `L1075-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1075-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1075-L1090) · [Before (L37487-L37540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37487-L37540)

```diff
-       const uz = zz.zN.dL("collideEntities");
-       for (let iz = 0; iz < uz.length; iz++) {
-         var bz, Ez;
-         const lz = zz.zN.Iy(uz[iz].RL),
-           Mz = uz[iz].nbz / 2,
-           tz = uz[iz].ibz / 2;
-         Oz[iz] = [
-           [lz.yuz[0] - Mz, lz.yuz[1] - tz, lz.yuz[2] - Mz],
-           [lz.yuz[3] + Mz, lz.yuz[4] + tz, lz.yuz[5] + Mz]
-         ], nz().add(Oz[iz][0], Oz[iz][0], null !== (bz = lz.kd) && void 0 !== bz ? bz : zz.kd), nz().add(Oz[iz][1], Oz[iz][1], null !== (Ez = lz.kd) && void 0 !== Ez ? Ez : zz.kd)
-       }
-       return Oz.length = uz.length, uz.slice()
-     }
-   },
-   37135: (zz, uz, bz) => {
-     bz.d(uz, {
- ... (38 more removed lines; see GitHub link above)
+       qq = function(qq) {
+         let Eq = (new Jq).setGraph(qq.graph());
+         return qq.nodes().forEach((gq => Eq.setNode(gq, qq.node(gq)))), qq.edges().forEach((gq => {
+           let Yq = Eq.edge(gq.v, gq.w) || {
+               weight: 0,
+               minlen: 1
+             },
+             lq = qq.edge(gq);
+           Eq.setEdge(gq.v, gq.w, {
+             weight: Yq.weight + lq.weight,
+             minlen: Math.max(Yq.minlen, lq.minlen)
+           })
+         })), Eq
+       }(qq), VE(qq);
+       let Eq, gq, Yq = jE(qq);
+       for (nE(Yq), vE(Yq, qq); Eq = iE(Yq);) gq = ZE(Yq, qq, Eq), fE(Yq, qq, Eq, gq)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37544-L37546` → after: `L1093-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1093-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1093-L1099) · [Before (L37544-L37546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37544-L37546)

```diff
-     function Hz(zz) {
-       const uz = zz.zN.tzz(zz.iG);
-       return Mz && tz && (uz.isInCobweb !== Mz || uz.isInFluid !== tz)
+     function vE(qq, Eq) {
+       let gq = yE(qq, qq.nodes());
+       gq = gq.slice(0, gq.length - 1), gq.forEach((gq => function(qq, Eq, gq) {
+         let Yq = qq.node(gq).parent,
+           lq = qq.edge(gq, Yq);
+         lq.cutvalue = hE(qq, Eq, gq)
+       }(qq, Eq, gq)))
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37549-L37595` → after: `L1102-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1102-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1102-L1122) · [Before (L37549-L37595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37549-L37595)

```diff
-     function Oz(zz) {
-       return {
-         name: "movement",
-         order: 30,
-         stateConstructor: lz,
-         Qr: (uz, bz) => {
-           bz.Gd = zz, Mz = bz.isInCobweb, tz = bz.isInFluid
-         },
-         aJ: null,
-         system: function(zz, uz) {}
-       }
-     }
-   },
-   36687: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Ez
- ... (31 more removed lines; see GitHub link above)
+     function hE(qq, Eq, gq) {
+       let Yq = qq.node(gq).parent,
+         lq = !0,
+         Oq = Eq.edge(gq, Yq),
+         mq = 0;
+       Oq || (lq = !1, Oq = Eq.edge(Yq, gq)), mq = Oq.weight;
+       let xq = Eq.nodeEdges(gq);
+       return xq && xq.forEach((Oq => {
+         let xq = Oq.v === gq,
+           Aq = xq ? Oq.w : Oq.v;
+         if (Aq !== Yq) {
+           let Yq = xq === lq,
+             cq = Eq.edge(Oq).weight;
+           if (mq += Yq ? cq : -cq, function(qq, Eq, gq) {
+               return qq.hasEdge(Eq, gq)
+             }(qq, gq, Aq)) {
+ ... (5 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37615` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1126) · [Before (L37615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37615)

```diff
-       return null !== uz && void 0 !== uz ? uz : zz ? 0 : Ez.e.ezBridgeGrowMs
+       arguments.length < 2 && (Eq = qq.nodes()[0]), bE(qq, {}, 1, Eq)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37625-L37633` → after: `L1130-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1130-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1130-L1136) · [Before (L37625-L37633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37625-L37633)

```diff
-       for (const [iz, lz, tz] of Mz) {
-         if (nz) {
-           const zz = uz + .5 + .5 * iz,
-             bz = Ez + .5 + .5 * tz;
-           if (iz * (nz[0] - zz) + tz * (nz[2] - bz) <= 0) continue
-         }
-         if (zz(uz + iz, bz + lz, Ez + tz)) return !0
-       }
-       return !1
+       let Oq = gq,
+         mq = qq.node(Yq);
+       Eq[Yq] = !0;
+       let xq = qq.neighbors(Yq);
+       return xq && xq.forEach((lq => {
+         Object.hasOwn(Eq, lq) || (gq = bE(qq, Eq, gq, lq, Yq))
+       })), mq.low = Oq, mq.lim = gq++, lq ? mq.parent = lq : delete mq.parent, gq
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37640-L37641` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1140) · [Before (L37640-L37641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37640-L37641)

```diff
-       const uz = nz.k[zz];
-       return !!uz && (!(zz in iz.c) && (uz.model ? "Slab" === uz.model : !uz.twoDBlockItem))
+       return qq.edges().find((Eq => qq.edge(Eq).cutvalue < 0))
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37645-L37695` → after: `L1144-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1144-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1144-L1151) · [Before (L37645-L37695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37645-L37695)

```diff
-       const Ez = uz - zz;
-       if (Ez <= 0) return Oz;
-       const nz = Math.min(1, Math.max(0, (bz - zz) / Ez));
-       return Hz + (Oz - Hz) * nz
-     }
- 
-     function Zz(zz, uz, bz) {
-       const Ez = Fz(zz.startedAtMs, zz.endsAtMs, bz);
-       return Fz(uz.startedAtMs, uz.endsAtMs, bz) >= Ez ? uz : zz
-     }
- 
-     function Rz(zz, uz, bz) {
-       let Ez = 1 / 0;
-       for (let nz = 0; nz < 3; nz++) {
-         if (0 === uz[nz]) continue;
-         const iz = uz[nz] > 0 ? bz[nz] + 1 : bz[nz];
- ... (35 more removed lines; see GitHub link above)
+       let Yq = gq.v,
+         lq = gq.w;
+       Eq.hasEdge(Yq, lq) || (Yq = gq.w, lq = gq.v);
+       let Oq = qq.node(Yq),
+         mq = qq.node(lq),
+         xq = Oq,
+         Aq = !1;
+       return Oq.lim > mq.lim && (xq = mq, Aq = !0), Eq.edges().filter((Eq => Aq === ME(qq, qq.node(Eq.v), xq) && Aq !== ME(qq, qq.node(Eq.w), xq))).reduce(((qq, gq) => dE(Eq, gq) < dE(Eq, qq) ? gq : qq))
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37699-L37781` → after: `L1155-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1155-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1155-L1168) · [Before (L37699-L37781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37699-L37781)

```diff
-       if (bz !== Ez.l.GLIDING && iz !== Ez.l.GLIDING) return;
-       const lz = zz.zN.tzz(uz);
-       if (lz.gliderFuelCooldownEnd = 0, bz === Ez.l.GLIDING) {
-         var tz;
-         const bz = null === (tz = zz.zN.mzz(uz)) || void 0 === tz ? void 0 : tz.inventory;
-         bz && null !== Mz(bz) && zz.bloxd.startGliderFuelCooldown(uz, lz, nz.h.getFirecrackerCooldownMultiplier(bz.getItemAtSelectedSlot()))
-       }
-     }
-   },
-   37429: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => iz,
-       g: () => tz,
-       i: () => lz,
-       l: () => Hz,
-       m: () => pz,
- ... (67 more removed lines; see GitHub link above)
+       let lq = gq.v,
+         Oq = gq.w;
+       qq.removeEdge(lq, Oq), qq.setEdge(Yq.v, Yq.w, {}), nE(qq), vE(qq, Eq),
+         function(qq, Eq) {
+           let gq = qq.nodes().find((Eq => !qq.node(Eq).parent));
+           if (!gq) return;
+           let Yq = QE(qq, [gq]);
+           Yq = Yq.slice(1), Yq.forEach((gq => {
+             let Yq = qq.node(gq).parent,
+               lq = Eq.edge(gq, Yq),
+               Oq = !1;
+             lq || (lq = Eq.edge(Yq, gq), Oq = !0), Eq.node(gq).rank = Eq.node(Yq).rank + (Oq ? lq.minlen : -lq.minlen)
+           }))
+         }(qq, Eq)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L37795-L38102` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1172) · [Before (L37795-L38102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L37795-L38102)

```diff
-       return `${zz}|${uz}|${bz}`
-     }
- 
-     function Mz(zz) {
-       const [uz, bz, Ez] = zz.split("|");
-       return [Number(uz), Number(bz), Number(Ez)]
-     }
-     const tz = bz(195).e.IZ;
- 
-     function Hz(zz) {
-       return iz()(zz, [tz, tz, tz])
-     }
-     const Oz = iz()(new Uint16Array(tz * tz * tz), [tz, tz, tz]);
-     Ez.encode(Oz.data)
-   },
-   37100: (zz, uz, bz) => {
- ... (292 more removed lines; see GitHub link above)
+       return gq.low <= Eq.lim && Eq.lim <= gq.lim
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38104-L38197` → after: `L1174-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1174-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1174-L1190) · [Before (L38104-L38197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38104-L38197)

```diff
-     const sz = {
-       [Ez.q.ROTATION_1]: {
-         fixedHeading: 0
-       },
-       [Ez.q.ROTATION_2]: {
-         fixedHeading: Math.PI / 2
-       },
-       [Ez.q.ROTATION_3]: {
-         fixedHeading: Math.PI
-       },
-       [Ez.q.ROTATION_4]: {
-         fixedHeading: -Math.PI / 2
-       }
-     };
-     var rz = bz(9078),
-       oz = function(zz) {
- ... (78 more removed lines; see GitHub link above)
+     rE.initLowLimValues = nE, rE.initCutValues = vE, rE.calcCutValue = hE, rE.leaveEdge = iE, rE.enterEdge = ZE, rE.exchangeEdges = fE;
+     var TE = function(qq) {
+       let Eq = qq.graph().ranker;
+       if ("function" == typeof Eq) return Eq(qq);
+       switch (Eq) {
+         case "network-simplex":
+         default:
+           SE(qq);
+           break;
+         case "tight-tree":
+           ! function(qq) {
+             VE(qq), jE(qq)
+           }(qq);
+           break;
+         case "longest-path":
+           zE(qq);
+ ... (1 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38199-L38206` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1192-L1193) · [Before (L38199-L38206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38199-L38206)

```diff
-     }
- 
-     function vz(zz) {
-       return (0, iz.zc)(zz) ? null : (0, iz.db)(rz.p, (uz => {
-         var bz;
-         return null !== (bz = zz[(0, rz.g)(uz)]) && void 0 !== bz ? bz : 1
-       }), Float64Array)
-     }
+     };
+     var zE = VE;
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38209-L38212` → after: `L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1196) · [Before (L38209-L38212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38209-L38212)

```diff
-       return (0, iz.zc)(zz) ? null : (0, iz.db)(rz.p, (uz => {
-         const bz = zz[(0, rz.g)(uz)];
-         return void 0 === bz ? oz.Unset : bz ? oz.On : oz.Off
-       }), Uint8Array)
+       tE(qq)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38215-L38221` → after: `L1203-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1203-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1203-L1250) · [Before (L38215-L38221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38215-L38221)

```diff
-     function Jz(zz, uz, bz) {
-       if (zz) {
-         let bz = !1;
-         for (let Ez = 0; Ez < uz.length; Ez++) {
-           const nz = zz[uz[Ez]];
-           if (nz === oz.On) return !0;
-           nz === oz.Off && (bz = !0)
+           function Yq(lq) {
+             let Oq = gq;
+             qq.children(lq).forEach(Yq), Eq[lq] = {
+               low: Oq,
+               lim: gq++
+             }
+           }
+           return qq.children(YE).forEach(Yq), Eq
+         }(qq),
+         gq = qq.graph();
+       if (!Array.isArray(gq.dummyChains)) return;
+       gq.dummyChains.forEach((gq => {
+         let Yq = qq.node(gq),
+           lq = Yq.edgeObj,
+           Oq = function(qq, Eq, gq, Yq) {
+             let lq, Oq = [],
+ ... (32 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38223-L38283` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1252) · [Before (L38223-L38283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38223-L38283)

```diff
-         if (bz) return !1
-       }
-       return bz
-     }
-     const Az = {
-       [Ez.m.DEFAULT]: new Nz(nz.f, {}),
-       [Ez.m.BOAT]: new Nz(lz, Mz),
-       [Ez.m.GLIDER]: new Nz(Rz, Kz),
-       [Ez.m.BALLOON]: new Nz(wz, Xz),
-       [Ez.m.SLEEPING]: new Nz({
-         canRun: !1,
-         jumpMultiplier: 0,
-         speedMultiplier: 0,
-         pose: "sleeping",
-         effect: {
-           name: "Sleeping",
- ... (45 more removed lines; see GitHub link above)
+       }))
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38287-L38288` → after: `L1256-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1256-L1258) · [Before (L38287-L38288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38287-L38288)

```diff
-       return Az[zz]
-     }
+       let Eq = kq(qq, "root", {}, "_root"),
+         gq = function(qq) {
+           let Eq = {};
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38290-L38291` → after: `L1260-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1260-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1260-L1275) · [Before (L38290-L38291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38290-L38291)

```diff
-     function Lz(zz, uz) {
-       return Az[zz].getAllSettingsForTier(uz)
+           function gq(Yq, lq) {
+             let Oq = qq.children(Yq);
+             Oq && Oq.length && Oq.forEach((qq => gq(qq, lq + 1))), Eq[Yq] = lq
+           }
+           return qq.children(YE).forEach((qq => gq(qq, 1))), Eq
+         }(qq),
+         Yq = Object.values(gq),
+         lq = wq(Math.max, Yq) - 1,
+         Oq = 2 * lq + 1;
+       qq.graph().nestingRoot = Eq, qq.edges().forEach((Eq => qq.edge(Eq).minlen *= Oq));
+       let mq = function(qq) {
+         return qq.edges().reduce(((Eq, gq) => Eq + qq.edge(gq).weight), 0)
+       }(qq) + 1;
+       qq.children(YE).forEach((Yq => {
+         LE(qq, Eq, Oq, mq, lq, gq, Yq)
+       })), qq.graph().nodeRankFactor = Oq
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38294-L38298` → after: `L1278-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1278-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1278-L1308) · [Before (L38294-L38298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38294-L38298)

```diff
-     function* Pz() {
-       for (const zz in Az) {
-         const uz = Number(zz);
-         yield uz
-       }
+     function LE(qq, Eq, gq, Yq, lq, Oq, mq) {
+       var xq;
+       let Aq = qq.children(mq);
+       if (!Aq.length) return void(mq !== Eq && qq.setEdge(Eq, mq, {
+         weight: 0,
+         minlen: gq
+       }));
+       let cq = sq(qq, "_bt"),
+         uq = sq(qq, "_bb"),
+         Bq = qq.node(mq);
+       qq.setParent(cq, mq), Bq.borderTop = cq, qq.setParent(uq, mq), Bq.borderBottom = uq, Aq.forEach((xq => {
+         var Aq;
+         LE(qq, Eq, gq, Yq, lq, Oq, xq);
+         let Bq = qq.node(xq),
+           Wq = Bq.borderTop ? Bq.borderTop : xq,
+           Nq = Bq.borderBottom ? Bq.borderBottom : xq,
+ ... (15 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38301-L38303` → after: `L1321-L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1321-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1321-L1332) · [Before (L38301-L38303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38301-L38303)

```diff
-     function Gz(zz, uz, bz) {
-       const Ez = uz ? zz.fluidSpeedMultiplier : bz ? zz.landSpeedMultiplier : zz.airSpeedMultiplier;
-       return zz.speedMultiplier * Ez
+     function kE(qq, Eq, gq, Yq, lq, Oq) {
+       let mq = {
+           width: 0,
+           height: 0,
+           rank: Oq,
+           borderType: Eq
+         },
+         xq = lq[Eq][Oq - 1],
+         Aq = kq(qq, "border", mq, gq);
+       lq[Eq][Oq] = Aq, qq.setParent(Aq, Yq), xq && qq.setEdge(xq, Aq, {
+         weight: 1
+       })
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38306-L38307` → after: `L1335-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1335-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1335-L1350) · [Before (L38306-L38307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38306-L38307)

```diff
-     function az(zz, uz, bz) {
-       return null !== zz.fixedHeading ? zz.fixedHeading : zz.steering ? uz : bz
+     function RE(qq) {
+       var Eq;
+       let gq = null == (Eq = qq.graph().rankdir) ? void 0 : Eq.toLowerCase();
+       ("bt" === gq || "rl" === gq) && function(qq) {
+         qq.nodes().forEach((Eq => sE(qq.node(Eq)))), qq.edges().forEach((Eq => {
+           var gq;
+           let Yq = qq.edge(Eq);
+           null == (gq = Yq.points) || gq.forEach(sE), Object.hasOwn(Yq, "y") && sE(Yq)
+         }))
+       }(qq), ("lr" === gq || "rl" === gq) && (function(qq) {
+         qq.nodes().forEach((Eq => XE(qq.node(Eq)))), qq.edges().forEach((Eq => {
+           var gq;
+           let Yq = qq.edge(Eq);
+           null == (gq = Yq.points) || gq.forEach(XE), Object.hasOwn(Yq, "x") && XE(Yq)
+         }))
+       }(qq), UE(qq))
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38318-L38333` → after: `L1353-L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1353-L1354) · [Before (L38318-L38333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38318-L38333)

```diff
-     function nz(zz, uz) {
-       return zz && uz === Ez.m.DEFAULT
-     }
-     const iz = 150,
-       lz = 1.6,
-       Mz = 65,
-       tz = 500,
-       Hz = .6,
-       Oz = .5;
-     class pz {
-       constructor() {
-         this.li = 0, this.Mi = 0, this.yVelocity = 0
-       }
-       reset() {
-         this.li = 0, this.Mi = 0, this.yVelocity = 0
-       }
+     function UE(qq) {
+       qq.nodes().forEach((Eq => FE(qq.node(Eq)))), qq.edges().forEach((Eq => FE(qq.edge(Eq))))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38336-L38341` → after: `L1357-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1357-L1359) · [Before (L38336-L38341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38336-L38341)

```diff
-     function dz(zz, uz, bz, Ez) {
-       let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
-       zz.li = uz ? Math.min(zz.li + lz / iz * nz, lz) : 0, 0 === bz ? zz.Mi = 0 : Ez ? zz.Mi = nz : zz.Mi += nz;
-       const pz = Math.min(zz.Mi, iz) / iz,
-         dz = (Mz + pz * tz) * bz;
-       return zz.yVelocity *= Math.pow(Hz, nz), Math.abs(zz.yVelocity) < Oz && (zz.yVelocity = 0), dz
+     function FE(qq) {
+       let Eq = qq.width;
+       qq.width = qq.height, qq.height = Eq
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38366-L38378` → after: `L1362-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1362-L1363) · [Before (L38366-L38378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38366-L38378)

```diff
-     function fz(...zz) {
-       return zz[Xz[13]] = Xz[2], typeof Hz[zz[Xz[1]]] === Xz[18] ? Hz[zz[Xz[1]]] = function(...zz) {
-         for (Jz(zz[Xz[13]] = Xz[2], zz[Xz[5]] = 'L4JVUk#|l=5v]yjqX"~!>_i.)cEzK^Pmn1MY326Fb}Bu:S/7e0ITZsfx&w[;@NCad($t,9WH`+{gA?<%O8R*rhoDQGp', zz[Xz[0]] = "" + (zz[Xz[1]] || ""), zz[Xz[4]] = zz[Xz[0]].length, zz[Xz[10]] = [], zz[Xz[8]] = Xz[1], zz[Xz[9]] = Xz[1], zz[Xz[7]] = -Xz[ … [truncated]
-           if (zz[Xz[6]] = zz[Xz[5]].indexOf(zz[Xz[0]][zz[-Xz[3]]]), zz[Xz[6]] !== -Xz[2])
-             if (zz[Xz[7]] < Xz[1]) zz[Xz[7]] = zz[Xz[6]];
-             else {
-               Jz(zz[Xz[7]] += zz[Xz[6]] * Xz[32], zz[Xz[8]] |= zz[Xz[7]] << zz[Xz[9]], zz[Xz[9]] += (zz[Xz[7]] & Xz[35]) > Xz[36] ? Xz[37] : Xz[38]);
-               do {
-                 Jz(zz[Xz[10]].push(zz[Xz[8]] & Xz[12]), zz[Xz[8]] >>= Xz[11], zz[Xz[9]] -= Xz[11])
-               } while (zz[Xz[9]] > Xz[26]);
-               zz[Xz[7]] = -Xz[2]
-             } return zz[Xz[7]] > -Xz[2] && zz[Xz[10]].push((zz[Xz[8]] | zz[Xz[7]] << zz[Xz[9]]) & Xz[12]), sz(zz[Xz[10]])
-       }(Oz[zz[Xz[1]]]) : Hz[zz[Xz[1]]]
+     function sE(qq) {
+       qq.y = -qq.y
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38381-L38382` → after: `L1366-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1366-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1366-L1368) · [Before (L38381-L38382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38381-L38382)

```diff
-     function sz(...zz) {
-       return zz[Xz[13]] = Xz[2], typeof dz !== Xz[18] && dz ? (new dz).decode(new Fz(zz[Xz[1]])) : typeof Zz !== Xz[18] && Zz ? Zz.from(zz[Xz[1]]).toString("utf-8") : wz(zz[Xz[1]])
+     function XE(qq) {
+       let Eq = qq.x;
+       qq.x = qq.y, qq.y = Eq
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38385-L38418` → after: `L1371-L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1371-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1371-L1388) · [Before (L38385-L38418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38385-L38418)

```diff
-     function rz() {}
-     Jz(Hz = {}, Oz = ['M.O0W9$]}Ce+bHJPL@c<59{M7s#y0@|ckuXPN`N}hyfU$y1"H(WU', "oS2mI,Zo@Crc4", "g2}P^;uyVf.e+3+mVq^5Q1c}~]6ZoccK&foZjI?4vC<v(32!", "V@1TT2a7V", "ibVkT0A]z;>9UHQXf]FAn7{bFyky%J", "lw:mDZ#PN&%aN`2)RSY`]e6[.d!giJ]FMM#mC@M)j$gO37=m?&PU_", 'DSBn10}!w"q(hU<FdbMg1b>lCsr{ … [truncated]
-       Jz(zz[Xz[13]] = Xz[1], zz[Xz[16]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], zz[Xz[2]] = Xz[19], zz[-Xz[14]] = []);
-       try {
-         Jz(zz[Xz[2]] = Object, zz[-Xz[14]][Xz[28]]("".__proto__.constructor.name))
-       } catch (Oz) {}
-       zz: for (zz[-Xz[15]] = Xz[1]; zz[-Xz[15]] < zz[Xz[16]][Xz[13]]; zz[-Xz[15]]++) try {
-         for (zz[Xz[2]] = zz[Xz[16]][zz[-Xz[15]]](), zz[Xz[17]] = Xz[1]; zz[Xz[17]] < zz[-Xz[14]][Xz[13]]; zz[Xz[17]]++)
- ... (18 more removed lines; see GitHub link above)
+     function wE(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         gq = {},
+         Yq = qq.nodes().filter((Eq => !qq.children(Eq).length)),
+         lq = Yq.map((Eq => qq.node(Eq).rank)),
+         Oq = qE(wq(Math.max, lq) + 1).map((() => []));
+       return Yq.sort(((Eq, gq) => qq.node(Eq).rank - qq.node(gq).rank)).forEach((function Yq(lq) {
+         if (gq[lq]) return;
+         gq[lq] = !0;
+         let mq = qq.node(lq);
+         Oq[mq.rank].push(lq);
+         let xq = qq.successors(lq);
+         xq && [...xq].sort(((gq, Yq) => function(gq, Yq) {
+           let lq = qq.node(gq),
+             Oq = qq.node(Yq);
+           return lE(Eq, lq, Oq)
+ ... (2 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38472-L38543` → after: `L1391-L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1391-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1391-L1394) · [Before (L38472-L38543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38472-L38543)

```diff
-         function fz(...zz) {
-           return zz[Xz[13]] = Xz[2], typeof Hz[zz[Xz[1]]] === Xz[18] ? Hz[zz[Xz[1]]] = wz(Oz[zz[Xz[1]]]) : Hz[zz[Xz[1]]]
-         }
- 
-         function oz(...zz) {
-           Jz(zz[Xz[13]] = Xz[1], zz[Xz[5]] = function(uz, bz, Ez) {
-             return Ez.length !== uz.length + bz.length ? Xz[39] : zz[-Xz[37]](uz, bz, Ez, Xz[1], Xz[1], Xz[1], {})
-           }, zz[-Xz[37]] = function(...uz) {
-             return Jz(uz[Xz[13]] = Xz[26], uz[-Xz[64]] = Xz[39]), uz[Xz[33]] >= uz[Xz[20]].length ? Xz[59] : uz[Xz[24]]["" + uz[Xz[21]] + uz[Xz[10]] + uz[Xz[33]]] !== Xz[19] ? uz[Xz[24]]["" + uz[Xz[21]] + uz[Xz[10]] + uz[Xz[33]]] : (uz[Xz[20]][uz[Xz[33]]] === uz[Xz[1]][uz[Xz[21]] … [truncated]
-           }, console.log(zz[Xz[5]]))
-         }
-         fz(102) + "H" in rz && oz(), zz[Xz[5]] = Xz[2]
-       }
-       const bz = zz[Xz[5]] < Xz[1] ? -zz[Xz[33]] : zz[Xz[33]],
-         Ez = zz[Xz[10]] !== Xz[1] ? Math[Xz[65]] / Xz[10] : Math[Xz[65]] / Xz[20],
-         nz = zz[Xz[26]] + bz * Ez,
- ... (56 more removed lines; see GitHub link above)
+     function KE(qq, Eq) {
+       let gq = 0;
+       for (let Yq = 1; Yq < Eq.length; ++Yq) gq += CE(qq, Eq[Yq - 1], Eq[Yq]);
+       return gq
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38766-L38769` → after: `L1397-L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1397-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1397-L1420) · [Before (L38766-L38769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38766-L38769)

```diff
-     function Fz(zz) {
-       for (const uz of nz.d)
-         if (pz[uz].meshItemName === zz) return uz;
-       return null
+     function CE(qq, Eq, gq) {
+       let Yq = function(qq, Eq) {
+           return qq.reduce(((qq, gq, Yq) => (qq[gq] = Eq[Yq], qq)), {})
+         }(gq, gq.map(((qq, Eq) => Eq))),
+         lq = Eq.flatMap((Eq => {
+           let gq = qq.outEdges(Eq);
+           return gq ? gq.map((Eq => ({
+             pos: Yq[Eq.w],
+             weight: qq.edge(Eq).weight
+           }))).sort(((qq, Eq) => qq.pos - Eq.pos)) : []
+         })),
+         Oq = 1;
+       for (; Oq < gq.length;) Oq <<= 1;
+       let mq = 2 * Oq - 1;
+       Oq -= 1;
+       let xq = new Array(mq).fill(0),
+ ... (8 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38773-L38876` → after: `L1424-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1424-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1424-L1449) · [Before (L38773-L38876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38773-L38876)

```diff
-       const bz = zz.validBlockIds;
-       if (Array.isArray(bz)) return bz.includes(uz);
-       if (uz === tz) return !1;
-       if ("solidBlocks" === bz) return !0 !== iz.k[uz].hF;
-       if ("solidBlocksOrFluid" === bz) return !0;
-       throw new Error(`Unsupported validBlockIds for ${uz}: ${JSON.stringify(bz)}`)
-     }
-     const Rz = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
-       },
-       Kz = {
-         "Yellow Balloon": {
- ... (88 more removed lines; see GitHub link above)
+       let gq = {};
+       return qq.forEach(((qq, Eq) => {
+           let Yq = {
+             indegree: 0,
+             in: [],
+             out: [],
+             vs: [qq.v],
+             i: Eq
+           };
+           void 0 !== qq.barycenter && (Yq.barycenter = qq.barycenter, Yq.weight = qq.weight), gq[qq.v] = Yq
+         })), Eq.edges().forEach((qq => {
+           let Eq = gq[qq.v],
+             Yq = gq[qq.w];
+           void 0 !== Eq && void 0 !== Yq && (Yq.indegree++, Eq.out.push(Yq))
+         })),
+         function(qq) {
+ ... (10 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38878-L38883` → after: `L1451-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1451-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1451-L1455) · [Before (L38878-L38883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38878-L38883)

```diff
-         },
-         "Brown Balloon": {
-           ...Rz,
-           physicsState: {
-             type: Ez.m.BALLOON,
-             tier: Ez.c.BROWN
+ 
+           function Yq(Eq) {
+             return gq => {
+               gq.in.push(Eq), 0 === --gq.indegree && qq.push(gq)
+             }
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38885-L38890` → after: `L1457-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1457-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1457-L1459) · [Before (L38885-L38890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38885-L38890)

```diff
-         },
-         "Blue Balloon": {
-           ...Rz,
-           physicsState: {
-             type: Ez.m.BALLOON,
-             tier: Ez.c.BLUE
+           for (; qq.length;) {
+             let lq = qq.pop();
+             Eq.push(lq), lq.in.reverse().forEach(gq(lq)), lq.out.forEach(Yq(lq))
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38892-L38897` → after: `L1461-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1461-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1461-L1494) · [Before (L38892-L38897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38892-L38897)

```diff
-         },
-         "Black Balloon": {
-           ...Rz,
-           physicsState: {
-             type: Ez.m.BALLOON,
-             tier: Ez.c.BLACK
+           return Eq.filter((qq => !qq.merged)).map((qq => EE(qq, ["vs", "i", "barycenter", "weight"])))
+         }(Object.values(gq).filter((qq => !qq.indegree)))
+     }
+ 
+     function eE(qq, Eq, gq, Yq, lq) {
+       let Oq = {},
+         mq = null,
+         xq = null,
+         Aq = lq;
+       "boolean" == typeof Eq ? (Aq = Eq, Oq = {}) : Eq && (Oq = Eq, mq = null != gq ? gq : null, xq = null != Yq ? Yq : null);
+       let cq = function(qq, Eq) {
+           let gq = {
+             lhs: [],
+             rhs: []
+           };
+           return qq.forEach((qq => {
+ ... (18 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38902-L38904` → after: `L1512-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1512-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1512-L1515) · [Before (L38902-L38904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38902-L38904)

```diff
-     function wz(zz) {
-       var uz;
-       return null === zz || void 0 === zz ? null : null !== (uz = Kz[zz]) && void 0 !== uz ? uz : null
+     function DE(qq, Eq, gq) {
+       let Yq;
+       for (; Eq.length && (Yq = Eq[Eq.length - 1]).i <= gq;) Eq.pop(), qq.push(Yq.vs), gq++;
+       return gq
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38906-L38939` → after: `L1517-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1517-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1517-L1551) · [Before (L38906-L38939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38906-L38939)

```diff
-     const Xz = {
-         meshAttachment: {
-           size: 3,
-           offset: [0, .72, .3],
-           rotation: [-Math.PI / 2, Math.PI, Math.PI]
-         }
-       },
-       fz = {
-         "Wood Hang Glider": {
-           ...Xz,
-           physicsState: {
-             type: Ez.m.GLIDER,
-             tier: Ez.i.WOOD
-           }
-         },
-         "Iron Hang Glider": {
- ... (18 more removed lines; see GitHub link above)
+ 
+     function qg(qq, Eq, gq, Yq, lq) {
+       var Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq;
+       let dq = null,
+         jq = lq;
+       "boolean" == typeof Yq ? (jq = Yq, dq = null) : void 0 !== Yq && (dq = Yq);
+       let Hq = qq.children(Eq),
+         oq = qq.node(Eq),
+         Pq = oq ? oq.borderLeft : void 0,
+         Qq = oq ? oq.borderRight : void 0,
+         yq = {};
+       Pq && (Hq = Hq.filter((qq => qq !== Pq && qq !== Qq)));
+       let tq = function(qq) {
+         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Eq => {
+           let gq = qq.inEdges(Eq);
+           if (!gq || !gq.length) return {
+ ... (19 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38942` → after: `L1641-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1641-L1642) · [Before (L38942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38942)

```diff
-       };
+       })), Oq
+     }
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38945-L38946` → after: `L1645-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1645-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1645-L1660) · [Before (L38945-L38946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38945-L38946)

```diff
-       var uz;
-       return null === zz || void 0 === zz ? null : null !== (uz = fz[zz]) && void 0 !== uz ? uz : null
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       if ("function" == typeof Eq.customOrder) return void Eq.customOrder(qq, gg);
+       let Yq = Kq(qq),
+         lq = Yg(qq, qE(1, Yq + 1), "inEdges"),
+         Oq = Yg(qq, qE(Yq - 1, -1, -1), "outEdges"),
+         mq = wE(qq, gq);
+       if (Og(qq, mq), Eq.disableOptimalOrderHeuristic) return;
+       let xq, Aq = Number.POSITIVE_INFINITY,
+         cq = Eq.constraints || [];
+       for (let uq = 0, Bq = 0; Bq < 4; ++uq, ++Bq) {
+         lg(uq % 2 ? lq : Oq, uq % 4 >= 2, cq, gq), mq = Fq(qq);
+         let Eq = KE(qq, mq);
+         Eq < Aq ? (Bq = 0, xq = Object.assign({}, mq), Aq = Eq) : Eq === Aq && (xq = structuredClone(mq))
+       }
+       Og(qq, xq)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38951-L38952` → after: `L1663-L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1663-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1663-L1675) · [Before (L38951-L38952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38951-L38952)

```diff
-     function Nz(zz) {
-       return rz.has(zz)
+     function Yg(qq, Eq, gq) {
+       let Yq = new Map,
+         lq = (qq, Eq) => {
+           Yq.has(qq) || Yq.set(qq, []), Yq.get(qq).push(Eq)
+         };
+       for (let Oq of qq.nodes()) {
+         let Eq = qq.node(Oq);
+         if ("number" == typeof Eq.rank && lq(Eq.rank, Oq), "number" == typeof Eq.minRank && "number" == typeof Eq.maxRank)
+           for (let qq = Eq.minRank; qq <= Eq.maxRank; qq++) qq !== Eq.rank && lq(qq, Oq)
+       }
+       return Eq.map((function(Eq) {
+         return Eg(qq, Eq, gq, Yq.get(Eq) || [])
+       }))
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38955-L38956` → after: `L1678-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1678-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1678-L1699) · [Before (L38955-L38956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38955-L38956)

```diff
-     function vz(zz) {
-       return oz.has(zz)
+     function lg(qq, Eq, gq, Yq) {
+       let lq = !0,
+         Oq = new Jq;
+       qq.forEach((function(qq) {
+         gq.forEach((qq => Oq.setEdge(qq.left, qq.right)));
+         let mq = qq.graph().root,
+           {
+             result: xq,
+             usedBias: Aq
+           } = qg(qq, mq, Oq, Yq, lq);
+         Eq && Aq && (lq = !lq), xq.vs.forEach(((Eq, gq) => qq.node(Eq).order = gq)),
+           function(qq, Eq, gq) {
+             let Yq, lq = {};
+             gq.forEach((gq => {
+               let Oq, mq, xq = qq.parent(gq);
+               for (; xq;) {
+ ... (6 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38959-L38962` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1702-L1703) · [Before (L38959-L38962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38959-L38962)

```diff
-     function xz(zz) {
-       return zz === Ez.m.DEFAULT || function(zz) {
-         return rz.has(zz) || oz.has(zz)
-       }(zz)
+     function Og(qq, Eq) {
+       Object.values(Eq).forEach((Eq => Eq.forEach(((Eq, gq) => qq.node(Eq).order = gq))))
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38995-L39005` → after: `L1707-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1707-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1707-L1781) · [Before (L38995-L39005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L38995-L39005)

```diff
-       const Ez = Math.floor(uz.base[0] + nz),
-         lz = Math.floor(uz.max[0] - nz),
-         Mz = Math.floor(uz.base[2] + nz),
-         tz = Math.floor(uz.max[2] - nz);
-       let Hz = -1 / 0;
-       for (let Oz = Ez; Oz <= lz; Oz++)
-         for (let Ez = Mz; Ez <= tz; Ez++) {
-           const lz = zz(Oz, bz, Ez);
-           if (!lz) continue;
-           const Mz = Array.isArray(lz) ? lz : iz;
-           for (let zz = 0; zz < Mz.length; zz += 6) uz.base[0] < Oz + Mz[zz + 3] - nz && uz.max[0] > Oz + Mz[zz] + nz && uz.base[1] < bz + Mz[zz + 4] - nz && uz.max[1] > bz + Mz[zz + 1] + nz && uz.base[2] < Ez + Mz[zz + 5] - nz && uz.max[2] > Ez + Mz[zz + 2] + nz && bz + Mz[zz +  … [truncated]
+       if (Eq > gq) {
+         let qq = Eq;
+         Eq = gq, gq = qq
+       }
+       let Yq = qq[Eq];
+       Yq || (qq[Eq] = Yq = {}), Yq[gq] = !0
+     }
+ 
+     function xg(qq, Eq, gq) {
+       if (Eq > gq) {
+         let qq = Eq;
+         Eq = gq, gq = qq
+       }
+       let Yq = qq[Eq];
+       return void 0 !== Yq && Object.hasOwn(Yq, gq)
+     }
+ ... (59 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39007` → after: `L1783-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1783-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1783-L1967) · [Before (L39007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39007)

```diff
-       return Hz
+       }
+       return Aq((function(qq) {
+         let Eq = mq.inEdges(qq);
+         Oq[qq] = Eq ? Eq.reduce(((qq, Eq) => {
+           var gq;
+           let Yq = null != (gq = Oq[Eq.v]) ? gq : 0,
+             lq = mq.edge(Eq);
+           return Math.max(qq, Yq + (void 0 !== lq ? lq : 0))
+         }), 0) : 0
+       }), (function(qq) {
+         return mq.predecessors(qq) || []
+       })), Aq((function(Eq) {
+         let gq = mq.outEdges(Eq),
+           Yq = Number.POSITIVE_INFINITY;
+         gq && (Yq = gq.reduce(((qq, Eq) => {
+           let gq = Oq[Eq.w],
+ ... (169 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39011-L39018` → after: `L1971-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L1971-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L1971-L2001) · [Before (L39011-L39018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39011-L39018)

```diff
-       const Ez = Math.floor(uz.base[0] + nz),
-         iz = Math.floor(uz.max[0] - nz),
-         lz = Math.floor(uz.base[2] + nz),
-         Mz = Math.floor(uz.max[2] - nz);
-       for (let nz = Ez; nz <= iz; nz++)
-         for (let uz = lz; uz <= Mz; uz++)
-           if (zz(nz, bz, uz)) return !0;
-       return !1
+       var Yq;
+       if (!gq) return !1;
+       let lq = null == (Yq = Eq.node(qq)) ? void 0 : Yq.edgeObj;
+       if (!lq || Eq.node(qq).edgeLabel.reversed) return !1;
+       let Oq = gq.indexOf(null == lq ? void 0 : lq.v),
+         mq = gq.indexOf(null == lq ? void 0 : lq.w);
+       return -1 !== Oq && -1 !== mq && Oq === (mq + 1) % gq.length || Oq === (mq - 1) % gq.length
+     }
+ 
+     function Bg(qq, Eq) {
+       (function(qq) {
+         let Eq = Fq(qq),
+           gq = qq.graph(),
+           Yq = gq.ranksep,
+           lq = gq.rankalign,
+           Oq = 0;
+ ... (15 more added lines; see GitHub link above)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39022` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2006) · [Before (L39022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39022)

```diff
-       return zz.oV && zz.RM > 0 && zz.depenetrate && null === zz.vV
+       return Vg(qq, Iq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), qq
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39030-L39061` → after: `L2010-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2010-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2010-L2014) · [Before (L39030-L39061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39030-L39061)

```diff
-       const iz = bz.base[1],
-         tz = Math.floor(iz),
-         Oz = lz(zz, bz, tz),
-         pz = Oz - iz;
-       if (!(pz >= Ez)) return 0;
-       if (Mz(uz, bz, tz)) return 0;
-       const dz = Hz;
-       for (let Ez = 0; Ez < 3; Ez++) dz.base[Ez] = bz.base[Ez], dz.max[Ez] = bz.max[Ez];
-       dz.base[1] += pz, dz.max[1] += pz;
-       const Fz = Math.floor(dz.max[1] - nz);
-       for (let Ez = Math.floor(Oz); Ez <= Fz; Ez++)
-         if (Mz(uz, dz, Ez) || lz(zz, dz, Ez) !== -1 / 0) return 0;
-       return pz
-     }
-   },
-   37078: (zz, uz, bz) => {
- ... (16 more removed lines; see GitHub link above)
+       let Yq = Eq;
+       for (; void 0 !== Yq;) {
+         let Eq = qq.parent(Yq);
+         if (Eq === gq) return Yq;
+         Yq = Eq
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39063-L39069` → after: `L2016-L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2016-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2016-L2197) · [Before (L39063-L39069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39063-L39069)

```diff
-       chooseRandomEnchantmentAttributes(zz, uz, bz) {
-         const nz = [...bz],
-           iz = {
-             enchantments: {},
-             enchantmentTier: uz,
-             id: (0, Ez.d)()
-           },
+     }
+ 
+     function Vg(qq, Eq, gq) {
+       var Yq;
+       let lq = qq.nodes().filter((Eq => qq.children(Eq).length)),
+         Oq = {};
+       lq.forEach((Yq => {
+         let lq = qq.node(Yq);
+         if (lq && lq.rankdir) {
+           let mq = new Jq({
+             multigraph: !0,
+             compound: !0
+           });
+           mq.setGraph({
+             rankdir: lq.rankdir
+           });
+ ... (166 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39071` → after: `L2199-L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2199-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2199-L2227) · [Before (L39071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39071)

```diff
-         for (let Ez = 0; Ez < lz; Ez++) {
+         if (lq && lq.rankdir && lq._dagreClusterSubgraph && mq) {
+           let Oq = lq._dagreClusterSubgraph,
+             xq = null != (gq = lq.x) ? gq : 0,
+             Aq = null != (Yq = lq.y) ? Yq : 0,
+             cq = (mq.minX + mq.maxX) / 2,
+             uq = (mq.Cl + mq.Il) / 2;
+           Oq.nodes().forEach((gq => {
+             if (gq === Eq) return;
+             let Yq = Oq.node(gq),
+               lq = qq.node(gq);
+             if (lq && Yq && "number" == typeof Yq.x && "number" == typeof Yq.y) {
+               let qq = Yq.x - cq,
+                 Eq = Yq.y - uq;
+               lq.x = xq + qq, lq.y = Aq + Eq
+             }
+           })), delete lq._dagreClusterSubgraph
+ ... (13 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39073-L39075` → after: `L2229-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2229-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2229-L2239) · [Before (L39073-L39075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39073-L39075)

```diff
-           if (0 === nz.length) {
-             console.warn("Ran out of enchantments to choose from");
-             break
+           let lq = qq.edge(gq);
+           lq.minlen *= 2, "c" !== (null != (Yq = lq.labelpos) ? Yq : "r").toLowerCase() && ("TB" === Eq.rankdir || "BT" === Eq.rankdir ? lq.width += lq.labeloffset : lq.height += lq.labeloffset)
+         }))
+       }(qq))), Eq("    removeSelfEdges", (() => function(qq) {
+         qq.edges().forEach((Eq => {
+           if (Eq.v === Eq.w) {
+             let gq = qq.node(Eq.v);
+             gq.selfEdges || (gq.selfEdges = []), gq.selfEdges.push({
+               e: Eq,
+               label: qq.edge(Eq)
+             }), qq.removeEdge(Eq)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39077-L39082` → after: `L2241-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2241-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2241-L2493) · [Before (L39077-L39082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39077-L39082)

```diff
-           const {
-             enchantments: uz
-           } = iz, bz = nz[Math.floor(zz.next() * nz.length)];
-           uz[bz] = (null !== (Hz = uz[bz]) && void 0 !== Hz ? Hz : 0) + 1, uz[bz] >= tz && nz.splice(nz.indexOf(bz), 1)
-         }
-         return iz
+         }))
+       }(qq))), Eq("    acyclic", (() => NE(qq, xq))), Eq("    nestingGraph.run", (() => GE(qq))), Eq("    rank", (() => TE(Rq(qq)))), Eq("    injectEdgeLabelProxies", (() => function(qq) {
+         qq.edges().forEach((Eq => {
+           let gq = qq.edge(Eq);
+           if (gq.width && gq.height) {
+             let gq = qq.node(Eq.v),
+               Yq = {
+                 rank: (qq.node(Eq.w).rank - gq.rank) / 2 + gq.rank,
+                 e: Eq
+               };
+             kq(qq, "edge-proxy", Yq, "_ep")
+           }
+         }))
+       }(qq))), Eq("    removeEmptyRanks", (() => function(qq) {
+         let Eq = qq.nodes().map((Eq => qq.node(Eq).rank)).filter((qq => void 0 !== qq)),
+           gq = wq(Math.min, Eq),
+ ... (237 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39085-L39109` → after: `L2496-L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2496-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2496-L2517) · [Before (L39085-L39109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39085-L39109)

```diff
-     const iz = {
-         Sword: ["Damage", "Attack Speed", "Critical Damage"],
-         Spear: ["Damage", "Attack Speed", "Critical Damage"],
-         Dagger: ["Damage", "Attack Speed", "Critical Damage"],
-         Mace: ["Damage", "Attack Speed", "Critical Damage"],
-         Whip: ["Damage", "Attack Speed", "Critical Damage"],
-         Helmet: ["Protection", "Health", "Health Regen"],
-         Chestplate: ["Protection", "Health", "Health Regen"],
-         Leggings: ["Protection", "Health", "Health Regen"],
-         Boots: ["Protection", "Health", "Health Regen"],
-         Gauntlets: ["Protection", "Health", "Health Regen"],
-         Bow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
-         Crossbow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
-         Pickaxe: ["Break Speed", "Momentum", "Mining Yield", "Mining Aura"],
-         Spade: ["Break Speed", "Momentum", "Digging Aura"],
-         Axe: ["Break Speed", "Momentum", "Lumber Aura"],
- ... (9 more removed lines; see GitHub link above)
+ 
+     function jg(qq, Eq) {
+       qq.nodes().forEach((gq => {
+         let Yq = qq.node(gq),
+           lq = Eq.node(gq);
+         Yq && (Yq.x = lq.x, Yq.y = lq.y, Yq.order = lq.order, Yq.rank = lq.rank, Eq.children(gq).length && (Yq.width = lq.width, Yq.height = lq.height))
+       })), qq.edges().forEach((gq => {
+         let Yq = qq.edge(gq),
+           lq = Eq.edge(gq);
+         Yq.points = lq.points, Object.hasOwn(lq, "x") && (Yq.x = lq.x, Yq.y = lq.y)
+       })), qq.graph().width = Eq.graph().width, qq.graph().height = Eq.graph().height
+     }
+     var Hg = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
+       og = {
+         ranksep: 50,
+         edgesep: 20,
+ ... (6 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39111-L39115` → after: `L2519-L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2519-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2519-L2520) · [Before (L39111-L39115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39111-L39115)

```diff
-         "Tier 1": 1,
-         "Tier 2": 2,
-         "Tier 3": 3,
-         "Tier 4": 4,
-         "Tier 5": 5
+         width: 0,
+         height: 0
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39117-L39159` → after: `L2522-L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2522-L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2522-L2529) · [Before (L39117-L39159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39117-L39159)

```diff
-       tz = 3
-   },
-   37487: zz => {
-     zz.exports = "data:font/ttf;base64,AAEAAAAPAIAAAwBwR0RFRvJw+uoAA0KIAAACPE9TLzITxQuEAAABeAAAAGBjbWFwwhPxPQAAGngAAEKmY3Z0ICkQEMoAAGwEAAAAqGZwZ21iLwN/AABdIAAADgxnYXNwAAAAEAADQoAAAAAIZ2x5ZnEZfskAAIWYAAJ5xmhlYWQdrwaIAAAA/AAAADZoaGVhAnQGnQAAATQAAAAkaG10eK3Lsr4AAAHYAAAYnmxvY2EG+iY0A … [truncated]
-   },
-   37405: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
-   },
-   37393: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
-   },
-   37409: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
-   },
-   37387: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
- ... (27 more removed lines; see GitHub link above)
+       tg = ["minlen", "weight", "width", "height", "labeloffset"],
+       rg = {
+         minlen: 1,
+         weight: 1,
+         width: 0,
+         height: 0,
+         labeloffset: 10,
+         labelpos: "r"
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39161-L39177` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2531) · [Before (L39161-L39177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39161-L39177)

```diff
-       nz = 32768,
-       iz = [
-         ["opaque", Ez.opaque],
-         ["emissive", Ez.emissive],
-         ["vegetation", Ez.vegetation],
-         ["dirt", Ez.dirt],
-         ["sand", Ez.sand],
-         ["rock", Ez.rock],
-         ["slab", Ez.slab],
-         ["stairs", Ez.stairs],
-         ["flat", Ez.flat],
-         ["placed", Ez.placed],
-         ["held", Ez.yM],
-         ["dropped", Ez.dropped],
-         ["thrown", Ez.thrown],
-         ["lifeform", Ez.lifeform]
- ... (1 more removed lines; see GitHub link above)
+       vg = ["labelpos"];
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39179-L39180` → after: `L2533-L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2533-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2533-L2549) · [Before (L39179-L39180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39179-L39180)

```diff
-     function lz(zz, uz) {
-       return zz + 65536 * uz
+     function hg(qq) {
+       let Eq = new Jq({
+           multigraph: !0,
+           compound: !0
+         }),
+         gq = bg(qq.graph());
+       return Eq.setGraph(Object.assign({}, og, ng(gq, Hg), EE(gq, Pg))), qq.nodes().forEach((gq => {
+         let Yq = ng(bg(qq.node(gq)), Qg);
+         Object.keys(yg).forEach((qq => {
+           void 0 === Yq[qq] && (Yq[qq] = yg[qq])
+         })), Eq.setNode(gq, Yq);
+         let lq = qq.parent(gq);
+         void 0 !== lq && Eq.setParent(gq, lq)
+       })), qq.edges().forEach((gq => {
+         let Yq = bg(qq.edge(gq));
+         Eq.setEdge(gq, Object.assign({}, rg, ng(Yq, tg), EE(Yq, vg)))
+ ... (1 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39184` → after: `L2553-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2553-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2553-L2561) · [Before (L39184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39184)

```diff
-       return tz(zz) + 4 * tz(uz)
+       return gE(EE(qq, Eq), Number)
+     }
+ 
+     function bg(qq) {
+       let Eq = {};
+       return qq && Object.entries(qq).forEach((qq => {
+         let [gq, Yq] = qq;
+         "string" == typeof gq && (gq = gq.toLowerCase()), Eq[gq] = Yq
+       })), Eq
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L39188` → after: `L2565-L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2565-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/112.js#L2565-L2581) · [Before (L39188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/112.js#L39188)

```diff
-       return (Math.round(zz / (Math.PI / 2)) % 4 + 4) % 4
+       let Eq = Fq(qq),
+         gq = new Jq({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return qq.nodes().forEach((Eq => {
+         gq.setNode(Eq, {
+           label: Eq
+         }), gq.setParent(Eq, "layer" + qq.node(Eq).rank)
+       })), qq.edges().forEach((qq => gq.setEdge(qq.v, qq.w, {}, qq.name))), Eq.forEach(((qq, Eq) => {
+         let Yq = "layer" + Eq;
+         gq.setNode(Yq, {
+           rank: "same"
+         }), qq.reduce(((qq, Eq) => (gq.setEdge(qq, Eq, {
+           style: "invis"
+         }), Eq)))
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/113.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/113.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L83` → after: `L4-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L458) · [Before (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L83)

```diff
-   36088: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Rz,
-       f: () => oz
-     });
-     bz(8957);
-     var Ez = bz(56),
-       nz = bz(1417),
-       iz = bz(1871),
-       lz = bz(1912),
-       Mz = bz(20),
-       tz = bz(2313),
-       Hz = bz(36096),
-       Oz = bz(36103),
-       pz = bz(8920),
-       dz = bz(8954),
- ... (64 more removed lines; see GitHub link above)
+   37266: (qq, Eq, gq) => {
+     var Yq = {
+       "./67/67_Atlas.png": 27551,
+       "./67/67_Model.glb": 33537,
+       "./67/67_Reconstructed.glb": 33540,
+       "./67/variations/0_67_default.png": 27554,
+       "./Armour Collector/Armour Collector_Atlas.png": 27560,
+       "./Armour Collector/Armour Collector_Model.glb": 33546,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33554,
+       "./Armour Collector/variations/0_armour collector_default.png": 27562,
+       "./Bear/BearSaddle_Atlas.png": 27571,
+       "./Bear/Bear_Atlas.png": 27573,
+       "./Bear/Bear_Model.glb": 33560,
+       "./Bear/variations/0_bear_default.png": 27582,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27588,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33563,
+ ... (439 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L86` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L461-L462) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L86)

```diff
-       return ((0, Hz.e)(zz) - (0, Hz.e)(0)) * window.innerHeight / 100
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L90-L93` → after: `L466-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L466-L468) · [Before (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L90-L93)

```diff
-       var uz;
-       if (null === (uz = fz.current) || void 0 === uz || uz.call(fz, Nz(zz)), wz[0].current) {
-         const uz = `${(0,Hz.e)(zz)}vh`;
-         wz[0].current.style.transform = `translateX(calc(0px - ${uz}))`, wz[1].current.style.transform = `translateX(calc(0px + ${uz}))`, wz[2].current.style.transform = `translateY(calc(0px - ${uz}))`, wz[3].current.style.transform = `translateY(calc(0px + ${uz}))`
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L95-L176` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L470) · [Before (L95-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L95-L176)

```diff
-       Xz.current && (Xz.current.style.filter = `blur(${Math.round(zz/10)}px)`)
-     }
- 
-     function xz(zz) {
-       let {
-         custom: uz,
-         touch: bz
-       } = zz;
-       const iz = (0, nz.h)("aimingOverlay", "none"),
-         lz = "1.2vh",
-         Mz = "0.3vh";
-       (0, Ez.useEffect)((() => {
-         sz && vz(sz)
-       }), []);
-       const tz = (0, Ez.useRef)(null !== uz);
-       return (0, Ez.useLayoutEffect)((() => {
- ... (66 more removed lines; see GitHub link above)
+       return Yq[qq]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L179-L182` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L476-L478) · [Before (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L179-L182)

```diff
-   8954: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => dz,
-       g: () => pz
+   38255: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => Oq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L184-L188` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L480-L481) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L184-L188)

```diff
-     bz(8957);
-     var Ez = bz(1038),
-       nz = bz.n(Ez),
-       iz = bz(56),
-       lz = bz(8928);
+     var Yq = gq(38258),
+       lq = gq.n(Yq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L190-L192` → after: `L483-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L483-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L483-L486) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L190-L192)

```diff
-     function Mz(zz, uz) {
-       return Math.max(1, Math.round(zz * uz))
-     }
+     function Oq(qq) {
+       var Eq = [],
+         gq = [],
+         Yq = null;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L194-L201` → after: `L488-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L488-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L488-L508) · [Before (L194-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L194-L201)

```diff
-     function tz(zz, uz, bz) {
-       const Ez = 2 * bz >= uz - 1;
-       return {
-         x: zz,
-         y: zz,
-         size: uz,
-         border: Math.min(bz, Math.floor(uz / 2)),
-         filled: Ez
+       function Oq(gq, lq) {
+         var Oq = Yq[gq],
+           xq = Yq[lq];
+         Oq && xq && (function(qq, Eq, gq, Yq) {
+           if (qq.qxq) return Eq.qxq ? function(qq, Eq) {
+             var gq = (qq[3] - qq[0]) / 2,
+               Yq = (Eq[3] - Eq[0]) / 2,
+               lq = qq[0] + gq - (Eq[0] + Yq),
+               Oq = qq[2] + gq - (Eq[2] + Yq),
+               mq = gq + Yq;
+             return lq * lq + Oq * Oq <= mq * mq
+           }(gq, Yq) : mq(gq, Yq);
+           if (Eq.qxq) return mq(Yq, gq);
+           return !0
+         }(Oq, xq, Eq[gq], Eq[lq]) && function(qq, Eq, gq) {
+           var Yq = Eq.Zk,
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L203-L218` → after: `L510-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L510-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L510-L540) · [Before (L203-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L203-L218)

```diff
-     }
-     var Hz = bz(1089);
-     const Oz = 1.4;
- 
-     function pz(zz, uz) {
-       return zz && uz ? `scale(${Oz})` : "scale(1)"
-     }
- 
-     function dz(zz) {
-       return "classic" === zz.settings.style ? (0, Hz.jsx)(Rz, {
-         ...zz
-       }) : (0, Hz.jsx)(oz, {
-         ...zz
-       })
-     }
-     const Fz = .125;
+       return {
+         name: "collideEntities",
+         order: 70,
+         state: {
+           qxq: !1,
+           WYq: 1,
+           NYq: 1,
+           callback: null,
+           uYq: 0,
+           BYq: 0
+         },
+         Fy: null,
+         OJ: null,
+         system: function(mq, xq) {
+           for (var Aq = qq.Iy, cq = 0; cq < xq.length; cq++) {
+             var uq = xq[cq].Zk,
+ ... (15 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L220-L225` → after: `L542-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L542-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L542-L548) · [Before (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L220-L225)

```diff
-     function Zz(zz, uz) {
-       const bz = {};
-       if (zz.color !== lz.f.color && (bz.color = (0, lz.m)(zz.color)), zz.opacity !== lz.f.opacity && (bz.opacity = zz.opacity / 100), zz.outline !== lz.f.outline || zz.outlineColor !== lz.f.outlineColor) {
-         const uz = zz.outline,
-           Ez = (0, lz.m)(zz.outlineColor);
-         bz.textShadow = uz > 0 ? `-${uz}px 0 ${Ez}, 0 ${uz}px ${Ez}, ${uz}px 0 ${Ez}, 0 -${uz}px ${Ez}` : "none"
+       function mq(qq, Eq) {
+         var gq = (qq[3] - qq[0]) / 2,
+           Yq = qq[0] + gq,
+           lq = qq[2] + gq,
+           Oq = xq(Yq, Eq[0], Eq[3]) - Yq,
+           mq = xq(lq, Eq[2], Eq[5]) - lq;
+         return Oq * Oq + mq * mq <= gq * gq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L227-L229` → after: `L550-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L550-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L550-L552) · [Before (L227-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L227-L229)

```diff
-       if (zz.size !== lz.f.size) {
-         const Ez = zz.size / 100;
-         bz.fontSize = uz ? `calc(max(1.3rem, 18px) * ${Ez})` : `calc(1.3rem * ${Ez})`, bz.marginTop = `-${Fz}em`, bz.transformOrigin = `50% calc(50% + ${Fz}em)`
+ 
+       function xq(qq, Eq, gq) {
+         return qq < Eq ? Eq : qq > gq ? gq : qq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L233` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L555-L556) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L233)

```diff
- 
+   },
+   38322: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L264-L267` → after: `L559-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L559-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L559-L574) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L264-L267)

```diff
-         ...sz(zz, uz, bz),
-         width: Kz(zz.w, bz),
-         height: Kz(zz.h, bz),
-         background: Ez
+         name: "collideTerrain",
+         order: 0,
+         state: {
+           callback: null
+         },
+         Fy: function(Eq, gq) {
+           var Yq = qq.entities;
+           Yq.gxq(Eq) && (Yq.sqq(Eq).body.qW = function(gq) {
+             var Yq = qq.Iy.Yxq(Eq).callback;
+             Yq && Yq(gq, Eq)
+           })
+         },
+         OJ: function(Eq, gq) {
+           var Yq = qq.entities;
+           Yq.gxq(Eq) && (Yq.sqq(Eq).body.qW = null)
+         }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L270-L271` → after: `L577-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L577-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L577-L582) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L270-L271)

```diff
- 
-     function Xz(zz, uz, bz) {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => Yq
+     })
+   },
+   38348: (qq, Eq, gq) => {
+     function Yq(qq) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L273-L279` → after: `L584-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L584-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L584-L593) · [Before (L273-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L273-L279)

```diff
-         left: Kz(zz.x, uz),
-         top: Kz(zz.y, uz),
-         width: Kz(zz.size, uz),
-         height: Kz(zz.size, uz),
-         borderWidth: Kz(zz.border, uz),
-         borderColor: bz,
-         background: zz.filled ? bz : void 0
+         name: "Xqq",
+         order: 99,
+         state: {
+           NJ: 1.5
+         },
+         Fy: null,
+         OJ: null,
+         system: function(Eq, gq) {
+           for (var Yq = qq.camera.xI, Oq = 0; Oq < gq.length; Oq++) lq(gq[Oq], Yq, qq)
+         }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L290-L293` → after: `L598-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L598-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L598-L603) · [Before (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L290-L293)

```diff
-       const [Ez, nz] = zz.arm ? fz[zz.arm] : [0, 0], iz = Math.round(uz * bz);
-       return {
-         left: Kz(zz.x + Ez * iz, bz),
-         top: Kz(zz.y + nz * iz, bz)
+       if (gq.Iy.lxq(qq.Zk)) {
+         var Yq = gq.Iy.SEq(qq.Zk).mesh;
+         if (Yq.metadata) {
+           var lq = Eq < qq.NJ;
+           gq.Ma.t5(Yq, !lq)
+         }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L298-L303` → after: `L618-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L618-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L618-L620) · [Before (L298-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L298-L303)

```diff
-       return zz.arm ? {
-         "data-arm": zz.arm,
-         "data-x": zz.x,
-         "data-y": zz.y
-       } : {}
-     }
+       let Eq = 0;
+       const gq = lq().create(),
+         Yq = lq().create();
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L305-L401` → after: `L622-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L622-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L622-L634) · [Before (L305-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L305-L401)

```diff
-     function oz(zz) {
-       let {
-         settings: uz,
-         inPreview: bz,
-         inEditor: Ez,
-         pressed: pz = !1,
-         spread: dz,
-         spreadRef: Fz
-       } = zz;
-       const Zz = (0, iz.useRef)(null),
-         {
-           box: Rz,
-           dpr: Kz
-         } = function(zz) {
-           const [uz, bz] = (0, iz.useState)({
-             box: {
- ... (81 more removed lines; see GitHub link above)
+       function Oq(mq, xq) {
+         if (mq.Oxq === Eq) return;
+         mq.Oxq = Eq;
+         const Aq = qq.Iy.hgq(mq.FN);
+         Aq && Oq(Aq, xq);
+         const cq = qq.Iy.qI(mq.Zk),
+           uq = qq.Iy.qI(mq.FN);
+         if (uq)
+           if (mq.Tgq ? mq.Tgq(gq, xq, mq.offset) : lq().copy(gq, mq.offset), xq) lq().add(cq.dD, uq.dD, gq);
+           else {
+             const Eq = cq.BW || qq.BW;
+             for (let qq = 0; qq < 3; qq++) Yq[qq] = uq.position[qq] - Eq[qq] + gq[qq];
+             qq.Iy.xxq(mq.Zk, Yq)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L403-L497` → after: `L636-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L636-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L636-L667) · [Before (L403-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L403-L497)

```diff
-           const Fz = dz.map((zz => ({
-             ...zz,
-             x: zz.x - lz,
-             y: zz.y - lz,
-             w: zz.w + 2 * lz,
-             h: zz.h + 2 * lz
-           })));
-           let Zz = null,
-             Rz = null;
-           if (zz.circle) {
-             const zz = Oz + ((Oz - pz) % 2 === 0 ? 0 : 1),
-               uz = (pz - zz) / 2;
-             Zz = tz(uz, zz, Hz), lz > 0 && (Rz = tz(uz - lz, zz + 2 * lz, Hz + 2 * lz))
-           }
-           return {
-             cell: pz,
- ... (79 more removed lines; see GitHub link above)
+         else mq.Mgq || (mq.mxq && mq.mxq(mq.Zk), qq.Iy.Lk(mq.Zk, qq.Iy.names.HZ))
+       }
+       return {
+         name: "HZ",
+         order: qq.room ? 50 : 97,
+         state: {
+           FN: 0,
+           offset: null,
+           Tgq: null,
+           ngq: !0,
+           mxq: null,
+           Mgq: !1,
+           Oxq: 0
+         },
+         Fy: function(gq, Yq) {
+           Yq.offset = Yq.offset ? lq().clone(Yq.offset) : lq().create();
+ ... (16 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L500-L504` → after: `L670-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L670-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L670-L672) · [Before (L500-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L500-L504)

```diff
-   8962: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Oz,
-       g: () => Kz,
-       h: () => Rz
+   38357: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => Bq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L506-L513` → after: `L674-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L674-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L674-L679) · [Before (L506-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L506-L513)

```diff
-     var Ez = bz(8928);
-     const nz = "XH1-",
-       iz = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       lz = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       Mz = ["color", "outlineColor"],
-       tz = 1 + 3 * Mz.length + lz.length + 1,
-       Hz = Math.ceil(8 * tz / Math.log2(62)),
-       Oz = nz.length + Hz;
+     var Yq = gq(317),
+       lq = gq.n(Yq),
+       Oq = gq(37417),
+       mq = gq(37228),
+       xq = gq(38361),
+       Aq = gq(37605);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L515-L518` → after: `L681-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L681-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L681-L687) · [Before (L515-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L515-L518)

```diff
-     function pz(zz) {
-       let uz = 90;
-       for (const bz of zz) uz = 31 * uz + bz & 255;
-       return uz
+     function cq(qq, Eq) {
+       const gq = Eq.Plq || Eq;
+       void 0 === gq.uR?.aLightLevels && (gq.xR("aLightLevels", 4), gq.uR.aLightLevels = (0, Oq.m)());
+       const {
+         uR: Yq
+       } = Eq;
+       !Yq || void 0 !== Yq.aLightLevels && null !== Yq.aLightLevels && Yq.aLightLevels !== gq.uR?.aLightLevels || (Yq.aLightLevels = (0, Oq.m)()), qq.Ma.Agq && gq.material && qq.Ma.Agq(gq.material)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L524-L532` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L691-L692) · [Before (L524-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L524-L532)

```diff
-       let bz = 0n;
-       for (const nz of zz) {
-         const zz = dz.indexOf(nz);
-         if (zz < 0) return null;
-         bz = bz * Fz + BigInt(zz)
-       }
-       if (bz >> BigInt(8 * uz) !== 0n) return null;
-       const Ez = [];
-       for (let nz = 0; nz < uz; nz++) Ez.unshift(Number(0xffn & bz)), bz >>= 8n;
+       const gq = (0, Oq.i)(Eq);
+       for (const Yq of gq) cq(qq, Yq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L537-L544` → after: `L697-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L697-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L697-L752) · [Before (L537-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L537-L544)

```diff
-       let uz = "shapes" === zz.style ? 1 : 0;
-       iz.forEach(((bz, Ez) => {
-         zz[bz] && (uz |= 1 << Ez + 1)
-       }));
-       const bz = [uz];
-       for (const nz of Mz) {
-         const uz = (0, Ez.j)(nz, zz[nz]);
-         bz.push(uz >> 16 & 255, uz >> 8 & 255, 255 & uz)
+       return {
+         name: "mesh",
+         order: 100,
+         state: {
+           KJ: null,
+           egq: null,
+           mesh: null,
+           offset: null,
+           uxq: null,
+           yV: !1,
+           Bxq: !0,
+           qYq: !0,
+           Wxq: null,
+           Nxq: null,
+           axq: -1
+         },
+ ... (40 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L561-L565` → after: `L755-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L755-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L755-L768) · [Before (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L561-L565)

```diff
- 
-     function Kz(zz) {
-       for (const uz of zz.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Hz}})`, "gi"))) {
-         const zz = wz(Zz(uz[1], tz));
-         if (zz) return zz
+   },
+   38244: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       PhysicsState: () => Oq,
+       default: () => mq,
+       setFloatingYValue: () => cq,
+       oxq: () => Aq,
+       Pxq: () => uq
+     });
+     var Yq = gq(317),
+       lq = gq.n(Yq);
+     class Oq {
+       constructor() {
+         this.body = null, this.QY = null, this.wB = null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L571-L587` → after: `L773-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L773-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L773-L799) · [Before (L571-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L571-L587)

```diff
-       if (!zz || zz.length !== tz || pz(zz.slice(0, -1)) !== zz[zz.length - 1]) return null;
-       const uz = zz[0],
-         bz = {
-           ...Ez.f,
-           style: 1 & uz ? "shapes" : "classic"
-         };
-       iz.forEach(((zz, Ez) => {
-         bz[zz] = 0 !== (uz & 1 << Ez + 1)
-       }));
-       let nz = 1;
-       for (const Ez of Mz) bz[Ez] = zz[nz] << 16 | zz[nz + 1] << 8 | zz[nz + 2], nz += 3;
-       for (const iz of lz) {
-         const {
-           min: uz,
-           step: lz
-         } = Ez.b[iz];
- ... (1 more removed lines; see GitHub link above)
+       return {
+         name: "physics",
+         order: 40,
+         state: new Oq,
+         Fy: function(Eq, gq) {
+           gq.wB = qq, gq.QY = null, gq.body = qq.physics.OW(), Aq(gq, qq.Iy.qI(gq.Zk))
+         },
+         OJ: function(Eq, gq) {
+           if (qq.Iy.hasPosition(gq.Zk)) {
+             var Yq = qq.Iy.qI(gq.Zk);
+             uq(gq, Yq), Bq(gq, Yq, 0, !1)
+           }
+           qq.physics.mW(gq.body)
+         },
+         system: function(Eq, gq) {
+           for (var Yq = 0; Yq < gq.length; Yq++) {
+ ... (11 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L591-L679` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L802) · [Before (L591-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L591-L679)

```diff
-   },
-   8928: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Ez,
-       f: () => nz,
-       j: () => iz,
-       m: () => Hz,
-       n: () => tz,
-       p: () => Oz,
-       t: () => Mz,
-       u: () => lz
-     });
-     const Ez = {
-         opacity: {
-           min: 5,
-           max: 100,
- ... (73 more removed lines; see GitHub link above)
+     var xq = lq().create();
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L682-L691` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L805-L807) · [Before (L682-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L682-L691)

```diff
-       var bz;
-       const {
-         min: iz,
-         max: lz,
-         step: Mz
-       } = Ez[zz];
-       if (!Number.isFinite(uz)) return nz[zz];
-       const tz = (null !== (bz = String(Mz).split(".")[1]) && void 0 !== bz ? bz : "").length,
-         Hz = Number((Math.round(uz / Mz) * Mz).toFixed(tz));
-       return Math.min(lz, Math.max(iz, Hz))
+       var gq = qq.body.GB,
+         Yq = Eq.Cgq;
+       lq().copy(gq.base, Yq), lq().set(gq.vec, Eq.width, Eq.height, Eq.width), lq().add(gq.max, gq.base, gq.vec), cq(qq, Eq, qq.QY)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L695-L699` → after: `L811-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L811-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L811-L813) · [Before (L695-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L695-L699)

```diff
-       const Ez = "number" === typeof bz ? iz(uz, bz) : bz;
-       return {
-         ...zz,
-         [uz]: Ez
-       }
+       qq.QY = gq;
+       const Yq = Eq.BW ?? qq.wB.BW;
+       qq.body.kF = null !== gq ? gq - Yq[1] : null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L703-L708` → after: `L817-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L817-L820) · [Before (L703-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L703-L708)

```diff
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(nz).every((Ez => bz.includes(Ez) || zz[Ez] === uz[Ez]))
-     }
- 
-     function tz(zz) {
-       return Mz(zz, nz)
+       var gq = qq.body.GB.base,
+         Yq = Eq.width / 2,
+         lq = Eq.PEq;
+       lq[0] = gq[0] + Yq, lq[1] = gq[1], lq[2] = gq[2] + Yq
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L711-L717` → after: `L823-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L823-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L823-L825) · [Before (L711-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L711-L717)

```diff
-     function Hz(zz) {
-       return `#${zz.toString(16).padStart(6,"0")}`
-     }
- 
-     function Oz(zz) {
-       const uz = /^#?([0-9a-f]{6})$/i.exec(zz.trim());
-       return uz ? parseInt(uz[1], 16) : null
+     function Bq(qq, Eq, gq, Yq) {
+       var Oq = qq.body.JV;
+       lq().sq(xq, Eq.PEq, Oq, gq), Yq && lq().lerp(xq, Eq.dD, xq, .3), lq().copy(Eq.dD, xq)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L720-L723` → after: `L828-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L828-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L828-L832) · [Before (L720-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L720-L723)

```diff
-   8970: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => pz,
-       f: () => dz
+   38240: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       PositionState: () => lq,
+       default: () => Oq,
+       yxq: () => mq
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L725-L737` → after: `L834-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L834-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L834-L837) · [Before (L725-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L725-L737)

```diff
-     var Ez = bz(56),
-       nz = bz(33),
-       iz = bz(8962),
-       lz = bz(8928);
-     const Mz = "crosshairCode";
-     let tz = null;
-     const Hz = new Set;
- 
-     function Oz() {
-       if (null === tz) {
-         var zz;
-         const uz = nz.g.getItem(Mz);
-         tz = null !== (zz = "string" === typeof uz ? (0, iz.g)(uz) : null) && void 0 !== zz ? zz : lz.f
+     const Yq = gq(317);
+     class lq {
+       constructor() {
+         this.position = null, this.width = .8, this.height = .8, this.PEq = null, this.dD = null, this.Cgq = null, this.BW = null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L743-L744` → after: `L842-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L842-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L842-L860) · [Before (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L743-L744)

```diff
-       tz = zz, (0, lz.n)(zz) ? nz.g.removeItem(Mz) : nz.g.setItem(Mz, (0, iz.h)(zz));
-       for (const uz of Hz) uz()
+       return {
+         name: "position",
+         order: 41,
+         state: new lq,
+         Fy: function(Eq, gq) {
+           var lq = [0, 0, 0];
+           gq.position && Yq.copy(lq, gq.position), gq.position = lq, gq.PEq = Yq.create(), gq.dD = Yq.create(), gq.Cgq = new Float32Array(6), qq.TEq(gq.position, null, gq.PEq), Yq.copy(gq.dD, gq.PEq), mq(gq)
+         },
+         OJ: null,
+         system: function(Eq, gq) {
+           for (var Yq = 0; Yq < gq.length; Yq++) {
+             var lq = gq[Yq],
+               Oq = lq.BW ?? qq.BW,
+               xq = lq.position,
+               Aq = lq.PEq;
+             xq[0] = Aq[0] + Oq[0], xq[1] = Aq[1] + Oq[1], xq[2] = Aq[2] + Oq[2], mq(lq)
+ ... (3 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L747-L751` → after: `L863-L37444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L863-L37444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L863-L37444) · [Before (L747-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L747-L751)

```diff
-     function dz() {
-       const [zz, uz] = (0, Ez.useState)(Oz);
-       return (0, Ez.useEffect)((() => {
-         const zz = () => {
-           uz(Oz())
+     function mq(qq) {
+       var Eq = qq.width / 2,
+         gq = qq.PEq,
+         Yq = qq.Cgq;
+       Yq[0] = gq[0] - Eq, Yq[1] = gq[1], Yq[2] = gq[2] - Eq, Yq[3] = gq[0] + Eq, Yq[4] = gq[1] + qq.height, Yq[5] = gq[2] + Eq
+     }
+   },
+   38248: (qq, Eq, gq) => {
+     function Yq(qq) {
+       var Eq = "txq";
+       return {
+         name: Eq,
+         order: 99,
+         state: {
+           time: 100.1
+         },
+ ... (36566 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L753-L754` → after: `L37446-L37479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R37446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L37446-L37479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L37446-L37479) · [Before (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L753-L754)

```diff
-         return zz(), bz = zz, Hz.add(bz), () => {
-           Hz.delete(bz)
+         const gq = {};
+         for (const lq in Eq) {
+           const qq = Number(lq);
+           gq[qq] = {
+             ...this.baseSettings,
+             ...Eq[qq]
+           }
+         }
+         this.tierSettings = {
+           ...gq
+         };
+         const Yq = {},
+           Oq = {};
+         for (const lq in this.baseSettings) {
+           const qq = this.baseSettings[lq];
+           if ("number" !== typeof qq) continue;
+ ... (18 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L756-L757` → after: `L37481-L37625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R37481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L37481-L37625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L37481-L37625) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L756-L757)

```diff
-         var bz
-       }), []), zz
+         const Aq = {};
+         for (const lq in this.tierSettings) {
+           const qq = Number(lq);
+           Aq[qq] = {
+             speedMultiplier: mq.tiers[qq],
+             canAutoStep: xq.tiers[qq]
+           }
+         }
+         this.tierBlockLookups = Aq
+       }
+       getAllSettingsForTier(qq) {
+         return null === qq ? this.baseSettings : this.tierSettings[qq]
+       }
+       getBlockLookupsForTier(qq) {
+         return null === qq ? this.baseBlockLookups : this.tierBlockLookups[qq]
+       }
+ ... (129 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L760` → after: `L37628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R37628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L37628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L37628) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L760)

```diff
-   36197: (zz, uz, bz) => {
+   6340: (qq, Eq, gq) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L763` → after: `L37631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R37631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L37631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L37631) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L763)

```diff
-       f: () => tz,
+       g: () => lq,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L766-L767` → after: `L37634-L38084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R37634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L37634-L38084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L37634-L38084) · [Before (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L766-L767)

```diff
-     var Ez = bz(588),
-       nz = bz(2623);
+     var Yq = gq(6348);
+ 
+     function lq(qq, Eq) {
+       return qq && Eq === Yq.t.DEFAULT
+     }
+     const Oq = 150,
+       mq = 1.6,
+       xq = 65,
+       Aq = 500,
+       cq = .6,
+       uq = .5;
+     class Bq {
+       constructor() {
+         this.Nl = 0, this.al = 0, this.yVelocity = 0
+       }
+       reset() {
+ ... (435 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L770` → after: `L38087-L38089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38087-L38089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38087-L38089) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L770)

```diff
-       return zz === (0, nz.g)().M6 ? (0, nz.g)().iG : zz
+       for (const Eq of lq.c)
+         if (Bq[Eq].meshItemName === qq) return Eq;
+       return null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L773-L774` → after: `L38092-L38098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38092-L38098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38092-L38098) · [Before (L773-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L773-L774)

```diff
-     function lz(zz) {
-       return !(0, Ez.F)(zz) && iz(zz) === (0, nz.g)().iG
+     function aq(qq, Eq) {
+       const gq = qq.validBlockIds;
+       if (Array.isArray(gq)) return gq.includes(Eq);
+       if (Eq === Aq) return !1;
+       if ("solidBlocks" === gq) return !0 !== Oq.i[Eq].wW;
+       if ("solidBlocksOrFluid" === gq) return !0;
+       throw new Error(`Unsupported validBlockIds for ${Eq}: ${JSON.stringify(gq)}`)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L776` → after: `L38100-L38220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38100-L38220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38100-L38220) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L776)

```diff
-     const Mz = "gravity";
+     const Vq = {
+         meshAttachment: {
+           size: .12,
+           offset: [0, 1.8, -.24],
+           rotation: [0, 0, 0]
+         }
+       },
+       dq = {
+         "Yellow Balloon": {
+           ...Vq,
+           physicsState: {
+             type: Yq.t.BALLOON,
+             tier: Yq.e.YELLOW
+           }
+         },
+         "White Balloon": {
+ ... (105 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L778-L779` → after: `L38222-L38224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38222-L38224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38222-L38224) · [Before (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L778-L779)

```diff
-     function tz() {
-       return (0, nz.g)().physics[Mz][1]
+     function jq(qq) {
+       var Eq;
+       return null === qq || void 0 === qq ? null : null !== (Eq = dq[qq]) && void 0 !== Eq ? Eq : null
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L792-L793` → after: `L38227-L38231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38227-L38231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38227-L38231) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L792-L793)

```diff
-         song: 0,
-         sheet: 0
+         meshAttachment: {
+           size: 3,
+           offset: [0, .72, .3],
+           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+         }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L795-L796` → after: `L38233-L38262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38233-L38262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38233-L38262) · [Before (L795-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L795-L796)

```diff
-       tz = new WeakMap,
-       Hz = new WeakSet;
+       oq = {
+         "Wood Hang Glider": {
+           ...Hq,
+           physicsState: {
+             type: Yq.t.GLIDER,
+             tier: Yq.m.WOOD
+           }
+         },
+         "Iron Hang Glider": {
+           ...Hq,
+           physicsState: {
+             type: Yq.t.GLIDER,
+             tier: Yq.m.IRON
+           }
+         },
+         "Gold Hang Glider": {
+ ... (14 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L798-L799` → after: `L38264-L38266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38264-L38266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38264-L38266) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L798-L799)

```diff
-     function Oz(zz, uz) {
-       return tz.set(zz, uz), zz
+     function Pq(qq) {
+       var Eq;
+       return null === qq || void 0 === qq ? null : null !== (Eq = oq[qq]) && void 0 !== Eq ? Eq : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L802-L807` → after: `L38271-L38272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38271-L38272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38271-L38272) · [Before (L802-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L802-L807)

```diff
-     function pz() {
-       return {
-         bytes: lz,
-         songsDecoded: Mz.song,
-         sheetsDecoded: Mz.sheet
-       }
+     function tq(qq) {
+       return Qq.has(qq)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L811-L836` → after: `L38276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38276) · [Before (L811-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L811-L836)

```diff
-       if (Hz.has(zz)) return;
-       Hz.add(zz);
-       const uz = 1 === zz.decodeAudioData.length,
-         bz = zz.decodeAudioData.bind(zz);
-       zz.decodeAudioData = (zz, Ez, Hz) => {
-         const Oz = zz => {
-           const uz = nz._howls.filter((zz => "loaded" !== zz._state));
-           try {
-             null === Ez || void 0 === Ez || Ez(zz)
-           } finally {
-             const bz = uz.find((zz => "loaded" === zz._state));
-             void 0 !== bz && "string" === typeof bz._src && function(zz, uz, bz) {
-               var Ez;
-               lz += bz - (null !== (Ez = iz.get(uz)) && void 0 !== Ez ? Ez : 0), iz.set(uz, bz);
-               const nz = tz.get(zz);
-               void 0 !== nz && Mz[nz]++
- ... (10 more removed lines; see GitHub link above)
+       return yq.has(qq)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L838-L851` → after: `L38278-L38282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38278-L38282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38278-L38282) · [Before (L838-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L838-L851)

```diff
-     const Fz = Ez.Howl.prototype,
-       Zz = Fz.init;
-     Fz.init = function(zz) {
-       return Ez.Howler.volume(), nz.ctx && dz(nz.ctx), Zz.call(this, zz)
-     };
-     const Rz = Fz.unload;
-     Fz.unload = function() {
-       const zz = this._src,
-         uz = Rz.call(this);
-       if ("string" !== typeof zz) return uz;
-       const bz = iz.get(zz);
-       return void 0 !== bz && function(zz) {
-         return !nz._howls.some((uz => uz._src === zz || "string" === typeof uz._src && zz.indexOf(uz._src) >= 0))
-       }(zz) && (iz.delete(zz), lz -= bz), uz
+ 
+     function vq(qq) {
+       return qq === Yq.t.DEFAULT || function(qq) {
+         return Qq.has(qq) || yq.has(qq)
+       }(qq)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L854` → after: `L38285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38285) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L854)

```diff
-   36188: (zz, uz, bz) => {
+   37183: (qq, Eq, gq) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L856` → after: `L38287-L38290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38287-L38290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38287-L38290) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L856)

```diff
-       d: () => sz
+       c: () => mq,
+       g: () => Oq,
+       k: () => Yq,
+       l: () => lq
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L858-L1049` → after: `L38292-L38303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38292-L38303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38292-L38303) · [Before (L858-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L858-L1049)

```diff
-     var Ez = bz(36191),
-       nz = bz(195),
-       iz = bz(4616),
-       lz = bz(35918),
-       Mz = bz(36222),
-       tz = bz(36197),
-       Hz = bz(332),
-       Oz = bz.n(Hz),
-       pz = bz(1195),
-       dz = bz(2623),
-       Fz = bz(36214),
-       Zz = bz(22),
-       Rz = bz(20),
-       Kz = bz(36205);
-     const wz = new Set(["note"]);
-     const Xz = {
- ... (176 more removed lines; see GitHub link above)
+     let Yq = function(qq) {
+         return qq[qq.Linear = 0] = "Linear", qq[qq.CatmullRomSpline = 1] = "CatmullRomSpline", qq
+       }({}),
+       lq = function(qq) {
+         return qq[qq.NoLoop = 0] = "NoLoop", qq[qq.LoopOnLastFrame = 1] = "LoopOnLastFrame", qq[qq.HoldOnLastFrame = 2] = "HoldOnLastFrame", qq
+       }({}),
+       Oq = function(qq) {
+         return qq[qq.Movement = 0] = "Movement", qq[qq.Action = 1] = "Action", qq[qq.Emote = 2] = "Emote", qq[qq.Custom = 3] = "Custom", qq
+       }({}),
+       mq = function(qq) {
+         return qq[qq.Start = 0] = "Start", qq[qq.Stop = 1] = "Stop", qq
+       }({})
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1051-L1055` → after: `L38305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38305) · [Before (L1051-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1051-L1055)

```diff
-   36274: (zz, uz, bz) => {
-     function Ez(zz, uz) {
-       var bz, Ez, nz, iz, lz, Mz, tz, Hz;
-       return zz.name === uz.name && ((null === (bz = zz.attributes) || void 0 === bz || null === (Ez = bz.customAttributes) || void 0 === Ez ? void 0 : Ez.stackKey) === (null === (nz = uz.attributes) || void 0 === nz || null === (iz = nz.customAttributes) || void 0 === iz ? void  … [truncated]
-     }
+   38379: (qq, Eq, gq) => {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1057-L1062` → after: `L38307-L38327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38307-L38327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38307-L38327) · [Before (L1057-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1057-L1062)

```diff
-       b: () => Ez
-     })
-   },
-   36365: (zz, uz, bz) => {
-     function Ez(zz) {
-       return zz.includes("Leaf Bed")
+       e: () => Aq,
+       f: () => uq
+     });
+     const Yq = .001,
+       lq = .001,
+       Oq = [0, 0, 0, 1, 1, 1];
+ 
+     function mq(qq, Eq, gq) {
+       const Yq = Math.floor(Eq.base[0] + lq),
+         mq = Math.floor(Eq.max[0] - lq),
+         xq = Math.floor(Eq.base[2] + lq),
+         Aq = Math.floor(Eq.max[2] - lq);
+       let cq = -1 / 0;
+       for (let uq = Yq; uq <= mq; uq++)
+         for (let Yq = xq; Yq <= Aq; Yq++) {
+           const mq = qq(uq, gq, Yq);
+ ... (5 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1065-L1066` → after: `L38330-L38338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38330-L38338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38330-L38338) · [Before (L1065-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1065-L1066)

```diff
-     function nz(zz) {
-       return / Bed(?: Head)?(?:\||$)/.test(zz) && !Ez(zz)
+     function xq(qq, Eq, gq) {
+       const Yq = Math.floor(Eq.base[0] + lq),
+         Oq = Math.floor(Eq.max[0] - lq),
+         mq = Math.floor(Eq.base[2] + lq),
+         xq = Math.floor(Eq.max[2] - lq);
+       for (let lq = Yq; lq <= Oq; lq++)
+         for (let Eq = mq; Eq <= xq; Eq++)
+           if (qq(lq, gq, Eq)) return !0;
+       return !1
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1070` → after: `L38342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38342) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1070)

```diff
-       return zz.includes(" Strongbed")
+       return qq.JF && qq.Am > 0 && qq.depenetrate && null === qq.kF
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1073-L1074` → after: `L38349-L38362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38349-L38362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38349-L38362) · [Before (L1073-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1073-L1074)

```diff
-     function lz(zz) {
-       return Ez(zz) || nz(zz) || iz(zz)
+     function uq(qq, Eq, gq) {
+       const Oq = gq.base[1],
+         Aq = Math.floor(Oq),
+         uq = mq(qq, gq, Aq),
+         Bq = uq - Oq;
+       if (!(Bq >= Yq)) return 0;
+       if (xq(Eq, gq, Aq)) return 0;
+       const Wq = cq;
+       for (let Yq = 0; Yq < 3; Yq++) Wq.base[Yq] = gq.base[Yq], Wq.max[Yq] = gq.max[Yq];
+       Wq.base[1] += Bq, Wq.max[1] += Bq;
+       const Nq = Math.floor(Wq.max[1] - lq);
+       for (let Yq = Math.floor(uq); Yq <= Nq; Yq++)
+         if (xq(Eq, Wq, Yq) || mq(qq, Wq, Yq) !== -1 / 0) return 0;
+       return Bq
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1083` → after: `L38365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38365) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1083)

```diff
-   36363: (zz, uz, bz) => {
+   37629: (qq, Eq, gq) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1085` → after: `L38367-L38368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38367-L38368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38367-L38368) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1085)

```diff
-       e: () => Hz
+       e: () => lq,
+       h: () => mq
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1087-L1100` → after: `L38370-L38403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38370-L38403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38370-L38403) · [Before (L1087-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1087-L1100)

```diff
-     var Ez = bz(36365),
-       nz = bz(9078);
-     const iz = [],
-       lz = [],
-       Mz = [],
-       tz = [];
-     for (const Oz of Object.keys(nz.p))(0, Ez.g)(Oz) ? iz.push(Oz) : (0, Ez.k)(Oz) && lz.push(Oz), (0, Ez.j)(Oz) && Mz.push(Oz), (Oz.includes(" Bed Head") || Oz.includes(" Strongbed Head")) && tz.push(Oz);
-     const Hz = {
-       leafBeds: iz,
-       woolBeds: lz,
-       strongBeds: Mz,
-       beds: [...iz, ...lz, ...Mz],
-       bedHeads: tz,
-       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
+     var Yq = gq(616);
+     class lq {
+       constructor(qq) {
+         this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(qq).map((qq => {
+           let [Eq, gq] = qq;
+           const Yq = gq.name;
+           return void 0 !== Oq[Yq] ? [Eq, Yq] : [Eq, Yq.split(" ").at(-1)]
+         })))
+       }
+       getPossibleEnchantmentsForItem(qq) {
+         var Eq;
+         return null !== (Eq = Oq[this.suffixMapping[qq]]) && void 0 !== Eq ? Eq : []
+       }
+       chooseRandomEnchantmentAttributes(qq, Eq, gq) {
+         const lq = [...gq],
+           Oq = {
+ ... (18 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1103` → after: `L38439-L38442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38439-L38442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38439-L38442) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1103)

```diff
-   6204: (zz, uz, bz) => {
+   38047: qq => {
+     qq.exports = "data:font/ttf;base64,AAEAAAAPAIAAAwBwR0RFRvJw+uoAA0KIAAACPE9TLzITxQuEAAABeAAAAGBjbWFwwhPxPQAAGngAAEKmY3Z0ICkQEMoAAGwEAAAAqGZwZ21iLwN/AABdIAAADgxnYXNwAAAAEAADQoAAAAAIZ2x5ZnEZfskAAIWYAAJ5xmhlYWQdrwaIAAAA/AAAADZoaGVhAnQGnQAAATQAAAAkaG10eK3Lsr4AAAHYAAAYnmxvY2EG+iY0A … [truncated]
+   },
+   37918: (qq, Eq, gq) => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1109-L1111` → after: `L38448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38448) · [Before (L1109-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1109-L1111)

```diff
-       l: () => Hz,
-       m: () => Ez,
-       q: () => Mz
+       m: () => mq
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L1113-L1136` → after: `L38450-L38495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R38450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L38450-L38495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/113.js#L38450-L38495) · [Before (L1113-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/113.js#L1113-L1136)

```diff
-     let Ez = function(zz) {
-         return zz[zz.DEFAULT = 0] = "DEFAULT", zz[zz.BOAT = 1] = "BOAT", zz[zz.GLIDER = 2] = "GLIDER", zz[zz.BALLOON = 3] = "BALLOON", zz[zz.SLEEPING = 4] = "SLEEPING", zz[zz.RIDING_MOB = 5] = "RIDING_MOB", zz[zz.CAR = 6] = "CAR", zz[zz.HOVERCRAFT = 7] = "HOVERCRAFT", zz
-       }({}),
-       nz = function(zz) {
-         return zz[zz.WOOD = 0] = "WOOD", zz[zz.OBSIDIAN = 1] = "OBSIDIAN", zz[zz.SPEED = 2] = "SPEED", zz
-       }({}),
-       iz = function(zz) {
-         return zz[zz.WOOD = 0] = "WOOD", zz[zz.IRON = 1] = "IRON", zz[zz.GOLD = 2] = "GOLD", zz[zz.DIAMOND = 3] = "DIAMOND", zz
-       }({}),
-       lz = function(zz) {
-         return zz[zz.YELLOW = 0] = "YELLOW", zz[zz.WHITE = 1] = "WHITE", zz[zz.RED = 2] = "RED", zz[zz.PURPLE = 3] = "PURPLE", zz[zz.PINK = 4] = "PINK", zz[zz.ORANGE = 5] = "ORANGE", zz[zz.MAGENTA = 6] = "MAGENTA", zz[zz.LIME = 7] = "LIME", zz[zz.LIGHT_GRAY = 8] = "LIGHT_GRAY", z … [truncated]
-       }({}),
-       Mz = function(zz) {
-         return zz[zz.ROTATION_1 = 0] = "ROTATION_1", zz[zz.ROTATION_2 = 1] = "ROTATION_2", zz[zz.ROTATION_3 = 2] = "ROTATION_3", zz[zz.ROTATION_4 = 3] = "ROTATION_4", zz
-       }({}),
-       tz = function(zz) {
- ... (8 more removed lines; see GitHub link above)
+     const Yq = {
+         opaque: 1,
+         emissive: 2,
+         vegetation: 4,
+         dirt: 8,
+         sand: 16,
+         rock: 32,
+         slab: 64,
+         stairs: 128,
+         flat: 256,
+         Fc: 512,
+         dropped: 1024,
+         thrown: 2048,
+         placed: 4096,
+         lifeform: 65536
+       },
+ ... (30 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/114.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/114.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L4-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/114.js#L4-L786) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/114.js#L4)

```diff
-   6206: (zz, uz, bz) => {
+   36669: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Vq,
+       f: () => yq
+     });
+     gq(9251);
+     var Yq = gq(57),
+       lq = gq(1416),
+       Oq = gq(1904),
+       mq = gq(1942),
+       xq = gq(24),
+       Aq = gq(2383),
+       cq = gq(36674),
+       uq = gq(36681),
+       Bq = gq(9207),
+       Wq = gq(9246),
+ ... (767 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L9-L44` → after: `L809-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L809-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/114.js#L809-L967) · [Before (L9-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/114.js#L9-L44)

```diff
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
-       musicVolumeLevel: .6,
- ... (20 more removed lines; see GitHub link above)
+       stop: () => Qq,
+       fade: () => Qq,
+       rate: () => Qq,
+       stopsAtOnce: () => !1,
+       isAlive: () => !1,
+       getDurationMs: () => 0,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => Qq,
+       setPannerAttr: () => Qq,
+       setPosition: () => Qq
+     };
+     class yq {
+       constructor(qq) {
+         let Eq, {
+           src: gq,
+ ... (143 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L46-L167` → after: `L969-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L969-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/114.js#L969-L1103) · [Before (L46-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/114.js#L46-L167)

```diff
-       },
-       canCustomiseChar: !0,
-       defaultBlock: "Block of Gold",
-       cantChangeError: "You cannot modify this block",
-       cantBreakError: null,
-       cantBuildError: null,
-       touchscreenActionButton: null,
-       strictFluidBuckets: !0,
-       preserveProtectedFluidSources: !1,
-       fillBrokenBlocksWithWater: !1,
-       canUseZoomKey: !0,
-       canAltAction: !0,
-       canSeeNametagsThroughWalls: !0,
-       showBasicMovementControls: !0,
-       middleTextTop: "",
-       middleTextUpper: "",
- ... (106 more removed lines; see GitHub link above)
+         const Hq = (0, Nq.e)(),
+           oq = Array.isArray(mq) ? mq : Hq.Iy.Py(mq),
+           yq = Hq.Iy.Py(Hq.oR);
+         if (!oq || Bq().sqrDist(oq, yq) > xq * xq) return Qq;
+         let tq;
+         if (!uq) {
+           if (!this.spatialVoices.admit({
+               group: Pq.has(Vq) ? null : (0, jq.g)(qq),
+               loudness: (0, jq.f)(Eq, Bq().KO(oq, yq), Aq),
+               startMs: performance.now(),
+               getDurationMs: () => {
+                 var qq, Eq;
+                 return null !== (qq = null === (Eq = tq) || void 0 === Eq ? void 0 : Eq.getDurationMs()) && void 0 !== qq ? qq : 0
+               },
+               isAlive: () => {
+                 var qq, Eq;
+ ... (119 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/115.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/115.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115, 389];
+ export const ids = [115];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L4-L1462` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/115.js#L4) · [Before (L4-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/115.js#L4-L1462)

```diff
-   35825: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       default: () => Pu
-     });
-     var Ez = bz(316),
-       nz = bz(3248),
-       iz = bz(3298),
-       lz = bz(3290),
-       Mz = bz(3286),
-       tz = bz(1181),
-       Hz = bz(33),
-       Oz = bz(1673),
-       pz = bz(1332),
-       dz = bz(1419),
-       Fz = bz(1038),
-       Zz = bz.n(Fz),
- ... (1443 more removed lines; see GitHub link above)
+   6354: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L1466-L1482` → after: `L8-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/115.js#L8-L45) · [Before (L1466-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/115.js#L1466-L1482)

```diff
-     var Ez = bz(1298),
-       nz = bz(1212),
-       iz = bz(588);
- 
-     function lz(zz) {
-       return zz = function(zz, uz) {
-         var bz;
-         const Ez = new URLSearchParams(uz),
-           nz = Ez.get("lobby"),
-           iz = Ez.get("vm"),
-           lz = null !== (bz = nz) && void 0 !== bz ? bz : zz.lobbyName,
-           Mz = null !== iz && void 0 !== iz ? iz : zz.directJoinVmUrl;
-         if (lz === zz.lobbyName && Mz === zz.directJoinVmUrl) return zz;
-         return {
-           ...zz,
-           lobbyName: lz,
- ... (1 more removed lines; see GitHub link above)
+     const Yq = {
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L1484-L1503` → after: `L47-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L47-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/115.js#L47-L166) · [Before (L1484-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/115.js#L1484-L1503)

```diff
-       }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), zz = function(zz) {
-         if ((0, iz.F)(zz.directJoinVmUrl)) return zz;
-         const uz = (0, nz.cb)(zz.directJoinVmUrl);
-         null === uz && (zz.directJoinVmUrl = void 0);
-         return zz
-       }(zz = function(zz) {
-         if ((0, iz.F)(zz.gameNameWithVariation)) return zz;
-         return zz.gameNameWithVariation = (0, Ez.l)(zz.gameNameWithVariation), zz
-       }(zz))
-     }
-   },
-   8581: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz,
-       g: () => nz
-     });
- ... (4 more removed lines; see GitHub link above)
+       },
+       canCustomiseChar: !0,
+       defaultBlock: "Block of Gold",
+       cantChangeError: "You cannot modify this block",
+       cantBreakError: null,
+       cantBuildError: null,
+       touchscreenActionButton: null,
+       strictFluidBuckets: !0,
+       preserveProtectedFluidSources: !1,
+       fillBrokenBlocksWithWater: !1,
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       middleTextTop: "",
+       middleTextUpper: "",
+ ... (104 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/116.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/116.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116];
+ export const ids = [116, 390];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L4)

```diff
-   6245: (zz, uz, bz) => {
+   36394: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L8-L17` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L8-L40) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L8-L17)

```diff
-     var Ez = bz(1181),
-       nz = bz(128),
-       iz = bz(235),
-       lz = bz(1419),
-       Mz = bz(1283),
-       tz = bz(20),
-       Hz = bz(1638),
-       Oz = bz(3155),
-       pz = bz(2877),
-       dz = bz(1089);
+     var Yq = gq(296),
+       lq = gq(3383),
+       Oq = gq(3428),
+       mq = gq(3422),
+       xq = gq(3416),
+       Aq = gq(1183),
+       cq = gq(38),
+       uq = gq(1710),
+       Bq = gq(1341),
+       Wq = gq(1422),
+       Nq = gq(1018),
+       aq = gq.n(Nq),
+       Vq = gq(1659),
+       dq = gq(57),
+       jq = gq(71),
+       Hq = gq(2330),
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L19` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L42-L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L19)

```diff
-     function Fz() {
+     function pq(qq) {
+       var Eq;
+       let {
+         eventName: gq
+       } = qq;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L22-L635` → after: `L49-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L49-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L49-L171) · [Before (L22-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L22-L635)

```diff
-       } = (0, Ez.F)(), uz = !(0, iz.shouldUseUkPrivacyPolicy)();
-       return (0, dz.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, dz.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: zz("homePage:privacyPolicy")
-         }), (0, dz.jsx)("p", {
-           children: (0, dz.jsxs)("em", {
-             children: ["Last updated: ", Oz.g.toLocaleDateString()]
-           })
-         }), (0, dz.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, dz.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, dz.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
- ... (598 more removed lines; see GitHub link above)
+       } = (0, Aq.v)(), lq = nq.h[gq], [Oq, mq] = (0, dq.useState)((() => Date.now() >= lq.endsAt.getTime())), [xq, cq] = (0, dq.useState)("overall"), uq = function(qq, Eq) {
+         const {
+           userContext: gq,
+           isUserContextUpdating: Yq
+         } = (0, Qq.c)(), lq = `${qq}:${Eq}`, [Oq, mq] = (0, dq.useState)({
+           requestKey: lq,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, dq.useEffect)((() => {
+           if (Yq) return;
+           let Oq, xq = !1;
+           const Aq = async () => {
+             if ("visible" === document.visibilityState) try {
+               const Yq = await bq.e.getGameEventLeaderboard(gq, {
+ ... (107 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L637-L669` → after: `L173-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L173-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L173-L241) · [Before (L637-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L637-L669)

```diff
-           }), (0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: (0, dz.jsx)("a", {
-                   href: "https://policies.google.com/technologies/partner-sites",
-                   children: "Google Analytics"
-                 })
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Usage data, pages visited, interactions on the site"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Analyzes website usage to help us understand how the site is used and improve user experience."
-               })
- ... (17 more removed lines; see GitHub link above)
+           }), (0, Tq.jsxs)("div", {
+             className: "GameEventPanelLeaderboard",
+             children: [(0, Tq.jsxs)("div", {
+               className: "GameEventPanelLeaderboardHeader",
+               children: [(0, Tq.jsx)("h3", {
+                 className: "GameEventPanelLeaderboardTitle",
+                 children: Yq(lq.leaderboard.titleKey)
+               }), (0, Tq.jsx)(Mq.c, {
+                 ariaLabel: Yq("gameEvents:leaderboardScope"),
+                 options: nq.e.map((qq => ({
+                   value: qq,
+                   label: Yq(`gameEvents:${qq}Scope`)
+                 }))),
+                 value: xq,
+                 onChange: cq
+               })]
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L672-L687` → after: `L244-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L244-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L244-L345) · [Before (L672-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L672-L687)

```diff
-         }), (0, dz.jsx)("h4", {
-           children: "Content Moderation"
-         }), (0, dz.jsxs)("table", {
-           children: [(0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "What They Do"
-               })
+         })
+       })
+     }
+ 
+     function Gq(qq) {
+       let {
+         event: Eq,
+         progress: gq
+       } = qq;
+       const {
+         t: Yq
+       } = (0, Aq.v)(), lq = null !== gq && Eq.prizeGoals.some(((qq, Eq) => gq[Eq] >= qq.target));
+       return (0, Tq.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, Tq.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+ ... (86 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L689-L704` → after: `L347-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L347-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L347-L354) · [Before (L689-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L689-L704)

```diff
-           }), (0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: (0, dz.jsx)("a", {
-                   href: "https://www.lassomoderation.com/privacy-policy/",
-                   children: "Lasso Moderation"
-                 })
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Anonymized IP addresses, chat logs, usernames, reports, custom lobby metadata, custom game metadata, thumbnail uploads"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Provides automated and manual moderation services to ensure chat safety and compliance with guidelines."
-               })
+           }), (0, Tq.jsxs)("aside", {
+             className: "GamePageContentSection",
+             children: [(0, Tq.jsx)("h2", {
+               children: Oq.tips
+             }), (0, Tq.jsx)("ul", {
+               children: Yq.tips.map((qq => (0, Tq.jsx)("li", {
+                 children: qq
+               }, qq)))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L706-L711` → after: `L356-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L356-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L356-L388) · [Before (L706-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L706-L711)

```diff
-           }), (0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: (0, dz.jsx)("a", {
-                   href: "https://www.purgomalum.com/",
-                   children: "PurgoMalum"
+           }), (0, Tq.jsxs)("section", {
+             className: "GamePageContentSection GamePageContentFaq",
+             children: [(0, Tq.jsx)("h2", {
+               children: Oq.faq
+             }), Yq.faq.map((qq => {
+               let {
+                 question: Eq,
+                 answer: gq
+               } = qq;
+               return (0, Tq.jsxs)("div", {
+                 className: "GamePageContentFaqItem",
+                 children: [(0, Tq.jsx)("h3", {
+                   children: Eq
+                 }), (0, Tq.jsx)("p", {
+                   children: gq
+                 })]
+ ... (17 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L713-L721` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L390) · [Before (L713-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L713-L721)

```diff
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Chat logs"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Provides profanity filtering for moderating chat messages."
-               })
+               }, qq)))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L724-L757` → after: `L393-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L393-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L393-L548) · [Before (L724-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L724-L757)

```diff
-         }), (0, dz.jsx)("h4", {
-           children: "Payment Providers"
-         }), (0, dz.jsxs)("table", {
-           children: [(0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (18 more removed lines; see GitHub link above)
+         })
+       })
+     }
+     var sq = gq(1025),
+       Xq = gq(96),
+       wq = gq(1109),
+       Kq = gq(9326),
+       Cq = gq(1639),
+       Iq = gq(1512),
+       eq = gq(1498),
+       Dq = gq(1587),
+       qE = gq(1435),
+       EE = gq(1336),
+       gE = gq(36397),
+       YE = gq(1219),
+       lE = gq(987),
+ ... (140 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L759-L790` → after: `L550-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L550-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L550-L1264) · [Before (L759-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L759-L790)

```diff
-         }), (0, dz.jsx)("h4", {
-           children: "Platform Integrations"
-         }), (0, dz.jsxs)("table", {
-           children: [(0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Information Processed"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (16 more removed lines; see GitHub link above)
+         })]
+       })
+     }
+     var jE = gq(4501),
+       HE = gq(4420),
+       oE = gq(3455);
+     const PE = 8,
+       QE = 12;
+ 
+     function yE(qq) {
+       let {
+         customLobbies: Eq,
+         favouriteLobbies: gq,
+         toggleLikeLobby: Yq,
+         showReport: lq
+       } = qq;
+ ... (699 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L794-L845` → after: `L1334-L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L1334-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L1334-L1348) · [Before (L794-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L794-L845)

```diff
-         }), (0, dz.jsx)("h3", {
-           children: "3.4 YouTube API Services"
-         }), (0, dz.jsxs)("p", {
-           children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", ( … [truncated]
-             href: "https://www.youtube.com/t/terms",
-             children: "YouTube Terms of Service"
-           }), "."]
-         }), (0, dz.jsxs)("p", {
-           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, dz.jsx)("a", {
-             href: "http://www.google.com/policies/privacy",
-             children: "http://www.google.com/policies/privacy"
-           }), "."]
-         }), (0, dz.jsx)("p", {
-           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
-         }), (0, dz.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
- ... (36 more removed lines; see GitHub link above)
+         }), Eq.rows.length > 0 && (0, Nq.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: Eq.rows.map((qq => (0, Nq.jsxs)("div", {
+             className: Wq()("GameApprovalInfoRow", qq.passed ? "Passed" : "Failed"),
+             children: [(0, Nq.jsx)(uq.d, {
+               name: qq.passed ? "check" : "xmark"
+             }), (0, Nq.jsxs)("div", {
+               className: "GameApprovalInfoRowText",
+               children: [(0, Nq.jsx)("div", {
+                 className: "GameApprovalInfoRowLabel",
+                 children: qq.label
+               }), (0, Nq.jsx)("div", {
+                 className: "GameApprovalInfoRowValue",
+                 children: qq.valueText
+               })]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L847-L886` → after: `L1350-L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L1350-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L1350-L1453) · [Before (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L847-L886)

```diff
-           }), (0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Analytical Cookies"
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Help us understand how players use the site by collecting anonymized data (e.g., pages visited)."
-               })
-             }), (0, dz.jsx)("td", {
-               children: (0, dz.jsx)("p", {
-                 children: "Tracking the number of visitors or identifying popular game features."
-               })
-             })]
-           }), (0, dz.jsxs)("tr", {
-             children: [(0, dz.jsx)("td", {
- ... (24 more removed lines; see GitHub link above)
+           }, qq.label)))
+         })]
+       })
+     }
+     var Vq = gq(1183),
+       dq = gq(1336);
+ 
+     function jq(qq) {
+       dq.NotificationProvider.showCustomPopup({
+         body: () => (0, Nq.jsx)(Hq, {
+           ...qq
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
+ ... (88 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L1063-L1079` → after: `L1469-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L1469-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L1469-L1510) · [Before (L1063-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L1063-L1079)

```diff
-       const {
-         adMobPrivacyOptionsRequired: zz
-       } = (0, tz.m)(["adMobPrivacyOptionsRequired"]);
-       if (!zz) return null;
-       return (0, dz.jsx)(lz.f, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await Hz.d.request("ads.showPrivacyOptions", {})
-             } catch (zz) {
-               console.error("Failed to open AdMob privacy options:", zz)
-             }
-           })()
-         },
-         children: "Manage Privacy Choices"
- ... (1 more removed lines; see GitHub link above)
+       const [qq, Eq] = (0, Yq.useState)(!1);
+       return (0, Yq.useLayoutEffect)((() => {
+         let qq = !0;
+         return (0, lq.b)().then((() => {
+           qq && Eq(!0)
+         })), () => {
+           qq = !1
+         }
+       }), []), qq
+     }
+   },
+   8876: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+     });
+     var Yq = gq(1313),
+ ... (26 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L1083-L1095` → after: `L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/116.js#L1521) · [Before (L1083-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/116.js#L1083-L1095)

```diff
-       return (0, dz.jsxs)(dz.Fragment, {
-         children: [(0, nz.d)() && (0, dz.jsx)(dz.Fragment, {
-           children: (0, dz.jsx)(lz.f, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, Mz.o)()
-             },
-             children: "Adjust Discord Privacy Choices"
-           })
-         }), (0, dz.jsx)(Zz, {}), (0, dz.jsx)(pz.e, {
-           className: "PrivacyPolicyLinks"
-         }), (0, dz.jsx)(Fz, {})]
-       })
+       Yq = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L4)

```diff
-   6252: (zz, uz, bz) => {
+   6390: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L8-L9` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L8-L17) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L8-L9)

```diff
-     var Ez = bz(1181),
-       nz = bz(1089);
+     var Yq = gq(1183),
+       lq = gq(136),
+       Oq = gq(218),
+       mq = gq(1422),
+       xq = gq(1298),
+       Aq = gq(24),
+       cq = gq(1677),
+       uq = gq(3263),
+       Bq = gq(3035),
+       Wq = gq(1070);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L14` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L22) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L14)

```diff
-       } = (0, Ez.F)();
+       } = (0, Yq.v)(), Eq = !(0, Oq.shouldUseUkPrivacyPolicy)();
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L27) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L19)

```diff
-           children: zz("homePage:termsOfService")
+           children: qq("homePage:privacyPolicy")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L21-L22` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L29-L30) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L21-L22)

```diff
-           children: (0, nz.jsx)("em", {
-             children: "Last updated: July 15, 2025"
+           children: (0, Wq.jsxs)("em", {
+             children: ["Last updated: ", uq.l.toLocaleDateString()]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L25` → after: `L33-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L33-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L33-L121) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L25)

```diff
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, Wq.jsx)("h2", {
+           children: "1. Who We Are"
+         }), (0, Wq.jsx)("p", {
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
+         }), (0, Wq.jsx)("p", {
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+         }), (0, Wq.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, Wq.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, Wq.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, Wq.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+         }), (0, Wq.jsxs)("table", {
+ ... (73 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L27` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L123) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L27)

```diff
-           children: "1. General Information"
+           children: "2.2 Chat Rooms"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L29` → after: `L125-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L125-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L125-L135) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L29)

```diff
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
+           children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
+           }), (0, Wq.jsx)("li", {
+             children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
+           }), (0, Wq.jsx)("li", {
+             children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
+           })]
+         }), (0, Wq.jsx)("p", {
+           children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L31` → after: `L137-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L137-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L137-L146) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L31)

```diff
-           children: "2. Definitions"
+           children: "2.3 Registered players"
+         }), (0, Wq.jsx)("h4", {
+           children: "2.3.1 Age Requirements and Parental Consent"
+         }), (0, Wq.jsxs)("p", {
+           children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer t … [truncated]
+             href: "https://families.google.com/familylink/privacy/child-policy",
+             children: "Google\u2019s Child Privacy Policy"
+           }), "."]
+         }), (0, Wq.jsx)("h4", {
+           children: "2.3.2 Data Collection for Registered Players"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L33-L45` → after: `L148-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L148-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L148-L162) · [Before (L33-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L33-L45)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, nz.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, nz.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
-             }), (0, nz.jsx)("li", {
-               children: '"User", "you", or "your" refers to anyone using the Services.'
-             }), (0, nz.jsx)("li", {
-               children: '"Content" means all text, graphics, logos, images, software, and other material found on Bloxd.io.'
-             }), (0, nz.jsx)("li", {
-               children: '"Virtual Goods" refers to virtual items available for purchase within Bloxd.io, such as game items and in-game currency.'
+           children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
+         }), (0, Wq.jsxs)("table", {
+           children: [(0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L47` → after: `L164-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L164-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L164-L222) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L47)

```diff
-           })
+           }), (0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Account Info"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Username, email address"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "To create and manage user accounts."
+               })
+             })]
+           }), (0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+ ... (43 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L49` → after: `L224-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L224-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L224-L312) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L49)

```diff
-           children: "3. Age Requirements"
+           children: "2.3.3 Data Collection for Store Purchases"
+         }), (0, Wq.jsx)("p", {
+           children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
+         }), (0, Wq.jsxs)("table", {
+           children: [(0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Why We Collect It"
+ ... (73 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L51` → after: `L314-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L314-L316) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L51)

```diff
-           children: "To use Bloxd.io, you must be at least 13 years old. If you are under 13, you need permission from a parent or guardian. By using our Services, you confirm that you meet this age or permission requirement."
+           children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
+         }), (0, Wq.jsx)("p", {
+           children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L53` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L318) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L53)

```diff
-           children: "4. Account Creation and Security"
+           children: "2.4 When You Contact Us"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L55-L59` → after: `L320-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L320-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L320-L334) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L55-L59)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Account Information: You agree to provide accurate and complete information when creating your account. You are responsible for keeping your account information secure and confidential."
-             }), (0, nz.jsx)("li", {
-               children: "Account Security: Notify us immediately if you suspect unauthorized access to your account. We are not liable for any loss or damage arising from your failure to secure your account."
+           children: "When you reach out to us, we collect information to help us respond to you effectively:"
+         }), (0, Wq.jsxs)("table", {
+           children: [(0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What We Collect"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Why We Collect It"
+               })
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L61` → after: `L336-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L336-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L336-L382) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L61)

```diff
-           })
+           }), (0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Contact Info"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Your email address or phone number"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "To get back to you about your questions or concerns."
+               })
+             })]
+           }), (0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+ ... (31 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L63` → after: `L384-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L384-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L384-L386) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L63)

```diff
-           children: "5. User Conduct and Community Guidelines"
+           children: "3.1 Scope of This Privacy Policy"
+         }), (0, Wq.jsxs)("p", {
+           children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L65-L67` → after: `L388-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L388-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L388-L392) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L65-L67)

```diff
-           children: "We are committed to creating a fun, safe, and inclusive environment for everyone. By using Bloxd.io, you agree to follow our Community Conduct Guidelines and adhere to the following rules:"
-         }), (0, nz.jsx)("h4", {
-           children: "Expected Behavior"
+           children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging w … [truncated]
+         }), (0, Wq.jsx)("p", {
+           children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
+         }), (0, Wq.jsx)("h3", {
+           children: "3.2 Advertisers"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L69-L75` → after: `L394-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L394-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L394-L420) · [Before (L69-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L69-L75)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Show Respect: Treat others with kindness and consideration in all interactions."
-             }), (0, nz.jsx)("li", {
-               children: "Promote Positivity: Engage in activities that contribute to a positive community experience."
-             }), (0, nz.jsx)("li", {
-               children: "Play Fairly: Participate honestly and with integrity, respecting the rules and spirit of the game."
+           children: "Bloxd.io displays ads from selected partners. On our website, ads are managed and delivered by our web advertising partners; within our mobile apps (available on iOS and Android), ads are delivered through Google AdMob."
+         }), Eq && (0, Wq.jsx)("p", {
+           children: "With your consent, we may display personalized ads tailored to your interests based on information such as your browsing history, device information, your device\u2019s advertising identifier, and your interactions with our site and apps. Where you do not pro … [truncated]
+         }), !Eq && (0, Wq.jsx)("p", {
+           children: "These ads are non-personalized, meaning they are not based on your personal data or browsing behavior, but rather on general context. We do not collect personal data from children under 13 for advertising purposes."
+         }), (0, Wq.jsx)("p", {
+           children: "Where the EU or UK General Data Protection Regulation (GDPR) applies, our website asks for your advertising and cookie choices through a consent prompt registered with the IAB Transparency and Consent Framework when you first visit. You can review, change or  … [truncated]
+         }), (0, Wq.jsx)("h3", {
+           children: "3.3 Service Providers"
+         }), (0, Wq.jsx)("p", {
+           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
+         }), (0, Wq.jsx)("h4", {
+           children: "Hosting and Data Storage"
+         }), (0, Wq.jsxs)("table", {
+           children: [(0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+ ... (11 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L77` → after: `L422-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L422-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L422-L464) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L77)

```diff
-           })
+           }), (0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "AWS Cloud"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Data storage and processing"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Hosts our servers and stores backup, data securely."
+               })
+             })]
+           }), (0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+ ... (27 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L79-L95` → after: `L466-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L466-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L466-L514) · [Before (L79-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L79-L95)

```diff
-           children: "Prohibited Behavior"
-         }), (0, nz.jsxs)("p", {
-           children: ["To maintain a safe and welcoming environment, the following actions are strictly prohibited:", (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Harassment and Threats: Any form of bullying, stalking, or harassment, including making threats or inciting violence."
-             }), (0, nz.jsx)("li", {
-               children: "Discrimination and Hate Speech: Discriminating against or mocking others based on age, race, ethnicity, gender, sexual orientation, religion, disability, or any other protected characteristic."
-             }), (0, nz.jsx)("li", {
-               children: "Inappropriate Content and Behavior: Sharing or promoting content that is sexually explicit, violent, or otherwise inappropriate."
-             }), (0, nz.jsx)("li", {
-               children: "Impersonation: Impersonating other players, staff, or developers with the intent to deceive or harm."
-             }), (0, nz.jsx)("li", {
-               children: "Account Security and Privacy: Sharing, selling, or trading accounts, or using someone else's account without permission."
-             }), (0, nz.jsx)("li", {
-               children: "Spam and Advertising: Spamming chat, boards, or other communication channels with repetitive or irrelevant messages."
-             }), (0, nz.jsx)("li", {
- ... (1 more removed lines; see GitHub link above)
+           children: "Website Security and Performance"
+         }), (0, Wq.jsxs)("table", {
+           children: [(0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What They Do"
+               })
+             })]
+ ... (33 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L99` → after: `L518-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L518-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L518-L800) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L99)

```diff
-           children: "Cheating and Unfair Play"
+           children: "Advertising Management"
+         }), (0, Wq.jsxs)("table", {
+           children: [(0, Wq.jsxs)("tr", {
+             children: [(0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What They Collect"
+               })
+             }), (0, Wq.jsx)("td", {
+               children: (0, Wq.jsx)("p", {
+                 children: "What They Do"
+               })
+             })]
+ ... (267 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L101-L111` → after: `L802-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L802-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L802-L887) · [Before (L101-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L101-L111)

```diff
-           children: ["You may not make, use, share, or promote any cheats, hacks, bots, scripts, or other tools that change how the game works or give players an unfair advantage.", (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "This includes trying to bypass any form of security - including, but not limited to, protections related to client integrity or gameplay action security."
-             }), (0, nz.jsx)("li", {
-               children: "It also includes trying to reverse engineer our game's code in any way, or trying to gain unauthorised access to our systems."
-             }), (0, nz.jsx)("li", {
-               children: "If you do any of these things, we may suspend or ban your account, and we reserve the right to take civil and/or criminal legal action for your actions harming our game, our players, and our business."
-             }), (0, nz.jsx)("li", {
-               children: "If you break these rules - like hacking, cheating, or trying to mess with our game or servers - you agree to pay us \xa325,000 for each violation. This is because it's hard to measure exactly how much damage those actions cause, and this amount is a fair  … [truncated]
-             }), (0, nz.jsx)("li", {
-               children: "These rules apply to everyone, whether or not you have a game account, and even if you used a bot or other automated tool to do it."
+           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, Wq.jsx)("a", {
+             href: "http://www.google.com/policies/privacy",
+             children: "http://www.google.com/policies/privacy"
+           }), "."]
+         }), (0, Wq.jsx)("p", {
+           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
+         }), (0, Wq.jsx)("h2", {
+           children: "4. Cookies and Tracking Technologies"
+         }), (0, Wq.jsx)("h3", {
+           children: "4.1 What Are Cookies?"
+         }), (0, Wq.jsx)("p", {
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
+         }), (0, Wq.jsx)("h3", {
+           children: "4.2 Types of Cookies We Use"
+         }), (0, Wq.jsx)("p", {
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+ ... (70 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L115` → after: `L891-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L891-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L891-L893) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L115)

```diff
-           children: "6. Software License and IP Restrictions"
+           children: "4.3 Managing Cookies"
+         }), (0, Wq.jsx)("p", {
+           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L118` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L896-L898) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L118)

```diff
-             children: "License Grant: We grant you a limited, non-exclusive, non-transferable right to download and run the Bloxd game client solely to access and play our Services."
+             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
+           }), (0, Wq.jsx)("li", {
+             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L120` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L900) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L120)

```diff
-             children: "What You Can't Do: You may not copy, modify, distribute, or create derivative works of the game client, or attempt to reverse-engineer, decompile, disassemble, hack, bypass security, inject cheats, bots, scripts, or any unauthorized tools. Any such action a … [truncated]
+             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L122` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L902) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L122)

```diff
-             children: "Our Ownership: All intellectual property rights in the game client and Services stay with Bloxd LTD. You get no ownership or other rights here beyond this limited license."
+             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L124-L125` → after: `L904-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L904-L905) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L124-L125)

```diff
-         }), (0, nz.jsx)("h3", {
-           children: "7. Virtual Goods and In-Game Purchases"
+         }), (0, Wq.jsx)("h2", {
+           children: "5. Security Measures"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L127-L135` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L907) · [Before (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L127-L135)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Purchases: Virtual Goods can be purchased within the Services. All purchases are final and non-refundable unless required by law."
-             }), (0, nz.jsx)("li", {
-               children: "License: When you purchase Virtual Goods, you receive a limited, non-transferable license to use them within the Services."
-             }), (0, nz.jsx)("li", {
-               children: "Termination: We may terminate your access to Virtual Goods if you violate these Terms or our Community Conduct Guidelines."
-             })]
-           })
+           children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L137-L145` → after: `L909-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L909-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L909-L917) · [Before (L137-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L137-L145)

```diff
-           children: "8. Modifications and Updates"
-         }), (0, nz.jsx)("p", {
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Service Changes: We may update or modify the Services at any time without prior notice. We are not liable for any changes, suspensions, or discontinuations of the Services."
-             }), (0, nz.jsx)("li", {
-               children: "Terms Updates: These Terms may be updated periodically. We will notify you of significant changes, and your continued use of the Services constitutes your acceptance of the new Terms."
-             })]
-           })
+           children: "5.1 Technologies and Procedures"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "We use encryption\xa0and other security technologies to safeguard your personal information during transmission and storage."
+           }), (0, Wq.jsx)("li", {
+             children: "Our servers are hosted by trusted partners who apply high security standards to protect the data we store."
+           }), (0, Wq.jsx)("li", {
+             children: "We regularly monitor our systems for potential vulnerabilities and use firewalls and anti-virus software to prevent unauthorized access."
+           })]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L147-L155` → after: `L919-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L919-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L919-L925) · [Before (L147-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L147-L155)

```diff
-           children: "9. Termination"
-         }), (0, nz.jsx)("p", {
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Termination by You: You can terminate your account at any time by contacting us."
-             }), (0, nz.jsx)("li", {
-               children: "Termination by Us: We reserve the right to terminate or suspend your account if you violate these Terms, the Community Conduct Guidelines, or engage in harmful behavior."
-             })]
-           })
+           children: "5.2 Staff Training and Compliance"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
+           }), (0, Wq.jsx)("li", {
+             children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
+           })]
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L157` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L927) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L157)

```diff
-           children: "10. Reporting and Consequences"
+           children: "5.3 Data Breach Notification"
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L159-L167` → after: `L929-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L929-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L929-L943) · [Before (L159-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L159-L167)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Reporting Violations: If you encounter behavior that violates these Terms or the Community Conduct Guidelines, report it using the in-game tools. Your reports help us maintain a high-quality, enjoyable experience for everyone."
-             }), (0, nz.jsx)("li", {
-               children: "Consequences for Violations: Breaking these guidelines can result in penalties ranging from temporary suspensions to permanent bans. Players who demonstrate positive behavior over time may see a reduction in penalties."
-             })]
-           })
-         }), (0, nz.jsx)("h3", {
-           children: "11. Disclaimer of Warranties"
+           children: "In the unlikely event of a data breach that affects your personal information:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "We will promptly notify\xa0affected users, as required by law."
+           }), (0, Wq.jsx)("li", {
+             children: "The notification will include:"
+           })]
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "What data was compromised."
+           }), (0, Wq.jsx)("li", {
+             children: "The steps we are taking to resolve the issue and protect your data."
+           }), (0, Wq.jsx)("li", {
+             children: "Recommendations for what you can do to protect yourself (e.g., change passwords)."
+           })]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L169-L175` → after: `L945-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L945-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L945-L969) · [Before (L169-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L169-L175)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: 'As-Is Basis: The Services are provided "as is" and "as available", without any warranties, either express or implied.'
-             }), (0, nz.jsx)("li", {
-               children: "No Warranty: We do not guarantee that the Services will be uninterrupted or error-free."
-             })]
-           })
+           children: "We take all necessary steps to ensure that breaches are addressed swiftly to minimize any potential harm."
+         }), (0, Wq.jsx)("h2", {
+           children: "6. International Data Transfers"
+         }), (0, Wq.jsx)("p", {
+           children: "Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded."
+         }), (0, Wq.jsx)("h2", {
+           children: "7. Data Retention"
+         }), (0, Wq.jsx)("p", {
+           children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
+           }), (0, Wq.jsx)("li", {
+             children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
+           }), (0, Wq.jsx)("li", {
+             children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
+ ... (9 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L177` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L971) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L177)

```diff
-           children: "12. Limitation of Liability"
+           children: "8.1 Your Choices and Control"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L179-L185` → after: `L973-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L973-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L973-L987) · [Before (L179-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L179-L185)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "No Liability: To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Services."
-             }), (0, nz.jsx)("li", {
-               children: "Total Liability: Our total liability to you for any claims related to the Services is limited to the amount you paid us in the past 12 months."
-             })]
-           })
+           children: "As a user of Bloxd.io, you have the right to:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "Access Your Data: Request a copy of the personal information we hold about you."
+           }), (0, Wq.jsx)("li", {
+             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
+           }), (0, Wq.jsx)("li", {
+             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
+           }), (0, Wq.jsx)("li", {
+             children: "Limit Data Collection: Request that we limit the collection or use of your data."
+           }), (0, Wq.jsx)("li", {
+             children: "Object to Data Processing: Object to certain types of data processing, such as for marketing purposes."
+           }), (0, Wq.jsx)("li", {
+             children: "Withdraw Consent: Where we rely on your consent, withdraw it at any time, as described in section 3.2."
+           })]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L187` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L989) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L187)

```diff
-           children: "13. Governing Law and Dispute Resolution"
+           children: "8.2 Parental Choices and Control "
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L189-L201` → after: `L991-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L991-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L991-L1001) · [Before (L189-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L189-L201)

```diff
-           children: (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Governing Law: These Terms are governed by the laws of England and Wales."
-             }), (0, nz.jsx)("li", {
-               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
-             }), (0, nz.jsx)("li", {
-               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
-             }), (0, nz.jsx)("li", {
-               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
-             }), (0, nz.jsx)("li", {
-               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
-             })]
-           })
+           children: "As a verified parent or guardian of a child using Bloxd.io, you have the right to:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "Access Your Child\u2019s Data: Request a copy of the personal information we\u2019ve collected about your child, including details like username, email address, and chat logs."
+           }), (0, Wq.jsx)("li", {
+             children: "Correct Your Child\u2019s Data: Ask us to correct any inaccurate or incomplete information about your child."
+           }), (0, Wq.jsx)("li", {
+             children: "Delete Your Child\u2019s Data: Request the deletion of your child\u2019s account and all associated data. Once verified, we will delete this data promptly, typically within 30 days. This will also remove any saved progress in the game."
+           }), (0, Wq.jsx)("li", {
+             children: "Limit Data Collection for Your Child: Request that we limit the collection or use of certain types of data, such as usage information, from your child."
+           })]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L203` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L1003) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L203)

```diff
-           children: "14. Severability"
+           children: "8.3 How to Exercise Your Rights"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L205` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L1005) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L205)

```diff
-           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
+           children: "To exercise any of these rights, contact us using the information provided below. We may require proof of identity before proceeding with your request. Responses will typically be provided within 30 days."
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L207` → after: `L1007-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L1007-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L1007-L1035) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L207)

```diff
-           children: "15. Contact Information"
+           children: "8.4 Your California Privacy Rights"
+         }), (0, Wq.jsx)("p", {
+           children: "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the \u201cCCPA\u201d), gives you the rights below. This section supplements the rest of this Privacy Policy."
+         }), (0, Wq.jsx)("p", {
+           children: "Personal Information We Collect: In the past 12 months we have collected the following categories of personal information, from you, from your device, and from the service providers listed in section 3.3, for the purposes described in sections 2 and 3:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsx)("li", {
+             children: "Identifiers, such as your username, email address, user ID, IP address and device advertising identifiers."
+           }), (0, Wq.jsx)("li", {
+             children: "Internet or other electronic network activity information, such as pages visited, interactions with our website and ad interactions."
+           }), (0, Wq.jsx)("li", {
+             children: "Commercial information, such as your purchase history."
+           })]
+         }), (0, Wq.jsx)("p", {
+           children: "Sale and Sharing of Personal Information: Our advertising partners listed in section 3.3 may collect identifiers and internet or other electronic network activity information through cookies and similar technologies on our website to deliver and measure ads.  … [truncated]
+         }), (0, Wq.jsx)("p", {
+ ... (13 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L209-L213` → after: `L1037-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L1037-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L1037-L1049) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L209-L213)

```diff
-           children: ["If you have any questions about these Terms, please contact us at:", (0, nz.jsxs)("ul", {
-             children: [(0, nz.jsx)("li", {
-               children: "Email: privacy@bloxd.io"
-             }), (0, nz.jsx)("li", {
-               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
+           children: ["To opt out of the sale or sharing of your personal information, use the \u201cDo Not Sell My Personal Information\u201d link shown to California visitors in the footer of our home page and at the top of this Privacy Policy, or email us at", " ", (0, Wq.jsx)( … [truncated]
+             href: "mailto:privacy@bloxd.io",
+             children: "privacy@bloxd.io"
+           }), ". To exercise your other rights, contact us as described in section 8.3. You may also ask an authorized agent to make a request on your behalf; we may ask the agent for proof of your permission and ask you to verify your identity with us."]
+         }), (0, Wq.jsx)("h2", {
+           children: "9. Contact Us"
+         }), (0, Wq.jsx)("p", {
+           children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
+         }), (0, Wq.jsxs)("ul", {
+           children: [(0, Wq.jsxs)("li", {
+             children: ["Email: ", (0, Wq.jsx)("a", {
+               href: "mailto:privacy@bloxd.io",
+               children: "privacy@bloxd.io"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L216-L217` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L1054-L1055) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L216-L217)

```diff
-         }), (0, nz.jsx)("h3", {
-           children: "16. Entire Agreement"
+         }), (0, Wq.jsx)("h2", {
+           children: "10. Updates to This Policy"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L219` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/117.js#L1057) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/117.js#L219)

```diff
-           children: "These Terms, together with our Privacy Policy and Community Conduct Guidelines, constitute the entire agreement between you and Bloxd LTD regarding your use of the Services. They supersede any prior agreements or communications."
+           children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/118.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/118.js#L4)

```diff
-   6258: (zz, uz, bz) => {
+   6398: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L8-L18` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/118.js#L8-L9) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/118.js#L8-L18)

```diff
-     var Ez = bz(1490),
-       nz = bz(1527),
-       iz = bz(2754),
-       lz = bz(2175),
-       Mz = bz(1419),
-       tz = bz(1482),
-       Hz = bz(1114),
-       Oz = bz(1040),
-       pz = bz(1181),
-       dz = bz(1047),
-       Fz = bz(1089);
+     var Yq = gq(1183),
+       lq = gq(1070);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L24-L41` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/118.js#L14) · [Before (L24-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/118.js#L24-L41)

```diff
-       } = (0, pz.F)(), {
-         pack: bz
-       } = (0, Ez.D)(), {
-         userContext: Zz
-       } = (0, Hz.c)();
-       if (bz) {
-         const zz = nz.e[bz];
-         if (null === zz || void 0 === zz || !zz.purchasable) return (0, Fz.jsx)(tz.NavigatePreserveSearch, {
-           to: "/"
-         })
-       }
-       const Rz = bz ? nz.e[bz] : null,
-         Kz = bz ? iz.h[(0, lz.j)(bz)] : null,
-         wz = void 0 !== (null === Rz || void 0 === Rz ? void 0 : Rz.characterSet) || null !== Rz && void 0 !== Rz && Rz.singleItem ? Rz.displayName : `${null!==(zz=null===Rz||void 0===Rz?void 0:Rz.displayName)&&void 0!==zz?zz:bz} Pack`,
-         Xz = Rz ? `Your ${wz} is Ready!` : "Welcome To Super Rank!",
-         fz = Rz ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
- ... (2 more removed lines; see GitHub link above)
+       } = (0, Yq.v)();
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L43-L68` → after: `L16-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L16-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/118.js#L16-L219) · [Before (L43-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/118.js#L43-L68)

```diff
-         className: "PurchaseWelcome AnimFadeInScaleUp",
-         children: [Kz && (0, Fz.jsx)(Kz, {}), !Rz && (0, Fz.jsx)(Oz.d, {
-           iconName: "bolt",
-           iconCountPerGroup: 10,
-           animation: "Fall",
-           midShowerStart: !0,
-           customClass: "SuperRankWelcomeIconShower"
-         }), (0, Fz.jsx)("div", {
-           className: "PurchaseWelcomeTitle FullyFancyText",
-           children: Xz
-         }), (0, Fz.jsx)("div", {
-           className: "PurchaseWelcomeText",
-           children: fz
-         }), sz && (0, Fz.jsxs)("div", {
-           className: "PurchaseWelcomeWarning",
-           children: [(0, Fz.jsx)(dz.c, {
- ... (10 more removed lines; see GitHub link above)
+         className: "LegalText",
+         children: [(0, lq.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: qq("homePage:termsOfService")
+         }), (0, lq.jsx)("p", {
+           children: (0, lq.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, lq.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, lq.jsx)("h3", {
+           children: "1. General Information"
+         }), (0, lq.jsx)("p", {
+           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
+         }), (0, lq.jsx)("h3", {
+           children: "2. Definitions"
+ ... (188 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/119.js#L4)

```diff
-   6261: (zz, uz, bz) => {
+   6405: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8-L16` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/119.js#L8-L18) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/119.js#L8-L16)

```diff
-     var Ez = bz(1305),
-       nz = bz(56),
-       iz = bz(104),
-       lz = bz(1490),
-       Mz = bz(1219),
-       tz = bz(316),
-       Hz = bz(606);
-     const Oz = new URL(Mz.n[tz.e.PRODUCTION]).origin;
-     var pz = bz(1089);
+     var Yq = gq(1512),
+       lq = gq(1540),
+       Oq = gq(2904),
+       mq = gq(2243),
+       xq = gq(1422),
+       Aq = gq(1498),
+       cq = gq(1101),
+       uq = gq(1023),
+       Bq = gq(1183),
+       Wq = gq(1025),
+       Nq = gq(1070);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19-L39` → after: `L21-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/119.js#L21-L32) · [Before (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/119.js#L19-L39)

```diff
-       const zz = (0, lz.D)();
-       return (0, nz.useEffect)((() => {
-         const uz = iz.currentUrl.getSearchParam("code");
-         iz.currentUrl.removeSearchParam("code"), null === uz && (console.error("No authorization code found in the URL"), window.close());
-         const bz = {
-           type: `oauth_authentication_${zz.providerName}`,
-           code: uz
-         };
-         for (const zz of (nz = window.location.origin) === Oz ? [nz, `https://${Hz.e}`] : [nz]) {
-           var Ez;
-           null === (Ez = window.opener) || void 0 === Ez || Ez.postMessage(bz, zz)
-         }
-         var nz;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
- ... (5 more removed lines; see GitHub link above)
+       var qq;
+       const {
+         t: Eq
+       } = (0, Bq.v)(), {
+         pack: gq
+       } = (0, Yq.v)(), {
+         userContext: aq
+       } = (0, cq.c)();
+       if (gq) {
+         const qq = lq.d[gq];
+         if (null === qq || void 0 === qq || !qq.purchasable) return (0, Nq.jsx)(Aq.NavigatePreserveSearch, {
+           to: "/"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/120.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/120.js#L4)

```diff
-   6267: (zz, uz, bz) => {
+   6409: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L8-L165` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/120.js#L8-L16) · [Before (L8-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/120.js#L8-L165)

```diff
-     var Ez = bz(56),
-       nz = bz(1490),
-       iz = bz(1038),
-       lz = bz.n(iz),
-       Mz = bz(316),
-       tz = bz(6283),
-       Hz = bz(1047),
-       Oz = bz(1482),
-       pz = bz(4313),
-       dz = bz(1419),
-       Fz = bz(2882),
-       Zz = bz(4316),
-       Rz = bz(1628),
-       Kz = bz(4305),
-       wz = bz(1114),
-       Xz = bz(20),
- ... (142 more removed lines; see GitHub link above)
+     var Yq = gq(1326),
+       lq = gq(57),
+       Oq = gq(106),
+       mq = gq(1512),
+       xq = gq(1216),
+       Aq = gq(296),
+       cq = gq(611);
+     const uq = new URL(xq.k[Aq.e.PRODUCTION]).origin;
+     var Bq = gq(1070);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L168-L206` → after: `L19-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/120.js#L19-L39) · [Before (L168-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/120.js#L168-L206)

```diff
-       var zz, uz, bz, iz;
-       const {
-         t: Nz
-       } = (0, oz.F)(), vz = (0, Oz.useNavigatePreserveSearch)(), Jz = (0, nz.v)(), {
-         userContext: Tz,
-         isUserContextUpdating: Gz
-       } = (0, wz.c)(), [qz, hz] = (0, Lz.k)(), [Uz, cz] = (0, Lz.g)(), gz = (0, Ez.useRef)(!1), [Sz, yz] = (0, pz.n)(), Dz = (0, xz.F)(Sz), [Qz, Wz] = (0, Ez.useState)(null !== (zz = Dz.searchQuery) && void 0 !== zz ? zz : ""), ez = (0, Ez.useRef)(null), {
-         searchQuery: jz
-       } = Dz;
-       (0, Ez.useEffect)((() => {
-         Wz(null !== jz && void 0 !== jz ? jz : ""), ez.current && (ez.current.value = null !== jz && void 0 !== jz ? jz : "")
-       }), [jz]);
-       const [Iz, Bz] = (0, Ez.useState)(null), [Cz, Yz] = (0, Ez.useState)(!1), [kz, zu] = (0, Ez.useState)(!1), [uu, bu] = (0, Ez.useState)(0), Eu = (0, Ez.useRef)(0), nu = JSON.stringify(Dz), iu = (0, xz.m)();
- 
-       function lu() {
-         null !== iu ? (vz(iu), Xz.e.set({
- ... (23 more removed lines; see GitHub link above)
+       const qq = (0, mq.v)();
+       return (0, lq.useEffect)((() => {
+         const Eq = Oq.currentUrl.getSearchParam("code");
+         Oq.currentUrl.removeSearchParam("code"), null === Eq && (console.error("No authorization code found in the URL"), window.close());
+         const gq = {
+           type: `oauth_authentication_${qq.providerName}`,
+           code: Eq
+         };
+         for (const qq of (lq = window.location.origin) === uq ? [lq, `https://${cq.e}`] : [lq]) {
+           var Yq;
+           null === (Yq = window.opener) || void 0 === Yq || Yq.postMessage(gq, qq)
+         }
+         var lq;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L6)

```diff
-   6286: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Mz
+   6414: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => Sq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L8` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L8-L10) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L8)

```diff
-     var Ez = bz(1038),
+     var Yq = gq(57),
+       lq = gq(1512),
+       Oq = gq(1018),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L10-L11` → after: `L12-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L12-L32) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L10-L11)

```diff
-       iz = bz(1181),
-       lz = bz(1089);
+       xq = gq(296),
+       Aq = gq(6424),
+       cq = gq(1025),
+       uq = gq(1498),
+       Bq = gq(4387),
+       Wq = gq(1422),
+       Nq = gq(3040),
+       aq = gq(4393),
+       Vq = gq(1659),
+       dq = gq(4379),
+       jq = gq(1101),
+       Hq = gq(24),
+       oq = gq(1477),
+       Pq = gq(1195),
+       Qq = gq(96),
+       yq = gq(1183),
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L15-L16` → after: `L36-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L36-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L36-L106) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L15-L16)

```diff
-         item: uz,
-         className: bz
+         pack: Eq,
+         view: gq,
+         favourite: Yq,
+         notice: lq
+       } = qq;
+       const {
+         width: Oq,
+         height: xq
+       } = Aq.p.thumb, {
+         live: Bq
+       } = Eq;
+       return (0, nq.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, nq.jsxs)("div", {
+           className: "ShaderPackCardTile",
+           children: [(0, nq.jsxs)(uq.LinkPreserveSearch, {
+ ... (55 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20-L26` → after: `L110-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L110-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L110-L154) · [Before (L20-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L20-L26)

```diff
-       } = (0, iz.F)();
-       return null === uz.renderId || uz.previewsOutdated ? (0, lz.jsx)("div", {
-         className: nz()("ShaderPackPreviewsNotice", bz),
-         children: (0, lz.jsx)("span", {
-           children: Ez(null === uz.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
-         })
-       }) : null
+       } = (0, yq.v)(), cq = (0, iq.m)(), uq = Date.now(), Bq = null === Eq ? 0 : "owned" === Eq.kind ? Eq.packs.length : Eq.page.results.length;
+       return (0, nq.jsxs)("div", {
+         className: mq()("ShaderPackBrowseResults", {
+           Loading: gq && null !== Eq
+         }),
+         children: [gq && null === Eq && (0, nq.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: (0, nq.jsx)(tq.e, {})
+         }), Yq && (0, nq.jsxs)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: [Aq("shaderPackListing:loadFailed"), (0, nq.jsx)(Wq.g, {
+             onClick: lq,
+             children: Aq("general:tryAgain")
+           })]
+         }), "listing" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind) && Bq > 0 && (0, nq.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L41-L45` → after: `L158-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L158-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L158-L168) · [Before (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L41-L45)

```diff
-       let {
-         selected: uz,
-         onSelect: bz,
-         imageUrl: Ez
-       } = zz;
+       return "mine" === qq.section ? "shaderPackListing:noOwnPacks" : (0, vq.r)(qq) ? "general:noResults" : "favourites" === qq.section ? "shaderPackListing:noFavourites" : "general:noResults"
+     }
+     var Mq = gq(6443);
+     const Tq = 24,
+       zq = {
+         favourites: "general:favourites",
+         mine: "shaderPackListing:mine"
+       };
+ 
+     function Sq() {
+       var qq, Eq, gq, Oq;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L48-L109` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L171) · [Before (L48-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L48-L109)

```diff
-       } = (0, lz.F)();
-       return (0, tz.jsx)("div", {
-         className: "ShaderPackViewPicker",
-         children: iz.B.map((zz => {
-           const iz = Ez(zz);
-           return (0, tz.jsxs)("button", {
-             type: "button",
-             "aria-pressed": zz === uz,
-             className: nz()("ShaderPackViewOption", {
-               Selected: zz === uz
-             }),
-             onClick: () => {
-               bz(zz)
-             },
-             children: [null !== iz && (0, tz.jsx)("img", {
-               src: iz,
- ... (46 more removed lines; see GitHub link above)
+       } = (0, yq.v)(), rq = (0, uq.useNavigatePreserveSearch)(), hq = (0, lq.q)(), {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L112-L114` → after: `L174-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L174-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L174-L189) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L112-L114)

```diff
-       } = (0, tz.c)(), [bz, nz] = (0, Ez.useState)(null), lz = (0, Ez.useRef)(new Set);
- 
-       function Mz(zz, uz) {
+       } = (0, jq.c)(), [Sq, pq] = (0, iq.l)(), [Gq, Lq] = (0, iq.h)(), Jq = (0, Yq.useRef)(!1), [kq, Rq] = (0, Bq.k)(), Uq = (0, vq.B)(kq), [Fq, sq] = (0, Yq.useState)(null !== (qq = Uq.searchQuery) && void 0 !== qq ? qq : ""), Xq = (0, Yq.useRef)(null), {
+         searchQuery: wq
+       } = Uq;
+       (0, Yq.useEffect)((() => {
+         sq(null !== wq && void 0 !== wq ? wq : ""), Xq.current && (Xq.current.value = null !== wq && void 0 !== wq ? wq : "")
+       }), [wq]);
+       const [Kq, Cq] = (0, Yq.useState)(null), [Iq, eq] = (0, Yq.useState)(!1), [Dq, qE] = (0, Yq.useState)(!1), [EE, gE] = (0, Yq.useState)(0), YE = (0, Yq.useRef)(0), lE = JSON.stringify(Uq), OE = (0, vq.j)();
+ 
+       function mE() {
+         null !== OE ? (rq(OE), Hq.b.set({
+           openEverythingMenuName: xq.p.SETTINGS,
+           openSettingsCategory: "pN"
+         })) : rq("/")
+       }
+ 
+       function xE(qq) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L116-L117` → after: `L191-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L191-L195) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L116-L117)

```diff
-           const Ez = new Set(bz);
-           return uz ? Ez.add(zz) : Ez.delete(zz), Ez
+           (0, vq.ib)(Eq, {
+             ...Uq,
+             pageNumber: 1,
+             ...qq
+           })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L120` → after: `L198-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L198-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L198-L208) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L120)

```diff
-       return (0, Ez.useEffect)((() => {
+ 
+       function AE() {
+         const qq = Fq.trim() || null;
+         xE({
+           searchQuery: qq,
+           ...null !== qq && !Jq.current && (0, vq.m)(Uq) && {
+             withFeatures: [],
+             withoutFeatures: []
+           }
+         })
+       }(0, dq.b)(mE), (0, iq.e)(), (0, Yq.useEffect)((() => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L122-L124` → after: `L210-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L210-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L210-L234) · [Before (L122-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L122-L124)

```diff
-         let bz = !1;
-         return iz.c.getFavouriteShaderPacks(zz).then((zz => {
-           bz || nz(new Set(zz))
+         const qq = ++YE.current,
+           Eq = JSON.parse(lE);
+         eq(!0), qE(!1), async function(qq) {
+           if ("mine" === qq.section) return {
+             kind: "owned",
+             packs: await oq.e.getOwnedShaderPacks(bq)
+           };
+           const Eq = "favourites" === qq.section,
+             gq = Eq && (0, vq.m)(qq),
+             Yq = await oq.e.getShaderPacks(bq, {
+               sort: Eq ? vq.c : qq.sort,
+               features: gq ? [] : qq.withFeatures,
+               withoutFeatures: gq ? [] : qq.withoutFeatures,
+               searchQuery: qq.searchQuery,
+               pageNumber: qq.pageNumber,
+               pageSize: Tq,
+ ... (9 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L126-L139` → after: `L236-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L236-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L236-L249) · [Before (L126-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L126-L139)

```diff
-           console.error("Failed to get favourite shader packs", zz), bz || nz(new Set)
-         })), () => {
-           bz = !0
-         }
-       }), [zz, uz]), {
-         isFavourite: zz => null === bz ? null : bz.has(zz),
-         toggle: function(uz) {
-           if (null === bz || lz.current.has(uz)) return;
-           lz.current.add(uz);
-           const Ez = !bz.has(uz);
-           Mz(uz, Ez), (Ez ? iz.c.favouriteShaderPack(zz, uz) : iz.c.unfavouriteShaderPack(zz, uz)).catch((zz => {
-             console.error("Failed to change a favourite shader pack", zz), Mz(uz, !Ez)
-           })).finally((() => {
-             lz.current.delete(uz)
+           YE.current === qq && (console.error("Failed to get shader packs", Eq), Cq(null), qE(!0))
+         })).finally((() => {
+           YE.current === qq && eq(!1)
+         }))
+       }), [lE, bq, fq, EE]);
+       const [cE, uE] = (0, Yq.useState)(null), BE = null !== (gq = null === (Oq = ("listing" === (null === Kq || void 0 === Kq ? void 0 : Kq.kind) ? Kq.page.results : (null !== (Eq = null === Kq || void 0 === Kq ? void 0 : Kq.packs) && void 0 !== Eq ? Eq : []).flatMap((qq => qq.l … [truncated]
+       (0, Yq.useEffect)((() => {
+         null !== BE && uE(BE)
+       }), [BE]);
+       const WE = "mine" === Uq.section,
+         NE = (0, vq.p)(bq),
+         aE = qq => {
+           "explore" !== Uq.section && (qq.stopPropagation(), qq.preventDefault(), xE({
+             section: "explore"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L141-L432` → after: `L251-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L251-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/121.js#L251-L427) · [Before (L141-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/121.js#L141-L432)

```diff
-         }
-       }
-     }
-   },
-   6274: (zz, uz, bz) => {
-     bz.d(uz, {
-       D: () => wz,
-       F: () => Az,
-       G: () => Oz,
-       J: () => Lz,
-       M: () => Rz,
-       N: () => Uz,
-       O: () => qz,
-       P: () => lz,
-       T: () => hz,
-       W: () => tz,
- ... (276 more removed lines; see GitHub link above)
+         };
+       return (0, nq.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+         children: [(0, nq.jsx)(Wq.d, {
+           onClick: mE,
+           children: tq(null === OE ? "homePage:backToGames" : "shaderPackListing:backToSettings")
+         }), (0, nq.jsxs)("div", {
+           className: "ShaderPackBrowseHeader",
+           children: [(0, nq.jsxs)("div", {
+             className: "ShaderPackBrowseHeaderRow",
+             children: [(0, nq.jsx)("h1", {
+               className: "VisuallyHidden",
+               children: tq("shaderPackListing:title")
+             }), (0, nq.jsxs)("div", {
+               className: "ShaderPackBrowseTabs",
+               children: [(0, nq.jsx)("div", {
+ ... (161 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/122.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/122.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994)

#### 1. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L4-L31` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L8) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L31)

```diff
-   40266: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       ShaderPackCategory: () => Gz
-     });
-     var Ez = bz(56),
-       nz = bz(1490),
-       iz = bz(1419),
-       lz = bz(1482),
-       Mz = bz(1181),
-       tz = bz(96),
-       Hz = bz(20),
-       Oz = bz(1595),
-       pz = bz(6340),
-       dz = bz(298),
-       Fz = bz(6379),
-       Zz = bz(6371),
- ... (12 more removed lines; see GitHub link above)
+   6428: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => xq
+     });
+     var Yq = gq(1018),
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L33-L52` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L10-L11) · [Before (L33-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L33-L52)

```diff
-       vz = bz(6331),
-       xz = bz(1047),
-       Jz = bz(6316),
-       Az = bz(1089);
-     const Tz = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
-       wrongApiVersion: "shaderPack:statusWrongApiVersion",
-       checking: "shaderPack:statusChecking",
-       unchecked: "shaderPack:statusUnchecked",
-       noCompiler: "shaderPack:statusNoCompiler"
-     };
- ... (4 more removed lines; see GitHub link above)
+       Oq = gq(1183),
+       mq = gq(1070);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L56-L104` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L15-L16) · [Before (L56-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L56-L104)

```diff
-         stored: uz,
-         checking: bz,
-         webGpuUsable: Ez,
-         changePending: nz,
-         compiler: iz,
-         t: lz
-       } = zz;
-       const Mz = function(zz, uz, bz, Ez, nz) {
-           const iz = (0, Fz.storedPackOutcome)(zz, nz);
-           return "none" === iz.kind ? "noCompiler" === iz.reason ? uz ? "checking" : "noCompiler" : "otherApiVersion" === iz.reason ? "wrongApiVersion" : "failed" : (0, sz.f)() ? "harnessBuild" : "blocked" === iz.kind ? (0, Fz.shaderPackNeedsCheck)(zz, nz) ? uz ? "checking" : !1  … [truncated]
-         }(uz, bz, Ez, nz, iz),
-         tz = "failed" === Mz || "failedRecheck" === Mz,
-         Hz = tz || "wrongApiVersion" === Mz || "noCompiler" === Mz,
-         Oz = "ready" === Mz || "readyAfterReload" === Mz ? uz.validation.offInStrict : [];
-       return (0, Az.jsxs)(Az.Fragment, {
-         children: [(0, Az.jsxs)("div", {
- ... (33 more removed lines; see GitHub link above)
+         item: Eq,
+         className: gq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L108-L124` → after: `L20-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L20-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L20-L118) · [Before (L108-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L108-L124)

```diff
-       } = (0, Mz.F)(), [nz, lz] = (0, Ez.useState)(null), [Hz, Oz] = (0, Ez.useState)(null), [sz, oz] = (0, Ez.useState)(null), [Nz] = (0, Ez.useState)(dz.g), [vz, xz] = (0, Ez.useState)(!0), [Jz, Tz] = (0, Ez.useState)(!1), {
-         loading: Lz,
-         error: Gz,
-         setError: Vz,
-         onFiles: mz
-       } = (0, fz.e)((async zz => {
-         const uz = await (0, pz.loadPageShaderPackCompiler)();
-         if (!uz) return void Vz(bz("shaderPack:compilerUnavailable"));
-         Oz(uz);
-         const Ez = (0, Fz.toStoredShaderPack)(zz, await (0, Zz.g)(uz, zz.files));
-         await (0, Fz.saveShaderPack)(Ez, uz) ? (lz(Ez), qz(nz, Ez, uz)) : Vz(bz("shaderPack:saveFailed"))
-       }));
- 
-       function qz(zz, bz, Ez) {
-         (function(zz, uz, bz, Ez) {
-           return bz || rz(zz, Ez) || rz(uz, Ez)
- ... (1 more removed lines; see GitHub link above)
+       } = (0, Oq.v)();
+       return null === Eq.renderId || Eq.previewsOutdated ? (0, mq.jsx)("div", {
+         className: lq()("ShaderPackPreviewsNotice", gq),
+         children: (0, mq.jsx)("span", {
+           children: Yq(null === Eq.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
+         })
+       }) : null
+     }
+   },
+   6443: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => cq
+     });
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(6424),
+ ... (83 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L128-L145` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L123-L126) · [Before (L128-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L128-L145)

```diff
-         return async function() {
-           const uz = (0, tz.hasUsableWebGpuAdapter)(),
-             bz = await (0, Rz.e)();
-           if (zz) return;
-           lz(bz), Tz(!0), xz(!1);
-           const Ez = null !== bz ? (0, pz.loadPageShaderPackCompiler)() : null,
-             nz = await uz;
-           if (zz) return;
-           oz(nz);
-           const iz = await Ez;
-           if (!zz && (Oz(iz), null !== bz && nz && null !== iz && (0, Fz.shaderPackNeedsCheck)(bz, iz))) {
-             const uz = await (0, Zz.c)(bz, iz);
-             zz || lz((zz => zz === bz ? uz : zz))
-           }
-         }().catch((uz => {
-           console.error("Failed to load the stored shader pack", uz), zz || Vz(bz("shaderPack:unexpectedError"))
- ... (2 more removed lines; see GitHub link above)
+         return Oq.e.getFavouriteShaderPacks(qq).then((qq => {
+           gq || lq(new Set(qq))
+         })).catch((qq => {
+           console.error("Failed to get favourite shader packs", qq), gq || lq(new Set)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L149-L234` → after: `L130-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L130-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L130-L142) · [Before (L149-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L149-L234)

```diff
-       }), []), (0, Az.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, Az.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: bz("shaderPack:intro")
-         }), (0, Az.jsx)(az, {
-           to: Kz.P,
-           className: "ShaderPackBrowseLink",
-           children: (0, Az.jsx)(iz.q, {
-             className: "ShaderPackBrowseButton",
-             children: bz("shaderPackListing:browse")
-           })
-         }), !1 === sz && (0, Az.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: bz(Nz ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== Gz && (0, Az.jsxs)("div", {
- ... (70 more removed lines; see GitHub link above)
+       }), [qq, Eq]), {
+         isFavourite: qq => null === gq ? null : gq.has(qq),
+         toggle: function(Eq) {
+           if (null === gq || mq.current.has(Eq)) return;
+           mq.current.add(Eq);
+           const Yq = !gq.has(Eq);
+           xq(Eq, Yq), (Yq ? Oq.e.favouriteShaderPack(qq, Eq) : Oq.e.unfavouriteShaderPack(qq, Eq)).catch((qq => {
+             console.error("Failed to change a favourite shader pack", qq), xq(Eq, !Yq)
+           })).finally((() => {
+             mq.current.delete(Eq)
+           }))
+         }
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L237-L240` → after: `L145-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L145-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L145-L149) · [Before (L237-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L237-L240)

```diff
-   6274: (zz, uz, bz) => {
-     bz.d(uz, {
-       D: () => wz,
-       F: () => Az,
+   6422: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       $: () => Aq,
+       B: () => nq,
+       C: () => uq,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L242-L244` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L151) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L242-L244)

```diff
-       J: () => Lz,
-       M: () => Rz,
-       N: () => Uz,
+       K: () => Vq,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L246-L250` → after: `L153-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L153-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L153-L158) · [Before (L246-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L246-L250)

```diff
-       P: () => lz,
-       T: () => hz,
-       W: () => tz,
-       _: () => Mz,
-       bb: () => Vz,
+       R: () => Sq,
+       V: () => mq,
+       X: () => pq,
+       ab: () => xq,
+       b: () => Hq,
+       c: () => vq,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L255-L256` → after: `L161-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L161-L164) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L255-L256)

```diff
-       gb: () => Tz,
-       h: () => Kz,
+       fb: () => zq,
+       g: () => Wq,
+       hb: () => oq,
+       ib: () => bq,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L260-L262` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L168-L170) · [Before (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L260-L262)

```diff
-       q: () => Fz,
-       u: () => Gz,
-       v: () => cz,
+       r: () => fq,
+       s: () => Lq,
+       w: () => aq,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L265-L267` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L173-L175) · [Before (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L265-L267)

```diff
-     var Ez = bz(6283),
-       nz = bz(158),
-       iz = bz(4313);
+     var Yq = gq(6424),
+       lq = gq(163),
+       Oq = gq(4387);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L269-L272` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L177-L180) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L269-L272)

```diff
-       Mz = `${lz}/publish`;
- 
-     function tz(zz) {
-       return `${lz}/${encodeURIComponent(zz)}`
+       xq = `${mq}/publish`;
+ 
+     function Aq(qq) {
+       return `${mq}/${encodeURIComponent(qq)}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L331` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L239) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L331)

```diff
-         Mz = (null !== (uz = zz.get(oz)) && void 0 !== uz ? uz : Jz).split(","),
+         xq = (null !== (Eq = qq.get(yq)) && void 0 !== Eq ? Eq : hq).split(","),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L334-L339` → after: `L242-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L242-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L242-L247) · [Before (L334-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L334-L339)

```diff
-         section: "favourites" === lz || "mine" === lz ? lz : "explore",
-         sort: null !== (bz = Ez.u.find((uz => uz === zz.get(rz)))) && void 0 !== bz ? bz : xz,
-         withFeatures: Zz.filter((zz => Mz.includes(zz) && !Mz.includes(`-${zz}`))),
-         withoutFeatures: Zz.filter((zz => Mz.includes(`-${zz}`))),
-         searchQuery: (null === (nz = zz.get(Nz)) || void 0 === nz ? void 0 : nz.slice(0, Ez.G)) || null,
-         pageNumber: (0, iz.h)(zz.get(iz.e)),
+         section: "favourites" === mq || "mine" === mq ? mq : "explore",
+         sort: null !== (gq = Yq.v.find((Eq => Eq === qq.get(Qq)))) && void 0 !== gq ? gq : vq,
+         withFeatures: aq.filter((qq => xq.includes(qq) && !xq.includes(`-${qq}`))),
+         withoutFeatures: aq.filter((qq => xq.includes(`-${qq}`))),
+         searchQuery: (null === (lq = qq.get(tq)) || void 0 === lq ? void 0 : lq.slice(0, Yq.I)) || null,
+         pageNumber: (0, Oq.e)(qq.get(Oq.d)),
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L347` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L255) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L347)

```diff
-       (0, iz.k)(zz, sz, "explore" === uz.section ? null : uz.section), (0, iz.k)(zz, rz, uz.sort === xz ? null : uz.sort), (0, iz.k)(zz, oz, Ez === Jz ? null : Ez), (0, iz.k)(zz, Nz, uz.searchQuery), (0, iz.k)(zz, vz, null !== (bz = Xz(uz.banned)) && void 0 !== bz ? bz : null), ( … [truncated]
+       (0, Oq.f)(qq, Pq, "explore" === Eq.section ? null : Eq.section), (0, Oq.f)(qq, Qq, Eq.sort === vq ? null : Eq.sort), (0, Oq.f)(qq, yq, Yq === hq ? null : Yq), (0, Oq.f)(qq, tq, Eq.searchQuery), (0, Oq.f)(qq, rq, null !== (gq = Hq(Eq.banned)) && void 0 !== gq ? gq : null), ( … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L360` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L268) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L360)

```diff
-       }), `${lz}?${uz.toString()}`
+       }), `${mq}?${Eq.toString()}`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L374` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L282) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L374)

```diff
-         return "with" === bz ? [uz] : "without" === bz ? [`-${uz}`] : []
+         return "with" === gq ? [Eq] : "without" === gq ? [`-${Eq}`] : []
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L411` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L319) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L411)

```diff
-         detail: (0, Ez.g)(lz.error) ? null : lz.error
+         detail: (0, Yq.k)(mq.error) ? null : mq.error
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L437` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L345) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L437)

```diff
-       return zz instanceof nz.c && zz.errorMessageForUser ? zz.errorMessageForUser : uz(bz)
+       return qq instanceof lq.b && qq.errorMessageForUser ? qq.errorMessageForUser : Eq(gq)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L440-L442` → after: `L348-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L348-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L348-L364) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L440-L442)

```diff
-   6283: (zz, uz, bz) => {
-     bz.d(uz, {
-       B: () => Ez,
+   6434: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq
+     });
+     var Yq = gq(57),
+       lq = gq(38);
+ 
+     function Oq(qq, Eq) {
+       var gq;
+       const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
+       return [Oq, Eq => {
+         lq.i.setItem(qq, Eq), mq(Eq)
+       }]
+     }
+   },
+   6424: (qq, Eq, gq) => {
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L446-L448` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L370-L371) · [Before (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L446-L448)

```diff
-       M: () => pz,
-       O: () => Hz,
-       b: () => Fz,
+       N: () => Bq,
+       R: () => cq,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L453` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L375) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L453)

```diff
-       l: () => tz,
+       k: () => Hq,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L455-L457` → after: `L377-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L377-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L377-L380) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L455-L457)

```diff
-       q: () => sz,
-       u: () => iz,
-       y: () => Mz,
+       n: () => Aq,
+       p: () => lq,
+       r: () => Pq,
+       v: () => Oq,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L490` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L413) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L490)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(qq)}`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L501` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L424) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L501)

```diff
-       return `shaderPacks/${zz}/${uz}.json`
+       return `shaderPacks/${qq}/${Eq}.json`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L505` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L428) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L505)

```diff
-       return null === uz.renderId ? rz(zz, uz.baselineVersion, bz, Ez) : `${zz}/${function(zz,uz,bz,Ez){return`shaderPacks/${zz}/${uz}/${bz}-${Ez}.webp`}(uz.packId,uz.renderId,bz,Ez)}`
+       return null === Eq.renderId ? Qq(qq, Eq.baselineVersion, gq, Yq) : `${qq}/${function(qq,Eq,gq,Yq){return`shaderPacks/${qq}/${Eq}/${gq}-${Yq}.webp`}(Eq.packId,Eq.renderId,gq,Yq)}`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L509` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/122.js#L432) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/122.js#L509)

```diff
-       return `${zz}/${function(zz,uz,bz){return`shaderPacks/baseline/${zz}/${uz}-${bz}.webp`}(uz,bz,Ez)}`
+       return `${qq}/${function(qq,Eq,gq){return`shaderPacks/baseline/${qq}/${Eq}-${gq}.webp`}(Eq,gq,Yq)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/123.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/123.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123, 126, 127, 130];
+ export const ids = [123];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L4` → after: `L4-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L4-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L4-L237) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L4)

```diff
-   6331: (zz, uz, bz) => {
+   40813: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       ShaderPackCategory: () => fq
+     });
+     var Yq = gq(57),
+       lq = gq(1512),
+       Oq = gq(1422),
+       mq = gq(1498),
+       xq = gq(1183),
+       Aq = gq(96),
+       cq = gq(24),
+       uq = gq(1622),
+       Bq = gq(6496),
+       Wq = gq(275),
+       Nq = gq(6531),
+       aq = gq(6526),
+ ... (218 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L6` → after: `L239-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L239-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L239-L251) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L6)

```diff
-       d: () => Ez.i,
+       $: () => Aq,
+       B: () => nq,
+       C: () => uq,
+       G: () => iq,
+       K: () => Vq,
+       O: () => Gq,
+       R: () => Sq,
+       V: () => mq,
+       X: () => pq,
+       ab: () => xq,
+       b: () => Hq,
+       c: () => vq,
+       db: () => Tq,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L8` → after: `L253-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L253-L263) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L8)

```diff
-       g: () => Ez.q
+       fb: () => zq,
+       g: () => Wq,
+       hb: () => oq,
+       ib: () => bq,
+       j: () => Bq,
+       m: () => Zq,
+       p: () => Nq,
+       r: () => fq,
+       s: () => Lq,
+       w: () => aq,
+       z: () => jq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L10-L32` → after: `L265-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L265-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L265-L297) · [Before (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L10-L32)

```diff
-     var Ez = bz(6307);
-     const nz = [!1, !0].flatMap((zz => ["terrain", "liquid", "model"].map((uz => ({
-       strict: zz,
-       program: uz
-     })))))
-   },
-   39648: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => pz,
-       installListedShaderPack: () => Oz
-     });
-     var Ez = bz(6283),
-       nz = bz(6307),
-       iz = bz(1195),
-       lz = bz(6340),
-       Mz = bz(6331),
- ... (7 more removed lines; see GitHub link above)
+     var Yq = gq(6424),
+       lq = gq(163),
+       Oq = gq(4387);
+     const mq = "/shader-packs",
+       xq = `${mq}/publish`;
+ 
+     function Aq(qq) {
+       return `${mq}/${encodeURIComponent(qq)}`
+     }
+     let cq = null;
+ 
+     function uq(qq) {
+       cq = qq
+     }
+ 
+     function Bq() {
+ ... (17 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L34-L37` → after: `L299-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L299-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L299-L317) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L34-L37)

```diff
-       const bz = await pz(zz, uz);
-       return "failed" === bz.kind ? bz : await (0, tz.saveShaderPack)(bz.stored, uz) ? ((0, tz.markShaderPackChangePending)(), bz) : {
-         kind: "failed",
-         reason: "save"
+ 
+     function dq(qq, Eq) {
+       return qq.withFeatures.includes(Eq) ? "with" : qq.withoutFeatures.includes(Eq) ? "without" : null
+     }
+ 
+     function jq(qq) {
+       return null === qq ? "with" : "with" === qq ? "without" : null
+     }
+ 
+     function Hq(qq) {
+       return "with" === qq ? "only" : null === qq ? "include" : void 0
+     }
+ 
+     function oq(qq, Eq) {
+       const gq = dq(qq, Eq),
+         Yq = qq => qq.filter((qq => qq !== Eq));
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L40-L50` → after: `L320-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L320-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L320-L417) · [Before (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L40-L50)

```diff
-     async function pz(zz, uz) {
-       const bz = await async function(zz) {
-         let {
-           packId: uz,
-           sourceHash: bz
-         } = zz;
-         try {
-           const zz = await fetch(`${iz.clientSideServerUrls.s3Url}/${(0,Ez.K)(uz,bz)}`, {
-             headers: {
-               Accept: "application/json"
-             }
+     const Pq = "section",
+       Qq = "sort",
+       yq = "filters",
+       tq = "q",
+       rq = "banned",
+       vq = "popular",
+       hq = "strict";
+ 
+     function nq(qq) {
+       var Eq, gq, lq;
+       const mq = qq.get(Pq),
+         xq = (null !== (Eq = qq.get(yq)) && void 0 !== Eq ? Eq : hq).split(","),
+         Aq = qq.get(rq);
+       return {
+         section: "favourites" === mq || "mine" === mq ? mq : "explore",
+         sort: null !== (gq = Yq.v.find((Eq => Eq === qq.get(Qq)))) && void 0 !== gq ? gq : vq,
+ ... (82 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L52-L91` → after: `L419-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L419-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L419-L422) · [Before (L52-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L52-L91)

```diff
-           if (!zz.ok) return console.error(`Failed to download shader pack ${uz} (${zz.status})`), null;
-           const nz = await zz.json();
-           return "object" !== typeof nz || null === nz ? (console.error(`Shader pack ${uz}'s source isn't an object`), null) : nz
-         } catch (nz) {
-           return console.error(`Failed to download shader pack ${uz}`, nz), null
-         }
-       }(zz);
-       if (null === bz) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, Mz.g)(bz.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const lz = (0, nz.r)(bz.files);
- ... (24 more removed lines; see GitHub link above)
+         Oq.push({
+           tone: "info",
+           text: xq,
+           detail: null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L96` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L440) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L96)

```diff
-   40506: (zz, uz, bz) => {
+   6424: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L439-L441` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L447-L448) · [Before (L439-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L439-L441)

```diff
-       M: () => pz,
-       O: () => Hz,
-       b: () => Fz,
+       N: () => Bq,
+       R: () => cq,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L446` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L452) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L446)

```diff
-       l: () => tz,
+       k: () => Hq,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L448-L450` → after: `L454-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L454-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L454-L457) · [Before (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L448-L450)

```diff
-       q: () => sz,
-       u: () => iz,
-       y: () => Mz,
+       n: () => Aq,
+       p: () => lq,
+       r: () => Pq,
+       v: () => Oq,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L483` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L490) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L483)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(qq)}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L494` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L501) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L494)

```diff
-       return `shaderPacks/${zz}/${uz}.json`
+       return `shaderPacks/${qq}/${Eq}.json`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L498` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L505) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L498)

```diff
-       return null === uz.renderId ? rz(zz, uz.baselineVersion, bz, Ez) : `${zz}/${function(zz,uz,bz,Ez){return`shaderPacks/${zz}/${uz}/${bz}-${Ez}.webp`}(uz.packId,uz.renderId,bz,Ez)}`
+       return null === Eq.renderId ? Qq(qq, Eq.baselineVersion, gq, Yq) : `${qq}/${function(qq,Eq,gq,Yq){return`shaderPacks/${qq}/${Eq}/${gq}-${Yq}.webp`}(Eq.packId,Eq.renderId,gq,Yq)}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L502-L679` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/123.js#L509) · [Before (L502-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/123.js#L502-L679)

```diff
-       return `${zz}/${function(zz,uz,bz){return`shaderPacks/baseline/${zz}/${uz}-${bz}.webp`}(uz,bz,Ez)}`
-     }
-   },
-   6307: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz,
-       e: () => iz,
-       i: () => Ez,
-       m: () => Zz,
-       n: () => Oz,
-       q: () => nz,
-       r: () => tz,
-       s: () => Hz,
-       u: () => pz
-     });
-     const Ez = 5;
- ... (162 more removed lines; see GitHub link above)
+       return `${qq}/${function(qq,Eq,gq){return`shaderPacks/baseline/${qq}/${Eq}-${gq}.webp`}(Eq,gq,Yq)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/124.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/124.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851)

#### 1. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/124.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/124.js#L2)

```diff
- export const ids = [124];
+ export const ids = [124, 127, 128, 131];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L4` → after: `L4-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L4-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/124.js#L4-L192) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/124.js#L4)

```diff
-   6301: (zz, uz, bz) => {
+   6482: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq.h,
+       c: () => lq,
+       e: () => Yq.o
+     });
+     var Yq = gq(6458);
+     const lq = [!1, !0].flatMap((qq => ["terrain", "liquid", "model"].map((Eq => ({
+       strict: qq,
+       program: Eq
+     })))))
+   },
+   40249: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Bq,
+       installListedShaderPack: () => uq
+ ... (173 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L6-L56` → after: `L194-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L194-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/124.js#L194-L224) · [Before (L6-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/124.js#L6-L56)

```diff
-       ShaderPackPublishForm: () => fz
-     });
-     var Ez = bz(56),
-       nz = bz(6283),
-       iz = bz(199),
-       lz = bz(6307),
-       Mz = bz(1047),
-       tz = bz(1419),
-       Hz = bz(1628),
-       Oz = bz(1114),
-       pz = bz(6316),
-       dz = bz(6337),
-       Fz = bz(1473),
-       Zz = bz(1181),
-       Rz = bz(6340),
-       Kz = bz(6371),
- ... (35 more removed lines; see GitHub link above)
+       forgetShaderPackActiveHint: () => bq,
+       isOtherApiVersion: () => rq,
+       isShaderPackActive: () => Pq,
+       isShaderPackChangePending: () => tq,
+       markShaderPackChangePending: () => yq,
+       pageShaderPackValidationVersion: () => vq,
+       reconcileStoredShaderPackHint: () => nq,
+       removeShaderPack: () => oq,
+       replaceShaderPack: () => dq,
+       saveShaderPack: () => Vq,
+       shaderPackNeedsCheck: () => hq,
+       storedPackOutcome: () => Qq,
+       storedShaderPackFiles: () => Wq,
+       toStoredShaderPack: () => Bq
+     });
+     var Yq = gq(6458),
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L58-L73` → after: `L226-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L226-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/124.js#L226-L417) · [Before (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/124.js#L58-L73)

```diff
-       })), jz = !xz && !vz.isLoggedIn() && !iz.e.offlineMode, Iz = Pz.trim(), Bz = Iz.length < nz.z, Cz = null !== Jz && !1 !== (null === (pz = Jz.validation) || void 0 === pz ? void 0 : pz.ok) && !Dz && !Bz && !jz && !xz;
-       return (0, Xz.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, Xz.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: fz ? Nz("shaderPackListing:uploadIntro", {
-             minutes: String(nz.D / 6e4)
-           }) : Nz("shaderPackListing:publishIntro")
-         }), (0, Xz.jsx)(oz, {}), jz && (0, Xz.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: Nz("shaderPackListing:publishNeedsLogin")
-         }), (0, Xz.jsx)(dz.c, {
-           busy: Dz,
-           disabled: Dz || Sz,
-           onFiles: zz => {
-             Az(null), ez(zz)
+       }
+     }
+ 
+     function Wq(qq) {
+       return Object.keys(qq.files).map((Eq => ({
+         path: Eq,
+         source: qq.files[Eq]
+       })))
+     }
+     let Nq = Promise.resolve();
+ 
+     function aq(qq) {
+       const Eq = Nq.then(qq);
+       return Nq = Eq.catch((() => {})), Eq
+     }
+ 
+ ... (176 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L75-L224` → after: `L419-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L419-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/124.js#L419-L679) · [Before (L75-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/124.js#L75-L224)

```diff
-         }), Jz && (0, Xz.jsxs)("div", {
-           className: "ShaderPackPublishSummary",
-           children: [(0, Xz.jsx)("div", {
-             className: "ShaderPackPublishPackName",
-             children: Jz.pack.manifest.name
-           }), (0, Xz.jsxs)("div", {
-             className: "ShaderPackPublishPackSize",
-             children: [Nz("shaderPackListing:sizeValue", {
-               kilobytes: String((0, wz.N)(Jz.sourceBytes))
-             }), " \xb7", " ", Nz("shaderPackListing:filesValue", {
-               files: String(Jz.pack.files.length)
-             })]
-           }), (0, Xz.jsx)(sz, {
-             picked: Jz
-           })]
-         }), !fz && (0, Xz.jsxs)(Xz.Fragment, {
- ... (134 more removed lines; see GitHub link above)
+         };
+       return await (0, Yq.replaceShaderPack)(qq, mq, Eq) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mq
+     }
+ 
+     function cq(qq, Eq, gq) {
+       return {
+         headerVersion: (0, Yq.pageShaderPackValidationVersion)(qq),
+         ok: 0 === Eq.length,
+         errors: Eq.slice(0, mq),
+         moreErrors: Math.max(0, Eq.length - mq),
+         offInStrict: gq
+       }
+     }
+   },
+   6424: (qq, Eq, gq) => {
+     gq.d(Eq, {
+ ... (245 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/125.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/125.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L2)

```diff
- export const ids = [125, 127, 130];
+ export const ids = [125];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L6)

```diff
-   6316: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   6456: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       ShaderPackPublishForm: () => oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L16` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L8-L23) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L8-L16)

```diff
-     var Ez = bz(6323),
-       nz = bz(1089);
-     const iz = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
+     var Yq = gq(57),
+       lq = gq(6424),
+       Oq = gq(195),
+       mq = gq(6458),
+       xq = gq(1025),
+       Aq = gq(1422),
+       cq = gq(1659),
+       uq = gq(1101),
+       Bq = gq(6467),
+       Wq = gq(6490),
+       Nq = gq(1477),
+       aq = gq(1183),
+       Vq = gq(6496),
+       dq = gq(6526),
+       jq = gq(6422),
+       Hq = gq(1070);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L20-L318` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L28-L29) · [Before (L20-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L20-L318)

```diff
-         diagnostics: uz,
-         more: bz = 0,
-         t: lz
-       } = zz;
-       return (0, nz.jsxs)("ul", {
-         className: "ShaderPackDiagnostics",
-         children: [uz.map(((zz, uz) => {
-           const bz = (0, Ez.e)(zz),
-             Mz = function(zz, uz) {
-               const bz = (0, Ez.d)(null !== zz && void 0 !== zz ? zz : []);
-               if (0 === bz.length) return null;
-               return bz.map((zz => zz.map((zz => uz(iz[zz]))).join(", "))).join("; ")
-             }(zz.variants, lz);
-           return (0, nz.jsxs)("li", {
-             children: [bz && (0, nz.jsx)("span", {
-               className: "ShaderPackDiagnosticLocation",
- ... (283 more removed lines; see GitHub link above)
+         existing: oq,
+         onPublished: Qq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L322-L333` → after: `L33-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L33-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L33-L58) · [Before (L322-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L322-L333)

```diff
-       } = (0, Oz.F)(), Fz = (0, Ez.useRef)(null), Zz = !(0, pz.isMobile)(), {
-         getRootProps: Rz,
-         getInputProps: Kz,
-         isDragActive: wz,
-         open: Xz
-       } = (0, lz.b)({
-         onDrop: nz,
-         noClick: !0,
-         noKeyboard: !0,
-         useFsAccessApi: !1,
-         disabled: bz
-       });
+       } = (0, aq.v)(), {
+         userContext: rq,
+         isUserContextUpdating: vq
+       } = (0, uq.c)(), [hq, nq] = (0, Yq.useState)(null), [bq, iq] = (0, Yq.useState)(0), [Zq, fq] = (0, Yq.useState)(null !== (Eq = null === oq || void 0 === oq ? void 0 : oq.name) && void 0 !== Eq ? Eq : ""), Mq = (0, Yq.useRef)(Zq), Tq = (0, Yq.useRef)(""), zq = qq => {
+         Mq.current = qq, fq(qq)
+       }, [Sq, pq] = (0, Yq.useState)(null !== (gq = null === oq || void 0 === oq ? void 0 : oq.description) && void 0 !== gq ? gq : ""), Gq = (0, Yq.useRef)(Sq), Lq = (0, Yq.useRef)(""), Jq = qq => {
+         Gq.current = qq, pq(qq)
+       }, [kq, Rq] = (0, Yq.useState)(!1), {
+         loading: Uq,
+         error: Fq,
+         setError: sq,
+         onFiles: Xq
+       } = (0, Wq.c)((async qq => {
+         const Eq = await (0, Vq.loadPageShaderPackCompiler)();
+         if (!Eq) return void sq(tq("shaderPack:compilerUnavailable"));
+         const gq = await (0, dq.e)(Eq, qq.files);
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L335-L352` → after: `L60-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L60-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L60-L73) · [Before (L335-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L335-L352)

```diff
-         ...Rz({
-           className: iz()("ShaderPackDropZone", {
-             ActiveDrag: wz,
-             Disabled: bz
-           })
-         }),
-         children: [(0, Sz.jsx)("input", {
-           ...Kz({
-             webkitdirectory: "true"
-           })
-         }), (0, Sz.jsx)("input", {
-           ref: Fz,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(zz) {
- ... (2 more removed lines; see GitHub link above)
+         className: "ShaderPackPublishForm",
+         children: [(0, Hq.jsx)("p", {
+           className: "ShaderPackPublishIntro",
+           children: oq ? tq("shaderPackListing:uploadIntro", {
+             minutes: String(lq.G / 6e4)
+           }) : tq("shaderPackListing:publishIntro")
+         }), (0, Hq.jsx)(yq, {}), wq && (0, Hq.jsx)("div", {
+           className: "ShaderPackPublishNote Warning",
+           children: tq("shaderPackListing:publishNeedsLogin")
+         }), (0, Hq.jsx)(Wq.b, {
+           busy: Uq,
+           disabled: Uq || kq,
+           onFiles: qq => {
+             nq(null), Xq(qq)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L354` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L75-L76) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L354)

```diff
-         }), uz && (0, Sz.jsx)(Mz.c, {}), !uz && (0, Sz.jsxs)(Sz.Fragment, {
+         }), hq && (0, Hq.jsxs)("div", {
+           className: "ShaderPackPublishSummary",
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L356-L362` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L78-L79) · [Before (L356-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L356-L362)

```diff
-             className: "ShaderPackDropZoneIcon",
-             children: (0, Sz.jsx)(tz.c, {
-               name: "up-from-bracket"
-             })
-           }), (0, Sz.jsx)("div", {
-             className: "ShaderPackDropZoneInstructions",
-             children: dz(Zz ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
+             className: "ShaderPackPublishPackName",
+             children: hq.pack.manifest.name
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L364-L375` → after: `L81-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L81-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L81-L85) · [Before (L364-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L364-L375)

```diff
-             className: "ShaderPackDropZoneButtons",
-             "data-pad-mouse-only": !0,
-             children: [Zz && (0, Sz.jsx)(Hz.f, {
-               disabled: bz,
-               onClick: Xz,
-               children: dz("shaderPack:chooseFolder")
-             }), (0, Sz.jsx)(Hz.f, {
-               disabled: bz,
-               onClick: () => {
-                 Fz.current.click()
-               },
-               children: dz("shaderPack:chooseZip")
+             className: "ShaderPackPublishPackSize",
+             children: [tq("shaderPackListing:sizeValue", {
+               kilobytes: String((0, jq.O)(hq.sourceBytes))
+             }), " \xb7", " ", tq("shaderPackListing:filesValue", {
+               files: String(hq.pack.files.length)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L385-L402` → after: `L171-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L171-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L171-L205) · [Before (L385-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L385-L402)

```diff
-       } = (0, Oz.F)(), [bz, nz] = (0, Ez.useState)(!1), [iz, lz] = (0, Ez.useState)(null), Mz = (0, Ez.useRef)(!1);
-       return {
-         loading: bz,
-         error: iz,
-         setError: lz,
-         onFiles: async function(bz) {
-           if (!Mz.current) {
-             Mz.current = !0, nz(!0), lz(null);
-             try {
-               await zz(await qz(bz))
-             } catch (Ez) {
-               Ez instanceof Zz ? lz((0, gz.h)(uz, Ez.translationKey, Ez.params)) : (console.error("Failed to load the shader pack", Ez), lz(uz("shaderPack:unexpectedError")))
-             } finally {
-               Mz.current = !1, nz(!1)
-             }
-           }
- ... (2 more removed lines; see GitHub link above)
+       } = (0, aq.v)(), {
+         validation: Yq
+       } = Eq;
+       return null === Yq ? (0, Hq.jsx)("div", {
+         className: "ShaderPackPublishNote",
+         children: gq("shaderPackListing:publishUnchecked")
+       }) : Yq.ok ? (0, Hq.jsxs)(Hq.Fragment, {
+         children: [(0, Hq.jsxs)("div", {
+           className: "ShaderPackPublishNote Ready",
+           children: [(0, Hq.jsx)(xq.d, {
+             name: "circle-check"
+           }), " ", gq("shaderPackListing:publishReady")]
+         }), Yq.offInStrict.length > 0 && (0, Hq.jsxs)(Hq.Fragment, {
+           children: [(0, Hq.jsxs)("div", {
+             className: "ShaderPackPublishNote Warning",
+             children: [(0, Hq.jsx)(xq.d, {
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L404-L536` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L207) · [Before (L404-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L404-L536)

```diff
-   },
-   6323: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Mz,
-       e: () => lz,
-       h: () => iz
-     });
-     var Ez = bz(6331);
-     const nz = [zz => zz.strict ? "strict" : "nonStrict", zz => zz.program];
- 
-     function iz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const Ez = {};
-       for (const nz in bz) Ez[nz] = `\0${nz}\0`;
-       return zz(uz, Ez).replace(/\0(\w+)\0/g, ((zz, uz) => bz[uz]))
-     }
- ... (117 more removed lines; see GitHub link above)
+     const Qq = "\0";
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L539-L888` → after: `L210-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L210-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/125.js#L210-L224) · [Before (L539-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/125.js#L539-L888)

```diff
-       return Zz(Xz)
-     }
- 
-     function sz(zz, uz) {
-       return "active" === rz(zz, uz).kind
-     }
- 
-     function rz(zz, uz) {
-       var bz;
-       return null === zz ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : vz(zz) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.ok) || zz.validation.fromRecheck ? null === uz ? {
- ... (334 more removed lines; see GitHub link above)
+       const {
+         t: qq
+       } = (0, aq.v)(), [Eq, gq] = qq("shaderPackListing:bloxdhubHelp", {
+         site: Qq
+       }).split(Qq);
+       return (0, Hq.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [Eq, (0, Hq.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: lq.i,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: lq.e
+         }), gq]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L2)

```diff
- export const ids = [126, 127, 130];
+ export const ids = [126, 128, 131];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L4)

```diff
-   6331: (zz, uz, bz) => {
+   6467: (qq, Eq, gq) => {
```
