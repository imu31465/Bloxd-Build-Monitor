# Changed — Bundle Modifications Report (Part 022 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `22 / 67` (**313** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 2. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L58-L119` → after: `L251-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L251-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L251-L255) · [Before (L58-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L58-L119)

```diff
-       }
-       update(zz) {
-         this.create(zz)
-       }
-       updateDirectly(zz, tz, sz) {
-         let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, zz, Fz ? tz : tz * Float32Array.BYTES_PER_ELEMENT, sz ? sz * this.byteStride : void 0), this._data = 0 === tz && void 0 === sz ? zz : null)
-       }
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
-       }
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
-       }
-     }
-     class vz {
- ... (46 more removed lines; see GitHub link above)
+         return lz.current = zv, zv.engine.runRenderLoop((() => {
+           const vv = zv.camera;
+           vv.fov !== zv.targetFieldOfView && (vv.fov += (zv.targetFieldOfView - vv.fov) * (vv.fov > zv.targetFieldOfView ? .3 : .2), Math.abs(zv.targetFieldOfView - vv.fov) < 5e-4 && (vv.fov = zv.targetFieldOfView), zv.needsRender = !0), zv.needsRender && (zv.Is.render(), zv.need … [truncated]
+         })), () => {
+           lz.current = null, zv.engine.dispose()
```

#### 3. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L121-L180` → after: `L257-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L257-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L257-L447) · [Before (L121-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L121-L180)

```diff
-       }
-       _computeHashCode() {
-         this.hashCode = (vz._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
-       }
-       getData() {
-         return this._buffer.getData()
-       }
- ... (44 more removed lines; see GitHub link above)
+       }), []), (0, hv.useEffect)((() => {
+         const vv = Nz.current;
+         if (!vv) return;
+         const zv = () => {
+             cz.current = !1, sz(document.pointerLockElement === vv)
+           },
+           Pv = () => {
+             cz.current && (cz.current = !1, iz(!1))
+           },
+           hv = zv => {
+             const Pv = !Az.current.canLock && document.activeElement === vv && 0 !== (1 & zv.buttons);
+             if (document.pointerLockElement !== vv && !Pv) return;
+             const hv = Az.current.mouseSensitivity * Ov;
+             Dz((vv => function(vv, zv, Pv) {
+               const hv = 2 * Math.PI;
+               return {
+ ... (175 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L184-L205` → after: `L451-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L451-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L451-L556) · [Before (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L184-L205)

```diff
-       switch (zz) {
-         case vz.UVKind:
-         case vz.UV2Kind:
-         case vz.UV3Kind:
-         case vz.UV4Kind:
-         case vz.UV5Kind:
-         case vz.UV6Kind:
-           return 2;
-         case vz.NormalKind:
-         case vz.PositionKind:
-           return 3;
-         case vz.ColorKind:
-         case vz.ColorInstanceKind:
-         case vz.MatricesIndicesKind:
-         case vz.MatricesIndicesExtraKind:
-         case vz.MatricesWeightsKind:
- ... (6 more removed lines; see GitHub link above)
+       let {
+         heading: zv,
+         pitch: Pv,
+         onViewFrom: Sv,
+         onTurn: ev,
+         onFlip: gv
+       } = vv;
+       const {
+         t: pv
+       } = (0, sv.x)(), dv = (0, hv.useRef)(null), Nv = vz({
+         heading: zv,
+         pitch: Pv
+       }), lv = zz(zv), Tv = Nz(Nv, lv), Wv = Mv + yv + 2, wv = Hv.flatMap((vv => [1, -1].map((zv => {
+         const Pv = pz(vv.direction, zv);
+         return {
+           ...vv,
+ ... (90 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L209` → after: `L560-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L560-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L560-L593) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L209)

```diff
-       return zz instanceof Int8Array ? vz.BYTE : zz instanceof Uint8Array ? vz.UNSIGNED_BYTE : zz instanceof Int16Array ? vz.SHORT : zz instanceof Uint16Array ? vz.UNSIGNED_SHORT : zz instanceof Int32Array ? vz.INT : zz instanceof Uint32Array ? vz.UNSIGNED_INT : vz.FLOAT
+       var zv, Pv, hv;
+       const {
+         chunkGridOrigin: Sv,
+         camera: ev
+       } = vv;
+       if (null === Sv) return;
+       const gv = [ev.position.x, ev.position.y, ev.position.z],
+         pv = [0, 2].map((vv => Math.floor((gv[vv] + Sv[vv]) / av.f.aa))),
+         dv = vv.chunkGridCentre;
+       if (null !== dv && dv.every(((vv, zv) => vv === pv[zv]))) return;
+       const Tv = null === (zv = null === (Pv = vv.chunkGrid) || void 0 === Pv ? void 0 : Pv.isVisible) || void 0 === zv || zv;
+       null === (hv = vv.chunkGrid) || void 0 === hv || hv.dispose();
+       const [wv, sv] = [0, 2].map(((vv, zv) => {
+         const Pv = [];
+         for (let hv = pv[zv] - tv; hv <= pv[zv] + tv + 1; hv++) Pv.push(hv * av.f.aa - Sv[vv]);
+         return Pv
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L213` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L597-L616) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L213)

```diff
-       return (0, Xz.q)(zz)
+       const {
+         camera: zv,
+         translucent: Pv
+       } = vv, hv = [zv.position.x, zv.position.y, zv.position.z], Sv = vv.translucentSortedFrom;
+       if (null !== Sv && Math.hypot(hv[0] - Sv[0], hv[1] - Sv[1], hv[2] - Sv[2]) < xv) return;
+       vv.translucentSortedFrom = hv;
+       const ev = new Float64Array(Pv.count),
+         gv = new Uint32Array(Pv.count);
+       for (let Nv = 0; Nv < Pv.count; Nv++) {
+         const vv = Pv.gd[3 * Nv] - hv[0],
+           zv = Pv.gd[3 * Nv + 1] - hv[1],
+           Sv = Pv.gd[3 * Nv + 2] - hv[2];
+         ev[Nv] = vv * vv + zv * zv + Sv * Sv, gv[Nv] = Nv
+       }
+       gv.sort(((vv, zv) => ev[zv] - ev[vv]));
+       const pv = new Float32Array(3 * Pv.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L216-L219` → after: `L619-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L619-L624) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L216-L219)

```diff
-     function Nz(zz, tz, sz, Fz, Wz, Oz, oz, vz) {
-       (0, Xz.l)(zz, tz, sz, Fz, Wz, Oz, oz, ((zz, tz) => {
-         for (let sz = 0; sz < Fz; sz++) vz(zz[sz], tz + sz)
-       }))
+     function uv(vv, zv) {
+       const Pv = (Pv, hv, Sv) => new lv.fa(0 === Pv ? vv[0] : zv[0], 0 === hv ? vv[1] : zv[1], 0 === Sv ? vv[2] : zv[2]),
+         hv = [];
+       for (const Sv of [0, 1])
+         for (const vv of [0, 1]) hv.push([Pv(0, Sv, vv), Pv(1, Sv, vv)], [Pv(Sv, 0, vv), Pv(Sv, 1, vv)], [Pv(Sv, vv, 0), Pv(Sv, vv, 1)]);
+       return hv
```

#### 8. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L222-L223` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L627-L628) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L222-L223)

```diff
-     function bz(zz, tz, sz, Fz, Wz, Oz, oz, vz) {
-       return (0, Xz.p)(zz, tz, sz, Fz, Wz, Oz, oz, vz)
+     function vz(vv) {
+       return [Math.sin(vv.heading) * Math.cos(vv.pitch), -Math.sin(vv.pitch), Math.cos(vv.heading) * Math.cos(vv.pitch)]
```

#### 9. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L228-L229` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L631-L632) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L228-L229)

```diff
-     function Dz() {
-       wz || (wz = !0, vz.DeduceStride = Uz, vz.GetDataType = Kz, vz.GetTypeByteLength = uz, vz.ForEach = Nz, vz.GetFloatData = bz)
+     function zz(vv) {
+       return [Math.cos(vv), 0, -Math.sin(vv)]
```

#### 10. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L231-L241` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L634-L657) · [Before (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L231-L241)

```diff
-   },
-   39106: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Fz
-     });
-     class Fz {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.au = 0, this.is32Bits = !1, this.uniqueId = Fz._Counter++
+ 
+     function Pz(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: Zv,
+         pitch: Av
+       };
+       const Sv = [vv.max[0] - vv.min[0], vv.max[1] - vv.min[1], vv.max[2] - vv.min[2]],
+         ev = vz(hv),
+         gv = zz(hv.heading),
+         pv = Nz(ev, gv),
+         dv = Math.tan(Pv / 2),
+         Nv = dv * zv;
+       let lv = 1;
+       for (const Tv of [-Sv[0] / 2, Sv[0] / 2])
+         for (const vv of [-Sv[1] / 2, Sv[1] / 2])
+           for (const zv of [-Sv[2] / 2, Sv[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L244-L308` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L660-L669) · [Before (L244-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L244-L308)

```diff
-     Fz._Counter = 0
-   },
-   39284: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Xz
-     });
-     var Fz = sz(36475),
-       Wz = sz(39293);
-     class Xz {
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || tz && !this.pickedMesh.isVerticesDataPresent(Wz.m.NormalKind)) return null;
- ... (49 more removed lines; see GitHub link above)
+ 
+     function hz(vv, zv, Pv) {
+       const hv = ez(vv),
+         Sv = ez(Pv),
+         ev = gz(vv.position, pz(zv, -1)),
+         gv = [0, 1, 2].reduce(((vv, zv) => gz(vv, pz(Sv[zv], dz(ev, hv[zv])))), [0, 0, 0]);
+       return {
+         position: gz(zv, gv),
+         heading: Pv.heading,
+         pitch: Pv.pitch
```

#### 12. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L319-L366` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L673-L674) · [Before (L319-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L319-L366)

```diff
-     function Xz() {
-       Wz || (Wz = !0, Fz.ThinEngine.prototype.updateDynamicIndexBuffer = function(zz, tz) {
-         let sz;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(zz), sz = zz.is32Bits ? tz instanceof Uint32Array ? tz : new Uint32Array(tz) : tz instanceof Uint16Array ? tz : new Uint16Array(tz), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, sz, … [truncated]
-       }, Fz.ThinEngine.prototype.updateDynamicVertexBuffer = function(zz, tz, sz, Fz) {
-         this.bindArrayBuffer(zz), void 0 === sz && (sz = 0);
-         const Wz = tz.byteLength || tz.length;
-         void 0 === Fz || Fz >= Wz && 0 === sz ? tz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, new Float32Array(tz)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, tz) : tz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sz, new Floa … [truncated]
-       })
-     }
-   },
-   39113: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Fz
-     });
-     class Fz {
- ... (32 more removed lines; see GitHub link above)
+     function Sz(vv) {
+       return pz(gz(vv.min, vv.max), .5)
```

#### 13. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L368-L440` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L676-L680) · [Before (L368-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L368-L440)

```diff
-   },
-   39077: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Bz
-     });
-     var Fz = sz(36505),
-       Wz = sz(39036),
-       Xz = sz(36502),
-       Oz = sz(38097),
-       oz = sz(36493),
-       vz = sz(39079);
-     class Uz {
-       constructor() {
-         let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, zz && this.reset()
-       }
- ... (57 more removed lines; see GitHub link above)
+ 
+     function ez(vv) {
+       const zv = vz(vv),
+         Pv = zz(vv.heading);
+       return [zv, Pv, Nz(zv, Pv)]
```

#### 14. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L442-L529` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L682-L684) · [Before (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L442-L529)

```diff
-     class Kz {
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(zz) {
-         this._func !== zz && (this._func = zz, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(zz) {
-         this._backFunc !== zz && (this._backFunc = zz, this._isStencilFuncDirty = !0)
-       }
- ... (72 more removed lines; see GitHub link above)
+ 
+     function gz(vv, zv) {
+       return [vv[0] + zv[0], vv[1] + zv[1], vv[2] + zv[2]]
```

#### 15. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L531-L609` → after: `L686-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L686-L688) · [Before (L531-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L531-L609)

```diff
-     class uz {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = uz.ALWAYS, this.opStencilFail = uz.KEEP, this.opDepthFail = uz.KEEP, this.opStencilDepthPass = uz.REPLACE, this.backFunc = uz.ALWAYS, this.backOpStencilFail = uz.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(zz) {
-         this.func = zz
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
- ... (63 more removed lines; see GitHub link above)
+ 
+     function pz(vv, zv) {
+       return [vv[0] * zv, vv[1] * zv, vv[2] * zv]
```

#### 16. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L619-L1480` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L692) · [Before (L619-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L619-L1480)

```diff
-       if (tz) {
-         const {
-           requestAnimationFrame: sz
-         } = tz;
-         if ("function" === typeof sz) return sz(zz)
-       }
-       if ((0, Dz.j)()) {
-         const {
-           requestAnimationFrame: sz
-         } = tz || window;
-         if ("function" === typeof sz) return sz(zz)
-       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(zz);
-       return setTimeout(zz, 16)
-     }
-     class Bz {
-       get frameId() {
- ... (846 more removed lines; see GitHub link above)
+       return vv[0] * zv[0] + vv[1] * zv[1] + vv[2] * zv[2]
```

#### 17. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L1484-L9628` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L696) · [Before (L1484-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L1484-L9628)

```diff
-       const sz = zz;
-       if (!sz.isParallelCompiled) return void tz(zz);
-       const Fz = sz.onCompiled;
-       sz.onCompiled = () => {
-         Fz?.(), tz(zz)
-       }
-     }
-   },
-   39031: (zz, tz, sz) => {
-     sz.d(tz, {
-       ThinEngine: () => Yz
-     });
-     var Fz = sz(39036),
-       Wz = sz(39058),
-       Xz = sz(39077),
-       Oz = sz(39090),
- ... (8129 more removed lines; see GitHub link above)
+       return [vv[1] * zv[2] - vv[2] * zv[1], vv[2] * zv[0] - vv[0] * zv[2], vv[0] * zv[1] - vv[1] * zv[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L2)

```diff
- export const ids = [243, 345];
+ export const ids = [243];
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   39041: (zz, tz, sz) => {
+   39515: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L9-L10` → after: `L3735-L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L3735-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L3735-L4343) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L9-L10)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.ShadersRepository : Fz.ShadersRepositoryWGSL
+       get boundingBias() {
+         return this._boundingBias
+       }
+       set boundingBias(vv) {
+         this._boundingBias ? this._boundingBias.Vzv(vv) : this._boundingBias = vv.clone(), this._updateBoundingInfo(!0, null)
+       }
+       static CreateGeometryForMesh(vv) {
+         const zv = new iv(iv.RandomId(), vv.rD());
+         return zv.applyToMesh(vv), zv
+       }
+       get meshes() {
+         return this._meshes
+       }
+       constructor(vv, zv, Pv) {
+         let Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+ ... (593 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L12-L13` → after: `L4345-L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L4345-L4346) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.ShadersStore : Fz.ShadersStoreWGSL
+       get geometry() {
+         return this._sourceMesh._geometry
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15-L16` → after: `L4348-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L4348-L4349) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L15-L16)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Fz.IncludesShadersStore : Fz.IncludesShadersStoreWGSL
+       createInstance(vv) {
+         return this._sourceMesh.createInstance(vv)
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L21-L23` → after: `L4562-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4562-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L4562-L4566) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L21-L23)

```diff
-   60319: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       postprocessVertexShader: () => Oz
+   39712: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => kv,
+       f: () => uv,
+       i: () => yv
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L25-L28` → after: `L4568-L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4568-L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L4568-L4622) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L25-L28)

```diff
-     var Fz = sz(39041);
-     const Wz = "postprocessVertexShader",
-       Xz = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
+     var hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv = Pv(36618),
+       cv = Pv(39399),
+       Gv = Pv(39338),
+       mv = Pv(38207),
+       jv = Pv(39318),
+       fv = Pv(39716),
+       Fv = Pv(39515),
+       Yv = Pv(36594),
+       nv = Pv(36751),
+       Ov = Pv(39518),
+       Dv = Pv(39441),
+       Kv = Pv(39720),
+       Vv = Pv(39728),
+       Uv = Pv(39754),
+       Rv = Pv(39598),
+       xv = Pv(39593),
+ ... (39 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L30-L31` → after: `L4624-L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4624-L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/243.js#L4624-L7701) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/243.js#L30-L31)

```diff
-       name: Wz,
-       shader: Xz
+       source: null,
+       parent: null,
+       doNotCloneChildren: !1,
+       clonePhysicsImpostor: !0,
+       cloneThinInstances: !1
+     };
+     class kv extends Uv.c {
+       static _GetDefaultSideOrientation(vv) {
+         return vv || kv.FRONTSIDE
+       }
+       get useLODScreenCoverage() {
+         return this._internalMeshDataInfo._useLODScreenCoverage
+       }
+       set useLODScreenCoverage(vv) {
+         this._internalMeshDataInfo._useLODScreenCoverage = vv, this._sortLODLevels()
+       }
+ ... (3062 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L4)

```diff
-   39231: (zz, tz, sz) => {
+   39441: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L6-L12` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L6-L9) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L6-L12)

```diff
-       e: () => Nz,
-       i: () => uz,
-       l: () => vz,
-       n: () => bz,
-       p: () => Uz,
-       q: () => oz,
-       s: () => Kz
+       c: () => pv,
+       g: () => sv,
+       h: () => Nv,
+       k: () => dv
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L14-L44` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L11-L17) · [Before (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L14-L44)

```diff
-     var Fz = sz(38097),
-       Wz = sz(39234);
- 
-     function Xz(zz, tz, sz, Fz) {
-       switch (tz) {
-         case 5120: {
-           let tz = zz.getInt8(sz);
-           return Fz && (tz = Math.max(tz / 127, -1)), tz
-         }
-         case 5121: {
-           let tz = zz.getUint8(sz);
-           return Fz && (tz /= 255), tz
-         }
-         case 5122: {
-           let tz = zz.getInt16(sz, !0);
-           return Fz && (tz = Math.max(tz / 32767, -1)), tz
- ... (15 more removed lines; see GitHub link above)
+     var hv = Pv(39242),
+       Sv = Pv(38209),
+       ev = Pv(39361),
+       gv = Pv(39272);
+     class pv {
+       get mzv() {
+         return this._isDisposed
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L46-L75` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L19-L26) · [Before (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L46-L75)

```diff
-     }
- 
-     function Oz(zz, tz, sz, Fz, Xz) {
-       switch (tz) {
-         case 5120:
-           Fz && (Xz = Math.round(127 * Xz)), zz.setInt8(sz, Xz);
-           break;
-         case 5121:
-           Fz && (Xz = Math.round(255 * Xz)), zz.setUint8(sz, Xz);
-           break;
-         case 5122:
-           Fz && (Xz = Math.round(32767 * Xz)), zz.setInt16(sz, Xz, !0);
-           break;
-         case 5123:
-           Fz && (Xz = Math.round(65535 * Xz)), zz.setUint16(sz, Xz, !0);
-           break;
- ... (14 more removed lines; see GitHub link above)
+       constructor(vv, zv, Pv) {
+         let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           pv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           dv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           Nv = arguments.length > 7 ? arguments[7] : void 0,
+           lv = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, gv.c)(), vv && vv.rD ? this._engine = vv.rD().ma() : this._engine = vv, this._updatable = Pv, this._instanced = pv, this._divisor = Nv || 1, this._label = lv, zv instanceof hv.b ? (this._data = null, this._buffer = zv) … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L77-L93` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L28-L33) · [Before (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L77-L93)

```diff
-     }
- 
-     function oz(zz) {
-       switch (zz) {
-         case 5120:
-         case 5121:
-           return 1;
-         case 5122:
-         case 5123:
-         case 5131:
-           return 2;
-         case 5124:
-         case 5125:
-         case 5126:
-           return 4;
-         default:
- ... (1 more removed lines; see GitHub link above)
+       createVertexBuffer(vv, zv, Pv, hv, Sv) {
+         let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           gv = arguments.length > 6 ? arguments[6] : void 0;
+         const pv = ev ? zv : zv * Float32Array.BYTES_PER_ELEMENT,
+           Nv = hv ? ev ? hv : hv * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new dv(this._engine, this, vv, this._updatable, !0, Nv, void 0 === Sv ? this._instanced : Sv, pv, Pv, void 0, void 0, !0, this._divisor || gv)
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L95-L117` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L35-L36) · [Before (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L95-L117)

```diff
-     }
- 
-     function vz(zz, tz, sz, Fz, Wz, vz, Uz, Kz) {
-       const uz = new Array(Fz),
-         Nz = new Array(Fz);
-       if (zz instanceof Array) {
-         let Wz = tz / 4;
-         const Xz = sz / 4;
-         for (let tz = 0; tz < vz; tz += Fz) {
-           for (let tz = 0; tz < Fz; tz++) uz[tz] = Nz[tz] = zz[Wz + tz];
-           Kz(Nz, tz);
-           for (let tz = 0; tz < Fz; tz++) uz[tz] !== Nz[tz] && (zz[Wz + tz] = Nz[tz]);
-           Wz += Xz
-         }
-       } else {
-         const bz = ArrayBuffer.isView(zz) ? new DataView(zz.buffer, zz.byteOffset, zz.byteLength) : new DataView(zz),
- ... (7 more removed lines; see GitHub link above)
+       isUpdatable() {
+         return this._updatable
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L119-L128` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L38-L39) · [Before (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L119-L128)

```diff
-     }
- 
-     function Uz(zz, tz, sz, Wz, Xz, Oz, Uz, Kz) {
-       const uz = tz * oz(sz),
-         Nz = Uz * tz;
-       if (5126 !== sz || Xz !== uz) {
-         const Fz = new Float32Array(Nz);
-         return vz(zz, Wz, Xz, tz, sz, Nz, Oz, ((zz, sz) => {
-           for (let Wz = 0; Wz < tz; Wz++) Fz[sz + Wz] = zz[Wz]
-         })), Fz
+       getData() {
+         return this._data
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L130-L137` → after: `L41-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L41-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L41-L56) · [Before (L130-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L130-L137)

```diff
-       if (!(zz instanceof Array || zz instanceof Float32Array) || 0 !== Wz || zz.length !== Nz) {
-         if (zz instanceof Array) {
-           const tz = Wz / 4;
-           return zz.slice(tz, tz + Nz)
-         }
-         if (ArrayBuffer.isView(zz)) {
-           const tz = zz.byteOffset + Wz;
-           return 0 !== (3 & tz) && (Fz.e.Warn("Float array must be aligned to 4-bytes border"), Kz = !0), Kz ? new Float32Array(zz.buffer.slice(tz, tz + Nz * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(zz.buffer, tz, Nz)
+       getBuffer() {
+         return this._buffer
+       }
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
+       }
+       create() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !vv && this._buffer || (vv = vv || this._data, vv && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, vv), this._data = vv) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(vv, this._label), this._data = vv … [truncated]
+       }
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.GT > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.GT, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.GT, void 0, this._label));
+           Sv.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L141-L193` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L59-L60) · [Before (L141-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L141-L193)

```diff
-       return Kz ? zz.slice() : zz
-     }
- 
-     function Kz(zz, tz, sz, Wz, Xz, Oz, Uz) {
-       const Kz = oz(sz),
-         uz = function(zz) {
-           switch (zz) {
-             case 5120:
-               return Int8Array;
-             case 5121:
-               return Uint8Array;
-             case 5122:
-               return Int16Array;
-             case 5123:
-             case 5131:
-               return Uint16Array;
- ... (37 more removed lines; see GitHub link above)
+       update(vv) {
+         this.create(vv)
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L195-L225` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L62-L70) · [Before (L195-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L195-L225)

```diff
-       return 1 !== Kz && 0 !== (wz & Kz - 1) && (Fz.e.Warn("Array must be aligned to border of element size. Data will be copied."), Uz = !0), Uz ? new uz(bz.slice(wz, wz + Nz * Kz)) : new uz(bz, wz, Nz)
-     }
- 
-     function uz(zz, tz, sz, Wz, Xz, Oz, Uz, Kz) {
-       const uz = tz * oz(sz),
-         Nz = Uz * tz;
-       if (Kz.length !== Nz) throw new Error("Output length is not valid");
-       if (5126 === sz && Xz === uz)
-         if (zz instanceof Array) {
-           const tz = Wz / 4;
-           Kz.set(zz, tz)
-         } else if (ArrayBuffer.isView(zz)) {
-         const tz = zz.byteOffset + Wz;
-         if (0 !== (3 & tz)) return Fz.e.Warn("Float array must be aligned to 4-bytes border"), void Kz.set(new Float32Array(zz.buffer.slice(tz, tz + Nz * Float32Array.BYTES_PER_ELEMENT)));
-         const sz = new Float32Array(zz.buffer, tz, Nz);
-         Kz.set(sz)
- ... (15 more removed lines; see GitHub link above)
+       updateDirectly(vv, zv, Pv) {
+         let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, vv, hv ? zv : zv * Float32Array.BYTES_PER_ELEMENT, Pv ? Pv * this.byteStride : void 0), this._data = 0 === zv && void 0 === Pv ? vv : null)
+       }
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
+       }
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L246-L247` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L74-L75) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L246-L247)

```diff
-       constructor() {
-         this.children = []
+       get mzv() {
+         return this._isDisposed
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L249-L250` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L77-L78) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L249-L250)

```diff
-       isValid(zz) {
-         return !0
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L252-L271` → after: `L80-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L80-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L80-L119) · [Before (L252-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L252-L271)

```diff
-       process(zz, tz, sz) {
-         let Fz = "";
-         if (this.line) {
-           let sz = this.line;
-           const Wz = tz.processor;
-           if (Wz) {
-             Wz.lineProcessor && (sz = Wz.lineProcessor(sz, tz.isFragment, tz.processingContext));
-             const Fz = tz.processor?.attributeKeywordName ?? "attribute",
-               Xz = tz.isFragment && tz.processor?.varyingFragmentKeywordName ? tz.processor?.varyingFragmentKeywordName : !tz.isFragment && tz.processor?.varyingVertexKeywordName ? tz.processor?.varyingVertexKeywordName : "varying";
-             if (!tz.isFragment && Wz.attributeProcessor && this.line.startsWith(Fz)) sz = Wz.attributeProcessor(this.line, zz, tz.processingContext);
-             else if (Wz.varyingProcessor && (Wz.varyingCheck?.(this.line, tz.isFragment) || !Wz.varyingCheck && this.line.startsWith(Xz))) sz = Wz.varyingProcessor(this.line, tz.isFragment, zz, tz.processingContext);
-             else if (Wz.uniformProcessor && Wz.uniformRegexp && Wz.uniformRegexp.test(this.line)) tz.lookForClosingBracketForUniformBuffer || (sz = Wz.uniformProcessor(this.line, tz.isFragment, zz, tz.processingContext));
-             else if (Wz.uniformBufferProcessor && Wz.uniformBufferRegexp && Wz.uniformBufferRegexp.test(this.line)) tz.lookForClosingBracketForUniformBuffer || (sz = Wz.uniformBufferProcessor(this.line, tz.isFragment, tz.processingContext), tz.lookForClosingBracketForUniformBuffe … [truncated]
-             else if (Wz.textureProcessor && Wz.textureRegexp && Wz.textureRegexp.test(this.line)) sz = Wz.textureProcessor(this.line, tz.isFragment, zz, tz.processingContext);
-             else if ((Wz.uniformProcessor || Wz.uniformBufferProcessor) && this.line.startsWith("uniform") && !tz.lookForClosingBracketForUniformBuffer) {
-               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Wz.uniformProcessor && (sz = Wz.uniformProcessor(this.line, tz.isFragment, zz, tz.processingContext)) : Wz.uniformBufferProcessor && (sz = Wz.uniformBufferProcessor(this.line, tz.isFragment,  … [truncated]
- ... (4 more removed lines; see GitHub link above)
+       set instanceDivisor(vv) {
+         const zv = 0 != vv;
+         this._instanceDivisor = vv, zv !== this._instanced && (this._instanced = zv, this._computeHashCode())
+       }
+       get _maxVerticesCount() {
+         const vv = this.getData();
+         return vv ? Array.isArray(vv) ? vv.length / (this.byteStride / 4) - this.byteOffset / 4 : (vv.byteLength - this.byteOffset) / this.byteStride : 0
+       }
+       constructor(vv, zv, Pv, hv, Sv, gv, Tv, Wv, wv, av) {
+         let sv, Cv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           iv = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           cv = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           Gv = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = vv, "object" === typeof hv && null !== hv ? (sv = hv.updatable ?? !1, Sv = hv.postponeInternalCreation, gv = hv.stride, Tv = hv.instanced, Wv = hv.offset, wv = hv.size, av = hv.type, Cv = hv.normalized ?? !1, iv = hv.useBytes ?? !1 … [truncated]
+           const vv = this.getData();
+           this.type = vv ? lv(vv) : dv.FLOAT
+ ... (24 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L276-L279` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L122-L123) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L276-L279)

```diff
-     }
-     class Wz {
-       constructor() {
-         this._lines = []
+       _computeHashCode() {
+         this.hashCode = (dv._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L281-L282` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L125-L126) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L281-L282)

```diff
-       get currentLine() {
-         return this._lines[this.lineIndex]
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L284-L285` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L128-L129) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L284-L285)

```diff
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
+       getKind() {
+         return this._kind
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L287-L311` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L131-L132) · [Before (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L287-L311)

```diff
-       set lines(zz) {
-         this._lines.length = 0;
-         for (const tz of zz) {
-           if (!tz || "\r" === tz) continue;
-           if ("#" === tz[0]) {
-             this._lines.push(tz);
-             continue
-           }
-           const zz = tz.trim();
-           if (!zz) continue;
-           if (zz.startsWith("//")) {
-             this._lines.push(tz);
-             continue
-           }
-           const sz = zz.indexOf(";");
-           if (-1 === sz) this._lines.push(zz);
- ... (9 more removed lines; see GitHub link above)
+       isUpdatable() {
+         return this._buffer.isUpdatable()
```

#### 18. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L313-L320` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L134-L135) · [Before (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L313-L320)

```diff
-     }
-     class Xz extends Fz {
-       process(zz, tz, sz) {
-         for (let Fz = 0; Fz < this.children.length; Fz++) {
-           const Wz = this.children[Fz];
-           if (Wz.isValid(zz)) return Wz.process(zz, tz, sz)
-         }
-         return ""
+       getData() {
+         return this._buffer.getData()
```

#### 19. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L322-L325` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L137-L139) · [Before (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L322-L325)

```diff
-     }
-     class Oz extends Fz {
-       isValid(zz) {
-         return this.testExpression.isTrue(zz)
+       getFloatData(vv, zv) {
+         const Pv = this.getData();
+         return Pv ? (0, ev.p)(Pv, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, vv, zv) : null
```

#### 20. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L327-L330` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L141-L142) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L327-L330)

```diff
-     }
-     class oz {
-       isTrue(zz) {
-         return !0
+       getBuffer() {
+         return this._buffer.getBuffer()
```

#### 21. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L332-L391` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L144-L145) · [Before (L332-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L332-L391)

```diff
-       static postfixToInfix(zz) {
-         const tz = [];
-         for (const sz of zz)
-           if (void 0 === oz._OperatorPriority[sz]) tz.push(sz);
-           else {
-             const zz = tz[tz.length - 1],
-               Fz = tz[tz.length - 2];
-             tz.length -= 2, tz.push(`(${Fz}${sz}${zz})`)
-           } return tz[tz.length - 1]
-       }
-       static infixToPostfix(zz) {
-         const tz = oz._InfixToPostfixCache.get(zz);
-         if (tz) return tz.accessTime = Date.now(), tz.result;
-         if (!zz.includes("&&") && !zz.includes("||") && !zz.includes(")") && !zz.includes("(")) return [zz];
-         const sz = [];
-         let Fz = -1;
- ... (44 more removed lines; see GitHub link above)
+       getWrapperBuffer() {
+         return this._buffer
```

#### 22. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L393-L395` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L147-L148) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L393-L395)

```diff
-       isTrue(zz) {
-         let tz = void 0 !== zz[this.define];
-         return this.not && (tz = !tz), tz
+       getStrideSize() {
+         return this.byteStride / (0, ev.q)(this.type)
```

#### 23. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L397-L400` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L150-L151) · [Before (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L397-L400)

```diff
-     }
-     class Uz extends oz {
-       isTrue(zz) {
-         return this.leftOperand.isTrue(zz) || this.rightOperand.isTrue(zz)
+       pzv() {
+         return this.byteOffset / (0, ev.q)(this.type)
```

#### 24. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L402-L405` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L153-L154) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L402-L405)

```diff
-     }
-     class Kz extends oz {
-       isTrue(zz) {
-         return this.leftOperand.isTrue(zz) && this.rightOperand.isTrue(zz)
+       getSize() {
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ev.q)(this.type) : this._size
```

#### 25. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L407-L410` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L156-L157) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L407-L410)

```diff
-     }
-     class uz extends oz {
-       constructor(zz, tz, sz) {
-         super(), this.define = zz, this.operand = tz, this.testValue = sz
+       getIsInstanced() {
+         return this._instanced
```

#### 26. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L412-L413` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L159-L160) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       getInstanceDivisor() {
+         return this._instanceDivisor
```

#### 27. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L415-L439` → after: `L162-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L162-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L162-L178) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L415-L439)

```diff
-       isTrue(zz) {
-         let tz = !1;
-         const sz = parseInt(void 0 != zz[this.define] ? zz[this.define] : this.define),
-           Fz = parseInt(void 0 != zz[this.testValue] ? zz[this.testValue] : this.testValue);
-         if (isNaN(sz) || isNaN(Fz)) return !1;
-         switch (this.operand) {
-           case ">":
-             tz = sz > Fz;
-             break;
-           case "<":
-             tz = sz < Fz;
-             break;
-           case "<=":
-             tz = sz <= Fz;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       create(vv) {
+         this._buffer.create(vv), this._alignBuffer()
+       }
+       update(vv) {
+         this._buffer.update(vv), this._alignBuffer()
+       }
+       updateDirectly(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._buffer.updateDirectly(vv, zv, void 0, Pv), this._alignBuffer()
+       }
+       dispose() {
+         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       }
+       forEach(vv, zv) {
+         (0, ev.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, vv, this.normalized, ((vv, Pv) => {
+           for (let hv = 0; hv < this._size; hv++) zv(vv[hv], Pv + hv)
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L454-L485` → after: `L184-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L184-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L184-L204) · [Before (L454-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L454-L485)

```diff
-       zz.processor && zz.processor.initializeShaders && zz.processor.initializeShaders(zz.processingContext)
-     }
- 
-     function mz(zz, tz, sz, Fz) {
-       tz.processor?.preProcessShaderCode && (zz = tz.processor.preProcessShaderCode(zz, tz.isFragment)), cz(zz, tz, (zz => {
-         tz.processCodeAfterIncludes && (zz = tz.processCodeAfterIncludes(tz.isFragment ? "fragment" : "vertex", zz, tz.defines));
-         const Wz = function(zz, tz, sz) {
-           let Fz = function(zz, tz) {
-             if (tz.processor?.noPrecision) return zz;
-             const sz = tz.shouldUseHighPrecisionShader; - 1 === zz.indexOf("precision highp float") ? zz = sz ? "precision highp float;\n" + zz : "precision mediump float;\n" + zz : sz || (zz = zz.replace("precision highp float", "precision mediump float"));
-             return zz
-           }(zz, tz);
-           if (!tz.processor) return Fz;
-           if (0 === tz.processor.shaderLanguage && -1 !== Fz.indexOf("#version 3") && (Fz = Fz.replace("#version 300 es", ""), !tz.processor.parseGLES3)) return Fz;
-           const Wz = tz.defines,
-             Xz = Tz(tz, sz);
- ... (16 more removed lines; see GitHub link above)
+       switch (vv) {
+         case dv.UVKind:
+         case dv.UV2Kind:
+         case dv.UV3Kind:
+         case dv.UV4Kind:
+         case dv.UV5Kind:
+         case dv.UV6Kind:
+           return 2;
+         case dv.NormalKind:
+         case dv.PositionKind:
+           return 3;
+         case dv.ColorKind:
+         case dv.ColorInstanceKind:
+         case dv.MatricesIndicesKind:
+         case dv.MatricesIndicesExtraKind:
+         case dv.MatricesWeightsKind:
+ ... (5 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L490-L500` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L209) · [Before (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L490-L500)

```diff
-       const tz = /defined\((.+)\)/.exec(zz);
-       if (tz && tz.length) return new vz(tz[1].trim(), "!" === zz[0]);
-       const sz = ["==", "!=", ">=", "<=", "<", ">"];
-       let Fz = "",
-         Wz = 0;
-       for (Fz of sz)
-         if (Wz = zz.indexOf(Fz), Wz > -1) break;
-       if (-1 === Wz) return new vz(zz);
-       const Xz = zz.substring(0, Wz).trim(),
-         Oz = zz.substring(Wz + Fz.length).trim();
-       return new uz(Xz, Fz, Oz)
+       return vv instanceof Int8Array ? dv.BYTE : vv instanceof Uint8Array ? dv.UNSIGNED_BYTE : vv instanceof Int16Array ? dv.SHORT : vv instanceof Uint16Array ? dv.UNSIGNED_SHORT : vv instanceof Int32Array ? dv.INT : vv instanceof Uint32Array ? dv.UNSIGNED_INT : dv.FLOAT
```

#### 30. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L503-L522` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L212-L213) · [Before (L503-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L503-L522)

```diff
-     function Cz(zz, tz) {
-       const sz = new Oz,
-         Fz = zz.substring(0, tz);
-       let Wz = zz.substring(tz);
-       return Wz = Wz.substring(0, (Wz.indexOf("//") + 1 || Wz.length + 1) - 1).trim(), sz.testExpression = "#ifdef" === Fz ? new vz(Wz) : "#ifndef" === Fz ? new vz(Wz, !0) : function(zz) {
-         zz = zz.replace(wz, "defined[$1]");
-         const tz = oz.infixToPostfix(zz),
-           sz = [];
-         for (const Wz of tz)
-           if ("||" !== Wz && "&&" !== Wz) sz.push(Wz);
-           else if (sz.length >= 2) {
-           let zz = sz[sz.length - 1],
-             tz = sz[sz.length - 2];
-           sz.length -= 2;
-           const Fz = "&&" == Wz ? new Kz : new Uz;
-           "string" === typeof zz && (zz = zz.replace(Dz, "defined($1)")), "string" === typeof tz && (tz = tz.replace(Dz, "defined($1)")), Fz.leftOperand = "string" === typeof tz ? Iz(tz) : tz, Fz.rightOperand = "string" === typeof zz ? Iz(zz) : zz, sz.push(Fz)
- ... (4 more removed lines; see GitHub link above)
+     function Tv(vv) {
+       return (0, ev.q)(vv)
```

#### 31. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L525-L538` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L216-L219) · [Before (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L525-L538)

```diff
-     function ez(zz, tz, sz, Wz) {
-       let Xz;
-       for (; Zz(zz, sz, Wz);) {
-         Xz = zz.currentLine;
-         const Oz = Xz.substring(0, 5).toLowerCase();
-         if ("#else" === Oz) {
-           const sz = new Fz;
-           return tz.children.push(sz), void Zz(zz, sz, Wz)
-         }
-         if ("#elif" === Oz) {
-           const zz = Cz(Xz, 5);
-           tz.children.push(zz), sz = zz
-         }
-       }
+     function Wv(vv, zv, Pv, hv, Sv, gv, pv, dv) {
+       (0, ev.j)(vv, zv, Pv, hv, Sv, gv, pv, ((vv, zv) => {
+         for (let Pv = 0; Pv < hv; Pv++) dv(vv[Pv], zv + Pv)
+       }))
```

#### 32. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L541-L584` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L222-L223) · [Before (L541-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L541-L584)

```diff
-     function Zz(zz, tz, sz) {
-       for (; zz.canRead;) {
-         zz.lineIndex++;
-         const Wz = zz.currentLine;
-         if (Wz.indexOf("#") >= 0) {
-           const Fz = Yz.exec(Wz);
-           if (Fz && Fz.length) {
-             switch (Fz[0]) {
-               case "#ifdef": {
-                 const Fz = new Xz;
-                 tz.children.push(Fz);
-                 const Oz = Cz(Wz, 6);
-                 Fz.children.push(Oz), ez(zz, Fz, Oz, sz);
-                 break
-               }
-               case "#else":
- ... (28 more removed lines; see GitHub link above)
+     function wv(vv, zv, Pv, hv, Sv, gv, pv, dv) {
+       return (0, ev.p)(vv, zv, Pv, hv, Sv, gv, pv, dv)
```

#### 33. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L587-L590` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L228-L229) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L587-L590)

```diff
-     function Gz(zz, tz, sz, Xz) {
-       const Oz = new Fz,
-         oz = new Wz;
-       return oz.lineIndex = -1, oz.lines = zz.split("\n"), Zz(oz, Oz, Xz), Oz.process(tz, sz, Xz)
+     function sv() {
+       av || (av = !0, dv.DeduceStride = Nv, dv.GetDataType = lv, dv.GetTypeByteLength = Tv, dv.ForEach = Wv, dv.GetFloatData = wv)
```

#### 34. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L592-L598` → after: `L231-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L231-L241) · [Before (L592-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L592-L598)

```diff
- 
-     function Tz(zz, tz) {
-       const sz = zz.defines,
-         Fz = {};
-       for (const Wz of sz) {
-         const zz = Wz.replace("#define", "").replace(";", "").trim().split(" ");
-         Fz[zz[0]] = zz.length > 1 ? zz[1] : ""
+   },
+   39242: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => hv
+     });
+     class hv {
+       get underlyingResource() {
+         return null
+       }
+       constructor() {
+         this.references = 0, this.GT = 0, this.is32Bits = !1, this.uniqueId = hv._Counter++
```

#### 35. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L602-L622` → after: `L244-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L244-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L244-L286) · [Before (L602-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L602-L622)

```diff
- 
-     function cz(zz, tz, sz) {
-       let Fz;
-       for (rz.length = 0; null !== (Fz = gz.exec(zz));) rz.push(Fz);
-       let Wz = [zz],
-         Xz = !1;
-       for (const oz of rz) {
-         let zz = oz[1];
-         if (-1 !== zz.indexOf("__decl__") && (zz = zz.replace(Hz, ""), tz.supportsUniformBuffers && (zz = zz.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), zz += "Declaration"), !tz.includesShadersStore[zz]) {
-           const Fz = tz.shadersRepository + "ShadersInclude/" + zz + ".fx";
-           return void jz.loadFile(Fz, (Fz => {
-             tz.includesShadersStore[zz] = Fz, cz(Wz.join(""), tz, sz)
-           }))
-         } {
-           let sz = tz.includesShadersStore[zz];
-           if (oz[2]) {
- ... (5 more removed lines; see GitHub link above)
+     hv._Counter = 0
+   },
+   39438: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => ev
+     });
+     var hv = Pv(36594),
+       Sv = Pv(39441);
+     class ev {
+       constructor() {
+         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+       }
+       getNormal() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!this.pickedMesh || zv && !this.pickedMesh.isVerticesDataPresent(Sv.k.NormalKind)) return null;
+ ... (27 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L625-L642` → after: `L289-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L289-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L289-L294) · [Before (L625-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L625-L642)

```diff
-           if (oz[4]) {
-             const zz = oz[5];
-             if (-1 !== zz.indexOf("..")) {
-               const Fz = zz.split(".."),
-                 Wz = parseInt(Fz[0]);
-               let Xz = parseInt(Fz[1]),
-                 Oz = sz.slice(0);
-               sz = "", isNaN(Xz) && (Xz = tz.indexParameters[Fz[1]]);
-               for (let zz = Wz; zz < Xz; zz++) tz.supportsUniformBuffers || (Oz = Oz.replace(Bz, ((zz, tz) => tz + "{X}"))), sz += Oz.replace(Pz, zz.toString()) + "\n"
-             } else tz.supportsUniformBuffers || (sz = sz.replace(Bz, ((zz, tz) => tz + "{X}"))), sz = sz.replace(Pz, zz)
-           }
-           const Fz = [];
-           for (const zz of Wz) {
-             const tz = zz.split(oz[0]);
-             for (let zz = 0; zz < tz.length - 1; zz++) Fz.push(tz[zz]), Fz.push(sz);
-             Fz.push(tz[tz.length - 1])
- ... (2 more removed lines; see GitHub link above)
+           let Pv = vv.getWorldMatrix();
+           vv.nonUniformScaling && (hv.i.Matrix[0].Vzv(Pv), Pv = hv.i.Matrix[0], Pv.setTranslationFromFloats(0, 0, 0), Pv.invert(), Pv.transposeToRef(hv.i.Matrix[1]), Pv = hv.i.Matrix[1]), hv.l.TransformNormalToRef(zv, Pv, zv)
+         };
+         if (vv && Nv(this.pickedMesh, Pv), this.ray) {
+           const zv = hv.i.fa[0].Vzv(Pv);
+           vv || Nv(this.pickedMesh, zv), hv.l.Dot(zv, this.ray.direction) > 0 && Pv.negateInPlace()
```

#### 37. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L645-L651` → after: `L298-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L298-L308) · [Before (L645-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L645-L651)

```diff
-       rz.length = 0;
-       const Oz = Wz.join("");
-       Xz ? cz(Oz.toString(), tz, sz) : sz(Oz)
-     }
-     const jz = {
-       loadFile: (zz, tz, sz, Fz, Wz, Xz) => {
-         throw (0, Nz.i)("FileTools")
+       getTextureCoordinates() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sv.k.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(vv)) return null;
+         const zv = this.pickedMesh.dPv();
+         if (!zv) return null;
+         const Pv = this.pickedMesh.getVerticesData(vv);
+         if (!Pv) return null;
+         let ev = hv.j.FromArray(Pv, 2 * zv[3 * this.faceId]),
+           gv = hv.j.FromArray(Pv, 2 * zv[3 * this.faceId + 1]),
+           pv = hv.j.FromArray(Pv, 2 * zv[3 * this.faceId + 2]);
+         return ev = ev.scale(this.bu), gv = gv.scale(this.bv), pv = pv.scale(1 - this.bu - this.bv), new hv.j(ev.x + gv.x + pv.x, ev.y + gv.y + pv.y)
```

#### 38. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L655` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L312) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L655)

```diff
-   39063: (zz, tz, sz) => {
+   39272: (vv, zv, Pv) => {
```

#### 39. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L657-L661` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L314) · [Before (L657-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L657-L661)

```diff
-       b: () => Wz,
-       c: () => Xz,
-       f: () => oz,
-       g: () => Oz,
-       k: () => vz
+       c: () => ev
```

#### 40. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L663-L682` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L316-L317) · [Before (L663-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L663-L682)

```diff
-     var Fz = sz(39065);
-     const Wz = {};
- 
-     function Xz(zz, tz) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (tz ? tz + "\n" : "") + zz
-     }
- 
-     function Oz(zz, tz, sz, Xz, Oz, oz, vz) {
-       const Uz = vz || Wz.loadFile;
-       if (!Uz) throw (0, Fz.i)("FileTools");
-       return Uz(zz, tz, sz, Xz, Oz, oz)
-     }
- 
-     function oz(zz, tz, sz, Fz) {
-       if (zz) return tz ? zz.IS_NDC_HALF_ZRANGE = "" : delete zz.IS_NDC_HALF_ZRANGE, sz ? zz.USE_REVERSE_DEPTHBUFFER = "" : delete zz.USE_REVERSE_DEPTHBUFFER, void(Fz ? zz.USE_EXACT_SRGB_CONVERSIONS = "" : delete zz.USE_EXACT_SRGB_CONVERSIONS);
-       {
- ... (4 more removed lines; see GitHub link above)
+     var hv = Pv(39152);
+     let Sv = !1;
```

#### 41. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L684-L727` → after: `L319-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L319-L327) · [Before (L684-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L684-L727)

```diff
-     function vz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Fz = arguments.length > 3 ? arguments[3] : void 0;
-       switch (zz) {
-         case 3: {
-           const zz = new Int8Array(tz);
-           return Fz && zz.set(new Int8Array(Fz)), zz
-         }
-         case 0: {
-           const zz = new Uint8Array(tz);
-           return Fz && zz.set(new Uint8Array(Fz)), zz
-         }
-         case 4: {
-           const zz = "number" !== typeof tz ? new Int16Array(tz) : new Int16Array(sz ? tz / 2 : tz);
-           return Fz && zz.set(new Int16Array(Fz)), zz
-         }
- ... (28 more removed lines; see GitHub link above)
+     function ev() {
+       Sv || (Sv = !0, hv.ThinEngine.prototype.updateDynamicIndexBuffer = function(vv, zv) {
+         let Pv;
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(vv), Pv = vv.is32Bits ? zv instanceof Uint32Array ? zv : new Uint32Array(zv) : zv instanceof Uint16Array ? zv : new Uint16Array(zv), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Pv, … [truncated]
+       }, hv.ThinEngine.prototype.updateDynamicVertexBuffer = function(vv, zv, Pv, hv) {
+         this.bindArrayBuffer(vv), void 0 === Pv && (Pv = 0);
+         const Sv = zv.byteLength || zv.length;
+         void 0 === hv || hv >= Sv && 0 === Pv ? zv instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, new Float32Array(zv)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, zv) : zv instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, new Floa … [truncated]
+       })
```

#### 42. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L730` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L330) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L730)

```diff
-   39065: (zz, tz, sz) => {
+   39249: (vv, zv, Pv) => {
```

#### 43. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L732-L735` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L332) · [Before (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L732-L735)

```diff
-       d: () => Uz,
-       f: () => Kz,
-       g: () => vz,
-       i: () => Wz
+       d: () => hv
```

#### 44. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L737-L751` → after: `L334-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L334-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L334-L357) · [Before (L737-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L737-L751)

```diff
-     const Fz = {};
- 
-     function Wz(zz) {
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Fz[zz]) return Fz[zz] = !0, `${zz} needs to be imported before as it contains a side-effect required by your code.`
-     }
-     const Xz = {};
-     let Oz = !1,
-       oz = 0;
- 
-     function vz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Fz = function() {
-         if ((sz || Oz) && 0 === oz) {
-           const sz = `${zz}.${tz}`;
-           Xz[sz] || (Xz[sz] = !0, console.warn(`[Babylon.js] ${sz}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+     class hv {
+       get underlyingResource() {
+         return this._webGLTexture
+       }
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           zv = arguments.length > 1 ? arguments[1] : void 0;
+         if (this._MSAARenderBuffers = null, this._context = zv, !vv && (vv = zv.createTexture(), !vv)) throw new Error("Unable to create webGL texture");
+         this.set(vv)
+       }
+       setUsage() {}
+       set(vv) {
+         this._webGLTexture = vv
+       }
+       reset() {
+         this._webGLTexture = null, this._MSAARenderBuffers = null
+ ... (8 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L753-L773` → after: `L359-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L359-L365) · [Before (L753-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L753-L773)

```diff
-       };
-       return Fz.__isSideEffectStub = !0, Fz
-     }
- 
-     function Uz(zz) {
-       return !!zz && !zz.__isSideEffectStub
-     }
- 
-     function Kz(zz, tz) {
-       return {
-         get() {},
-         set(zz) {
-           Object.defineProperty(this, tz, {
-             value: zz,
-             writable: !0,
-             configurable: !0,
- ... (5 more removed lines; see GitHub link above)
+       }
+       getMSAARenderBuffer() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[vv] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
```

#### 46. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L777-L795` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L369) · [Before (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L777-L795)

```diff
-   39051: (zz, tz, sz) => {
-     function Fz() {
-       return "undefined" !== typeof window
-     }
- 
-     function Wz() {
-       return "undefined" !== typeof navigator
-     }
- 
-     function Xz() {
-       return "undefined" !== typeof document
-     }
- 
-     function Oz(zz) {
-       let tz = "",
-         sz = zz.firstChild;
- ... (3 more removed lines; see GitHub link above)
+   39212: (vv, zv, Pv) => {
```

#### 47. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L797-L801` → after: `L371-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L371-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L371-L1151) · [Before (L797-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L797-L801)

```diff
-       e: () => Oz,
-       g: () => Xz,
-       i: () => Wz,
-       j: () => Fz
-     })
+       b: () => cv
+     });
+     var hv = Pv(36618),
+       Sv = Pv(39157),
+       ev = Pv(36615),
+       gv = Pv(38209),
+       pv = Pv(36610),
+       dv = Pv(39220);
+     class Nv {
+       constructor() {
+         let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, vv && this.reset()
+       }
+       get isDirty() {
+         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
+       }
+ ... (765 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L803` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1153) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L803)

```diff
-   39215: (zz, tz, sz) => {
+   39162: (vv, zv, Pv) => {
```

#### 49. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L805-L807` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1155) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L805-L807)

```diff
-       e: () => Fz,
-       g: () => Wz,
-       i: () => Xz
+       d: () => hv
```

#### 50. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L809-L822` → after: `L1157-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1157-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1157-L1165) · [Before (L809-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L809-L822)

```diff
-     class Fz extends Error {}
-     Fz._setPrototypeOf = Object.setPrototypeOf || ((zz, tz) => (zz.__proto__ = tz, zz));
-     const Wz = {
-       MeshInvalidPositionsError: 0,
-       UnsupportedTextureError: 1e3,
-       GLTFLoaderUnexpectedMagicError: 2e3,
-       SceneLoaderError: 3e3,
-       LoadFileError: 4e3,
-       RequestFileError: 4001,
-       ReadFileError: 4002
-     };
-     class Xz extends Fz {
-       constructor(zz, tz, sz) {
-         super(zz), this.errorCode = tz, this.innerError = sz, this.name = "RuntimeError", Fz._setPrototypeOf(this, Xz.prototype)
+     class hv {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersRepository : hv.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersStore : hv.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.IncludesShadersStore : hv.IncludesShadersStoreWGSL
```

#### 51. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L826` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1170) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L826)

```diff
-   39205: (zz, tz, sz) => {
+   39175: (vv, zv, Pv) => {
```

#### 52. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L828-L830` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1172) · [Before (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L828-L830)

```diff
-       b: () => Tz,
-       c: () => Pz,
-       g: () => Cz,
+       e: () => Wv,
```

#### 53. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L833` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1176) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L833)

```diff
-       p: () => xz,
+       o: () => sv,
```

#### 54. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L836-L837` → after: `L1179-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1179-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1179-L1494) · [Before (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L836-L837)

```diff
-       u: () => Iz,
-       y: () => rz
+       w: () => Nv,
+       A: () => lv,
+       E: () => dv,
+       G: () => pv
+     });
+     class hv {
+       constructor() {
+         this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
+       }
+       get isAsync() {
+         return this.isParallelCompiled
+       }
+       get isReady() {
+         return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
+       }
+       _handlesSpectorRebuildCallback(vv) {
+ ... (300 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L839-L841` → after: `L1496-L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1496-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1496-L1549) · [Before (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L839-L841)

```diff
-     var Fz = sz(39213),
-       Wz = sz(39051),
-       Xz = sz(36505);
+     var hv = Pv(39157),
+       Sv = Pv(39175),
+       ev = Pv(39212),
+       gv = Pv(39230),
+       pv = Pv(38209),
+       dv = Pv(39167);
+     class Nv {
+       constructor() {
+         this.shaderLanguage = 0
+       }
+       postProcessor(vv, zv, Pv, hv, Sv) {
+         if (Sv.drawBuffersExtensionDisabled) {
+           const zv = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
+           vv = vv.replace(zv, "")
+         }
+         return vv
+ ... (38 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L843-L855` → after: `L1551-L9023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1551-L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L1551-L9023) · [Before (L843-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L843-L855)

```diff
-     Oz.FilesToLoad = {};
-     var oz = sz(39215),
-       vz = sz(39222),
-       Uz = sz(36502),
-       Kz = sz(39063),
-       uz = sz(39071),
-       Nz = sz(38097),
-       bz = sz(39074),
-       wz = sz(39231);
-     const Dz = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
-     class gz extends oz.i {
-       constructor(zz, tz) {
-         super(zz, oz.g.LoadFileError), this.name = "LoadFileError", oz.e._setPrototypeOf(this, gz.prototype), tz instanceof Fz.d ? this.request = tz : this.file = tz
+     class jv extends ev.b {
+       get name() {
+         return this._name
+       }
+       set name(vv) {
+         this._name = vv
+       }
+       get version() {
+         return this._webGLVersion
+       }
+       static get ShadersRepository() {
+         return hv.b.ShadersRepository
+       }
+       static set ShadersRepository(vv) {
+         hv.b.ShadersRepository = vv
+       }
+ ... (7457 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L857-L860` → after: `L9025-L9033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9025-L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9025-L9033) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L857-L860)

```diff
-     }
-     class Hz extends oz.i {
-       constructor(zz, tz) {
-         super(zz, oz.g.RequestFileError), this.request = tz, this.name = "RequestFileError", oz.e._setPrototypeOf(this, Hz.prototype)
+       _processSubCameras(vv) {
+         let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (0 === vv.cameraRigMode || vv._renderingMultiview) return vv._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(vv, void 0, zv), void this.onAfterRenderCameraObservable.notifyObservers(vv);
+         if (vv._useMultiviewToSingleView) this._renderMultiviewToSingleView(vv);
+         else {
+           this.onBeforeCameraRenderObservable.notifyObservers(vv);
+           for (let zv = 0; zv < vv._rigCameras.length; zv++) this._renderForCamera(vv._rigCameras[zv], vv)
+         }
+         this._activeCamera = vv, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(vv)
```

#### 58. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L862-L906` → after: `L9035-L9078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9035-L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9035-L9078) · [Before (L862-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L862-L906)

```diff
-     }
-     class Bz extends oz.i {
-       constructor(zz, tz) {
-         super(zz, oz.g.ReadFileError), this.file = tz, this.name = "ReadFileError", oz.e._setPrototypeOf(this, Bz.prototype)
-       }
-     }
-     const Pz = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (sz, Fz, Wz) => 0 !== Fz.status || Wz >= zz || -1 !== sz.indexOf("file:") ? -1 : Math.pow(2, Wz) * tz
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
- ... (29 more removed lines; see GitHub link above)
+       _checkIntersections() {
+         for (let vv = 0; vv < this._meshesForIntersections.length; vv++) {
+           const zv = this._meshesForIntersections.data[vv];
+           if (zv.actionManager)
+             for (let vv = 0; zv.actionManager && vv < zv.actionManager.actions.length; vv++) {
+               const Pv = zv.actionManager.actions[vv];
+               if (12 === Pv.trigger || 13 === Pv.trigger) {
+                 const vv = Pv.getTriggerParameter(),
+                   hv = vv.mesh ? vv.mesh : vv,
+                   Sv = hv.bPv(zv, vv.usePreciseIntersection),
+                   ev = zv._intersectionsInProgress.indexOf(hv);
+                 Sv && -1 === ev ? 12 === Pv.trigger ? (Pv._executeCurrent(av.CreateNew(zv, void 0, hv)), zv._intersectionsInProgress.push(hv)) : 13 === Pv.trigger && zv._intersectionsInProgress.push(hv) : !Sv && ev > -1 && (13 === Pv.trigger && Pv._executeCurrent(av.CreateNew(zv, … [truncated]
+                   const zv = vv.mesh ? vv.mesh : vv;
+                   return hv === zv
+                 })) && 13 !== Pv.trigger || zv._intersectionsInProgress.splice(ev, 1))
+               }
+ ... (28 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L908-L914` → after: `L9080-L9096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9080-L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9080-L9096) · [Before (L908-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L908-L914)

```diff
-           return uz.createImageBitmap(Fz, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none",
-             ...Kz
-           }).then(tz).catch((tz => {
-             sz && sz("Error while trying to load image: " + zz, tz)
-           })), null
+       }
+       resetDrawCache(vv) {
+         if (this.meshes)
+           for (const zv of this.meshes) zv.resetDrawCache(vv)
+       }
+       _renderWithFrameGraph() {
+         let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           zv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, vv)
+           for (const Pv of this.cameras)
+             if (Pv.update(), 0 !== Pv.cameraRigMode)
+               for (let vv = 0; vv < Pv._rigCameras.length; vv++) Pv._rigCameras[vv].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(zv)
+         } finally {
+ ... (1 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L916-L928` → after: `L9098-L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9098-L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9098-L9107) · [Before (L916-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L916-L928)

```diff
-         let Nz = !1;
-         if (zz instanceof ArrayBuffer || ArrayBuffer.isView(zz))
-           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
-             let tz;
-             tz = zz instanceof ArrayBuffer ? zz : (0, wz.n)(zz), Xz = URL.createObjectURL(new Blob([tz], {
-               type: oz
-             })), Nz = !0
-           } else Xz = `data:${oz};base64,` + (0, vz.g)(zz);
-         else zz instanceof Blob ? (Xz = URL.createObjectURL(zz), Nz = !0) : (Xz = Pz.CleanUrl(zz), Xz = Pz.PreprocessUrl(Xz));
-         const bz = tz => {
-           if (sz) {
-             const Fz = Xz || zz.toString();
-             sz(`Error while trying to load image: ${0===Fz.indexOf("http")||Fz.length<=128?Fz:Fz.slice(0,128)+"..."}`, tz)
+       }
+       _renderWithFrameGraphAfterBeforeRender(vv) {
+         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
+         const zv = this._frameGraph?.findMainCamera() ?? null;
+         if (this.renderTargetsEnabled) {
+           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), hv.h.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
+           for (let vv = 0; vv < this._renderTargets.length; vv++) {
+             const Pv = this._renderTargets.data[vv],
+               hv = Pv.activeCamera || zv;
+             this._renderRenderTarget(Pv, hv, !0, this.dumpNextRenderTargets)
```

#### 61. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L930-L949` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9109) · [Before (L930-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L930-L949)

```diff
-         };
-         if (uz?._features.forceBitmapOverHTMLImageElement) return Jz(Xz, (Fz => {
-           uz.createImageBitmap(new Blob([Fz], {
-             type: oz
-           }), {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none",
-             ...Kz
-           }).then((zz => {
-             tz(zz), Nz && URL.revokeObjectURL(Xz)
-           })).catch((tz => {
-             sz && sz("Error while trying to load image: " + zz, tz)
-           }))
-         }), void 0, Wz || void 0, !0, ((zz, tz) => {
-           bz(tz)
-         })), null;
- ... (4 more removed lines; see GitHub link above)
+           hv.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
```

#### 62. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L951-L997` → after: `L9111-L9115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9111-L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9111-L9115) · [Before (L951-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L951-L997)

```diff
-         rz(Xz, Dz);
-         const gz = [],
-           Hz = () => {
-             for (const zz of gz) zz.target.removeEventListener(zz.name, zz.handler);
-             gz.length = 0
-           };
-         gz.push({
-           target: Dz,
-           name: "load",
-           handler: () => {
-             Hz(), tz(Dz), Nz && Dz.src && URL.revokeObjectURL(Dz.src)
-           }
-         }), gz.push({
-           target: Dz,
-           name: "error",
-           handler: zz => {
- ... (31 more removed lines; see GitHub link above)
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let Pv = 0, hv = this._beforeClearStage; Pv < hv.length; Pv++) {
+           hv[Pv].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
```

#### 63. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L999-L1011` → after: `L9117-L9123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9117-L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9117-L9123) · [Before (L999-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L999-L1011)

```diff
-           if (-1 !== Xz.indexOf("file:")) {
-             const zz = decodeURIComponent(Xz.substring(5).toLowerCase());
-             if (Oz.FilesToLoad[zz] && "undefined" !== typeof URL) {
-               try {
-                 let tz;
-                 try {
-                   tz = URL.createObjectURL(Oz.FilesToLoad[zz])
-                 } catch (Cz) {
-                   tz = URL.createObjectURL(Oz.FilesToLoad[zz])
-                 }
-                 Dz.src = tz, Nz = !0
-               } catch (ez) {
-                 Dz.src = ""
+           const zv = this.getActiveMeshCandidates(),
+             Pv = zv.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let vv = 0; vv < Pv; vv++) {
+                 const Pv = zv.data[vv];
+                 Pv._internalAbstractMeshDataInfo._wasActiveLastFrame && Pv.computeWorldMatrix()
```

#### 64. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1013` → after: `L9125-L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9125-L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9125-L9133) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1013)

```diff
-               return Dz
+             if (this.particlesEnabled) {
+               const vv = this._activeParticleSystems.length;
+               for (let zv = 0; zv < vv; zv++) this._activeParticleSystems.data[zv].animate()
+             }
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let hv = 0; hv < Pv; hv++) {
+               const Pv = zv.data[hv];
+               Pv._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Pv.isBlocked || (this._totalVertices.addCount(Pv.getTotalVertices(), !1), Pv.isReady() && Pv.isEnabled() && !Pv.pp.hasAZeroComponent && (Pv.computeWorldMatrix(vv), Pv.actionManager && Pv.actionManager.hasSpe … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1018-L1041` → after: `L9144-L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9144-L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9144-L9151) · [Before (L1018-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1018-L1041)

```diff
-         return Dz
-       },
-       mz = (zz, tz, sz, Fz, Wz) => {
-         const Oz = new FileReader,
-           oz = {
-             onCompleteObservable: new Xz.c,
-             abort: () => Oz.abort()
-           };
-         return Oz.onloadend = () => oz.onCompleteObservable.notifyObservers(oz), Wz && (Oz.onerror = () => {
-           Wz(new Bz(`Unable to read ${zz.name}`, zz))
-         }), Oz.onload = zz => {
-           tz(zz.target.result)
-         }, sz && (Oz.onprogress = sz), Fz ? Oz.readAsArrayBuffer(zz) : Oz.readAsText(zz), oz
-       },
-       Jz = (zz, tz, sz, Fz, Wz, vz, Uz) => {
-         if (zz.name) return mz(zz, tz, sz, Wz, vz ? zz => {
- ... (8 more removed lines; see GitHub link above)
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, vv._shouldRender()) {
+           if (this._renderId++, this.activeCamera = zv, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), vv.render(Pv, hv)
```

#### 66. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1043-L1181` → after: `L9153-L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9153-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9153-L9163) · [Before (L1043-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1043-L1181)

```diff
-         const {
-           match: uz,
-           type: wz
-         } = Gz(Kz);
-         if (uz) {
-           const zz = {
-             onCompleteObservable: new Xz.c,
-             abort: () => () => {}
-           };
-           try {
-             const zz = Wz ? Tz(Kz) : cz(Kz);
-             tz(zz, void 0, wz)
-           } catch (oz) {
-             vz ? vz(void 0, oz) : Nz.e.Error(oz.message || "Failed to parse the Data URL")
-           }
-           return bz.b.SetImmediate((() => {
- ... (123 more removed lines; see GitHub link above)
+         this._intermediateRendering = !1
+       }
+       render() {
+         let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.mzv) return;
+         const Pv = this._renderingMeshEvaluationDepth;
+         try {
+           this._renderFrame(vv, zv)
+         } finally {
+           this._renderingMeshEvaluationDepth = Pv
```

#### 67. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1183-L1231` → after: `L9165-L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9165-L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9165-L9171) · [Before (L1183-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1183-L1231)

```diff
-       };
- 
-     function Tz(zz) {
-       return (0, vz.c)(zz.split(",")[1])
-     }
-     const cz = zz => (0, vz.e)(zz.split(",")[1]);
-     let jz;
-     const Az = (zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) => {
-       jz = {
-         DecodeBase64UrlToBinary: zz,
-         DecodeBase64UrlToString: tz,
-         DefaultRetryStrategy: sz.DefaultRetryStrategy,
-         BaseUrl: sz.BaseUrl,
-         CorsBehavior: sz.CorsBehavior,
-         PreprocessUrl: sz.PreprocessUrl,
-         IsBase64DataUrl: Fz,
- ... (33 more removed lines; see GitHub link above)
+       }
+       _renderFrame(vv, zv) {
+         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Cv.d.rD = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
+           for (const Pv of this.activeCameras) this._checkCameraRenderTarget(Pv);
+         this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimatio … [truncated]
+         for (let Pv = 0, hv = this._beforeCameraUpdateStage; Pv < hv.length; Pv++) {
+           hv[Pv].action()
```

#### 68. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1233-L1337` → after: `L9173-L9220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9173-L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9173-L9220) · [Before (L1233-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1233-L1337)

```diff
-       })
-     };
-     let yz = !1;
- 
-     function Mz() {
-       yz || (yz = !0, Az(Tz, cz, Pz, Zz, ez, Jz, xz, mz, Iz, rz), Kz.b.loadFile = Jz, Kz.b.loadImage = xz, uz.o.loadFile = Jz)
-     }
-   },
-   39234: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => oz,
-       f: () => Xz,
-       g: () => Oz
-     });
-     let Fz = null;
- 
- ... (89 more removed lines; see GitHub link above)
+         if (vv)
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let Pv = 0; Pv < this.activeCameras.length; Pv++) {
+               const vv = this.activeCameras[Pv];
+               if (vv.update(), 0 !== vv.cameraRigMode)
+                 for (let zv = 0; zv < vv._rigCameras.length; zv++) vv._rigCameras[zv].update()
+             } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
+               for (let Pv = 0; Pv < this.activeCamera._rigCameras.length; Pv++) this.activeCamera._rigCameras[Pv].update();
+         if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(vv, zv);
+         else {
+           this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
+           const vv = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
+           if (this.renderTargetsEnabled) {
+             hv.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
+             for (let zv = 0; zv < this.customRenderTargets.length; zv++) {
+               const Pv = this.customRenderTargets[zv],
+ ... (32 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1339-L1345` → after: `L9222-L9223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9222-L9223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9222-L9223) · [Before (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1339-L1345)

```diff
-     }
- 
-     function Xz(zz, tz, sz) {
-       try {
-         if (zz()) return tz(), !0
-       } catch (Fz) {
-         return sz?.(Fz), !0
+       freezeMaterials() {
+         for (let vv = 0; vv < this.materials.length; vv++) this.materials[vv].freeze()
```

#### 70. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1347-L1366` → after: `L9225-L9226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9225-L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9225-L9226) · [Before (L1347-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1347-L1366)

```diff
-       return !1
-     }
-     const Oz = function(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         Oz = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Xz(zz, tz, sz)) return null;
-       const oz = setInterval((() => {
-         Xz(zz, tz, sz) ? clearInterval(oz) : (Wz -= Fz, Wz < 0 && (clearInterval(oz), sz?.(new Error("Operation timed out after maximum retries. " + (Oz || "")), !0)))
-       }), Fz);
-       return () => clearInterval(oz)
-     }
-   },
-   39213: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Fz
- ... (4 more removed lines; see GitHub link above)
+       unfreezeMaterials() {
+         for (let vv = 0; vv < this.materials.length; vv++) this.materials[vv].unfreeze()
```

#### 71. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1368-L1369` → after: `L9228-L9263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9228-L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9228-L9263) · [Before (L1368-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1368-L1369)

```diff
-       static get IsCustomRequestAvailable() {
-         return Object.keys(Fz.CustomRequestHeaders).length > 0 || Fz.CustomRequestModifiers.length > 0
+       dispose() {
+         if (this.mzv) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const vv of this._activeAnimatables) vv.onAnimationEndObservable.clear(), vv.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+         this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSyste … [truncated]
+         const vv = this._activeRequests.slice();
+         for (const ev of vv) ev.abort();
+         this._activeRequests.length = 0;
+         try {
+           this.uD.notifyObservers(this)
+         } catch (Sv) {
+           vP.d.Error("An error occurred while calling onDisposeObservable!", Sv)
+         }
+         this.detachControl();
+ ... (20 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1371-L1372` → after: `L9265-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9265-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9265-L9269) · [Before (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1371-L1372)

```diff
-       static _CleanUrl(zz) {
-         return zz = (zz = zz.replace("file:http:", "http:")).replace("file:https:", "https:")
+       _disposeList(vv, zv) {
+         const Pv = vv.slice(0);
+         zv = zv ?? (vv => vv.dispose());
+         for (const hv of Pv) zv(hv);
+         vv.length = 0
```

#### 73. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1374-L1375` → after: `L9271-L9272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9271-L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9271-L9272) · [Before (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1374-L1375)

```diff
-       static _ShouldSkipRequestModifications(zz) {
-         return Fz.SkipRequestModificationForBabylonCDN && (zz.includes("preview.babylonjs.com") || zz.includes("cdn.babylonjs.com"))
+       get mzv() {
+         return this._isDisposed
```

#### 74. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1377-L1387` → after: `L9274-L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9274-L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9274-L9277) · [Before (L1377-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1377-L1387)

```diff
-       static _CollectCustomizations(zz) {
-         const tz = {
-           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
-         };
-         if (Fz._ShouldSkipRequestModifications(zz)) return {
-           url: zz,
-           headers: tz
-         };
-         for (const Wz in Fz.CustomRequestHeaders) {
-           const zz = Fz.CustomRequestHeaders[Wz];
-           zz && (tz[Wz] = zz)
+       clearCachedVertexData() {
+         for (let vv = 0; vv < this.meshes.length; vv++) {
+           const zv = this.meshes[vv].geometry;
+           zv && zv.clearCachedData()
```

#### 75. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1389-L1397` → after: `L9279-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9279-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9279-L9282) · [Before (L1389-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1389-L1397)

```diff
-         const sz = {
-           setRequestHeader: (zz, sz) => {
-             tz[zz] = sz
-           }
-         };
-         for (const Wz of Fz.CustomRequestModifiers) {
-           if (Fz._ShouldSkipRequestModifications(zz)) break;
-           const tz = Wz(sz, zz);
-           "string" === typeof tz && (zz = tz)
+       }
+       cleanCachedTextureBuffer() {
+         for (const vv of this.textures) {
+           vv._buffer && (vv._buffer = null)
```

#### 76. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1399-L1416` → after: `L9284-L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9284-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9284-L9431) · [Before (L1399-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1399-L1416)

```diff
-         return {
-           url: zz,
-           headers: tz
-         }
-       }
-       static async FetchAsync(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const sz = tz.method ?? "GET";
-         if ("undefined" !== typeof fetch) {
-           const {
-             url: Wz,
-             headers: Xz
-           } = Fz._CollectCustomizations(Fz._CleanUrl(zz), tz.headers ?? {});
-           return await fetch(Wz, {
-             method: sz,
-             headers: Xz,
- ... (2 more removed lines; see GitHub link above)
+       }
+       getWorldExtends(vv) {
+         const zv = new lv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           Pv = new lv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         vv = vv || (() => !0);
+         const hv = this.meshes.filter(vv);
+         for (const Sv of hv) {
+           if (Sv.computeWorldMatrix(!0), !Sv.sF || 0 === Sv.sF.length || Sv.infiniteDistance) continue;
+           const vv = Sv.cV(),
+             hv = vv.boundingBox.minimumWorld,
+             ev = vv.boundingBox.maximumWorld;
+           lv.l.CheckExtends(hv, zv, Pv), lv.l.CheckExtends(ev, zv, Pv)
+         }
+         return zv.x === Number.MAX_VALUE ? {
+           min: lv.l.Zero(),
+           max: lv.l.Zero()
+ ... (132 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1419-L1439` → after: `L9443-L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9443-L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9443-L9447) · [Before (L1419-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1419-L1439)

```diff
-           const Oz = new Fz;
-           Oz.responseType = "arraybuffer", Oz.addEventListener("readystatechange", (() => {
-             if (4 === Oz.readyState)
-               if (Oz.status >= 200 && Oz.status < 300) {
-                 const zz = "undefined" !== typeof Headers ? new Headers : void 0,
-                   tz = Oz.getResponseHeader("Content-Type");
-                 tz && zz && zz.set("Content-Type", tz), "undefined" !== typeof Response ? Wz(new Response(Oz.response, {
-                   status: Oz.status,
-                   statusText: Oz.statusText,
-                   headers: zz
-                 })) : Wz({
-                   ok: !0,
-                   status: Oz.status,
-                   statusText: Oz.statusText,
-                   headers: {
-                     get: zz => Oz.getResponseHeader(zz)
- ... (5 more removed lines; see GitHub link above)
+           this._requestFile(vv, (vv => {
+             ev(vv)
+           }), zv, Pv, hv, (vv => {
+             gv(vv)
+           }), Sv)
```

#### 78. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1442-L1443` → after: `L9450-L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9450-L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9450-L9454) · [Before (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1442-L1443)

```diff
-       get requestURL() {
-         return this._requestURL
+       _readFile(vv, zv, Pv, hv, Sv) {
+         const ev = (0, bv.r)(vv, zv, Pv, hv, Sv);
+         return this._activeRequests.push(ev), ev.onCompleteObservable.add((vv => {
+           this._activeRequests.splice(this._activeRequests.indexOf(vv), 1)
+         })), ev
```

#### 79. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1445-L1446` → after: `L9456-L9463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9456-L9463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9456-L9463) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1445-L1446)

```diff
-       get onprogress() {
-         return this._xhr.onprogress
+       async _readFileAsync(vv, zv, Pv) {
+         return await new Promise(((hv, Sv) => {
+           this._readFile(vv, (vv => {
+             hv(vv)
+           }), zv, Pv, (vv => {
+             Sv(vv)
+           }))
+         }))
```

#### 80. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1448-L1449` → after: `L9465-L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9465-L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9465-L9466) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1448-L1449)

```diff
-       set onprogress(zz) {
-         this._xhr.onprogress = zz
+       getPerfCollector() {
+         throw (0, jv.m)("performanceViewerSceneExtension")
```

#### 81. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1451-L1452` → after: `L9468-L9469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9468-L9469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9468-L9469) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1451-L1452)

```diff
-       get readyState() {
-         return this._xhr.readyState
+       setActiveCameraByID(vv) {
+         return this.setActiveCameraById(vv)
```

#### 82. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1454-L1455` → after: `L9471-L9472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9471-L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9471-L9472) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1454-L1455)

```diff
-       get status() {
-         return this._xhr.status
+       getMaterialByID(vv) {
+         return this.getMaterialById(vv)
```

#### 83. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1457-L1458` → after: `L9474-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9474-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9474-L9475) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1457-L1458)

```diff
-       get statusText() {
-         return this._xhr.statusText
+       getLastMaterialByID(vv) {
+         return this.getLastMaterialById(vv)
```

#### 84. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1460-L1461` → after: `L9477-L9478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9477-L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9477-L9478) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1460-L1461)

```diff
-       get response() {
-         return this._xhr.response
+       getTextureByUniqueID(vv) {
+         return this.getTextureByUniqueId(vv)
```

#### 85. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1463-L1464` → after: `L9480-L9481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9480-L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9480-L9481) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1463-L1464)

```diff
-       get responseURL() {
-         return this._xhr.responseURL
+       getCameraByID(vv) {
+         return this.getCameraById(vv)
```

#### 86. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1466-L1467` → after: `L9483-L9484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9483-L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9483-L9484) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1466-L1467)

```diff
-       get responseText() {
-         return this._xhr.responseText
+       getCameraByUniqueID(vv) {
+         return this.getCameraByUniqueId(vv)
```

#### 87. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1469-L1470` → after: `L9486-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9486-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9486-L9487) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1469-L1470)

```diff
-       get responseType() {
-         return this._xhr.responseType
+       getBoneByID(vv) {
+         return this.getBoneById(vv)
```

#### 88. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1472-L1473` → after: `L9489-L9490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9489-L9490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9489-L9490) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1472-L1473)

```diff
-       set responseType(zz) {
-         this._xhr.responseType = zz
+       getLightByID(vv) {
+         return this.getLightById(vv)
```

#### 89. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1475-L1476` → after: `L9492-L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9492-L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9492-L9493) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1475-L1476)

```diff
-       get timeout() {
-         return this._xhr.timeout
+       getLightByUniqueID(vv) {
+         return this.getLightByUniqueId(vv)
```

#### 90. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1478-L1479` → after: `L9495-L9496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9495-L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9495-L9496) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1478-L1479)

```diff
-       set timeout(zz) {
-         this._xhr.timeout = zz
+       getParticleSystemByID(vv) {
+         return this.getParticleSystemById(vv)
```

#### 91. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1481-L1482` → after: `L9498-L9499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9498-L9499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9498-L9499) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1481-L1482)

```diff
-       addEventListener(zz, tz, sz) {
-         this._xhr.addEventListener(zz, tz, sz)
+       getGeometryByID(vv) {
+         return this.getGeometryById(vv)
```

#### 92. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1484-L1485` → after: `L9501-L9502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9501-L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9501-L9502) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1484-L1485)

```diff
-       removeEventListener(zz, tz, sz) {
-         this._xhr.removeEventListener(zz, tz, sz)
+       getMeshByID(vv) {
+         return this.getMeshById(vv)
```

#### 93. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1487-L1488` → after: `L9504-L9505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9504-L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9504-L9505) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1487-L1488)

```diff
-       abort() {
-         this._xhr.abort()
+       getMeshByUniqueID(vv) {
+         return this.getMeshByUniqueId(vv)
```

#### 94. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1490-L1491` → after: `L9507-L9508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9507-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9507-L9508) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1490-L1491)

```diff
-       send(zz) {
-         this._xhr.send(zz)
+       getLastMeshByID(vv) {
+         return this.getLastMeshById(vv)
```

#### 95. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1493-L1499` → after: `L9510-L9565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9510-L9565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9510-L9565) · [Before (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1493-L1499)

```diff
-       open(zz, tz, sz) {
-         const {
-           url: Wz,
-           headers: Xz
-         } = Fz._CollectCustomizations(tz, sz);
-         this._requestURL = Fz._CleanUrl(Wz), this._xhr.open(zz, this._requestURL, !0);
-         for (const Fz in Xz) this._xhr.setRequestHeader(Fz, Xz[Fz])
+       getMeshesByID(vv) {
+         return this.getMeshesById(vv)
+       }
+       getTransformNodeByID(vv) {
+         return this.getTransformNodeById(vv)
+       }
+       getTransformNodeByUniqueID(vv) {
+         return this.getTransformNodeByUniqueId(vv)
+       }
+       getTransformNodesByID(vv) {
+         return this.getTransformNodesById(vv)
+       }
+       getNodeByID(vv) {
+         return this.getNodeById(vv)
+       }
+       getLastEntryByID(vv) {
+ ... (40 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1501-L1502` → after: `L9567-L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9567-L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9567-L9581) · [Before (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1501-L1502)

```diff
-       setRequestHeader(zz, tz) {
-         this._xhr.setRequestHeader(zz, tz)
+     }
+   },
+   39295: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv,
+       d: () => pv,
+       e: () => hv,
+       f: () => Sv,
+       i: () => ev
+     });
+ 
+     function hv(vv, zv, Pv, hv, Sv, ev) {
+       function gv(vv) {
+         if (void 0 !== vv && "function" !== typeof vv) throw new TypeError("Function expected");
+         return vv
```

#### 97. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1504-L1505` → after: `L9583-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9583-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9583-L9599) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1504-L1505)

```diff
-       getResponseHeader(zz) {
-         return this._xhr.getResponseHeader(zz)
+       for (var pv, dv = hv.kind, Nv = "getter" === dv ? "get" : "setter" === dv ? "set" : "value", lv = !zv && vv ? hv.static ? vv : vv.prototype : null, Tv = zv || (lv ? Object.getOwnPropertyDescriptor(lv, hv.name) : {}), Wv = !1, wv = Pv.length - 1; wv >= 0; wv--) {
+         var av = {};
+         for (var sv in hv) av[sv] = "access" === sv ? {} : hv[sv];
+         for (var sv in hv.access) av.access[sv] = hv.access[sv];
+         av.addInitializer = function(vv) {
+           if (Wv) throw new TypeError("Cannot add initializers after decoration has completed");
+           ev.push(gv(vv || null))
+         };
+         var Cv = (0, Pv[wv])("accessor" === dv ? {
+           get: Tv.get,
+           set: Tv.set
+         } : Tv[Nv], av);
+         if ("accessor" === dv) {
+           if (void 0 === Cv) continue;
+           if (null === Cv || "object" !== typeof Cv) throw new TypeError("Object expected");
+           (pv = gv(Cv.get)) && (Tv.get = pv), (pv = gv(Cv.set)) && (Tv.set = pv), (pv = gv(Cv.init)) && Sv.unshift(pv)
+ ... (1 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1508` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/244.js#L9630) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/244.js#L1508)

```diff
-     Fz.CustomRequestHeaders = {}, Fz.CustomRequestModifiers = new Array, Fz.SkipRequestModificationForBabylonCDN = !0
+     "function" === typeof SuppressedError && SuppressedError
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [245];
+ export const ids = [245, 346];
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/245.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/245.js#L4)

```diff
-   39266: (zz, tz, sz) => {
+   39162: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L11-L19` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/245.js#L9-L16) · [Before (L11-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/245.js#L11-L19)

```diff
-       static Instantiate(zz) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[zz]) return this.RegisteredExternalClasses[zz];
-         const tz = (0, Wz.e)(zz);
-         if (tz) return tz;
-         Fz.e.Warn(zz + " not found, you may have missed an import.");
-         const sz = zz.split(".");
-         let Xz = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let Fz = 0, Wz = sz.length; Fz < Wz; Fz++) Xz = Xz[sz[Fz]];
-         return "function" !== typeof Xz ? null : Xz
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersRepository : hv.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersStore : hv.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.IncludesShadersStore : hv.IncludesShadersStoreWGSL
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L22` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/245.js#L19) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/245.js#L22)

```diff
-     Xz.RegisteredExternalClasses = {}
+     hv.ShadersRepository = "src/Shaders/", hv.ShadersStore = {}, hv.IncludesShadersStore = {}, hv.ShadersRepositoryWGSL = "src/ShadersWGSL/", hv.ShadersStoreWGSL = {}, hv.IncludesShadersStoreWGSL = {}
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L24-L26` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/245.js#L21-L23) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/245.js#L24-L26)

```diff
-   39079: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Wz
+   60587: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       postprocessVertexShader: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L28-L612` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/245.js#L25-L31) · [Before (L28-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/245.js#L28-L612)

```diff
-     var Fz = sz(39051);
-     class Wz {
-       static get Now() {
-         return (0, Fz.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
-   },
-   39111: (zz, tz, sz) => {
-     function Fz(zz) {
-       let tz = 1;
-       do {
-         tz *= 2
-       } while (tz < zz);
-       return tz === zz
-     }
- 
- ... (569 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "postprocessVertexShader",
+       ev = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (85 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L4)

```diff
-   39576: (zz, tz, sz) => {
+   39361: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L6)

```diff
-       d: () => Fz
+       c: () => Wv,
+       g: () => Tv,
+       j: () => dv,
+       n: () => wv,
+       p: () => Nv,
+       q: () => pv,
+       t: () => lv
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L8` → after: `L14-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L14-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L14-L235) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L8)

```diff
-     let Fz = !1
+     var hv = Pv(38209),
+       Sv = Pv(39368);
+ 
+     function ev(vv, zv, Pv, hv) {
+       switch (zv) {
+         case 5120: {
+           let zv = vv.getInt8(Pv);
+           return hv && (zv = Math.max(zv / 127, -1)), zv
+         }
+         case 5121: {
+           let zv = vv.getUint8(Pv);
+           return hv && (zv /= 255), zv
+         }
+         case 5122: {
+           let zv = vv.getInt16(Pv, !0);
+           return hv && (zv = Math.max(zv / 32767, -1)), zv
+ ... (206 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L10` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L237) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L10)

```diff
-   39163: (zz, tz, sz) => {
+   39196: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L12` → after: `L239-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L239-L243) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L12)

```diff
-       b: () => wz
+       c: () => Yv,
+       d: () => fv,
+       i: () => Fv,
+       g: () => Rv,
+       l: () => xv
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L22-L23` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L246-L247) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       constructor() {
+         this.children = []
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L25-L26` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L249-L250) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L25-L26)

```diff
-       set wrapU(zz) {
-         this._wrapU = zz
+       isValid(vv) {
+         return !0
```

#### 8. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L28-L29` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L252-L274) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       process(vv, zv, Pv) {
+         let hv = "";
+         if (this.line) {
+           let Pv = this.line;
+           const Sv = zv.processor;
+           if (Sv) {
+             Sv.lineProcessor && (Pv = Sv.lineProcessor(Pv, zv.isFragment, zv.processingContext));
+             const hv = zv.processor?.attributeKeywordName ?? "attribute",
+               ev = zv.isFragment && zv.processor?.varyingFragmentKeywordName ? zv.processor?.varyingFragmentKeywordName : !zv.isFragment && zv.processor?.varyingVertexKeywordName ? zv.processor?.varyingVertexKeywordName : "varying";
+             if (!zv.isFragment && Sv.attributeProcessor && this.line.startsWith(hv)) Pv = Sv.attributeProcessor(this.line, vv, zv.processingContext);
+             else if (Sv.varyingProcessor && (Sv.varyingCheck?.(this.line, zv.isFragment) || !Sv.varyingCheck && this.line.startsWith(ev))) Pv = Sv.varyingProcessor(this.line, zv.isFragment, vv, zv.processingContext);
+             else if (Sv.uniformProcessor && Sv.uniformRegexp && Sv.uniformRegexp.test(this.line)) zv.lookForClosingBracketForUniformBuffer || (Pv = Sv.uniformProcessor(this.line, zv.isFragment, vv, zv.processingContext));
+             else if (Sv.uniformBufferProcessor && Sv.uniformBufferRegexp && Sv.uniformBufferRegexp.test(this.line)) zv.lookForClosingBracketForUniformBuffer || (Pv = Sv.uniformBufferProcessor(this.line, zv.isFragment, zv.processingContext), zv.lookForClosingBracketForUniformBuffe … [truncated]
+             else if (Sv.textureProcessor && Sv.textureRegexp && Sv.textureRegexp.test(this.line)) Pv = Sv.textureProcessor(this.line, zv.isFragment, vv, zv.processingContext);
+             else if ((Sv.uniformProcessor || Sv.uniformBufferProcessor) && this.line.startsWith("uniform") && !zv.lookForClosingBracketForUniformBuffer) {
+               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Sv.uniformProcessor && (Pv = Sv.uniformProcessor(this.line, zv.isFragment, vv, zv.processingContext)) : Sv.uniformBufferProcessor && (Pv = Sv.uniformBufferProcessor(this.line, zv.isFragment,  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L31-L32` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L276-L279) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L31-L32)

```diff
-       set wrapV(zz) {
-         this._wrapV = zz
+     }
+     class Sv {
+       constructor() {
+         this._lines = []
```

#### 10. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L34-L35` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L281-L282) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       get currentLine() {
+         return this._lines[this.lineIndex]
```

#### 11. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L37-L38` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L284-L285) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
```

#### 12. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L40-L41` → after: `L287-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L287-L311) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L40-L41)

```diff
-       set isCube(zz) {
-         this._texture && (this._texture.isCube = zz)
+       set lines(vv) {
+         this._lines.length = 0;
+         for (const zv of vv) {
+           if (!zv || "\r" === zv) continue;
+           if ("#" === zv[0]) {
+             this._lines.push(zv);
+             continue
+           }
+           const vv = zv.trim();
+           if (!vv) continue;
+           if (vv.startsWith("//")) {
+             this._lines.push(zv);
+             continue
+           }
+           const Pv = vv.indexOf(";");
+           if (-1 === Pv) this._lines.push(vv);
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L43-L44` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L313-L320) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+     }
+     class ev extends hv {
+       process(vv, zv, Pv) {
+         for (let hv = 0; hv < this.children.length; hv++) {
+           const Sv = this.children[hv];
+           if (Sv.isValid(vv)) return Sv.process(vv, zv, Pv)
+         }
+         return ""
```

#### 14. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L46-L47` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L322-L325) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L46-L47)

```diff
-       set is3D(zz) {
-         this._texture && (this._texture.is3D = zz)
+     }
+     class gv extends hv {
+       isValid(vv) {
+         return this.testExpression.isTrue(vv)
```

#### 15. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L49-L50` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L327-L330) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+     }
+     class pv {
+       isTrue(vv) {
+         return !0
```

#### 16. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L52-L53` → after: `L332-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L332-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L332-L340) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L52-L53)

```diff
-       set is2DArray(zz) {
-         this._texture && (this._texture.is2DArray = zz)
+       static postfixToInfix(vv) {
+         const zv = [];
+         for (const Pv of vv)
+           if (void 0 === pv._OperatorPriority[Pv]) zv.push(Pv);
+           else {
+             const vv = zv[zv.length - 1],
+               hv = zv[zv.length - 2];
+             zv.length -= 2, zv.push(`(${hv}${Pv}${vv})`)
+           } return zv[zv.length - 1]
```

#### 17. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L55-L56` → after: `L342-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L342-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L342-L375) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       static infixToPostfix(vv) {
+         const zv = pv._InfixToPostfixCache.get(vv);
+         if (zv) return zv.accessTime = Date.now(), zv.result;
+         if (!vv.includes("&&") && !vv.includes("||") && !vv.includes(")") && !vv.includes("(")) return [vv];
+         const Pv = [];
+         let hv = -1;
+         const Sv = () => {
+             lv = lv.trim(), "" !== lv && (Pv.push(lv), lv = "")
+           },
+           ev = vv => {
+             hv < pv._Stack.length - 1 && (pv._Stack[++hv] = vv)
+           },
+           gv = () => pv._Stack[hv],
+           dv = () => -1 === hv ? "!!INVALID EXPRESSION!!" : pv._Stack[hv--];
+         let Nv = 0,
+           lv = "";
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L58-L59` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L377-L379) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(zz) {
-         return void 0 !== zz?.shareDepth
+       static ClearCache() {
+         const vv = Array.from(pv._InfixToPostfixCache.entries()).sort(((vv, zv) => vv[1].accessTime - zv[1].accessTime));
+         for (let zv = 0; zv < pv.InfixToPostfixCacheCleanupSize; zv++) pv._InfixToPostfixCache.delete(vv[zv][0])
```

#### 19. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L62-L65` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L390-L391) · [Before (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L62-L65)

```diff
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Uz.e.Zero(), this._cachedBaseSize = Uz.e.Zero(), this._initialSamplingMode = 2, this._texture = Kz. … [truncated]
-       }
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = vv, this.not = zv
```

#### 20. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L67-L69` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L393-L395) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       isTrue(vv) {
+         let zv = void 0 !== vv[this.define];
+         return this.not && (zv = !zv), zv
```

#### 21. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L71-L76` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L397-L400) · [Before (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L71-L76)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
-         }
-         return this._cachedSize
+     }
+     class Nv extends pv {
+       isTrue(vv) {
+         return this.leftOperand.isTrue(vv) || this.rightOperand.isTrue(vv)
```

#### 22. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L78-L79` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L402-L405) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+     }
+     class lv extends pv {
+       isTrue(vv) {
+         return this.leftOperand.isTrue(vv) && this.rightOperand.isTrue(vv)
```

#### 23. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L81-L82` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L407-L410) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+     }
+     class Tv extends pv {
+       constructor(vv, zv, Pv) {
+         super(), this.define = vv, this.operand = zv, this.testValue = Pv
```

#### 24. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L84-L86` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L412-L413) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L84-L86)

```diff
-       updateSamplingMode(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(zz, this._texture, this._texture.generateMipMaps && tz)
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
```

#### 25. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L88-L89` → after: `L415-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L415-L439) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       isTrue(vv) {
+         let zv = !1;
+         const Pv = parseInt(void 0 != vv[this.define] ? vv[this.define] : this.define),
+           hv = parseInt(void 0 != vv[this.testValue] ? vv[this.testValue] : this.testValue);
+         if (isNaN(Pv) || isNaN(hv)) return !1;
+         switch (this.operand) {
+           case ">":
+             zv = Pv > hv;
+             break;
+           case "<":
+             zv = Pv < hv;
+             break;
+           case "<=":
+             zv = Pv <= hv;
+             break;
+           case ">=":
+ ... (9 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L91-L92` → after: `L441-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L441-L485) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+     }
+     var Wv = Pv(39190),
+       wv = Pv(39184);
+     const av = /defined\s*?\((.+?)\)/g,
+       sv = /defined\s*?\[(.+?)\]/g,
+       Cv = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       iv = /__decl__/,
+       cv = /light\{X\}.(\w*)/g,
+       Gv = /\{X\}/g,
+       mv = [],
+       jv = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function fv(vv) {
+       vv.processor && vv.processor.initializeShaders && vv.processor.initializeShaders(vv.processingContext)
+     }
+ 
+ ... (29 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L95-L181` → after: `L488-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L488-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L488-L518) · [Before (L95-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L95-L181)

```diff
-     var uz, Nz = sz(39181),
-       bz = sz(39065);
-     let wz = (() => {
-       var zz;
-       let tz, sz, Uz, uz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, Az, yz = Kz,
-         Mz = [],
-         dz = [],
-         hz = [],
-         Qz = [],
-         kz = [],
-         iz = [],
-         Lz = [],
-         lz = [],
-         nz = [],
-         az = [],
-         qz = [],
- ... (71 more removed lines; see GitHub link above)
+ 
+     function nv(vv) {
+       const zv = /defined\((.+)\)/.exec(vv);
+       if (zv && zv.length) return new dv(zv[1].trim(), "!" === vv[0]);
+       const Pv = ["==", "!=", ">=", "<=", "<", ">"];
+       let hv = "",
+         Sv = 0;
+       for (hv of Pv)
+         if (Sv = vv.indexOf(hv), Sv > -1) break;
+       if (-1 === Sv) return new dv(vv);
+       const ev = vv.substring(0, Sv).trim(),
+         gv = vv.substring(Sv + hv.length).trim();
+       return new Tv(ev, hv, gv)
+     }
+ 
+     function Ov(vv, zv) {
+ ... (15 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L183-L184` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L520-L532) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L183-L184)

```diff
-         set is2DArray(zz) {
-           this._texture && (this._texture.is2DArray = zz)
+         let hv = Pv[Pv.length - 1];
+         return "string" === typeof hv && (hv = hv.replace(sv, "defined($1)")), "string" === typeof hv ? nv(hv) : hv
+       }(Sv), Pv
+     }
+ 
+     function Dv(vv, zv, Pv, Sv) {
+       let ev;
+       for (; Kv(vv, Pv, Sv);) {
+         ev = vv.currentLine;
+         const gv = ev.substring(0, 5).toLowerCase();
+         if ("#else" === gv) {
+           const Pv = new hv;
+           return zv.children.push(Pv), void Kv(vv, Pv, Sv)
```

#### 29. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L186-L187` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L534-L536) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         if ("#elif" === gv) {
+           const vv = Ov(ev, 5);
+           zv.children.push(vv), Pv = vv
```

#### 30. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L189-L195` → after: `L538-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L538-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L538-L575) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L189-L195)

```diff
-         set gammaSpace(zz) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === zz) return;
-             this._texture._gammaSpace = zz
-           } else {
-             if (this._gammaSpace === zz) return;
-             this._gammaSpace = zz
+       }
+     }
+ 
+     function Kv(vv, zv, Pv) {
+       for (; vv.canRead;) {
+         vv.lineIndex++;
+         const Sv = vv.currentLine;
+         if (Sv.indexOf("#") >= 0) {
+           const hv = jv.exec(Sv);
+           if (hv && hv.length) {
+             switch (hv[0]) {
+               case "#ifdef": {
+                 const hv = new ev;
+                 zv.children.push(hv);
+                 const gv = Ov(Sv, 6);
+                 hv.children.push(gv), Dv(vv, hv, gv, Pv);
+ ... (22 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L238-L239` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L578-L581) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         const gv = new hv;
+         if (gv.line = Sv, zv.children.push(gv), "#" === Sv[0] && "d" === Sv[1]) {
+           const vv = Sv.replace(";", "").split(" ");
+           gv.additionalDefineKey = vv[1], 3 === vv.length && (gv.additionalDefineValue = vv[2])
```

#### 32. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L241-L286` → after: `L583-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L583-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L583-L623) · [Before (L241-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L241-L286)

```diff
-         set onDispose(zz) {
-           this._onDisposeObserver && this.qJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.qJ.add(zz)
-         }
-         get isBlocking() {
-           return !0
-         }
-         get loadingError() {
-           return this._loadingError
-         }
-         get errorObject() {
-           return this._errorObject
-         }
-         constructor(tz) {
-           let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, Fz.k)(this, Mz), (0, Fz.k)(this, dz, void 0)), this.name = ((0, Fz.k)(this, hz), (0, Fz.k)(this, Qz, void 0)), this.displayName = ((0, Fz.k)(this, kz), (0, Fz.k)(this, iz, void 0)), this.metadata = ((0, Fz.k)(this, Lz), (0, Fz.k)(this,  … [truncated]
-         }
- ... (30 more removed lines; see GitHub link above)
+       }
+       return !1
+     }
+ 
+     function Vv(vv, zv, Pv, ev) {
+       const gv = new hv,
+         pv = new Sv;
+       return pv.lineIndex = -1, pv.lines = vv.split("\n"), Kv(pv, gv, ev), gv.process(zv, Pv, ev)
+     }
+ 
+     function Uv(vv, zv) {
+       const Pv = vv.defines,
+         hv = {};
+       for (const Sv of Pv) {
+         const vv = Sv.replace("#define", "").replace(";", "").trim().split(" ");
+         hv[vv[0]] = vv.length > 1 ? vv[1] : ""
+ ... (25 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L288-L324` → after: `L625-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L625-L634) · [Before (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L288-L324)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const zz = this.aJ();
-           zz && zz.markAllMaterialsAsDirty(1)
-         }
- ... (21 more removed lines; see GitHub link above)
+           if (pv[4]) {
+             const vv = pv[5];
+             if (-1 !== vv.indexOf("..")) {
+               const hv = vv.split(".."),
+                 Sv = parseInt(hv[0]);
+               let ev = parseInt(hv[1]),
+                 gv = Pv.slice(0);
+               Pv = "", isNaN(ev) && (ev = zv.indexParameters[hv[1]]);
+               for (let vv = Sv; vv < ev; vv++) zv.supportsUniformBuffers || (gv = gv.replace(cv, ((vv, zv) => zv + "{X}"))), Pv += gv.replace(Gv, vv.toString()) + "\n"
+             } else zv.supportsUniformBuffers || (Pv = Pv.replace(cv, ((vv, zv) => zv + "{X}"))), Pv = Pv.replace(Gv, vv)
```

#### 34. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L326-L343` → after: `L636-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L636-L640) · [Before (L326-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L326-L343)

```diff
-         }
-         _readPixelsSync() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const Xz = this.getSize();
-           let Oz = Xz.width,
-             oz = Xz.height;
-           const vz = this._getEngine();
-           if (!vz) return null;
-           0 != tz && (Oz /= Math.pow(2, tz), oz /= Math.pow(2, tz), Oz = Math.round(Oz), oz = Math.round(oz));
-           try {
-             return this._texture.isCube ? vz._readTexturePixelsSync(this._texture, Oz, oz, zz, tz, sz, Fz, Wz) : vz._readTexturePixelsSync(this._texture, Oz, oz, -1, tz, sz, Fz, Wz)
- ... (2 more removed lines; see GitHub link above)
+           const hv = [];
+           for (const vv of Sv) {
+             const zv = vv.split(pv[0]);
+             for (let vv = 0; vv < zv.length - 1; vv++) hv.push(zv[vv]), hv.push(Pv);
+             hv.push(zv[zv.length - 1])
```

#### 35. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L346-L347` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L644-L690) · [Before (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L346-L347)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
+       }
+       mv.length = 0;
+       const gv = Sv.join("");
+       ev ? Rv(gv.toString(), zv, Pv) : Pv(gv)
+     }
+     const xv = {
+       loadFile: (vv, zv, Pv, hv, Sv, ev) => {
+         throw (0, Wv.m)("FileTools")
+       }
+     }
+   },
+   39184: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => Sv,
+       e: () => ev,
+       i: () => pv,
+ ... (31 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L349-L350` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L692-L694) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L349-L350)

```diff
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         case 0: {
+           const vv = new Uint8Array(zv);
+           return hv && vv.set(new Uint8Array(hv)), vv
```

#### 37. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L352-L353` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L696-L698) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+         case 4: {
+           const vv = "number" !== typeof zv ? new Int16Array(zv) : new Int16Array(Pv ? zv / 2 : zv);
+           return hv && vv.set(new Int16Array(hv)), vv
```

#### 38. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L355-L364` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L700-L706) · [Before (L355-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L355-L364)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const zz = this._scene.textures.indexOf(this);
-             if (zz >= 0 && this._scene.textures.splice(zz, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const zz = this._parentContainer.textures.indexOf(this);
-               zz > -1 && this._parentContainer.textures.splice(zz, 1), this._parentContainer = null
-             }
-           }
-           this.qJ.notifyObservers(this), this.qJ.clear(), this.metadata = null, super.dispose()
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const vv = "number" !== typeof zv ? new Uint16Array(zv) : new Uint16Array(Pv ? zv / 2 : zv);
+           return hv && vv.set(new Uint16Array(hv)), vv
```

#### 39. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L366-L370` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L708-L710) · [Before (L366-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L366-L370)

```diff
-         serialize() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !zz) return null;
-           const tz = Nz.e.Serialize(this);
-           return Nz.e.AppendSerializedAnimations(this, tz), tz
+         case 6: {
+           const vv = "number" !== typeof zv ? new Int32Array(zv) : new Int32Array(Pv ? zv / 4 : zv);
+           return hv && vv.set(new Int32Array(hv)), vv
```

#### 40. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L372-L384` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L712-L719) · [Before (L372-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L372-L384)

```diff
-         static WhenAllReady(zz, tz) {
-           let sz = zz.length;
-           if (0 !== sz)
-             for (let Fz = 0; Fz < zz.length; Fz++) {
-               const Wz = zz[Fz];
-               if (Wz.isReady()) 0 === --sz && tz();
-               else {
-                 const zz = Wz.onLoadObservable;
-                 zz ? zz.addOnce((() => {
-                   0 === --sz && tz()
-                 })) : 0 === --sz && tz()
-               }
-             } else tz()
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const vv = "number" !== typeof zv ? new Uint32Array(zv) : new Uint32Array(Pv ? zv / 4 : zv);
+           return hv && vv.set(new Uint32Array(hv)), vv
```

#### 41. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L386-L387` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L721-L723) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L386-L387)

```diff
-         static _IsScene(zz) {
-           return "Scene" === zz.getClassName()
+         case 1: {
+           const vv = "number" !== typeof zv ? new Float32Array(zv) : new Float32Array(Pv ? zv / 4 : zv);
+           return hv && vv.set(new Float32Array(hv)), vv
```

#### 42. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L389-L694` → after: `L725-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L725-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L725-L728) · [Before (L389-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L389-L694)

```diff
-       }, (() => {
-         const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(yz[Symbol.metadata] ?? null) : void 0;
-         tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], uz = [(0, Wz.J)()], bz = [(0, Wz.J)("hasAlpha")], wz = [(0, Wz.J)("getAlphaFromRGB")], Dz = [(0, Wz.J)()], gz = [(0, Wz.J)("coordinatesIndex")], Hz = [(0, Wz.J)()], Bz = [(0, Wz.J)("coordinatesMode")], Pz = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "wrapU" in zz,
-             get: zz => zz.wrapU
-           },
-           metadata: Xz
-         }, null, Mz), (0, Fz.h)(zz, null, rz, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (290 more removed lines; see GitHub link above)
+       }
+       const Sv = new Uint8Array(zv);
+       return hv && Sv.set(new Uint8Array(hv)), Sv
+     }
```

#### 43. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L696` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L730) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L696)

```diff
-   39617: (zz, tz, sz) => {
+   39190: (vv, zv, Pv) => {
```

#### 44. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L698-L699` → after: `L732-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L732-L735) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L698-L699)

```diff
-       d: () => Yz,
-       g: () => Pz
+       e: () => Nv,
+       g: () => lv,
+       j: () => dv,
+       m: () => Sv
```

#### 45. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L701-L711` → after: `L737-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L737-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L737-L744) · [Before (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L701-L711)

```diff
-     var Fz = sz(39167),
-       Wz = sz(39170),
-       Xz = sz(36505),
-       Oz = sz(36475),
-       oz = sz(39163),
-       vz = sz(36518),
-       Uz = sz(39065),
-       Kz = sz(39074),
-       uz = sz(39266),
-       Nz = sz(37199),
-       bz = sz(39222);
+     const hv = {};
+ 
+     function Sv(vv) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !hv[vv]) return hv[vv] = !0, `${vv} needs to be imported before as it contains a side-effect required by your code.`
+     }
+     const ev = {};
+     let gv = !1,
+       pv = 0;
```

#### 46. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L715-L722` → after: `L748-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L748-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L748-L751) · [Before (L715-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L715-L722)

```diff
-       const Fz = tz.width,
-         Wz = tz.height;
-       if (zz instanceof Float32Array) {
-         let tz = zz.byteLength / zz.BYTES_PER_ELEMENT;
-         const sz = new Uint8Array(tz);
-         for (; --tz >= 0;) {
-           let Fz = zz[tz];
-           Fz < 0 ? Fz = 0 : Fz > 1 && (Fz = 1), sz[tz] = 255 * Fz
+       const hv = function() {
+         if ((Pv || gv) && 0 === pv) {
+           const Pv = `${vv}.${zv}`;
+           ev[Pv] || (ev[Pv] = !0, console.warn(`[Babylon.js] ${Pv}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
```

#### 47. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L724-L737` → after: `L753-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L753-L754) · [Before (L724-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L724-L737)

```diff
-         zz = sz
-       }
-       const Xz = document.createElement("canvas");
-       Xz.width = Fz, Xz.height = Wz;
-       const Oz = Xz.getContext("2d");
-       if (!Oz) return null;
-       const oz = Oz.createImageData(Fz, Wz);
-       if (oz.data.set(zz), Oz.putImageData(oz, 0, 0), sz) {
-         const zz = document.createElement("canvas");
-         zz.width = Fz, zz.height = Wz;
-         const tz = zz.getContext("2d");
-         return tz ? (tz.translate(0, Wz), tz.scale(1, -1), tz.drawImage(Xz, 0, 0), zz.toDataURL("image/png")) : null
-       }
-       return Xz.toDataURL("image/png")
+       };
+       return hv.__isSideEffectStub = !0, hv
```

#### 48. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L741-L746` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L758) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L741-L746)

```diff
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Fz = zz.getInternalTexture();
-       if (!Fz) return null;
-       const Wz = zz._readPixelsSync(tz, sz);
-       return Wz ? wz(Wz, zz.getSize(), Fz.invertY) : null
+       return !!vv && !vv.__isSideEffectStub
```

#### 49. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L748-L754` → after: `L760-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L760-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L760-L774) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L748-L754)

```diff
-     async function gz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Fz = zz.getInternalTexture();
-       if (!Fz) return null;
-       const Wz = await zz.readPixels(tz, sz);
-       return Wz ? wz(Wz, zz.getSize(), Fz.invertY) : null
+ 
+     function lv(vv, zv) {
+       return {
+         get() {},
+         set(vv) {
+           Object.defineProperty(this, zv, {
+             value: vv,
+             writable: !0,
+             configurable: !0,
+             enumerable: !0
+           })
+         },
+         configurable: !0,
+         enumerable: !0
+       }
```

#### 50. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L756-L789` → after: `L776-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L776-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L776-L873) · [Before (L756-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L756-L789)

```diff
-     var Hz = sz(39576),
-       Bz = sz(39181);
-     let Pz = (() => {
-         var zz;
-         let tz, sz, wz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz = oz.b,
-           Tz = [],
-           cz = [],
-           jz = [],
-           Az = [],
-           yz = [],
-           Mz = [],
-           dz = [],
-           hz = [],
-           Qz = [],
-           kz = [],
-           iz = [],
- ... (18 more removed lines; see GitHub link above)
+   },
+   39167: (vv, zv, Pv) => {
+     function hv() {
+       return "undefined" !== typeof window
+     }
+ 
+     function Sv() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function ev() {
+       return "undefined" !== typeof document
+     }
+ 
+     function gv(vv) {
+       let zv = "",
+ ... (82 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L791-L792` → after: `L875-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L875-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L875-L888) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L791-L792)

```diff
-           get noMipmap() {
-             return this._noMipmap
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+         PreprocessUrl: vv => vv,
+         ScriptBaseUrl: "",
+         ScriptPreprocessUrl: vv => vv,
+         CleanUrl: vv => vv = vv.replace(/#/gm, "%23")
+       },
+       mv = (vv, zv) => {
+         if ((!vv || 0 !== vv.indexOf("data:")) && Gv.CorsBehavior)
+           if ("string" === typeof Gv.CorsBehavior || Gv.CorsBehavior instanceof String) zv.crossOrigin = Gv.CorsBehavior;
+           else {
+             const Pv = Gv.CorsBehavior(vv);
+             Pv && (zv.crossOrigin = Pv)
```

#### 52. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L794-L795` → after: `L890-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L890-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L890-L906) · [Before (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L794-L795)

```diff
-           get mimeType() {
-             return this._mimeType
+       },
+       jv = {
+         getRequiredSize: null
+       },
+       fv = function(vv, zv, Pv, Sv) {
+         let ev, pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+           lv = arguments.length > 5 ? arguments[5] : void 0,
+           Tv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Nv.e.LastCreatedEngine;
+         if ("undefined" === typeof HTMLImageElement && !Tv?._features.forceBitmapOverHTMLImageElement) return Pv("LoadImage is only supported in web or BabylonNative environments."), null;
+         if (Tv?._features.forceBitmapOverHTMLImageElement && "string" !== typeof vv && "undefined" !== typeof Blob) {
+           let hv;
+           if (vv instanceof Blob) hv = vv;
+           else {
+             const zv = vv instanceof ArrayBuffer ? vv : (0, av.n)(vv);
+             hv = new Blob([zv], {
+               type: pv
+ ... (1 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L797-L798` → after: `L908-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L908-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L908-L928) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L797-L798)

```diff
-           set isBlocking(zz) {
-             this._isBlocking = zz
+           return Tv.createImageBitmap(hv, {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none",
+             ...lv
+           }).then(zv).catch((zv => {
+             Pv && Pv("Error while trying to load image: " + vv, zv)
+           })), null
+         }
+         let Wv = !1;
+         if (vv instanceof ArrayBuffer || ArrayBuffer.isView(vv))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let zv;
+             zv = vv instanceof ArrayBuffer ? vv : (0, av.n)(vv), ev = URL.createObjectURL(new Blob([zv], {
+               type: pv
+             })), Wv = !0
+           } else ev = `data:${pv};base64,` + (0, dv.i)(vv);
+ ... (5 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L800-L801` → after: `L930-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L930-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L930-L961) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L800-L801)

```diff
-           get isBlocking() {
-             return this._isBlocking
+         };
+         if (Tv?._features.forceBitmapOverHTMLImageElement) return Yv(ev, (hv => {
+           Tv.createImageBitmap(new Blob([hv], {
+             type: pv
+           }), {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none",
+             ...lv
+           }).then((vv => {
+             zv(vv), Wv && URL.revokeObjectURL(ev)
+           })).catch((zv => {
+             Pv && Pv("Error while trying to load image: " + vv, zv)
+           }))
+         }), void 0, Sv || void 0, !0, ((vv, zv) => {
+           wv(zv)
+         })), null;
+ ... (16 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L803-L804` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L963-L967) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L803-L804)

```diff
-           get invertY() {
-             return this._invertY
+         }), Cv.push({
+           target: sv,
+           name: "error",
+           handler: vv => {
+             iv(), wv(vv), Wv && sv.src && URL.revokeObjectURL(sv.src)
```

#### 56. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L806-L845` → after: `L969-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L969-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L969-L1001) · [Before (L806-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L806-L845)

```diff
-           constructor(tz, sz, Wz, Oz) {
-             let oz, vz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.TRILINEAR_SAMPLINGMODE,
-               Uz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-               Nz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               bz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-               wz = arguments.length > 9 ? arguments[9] : void 0,
-               Dz = arguments.length > 10 ? arguments[10] : void 0,
-               gz = arguments.length > 11 ? arguments[11] : void 0,
-               Bz = arguments.length > 12 ? arguments[12] : void 0,
-               Pz = arguments.length > 13 ? arguments[13] : void 0;
-             super(sz), this.url = ((0, Fz.k)(this, Tz), (0, Fz.k)(this, cz, null)), this.uOffset = ((0, Fz.k)(this, jz), (0, Fz.k)(this, Az, 0)), this.vOffset = ((0, Fz.k)(this, yz), (0, Fz.k)(this, Mz, 0)), this.uScale = ((0, Fz.k)(this, dz), (0, Fz.k)(this, hz, 1)), this.vScale … [truncated]
-             let rz = !1,
-               Yz = null,
-               xz = !0;
-             "object" === typeof Wz && null !== Wz ? (oz = Wz.noMipmap ?? !1, Oz = Wz.invertY ?? !Hz.d, vz = Wz.samplingMode ?? zz.TRILINEAR_SAMPLINGMODE, Uz = Wz.onLoad ?? null, uz = Wz.onError ?? null, Nz = Wz.buffer ?? null, bz = Wz.deleteBuffer ?? !1, wz = Wz.format, Dz = Wz.m … [truncated]
- ... (24 more removed lines; see GitHub link above)
+         }), Cv.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: vv => {
+             if (vv.blockedURI !== sv.src || "yw" === vv.disposition) return;
+             iv();
+             const zv = new Error(`CSP violation of policy ${vv.effectiveDirective} ${vv.blockedURI}. Current policy is ${vv.originalPolicy}`);
+             Nv.e.UseFallbackTexture = !1, wv(zv), Wv && sv.src && URL.revokeObjectURL(sv.src), sv.src = ""
+           }
+         }), (() => {
+           for (const vv of Cv) vv.target.addEventListener(vv.name, vv.handler)
+         })();
+         const cv = "blob:" === ev.substring(0, 5),
+           fv = "data:" === ev.substring(0, 5),
+           Fv = () => {
+             cv || fv || !hv.b.IsCustomRequestAvailable ? sv.src = ev : Yv(ev, ((vv, zv, Pv) => {
+ ... (17 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L847` → after: `L1003-L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1003-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1003-L1009) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L847)

```diff
-                 this._texture = Jz.createTexture(this.url, oz, this._invertY, mz, vz, Iz, Cz, this._buffer, void 0, this._format, this._forcedExtension, Dz, gz, Bz, rz)
+                 let zv;
+                 try {
+                   zv = URL.createObjectURL(gv.FilesToLoad[vv])
+                 } catch (Ov) {
+                   zv = URL.createObjectURL(gv.FilesToLoad[vv])
+                 }
+                 sv.src = zv, Wv = !0
```

#### 58. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L849` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1011) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L849)

```diff
-                 throw Cz("error loading", ez), ez
+                 sv.src = ""
```

#### 59. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L851` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1013) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L851)

```diff
-               bz && (this._buffer = null)
+               return sv
```

#### 60. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L854-L905` → after: `L1016-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1016-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1016-L1056) · [Before (L854-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L854-L905)

```diff
-           updateURL(zz) {
-             let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               sz = arguments.length > 2 ? arguments[2] : void 0,
-               Fz = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.aJ().markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, this._buffer = tz, this._forcedExtension = Fz, this.delayLoadState = 4;
-             const Wz = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               Wz ? Wz() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), sz && sz()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const zz = this.aJ();
-             if (!zz) return;
-             let tz = this.url;
-             !tz && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (tz = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(tz, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
- ... (36 more removed lines; see GitHub link above)
+           Fv()
+         }
+         return sv
+       },
+       Fv = (vv, zv, Pv, hv, Sv) => {
+         const gv = new FileReader,
+           pv = {
+             onCompleteObservable: new ev.c,
+             abort: () => gv.abort()
+           };
+         return gv.onloadend = () => pv.onCompleteObservable.notifyObservers(pv), Sv && (gv.onerror = () => {
+           Sv(new cv(`Unable to read ${vv.name}`, vv))
+         }), gv.onload = vv => {
+           zv(vv.target.result)
+         }, Pv && (gv.onprogress = Pv), hv ? gv.readAsArrayBuffer(vv) : gv.readAsText(vv), pv
+       },
+ ... (25 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L907-L920` → after: `L1058-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1058-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1058-L1080) · [Before (L907-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L907-L920)

```diff
-           clone() {
-             const tz = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
+           return wv.e.SetImmediate((() => {
+             vv.onCompleteObservable.notifyObservers(vv)
+           })), vv
+         }
+         return nv(lv, ((vv, Pv) => {
+           zv(vv, Pv?.responseURL, Pv?.getResponseHeader("content-type"))
+         }), Pv, hv, Sv, dv ? vv => {
+           dv(vv.request, new Cv(vv.message, vv.request))
+         } : void 0, Nv)
+       },
+       nv = (vv, zv, Pv, gv, pv, dv, lv) => {
+         null !== gv && (gv ?? (gv = Nv.e.LastCreatedScene?.offlineProvider)), vv = Gv.CleanUrl(vv), vv = Gv.PreprocessUrl(vv);
+         const Tv = Gv.BaseUrl + vv;
+         let wv = !1;
+         const av = {
+             onCompleteObservable: new ev.c,
+ ... (7 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L922-L971` → after: `L1082-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1082-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1082-L1083) · [Before (L922-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L922-L971)

```diff
-             return Bz.e.Clone((() => new zz(this._texture ? this._texture.url : null, this.aJ(), tz)), this)
-           }
-           serialize() {
-             const tz = this.name;
-             zz.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const sz = super.serialize(zz._SerializeInternalTextureUniqueId);
-             if (!sz) return null;
-             if (zz.SerializeBuffers || zz.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) sz.base64String = this._buffer, sz.name = sz.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const zz = this.mimeType || "image/png";
-               sz.base64String = `data:${zz};base64,${(0,bz.g)(this._buffer)}`
-             } else(zz.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (sz.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Dz(this) : gz(this));
-             return sz.invertY = this._invertY, sz.samplingMode = this.samplingMode, sz._creationFlags = this._creationFlags, sz._useSRGBBuffer = this._useSRGBBuffer, zz._SerializeInternalTextureUniqueId && (sz.internalTextureUniqueId = this._texture?.uniqueId), sz.internalTexture … [truncated]
-           }
-           getClassName() {
- ... (34 more removed lines; see GitHub link above)
+             let sv = () => {
+               Nv(), av.onCompleteObservable.notifyObservers(av), av.onCompleteObservable.clear(), Pv = void 0, vv = null, sv = null, dv = void 0, lv = void 0, zv = void 0
```

#### 63. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L973-L1004` → after: `L1085-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1085-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1085-L1110) · [Before (L973-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L973-L1004)

```diff
-             return Bz.e.Parse((() => {
-               let Wz = !0;
-               if (tz.noMipmap && (Wz = !1), tz.mirrorPlane) {
-                 const Fz = zz._CreateMirror(tz.name, tz.renderTargetSize, sz, Wz);
-                 return Fz._waitingRenderList = tz.renderList, Fz.mirrorPlane = Nz.c.FromArray(tz.mirrorPlane), Oz(Fz), Fz
-               }
-               if (tz.isRenderTarget && !tz.base64String) {
-                 let Fz = null;
-                 if (tz.isCube) {
-                   if (sz.reflectionProbes)
-                     for (let zz = 0; zz < sz.reflectionProbes.length; zz++) {
-                       const Fz = sz.reflectionProbes[zz];
-                       if (Fz.name === tz.name) return Fz.cubeTexture
-                     }
-                 } else Fz = zz._CreateRenderTargetTexture(tz.name, tz.renderTargetSize, sz, Wz, tz._creationFlags ?? 0), Fz._waitingRenderList = tz.renderList;
-                 return Oz(Fz), Fz
- ... (16 more removed lines; see GitHub link above)
+             av.abort = () => {
+               wv = !0, sv && sv(), ev && ev.readyState !== (XMLHttpRequest.DONE || 4) && ev.abort(), null !== gv && (clearTimeout(gv), gv = null), ev = null
+             };
+             const Cv = vv => {
+                 const zv = vv.message || "Unknown error";
+                 dv && ev ? dv(new iv(zv, ev)) : Wv.d.Error(zv)
+               },
+               cv = Wv => {
+                 if (ev) {
+                   if (ev.open("GET", Tv), lv) try {
+                     lv(ev)
+                   } catch (av) {
+                     return void Cv(av)
+                   }
+                   pv && (ev.responseType = "arraybuffer"), Pv && ev.addEventListener("progress", Pv), sv && ev.addEventListener("loadend", sv), vv = () => {
+                     if (!wv && ev && ev.readyState === (XMLHttpRequest.DONE || 4)) {
+ ... (10 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1006-L1024` → after: `L1112-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1112-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1112-L1120) · [Before (L1006-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1006-L1024)

```diff
-                     },
-                     Xz = tz.base64String,
-                     vz = Xz.startsWith("data:") ? Xz.substring(5) : Xz;
-                   oz = zz.CreateFromBase64String("", vz, sz, Fz), oz.name = tz.name
-                 } else {
-                   let vz;
-                   vz = tz.name && (tz.name.indexOf("://") > 0 || tz.name.startsWith("data:")) ? tz.name : Fz + tz.name, tz.url && (tz.url.startsWith("data:") || zz.UseSerializedUrlIfAny) && (vz = tz.url);
-                   const Uz = {
-                     noMipmap: !Wz,
-                     invertY: tz.invertY,
-                     samplingMode: tz.samplingMode,
-                     useSRGBBuffer: tz._useSRGBBuffer ?? !1,
-                     creationFlags: tz._creationFlags ?? 0,
-                     onLoad: () => {
-                       Oz(oz)
-                     },
- ... (3 more removed lines; see GitHub link above)
+                       const Pv = Gv.DefaultRetryStrategy;
+                       if (Pv) {
+                         const vv = Pv(Tv, ev, Wv);
+                         if (-1 !== vv) return Nv(), ev = new hv.b, void(gv = setTimeout((() => cv(Wv + 1)), vv))
+                       }
+                       const lv = new iv("Error status: " + ev.status + " " + ev.statusText + " - Unable to load " + Tv, ev);
+                       dv && dv(lv)
+                     }
+                   }, ev.addEventListener("readystatechange", vv), ev.send()
```

#### 65. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1026-L1211` → after: `L1122-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1122-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1122-L1127) · [Before (L1026-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1026-L1211)

```diff
-                 return oz
-               }
-             }), tz, sz)
-           }
-           static CreateFromBase64String(tz, sz, Fz, Wz, Xz) {
-             let Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz.TRILINEAR_SAMPLINGMODE;
-             return new zz("data:" + sz, Fz, Wz, Xz, Oz, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, tz, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
-           }
-           static LoadFromDataString(tz, sz, Fz) {
-             let Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               Xz = arguments.length > 4 ? arguments[4] : void 0,
-               Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zz.TRILINEAR_SAMPLINGMODE,
-               vz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               Kz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
- ... (170 more removed lines; see GitHub link above)
+               };
+             cv(0)
+           };
+         if (gv && gv.enableSceneOffline && !vv.startsWith("blob:")) {
+           const hv = vv => {
+               vv && vv.status > 400 ? dv && dv(vv) : sv()
```

#### 66. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1213-L1228` → after: `L1129-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1129-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1129-L1235) · [Before (L1213-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1213-L1228)

```diff
-             metadata: Xz
-           }, tt, st), Xz && Object.defineProperty(zz, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: Xz
-           })
-         })(), zz.SerializeBuffers = !0, zz.ForceSerializeBuffers = !1, zz.OnTextureLoadErrorObservable = new Xz.c, zz._SerializeInternalTextureUniqueId = !1, zz._CubeTextureParser = (zz, tz, sz) => {
-           throw (0, Uz.i)("CubeTexture")
-         }, zz._CreateMirror = (zz, tz, sz, Fz) => {
-           throw (0, Uz.i)("MirrorTexture")
-         }, zz._CreateRenderTargetTexture = (zz, tz, sz, Fz, Wz) => {
-           throw (0, Uz.i)("RenderTargetTexture")
-         }, zz.NEAREST_SAMPLINGMODE = 1, zz.NEAREST_NEAREST_MIPLINEAR = 8, zz.BILINEAR_SAMPLINGMODE = 2, zz.LINEAR_LINEAR_MIPNEAREST = 11, zz.TRILINEAR_SAMPLINGMODE = 3, zz.LINEAR_LINEAR_MIPLINEAR = 3, zz.NEAREST_NEAREST_MIPNEAREST = 4, zz.NEAREST_LINEAR_MIPNEAREST = 5, zz.NEAREST … [truncated]
-       })(),
-       rz = !1;
+             Sv = () => {
+               gv && gv.loadFile(Gv.BaseUrl + vv, (vv => {
+                 !wv && zv && zv(vv), av.onCompleteObservable.notifyObservers(av)
+               }), Pv ? vv => {
+                 !wv && Pv && Pv(vv)
+               } : void 0, hv, pv)
+             };
+           gv.open(Sv, hv)
+         } else sv();
+         return av
+       },
+       Ov = vv => {
+         const {
+           match: zv,
+           type: Pv
+         } = Vv(vv);
+ ... (91 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1231` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1238) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1231)

```diff
-       rz || (rz = !0, (0, vz.g)("BABYLON.Texture", Pz), Bz.e._TextureParser = Pz.Parse)
+       qv || (qv = !0, tv(Uv, Rv, Gv, Kv, Dv, Yv, fv, Fv, nv, mv), lv.b.loadFile = Yv, lv.b.loadImage = fv, Tv.l.loadFile = Yv)
```

#### 68. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1234` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1241) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1234)

```diff
-   39179: (zz, tz, sz) => {
+   39368: (vv, zv, Pv) => {
```

#### 69. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1236` → after: `L1243-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1243-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1243-L1245) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1236)

```diff
-       e: () => Fz
+       b: () => pv,
+       e: () => ev,
+       i: () => gv
```

#### 70. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1239-L1240` → after: `L1332-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1332-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1332-L1337) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1239-L1240)

```diff
-       constructor(zz, tz) {
-         this.width = zz, this.height = tz
+       static SetImmediate(vv) {
+         0 === hv.length && setTimeout((() => {
+           const vv = hv;
+           hv = [];
+           for (const zv of vv) zv()
+         }), 1), hv.push(vv)
```

#### 71. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1242-L1243` → after: `L1339-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1339-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1339-L1458) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+     }
+ 
+     function ev(vv, zv, Pv) {
+       try {
+         if (vv()) return zv(), !0
+       } catch (hv) {
+         return Pv?.(hv), !0
+       }
+       return !1
+     }
+     const gv = function(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         gv = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ev(vv, zv, Pv)) return null;
+       const pv = setInterval((() => {
+ ... (104 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1245-L1246` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1460-L1461) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get response() {
+         return this._xhr.response
```

#### 73. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1248-L1250` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1463-L1464) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1248-L1250)

```diff
-       getHashCode() {
-         let zz = 0 | this.width;
-         return zz = 397 * zz ^ this.height, zz
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 74. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1252-L1253` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1466-L1467) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1252-L1253)

```diff
-       vsz(zz) {
-         this.width = zz.width, this.height = zz.height
+       get responseText() {
+         return this._xhr.responseText
```

#### 75. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1255-L1256` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1469-L1470) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1255-L1256)

```diff
-       m_(zz, tz) {
-         return this.width = zz, this.height = tz, this
+       get responseType() {
+         return this._xhr.responseType
```

#### 76. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1258-L1259` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1472-L1473) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1258-L1259)

```diff
-       set(zz, tz) {
-         return this.m_(zz, tz)
+       set responseType(vv) {
+         this._xhr.responseType = vv
```

#### 77. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1261-L1262` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1475-L1476) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1261-L1262)

```diff
-       multiplyByFloats(zz, tz) {
-         return new Fz(this.width * zz, this.height * tz)
+       get timeout() {
+         return this._xhr.timeout
```

#### 78. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1264-L1265` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1478-L1479) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1264-L1265)

```diff
-       clone() {
-         return new Fz(this.width, this.height)
+       set timeout(vv) {
+         this._xhr.timeout = vv
```

#### 79. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1267-L1268` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1481-L1482) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1267-L1268)

```diff
-       equals(zz) {
-         return !!zz && (this.width === zz.width && this.height === zz.height)
+       addEventListener(vv, zv, Pv) {
+         this._xhr.addEventListener(vv, zv, Pv)
```

#### 80. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1270-L1271` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1484-L1485) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       removeEventListener(vv, zv, Pv) {
+         this._xhr.removeEventListener(vv, zv, Pv)
```

#### 81. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1273-L1274` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1487-L1488) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1273-L1274)

```diff
-       static Zero() {
-         return new Fz(0, 0)
+       abort() {
+         this._xhr.abort()
```

#### 82. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1276-L1277` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1490-L1491) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1276-L1277)

```diff
-       add(zz) {
-         return new Fz(this.width + zz.width, this.height + zz.height)
+       send(vv) {
+         this._xhr.send(vv)
```

#### 83. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1279-L1280` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1493-L1499) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1279-L1280)

```diff
-       subtract(zz) {
-         return new Fz(this.width - zz.width, this.height - zz.height)
+       open(vv, zv, Pv) {
+         const {
+           url: Sv,
+           headers: ev
+         } = hv._CollectCustomizations(zv, Pv);
+         this._requestURL = hv._CleanUrl(Sv), this._xhr.open(vv, this._requestURL, !0);
+         for (const hv in ev) this._xhr.setRequestHeader(hv, ev[hv])
```

#### 84. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1282-L1283` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1501-L1502) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1282-L1283)

```diff
-       scale(zz) {
-         return new Fz(this.width * zz, this.height * zz)
+       setRequestHeader(vv, zv) {
+         this._xhr.setRequestHeader(vv, zv)
```

#### 85. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L1285-L1288` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/246.js#L1504-L1505) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/246.js#L1285-L1288)

```diff
-       static Lerp(zz, tz, sz) {
-         const Wz = zz.width + (tz.width - zz.width) * sz,
-           Xz = zz.height + (tz.height - zz.height) * sz;
-         return new Fz(Wz, Xz)
+       getResponseHeader(vv) {
+         return this._xhr.getResponseHeader(vv)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   39402: (zz, tz, sz) => {
+   39407: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7` → after: `L80-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L80-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L80-L89) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L7)

```diff
-       g: () => oz
+       f: () => Sv,
+       i: () => ev
+     })
+   },
+   39399: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => Gv,
+       e: () => jv,
+       h: () => iv,
+       i: () => cv
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L12` → after: `L91-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L91-L103) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L9-L12)

```diff
-     var Fz = sz(38097),
-       Wz = sz(39181),
-       Xz = sz(39370),
-       Oz = {};
+     var hv, Sv = Pv(36618),
+       ev = Pv(39167),
+       gv = Pv(38209),
+       pv = Pv(38207),
+       dv = Pv(39220),
+       Nv = Pv(39190),
+       lv = Pv(39346),
+       Tv = Pv(36615),
+       Wv = Pv(39338),
+       wv = Pv(39204),
+       av = Pv(39407),
+       sv = Pv(37431),
+       Cv = Pv(39247);
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L14-L15` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L105-L106) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L14-L15)

```diff
-       constructor(zz) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
+       static get BaseUrl() {
+         return Wv.f.BaseUrl
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L17-L19` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L108-L109) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L17-L19)

```diff
-       add(zz) {
-         const tz = zz.getSimpleName();
-         this.attached[tz] ? Fz.e.Warn("camera input of type " + tz + " already exists on camera") : (this.attached[tz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(t … [truncated]
+       static set BaseUrl(vv) {
+         Wv.f.BaseUrl = vv
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L21-L25` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L111-L112) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L21-L25)

```diff
-       remove(zz) {
-         for (const tz in this.attached) {
-           const sz = this.attached[tz];
-           if (sz === zz) return sz.detachControl(), sz.camera = null, delete this.attached[tz], void this.rebuildInputCheck()
-         }
+       static get CleanUrl() {
+         return Wv.f.CleanUrl
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L27-L31` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L114-L115) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L27-L31)

```diff
-       removeByType(zz) {
-         for (const tz in this.attached) {
-           const sz = this.attached[tz];
-           sz.getClassName() === zz && (sz.detachControl(), sz.camera = null, delete this.attached[tz], this.rebuildInputCheck())
-         }
+       static set CleanUrl(vv) {
+         Wv.f.CleanUrl = vv
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L33-L37` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L117-L118) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L33-L37)

```diff
-       _addCheckInputs(zz) {
-         const tz = this.checkInputs;
-         return () => {
-           tz(), zz()
-         }
+       static IsAbsoluteUrl(vv) {
+         return 0 === vv.indexOf("//") || -1 !== vv.indexOf("://") && (-1 !== vv.indexOf(".") && (-1 !== vv.indexOf("/") && (!(vv.indexOf(":") > vv.indexOf("/")) && (vv.indexOf("://") < vv.indexOf(".") || (0 === vv.indexOf("data:") || 0 === vv.indexOf("blob:"))))))
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L39-L40` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L120-L121) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L39-L40)

```diff
-       attachInput(zz) {
-         this.attachedToElement && zz.attachControl(this.noPreventDefault)
+       static set ScriptBaseUrl(vv) {
+         Wv.f.ScriptBaseUrl = vv
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L42-L47` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L123-L124) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L42-L47)

```diff
-       attachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           zz = !Xz.b.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
-           for (const tz in this.attached) this.attached[tz].attachControl(zz)
-         }
+       static get ScriptBaseUrl() {
+         return Wv.f.ScriptBaseUrl
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L49-L52` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L126-L127) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L49-L52)

```diff
-       detachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const tz in this.attached) this.attached[tz].detachControl(), zz && (this.attached[tz].camera = null);
-         this.attachedToElement = !1
+       static set CDNBaseUrl(vv) {
+         hv.ScriptBaseUrl = vv, hv.AssetBaseUrl = vv
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L54-L59` → after: `L129-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L129-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L129-L160) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L54-L59)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const zz in this.attached) {
-           const tz = this.attached[zz];
-           tz.checkInputs && (this.checkInputs = this._addCheckInputs(tz.checkInputs.bind(tz)))
-         }
+       static set ScriptPreprocessUrl(vv) {
+         Wv.f.ScriptPreprocessUrl = vv
+       }
+       static get ScriptPreprocessUrl() {
+         return Wv.f.ScriptPreprocessUrl
+       }
+       static get DefaultRetryStrategy() {
+         return Wv.f.DefaultRetryStrategy
+       }
+       static set DefaultRetryStrategy(vv) {
+         Wv.f.DefaultRetryStrategy = vv
+       }
+       static get CorsBehavior() {
+         return Wv.f.CorsBehavior
+       }
+       static set CorsBehavior(vv) {
+ ... (16 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L61-L62` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L162-L163) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       static set fallbackTexture(vv) {
+         Tv.e.FallbackTexture = vv
```

#### 14. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L64-L69` → after: `L165-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L165-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L165-L243) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L64-L69)

```diff
-       serialize(zz) {
-         const tz = {};
-         for (const sz in this.attached) {
-           const zz = this.attached[sz],
-             Fz = Wz.e.Serialize(zz);
-           tz[zz.getClassName()] = Fz
+       static FetchToRef(vv, zv, Pv, hv, Sv, ev) {
+         const gv = 4 * ((Math.abs(vv) * Pv % Pv | 0) + (Math.abs(zv) * hv % hv | 0) * Pv);
+         ev.r = Sv[gv] / 255, ev.g = Sv[gv + 1] / 255, ev.b = Sv[gv + 2] / 255, ev.a = Sv[gv + 3] / 255
+       }
+       static Mix(vv, zv, Pv) {
+         return 0
+       }
+       static Instantiate(vv) {
+         return av.b.Instantiate(vv)
+       }
+       static SetImmediate(vv) {
+         wv.e.SetImmediate(vv)
+       }
+       static IsExponentOfTwo(vv) {
+         return !0
+       }
+ ... (63 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L71-L92` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L245-L257) · [Before (L71-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L71-L92)

```diff
-         zz.inputsmgr = tz
-       }
-       parse(zz) {
-         const tz = zz.inputsmgr;
-         if (tz) {
-           this.clear();
-           for (const zz in tz) {
-             const sz = Oz[zz];
-             if (sz) {
-               const Fz = tz[zz],
-                 Xz = Wz.e.Parse((() => new sz), Fz, null);
-               this.add(Xz)
-             }
-           }
-         } else
-           for (const sz in this.attached) {
- ... (6 more removed lines; see GitHub link above)
+         return vv
+       }
+       static GetBabylonScriptURL(vv, zv) {
+         if (!vv) return "";
+         if (vv.startsWith(hv._DefaultCdnUrl))
+           if (hv.ScriptBaseUrl) {
+             const zv = hv.ScriptBaseUrl.endsWith("/") ? hv.ScriptBaseUrl.slice(0, -1) : hv.ScriptBaseUrl;
+             vv = vv.replace(hv._DefaultCdnUrl, zv)
+           } else if (hv._CdnVersion) {
+           const zv = `${hv._DefaultCdnUrl}/v${hv._CdnVersion}`;
+           vv.startsWith(zv) || (vv = vv.replace(hv._DefaultCdnUrl, zv))
+         }
+         return vv = hv.ScriptPreprocessUrl(vv), zv && !hv.IsAbsoluteUrl(vv) && (vv = hv.GetAbsoluteUrl(vv)), vv
```

#### 16. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L94-L246` → after: `L259-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L259-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L259-L269) · [Before (L94-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L94-L246)

```diff
-     }
-   },
-   40216: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Pz
-     });
-     var Fz = sz(39167),
-       Wz = sz(39170),
-       Xz = sz(39074),
-       Oz = sz(36475),
-       oz = sz(39163),
-       vz = sz(39617),
-       Uz = sz(36518),
-       Kz = sz(36505),
-       uz = sz(39181),
-       Nz = sz(39021),
- ... (137 more removed lines; see GitHub link above)
+       static LoadBabylonScript(vv, zv, Pv, Sv) {
+         vv = hv.GetBabylonScriptURL(vv), hv.LoadScript(vv, zv, Pv)
+       }
+       static async LoadBabylonScriptAsync(vv) {
+         return vv = hv.GetBabylonScriptURL(vv), await hv.LoadScriptAsync(vv)
+       }
+       static _LoadScriptNative(vv, zv, Pv, Sv) {
+         if (_native) {
+           if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
+             const vv = "Loading a script as an ES module is not supported in Babylon Native";
+             return void Pv?.(vv, new Error(vv))
```

#### 17. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L248-L266` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L271-L275) · [Before (L248-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L248-L266)

```diff
-           updateURL(zz) {
-             let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, tz && (this._forcedExtension = tz);
-             const Uz = zz.lastIndexOf("."),
-               Kz = tz || (Uz > -1 ? zz.substring(Uz).toLowerCase() : ""),
-               uz = 0 === Kz.indexOf(".dds"),
-               Nz = 0 === Kz.indexOf(".env"),
-               bz = 0 === Kz.indexOf(".basis");
-             if (Nz ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Fz, Fz && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), oz) this._files = oz;
- ... (3 more removed lines; see GitHub link above)
+           hv.LoadFile(vv, (vv => {
+             try {
+               Function(vv).apply(null), zv && zv()
+             } catch (hv) {
+               Pv && Pv("LoadScript Error", hv)
```

#### 18. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L268-L311` → after: `L277-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L277-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L277-L288) · [Before (L268-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L268-L311)

```diff
-             this._buffer = vz, Oz ? (this.delayLoadState = 4, this._delayedOnLoad = sz, this._delayedOnError = Wz) : this._loadTexture(sz, Wz)
-           }
-           delayLoad(zz) {
-             4 === this.delayLoadState && (zz && (this._forcedExtension = zz), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
-           }
-           getReflectionTextureMatrix() {
-             return this._textureMatrix
-           }
-           setReflectionTextureMatrix(zz) {
-             if (zz.updateFlag === this._textureMatrix.updateFlag) return;
-             if (zz.isIdentity() !== this._textureMatrix.isIdentity() && this.aJ()?.markAllMaterialsAsDirty(1, (zz => -1 !== zz.getActiveTextures().indexOf(this))), this._textureMatrix = zz, !this.aJ()?.useRightHandedSystem) return;
-             const tz = Oz.m.XD[0],
-               sz = Oz.m.Quaternion[0],
-               Fz = Oz.m.XD[1];
-             this._textureMatrix.decompose(tz, sz, Fz), sz.z *= -1, sz.w *= -1, Oz.e.ComposeToRef(tz, sz, Fz, this._textureMatrixRefraction)
-           }
- ... (28 more removed lines; see GitHub link above)
+           }), void 0, void 0, !1, ((vv, zv) => {
+             Pv && Pv("LoadScript Error", zv)
+           }))
+         }
+       }
+       static _LoadScriptWeb(vv, zv, Pv, hv) {
+         let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(vv), zv && zv()
+           } catch (dv) {
+             Pv?.(`Unable to load script '${vv}' in worker`, dv)
```

#### 19. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L313-L462` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L290) · [Before (L313-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L313-L462)

```diff
-         }, (() => {
-           const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Iz[Symbol.metadata] ?? null) : void 0;
-           tz = [(0, Wz.J)()], sz = [(0, Wz.H)()], Uz = [(0, Wz.H)()], Pz = [(0, Wz.J)("rotationY")], rz = [(0, Wz.J)("files")], Yz = [(0, Wz.J)("forcedExtension")], xz = [(0, Wz.J)("extensions")], mz = [(0, Wz.w)("textureMatrix")], Jz = [(0, Wz.w)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "boundingBoxSize" in zz,
-               get: zz => zz.boundingBoxSize
-             },
-             metadata: Xz
-           }, null, Cz), (0, Fz.h)(zz, null, Pz, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
- ... (134 more removed lines; see GitHub link above)
+           return
```

#### 20. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L464-L491` → after: `L292-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L292-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L292-L398) · [Before (L464-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L464-L491)

```diff
-       return Fz
-     }
-     rz || (rz = !0, Pz.CreateFromImages = Yz, Pz.CreateFromPrefilteredData = xz, Pz.Parse = mz, vz.g._CubeTextureParser = mz, (0, Uz.g)("BABYLON.CubeTexture", Pz))
-   },
-   40253: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Uz
-     });
-     var Fz = sz(38097),
-       Wz = sz(39617),
-       Xz = sz(39111),
-       Oz = sz(39031),
-       oz = sz(39021);
-     let vz = !1;
-     class Uz extends Wz.g {
-       constructor(zz, tz, sz) {
- ... (12 more removed lines; see GitHub link above)
+         if (!(0, ev.l)()) return void Pv?.(`Cannot load script '${vv}' outside of a window or a worker`);
+         const gv = document.getElementsByTagName("head")[0],
+           pv = document.createElement("script");
+         Sv ? (pv.setAttribute("type", "module"), pv.innerText = vv) : (pv.setAttribute("type", "text/javascript"), pv.setAttribute("src", vv)), hv && (pv.id = hv), pv.onload = () => {
+           zv && zv()
+         }, pv.onerror = zv => {
+           Pv && Pv(`Unable to load script '${vv}'`, zv)
+         }, gv.appendChild(pv)
+       }
+       static async LoadScriptAsync(vv, zv) {
+         return await new Promise(((Pv, hv) => {
+           this.LoadScript(vv, (() => {
+             Pv()
+           }), ((vv, zv) => {
+             hv(zv || new Error(vv))
+           }), zv)
+ ... (91 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L493-L508` → after: `L400-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L400-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L400-L403) · [Before (L493-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L493-L508)

```diff
-           const Oz = this._gl,
-             oz = Oz.TEXTURE_2D,
-             vz = this._bindTextureDirectly(oz, zz, !0, Xz);
-           this._unpackFlipY(void 0 === sz ? zz.invertY : sz), Fz && Oz.pixelStorei(Oz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
-           const Uz = this._getWebGLTextureType(zz.type),
-             Kz = this._getInternalFormat(Wz || zz.format),
-             uz = this._getRGBABufferInternalSizedFormat(zz.type, Kz);
-           Oz.texImage2D(oz, 0, uz, Kz, Uz, tz), zz.generateMipMaps && Oz.generateMipmap(oz), vz || this._bindTextureDirectly(oz, null), Fz && Oz.pixelStorei(Oz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Wz && (zz.format = Wz), zz._dynamicTextureSource = tz, zz._premulAlpha = Fz, zz.inve … [truncated]
-         }), this.name = zz, this.wrapU = Wz.g.CLAMP_ADDRESSMODE, this.wrapV = Wz.g.CLAMP_ADDRESSMODE, this._generateMipMaps = Fz;
-         const bz = this._getEngine();
-         if (!bz) return;
-         if (tz.getContext) this._canvas = tz, this._ownCanvas = !1, this._texture = bz.createDynamicTexture(this._canvas.width, this._canvas.height, Fz, Uz);
-         else {
-           this._canvas = bz.createCanvas(1, 1), this._ownCanvas = !0;
-           const zz = tz;
-           zz.width || 0 === zz.width ? this._texture = bz.createDynamicTexture(zz.width, zz.height, Fz, Uz) : this._texture = bz.createDynamicTexture(tz, tz, Fz, Uz)
+           const hv = Pv.document.createElement("img");
+           hv.onload = function() {
+             URL.revokeObjectURL(zv)
+           }, hv.src = zv, Pv.document.body.appendChild(hv)
```

#### 22. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L513-L514` → after: `L406-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L406-L427) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+       static EncodeScreenshotCanvasData(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           Sv = arguments.length > 3 ? arguments[3] : void 0,
+           ev = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof Sv && zv) {
+           if (zv) {
+             if (hv._IsOffScreenCanvas(vv)) return void vv.convertToBlob({
+               type: Pv,
+               quality: ev
+             }).then((vv => {
+               const Pv = new FileReader;
+               Pv.readAsDataURL(vv), Pv.onloadend = () => {
+                 const vv = Pv.result;
+                 zv(vv)
+               }
+             }));
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L516-L517` → after: `L429-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L429-L435) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L516-L517)

```diff
-       get canRescale() {
-         return !0
+       static Download(vv, zv) {
+         if ("undefined" === typeof URL) return;
+         const Pv = window.URL.createObjectURL(vv),
+           hv = document.createElement("a");
+         document.body.appendChild(hv), hv.style.display = "none", hv.href = Pv, hv.download = zv, hv.addEventListener("click", (() => {
+           hv.parentElement && hv.parentElement.removeChild(hv)
+         })), hv.click(), window.URL.revokeObjectURL(Pv)
```

#### 24. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L519-L520` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L437-L438) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L519-L520)

```diff
-       _recreate(zz) {
-         this._canvas.width = zz.width, this._canvas.height = zz.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(zz.width, zz.height, this._generateMipMaps, this.samplingMode)
+       static BackCompatCameraNoPreventDefault(vv) {
+         return "boolean" === typeof vv[0] ? vv[0] : "boolean" === typeof vv[1] && vv[1]
```

#### 25. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L522-L524` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L440-L441) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L522-L524)

```diff
-       scale(zz) {
-         const tz = this.getSize();
-         tz.width *= zz, tz.height *= zz, this._recreate(tz)
+       static CreateScreenshot(vv, zv, Pv, hv) {
+         throw (0, Nv.m)("ScreenshotTools")
```

#### 26. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L526-L528` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L443-L444) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L526-L528)

```diff
-       scaleTo(zz, tz) {
-         const sz = this.getSize();
-         sz.width = zz, sz.height = tz, this._recreate(sz)
+       static async CreateScreenshotAsync(vv, zv, Pv) {
+         throw (0, Nv.m)("ScreenshotTools")
```

#### 27. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L530-L531` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L446-L447) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       static CreateScreenshotUsingRenderTarget(vv, zv, Pv, hv) {
+         throw (0, Nv.m)("ScreenshotTools")
```

#### 28. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L533-L535` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L449-L450) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L533-L535)

```diff
-       clear(zz) {
-         const tz = this.getSize();
-         zz && (this._context.fillStyle = zz), this._context.clearRect(0, 0, tz.width, tz.height)
+       static async CreateScreenshotUsingRenderTargetAsync(vv, zv, Pv) {
+         throw (0, Nv.m)("ScreenshotTools")
```

#### 29. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L537-L551` → after: `L452-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L452-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L452-L491) · [Before (L537-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L537-L551)

```diff
-       update(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === zz || zz, tz, this._format || void 0, void 0, sz)
-       }
-       drawText(zz, tz, sz, Fz, Wz, Xz, Oz) {
-         let oz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const vz = this.getSize();
-         if (Xz && (this._context.fillStyle = Xz, this._context.fillRect(0, 0, vz.width, vz.height)), this._context.font = Fz, null === tz || void 0 === tz) {
-           const sz = this._context.measureText(zz);
-           tz = (vz.width - sz.width) / 2
-         }
-         if (null === sz || void 0 === sz) {
-           const zz = parseInt(Fz.replace(/\D/g, ""));
-           sz = vz.height / 2 + zz / 3.65
+       static RandomId() {
+         return (0, sv.b)()
+       }
+       static IsBase64(vv) {
+         return (0, Wv.k)(vv)
+       }
+       static DecodeBase64(vv) {
+         return (0, Wv.e)(vv)
+       }
+       static get errorsCount() {
+         return gv.d.errorsCount
+       }
+       static Log(vv) {
+         gv.d.Log(vv)
+       }
+       static Warn(vv) {
+ ... (24 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L553` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L493) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L553)

```diff
-         this._context.fillStyle = Wz || "", this._context.fillText(zz, tz, sz), oz && this.update(Oz)
+         zv && hv._Performance.mark && hv._Performance.mark(vv + "-Begin")
```

#### 31. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L555-L556` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L495-L496) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L555-L556)

```diff
-       dispose() {
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+       static _EndUserMark(vv) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && hv._Performance.mark && (hv._Performance.mark(vv + "-End"), hv._Performance.measure(vv, vv + "-Begin", vv + "-End"))
```

#### 32. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L558-L563` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L498-L500) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L558-L563)

```diff
-       clone() {
-         const zz = this.aJ();
-         if (!zz) return this;
-         const tz = this.getSize(),
-           sz = new Uz(this.name, tz, zz, this._generateMipMaps);
-         return sz.hasAlpha = this.hasAlpha, sz.level = this.level, sz.wrapU = this.wrapU, sz.wrapV = this.wrapV, sz
+       static _StartPerformanceConsole(vv) {
+         let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         zv && (hv._StartUserMark(vv, zv), console.time && console.time(vv))
```

#### 33. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L565-L569` → after: `L502-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L502-L504) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L565-L569)

```diff
-       serialize() {
-         const zz = this.aJ();
-         zz && !zz.isReady() && Fz.e.Warn("The scene must be ready before serializing the dynamic texture");
-         const tz = super.serialize();
-         return Uz._IsCanvasElement(this._canvas) && (tz.base64String = this._canvas.toDataURL()), tz.invertY = this._invertY, tz.samplingMode = this.samplingMode, tz
+       static _EndPerformanceConsole(vv) {
+         let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         zv && (hv._EndUserMark(vv, zv), console.timeEnd(vv))
```

#### 34. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L571-L572` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L506-L512) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L571-L572)

```diff
-       static _IsCanvasElement(zz) {
-         return void 0 !== zz.toDataURL
+       static _StartMarkNative(vv) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
+           if (hv._NativePerformanceCounterHandles.has(vv)) hv.Warn(`Performance counter with name ${vv} is already started.`);
+           else {
+             const zv = _native.startPerformanceCounter(vv);
+             hv._NativePerformanceCounterHandles.set(vv, zv)
+           }
```

#### 35. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L574-L575` → after: `L514-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L514-L518) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L574-L575)

```diff
-       _rebuild() {
-         this.update()
+       static _EndMarkNative(vv) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const zv = hv._NativePerformanceCounterHandles.get(vv);
+           zv ? (_native.endPerformanceCounter(zv), hv._NativePerformanceCounterHandles.delete(vv)) : hv.Warn(`Performance counter with name ${vv} was not started.`)
+         }
```

#### 36. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L577-L586` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L520-L521) · [Before (L577-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L577-L586)

```diff
-     }
-   },
-   40234: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Wz
-     });
-     var Fz = sz(39617);
-     class Wz extends Fz.g {
-       get depth() {
-         return this._depth
+       static get Now() {
+         return dv.c.Now
```

#### 37. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L588-L595` → after: `L523-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L523-L533) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L588-L595)

```diff
-       constructor(zz, tz, sz, Wz, Xz, Oz) {
-         let oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           vz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Fz.g.TRILINEAR_SAMPLINGMODE,
-           Kz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           uz = arguments.length > 10 ? arguments[10] : void 0,
-           Nz = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, Oz, !oz, vz), this.format = Xz, this._texture = Oz.FD().createRawTexture2DArray(zz, tz, sz, Wz, Xz, oz, vz, Uz, null, Kz, uz ?? 0, Nz), this._depth = Wz, this.is2DArray = !0
+       static GetClassName(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Pv = null;
+         if (!zv && vv.getClassName) Pv = vv.getClassName();
+         else {
+           if (vv instanceof Object) {
+             Pv = (zv ? vv : Object.getPrototypeOf(vv)).constructor.__bjsclassName__
+           }
+           Pv || (Pv = typeof vv)
+         }
+         return Pv
```

#### 38. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L597-L598` → after: `L535-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L535-L538) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L597-L598)

```diff
-       update(zz) {
-         this.updateMipLevel(zz, 0)
+       static First(vv, zv) {
+         for (const Pv of vv)
+           if (zv(Pv)) return Pv;
+         return null
```

#### 39. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L600-L601` → after: `L540-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L540-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L540-L559) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L600-L601)

```diff
-       updateMipLevel(zz, tz) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, zz, this._texture.format, this._texture.invertY, null, this._texture.type, tz)
+       static getFullClassName(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Pv = null,
+           hv = null;
+         if (!zv && vv.getClassName) Pv = vv.getClassName();
+         else {
+           if (vv instanceof Object) {
+             const Sv = zv ? vv : Object.getPrototypeOf(vv);
+             Pv = Sv.constructor.__bjsclassName__, hv = Sv.constructor.__bjsmoduleName__
+           }
+           Pv || (Pv = typeof vv)
+         }
+         return Pv ? (null != hv ? hv + "." : "") + Pv : null
+       }
+       static async DelayAsync(vv) {
+         await new Promise((zv => {
+ ... (4 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L603-L604` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L561-L562) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L603-L604)

```diff
-       static CreateRGBATexture(zz, tz, sz, Fz, Xz) {
-         return new Wz(zz, tz, sz, Fz, 5, Xz, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       static IsSafari() {
+         return !!(0, ev.k)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
```

#### 41. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L607-L620` → after: `L565-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L565-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/247.js#L565-L613) · [Before (L607-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/247.js#L607-L620)

```diff
-   },
-   40225: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Fz.d
-     });
-     var Fz = sz(39515);
-     (0, Fz.g)()
-   },
-   39252: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Fz.i
-     });
-     var Fz = sz(39256);
-     (0, Fz.e)()
+ 
+     function cv(vv, zv) {
+       return Pv => {
+         Pv.__bjsclassName__ = vv, Pv.__bjsmoduleName__ = null != zv ? zv : null
+       }
+     }
+     hv = iv, iv.AssetBaseUrl = "", iv.UseCustomRequestHeaders = !1, iv.CustomRequestHeaders = lv.b.CustomRequestHeaders, iv.GetDOMTextContent = ev.e, iv._DefaultCdnUrl = "https://cdn.babylonjs.com", iv._CdnVersion = "9.28.0", iv._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
+       const zv = document.createElement("a");
+       return zv.href = vv, zv.href
+     } : "function" === typeof URL && "object" === typeof location ? vv => new URL(vv, location.origin).href : () => {
+       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
+     }, iv.NoneLogLevel = gv.d.NoneLogLevel, iv.MessageLogLevel = gv.d.MessageLogLevel, iv.WarningLogLevel = gv.d.WarningLogLevel, iv.ErrorLogLevel = gv.d.ErrorLogLevel, iv.AllLogLevel = gv.d.AllLogLevel, iv.IsWindowObjectExist = ev.l, iv.PerformanceNoneLogLevel = 0, iv.Performanc … [truncated]
+     class Gv {
+       constructor(vv, zv, Pv) {
+         let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.iterations = vv, this.index = hv - 1, this._done = !1, this._fn = zv, this._successCallback = Pv
+ ... (33 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (128 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L4)

```diff
-   39353: (zz, tz, sz) => {
+   39745: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L6)

```diff
-       d: () => Cz
+       b: () => hv
+     });
+     let hv = !1
+   },
+   39287: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => av
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L8-L14` → after: `L14-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L14-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L14-L96) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L8-L14)

```diff
-     var Fz = sz(39167),
-       Wz = sz(39170),
-       Xz = sz(36475),
-       Oz = sz(39362),
-       oz = sz(39402),
-       vz = sz(39331),
-       Uz = sz(39264);
+     var hv = Pv(39295),
+       Sv = Pv(39300),
+       ev = Pv(36618),
+       gv = Pv(36594),
+       pv = Pv(36615),
+       dv = Pv(37431),
+       Nv = Pv(39309);
+     class lv {
+       get wrapU() {
+         return this._wrapU
+       }
+       set wrapU(vv) {
+         this._wrapU = vv
+       }
+       get wrapV() {
+         return this._wrapV
+ ... (67 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L17` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L99-L109) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L17)

```diff
-       let tz, sz, Oz, oz, Kz, uz, Nz, bz, wz, Dz, gz, Hz = [],
+       let zv, Pv, Nv, Tv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, tv, qv = lv,
+         Iv = [],
+         Qv = [],
+         Zv = [],
+         Av = [],
+         Lv = [],
+         Hv = [],
+         Mv = [],
+         yv = [],
+         Bv = [],
+         Jv = [],
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L39-L41` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L131-L133) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L39-L41)

```diff
-       return zz = class {
-         constructor() {
-           this.keysUp = (0, Fz.k)(this, Hz, [38]), this.keysUpward = ((0, Fz.k)(this, Bz), (0, Fz.k)(this, Pz, [33])), this.keysDown = ((0, Fz.k)(this, rz), (0, Fz.k)(this, Yz, [40])), this.keysDownward = ((0, Fz.k)(this, xz), (0, Fz.k)(this, mz, [34])), this.keysLeft = ((0, Fz.k … [truncated]
+       return vv = class extends qv {
+         set hasAlpha(vv) {
+           this._hasAlpha = vv
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L43-L57` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L135-L136) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L43-L57)

```diff
-         attachControl(zz) {
-           zz = Uz.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aJ(), this._engine = this._scene.FD(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((tz => {
-             const sz = tz.event;
-             if (!sz.metaKey)
-               if (tz.type === vz.b.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(sz.keyCode) || -1 !== this.keysDown.indexOf(sz.keyCode) || -1 !== this.keysLeft.indexOf(sz.keyCode) || -1 !== this.keysRight.indexOf(sz.keyCode) || -1 !== this.keysUpward.indexOf(sz.keyCode) || -1 !== this.keysDownward.indexOf(sz.key … [truncated]
-                   -1 === this._keys.indexOf(sz.keyCode) && this._keys.push(sz.keyCode), zz || sz.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(sz.keyCode) || -1 !== this.keysDown.indexOf(sz.keyCode) || -1 !== this.keysLeft.indexOf(sz.keyCode) || -1 !== this.keysRight.indexOf(sz.keyCode) || -1 !== this.keysUpward.indexOf(sz.keyCode) || -1 !== this.keysDownward.indexOf(s … [truncated]
-               const tz = this._keys.indexOf(sz.keyCode);
-               tz >= 0 && this._keys.splice(tz, 1), zz || sz.preventDefault()
-             }
-           })))
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L59-L60` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L138-L139) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         set getAlphaFromRGB(vv) {
+           this._getAlphaFromRGB !== vv && (this._getAlphaFromRGB = vv, this._scene && this._scene.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L62-L76` → after: `L141-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L141-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L141-L195) · [Before (L62-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L62-L76)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const zz = this.camera,
-               tz = zz.movement.input,
-               sz = tz.getEntry("keyboard", "translate"),
-               Fz = tz.getEntry("keyboard", "rotate"),
-               Wz = Fz?.sensitivity ?? 1,
-               Oz = zz._localDirection.m_(0, 0, 0);
-             for (let Xz = 0; Xz < this._keys.length; Xz++) {
-               const tz = this._keys[Xz]; - 1 !== this.keysLeft.indexOf(tz) ? Oz.x -= 1 : -1 !== this.keysUp.indexOf(tz) ? Oz.z += 1 : -1 !== this.keysRight.indexOf(tz) ? Oz.x += 1 : -1 !== this.keysDown.indexOf(tz) ? Oz.z -= 1 : -1 !== this.keysUpward.indexOf(tz) ? Oz.y += 1 : -1 … [truncated]
-             }
-             if (sz && (0 !== Oz.x || 0 !== Oz.y || 0 !== Oz.z)) {
-               const tz = zz._computeLocalCameraSpeed() * (sz.sensitivity ?? 1);
-               Oz.normalize().scaleInPlace(tz), zz.aJ().useRightHandedSystem && (Oz.z *= -1), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), Xz.p.TransformNormalToRef(Oz, zz._cameraTransformMatrix, zz._transformedDirection), zz.cameraDirection.addInPlace(zz._transforme … [truncated]
-             }
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
+         }
+         set coordinatesIndex(vv) {
+           this._coordinatesIndex !== vv && (this._coordinatesIndex = vv, this._scene && this._scene.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(vv) {
+           this._coordinatesMode !== vv && (this._coordinatesMode = vv, this._scene && this._scene.markAllMaterialsAsDirty(1, (vv => vv.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+ ... (39 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L80` → after: `L239-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L239-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L239-L264) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L80)

```diff
-           return "FreeCameraKeyboardMoveInput"
+           return "BaseTexture"
+         }
+         set onDispose(vv) {
+           this._onDisposeObserver && this.uD.remove(this._onDisposeObserver), this._onDisposeObserver = this.uD.add(vv)
+         }
+         get isBlocking() {
+           return !0
+         }
+         get loadingError() {
+           return this._loadingError
+         }
+         get errorObject() {
+           return this._errorObject
+         }
+         constructor(zv) {
+           let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L82-L83` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L266-L267) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+         getReflectionTextureMatrix() {
+           return gv.c.IdentityReadOnly
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L85-L86` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L269-L270) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+         getRefractionTextureMatrix() {
+           return this.getReflectionTextureMatrix()
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L88-L90` → after: `L272-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L272-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L272-L387) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const zz = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * zz
+         isReadyOrNotBlocking() {
+           return !this.isBlocking || this.isReady() || this.loadingError
+         }
+         scale(vv) {}
+         get canRescale() {
+           return !1
+         }
+         _getFromCache(vv, zv, Pv, hv, Sv, ev) {
+           const gv = this._getEngine();
+           if (!gv) return null;
+           const pv = gv._getUseSRGBBuffer(!!Sv, zv),
+             dv = gv.getLoadedTexturesCache();
+           for (let Nv = 0; Nv < dv.length; Nv++) {
+             const gv = dv[Nv];
+             if ((void 0 === Sv || pv === gv._useSRGBBuffer) && (void 0 === hv || hv === gv.invertY) && gv.url === vv && gv.generateMipMaps === !zv && (!Pv || Pv === gv.samplingMode) && (void 0 === ev || ev === gv.isCube)) return gv.incrementReferences(), gv
+           }
+ ... (100 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L93-L96` → after: `L390-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L390-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L390-L393) · [Before (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L93-L96)

```diff
-         const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Oz = [(0, Wz.J)()], oz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], bz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Dz = [(0, Wz.J)()], gz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
-           kind: "field",
-           name: "keysUp",
+         const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(qv[Symbol.metadata] ?? null) : void 0;
+         zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], wv = [(0, Sv.L)("hasAlpha")], av = [(0, Sv.L)("getAlphaFromRGB")], sv = [(0, Sv.L)()], Cv = [(0, Sv.L)("coordinatesIndex")], iv = [(0, Sv.L)()], cv = [(0, Sv.L)("coordinatesMode")], Gv = [(0,  … [truncated]
+           kind: "getter",
+           name: "wrapU",
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L100-L104` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L397-L398) · [Before (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L100-L104)

```diff
-             has: zz => "keysUp" in zz,
-             get: zz => zz.keysUp,
-             set: (zz, tz) => {
-               zz.keysUp = tz
-             }
+             has: vv => "wrapU" in vv,
+             get: vv => vv.wrapU
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L107-L109` → after: `L401-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L401-L403) · [Before (L107-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L107-L109)

```diff
-         }, Hz, Bz), (0, Fz.h)(null, null, sz, {
-           kind: "field",
-           name: "keysUpward",
+         }, null, Iv), (0, hv.e)(vv, null, mv, {
+           kind: "getter",
+           name: "wrapV",
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L113-L117` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L407-L408) · [Before (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L113-L117)

```diff
-             has: zz => "keysUpward" in zz,
-             get: zz => zz.keysUpward,
-             set: (zz, tz) => {
-               zz.keysUpward = tz
-             }
+             has: vv => "wrapV" in vv,
+             get: vv => vv.wrapV
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L120-L122` → after: `L411-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L411-L413) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L120-L122)

```diff
-         }, Pz, rz), (0, Fz.h)(null, null, Oz, {
-           kind: "field",
-           name: "keysDown",
+         }, null, Iv), (0, hv.e)(vv, null, Fv, {
+           kind: "getter",
+           name: "isCube",
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L126-L130` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L417-L418) · [Before (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L126-L130)

```diff
-             has: zz => "keysDown" in zz,
-             get: zz => zz.keysDown,
-             set: (zz, tz) => {
-               zz.keysDown = tz
-             }
+             has: vv => "isCube" in vv,
+             get: vv => vv.isCube
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L133-L135` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L421-L423) · [Before (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L133-L135)

```diff
-         }, Yz, xz), (0, Fz.h)(null, null, oz, {
-           kind: "field",
-           name: "keysDownward",
+         }, null, Iv), (0, hv.e)(vv, null, Yv, {
+           kind: "getter",
+           name: "is3D",
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L139-L143` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L427-L428) · [Before (L139-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L139-L143)

```diff
-             has: zz => "keysDownward" in zz,
-             get: zz => zz.keysDownward,
-             set: (zz, tz) => {
-               zz.keysDownward = tz
-             }
+             has: vv => "is3D" in vv,
+             get: vv => vv.is3D
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L146-L148` → after: `L431-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L431-L433) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L146-L148)

```diff
-         }, mz, Jz), (0, Fz.h)(null, null, Kz, {
-           kind: "field",
-           name: "keysLeft",
+         }, null, Iv), (0, hv.e)(vv, null, nv, {
+           kind: "getter",
+           name: "is2DArray",
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L152-L156` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L437-L438) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L152-L156)

```diff
-             has: zz => "keysLeft" in zz,
-             get: zz => zz.keysLeft,
-             set: (zz, tz) => {
-               zz.keysLeft = tz
-             }
+             has: vv => "is2DArray" in vv,
+             get: vv => vv.is2DArray
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L159-L161` → after: `L441-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L441-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L441-L443) · [Before (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L159-L161)

```diff
-         }, Iz, Cz), (0, Fz.h)(null, null, uz, {
-           kind: "field",
-           name: "keysRight",
+         }, null, Iv), (0, hv.e)(vv, null, Ov, {
+           kind: "getter",
+           name: "gammaSpace",
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L165-L169` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L447-L448) · [Before (L165-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L165-L169)

```diff
-             has: zz => "keysRight" in zz,
-             get: zz => zz.keysRight,
-             set: (zz, tz) => {
-               zz.keysRight = tz
-             }
+             has: vv => "gammaSpace" in vv,
+             get: vv => vv.gammaSpace
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L172-L174` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L451-L453) · [Before (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L172-L174)

```diff
-         }, ez, Zz), (0, Fz.h)(null, null, Nz, {
-           kind: "field",
-           name: "rotationSpeed",
+         }, null, Iv), (0, hv.e)(vv, null, Vv, {
+           kind: "getter",
+           name: "lodGenerationOffset",
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L178-L182` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L457-L458) · [Before (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L178-L182)

```diff
-             has: zz => "rotationSpeed" in zz,
-             get: zz => zz.rotationSpeed,
-             set: (zz, tz) => {
-               zz.rotationSpeed = tz
-             }
+             has: vv => "lodGenerationOffset" in vv,
+             get: vv => vv.lodGenerationOffset
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L185-L187` → after: `L461-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L461-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L461-L463) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L185-L187)

```diff
-         }, Gz, Tz), (0, Fz.h)(null, null, bz, {
-           kind: "field",
-           name: "keysRotateLeft",
+         }, null, Iv), (0, hv.e)(vv, null, Uv, {
+           kind: "getter",
+           name: "lodGenerationScale",
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L191-L195` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L467-L468) · [Before (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L191-L195)

```diff
-             has: zz => "keysRotateLeft" in zz,
-             get: zz => zz.keysRotateLeft,
-             set: (zz, tz) => {
-               zz.keysRotateLeft = tz
-             }
+             has: vv => "lodGenerationScale" in vv,
+             get: vv => vv.lodGenerationScale
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L198-L200` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L471-L473) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L198-L200)

```diff
-         }, cz, jz), (0, Fz.h)(null, null, wz, {
-           kind: "field",
-           name: "keysRotateRight",
+         }, null, Iv), (0, hv.e)(vv, null, Rv, {
+           kind: "getter",
+           name: "linearSpecularLOD",
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L204-L208` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L477-L478) · [Before (L204-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L204-L208)

```diff
-             has: zz => "keysRotateRight" in zz,
-             get: zz => zz.keysRotateRight,
-             set: (zz, tz) => {
-               zz.keysRotateRight = tz
-             }
+             has: vv => "linearSpecularLOD" in vv,
+             get: vv => vv.linearSpecularLOD
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L211-L213` → after: `L481-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L481-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L481-L483) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L211-L213)

```diff
-         }, Az, yz), (0, Fz.h)(null, null, Dz, {
-           kind: "field",
-           name: "keysRotateUp",
+         }, null, Iv), (0, hv.e)(vv, null, xv, {
+           kind: "getter",
+           name: "irradianceTexture",
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L217-L221` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L487-L488) · [Before (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L217-L221)

```diff
-             has: zz => "keysRotateUp" in zz,
-             get: zz => zz.keysRotateUp,
-             set: (zz, tz) => {
-               zz.keysRotateUp = tz
-             }
+             has: vv => "irradianceTexture" in vv,
+             get: vv => vv.irradianceTexture
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L224` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L491) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L224)

```diff
-         }, Mz, dz), (0, Fz.h)(null, null, gz, {
+         }, null, Iv), (0, hv.e)(null, null, zv, {
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L226` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L493) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L226)

```diff
-           name: "keysRotateDown",
+           name: "uniqueId",
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L230-L231` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L497-L498) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L230-L231)

```diff
-             has: zz => "keysRotateDown" in zz,
-             get: zz => zz.keysRotateDown,
+             has: vv => "uniqueId" in vv,
+             get: vv => vv.uniqueId,
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L233` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L500) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L233)

```diff
-               zz.keysRotateDown = tz
+               vv.uniqueId = zv
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L237-L333` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L504) · [Before (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L237-L333)

```diff
-         }, hz, Qz), Xz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Xz
-         })
-       })(), zz
-     })();
-     oz.e.FreeCameraKeyboardMoveInput = Kz;
-     var uz = sz(36505),
-       Nz = sz(39328);
-     let bz = (() => {
-       var zz;
-       let tz, sz, Xz = [],
-         Oz = [],
-         oz = [],
- ... (81 more removed lines; see GitHub link above)
+         }, Qv, Zv), (0, hv.e)(null, null, Pv, {
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L335` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L506) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L335)

```diff
-           name: "buttons",
+           name: "name",
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L339-L340` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L510-L511) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L339-L340)

```diff
-             has: zz => "buttons" in zz,
-             get: zz => zz.buttons,
+             has: vv => "name" in vv,
+             get: vv => vv.name,
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L342` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L513) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L342)

```diff
-               zz.buttons = tz
+               vv.name = zv
```

#### 41. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L346` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L517) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L346)

```diff
-         }, Xz, Oz), (0, Fz.h)(null, null, sz, {
+         }, Av, Lv), (0, hv.e)(null, null, Nv, {
```

#### 42. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L348` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L519) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L348)

```diff
-           name: "angularSensibility",
+           name: "displayName",
```

#### 43. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L352-L353` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L523-L524) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L352-L353)

```diff
-             has: zz => "angularSensibility" in zz,
-             get: zz => zz.angularSensibility,
+             has: vv => "displayName" in vv,
+             get: vv => vv.displayName,
```

#### 44. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L355` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L526) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L355)

```diff
-               zz.angularSensibility = tz
+               vv.displayName = zv
```

#### 45. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L359-L407` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L530) · [Before (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L359-L407)

```diff
-         }, oz, vz), Uz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Uz
-         })
-       })(), zz
-     })();
-     oz.e.FreeCameraMouseInput = bz;
-     var wz = sz(39337);
-     let Dz = (() => {
-       var zz;
-       let tz, sz, Xz, Oz = [],
-         oz = [],
-         vz = [],
-         Kz = [],
- ... (33 more removed lines; see GitHub link above)
+         }, Hv, Mv), (0, hv.e)(null, null, Tv, {
```

#### 46. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L409` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L532) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L409)

```diff
-           name: "wheelPrecisionX",
+           name: "metadata",
```

#### 47. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L413-L414` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L536-L537) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L413-L414)

```diff
-             has: zz => "wheelPrecisionX" in zz,
-             get: zz => zz.wheelPrecisionX,
+             has: vv => "metadata" in vv,
+             get: vv => vv.metadata,
```

#### 48. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L416` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L539) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L416)

```diff
-               zz.wheelPrecisionX = tz
+               vv.metadata = zv
```

#### 49. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L420` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L543) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L420)

```diff
-         }, Oz, oz), (0, Fz.h)(null, null, sz, {
+         }, yv, Bv), (0, hv.e)(null, null, wv, {
```

#### 50. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L422` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L545) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L422)

```diff
-           name: "wheelPrecisionY",
+           name: "_hasAlpha",
```

#### 51. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L426-L427` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L549-L550) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L426-L427)

```diff
-             has: zz => "wheelPrecisionY" in zz,
-             get: zz => zz.wheelPrecisionY,
+             has: vv => "_hasAlpha" in vv,
+             get: vv => vv._hasAlpha,
```

#### 52. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L429` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L552) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L429)

```diff
-               zz.wheelPrecisionY = tz
+               vv._hasAlpha = zv
```

#### 53. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L433` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L556) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L433)

```diff
-         }, vz, Kz), (0, Fz.h)(null, null, Xz, {
+         }, Jv, Ev), (0, hv.e)(null, null, av, {
```

#### 54. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L435` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L558) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L435)

```diff
-           name: "wheelPrecisionZ",
+           name: "_getAlphaFromRGB",
```

#### 55. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L439-L440` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L562-L563) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L439-L440)

```diff
-             has: zz => "wheelPrecisionZ" in zz,
-             get: zz => zz.wheelPrecisionZ,
+             has: vv => "_getAlphaFromRGB" in vv,
+             get: vv => vv._getAlphaFromRGB,
```

#### 56. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L442` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L565) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L442)

```diff
-               zz.wheelPrecisionZ = tz
+               vv._getAlphaFromRGB = zv
```

#### 57. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L446-L587` → after: `L569-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L569-L571) · [Before (L446-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L446-L587)

```diff
-         }, bz, Dz), Uz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Uz
-         })
-       })(), zz
-     })();
-     var gz;
-     ! function(zz) {
-       zz[zz.MoveRelative = 0] = "MoveRelative", zz[zz.RotateRelative = 1] = "RotateRelative", zz[zz.MoveScene = 2] = "MoveScene"
-     }(gz || (gz = {}));
-     let Hz = (() => {
-       var zz;
-       let tz, sz, Oz, oz, vz, Uz, Kz, uz, Nz, bz = Dz,
-         wz = [];
- ... (126 more removed lines; see GitHub link above)
+         }, ov, bv), (0, hv.e)(null, null, sv, {
+           kind: "field",
+           name: "level",
```

#### 58. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L591` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L575-L576) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L591)

```diff
-             has: zz => "wheelZMoveRelative" in zz,
+             has: vv => "level" in vv,
+             get: vv => vv.level,
```

#### 59. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L593` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/248.js#L578) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/248.js#L593)

```diff
-               zz.wheelZMoveRelative = tz
+               vv.level = zv
```
