# Changed — Bundle Modifications Report (Part 017 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `17 / 82` (**269** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (274 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 34. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L655-L668` → after: `L505-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L505-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L505-L524) · [Before (L655-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L655-L668)

```diff
-     function tb(ee) {
-       var ie;
-       const He = globalThis._posthogChunkIds,
-         ye = globalThis._debugIds;
-       if (!He && !ye) return;
-       const be = He ? Object.keys(He) : [],
-         Me = ye ? Object.keys(ye) : [];
-       if (Wb && Zb(He, be, Ob) && Zb(ye, Me, db)) return Wb;
-       Ob = He ? Eb({}, He) : void 0, db = ye ? Eb({}, ye) : void 0, Wb = {}, null !== (ie = gb) && void 0 !== ie || (gb = {});
-       const Ke = (ie, He) => {
-         for (const be of ie) {
-           const ie = He[be];
-           if (!ie) continue;
-           const Me = null == gb ? void 0 : gb[be];
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

#### 35. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L670-L676` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L526-L530) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L670-L676)

```diff
-             Wb[Me] = ie;
-             continue
-           }
-           const Ke = ee(be);
-           for (let ee = Ke.length - 1; ee >= 0; ee--) {
-             var ye;
-             const He = null === (ye = Ke[ee]) || void 0 === ye ? void 0 : ye.filename;
+             if (NW) return WW;
+             const {
+               rawBoundingInfo: LW,
+               intersectionThreshold: wW
+             } = sW(tW), ZW = tW._thinInstanceDataStorage.matrixData;
```

#### 36. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L678-L679` → after: `L532-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L532-L542) · [Before (L678-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L678-L679)

```diff
-               Wb[He] = ie, gb[be] = He;
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

#### 37. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L683-L684` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L549-L550) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L683-L684)

```diff
-       };
-       return ye && Ke(Me, ye), He && Ke(be, He), Wb
+       }
+       return cW || new LW.b
```

#### 38. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L687-L858` → after: `L553-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L553-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L553-L583) · [Before (L687-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L687-L858)

```diff
-     function Zb(ee, ie, He) {
-       return ee && He ? ie.length === Object.keys(He).length && ie.every((ie => ee[ie] === He[ie])) : ee === He
-     }
-     var wb = class {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         this.coercers = ee, this.stackParser = ie, this.modifiers = He
-       }
-       buildFromUnknown(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const He = ie && ie.mechanism || {
-             handled: !0,
-             type: "generic"
-           },
-           ye = this.buildCoercingContext(He, ie, 0).apply(ee),
-           be = this.buildParsingContext(ie),
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

#### 39. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L885` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L587-L590) · [Before (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L885)

```diff
-         })
+         } else {
+           const WW = wW(null, iW, tW, lW, !1, !1, mW);
+           WW && NW.push(WW)
+         }
```

#### 40. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L887-L889` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L592-L593) · [Before (L887-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L887-L889)

```diff
-     };
-     const Db = /^([a-z][a-z0-9.+-]+):/i,
-       Pb = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+       return NW
+     }
```

#### 41. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L891-L894` → after: `L595-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L595-L603) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L891-L894)

```diff
-     function Ab(ee) {
-       if (!ee || "<anonymous>" === ee) return !1;
-       const ie = Db.exec(ee);
-       return !ie || Pb.includes(ie[1].toLowerCase())
+     function YW(WW, iW, OW, mW, NW, PW) {
+       if (!LW.b) return null;
+       const cW = KW(WW, (mW => (WW._tempPickingRay || (WW._tempPickingRay = ZW.Zero()), lW(WW, iW, OW, mW, WW._tempPickingRay, PW || null), WW._tempPickingRay)), mW, NW, !0);
+       return cW && (cW.ray = xW(WW, iW, OW, EW.d.Identity(), PW || null)), cW
+     }
+ 
+     function yW(WW, iW, OW, mW, NW, PW, LW) {
+       const cW = KW(WW, ((mW, EW) => (WW._tempPickingRay || (WW._tempPickingRay = ZW.Zero()), lW(WW, iW, OW, mW, WW._tempPickingRay, PW || null, !1, EW), WW._tempPickingRay)), mW, NW, !1, LW);
+       return cW && (cW.ray = xW(WW, iW, OW, EW.d.Identity(), PW || null)), cW
```

#### 42. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L898-L904` → after: `L607-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L607-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L607-L616) · [Before (L898-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L898-L904)

```diff
-       const Me = {
-         platform: ee,
-         filename: ie,
-         function: "<anonymous>" === He ? "?" : He,
-         in_app: Ab(ie)
-       };
-       return tH(ye) || (Me.lineno = ye), tH(be) || (Me.colno = be), Me
+       const PW = KW(WW, (OW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = EW.d.Identity()), OW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = ZW.Zero()), ZW.TransformToRef(iW, WW._pickWithRayInverseMatrix … [truncated]
+       return PW && (PW.ray = iW), PW
+     }
+ 
+     function JW(WW, iW, OW, mW, EW, NW) {
+       return SW(WW, (mW => xW(WW, iW, OW, mW, EW || null)), mW, NW)
+     }
+ 
+     function hW(WW, iW, OW, mW) {
+       return SW(WW, (OW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = EW.d.Identity()), OW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = ZW.Zero()), ZW.TransformToRef(iW, WW._pickWithRayInverseMatrix, WW … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L947-L985` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L620-L627) · [Before (L947-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L947-L985)

```diff
-       return ee.filename === ie.filename && ee.function === ie.function && ee.module === ie.module && ee.lineno === ie.lineno && ee.colno === ie.colno
-     }
- 
-     function Sb(ee) {
-       for (let ie = 1; 10 >= ie; ie++) {
-         const He = ee.length - 2 * ie;
-         if (0 > He) break;
-         let ye = !0;
-         for (let be = 0; ie > be; be++)
-           if (!lb(ee[He + be], ee[He + ie + be])) {
-             ye = !1;
-             break
-           } if (ye) {
-           for (let ye = 0; ie > ye; ye++) ee[He + ye] = ee[He + ie + ye];
-           return ee.length = He + ie, {
-             start: He,
- ... (23 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+         mW = arguments.length > 3 ? arguments[3] : void 0,
+         NW = arguments.length > 4 ? arguments[4] : void 0;
+       mW || (mW = WW.getWorldMatrix()), iW.length = OW, NW ? iW.origin.HJ(NW) : iW.origin.HJ(WW.position);
+       const PW = EW.l.fA[2];
+       PW.set(0, 0, WW._scene.useRightHandedSystem ? -1 : 1);
+       const LW = EW.l.fA[3];
+       return EW.q.TransformNormalToRef(PW, mW, LW), EW.q.NormalizeToRef(LW, iW.direction), iW
```

#### 44. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L989-L1001` → after: `L631-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L631-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L631-L640) · [Before (L989-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L989-L1001)

```diff
-       const He = ie[0];
-       let ye = ee.length - (He ? jb(ee, He) : 0);
-       for (const be of ie) ye -= sb(ee, be);
-       return ye
-     }
- 
-     function hb(ee, ie, He) {
-       for (let ye = 0; ee.length > ye; ye++) {
-         const be = ee[(ie + ye) % ee.length],
-           Me = ee[(He + ye) % ee.length];
-         if (be !== Me) return Me > be
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

#### 45. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1003-L1014` → after: `L642-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L642-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L642-L702) · [Before (L1003-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1003-L1014)

```diff
-     var Nb = class {
-         match(ee) {
-           return this.isDOMException(ee) || this.isDOMError(ee)
-         }
-         coerce(ee, ie) {
-           const He = ZH(ee.stack);
-           return {
-             type: this.getType(ee),
-             value: this.getValue(ee),
-             stack: He ? ee.stack : void 0,
-             cause: ee.cause ? ie.next(ee.cause) : void 0,
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

#### 46. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1016-L1045` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L704-L705) · [Before (L1016-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1016-L1045)

```diff
-         }
-         getType(ee) {
-           return this.isDOMError(ee) ? "DOMError" : "DOMException"
-         }
-         getValue(ee) {
-           const ie = ee.name || (this.isDOMError(ee) ? "DOMError" : "DOMException");
-           return ee.message ? `${ie}: ${ee.message}` : ie
-         }
-         isDOMException(ee) {
-           return LH(ee, "DOMException")
-         }
-         isDOMError(ee) {
-           return LH(ee, "DOMError")
-         }
-       },
-       Gb = class {
- ... (14 more removed lines; see GitHub link above)
+           set shadowFrustumSize(WW) {
+             this._shadowFrustumSize = WW, this.forceProjectionMatrixCompute()
```

#### 47. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1047-L1062` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L707-L708) · [Before (L1047-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1047-L1062)

```diff
-         }
-         getType(ee) {
-           return ee.name || ee.constructor.name
-         }
-         getMessage(ee, ie) {
-           const He = ee.message;
-           return String(He.error && "string" == typeof He.error.message ? He.error.message : He)
-         }
-         getStack(ee) {
-           try {
-             const ie = ee.stacktrace;
-             if ("string" == typeof ie && ie.length > 0) return ie;
-             const He = ee.stack;
-             return "string" == typeof He && He.length > 0 ? He : void 0
-           } catch (ee) {
-             return
+           get shadowOrthoScale() {
+             return this._shadowOrthoScale
```

#### 48. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1064-L1136` → after: `L710-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L710-L711) · [Before (L1064-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1064-L1136)

```diff
-         }
-       },
-       rb = class {
-         match(ee) {
-           return !!LH(ee, "ErrorEvent") && (null != ee.error || this._hasUsableMessage(ee))
-         }
-         coerce(ee, ie) {
-           var He;
-           if (null != ee.error) return ie.apply(ee.error);
-           const ye = ie.apply(ee.message);
-           return Eb(Eb({}, ye), {}, {
-             stack: null !== (He = this._buildLocationStack(ee)) && void 0 !== He ? He : ye.stack,
-             synthetic: !0
-           })
-         }
-         _hasUsableMessage(ee) {
- ... (57 more removed lines; see GitHub link above)
+           set shadowOrthoScale(WW) {
+             this._shadowOrthoScale = WW, this.forceProjectionMatrixCompute()
```

#### 49. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1138-L1147` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L713-L714) · [Before (L1138-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1138-L1147)

```diff
-         }
-         getType(ee) {
-           if (vH(ee)) return ee.constructor.name;
-           const ie = "name" in ee ? ee.name : void 0;
-           return ZH(ie) && !wH(ie) ? ie : "Error"
-         }
-         getValue(ee) {
-           if ("name" in ee && "string" == typeof ee.name) {
-             let ie = `'${ee.name}' captured as exception`;
-             return "message" in ee && "string" == typeof ee.message && (ie += ` with message: '${ee.message}'`), ie
+           get orthoLeft() {
+             return this._orthoLeft
```

#### 50. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1149-L1160` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L716-L717) · [Before (L1149-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1149-L1160)

```diff
-           if ("message" in ee && "string" == typeof ee.message) return ee.message;
-           const ie = this.getObjectClassName(ee);
-           return `${ie&&"Object"!==ie?`'${ie}'`:"Object"} captured as exception with keys: ${HM(ee)}`
-         }
-         isSeverityLevel(ee) {
-           return ZH(ee) && !wH(ee) && iM.indexOf(ee) >= 0
-         }
-         getStack(ee) {
-           try {
-             return ZH(ee.stacktrace) && ee.stacktrace.length > 0 ? ee.stacktrace : ZH(ee.stack) && ee.stack.length > 0 ? ee.stack : void 0
-           } catch (ee) {
-             return
+           set orthoLeft(WW) {
+             this._orthoLeft = WW
```

#### 51. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1162-L1175` → after: `L719-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L719-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L719-L720) · [Before (L1162-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1162-L1175)

```diff
-         }
-         getErrorPropertyFromObject(ee) {
-           for (const ie in ee)
-             if ({}.hasOwnProperty.call(ee, ie)) {
-               const He = ee[ie];
-               if (CH(He)) return He
-             }
-         }
-         getObjectClassName(ee) {
-           try {
-             const ie = Object.getPrototypeOf(ee);
-             return ie ? ie.constructor.name : void 0
-           } catch (ee) {
-             return
+           get orthoRight() {
+             return this._orthoRight
```

#### 52. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1177-L1190` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L722-L723) · [Before (L1177-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1177-L1190)

```diff
-         }
-       },
-       bM = class {
-         match(ee) {
-           return vH(ee)
-         }
-         coerce(ee, ie) {
-           var He;
-           const ye = ee.constructor.name;
-           return {
-             type: ye,
-             value: `${ye} captured as exception with keys: ${HM(ee)}`,
-             stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
-             synthetic: !0
+           set orthoRight(WW) {
+             this._orthoRight = WW
```

#### 53. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1192-L1204` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L725-L726) · [Before (L1192-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1192-L1204)

```diff
-         }
-       },
-       MM = class {
-         match(ee) {
-           return xH(ee)
-         }
-         coerce(ee, ie) {
-           var He;
-           return {
-             type: "Error",
-             value: `Primitive value captured as exception: ${String(ee)}`,
-             stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
-             synthetic: !0
+           get orthoTop() {
+             return this._orthoTop
```

#### 54. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1206-L1218` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L728-L729) · [Before (L1206-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1206-L1218)

```diff
-         }
-       },
-       KM = class {
-         match(ee) {
-           return LH(ee, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(ee)
-         }
-         isCustomEventWrappingRejection(ee) {
-           if (!vH(ee)) return !1;
-           try {
-             const ie = ee.detail;
-             return null != ie && "object" == typeof ie && "reason" in ie
-           } catch (ee) {
-             return !1
+           set orthoTop(WW) {
+             this._orthoTop = WW
```

#### 55. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1220-L1267` → after: `L731-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L731-L732) · [Before (L1220-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1220-L1267)

```diff
-         }
-         coerce(ee, ie) {
-           var He;
-           const ye = this.getUnhandledRejectionReason(ee);
-           return xH(ye) ? {
-             type: "UnhandledRejection",
-             value: `Non-Error promise rejection captured with value: ${String(ye)}`,
-             stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
-             synthetic: !0
-           } : ie.apply(ye)
-         }
-         getUnhandledRejectionReason(ee) {
-           try {
-             if ("reason" in ee) return ee.reason;
-             if ("detail" in ee && null != ee.detail && "object" == typeof ee.detail && "reason" in ee.detail) return ee.detail.reason
-           } catch (ee) {}
- ... (32 more removed lines; see GitHub link above)
+           get orthoBottom() {
+             return this._orthoBottom
```

#### 56. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1269-L1282` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L734-L735) · [Before (L1269-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1269-L1282)

```diff
-           try {
-             const ee = JSON.parse(ie);
-             if (!dH(ee)) return;
-             const He = ee,
-               ye = He[UM],
-               be = He[FM];
-             if (!ZH(ye) || 0 === ye.trim().length) return;
-             if (!ZH(be) && !AH(be)) return;
-             return {
-               step: He,
-               json: ie
-             }
-           } catch (ee) {
-             return
+           set orthoBottom(WW) {
+             this._orthoBottom = WW
```

#### 57. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1284-L1311` → after: `L737-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L737-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L737-L919) · [Before (L1284-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1284-L1311)

```diff
-         }(ee);
-         if (!ie) return;
-         const He = function(ee) {
-           if ("u" > typeof TextEncoder) return (new TextEncoder).encode(ee).length;
-           const ie = encodeURIComponent(ee);
-           let He = 0;
-           for (let ye = 0; ie.length > ye; ye++) "%" === ie[ye] ? (He += 1, ye += 2) : He += 1;
-           return He
-         }(ie.json);
-         He > this._config.max_bytes || (this._entries.push({
-           step: ie.step,
-           bytes: He
-         }), this._totalBytes += He, this._trimToMaxBytes())
-       }
-       getAttachable() {
-         return this._entries.map((ee => ee.step))
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

#### 58. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1320-L1325` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L922-L924) · [Before (L1320-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1320-L1325)

```diff
-     const fM = ee => {
-       if ("string" != typeof ee) return ee;
-       try {
-         return JSON.parse(ee)
-       } catch (be) {
-         return ee
+     class NW {
+       constructor(WW, iW) {
+         this.gradient = WW, this.color = iW
```

#### 59. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1332-L1334` → after: `L927-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L927-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L927-L933) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1332-L1334)

```diff
- 
-     function pM(ee) {
-       return "string" == typeof ee ? ee : void 0
+     class PW {
+       constructor(WW, iW, OW) {
+         this.gradient = WW, this.factor1 = iW, this.factor2 = OW
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
```

#### 60. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1336-L1393` → after: `L935-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L935-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L935-L943) · [Before (L1336-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1336-L1393)

```diff
-     const XM = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
-       zM = "NativeGzipValidationError",
-       BM = ee => ee.length >= 2 && 31 === ee[0] && 139 === ee[1],
-       EM = (ee, ie) => ee === RH.GZipJS || ie === RH.GZipJS || "gzip" === ie,
-       gM = ee => !(!ee || "object" != typeof ee) && "NotReadableError" === ("name" in ee ? String(ee.name) : "");
-     let OM;
-     const dM = ee => {
-         throw Rb(zM, `Native gzip produced invalid output: ${ee}`)
-       },
-       WM = (tM = jH((function*(ee, ie) {
-         18 > ee.size && dM("too-short");
-         const He = new Uint8Array(yield ee.slice(0, 10).arrayBuffer());
-         BM(He) && 8 === He[2] || dM("invalid-header");
-         const ye = new DataView(yield ee.slice(ee.size - 8).arrayBuffer());
-         ye.getUint32(0, !0) !== (ee => {
-           const ie = (() => {
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

#### 61. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1395-L1412` → after: `L945-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L945-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L945-L946) · [Before (L1395-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1395-L1412)

```diff
-         var ye
-       })), ZM.apply(this, arguments)
-     }
- 
-     function wM(ee, ie) {
-       if (null == ee) return {};
-       var He, ye, be = function(ee, ie) {
-         if (null == ee) return {};
-         var He = {};
-         for (var ye in ee)
-           if ({}.hasOwnProperty.call(ee, ye)) {
-             if (ie.includes(ye)) continue;
-             He[ye] = ee[ye]
-           } return He
-       }(ee, ie);
-       if (Object.getOwnPropertySymbols) {
- ... (2 more removed lines; see GitHub link above)
+         const mW = iW.length - 1;
+         OW(iW[mW], iW[mW], 1)
```

#### 62. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1447-L1449` → after: `L949-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L949-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L949-L997) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1447-L1449)

```diff
- 
-     function HK(ee) {
-       return ee.split("&", 129).length > 128
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
+ ... (33 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1451-L1458` → after: `L999-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L999-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L999-L1053) · [Before (L1451-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1451-L1458)

```diff
- 
-     function yK(ee, ie, He) {
-       return iK(ee) || ie.includes(";") && function(ee) {
-         return ee.split(";").some((ee => iK(ee.split("=", 1)[0])))
-       }(ie) ? DM : vM.test(ie) ? He ? JK(ie, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : DM : ie
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

#### 64. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1460-L1470` → after: `L1055-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1055-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1055-L1062) · [Before (L1460-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1460-L1470)

```diff
- 
-     function bK(ee, ie) {
-       const He = new URLSearchParams;
-       let ye = !1,
-         be = !1;
-       for (const [Me, Ke] of new URLSearchParams(ee)) {
-         const ee = oK(Me),
-           Ue = oK(Ke);
-         ye || (ye = ee !== Me || Ue !== Ke);
-         const Fe = yK(ee, Ue, ie);
-         ye || (ye = Fe !== Ue), be = iK(ee) || Fe !== Ue, He.append(ee, Fe)
+     class LW extends PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new mW.q(0, 1, 0),
+           NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new mW.q(0, 1, 0);
+         super(WW, iW, OW), this.direction1 = EW, this.direction2 = NW
```

#### 65. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1472-L1475` → after: `L1064-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1064-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1064-L1091) · [Before (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1472-L1475)

```diff
-       return {
-         changed: ye,
-         lastFieldSensitive: be,
-         serialized: He.toString()
+       startDirectionFunction(WW, iW, OW, NW) {
+         const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
+           LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
+           cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
+         NW ? iW.yWW(PW, LW, cW) : mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
+       }
+       clone() {
+         const WW = new LW(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
+         return NW.c.DeepCopy(this, WW), WW
+       }
+       applyToShader(WW) {
+         WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
+       }
+       buildUniformLayout(WW) {
+         WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1478-L1487` → after: `L1094-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1094-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1094-L1144) · [Before (L1478-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1478-L1487)

```diff
- 
-     function MK(ee, ie) {
-       if (!ee.includes("=")) return {
-         value: KK(ee, ie),
-         lastFieldSensitive: !1
-       };
-       const He = bK(ee, ie);
-       return {
-         value: He.changed ? He.serialized : ee,
-         lastFieldSensitive: He.lastFieldSensitive
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
+ ... (35 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1490-L1495` → after: `L1147-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1147-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1147-L1193) · [Before (L1490-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1490-L1495)

```diff
- 
-     function KK(ee, ie) {
-       return ie ? JK(ee, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : vM.test(ee) ? DM : ee
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
+ ... (31 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1497-L1499` → after: `L1195-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1195-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1195-L1241) · [Before (L1497-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1497-L1499)

```diff
- 
-     function UK(ee, ie, He) {
-       return "#" === ee ? !ie.fragment && (ie.fragment = !0) : "?" === ee && (ie.fragment ? "=" !== He && !ie.fragmentQuery && (ie.fragmentQuery = !0) : !ie.query && (ie.query = !0))
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
+ ... (31 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1501-L1552` → after: `L1243-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1243-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1243-L1278) · [Before (L1501-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1501-L1552)

```diff
- 
-     function FK(ee, ie) {
-       var He;
-       if (ee.length > 8192 && mM.test(ee)) return DM;
-       const {
-         address: ye,
-         suffix: be
-       } = ie.stripPunctuation ? function(ee) {
-         let ie = ee.length;
-         for (; ie > 0 && ".,;:!?)]}'".includes(ee[ie - 1]);) ie--;
-         return {
-           address: ee.slice(0, ie),
-           suffix: ee.slice(ie)
-         }
-       }(ee) : {
-         address: ee,
- ... (36 more removed lines; see GitHub link above)
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

#### 70. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1554-L1600` → after: `L1280-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1280-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1280-L1345) · [Before (L1554-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1554-L1600)

```diff
- 
-     function JK(ee, ie) {
-       return ee.replace(LM, (He => function(ee, ie) {
-         const He = function(ee) {
-           if (!ee.includes("://")) return [];
-           const ie = [...ee.matchAll(lM)].map((ee => ee.index)),
-             He = [],
-             ye = {
-               query: !1,
-               fragment: !1,
-               fragmentQuery: !1
-             };
-           let be = 0,
-             Me = !1,
-             Ke = "";
-           for (let Ue = 0; ee.length > Ue && ie.length > be; Ue++) {
- ... (31 more removed lines; see GitHub link above)
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

#### 71. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1602-L1619` → after: `L1347-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1347-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1347-L1383) · [Before (L1602-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1602-L1619)

```diff
- 
-     function kK(ee) {
-       const ie = [];
-       for (let Me = rM.exec(ee); null !== Me; Me = rM.exec(ee)) ie.push({
-         digits: Me[0],
-         start: Me.index,
-         end: Me.index + Me[0].length
-       });
-       let He = "",
-         ye = 0,
-         be = 0;
-       for (; ie.length > be;) {
-         let Me = "",
-           Ke = -1;
-         for (let ee = be; ie.length > ee && (Me += ie[ee].digits, 19 >= Me.length); ee++) Me.length >= 13 && RK(Me) && (Ke = ee);
-         0 > Ke ? be++ : (He += ee.slice(ye, ie[be].start) + DM, ye = ie[Ke].end, be = Ke + 1)
- ... (2 more removed lines; see GitHub link above)
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

#### 72. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1621-L1630` → after: `L1385-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1385-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1385-L1439) · [Before (L1621-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1621-L1630)

```diff
-     const qK = {}.propertyIsEnumerable;
- 
-     function fK(ee, ie) {
-       try {
-         return XK(ee, ie, {
-           ancestors: new WeakSet,
-           remainingNodes: 1e4
-         }, 0)
-       } catch (ee) {
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

#### 73. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1633-L1670` → after: `L1442-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1442-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1442-L1444) · [Before (L1633-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1633-L1670)

```diff
- 
-     function TK(ee, ie, He, ye) {
-       if (0 >= He.remainingNodes) return {
-         stringValue: yb
-       };
-       if (He.remainingNodes--, VH(ee)) return {
-         boolValue: ee
-       };
-       if ("bigint" == typeof ee) return function(ee, ie) {
-         const He = ee.toString(),
-           ye = BigInt("9223372036854775808");
-         return ee >= ye || -ye > ee ? (null == ie || ie.debug(`Attribute ${He} is outside the int64 range; encoding it as a string`), {
-           stringValue: He
-         }) : {
-           intValue: He
-         }
- ... (22 more removed lines; see GitHub link above)
+     class SW {
+       get targetStopDuration() {
+         return this._targetStopDuration
```

#### 74. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1672-L1711` → after: `L1446-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1446-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1446-L1508) · [Before (L1672-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1672-L1711)

```diff
-       if ("string" == typeof ee) return {
-         stringValue: Mb(ee)
-       };
-       if ("function" == typeof ee) return {
-         stringValue: "[Function]"
-       };
-       if ("symbol" == typeof ee) return {
-         stringValue: String(ee)
-       };
-       if ("object" == typeof ee && null !== ee) {
-         if (He.ancestors.has(ee)) return {
-           stringValue: "[Circular]"
-         };
-         if (ye >= 20) return {
-           stringValue: yb
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

#### 75. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1714-L1715` → after: `L1512-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1512-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1512-L1513) · [Before (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1714-L1715)

```diff
-       return {
-         stringValue: Mb(String(ee))
+       getDragGradients() {
+         return this._dragGradients
```

#### 76. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1717-L1730` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1515-L1516) · [Before (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1717-L1730)

```diff
-     }
- 
-     function pK(ee, ie, He, ye) {
-       const be = [],
-         Me = Math.min(ee.length, 1e3);
-       let Ke = 0;
-       for (; Me > Ke && He.remainingNodes > 0; Ke++) try {
-         const Me = Ke in ee ? ee[Ke] : void 0;
-         if (PH(Me)) continue;
-         be.push(TK(Me, ie, He, ye))
-       } catch (ee) {
-         be.push({
-           stringValue: bb
-         })
+       getLimitVelocityGradients() {
+         return this._limitVelocityGradients
```

#### 77. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1732-L1746` → after: `L1518-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1518-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1518-L1606) · [Before (L1732-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1732-L1746)

```diff
-       return ee.length > Ke && be.push({
-         stringValue: yb
-       }), be
-     }
- 
-     function XK(ee, ie, He, ye) {
-       const be = [];
-       for (const Me in ee)
-         if (qK.call(ee, Me)) {
-           if (!Me) {
-             null == ie || ie.debug("Dropping an attribute with an empty key");
-             continue
-           }
-           if (be.length >= 1e3 || 0 >= He.remainingNodes) {
-             null == ie || ie.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
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

#### 78. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1749-L1824` → after: `L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1609) · [Before (L1749-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1749-L1824)

```diff
-           try {
-             const Ke = ee[Me];
-             if (DH(Ke) || tH(Ke)) continue;
-             be.push({
-               key: Mb(Me),
-               value: TK(Ke, ie, He, ye)
-             })
-           } catch (ee) {
-             be.push({
-               key: Mb(Me),
-               value: {
-                 stringValue: bb
-               }
-             })
-           }
-         } return be
- ... (60 more removed lines; see GitHub link above)
+           OW++
```

#### 79. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1835-L1857` → after: `L1612-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1612-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1612-L1614) · [Before (L1835-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1835-L1857)

```diff
-     }
- 
-     function tK(ee, ie, He, ye) {
-       const be = ee.level || "info",
-         {
-           text: Me,
-           number: Ke
-         } = OK[be] || dK,
-         Ue = function() {
-           let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-           return String(ee) + "000000"
-         }(AH(ye) ? ye : void 0),
-         Fe = {};
-       ie.distinctId && (Fe.posthogDistinctId = ie.distinctId), ie.sessionId && (Fe.sessionId = ie.sessionId), ie.windowId && (Fe["window.id"] = ie.windowId), PH(ie.sessionStartTimestamp) || (Fe.sessionStartTimestamp = String(ie.sessionStartTimestamp)), PH(ie.lastActivityTimestamp … [truncated]
-       const Je = Eb({}, Fe),
-         oe = ee.attributes;
- ... (7 more removed lines; see GitHub link above)
+       _removeGradientAndTexture(WW, iW, OW) {
+         if (!iW) return this;
+         let mW = 0;
```

#### 80. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1859-L1863` → after: `L1616-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1616-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1616-L1618) · [Before (L1859-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1859-L1863)

```diff
-           let ee;
-           try {
-             ee = oe[He]
-           } catch (ie) {
-             ee = bb
+           if (EW.gradient === WW) {
+             iW.splice(mW, 1);
+             break
```

#### 81. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1865-L1870` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1620) · [Before (L1865-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1865-L1870)

```diff
-           Object.defineProperty(Je, He, {
-             value: ee,
-             enumerable: !0,
-             writable: !0,
-             configurable: !0
-           })
+           mW++
```

#### 82. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1908` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1625) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1908)

```diff
-         this._onFire = ee, this._firesAt = 0
+         this.animations = [], this.renderingGroupId = 0, this.emitter = NW.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1910-L1911` → after: `L1627-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1627-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1627-L1638) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1910-L1911)

```diff
-       get pending() {
-         return !!this._timer
+       createPointEmitter(WW, iW) {
+         const OW = function(WW, iW) {
+           const OW = new AW;
+           return OW.direction1 = WW, OW.direction2 = iW, OW
+         }(WW, iW);
+         return this.particleEmitterType = OW, OW
+       }
+       createHemisphericEmitter() {
+         const WW = function() {
+           return new bW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
+         return this.particleEmitterType = WW, WW
```

#### 84. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1913-L1916` → after: `L1640-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1640-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1640-L1644) · [Before (L1913-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1913-L1916)

```diff
-       arm(ee) {
-         this.clear(), this._firesAt = Date.now() + ee, this._timer = fb((() => {
-           this._timer = void 0, this._onFire()
-         }), ee)
+       createSphereEmitter() {
+         const WW = function() {
+           return new jW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
+         return this.particleEmitterType = WW, WW
```

#### 85. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1918-L1919` → after: `L1646-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1646-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1646-L1682) · [Before (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1918-L1919)

```diff
-       armNoEarlierThan(ee) {
-         this._timer && Date.now() + ee <= this._firesAt || this.arm(ee)
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

#### 86. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1921-L1922` → after: `L1684-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1684-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1684-L1702) · [Before (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1921-L1922)

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

#### 87. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1935-L1943` → after: `L1705-L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1705-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1705-L1708) · [Before (L1935-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1935-L1943)

```diff
-     var YK = class {
-       constructor(ee, ie, He, ye, be) {
-         let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
-           Ke = arguments.length > 6 ? arguments[6] : void 0;
-         var Ue;
-         this._instance = ee, this._config = ie, this._logger = He, this._getContext = ye, this._onReady = be, this._waitForStoragePersist = Me, this._scopeName = Ke, this._flushTimer = new DK((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
-       }
-       clearQueue() {
-         this._queueGeneration++, this._instance.setPersistedProperty(oH.LogsQueue, [])
+     SW.BLENDMODE_ONEONE = 0, SW.BLENDMODE_STANDARD = 1, SW.BLENDMODE_ADD = 2, SW.BLENDMODE_MULTIPLY = 3, SW.BLENDMODE_MULTIPLYADD = 4, SW.BLENDMODE_SUBTRACT = -1;
+     class YW {
+       constructor() {
+         this.attachedSubEmitters = null, this.currentColor1 = new tW.d(0, 0, 0, 0), this.currentColor2 = new tW.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVeloci … [truncated]
```

#### 88. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1946` → after: `L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1711) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1946)

```diff
-         this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
+         this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoor … [truncated]
```

#### 89. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1948-L1949` → after: `L1713-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1713-L1716) · [Before (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1948-L1949)

```diff
-       onReconnect() {
-         this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
+     }
+     class yW {
+       constructor(WW) {
+         this.particleSystem = WW, this.position = NW.q.Zero(), this.direction = NW.q.Zero(), this.color = new tW.d(0, 0, 0, 0), this.colorStep = new tW.d(0, 0, 0, 0), this.initialColor = new tW.d(0, 0, 0, 0), this.colorDead = new tW.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, … [truncated]
```

#### 90. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1951-L1977` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1718-L1719) · [Before (L1951-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1951-L1977)

```diff
-       captureLog(ee, ie) {
-         var He;
-         if (this._instance.isDisabled) return;
-         if (this._instance.optedOut) return;
-         if (!(null == ee ? void 0 : ee.body)) return;
-         const ye = this._runBeforeSend(ee);
-         if (null === ye) return;
-         if (!ye.body) return void this._logger.info("Log was rejected in beforeSend function");
-         if (!this._checkRateLimit()) return;
-         const be = {
-           record: tK(ye, null !== (He = null == ie ? void 0 : ie.context) && void 0 !== He ? He : this._getContext(), this._logger, null == ie ? void 0 : ie.occurredAtMs)
-         };
-         this._onReady((() => this._enqueue(be)))
-       }
-       _runBeforeSend(ee) {
-         const ie = this._config.beforeSend;
- ... (11 more removed lines; see GitHub link above)
+       _updateCellInfoFromSystem() {
+         this.cellIndex = this.particleSystem.startSpriteCellID
```

#### 91. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L1979-L2015` → after: `L1721-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1721-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1721-L1734) · [Before (L1979-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L1979-L2015)

```diff
-       _checkRateLimit() {
-         if (void 0 === this._maxLogsPerInterval) return !0;
-         const ee = Date.now(),
-           ie = ee - this._intervalWindowStart;
-         return this._rateCapWindowMs > ie && ie >= 0 || (this._intervalWindowStart = ee, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`capture … [truncated]
-       }
-       flush() {
-         var ee = this;
-         return jH((function*() {
-           if (!ee._instance.isDisabled) return ee._flushPromise || (ee._flushPromise = ee._flushInner().finally((() => {
-             ee._flushPromise = null
-           }))), ee._flushPromise
-         }))()
-       }
-       _flushInner() {
-         var ee = this;
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

#### 92. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2017` → after: `L1736-L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1736-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1736-L1739) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2017)

```diff
-         }))()
+         } else {
+           WW.particleSystem.emitter.HJ(this.position)
+         }
+         this.direction.scaleToRef(WW.inheritedVelocityAmount / 2, NW.l.fA[0]), WW.particleSystem._inheritedVelocityOffset.HJ(NW.l.fA[0])
```

#### 93. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2019-L2026` → after: `L1741-L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1741-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1741-L1743) · [Before (L2019-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2019-L2026)

```diff
-       _persistQueueAdvance(ee) {
-         var ie = this;
-         return jH((function*() {
-           var He;
-           const ye = Math.max(0, ee - ie._evictedSinceAdvance),
-             be = null !== (He = ie._instance.getPersistedProperty(oH.LogsQueue)) && void 0 !== He ? He : [];
-           ie._instance.setPersistedProperty(oH.LogsQueue, be.slice(ye)), yield ie._waitForStoragePersist()
-         }))()
+       _inheritParticleInfoToSubEmitters() {
+         if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
+           for (const WW of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(WW)
```

#### 94. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2028-L2029` → after: `L1745-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1745-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1745-L1746) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2028-L2029)

```diff
-       _buildResourceAttributes() {
-         return ZK(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
+       _reset() {
+         this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = yW._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
```

#### 95. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2031-L2071` → after: `L1748-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1748-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1748-L1749) · [Before (L2031-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2031-L2071)

```diff
-       _enqueue(ee) {
-         var ie;
-         if (this._instance.optedOut) return;
-         const He = null !== (ie = this._instance.getPersistedProperty(oH.LogsQueue)) && void 0 !== ie ? ie : [];
-         this._maxQueueSize > He.length || (He.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), He.push(ee), this._instance.setPersistedProperty(oH.LogsQueue, He), this._maxBufferSize > He.length || this._retryAfter.isOpen()  … [truncated]
-       }
-       _armFlushTimer() {
-         this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
-       }
-       _nextFlushDelay() {
-         return Math.max(AK(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
-       }
-       _hasQueuedRecords() {
-         const ee = this._instance.getPersistedProperty(oH.LogsQueue);
-         return !!ee && ee.length > 0
-       }
- ... (25 more removed lines; see GitHub link above)
+       copyTo(WW) {
+         WW.position.HJ(this.position), this._properties.initialDirection ? WW._properties.initialDirection ? WW._properties.initialDirection.HJ(this._properties.initialDirection) : WW._properties.initialDirection = this._properties.initialDirection.clone() : WW._properties.initia … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2084-L2088` → after: `L1752-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1752-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1752-L1756) · [Before (L2084-L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2084-L2088)

```diff
-     var xK = class {
-       constructor(ee, ie, He) {
-         this._instance = ee, this._config = ie, this._logger = He, this._series = new Map, this._flushTimer = new DK((() => this.flush().catch((ee => {
-           this._logger.error("Metrics flush failed:", ee)
-         })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new Fb, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
+     yW._Count = 0;
+     var TW = OW(42580);
+     class JW {
+       get currentFrame() {
+         return this._currentFrame
```

#### 97. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2090-L2099` → after: `L1758-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1758-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1758-L1759) · [Before (L2090-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2090-L2099)

```diff
-       count(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           He = arguments.length > 2 ? arguments[2] : void 0;
-         this._capture({
-           name: ee,
-           type: "count",
-           value: ie,
-           unit: null == He ? void 0 : He.unit,
-           attributes: null == He ? void 0 : He.attributes
-         })
+       get _evaluatedFrom() {
+         return this._playbackFrom
```

#### 98. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2101-L2108` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1761-L1762) · [Before (L2101-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2101-L2108)

```diff
-       gauge(ee, ie, He) {
-         this._capture({
-           name: ee,
-           type: "gauge",
-           value: ie,
-           unit: null == He ? void 0 : He.unit,
-           attributes: null == He ? void 0 : He.attributes
-         })
+       get _evaluatedTo() {
+         return this._playbackTo
```

#### 99. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2110-L2117` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1764-L1765) · [Before (L2110-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2110-L2117)

```diff
-       histogram(ee, ie, He) {
-         this._capture({
-           name: ee,
-           type: "histogram",
-           value: ie,
-           unit: null == He ? void 0 : He.unit,
-           attributes: null == He ? void 0 : He.attributes
-         })
+       get _evaluatedProgress() {
+         return this._playbackProgress
```

#### 100. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2119-L2132` → after: `L1767-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1767-L1768) · [Before (L2119-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2119-L2132)

```diff
-       flush() {
-         var ee = this;
-         const ie = this._flushPromise,
-           He = function() {
-             var He = jH((function*() {
-               ie && (yield ie.catch((() => {}))), yield ee._doFlush()
-             }));
-             return function() {
-               return He.apply(this, arguments)
-             }
-           }()().finally((() => {
-             this._flushPromise === He && (this._flushPromise = null)
-           }));
-         return this._flushPromise = He, He
+       get _evaluatedSyncRoot() {
+         return this._playbackSyncRoot
```

#### 101. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2134-L2137` → after: `L1770-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1770-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1770-L1771) · [Before (L2134-L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2134-L2137)

```diff
-       drainWindow() {
-         if (0 === this._series.size) return null;
-         const ee = this._series;
-         return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(ee)
+       get _evaluatedJump() {
+         return this._playbackJumped
```

#### 102. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2139-L2167` → after: `L1773-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1773-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1773-L1774) · [Before (L2139-L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2139-L2167)

```diff
-       reset() {
-         this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Se … [truncated]
-       }
-       _capture(ee) {
-         if (this._instance.isDisabled || this._instance.optedOut) return;
-         const ie = this._runBeforeSend(ee);
-         if (null === ie) return;
-         if (!ie.name || "string" != typeof ie.name) return void this._logger.warn("Dropping metric with empty name");
-         if ("number" != typeof ie.value || !Number.isFinite(ie.value)) return void this._logger.warn(`Dropping metric '${ie.name}': value must be a finite number`);
-         if ("count" === ie.type && 0 > ie.value) return void this._logger.warn(`Dropping count '${ie.name}': counters are monotonic, value must be >= 0`);
-         let He, ye;
-         try {
-           He = ie.attributes ? Eb({}, ie.attributes) : void 0, ye = cK(ie.type, ie.name, ie.unit, He)
-         } catch (ee) {
-           return void this._logger.warn(`Dropping metric '${ie.name}': attributes could not be serialized`, ee)
-         }
- ... (13 more removed lines; see GitHub link above)
+       get weight() {
+         return this._weight
```

#### 103. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2169-L2170` → after: `L1776-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1776-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1776-L1777) · [Before (L2169-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2169-L2170)

```diff
-       _admitNewSeries() {
-         return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribut … [truncated]
+       get currentValue() {
+         return this._currentValue
```

#### 104. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2172-L2197` → after: `L1779-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1779-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1779-L1786) · [Before (L2172-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2172-L2197)

```diff
-       _fold(ee, ie) {
-         switch (ee.type) {
-           case "count":
-             var He;
-             ee.total = (null !== (He = ee.total) && void 0 !== He ? He : 0) + ie;
-             break;
-           case "gauge":
-             ee.last = ie;
-             break;
-           case "histogram": {
-             ee.hist || (ee.hist = {
-               count: 0,
-               sum: 0,
-               min: ie,
-               max: ie,
-               bucketCounts: new Array(VK.length + 1).fill(0)
- ... (10 more removed lines; see GitHub link above)
+       get targetPath() {
+         return this._targetPath
+       }
+       get target() {
+         return this._currentActiveTarget
+       }
+       get isAdditive() {
+         return this._host && this._host.isAdditive
```

#### 105. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2199-L2209` → after: `L1788-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1788-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1788-L1798) · [Before (L2199-L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2199-L2209)

```diff
-       _runBeforeSend(ee) {
-         const ie = this._config.beforeSend;
-         if (!ie) return ee;
-         const He = gH(ie) ? ie : [ie];
-         let ye = ee;
-         for (const be of He) try {
-           const ee = be(ye);
-           if (!ee) return this._logger.info("Metric was rejected in beforeSend function"), null;
-           ye = ee
-         } catch (ee) {
-           return this._logger.error("Error in beforeSend function for metric:", ee), null
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
+           this._keys.splice(0, 0, WW)
```

#### 106. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2211` → after: `L1800-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1800-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1800-L1824) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2211)

```diff
-         return ye
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
+ ... (9 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2213-L2235` → after: `L1826-L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1826-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1826-L1861) · [Before (L2213-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2213-L2235)

```diff
-       _armFlushTimer() {
-         this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
-       }
-       _nextFlushDelay() {
-         return Math.max(AK(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
-       }
-       _doFlush() {
-         var ee = this;
-         return jH((function*() {
-           if (ee._flushTimer.clear(), 0 === ee._series.size) return;
-           const ie = ee._series;
-           ee._series = new Map, ee._seriesCapWarned = !1, ee._typeByName = new Map, ee._typeCollisionWarned = new Set;
-           const He = ee._generation,
-             ye = yield ee._instance._sendMetricsBatch(ee._buildPayload(ie));
-           if (He === ee._generation) switch (ee._retryAfter.record(ye), "retry-later" === ye.kind ? (ee._consecutiveFlushFailures++, ee._flushJitter = PK()) : (ee._consecutiveFlushFailures = 0, ee._flushJitter = 1), ee._flushTimer.pending && ee._flushTimer.arm(ee._nextFlushDelay( … [truncated]
-             case "ok":
- ... (7 more removed lines; see GitHub link above)
+       reset() {
+         if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
+           if (this.HZ instanceof Array) {
+             let WW = 0;
+             for (const iW of this.HZ) void 0 !== this._originalValue[WW] && this._setValue(iW, this._activeTargets[WW], this._originalValue[WW], -1, WW), WW++
+           } else void 0 !== this._originalValue[0] && this._setValue(this.HZ, this._directTarget, this._originalValue[0], -1, 0);
+         this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
+         for (let WW = 0; WW < this._events.length; WW++) this._events[WW].isDone = !1
+       }
+       isStopped() {
+         return this._stopped
+       }
+       dispose() {
+         const WW = this._animation.runtimeAnimations.indexOf(this);
+         WW > -1 && this._animation.runtimeAnimations.splice(WW, 1)
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2310-L2342` → after: `L1864-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1864-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1864-L1961) · [Before (L2310-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2310-L2342)

```diff
-         return Array.from(He.values())
-       }
-       _mergeWindowBack(ee) {
-         for (const [ye, be] of ee) {
-           const ee = this._series.get(ye);
-           if (ee) switch (ee.windowStartMs = Math.min(ee.windowStartMs, be.windowStartMs), ee.type) {
-             case "count":
-               var ie, He;
-               ee.total = (null !== (ie = ee.total) && void 0 !== ie ? ie : 0) + (null !== (He = be.total) && void 0 !== He ? He : 0);
-               break;
-             case "gauge":
-               break;
-             case "histogram":
-               if (be.hist)
-                 if (ee.hist) {
-                   ee.hist.count += be.hist.count, ee.hist.sum += be.hist.sum, ee.hist.min = Math.min(ee.hist.min, be.hist.min), ee.hist.max = Math.max(ee.hist.max, be.hist.max);
- ... (17 more removed lines; see GitHub link above)
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
+ ... (82 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2344-L2408` → after: `L1963-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L1963-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L1963-L2014) · [Before (L2344-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2344-L2408)

```diff
-             for (var Me = arguments.length, Ke = new Array(Me > 1 ? Me - 1 : 0), Ue = 1; Ue < Me; Ue++) Ke[Ue - 1] = arguments[Ue];
-             ye && (be.DEBUG || ye.POSTHOG_DEBUG || ie) && !tH(ye.console) && ye.console && ("__rrweb_original__" in ye.console[He] ? ye.console[He].__rrweb_original__ : ye.console[He])(ee, ...Ke)
-           },
-           debug() {
-             for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
-             He._log("debug", ...ie)
-           },
-           info() {
-             for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
-             He._log("log", ...ie)
-           },
-           warn() {
-             for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
-             He._log("warn", ...ie)
-           },
-           error() {
- ... (49 more removed lines; see GitHub link above)
+             xW = this._highLimitsCache[WW], NW = this._offsetsCache[WW]
+           }
+           if (void 0 === NW) switch (PW.dataType) {
+             case TW.d.ANIMATIONTYPE_FLOAT:
+               NW = 0;
+               break;
+             case TW.d.ANIMATIONTYPE_QUATERNION:
+               NW = TW.o;
+               break;
+             case TW.d.ANIMATIONTYPE_VECTOR3:
+               NW = TW.y;
+               break;
+             case TW.d.ANIMATIONTYPE_VECTOR2:
+               NW = TW.v;
+               break;
+             case TW.d.ANIMATIONTYPE_SIZE:
+ ... (36 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2411-L2449` → after: `L2018-L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2018-L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2018-L2025) · [Before (L2411-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2411-L2449)

```diff
-       },
-       jK = function(ee) {
-         const ie = {};
-         return mK(ee, (function(ee, He) {
-           (ZH(ee) && ee.length > 0 || AH(ee)) && (ie[He] = ee)
-         })), ie
-       };
- 
-     function sK(ee) {
-       const ie = Eb({}, ee);
-       for (const He of ["name", "message", "stack", "cause", "errors"]) try {
-         He in ee && (ie[He] = ee[He])
-       } catch (ee) {}
-       return ie
-     }
-     const IK = ["herokuapp.com", "vercel.app", "netlify.app"];
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

#### 111. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2451-L2463` → after: `L2027-L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2027-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2027-L2030) · [Before (L2451-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2451-L2463)

```diff
-     const rK = ee => {
-       if (iH) {
-         try {
-           const ie = ee + "=",
-             He = iH.cookie.split(";").filter((ee => ee.length));
-           for (let ee = 0; He.length > ee; ee++) {
-             let ye = He[ee];
-             for (;
-               " " == ye.charAt(0);) ye = ye.substring(1, ye.length);
-             if (0 === ye.indexOf(ie)) return decodeURIComponent(ye.substring(ie.length, ye.length))
-           }
-         } catch (ee) {}
-         return null
+     var hW = OW(41431);
+     class HW {
+       get syncRoot() {
+         return this._syncRoot
```

#### 112. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2465-L2490` → after: `L2032-L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2032-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2032-L2046) · [Before (L2465-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2465-L2490)

```diff
-     };
-     Math.trunc || (Math.trunc = function(ee) {
-       return 0 > ee ? Math.ceil(ee) : Math.floor(ee)
-     }), Number.isInteger || (Number.isInteger = function(ee) {
-       return AH(ee) && isFinite(ee) && Math.floor(ee) === ee
-     });
-     var QK = class ee {
-         constructor(ee) {
-           if (this.bytes = ee, 16 !== ee.length) throw new TypeError("not 128-bit length")
-         }
-         static fromFieldsV7(ie, He, ye, be) {
-           if (!Number.isInteger(ie) || !Number.isInteger(He) || !Number.isInteger(ye) || !Number.isInteger(be) || 0 > ie || 0 > He || 0 > ye || 0 > be || ie > 0xffffffffffff || He > 4095 || ye > 1073741823 || be > 4294967295) throw new RangeError("invalid field value");
-           const Me = new Uint8Array(16);
-           return Me[0] = ie / Math.pow(2, 40), Me[1] = ie / Math.pow(2, 32), Me[2] = ie / Math.pow(2, 24), Me[3] = ie / Math.pow(2, 16), Me[4] = ie / 256, Me[5] = ie, Me[6] = 112 | He >>> 8, Me[7] = He, Me[8] = 128 | ye >>> 24, Me[9] = ye >>> 16, Me[10] = ye >>> 8, Me[11] = ye, M … [truncated]
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

#### 113. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2492-L2497` → after: `L2048-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2048-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2048-L2081) · [Before (L2492-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2492-L2497)

```diff
-         compareTo(ee) {
-           for (let ie = 0; 16 > ie; ie++) {
-             const He = this.bytes[ie] - ee.bytes[ie];
-             if (0 !== He) return Math.sign(He)
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

#### 114. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2499-L2508` → after: `L2083-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2083-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2083-L2144) · [Before (L2499-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2499-L2508)

```diff
-       },
-       eU = class {
-         generate() {
-           const ee = this.generateOrAbort();
-           if (!tH(ee)) return ee;
-           {
-             this._timestamp = 0;
-             const ee = this.generateOrAbort();
-             if (tH(ee)) throw new Error("Could not generate UUID after timestamp reset");
-             return ee
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

#### 115. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2510-L2519` → after: `L2146-L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2146-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2146-L2152) · [Before (L2510-L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2510-L2519)

```diff
-         }
-         generateOrAbort() {
-           const ee = (() => {
-             const ee = Date.now();
-             return AH(ee) && isFinite(ee) ? Math.min(Math.max(Math.floor(ee), 0), 0xffffffffffff) : 0
-           })();
-           if (ee > this._timestamp) this._timestamp = ee, this._resetCounter();
-           else {
-             if (this._timestamp >= ee + 1e4) return;
-             this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
+         } else {
+           const WW = this._scene._activeAnimatables.indexOf(this);
+           if (WW > -1) {
+             OW || this._scene._activeAnimatables.splice(WW, 1);
+             const iW = this._runtimeAnimations;
+             for (let WW = 0; WW < iW.length; WW++) iW[WW].dispose();
+             this._runtimeAnimations.length = 0, mW || this._raiseOnAnimationEnd()
```

#### 116. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2540-L2541` → after: `L2156-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2156-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2156-L2161) · [Before (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2540-L2541)

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

#### 117. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2543-L2565` → after: `L2163-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2163-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2163-L2168) · [Before (L2543-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2543-L2565)

```diff
-     };
-     let yU;
-     const bU = () => MU().toString(),
-       MU = () => (yU || (yU = new eU)).generate();
-     let KU = "";
-     const UU = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
-     let FU = null;
-     const JU = {
-       _is_supported() {
-         if (!DH(FU)) return FU;
-         if (FU = !1, iH) try {
-           const ee = `__ph_cookie_support_${bU()}`;
-           JU._set(ee, "xyz"), FU = '"xyz"' === rK(ee), JU._remove(ee)
-         } catch (ye) {
-           FU = !1
-         }
- ... (7 more removed lines; see GitHub link above)
+       _animate(WW) {
+         if (this.JZ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = WW), !0;
+         if (null === this._localDelayOffset ? (this._localDelayOffset = WW, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += WW - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.sp … [truncated]
+         this._previousWeight = this._weight;
+         let iW = !1;
+         const OW = this._runtimeAnimations;
```

#### 118. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2567-L2613` → after: `L2170-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2170-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2170-L2172) · [Before (L2567-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2567-L2613)

```diff
-         try {
-           ie = JSON.parse(JU._get(ee)) || {}
-         } catch (ee) {}
-         return ie
-       },
-       _set(ee, ie, He, ye, be) {
-         if (!iH) return !1;
-         try {
-           let Me = "",
-             Ke = "";
-           const Ue = function(ee, ie) {
-             if (ie) {
-               let ie = function(ee) {
-                 let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iH;
-                 if (KU) return KU;
-                 if (!ie) return "";
- ... (31 more removed lines; see GitHub link above)
+         for (mW = 0; mW < OW.length; mW++) {
+           const EW = OW[mW].animate(WW - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
+           iW = iW || EW
```

#### 119. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2615-L2620` → after: `L2174-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2174-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2174-L2177) · [Before (L2615-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2615-L2620)

```diff
-       },
-       _remove(ee, ie) {
-         if ((null == iH ? void 0 : iH.cookie) && (!ie || !DH(rK(ee)))) try {
-           JU._set(ee, "", -1, ie)
-         } catch (ee) {
-           return
+         if (this.animationStarted = iW, !iW) {
+           if (this.disposeOnEnd)
+             for (mW = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(mW, 1), mW = 0; mW < OW.length; mW++) OW[mW].dispose();
+           this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
```

#### 120. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2623-L2668` → after: `L2181-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2181-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2181-L2241) · [Before (L2623-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2623-L2668)

```diff
-     };
-     let oU = null;
-     const RU = {
-         _is_supported() {
-           if (!DH(oU)) return oU;
-           let ee = !0;
-           if (tH(ri)) ee = !1;
-           else try {
-             const ie = "__mplssupport__";
-             RU._set(ie, "xyz"), '"xyz"' !== RU._get(ie) && (ee = !1), RU._remove(ie)
-           } catch (be) {
-             ee = !1
-           }
-           return ee || CK.error("localStorage unsupported; falling back to cookie store"), oU = ee, ee
-         },
-         _error(ee) {
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

#### 121. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2670-L2695` → after: `L2243-L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2243-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2243-L2245) · [Before (L2670-L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2670-L2695)

```diff
-       },
-       kU = [Te, Ue, qe, Fe, ze, Re, oe, Je, pe],
-       qU = [We, de, re, Qe, ti, Wi, Pe, Bi],
-       fU = ee => ee + "_cpm",
-       TU = ["__proto__", "constructor", "prototype"],
-       pU = ee => {
-         if (!dH(ee)) return {};
-         const ie = {};
-         return Object.keys(ee).forEach((He => {
-           -1 === TU.indexOf(He) && (ie[He] = ee[He])
-         })), ie
-       },
-       XU = function(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         const He = {};
-         return [...qU, ...ie].forEach((ie => {
- ... (10 more removed lines; see GitHub link above)
+         for (let iW = 0; iW < WW.animations.length; iW++) {
+           const mW = WW.animations[iW];
+           OW.push(mW.currentValue), PW.push(mW.weight / LW)
```

#### 122. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2697-L2719` → after: `L2247-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2247-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2247-L2286) · [Before (L2697-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2697-L2719)

```diff
-         return ee.length.toString(36) + "." + (ie >>> 0).toString(36) + "." + (He >>> 0).toString(36)
-       },
-       BU = (ee, ie) => ({
-         p: ie,
-         f: zU(JSON.stringify(ee))
-       }),
-       EU = (ee, ie) => {
-         if (!ie) return {
-           properties: [],
-           isValid: !1
-         };
-         try {
-           const He = JU._parse(fU(ee)),
-             ye = (null == He ? void 0 : He.f) === zU(ie) && gH(He.p);
-           return {
-             properties: ye ? He.p : [],
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

#### 123. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2721-L2733` → after: `L2288-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2288-L2290) · [Before (L2721-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2721-L2733)

```diff
-       },
-       gU = (ee, ie) => ie + "|" + (JU._get(fU(ee)) || ""),
-       OU = {},
-       dU = {
-         _is_supported: () => !0,
-         _error(ee) {
-           CK.error("memoryStorage error: " + ee)
-         },
-         _get: ee => ee in OU ? OU[ee] : null,
-         _parse: ee => ee in OU ? OU[ee] : null,
-         _set: (ee, ie) => (OU[ee] = ie, !0),
-         _remove(ee) {
-           delete OU[ee]
+         for (let NW = mW; NW < OW; NW++) {
+           const WW = iW[NW];
+           WW.runtimeAnimation = null, WW.target = null
```

#### 124. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2735-L2745` → after: `L2292-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2292-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2292-L2296) · [Before (L2735-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2735-L2745)

```diff
-       };
-     let WU = null;
-     const tU = {
-       _is_supported() {
-         if (!DH(WU)) return WU;
-         if (WU = !0, tH(ri)) WU = !1;
-         else try {
-           const ee = "__support__";
-           tU._set(ee, "xyz"), '"xyz"' !== tU._get(ee) && (WU = !1), tU._remove(ee)
-         } catch (ye) {
-           WU = !1
+         if (this._animationWriteCount = mW, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
+         const EW = hW.d.Now;
+         if (!this._animationTimeLast) {
+           if (this._pendingData.length > 0) return;
+           this._animationTimeLast = EW
```

#### 125. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2748-L2756` → after: `L2392-L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2392-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2392-L2396) · [Before (L2748-L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2748-L2756)

```diff
-       },
-       _error(ee) {
-         CK.error("sessionStorage error: ", ee)
-       },
-       _get(ee) {
-         try {
-           return null == ri ? void 0 : ri.sessionStorage.getItem(ee)
-         } catch (ee) {
-           tU._error(ee)
+       }, WW.prototype.beginDirectAnimation = function(WW, iW, OW, mW, EW) {
+         let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
+         if (NW < 0) {
+           const WW = OW;
+           OW = mW, mW = WW, NW = -NW
```

#### 126. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2759-L2778` → after: `L2411-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2411-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2411-L2472) · [Before (L2759-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2759-L2778)

```diff
-       },
-       _parse(ee) {
-         try {
-           return JSON.parse(tU._get(ee)) || null
-         } catch (ee) {}
-         return null
-       },
-       _set(ee, ie) {
-         try {
-           return null == ri || ri.sessionStorage.setItem(ee, JSON.stringify(ie)), !0
-         } catch (ee) {
-           tU._error(ee)
-         }
-         return !1
-       },
-       _remove(ee) {
- ... (4 more removed lines; see GitHub link above)
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
+ ... (46 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2781-L2784` → after: `L2475-L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2475-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2475-L2476) · [Before (L2781-L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2781-L2784)

```diff
-     };
-     var ZU = class {
-       constructor(ee) {
-         this._instance = ee
+       getLocalMatrix() {
+         return this._compose(), this._localMatrix
```

#### 128. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2786-L2787` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2478-L2479) · [Before (L2786-L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2786-L2787)

```diff
-       get _config() {
-         return this._instance.config
+       getBindMatrix() {
+         return this._bindMatrix
```

#### 129. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2789-L2790` → after: `L2481-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2481-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2481-L2482) · [Before (L2789-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2789-L2790)

```diff
-       get consent() {
-         return this._getDnt() ? 0 : this._storedConsent
+       getBaseMatrix() {
+         return this.getBindMatrix()
```

#### 130. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2792-L2793` → after: `L2484-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2484-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2484-L2485) · [Before (L2792-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2792-L2793)

```diff
-       isOptedOut() {
-         return "always" === this._config.cookieless_mode || this.isRejected() || -1 === this.consent && "on_reject" === this._config.cookieless_mode
+       getRestMatrix() {
+         return this._restMatrix
```

#### 131. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2795-L2796` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2487-L2488) · [Before (L2795-L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2795-L2796)

```diff
-       isOptedIn() {
-         return !this.isOptedOut()
+       getRestPose() {
+         return this.getRestMatrix()
```

#### 132. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2798-L2799` → after: `L2490-L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2490-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2490-L2491) · [Before (L2798-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2798-L2799)

```diff
-       isExplicitlyOptedOut() {
-         return 0 === this.consent
+       setRestMatrix(WW) {
+         this._restMatrix.HJ(WW)
```

#### 133. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2801-L2802` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2493-L2494) · [Before (L2801-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2801-L2802)

```diff
-       isRejected() {
-         return 0 === this.consent || -1 === this.consent && this._config.opt_out_capturing_by_default
+       setRestPose(WW) {
+         this.setRestMatrix(WW)
```

#### 134. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2804-L2805` → after: `L2496-L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2496-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2496-L2497) · [Before (L2804-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2804-L2805)

```diff
-       optInOut(ee) {
-         this.aT._set(this._storageKey, ee ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
+       getBindPose() {
+         return this.getBindMatrix()
```

#### 135. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2807-L2808` → after: `L2499-L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2499-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2499-L2535) · [Before (L2807-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2807-L2808)

```diff
-       reset() {
-         this.aT._remove(this._storageKey, this._config.cross_subdomain_cookie)
+       setBindMatrix(WW) {
+         this.tWW(WW)
+       }
+       setBindPose(WW) {
+         this.setBindMatrix(WW)
+       }
+       getFinalMatrix() {
+         return this._finalMatrix
+       }
+       getWorldMatrix() {
+         return this.getFinalMatrix()
+       }
+       returnToRest() {
+         if (this._linkedTransformNode) {
+           const WW = NW.l.fA[0],
+             iW = NW.l.Quaternion[0],
+ ... (21 more added lines; see GitHub link above)
```

#### 136. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2810-L2816` → after: `L2537-L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2537-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2537-L2538) · [Before (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2810-L2816)

```diff
-       get _storageKey() {
-         const {
-           token: ee,
-           opt_out_capturing_cookie_prefix: ie,
-           consent_persistence_name: He
-         } = this._instance.config;
-         return He || (ie ? ie + ee : "__ph_opt_in_out_" + ee)
+       get position() {
+         return this._decompose(), this.JiW
```

#### 137. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2818-L2820` → after: `L2540-L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2540-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2540-L2553) · [Before (L2818-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2818-L2820)

```diff
-       get _storedConsent() {
-         const ee = this.aT._get(this._storageKey);
-         return lH(ee) ? 1 : fH(SH, ee) ? 0 : -1
+       set position(WW) {
+         this._decompose(), this.JiW.HJ(WW), this._markAsDirtyAndCompose()
+       }
+       get rotation() {
+         return this.getRotation()
+       }
+       set rotation(WW) {
+         this.setRotation(WW)
+       }
+       get rotationQuaternion() {
+         return this._decompose(), this._localRotation
+       }
+       set rotationQuaternion(WW) {
+         this.setRotationQuaternion(WW)
```

#### 138. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2823-L2829` → after: `L2556-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2556-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2556-L2599) · [Before (L2823-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2823-L2829)

```diff
-         const ee = this._config.opt_out_capturing_persistence_type,
-           ie = "localStorage" === ee ? RU : JU,
-           He = ie._is_supported() ? ie : dU;
-         if (!this._persistentStore || this._persistentStore !== He) {
-           this._persistentStore = He;
-           const ie = "localStorage" === ee ? JU : RU;
-           ie._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(lH(ie._get(this._storageKey))), ie._remove(this._storageKey, this._config.cross_subdomain_cookie))
+         return this.getScale()
+       }
+       set YZ(WW) {
+         this.setScale(WW)
+       }
+       get animationPropertiesOverride() {
+         return this._skeleton.animationPropertiesOverride
+       }
+       _decompose() {
+         this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = NW.q.Zero(), this._localRotation = NW.g.Zero(), this.JiW = NW.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.JiW))
+       }
+       _compose() {
+         this._needToCompose && (this._localScaling ? (this._needToCompose = !1, NW.d.ComposeToRef(this._localScaling, this._localRotation, this.JiW, this._localMatrix)) : this._needToCompose = !1)
+       }
+       tWW(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+ ... (28 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2831` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2601) · [Before (L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2831)

```diff
-         return this._persistentStore
+         this._markAsDirtyAndDecompose()
```

#### 140. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2833-L2834` → after: `L2603-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2603-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2603-L2606) · [Before (L2833-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2833-L2834)

```diff
-       _getDnt() {
-         return !!this._config.respect_dnt && [null == eH ? void 0 : eH.doNotTrack, null == eH ? void 0 : eH.msDoNotTrack, JH.doNotTrack, null == eH ? void 0 : eH.globalPrivacyControl].some((ee => lH(ee)))
+       translate(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         this._updatePosition(WW, iW, OW, !0)
```

#### 141. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2836-L2846` → after: `L2608-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2608-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2608-L2611) · [Before (L2836-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2836-L2846)

```diff
-     };
- 
-     function wU(ee, ie) {
-       var He;
-       const ye = null == ee || null === (He = ee.config) || void 0 === He ? void 0 : He.get_current_url;
-       if (!OH(ye)) return ie;
-       try {
-         const ee = ye(ie);
-         return ZH(ee) && ee ? ee : ie
-       } catch (ee) {
-         return CK.error("Error in get_current_url, falling back to window.location.href", ee), ie
+       setPosition(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         this._updatePosition(WW, iW, OW, !1)
```

#### 142. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2848-L2858` → after: `L2613-L2847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2613-L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2613-L2847) · [Before (L2848-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2848-L2858)

```diff
-     }
- 
-     function DU(ee) {
-       var ie;
-       return ee instanceof Element && ("__POSTHOG_TOOLBAR__" === ee.id || !!(null === (ie = ee.closest) || void 0 === ie ? void 0 : ie.call(ee, ".toolbar-global-fade-container")))
-     }
- 
-     function PU(ee) {
-       return !!ee && 1 === ee.nodeType
-     }
- 
+       setAbsolutePosition(WW, iW) {
+         this.setPosition(WW, 1, iW)
+       }
+       scale(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const EW = this.getLocalMatrix(),
+           PW = DW._TmpMats[0];
+         NW.d.ScalingToRef(WW, iW, OW, PW), PW.multiplyToRef(EW, EW), PW.invert();
+         for (const NW of this.children) {
+           const mW = NW.getLocalMatrix();
+           mW.multiplyToRef(PW, mW), mW.multiplyAtIndex(12, WW), mW.multiplyAtIndex(13, iW), mW.multiplyAtIndex(14, OW), NW._markAsDirtyAndDecompose()
+         }
+         if (this._markAsDirtyAndDecompose(), mW)
+           for (const NW of this.children) NW.scale(WW, iW, OW, mW)
+       }
+       setScale(WW) {
+ ... (219 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2860` → after: `L2849-L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2849-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2849-L2850) · [Before (L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2860)

```diff
-       return !!ee && !!ee.tagName && ee.tagName.toLowerCase() === ie.toLowerCase()
+       const OW = (0, lW.RandomRange)(0, 1);
+       tW.d.LerpToRef(iW.color1, iW.color2, OW, WW.color)
```

#### 144. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2863-L2864` → after: `L2853-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2853-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2853-L2854) · [Before (L2863-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2863-L2864)

```diff
-     function YU(ee) {
-       return !!ee && 3 === ee.nodeType
+     function GW(WW, iW) {
+       iW.colorDead.subtractToRef(WW.color, iW._colorDiff), iW._colorDiff.scaleToRef(1 / WW.lifeTime, WW.colorStep)
```

#### 145. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2867-L2868` → after: `L2857-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2857-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2857-L2858) · [Before (L2867-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2867-L2868)

```diff
-     function VU(ee) {
-       return !!ee && 11 === ee.nodeType && PU(ee.host)
+     function IW(WW, iW) {
+       WW._properties.currentColorGradient = iW._colorGradients[0], WW._properties.currentColorGradient.getColorToRef(WW.color), WW._properties.currentColor1.HJ(WW.color), iW._colorGradients.length > 1 ? iW._colorGradients[1].getColorToRef(WW._properties.currentColor2) : WW._prope … [truncated]
```

#### 146. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2871-L2872` → after: `L2861-L2865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2861-L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2861-L2865) · [Before (L2871-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2871-L2872)

```diff
-     function aU(ee) {
-       return ee ? TH(ee).split(/\s+/) : []
+     function aW(WW, iW) {
+       const OW = iW._colorGradients;
+       mW.m.GetCurrentGradient(iW._ratio, OW, ((iW, OW, mW) => {
+         iW !== WW._properties.currentColorGradient && (WW._properties.currentColor1.HJ(WW._properties.currentColor2), OW.getColorToRef(WW._properties.currentColor2), WW._properties.currentColorGradient = iW), tW.d.LerpToRef(WW._properties.currentColor1, WW._properties.currentColo … [truncated]
+       }))
```

#### 147. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2876-L2881` → after: `L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2869) · [Before (L2876-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2876-L2881)

```diff
-       const He = function(ee) {
-         var ie;
-         const He = null == ri || null === (ie = ri.location) || void 0 === ie ? void 0 : ie.href;
-         return tH(He) ? void 0 : wU(ee, He)
-       }(ie);
-       return !!(He && ee && ee.some((ee => He.match(ee))))
+       WW.colorStep.scaleToRef(iW._scaledUpdateSpeed, iW._scaledColorStep), WW.color.addInPlace(iW._scaledColorStep), WW.color.a < 0 && (WW.color.a = 0)
```

#### 148. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2884-L2896` → after: `L2872-L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2872-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2872-L2875) · [Before (L2884-L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2884-L2896)

```diff
-     function xU(ee) {
-       let ie = "";
-       switch (typeof ee.className) {
-         case "string":
-           ie = ee.className;
-           break;
-         case "object":
-           ie = (ee.className && "baseVal" in ee.className ? ee.className.baseVal : null) || ee.getAttribute("class") || "";
-           break;
-         default:
-           ie = ""
-       }
-       return aU(ie)
+     function zW(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._angularSpeedGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentAngularSpeedGradient && (WW._properties.currentAngularSpeed1 = WW._properties.currentAngularSpeed2, WW._properties.currentAngularSpeed2 = OW.getFactor(), WW._properties.currentAngularSpeedGradient = iW), WW.angularSpeed = (0, lW.Lerp)(WW._prop … [truncated]
+       }))
```

#### 149. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2899-L2900` → after: `L2878-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2878-L2879) · [Before (L2899-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2899-L2900)

```diff
-     function LU(ee) {
-       return PH(ee) ? null : TH(ee).split(/(\s+)/).filter((ee => fF(ee))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
+     function FW(WW, iW) {
+       WW.angle += WW.angularSpeed * iW._scaledUpdateSpeed
```

#### 150. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2903-L2908` → after: `L2882-L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2882-L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2882-L2883) · [Before (L2903-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2903-L2908)

```diff
-     function CU(ee) {
-       let ie = "";
-       return MF(ee) && !KF(ee) && ee.childNodes && ee.childNodes.length && mK(ee.childNodes, (function(ee) {
-         var He;
-         YU(ee) && ee.textContent && (ie += null !== (He = LU(ee.textContent)) && void 0 !== He ? He : "")
-       })), TH(ie)
+     function QW(WW, iW) {
+       iW.particleEmitterType.startDirectionFunction(iW._emitterWorldMatrix, WW.direction, WW, iW.isLocal, iW._emitterInverseWorldMatrix)
```

#### 151. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2911-L2913` → after: `L2886-L2887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2886-L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2886-L2887) · [Before (L2911-L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2911-L2913)

```diff
-     function vU(ee) {
-       var ie;
-       return tH(ee.target) ? ee.srcElement || null : (null === (ie = ee.target) || void 0 === ie ? void 0 : ie.shadowRoot) ? ee.composedPath()[0] || null : ee.target || null
+     function Wi(WW, iW) {
+       iW.startDirectionFunction(iW._emitterWorldMatrix, WW.direction, WW, iW.isLocal)
```

#### 152. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2918-L2923` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2891) · [Before (L2918-L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2918-L2923)

```diff
-       const He = ee.matches || ee.matchesSelector || ee.msMatchesSelector || ee.mozMatchesSelector || ee.webkitMatchesSelector || ee.oMatchesSelector;
-       try {
-         return !!He && He.call(ee, ie)
-       } catch (ee) {
-         return !1
-       }
+       WW._properties.currentVelocityGradient = iW._velocityGradients[0], WW._properties.currentVelocity1 = WW._properties.currentVelocityGradient.getFactor(), iW._velocityGradients.length > 1 ? WW._properties.currentVelocity2 = iW._velocityGradients[1].getFactor() : WW._propertie … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2927-L2930` → after: `L2895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2895) · [Before (L2927-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2927-L2930)

```diff
-       if (tH(ie)) return !0;
-       for (const He of ee)
-         if (ie.some((ee => mU(He, ee)))) return !0;
-       return !1
+       WW._properties.currentLimitVelocityGradient = iW._limitVelocityGradients[0], WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocityGradient.getFactor(), iW._limitVelocityGradients.length > 1 ? WW._properties.currentLimitVelocity2 = iW._limitVelocityGradi … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2933-L2935` → after: `L2898-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2898-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2898-L2909) · [Before (L2933-L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2933-L2935)

```diff
-     function SU(ee) {
-       const ie = ee.parentNode;
-       return !(!ie || !PU(ie)) && ie
+     function mi(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._velocityGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentVelocityGradient && (WW._properties.currentVelocity1 = WW._properties.currentVelocity2, WW._properties.currentVelocity2 = OW.getFactor(), WW._properties.currentVelocityGradient = iW), WW._properties.directionScale *= (0, lW.Lerp)(WW._propertie … [truncated]
+       }))
+     }
+ 
+     function Ei(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._limitVelocityGradients, ((OW, mW, EW) => {
+         OW !== WW._properties.currentLimitVelocityGradient && (WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocity2, WW._properties.currentLimitVelocity2 = mW.getFactor(), WW._properties.currentLimitVelocityGradient = OW);
+         const NW = (0, lW.Lerp)(WW._properties.currentLimitVelocity1, WW._properties.currentLimitVelocity2, EW);
+         WW.direction.length() > NW && WW.direction.scaleInPlace(iW.limitVelocityDamping)
+       }))
```

#### 155. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2947-L2958` → after: `L2913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2913) · [Before (L2947-L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2947-L2958)

```diff
-       let ie = "",
-         He = "";
-       const ye = ee => {
-         PU(ee) && MF(ee) && !KF(ee) && (ie += ` ${CU(ee)}`, He = He || ee.getAttribute("aria-label") || "", mK(ee.childNodes, ye))
-       };
-       ye(ee), ie = TH(ie.replace(/\s+/g, " "));
-       const be = (fF(ie) ? ie : "").toLowerCase(),
-         Me = ee.getAttribute("aria-label") || (be ? "" : He);
-       return {
-         safeText: be,
-         ariaLabel: TH(Me).toLowerCase()
-       }
+       WW.direction.scaleToRef(WW._properties.directionScale, WW._properties.scaledDirection)
```

#### 156. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2964-L3004` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2917) · [Before (L2964-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L2964-L3004)

```diff
-       if (!ri || yF(ee)) return !1;
-       let He, ye, be;
-       var Me, Ke;
-       if (VH(ie) ? (He = !!ie && eF, ye = void 0, be = !1) : (He = null !== (Me = null == ie ? void 0 : ie.css_selector_ignorelist) && void 0 !== Me ? Me : eF, ye = null == ie ? void 0 : ie.content_ignorelist, be = null !== (Ke = null == ie ? void 0 : ie.ignore_text_selection) && … [truncated]
-       if (be && function(ee) {
-           return !(!ee || !PU(ee)) && (!!AU(ee, "textarea") || (AU(ee, "input") ? fH(iF, (ee.getAttribute("type") || "").toLowerCase()) : function(ee) {
-             var ie;
-             if (ee.isContentEditable) return !0;
-             const He = null === (ie = ee.getAttribute) || void 0 === ie ? void 0 : ie.call(ee, "contenteditable");
-             return "true" === He || "" === He
-           }(ee)))
-         }(ee)) return !1;
-       const {
-         targetElementList: Ue
-       } = bF(ee, !1);
-       return !(ye && function(ee, ie) {
- ... (25 more removed lines; see GitHub link above)
+       iW.particleEmitterType.startPositionFunction(iW._emitterWorldMatrix, WW.position, WW, iW.isLocal)
```

#### 157. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3035-L3052` → after: `L2920-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2920-L2921) · [Before (L3035-L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3035-L3052)

```diff
-     function MF(ee) {
-       const ie = new Set;
-       let He = 0;
-       for (let Me = ee; Me.parentNode && !AU(Me, "body"); Me = Me.parentNode) {
-         if (He++ >= 1e3 || ie.has(Me)) return !1;
-         ie.add(Me);
-         const ee = xU(Me);
-         if (fH(ee, "ph-sensitive") || fH(ee, "ph-no-capture")) return !1
-       }
-       if (fH(xU(ee), "ph-include")) return !0;
-       const ye = ee.type || "";
-       if (ZH(ye)) switch (ye.toLowerCase()) {
-         case "hidden":
-         case "password":
-           return !1
-       }
- ... (2 more removed lines; see GitHub link above)
+     function Li(WW, iW) {
+       iW.startPositionFunction(iW._emitterWorldMatrix, WW.position, WW, iW.isLocal)
```

#### 158. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3055-L3056` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2924-L2925) · [Before (L3055-L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3055-L3056)

```diff
-     function KF(ee) {
-       return !!(AU(ee, "input") && !["button", "checkbox", "submit", "reset"].includes(ee.type) || AU(ee, "select") || AU(ee, "textarea") || "true" === ee.getAttribute("contenteditable"))
+     function ci(WW, iW) {
+       WW._properties.localPosition ? WW._properties.localPosition.HJ(WW.position) : WW._properties.localPosition = WW.position.clone(), NW.q.TransformCoordinatesToRef(WW._properties.localPosition, iW._emitterWorldMatrix, WW.position)
```

#### 159. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3065-L3072` → after: `L2928-L2929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2928-L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2928-L2929) · [Before (L3065-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3065-L3072)

```diff
-     function qF(ee) {
-       let ie = 0,
-         He = !1;
-       for (let ye = ee.length - 1; ye >= 0; ye--) {
-         let be = ee.charCodeAt(ye) - 48;
-         He && (be *= 2, be > 9 && (be -= 9)), ie += be, He = !He
-       }
-       return ie % 10 == 0
+     function wi(WW, iW) {
+       iW.isLocal && WW._properties.localPosition ? (WW._properties.localPosition.addInPlace(WW._properties.scaledDirection), NW.q.TransformCoordinatesToRef(WW._properties.localPosition, iW._emitterWorldMatrix, WW.position)) : WW.position.addInPlace(WW._properties.scaledDirection)
```

#### 160. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3075-L3104` → after: `L2932-L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2932-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2932-L2957) · [Before (L3075-L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3075-L3104)

```diff
-     function fF(ee) {
-       let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (PH(ee)) return !1;
-       if (ZH(ee)) {
-         if (ee = TH(ee), ie ? UF.test((ee || "").replace(/[- ]/g, "")) : function(ee) {
-             let ie;
-             for (FF.lastIndex = 0; ie = FF.exec(ee);) {
-               const ee = ie[2];
-               if (!ee) continue;
-               const He = ee.replace(/[- ]/g, "");
-               for (let ie = 0; He.length > ie; ie++)
-                 for (const ee of JF) {
-                   const ye = ie + ee;
-                   if (He.length >= ye) {
-                     const ee = He.slice(ie, ye);
-                     if (UF.test(ee) && qF(ee)) return !0
- ... (14 more removed lines; see GitHub link above)
+     function ti(WW, iW) {
+       WW._properties.currentDragGradient = iW._dragGradients[0], WW._properties.currentDrag1 = WW._properties.currentDragGradient.getFactor(), iW._dragGradients.length > 1 ? WW._properties.currentDrag2 = iW._dragGradients[1].getFactor() : WW._properties.currentDrag2 = WW._propert … [truncated]
+     }
+ 
+     function Zi(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._dragGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentDragGradient && (WW._properties.currentDrag1 = WW._properties.currentDrag2, WW._properties.currentDrag2 = OW.getFactor(), WW._properties.currentDragGradient = iW);
+         const EW = (0, lW.Lerp)(WW._properties.currentDrag1, WW._properties.currentDrag2, mW);
+         WW._properties.scaledDirection.scaleInPlace(1 - EW)
+       }))
+     }
+ 
+     function xi(WW, iW) {
+       WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2 ? (WW._properties.randomNoiseCoordinates1.yWW(Math.random(), Math.random(), Math.random()), WW._properties.randomNoiseCoordinates2.yWW(Math.random(), Math.random(), Math.random())) : (WW._prope … [truncated]
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 161. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3109-L3111` → after: `L2961-L2962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2961-L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2961-L2962) · [Before (L3109-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3109-L3111)

```diff
-     function TF(ee) {
-       let ie = CU(ee);
-       return ie = `${ie} ${pF(ee)}`.trim(), fF(ie) ? ie : ""
+     function Ai(WW, iW) {
+       iW.gravity.scaleToRef(iW._tempScaledUpdateSpeed, iW._scaledGravity), WW.direction.addInPlace(iW._scaledGravity)
```

#### 162. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3114-L3124` → after: `L2965-L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2965-L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2965-L2966) · [Before (L3114-L3124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3114-L3124)

```diff
-     function pF(ee) {
-       let ie = "";
-       return ee && ee.childNodes && ee.childNodes.length && mK(ee.childNodes, (function(ee) {
-         var He;
-         if (ee && "span" === (null === (He = ee.tagName) || void 0 === He ? void 0 : He.toLowerCase())) try {
-           const He = CU(ee);
-           ie = `${ie} ${He}`.trim(), ee.childNodes && ee.childNodes.length && (ie = `${ie} ${pF(ee)}`.trim())
-         } catch (ee) {
-           CK.error("[AutoCapture]", ee)
-         }
-       })), ie
+     function bi(WW, iW) {
+       WW.size = (0, lW.RandomRange)(iW.minSize, iW.maxSize), WW.scale.yWW((0, lW.RandomRange)(iW.minScaleX, iW.maxScaleX), (0, lW.RandomRange)(iW.minScaleY, iW.maxScaleY))
```

#### 163. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3127-L3128` → after: `L2969-L2970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2969-L2970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2969-L2970) · [Before (L3127-L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3127-L3128)

```diff
-     function XF(ee) {
-       return ee.replace(/"|\\"/g, '\\"')
+     function ji(WW, iW) {
+       WW._properties.currentSizeGradient = iW._sizeGradients[0], WW._properties.currentSize1 = WW._properties.currentSizeGradient.getFactor(), WW.size = WW._properties.currentSize1, iW._sizeGradients.length > 1 ? WW._properties.currentSize2 = iW._sizeGradients[1].getFactor() : WW … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3131-L3133` → after: `L2973-L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2973-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2973-L2979) · [Before (L3131-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3131-L3133)

```diff
-     function zF(ee) {
-       const ie = ee.attr__class;
-       if (ie) return gH(ie) ? ie : aU(ie)
+     function Ui(WW, iW) {
+       const OW = iW._actualFrame / iW.targetStopDuration;
+       mW.m.GetCurrentGradient(OW, iW._startSizeGradients, ((OW, mW, EW) => {
+         OW !== iW._currentStartSizeGradient && (iW._currentStartSize1 = iW._currentStartSize2, iW._currentStartSize2 = mW.getFactor(), iW._currentStartSizeGradient = OW);
+         const NW = (0, lW.Lerp)(iW._currentStartSize1, iW._currentStartSize2, EW);
+         WW.scale.scaleInPlace(NW)
+       }))
```

#### 165. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3184-L3252` → after: `L2983-L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2983-L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2983-L2985) · [Before (L3184-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3184-L3252)

```diff
-       let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const ye = ee.config.segment;
-       if (!ye) return ie();
-       const {
-         analytics: be,
-         filterProperties: Me
-       } = (ee => OH(ee.register))(Ke = ye) ? {
-         analytics: Ke
-       } : Ke;
-       var Ke;
-       ! function(ee, ie, He, ye) {
-         const be = ie => {
-             const be = () => ie.anonymousId() || bU();
-             ee.config.get_device_id = be, ye && ie.id() && (ee.register({
-               distinct_id: ie.id(),
-               $device_id: be()
- ... (53 more removed lines; see GitHub link above)
+       mW.m.GetCurrentGradient(iW._ratio, iW._sizeGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentSizeGradient && (WW._properties.currentSize1 = WW._properties.currentSize2, WW._properties.currentSize2 = OW.getFactor(), WW._properties.currentSizeGradient = iW), WW.size = (0, lW.Lerp)(WW._properties.currentSize1, WW._properties.currentSize2 … [truncated]
+       }))
```

#### 166. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3256-L3294` → after: `L2988-L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2988-L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2988-L2989) · [Before (L3256-L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3256-L3294)

```diff
-     function ZF(ee) {
-       let {
-         organization: ie,
-         projectId: He,
-         prefix: ye,
-         severityAllowList: be = ["error"],
-         sendExceptionsToPostHog: Me = !0
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       return Ke => {
-         var Ue, Fe, Je, oe, Re;
-         if ("*" !== be && !be.includes(Ke.level) || !ee.__loaded) return Ke;
-         Ke.tags || (Ke.tags = {});
-         const ke = ee.requestRouter.endpointFor("ui", `/project/${ee.config.token}/person/${ee.get_distinct_id()}`);
-         Ke.tags["PostHog Person URL"] = ke, ee.sessionRecordingStarted() && (Ke.tags["PostHog Recording URL"] = ee.get_session_replay_url({
-           withTimestamp: !0
-         }));
- ... (23 more removed lines; see GitHub link above)
+     function si(WW, iW) {
+       WW.remapData = new NW.r(0, 1, 0, 1)
```

#### 167. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3650-L3655` → after: `L2992-L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2992-L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L2992-L3001) · [Before (L3650-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3650-L3655)

```diff
-     function aF() {
-       try {
-         return Intl.DateTimeFormat().resolvedOptions().timeZone
-       } catch (ye) {
-         return
-       }
+     function Mi(WW, iW) {
+       iW._colorRemapGradients && iW._colorRemapGradients.length > 0 && mW.m.GetCurrentGradient(iW._ratio, iW._colorRemapGradients, ((iW, OW, mW) => {
+         const EW = (0, lW.Lerp)(iW.factor1, OW.factor1, mW),
+           NW = (0, lW.Lerp)(iW.factor2, OW.factor2, mW);
+         WW.remapData.x = EW, WW.remapData.y = NW - EW
+       })), iW._alphaRemapGradients && iW._alphaRemapGradients.length > 0 && mW.m.GetCurrentGradient(iW._ratio, iW._alphaRemapGradients, ((iW, OW, mW) => {
+         const EW = (0, lW.Lerp)(iW.factor1, OW.factor1, mW),
+           NW = (0, lW.Lerp)(iW.factor2, OW.factor2, mW);
+         WW.remapData.z = EW, WW.remapData.w = NW - EW
+       }))
```

#### 168. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3736-L3747` → after: `L3004-L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3004-L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3004-L3013) · [Before (L3736-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3736-L3747)

```diff
-     function IF(ee, ie, He) {
-       if (!iH) return {};
-       const ye = ie ? [...SF, ...He || []] : [],
-         be = hF(mF(iH.URL, ye, jF), ee),
-         Me = function() {
-           const ee = {};
-           return mK(sF, (function(ie) {
-             const He = rK(ie);
-             ee[ie] = He || null
-           })), ee
-         }();
-       return lK(Me, be)
+     function Ki(WW, iW) {
+       const OW = (0, lW.Clamp)(iW._actualFrame / iW.targetStopDuration);
+       mW.m.GetCurrentGradient(OW, iW._lifeTimeGradients, ((iW, mW) => {
+         const EW = iW,
+           NW = mW,
+           PW = EW.getFactor(),
+           LW = NW.getFactor(),
+           cW = (OW - EW.gradient) / (NW.gradient - EW.gradient);
+         WW.lifeTime = (0, lW.Lerp)(PW, LW, cW)
+       })), iW._emitPower = (0, lW.RandomRange)(iW.minEmitPower, iW.maxEmitPower)
```

#### 169. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3751-L3756` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3017) · [Before (L3751-L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3751-L3756)

```diff
-       const He = nF.concat(ie || []),
-         ye = {};
-       return mK(He, (function(ie) {
-         const He = uF(ee, ie);
-         ye[ie] = He || null
-       })), ye
+       WW.lifeTime = (0, lW.RandomRange)(iW.minLifeTime, iW.maxLifeTime), iW._emitPower = (0, lW.RandomRange)(iW.minEmitPower, iW.maxEmitPower)
```

#### 170. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3759-L3770` → after: `L3020-L3021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3020-L3021) · [Before (L3759-L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3759-L3770)

```diff
-     function NF(ee) {
-       const ie = function(ee) {
-           return ee ? 0 === ee.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === ee.search("https?://(.*)bing.com") ? "bing" : 0 === ee.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === ee.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
-         }(ee),
-         He = "yahoo" != ie ? "q" : "p",
-         ye = {};
-       if (!DH(ie)) {
-         ye.$search_engine = ie;
-         const ee = iH ? uF(iH.referrer, He) : "";
-         ee.length && (ye.ph_keyword = ee)
-       }
-       return ye
+     function Yi(WW, iW) {
+       0 === iW._emitPower ? (WW._properties.initialDirection ? WW._properties.initialDirection.HJ(WW.direction) : WW._properties.initialDirection = WW.direction.clone(), WW.direction.set(0, 0, 0)) : (WW._properties.initialDirection = null, WW.direction.scaleInPlace(iW._emitPower) … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3773-L3774` → after: `L3024-L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3024-L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3024-L3025) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3773-L3774)

```diff
-     function GF() {
-       return navigator.language || navigator.userLanguage
+     function yi(WW, iW) {
+       WW.angularSpeed = (0, lW.RandomRange)(iW.minAngularSpeed, iW.maxAngularSpeed), WW.angle = (0, lW.RandomRange)(iW.minInitialRotation, iW.maxInitialRotation)
```

#### 172. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3777-L3779` → after: `L3028-L3029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3028-L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3028-L3029) · [Before (L3777-L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3777-L3779)

```diff
-     function rF() {
-       const ee = GF();
-       return "string" == typeof ee ? ee.split("-")[0] : void 0
+     function Ti(WW, iW) {
+       WW._properties.currentAngularSpeedGradient = iW._angularSpeedGradients[0], WW.angularSpeed = WW._properties.currentAngularSpeedGradient.getFactor(), WW._properties.currentAngularSpeed1 = WW.angularSpeed, iW._angularSpeedGradients.length > 1 ? WW._properties.currentAngularSp … [truncated]
```

#### 173. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3783-L3784` → after: `L3032-L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3032-L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3032-L3033) · [Before (L3783-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3783-L3784)

```diff
-     function eJ() {
-       return (null == iH ? void 0 : iH.referrer) || QF
+     function Ji(WW, iW) {
+       WW._properties.initialStartSpriteCellId = iW.startSpriteCellID, WW._properties.initialEndSpriteCellId = iW.endSpriteCellID, WW._properties.initialSpriteCellLoop = iW.spriteCellLoop
```

#### 174. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3788-L3795` → after: `L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3037) · [Before (L3788-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3788-L3795)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const ye = ee ? [...SF, ...ie || []] : [],
-         be = He ? kb(null == HH ? void 0 : HH.href) : null == HH ? void 0 : HH.href,
-         Me = null == be ? void 0 : be.substring(0, 1e3);
-       return {
-         r: eJ().substring(0, 1e3),
-         u: Me ? mF(Me, ye, jF) : void 0
-       }
+       WW.previousItem = iW.previousItem, WW.nextItem = iW, iW.previousItem && (iW.previousItem.nextItem = WW), iW.previousItem = WW
```

#### 175. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3798-L3819` → after: `L3040-L3041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3040-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3040-L3041) · [Before (L3798-L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3798-L3819)

```diff
-     function HJ(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       var He;
-       const {
-         r: ye,
-         u: be
-       } = ee, Me = ie ? kb(be) : be, Ke = {
-         $referrer: ye,
-         $referring_domain: null == ye ? void 0 : ye == QF ? QF : null === (He = vF(ye)) || void 0 === He ? void 0 : He.host
-       };
-       if (Me) {
-         Ke.$current_url = Me;
-         const ee = vF(Me);
-         Ke.$host = null == ee ? void 0 : ee.host, Ke.$pathname = null == ee ? void 0 : ee.pathname;
-         const ie = hF(Me);
-         lK(Ke, ie)
- ... (6 more removed lines; see GitHub link above)
+     function ni(WW, iW) {
+       WW.previousItem = iW, WW.nextItem = iW.nextItem, iW.nextItem && (iW.nextItem.previousItem = WW), iW.nextItem = WW
```

#### 176. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3822-L3827` → after: `L3044-L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3044-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3044-L3045) · [Before (L3822-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3822-L3827)

```diff
-     function yJ() {
-       try {
-         return (new Date).getTimezoneOffset()
-       } catch (ye) {
-         return
-       }
+     function ui(WW) {
+       WW.previousItem && (WW.previousItem.nextItem = WW.nextItem), WW.nextItem && (WW.nextItem.previousItem = WW.previousItem)
```

#### 177. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3829-L3890` → after: `L3047-L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3047-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3047-L3050) · [Before (L3829-L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3829-L3890)

```diff
-     const bJ = {
-         flags: oe,
-         surveys: Ui
-       },
-       MJ = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
-       KJ = ee => `${ee}_cookie_identity_change_pending`,
-       UJ = ee => {
-         let ie = "",
-           He = 0;
-         for (const ye of ee) {
-           const ee = encodeURIComponent(JSON.stringify(ye).slice(1, -1)).length;
-           if (He + ee > 1e3) break;
-           ie += ye, He += ee
-         }
-         return ie
-       },
- ... (46 more removed lines; see GitHub link above)
+     var oi = OW(41892);
+     class di extends SW {
+       get startDirectionFunction() {
+         return this._startDirectionFunction
```

#### 178. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3892-L3900` → after: `L3052-L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3052-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3052-L3053) · [Before (L3892-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3892-L3900)

```diff
-       markCrossTabFeatureFlagChanges(ee) {
-         Object.entries(ee).forEach((ee => {
-           let [ie, He] = ee;
-           const ye = this._pendingCrossTabFeatureFlagChanges.get(ie);
-           if (!oJ(ie) || !0 === ye) return;
-           if (!0 === He) return void this._setCrossTabFeatureFlagChangesPending(ie, !0);
-           const be = new Set(ye || []);
-           He.forEach((ee => be.add(ee))), be.size && this._setCrossTabFeatureFlagChangesPending(ie, be)
-         }))
+       set startDirectionFunction(WW) {
+         this._startDirectionFunction !== WW && (this._startDirectionFunction = WW, this._directionCreation.process = WW ? Wi : QW)
```

#### 179. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3902-L3903` → after: `L3055-L3056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3055-L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3055-L3056) · [Before (L3902-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3902-L3903)

```diff
-       onCrossTabFeatureFlagChange(ee) {
-         return this._crossTabFeatureFlagHandlers.add(ee), () => this._crossTabFeatureFlagHandlers.delete(ee)
+       get startPositionFunction() {
+         return this._startPositionFunction
```

#### 180. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3905-L3906` → after: `L3058-L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3058-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3058-L3059) · [Before (L3905-L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3905-L3906)

```diff
-       destroy() {
-         this._onStorage && ri && (ri.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
+       set startPositionFunction(WW) {
+         this._startPositionFunction !== WW && (this._startPositionFunction = WW, this._positionCreation.process = WW ? Li : Pi)
```

#### 181. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3908-L3937` → after: `L3061-L3062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3061-L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3061-L3062) · [Before (L3908-L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3908-L3937)

```diff
-       _syncCrossTabFeatureFlagProperties(ee, ie) {
-         let He, ye, be = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         if (this._disabled) return !1;
-         try {
-           if (ye = RU._get(ee), DH(ye)) {
-             const ee = this._slotWriteState(ie);
-             return ee.storageValue = null, ie !== FJ && (ee.persisted = !1), !1
-           }
-           He = fJ(ye)
-         } catch (ee) {
-           return !1
-         }
-         const Me = ie === FJ ? He : RU._parse(this._name);
-         if (Me && this._hasCrossTabFeatureFlagIdentityMismatch(Me)) return !1;
-         const Ke = this._mergeCrossTabFeatureFlagProperties(He, ie, be);
-         return ie === FJ && this._splitStorage && !qJ(this._partitionProps().main, He) || this._rememberCrossTabStorageFingerprint(He, ie, !0, ye), Ke
- ... (14 more removed lines; see GitHub link above)
+       set onDispose(WW) {
+         this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
```

#### 182. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3939-L3978` → after: `L3064-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3064-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3064-L3154) · [Before (L3939-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3939-L3978)

```diff
-       _mergeCrossTabFeatureFlagProperties(ee, ie, He) {
-         let ye = !1;
-         return JJ.forEach((He => {
-           var be;
-           const Me = null === (be = VF(He)) || void 0 === be ? void 0 : be.storageGroup;
-           if (ie === FJ && this._splitStorage && Me || ie !== FJ && Me !== ie) return;
-           const Ke = He in ee,
-             Ue = this._mergePendingCrossTabFeatureFlagChanges(He, Ke ? ee[He] : void 0),
-             Fe = this._pendingCrossTabFeatureFlagChanges.has(He) ? He in this.props : Ke;
-           Fe === He in this.props && qJ(Ue, this.props[He]) || (Fe ? this._setProp(He, Ue, !1) : this._deleteProp(He, !1), ye = !0)
-         })), ye && He && this._crossTabFeatureFlagHandlers.forEach((ee => ee())), ye
-       }
-       _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
-         if (!this._splitStorageEligible) return !1;
-         try {
-           this._crossTabFeatureFlagIdentityMismatch = !1;
- ... (24 more removed lines; see GitHub link above)
+       get Ay() {
+         return this._isDisposed
+       }
+       get useRampGradients() {
+         return this._useRampGradients
+       }
+       set useRampGradients(WW) {
+         this._useRampGradients !== WW && (this._useRampGradients = WW, this._resetEffect(), WW ? (this._rampCreation = {
+           process: si,
+           previousItem: null,
+           nextItem: null
+         }, ni(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
+           process: Mi,
+           previousItem: null,
+           nextItem: null
+         }, ni(this._remapGradientProcessing, this._gravityProcessing))) : (ui(this._rampCreation), ui(this._remapGradientProcessing)))
+ ... (75 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L3981-L3999` → after: `L3157-L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3157-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3157-L3234) · [Before (L3981-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L3981-L3999)

```diff
-       _setCrossTabFeatureFlagChangesPending(ee, ie) {
-         this._pendingCrossTabFeatureFlagChanges.set(ee, ie);
-         const He = VF(ee);
-         (null == He ? void 0 : He.volatile) || (this._slotWriteState((this._splitStorage ? null == He ? void 0 : He.storageGroup : void 0) || FJ).fingerprint = void 0, this._markGroupDirty(ee))
-       }
-       _markAllCrossTabFeatureFlagChangesPending() {
-         JJ.forEach((ee => this._pendingCrossTabFeatureFlagChanges.set(ee, !0)))
-       }
-       _markLoadedCrossTabFeatureFlagChangesPending() {
-         if (this._splitStorageEligible) try {
-           const ee = RU._get(this._name),
-             ie = fJ(ee);
-           this._slotWriteState(FJ).storageValue = ee, JJ.forEach((ee => {
-             var He;
-             const ye = this._splitStorage ? null === (He = VF(ee)) || void 0 === He ? void 0 : He.storageGroup : void 0,
-               be = ye ? RU._get(this._groupEntryName(ye)) : null;
- ... (3 more removed lines; see GitHub link above)
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
+           wW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         pW || (pW = !0, oW(VW.i, DW)), (0, fW.d)(), super(WW), this._emitterInverseWorldMatrix = NW.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new NW.q, this.jD = new EW.e, this.onStoppedObservable = new  … [truncated]
+           const iW = this._particles.pop();
+           iW !== WW && iW.copyTo(WW), iW.metadata = null, this._stockParticles.push(iW)
+         }, this._createParticle = () => {
+           let WW;
+           return 0 !== this._stockParticles.length ? (WW = this._stockParticles.pop(), WW._reset()) : WW = new yW(this), this._prepareParticle(WW), WW
+         }, this.paused = !1, this._shadersLoaded = !1, this._capacity = iW, this._epsilon = LW, OW && "Scene" !== OW.getClassName() ? (this._engine = OW, this.defaultProjectionMatrix = NW.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = OW || cW. … [truncated]
+           process: Si,
+           previousItem: null,
+           nextItem: null
+         }, this._positionCreation = {
+ ... (62 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4001-L4041` → after: `L3236-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3236-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3236-L3364) · [Before (L4001-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4001-L4041)

```diff
-             const Me = ye && !DH(be) ? fJ(be) : ie;
-             ee in this.props ? this._markPendingCrossTabFeatureFlagChanges(ee, Me[ee], this.props[ee]) : ee in Me && this._setCrossTabFeatureFlagChangesPending(ee, !0)
-           }))
-         } catch (ye) {}
-       }
-       _mergePendingCrossTabFeatureFlagChanges(ee, ie) {
-         const He = this._pendingCrossTabFeatureFlagChanges.get(ee);
-         if (!He) return ie;
-         if (!0 === He) return this.props[ee];
-         if ("$active_feature_flags" === ee) {
-           const ye = new Set(gH(ie) ? ie : []),
-             be = new Set(gH(this.props[ee]) ? this.props[ee] : []);
-           return He.forEach((ee => be.has(ee) ? ye.add(ee) : ye.delete(ee))), Array.from(ye)
-         }
-         const ye = dH(ie) ? Eb({}, ie) : {},
-           be = dH(this.props[ee]) ? this.props[ee] : {};
- ... (25 more removed lines; see GitHub link above)
+             this._ratio = mW.age / mW.lifeTime, mW._properties.directionScale = this._tempScaledUpdateSpeed;
+             let NW = this._updateQueueStart;
+             for (; NW;) NW.process(mW, this), NW = NW.nextItem;
+             if (this._isAnimationSheetEnabled && !wW && mW.updateCellIndex(), mW._inheritParticleInfoToSubEmitters(), mW.age >= mW.lifeTime) {
+               if (this._emitFromParticle(mW), mW._properties.attachedSubEmitters) {
+                 for (const WW of mW._properties.attachedSubEmitters) WW.particleSystem.disposeOnStop = !0, WW.particleSystem.stop();
+                 mW._properties.attachedSubEmitters = null
+               }
+               this.recycleParticle(mW), iW && OW--
+             } else;
+           }
+         }
+       }
+       serialize(WW) {
+         throw new Error("Method not implemented.")
+       }
+ ... (113 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4093-L4127` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3367) · [Before (L4093-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4093-L4127)

```diff
-         if ((JU._get(this._name) || void 0) !== ie) return !1;
-         this._lastSeenCookiePropertiesFingerprint = ye, this._lastSeenMainCookieValue = ie;
-         const Me = EU(this._name, ie),
-           Ke = [...qU, ...Me.properties],
-           ke = {};
-         if (Object.keys(be).forEach((ee => {
-             const ie = be[ee];
-             (tH(ie) || DH(ie) || "" === ie || "$user_state" === ee && "anonymous" !== ie && "identified" !== ie) && (ke[ee] = !0, delete be[ee])
-           })), WH(be)) return !1;
-         const Xe = "distinct_id" in be || "anonymous" === be.$user_state || "identified" === be.$user_state,
-           Be = this.props,
-           Ee = Be[de],
-           ge = Be[Bi],
-           Oe = lK({}, Be);
-         [...qU, ...ee.cookie_persisted_properties || []].forEach((ee => {
-           if (-1 !== Ke.indexOf(ee) && !(ee in be) && !ke[ee] && (Xe || "distinct_id" !== ee && "$user_state" !== ee)) {
- ... (19 more removed lines; see GitHub link above)
+         this._rampGradientsTexture = LW.b.CreateRGBATexture(WW, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
```

#### 186. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4129-L4130` → after: `L3369-L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3369-L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3369-L3370) · [Before (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4129-L4130)

```diff
-       _publishSuppressedCookieSnapshot() {
-         this._cookieSyncSuppressed && (tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[FJ], this._writeNow(!0))
+       getRampGradients() {
+         return this._rampGradients
```

#### 187. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4132-L4141` → after: `L3372-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3372-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3372-L3373) · [Before (L4132-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4132-L4141)

```diff
-       _endCookieSyncSuppression() {
-         let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         if (this._cookieSyncSuppressed) try {
-           ee ? this._publishSuppressedCookieSnapshot() : tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
-         } finally {
-           this._cookieSyncSuppressed = !1
-         }
-       }
-       isDisabled() {
-         return !!this._disabled
+       forceRefreshGradients() {
+         this._syncRampGradientTexture()
```

#### 188. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4143-L4218` → after: `L3375-L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3375-L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3375-L3376) · [Before (L4143-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4143-L4218)

```diff
-       _buildStorage(ee) {
-         -1 === MJ.indexOf(ee.persistence.toLowerCase()) && (CK.critical("Unknown persistence type " + ee.persistence + "; falling back to localStorage+cookie"), ee.persistence = "localStorage+cookie");
-         const ie = function() {
-           let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-             ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
-           const ye = [...qU, ...ee];
-           return Eb(Eb({}, RU), {}, {
-             _parse(ee) {
-               try {
-                 let Me, Ke = {};
-                 try {
-                   Me = JU._get(ee) || void 0, Ke = Me ? pU(JSON.parse(Me)) : {}
-                 } catch (ee) {}
-                 const Ue = JSON.parse(RU._get(ee) || "{}");
-                 let Fe;
- ... (60 more removed lines; see GitHub link above)
+       _syncRampGradientTexture() {
+         this._rampGradients && (this._rampGradients.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
```

#### 189. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4220-L4221` → after: `L3378-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3378-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3378-L3381) · [Before (L4220-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4220-L4221)

```diff
-       _groupEntryName(ee) {
-         return `${this._name}__${ee}`
+       addRampGradient(WW, iW) {
+         this._rampGradients || (this._rampGradients = []);
+         const OW = new mW.g(WW, iW);
+         return this._rampGradients.push(OW), this._syncRampGradientTexture(), this
```

#### 190. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4223-L4224` → after: `L3383-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3383-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3383-L3384) · [Before (L4223-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4223-L4224)

```diff
-       _resolveSplitStorage(ee) {
-         return this._splitStorageEligible && !!ee.split_storage
+       removeRampGradient(WW) {
+         return this._removeGradientAndTexture(WW, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
```

#### 191. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4226-L4235` → after: `L3386-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3386-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3386-L3389) · [Before (L4226-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4226-L4235)

```diff
-       properties() {
-         const ee = {};
-         return mK(this.props, ((ie, He) => {
-           const ye = VF(He);
-           if (!ye || "event" === ye.exposure) {
-             var be;
-             if (null == ye || null === (be = ye.shouldSkipFromEventProperties) || void 0 === be ? void 0 : be.call(ye, ie)) return;
-             ee[He] = ie
-           }
-         })), ee
+       addColorGradient(WW, iW, OW) {
+         this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = IW, this._colorProcessing.process = aW);
+         const EW = new mW.d(WW, iW, OW);
+         return this._colorGradients.push(EW), this._colorGradients.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0)), this
```

#### 192. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4237-L4274` → after: `L3391-L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3391-L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3391-L3397) · [Before (L4237-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4237-L4274)

```diff
-       load() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._disabled && !ee) return;
-         const ie = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
-           He = ie ? RU._parse(this._name) : null;
-         let ye = {};
-         if (ie) try {
-           ye = pU(JU._parse(this._name)), mK(ye, ((ee, ie) => {
-             (tH(ee) || DH(ee) || "" === ee) && delete ye[ie]
-           }))
-         } catch (ee) {}
-         const be = this.aT._parse(this._name);
-         if (be && (this.props = lK({}, be)), this._splitStorage && this._loadGroupEntries(), ie && be) {
-           var Me, Ke;
-           const ee = null == He ? void 0 : He[de],
-             ie = null !== (Me = null == He ? void 0 : He.$user_state) && void 0 !== Me ? Me : li,
- ... (22 more removed lines; see GitHub link above)
+       removeColorGradient(WW) {
+         if (!this._colorGradients) return this;
+         let iW = 0;
+         for (const OW of this._colorGradients) {
+           if (OW.gradient === WW) {
+             this._colorGradients.splice(iW, 1);
+             break
```

#### 193. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4277` → after: `L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3401) · [Before (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4277)

```diff
-         tU._get(KJ(this._name)) && (this._cookieIdentityChangePending = !0)
+         return 0 === this._colorGradients.length && (this._colorCreation.process = RW, this._colorProcessing.process = rW), this
```

#### 194. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4279-L4285` → after: `L3403-L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3403-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3403-L3408) · [Before (L4279-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4279-L4285)

```diff
-       _loadGroupEntries() {
-         for (const ee of PF) {
-           const ie = RU._parse(this._groupEntryName(ee));
-           if (ie && !WH(ie)) {
-             const He = this._slotWriteState(ee);
-             He.persisted = !0, this._mainCarriesGroupKey(ee) || (He.fingerprint = this._entryFingerprint(ie, ee)), this._groupEntryIsStale(ee, ie) || lK(this.props, ie)
-           }
+       resetDrawCache() {
+         if (this._drawWrappers) {
+           for (const WW of this._drawWrappers)
+             if (WW)
+               for (const iW of WW) iW?.dispose();
+           this._drawWrappers = []
```

#### 195. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4288-L4314` → after: `L3411-L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3411-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3411-L3412) · [Before (L4288-L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4288-L4314)

```diff
-       _mainCarriesGroupKey(ee) {
-         return Object.keys(this.props).some((ie => {
-           var He;
-           return (null === (He = VF(ie)) || void 0 === He ? void 0 : He.storageGroup) === ee
-         }))
-       }
-       _groupEntryIsStale(ee, ie) {
-         const He = bJ[ee];
-         if (!He) return !1;
-         const ye = ie[He],
-           be = this.props[He];
-         return AH(ye) && AH(be) && be > ye
-       }
-       refreshKey(ee) {
-         var ie;
-         if (this._disabled) return;
- ... (11 more removed lines; see GitHub link above)
+       _fetchR(WW, iW, OW, mW, EW) {
+         return EW[4 * (((WW = .5 * Math.abs(WW) + .5) * OW % OW | 0) + ((iW = .5 * Math.abs(iW) + .5) * mW % mW | 0) * OW)] / 255
```

#### 196. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4316-L4321` → after: `L3414-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3414-L3415) · [Before (L4316-L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4316-L4321)

```diff
-       save() {
-         if (this._disabled) return;
-         const ee = this._saveDebounceMs();
-         ee > 0 ? tH(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
-           this._pendingSaveTimer = void 0, this._writeNow()
-         }), ee)) : this._writeNow()
+       _reset() {
+         this._resetEffect()
```

#### 197. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4323-L4324` → after: `L3417-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3417-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3417-L3418) · [Before (L4323-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4323-L4324)

```diff
-       flush() {
-         tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
+       _resetEffect() {
+         this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayO … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4326-L4361` → after: `L3420-L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3420-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3420-L3485) · [Before (L4326-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4326-L4361)

```diff
-       _writeNow() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._disabled || this._cookieSyncSuppressed && !ee) return;
-         ee || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || RJ.forEach((ee => this.refreshKey(ee))));
-         const ie = !ee && !this._storageMigrationInProgress;
-         ie || (this._crossTabFeatureFlagIdentityMismatch = !1);
-         const He = !!ie && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
-         if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && CK.warn("skipping persistence write because storage belongs to a different distinct ID"));
-         if (this._splitStorage) return this._writeNowSplit(), void(He && this._crossTabFeatureFlagHandlers.forEach((ee => ee())));
-         const ye = this._writeEntry(this.aT, this._name, this.props, FJ);
-         "written" === ye && this._rememberCurrentCookieProperties(this.props), "failed" !== ye && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), He && this._crossTabFeatureFlagHandlers.forEach(( … [truncated]
-       }
-       _writeNowSplit() {
-         const {
-           main: ee,
-           groups: ie
- ... (20 more removed lines; see GitHub link above)
+       _createVertexBuffers() {
+         this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertex … [truncated]
+         const WW = this._engine,
+           iW = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
+         this._vertexData = new Float32Array(this._capacity * iW), this._vertexBuffer = new PW.b(WW, this._vertexData, !0, iW);
+         let OW = 0;
+         const mW = this._vertexBuffer.createVertexBuffer(PW.k.PositionKind, OW, 3, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[PW.k.PositionKind] = mW, OW += 3;
+         const EW = this._vertexBuffer.createVertexBuffer(PW.k.ColorKind, OW, 4, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[PW.k.ColorKind] = EW, OW += 4;
+         const NW = this._vertexBuffer.createVertexBuffer("angle", OW, 1, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers.angle = NW, OW += 1;
+         const LW = this._vertexBuffer.createVertexBuffer("size", OW, 2, this._vertexBufferSize, this._useInstancing);
+         if (this._vertexBuffers.size = LW, OW += 2, this._isAnimationSheetEnabled) {
+           const WW = this._vertexBuffer.createVertexBuffer("cellIndex", OW, 1, this._vertexBufferSize, this._useInstancing);
+           this._vertexBuffers.cellIndex = WW, OW += 1
+ ... (50 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4364-L4376` → after: `L3489-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3489-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3489-L3506) · [Before (L4364-L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4364-L4376)

```diff
-       _partitionProps() {
-         const ee = {},
-           ie = {
-             flags: {},
-             surveys: {}
-           };
-         return mK(this.props, ((He, ye) => {
-           var be;
-           const Me = null === (be = VF(ye)) || void 0 === be ? void 0 : be.storageGroup;
-           Me ? ie[Me][ye] = He : ee[ye] = He
-         })), {
-           main: ee,
-           groups: ie
+       stop() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(WW))
+       }
+       _postStop(WW) {}
+       reset() {
+         this._stockParticles.length = 0, this._particles.length = 0
+       }
+       _appendParticleVertex(WW, iW, OW, mW) {
+         let EW = WW * this._vertexBufferSize;
+         const PW = NW.l.fA[0].HJ(this._scene?.floatingOriginOffset || NW.q.ZeroReadOnly);
+         if (this._vertexData[EW++] = iW.position.x + this.worldOffset.x - PW.x, this._vertexData[EW++] = iW.position.y + this.worldOffset.y - PW.y, this._vertexData[EW++] = iW.position.z + this.worldOffset.z - PW.z, this._vertexData[EW++] = iW.color.r, this._vertexData[EW++] = iW … [truncated]
+         else if (iW._properties.initialDirection) {
+           let WW = iW._properties.initialDirection;
+           this.isLocal && (NW.q.TransformNormalToRef(WW, this._emitterWorldMatrix, NW.l.fA[0]), WW = NW.l.fA[0]), 0 === WW.x && 0 === WW.z && (WW.x = .001), this._vertexData[EW++] = WW.x, this._vertexData[EW++] = WW.y, this._vertexData[EW++] = WW.z
+         } else {
+ ... (2 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4379-L4389` → after: `L3510-L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3510-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3510-L3511) · [Before (L4379-L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4379-L4389)

```diff
-       _entryFingerprint(ee, ie) {
-         if (ie === FJ) return JSON.stringify(ee) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
-         const He = {};
-         return mK(ee, ((ee, ie) => {
-           var ye;
-           He[ie] = (null === (ye = VF(ie)) || void 0 === ye ? void 0 : ye.volatile) ? "__volatile__" : ee
-         })), JSON.stringify(He)
-       }
-       _writeEntry(ee, ie, He, ye) {
-         const be = this._slotWriteState(ye);
-         if (ye !== FJ && !be.yT && !tH(be.fingerprint)) return "skipped";
+       _prepareParticle(WW) {}
+       _createNewOnes(WW) {
```

#### 201. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4391-L4394` → after: `L3513-L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3513-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3513-L3517) · [Before (L4391-L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4391-L4394)

```diff
-         try {
-           if (Me = this._entryFingerprint(He, ye), Me === be.fingerprint) return be.yT = !1, "skipped"
-         } catch (ee) {
-           Me = void 0
+         for (let OW = 0; OW < WW && this._particles.length !== this._capacity; OW++) {
+           iW = this._createParticle(), this._particles.push(iW);
+           let WW = this._createQueueStart;
+           for (; WW;) WW.process(iW, this), WW = WW.nextItem;
+           iW._inheritParticleInfoToSubEmitters()
```

#### 202. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4396-L4415` → after: `L3519-L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3519-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3519-L3526) · [Before (L4396-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4396-L4415)

```diff
-         return ee._set(ie, He, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (be.yT = !1, ye !== FJ && (be.persisted = !0), tH(Me) || (be.fingerprint = Me), this._splitStorageEligible && (be.storageValue = RU._get(ie)), "written") : (this._config.d … [truncated]
-       }
-       remove() {
-         let {
-           keepGroupEntries: ee = !1
-         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (this._markAllCrossTabFeatureFlagChangesPending(), tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.aT._remove(this._name, !1), this.aT._remove(this._name, !0), !ee && this._ownsSplitStorage)
-           for (const ie of PF) RU._remove(this._groupEntryName(ie));
-         ee ? delete this._slotState[FJ] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
-       }
-       clear() {
-         this.remove(), this.props = {}
-       }
-       register_once(ee, ie, He) {
-         if (dH(ee)) {
-           this.syncCookieProperties(), tH(ie) && (ie = "None"), this._expire_days = tH(He) ? this._default_expiry : He;
- ... (4 more removed lines; see GitHub link above)
+       }
+       _update(WW) {
+         if (this._alive = this._particles.length > 0, this.emitter.position) {
+           const WW = this.emitter;
+           this._emitterWorldMatrix = WW.getWorldMatrix()
+         } else {
+           const WW = this.emitter;
+           this._emitterWorldMatrix = NW.d.Translation(WW.x, WW.y, WW.z)
```

#### 203. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4417` → after: `L3528-L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3528-L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3528-L3535) · [Before (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4417)

```diff
-         return !1
+         this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(WW)
+       }
+       static _GetAttributeNamesOrOptions() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = [PW.k.PositionKind, PW.k.ColorKind, "angle", "offset", "size"];
+         return WW && mW.push("cellIndex"), iW || mW.push("direction"), OW && mW.push("remapData"), mW
```

#### 204. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4419-L4425` → after: `L3537-L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3537-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3537-L3555) · [Before (L4419-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4419-L4425)

```diff
-       register(ee, ie) {
-         if (dH(ee)) {
-           this.syncCookieProperties(), this._expire_days = tH(ie) ? this._default_expiry : ie;
-           let He = !1;
-           if (mK(ee, ((ie, ye) => {
-               ee.hasOwnProperty(ye) && (this.props[ye] !== ie || dH(ie) || gH(ie)) && (this._setProp(ye, ie), He = !0)
-             })), He) return this.save(), !0
+       static _GetEffectCreationOptions() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
+         return (0, XW.d)(mW), WW && mW.push("particlesInfos"), iW && mW.push("logarithmicDepthConstant"), OW && (mW.push("vFogInfos"), mW.push("vFogColor")), mW
+       }
+       fillDefines(WW, iW) {
+         let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this._scene && ((0, XW.k)(this, this._scene, WW), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && WW.push("#define FOG")), this._isAnimationSheetEnabled && WW.push("#define ANIMATESHEET"), this.useLogarithmicDepth && WW.push("#define LOGARITHMI … [truncated]
+           case 2:
+             WW.push("#define BILLBOARDY");
+             break;
+           case 8:
+           case 9:
+             WW.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && WW.push("#define BILLBOARDSTRETCHED_LOCAL");
+ ... (3 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4427` → after: `L3557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3557) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4427)

```diff
-         return !1
+         OW && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), WW.push(this._imageProcessingConfigurationDefines.toString()))
```

#### 206. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4429-L4449` → after: `L3559-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3559-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3559-L3562) · [Before (L4429-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4429-L4449)

```diff
-       unregister(ee) {
-         this.syncCookieProperties();
-         const ie = "string" == typeof ee ? [ee] : ee;
-         let He = !1;
-         for (const ye of ie) ye in this.props && (this._deleteProp(ye), He = !0);
-         He && this.save()
-       }
-       update_campaign_params() {
-         const ee = null == iH ? void 0 : iH.URL;
-         if (ee === this._campaign_params_url) return;
-         const ie = IF(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
-           He = !WH(jK(ie));
-         return He && this.register(ie), this._campaign_params_url = ee, He ? ie : void 0
-       }
-       update_search_keyword() {
-         this.register(function() {
- ... (5 more removed lines; see GitHub link above)
+       fillUniformsAttributesAndSamplerNames(WW, iW, OW) {
+         iW.push(...di._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), WW.push(...di._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDep … [truncated]
+       }
+       _getWrapper(WW) {
```

#### 207. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4451-L4471` → after: `L3564-L3654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3564-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3564-L3654) · [Before (L4451-L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4451-L4471)

```diff
-         this.register_once({
-           $referrer: eJ(),
-           $referring_domain: (null == iH ? void 0 : iH.referrer) && (null === (ee = vF(iH.referrer)) || void 0 === ee ? void 0 : ee.host) || QF
-         }, void 0)
-       }
-       set_initial_person_info() {
-         if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
-         const ee = iJ(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
-         this.register_once({
-           [Wi]: this._storesIdentityInCookie ? {
-             r: UJ(ee.r),
-             u: ee.u ? UJ(ee.u) : void 0
-           } : ee
-         }, void 0)
-       }
-       get_initial_props() {
- ... (5 more removed lines; see GitHub link above)
+         const OW = this._getCustomDrawWrapper(WW);
+         if (OW?.effect) return OW;
+         const mW = [];
+         this.fillDefines(mW, WW);
+         const NW = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
+           PW = oi.d._PrepareStringDefines(NW, mW),
+           LW = PW ? oi.d.GetConfiguration(NW) : void 0;
+         let cW = this._drawWrappers[NW];
+         cW || (cW = this._drawWrappers[NW] = [], 0 === NW || this._renderPassObserver || (this._renderPassObserver = ((iW = this._engine)._onReleaseRenderPassObservable ?? (iW._onReleaseRenderPassObservable = new EW.e)).add((WW => {
+           const iW = this._drawWrappers[WW];
+           if (iW) {
+             for (const WW of iW) WW?.dispose();
+             delete this._drawWrappers[WW]
+           }
+         }))));
+         let wW = cW[WW];
+ ... (75 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4487-L4512` → after: `L3659-L3698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3659-L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3659-L3698) · [Before (L4487-L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4487-L4512)

```diff
-       safe_merge(ee) {
-         return mK(this.props, (function(ie, He) {
-           He in ee || (ee[He] = ie)
-         })), ee
-       }
-       update_config(ee, ie, He) {
-         const ye = ee.persistence !== ie.persistence,
-           be = !((ee, ie) => {
-             if (ee.length !== ie.length) return !1;
-             const He = [...ee].sort(),
-               ye = [...ie].sort();
-             return He.every(((ee, ie) => ee === ye[ie]))
-           })(ee.cookie_persisted_properties || [], ie.cookie_persisted_properties || []),
-           Me = ye || be,
-           Ke = ee.cookieWinsOnConflict !== ie.cookieWinsOnConflict,
-           Ue = ee.disable_persistence || !!He,
- ... (10 more removed lines; see GitHub link above)
+       _appendParticleVertices(WW, iW) {
+         this._appendParticleVertex(WW++, iW, 0, 0), this._useInstancing || (this._appendParticleVertex(WW++, iW, 1, 0), this._appendParticleVertex(WW++, iW, 1, 1), this._appendParticleVertex(WW, iW, 0, 1))
+       }
+       rebuild() {
+         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
+       }
+       async _initShaderSourceAsync() {
+         this._engine.isWebGPU && !di.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([OW.e(664).then((() => OW(64427))), OW.e(658).then((() => OW(64432)))])) : await Promise.all([OW.e(647).then((() => OW(64436))), Promise.all([OW.e(640), OW.e(673)]).then((() => OW(64439) … [truncated]
+       }
+       isReady() {
+         if (!this._shadersLoaded) return !1;
+         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
+         if (this.blendMode !== SW.BLENDMODE_MULTIPLYADD) {
+           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
+         } else {
+           if (!this._getWrapper(SW.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
+ ... (24 more added lines; see GitHub link above)
```

#### 209. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4514-L4517` → after: `L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3700) · [Before (L4514-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4514-L4517)

```diff
-           if (this._default_expiry = this._expire_days = ee.cookie_expiration, this.set_disabled(Ue), this.set_cross_subdomain(ee.cross_subdomain_cookie), this.set_secure(ee.secure_cookie), Re) {
-             const ee = this.props;
-             this.clear(), this.aT = Je, this._splitStorage = oe, this.props = ee, this.save()
-           } else Ke && (this.aT = Je, Ue || (delete this._slotState[FJ], this._writeNow()))
+           oi.d._BindAttachmentsForEffect(mW, OW) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(OW), this._useInstancing ? this._scene?.forceWireframe ? mW.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._cap … [truncated]
```

#### 210. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4519` → after: `L3702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3702) · [Before (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4519)

```diff
-           this._storageMigrationInProgress = !1, ke && this._endCookieSyncSuppression()
+           oi.d._RestoreAttachments(mW)
```

#### 211. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4522-L4530` → after: `L3706-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3706-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3706-L3710) · [Before (L4522-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4522-L4530)

```diff
-       _truncateExistingPersonInfoForCookie() {
-         const ee = this.props[Wi];
-         if (!this._storesIdentityInCookie || !dH(ee) || "string" != typeof ee.r) return;
-         const ie = UJ(ee.r),
-           He = "string" == typeof ee.u ? UJ(ee.u) : ee.u;
-         ie === ee.r && He === ee.u || this._setProp(Wi, Eb(Eb({}, ee), {}, {
-           r: ie,
-           u: He
-         }))
+       render() {
+         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
+         const WW = this._engine;
+         let iW;
+         return WW.setState && (WW.setState(!1), this.forceDepthWrite && WW.setDepthWrite(!0)), iW = this.blendMode === SW.BLENDMODE_MULTIPLYADD ? this._render(SW.BLENDMODE_MULTIPLY) + this._render(SW.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
```

#### 212. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4532-L4533` → after: `L3712-L3721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3712-L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3712-L3721) · [Before (L4532-L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4532-L4533)

```diff
-       set_disabled(ee) {
-         this._disabled = ee, this._disabled ? this.remove() : this.save()
+       _onDispose() {}
+       dispose() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
+           const WW = this._scene.vY.indexOf(this);
+           WW > -1 && this._scene.vY.splice(WW, 1), this._scene._activeParticleSystems.dispose()
+         }
+         this.jD.notifyObservers(this), this.jD.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
```

#### 213. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4535-L4538` → after: `L3723-L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3723-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3723-L3734) · [Before (L4535-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4535-L4538)

```diff
-       set_cross_subdomain(ee) {
-         ee !== this._cross_subdomain && (this._cross_subdomain = ee, this.remove({
-           keepGroupEntries: !0
-         }), this.save())
+     }
+     di.ForceGLSL = !1;
+     var ei, vi = OW(38299);
+     ! function(WW) {
+       WW[WW.ATTACHED = 0] = "ATTACHED", WW[WW.END = 1] = "END"
+     }(ei || (ei = {}));
+     class gi {
+       constructor(WW) {
+         if (this.particleSystem = WW, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !WW.emitter || !WW.emitter.dispose) {
+           const iW = (0, vi.d)("BABYLON.AbstractMesh");
+           WW.emitter = new iW("SubemitterSystemEmitter", WW.bD()), WW._disposeEmitterOnDispose = !0
+         }
```

#### 214. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4540-L4543` → after: `L3736-L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3736-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3736-L3745) · [Before (L4540-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4540-L4543)

```diff
-       set_secure(ee) {
-         ee !== this._secure && (this._secure = ee, this.remove({
-           keepGroupEntries: !0
-         }), this.save())
+       clone() {
+         let WW = this.particleSystem.emitter;
+         if (WW) {
+           if (WW instanceof NW.q) WW = WW.clone();
+           else if (-1 !== WW.getClassName().indexOf("Mesh")) {
+             WW = new((0, vi.d)("BABYLON.Mesh"))("", WW.bD()), WW.isVisible = !1
+           }
+         } else WW = new NW.q;
+         const iW = new gi(this.particleSystem.clone(this.particleSystem.name, WW));
+         return iW.particleSystem.name += "Clone", iW.type = this.type, iW.inheritDirection = this.inheritDirection, iW.inheritedVelocityAmount = this.inheritedVelocityAmount, iW.particleSystem._disposeEmitterOnDispose = !0, iW.particleSystem.disposeOnStop = !0, iW
```

#### 215. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4545-L4547` → after: `L3747-L3750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3747-L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3747-L3750) · [Before (L4545-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4545-L4547)

```diff
-       set_event_timer(ee, ie) {
-         const He = this.props.__timers || {};
-         He[ee] = ie, this._setProp(Ve, He), this.save()
+       serialize() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = {};
+         return iW.type = this.type, iW.inheritDirection = this.inheritDirection, iW.inheritedVelocityAmount = this.inheritedVelocityAmount, iW.particleSystem = this.particleSystem.serialize(WW), iW
```

#### 216. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4549-L4552` → after: `L3752-L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3752-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3752-L3753) · [Before (L4549-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4549-L4552)

```diff
-       remove_event_timer(ee) {
-         const ie = this.props.__timers || {},
-           He = ie[ee];
-         return tH(He) || (delete ie[ee], this._setProp(Ve, ie), this.save()), He
+       static _ParseParticleSystem(WW, iW, OW) {
+         throw (0, gW.o)("ParseParticle")
```

#### 217. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4554-L4555` → after: `L3755-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3755-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3755-L3758) · [Before (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4554-L4555)

```diff
-       get_property(ee) {
-         return this.props[ee]
+       static Parse(WW, iW, OW) {
+         const mW = WW.particleSystem,
+           EW = new gi(gi._ParseParticleSystem(mW, iW, OW, !0));
+         return EW.type = WW.type, EW.inheritDirection = WW.inheritDirection, EW.inheritedVelocityAmount = WW.inheritedVelocityAmount, EW.particleSystem._isSubEmitter = !0, EW
```

#### 218. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4557-L4558` → after: `L3760-L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3760-L3761) · [Before (L4557-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4557-L4558)

```diff
-       set_property(ee, ie) {
-         this._setProp(ee, ie), this.save()
+       dispose() {
+         this.particleSystem.dispose()
```

#### 219. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4560-L4564` → after: `L3763-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3763-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3763-L3787) · [Before (L4560-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4560-L4564)

```diff
-       _setProp(ee, ie) {
-         let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         var ye;
-         const be = this.props[ee];
-         this.props[ee] = ie, He && ("distinct_id" !== ee && "$user_state" !== ee || be === ie || (this._localIdentityChangePending = !0), kJ(ee) && !qJ(be, ie) && this._metaIdentifierChangePending.add(ee), this._markPendingCrossTabFeatureFlagChanges(ee, be, ie), (null === (ye = V … [truncated]
+     }
+     var Di = OW(41423),
+       Vi = OW(41538);
+     const fi = () => {};
+     class Ci {
+       constructor() {
+         this.particlePositionGenerator = fi, this.particleDestinationGenerator = fi, this.particleDirectionGenerator = fi
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         const EW = NW.l.fA[0];
+         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== fi) this.particleDirectionGenerator(-1, OW, EW);
+         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== fi) {
+           this.particleDestinationGenerator(-1, OW, EW);
+           const WW = NW.l.fA[1];
+           EW.subtractToRef(OW.position, WW), WW.scaleToRef(1 / OW.lifeTime, EW)
+         } else EW.set(0, 0, 0);
+ ... (9 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4566-L4568` → after: `L3789-L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3789-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3789-L3792) · [Before (L4566-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4566-L4568)

```diff
-       _deleteProp(ee) {
-         let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         delete this.props[ee], ie && (oJ(ee) && this._setCrossTabFeatureFlagChangesPending(ee, !0), kJ(ee) && this._metaIdentifierChangePending.add(ee), this._markGroupDirty(ee))
+       applyToShader(WW) {}
+       buildUniformLayout(WW) {}
+       getEffectDefines() {
+         return "#define CUSTOMEMITTER"
```

#### 221. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4570-L4573` → after: `L3794-L3795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3794-L3795) · [Before (L4570-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4570-L4573)

```diff
-       _markGroupDirty(ee) {
-         var ie;
-         const He = null === (ie = VF(ee)) || void 0 === ie ? void 0 : ie.storageGroup;
-         He && (this._slotWriteState(He).yT = !0)
+       getClassName() {
+         return "CustomParticleEmitter"
```

#### 222. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4575-L4576` → after: `L3797-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3797-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3797-L3799) · [Before (L4575-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4575-L4576)

```diff
-       _slotWriteState(ee) {
-         return this._slotState[ee] || (this._slotState[ee] = {})
+       serialize() {
+         const WW = {};
+         return WW.type = this.getClassName(), WW.particlePositionGenerator = this.particlePositionGenerator, WW.particleDestinationGenerator = this.particleDestinationGenerator, WW
```

#### 223. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4578-L4606` → after: `L3801-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3801-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3801-L3802) · [Before (L4578-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4578-L4606)

```diff
-     };
-     const XJ = {
-         GZipJS: "gzip-js",
-         Base64: "base64"
-       },
-       zJ = "events",
-       BJ = "cancelEvents",
-       EJ = "popover",
-       gJ = "api",
-       OJ = "widget",
-       dJ = "survey shown",
-       WJ = "survey dismissed",
-       tJ = "survey sent",
-       ZJ = "$survey_id",
-       wJ = "$survey_iteration",
-       DJ = "$survey_last_seen_date",
- ... (13 more removed lines; see GitHub link above)
+       parse(WW) {
+         WW.particlePositionGenerator && (this.particlePositionGenerator = WW.particlePositionGenerator), WW.particleDestinationGenerator && (this.particleDestinationGenerator = WW.particleDestinationGenerator)
```

#### 224. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4609-L4630` → after: `L3805-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3805-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3805-L3810) · [Before (L4609-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4609-L4630)

```diff
-     const VJ = "product tour shown",
-       aJ = "$product_tour_last_seen_date",
-       cJ = "$product_tour_type",
-       xJ = vK("[RateLimiter]");
-     var LJ = class {
-       constructor(ee) {
-         this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = ee => {
-           const ie = ee.text;
-           if (ie && ie.length) try {
-             (JSON.parse(ie).quota_limited || []).forEach((ee => {
-               xJ.info(`${ee||"events"} is quota limited.`), this.serverLimits[ee] = (new Date).getTime() + 6e4
-             }))
-           } catch (ee) {
-             return void xJ.warn(`could not rate limit - continuing. Error: "${null==ee?void 0:ee.message}"`, {
-               text: ie
-             })
- ... (6 more removed lines; see GitHub link above)
+     const Xi = NW.q.Zero(),
+       Bi = NW.q.Zero(),
+       qi = NW.q.Zero();
+     class Ri {
+       constructor() {
+         this.strength = 0, this.position = NW.q.Zero()
```

#### 225. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4632-L4634` → after: `L3812-L3815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3812-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3812-L3815) · [Before (L4632-L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4632-L4634)

```diff
-       get captureEventsBurstLimit() {
-         var ee;
-         return Math.max((null === (ee = this.instance.config.rate_limiting) || void 0 === ee ? void 0 : ee.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
+       _processParticle(WW, iW) {
+         this.position.subtractToRef(WW.position, Xi);
+         const OW = Xi.lengthSquared() + 1;
+         Xi.normalize().scaleToRef(this.strength / OW, Bi), Bi.scaleToRef(iW._tempScaledUpdateSpeed, qi), WW.direction.addInPlace(qi)
```

#### 226. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4636-L4650` → after: `L3817-L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3817-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3817-L3820) · [Before (L4636-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4636-L4650)

```diff
-       clientRateLimitContext() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         var ie, He, ye;
-         const {
-           captureEventsBurstLimit: be,
-           captureEventsPerSecond: Me
-         } = this, Ke = (new Date).getTime(), Ue = null !== (ie = null === (He = this.instance.persistence) || void 0 === He ? void 0 : He.get_property("$capture_rate_limit")) && void 0 !== ie ? ie : {
-           tokens: be,
-           last: Ke
-         };
-         Ue.tokens += (Ke - Ue.last) / 1e3 * Me, Ue.last = Ke, Ue.tokens > be && (Ue.tokens = be);
-         const Fe = 1 > Ue.tokens;
-         if (Fe || ee || (Ue.tokens = Math.max(0, Ue.tokens - 1)), Fe && !ee) {
-           const ee = (AH(Ue.dropped) ? Ue.dropped : 0) + 1;
-           Ue.dropped = ee, !this.lastEventRateLimited && this._captureWarning(ee) && (Ue.dropped = 0)
+       serialize() {
+         return {
+           position: this.position.wEW(),
+           strength: this.strength
```

#### 227. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4652-L4654` → after: `L3822-L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3822-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3822-L3834) · [Before (L4652-L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4652-L4654)

```diff
-         return this.lastEventRateLimited = Fe, null === (ye = this.instance.persistence) || void 0 === ye || ye.set_property("$capture_rate_limit", Ue), {
-           isRateLimited: Fe,
-           remainingTokens: Ue.tokens
+       }
+     }
+     const Gi = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
+     class Ii extends di {
+       constructor() {
+         super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metad … [truncated]
+           if (!this._subEmitters || 0 === this._subEmitters.length) return;
+           const iW = Math.floor(Math.random() * this._subEmitters.length);
+           for (const OW of this._subEmitters[iW])
+             if (1 === OW.type) {
+               const iW = OW.clone();
+               WW._inheritParticleInfoToSubEmitter(iW), iW.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(iW.particleSystem), iW.particleSystem.start()
+             }
```

#### 228. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4657-L4659` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3837-L3838) · [Before (L4657-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4657-L4659)

```diff
-       _isPropertyAllowed(ee) {
-         const ie = this.instance.config.property_denylist;
-         return !gH(ie) || !ie.includes(ee)
+       get source() {
+         return this._source
```

#### 229. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4661-L4675` → after: `L3840-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3840-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3840-L3841) · [Before (L4661-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4661-L4675)

```diff
-       _triggeringPage() {
-         var ee;
-         if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == HH ? void 0 : HH.pathname)) return `${null!==(ee=HH.origin)&&void 0!==ee?ee:""}${HH.pathname}`
-       }
-       _captureWarning(ee) {
-         var ie, He;
-         const {
-           captureEventsBurstLimit: ye,
-           captureEventsPerSecond: be
-         } = this, Me = this._triggeringPage(), Ke = this._isPropertyAllowed("$session_id") ? null === (ie = (He = this.instance).get_session_id) || void 0 === ie ? void 0 : ie.call(He) : void 0, Ue = [`${ee} event(s) dropped since the last warning`, Me ? `triggered on ${Me}` : vo … [truncated]
-         return !!this.instance.capture("$$client_ingestion_warning", {
-           $$client_ingestion_warning_message: `posthog-js client rate limited: ${Ue}. Config is set to ${be} events per second and ${ye} events burst limit.`
-         }, {
-           skip_client_rate_limiting: !0
-         })
+       get isNodeGenerated() {
+         return null !== this._source
```

#### 230. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4677-L4679` → after: `L3843-L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3843-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3843-L3844) · [Before (L4677-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4677-L4679)

```diff
-       isServerRateLimited(ee) {
-         const ie = this.serverLimits[ee || "events"] || !1;
-         return !1 !== ie && (new Date).getTime() < ie
+       get flowMap() {
+         return this._flowMap
```

#### 231. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4681-L4685` → after: `L3846-L3863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3846-L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3846-L3863) · [Before (L4681-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4681-L4685)

```diff
-     };
-     const CJ = vK("[RemoteConfig]");
-     var vJ = class {
-       constructor(ee) {
-         this._instance = ee
+       set flowMap(WW) {
+         this._flowMap !== WW && (this._flowMap = WW, this._flowMapUpdate && (ui(this._flowMapUpdate), this._flowMapUpdate = null), WW && (this._flowMapUpdate = {
+           process: WW => {
+             const iW = this.bD()?.getTransformMatrix();
+             this._flowMap._processParticle(WW, this.flowMapStrength * this._tempScaledUpdateSpeed, iW)
+           },
+           previousItem: null,
+           nextItem: null
+         }, ni(this._flowMapUpdate, this._directionProcessing)))
+       }
+       addAttractor(WW) {
+         super.addAttractor(WW), 1 === this._attractors.length && (this._attractorUpdate = {
+           process: WW => {
+             for (const iW of this._attractors) iW._processParticle(WW, this)
+           },
+           previousItem: null,
+ ... (2 more added lines; see GitHub link above)
```

#### 232. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4687-L4689` → after: `L3865-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3865-L3866) · [Before (L4687-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4687-L4689)

```diff
-       get remoteConfig() {
-         var ee;
-         return null === (ee = JH._POSTHOG_REMOTE_CONFIG) || void 0 === ee || null === (ee = ee[this._instance.config.token]) || void 0 === ee ? void 0 : ee.config
+       removeAttractor(WW) {
+         super.removeAttractor(WW), 0 === this._attractors.length && this._attractorUpdate && ui(this._attractorUpdate)
```

#### 233. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4691-L4693` → after: `L3868-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3868-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3868-L3870) · [Before (L4691-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4691-L4693)

```diff
-       _loadRemoteConfigJs(ee) {
-         var ie, He, ye;
-         (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.loadExternalDependency) ? null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, "remote-config", (() = … [truncated]
+       start() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
+         this.canStart() && super.start(WW)
```

#### 234. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4695-L4700` → after: `L3872-L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3872-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3872-L3874) · [Before (L4695-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4695-L4700)

```diff
-       _loadRemoteConfigJSON(ee) {
-         this._instance._send_request({
-           method: "GET",
-           url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
-           callback: ee
-         })
+       _prepareSubEmitterInternalArray() {
+         if (this._subEmitters = new Array, this.subEmitters)
+           for (const WW of this.subEmitters) WW instanceof Ii ? this._subEmitters.push([new gi(WW)]) : WW instanceof gi ? this._subEmitters.push([WW]) : WW instanceof Array && this._subEmitters.push(WW)
```

#### 235. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4702-L4713` → after: `L3876-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3876-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3876-L3879) · [Before (L4702-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4702-L4713)

```diff
-       load() {
-         try {
-           if (this.remoteConfig) return CJ.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
-           if (this._instance._shouldDisableFlags()) return void CJ.warn("Remote config is disabled. Falling back to local config.");
-           this._loadRemoteConfigJs((ee => {
-             if (!ee) return CJ.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((ee => {
-               this._onRemoteConfig(ee.json, ee)
-             }));
-             this._onRemoteConfig(ee)
-           }))
-         } catch (ye) {
-           CJ.error("Error loading remote config", ye), this._onRemoteConfig()
+       _stopSubEmitters() {
+         if (this.activeSubSystems) {
+           for (const WW of this.activeSubSystems) WW.stop(!0);
+           this.activeSubSystems = []
```

#### 236. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4716-L4733` → after: `L3882-L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3882-L3884) · [Before (L4716-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4716-L4733)

```diff
-       _onRemoteConfig(ee, ie) {
-         !ee && ie && (0 === ie.statusCode ? ie.error || CJ.warn("Failed to fetch remote config from PostHog.") : CJ.error("Failed to fetch remote config from PostHog."));
-         try {
-           this._instance._onRemoteConfig(ee ? {
-             ok: !0,
-             config: ee
-           } : {
-             ok: !1
-           })
-         } catch (ee) {
-           CJ.error("Error applying remote config", ee)
-         }
-         if (!1 !== (null == ee ? void 0 : ee.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
-           var He;
-           null === (He = this._instance.featureFlags) || void 0 === He || He.ensureFlagsLoaded()
-         } catch (ee) {
- ... (2 more removed lines; see GitHub link above)
+       _removeFromRoot() {
+         if (!this._rootParticleSystem) return;
+         const WW = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== WW && this._rootParticleSystem.activeSubSystems.splice(WW, 1), this._rootParticleSystem = null
```

#### 237. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4735-L5052` → after: `L3886-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3886-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3886-L3899) · [Before (L4735-L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L4735-L5052)

```diff
-     };
-     var uJ = Uint8Array,
-       mJ = Uint16Array,
-       lJ = Uint32Array,
-       SJ = new uJ([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
-       nJ = new uJ([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
-       jJ = new uJ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
-       sJ = function(ee, ie) {
-         for (var He = new mJ(31), ye = 0; 31 > ye; ++ye) He[ye] = ie += 1 << ee[ye - 1];
-         var be = new lJ(He[30]);
-         for (ye = 1; 30 > ye; ++ye)
-           for (var Me = He[ye]; He[ye + 1] > Me; ++Me) be[Me] = Me - He[ye] << 5 | ye;
-         return [He, be]
-       },
-       IJ = sJ(SJ, 2),
-       hJ = IJ[1];
- ... (302 more removed lines; see GitHub link above)
+       _preStart() {
+         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+       }
+       _postStop(WW) {
+         WW && this._stopSubEmitters()
+       }
+       _prepareParticle(WW) {
+         if (this._subEmitters && this._subEmitters.length > 0) {
+           const iW = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
+           WW._properties.attachedSubEmitters = [];
+           for (const OW of iW)
+             if (0 === OW.type) {
+               const iW = OW.clone();
+               WW._properties.attachedSubEmitters.push(iW), iW.particleSystem.start()
```

#### 238. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5064-L5097` → after: `L3902-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3902-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3902-L3919) · [Before (L5064-L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L5064-L5097)

```diff
-         if (He === XJ.Base64) {
-           const ee = function(ee) {
-               return ee ? btoa(encodeURIComponent(ee).replace(/%([0-9A-F]{2})/g, ((ee, ie) => String.fromCharCode(parseInt(ie, 16))))) : ee
-             }(CF(ie)),
-             He = (ee => "data=" + encodeURIComponent("string" == typeof ee ? ee : CF(ee)))(ee);
-           return {
-             contentType: "application/x-www-form-urlencoded",
-             body: He,
-             estimatedSize: new Blob([He]).size
-           }
-         }
-         const ye = CF(ie);
-         return {
-           contentType: "application/json",
-           body: ye,
-           estimatedSize: new Blob([ye]).size
- ... (18 more removed lines; see GitHub link above)
+       }
+       _onDispose() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), WW && this.particles)
+           for (const OW of this.particles)
+             if (OW._properties.attachedSubEmitters)
+               for (let WW = OW._properties.attachedSubEmitters.length - 1; WW >= 0; WW -= 1) OW._properties.attachedSubEmitters[WW].dispose();
+         if (iW && this.activeSubSystems)
+           for (let OW = this.activeSubSystems.length - 1; OW >= 0; OW -= 1) this.activeSubSystems[OW].dispose();
+         if (this._subEmitters && this._subEmitters.length) {
+           for (let WW = 0; WW < this._subEmitters.length; WW++)
+             for (const iW of this._subEmitters[WW]) iW.dispose();
+           this._subEmitters = [], this.subEmitters = []
+         }
+         this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
+ ... (2 more added lines; see GitHub link above)
```

#### 239. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5099-L5119` → after: `L3921-L3970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3921-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3921-L3970) · [Before (L5099-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L5099-L5119)

```diff
-         try {
-           He = Zo(ee)
-         } catch (He) {
-           if (EM(ee.compression, uF(ee.url, "compression"))) return CK.error("Failed to gzip request body, sending uncompressed payload", He), ie();
-           throw He
-         }
-         return He && EM(ee.compression, uF(ee.url, "compression")) && !((ye = He.body) instanceof ArrayBuffer ? BM(new Uint8Array(ye)) : ArrayBuffer.isView(ye) && BM(new Uint8Array(ye.buffer, ye.byteOffset, ye.byteLength))) ? (Oo = !0, ie()) : {
-           url: ee.url,
-           encodedBody: He
-         };
-         var ye
-       },
-       Do = ee => {
-         try {
-           return wo(ee)
-         } catch (Me) {
- ... (5 more removed lines; see GitHub link above)
+         EW = OW instanceof Di.b ? null : OW;
+         const PW = (0, vi.d)("BABYLON.Texture");
+         if (PW && EW)
+           if (WW.texture) iW.particleTexture = PW.Parse(WW.texture, EW, mW);
+           else if (WW.textureName) {
+           const OW = WW.textureSettings;
+           if (iW.particleTexture = new PW(mW + WW.textureName, EW, !1, void 0 === WW.invertY || WW.invertY, OW ? OW.samplingMode : void 0), iW.particleTexture.name = WW.textureName, OW) {
+             const WW = iW.particleTexture;
+             for (const iW of Gi) void 0 !== OW[iW] && (WW[iW] = OW[iW])
+           }
+         }
+         if (WW.emitterId || 0 === WW.emitterId || void 0 !== WW.emitter ? (WW.emitterId || 0 === WW.emitterId) && EW ? (iW.emitter = EW.getLastMeshById(WW.emitterId), iW.emitter || (iW.emitter = NW.q.Zero())) : iW.emitter = NW.q.FromArray(WW.emitter) : iW.emitter = NW.q.Zero(), i … [truncated]
+           for (let OW = 0; OW < WW.animations.length; OW++) {
+             const mW = WW.animations[OW],
+               EW = (0, vi.d)("BABYLON.Animation");
+             EW && iW.animations.push(EW.Parse(mW))
+ ... (34 more added lines; see GitHub link above)
```

#### 240. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L5121-L6159` → after: `L3972-L3976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3972-L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3972-L3976) · [Before (L5121-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L5121-L6159)

```diff
-       },
-       Po = function() {
-         var ee = jH((function*(ee) {
-           const ie = yield function(ee) {
-             return ZM.apply(this, arguments)
-           }(CF(ee.data), Me.DEBUG, {
-             rethrow: !0
-           });
-           if (!ie) return ee;
-           const He = yield ie.arrayBuffer();
-           return Eb(Eb({}, ee), {}, {
-             _encodedBody: {
-               contentType: Eo,
-               body: He,
-               estimatedSize: He.byteLength
-             }
- ... (1023 more removed lines; see GitHub link above)
+         let LW;
+         if (WW.particleEmitterType) {
+           switch (WW.particleEmitterType.type) {
+             case "SphereParticleEmitter":
+               LW = new jW;
```

#### 241. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6161-L6162` → after: `L3978-L3979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3978-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3978-L3979) · [Before (L6161-L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L6161-L6162)

```diff
-             case OR:
-               ie = this.instance.logs;
+             case "SphereDirectedParticleEmitter":
+               LW = new UW;
```

#### 242. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6164-L6165` → after: `L3981-L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3981-L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3981-L3983) · [Before (L6164-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L6164-L6165)

```diff
-             case dR:
-               ie = this.instance.surveys;
+             case "ConeEmitter":
+             case "ConeParticleEmitter":
+               LW = new sW;
```

#### 243. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L6167-L11781` → after: `L3985-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R3985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L3985-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L3985-L4030) · [Before (L6167-L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L6167-L11781)

```diff
-             case ER:
-               ie = this.instance.autocapture
-           }
-           return ie
-         }
-         capture(ee, ie, He) {
-           He ? this.instance.capture(ee, ie, {
-             timestamp: He.timestamp,
-             uuid: He.uuid,
-             $set: He.set,
-             $set_once: He.setOnce
-           }) : this.instance.capture(ee, ie)
-         }
-         registerDynamicEventProperties(ee) {
-           return YJ(this.instance._registerExtensionEventProperties(ee))
-         }
- ... (5599 more removed lines; see GitHub link above)
+             case "ConeDirectedParticleEmitter":
+               LW = new MW;
+               break;
+             case "CylinderParticleEmitter":
+               LW = new kW.i;
+               break;
+             case "CylinderDirectedParticleEmitter":
+               LW = new kW.e;
+               break;
+             case "HemisphericParticleEmitter":
+               LW = new bW;
+               break;
+             case "PointParticleEmitter":
+               LW = new AW;
+               break;
+             case "MeshParticleEmitter":
+ ... (30 more added lines; see GitHub link above)
```

#### 244. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11783-L11785` → after: `L4032-L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4032-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4032-L4036) · [Before (L11783-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11783-L11785)

```diff
-           nextStep() {
-             var ee;
-             null === (ee = this._productTourManager) || void 0 === ee || ee.nextStep()
+         }
+         if (WW.attractors)
+           for (const tW of WW.attractors) {
+             const WW = new Ri;
+             WW.position = NW.q.FromArray(tW.position), WW.strength = tW.strength, xW.addAttractor(WW)
```

#### 245. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11787-L11789` → after: `L4038-L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4038-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4038-L4048) · [Before (L11787-L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11787-L11789)

```diff
-           previousStep() {
-             var ee;
-             null === (ee = this._productTourManager) || void 0 === ee || ee.previousStep()
+         return Ii._Parse(WW, xW, iW, OW), WW.textureMask && (xW.textureMask = tW.d.FromArray(WW.textureMask)), WW.worldOffset && (xW.worldOffset = NW.q.FromArray(WW.worldOffset)), WW.preventAutoStart && (xW.preventAutoStart = WW.preventAutoStart), WW.metadata && (xW.metadata = WW … [truncated]
+       }
+       serialize() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = {};
+         if (Ii._Serialize(iW, this, WW), iW.textureMask = this.textureMask.wEW(), iW.customShader = this.customShader, iW.preventAutoStart = this.preventAutoStart, iW.worldOffset = this.worldOffset.wEW(), this.metadata && (iW.metadata = this.metadata), this.subEmitters) {
+           iW.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
+           for (const OW of this._subEmitters) {
+             const mW = [];
+             for (const iW of OW) iW.particleSystem.doNotSerialize || mW.push(iW.serialize(WW));
+             iW.subEmitters.push(mW)
```

#### 246. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11791-L11793` → after: `L4050-L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4050-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4050-L4082) · [Before (L11791-L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11791-L11793)

```diff
-           clearCache() {
-             var ee;
-             this._cachedTours = null, null === (ee = this._persistence) || void 0 === ee || ee.unregister("ph_product_tours")
+         }
+         if (this._attractors && this._attractors.length) {
+           iW.attractors = [];
+           for (const WW of this._attractors) iW.attractors.push(WW.serialize())
+         }
+         return iW
+       }
+       static _Serialize(WW, iW, OW) {
+         if (WW.name = iW.name, WW.id = iW.id, WW.aZ = iW.getCapacity(), WW.disposeOnStop = iW.disposeOnStop, WW.manualEmitCount = iW.manualEmitCount, iW.emitter.position) {
+           const OW = iW.emitter;
+           WW.emitterId = OW.id
+         } else {
+           const OW = iW.emitter;
+           WW.emitter = OW.wEW()
+         }
+         if (iW.particleEmitterType && (WW.particleEmitterType = iW.particleEmitterType.serialize()), iW.particleTexture)
+ ... (17 more added lines; see GitHub link above)
```

#### 247. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11795-L11797` → after: `L4084-L4093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4084-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4084-L4093) · [Before (L11795-L11797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11795-L11797)

```diff
-           resetTour(ee) {
-             var ie;
-             null === (ie = this._productTourManager) || void 0 === ie || ie.resetTour(ee)
+         }
+         const EW = iW.getRampGradients();
+         if (EW) {
+           WW.rampGradients = [];
+           for (const iW of EW) {
+             const OW = {
+               gradient: iW.gradient,
+               color: iW.color.wEW()
+             };
+             WW.rampGradients.push(OW)
```

#### 248. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11799-L11801` → after: `L4095-L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4095-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4095-L4105) · [Before (L11799-L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11799-L11801)

```diff
-           resetAllTours() {
-             var ee;
-             null === (ee = this._productTourManager) || void 0 === ee || ee.resetAllTours()
+           WW.useRampGradients = iW.useRampGradients
+         }
+         const NW = iW.getColorRemapGradients();
+         if (NW) {
+           WW.colorRemapGradients = [];
+           for (const iW of NW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.colorRemapGradients.push(OW)
```

#### 249. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11803-L11805` → after: `L4107-L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4107-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4107-L4116) · [Before (L11803-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11803-L11805)

```diff
-           cancelPendingTour(ee) {
-             var ie;
-             null === (ie = this._productTourManager) || void 0 === ie || ie.cancelPendingTour(ee)
+         }
+         const PW = iW.getAlphaRemapGradients();
+         if (PW) {
+           WW.alphaRemapGradients = [];
+           for (const iW of PW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.alphaRemapGradients.push(OW)
```

#### 250. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11808-L11812` → after: `L4119-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4119-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4119-L4127) · [Before (L11808-L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11808-L11812)

```diff
-       }, Yq),
-       Lq = {
-         siteApps: class {
-           constructor(ee) {
-             this._instance = ee, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
+         const LW = iW.getSizeGradients();
+         if (LW) {
+           WW.sizeGradients = [];
+           for (const iW of LW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.sizeGradients.push(OW)
```

#### 251. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11814-L11815` → after: `L4129-L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4129-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4129-L4138) · [Before (L11814-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11814-L11815)

```diff
-           get isEnabled() {
-             return !!this._instance.config.opt_in_site_apps
+         }
+         const cW = iW.getAngularSpeedGradients();
+         if (cW) {
+           WW.angularSpeedGradients = [];
+           for (const iW of cW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.angularSpeedGradients.push(OW)
```

#### 252. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11817-L11820` → after: `L4140-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4140-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4140-L4149) · [Before (L11817-L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11817-L11820)

```diff
-           _eventCollector(ee, ie) {
-             if (!ie) return;
-             const He = this.globalsForEvent(ie);
-             this._bufferedInvocations.push(He), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
+         }
+         const wW = iW.getVelocityGradients();
+         if (wW) {
+           WW.velocityGradients = [];
+           for (const iW of wW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.velocityGradients.push(OW)
```

#### 253. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11822-L11824` → after: `L4151-L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4151-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4151-L4160) · [Before (L11822-L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11822-L11824)

```diff
-           get siteAppLoaders() {
-             var ee;
-             return null === (ee = JH._POSTHOG_REMOTE_CONFIG) || void 0 === ee || null === (ee = ee[this._instance.config.token]) || void 0 === ee ? void 0 : ee.siteApps
+         }
+         const tW = iW.getDragGradients();
+         if (tW) {
+           WW.dragGradients = [];
+           for (const iW of tW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.dragGradients.push(OW)
```

#### 254. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11826-L11832` → after: `L4162-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4162-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4162-L4171) · [Before (L11826-L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11826-L11832)

```diff
-           initialize() {
-             if (this.isEnabled) {
-               const ee = this._instance._addCaptureHook(this._eventCollector.bind(this));
-               this._stopBuffering = () => {
-                 ee(), this._bufferedInvocations = [], this._stopBuffering = void 0
-               }
-             }
+         }
+         const ZW = iW.getEmitRateGradients();
+         if (ZW) {
+           WW.emitRateGradients = [];
+           for (const iW of ZW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.emitRateGradients.push(OW)
```

#### 255. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11834-L11843` → after: `L4173-L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4173-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4173-L4180) · [Before (L11834-L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11834-L11843)

```diff
-           globalsForEvent(ee) {
-             var ie, He, ye, be, Me, Ke, Ue;
-             if (!ee) throw new Error("Event payload is required");
-             const Fe = {},
-               Je = this._instance.get_property("$groups") || [],
-               oe = this._instance.get_property("$stored_group_properties") || {};
-             for (const [qe, fe] of Object.entries(oe)) Fe[qe] = {
-               id: Je[qe],
-               type: qe,
-               properties: fe
+         }
+         const xW = iW.getStartSizeGradients();
+         if (xW) {
+           WW.startSizeGradients = [];
+           for (const iW of xW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
```

#### 256. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11845-L11863` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4182) · [Before (L11845-L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11845-L11863)

```diff
-             const {
-               $set_once: Re,
-               $set: ke
-             } = ee;
-             return {
-               event: Eb(Eb({}, wM(ee, gk)), {}, {
-                 properties: Eb(Eb(Eb({}, ee.properties), ke ? {
-                   $set: Eb(Eb({}, null !== (ie = null === (He = ee.properties) || void 0 === He ? void 0 : He.$set) && void 0 !== ie ? ie : {}), ke)
-                 } : {}), Re ? {
-                   $set_once: Eb(Eb({}, null !== (ye = null === (be = ee.properties) || void 0 === be ? void 0 : be.$set_once) && void 0 !== ye ? ye : {}), Re)
-                 } : {}),
-                 elements_chain: null !== (Me = null === (Ke = ee.properties) || void 0 === Ke ? void 0 : Ke.$elements_chain) && void 0 !== Me ? Me : "",
-                 distinct_id: null === (Ue = ee.properties) || void 0 === Ue ? void 0 : Ue.distinct_id
-               }),
-               person: {
-                 properties: this._instance.get_property("$stored_person_properties")
- ... (3 more removed lines; see GitHub link above)
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.startSizeGradients.push(OW)
```

#### 257. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11865-L11868` → after: `L4184-L4193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4184-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4184-L4193) · [Before (L11865-L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11865-L11868)

```diff
-           _prepareElementForSiteApp(ee) {
-             var ie;
-             const He = null === (ie = ee.tagName) || void 0 === ie ? void 0 : ie.toLowerCase();
-             return "style" === He && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(ee) || (Ok.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === He && this._instance.con … [truncated]
+         }
+         const lW = iW.getLifeTimeGradients();
+         if (lW) {
+           WW.lifeTimeGradients = [];
+           for (const iW of lW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.lifeTimeGradients.push(OW)
```

#### 258. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11870-L11927` → after: `L4195-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4195-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4195-L4204) · [Before (L11870-L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11870-L11927)

```diff
-           _patchSiteAppElementInsertionMethods() {
-             var ee, ie, He, ye, be, Me, Ke, Ue;
-             if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
-             const Fe = null == iH ? void 0 : iH.defaultView,
-               Je = null == Fe || null === (ee = Fe.Node) || void 0 === ee ? void 0 : ee.prototype;
-             if (!Fe || !Je) return () => {};
-             if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
-             const oe = [],
-               Re = this,
-               ke = new WeakSet,
-               qe = (ee, ie, He) => {
-                 if (!(null == ee ? void 0 : ee[ie])) return;
-                 const ye = ee[ie];
-                 ee[ie] = He(ye), oe.push((() => {
-                   ee[ie] = ye
-                 }))
- ... (42 more removed lines; see GitHub link above)
+         }
+         const AW = iW.getLimitVelocityGradients();
+         if (AW) {
+           WW.limitVelocityGradients = [];
+           for (const iW of AW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.limitVelocityGradients.push(OW)
```

#### 259. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11929-L11933` → after: `L4206-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4206-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4206-L4400) · [Before (L11929-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11929-L11933)

```diff
-           _releaseSiteAppElementPatches() {
-             let ee = !1;
-             return () => {
-               var ie;
-               ee || (ee = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (ie = this._restoreSiteAppElementPatches) || void 0 === ie || ie.call(this)))
+           WW.limitVelocityDamping = iW.limitVelocityDamping
+         }
+         iW.noiseTexture && (WW.noiseTexture = iW.noiseTexture.serialize())
+       }
+       clone(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = {
+           ...this._customWrappers
+         };
+         let EW = null;
+         const NW = this._engine;
+         if ((0, gW.e)(NW.createEffectForParticles) && null != this.customShader) {
+           EW = this.customShader;
+           const WW = EW.shaderOptions.defines.length > 0 ? EW.shaderOptions.defines.join("\n") : "",
+             iW = NW.createEffectForParticles(EW.shaderPath.fragmentElement, EW.shaderOptions.uniforms, EW.shaderOptions.samplers, WW);
+           mW[0] ? mW[0].effect = iW : this.setCustomEffect(iW, 0)
+ ... (179 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11935-L11943` → after: `L4402-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4402-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4402-L4413) · [Before (L11935-L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11935-L11943)

```diff
-           }
-           _runWithPreparedSiteAppElements(ee) {
-             let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-             const He = this._patchSiteAppElementInsertionMethods();
-             try {
-               const ye = ee(He);
-               return ie && He(), ye
-             } catch (ee) {
-               throw He(), ee
+           },
+           metadata: OW
+         }, oW, dW), (0, mW.e)(null, null, LW, {
+           kind: "field",
+           name: "turbidity",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "turbidity" in WW,
+             get: WW => WW.turbidity,
+             set: (WW, iW) => {
+               WW.turbidity = iW
```

#### 261. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11945-L11970` → after: `L4415-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4415-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4415-L4426) · [Before (L11945-L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11945-L11970)

```diff
-           }
-           setupSiteApp(ee) {
-             const ie = this.apps[ee.id],
-               He = () => {
-                 var He;
-                 !ie.errored && this._bufferedInvocations.length && (Ok.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${ee.id}`), this._bufferedInvocations.forEach((ee => this._runWithPreparedSiteAppElements((() => {
-                   var He;
-                   return null === (He = ie.processEvent) || void 0 === He ? void 0 : He.call(ie, ee)
-                 })))), ie.processedBuffer = !0), Object.values(this.apps).every((ee => ee.processedBuffer || ee.errored)) && (null === (He = this._stopBuffering) || void 0 === He || He.call(this))
-               };
-             let ye = !1;
-             const be = be => {
-               ie.errored = !be, ie.loaded = !0, Ok.info(`Site app with id ${ee.id} ${be?"loaded":"errored"}`), ye && He()
-             };
-             try {
-               const {
- ... (10 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, eW, vW), (0, mW.e)(null, null, wW, {
+           kind: "field",
+           name: "rayleigh",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "rayleigh" in WW,
+             get: WW => WW.rayleigh,
+             set: (WW, iW) => {
+               WW.rayleigh = iW
```

#### 262. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11972-L11975` → after: `L4428-L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4428-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4428-L4439) · [Before (L11972-L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11972-L11975)

```diff
-             if (ye && ie.loaded) try {
-               He()
-             } catch (He) {
-               Ok.error(`Error while processing buffered events PostHog app with config id ${ee.id}`, He), ie.errored = !0
+           },
+           metadata: OW
+         }, gW, DW), (0, mW.e)(null, null, xW, {
+           kind: "field",
+           name: "mieCoefficient",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "mieCoefficient" in WW,
+             get: WW => WW.mieCoefficient,
+             set: (WW, iW) => {
+               WW.mieCoefficient = iW
```

#### 263. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11977-L11997` → after: `L4441-L4452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4441-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4441-L4452) · [Before (L11977-L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11977-L11997)

```diff
-           }
-           _setupSiteApps() {
-             const ee = this.siteAppLoaders || [];
-             for (const ie of ee) this.apps[ie.id] = {
-               id: ie.id,
-               loaded: !1,
-               errored: !1,
-               processedBuffer: !1
-             };
-             for (const ie of ee) this.setupSiteApp(ie)
-           }
-           _onCapturedEvent(ee) {
-             if (0 === Object.keys(this.apps).length) return;
-             const ie = this.globalsForEvent(ee);
-             for (const He of Object.values(this.apps)) try {
-               this._runWithPreparedSiteAppElements((() => {
- ... (5 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, VW, pW), (0, mW.e)(null, null, sW, {
+           kind: "field",
+           name: "mieDirectionalG",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "mieDirectionalG" in WW,
+             get: WW => WW.mieDirectionalG,
+             set: (WW, iW) => {
+               WW.mieDirectionalG = iW
```

#### 264. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L11999-L12026` → after: `L4454-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4454-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4454-L4465) · [Before (L11999-L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L11999-L12026)

```diff
-           }
-           onRemoteConfig(ee) {
-             var ie, He, ye;
-             if (null === (ie = this.siteAppLoaders) || void 0 === ie ? void 0 : ie.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (ee => this._onCapturedEvent(ee)))) : void Ok.error('PostHog site apps are disabled. Enable the "opt_ … [truncated]
-             if (null === (He = this._stopBuffering) || void 0 === He || He.call(this), !ee.ok) return;
-             const be = ee.config;
-             if (null === (ye = be.siteApps) || void 0 === ye ? void 0 : ye.length)
-               if (this.isEnabled)
-                 for (const {
-                     id: Ue,
-                     url: Fe
-                   }
-                   of be.siteApps) {
-                   var Me, Ke;
-                   JH[`__$$ph_site_app_${Ue}`] = this._instance, null === (Me = JH.__PosthogExtensions__) || void 0 === Me || null === (Ke = Me.loadSiteApp) || void 0 === Ke || Ke.call(Me, this._instance, Fe, (ee => {
-                     if (ee) return Ok.error(dk + Ue, ee)
- ... (12 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, fW, CW), (0, mW.e)(null, null, MW, {
+           kind: "field",
+           name: "distance",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "distance" in WW,
+             get: WW => WW.distance,
+             set: (WW, iW) => {
+               WW.distance = iW
```

#### 265. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12028-L12124` → after: `L4467-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4467-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4467-L4478) · [Before (L12028-L12124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12028-L12124)

```diff
-           }
-           initialize() {
-             this.startIfEnabledOrStop()
-           }
-           _loadScript(ee) {
-             var ie, He, ye;
-             (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.tracingHeadersPatchFns) ? ee(): null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, "tracing-hea … [truncated]
-               if (ie) return Kk.error("failed to load script", ie);
-               ee()
-             }))
-           }
-           _getConfiguredHostnames() {
-             var ee, ie;
-             return null !== (ee = null !== (ie = this._instance.config.tracing_headers) && void 0 !== ie ? ie : this._instance.config.addTracingHeaders) && void 0 !== ee ? ee : this._instance.config.__add_tracing_headers
-           }
-           _syncHostnamesForPatch() {
- ... (81 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, XW, BW), (0, mW.e)(null, null, KW, {
+           kind: "field",
+           name: "inclination",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "inclination" in WW,
+             get: WW => WW.inclination,
+             set: (WW, iW) => {
+               WW.inclination = iW
```

#### 266. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12126-L12152` → after: `L4480-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4480-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4480-L4491) · [Before (L12126-L12152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12126-L12152)

```diff
-           }
-           _callLoadToolbar(ee) {
-             const ie = JH.ph_load_toolbar || JH.ph_load_editor;
-             !PH(ie) && OH(ie) ? ie(ee, this.instance) : Lk.warn("No toolbar load function found")
-           }
-           loadToolbar(ee) {
-             const ie = !!(null == iH ? void 0 : iH.getElementById("__POSTHOG_TOOLBAR__"));
-             if (!ri || ie) return !1;
-             const He = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
-               ye = Eb(Eb({
-                 token: this.instance.config.token
-               }, ee), {}, {
-                 apiURL: this.instance.requestRouter.endpointFor("ui")
-               }, He ? {
-                 instrument: !1
-               } : {});
- ... (11 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, qW, RW), (0, mW.e)(null, null, SW, {
+           kind: "field",
+           name: "azimuth",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "azimuth" in WW,
+             get: WW => WW.azimuth,
+             set: (WW, iW) => {
+               WW.azimuth = iW
```

#### 267. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12154-L12207` → after: `L4493-L4504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4493-L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4493-L4504) · [Before (L12154-L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12154-L12207)

```diff
-             return !0
-           }
-           _loadEditor(ee) {
-             return this.loadToolbar(ee)
-           }
-           maybeLoadEditor() {
-             let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
-               ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
-               He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
-             return this.maybeLoadToolbar(ee, ie, He)
-           }
-         }
-       },
-       mq = Eb({
-         experiments: class ee {
-           get _config() {
- ... (38 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, GW, IW), (0, mW.e)(null, null, YW, {
+           kind: "field",
+           name: "sunPosition",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "sunPosition" in WW,
+             get: WW => WW.sunPosition,
+             set: (WW, iW) => {
+               WW.sunPosition = iW
```

#### 268. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12209-L12217` → after: `L4506-L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4506-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4506-L4517) · [Before (L12209-L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12209-L12217)

```diff
-           }
-           previewWebExperiment() {
-             const ie = ee.getWindowLocation();
-             if (null == ie ? void 0 : ie.search) {
-               const He = uF(null == ie ? void 0 : ie.search, "__experiment_id"),
-                 ye = uF(null == ie ? void 0 : ie.search, "__experiment_variant");
-               He && ye && (ee._logInfo(`previewing web experiments ${He} && ${ye}`), this.getWebExperiments((ee => {
-                 this._showPreviewWebExperiment(parseInt(He), ye, ee)
-               }), !1, !0))
+           },
+           metadata: OW
+         }, aW, rW), (0, mW.e)(null, null, yW, {
+           kind: "field",
+           name: "useSunPosition",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "useSunPosition" in WW,
+             get: WW => WW.useSunPosition,
+             set: (WW, iW) => {
+               WW.useSunPosition = iW
```

#### 269. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12219-L12248` → after: `L4519-L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4519-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4519-L4530) · [Before (L12219-L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12219-L12248)

```diff
-           }
-           loadIfEnabled() {
-             this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
-           }
-           getWebExperiments(ee, ie, He) {
-             if (this._config.disable_web_experiments && !He) return ee([]);
-             const ye = this._instance.get_property("$web_experiments");
-             if (ye && !ie) return ee(ye);
-             this._instance._send_request({
-               url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
-               method: "GET",
-               timestampMode: "query",
-               callback: ie => ee(200 === ie.statusCode && ie.json && ie.json.experiments || [])
-             })
-           }
-           _showPreviewWebExperiment(ie, He, ye) {
- ... (14 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, zW, FW), (0, mW.e)(null, null, TW, {
+           kind: "field",
+           name: "cameraOffset",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "cameraOffset" in WW,
+             get: WW => WW.cameraOffset,
+             set: (WW, iW) => {
+               WW.cameraOffset = iW
```

#### 270. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12250-L12265` → after: `L4532-L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4532-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4532-L4543) · [Before (L12250-L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12250-L12265)

```diff
-             return !1
-           }
-           static getWindowLocation() {
-             return null == ri ? void 0 : ri.location
-           }
-           static _matchUTMConditions(ee) {
-             var ie;
-             if (PH(ee.conditions) || PH(null === (ie = ee.conditions) || void 0 === ie ? void 0 : ie.utm)) return !0;
-             const He = IF();
-             if (He.utm_source) {
-               var ye, be, Me, Ke, Ue, Fe, Je, oe;
-               const ie = !(null === (ye = ee.conditions) || void 0 === ye || null === (ye = ye.utm) || void 0 === ye ? void 0 : ye.utm_campaign) || (null === (be = ee.conditions) || void 0 === be || null === (be = be.utm) || void 0 === be ? void 0 : be.utm_campaign) == He.utm_cam … [truncated]
-                 Re = !(null === (Me = ee.conditions) || void 0 === Me || null === (Me = Me.utm) || void 0 === Me ? void 0 : Me.utm_source) || (null === (Ke = ee.conditions) || void 0 === Ke || null === (Ke = Ke.utm) || void 0 === Ke ? void 0 : Ke.utm_source) == He.utm_source,
-                 ke = !(null === (Ue = ee.conditions) || void 0 === Ue || null === (Ue = Ue.utm) || void 0 === Ue ? void 0 : Ue.utm_medium) || (null === (Fe = ee.conditions) || void 0 === Fe || null === (Fe = Fe.utm) || void 0 === Fe ? void 0 : Fe.utm_medium) == He.utm_medium,
-                 qe = !(null === (Je = ee.conditions) || void 0 === Je || null === (Je = Je.utm) || void 0 === Je ? void 0 : Je.utm_term) || (null === (oe = ee.conditions) || void 0 === oe || null === (oe = oe.utm) || void 0 === oe ? void 0 : oe.utm_term) == He.utm_term;
-               return ie && ke && qe && Re
+           },
+           metadata: OW
+         }, QW, Wi), (0, mW.e)(null, null, JW, {
+           kind: "field",
+           name: "up",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "up" in WW,
+             get: WW => WW.up,
+             set: (WW, iW) => {
+               WW.up = iW
```

#### 271. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12267-L12533` → after: `L4545-L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4545-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4545-L4556) · [Before (L12267-L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12267-L12533)

```diff
-             return !1
-           }
-           static _logInfo(ee) {
-             for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
-             CK.info(`[WebExperiments] ${ee}`, He)
-           }
-           _applyTransforms(ie, He, ye) {
-             this._is_bot() ? ee._logInfo(Hq) : "control" !== He ? ye.forEach((ye => {
-               if (ye.selector) {
-                 var be;
-                 ee._logInfo(`applying transform of variant ${He} for experiment ${ie} `, ye);
-                 const Me = null === (be = document) || void 0 === be ? void 0 : be.querySelectorAll(ye.selector);
-                 null == Me || Me.forEach((ee => {
-                   const ie = ee;
-                   ye.html && (ie.innerHTML = ye.html), ye.css && ie.setAttribute("style", ye.css)
-                 }))
- ... (251 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, ii, Oi), (0, mW.e)(null, null, hW, {
+           kind: "field",
+           name: "dithering",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "dithering" in WW,
+             get: WW => WW.dithering,
+             set: (WW, iW) => {
+               WW.dithering = iW
```

#### 272. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12535-L12557` → after: `L4558-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4558-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4558-L4569) · [Before (L12535-L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12535-L12557)

```diff
-             return this._core.flush().catch((ee => this._logger.error("PostHog metrics flush failed:", ee)))
-           }
-           reset() {
-             var ee;
-             null === (ee = this._core) || void 0 === ee || ee.reset()
-           }
-           dispose() {
-             var ee, ie;
-             this._disposed = !0, null === (ee = this._stopNetworkMetrics) || void 0 === ee || ee.call(this), this._stopNetworkMetrics = void 0, null === (ie = this._core) || void 0 === ie || ie.reset()
-           }
-           _createHost() {
-             const ee = this._instance,
-               ie = this;
-             return {
-               get isDisabled() {
-                 return !1
- ... (7 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, mi, Ei), (0, mW.e)(null, null, HW, {
+           kind: "field",
+           name: "rawHdrOutput",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "rawHdrOutput" in WW,
+             get: WW => WW.rawHdrOutput,
+             set: (WW, iW) => {
+               WW.rawHdrOutput = iW
```

#### 273. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12559-L12765` → after: `L4571-L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4571-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4571-L4582) · [Before (L12559-L12765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12559-L12765)

```diff
-           }
-           _sendMetricsBatch(ee, ie) {
-             return new Promise((He => {
-               let ye = !1;
-               const be = ee => {
-                   ye || (ye = !0, clearTimeout(Me), He(ee))
-                 },
-                 Me = setTimeout((() => be({
-                   kind: "retry-later",
-                   error: new Error("metrics request timed out")
-                 })), 9e4);
-               this._instance._send_request(Eb(Eb({
-                 method: "POST",
-                 url: this._metricsUrl(),
-                 data: ee,
-                 compression: "best-available",
- ... (191 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, Ni, Pi), (0, mW.e)(null, null, nW, {
+           kind: "field",
+           name: "cloudiness",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "cloudiness" in WW,
+             get: WW => WW.cloudiness,
+             set: (WW, iW) => {
+               WW.cloudiness = iW
```

#### 274. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12767-L12783` → after: `L4584-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4584-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/277.js#L4584-L4594) · [Before (L12767-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/277.js#L12767-L12783)

```diff
-           }
-         }
-       };
-     IR.__defaultExtensionClasses = Eb({}, Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb({}, Yq), Vq), aq), cq), xq), Lq), vq), Cq), uq), mq), lq), Sq), nq), jq));
-     const sq = function() {
-       Me.SDK_DIST_CHANNEL = "npm";
-       const ee = ZR[mR] = new IR;
-       return function() {
-         function ee() {
-           ee.done || (ee.done = !0, vo = !1, mK(ZR, (function(ee) {
-             ee._dom_loaded()
-           })))
-         }(null == iH ? void 0 : iH.addEventListener) ? "complete" === iH.readyState ? ee() : NK(iH, "DOMContentLoaded", ee, {
-           capture: !1
-         }): ri && CK.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
-       }(), ee
- ... (1 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, Li, ci), OW && Object.defineProperty(WW, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: OW
+         })
+       })(), WW._ShaderLoader = new lW.d((() => [OW.e(648).then((() => OW(64447))), OW.e(641).then((() => OW(64455)))]), (() => [OW.e(665).then((() => OW(64460))), OW.e(659).then((() => OW(64467)))])), WW
+     })();
+     (0, xW.h)("BABYLON.SkyMaterial", sW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/278.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/278.js#L4-L6)

```diff
-   40891: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       playDocsSound: () => Fe
+   42573: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW,
+       g: () => tW,
+       h: () => wW
```

#### 2. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L74` → after: `L10-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L10-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/278.js#L10-L408) · [Before (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/278.js#L8-L74)

```diff
-     var ye = He(5338),
-       be = He(37578),
-       Me = He(1141),
-       Ke = He(37584);
-     const Ue = new Map;
- 
-     function Fe(ee, ie, He, Fe, Je) {
-       let oe, Re = 0;
-       if (ie) oe = new ye.Howl({
-         src: [`${Me.clientSideServerUrls.staticUrl}/sounds/music/${ee}.mp3`],
-         html5: !0,
-         volume: He
-       });
-       else {
-         const ie = (0, be.s)(ee);
-         Re = ie.ms / 1e3, oe = Ue.get(ee), oe || (oe = new ye.Howl({
- ... (51 more removed lines; see GitHub link above)
+     var mW, EW = OW(38285),
+       NW = OW(38241);
+     ! function(WW) {
+       WW[WW.CW = 0] = "CW", WW[WW.CCW = 1] = "CCW"
+     }(mW || (mW = {}));
+     class PW {
+       static Interpolate(WW, iW, OW, mW, EW) {
+         if (0 === WW) return 0;
+         const NW = 1 - 3 * mW + 3 * iW,
+           PW = 3 * mW - 6 * iW,
+           LW = 3 * iW;
+         let cW = WW;
+         for (let wW = 0; wW < 5; wW++) {
+           const iW = cW * cW;
+           cW -= (NW * (iW * cW) + PW * iW + LW * cW - WW) * (1 / (3 * NW * iW + 2 * PW * cW + LW)), cW = Math.min(1, Math.max(0, cW))
+         }
+ ... (383 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L6` → after: `L4-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L4-L71) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L4-L6)

```diff
-   40909: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => Ie
+   40014: (WW, iW, OW) => {
+     var mW = {
+       "./cape_cow_cream.png": 29007,
+       "./cape_cow_normal.png": 29012,
+       "./cape_creator_level1.png": 29015,
+       "./cape_creator_level2.png": 29018,
+       "./cape_creator_level3.png": 29022,
+       "./cape_none.png": 29027,
+       "./cape_pig.png": 29034,
+       "./cape_sheep.png": 29041,
+       "./cape_super.png": 29044,
+       "./cape_super_inverted.png": 29053,
+       "./cape_youtuber.png": 29057
+     };
+ 
+     function EW(WW) {
+ ... (52 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L8-L66` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L73-L78) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L8-L66)

```diff
-     He(7060);
-     var ye = He(59),
-       be = He(40913),
-       Me = He(41195),
-       Ke = He(41306),
-       Ue = He(41357),
-       Fe = He(41380),
-       Je = He(38020),
-       oe = He(37913),
-       Re = He(41520),
-       ke = He(41573),
-       qe = (He(41601), He(1169)),
-       fe = He(186),
-       Te = He(1127),
-       pe = He(18),
-       Xe = He(2957),
- ... (43 more removed lines; see GitHub link above)
+     var mW = OW(192);
+     const EW = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       NW = "PetRoot";
+     let PW = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       LW = EW;
+     new Map, new Map;
```

#### 3. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L69-L255` → after: `L81-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L81-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L81-L119) · [Before (L69-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L69-L255)

```diff
-       let {
-         heatmap: ie,
-         scale: He,
-         fullyOpaqueFrom: Ve,
-         bounds: Ce,
-         fitBounds: ve,
-         schematic: ue,
-         controls: me,
-         onStepTime: le,
-         onShowAllTime: Se,
-         onTogglePlaying: ne,
-         getReadout: se = null
-       } = ee;
-       const {
-         t: Ie
-       } = (0, Te.v)(), {
- ... (171 more removed lines; see GitHub link above)
+       var iW;
+       return null !== (iW = (0, mW.c)(PW, WW)) && void 0 !== iW ? iW : null
+     }
+ 
+     function wW(WW) {
+       var iW;
+       return null !== (iW = (0, mW.c)(LW, WW)) && void 0 !== iW ? iW : null
+     }
+   },
+   40384: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW,
+       f: () => EW,
+       j: () => NW
+     });
+     class mW {
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L257-L280` → after: `L121-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L121-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L121-L133) · [Before (L257-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L257-L280)

```diff
-       }), []), (0, ye.useEffect)((() => {
-         const ee = Ji.current;
-         if (!ee) return;
-         const ie = () => {
-             Bi.current = !1, Ti(document.pointerLockElement === ee)
-           },
-           He = () => {
-             Bi.current && (Bi.current = !1, zi(!1))
-           },
-           ye = ie => {
-             const He = !ui.current.canLock && document.activeElement === ee && 0 !== (1 & ie.buttons);
-             if (document.pointerLockElement !== ee && !He) return;
-             const ye = ui.current.mouseSensitivity * Ze;
-             Di((ee => function(ee, ie, He) {
-               const ye = 2 * Math.PI;
-               return {
- ... (8 more removed lines; see GitHub link above)
+         this.lastFeet[0] = OW[0], this.lastFeet[1] = OW[1], this.lastFeet[2] = OW[2], this.stillS = this.speed > .3 ? 0 : this.stillS + LW;
+         const ZW = this.stillS >= .6 ? "perched" : "flying";
+         "flying" === ZW && "perched" === cW.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += LW, cW.mode = ZW;
+         const xW = Math.sin(mW),
+           lW = Math.cos(mW);
+         "perched" === ZW ? (NW(tW, OW, PW.perchOffset, xW, lW), tW[1] += WW.headTopY - OW[1]) : (NW(tW, OW, PW.followOffset, xW, lW), tW[1] += EW(PW, WW.timeS));
+         const {
+           pos: AW
+         } = cW, bW = Math.hypot(tW[0] - AW[0], tW[1] - AW[1], tW[2] - AW[2]);
+         if (!this.started || bW > 8 || "perched" === ZW && (this.perchLocked || bW < .05)) this.perchLocked = this.started && "perched" === ZW, AW[0] = tW[0], AW[1] = tW[1], AW[2] = tW[2], wW[0] = wW[1] = wW[2] = 0;
+         else {
+           const WW = PW.followStiffness;
+           for (let iW = 0; iW < 3; iW++) wW[iW] += (WW * WW * (tW[iW] - AW[iW]) - 2 * WW * wW[iW]) * LW, AW[iW] += wW[iW] * LW
```

#### 5. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L282-L300` → after: `L135-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L135-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L135-L218) · [Before (L282-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L282-L300)

```diff
-       }), []), (0, ye.useEffect)((() => {
-         const ee = oi.current;
-         null !== ee && 0 !== Ri.width && 0 !== Ri.height && (ee.engine.resize(), ee.needsRender = !0)
-       }), [Ri.width, Ri.height]), (0, ye.useEffect)((() => {
-         const ee = oi.current;
-         null !== ee && (ee.targetFieldOfView = ci * (di ? te : 1))
-       }), [ci, di]), (0, ye.useEffect)((() => {
-         const ee = oi.current;
-         null !== ee && function(ee, ie, He, ye) {
-           const be = [],
-             Me = [],
-             Ke = [],
-             Ue = [];
-           for (let Fe = 0; Fe < ie.count; Fe++) {
-             const ee = ie.values[Fe],
-               Je = (0, Ee.w)(ee, He, ye);
- ... (3 more removed lines; see GitHub link above)
+         const jW = mW + PW.yawOffset;
+         var UW;
+         return this.started ? cW.yaw += ((UW = jW - cW.yaw) - 2 * Math.PI * Math.round(UW / (2 * Math.PI))) * Math.min(8 * LW, 1) : cW.yaw = jW, this.started = !0, cW.seated = "perched" === ZW && this.perchLocked, cW.clip = null === (iW = PW.clips) || void 0 === iW ? void 0 : iW[ … [truncated]
+       }
+       reset() {
+         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       }
+       bO(WW) {
+         return "perched" === WW ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       }
+     }
+ 
+     function EW(WW, iW) {
+       return WW.bobAmplitude * Math.sin(2 * Math.PI * WW.bobHz * iW)
+     }
+ 
+ ... (68 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L302-L318` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L220-L221) · [Before (L302-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L302-L318)

```diff
-           Ge(ee.cells, Float32Array.from(be), Float32Array.from(Me), Me.length / 4), ee.translucent = {
-             nf: Float32Array.from(Ke),
-             colours: Float32Array.from(Ue),
-             count: Ue.length / 4
-           }, ee.translucentSortedFrom = null, re(ee), ee.needsRender = !0
-         }(ee, ai, He, Ve)
-       }), [ai, He, Ve]), (0, ye.useEffect)((() => {
-         const ee = oi.current;
-         null !== ee && function(ee, ie) {
-           ee.chunkGridOrigin = ie, ee.chunkGridCentre = null, Ne(ee)
-         }(ee, Ce.min)
-       }), [Ce]), (0, ye.useEffect)((() => {
-         const ee = oi.current;
-         null !== ee && function(ee, ie, He) {
-           const ye = [],
-             be = [];
- ... (1 more removed lines; see GitHub link above)
+           let tW = "load_failed";
+           try {
```

#### 7. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L320-L443` → after: `L223-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L223-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L223-L235) · [Before (L320-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L320-L443)

```diff
-               positions: ee,
-               colours: Me,
-               count: Ke
-             } = ie.surface;
-             for (let ie = 0; ie < Ke; ie++) {
-               const Ke = [ee[3 * ie], ee[3 * ie + 1], ee[3 * ie + 2]];
-               [0, 1, 2].every((ee => Ke[ee] >= He.min[ee] - Ye && Ke[ee] <= He.max[ee] + Ye)) && (ye.push(Ke[0] - He.min[0] + .5, Ke[1] - He.min[1] + .5, Ke[2] - He.min[2] + .5), be.push(Me[3 * ie] / 255, Me[3 * ie + 1] / 255, Me[3 * ie + 2] / 255, 1))
-             }
-           }
-           Ge(ee.schematicBlocks, Float32Array.from(ye), Float32Array.from(be), be.length / 4), ee.needsRender = !0
-         }(ee, ue, Ce)
-       }), [ue, Ce]), (0, ye.useEffect)((() => {
-         const ee = oi.current;
-         null !== ee && null !== ee.chunkGrid && (ee.chunkGrid.isVisible = ti, ee.needsRender = !0)
-       }), [ti, Ce]), (0, ye.useEffect)((() => {
-         const ee = oi.current;
- ... (108 more removed lines; see GitHub link above)
+               create: OW
+             } = await (0, NW.v)(PW).load();
+             tW = "start_failed";
+             const mW = wW.d.antiAliasingOnWebGpuAdapter((0, lW.f)()),
+               EW = (0, cW.i)(WW),
+               LW = (0, cW.e)(EW, {
+                 size: WW => (0, ZW.m)(EW, WW)
+               });
+             return await OW(WW, {
+               ROW: mW,
+               sceneDepth: iW.sceneDepth,
+               sunShadow: iW.sunShadow,
+               bufferSize: LW
```

#### 8. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L445-L447` → after: `L237-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L237-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L237-L269) · [Before (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L445-L447)

```diff
-           })]
-         })]
-       })
+           } catch (jW) {
+             const WW = (0, EW.d)(jW);
+             (0, xW.setWebGpuFallbackReason)(WW ? kW[WW] : tW);
+             const iW = null === jW || void 0 === jW ? void 0 : jW.fallbackReason;
+             return "string" === typeof iW ? (console.warn(`Lite could not start, falling back to WebGL: ${String(jW)}`), iW) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", jW), "it failed to start (see the console)")
+           }
+         }(WW, iW, "setting" === OW.source, OW.choice);
+         if ("lite" === OW.choice && AW.i.setItem(UW.p, "string" === typeof LW), "string" !== typeof LW) return wW.d.followGameGpu((0, lW.f)()), (0, xW.setWebGpuFallbackReason)("none"), (0, PW.o)(OW), (0, NW.E)(LW), {
+           lite: LW
+         };
+         tW = (0, PW.b)(OW.choice, [LW]), WW.replaceWith(WW.cloneNode(!1))
+       } else "lite" === OW.requested ? (0, xW.setWebGpuFallbackReason)("load_failed") : "default" === OW.source && iW.webGpuDefaultOffReason ? (0, xW.setWebGpuFallbackReason)(iW.webGpuDefaultOffReason) : (0, xW.setWebGpuFallbackReason)("not_requested");
+       return (0, PW.o)({
+         ...OW,
+         choice: "webgl2",
+         fallbackReason: tW
+ ... (17 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L451-L556` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L273) · [Before (L451-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L451-L556)

```diff
-       let {
-         heading: ie,
-         pitch: He,
-         onViewFrom: be,
-         onTurn: Me,
-         onFlip: Ke
-       } = ee;
-       const {
-         t: Ue
-       } = (0, Te.v)(), Fe = (0, ye.useRef)(null), Je = ei({
-         heading: ie,
-         pitch: He
-       }), oe = ii(ie), Re = Ji(Je, oe), ke = le + Se + 2, qe = me.flatMap((ee => [1, -1].map((ie => {
-         const He = Ui(ee.direction, ie);
-         return {
-           ...ee,
- ... (90 more removed lines; see GitHub link above)
+       return "lite" === (0, PW.k)((0, PW.j)(WW, !1)).choice && (0, xW.getWebGpuSupported)() && !AW.i.getItem(UW.p)
```

#### 10. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L560-L582` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L277-L279) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L560-L582)

```diff
-       var ie, He, ye;
-       const {
-         chunkGridOrigin: be,
-         camera: Me
-       } = ee;
-       if (null === be) return;
-       const Ke = [Me.position.x, Me.position.y, Me.position.z],
-         Ue = [0, 2].map((ee => Math.floor((Ke[ee] + be[ee]) / fe.g.BR))),
-         Fe = ee.chunkGridCentre;
-       if (null !== Fe && Fe.every(((ee, ie) => ee === Ue[ie]))) return;
-       const Re = null === (ie = null === (He = ee.chunkGrid) || void 0 === He ? void 0 : He.isVisible) || void 0 === ie || ie;
-       null === (ye = ee.chunkGrid) || void 0 === ye || ye.dispose();
-       const [qe, Te] = [0, 2].map(((ee, ie) => {
-         const He = [];
-         for (let ye = Ue[ie] - ae; ye <= Ue[ie] + ae + 1; ye++) He.push(ye * fe.g.BR - be[ee]);
-         return He
- ... (7 more removed lines; see GitHub link above)
+       yW(WW) || YW().catch((WW => {
+         console.warn("Failed to prefetch noa's Babylon backend.", WW)
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L585-L593` → after: `L282-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L282-L287) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L585-L593)

```diff
-     function Ge(ee, ie, He, ye) {
-       ee.Bie("matrix", function(ee, ie) {
-         const He = new Float32Array(16 * ie);
-         for (let ye = 0; ye < ie; ye++) {
-           const ie = 16 * ye;
-           He[ie] = 1, He[ie + 5] = 1, He[ie + 10] = 1, He[ie + 12] = ee[3 * ye], He[ie + 13] = ee[3 * ye + 1], He[ie + 14] = ee[3 * ye + 2], He[ie + 15] = 1
-         }
-         return He
-       }(ie, ye), 16, !0), ee.Bie("color", He, 4, !0), ee.isVisible = ye > 0
+     function JW(WW) {
+       (0, jW.e)((() => {
+         yW(WW) ? (0, NW.s)().load().catch((WW => {
+           console.warn("Failed to prefetch the Lite renderer.", WW)
+         })) : TW(WW)
+       }))
```

#### 12. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L597-L616` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L300-L301) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L597-L616)

```diff
-       const {
-         camera: ie,
-         translucent: He
-       } = ee, ye = [ie.position.x, ie.position.y, ie.position.z], be = ee.translucentSortedFrom;
-       if (null !== be && Math.hypot(ye[0] - be[0], ye[1] - be[1], ye[2] - be[2]) < Ve) return;
-       ee.translucentSortedFrom = ye;
-       const Me = new Float64Array(He.count),
-         Ke = new Uint32Array(He.count);
-       for (let Je = 0; Je < He.count; Je++) {
-         const ee = He.nf[3 * Je] - ye[0],
-           ie = He.nf[3 * Je + 1] - ye[1],
-           be = He.nf[3 * Je + 2] - ye[2];
-         Me[Je] = ee * ee + ie * ie + be * be, Ke[Je] = Je
-       }
-       Ke.sort(((ee, ie) => Me[ie] - Me[ee]));
-       const Ue = new Float32Array(3 * He.count),
- ... (4 more removed lines; see GitHub link above)
+       var iW;
+       return null !== (iW = WW.parentElement) && void 0 !== iW ? iW : WW
```

#### 13. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L620-L624` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L305-L308) · [Before (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L620-L624)

```diff
-       const He = (He, ye, be) => new oe.rf(0 === He ? ee[0] : ie[0], 0 === ye ? ee[1] : ie[1], 0 === be ? ee[2] : ie[2]),
-         ye = [];
-       for (const be of [0, 1])
-         for (const ee of [0, 1]) ye.push([He(0, be, ee), He(1, be, ee)], [He(be, 0, ee), He(be, 1, ee)], [He(be, ee, 0), He(be, ee, 1)]);
-       return ye
+       if (WW.clientWidth <= 0 || WW.clientHeight <= 0 || EW.c.isHeld()) return null;
+       const OW = (0, NW.p)(),
+         [PW, LW] = iW.size(OW);
+       return (0, NW.v)(PW, LW, OW, mW.d.get("clientEscMenuOptions").pixelScale)
```

#### 14. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L628` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L319-L320) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L628)

```diff
-       return [Math.sin(ee.heading) * Math.cos(ee.pitch), -Math.sin(ee.pitch), Math.cos(ee.heading) * Math.cos(ee.pitch)]
+       let iW = 0;
+       return WW > 5 && (iW = .12 * Math.min(WW - 5, 15), WW > 20 && (iW += .01 * (WW - 20))), 1.4 + iW
```

#### 15. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L632` → after: `L341-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L341-L345) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L632)

```diff
-       return [Math.cos(ee), 0, -Math.sin(ee)]
+       return !1 !== WW && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
+     }
+ 
+     function wW(WW, iW) {
+       return null !== WW && void 0 !== WW ? WW : iW
```

#### 16. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L636-L652` → after: `L349-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L349-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L349-L382) · [Before (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L636-L652)

```diff
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: Ce,
-         pitch: ve
-       };
-       const be = [ee.max[0] - ee.min[0], ee.max[1] - ee.min[1], ee.max[2] - ee.min[2]],
-         Me = ei(ye),
-         Ke = ii(ye.heading),
-         Ue = Ji(Me, Ke),
-         Fe = Math.tan(He / 2),
-         Je = Fe * ie;
-       let oe = 1;
-       for (const Re of [-be[0] / 2, be[0] / 2])
-         for (const ee of [-be[1] / 2, be[1] / 2])
-           for (const ie of [-be[2] / 2, be[2] / 2]) {
-             const He = [Re, ee, ie],
-               ye = Fi(He, Me);
- ... (1 more removed lines; see GitHub link above)
+       return iW && !OW ? Math.max(1, WW / LW) : 1
+     }
+     const ZW = new WeakMap;
+ 
+     function xW(WW, iW, OW, EW) {
+       const NW = WW.EY.XiW(OW),
+         PW = NW.offset;
+       PW[0] = PW[1] = PW[2] = 0;
+       const LW = WW.EY.XiW(iW);
+       if (EW || !LW || !NW.mesh.isEnabled() || !NW.mesh.isVisible) return 1;
+       const cW = WW.EY.YG(OW).Yz,
+         wW = WW.camera.mF(),
+         tW = WW.camera.XF(),
+         xW = wW[0] - cW[0],
+         lW = wW[1] - cW[1],
+         AW = wW[2] - cW[2];
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L654-L658` → after: `L384-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L384-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L384-L425) · [Before (L654-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L654-L658)

```diff
-       return {
-         position: Ki([ee.min[0] + be[0] / 2, ee.min[1] + be[1] / 2, ee.min[2] + be[2] / 2], Ui(Me, -oe * ue)),
-         heading: ye.heading,
-         pitch: ye.pitch
-       }
+         } if (!jW.valid) return 1;
+       const UW = function(WW, iW, OW, mW, EW) {
+         const NW = iW[0] - WW[0],
+           PW = iW[1] - WW[1],
+           LW = iW[2] - WW[2],
+           cW = Math.hypot(NW, PW, LW),
+           wW = -(EW[0] * NW + EW[1] * PW + EW[2] * LW);
+         if (cW < .1 || wW <= 0) return 0;
+         const tW = (Math.abs(EW[0]) * (mW.x - OW.x) + Math.abs(EW[1]) * (mW.y - OW.y) + Math.abs(EW[2]) * (mW.z - OW.z)) / 2,
+           ZW = -(EW[0] * ((OW.x + mW.x) / 2 - WW[0]) + EW[1] * ((OW.y + mW.y) / 2 - WW[1]) + EW[2] * ((OW.z + mW.z) / 2 - WW[2]));
+         return Math.max(0, Math.min((ZW + tW + .01) / wW, 2 * tW / wW, 1 - .1 / wW))
+       }(cW, wW, jW.minimum, jW.maximum, WW.camera.XF());
+       for (let mW = 0; mW < 3; mW++) PW[mW] = (wW[mW] - cW[mW]) * UW;
+       return 1 - UW
+     }
+ 
+ ... (26 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L662-L665` → after: `L429-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L429-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L429-L569) · [Before (L662-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L662-L665)

```diff
-       const ye = Mi(ee),
-         be = Mi(He),
-         Me = Ki(ee.position, Ui(ie, -1)),
-         Ke = [0, 1, 2].reduce(((ee, ie) => Ki(ee, Ui(be[ie], Fi(Me, ye[ie])))), [0, 0, 0]);
+       if (!(0, mW.f)(WW)) return void WW.material.forceCompilation(WW, iW);
+       const PW = () => {
+         if (WW.Ay()) return void NW.delete(WW);
+         const mW = (0, EW.bb)(WW.material);
+         if (![null === mW || void 0 === mW ? void 0 : mW.diffuseTexture, null === mW || void 0 === mW ? void 0 : mW.opacityTexture, null === mW || void 0 === mW ? void 0 : mW.emissiveTexture, null === mW || void 0 === mW ? void 0 : mW.reflectionTexture].every((WW => !WW || OW.pre … [truncated]
+         NW.delete(WW), iW()
+       };
+       PW()
+     }
+   },
+   40070: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => fW,
+       c: () => DW,
+       d: () => zW,
+       e: () => XW,
+ ... (125 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L667-L669` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L571-L572) · [Before (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L667-L669)

```diff
-         position: Ki(ie, Ke),
-         heading: He.heading,
-         pitch: He.pitch
+         width: DW.EFFECT_ICON_SIZE * iW,
+         height: iW > 0 ? DW.EFFECT_ICON_SIZE : 0
```

#### 20. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L674` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L577) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L674)

```diff
-       return Ui(Ki(ee.min, ee.max), .5)
+       return WW && void 0 !== WW.str
```

#### 21. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L678-L680` → after: `L581-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L581-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L581-L642) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L678-L680)

```diff
-       const ie = ei(ee),
-         He = ii(ee.heading);
-       return [ie, He, Ji(ie, He)]
+       return WW && "object" === typeof WW && "icon" in WW && !("mainRGB" in WW)
+     }
+ 
+     function RW(WW) {
+       return WW && "object" === typeof WW && "mainRGB" in WW
+     }
+ 
+     function GW(WW) {
+       var iW, OW;
+       const mW = null !== (iW = BW(WW) ? null === (OW = WW.style) || void 0 === OW ? void 0 : OW.fontSize : void 0) && void 0 !== iW ? iW : `${DW.DEFAULT_FONT_SIZE}px`;
+       return VW.text(Number(mW.replace("px", "")))
+     }
+ 
+     function IW(WW) {
+       var iW;
+       const OW = null !== (iW = Object.hasOwn(eW.e, WW) ? eW.e[WW] : null) && void 0 !== iW ? iW : (0, PW.e)(WW, (0, PW.m)(WW));
+ ... (46 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L684` → after: `L646-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L646-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L646-L660) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L684)

```diff
-       return [ee[0] + ie[0], ee[1] + ie[1], ee[2] + ie[2]]
+       if (qW(WW)) return wi(WW);
+       if (RW(WW)) return function(WW) {
+         const iW = IW(WW);
+         if (!iW) return pW;
+         const [OW, mW] = iW.icon;
+         return pW * (OW / mW)
+       }(WW.icon) + DW.HORIZONTAL_PADDING;
+       const OW = GW(WW);
+       return function(WW, iW, OW) {
+         return OW.font = iW, OW.measureText(WW).width
+       }(rW(WW), OW, iW)
+     }
+ 
+     function QW(WW) {
+       return BW(WW) || qW(WW)
```

#### 23. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L688` → after: `L664-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L664-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L664-L871) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L688)

```diff
-       return [ee[0] * ie, ee[1] * ie, ee[2] * ie]
+       const OW = QW(WW),
+         mW = QW(iW);
+       return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * DW.HORIZONTAL_PADDING : 0
+     }
+     let ii;
+ 
+     function Oi() {
+       return ii ??= document.createElement("canvas").getContext("2d"), ii
+     }
+     const mi = () => 0;
+ 
+     function Ei(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mi;
+       iW += Wi(void 0, WW[0]);
+       for (let PW = 0; PW < WW.length; PW++) {
+         const LW = WW[PW],
+ ... (192 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L692` → after: `L875-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L875-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L875-L918) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L692)

```diff
-       return ee[0] * ie[0] + ee[1] * ie[1] + ee[2] * ie[2]
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const EW = (0, jW.r)(iW, OW, mW);
+       return WW.renderingGroupId = EW ? jW.c : jW.k, EW
+     }
+   },
+   39913: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       g: () => PW,
+       k: () => cW,
+       l: () => LW
+     });
+     var mW = OW(38437),
+       EW = OW(38419),
+       NW = OW(39915);
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L696` → after: `L922-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L922-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/279.js#L922-L935) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/279.js#L696)

```diff
-       return [ee[1] * ie[2] - ee[2] * ie[1], ee[2] * ie[0] - ee[0] * ie[2], ee[0] * ie[1] - ee[1] * ie[0]]
+       WW.diffuseTexture.sampler.noMipmap || (0, EW.q)(WW, NW.d, {
+         lodBias: NW.b[iW]
+       })
+     }
+   },
+   39976: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return "object" === typeof WW && null !== WW ? Object.assign(WW, {
+         startStep: iW
+       }) : WW
+     }
+ 
+     function EW(WW) {
+       return "object" === typeof WW && null !== WW && "startStep" in WW ? WW.startStep : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (59 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L4)

```diff
-   41320: (ee, ie, He) => {
+   42533: (WW, iW, OW) => {
```
