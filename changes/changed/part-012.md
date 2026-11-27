# Changed — Bundle Modifications Report (Part 012 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `12 / 82` (**327** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (201 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 134. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L739-L740` → after: `L6250-L6548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6250-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6250-L6548) · [Before (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L739-L740)

```diff
-       Rf() {
-         return Ei.Yv4c(this.__wbg_ptr) >>> 0
+       sO(iW, WW, Bm)
+     }
+ 
+     function Bm(WW, iW, OW) {
+       Xm(WW, iW)
+     }
+ 
+     function qm(WW, iW, OW) {
+       if (iW < 0) {
+         if (WW.treeIsFiltered !== WW.emitFiltered) return;
+         return fm(WW), void(WW.buffer[WW.it.offset++] = 255 & Math.abs(iW))
+       }
+       if ((WW.isSchema ? WW.treeIsFiltered || (iW < 32 ? 0 !== (WW.filterBitmask & 1 << iW) : void 0 !== WW.tags[iW]) : WW.treeIsFiltered) !== WW.emitFiltered) return;
+       const mW = WW.isEncodeAll ? EW.ADD : OW;
+       void 0 !== mW && (void 0 === WW.filter || WW.filter(WW.ref, iW, WW.view)) && (fm(WW), WW.encoder(WW.self, WW.buffer, WW.changeTree, iW, mW, WW.it, WW.isEncodeAll, WW.hasView, WW.metadata))
+     }
+ ... (283 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L742-L744` → after: `L6550-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6550-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6550-L6568) · [Before (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L742-L744)

```diff
-       kf(ee, ie) {
-         const He = Ei.LiQj(this.__wbg_ptr, ee, ie);
-         if (He[1]) throw ki(He[0])
+       discardChanges() {
+         const WW = this.root.changes;
+         let iW = WW.next;
+         const OW = this.root;
+         for (; iW;) {
+           const WW = iW.next;
+           iW.changeTree.endEncode(), OW.releaseNode(iW), iW = WW
+         }
+         WW.next = void 0, WW.tail = void 0
+       }
+       discardUnreliableChanges() {
+         const WW = this.root.unreliableChanges;
+         let iW = WW.next;
+         const OW = this.root;
+         for (; iW;) {
+           const WW = iW.next;
+ ... (3 more added lines; see GitHub link above)
```

#### 136. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L746-L747` → after: `L6570-L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6570-L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6570-L6573) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L746-L747)

```diff
-       qf() {
-         return Ei.M1Z9(this.__wbg_ptr) >>> 0
+       tryEncodeTypeId(WW, iW, OW, mW) {
+         const EW = this.context.getTypeId(iW),
+           NW = this.context.getTypeId(OW);
+         void 0 !== NW ? EW !== NW && (WW[mW.offset++] = 213, ii.number(WW, NW, mW)) : console.warn(`@colyseus/schema WARNING: Class "${OW.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
```

#### 137. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L749-L750` → after: `L6575-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6575-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6575-L6576) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L749-L750)

```diff
-       ff() {
-         return Ei.X8Is(this.__wbg_ptr) >>> 0
+       get hasChanges() {
+         return void 0 !== this.root.changes.next || this._hasStreamBacklog()
```

#### 138. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L752-L753` → after: `L6578-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6578-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6578-L6579) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L752-L753)

```diff
-       Tf() {
-         return Ei.uLqN(this.__wbg_ptr) >>> 0
+       get _isStreamBroadcastMode() {
+         return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
```

#### 139. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L755-L761` → after: `L6581-L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6581-L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6581-L6587) · [Before (L755-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L755-L761)

```diff
-       Mf(ee, ie, He) {
-         const ye = Fi(ee, Ei.cnOV),
-           be = gi,
-           Me = Fi(ie, Ei.cnOV),
-           Ke = gi,
-           Ue = Ei.P7PQ(this.__wbg_ptr, ye, be, Me, Ke, He);
-         if (Ue[1]) throw ki(Ue[0])
+       _hasStreamBacklog() {
+         const WW = this.root;
+         if (0 === WW.streamTrees.size) return !1;
+         const iW = 0 === WW.activeViews.size;
+         for (const OW of WW.streamTrees)
+           if (iW ? oi(OW) : ui(OW, WW)) return !0;
+         return !1
```

#### 140. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L763-L806` → after: `L6589-L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6589-L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6589-L6590) · [Before (L763-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L763-L806)

```diff
-       Xf() {
-         return Ei.zrFA(this.__wbg_ptr) >>> 0
-       }
-       mesh(ee, ie, He, ye, be) {
-         const Me = Ei.ULJ5(this.__wbg_ptr, ee, ie, He, ye, be);
-         if (Me[2]) throw ki(Me[1]);
-         return Me[0] >>> 0
-       }
-       constructor(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee) {
-         const ge = Ui(ee, Ei.cnOV),
-           Oe = gi,
-           de = oi(ie, Ei.cnOV),
-           We = gi,
-           te = Fi(He, Ei.cnOV),
-           Ze = gi,
-           we = Ji(ye, Ei.cnOV),
- ... (28 more removed lines; see GitHub link above)
+       get hasUnreliableChanges() {
+         return void 0 !== this.root.unreliableChanges.next
```

#### 141. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L808-L814` → after: `L6592-L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6592-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6592-L6595) · [Before (L808-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L808-L814)

```diff
-       pf(ee, ie) {
-         const He = Fi(ee, Ei.cnOV),
-           ye = gi,
-           be = Ei.Se7x(this.__wbg_ptr, He, ye, ie);
-         if (be[3]) throw ki(be[2]);
-         var Me = se(be[0], be[1]).slice();
-         return Ei.o0dT(be[0], 1 * be[1], 1), Me
+     }
+     class Im extends Error {
+       constructor(WW) {
+         super(WW), this.name = "DecodingWarning"
```

#### 142. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L816-L817` → after: `L6597-L6629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6597-L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6597-L6629) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L816-L817)

```diff
-       zf(ee) {
-         Ei.cmpq(this.__wbg_ptr, Ki(ee) ? 16777215 : ee)
+     }
+     const am = {
+       value: 0,
+       enumerable: !1,
+       writable: !0
+     };
+     class rm {
+       refs = new Map;
+       refCount = {};
+       deletedRefs = new Set;
+       callbacks = {};
+       nextUniqueId = 0;
+       getNextUniqueId() {
+         return this.nextUniqueId++
+       }
+       addRef(WW, iW) {
+ ... (17 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L819-L820` → after: `L6631-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6631-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6631-L6658) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L819-L820)

```diff
-       Bf(ee) {
-         return Ei.IOzR(this.__wbg_ptr, ee) >>> 0
+       clearRefs() {
+         this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
+       }
+       garbageCollectDeletedRefs() {
+         this.deletedRefs.forEach((WW => {
+           if (this.refCount[WW] > 0) return;
+           const iW = this.refs.get(WW),
+             OW = iW.constructor[Symbol.metadata];
+           if (null != OW)
+             for (const mW in OW) {
+               const WW = iW[OW[mW].name];
+               if ("object" === typeof WW && WW) {
+                 const iW = WW[LW];
+                 void 0 === iW || this.deletedRefs.has(iW) || this.removeRef(iW)
+               }
+             } else "function" === typeof iW[jW] && Array.from(iW.values()).forEach((WW => {
+ ... (12 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L822-L823` → after: `L6660-L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6660-L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6660-L6662) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L822-L823)

```diff
-       gf() {
-         return Ei.mZ5L(this.__wbg_ptr) >>> 0
+       removeCallback(WW, iW, OW) {
+         const mW = this.callbacks?.[WW]?.[iW]?.indexOf(OW);
+         void 0 !== mW && -1 !== mW && em(this.callbacks[WW][iW], mW)
```

#### 145. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L825-L828` → after: `L6664-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6664-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6664-L6713) · [Before (L825-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L825-L828)

```diff
-       Ef() {
-         const ee = Ei.mZBO(this.__wbg_ptr);
-         if (ee[2]) throw ki(ee[1]);
-         return 0 !== ee[0]
+     }
+     class zm {
+       context;
+       state;
+       root;
+       currentRefId = 0;
+       nH;
+       resyncVisited = null;
+       resyncDamaged = !1;
+       constructor(WW, iW) {
+         this.setState(WW), this.context = iW || new Xi(WW.constructor)
+       }
+       setState(WW) {
+         this.state = WW, this.root = new rm, this.root.addRef(0, WW)
+       }
+       decode(WW) {
+ ... (34 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L830-L831` → after: `L6715-L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6715-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6715-L6746) · [Before (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L830-L831)

```diff
-       df() {
-         return Ei.Yl9p(this.__wbg_ptr) >>> 0
+       skipCurrentStructure(WW, iW, OW) {
+         null !== this.resyncVisited && (this.resyncDamaged = !0);
+         const EW = {
+           offset: iW.offset
+         };
+         for (; iW.offset < OW && (WW[iW.offset] !== mW || (EW.offset = iW.offset + 1, !this.root.refs.has(si.number(WW, EW))));) iW.offset++
+       }
+       getInstanceType(WW, iW, OW) {
+         let mW;
+         if (213 === WW[iW.offset]) {
+           iW.offset++;
+           const OW = si.number(WW, iW);
+           mW = this.context.get(OW)
+         }
+         return mW || OW
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 147. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L833-L834` → after: `L6748-L6885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6748-L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6748-L6885) · [Before (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L833-L834)

```diff
-       Wf() {
-         return Ei.Dv9E(this.__wbg_ptr) >>> 0
+     }
+     const Fm = Hm({
+         min: bm.float64(),
+         max: bm.float64(),
+         bits: bm.uint8(),
+         mode: bm.uint8()
+       }, "QuantizedDescriptor"),
+       Qm = Hm({
+         name: bm.string(),
+         type: bm.string(),
+         referencedType: bm.number(),
+         childPrimitive: bm.string(),
+         quantized: bm.ref(Fm).optional()
+       }, "ReflectionField"),
+       WE = Hm({
+         id: bm.number(),
+ ... (122 more added lines; see GitHub link above)
```

#### 148. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L837` → after: `L6942-L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6942-L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L6942-L7047) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L837)

```diff
-     Symbol.dispose && (oe.prototype[Symbol.dispose] = oe.prototype.free);
+     iE.encode = function(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
+         offset: 0
+       };
+       const OW = WW.context,
+         mW = new iE,
+         EW = new Gm(mW),
+         NW = OW.schemas.get(WW.state.constructor);
+       NW > 0 && (mW.rootType = NW);
+       const PW = new Set,
+         LW = {},
+         cW = WW => {
+           if (void 0 === WW.extendsId || PW.has(WW.extendsId)) {
+             PW.add(WW.id), mW.types.push(WW);
+             const iW = LW[WW.id];
+             void 0 !== iW && (delete LW[WW.id], iW.forEach((WW => cW(WW))))
+ ... (90 more added lines; see GitHub link above)
```

#### 149. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L839-L841` → after: `L7049-L7077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7049-L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7049-L7077) · [Before (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L839-L841)

```diff
-       __destroy_into_raw() {
-         const ee = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, me.unregister(this), ee
+       tZ;
+       uniqueRefIds = new Set;
+       isTriggering = !1;
+       constructor(WW) {
+         this.tZ = WW, this.tZ.nH = this.nH.bind(this)
+       }
+       get callbacks() {
+         return this.tZ.root.callbacks
+       }
+       get state() {
+         return this.tZ.state
+       }
+       addCallback(WW, iW, OW) {
+         return this.tZ.root.addCallback(WW, iW, OW)
+       }
+       addCallbackOrWaitCollectionAvailable(WW, iW, OW, mW) {
+ ... (13 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L843-L845` → after: `L7079-L7080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7079-L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7079-L7080) · [Before (L843-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L843-L845)

```diff
-       free() {
-         const ee = this.__destroy_into_raw();
-         Ei.vSJx(ee, 0)
+       listen() {
+         return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(a … [truncated]
```

#### 151. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L847-L852` → after: `L7082-L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7082-L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7082-L7086) · [Before (L847-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L847-L852)

```diff
-       compute(ee, ie, He, ye) {
-         var be = Ki(ye) ? 0 : Ri(ye, Ei.cnOV, Ei.JWc6),
-           Me = gi;
-         const Ke = Ei.TV3p(this.__wbg_ptr, ee, Ki(ie) ? Number.MAX_SAFE_INTEGER : ie | 0, He, be, Me);
-         if (Ke[2]) throw ki(Ke[1]);
-         return Ke[0] >>> 0
+       listenInstance(WW, iW, OW) {
+         let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         mW = mW && !1 === this.isTriggering;
+         const EW = WW[iW];
+         return mW && null !== EW && void 0 !== EW && OW(EW, void 0), this.addCallback(WW[LW], iW, OW)
```

#### 152. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L854-L857` → after: `L7088-L7094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7088-L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7088-L7094) · [Before (L854-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L854-L857)

```diff
-       Kf(ee) {
-         const ie = Ri(ee, Ei.cnOV, Ei.JWc6),
-           He = gi;
-         Ei.pDj3(this.__wbg_ptr, ie, He)
+       onChange() {
+         if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
+           const WW = arguments.length <= 0 ? void 0 : arguments[0],
+             iW = arguments.length <= 1 ? void 0 : arguments[1];
+           return this.addCallback(WW[LW], EW.REPLACE, iW)
+         }
+         return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], EW.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAv … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L860` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7097) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L860)

```diff
-         return Ei.fXSt(this.__wbg_ptr) >>> 0
+         return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], EW.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L863` → after: `L7100-L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7100-L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7100-L7112) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L863)

```diff
-         return Ei.Nd6T(this.__wbg_ptr) >>> 0
+         return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], EW.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAva … [truncated]
+       }
+       bindTo(WW, iW, OW) {
+         let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const NW = WW.constructor[Symbol.metadata];
+         OW || (OW = Object.keys(NW).filter((WW => !isNaN(Number(WW)))).map((WW => NW[WW].name)));
+         const PW = () => {
+           for (const mW of OW) {
+             const OW = WW[mW];
+             void 0 !== OW && (iW[mW] = OW)
+           }
+         };
+         return mW && PW(), this.addCallback(WW[LW], EW.REPLACE, PW)
```

#### 155. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L866-L881` → after: `L7115-L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7115-L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7115-L7192) · [Before (L866-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L866-L881)

```diff
-         const ie = Ei.VCWJ(this.__wbg_ptr, ee);
-         if (ie[2]) throw ki(ie[1]);
-         return ie[0] >>> 0
-       }
-       constructor(ee, ie, He, ye, be, Me) {
-         const Ke = Ui(ee, Ei.cnOV),
-           Ue = gi,
-           Fe = oi(ie, Ei.cnOV),
-           Je = gi,
-           oe = Fi(He, Ei.cnOV),
-           Re = gi,
-           ke = Ji(ye, Ei.cnOV),
-           qe = gi,
-           fe = Ei.r2pr(Ke, Ue, Fe, Je, oe, Re, ke, qe, be, Me);
-         if (fe[2]) throw ki(fe[1]);
-         return this.__wbg_ptr = fe[0], me.register(this, this.__wbg_ptr, this), this
+         this.uniqueRefIds.clear(), this.isTriggering = !0;
+         for (let iW = 0, OW = WW.length; iW < OW; iW++) {
+           const OW = WW[iW],
+             mW = OW.refId,
+             NW = OW.ref,
+             PW = this.callbacks[mW];
+           if (PW) {
+             if ((OW.op & EW.DELETE) === EW.DELETE && um.isSchema(OW.previousValue)) {
+               const WW = OW.previousValue[LW],
+                 iW = this.callbacks[WW]?.[EW.DELETE];
+               if (iW)
+                 for (let OW = iW.length - 1; OW >= 0; OW--) try {
+                   iW[OW]()
+                 } catch (cE) {
+                   console.error(cE)
+                 }
+ ... (62 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L883-L884` → after: `L7194-L7216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7194-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7194-L7216) · [Before (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L883-L884)

```diff
-       gf() {
-         return Ei.W8yK(this.__wbg_ptr) >>> 0
+     }
+     const NE = {
+       get(WW) {
+         if (WW instanceof zm) return new EE(WW);
+         if ("tZ" in WW.aU) return new EE(WW.aU.tZ);
+         throw new Error("Invalid room or decoder")
+       },
+       getLegacy(WW) {
+         if (WW instanceof zm) return OE(WW);
+         if ("tZ" in WW.aU) return OE(WW.aU.tZ);
+         throw new Error("Invalid room or decoder")
+       },
+       getRawChanges: (WW, iW) => mE(WW, iW)
+     };
+     class PE {
+       _free = [];
+ ... (7 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L886-L889` → after: `L7218-L7219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7218-L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7218-L7219) · [Before (L886-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L886-L889)

```diff
-       Ef() {
-         const ee = Ei.paKu(this.__wbg_ptr);
-         if (ee[2]) throw ki(ee[1]);
-         return 0 !== ee[0]
+       acquire() {
+         return this._free.length > 0 ? this._free.pop() : this._factory()
```

#### 158. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L891-L892` → after: `L7221-L7222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7221-L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7221-L7222) · [Before (L891-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L891-L892)

```diff
-       df() {
-         return Ei.uOIx(this.__wbg_ptr) >>> 0
+       release(WW) {
+         um.reset(WW), this._free.length < this._maxSize && this._free.push(WW)
```

#### 159. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L894-L912` → after: `L7224-L7225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7224-L7225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7224-L7225) · [Before (L894-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L894-L912)

```diff
-     }
- 
-     function ke() {
-       const ee = Ei.C3yX();
-       var ie = je(ee[0], ee[1]).slice();
-       return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
-     }
- 
-     function qe(ee, ie) {
-       let He, ye;
-       try {
-         const be = Ui(ee, Ei.cnOV),
-           Me = gi,
-           Ke = Ri(ie, Ei.cnOV, Ei.JWc6),
-           Ue = gi,
-           Fe = Ei.tgQ7(be, Me, Ke, Ue);
- ... (3 more removed lines; see GitHub link above)
+       get size() {
+         return this._free.length
```

#### 160. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L923` → after: `L7230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7230) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L923)

```diff
-       return 0 !== Ei.LvXv(ee)
+       return new PE((() => new WW), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
```

#### 161. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L927-L955` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7290) · [Before (L927-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L927-L955)

```diff
-       const He = Ri(ee, Ei.cnOV, Ei.JWc6),
-         ye = gi,
-         be = Ei.xl4b(He, ye, ie);
-       if (be[1]) throw ki(be[0])
-     }
- 
-     function Xe() {
-       Ei.RoZG()
-     }
- 
-     function ze() {
-       return Ei.ndDX() >>> 0
-     }
- 
-     function Be(ee) {
-       return 0 !== Ei.Nl69(ee)
- ... (13 more removed lines; see GitHub link above)
+       if ("function" !== typeof iW && null !== iW) throw new TypeError("Class extends value " + String(iW) + " is not a constructor or null");
```

#### 162. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L957-L958` → after: `L7292-L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7292-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7292-L7295) · [Before (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L957-L958)

```diff
-     function de() {
-       return Ei.dqfn() >>> 0
+       function OW() {
+         this.constructor = WW
+       }
+       mW(WW, iW), WW.prototype = null === iW ? Object.create(iW) : (OW.prototype = iW.prototype, new OW)
```

#### 163. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L961-L962` → after: `L7305-L7312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7305-L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7305-L7312) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L961-L962)

```diff
-     function We() {
-       return 0 !== Ei.fXFG()
+     function PW(WW, iW) {
+       var OW = {};
+       for (var mW in WW) Object.prototype.hasOwnProperty.call(WW, mW) && iW.indexOf(mW) < 0 && (OW[mW] = WW[mW]);
+       if (null != WW && "function" === typeof Object.getOwnPropertySymbols) {
+         var EW = 0;
+         for (mW = Object.getOwnPropertySymbols(WW); EW < mW.length; EW++) iW.indexOf(mW[EW]) < 0 && Object.prototype.propertyIsEnumerable.call(WW, mW[EW]) && (OW[mW[EW]] = WW[mW[EW]])
+       }
+       return OW
```

#### 164. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L965-L968` → after: `L7315-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7315-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7315-L7321) · [Before (L965-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L965-L968)

```diff
-     function te() {
-       const ee = Ei.hvc1();
-       var ie = je(ee[0], ee[1]).slice();
-       return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
+     function LW(WW, iW, OW, mW) {
+       var EW, NW = arguments.length,
+         PW = NW < 3 ? iW : null === mW ? mW = Object.getOwnPropertyDescriptor(iW, OW) : mW;
+       if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) PW = Reflect.decorate(WW, iW, OW, mW);
+       else
+         for (var LW = WW.length - 1; LW >= 0; LW--)(EW = WW[LW]) && (PW = (NW < 3 ? EW(PW) : NW > 3 ? EW(iW, OW, PW) : EW(iW, OW)) || PW);
+       return NW > 3 && PW && Object.defineProperty(iW, OW, PW), PW
```

#### 165. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L971-L974` → after: `L7324-L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7324-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7324-L7327) · [Before (L971-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L971-L974)

```diff
-     function Ze() {
-       const ee = Ei.OFKu();
-       var ie = je(ee[0], ee[1]).slice();
-       return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
+     function cW(WW, iW) {
+       return function(OW, mW) {
+         iW(OW, mW, WW)
+       }
```

#### 166. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L977-L980` → after: `L7330-L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7330-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7330-L7353) · [Before (L977-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L977-L980)

```diff
-     function we() {
-       const ee = Ei.ckSU();
-       var ie = je(ee[0], ee[1]).slice();
-       return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
+     function wW(WW, iW, OW, mW, EW, NW) {
+       function PW(WW) {
+         if (void 0 !== WW && "function" !== typeof WW) throw new TypeError("Function expected");
+         return WW
+       }
+       for (var LW, cW = mW.kind, wW = "getter" === cW ? "get" : "setter" === cW ? "set" : "value", tW = !iW && WW ? mW.static ? WW : WW.prototype : null, ZW = iW || (tW ? Object.getOwnPropertyDescriptor(tW, mW.name) : {}), xW = !1, lW = OW.length - 1; lW >= 0; lW--) {
+         var AW = {};
+         for (var bW in mW) AW[bW] = "access" === bW ? {} : mW[bW];
+         for (var bW in mW.access) AW.access[bW] = mW.access[bW];
+         AW.addInitializer = function(WW) {
+           if (xW) throw new TypeError("Cannot add initializers after decoration has completed");
+           NW.push(PW(WW || null))
+         };
+         var jW = (0, OW[lW])("accessor" === cW ? {
+           get: ZW.get,
+           set: ZW.set
+ ... (8 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L983-L984` → after: `L7356-L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7356-L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7356-L7358) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L983-L984)

```diff
-     function De() {
-       return Ei.yXeh() >>> 0
+     function tW(WW, iW, OW) {
+       for (var mW = arguments.length > 2, EW = 0; EW < iW.length; EW++) OW = mW ? iW[EW].call(WW, OW) : iW[EW].call(WW);
+       return mW ? OW : void 0
```

#### 168. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L987-L988` → after: `L7361-L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7361-L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7361-L7362) · [Before (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L987-L988)

```diff
-     function Pe() {
-       Ei.yS42()
+     function ZW(WW) {
+       return "symbol" === typeof WW ? WW : "".concat(WW)
```

#### 169. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L991-L998` → after: `L7365-L7369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7365-L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7365-L7369) · [Before (L991-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L991-L998)

```diff
-     function Ae() {
-       let ee, ie;
-       try {
-         const He = Ei.YOOB();
-         return ee = He[0], ie = He[1], Ge(He[0], He[1])
-       } finally {
-         Ei.o0dT(ee, ie, 1)
-       }
+     function xW(WW, iW, OW) {
+       return "symbol" === typeof iW && (iW = iW.description ? "[".concat(iW.description, "]") : ""), Object.defineProperty(WW, "name", {
+         configurable: !0,
+         value: OW ? "".concat(OW, " ", iW) : iW
+       })
```

#### 170. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1001-L1002` → after: `L7372-L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7372-L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7372-L7373) · [Before (L1001-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1001-L1002)

```diff
-     function Ye(ee) {
-       Ei.VGxH(le(ee))
+     function lW(WW, iW) {
+       if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(WW, iW)
```

#### 171. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1005-L1025` → after: `L7376-L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7376-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7376-L7381) · [Before (L1005-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1005-L1025)

```diff
-     function Ve() {
-       return {
-         __proto__: null,
-         mLKo: {
-           __proto__: null,
-           WEqb: function(ee, ie) {
-             return le(Error(Ge(ee, ie)))
-           },
-           hPbt: function(ee, ie) {
-             throw new Error(Ge(ee, ie))
-           },
-           nCIU: function(ee) {
-             yi(ee).call()
-           },
-           ciTc: function(ee, ie) {
-             console.error(Ge(ee, ie))
- ... (5 more removed lines; see GitHub link above)
+     function AW(WW, iW, OW, mW) {
+       return new(OW || (OW = Promise))((function(EW, NW) {
+         function PW(WW) {
+           try {
+             cW(mW.next(WW))
+           } catch (iW) {
```

#### 172. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1065-L1069` → after: `L7386-L7392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7386-L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7386-L7392) · [Before (L1065-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1065-L1069)

```diff
-     function le(ee) {
-       Mi === bi.length && bi.push(bi.length + 1);
-       const ie = Mi;
-       return Mi = bi[ie], bi[ie] = ee, ie
-     }
+         function LW(WW) {
+           try {
+             cW(mW.throw(WW))
+           } catch (iW) {
+             NW(iW)
+           }
+         }
```

#### 173. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1071-L1072` → after: `L7394-L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7394-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7394-L7401) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1071-L1072)

```diff
-     function Se(ee, ie) {
-       if (!(ee instanceof ie)) throw new Error(`expected instance of ${ie.name}`)
+         function cW(WW) {
+           var iW;
+           WW.done ? EW(WW.value) : (iW = WW.value, iW instanceof OW ? iW : new OW((function(WW) {
+             WW(iW)
+           }))).then(PW, LW)
+         }
+         cW((mW = mW.apply(WW, iW || [])).next())
+       }))
```

#### 174. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1076-L1077` → after: `L7405-L7417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7405-L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7405-L7417) · [Before (L1076-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1076-L1077)

```diff
-       return ee >>>= 0, he().subarray(ee / 8, ee / 8 + ie)
-     }
+       var OW, mW, EW, NW = {
+           label: 0,
+           sent: function() {
+             if (1 & EW[0]) throw EW[1];
+             return EW[1]
+           },
+           trys: [],
+           ops: []
+         },
+         PW = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
+       return PW.next = LW(0), PW.throw = LW(1), PW.return = LW(2), "function" === typeof Symbol && (PW[Symbol.iterator] = function() {
+         return this
+       }), PW;
```

#### 175. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1079-L1080` → after: `L7419-L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7419-L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7419-L7474) · [Before (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1079-L1080)

```diff
-     function je(ee, ie) {
-       return ee >>>= 0, ei().subarray(ee / 4, ee / 4 + ie)
+       function LW(LW) {
+         return function(cW) {
+           return function(LW) {
+             if (OW) throw new TypeError("Generator is already executing.");
+             for (; PW && (PW = 0, LW[0] && (NW = 0)), NW;) try {
+               if (OW = 1, mW && (EW = 2 & LW[0] ? mW.return : LW[0] ? mW.throw || ((EW = mW.return) && EW.call(mW), 0) : mW.next) && !(EW = EW.call(mW, LW[1])).done) return EW;
+               switch (mW = 0, EW && (LW = [2 & LW[0], EW.value]), LW[0]) {
+                 case 0:
+                 case 1:
+                   EW = LW;
+                   break;
+                 case 4:
+                   return NW.label++, {
+                     value: LW[1],
+                     done: !1
+                   };
+ ... (40 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1084` → after: `L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7490) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1084)

```diff
-       return ee >>>= 0, Hi().subarray(ee / 1, ee / 1 + ie)
+       for (var OW in WW) "default" === OW || Object.prototype.hasOwnProperty.call(iW, OW) || jW(iW, WW, OW)
```

#### 177. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1088-L1089` → after: `L7493-L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7493-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7493-L7506) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1088-L1089)

```diff
-     function he() {
-       return null !== Ie && 0 !== Ie.byteLength || (Ie = new Float64Array(Ei.memory.buffer)), Ie
+     function kW(WW) {
+       var iW = "function" === typeof Symbol && Symbol.iterator,
+         OW = iW && WW[iW],
+         mW = 0;
+       if (OW) return OW.call(WW);
+       if (WW && "number" === typeof WW.length) return {
+         next: function() {
+           return WW && mW >= WW.length && (WW = void 0), {
+             value: WW && WW[mW++],
+             done: !WW
+           }
+         }
+       };
+       throw new TypeError(iW ? "Object is not iterable." : "Symbol.iterator is not defined.")
```

#### 178. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1094-L1100` → after: `L7510-L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7510-L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7510-L7528) · [Before (L1094-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1094-L1100)

```diff
-       return function(ee, ie) {
-         Ti += ie, Ti >= fi && (qi = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), qi.decode(), Ti = ie);
-         return qi.decode(Hi().subarray(ee, ee + ie))
-       }(ee >>> 0, ie)
+       var OW = "function" === typeof Symbol && WW[Symbol.iterator];
+       if (!OW) return WW;
+       var mW, EW, NW = OW.call(WW),
+         PW = [];
+       try {
+         for (;
+           (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
+       } catch (LW) {
+         EW = {
+           error: LW
+         }
+       } finally {
+         try {
+           mW && !mW.done && (OW = NW.return) && OW.call(NW)
+         } finally {
+           if (EW) throw EW.error
+ ... (3 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1106` → after: `L7532-L7533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7532-L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7532-L7533) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1106)

```diff
-       return null !== Qe && 0 !== Qe.byteLength || (Qe = new Uint32Array(Ei.memory.buffer)), Qe
+       for (var WW = [], iW = 0; iW < arguments.length; iW++) WW = WW.concat(sW(arguments[iW]));
+       return WW
```

#### 180. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1111` → after: `L7537-L7542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7537-L7542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7537-L7542) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1111)

```diff
-       return null !== ii && 0 !== ii.byteLength || (ii = new Uint8Array(Ei.memory.buffer)), ii
+       for (var WW = 0, iW = 0, OW = arguments.length; iW < OW; iW++) WW += arguments[iW].length;
+       var mW = Array(WW),
+         EW = 0;
+       for (iW = 0; iW < OW; iW++)
+         for (var NW = arguments[iW], PW = 0, LW = NW.length; PW < LW; PW++, EW++) mW[EW] = NW[PW];
+       return mW
```

#### 181. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1114-L1115` → after: `L7545-L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7545-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7545-L7548) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1114-L1115)

```diff
-     function yi(ee) {
-       return bi[ee]
+     function SW(WW, iW, OW) {
+       if (OW || 2 === arguments.length)
+         for (var mW, EW = 0, NW = iW.length; EW < NW; EW++) !mW && EW in iW || (mW || (mW = Array.prototype.slice.call(iW, 0, EW)), mW[EW] = iW[EW]);
+       return WW.concat(mW || Array.prototype.slice.call(iW))
```

#### 182. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1122` → after: `L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7552) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1122)

```diff
-       return void 0 === ee || null === ee
+       return this instanceof YW ? (this.v = WW, this) : new YW(WW)
```

#### 183. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1125-L1133` → after: `L7555-L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7555-L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7555-L7565) · [Before (L1125-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1125-L1133)

```diff
-     function Ui(ee, ie) {
-       const He = ie(2 * ee.length, 2) >>> 0;
-       return (null !== re && 0 !== re.byteLength || (re = new Uint16Array(Ei.memory.buffer)), re).set(ee, He / 2), gi = ee.length, He
-     }
- 
-     function Fi(ee, ie) {
-       const He = ie(4 * ee.length, 4) >>> 0;
-       return ei().set(ee, He / 4), gi = ee.length, He
-     }
+     function yW(WW, iW, OW) {
+       if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
+       var mW, EW = OW.apply(WW, iW || []),
+         NW = [];
+       return mW = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), PW("next"), PW("throw"), PW("return", (function(WW) {
+         return function(iW) {
+           return Promise.resolve(iW).then(WW, wW)
+         }
+       })), mW[Symbol.asyncIterator] = function() {
+         return this
+       }, mW;
```

#### 184. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1135-L1138` → after: `L7567-L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7567-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7567-L7573) · [Before (L1135-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1135-L1138)

```diff
-     function Ji(ee, ie) {
-       const He = ie(1 * ee.length, 1) >>> 0;
-       return Hi().set(ee, He / 1), gi = ee.length, He
-     }
+       function PW(WW, iW) {
+         EW[WW] && (mW[WW] = function(iW) {
+           return new Promise((function(OW, mW) {
+             NW.push([WW, iW, OW, mW]) > 1 || LW(WW, iW)
+           }))
+         }, iW && (mW[WW] = iW(mW[WW])))
+       }
```

#### 185. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1140-L1143` → after: `L7575-L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7575-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7575-L7582) · [Before (L1140-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1140-L1143)

```diff
-     function oi(ee, ie) {
-       const He = ie(8 * ee.length, 8) >>> 0;
-       return he().set(ee, He / 8), gi = ee.length, He
-     }
+       function LW(WW, iW) {
+         try {
+           (OW = EW[WW](iW)).value instanceof YW ? Promise.resolve(OW.value.v).then(cW, wW) : tW(NW[0][2], OW)
+         } catch (mW) {
+           tW(NW[0][3], mW)
+         }
+         var OW
+       }
```

#### 186. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1145-L1149` → after: `L7584-L7585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7584-L7585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7584-L7585) · [Before (L1145-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1145-L1149)

```diff
-     function Ri(ee, ie, He) {
-       if (void 0 === He) {
-         const He = Xi.encode(ee),
-           ye = ie(He.length, 1) >>> 0;
-         return Hi().subarray(ye, ye + He.length).set(He), gi = He.length, ye
+       function cW(WW) {
+         LW("next", WW)
```

#### 187. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1151-L1158` → after: `L7587-L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7587-L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7587-L7589) · [Before (L1151-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1151-L1158)

```diff
-       let ye = ee.length,
-         be = ie(ye, 1) >>> 0;
-       const Me = Hi();
-       let Ke = 0;
-       for (; Ke < ye; Ke++) {
-         const ie = ee.charCodeAt(Ke);
-         if (ie > 127) break;
-         Me[be + Ke] = ie
+ 
+       function wW(WW) {
+         LW("throw", WW)
```

#### 188. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1160-L1163` → after: `L7591-L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7591-L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7591-L7593) · [Before (L1160-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1160-L1163)

```diff
-       if (Ke !== ye) {
-         0 !== Ke && (ee = ee.slice(Ke)), be = He(be, ye, ye = Ke + 3 * ee.length, 1) >>> 0;
-         const ie = Hi().subarray(be + Ke, be + ye);
-         Ke += Xi.encodeInto(ee, ie).written, be = He(be, ye, Ke, 1) >>> 0
+ 
+       function tW(WW, iW) {
+         WW(iW), NW.shift(), NW.length && LW(NW[0][0], NW[0][1])
```

#### 189. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1169-L1189` → after: `L7598-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7598-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7598-L7603) · [Before (L1169-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1169-L1189)

```diff
-       const ie = yi(ee);
-       return function(ee) {
-         ee < 1028 || (bi[ee] = Mi, Mi = ee)
-       }(ee), ie
-     }
-     let qi = new TextDecoder("utf-8", {
-       ignoreBOM: !0,
-       fatal: !0
-     });
-     qi.decode();
-     const fi = 2146435072;
-     let Ti = 0;
-     const Xi = new TextEncoder;
-     "encodeInto" in Xi || (Xi.encodeInto = function(ee, ie) {
-       const He = Xi.encode(ee);
-       return ie.set(He), {
- ... (5 more removed lines; see GitHub link above)
+       var iW, OW;
+       return iW = {}, mW("next"), mW("throw", (function(WW) {
+         throw WW
+       })), mW("return"), iW[Symbol.iterator] = function() {
+         return this
+       }, iW;
```

#### 190. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1191-L1192` → after: `L7605-L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7605-L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7605-L7612) · [Before (L1191-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1191-L1192)

```diff
-     function Oi(ee, ie) {
-       return Bi = ee, Ei = ee.exports, zi = ie, Ie = null, Ne = null, re = null, Qe = null, ii = null, Ei.X0W7(), Ei
+       function mW(mW, EW) {
+         iW[mW] = WW[mW] ? function(iW) {
+           return (OW = !OW) ? {
+             value: YW(WW[mW](iW)),
+             done: !1
+           } : EW ? EW(iW) : iW
+         } : EW
+       }
```

#### 191. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1196-L1238` → after: `L7616-L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7616-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7616-L7633) · [Before (L1196-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1196-L1238)

```diff
-       if (void 0 !== Ei) return Ei;
-       void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
-         module: ee
-       } = ee) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const ie = Ve();
-       ee instanceof WebAssembly.Module || (ee = new WebAssembly.Module(ee));
-       return Oi(new WebAssembly.Instance(ee, ie), ee)
-     }
-     async function Wi(ee) {
-       if (void 0 !== Ei) return Ei;
-       void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
-         module_or_path: ee
-       } = ee) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const ie = Ve();
-       ("string" === typeof ee || "function" === typeof Request && ee instanceof Request || "function" === typeof URL && ee instanceof URL) && (ee = fetch(ee));
-       const {
- ... (27 more removed lines; see GitHub link above)
+       if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
+       var iW, OW = WW[Symbol.asyncIterator];
+       return OW ? OW.call(WW) : (WW = kW(WW), iW = {}, mW("next"), mW("throw"), mW("return"), iW[Symbol.asyncIterator] = function() {
+         return this
+       }, iW);
+ 
+       function mW(OW) {
+         iW[OW] = WW[OW] && function(iW) {
+           return new Promise((function(mW, EW) {
+             (function(WW, iW, OW, mW) {
+               Promise.resolve(mW).then((function(iW) {
+                 WW({
+                   value: iW,
+                   done: OW
+                 })
+               }), iW)
+ ... (2 more added lines; see GitHub link above)
```

#### 192. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1240-L1241` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7635) · [Before (L1240-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1240-L1241)

```diff
-       }(await ee, ie);
-       return Oi(He, ye)
+       }
```

#### 193. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1260-L1264` → after: `L7638-L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7638-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7638-L7641) · [Before (L1260-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1260-L1264)

```diff
-     function Ue() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
-         ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke,
-         He = arguments.length > 2 ? arguments[2] : void 0;
-       return (0, Me.m)(ee, ie, He)
+     function hW(WW, iW) {
+       return Object.defineProperty ? Object.defineProperty(WW, "raw", {
+         value: iW
+       }) : WW.raw = iW, WW
```

#### 194. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1268-L1275` → after: `L7660-L7664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7660-L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7660-L7664) · [Before (L1268-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1268-L1275)

```diff
-       return (0, be.Q)((() => ee), ye, Ke)
-     }
-   },
-   36981: (ee, ie, He) => {
-     function ye(ee, ie) {
-       return new Error(`${ee}: ${ie instanceof Error?`${ie.name}: ${ie.message}`:String(ie)}`, {
-         cause: ie
-       })
+       if (WW && WW.__esModule) return WW;
+       var iW = {};
+       if (null != WW)
+         for (var OW = nW(WW), mW = 0; mW < OW.length; mW++) "default" !== OW[mW] && jW(iW, WW, OW[mW]);
+       return HW(iW, WW), iW
```

#### 195. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1290-L1291` → after: `L7667-L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7667-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7667-L7670) · [Before (L1290-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1290-L1291)

```diff
-     function Ke() {
-       return new URL(new He.U(He(36983)).href, globalThis.location?.href).href
+     function oW(WW) {
+       return WW && WW.__esModule ? WW : {
+         default: WW
+       }
```

#### 196. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1295-L1298` → after: `L7673-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7673-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7673-L7676) · [Before (L1295-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1295-L1298)

```diff
-     function Fe() {
-       return Ue ??= (async () => (0, ye.B)(new URL(Ke()), (0, be.d)("bloxd_wasm_textures")))().catch((ee => {
-         throw (0, Me.b)((0, ye.J)(ee), ee)
-       })), Ue
+     function dW(WW, iW, OW, mW) {
+       if ("a" === OW && !mW) throw new TypeError("Private accessor was defined without a getter");
+       if ("function" === typeof iW ? WW !== iW || !mW : !iW.has(WW)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
+       return "m" === OW ? mW : "a" === OW ? mW.call(WW) : mW ? mW.value : iW.get(WW)
```

#### 197. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1311-L1312` → after: `L7679-L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7679-L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7679-L7683) · [Before (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1311-L1312)

```diff
-     function be(ee, ie) {
-       return Me(ee, ie) ? `trap=alloc_failed ${ie} bytes` : `trap=${ee}`
+     function eW(WW, iW, OW, mW, EW) {
+       if ("m" === mW) throw new TypeError("Private method is not writable");
+       if ("a" === mW && !EW) throw new TypeError("Private accessor was defined without a setter");
+       if ("function" === typeof iW ? WW !== iW || !EW : !iW.has(WW)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
+       return "a" === mW ? EW.call(WW, OW) : EW ? EW.value = OW : iW.set(WW, OW), OW
```

#### 198. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1316` → after: `L7687-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7687-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7687-L7688) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1316)

```diff
-       return "unreachable" === ee && ie > 0
+       if (null === iW || "object" !== typeof iW && "function" !== typeof iW) throw new TypeError("Cannot use 'in' operator on non-object");
+       return "function" === typeof WW ? iW === WW : WW.has(iW)
```

#### 199. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1320-L1334` → after: `L7692-L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7692-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7692-L7718) · [Before (L1320-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1320-L1334)

```diff
-       const ye = function(ee) {
-         return ee instanceof WebAssembly.RuntimeError ? /unreachable/i.test(ee.message) ? "unreachable" : /out of bounds/i.test(ee.message) ? "out_of_bounds" : "runtime_error" : (ee instanceof RangeError || ee instanceof Error && "InternalError" === ee.name) && /call stack|recurs … [truncated]
-       }(ee);
-       if ("unreachable" !== ye) return {
-         kind: ye,
-         panic: null,
-         refusedBytes: 0
-       };
-       const be = ie(),
-         Me = He();
-       return {
-         kind: ye,
-         panic: Me > 0 ? null : be,
-         refusedBytes: Me
-       }
+       if (null !== iW && void 0 !== iW) {
+         if ("object" !== typeof iW && "function" !== typeof iW) throw new TypeError("Object expected.");
+         var mW, EW;
+         if (OW) {
+           if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
+           mW = iW[Symbol.asyncDispose]
+         }
+         if (void 0 === mW) {
+           if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
+           mW = iW[Symbol.dispose], OW && (EW = mW)
+         }
+         if ("function" !== typeof mW) throw new TypeError("Object not disposable.");
+         EW && (mW = function() {
+           try {
+             EW.call(this)
+           } catch (WW) {
+ ... (11 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1336` → after: `L7720-L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7720-L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7720-L7723) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1336)

```diff
-     const Ue = 300;
+     var DW = "function" === typeof SuppressedError ? SuppressedError : function(WW, iW, OW) {
+       var mW = new Error(OW);
+       return mW.name = "SuppressedError", mW.error = WW, mW.suppressed = iW, mW
+     };
```

#### 201. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1339` → after: `L7726-L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7726-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/213.js#L7726-L7784) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/213.js#L1339)

```diff
-       return ee.replace(/\s*\n\s*/g, " / ").slice(0, Ue)
+       function iW(iW) {
+         WW.error = WW.hasError ? new DW(iW, WW.error, "An error was suppressed during disposal.") : iW, WW.hasError = !0
+       }
+       var OW, mW = 0;
+       return function EW() {
+         for (; OW = WW.stack.pop();) try {
+           if (!OW.async && 1 === mW) return mW = 0, WW.stack.push(OW), Promise.resolve().then(EW);
+           if (OW.dispose) {
+             var NW = OW.dispose.call(OW.value);
+             if (OW.async) return mW |= 2, Promise.resolve(NW).then(EW, (function(WW) {
+               return iW(WW), EW()
+             }))
+           } else mW |= 1
+         } catch (PW) {
+           iW(PW)
+         }
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L18` → after: `L4-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L4-L128) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L4-L18)

```diff
-   34751: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       ALL_DEV_TOOLS: () => Ke,
-       coreDevTools: () => Je,
-       devTools: () => Fe
-     });
-     var ye = He(645),
-       be = He(1260),
-       Me = He(34754);
-     const Ke = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function Ue() {
-       const {
-         noaDevTools: ee
-       } = await He.e(264).then((() => He(42142)));
-       return ee
+   40354: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     class mW {
+       constructor(WW, iW) {
+         this.read = WW, this.apply = iW, this.release = null
+       }
+       turn(WW, iW) {
+         const OW = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: iW,
+           forcedCameraDirection: [WW[0], WW[1], WW[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+ ... (109 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L21-L22` → after: `L131-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L131-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L131-L392) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L21-L22)

```diff
-         constructor() {
-           this.loadHost = Ue, this.tools = Ke
+       constructor() {
+         this.rings = null, this.sample = new Float64Array(lW.length), this.startedClient = null, this.startedAtMs = 0
+       }
+       get client() {
+         return this.startedClient
+       }
+       start(WW, iW) {
+         this.startedClient = WW, this.startedAtMs = performance.now(), null !== this.rings ? this.change(UW(WW)) : iW && this.allocate()
+       }
+       lockGained() {
+         this.allocate(), this.change(tW.lockGained)
+       }
+       allocate() {
+         null === this.rings && (this.rings = new kW, null !== this.startedClient && this.changeAt(this.startedAtMs, UW(this.startedClient), 1))
+       }
+       step(WW, iW) {
+ ... (246 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L24-L25` → after: `L394-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L394-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L394-L435) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L24-L25)

```diff
-         setHost(ee) {
-           this.tools = null === ee ? Ke : ee.tools, this.loadHost = null === ee ? Ue : async () => ee
+       }
+       getScreen() {
+         return this.screen
+       }
+       fadeOut(WW) {
+         !this.isGoingOut() && this.sinceTurnMs < mW.o.minFadeTurnMs ? this.waiting = {
+           turn: "out",
+           transition: WW
+         } : (this.waiting = null, this.startOut(WW))
+       }
+       fadeIn(WW) {
+         this.isGoingOut() ? this.sinceTurnMs < mW.o.minFadeTurnMs ? this.waiting = {
+           turn: "in",
+           minMs: WW
+         } : (this.waiting = null, this.startIn(WW)) : this.waiting = null
+       }
+ ... (26 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L27-L28` → after: `L437-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L437-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L437-L442) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L27-L28)

```diff
-         supports(ee) {
-           return this.tools.has(ee)
+         let NW = WW;
+         if ("hold" === this.phase) {
+           this.sH += EW;
+           const WW = Math.min(this.sH - this.holdMs, this.sinceTurnMs - mW.o.minFadeTurnMs);
+           if (WW < 0 || OW) return OW;
+           this.phase = "in", this.sinceTurnMs = WW, NW = WW
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L30-L32` → after: `L444-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L444-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L444-L505) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L30-L32)

```diff
-         async downloadScene(ee, ie) {
-           const He = await this.loadHost();
-           await He.downloadScene(ee, ie)
+         return "in" === this.phase && (iW.alpha = PW(iW.alpha, 0, NW, this.inMs), iW.alpha <= 0 && (this.phase = null, this.clearMs = 0)), OW
+       }
+     }
+     var cW = OW(40407),
+       wW = OW(40431),
+       tW = OW(2012),
+       ZW = OW(37840);
+ 
+     function xW(WW, iW) {
+       for (let OW = 0; OW < iW.length; OW++) iW[OW] = WW[OW]
+     }
+ 
+     function lW(WW, iW) {
+       var OW;
+       return null !== (OW = WW.fov) && void 0 !== OW ? OW : iW.getDefaultFov()
+     }
+ ... (46 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L34-L36` → after: `L507-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L507-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L507-L510) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L34-L36)

```diff
-         async setAmbientLightIntensity(ee) {
-           const ie = await this.loadHost();
-           await ie.setAmbientLightIntensity(ee)
+         if (OW > 0) this.framedTargets = !0;
+         else if (!this.framedTargets) {
+           const WW = this.targets.aimPoint(this.oZ.localPlayerId);
+           WW && (0, cW.j)(WW, this.pointAt(OW++))
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L38-L39` → after: `L512-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L512-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L512-L518) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L38-L39)

```diff
-         async capturePhoto(ee, ie, He) {
-           return (await this.loadHost()).capturePhoto(ee, ie, He)
+         const mW = this.goal;
+         if (0 === OW) return void(mW[3] = this.withinDistances(mW[3]));
+         for (let cW = 0; cW < 3; cW++) {
+           let WW = 1 / 0,
+             iW = -1 / 0;
+           for (let mW = 0; mW < OW; mW++) WW = Math.min(WW, this.points[mW][cW]), iW = Math.max(iW, this.points[mW][cW]);
+           mW[cW] = (WW + iW) / 2
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L41-L45` → after: `L520-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L520-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L520-L1506) · [Before (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L41-L45)

```diff
-       },
-       Je = {
-         tools: Me.d,
-         downloadScene: async () => {
-           throw new Error("This client can't download the scene")
+         let EW = 0;
+         for (let cW = 0; cW < OW; cW++) {
+           const WW = this.points[cW];
+           EW = Math.max(EW, Math.hypot(WW[0] - mW[0], WW[1] - mW[1], WW[2] - mW[2]))
+         }
+         const NW = Math.tan((0, tW.i)(WW) / 2),
+           PW = Math.atan(NW * (!0 === this.settings.letterbox ? ZW.h : 1)),
+           LW = Math.atan(NW * this.oZ.getAspectRatio()),
+           wW = (EW + (null !== (iW = this.settings.padding) && void 0 !== iW ? iW : 2)) / Math.sin(Math.min(PW, LW));
+         mW[3] = this.withinDistances(wW)
+       }
+       withinDistances(WW) {
+         return Math.min(this.furthestDistance, Math.max(this.closestDistance, WW))
+       }
+       pointAt(WW) {
+         return WW === this.points.length && this.points.push([0, 0, 0]), this.points[WW]
+ ... (971 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L47-L48` → after: `L1508-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L1508-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L1508-L1515) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L47-L48)

```diff
-         setAmbientLightIntensity: async () => {
-           throw new Error("This client can't set the ambient light")
+         underwater: {
+           type: "custom",
+           nx: "/textures/skyBoxes/underwater/water.jpg",
+           ny: "/textures/skyBoxes/underwater/water.jpg",
+           nz: "/textures/skyBoxes/underwater/water.jpg",
+           px: "/textures/skyBoxes/underwater/water.jpg",
+           py: "/textures/skyBoxes/underwater/water.jpg",
+           pz: "/textures/skyBoxes/underwater/water.jpg"
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L50-L51` → after: `L1517-L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L1517-L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L1517-L1542) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L50-L51)

```diff
-         capturePhoto: async () => {
-           throw new Error("No game is drawing yet")
+         starry: {
+           type: "custom",
+           nx: "/textures/skyBoxes/starry/_nx.jpg",
+           ny: "/textures/skyBoxes/starry/_ny.jpg",
+           nz: "/textures/skyBoxes/starry/_nz.jpg",
+           px: "/textures/skyBoxes/starry/_px.jpg",
+           py: "/textures/skyBoxes/starry/_py.jpg",
+           pz: "/textures/skyBoxes/starry/_pz.jpg"
+         },
+         space_red_2: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
+           px: "/textures/skyBoxes/space_red_2/_px.jpg",
+           py: "/textures/skyBoxes/space_red_2/_py.jpg",
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L53-L56` → after: `L1544-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L1544-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/214.js#L1544-L1605) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/214.js#L53-L56)

```diff
-       };
-     ye.I && Fe.setHost(Je), (0, be.s)((() => {
-       Fe.setHost(Je)
-     }))
+       },
+       EW = "/textures/dayNight/sun.png",
+       NW = "/textures/dayNight/moon.png",
+       PW = "/textures/dayNight/stars",
+       LW = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
+   },
+   40428: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => ZW,
+       e: () => xW,
+       h: () => mW,
+       k: () => EW,
+       o: () => wW,
+       q: () => NW,
+       t: () => tW,
+       v: () => cW,
+ ... (46 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/215.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/215.js#L4)

```diff
-   37169: (ee, ie, He) => {
+   35063: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/215.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/215.js#L6-L7)

```diff
-       isMoreOptionsInFooter: () => ve,
-       showOnboardingPopup: () => ue
+       getLatestPublishedUpdateLog: () => LW,
+       updateLogsData: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L9-L595` → after: `L9-L2791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L9-L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/215.js#L9-L2791) · [Before (L9-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/215.js#L9-L595)

```diff
-     var ye = He(59),
-       be = He(1127),
-       Me = He(1340),
-       Ke = He(1438),
-       Ue = He(1070),
-       Fe = He(4690),
-       Je = He(1557),
-       oe = He(347),
-       Re = He(1553),
-       ke = He(2278),
-       qe = He(1053),
-       fe = He.n(qe),
-       Te = He(1083),
-       pe = He(37175),
-       Xe = He(2425),
-       ze = He(3871),
- ... (571 more removed lines; see GitHub link above)
+     var mW = OW(863),
+       EW = OW(327);
+     const NW = "\xa0\xa0\xa0\xa0",
+       PW = [{
+         author: ["ellie", "Harry"],
+         date: new Date("2026-11-27T16:00:00Z"),
+         title: "Greenville: The City Grows!",
+         description: "Greenville has been rebuilt from the ground up!\n\n\ud83d\uddfa\ufe0f Explore a completely new map with addresses and a minimap\n\u26cf\ufe0f Take jobs at the reworked Quarry, Farm, Lumber Mill, Market Street and Demolition Yard!\n\ud83d\ude97 Save up for yo … [truncated]
+         image: "greenville_v2.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "greenville"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Play now",
+ ... (2767 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L598-L639` → after: `L2794-L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/215.js#L2794-L2797) · [Before (L598-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/215.js#L598-L639)

```diff
-       return console.error("Error when trying to get with new name from DB", ee), {
-         outcome: "refused",
-         message: ee
-       }
-     }
-     async function fe(ee) {
-       const ie = await Re(ee, "/index/name/random", {});
-       return ke(ie) ? ie : "err" in ie ? qe(ie.err) : (ee.setPlayerName(ie.name), {
-         outcome: "changed",
-         name: ie.name
-       })
-     }
-     async function Te(ee, ie) {
-       const He = await Re(ee, "/index/name/update", {
-         name: ie
-       });
- ... (26 more removed lines; see GitHub link above)
+       const iW = Date.now();
+       let OW = null;
+       for (const mW of PW) mW.date.getTime() > iW || WW && !WW(mW) || (!OW || mW.date.getTime() > OW.date.getTime()) && (OW = mW);
+       return OW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L208` → after: `L4-L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4-L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L4-L8131) · [Before (L4-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L4-L208)

```diff
-   34798: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ge,
-       c: () => Ai,
-       e: () => Pi,
-       g: () => Vi,
-       h: () => fi,
-       l: () => Xi,
-       n: () => zi,
-       r: () => Ei,
-       t: () => Yi,
-       x: () => Bi
-     });
-     var ye = He(260),
-       be = He(18),
-       Me = He(97),
- ... (189 more removed lines; see GitHub link above)
+   35068: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(WW, iW, OW) {
+               WW.exports = OW(7588)
+             },
+             5036: function(WW, iW, OW) {
+               OW(1719), OW(5677), OW(6394), OW(5334), OW(6969), OW(2021), OW(8328), OW(2129);
+               var mW = OW(1287);
+               WW.exports = mW.Promise
+             },
+             2582: function(WW, iW, OW) {
+               OW(1646), OW(6394), OW(2004), OW(462), OW(8407), OW(2429), OW(1172), OW(8288), OW(1274), OW(8201), OW(6626), OW(3211), OW(9952), OW(15), OW(9831), OW(7521), OW(2972), OW(6956), OW(5222), OW(2257);
+               var mW = OW(1287);
+ ... (8112 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L210-L520` → after: `L8133-L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L8133-L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L8133-L8436) · [Before (L210-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L210-L520)

```diff
-         }
-       }
-       watch(ee, ie, He, ye, be, Me) {
-         const Ke = this.climbed;
-         null !== Ke && !ye && !be && ++Ke.heldWindows >= fe.heldWindows && (this.climbed = null, this.record(Me, ee, "lJ"), this.hooks.lJ(this.step)), ye ? (this.dropRun += ie, this.dropRunFpsSum += ee * ie, this.dropRunMasked ||= be, be || (this.dropRunClean += ie, this.dropRunC … [truncated]
-         const Ue = null !== this.climbed ? fe : qe;
-         if (this.dropRun >= (this.dropRunMasked ? Ue.maskedWindows : Ue.dropWindows)) {
-           const ie = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
-             He = this.dropRunClean >= qe.dropWindows && ie < this.noGainFps[this.step] * Te.heavierShare;
-           this.resetDropRun();
-           const ye = this.climbed;
-           return void(null !== ye ? (this.failUp(this.step, ye.from, ee, Me), this.climbed = ye.below) : this.step < this.lowest && (He || this.waitOver(Me)) && (this.climbing = !1, this.phase = {
-             kind: "down",
-             from: this.step,
-             fromFps: ie,
-             early: !this.waitOver(Me),
- ... (295 more removed lines; see GitHub link above)
+ 
+           function Am(WW, iW) {
+             var OW, mW, EW;
+ 
+             function NW() {
+               for (var WW, OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
+               return (WW = iW)[26].apply(WW, [iW[53]].concat(mW))
+             }
+             return mW = new vO({
+               props: {
+                 show: iW[53].show,
+                 top: iW[9][iW[53].index],
+                 Lk: NW,
+                 $$slots: {
+                   default: [lm]
+                 },
+ ... (288 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L522-L549` → after: `L8438-L9184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR8438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L8438-L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L8438-L9184) · [Before (L522-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L522-L549)

```diff
-             (null === (ie = se()) || void 0 === ie ? void 0 : ie.failedUpN) === He && (ye.failedUpN = void 0), Wi(ye)
-           },
-           upFailed: ee => {
-             Wi({
-               failedUpN: le()[ee],
-               failedUpAt: Date.now()
-             })
-           },
-           noGain: ee => {
-             Wi({
-               noGain: null === ee ? void 0 : Ie(ee)
-             })
-           }
-         }, {
-           lowest: Ki(He, gi, ye),
-           startStep: ye,
- ... (12 more removed lines; see GitHub link above)
+ 
+             function ii(WW, iW, mW) {
+               for (var EW = 0, NW = 0; EW < WW.length && NW + pW[EW] < iW - YW;) NW += pW[EW], EW += 1;
+               for (OW(16, nW = EW); EW < WW.length && mW && NW < iW + mW + YW;) NW += pW[EW], EW += 1;
+               OW(17, oW = EW), OW(10, CW = XW(WW.length, nW, oW))
+             }
+             var Oi = function(WW, iW) {
+               return jW(void 0, void 0, void 0, hO().mark((function mW() {
+                 var EW, NW, PW, LW;
+                 return hO().wrap((function(mW) {
+                   for (;;) switch (mW.prev = mW.next) {
+                     case 0:
+                       if (pW[WW] !== iW && 0 !== vW) {
+                         mW.next = 2;
+                         break
+                       }
+ ... (731 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L551-L553` → after: `L9186-L9211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR9186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L9186-L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L9186-L9211) · [Before (L551-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L551-L553)

```diff
-             get scale() {
-               var ee;
-               return le()[0] / (null !== (ee = fi()) && void 0 !== ee ? ee : Ti())
+             Xm = function(WW, OW) {
+               var mW = "";
+               switch (WW) {
+                 case "":
+                 case "text":
+                 case "json":
+                   if (iW.HD(OW)) try {
+                     mW = JSON.parse(OW), mW = iW.hZ(mW, {
+                       maxDepth: 10,
+                       keyMaxLen: 1e4,
+                       pretty: !0,
+                       standardJSON: !0
+                     })
+                   } catch (WW) {
+                     mW = iW.id(String(OW), 1e4)
+                   } else iW.Kn(OW) || iW.kJ(OW) ? mW = iW.hZ(OW, {
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L555-L556` → after: `L9213-L9237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L9213-L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L9213-L9237) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L555-L556)

```diff
-             get msaaOff() {
-               return Ge()
+             Bm = function(WW) {
+               if (!WW) return null;
+               var OW = null;
+               if ("string" == typeof WW) try {
+                 OW = JSON.parse(WW)
+               } catch (iW) {
+                 var mW = WW.split("&");
+                 if (1 === mW.length) OW = WW;
+                 else {
+                   OW = {};
+                   for (var EW, NW = pm(mW); !(EW = NW()).done;) {
+                     var PW = EW.value.split("=");
+                     OW[PW[0]] = void 0 === PW[1] ? "undefined" : PW[1]
+                   }
+                 }
+               } else if (iW.TW(WW)) {
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L558-L559` → after: `L9239-L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR9239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L9239-L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L9239-L9243) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L558-L559)

```diff
-             get probeShare() {
-               return ne()
+             qm = function(WW) {
+               return void 0 === WW && (WW = ""), WW.startsWith("//") && (WW = "" + new URL(window.location.href).protocol + WW), WW.startsWith("http") ? new URL(WW) : new URL(WW, window.location.href)
+             },
+             Rm = function() {
+               this.id = "", this.name = "", this.method = "", this.url = "", this.status = 0, this.statusText = "", this.cancelState = 0, this.readyState = 0, this.header = null, this.responseType = "", this.requestType = void 0, this.requestHeader = null, this.response = void 0, … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L561-L562` → after: `L9245-L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L9245-L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L9245-L9284) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L561-L562)

```diff
-             log: ee.log,
-             windows: ee.windows
+             Gm = function(WW) {
+               function iW(OW) {
+                 var mW;
+                 return (mW = WW.call(this) || this)._response = void 0, new Proxy(OW, iW.Handler) || (0, EW.Z)(mW)
+               }
+               return (0, NW.Z)(iW, WW), iW
+             }(Rm);
+           Gm.Handler = {
+             get: function(WW, iW) {
+               return "response" === iW ? WW._response : Reflect.get(WW, iW)
+             },
+             set: function(WW, iW, OW) {
+               var mW;
+               switch (iW) {
+                 case "response":
+                   return WW._response = Xm(WW.responseType, OW), !0;
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L564-L635` → after: `L9286-L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR9286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L9286-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L9286-L9444) · [Before (L564-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L564-L635)

```diff
-           Object.defineProperty(window, "__qualitySteps", {
-             value: ie,
-             configurable: !0
-           })
-         }(Fi), ki()
-     }
- 
-     function di() {
-       null !== Fi && me() !== gi && (Hi = null, Oi())
-     }
- 
-     function Wi(ee) {
-       oe.i.setItem(je(), {
-         ...se(),
-         ...ee,
-         gpu: oi
- ... (56 more removed lines; see GitHub link above)
+           var Im = function() {
+               function WW(WW, iW) {
+                 var OW = this;
+                 this.XMLReq = void 0, this.item = void 0, this.onUpdateCallback = void 0, this.XMLReq = WW, this.XMLReq.onreadystatechange = function() {
+                   OW.onReadyStateChange()
+                 }, this.XMLReq.onabort = function() {
+                   OW.onAbort()
+                 }, this.XMLReq.ontimeout = function() {
+                   OW.onTimeout()
+                 }, this.item = new Rm, this.item.requestType = "xhr", this.onUpdateCallback = iW
+               }
+               var OW = WW.prototype;
+               return OW.get = function(WW, iW) {
+                 switch (iW) {
+                   case "_noVConsole":
+                     return this.item.noVConsole;
+ ... (143 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L637-L641` → after: `L9446-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L9446-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/216.js#L9446-L11892) · [Before (L637-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/216.js#L637-L641)

```diff
-         }
-         He && (0, be.Q)(String(He.getParameter(He.VENDOR)), String(He.getParameter(He.RENDERER)))
-       } catch {}
-       return null
-     }
+ 
+           function zm(WW, iW) {
+             (null == iW || iW > WW.length) && (iW = WW.length);
+             for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
+             return mW
+           }
+           am.origXMLHttpRequest = XMLHttpRequest;
+           var Fm = function() {
+               function WW(WW, iW, OW) {
+                 this.resp = void 0, this.item = void 0, this.onUpdateCallback = void 0, this.resp = WW, this.item = iW, this.onUpdateCallback = OW, this.mockReader()
+               }
+               var OW = WW.prototype;
+               return OW.set = function(WW, iW, OW) {
+                 return Reflect.set(WW, iW, OW)
+               }, OW.get = function(WW, iW) {
+                 var OW = this,
+ ... (2431 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L2)

```diff
- export const ids = [217];
+ export const ids = [217, 218];
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4-L169` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L4-L7) · [Before (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L4-L169)

```diff
-   37786: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => be,
-       d: () => Me,
-       f: () => Ue,
-       j: () => Ke
-     });
-     var ye = He(1790);
-     const be = ".bloxdreplay",
-       Me = "application/octet-stream";
- 
-     function Ke() {
-       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${be}`
-     }
- 
-     function Ue(ee) {
- ... (150 more removed lines; see GitHub link above)
+   35076: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       reportJsMainStall: () => LW,
+       resetJsMainStallReport: () => cW
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L246-L284` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L15) · [Before (L246-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L246-L284)

```diff
-       if (! function(ee, ie, He) {
-           return ee.size > 0 || ie.size > 0 || He.size > 0
-         }(ie, He, ye)) return ee;
-       const be = ee => {
-         const ye = He.get(ee.name);
-         var be;
-         return ye ? null !== (be = ye.stepsAway) && void 0 !== be ? be : 1 : ie.has(ee.name) ? -1 : 0
-       };
-       return [...ee].sort(((ee, ie) => be(ee) - be(ie) || ((ee, ie) => {
-         const He = ye.get(ee.name),
-           be = ye.get(ie.name);
-         return void 0 === He || void 0 === be ? (void 0 === He ? 1 : 0) - (void 0 === be ? 1 : 0) : Number(ie.haveIngredients) - Number(ee.haveIngredients) || He - be
-       })(ee, ie)))
-     }
- 
-     function Ee(ee, ie, He) {
- ... (23 more removed lines; see GitHub link above)
+       PW || (PW = !0, (0, EW.reportClientError)("wasm_load", (0, NW.b)(WW, iW, OW, LW, (0, NW.c)()), "JS-mainStall", !0, mW.CAPPED_COUNTS_VISIT_CAP))
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L288-L307` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L19) · [Before (L288-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L288-L307)

```diff
-       return (0, ye.c)(Ue, Te)
-     }
- 
-     function te() {
-       return (0, ye.c)(Fe, Xe)
-     }
-   },
-   37637: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Me,
-       e: () => be
-     });
-     let ye = () => null;
- 
-     function be(ee) {
-       ye = ee
- ... (4 more removed lines; see GitHub link above)
+       PW = !1
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L310` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L22) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L310)

```diff
-   37383: (ee, ie, He) => {
+   35086: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L312-L316` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L24-L25) · [Before (L312-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L312-L316)

```diff
-       c: () => Ke,
-       g: () => fe,
-       i: () => be,
-       m: () => Ue,
-       p: () => Je
+       b: () => LW,
+       c: () => PW
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L318-L330` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L27-L29) · [Before (L318-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L318-L330)

```diff
-     var ye = He(37392);
-     const be = "data-camera-fade",
-       Me = "data-letterbox-bar",
-       Ke = "data-camera-fade-layer";
- 
-     function Ue(ee) {
-       return ee instanceof Element && ee.hasAttribute(Me)
-     }
-     let Fe = null;
- 
-     function Je(ee) {
-       Fe = ee
-     }
+     var mW = OW(248),
+       EW = OW(131),
+       NW = OW(35089);
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L333-L337` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L32-L33) · [Before (L333-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L333-L337)

```diff
-       const ee = document.createElement("div"),
-         {
-           style: ie
-         } = ee;
-       return ie.position = "absolute", ie.left = "0", ie.right = "0", ie.pointerEvents = "none", ee
+       var WW, iW, OW;
+       return null !== (WW = (0, mW.m)(null !== (iW = null === (OW = (0, EW.j)()) || void 0 === OW ? void 0 : OW.renderer) && void 0 !== iW ? iW : null, (0, EW.f)())) && void 0 !== WW ? WW : "unknown"
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L340-L414` → after: `L36-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L36-L38) · [Before (L340-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L340-L414)

```diff
-     function Re(ee) {
-       const ie = oe();
-       ie.style[ee] = "0", ie.style.height = 100 * ye.c + "%", ie.style.background = "#000000", ie.style.pointerEvents = "auto", ie.setAttribute(Me, ""), ie.addEventListener("mousedown", qe), ie.addEventListener("contextmenu", ke);
-       for (const He of ["touchstart", "touchmove", "touchend", "touchcancel"]) ie.addEventListener(He, ke);
-       return ie
-     }
- 
-     function ke(ee) {
-       ee.preventDefault(), ee.stopPropagation()
-     }
- 
-     function qe(ee) {
-       ke(ee);
-       const ie = document.activeElement;
-       ie instanceof HTMLElement && ie !== document.body && ie.blur()
-     }
- ... (59 more removed lines; see GitHub link above)
+     function LW(WW, iW, OW, mW, EW) {
+       const PW = null === iW ? "untimed" : `${Math.round(iW)} ms`;
+       return `frames stalled, ${OW}, gpu ${(0,NW.d)(EW)}, blocking ${PW}, drawn ${Math.round(WW)} ms apart, timers ${mW.timers}, timer gap ${Math.round(mW.longestGapMs)} ms`
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L417-L425` → after: `L41-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L41-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L41-L47) · [Before (L417-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L417-L425)

```diff
-   37819: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke,
-       d: () => be,
-       h: () => Me,
-       k: () => ye,
-       n: () => oe,
-       o: () => Re,
-       s: () => Fe
+   35078: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CAPPED_COUNTS_VISIT_CAP: () => NW,
+       reportCappedWasmFailure: () => cW,
+       reportUncappedWasmFailure: () => LW,
+       reportWasmCrash: () => EW,
+       reportWasmFailure: () => PW
```

#### 11. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L427-L430` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L49) · [Before (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L427-L430)

```diff
-     const ye = [0, 0, 1, 1],
-       be = [.42, 0, 1, 1],
-       Me = [0, 0, .58, 1],
-       Ke = [.42, 0, .58, 1];
+     var mW = OW(1888);
```

#### 12. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L433` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L52) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L433)

```diff
-       return Math.min(1, Math.max(0, ee))
+       (0, mW.reportClientError)("wasm_load", WW.message, WW.code)
```

#### 13. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L436-L444` → after: `L56-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L56-L59) · [Before (L436-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L436-L444)

```diff
-     function Fe(ee, ie, He) {
-       const ye = 1 - He,
-         be = He * He;
-       return 3 * (ye * ye) * He * ee + 3 * ye * be * ie + be * He
-     }
- 
-     function Je(ee, ie, He) {
-       const ye = 1 - He;
-       return 3 * (ye * ye) * ee + 6 * ye * He * (ie - ee) + 3 * (He * He) * (1 - ie)
+     function PW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, mW.MAX_ERRORS_PER_VISIT, {
+         context: EW
+       })
```

#### 14. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L447-L477` → after: `L62-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L62-L65) · [Before (L447-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L447-L477)

```diff
-     function oe(ee, ie) {
-       const He = Ue(ee);
-       if (0 === He || 1 === He) return He;
-       const ye = Ue(ie[0]),
-         be = ie[1],
-         Me = Ue(ie[2]),
-         Ke = ie[3];
-       if (ye === be && Me === Ke) return He;
-       let oe = He,
-         Re = !1;
-       for (let ke = 0; ke < 8; ke++) {
-         const ee = Fe(ye, Me, oe) - He;
-         if (Math.abs(ee) < 1e-6) {
-           Re = !0;
-           break
-         }
- ... (15 more removed lines; see GitHub link above)
+     function LW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, 1 / 0, {
+         context: EW
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L480-L492` → after: `L68-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L68-L71) · [Before (L480-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L480-L492)

```diff
-     function Re(ee) {
-       switch (ee) {
-         case "linear":
-           return ye;
-         case "easeIn":
-           return be;
-         case "easeOut":
-           return Me;
-         case "easeInOut":
-           return Ke;
-         default:
-           return ee
-       }
+     function cW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, NW, {
+         context: EW
+       })
```

#### 16. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L495-L503` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L74) · [Before (L495-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L495-L503)

```diff
-   37392: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye,
-       d: () => be,
-       h: () => Me
-     });
-     const ye = .12,
-       be = 1 - 2 * ye;
- 
+   35089: (WW, iW, OW) => {
```

#### 17. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L505-L562` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L76) · [Before (L505-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L505-L562)

```diff
-       return Math.abs(ee) > be
-     }
-   },
-   34807: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Me
-     });
-     var ye = He(1268);
- 
-     function be() {
-       var ee, ie;
-       return null !== (ee = null === (ie = screen.orientation) || void 0 === ie ? void 0 : ie.type) && void 0 !== ee ? ee : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
-     const Me = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
- ... (42 more removed lines; see GitHub link above)
+       return String(WW).replace(/\d/g, (WW => String.fromCharCode(97 + Number(WW))))
```

#### 18. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L565` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/217.js#L79) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/217.js#L565)

```diff
-       b: () => ye
+       d: () => mW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L401` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L4) · [Before (L4-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L4-L401)

```diff
-   39973: (ee, ie, He) => {
-     function ye(ee) {
-       return void 0 === ee ? void 0 : [ee[0], ee[1], ee[2]]
-     }
- 
-     function be(ee) {
-       const ie = ee.particles;
-       return {
-         opts: {
-           texture: ie.texture,
-           bk: ie.bk,
-           minLifeTime: ie.minLifeTime,
-           maxLifeTime: ie.maxLifeTime,
-           minSize: ie.minSize,
-           maxSize: ie.maxSize,
-           minEmitPower: ie.minEmitPower,
- ... (382 more removed lines; see GitHub link above)
+   35078: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L403` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L6-L10) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L403)

```diff
-       openCharacterPreview: () => Hi
+       CAPPED_COUNTS_VISIT_CAP: () => NW,
+       reportCappedWasmFailure: () => cW,
+       reportUncappedWasmFailure: () => LW,
+       reportWasmCrash: () => EW,
+       reportWasmFailure: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L405-L454` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L12) · [Before (L405-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L405-L454)

```diff
-     var ye = He(38927),
-       be = He(2969),
-       Me = He(602),
-       Ke = He(37971),
-       Ue = He(2284),
-       Fe = He(37963),
-       Je = He(40913),
-       oe = He(41195),
-       Re = He(42157),
-       ke = He(37913),
-       qe = He(41357),
-       fe = He(38020),
-       Te = He(41380),
-       pe = He(42217),
-       Xe = He(37908),
-       ze = He(42184),
- ... (34 more removed lines; see GitHub link above)
+     var mW = OW(1888);
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L457-L591` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L15) · [Before (L457-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L457-L591)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       return new ke.rf(ee[0] * ie, ee[1] * ie, ee[2] * ie)
-     }
-     class Ye {
-       constructor(ee, ie) {
-         this.yp = ee, this.scale = ie, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
-       }
-       async setPet(ee) {
-         var ie;
-         this.petName = ee, null === (ie = this.shownPet) || void 0 === ie || ie.node.JY(!1), this.shownPet = null;
-         const He = (0, Oe.m)(ee);
-         if (!He) return;
-         let ye;
-         try {
-           ye = await this.petNode(He.model)
-         } catch {
- ... (119 more removed lines; see GitHub link above)
+       (0, mW.reportClientError)("wasm_load", WW.message, WW.code)
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L594-L987` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L19-L21) · [Before (L594-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L594-L987)

```diff
-     function re(ee, ie) {
-       const [He, ye] = (0, ce.c)(ee, ie, window.devicePixelRatio);
-       xe.setSize(Math.max(He, Math.floor(ee)), Math.max(ye, Math.floor(ie)))
-     }
-     let Qe = 0;
-     class ei {
-       constructor(ee, ie) {
-         this.framing = ie, this.ready = se, this.dev = {
-           canvas: () => Ie,
-           isolateHead(ee) {
-             const ie = me.getNodeNames(le);
-             for (let He = 0; He < ie.length; He++) "HeadMesh" !== ie[He] && "__root__" !== ie[He] && "TorsoNode" !== ie[He] && me.setNodeEnabled(le, He, !1);
-             if (ee) {
-               const ee = me.getNamedNode(le, "HeadMesh");
-               me.setNodeDisableColorWrite(le, ee, !0, (ee => {
-                 const ie = new Te.StandardMaterial(`${ee.name}_depthOnly`, ee.Xx());
- ... (378 more removed lines; see GitHub link above)
+     function PW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, mW.MAX_ERRORS_PER_VISIT, {
+         context: EW
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L991-L1493` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L25-L28) · [Before (L991-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L991-L1493)

```diff
-     function ze(ee) {
-       const ie = class extends qe.e {
-           constructor(ie, He) {
-             const ye = (0, Te.V)(ie),
-               be = ye && (0, Te.y)(ye, ee.name);
-             for (var Me = arguments.length, Ke = new Array(Me > 2 ? Me - 2 : 0), Ue = 2; Ue < Me; Ue++) Ke[Ue - 2] = arguments[Ue];
-             super(ie, ee.name, ee.priority, be ? be.defines : ee.defines(...Ke), !1), this.featureState = void 0, this.featureState = He, this._pluginManager._addPlugin(this), this._enable(!0), (0, Te.A)(this._material, ee, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return ee.className
-           }
-           isCompatible(ee) {
-             return ee === pe.b.GLSL || ee === pe.b.WGSL
-           }
-         },
-         He = (0, fe.e)(ee);
- ... (487 more removed lines; see GitHub link above)
+     function LW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, 1 / 0, {
+         context: EW
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L1496-L1501` → after: `L31-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/218.js#L31-L34) · [Before (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/218.js#L1496-L1501)

```diff
-     function Me(ee) {
-       if (!He.o(ye, ee)) {
-         var ie = new Error("Cannot find module '" + ee + "'");
-         throw ie.code = "MODULE_NOT_FOUND", ie
-       }
-       return ye[ee]
+     function cW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, NW, {
+         context: EW
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L2)

```diff
- export const ids = [219];
+ export const ids = [218, 219];
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L4-L7)

```diff
-   37436: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Te,
-       d: () => Oe
+   35078: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CAPPED_COUNTS_VISIT_CAP: () => NW,
+       reportCappedWasmFailure: () => cW,
+       reportUncappedWasmFailure: () => LW,
+       reportWasmCrash: () => EW,
+       reportWasmFailure: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L9-L79` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L12) · [Before (L9-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L9-L79)

```diff
-     He(34844);
-     var ye = He(59),
-       be = He(1432),
-       Me = He(1983),
-       Ke = He(2029),
-       Ue = He(18),
-       Fe = He(2532),
-       Je = He(37440),
-       oe = He(37447),
-       Re = He(34824),
-       ke = He(34836),
-       qe = He(34859),
-       fe = He(1228);
-     const Te = (0, ye.memo)((function() {
-       var ee;
-       const {
- ... (55 more removed lines; see GitHub link above)
+     var mW = OW(1888);
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L82` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L15) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L82)

```diff
-       ge = ee, Xe[0].current || ze.current || Be.current ? We(ee) : Ee = ee
+       (0, mW.reportClientError)("wasm_load", WW.message, WW.code)
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L85-L86` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L19-L22) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L85-L86)

```diff
-     function de(ee) {
-       return ((0, Je.d)(ee) - (0, Je.d)(0)) * window.innerHeight / 100
+     function PW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, mW.MAX_ERRORS_PER_VISIT, {
+         context: EW
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L89-L95` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L25-L28) · [Before (L89-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L89-L95)

```diff
-     function We(ee) {
-       var ie;
-       if (null === (ie = Be.current) || void 0 === ie || ie.call(Be, de(ee)), Xe[0].current) {
-         const ie = `${(0,Je.d)(ee)}vh`;
-         Xe[0].current.style.transform = `translateX(calc(0px - ${ie}))`, Xe[1].current.style.transform = `translateX(calc(0px + ${ie}))`, Xe[2].current.style.transform = `translateY(calc(0px - ${ie}))`, Xe[3].current.style.transform = `translateY(calc(0px + ${ie}))`
-       }
-       ze.current && (ze.current.style.filter = `blur(${Math.round(ee/10)}px)`)
+     function LW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, 1 / 0, {
+         context: EW
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L98-L175` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L31-L33) · [Before (L98-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L98-L175)

```diff
-     function te(ee) {
-       let {
-         custom: ie,
-         touch: He
-       } = ee;
-       const Me = (0, be.j)("aimingOverlay", "none"),
-         Ke = "1.2vh",
-         Ue = "0.3vh";
-       (0, ye.useEffect)((() => {
-         Ee && We(Ee)
-       }), []);
-       const Fe = (0, ye.useRef)(null !== ie);
-       return (0, ye.useLayoutEffect)((() => {
-         var ee;
-         ie ? null === (ee = Be.current) || void 0 === ee || ee.call(Be, de(ge)) : Fe.current && We(ge);
-         Fe.current = null !== ie
- ... (62 more removed lines; see GitHub link above)
+     function cW(WW, iW, OW, EW) {
+       (0, mW.reportClientError)(WW, iW, OW, !1, NW, {
+         context: EW
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L179` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L37) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L179)

```diff
-   34836: (ee, ie, He) => {
+   37250: (WW, iW, OW) => {
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L181-L182` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L39-L42) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L181-L182)

```diff
-       b: () => Te,
-       f: () => fe
+       e: () => SW,
+       g: () => TW,
+       j: () => JW,
+       l: () => YW
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L184-L188` → after: `L44-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L44-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L44-L61) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L184-L188)

```diff
-     He(34844);
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(59),
-       Ke = He(34829);
+     var mW = OW(37271),
+       EW = OW(2381),
+       NW = OW(37286),
+       PW = OW(2388),
+       LW = OW(35078),
+       cW = OW(3974),
+       wW = OW(4417),
+       tW = OW(4409),
+       ZW = OW(37257),
+       xW = OW(1888),
+       lW = OW(37260),
+       AW = OW(37265),
+       bW = OW(2372);
+     let jW = !1;
+     const UW = 40;
+     var kW = OW(299),
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L190-L191` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L63-L64) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L190-L191)

```diff
-     function Ue(ee, ie) {
-       return Math.max(1, Math.round(ee * ie))
+     function KW() {
+       return "undefined" === typeof WebAssembly
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L194-L269` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L67-L68) · [Before (L194-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L194-L269)

```diff
-     function Fe(ee, ie) {
-       const He = ie * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         ye = function(ee, ie) {
-           if (ee.lines) return Ue(ee.lineThickness, ie) % 2;
-           if (ee.dot) return Ue(ee.dotSize, ie) % 2;
-           return Je(ee, ie) % 2
-         }(ee, ie),
-         be = oe(ee.lineThickness * He, ye),
-         Me = Ue(ee.lineLength, He),
-         Ke = Math.round(ee.gap * He),
-         Fe = ee.outline > 0 ? Ue(ee.outline, He) : 0,
-         ke = [];
-       if (ee.lines && (ke.push({
-           x: be + Ke,
-           y: 0,
-           w: Me,
- ... (60 more removed lines; see GitHub link above)
+     function SW() {
+       return (0, mW.f)()
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L272-L273` → after: `L71-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L71-L77) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L272-L273)

```diff
-     function Je(ee, ie) {
-       return Math.round(ee.circleRadius * ie * 2 + Ue(ee.circleThickness, ie))
+     function YW() {
+       if (KW()) return "this browser has no WebAssembly";
+       const WW = (0, EW.p)();
+       return "compile" === WW || "instantiate" === WW ? `the core wasm didn't load here (${(0,EW.h)()})` : null
+     }
+     async function yW(WW) {
+       return await (0, kW.p)(), await (0, NW.f)(NW.e, void 0, WW)
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L276-L277` → after: `L80-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L80-L83) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L276-L277)

```diff
-     function oe(ee, ie) {
-       return Math.max(2 - ie, 2 * Math.round((ee - ie) / 2) + ie)
+     function TW() {
+       KW() || (0, sW.e)((() => {
+         yW()
+       }))
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L280-L287` → after: `L86-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L86-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L86-L115) · [Before (L280-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L280-L287)

```diff
-     function Re(ee, ie, He) {
-       const ye = 2 * He >= ie - 1;
-       return {
-         x: ee,
-         y: ee,
-         size: ie,
-         border: Math.min(He, Math.floor(ie / 2)),
-         filled: ye
+     function JW() {
+       if (KW()) return async () => ((0, cW.d)("unsupported", 0), hW("unsupported", "This browser has no WebAssembly"), !1);
+       const WW = {
+         reloadFailedDownload: !0
+       };
+       return yW(WW), async () => {
+         var iW;
+         const OW = performance.now();
+         await yW(WW);
+         const mW = (performance.now() - OW) / 1e3;
+         if ((0, EW.R)()) return (0, cW.d)("ready", mW), jW || (jW = !0, (0, EW.Y)((() => {
+           if ("call" !== (0, EW.p)()) return;
+           const WW = (0, EW.m)(),
+             iW = (0, ZW.l)(WW, EW.H, EW.eb),
+             OW = (0, EW.v)().buffer.byteLength,
+             mW = (0, ZW.e)(iW.kind, iW.refusedBytes),
+ ... (14 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L294` → after: `L120-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L120-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L120-L838) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L294)

```diff
-       return ee && ie ? `scale(${qe})` : "scale(1)"
+       (0, tW.j)(MW, `Bloxd wasm ${WW}, so the game can't start: ${iW}`, iW, WW)
+     }
+   },
+   37306: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/bloxd_wasm_bg.c887ae513bec2c674549.wasm"
+   },
+   37283: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/bloxd_wasm_textures_bg.5f6ebeba7b776ee2ab3c.wasm"
+   },
+   37295: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       NO: () => mW,
+       EnvelopeKind: () => EW,
+       TO: () => NW,
+       PhysicsEngine: () => PW,
+       HE: () => LW,
+ ... (703 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L297-L302` → after: `L841-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L841-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L841-L844) · [Before (L297-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L297-L302)

```diff
-     function Te(ee) {
-       return "classic" === ee.settings.style ? (0, ke.jsx)(ze, {
-         ...ee
-       }) : (0, ke.jsx)(te, {
-         ...ee
-       })
+     function xW() {
+       const WW = si.E0hc();
+       var iW = RW(WW[0], WW[1]).slice();
+       return si.NQBs(WW[0], 4 * WW[1], 4), iW
```

#### 18. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L307-L315` → after: `L848-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L848-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L848-L857) · [Before (L307-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L307-L315)

```diff
-       const He = {};
-       if (ee.color !== Ke.e.color && (He.color = (0, Ke.j)(ee.color)), ee.opacity !== Ke.e.opacity && (He.opacity = ee.opacity / 100), ee.outline !== Ke.e.outline || ee.outlineColor !== Ke.e.outlineColor) {
-         const ie = ee.outline,
-           ye = (0, Ke.j)(ee.outlineColor);
-         He.textShadow = ie > 0 ? `-${ie}px 0 ${ye}, 0 ${ie}px ${ye}, ${ie}px 0 ${ye}, 0 -${ie}px ${ye}` : "none"
-       }
-       if (ee.size !== Ke.e.size) {
-         const ye = ee.size / 100;
-         He.fontSize = ie ? `calc(max(1.3rem, 18px) * ${ye})` : `calc(1.3rem * ${ye})`, He.marginTop = `-${pe}em`, He.transformOrigin = `50% calc(50% + ${pe}em)`
+       let OW, mW;
+       try {
+         const EW = Li(WW, si.qZbx),
+           NW = Mi,
+           PW = Zi(iW, si.qZbx, si.Ds7I),
+           LW = Mi,
+           cW = si.f7qI(EW, NW, PW, LW);
+         return OW = cW[0], mW = cW[1], zW(cW[0], cW[1])
+       } finally {
+         si.NQBs(OW, mW, 1)
```

#### 19. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L317` → after: `L859-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L859-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L859-L864) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L317)

```diff
-       return He
+     }
+ 
+     function AW() {
+       const WW = si.nQNx();
+       var iW = RW(WW[0], WW[1]).slice();
+       return si.NQBs(WW[0], 4 * WW[1], 4), iW
```

#### 20. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L321-L341` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L868) · [Before (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L321-L341)

```diff
-       let {
-         settings: ie,
-         touch: He,
-         inPreview: ye,
-         inEditor: Me,
-         pressed: Ke = !1,
-         pressRef: Ue
-       } = ee;
-       return (0, ke.jsx)("div", {
-         className: be()("Crosshair", {
-           Touch: He,
-           CrosshairInPreview: ye,
-           CrosshairInEditor: Me || ye
-         }),
-         ref: Ue,
-         style: {
- ... (5 more removed lines; see GitHub link above)
+       return 0 !== si.xE2f(WW)
```

#### 21. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L345` → after: `L872-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L872-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L872-L875) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L345)

```diff
-       return ee / ie + "px"
+       const OW = Zi(WW, si.qZbx, si.Ds7I),
+         mW = Mi,
+         EW = si.A35a(OW, mW, iW);
+       if (EW[1]) throw xi(EW[0])
```

#### 22. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L348-L354` → after: `L878-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L878-L879) · [Before (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L348-L354)

```diff
-     function Ee(ee, ie, He, ye) {
-       return {
-         ...de(ee, ie, He),
-         width: Be(ee.w, He),
-         height: Be(ee.h, He),
-         background: ye
-       }
+     function UW() {
+       si.V18R()
```

#### 23. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L357-L366` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L882-L883) · [Before (L357-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L357-L366)

```diff
-     function ge(ee, ie, He) {
-       return {
-         left: Be(ee.x, ie),
-         top: Be(ee.y, ie),
-         width: Be(ee.size, ie),
-         height: Be(ee.size, ie),
-         borderWidth: Be(ee.border, ie),
-         borderColor: He,
-         background: ee.filled ? He : void 0
-       }
+     function kW() {
+       return si.coZd() >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L375-L380` → after: `L886-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L886-L887) · [Before (L375-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L375-L380)

```diff
-     function de(ee, ie, He) {
-       const [ye, be] = ee.arm ? Oe[ee.arm] : [0, 0], Me = Math.round(ie * He);
-       return {
-         left: Be(ee.x + ye * Me, He),
-         top: Be(ee.y + be * Me, He)
-       }
+     function sW(WW) {
+       return 0 !== si.DJIf(WW)
```

#### 25. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L384-L388` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L891) · [Before (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L384-L388)

```diff
-       return ee.arm ? {
-         "data-arm": ee.arm,
-         "data-x": ee.x,
-         "data-y": ee.y
-       } : {}
+       return 0 !== si.N8h8(WW)
```

#### 26. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L392-L501` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L895) · [Before (L392-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L392-L501)

```diff
-       let {
-         settings: ie,
-         inPreview: He,
-         inEditor: ye,
-         pressed: Ue = !1,
-         spread: Je,
-         spreadRef: oe
-       } = ee;
-       const Re = (0, Me.useRef)(null),
-         {
-           box: fe,
-           dpr: Te
-         } = function(ee) {
-           const [ie, He] = (0, Me.useState)({
-             box: {
-               left: 0,
- ... (94 more removed lines; see GitHub link above)
+       si.akbt(WW)
```

#### 27. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L519-L522` → after: `L898-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L898-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L898-L899) · [Before (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L519-L522)

```diff
-     function Re(ee) {
-       let ie = 90;
-       for (const He of ee) ie = 31 * ie + He & 255;
-       return ie
+     function SW() {
+       return si.YhCq() >>> 0
```

#### 28. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L527-L532` → after: `L902-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L902-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L902-L942) · [Before (L527-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L527-L532)

```diff
-     function fe(ee, ie) {
-       let He = 0n;
-       for (const be of ee) {
-         const ee = ke.indexOf(be);
-         if (ee < 0) return null;
-         He = He * qe + BigInt(ee)
+     function YW() {
+       return si.FJi0() >>> 0
+     }
+ 
+     function yW() {
+       return 0 !== si.YQn6()
+     }
+ 
+     function TW() {
+       const WW = si.MYOh();
+       var iW = RW(WW[0], WW[1]).slice();
+       return si.NQBs(WW[0], 4 * WW[1], 4), iW
+     }
+ 
+     function JW() {
+       const WW = si.x0CV();
+ ... (25 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L541-L563` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L947) · [Before (L541-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L541-L563)

```diff
-       let ie = "shapes" === ee.style ? 1 : 0;
-       Me.forEach(((He, ye) => {
-         ee[He] && (ie |= 1 << ye + 1)
-       }));
-       const He = [ie];
-       for (const be of Ue) {
-         const ie = (0, ye.f)(be, ee[be]);
-         He.push(ie >> 16 & 255, ie >> 8 & 255, 255 & ie)
-       }
-       for (const be of Ke) {
-         const {
-           min: ie,
-           step: Me
-         } = ye.d[be];
-         He.push(Math.round(((0, ye.f)(be, ee[be]) - ie) / Me))
-       }
- ... (7 more removed lines; see GitHub link above)
+       si.WKG9(XW(WW))
```

#### 30. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L566-L569` → after: `L950-L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L950-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L950-L973) · [Before (L566-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L566-L569)

```diff
-     function pe(ee) {
-       for (const ie of ee.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Je}})`, "gi"))) {
-         const ee = Xe(fe(ie[1], Fe));
-         if (ee) return ee
+     function dW() {
+       return {
+         __proto__: null,
+         YXom: {
+           __proto__: null,
+           SKwr: function(WW, iW) {
+             return XW(Error(zW(WW, iW)))
+           },
+           xftO: function(WW, iW) {
+             throw new Error(zW(WW, iW))
+           },
+           WKIv: function(WW) {
+             mi(WW).call()
+           },
+           xsi2: function(WW, iW) {
+             console.error(zW(WW, iW))
+ ... (8 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L575-L593` → after: `L1011-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1011-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1011-L1013) · [Before (L575-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L575-L593)

```diff
-       if (!ee || ee.length !== Fe || Re(ee.slice(0, -1)) !== ee[ee.length - 1]) return null;
-       const ie = ee[0],
-         He = {
-           ...ye.e,
-           style: 1 & ie ? "shapes" : "classic"
-         };
-       Me.forEach(((ee, ye) => {
-         He[ee] = 0 !== (ie & 1 << ye + 1)
-       }));
-       let be = 1;
-       for (const ye of Ue) He[ye] = ee[be] << 16 | ee[be + 1] << 8 | ee[be + 2], be += 3;
-       for (const Me of Ke) {
-         const {
-           min: ie,
-           step: Ke
-         } = ye.d[Me];
- ... (3 more removed lines; see GitHub link above)
+       Ni === Ei.length && Ei.push(Ei.length + 1);
+       const iW = Ni;
+       return Ni = Ei[iW], Ei[iW] = WW, iW
```

#### 32. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L686-L695` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1017) · [Before (L686-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L686-L695)

```diff
-       var He;
-       const {
-         min: Me,
-         max: Ke,
-         step: Ue
-       } = ye[ee];
-       if (!Number.isFinite(ie)) return be[ee];
-       const Fe = (null !== (He = String(Ue).split(".")[1]) && void 0 !== He ? He : "").length,
-         Je = Number((Math.round(ie / Ue) * Ue).toFixed(Fe));
-       return Math.min(Ke, Math.max(Me, Je))
+       if (!(WW instanceof iW)) throw new Error(`expected instance of ${iW.name}`)
```

#### 33. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L698-L703` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1020-L1021) · [Before (L698-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L698-L703)

```diff
-     function Ke(ee, ie, He) {
-       const ye = "number" === typeof He ? Me(ie, He) : He;
-       return {
-         ...ee,
-         [ie]: ye
-       }
+     function qW(WW, iW) {
+       return WW >>>= 0, aW().subarray(WW / 8, WW / 8 + iW)
```

#### 34. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L707-L708` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1025) · [Before (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L707-L708)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(be).every((ye => He.includes(ye) || ee[ye] === ie[ye]))
+       return WW >>>= 0, Wi().subarray(WW / 4, WW / 4 + iW)
```

#### 35. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L711-L712` → after: `L1028-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1028-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1028-L1029) · [Before (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L711-L712)

```diff
-     function Fe(ee) {
-       return Ue(ee, be)
+     function GW(WW, iW) {
+       return WW >>>= 0, Oi().subarray(WW / 1, WW / 1 + iW)
```

#### 36. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L715-L716` → after: `L1033-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1033-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1033-L1034) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L715-L716)

```diff
-     function Je(ee) {
-       return `#${ee.toString(16).padStart(6,"0")}`
+     function aW() {
+       return null !== IW && 0 !== IW.byteLength || (IW = new Float64Array(si.memory.buffer)), IW
```

#### 37. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L719-L721` → after: `L1038-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1038-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1038-L1045) · [Before (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L719-L721)

```diff
-     function oe(ee) {
-       const ie = /^#?([0-9a-f]{6})$/i.exec(ee.trim());
-       return ie ? parseInt(ie[1], 16) : null
+     function zW(WW, iW) {
+       return function(WW, iW) {
+         bi += iW, bi >= Ai && (li = new TextDecoder("utf-8", {
+           ignoreBOM: !0,
+           fatal: !0
+         }), li.decode(), bi = iW);
+         return li.decode(Oi().subarray(WW, WW + iW))
+       }(WW >>> 0, iW)
```

#### 38. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L735` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1048) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L735)

```diff
-     const Je = new Set;
+     let QW = null;
```

#### 39. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L738-L748` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1051) · [Before (L738-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L738-L748)

```diff
-       if (null === Fe) {
-         var ee;
-         const ie = be.i.getItem(Ue);
-         Fe = null !== (ee = "string" === typeof ie ? (0, Me.h)(ie) : null) && void 0 !== ee ? ee : Ke.e
-       }
-       return Fe
-     }
- 
-     function Re(ee) {
-       Fe = ee, (0, Ke.k)(ee) ? be.i.removeItem(Ue) : be.i.setItem(Ue, (0, Me.j)(ee));
-       for (const ie of Je) ie()
+       return null !== QW && 0 !== QW.byteLength || (QW = new Uint32Array(si.memory.buffer)), QW
```

#### 40. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L752-L761` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1056) · [Before (L752-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L752-L761)

```diff
-       const [ee, ie] = (0, ye.useState)(oe);
-       return (0, ye.useEffect)((() => {
-         const ee = () => {
-           ie(oe())
-         };
-         return ee(), He = ee, Je.add(He), () => {
-           Je.delete(He)
-         };
-         var He
-       }), []), ee
+       return null !== ii && 0 !== ii.byteLength || (ii = new Uint8Array(si.memory.buffer)), ii
```

#### 41. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L774` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1060) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L774)

```diff
-       return ee === (0, be.h)().dHe ? (0, be.h)().gC : ee
+       return Ei[WW]
```

#### 42. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L778` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1067) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L778)

```diff
-       return !(0, ye.P)(ee) && Me(ee) === (0, be.h)().gC
+       return void 0 === WW || null === WW
```

#### 43. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L782-L783` → after: `L1070-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1070-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1070-L1072) · [Before (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L782-L783)

```diff
-     function Fe() {
-       return (0, be.h)().physics[Ue][1]
+     function Li(WW, iW) {
+       const OW = iW(2 * WW.length, 2) >>> 0;
+       return (null !== FW && 0 !== FW.byteLength || (FW = new Uint16Array(si.memory.buffer)), FW).set(WW, OW / 2), Mi = WW.length, OW
```

#### 44. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L785-L1025` → after: `L1074-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1074-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1074-L1094) · [Before (L785-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L785-L1025)

```diff
-   },
-   37574: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => de
-     });
-     var ye = He(37578),
-       be = He(186),
-       Me = He(5338),
-       Ke = He(37584),
-       Ue = He(37224),
-       Fe = He(37627),
-       Je = He(37590),
-       oe = He(352),
-       Re = He.n(oe),
-       ke = He(2969),
-       qe = He(37620),
- ... (225 more removed lines; see GitHub link above)
+ 
+     function ci(WW, iW) {
+       const OW = iW(4 * WW.length, 4) >>> 0;
+       return Wi().set(WW, OW / 4), Mi = WW.length, OW
+     }
+ 
+     function wi(WW, iW) {
+       const OW = iW(1 * WW.length, 1) >>> 0;
+       return Oi().set(WW, OW / 1), Mi = WW.length, OW
+     }
+ 
+     function ti(WW, iW) {
+       const OW = iW(8 * WW.length, 8) >>> 0;
+       return aW().set(WW, OW / 8), Mi = WW.length, OW
+     }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1027-L1028` → after: `L1096-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1096-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1096-L1103) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1027-L1028)

```diff
-       freeSoundsAfterGame() {
-         this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
+       let mW = WW.length,
+         EW = iW(mW, 1) >>> 0;
+       const NW = Oi();
+       let PW = 0;
+       for (; PW < mW; PW++) {
+         const iW = WW.charCodeAt(PW);
+         if (iW > 127) break;
+         NW[EW + PW] = iW
```

#### 46. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1030-L1032` → after: `L1105-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1105-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1105-L1108) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1030-L1032)

```diff
-       freeSounds() {
-         for (const ee of [this.stereoSounds, this.spatialSounds])
-           for (const [ie, He] of Object.entries(ee)) !Xe.b.has((0, ye.j)(ie)) && He.loaded() && (He.unloadOnceIdle(), delete ee[ie])
+       if (PW !== mW) {
+         0 !== PW && (WW = WW.slice(PW)), EW = OW(EW, mW, mW = PW + 3 * WW.length, 1) >>> 0;
+         const iW = Oi().subarray(EW + PW, EW + mW);
+         PW += ji.encodeInto(WW, iW).written, EW = OW(EW, mW, PW, 1) >>> 0
```

#### 47. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1035-L1045` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1112) · [Before (L1035-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1035-L1045)

```diff
-   },
-   37666: (ee, ie, He) => {
-     function ye(ee, ie) {
-       var He, ye, be, Me, Ke, Ue, Fe, Je;
-       return ee.name === ie.name && ((null === (He = ee.attributes) || void 0 === He || null === (ye = He.customAttributes) || void 0 === ye ? void 0 : ye.stackKey) === (null === (be = ie.attributes) || void 0 === be || null === (Me = be.customAttributes) || void 0 === Me ? void  … [truncated]
-     }
-     He.d(ie, {
-       d: () => ye
-     })
-   },
-   37770: (ee, ie, He) => {
+ 
```

#### 48. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1047` → after: `L1114-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1114-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1114-L1117) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1047)

```diff
-       return ee.includes("Leaf Bed")
+       const iW = mi(WW);
+       return function(WW) {
+         WW < 1028 || (Ei[WW] = Ni, Ni = WW)
+       }(WW), iW
```

#### 49. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1050-L1051` → after: `L1136-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1136-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1136-L1137) · [Before (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1050-L1051)

```diff
-     function be(ee) {
-       return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
+     function Ki(WW, iW) {
+       return ki = WW, si = WW.exports, Ui = iW, IW = null, rW = null, FW = null, QW = null, ii = null, si.ctR0(), si
```

#### 50. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1055` → after: `L1141-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1141-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1141-L1209) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1055)

```diff
-       return ee.includes(" Strongbed")
+       if (void 0 !== si) return si;
+       void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
+         module: WW
+       } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const iW = dW();
+       WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
+       return Ki(new WebAssembly.Instance(WW, iW), WW)
+     }
+     async function Yi(WW) {
+       if (void 0 !== si) return si;
+       void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
+         module_or_path: WW
+       } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
+       const iW = dW();
+       ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
+       const {
+ ... (53 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1059` → after: `L1213-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1213-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1213-L1220) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1059)

```diff
-       return ye(ee) || be(ee) || Me(ee)
+       return (0, EW.L)((() => WW), mW, PW)
+     }
+   },
+   37279: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return new Error(`${WW}: ${iW instanceof Error?`${iW.name}: ${iW.message}`:String(iW)}`, {
+         cause: iW
+       })
```

#### 52. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1062-L1065` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1223) · [Before (L1062-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1062-L1065)

```diff
-       e: () => Ke,
-       i: () => ye,
-       k: () => Me,
-       m: () => be
+       e: () => mW
```

#### 53. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1068` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1226) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1068)

```diff
-   37765: (ee, ie, He) => {
+   37271: (WW, iW, OW) => {
```

#### 54. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1070` → after: `L1228-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1228-L1229) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1070)

```diff
-       d: () => Je
+       b: () => PW,
+       f: () => cW
```

#### 55. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1072-L1085` → after: `L1231-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1231-L1236) · [Before (L1072-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1072-L1085)

```diff
-     var ye = He(37770),
-       be = He(9961);
-     const Me = [],
-       Ke = [],
-       Ue = [],
-       Fe = [];
-     for (const oe of Object.keys(be.m))(0, ye.i)(oe) ? Me.push(oe) : (0, ye.m)(oe) && Ke.push(oe), (0, ye.k)(oe) && Ue.push(oe), (oe.includes(" Bed Head") || oe.includes(" Strongbed Head")) && Fe.push(oe);
-     const Je = {
-       leafBeds: Me,
-       woolBeds: Ke,
-       strongBeds: Ue,
-       beds: [...Me, ...Ke, ...Ue],
-       bedHeads: Fe,
-       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
+     var mW = OW(2388),
+       EW = OW(7625),
+       NW = OW(37279);
+ 
+     function PW() {
+       return new URL(new OW.U(OW(37283)).href, globalThis.location?.href).href
```

#### 56. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L1087-L1088` → after: `L1238-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1238-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/219.js#L1238-L1245) · [Before (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/219.js#L1087-L1088)

```diff
-   },
-   34844: () => {}
+     let LW = null;
+ 
+     function cW() {
+       return LW ??= (async () => (0, mW.B)(new URL(PW()), (0, EW.c)("bloxd_wasm_textures")))().catch((WW => {
+         throw (0, NW.e)((0, mW.E)(WW), WW)
+       })), LW
+     }
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   34897: (ee, ie, He) => {
+   35114: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L29` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/220.js#L6-L8) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/220.js#L6-L29)

```diff
-       MAX_BLOCK_ID: () => ye,
-       armourReductionOf: () => me,
-       clipSizeOf: () => ue,
-       creativeAltNames: () => Ki,
-       creativeCategoryOf: () => re,
-       creativeItemCategories: () => Ue,
-       creativeItemCategoryIcons: () => Fe,
-       creativeItemIds: () => Ge,
-       descriptionOf: () => Le,
-       displayNameOf: () => xe,
-       dropsNothing: () => ne,
-       enchantmentPerksOf: () => he,
-       gunTypeOf: () => Se,
-       harvestsNullLevelOf: () => je,
-       isDevOnlyItem: () => Hi,
-       itemIsDisabled: () => bi,
- ... (8 more removed lines; see GitHub link above)
+       ALL_DEV_TOOLS: () => PW,
+       coreDevTools: () => wW,
+       devTools: () => cW
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L31-L71` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/220.js#L10-L17) · [Before (L31-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/220.js#L31-L71)

```diff
-     const ye = 8574,
-       be = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       Me = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       Ke = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       Ue = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       Fe = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
-         combat: "Iron Sword",
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
- ... (25 more removed lines; see GitHub link above)
+     var mW = OW(671),
+       EW = OW(1301),
+       NW = OW(35116);
+     const PW = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function LW() {
+       const {
+         noaDevTools: WW
+       } = await OW.e(269).then((() => OW(42543)));
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L74-L221` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/220.js#L20-L22) · [Before (L74-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/220.js#L74-L221)

```diff
- 
-     function Te(ee) {
-       return ee === oe.d ? null : (0, oe.t)(ee)
-     }
-     const pe = qe("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
-       Xe = qe("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,<#%$+##$#4+#+##$+ … [truncated]
-       ze = new Map,
-       Be = new Map;
-     let Ee = -1;
- 
-     function ge(ee, ie, He) {
-       Ee !== (0, Je.j)() && (Ee = (0, Je.j)(), ze.clear(), Be.clear());
-       let ye = ee.get(ie);
-       return void 0 === ye && (ye = He(), void 0 !== ye && ee.set(ie, ye)), ye
-     }
-     const Oe = qe("_$bN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$O&%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
- ... (132 more removed lines; see GitHub link above)
+     const cW = new class {
+         constructor() {
+           this.loadHost = LW, this.tools = PW
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L223-L226` → after: `L24-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L24-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/220.js#L24-L56) · [Before (L223-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/220.js#L223-L226)

```diff
-         Mi = ie
-       }
-       return Mi
-     }
+         setHost(WW) {
+           this.tools = null === WW ? PW : WW.tools, this.loadHost = null === WW ? LW : async () => WW
+         }
+         supports(WW) {
+           return this.tools.has(WW)
+         }
+         async downloadScene(WW, iW) {
+           const OW = await this.loadHost();
+           await OW.downloadScene(WW, iW)
+         }
+         async setAmbientLightIntensity(WW) {
+           const iW = await this.loadHost();
+           await iW.setAmbientLightIntensity(WW)
+         }
+         async capturePhoto(WW, iW, OW) {
+           return (await this.loadHost()).capturePhoto(WW, iW, OW)
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   37024: (ee, ie, He) => {
+   37536: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L6-L9)

```diff
-       capturePreviewPicture: () => Xe,
-       holdPreviewsLow: () => Ke.g,
-       openLiveFigure: () => pe,
-       rasterNametag: () => ge
+       isMoreOptionsInFooter: () => pW,
+       showOnboardingPopup: () => fW
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L11-L27` → after: `L9-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L9-L28) · [Before (L11-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L11-L27)

```diff
-     var ye = He(1189),
-       be = He(2683),
-       Me = He(34919),
-       Ke = He(37028),
-       Ue = He(37035),
-       Fe = He(37043),
-       Je = He(37081),
-       oe = He(3820);
-     const Re = 480,
-       ke = 16,
-       qe = {
-         minGapMs: 250,
-         now: () => performance.now(),
-         skip: Ke.u
-       },
-       fe = 30,
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1172),
+       NW = OW(1422),
+       PW = OW(1532),
+       LW = OW(1102),
+       cW = OW(4994),
+       wW = OW(1659),
+       tW = OW(344),
+       ZW = OW(1653),
+       xW = OW(3083),
+       lW = OW(1089),
+       AW = OW.n(lW),
+       bW = OW(1111),
+       jW = OW(37541),
+       UW = OW(3247),
+       kW = OW(4723),
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L29-L94` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L30-L44) · [Before (L29-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L29-L94)

```diff
-     function pe(ee, ie, He, Fe) {
-       const Je = Me.i.openCharacter(ee, "player");
-       let oe = !1,
-         Re = !1,
-         fe = null;
-       const pe = async () => {
-         const ee = Je.dev.canvas(),
-           ie = await (ye = () => ee.isConnected && function(ee) {
-             const {
-               x: ie,
-               width: He
-             } = ze(ee);
-             if (0 === He || 0 === ee.height) return !1;
-             if (Be ??= document.createElement("canvas").getContext("2d", {
-                 willReadFrequently: !0
-               }), null === Be) return !1;
- ... (50 more removed lines; see GitHub link above)
+     function YW(WW) {
+       let {
+         open: iW,
+         onToggle: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, EW.B)();
+       return (0, KW.jsxs)("button", {
+         type: "button",
+         className: "OnboardingMoreOptions",
+         "aria-expanded": iW,
+         "aria-controls": iW ? SW : void 0,
+         onClick: () => {
+           iW || (0, cW.l)("more"), OW()
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L96-L97` → after: `L46-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L46-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L46-L65) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L96-L97)

```diff
-         close: () => {
-           oe = !0, Je.close()
+         children: [mW("homePage:onboardingMoreOptions"), (0, KW.jsx)(MW.c, {
+           name: iW ? "caret-up" : "caret-down"
+         })]
+       })
+     }
+     const yW = Object.entries(wW.e).filter((WW => {
+       let [, iW] = WW;
+       return "default" === iW.cosmeticPack
+     }));
+ 
+     function TW(WW) {
+       return ZW.e.default.colourGroups[WW].colours.map(((WW, iW) => {
+         let {
+           rbg: OW,
+           order: mW
+         } = WW;
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L99` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L67) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L99)

```diff
-       }
+       })).sort(((WW, iW) => WW.order - iW.order))
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L103-L128` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L73-L76) · [Before (L103-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L103-L128)

```diff
-       return new Promise((He => {
-         const ye = be => {
-           (0, Ke.e)((() => {
-             if (!ie()) return void He(null);
-             const Me = ee.isConnected ? function(ee) {
-               let {
-                 canvas: ie,
-                 x: He,
-                 width: ye
-               } = ee;
-               if (0 === ye || 0 === ie.height) return null;
-               const be = Math.min(1, Re / ie.height),
-                 Me = document.createElement("canvas");
-               Me.width = Math.max(1, Math.round(ye * be)), Me.height = Math.max(1, Math.round(ie.height * be));
-               const Ke = Me.getContext("2d", {
-                 willReadFrequently: !0
- ... (10 more removed lines; see GitHub link above)
+       var OW;
+       if (void 0 === iW || "default" !== (null === (OW = (0, xW.l)(WW, iW)) || void 0 === OW ? void 0 : OW.cosmeticPack)) return null;
+       const mW = (0, xW.h)(iW);
+       return mW && [mW[0], Number(mW[1])]
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L131-L137` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L79-L80) · [Before (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L131-L137)

```diff
-     function ze(ee) {
-       const ie = Math.min(ee.width, Math.round(ee.height * oe.b));
-       return {
-         canvas: ee,
-         x: Math.round((ee.width - ie) / 2),
-         width: ie
-       }
+     function nW(WW, iW, OW) {
+       return `${WW}_${iW}_${OW}`
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L142-L166` → after: `L84-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L84-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L84-L126) · [Before (L142-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L142-L166)

```diff
-       for (let ie = 3; ie < ee.length; ie += 4)
-         if (0 !== ee[ie]) return !0;
-       return !1
-     }
-     async function ge(ee) {
-       var ie;
-       await Je.j.load();
-       const He = {
-           name: ee.name,
-           info: null,
-           colour: null !== (ie = ee.nameColour) && void 0 !== ie ? ie : "default",
-           ranks: ee.ranks,
-           effects: [],
-           health: null,
-           Po: null,
-           hideNameSeed: null,
- ... (9 more removed lines; see GitHub link above)
+       let {
+         label: iW,
+         colours: OW,
+         picked: mW,
+         onPick: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, EW.B)();
+       return (0, KW.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, KW.jsx)("div", {
+           className: "OnboardingColoursLabel",
+           children: iW
+         }), (0, KW.jsx)("div", {
+           className: "OnboardingSwatches",
+ ... (27 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L178-L221` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L130-L144) · [Before (L178-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L178-L221)

```diff
-       var ie;
-       return {
-         ...Ke.store,
-         yaw: Ke.store.yaw + (null !== (ie = ye.b[ee].previewYaw) && void 0 !== ie ? ie : 0)
-       }
-     }
-     const Me = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       Ke = {
-         player: Me,
-         store: {
-           ...Me,
- ... (28 more removed lines; see GitHub link above)
+       let {
+         moreOptions: iW,
+         onToggleMoreOptions: OW,
+         moreOptionsBelowPresets: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, EW.B)(), {
+         userContext: LW,
+         isUserContextUpdating: wW
+       } = (0, sW.e)(), [, ZW] = (0, mW.useReducer)((WW => WW + 1), 0), xW = (0, mW.useRef)({}), lW = (0, mW.useRef)(null), MW = (0, mW.useRef)({}), TW = (0, kW.c)(), oW = {
+         ...LW.getPlayerCosmetics(),
+         ...lW.current
+       }, dW = (0, mW.useRef)(null);
+       (0, mW.useEffect)((() => {
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L223-L229` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L146-L147) · [Before (L223-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L223-L229)

```diff
-         this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
-       }
-     }
-     class Je {
-       constructor(ee) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(ee).then((ee => ee.ready)), Ue(ee, (ee => {
-           this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height))
+         iW && (null === (WW = dW.current) || void 0 === WW || WW.scrollIntoView({
+           block: "nearest"
```

#### 12. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L231-L235` → after: `L149-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L149-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L149-L286) · [Before (L231-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L231-L235)

```diff
-       }
-       get dev() {
-         return this.opened.dev
-       }
-       isReady() {
+       }), [iW]);
+       const eW = (WW, iW) => {
+           (0, jW.d)(WW, Object.entries(iW)), TW.current ? ZW() : WW.publishUpdateIfCurrent()
+         },
+         vW = function(WW) {
+           let {
+             isDefault: iW = !1
+           } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           const OW = {
+             ...!wW && LW.isLoggedIn() ? MW.current : lW.current,
+             ...WW
+           };
+           if (!wW) return lW.current = null, MW.current = {}, void eW(LW, OW);
+           lW.current = OW, iW || (MW.current = {
+             ...MW.current,
+             ...WW
+ ... (122 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L237-L266` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L288-L291) · [Before (L237-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L237-L266)

```diff
-         return null !== (ee = null === (ie = this.opened) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
-       }
-       setCosmetic(ee, ie) {
-         var He;
-         null === (He = this.opened) || void 0 === He || He.setCosmetic(ee, ie)
-       }
-       playEmote(ee) {
-         var ie;
-         null === (ie = this.opened) || void 0 === ie || ie.playEmote(ee)
-       }
-       setOrbit(ee) {
-         var ie;
-         null === (ie = this.opened) || void 0 === ie || ie.setOrbit(ee)
-       }
-       resetCamera() {
-         var ee;
- ... (14 more removed lines; see GitHub link above)
+         !AW && HW.current && (HW.current = !1, null === (WW = wW.current) || void 0 === WW || WW.focus(), null === (iW = wW.current) || void 0 === iW || iW.select())
+       }), [AW]);
+       const nW = (0, mW.useRef)(null);
+       (0, mW.useEffect)((() => {
```

#### 14. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L268-L284` → after: `L293-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L293-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L293-L349) · [Before (L268-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L268-L284)

```diff
-         this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
-       }
-     }
-     const oe = new class {
-       constructor() {
-         this.host = null, this.makeDefault = null
-       }
-       setHost(ee) {
-         this.host = ee
-       }
-       setDefaultHost(ee) {
-         this.makeDefault = ee
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
- ... (1 more removed lines; see GitHub link above)
+         null !== xW && (null === (WW = nW.current) || void 0 === WW || WW.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [xW]);
+       const uW = (WW, iW) => {
+         const OW = document.activeElement === wW.current || HW.current;
+         bW(!0), lW(null), WW.then((WW => {
+           UW.current && (bW(!1), HW.current = OW, iW(WW))
+         }))
+       };
+       (0, mW.useEffect)((() => {
+         var WW, iW;
+         eW.d.get("isTouchScreen") || (null === (WW = wW.current) || void 0 === WW || WW.focus(), null === (iW = wW.current) || void 0 === iW || iW.select())
+       }), []);
+       const oW = () => {
+           (0, cW.p)(jW.current), WW()
+ ... (41 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L286-L333` → after: `L351-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L351-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L351-L429) · [Before (L286-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L286-L333)

```diff
-         return this.host
-       }
-       openMob(ee) {
-         return new Fe(this.current().openMob(ee))
-       }
-       openPet(ee) {
-         return new Fe(this.current().openPet(ee))
-       }
-       openMobLineup(ee) {
-         return new Fe(this.current().openMobLineup(ee))
-       }
-       openCharacter(ee, ie) {
-         return new Je(this.current().openCharacter(ee, ie))
-       }
-     }
-   },
- ... (32 more removed lines; see GitHub link above)
+       }), [AW, LW]), (0, mW.useEffect)((() => {
+         if (null === LW) return;
+         const WW = SW.current && "EZ" === jW.current && OW.isLoggedIn();
+         SW.current = !1, yW.current = null, "noAccount" === (null === xW || void 0 === xW ? void 0 : xW.kind) && lW(null), WW && hW(LW), YW.current && (YW.current = !1, bW(!1), CW(WW ? LW : TW))
+       }), [LW]);
+       const XW = "error" === (null === xW || void 0 === xW ? void 0 : xW.kind) ? xW.message : "noAccount" === (null === xW || void 0 === xW ? void 0 : xW.kind) ? iW("homePage:onboardingNameNoAccount") : null;
+       return {
+         field: (0, KW.jsxs)("div", {
+           className: "OnboardingNameField",
+           ref: nW,
+           children: [(0, KW.jsx)("div", {
+             className: "OnboardingSubtitle",
+             children: iW("general:name")
+           }), null === TW && (0, KW.jsx)(gW.d, {}), null !== TW && (0, KW.jsxs)("div", {
+             className: "OnboardingNameRow",
+             children: [(0, KW.jsx)(DW.b, {
+ ... (63 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L345-L379` → after: `L433-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L433-L434) · [Before (L345-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L345-L379)

```diff
-     function be(ee, ie) {
-       return ee.getContext("2d", ie)
-     }
-     He.d(ie, {
-       c: () => be,
-       f: () => ye
-     })
-   },
-   37035: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Me
-     });
-     const ye = 4e5,
-       be = 2;
- 
-     function Me(ee, ie, He) {
- ... (19 more removed lines; see GitHub link above)
+     function pW(WW) {
+       return WW < 500
```

#### 17. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L383-L388` → after: `L438-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L438-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L438-L461) · [Before (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L383-L388)

```diff
-       return Me
-     }
- 
-     function Je(ee) {
-       be = ee, Me++, (0, ye.d)();
-       for (const ie of Ke) ie()
+       const WW = {
+           finished: !1
+         },
+         iW = {
+           press: null
+         };
+       return NW.NotificationProvider.showCustomPopup({
+         body: OW => (0, KW.jsx)(CW, {
+           onFinish: () => {
+             (0, cW.j)(), WW.finished = !0, OW()
+           },
+           doneRef: iW
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         disableExitButton: !0,
+         ignoreBackgroundPress: !0,
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L392` → after: `L465-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L465-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L465-L506) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L392)

```diff
-       Ke.add(ee)
+       let {
+         onFinish: iW,
+         doneRef: OW
+       } = WW;
+       const {
+         t: NW
+       } = (0, EW.B)(), wW = VW(iW), tW = wW.ready && !wW.busy ? wW.submit : null;
+       (0, mW.useEffect)((() => (OW.press = tW, () => {
+         OW.press = null
+       })));
+       const [ZW, xW] = (0, mW.useState)(!1), lW = (0, LW.l)(((WW, iW) => pW(iW))), AW = () => {
+         xW(!ZW)
+       };
+       return (0, mW.useEffect)((() => {
+         (0, cW.t)()
+       }), []), (0, KW.jsxs)("div", {
+ ... (26 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L395` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L509) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L395)

```diff
-   37028: (ee, ie, He) => {
+   37541: (WW, iW, OW) => {
```

#### 20. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L397-L403` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L511) · [Before (L397-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L397-L403)

```diff
-       e: () => Te,
-       g: () => oe,
-       h: () => qe,
-       l: () => Re,
-       o: () => pe,
-       q: () => fe,
-       u: () => ke
+       d: () => PW
```

#### 21. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L405-L448` → after: `L513-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L513-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L513-L543) · [Before (L405-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L405-L448)

```diff
-     const ye = 30,
-       be = 4;
-     let Me = 0,
-       Ke = !1,
-       Ue = !1,
-       Fe = Number.NEGATIVE_INFINITY,
-       Je = [];
- 
-     function oe() {
-       0 === Me && (Ke = !1, Ue = !1), Me++;
-       let ee = !1;
-       return () => {
-         ee || (ee = !0, Me--)
-       }
-     }
- 
- ... (28 more removed lines; see GitHub link above)
+     var mW = OW(2037),
+       EW = OW(1584);
+     const NW = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(WW, iW) {
+         WW !== this.userContext && this.sendHeld(), this.userContext = WW;
+         for (const [mW, EW] of iW) this.pending.set(mW, EW);
+         if (null !== this.timer) return;
+         const OW = this.lastSentAt + 1100 - Date.now();
+         OW <= 0 ? this.send(WW) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), OW), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
+ ... (15 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L450-L459` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L545) · [Before (L450-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L450-L459)

```diff
-     }
-   },
-   37102: (ee, ie, He) => {
-     function ye() {
-       return He(37108)
-     }
- 
-     function be() {
-       return He(37116)
-     }
+     };
```

#### 23. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L461-L462` → after: `L547-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L547-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L547-L554) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L461-L462)

```diff
-     function Me(ee) {
-       return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
+     function PW(WW, iW) {
+       for (const [OW, mW] of iW) WW.setPlayerCosmetics(OW, mW);
+       if (null === mW.gameBridge.latest("connectedGame").websocketUrl) NW.save(WW, iW);
+       else
+         for (const [OW, EW] of iW) mW.gameBridge.send("updateMyCosmetic", {
+           NE: OW,
+           PE: EW
+         })
```

#### 24. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L470` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L557) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L470)

```diff
-   37043: (ee, ie, He) => {
+   35118: (WW, iW, OW) => {
```

#### 25. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L477-L578` → after: `L564-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L564-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L564-L568) · [Before (L477-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L477-L578)

```diff
-     var ye = He(37068),
-       be = He(37049),
-       Me = He(37058),
-       Ke = He(37062);
- 
-     function Ue(ee, ie, He) {
-       const ye = "object" === typeof ee && null !== ee ? ee : {},
-         be = function(ee, ie, He) {
-           if (!Array.isArray(ee) || 0 === ee.length) return [];
-           const ye = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const Ue of (0, Ke.k)(ee, Ke.d.DEFAULT_FONT_SIZE, He)) {
- ... (86 more removed lines; see GitHub link above)
+     var mW = OW(154),
+       EW = OW(1259),
+       NW = OW(1185),
+       PW = OW(1111),
+       LW = OW(1850);
```

#### 26. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L580` → after: `L570-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L570-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L570-L573) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L580)

```diff
-       leaderboard: ""
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
```

#### 27. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L640-L647` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L577) · [Before (L640-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L640-L647)

```diff
-       Te.j.load().then((() => {
-         if (ee()) return;
-         const ie = (0, be.f)(1, 1, {
-           willReadFrequently: !0
-         });
-         var He;
-         ie && (He = ie.canvas, Ye.map((ee => ue(ee, He))))
-       }))
+       return cW[WW]
```

#### 28. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L651-L652` → after: `L580-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L580-L581) · [Before (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L651-L652)

```diff
-     function ce() {
-       te.clear(), Ze.clear()
+     function tW(WW) {
+       return (0, LW.c)(WW) ? "outdated" : WW instanceof mW.c ? 429 === WW.httpCode ? "busy" : "server" : "offline"
```

#### 29. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L655-L657` → after: `L584-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L584-L590) · [Before (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L655-L657)

```diff
-     function xe(ee, ie) {
-       const He = ee.get(ie);
-       return void 0 !== He && (ee.delete(ie), ee.set(ie, He)), He
+     function ZW(WW, iW, OW) {
+       return (0, PW.postJsonWithMetricsCookiesAndJsonResponse)(`${NW.clientSideServerUrls.indexUrl}${iW}`, OW, {
+         retries: 3
+       }, WW.getMetricsCookies()).catch((WW => (console.error("Bad response from the server when trying to change name:", iW, WW), {
+         outcome: "failed",
+         failure: tW(WW)
+       })))
```

#### 30. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L660-L661` → after: `L593-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L593-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L593-L594) · [Before (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L660-L661)

```diff
-     function Le(ee, ie, He) {
-       ee.set(ie, He), ee.size > ze && ee.delete(ee.keys().next().value)
+     function xW(WW) {
+       return "outcome" in WW && "failed" === WW.outcome
```

#### 31. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L664-L684` → after: `L597-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L597-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L597-L600) · [Before (L664-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L664-L684)

```diff
-     function Ce(ee, ie, He) {
-       if (ee === pe.Nametag) {
-         let ee = xe(te, ie);
-         return void 0 === ee && (ee = (0, Fe.e)(JSON.parse(ie), He, de), Le(te, ie, ee)), ee
-       }
-       if (ee === pe.MultilineText) {
-         var be;
-         const ee = JSON.parse(ie),
-           ye = JSON.stringify(null !== (be = ee.box) && void 0 !== be ? be : null),
-           Me = "number" === typeof ee.shown ? ee.shown : null;
-         let Ke = xe(Ze, ye);
-         void 0 === Ke && (Ke = Ue(ee.box, He, de), Le(Ze, ye, Ke));
-         const Fe = null === Me ? null : Math.min(Math.max(0, Math.floor(Me)), Ke.chars),
-           Je = Ke;
-         return {
-           width: Je.width,
- ... (5 more removed lines; see GitHub link above)
+     function lW(WW) {
+       return console.error("Error when trying to get with new name from DB", WW), {
+         outcome: "refused",
+         message: WW
```

#### 32. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L743` → after: `L603-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L603-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L603-L620) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L743)

```diff
-     const ve = 2 ** Math.floor(Math.log2(Xe));
+     async function AW(WW) {
+       const iW = await ZW(WW, "/index/name/random", {});
+       return xW(iW) ? iW : "err" in iW ? lW(iW.err) : (WW.setPlayerName(iW.name), {
+         outcome: "changed",
+         name: iW.name
+       })
+     }
+     async function bW(WW, iW) {
+       const OW = await ZW(WW, "/index/name/update", {
+         name: iW
+       });
+       return xW(OW) ? OW : "err" in OW ? lW(OW.err) : OW.nameExists ? {
+         outcome: "taken"
+       } : (WW.setPlayerName(iW), {
+         outcome: "changed",
+         name: iW
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L746-L790` → after: `L623-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L623-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/221.js#L623-L638) · [Before (L746-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/221.js#L746-L790)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (ee.length < 2) return [0, 0];
-         const Me = (0, be.c)(ie);
-         if (!Me) return [0, 0];
-         const Ke = ae();
-         Ke !== We && (We = Ke, ce());
-         const [Ue] = ee, Fe = Oe.decode(ee.subarray(1));
-         let Je;
-         Ue !== pe.Board && Ue !== pe.Leaderboard || !de.canSeePlayerWrittenText || de.glyphsShown(Fe), Me.save();
-         try {
-           Je = Ce(Ue, Fe, Me)
-         } finally {
-           Me.restore()
-         }
- ... (29 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const mW = 1 === iW ? 1 : 10 ** (iW - 1),
+         NW = String(mW + Math.floor(OW() * (10 ** iW - mW)));
+       return `${WW.slice(0,EW.f-iW)}${NW}`
+     }
+     const UW = [1, 2, 3, 4];
+     async function kW(WW, iW) {
+       const OW = await bW(WW, iW);
+       if ("taken" !== OW.outcome) return OW;
+       for (const mW of UW) {
+         const OW = jW(iW, mW),
+           EW = await bW(WW, OW);
+         if ("taken" !== EW.outcome) return EW
+       }
+       return {
+         outcome: "taken"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L4-L29` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L4) · [Before (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L4-L29)

```diff
-   44723: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Me
-     });
-     var ye = He(59),
-       be = He(2957);
- 
-     function Me(ee, ie, He) {
-       const Me = (0, ye.useRef)(null),
-         {
-           width: Ke,
-           height: Ue
-         } = (0, be.e)(ee);
-       (0, ye.useEffect)((() => {
-         const He = ie(ee.current);
-         return Me.current = He, () => {
- ... (10 more removed lines; see GitHub link above)
+   35159: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L32-L33` → after: `L7-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L7-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L7-L15) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L32-L33)

```diff
-       d: () => Re,
-       e: () => Fe
+       e: () => oi,
+       h: () => ui,
+       k: () => ei,
+       m: () => bi,
+       q: () => Ui,
+       t: () => ki,
+       w: () => Mi,
+       y: () => di,
+       C: () => si
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L35-L46` → after: `L17-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L17-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L17-L50) · [Before (L35-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L35-L46)

```diff
-     var ye = He(37971),
-       be = He(39440);
- 
-     function Me(ee, ie) {
-       let [He, ye, be] = ee;
-       return [0, .5, 1].map((ee => ({
-         timeFraction: ee,
-         rotation: {
-           PH: "catmull-rom-spline",
-           point: [He, ye, be + (.5 === ee ? ie : 0)]
-         }
-       })))
+     var mW = OW(248),
+       EW = OW(25),
+       NW = OW(100),
+       PW = OW(1729),
+       LW = OW(5129),
+       cW = OW(3941),
+       wW = OW(3947),
+       tW = OW(39);
+     const {
+       windows: ZW,
+       target: xW,
+       stepDown: lW,
+       stepUp: AW,
+       noGain: bW,
+       probe: jW
+     } = wW.c, UW = 1e3 / 60 * 1.08, kW = 1e3 / 55, sW = 1e3 / 45, MW = 1e3 / 30 * .92, KW = 1e3 / 30 * 1.08;
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L50-L76` → after: `L54-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L54-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L54-L208) · [Before (L50-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L50-L76)

```diff
-       return {
-         WH: 3200,
-         loop: !0,
-         ZH: {
-           Root: {
-             timeline: [0, .5, 1].map((ee => ({
-               timeFraction: ee,
-               position: {
-                 PH: "catmull-rom-spline",
-                 point: [0, .5 === ee ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((ee => ({
-               timeFraction: ee,
- ... (11 more removed lines; see GitHub link above)
+       const {
+         fast: mW,
+         masked: EW,
+         longFrame: NW,
+         paced: PW
+       } = WW;
+       return !NW && (mW && !PW || iW) ? EW && !OW ? "hold" : "rise" : EW ? WW.dropping ? "break" : "hold" : (NW ? mW || iW : mW && !OW) ? "hold" : "break"
+     }
+     const yW = ZW.windowMs,
+       TW = ZW.settleMs,
+       JW = ZW.graceMs,
+       hW = ZW.minIntervals,
+       HW = 1e3 * hW / yW,
+       nW = Math.floor(1e4 / yW),
+       uW = bW.backoffMs,
+       oW = bW.maxMs;
+ ... (139 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L80-L86` → after: `L212-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L212-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L212-L613) · [Before (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L80-L86)

```diff
-     }
-     const Ue = Ke([0, 0, 0], [0, 0, 0], .07),
-       Fe = (0, be.c)((0, ye.e)(Ue), "mobIdle"),
-       Je = Ke([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       oe = Ke([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       Re = (0, be.c)((0, ye.e)(Je), "gunReady"),
-       ke = (0, be.c)((0, ye.e)(oe), "gunAimed")
+       watch(WW, iW, OW, mW, EW, NW) {
+         const PW = this.climbed;
+         null !== PW && !mW && !EW && ++PW.heldWindows >= AW.heldWindows && (this.climbed = null, this.record(NW, WW, "BL"), this.hooks.BL(this.step)), mW ? (this.dropRun += iW, this.dropRunFpsSum += WW * iW, this.dropRunMasked ||= EW, EW || (this.dropRunClean += iW, this.dropRunC … [truncated]
+         const LW = null !== this.climbed ? AW : lW;
+         if (this.dropRun >= (this.dropRunMasked ? LW.maskedWindows : LW.dropWindows)) {
+           const iW = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
+             OW = this.dropRunClean >= lW.dropWindows && iW < this.noGainFps[this.step] * bW.heavierShare;
+           this.resetDropRun();
+           const mW = this.climbed;
+           return void(null !== mW ? (this.failUp(this.step, mW.from, WW, NW), this.climbed = mW.below) : this.step < this.lowest && (OW || this.waitOver(NW)) && (this.climbing = !1, this.phase = {
+             kind: "down",
+             from: this.step,
+             fromFps: iW,
+             early: !this.waitOver(NW),
+             judged: 0,
+             fpsSum: 0,
+ ... (386 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L88` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L615) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L88)

```diff
-   39440: (ee, ie, He) => {
+   35164: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L90-L91` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L617) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L90-L91)

```diff
-       c: () => be,
-       f: () => Me
+       d: () => NW
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L93-L130` → after: `L619-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L619-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L619-L637) · [Before (L93-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L93-L130)

```diff
-     const ye = new WeakMap;
- 
-     function be(ee, ie) {
-       return ye.set(ee, ie), ee
-     }
- 
-     function Me(ee) {
-       var ie;
-       return null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : null
-     }
-   },
-   34927: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke,
-       d: () => be,
-       h: () => oe
- ... (22 more removed lines; see GitHub link above)
+     var mW = OW(100),
+       EW = OW(131);
+ 
+     function NW(WW, iW, OW) {
+       if ("webgpu" === WW) return OW ? ((0, mW.seedGpuVendor)(OW), {
+         vendor: OW,
+         renderer: ""
+       }) : null;
+       try {
+         const OW = "webgl" === WW ? iW.getContext("webgl2") : iW.getContext("webgl");
+         "webgl" === WW && OW && (0, EW.A)(OW);
+         const NW = null === OW || void 0 === OW ? void 0 : OW.getExtension("WEBGL_debug_renderer_info");
+         if (OW && NW) {
+           const WW = String(OW.getParameter(NW.UNMASKED_VENDOR_WEBGL)),
+             iW = String(OW.getParameter(NW.UNMASKED_RENDERER_WEBGL));
+           return (0, mW.seedGpuVendor)(WW), (0, EW.F)(WW, iW), {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L132-L332` → after: `L639-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/222.js#L639-L642) · [Before (L132-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/222.js#L132-L332)

```diff
-       };
- 
-     function Ue(ee, ie) {
-       ee instanceof Promise ? ee.then(ie).catch((ee => {
-         console.error("Couldn't open the preview", ee)
-       })) : ie(ee)
-     }
-     class Fe {
-       constructor(ee) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, Ue(ee, (ee => {
-           this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height), null !== this.view && ee.show(this.view))
-         }))
-       }
-       show(ee) {
-         var ie;
-         this.view = ee, null === (ie = this.opened) || void 0 === ie || ie.show(ee)
- ... (185 more removed lines; see GitHub link above)
+         OW && (0, EW.F)(String(OW.getParameter(OW.VENDOR)), String(OW.getParameter(OW.RENDERER)))
+       } catch {}
+       return null
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L4-L6)

```diff
-   44715: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       MobPreview: () => Re
+   38111: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       g: () => NW,
+       i: () => LW,
+       m: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L8-L14` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L11-L17) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L8-L14)

```diff
-     var ye = He(59),
-       be = He(1053),
-       Me = He.n(be),
-       Ke = He(44723),
-       Ue = He(34919),
-       Fe = He(44731),
-       Je = He(1228);
+     var mW = OW(1876);
+     const EW = ".bloxdreplay",
+       NW = "application/octet-stream";
+ 
+     function PW() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${EW}`
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L17-L36` → after: `L20-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L20-L24) · [Before (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L17-L36)

```diff
-       return Ue.i.openMob(ee)
-     }
-     const Re = (0, ye.memo)((function(ee) {
-       let {
-         mobType: ie,
-         variation: He = null,
-         animation: be = Fe.e,
-         className: Ue
-       } = ee;
-       const Re = (0, ye.useRef)(null),
-         ke = (0, ye.useMemo)((() => ({
-           mobType: ie,
-           variation: He,
-           animation: be
-         })), [ie, He, be]);
-       return (0, Ke.b)(Re, oe, ke), (0, Je.jsx)("div", {
- ... (4 more removed lines; see GitHub link above)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW();
+       return (0, mW.e)(new Blob([WW], {
+         type: NW
+       }), iW), iW
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L38` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L26) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L38)

```diff
-   44723: (ee, ie, He) => {
+   38101: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L40` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L28-L29) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L40)

```diff
-       b: () => Me
+       b: () => PW,
+       f: () => NW
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L42-L43` → after: `L31-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L31-L40) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L42-L43)

```diff
-     var ye = He(59),
-       be = He(2957);
+     var mW = OW(38105);
+     let EW = {
+       open: async () => {
+         throw new Error(mW.e.viewerLoadFailed.text)
+       },
+       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
+       encode: async () => null,
+       fileHandle: () => null,
+       markSaved: () => {}
+     };
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L45-L54` → after: `L42-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L42-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L42-L147) · [Before (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L45-L54)

```diff
-     function Me(ee, ie, He) {
-       const Me = (0, ye.useRef)(null),
-         {
-           width: Ke,
-           height: Ue
-         } = (0, be.e)(ee);
-       (0, ye.useEffect)((() => {
-         const He = ie(ee.current);
-         return Me.current = He, () => {
-           He.close(), Me.current = null
+     function NW(WW) {
+       EW = WW
+     }
+ 
+     function PW() {
+       return EW
+     }
+   },
+   38105: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW,
+       i: () => wW,
+       m: () => cW
+     });
+     var mW = OW(27);
+     const EW = 1500,
+ ... (90 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L56-L60` → after: `L149-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L149-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L149-L163) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L56-L60)

```diff
-       }), [ee, ie]), (0, ye.useEffect)((() => {
-         Ke <= 0 || Ue <= 0 || Me.current.resize(Ke, Ue)
-       }), [Ke, Ue]), (0, ye.useEffect)((() => {
-         Me.current.show(He)
-       }), [He])
+       },
+       LW = new Set(Object.values(PW).filter((WW => "Error" === WW.type)).map((WW => WW.text)));
+ 
+     function cW(WW) {
+       return WW instanceof Error && LW.has(WW.message) ? WW.message : void 0
+     }
+ 
+     function wW(WW) {
+       var iW;
+       const OW = null !== (iW = WW.timeoutMs) && void 0 !== iW ? iW : "Error" === WW.type ? EW : NW;
+       mW.l.iZ("showBottomMessage", {
+         message: WW.text,
+         timeoutLength: OW,
+         type: WW.type
+       })
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L63` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L166) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L63)

```diff
-   44731: (ee, ie, He) => {
+   37735: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L65-L67` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L168-L169) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L65-L67)

```diff
-       b: () => ke,
-       d: () => Re,
-       e: () => Fe
+       e: () => EW,
+       g: () => NW
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L69-L70` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L171) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L69-L70)

```diff
-     var ye = He(37971),
-       be = He(39440);
+     let mW = !1;
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L72-L80` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L173-L174) · [Before (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L72-L80)

```diff
-     function Me(ee, ie) {
-       let [He, ye, be] = ee;
-       return [0, .5, 1].map((ee => ({
-         timeFraction: ee,
-         rotation: {
-           PH: "catmull-rom-spline",
-           point: [He, ye, be + (.5 === ee ? ie : 0)]
-         }
-       })))
+     function EW() {
+       return mW
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L83-L113` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L177-L178) · [Before (L83-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L83-L113)

```diff
-     function Ke(ee, ie, He) {
-       return {
-         WH: 3200,
-         loop: !0,
-         ZH: {
-           Root: {
-             timeline: [0, .5, 1].map((ee => ({
-               timeFraction: ee,
-               position: {
-                 PH: "catmull-rom-spline",
-                 point: [0, .5 === ee ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((ee => ({
- ... (15 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return mW !== WW && (mW = WW, !0)
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L122` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L181) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L122)

```diff
-   34927: (ee, ie, He) => {
+   37968: (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L126` → after: `L202-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L202-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L202-L207) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L126)

```diff
-       h: () => oe
+       f: () => bW,
+       h: () => MW,
+       l: () => sW,
+       p: () => SW,
+       s: () => KW,
+       w: () => jW
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L128` → after: `L209-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L209-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L209-L222) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L128)

```diff
-     var ye = He(1557);
+     var mW = OW(1463),
+       EW = OW(37975),
+       NW = OW(27);
+     const PW = "clientGameCraftableMarksChanged",
+       LW = "clientGameCraftableLocksChanged",
+       cW = "clientGameCraftableOrderChanged",
+       wW = "selectCraftable";
+     let tW = new Set,
+       ZW = new Map,
+       xW = new Map;
+ 
+     function lW() {
+       return tW
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L131-L135` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L225-L226) · [Before (L131-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L131-L135)

```diff
-       var ie;
-       return {
-         ...Ke.store,
-         yaw: Ke.store.yaw + (null !== (ie = ye.b[ee].previewYaw) && void 0 !== ie ? ie : 0)
-       }
+       const iW = new Set(WW);
+       (0, EW.c)(iW, tW) || (tW = iW, NW.l.iZ(PW, tW))
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L137-L149` → after: `L228-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L228-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L228-L252) · [Before (L137-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L137-L149)

```diff
-     const Me = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       Ke = {
-         player: Me,
-         store: {
-           ...Me,
-           radius: 33,
-           target: [0, 3.9, 0]
-         }
+ 
+     function bW() {
+       return ZW
+     }
+ 
+     function jW(WW) {
+       0 === WW.size && 0 === ZW.size || (ZW = new Map(WW), NW.l.iZ(LW, ZW))
+     }
+ 
+     function UW() {
+       return xW
+     }
+ 
+     function kW(WW) {
+       WW.length === xW.size && WW.every(((WW, iW) => xW.get(WW) === iW)) || (xW = new Map(WW.map(((WW, iW) => [WW, iW]))), NW.l.iZ(cW, xW))
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L153-L155` → after: `L272-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L272-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L272-L354) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L153-L155)

```diff
-       ee instanceof Promise ? ee.then(ie).catch((ee => {
-         console.error("Couldn't open the preview", ee)
-       })) : ie(ee)
+       const OW = {
+         variation: WW,
+         itemName: iW
+       };
+       NW.l.iZ(wW, OW)
+     }
+ 
+     function SW() {
+       AW([]), jW(new Map), kW([])
+     }
+ 
+     function YW() {
+       return (0, mW.e)(PW, lW)
+     }
+ 
+     function yW() {
+ ... (67 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L159-L165` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L358) · [Before (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L159-L165)

```diff
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, Ue(ee, (ee => {
-           this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height), null !== this.view && ee.show(this.view))
-         }))
-       }
-       show(ee) {
-         var ie;
-         this.view = ee, null === (ie = this.opened) || void 0 === ie || ie.show(ee)
+         this.getContainer = WW, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L167` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L360) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L167)

```diff
-       resize(ee, ie) {
+       setFade(WW, iW) {
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L169-L172` → after: `L362-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L362-L368) · [Before (L169-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L169-L172)

```diff
-         this.size = {
-           width: ee,
-           height: ie
-         }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
+         if (!this.elements && iW <= 0) return;
+         const {
+           fade: mW
+         } = this.getElements(), EW = null !== (OW = cW) && void 0 !== OW ? OW : this.getContainer();
+         mW.parentElement !== EW && EW.appendChild(mW);
+         const NW = this.markHost(iW > 0 ? cW : null, iW >= 1);
+         (WW !== this.colour || iW !== this.alpha || NW) && (WW !== this.colour && (mW.style.background = WW), mW.style.opacity = String(iW), mW.style.display = iW > 0 ? "" : "none", this.fadeKeeperHosts(iW), this.colour = WW, this.alpha = iW)
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L174` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L370) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L174)

```diff
-       close() {
+       fadeKeeperHosts(WW) {
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L176-L186` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L372-L374) · [Before (L176-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L176-L186)

```diff
-         this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
-       }
-     }
-     class Je {
-       constructor(ee) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(ee).then((ee => ee.ready)), Ue(ee, (ee => {
-           this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height))
-         }))
-       }
-       get dev() {
-         return this.opened.dev
+         const OW = null === (iW = this.markedHost) || void 0 === iW ? void 0 : iW.parentElement;
+         if (OW)
+           for (const mW of OW.querySelectorAll("[data-camera-keeper-host]")) mW.style.setProperty("--camera-fade-alpha", String(WW))
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L188-L190` → after: `L376-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L376-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L376-L385) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L188-L190)

```diff
-       isReady() {
-         var ee, ie;
-         return null !== (ee = null === (ie = this.opened) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
+       setLetterbox(WW, iW) {
+         if (WW === this.letterbox) return;
+         if (!this.elements && !WW) return;
+         const {
+           top: OW,
+           bottom: mW
+         } = this.getElements();
+         this.letterbox = WW;
+         const EW = !iW || "function" === typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 400ms ease-in-out";
+         OW.style.transition = EW, mW.style.transition = EW, OW.style.transform = WW ? "translateY(0)" : "translateY(-100%)", mW.style.transform = WW ? "translateY(0)" : "translateY(100%)"
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L192-L194` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L387-L391) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L192-L194)

```diff
-       setCosmetic(ee, ie) {
-         var He;
-         null === (He = this.opened) || void 0 === He || He.setCosmetic(ee, ie)
+       clear() {
+         const {
+           elements: WW
+         } = this;
+         WW && (this.markHost(null, !1), WW.fade.remove(), WW.top.remove(), WW.bottom.remove(), this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1)
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L196` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L393) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L196)

```diff
-       playEmote(ee) {
+       markHost(WW, iW) {
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L198-L202` → after: `L395-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L395-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L395-L399) · [Before (L198-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L198-L202)

```diff
-         null === (ie = this.opened) || void 0 === ie || ie.playEmote(ee)
-       }
-       setOrbit(ee) {
-         var ie;
-         null === (ie = this.opened) || void 0 === ie || ie.setOrbit(ee)
+         const mW = WW !== this.markedHost;
+         if (!mW && iW === this.markedCovered) return !1;
+         var NW, PW;
+         mW && (null === (NW = this.markedHost) || void 0 === NW || null === (PW = NW.parentElement) || void 0 === PW || PW.removeAttribute(EW));
+         return null === WW || void 0 === WW || null === (OW = WW.parentElement) || void 0 === OW || OW.setAttribute(EW, iW ? "covered" : ""), this.markedHost = WW, this.markedCovered = iW, mW
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L204-L206` → after: `L401-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L401-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L401-L413) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L204-L206)

```diff
-       resetCamera() {
-         var ee;
-         null === (ee = this.opened) || void 0 === ee || ee.resetCamera()
+       getElements() {
+         if (this.elements) return this.elements;
+         const WW = ZW("top"),
+           iW = ZW("bottom");
+         WW.style.transform = "translateY(-100%)", iW.style.transform = "translateY(100%)";
+         const OW = tW();
+         OW.style.top = "0", OW.style.bottom = "0", OW.style.display = "none", OW.setAttribute(PW, "");
+         const mW = this.getContainer();
+         return mW.appendChild(WW), mW.appendChild(iW), WW.getBoundingClientRect(), this.elements = {
+           fade: OW,
+           top: WW,
+           bottom: iW
+         }, this.elements
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L208-L210` → after: `L415-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L415-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L415-L527) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L208-L210)

```diff
-       async untilDrawn(ee) {
-         var ie;
-         await this.ready, await (null === (ie = this.opened) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
+     }
+   },
+   37915: (WW, iW, OW) => {
+     OW.d(iW, {
+       C: () => tW,
+       d: () => mW,
+       f: () => xW,
+       g: () => ZW,
+       k: () => PW,
+       m: () => AW,
+       q: () => cW,
+       t: () => bW,
+       w: () => wW,
+       y: () => LW
+     });
+     const mW = Math.PI / 2 - .001,
+ ... (97 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L212-L217` → after: `L529-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L529-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L529-L537) · [Before (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L212-L217)

```diff
-       resize(ee, ie) {
-         var He;
-         this.size = {
-           width: ee,
-           height: ie
-         }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
+       if (!ZW) {
+         let WW = 0,
+           iW = 1;
+         tW = OW;
+         for (let EW = 0; EW < 12; EW++) {
+           const EW = cW(mW, NW, tW);
+           if (Math.abs(EW - OW) < 1e-6) break;
+           OW > EW ? WW = tW : iW = tW, tW = (WW + iW) / 2
+         }
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L219-L221` → after: `L539-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L539-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L539-L553) · [Before (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L219-L221)

```diff
-       close() {
-         var ee;
-         this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
+       return cW(EW, PW, tW)
+     }
+ 
+     function ZW(WW) {
+       switch (WW) {
+         case "linear":
+           return mW;
+         case "easeIn":
+           return EW;
+         case "easeOut":
+           return NW;
+         case "easeInOut":
+           return PW;
+         default:
+           return WW
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L226-L237` → after: `L582-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L582-L583) · [Before (L226-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L226-L237)

```diff
-         this.host = null, this.makeDefault = null
-       }
-       setHost(ee) {
-         this.host = ee
-       }
-       setDefaultHost(ee) {
-         this.makeDefault = ee
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
```

#### 34. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L241-L242` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L586-L587) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L241-L242)

```diff
-       openMob(ee) {
-         return new Fe(this.current().openMob(ee))
+       isHeld() {
+         return this.holding && EW() !== this.heldOrientation && (this.holding = !1), this.holding
```

#### 35. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L244-L245` → after: `L589-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L589-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L589-L592) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L244-L245)

```diff
-       openPet(ee) {
-         return new Fe(this.current().openPet(ee))
+       hold() {
+         this.heldOrientation = EW(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, mW.ub)(new Error("Game view size held for 60 s"))
+         }), 6e4)
```

#### 36. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L247-L248` → after: `L594-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L594-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L594-L609) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L247-L248)

```diff
-       openMobLineup(ee) {
-         return new Fe(this.current().openMobLineup(ee))
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const WW of this.resizers) WW()
+           }
+         }), 1e3)
+       }
+       heldSizer(WW) {
+         let iW = !1;
+         return () => {
+           if (iW && this.isHeld()) return null;
+           const OW = WW();
+           return iW ||= null !== OW, OW
+         }
```

#### 37. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L250-L251` → after: `L611-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L611-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L611-L614) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L250-L251)

```diff
-       openCharacter(ee, ie) {
-         return new Je(this.current().openCharacter(ee, ie))
+       onRelease(WW) {
+         return this.resizers.add(WW), () => {
+           this.resizers.delete(WW)
+         }
```

#### 38. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L255` → after: `L618-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L618-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L618-L630) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L255)

```diff
-   34919: (ee, ie, He) => {
+   37752: (WW, iW, OW) => {
+     const mW = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, OW(1172).b)(mW)
+   },
+   37975: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return WW.size === iW.size && [...WW].every((WW => iW.has(WW)))
+     }
+     OW.d(iW, {
+       c: () => mW
+     })
+   },
+   35225: (WW, iW, OW) => {
```

#### 39. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L257-L259` → after: `L632-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L632-L637) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L257-L259)

```diff
-       e: () => ye.b,
-       f: () => ye.d,
-       i: () => ye.h
+       b: () => tW,
+       e: () => xW,
+       g: () => ZW,
+       k: () => PW,
+       o: () => wW,
+       q: () => cW
```

#### 40. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L261-L269` → after: `L639-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L639-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L639-L719) · [Before (L261-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L261-L269)

```diff
-     var ye = He(34927);
-     class be {
-       constructor(ee) {
-         this.load = ee, this.loaded = null, this.loading = null
-       }
-       run(ee) {
-         return null !== this.loaded ? ee(this.loaded) : (this.loading ??= this.load().then((ee => (this.loaded = ee, ee)), (ee => {
-           throw this.loading = null, ee
-         })), this.loading.then(ee))
+     var mW = OW(344);
+     const EW = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       NW = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
+         },
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
+         },
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
+         },
+         Health: {
+ ... (65 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L272-L283` → after: `L722-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L722-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L722-L817) · [Before (L272-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L272-L283)

```diff
-     class Me {
-       constructor() {
-         this.mobScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He. … [truncated]
-       }
-       openMob(ee) {
-         return this.mobScene.run((ie => ie.openMobPreview(ee)))
-       }
-       openPet(ee) {
-         return this.mobScene.run((ie => ie.openPetPreview(ee)))
-       }
-       openMobLineup(ee) {
-         return this.mobScene.run((ie => ie.openMobLineupPreview(ee)))
+     const LW = {
+       "Wood Enchanting Table": [{
+         min: 1,
+         max: 2
+       }, {
+         min: 3,
+         max: 4
+       }, {
+         min: 5,
+         max: 6
+       }],
+       "Stone Enchanting Table": [{
+         min: 2,
+         max: 4
+       }, {
+         min: 5,
+ ... (80 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L285-L286` → after: `L819-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L819-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/223.js#L819-L828) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/223.js#L285-L286)

```diff
-       openCharacter(ee, ie) {
-         return this.characterScene.run((He => He.openCharacterPreview(ee, ie)))
+     }
+ 
+     function xW(WW, iW) {
+       const {
+         min: OW,
+         max: EW
+       } = LW[WW][iW], NW = mW.e.sampleUniformIntDistribution(OW, EW, "includeMax");
+       return {
+         ...ZW(NW),
+         level: NW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L4)

```diff
-   37181: (ee, ie, He) => {
+   35231: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L6` → after: `L6-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L6-L29) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L6)

```diff
-       default: () => Hi
+       MAX_BLOCK_ID: () => mW,
+       armourReductionOf: () => CW,
+       clipSizeOf: () => fW,
+       creativeAltNames: () => Pi,
+       creativeCategoryOf: () => FW,
+       creativeItemCategories: () => LW,
+       creativeItemCategoryIcons: () => cW,
+       creativeItemIds: () => zW,
+       descriptionOf: () => DW,
+       displayNameOf: () => gW,
+       dropsNothing: () => qW,
+       enchantmentPerksOf: () => aW,
+       gunTypeOf: () => BW,
+       harvestsNullLevelOf: () => RW,
+       isDevOnlyItem: () => Oi,
+       itemIsDisabled: () => Ei,
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L8-L12` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L31-L51) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L8-L12)

```diff
-     var ye = He(59);
-     const be = "newPlayerDeal",
-       Me = 36e5,
-       Ke = [4, 12, 20, 20, 30];
-     const Ue = 12 * Me;
+     const mW = 8574,
+       EW = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       NW = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       PW = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       LW = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       cW = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L15` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L54-L58) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L15)

```diff
-       return ee - Ue
+       let iW = null;
+       return OW => {
+         var mW;
+         return iW ??= (0, tW.y)(WW, 10114), null !== (mW = iW[OW]) && void 0 !== mW ? mW : 0
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L20` → after: `L63-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L63-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L63-L68) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L20)

```diff
-       return ie >= ye && ie < He && (null === ee.lastShownAt || ee.lastShownAt < ye)
+       let EW = null,
+         NW = [];
+       return WW => {
+         const PW = mW(WW);
+         if (0 !== PW) return null === EW && (EW = iW.split(tW.s), NW = new Array(EW.length)), NW[PW - 1] ??= OW(EW[PW - 1])
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L23-L31` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L71-L72) · [Before (L23-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L23-L31)

```diff
-     function oe(ee, ie) {
-       const {
-         arrival: He,
-         now: ye,
-         endsAt: be,
-         playedOnDevice: Ue
-       } = ie;
-       return !(ye >= be || !Ue) && (!(!Je(ee, ye, be) && 0 !== ee.shownCount && null !== ee.lastShownAt) || "open" === He && ye - ee.lastShownAt >= (Fe = ee.shownCount, Ke[Math.min(Math.max(Fe, 1), Ke.length) - 1] * Me));
-       var Fe
+     function AW(WW) {
+       return WW
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L62-L111` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L76) · [Before (L62-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L62-L111)

```diff
-       let {
-         shownView: ie,
-         close: He
-       } = ee;
-       const {
-         t: be
-       } = (0, Ye.v)(), Me = (0, De.M)(), {
-         purchaseUnderWay: Ke,
-         notice: Ue,
-         needsLogin: Fe,
-         buyPack: Je
-       } = (0, Le.h)("popup", ((ee, ie) => {
-         He(!1), (0, Ae.b)(ee, ie)
-       })), oe = null === Me;
-       (0, ye.useEffect)((() => {
-         oe && He(!1)
- ... (34 more removed lines; see GitHub link above)
+       return WW === tW.f ? null : (0, tW.B)(WW)
```

#### 8. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L115-L121` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L104-L108) · [Before (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L115-L121)

```diff
-       let {
-         arm: ie,
-         children: He
-       } = ee;
-       return (0, ye.useEffect)((() => {
-         (0, De.G)(!0)
-       }), []), (0, De.O)(ie, "popup"), He
+       const iW = jW(WW);
+       return null !== iW ? iW : KW(kW, WW, (() => {
+         const iW = (0, wW.d)(WW);
+         return void 0 === iW ? void 0 : (0, tW.E)(iW)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L125-L141` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L112-L115) · [Before (L125-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L125-L141)

```diff
-       let ie = null;
-       Ee.NotificationProvider.showCustomPopup({
-         body: He => (0, Ce.jsx)(ue, {
-           arm: ee.arm,
-           children: (0, Ce.jsx)(ve, {
-             shownView: ee,
-             close: ee => {
-               ie ??= ee, He()
-             }
-           })
-         }),
-         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
-         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
-         disableExitButton: !0,
-         unlockPointerKey: "NewPlayerDealPopup"
-       }).getResult().then((He => {
- ... (1 more removed lines; see GitHub link above)
+       const iW = UW(WW);
+       return null !== iW ? iW : KW(sW, WW, (() => {
+         var iW;
+         return null !== (iW = (0, tW.D)(gW(WW))) && void 0 !== iW ? iW : void 0
```

#### 10. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L150-L156` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L120) · [Before (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L150-L156)

```diff
-       const ie = Date.now() + je;
-       return new Promise((He => {
-         const ye = () => {
-           ee() ? (0, te.d)() || Ee.NotificationProvider.hasPopup() || (0, We.l)() || (0, De.s)() || null !== qe.e.get("openEverythingMenuName") ? Date.now() > ie ? He(!1) : setTimeout(ye, ne) : He(!0) : He(!1)
-         };
-         ye()
-       }))
+       return SW(WW)
```

#### 11. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L162-L164` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L123-L124) · [Before (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L162-L164)

```diff
-     function Ge(ee, ie) {
-       var He;
-       return (null === (He = Ne) || void 0 === He ? void 0 : He.accountId) === ie && Ne.shownCount === ee.shownCount
+     function pW(WW) {
+       return YW(WW)
```

#### 12. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L167-L168` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L127-L128) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L167-L168)

```diff
-     function re(ee, ie, He) {
-       return !!Ge(ie, He) && (Ne = null, (0, De.v)(He), me(ee), !0)
+     function fW(WW) {
+       return yW(WW)
```

#### 13. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L170-L197` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L130-L132) · [Before (L170-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L170-L197)

```diff
-     async function Qe(ee, ie, He, ye) {
-       if (he) return !1;
-       let be;
-       he = !0;
-       try {
-         be = await async function(ee) {
-           const {
-             newPlayerDeal: ie,
-             counted: He
-           } = await (0, Be.postJsonWithMetricsCookiesAndJsonResponse)(`${ze.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
-             shownCount: ee
-           }, {
-             retries: 1
-           });
-           return {
-             newPlayerDeal: ie,
- ... (12 more removed lines; see GitHub link above)
+ 
+     function CW(WW) {
+       return TW(WW)
```

#### 14. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L201-L277` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L135-L136) · [Before (L201-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L201-L277)

```diff
-     function ii(ee, ie, He, be, Me) {
-       var Ke;
-       const {
-         gameState: Ue
-       } = (0, qe.m)(["gameState"]), ke = "landingPage" === Ue, {
-         pointing: fe
-       } = (0, de.j)(), Te = (0, ye.useRef)(fe);
-       Te.current = fe;
-       const pe = (0, ye.useRef)(ee);
-       pe.current = ee;
-       const ze = (0, ye.useRef)(ie);
-       ze.current = ie;
-       const Be = (0, ye.useRef)(He);
-       Be.current = He;
-       const [Ee, We] = (0, ye.useState)(null), te = (0, ye.useRef)(0), Ze = (0, ye.useRef)(0), we = (0, ye.useRef)(!1), De = (0, ye.useCallback)((ee => {
-         "open" === function(ee) {
- ... (61 more removed lines; see GitHub link above)
+     function XW(WW) {
+       return JW(WW)
```

#### 15. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L280-L366` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L139-L140) · [Before (L280-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L280-L366)

```diff
-     function Hi() {
-       const {
-         userContext: ee
-       } = (0, we.b)(), ie = (0, fe.usePurchasesAllowed)(), [He, Me] = (0, ye.useState)(Pe.k);
-       (0, ye.useEffect)((() => (Me((0, Pe.k)()), (0, Pe.m)(Me))), []);
-       const Ke = (0, De.c)(ee);
-       ! function(ee, ie, He) {
-         const [Me, Ke] = (0, ye.useState)(0);
-         (0, ye.useEffect)((() => {
-           if (!ie || null === ee) return;
-           if (null !== He) return void(0, De.D)(ee, (0, Pe.d)());
-           if (null !== (0, De.h)(ee)) return;
-           let ye, Me = !1;
-           return (0, pe.getBillingClient)().getOfferings(be).then((ie => {
-             let {
-               offering: He
- ... (71 more removed lines; see GitHub link above)
+     function BW(WW) {
+       return hW(WW)
```

#### 16. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L388-L399` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L144) · [Before (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L388-L399)

```diff
-       let {
-         endsAt: ie,
-         className: He
-       } = ee;
-       return (0, qe.jsxs)("span", {
-         className: Me()("NewPlayerDealClock", He),
-         children: [(0, qe.jsx)(Je.e, {
-           name: "hourglass"
-         }), (0, qe.jsx)(Fe.f, {
-           toTime: ie
-         })]
-       })
+       return 0 !== nW(WW)
```

#### 17. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L403-L447` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L148) · [Before (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L403-L447)

```diff
-       let {
-         offered: ie,
-         needsLogin: He,
-         busy: ye,
-         highlight: be,
-         onBuy: Fe
-       } = ee;
-       const {
-         t: Je
-       } = (0, Ke.v)(), {
-         pack: fe
-       } = ie, Te = (0, Re.h)(ie.package);
-       return (0, qe.jsxs)("div", {
-         className: Me()("NewPlayerDealPack", {
-           NewPlayerDealPackHighlight: be
-         }),
- ... (29 more removed lines; see GitHub link above)
+       return uW(WW)
```

#### 18. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L451-L484` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L152) · [Before (L451-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L451-L484)

```diff
-       let {
-         view: ie,
-         needsLogin: He,
-         busy: be,
-         highlight: Ue,
-         onBuy: Fe
-       } = ee;
-       const {
-         t: Je
-       } = (0, Ke.v)();
-       return (0, qe.jsxs)("div", {
-         className: Me()("NewPlayerDealPacks", ie.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
-         children: [ie.packs.map(((ee, ie) => (0, qe.jsxs)(ye.Fragment, {
-           children: [ie > 0 && (0, qe.jsx)("div", {
-             className: "NewPlayerDealDivider",
-             "aria-hidden": !0,
- ... (18 more removed lines; see GitHub link above)
+       return 0 !== HW(WW)
```

#### 19. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L514-L518` → after: `L155-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L155-L159) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L514-L518)

```diff
-     function de(ee, ie) {
-       null !== ee && (0, Xe.q)(ee) || ((0, be.reportAnalyticsClick)({
-         id: "store.purchase_done",
-         value: `self:${ie.pack.packageId}`
-       }), null !== ee && (0, Xe.t)(ee), te(ie.pack.gems))
+     function IW(WW) {
+       const iW = oW(WW);
+       if (void 0 === iW || iW.startsWith(tW.q)) return null === iW || void 0 === iW ? void 0 : iW.slice(tW.q.length);
+       const OW = (0, wW.d)(WW);
+       return void 0 === OW ? void 0 : `${OW}${tW.s}${iW}`
```

#### 20. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L521-L536` → after: `L162-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L162-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L162-L174) · [Before (L521-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L521-L536)

```diff
-     function We(ee, ie, He) {
-       const be = (0, Xe.c)(ie);
-       switch (ee.kind) {
-         case "completed":
-           de(be, He);
-           break;
-         case "pending":
-           Me = ee.intentId, Ke = () => {
-             pe.h.refresh(), de(be, He)
-           }, Oe || (Oe = !0, ge.listen()), ge.follow(Me, Ke);
-           break;
-         case "unknownPackage":
-           (0, Xe.H)(ie, null);
-           break;
-         case "failed":
-           ee.errorKey === ye.c.newPlayerDealUnavailable && (0, Xe.H)(ie, null)
+     function aW(WW) {
+       var iW;
+       return null !== (iW = dW(WW)) && void 0 !== iW ? iW : ZW
+     }
+     let rW = null;
+ 
+     function zW() {
+       if (null === rW) {
+         const WW = [],
+           iW = new tW.u(EW);
+         let OW = 0;
+         for (; !iW.done;) OW += (0, tW.I)(iW.next()), WW.push(OW);
+         rW = Object.freeze(WW)
```

#### 21. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L538` → after: `L176-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L176-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L176-L189) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L538)

```diff
-       var Me, Ke
+       return rW
+     }
+ 
+     function FW(WW) {
+       return eW(WW)
+     }
+ 
+     function QW(WW, iW) {
+       var OW;
+       return 0 !== ((null !== (OW = vW(WW)) && void 0 !== OW ? OW : 0) & iW)
+     }
+ 
+     function Wi(WW) {
+       return QW(WW, tW.d.OnlyInSearch)
```

#### 22. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L542-L549` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L193) · [Before (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L542-L549)

```diff
-       Re.NotificationProvider.showCustomPopup({
-         body: ie => (0, Ee.jsx)(Ze, {
-           gems: ee,
-           close: ie
-         }),
-         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
-         disableExitButton: !0
-       })
+       return QW(WW, tW.d.OnlyInCategory)
```

#### 23. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L553-L576` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L197) · [Before (L553-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L553-L576)

```diff
-       let {
-         gems: ie,
-         close: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, oe.v)();
-       return (0, Ee.jsxs)("div", {
-         className: "NewPlayerDealAdded",
-         children: [(0, Ee.jsxs)("div", {
-           className: "NewPlayerDealAddedHead",
-           children: [(0, Ee.jsx)(fe.e, {
-             name: "circle-check"
-           }), (0, Ee.jsx)(Te.d, {
-             amount: ie
-           }), (0, Ee.jsx)("span", {
- ... (8 more removed lines; see GitHub link above)
+       return QW(WW, tW.d.DevOnly)
```

#### 24. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L580-L605` → after: `L201-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L201-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L201-L221) · [Before (L580-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L580-L605)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.b;
-       const {
-         userContext: He
-       } = (0, ke.b)(), {
-         purchaseUnderWay: ye,
-         notice: be,
-         buy: Fe
-       } = (0, Ue.c)(ie), Je = (0, ze.k)(), oe = He.mayBuy() || (0, Me.guestsMayBuy)(), Re = null === Je ? !oe : Je.guest && !He.isLoggedIn();
-       return {
-         purchaseUnderWay: ye,
-         notice: be,
-         needsLogin: Re,
-         buyPack: function(ye, be) {
-           (0, Xe.z)("new_player_deal.buy", (0, Be.b)(ye.arm, ee, be.pack.packageId)), null === Je ? Fe(function(ee) {
-             return {
-               sku: ee.pack.packageId,
- ... (10 more removed lines; see GitHub link above)
+       return !QW(WW, tW.d.HiddenByDefault) && void 0
+     }
+ 
+     function Ei(WW, iW, OW, mW) {
+       var EW;
+       const NW = null !== (EW = vW(WW)) && void 0 !== EW ? EW : 0;
+       return 0 !== (NW & tW.d.DisabledInPublicLobbies) && iW || 0 !== (NW & tW.d.DisabledInProduction) && !0 || !OW || !mW && 0 !== (NW & tW.d.DevOnly)
+     }
+     let Ni = null;
+ 
+     function Pi() {
+       if (null === Ni) {
+         const WW = PW.split(tW.s),
+           iW = new Map,
+           OW = new tW.u(NW);
+         let mW = 0,
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L609-L610` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/224.js#L227) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/224.js#L609-L610)

```diff
-   },
-   34947: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   34972: (ee, ie, He) => {
+   35240: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L9-L20` → after: `L10-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L10-L40) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L9-L20)

```diff
-     var ye = He(3580);
- 
-     function be() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const ee = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const ie = new BroadcastChannel(ye.k);
-         ie.postMessage({
-           stored: ee
-         }), ie.close()
-       } catch {
-         return null
+     var mW = OW(62);
+     const EW = new class {
+       constructor() {
+         this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
+       }
+       getInFlight(WW) {
+         var iW;
+         return null !== (iW = this.inFlight.get(WW)) && void 0 !== iW ? iW : 0
+       }
+       setInFlight(WW, iW) {
+         this.getInFlight(WW) !== iW && (this.inFlight.set(WW, iW), this.notify())
+       }
+       subscribe(WW) {
+         return this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         }
+ ... (15 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L22` → after: `L42-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L42-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L42-L54) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L22)

```diff
-       return ee
+       notify() {
+         for (const WW of this.listeners) WW()
+       }
+     };
+ 
+     function NW(WW, iW) {
+       const [OW, NW] = (0, mW.useState)((() => EW.getInFlight(WW)));
+       return (0, mW.useLayoutEffect)((() => {
+         const iW = () => {
+           NW(EW.getInFlight(WW))
+         };
+         return iW(), EW.subscribe(iW)
+       }), [WW]), Math.max(0, iW - OW)
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L25-L27` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L57-L61) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L25-L27)

```diff
-     function Me(ee) {
-       const ie = "object" === typeof ee && null !== ee ? ee.stored : null;
-       return "string" === typeof ie ? ie : null
+     function PW(WW, iW) {
+       let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+       (0, mW.useLayoutEffect)((() => {
+         if (OW) return EW.addLanding(WW, iW.current)
+       }), [WW, iW, OW])
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L30` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L64) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L30)

```diff
-   34968: (ee, ie, He) => {
+   40748: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L32-L34` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L66) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L32-L34)

```diff
-       c: () => Ke,
-       g: () => be,
-       j: () => Me
+       e: () => EW
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L36-L47` → after: `L68-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L68-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L68-L252) · [Before (L36-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L36-L47)

```diff
-     var ye = He(3580);
-     async function be(ee, ie, He) {
-       let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const Me = Ke(await ee.getItem(ye.g, ie));
-       if (null === Me || be()) return null;
-       const Ue = await ee.getItem(ye.i, ie);
-       return be() ? null : (await async function(ee) {
-         await Promise.all([ee.removeItem(ye.g), ee.removeItem(ye.i)])
-       }(ee).catch(He), {
-         pack: Me,
-         source: "string" === typeof Ue ? Ue : null
-       })
+     var mW = OW(40751);
+     async function EW() {
+       const {
+         averageColors: WW
+       } = await OW.e(234).then((() => OW(35332)));
+       return new mW.d(WW)
+     }
+   },
+   40719: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => cW
+     });
+     var mW = OW(37917),
+       EW = OW(1172),
+       NW = OW(1244),
+       PW = OW(39679),
+ ... (169 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L50-L53` → after: `L302-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L302-L306) · [Before (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L50-L53)

```diff
-     function Me(ee) {
-       return (0, ye.s)() ? Promise.resolve(null) : be(ee, !1, (ee => {
-         console.error("Error removing temporary texture pack: ", ee)
-       }), ye.s)
+     function HW() {
+       const WW = new Image;
+       WW.src = TW, WW.decode().catch((WW => {
+         console.error("[greenville] backpack art failed to load", WW)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L57-L59` → after: `L350-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L350-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L350-L360) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L57-L59)

```diff
-       if ("object" !== typeof ee || null === ee) return null;
-       const ie = ee.metaData;
-       return "object" !== typeof ie || null === ie || "string" !== typeof ie.id ? null : ee
+       let {
+         controller: iW
+       } = WW;
+       (0, SW.g)(bW, null), (0, cW.useEffect)(HW, []);
+       const OW = iW.getView();
+       return null === OW ? null : (0, JW.jsx)(MW.h, {
+         placement: "bottomLeft",
+         children: (0, JW.jsx)(vW, {
+           view: OW
+         })
+       })
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L61-L62` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L362) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L61-L62)

```diff
-   },
-   54284: (ee, ie, He) => {
+ 
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L64` → after: `L364-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L364-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L364-L490) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L64)

```diff
-       return null === ee.gameSource ? "player" : "customGame"
+       let {
+         view: iW
+       } = WW;
+       const {
+         t: OW
+       } = (0, yW.B)(), {
+         isTouchScreen: mW
+       } = (0, sW.p)(["isTouchScreen"]), [EW, NW] = (0, cW.useState)([]), PW = (0, cW.useRef)(null), LW = (0, cW.useRef)(null), wW = (0, cW.useRef)([]), tW = (0, cW.useRef)({
+         arrival: iW.arrival,
+         showToken: iW.showToken
+       }), {
+         arrival: ZW,
+         showToken: xW
+       } = iW;
+       (0, cW.useLayoutEffect)((() => {
+         var WW;
+ ... (111 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L75` → after: `L494-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L494-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L494-L507) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L75)

```diff
-       return "" === ee || "string" === typeof ee && be.test(ee)
+       let {
+         shards: iW,
+         shardsPerItem: OW
+       } = WW;
+       return (0, JW.jsx)("div", {
+         className: "GreenvilleBackpackShards",
+         children: Array.from({
+           length: OW
+         }, ((WW, OW) => (0, JW.jsx)("span", {
+           className: kW()("GreenvilleBackpackShard", {
+             Filled: OW < iW
+           })
+         }, OW)))
+       })
```

#### 13. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L79-L82` → after: `L511-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L511-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L511-L550) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L79-L82)

```diff
-       return "object" === typeof ee && null !== ee && ("earth" === ee.type || Object.entries(ee).every((ee => {
-         let [ie, He] = ee;
-         return "type" === ie || Me(He)
-       })))
+       let {
+         drop: iW,
+         onLanded: OW
+       } = WW;
+       const mW = (0, cW.useRef)(null);
+       return (0, cW.useLayoutEffect)((() => {
+         const {
+           driftEm: WW,
+           spinDeg: EW
+         } = iW, NW = mW.current.animate([{
+           transform: `translate(${WW}em, -3.2em) rotate(${EW}deg) scale(1.2)`,
+           opacity: 0
+         }, {
+           transform: `translate(${.7*WW}em, -2.4em) rotate(${.7*EW}deg) scale(1.1)`,
+           opacity: 1,
+           offset: .25
+ ... (24 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L84-L89` → after: `L552-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L552-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L552-L558) · [Before (L84-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L84-L89)

```diff
-     const Ue = /(?:src|image|image-set|cross-fade)\(/i,
-       Fe = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
-       Je = /url\(/gi,
-       oe = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
-       Re = new Set([...oe.map((ee => new URL(ee).origin)), "https://fonts.gstatic.com"]),
-       ke = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
+     var VW = OW(80),
+       pW = OW(35243),
+       fW = OW(3332),
+       CW = OW(3599),
+       XW = OW(35240);
+     const BW = "gold",
+       qW = "Gold Coin";
```

#### 15. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L91` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L560) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L91)

```diff
-     function qe(ee) {
+     function RW() {
```

#### 16. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L93-L110` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L562) · [Before (L93-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L93-L110)

```diff
-       if (ee.includes("\\") || Ue.test(ee)) return !0;
-       const ye = [...ee.matchAll(Fe)];
-       return ye.length !== (null !== (ie = null === (He = ee.match(Je)) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0) || !ye.every((ee => {
-         var ie, He, ye;
-         let {
-           groups: be
-         } = ee;
-         return function(ee) {
-           try {
-             return oe.every((ie => {
-               const He = new URL(ee, ie);
-               return "data:" === He.protocol || Re.has(He.origin) || ke.has(He.href)
-             }))
-           } catch {
-             return !1
-           }
- ... (2 more removed lines; see GitHub link above)
+       return null !== (WW = null === (iW = (0, fW.e)("currencyAmounts")) || void 0 === iW ? void 0 : iW[BW].amount) && void 0 !== WW ? WW : 0
```

#### 17. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L114-L117` → after: `L583-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L583-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L583-L591) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L114-L117)

```diff
-       var ie, He, ye, be, Ue, Fe, Je;
-       const oe = [...Object.values(null !== (ie = ee.textureOverrides) && void 0 !== ie ? ie : {}), ...Object.values(null !== (He = ee.modelOverrides) && void 0 !== He ? He : {})],
-         Re = [...Object.values(null !== (ye = null === (be = ee.customCss) || void 0 === be ? void 0 : be.fontFaces) && void 0 !== ye ? ye : {}), ...Object.values(null !== (Ue = null === (Fe = ee.customCss) || void 0 === Fe ? void 0 : Fe.classStyles) && void 0 !== Ue ? Ue : {})]. … [truncated]
-       return !oe.every(Me) || !Object.values(null !== (Je = ee.skyBoxes) && void 0 !== Je ? Je : {}).every(Ke) || Re.some((ee => "string" === typeof ee && qe(ee)))
+       var iW;
+       let {
+         sounds: OW
+       } = WW;
+       const mW = null === (iW = (0, fW.e)("currencyAmounts")) || void 0 === iW ? void 0 : iW[BW];
+       return !mW || mW.hidden ? null : (0, JW.jsx)(zW, {
+         gold: mW.amount,
+         sounds: OW
+       })
```

#### 18. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L120-L135` → after: `L594-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L594-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L594-L630) · [Before (L120-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L120-L135)

```diff
-     function Te(ee, ie) {
-       if (null === ee || "player" === ie || !fe(ee)) return ee;
-       const He = {
-         ...ee
-       };
-       return ee.textureOverrides && (He.textureOverrides = Xe(ee.textureOverrides, Me, "texture")), ee.modelOverrides && (He.modelOverrides = Xe(ee.modelOverrides, Me, "model")), ee.skyBoxes && (He.skyBoxes = Xe(ee.skyBoxes, Ke, "sky")), ee.customCss && (He.customCss = function(e … [truncated]
-         const ie = ee => Xe(ee, (ee => "string" === typeof ee && !qe(ee)), "CSS"),
-           {
-             fontFaces: He,
-             classStyles: ye
-           } = pe(ee) ? ee : {},
-           be = {};
-         for (const [Me, Ke] of Object.entries(pe(ye) ? ye : {})) be[Me] = ie(Ke);
-         return {
-           fontFaces: (Array.isArray(He) ? He : []).map(ie),
-           classStyles: be
+     function zW(WW) {
+       let {
+         gold: iW,
+         sounds: OW
+       } = WW;
+       const mW = (0, CW.e)(),
+         [EW, NW] = (0, cW.useState)([]),
+         PW = (0, cW.useRef)(null),
+         LW = (0, cW.useRef)(null),
+         wW = (0, cW.useRef)(null),
+         tW = (0, cW.useRef)(null),
+         ZW = (0, cW.useRef)(iW);
+       (0, cW.useLayoutEffect)((() => {
+         const WW = iW - ZW.current;
+         if (ZW.current = iW, !(WW <= 0) && (OW.onGain(), !mW && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
+           const iW = function(WW) {
+ ... (21 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L137` → after: `L632-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L632-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L632-L682) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L137)

```diff
-       }(ee.customCss)), He
+       }), [iW]), (0, cW.useEffect)((() => () => {
+         var WW;
+         null === (WW = wW.current) || void 0 === WW || WW.cancel()
+       }), []), (0, cW.useLayoutEffect)((() => () => {
+         XW.b.setInFlight(BW, 0)
+       }), []);
+       const xW = (0, cW.useCallback)(((WW, iW) => {
+           tW.current = iW, OW.onCoinLanded(WW.step, WW.steps), NW((iW => iW.filter((iW => {
+             let {
+               id: OW
+             } = iW;
+             return OW !== WW.id
+           }))))
+         }), [OW]),
+         lW = EW.length,
+         AW = (0, cW.useRef)(lW);
+ ... (35 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L141-L153` → after: `L686-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L686-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L686-L745) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L141-L153)

```diff
-       return "object" === typeof ee && null !== ee && !Array.isArray(ee)
-     }
- 
-     function Xe(ee, ie, He) {
-       const ye = Object.entries(pe(ee) ? ee : {}),
-         be = ye.filter((ee => {
-           let [, He] = ee;
-           return !ie(He)
-         }));
-       if (be.length > 0) {
-         const ee = be.map((ee => {
-           let [ie] = ee;
-           return ie
+       let {
+         coin: iW,
+         target: OW,
+         onLanded: mW
+       } = WW;
+       const EW = (0, cW.useRef)(null),
+         [NW] = (0, cW.useState)((() => XW.b.getLanding(BW))),
+         [PW, LW] = (0, cW.useState)(null !== NW);
+       return (0, cW.useEffect)((() => {
+         const WW = (null !== NW && void 0 !== NW ? NW : OW.current).getBoundingClientRect(),
+           {
+             burst: PW
+           } = iW,
+           cW = window.innerWidth / 2,
+           wW = window.innerHeight / 2,
+           tW = WW.left + WW.width / 2,
+ ... (44 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L155-L160` → after: `L747-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L747-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L747-L759) · [Before (L155-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L155-L160)

```diff
-         console.warn(`Ignoring a custom game texture pack's ${He} files that name another site: ${ee.join(", ")}`)
-       }
-       return Object.fromEntries(ye.filter((ee => {
-         let [, He] = ee;
-         return ie(He)
-       })))
+         return () => {
+           AW(), lW.onfinish = null, lW.cancel()
+         }
+       }), [iW, OW, NW, mW]), (0, JW.jsx)("div", {
+         ref: EW,
+         className: kW()("GreenvilleGoldCoin", {
+           IntoMenu: PW
+         }),
+         children: (0, JW.jsx)(KW.b, {
+           itemName: qW,
+           amount: 0
+         })
+       })
```

#### 22. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L184-L185` → after: `L762-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L762-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L762-L777) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L184-L185)

```diff
-       constructor(ee) {
-         this.host = ee, this.ready = void 0, this.state = qe, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+       constructor(WW, iW, OW) {
+         this.pacer = WW, this.send = iW, this.onAnswersTimedOut = OW, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
+           if (!this.flushing) {
+             this.flushing = !0;
+             try {
+               for (; this.queued.length > 0 && this.pacer.tryStart();) {
+                 const WW = this.queued.shift();
+                 this.unanswered.push(WW), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(WW)
+               }
+             } finally {
+               this.flushing = !1
+             }
+           }
+         }, this.onAnswerTimeout = () => {
+           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
+         }, WW.subscribe(this.flush)
```

#### 23. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L187-L190` → after: `L779-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L779-L780) · [Before (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L187-L190)

```diff
-       readyWithin(ee) {
-         return Promise.race([this.ready, new Promise((ie => {
-           setTimeout(ie, ee)
-         }))])
+       getPending() {
+         return [...this.unanswered, ...this.queued]
```

#### 24. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L192-L193` → after: `L782-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L782-L783) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L192-L193)

```diff
-       current() {
-         return this.state
+       sZ() {
+         return 0 === this.unanswered.length && 0 === this.queued.length
```

#### 25. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L195-L199` → after: `L785-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L785-L786) · [Before (L195-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L195-L199)

```diff
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
-         }
+       getLastSent() {
+         return this.unanswered.at(-1)
```

#### 26. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L201-L204` → after: `L788-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L788-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L788-L790) · [Before (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L201-L204)

```diff
-       onPlayerPackChange(ee) {
-         return this.ownListeners.add(ee), () => {
-           this.ownListeners.delete(ee)
-         }
+       getLastPending() {
+         var WW;
+         return null !== (WW = this.queued.at(-1)) && void 0 !== WW ? WW : this.unanswered.at(-1)
```

#### 27. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L206-L207` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L792-L793) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L206-L207)

```diff
-       isUsingCustomGameTexturePack(ee) {
-         return (0, Re.g)(this.state, ee)
+       push(WW) {
+         this.queued.push(WW), this.flush()
```

#### 28. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L209-L210` → after: `L795-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L795-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L795-L797) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L209-L210)

```diff
-       setGamePackConfirm(ee) {
-         this.confirmGamePack = ee
+       dropWaiting() {
+         const WW = this.queued.length > 0;
+         return this.queued = [], WW
```

#### 29. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L212-L217` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L799-L802) · [Before (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L212-L217)

```diff
-       subscribe(ee) {
-         return this.listeners.set(ee, null), this.ready.then((() => {
-           this.deliver(ee)
-         })), () => {
-           this.listeners.delete(ee)
-         }
+       takeAnswer() {
+         var WW;
+         const iW = null !== (WW = this.unanswered.shift()) && void 0 !== WW ? WW : null;
+         return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), iW
```

#### 30. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L219-L280` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L804-L805) · [Before (L219-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L219-L280)

```diff
-       async setPlayerPack(ee) {
-         const ie = pe(ee) ? null : ee;
-         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(ie), this.change({
-           pack: ie,
-           gameSource: null
-         }, !1);
-         const He = await this.storePlayerPack(ie);
-         return He && this.announce(), He
-       }
-       async packForGame(ee, ie, He) {
-         await this.readyWithin(Math.max(0, (null !== He && void 0 !== He ? He : performance.now() + oe.e) - performance.now()));
-         const be = ++this.picks,
-           Me = (0, ye.k)(ee) ? (0, ye.r)(ee) : null;
-         if (null === Me) return void this.usePlayerPack();
-         let Ke;
-         const Ue = function(ee) {
- ... (46 more removed lines; see GitHub link above)
+       clear() {
+         this.queued = [], this.unanswered = [], this.stopAnswerTimer()
```

#### 31. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L282-L298` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L807-L808) · [Before (L282-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L282-L298)

```diff
-       async readPlayerPack() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (null !== ee && this.ownAnnouncements.delete(ee)) return;
-         await this.ready;
-         const ie = this.ownChanges;
-         let He;
-         try {
-           He = await this.host.store.getItem(Ke.e, !0)
-         } catch (be) {
-           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", be)
-         }
-         if (this.xf || this.ownChanges !== ie) return;
-         const ye = Xe(He);
-         (0, ke.d)(ye, this.playerPack) || (this.ownChanges++, this.setOwn(ye), this.onGamePack || this.change({
-           pack: ye,
-           gameSource: null
- ... (1 more removed lines; see GitHub link above)
+       stopAnswerTimer() {
+         null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
```

#### 32. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L300-L301` → after: `L810-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L810-L813) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L300-L301)

```diff
-       joinedWithout() {
-         this.picks++
+     }
+     class Wi {
+       constructor(WW, iW, OW, mW) {
+         this.confirmed = WW, this.picks = void 0, this.picks = new QW(iW, OW, mW)
```

#### 33. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L303-L304` → after: `L815-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L815-L816) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L303-L304)

```diff
-       dispose() {
-         this.xf = !0, this.listeners.clear()
+       confirm(WW) {
+         this.confirmed = WW
```

#### 34. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L306-L321` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L818-L819) · [Before (L306-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L306-L321)

```diff
-       async readStored() {
-         const {
-           store: ee,
-           warn: ie
-         } = this.host;
-         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, Fe.g)(ee, !0, (ee => {
-           ie("the custom game's texture pack wasn't removed from storage", ee)
-         })).then((ee => {
-           this.takeOneShot(ee)
-         }), (ee => {
-           ie("the custom game's texture pack didn't read: the player's own shows", ee)
-         })), ee.getItem(Ke.e, !0).then((ee => {
-           this.takeStoredOwn(ee)
-         }), (ee => {
-           ie("the stored texture pack didn't read: the default pack shows", ee), this.takeStoredOwn(null)
-         }))]), this.update()
+       getLastPending() {
+         return this.picks.getLastPending()
```

#### 35. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L323` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L821) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L323)

```diff
-       takeOneShot(ee) {
+       getLatest() {
```

#### 36. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L325-L328` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L823) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L325-L328)

```diff
-         null === ee || this.xf || this.changes > 0 || this.picks > 0 || ((0, Je.j)(ee.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
-           pack: ee.pack,
-           gameSource: null !== (ie = ee.source) && void 0 !== ie ? ie : ""
-         }))
+         return null !== (WW = this.getLastPending()) && void 0 !== WW ? WW : this.confirmed
```

#### 37. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L330-L354` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L825-L826) · [Before (L330-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L330-L354)

```diff
-       takeStoredOwn(ee) {
-         if (this.playerPicked || this.xf) return;
-         if (this.ownChanges++, this.setOwn(Xe(ee)), this.onGamePack) return;
-         const ie = {
-           pack: this.playerPack,
-           gameSource: null
-         };
-         0 === this.changes ? this.state = ie : this.change(ie, !1)
-       }
-       async update() {
-         const ee = this.playerPack,
-           ie = null === ee || void 0 === ee ? void 0 : ee.metaData.id;
-         if (!ee || !ie || !this.host.fetchLatest || ie === be.b || ie === be.o.CUSTOM) return;
-         const He = be.s[ie];
-         if (void 0 === He || ee.metaData.version >= He) return;
-         let ye;
- ... (9 more removed lines; see GitHub link above)
+       sZ() {
+         return this.picks.sZ()
```

#### 38. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L356-L358` → after: `L828-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L828-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L828-L831) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L356-L358)

```diff
-       announce() {
-         const ee = (0, Ue.c)();
-         null !== ee && this.ownAnnouncements.add(ee)
+       pushLatest(WW) {
+         var iW;
+         const OW = null !== (iW = this.picks.getLastSent()) && void 0 !== iW ? iW : this.confirmed;
+         this.picks.dropWaiting() && WW === OW || this.picks.push(WW)
```

#### 39. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L360-L366` → after: `L833-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L833-L834) · [Before (L360-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L360-L366)

```diff
-       setOwn(ee) {
-         this.playerPack = ee;
-         for (const He of [...this.ownListeners]) try {
-           He()
-         } catch (ie) {
-           this.host.warn("a texture pack listener threw", ie)
-         }
+       takeAnswer() {
+         this.picks.takeAnswer()
```

#### 40. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L368-L372` → after: `L836-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L836-L837) · [Before (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L368-L372)

```diff
-       usePlayerPack() {
-         this.onGamePack && this.change({
-           pack: this.playerPack,
-           gameSource: null
-         }, !1)
+       clear() {
+         this.picks.clear()
```
