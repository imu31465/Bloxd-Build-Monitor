# Changed — Bundle Modifications Report (Part 025 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `25 / 67` (**290** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 024](part-024.md) · [Part 026 →](part-026.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1079-L1083` → after: `L701-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L701-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L701-L728) · [Before (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1079-L1083)

```diff
- 
-     function Ls(zz, tz, sz) {
-       const Fz = zz.ib(392, tz, 4);
-       if (Fz < 0) return !1;
-       return zz.view.setUint32(Fz + 0, sz, !0), !0
+     async function Oz(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yz,
+         Pv = arguments.length > 2 ? arguments[2] : void 0;
+       const {
+         appId: hv,
+         apiKey: Sv,
+         measurementId: ev
+       } = vv.options;
+       if (!hv) throw Gz.create("no-app-id");
+       if (!Sv) {
+         if (ev) return {
+           measurementId: ev,
+           appId: hv
+         };
+         throw Gz.create("no-api-key")
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1085-L1090` → after: `L730-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L730-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L730-L803) · [Before (L1085-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1085-L1090)

```diff
- 
-     function ls(zz, tz, sz, Fz, Wz) {
-       const Xz = zz.ib(393, tz, 12);
-       if (Xz < 0) return !1;
-       const Oz = zz.view;
-       return Oz.setUint32(Xz + 0, sz, !0), Oz.setUint16(Xz + 4, Fz, !0), Oz.setFloat32(Xz + 8, Wz, !0), !0
+     async function Dz(vv, zv, Pv) {
+       let {
+         throttleEndTimeMillis: hv,
+         backoffCount: Sv
+       } = zv, gv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yz;
+       var pv;
+       const {
+         appId: dv,
+         measurementId: Nv
+       } = vv;
+       try {
+         await
+         function(vv, zv) {
+           return new Promise(((Pv, hv) => {
+             const Sv = Math.max(zv - Date.now(), 0),
+               ev = setTimeout(Pv, Sv);
+ ... (58 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1092-L1099` → after: `L805-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L805-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L805-L814) · [Before (L1092-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1092-L1099)

```diff
- 
-     function ns(zz, tz, sz, Fz, Wz, Xz, Oz) {
-       const oz = zz.ib(394, tz, 36);
-       if (oz < 0) return !1;
-       const vz = zz.view;
-       vz.setUint32(oz + 0, sz, !0), vz.setUint16(oz + 4, Fz, !0), vz.setUint8(oz + 6, Wz);
-       for (let Uz = 0; Uz < 3; Uz++) vz.setFloat64(oz + 8 + 8 * Uz, Xz[Uz], !0);
-       return vz.setFloat32(oz + 32, Oz, !0), !0
+     class Kz {
+       constructor() {
+         this.listeners = []
+       }
+       addEventListener(vv) {
+         this.listeners.push(vv)
+       }
+       abort() {
+         this.listeners.forEach((vv => vv()))
+       }
```

#### 34. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1102-L1105` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L818-L819) · [Before (L1102-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1102-L1105)

```diff
-     function as(zz, tz, sz) {
-       const Fz = zz.ib(398, tz, 4);
-       if (Fz < 0) return !1;
-       return zz.view.setUint32(Fz + 0, sz, !0), !0
+     function Rz(vv) {
+       Uz = vv
```

#### 35. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1108-L1111` → after: `L822-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L822-L823) · [Before (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1108-L1111)

```diff
-     function qs(zz, tz, sz) {
-       const Fz = zz.ib(448, tz, 4);
-       if (Fz < 0) return !1;
-       return zz.view.setFloat32(Fz + 0, sz, !0), !0
+     function xz(vv) {
+       Vz = vv
```

#### 36. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1113-L1119` → after: `L825-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L825-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L825-L851) · [Before (L1113-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1113-L1119)

```diff
- 
-     function Ss(zz, tz, sz, Fz) {
-       const Wz = zz.ib(450, tz, 12);
-       if (Wz < 0) return !1;
-       const Xz = zz.view;
-       for (let Oz = 0; Oz < 2; Oz++) Xz.setFloat32(Wz + 0 + 4 * Oz, sz[Oz], !0);
-       return Xz.setUint8(Wz + 8, Fz), !0
+     async function tz(vv, zv, Pv, hv, Sv, gv, pv) {
+       var dv;
+       const Nv = Oz(vv);
+       Nv.then((zv => {
+         Pv[zv.measurementId] = zv.appId, vv.options.measurementId && zv.measurementId !== vv.options.measurementId && iz.warn(`The measurement ID in the local Firebase config (${vv.options.measurementId}) does not match the measurement ID fetched from the server (${zv.measurement … [truncated]
+       })).catch((vv => iz.error(vv))), zv.push(Nv);
+       const lv = async function() {
+         if (!(0, ev.X)()) return iz.warn(Gz.create("indexeddb-unavailable", {
+           errorInfo: "IndexedDB is not available in this environment."
+         }).message), !1;
+         try {
+           await (0, ev.ib)()
+         } catch (vv) {
+           return iz.warn(Gz.create("indexeddb-unavailable", {
+             errorInfo: null === vv || void 0 === vv ? void 0 : vv.toString()
+           }).message), !1
+ ... (11 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1121-L1126` → after: `L853-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L853-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L853-L859) · [Before (L1121-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1121-L1126)

```diff
- 
-     function Vs(zz, tz, sz, Fz) {
-       const Wz = zz.ib(452, tz, 8);
-       if (Wz < 0) return !1;
-       const Xz = zz.view;
-       return Xz.setFloat32(Wz + 0, sz, !0), Xz.setUint8(Wz + 4, Fz), !0
+     class qz {
+       constructor(vv) {
+         this.app = vv
+       }
+       _delete() {
+         return delete Iz[this.app.options.appId], Promise.resolve()
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1129-L1133` → after: `L868-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L868-L870) · [Before (L1129-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1129-L1133)

```diff
-     function Rs(zz, tz, sz, Fz, Wz) {
-       const Xz = zz.ib(454, tz, 4);
-       if (Xz < 0) return !1;
-       const Oz = zz.view;
-       return Oz.setUint8(Xz + 0, sz), Oz.setUint8(Xz + 1, Fz), Oz.setUint8(Xz + 2, Wz), !0
+     function Bz(vv) {
+       if (yz) throw Gz.create("already-initialized");
+       vv.dataLayerName && (Hz = vv.dataLayerName), vv.gtagName && (Mz = vv.gtagName)
```

#### 39. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1136-L1141` → after: `L873-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L873-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L873-L914) · [Before (L1136-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1136-L1141)

```diff
-     function ps(zz, tz, sz, Fz) {
-       const Wz = zz.ib(455, tz, 40);
-       if (Wz < 0) return !1;
-       const Xz = zz.view;
-       for (let Oz = 0; Oz < 9; Oz++) Xz.setInt32(Wz + 0 + 4 * Oz, sz[Oz], !0);
-       return Xz.setUint32(Wz + 36, Fz, !0), !0
+     function Jz(vv, zv, Pv) {
+       ! function() {
+         const vv = [];
+         if ((0, ev.P)() && vv.push("This is a browser extension environment."), (0, ev.l)() || vv.push("Cookies are not available."), vv.length > 0) {
+           const zv = vv.map(((vv, zv) => `(${zv+1}) ${vv}`)).join(" "),
+             Pv = Gz.create("invalid-analytics-context", {
+               errorInfo: zv
+             });
+           iz.warn(Pv.message)
+         }
+       }();
+       const hv = vv.options.appId;
+       if (!hv) throw Gz.create("no-app-id");
+       if (!vv.options.apiKey) {
+         if (!vv.options.measurementId) throw Gz.create("no-api-key");
+         iz.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${vv.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+ ... (26 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1144-L1148` → after: `L917-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L917-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L917-L921) · [Before (L1144-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1144-L1148)

```diff
-     function fs(zz, tz, sz, Fz) {
-       const Wz = zz.ib(456, tz, 8);
-       if (Wz < 0) return !1;
-       const Xz = zz.view;
-       return Xz.setFloat32(Wz + 0, sz, !0), Xz.setUint8(Wz + 4, Fz), !0
+     function Ez() {
+       let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
+       vv = (0, ev.J)(vv);
+       const zv = (0, hv.A)(vv, sz);
+       return zv.isInitialized() ? zv.getImmediate() : oz(vv)
```

#### 41. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1151-L1157` → after: `L924-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L924-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L924-L934) · [Before (L1151-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1151-L1157)

```diff
-     function Es(zz, tz, sz, Fz, Wz) {
-       const Xz = zz.ib(457, tz, 16);
-       if (Xz < 0) return !1;
-       const Oz = zz.view;
-       for (let oz = 0; oz < 3; oz++) Oz.setInt32(Xz + 0 + 4 * oz, sz[oz], !0);
-       for (let oz = 0; oz < 3; oz++) Oz.setInt8(Xz + 12 + 1 * oz, Fz[oz]);
-       return Oz.setUint8(Xz + 15, Wz), !0
+     function oz(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const Pv = (0, hv.A)(vv, sz);
+       if (Pv.isInitialized()) {
+         const vv = Pv.getImmediate();
+         if ((0, ev.w)(zv, Pv.getOptions())) return vv;
+         throw Gz.create("already-initialized")
+       }
+       return Pv.initialize({
+         options: zv
+       })
```

#### 42. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1159-L1164` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L936-L944) · [Before (L1159-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1159-L1164)

```diff
- 
-     function zF(zz, tz, sz, Fz) {
-       const Wz = zz.ib(530, tz, 4 + Fz.length);
-       if (Wz < 0) return !1;
-       const Xz = zz.view;
-       return Xz.setUint8(Wz + 0, sz), Ns(Xz).set(Fz, Xz.byteOffset + Wz + 4), !0
+     async function bz() {
+       if ((0, ev.P)()) return !1;
+       if (!(0, ev.l)()) return !1;
+       if (!(0, ev.X)()) return !1;
+       try {
+         return await (0, ev.ib)()
+       } catch (vv) {
+         return !1
+       }
```

#### 43. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1167-L1171` → after: `L947-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L947-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L947-L966) · [Before (L1167-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1167-L1171)

```diff
-     function tF(zz, tz, sz, Fz, Wz, Xz) {
-       const Oz = zz.ib(531, tz, 12 + Xz.length);
-       if (Oz < 0) return !1;
-       const oz = zz.view;
-       return oz.setFloat32(Oz + 0, sz, !0), oz.setFloat32(Oz + 4, Fz, !0), oz.setUint32(Oz + 8, Wz, !0), Ns(oz).set(Xz, oz.byteOffset + Oz + 12), !0
+     function rz(vv, zv, Pv) {
+       vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv) {
+         if (hv && hv.global) return vv("set", {
+           screen_name: Pv
+         }), Promise.resolve();
+         vv("config", await zv, {
+           update: !0,
+           screen_name: Pv
+         })
+       }(Lz, Iz[vv.app.options.appId], zv, Pv).catch((vv => iz.error(vv)))
+     }
+     async function kz(vv) {
+       return vv = (0, ev.J)(vv), async function(vv, zv) {
+         const Pv = await zv;
+         return new Promise(((zv, hv) => {
+           vv("get", Pv, "client_id", (vv => {
+ ... (4 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1174-L1178` → after: `L969-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L969-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L969-L978) · [Before (L1174-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1174-L1178)

```diff
-     function sF(zz, tz, sz, Fz, Wz, Xz) {
-       const Oz = zz.ib(532, tz, 12 + Xz.length);
-       if (Oz < 0) return !1;
-       const oz = zz.view;
-       return oz.setInt32(Oz + 0, sz, !0), oz.setInt32(Oz + 4, Fz, !0), oz.setUint32(Oz + 8, Wz, !0), Ns(oz).set(Xz, oz.byteOffset + Oz + 12), !0
+     function Xz(vv, zv, Pv) {
+       vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv) {
+         if (hv && hv.global) return vv("set", {
+           user_id: Pv
+         }), Promise.resolve();
+         vv("config", await zv, {
+           update: !0,
+           user_id: Pv
+         })
+       }(Lz, Iz[vv.app.options.appId], zv, Pv).catch((vv => iz.error(vv)))
```

#### 45. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1181-L1185` → after: `L981-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L981-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L981-L992) · [Before (L1181-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1181-L1185)

```diff
-     function FF(zz, tz, sz, Fz, Wz) {
-       const Xz = zz.ib(533, tz, 8 + Wz.length);
-       if (Xz < 0) return !1;
-       const Oz = zz.view;
-       return Oz.setInt32(Xz + 0, sz, !0), Oz.setInt32(Xz + 4, Fz, !0), Ns(Oz).set(Wz, Oz.byteOffset + Xz + 8), !0
+     function uz(vv, zv, Pv) {
+       vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv) {
+         if (hv && hv.global) {
+           const zv = {};
+           for (const vv of Object.keys(Pv)) zv[`user_properties.${vv}`] = Pv[vv];
+           return vv("set", zv), Promise.resolve()
+         }
+         vv("config", await zv, {
+           update: !0,
+           user_properties: Pv
+         })
+       }(Lz, Iz[vv.app.options.appId], zv, Pv).catch((vv => iz.error(vv)))
```

#### 46. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1189` → after: `L996-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L996-L999) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1189)

```diff
-       return !(zz.ib(576, tz, 0) < 0)
+       vv = (0, ev.J)(vv), async function(vv, zv) {
+         const Pv = await vv;
+         window[`ga-disable-${Pv}`] = !zv
+       }(Iz[vv.app.options.appId], zv).catch((vv => iz.error(vv)))
```

#### 47. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1192-L1199` → after: `L1002-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L1002-L1003) · [Before (L1192-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1192-L1199)

```diff
-     function XF(zz, tz, sz, Fz, Wz, Xz) {
-       const Oz = zz.ib(577, tz, 36 + Xz.length);
-       if (Oz < 0) return !1;
-       const oz = zz.view;
-       oz.setUint8(Oz + 0, sz);
-       for (let vz = 0; vz < 16; vz++) oz.setUint8(Oz + 4 + 1 * vz, Fz[vz]);
-       for (let vz = 0; vz < 16; vz++) oz.setUint8(Oz + 20 + 1 * vz, Wz[vz]);
-       return Ns(oz).set(Xz, oz.byteOffset + Oz + 36), !0
+     function zP(vv) {
+       Lz ? Lz("set", vv) : xz(vv)
```

#### 48. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1203-L1206` → after: `L1007-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1007-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L1007-L1015) · [Before (L1203-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1203-L1206)

```diff
-       const Wz = zz.ib(578, tz, 4 + Fz.length);
-       if (Wz < 0) return !1;
-       const Xz = zz.view;
-       return Xz.setUint8(Wz + 0, sz), Ns(Xz).set(Fz, Xz.byteOffset + Wz + 4), !0
+       vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv, Sv) {
+         if (Sv && Sv.global) vv("event", Pv, hv);
+         else {
+           const Sv = await zv;
+           vv("event", Pv, Object.assign(Object.assign({}, hv), {
+             send_to: Sv
+           }))
+         }
+       }(Lz, Iz[vv.app.options.appId], zv, Pv, hv).catch((vv => iz.error(vv)))
```

#### 49. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1209-L1213` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L1018-L1019) · [Before (L1209-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1209-L1213)

```diff
-     function oF(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
-       const vz = zz.ib(579, tz, 36);
-       if (vz < 0) return !1;
-       const Uz = zz.view;
-       return Uz.setFloat64(vz + 0, sz, !0), Uz.setFloat64(vz + 8, Fz, !0), Uz.setFloat64(vz + 16, Wz, !0), Uz.setFloat64(vz + 24, Xz, !0), Uz.setUint16(vz + 32, Oz, !0), Uz.setUint8(vz + 34, oz), !0
+     function hP(vv) {
+       Lz ? Lz("consent", "update", vv) : Rz(vv)
```

#### 50. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1215-L1217` → after: `L1021-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1021-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L1021-L1037) · [Before (L1215-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1215-L1217)

```diff
-     class vF {
-       constructor(zz, tz) {
-         this.core = zz, this.afterCall = tz
+     const SP = "@firebase/analytics",
+       eP = "0.10.0";
+     (0, hv.D)(new gv.h(sz, ((vv, zv) => {
+       let {
+         options: Pv
+       } = zv;
+       return Jz(vv.getProvider("app").getImmediate(), vv.getProvider("installations-internal").getImmediate(), Pv)
+     }), "PUBLIC")), (0, hv.D)(new gv.h("analytics-internal", (function(vv) {
+       try {
+         const zv = vv.getProvider(sz).getImmediate();
+         return {
+           logEvent: (vv, Pv, hv) => PP(zv, vv, Pv, hv)
+         }
+       } catch (zv) {
+         throw Gz.create("interop-component-reg-failed", {
+           reason: zv
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1219-L1359` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/259.js#L1039) · [Before (L1219-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/259.js#L1219-L1359)

```diff
-       canModify(zz, tz, sz) {
-         const Fz = this.core.EWz(zz, tz, sz);
-         return this.afterCall(), Fz
-       }
-       terrainBlocked(zz, tz, sz, Fz, Wz) {
-         const Xz = this.core.aXz(zz, tz, sz, Fz, Wz);
-         return this.afterCall(), Xz
-       }
-       HJ(zz, tz, sz, Fz) {
-         const Wz = this.core.xb(zz, tz, sz, Fz);
-         return this.afterCall(), Wz
-       }
-       blockData(zz, tz, sz) {
-         const Fz = this.core.RWz(zz, tz, sz);
-         return this.afterCall(), Fz
-       }
- ... (125 more removed lines; see GitHub link above)
+     }), "PRIVATE")), (0, hv.S)(SP, eP), (0, hv.S)(SP, eP, "esm2017")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4-L42` → after: `L5-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L5-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L5-L99) · [Before (L4-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L4-L42)

```diff
-   39861: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Xz,
-       e: () => Oz
-     });
-     var Fz = sz(1868);
-     let Wz = !1;
- 
-     function Xz() {
-       Wz = !0
-     }
- 
-     function Oz() {
-       Wz && (Wz = !1, (0, Fz.b)())
-     }
-   },
- ... (23 more removed lines; see GitHub link above)
+     39840: (vv, zv, Pv) => {
+         Pv.r(zv), Pv.d(zv, {
+           ActionCodeOperation: () => Wv,
+           ActionCodeURL: () => kz,
+           AuthCredential: () => Zz,
+           AuthErrorCodes: () => iv,
+           EmailAuthCredential: () => Jz,
+           EmailAuthProvider: () => uz,
+           FacebookAuthProvider: () => hP,
+           FactorId: () => dv,
+           GithubAuthProvider: () => eP,
+           GoogleAuthProvider: () => SP,
+           OAuthCredential: () => oz,
+           OAuthProvider: () => PP,
+           OperationType: () => Tv,
+           PhoneAuthCredential: () => rz,
+ ... (79 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L44-L167` → after: `L101-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L101-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L101-L423) · [Before (L44-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L44-L167)

```diff
-         }(tz.split(Fz.o), sz, Xz)
-       }), (zz => {
-         throw Xz = null, zz
-       })), Xz
-     }
- 
-     function oz(zz) {
-       var tz, sz;
-       return null !== (tz = null === (sz = Wz) || void 0 === sz ? void 0 : sz.has(zz)) && void 0 !== tz && tz
-     }
-   },
-   39853: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       loadIcons: () => ez,
-       setIconFileOverrides: () => Zz,
-       wasmIconLookups: () => hz,
- ... (108 more removed lines; see GitHub link above)
+         }
+         Object.create;
+         Object.create;
+         "function" === typeof SuppressedError && SuppressedError;
+         var gv = Pv(39836),
+           pv = Pv(39822);
+         const dv = {
+             PHONE: "phone",
+             TOTP: "totp"
+           },
+           Nv = {
+             FACEBOOK: "facebook.com",
+             GITHUB: "github.com",
+             GOOGLE: "google.com",
+             PASSWORD: "password",
+             PHONE: "phone",
+ ... (307 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L169-L187` → after: `L425-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L425-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L425-L589) · [Before (L169-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L169-L187)

```diff
-           let {
-             name: Fz,
-             size: Wz,
-             lineWidth: Xz
-           } = zz;
-           await ez();
-           const oz = null !== (tz = Az(Fz)) && void 0 !== tz ? tz : Fz,
-             Uz = (0, gz.b)(oz, Wz, Xz);
-           if (null !== Uz) return Uz;
-           const Kz = bz(oz),
-             uz = (0, vz.b)(oz),
-             Nz = void 0 === uz || null === rz ? void 0 : rz.itemTypeNameOf(uz);
-           if (null === Pz || void 0 === Kz) return "";
-           const wz = [Kz.top, Kz.left, Kz.right].some((zz => null === Tz(zz))),
-             Hz = wz ? await (xz ??= sz.e(201).then((() => sz(33845))).then((zz => (mz && (mz = !1, (0, Oz.b)()), {
-               rotated: zz.rotatedBlockTextures,
- ... (3 more removed lines; see GitHub link above)
+           return "undefined" !== typeof self && (null === (vv = self.location) || void 0 === vv ? void 0 : vv.href) || ""
+         }
+ 
+         function Vv() {
+           return "http:" === Uv() || "https:" === Uv()
+         }
+ 
+         function Uv() {
+           var vv;
+           return "undefined" !== typeof self && (null === (vv = self.location) || void 0 === vv ? void 0 : vv.protocol) || null
+         }
+         class Rv {
+           constructor(vv, zv) {
+             this.shortDelay = vv, this.longDelay = zv, Dv(zv > vv, "Short delay should be less than long delay!"), this.isMobile = (0, hv.Z)() || (0, hv.bb)()
+           }
+           get() {
+ ... (149 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L189-L195` → after: `L591-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L591-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L591-L708) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L189-L195)

```diff
-               top: jz(Kz.top, Hz),
-               left: jz(Kz.left, Hz),
-               right: jz(Kz.right, Hz),
-               itemType: Mz(Nz, Kz.half)
-             },
-             Yz = 0 === Cz ? oz : `${oz}#${Cz}`;
-           return (await (0, Dz.d)()).drawBlockIconUrl(Yz, Wz, Xz, (() => Bz))
+             appName: vv.name
+           };
+           Pv.email && (hv.email = Pv.email), Pv.phoneNumber && (hv.phoneNumber = Pv.phoneNumber);
+           const Sv = jv(vv, zv, hv);
+           return Sv.customData._tokenResponse = Pv, Sv
+         }
+ 
+         function Bv(vv) {
+           if (vv) try {
+             const zv = new Date(Number(vv));
+             if (!isNaN(zv.getTime())) return zv.toUTCString()
+           } catch (zv) {}
+         }
+ 
+         function Jv(vv) {
+           let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (102 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L197-L199` → after: `L710-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L710-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L710-L735) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L197-L199)

```diff
-       },
-       hz = {
-         itemIcon: function(zz) {
+         async function uv(vv) {
+           var zv;
+           const Pv = vv.auth,
+             hv = await vv.getIdToken(),
+             Sv = await rv(vv, async function(vv, zv) {
+               return Zv(vv, "POST", "/v1/accounts:lookup", zv)
+             }(Pv, {
+               idToken: hv
+             }));
+           nv(null === Sv || void 0 === Sv ? void 0 : Sv.users.length, Pv, "internal-error");
+           const gv = Sv.users[0];
+           vv._notifyReloadListener(gv);
+           const pv = (null === (zv = gv.providerUserInfo) || void 0 === zv ? void 0 : zv.length) ? gv.providerUserInfo.map((vv => {
+             var {
+               providerId: zv
+             } = vv, Pv = ev(vv, ["providerId"]);
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L201-L217` → after: `L737-L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L737-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L737-L1312) · [Before (L201-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L201-L217)

```diff
-           if (null === Pz) return ez(), oz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
-           if ((0, Wz.h)(zz)) return {
-             kind: "icon",
-             url: null !== (sz = Pz.ingameIconUrl(zz)) && void 0 !== sz ? sz : Pz.notFoundUrl()
-           };
-           if (zz.startsWith(Wz.e)) return {
-             kind: "icon",
-             url: yz(zz.slice(Wz.e.length))
-           };
-           if (0 === (0, vz.h)()) return (0, Xz.d)(), oz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
-           const Oz = null !== (tz = Az(zz)) && void 0 !== tz ? tz : zz,
-             Uz = (0, vz.b)(Oz),
-             Kz = void 0 === Uz ? void 0 : rz.itemTypeNameOf(Uz);
-           if (void 0 !== bz(Oz)) return {
-             kind: "drawnBlock"
-           };
- ... (1 more removed lines; see GitHub link above)
+           const Tv = vv.isAnonymous,
+             Wv = !(vv.email && gv.passwordHash) && !(null === dv || void 0 === dv ? void 0 : dv.length),
+             wv = !!Tv && Wv,
+             av = {
+               uid: gv.localId,
+               displayName: gv.displayName || null,
+               photoURL: gv.photoUrl || null,
+               email: gv.email || null,
+               emailVerified: gv.emailVerified || !1,
+               phoneNumber: gv.phoneNumber || null,
+               tenantId: gv.tenantId || null,
+               providerData: dv,
+               metadata: new Xv(gv.createdAt, gv.lastLoginAt),
+               isAnonymous: wv
+             };
+           Object.assign(vv, av)
+ ... (560 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L219-L231` → after: `L1314-L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1314-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L1314-L1408) · [Before (L219-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L219-L231)

```diff
-             return null !== (tz = Gz(cz(zz))) && void 0 !== tz ? tz : Pz.notFoundUrl()
-           }(Oz);
-           if ((0, gz.e)(Oz) && ! function(zz) {
-               return null !== Iz && (null !== Iz.itemSprite(cz(zz)) || null !== Iz.model(zz))
-             }(Oz)) return {
-             kind: "model",
-             url: uz
-           };
-           if ("Gun" === Kz) return {
-             kind: "gun",
-             url: uz
-           };
-           if (void 0 !== Uz && "GrayscaleArmour" === rz.itemTypeOf(Uz) || Object.hasOwn(Fz.c, Oz)) {
+             const Pv = await this.assertedPersistence.getCurrentUser();
+             let hv = Pv,
+               Sv = !1;
+             if (vv && this.config.authDomain) {
+               await this.getOrInitRedirectPersistenceManager();
+               const Pv = null === (zv = this.redirectUser) || void 0 === zv ? void 0 : zv._redirectEventId,
+                 ev = null === hv || void 0 === hv ? void 0 : hv._redirectEventId,
+                 gv = await this.tryRedirectSignIn(vv);
+               Pv && Pv !== ev || !(null === gv || void 0 === gv ? void 0 : gv.user) || (hv = gv.user, Sv = !0)
+             }
+             if (!hv) return this.directlySetCurrentUser(null);
+             if (!hv._redirectEventId) {
+               if (Sv) try {
+                 await this.beforeStateQueue.runMiddleware(hv)
+               } catch (ev) {
+                 hv = Pv, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(ev)))
+ ... (79 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L233-L237` → after: `L1410-L1414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1410-L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L1410-L1414) · [Before (L233-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L233-L237)

```diff
-             const tz = null !== (Nz = (0, Fz.e)(zz)) && void 0 !== Nz ? Nz : (0, Fz.e)(Oz);
-             if (tz) return {
-               kind: "item",
-               url: uz,
-               tint: tz
+             return {
+               apiKey: this.config.apiKey,
+               authDomain: this.config.authDomain,
+               appName: this.name,
+               currentUser: null === (vv = this._currentUser) || void 0 === vv ? void 0 : vv.toJSON()
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L240-L242` → after: `L1417-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1417-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L1417-L1439) · [Before (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L240-L242)

```diff
-           return {
-             kind: "item",
-             url: uz
+           async _setRedirectUser(vv, zv) {
+             const Pv = await this.getOrInitRedirectPersistenceManager(zv);
+             return null === vv ? Pv.removeCurrentUser() : Pv.setCurrentUser(vv)
+           }
+           async getOrInitRedirectPersistenceManager(vv) {
+             if (!this.redirectPersistenceManager) {
+               const zv = vv && ez(vv) || this._popupRedirectResolver;
+               nv(zv, this, "argument-error"), this.redirectPersistenceManager = await Nz.create(this, [ez(zv._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
+             }
+             return this.redirectPersistenceManager
+           }
+           async _redirectUserForId(vv) {
+             var zv, Pv;
+             return this._isInitialized && await this.queue((async () => {})), (null === (zv = this._currentUser) || void 0 === zv ? void 0 : zv._redirectEventId) === vv ? this._currentUser : (null === (Pv = this.redirectUser) || void 0 === Pv ? void 0 : Pv._redirectEventId) === v … [truncated]
+           }
+           async _persistUserIfCurrent(vv) {
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L244-L279` → after: `L1441-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1441-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/260.js#L1441-L4026) · [Before (L244-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/260.js#L244-L279)

```diff
-         },
-         hasIcon: function(zz) {
-           return void 0 !== Az(zz) || (0, Wz.h)(zz) || zz.startsWith(Wz.e)
-         },
-         isItemName: function(zz) {
-           return void 0 !== Az(zz)
-         }
-       }
-   },
-   39864: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz,
-       f: () => oz
-     });
-     var Fz = sz(39867);
-     let Wz = null,
- ... (20 more removed lines; see GitHub link above)
+           _startProactiveRefresh() {
+             this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
+           }
+           _stopProactiveRefresh() {
+             this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
+           }
+           get _currentUser() {
+             return this.currentUser
+           }
+           notifyAuthListeners() {
+             var vv, zv;
+             if (!this._isInitialized) return;
+             this.idTokenSubscription.next(this.currentUser);
+             const Pv = null !== (zv = null === (vv = this.currentUser) || void 0 === vv ? void 0 : vv.uid) && void 0 !== zv ? zv : null;
+             this.lastNotifiedUid !== Pv && (this.lastNotifiedUid = Pv, this.authStateSubscription.next(this.currentUser))
+           }
+ ... (2570 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (92 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40729: (zz, tz, sz) => {
+   39889: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7` → after: `L84-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L84-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L84-L92) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7)

```diff
-       d: () => oz,
+       cc: () => zz,
+       dd: () => Yv,
+       de: () => Mv,
+       dg: () => cP,
+       eb: () => ov,
+       fc: () => sz,
+       fd: () => gz,
+       ff: () => YP,
+       fg: () => yP,
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L104` → after: `L94-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L94-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L94-L141) · [Before (L9-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L9-L104)

```diff
-       j: () => Uz
-     });
-     var Fz = sz(36652),
-       Wz = sz(38126),
-       Xz = sz(38119);
- 
-     function Oz(zz, tz, sz, Fz) {
-       const Wz = Xz.t;
-       tz.fill(0), zz.gravity.toArray(tz, Wz.gravity), zz.colorDead.toArray(tz, Wz.colorDead), sz[Wz.ramp] = zz.useRampGradients ? 1 : 0;
-       const Oz = zz.getColorGradients(),
-         oz = Nz(zz, Oz, "colour", Fz);
-       sz[Wz.colorCount] = oz;
-       for (let Xz = 0; Xz < oz; Xz++) {
-         var vz;
-         const zz = Oz[bz(Oz, Xz)];
-         tz[Wz.colorPositions + Xz] = zz.gradient, zz.color1.toArray(tz, Wz.color1 + 4 * Xz), (null !== (vz = zz.color2) && void 0 !== vz ? vz : zz.color1).toArray(tz, Wz.color2 + 4 * Xz)
- ... (80 more removed lines; see GitHub link above)
+       ge: () => jv,
+       gf: () => KP,
+       ib: () => rz,
+       ic: () => Ev,
+       id: () => Cv,
+       j: () => Qv,
+       jc: () => Rv,
+       jd: () => sv,
+       je: () => Tv,
+       jg: () => WP,
+       kb: () => Zv,
+       kc: () => ez,
+       kf: () => nP,
+       l: () => NP,
+       lb: () => hP,
+       lg: () => aP,
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L106-L236` → after: `L143-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L143-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L143-L152) · [Before (L106-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L106-L236)

```diff
-     var Fz = sz(36652),
-       Wz = sz(36985),
-       Xz = sz(37329),
-       Oz = sz(36600),
-       oz = sz(37335);
-     class vz extends oz.b {
-       constructor() {
-         for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
-         super(...tz), this.color = new Fz.Color3(1, 1, 1), this.alpha = 1, this.material = {
-           name: "colorShader",
-           uniqueId: tz[0].aJ().getUniqueId(),
-           shaderPath: "color",
-           fillMode: 4,
-           sideOrientation: null,
-           alphaMode: 2,
-           forceDepthWrite: !1,
- ... (115 more removed lines; see GitHub link above)
+     const hv = -2147483648,
+       Sv = 12,
+       ev = 12,
+       gv = 4095,
+       pv = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L238-L244` → after: `L154-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L154-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L154-L173) · [Before (L238-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L238-L244)

```diff
-       texture: (zz, tz, sz) => {
-         let {
-           data: Fz,
-           sets: Wz
-         } = sz;
-         var Xz;
-         (jz(zz), Fz) && (zz.uvSet = null !== (Xz = null === Wz || void 0 === Wz ? void 0 : Wz.coordinatesIndex) && void 0 !== Xz ? Xz : 0, (0, Yz.Z)(zz.matrix, null !== Wz && void 0 !== Wz ? Wz : {}))
+       dv = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+         Spectating: 16,
+         AttemptingBreak: 32,
+         Aiming: 64,
+         FirstPerson: 128,
+         Replay: 256,
+         Breaking: 512,
+         CursorAim: 1024,
+         FreeCam: 2048,
+         ZoomFirstPerson: 4096,
+         JumpHeld: 8192,
+         Flying: 16384,
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L246-L323` → after: `L175-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L175-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L175-L185) · [Before (L246-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L246-L323)

```diff
-       cube: jz,
-       canvas: (zz, tz, sz) => {
-         let {
-           width: Fz,
-           height: Wz,
-           mipmaps: Xz,
-           samplingMode: Oz = ez.m.trilinear,
-           hasAlpha: oz = !1,
-           wrap: vz = ez.e.clamp
-         } = sz;
-         const Uz = zz.FD().createCanvas(Fz, Wz),
-           Kz = new ez.o("2d", {
-             kind: "canvas",
-             width: Fz,
-             height: Wz,
-             canvas: Uz
- ... (62 more removed lines; see GitHub link above)
+       Nv = {
+         None: 0,
+         Entity: 1,
+         Open: 2,
+         Close: 3,
+         Milk: 4,
+         Shear: 5,
+         Tame: 6,
+         TameWith: 7,
+         Feed: 8,
+         Ride: 9
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L488-L833` → after: `L188-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L188-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L188-L232) · [Before (L488-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L488-L833)

```diff
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
-       };
- 
-     function pz(zz, tz, sz) {
-       var Fz;
-       let Wz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const Xz = null !== (Fz = tz._colorFormat) && void 0 !== Fz ? Fz : "bgra8unorm",
-         Oz = Wz ? 15 : 0;
-       return sz ? {
-         ...zz,
-         targets: [{
-           format: Xz,
-           blend: {
-             color: sz,
- ... (330 more removed lines; see GitHub link above)
+         Off: 0,
+         Key: 1,
+         Touch: 2
+       },
+       Tv = {
+         Alive: 16
+       },
+       Wv = 32,
+       wv = {
+         Stored: 1,
+         Unloaded: 2,
+         ResetAll: 4
+       },
+       av = {
+         opacity: 0,
+         zIndex: 1,
+ ... (29 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L835-L845` → after: `L234-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L234-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L234-L246) · [Before (L835-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L835-L845)

```diff
-       ft = 1,
-       Et = 2,
-       zs = 3;
- 
-     function ts(zz) {
-       return Math.ceil(zz * zz / 32)
-     }
-     const ss = 8192,
-       Fs = 1 << 18,
-       Ws = 65536,
-       Xs = 294912,
+       iv = 4294967295,
+       cv = 4,
+       Gv = 123,
+       mv = -2147483648,
+       jv = {
+         Off: 0,
+         All: 1,
+         Filter: 2
+       },
+       fv = 51,
+       Fv = 5,
+       Yv = 4294967295,
+       nv = 4294967295,
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L847` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L248) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L847)

```diff
-       os = 4096,
+       Dv = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L849-L1242` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L250) · [Before (L849-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L849-L1242)

```diff
-       Us = 16385,
-       Ks = 81921,
-       us = 147457,
-       Ns = 4194304;
-     const bs = [0, 0, 0],
-       ws = [0, 0, 0];
- 
-     function Ds(zz, tz, sz, Fz) {
-       ! function(zz, tz, sz) {
-         const [Fz, Wz, Xz] = [zz[0], zz[1], zz[2]];
-         let Oz, oz, vz;
-         Math.abs(Wz) < .99 ? (Oz = Xz, oz = 0, vz = -Fz) : (Oz = -Wz, oz = Fz, vz = 0);
-         const Uz = Math.hypot(Oz, oz, vz);
-         tz[0] = Oz / Uz, tz[1] = oz / Uz, tz[2] = vz / Uz, sz[0] = Wz * tz[2] - Xz * tz[1], sz[1] = Xz * tz[0] - Fz * tz[2], sz[2] = Fz * tz[1] - Wz * tz[0]
-       }(Fz, bs, ws);
-       const Wz = 1 / 32;
- ... (378 more removed lines; see GitHub link above)
+       Vv = 255,
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1244-L1318` → after: `L252-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L252-L254) · [Before (L1244-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L1244-L1318)

```diff
-         vertexFlags: "vertexOutputs.vBlockFlags",
-         vertexLocalPosition: "vec3f(0.0)",
-         flags: "fragmentInputs.vBlockFlags",
-         normal: "normalize(fragmentInputs.vNormalW)",
-         alpha: "alpha",
-         alphaOut: "alpha",
-         lambert: "fragmentInputs.vTerrainLambert",
-         diffuse: "material.vDiffuseColor.rgb",
-         emissive: "material.emissiveAndLevel.xyz",
-         ambient: "ambient",
-         fogColour: "select(vec3f(0.0), uniforms.vFogColor, uniforms.vFogInfos.x != 0.0)",
-         fogAlpha: "1.0 - fog",
-         enchantTier: "0u",
-         enchantColour: "vec4f(0.0)",
-         enchantSpeed: "0.0",
-         localPosition: "vec3f(0.0)",
- ... (59 more removed lines; see GitHub link above)
+         Off: 0,
+         On: 1,
+         Keep: 2
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1322-L1325` → after: `L257-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L257-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L257-L265) · [Before (L1322-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L1322-L1325)

```diff
-         diffuse: 0,
-         ambientAndCutoff: 4,
-         emissiveAndLevel: 8,
-         anim: 12
+         AltVeto: 1,
+         AltAction: 2,
+         Click: 3,
+         ChangeBlock: 4,
+         DropItem: 5,
+         Tick: 6,
+         Message: 7,
+         Create: 8,
+         Director: 11
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1333-L1338` → after: `L268-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L268-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L268-L305) · [Before (L1333-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L1333-L1338)

```diff
-         position: 0,
-         normal: 1,
-         color: 2,
-         uv: 3,
-         packedLight: 5,
-         blockFlagWords: 7
+         Hotbar: 256,
+         Drop: 257
+       },
+       tv = {
+         Down: 1,
+         Next: 2,
+         Stack: 4
+       },
+       qv = {
+         Rate: 0,
+         Gyro: 1
+       },
+       Iv = {
+         Active: 1,
+         JumpHeld: 2,
+         JumpPressed: 4,
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1342-L1539` → after: `L308-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L308-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L308-L317) · [Before (L1342-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L1342-L1539)

```diff
-       JF = 4,
-       IF = 5,
-       CF = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\ … [truncated]
-       eF = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight( … [truncated]
-     const ZF = {
-       wN: "material.anim.x",
-       stride: "material.anim.y",
-       count: "material.anim.z",
-       perTexture: zz => `animDataPerTex[${zz}]`
-     };
- 
-     function GF(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZF;
-       return `\n\tlet atlasIdxIn = ${zz};\n\tlet animTick = ${sz.wN};\n\tlet animTickStride = ${sz.stride};\n\tlet numAnimTextures = ${sz.count};\n\t${(0,mz.g)(xz.e.WGSL,sz.perTexture)}\n\t${tz}animLayer;\n`
-     }
- 
- ... (182 more removed lines; see GitHub link above)
+       Hv = {
+         Synced: 0,
+         ChestOpened: 1,
+         ChestClosed: 2,
+         ChestRefreshed: 3,
+         EnchantingTable: 4,
+         HotbarRequest: 5,
+         Scrolled: 6,
+         NumberKey: 7,
+         DropRequested: 8
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1541-L1753` → after: `L319-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L319-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L319-L338) · [Before (L1541-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L1541-L1753)

```diff
-       lF = 256,
-       nF = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       aF = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       qF = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
-       SF = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-       VF = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
-       RF = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogC … [truncated]
-       pF = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11 … [truncated]
-       fF = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${aF}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
-     const EF = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
-     frame.lights[LITE_LIGHT$ {
-         zz
-       }
-       _SLOT] `;return`
-     #ifdef LIGHT$ {
-       zz
- ... (197 more removed lines; see GitHub link above)
+       Mv = {
+         ToggleMenu: 0,
+         EditBoard: 1,
+         EditCodeBlock: 2,
+         ViewCodeBlock: 3,
+         EditCustomLobbyBlock: 4,
+         OpenIronChest: 5,
+         EditNameTag: 6,
+         EditBook: 7,
+         CantChangeBlock: 8,
+         MiddleBarStart: 9,
+         MiddleBarStop: 10,
+         AimingOverlay: 11,
+         BottomMessage: 12,
+         Hitmarker: 13,
+         ShotsLeft: 14,
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L3053-L3396` → after: `L341-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L341-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L341-L774) · [Before (L3053-L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L3053-L3396)

```diff
-         depth: !1,
-         sunShadow: !1
-       };
- 
-     function kX(zz, tz) {
-       let sz = hX.get(zz);
-       sz || (sz = new Map, hX.set(zz, sz));
-       const Fz = `${tz.depth?"-depth":""}${tz.sunShadow?"-shadow":""}${tz.shadowMask?"-mask":""}`;
-       let Wz = sz.get(Fz);
-       if (!Wz) {
-         const Xz = [{
-           binding: Ct.e,
-           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform",
-             minBindingSize: Ct.k
- ... (328 more removed lines; see GitHub link above)
+         Alt: 1,
+         Up: 2,
+         HasPos: 4,
+         AttackOnly: 8
+       },
+       Bv = {
+         Solid: 1,
+         Fluid: 2,
+         PlaceOver: 4
+       },
+       Jv = {
+         Stackable: 1
+       },
+       Ev = {
+         granule: 1,
+         wood: 2,
+ ... (418 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L3482-L3556` → after: `L777-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L777-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L777-L831) · [Before (L3482-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L3482-L3556)

```diff
-     function JO(zz, tz) {
-       const sz = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(zz)[0];
-       return `${sz}${tz}${zz.slice(sz.length)}`
-     }
- 
-     function IO(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const {
-         hooks: Wz
-       } = tz, Xz = Qs(tz, Fz), {
-         kind: Oz,
-         defines: oz
-       } = sz, vz = function(zz, tz) {
-         var sz, Fz, Wz;
-         const {
-           defines: Xz
- ... (59 more removed lines; see GitHub link above)
+     function dP(vv, zv, Pv, hv, Sv) {
+       var ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv;
+       switch (vv) {
+         case 32:
+           return 4 === hv && (null === (ev = Sv.tickEnd) || void 0 === ev || ev.call(Sv, iz.MT(zv, Pv)), !0);
+         case 33:
+           return 12 === hv && (null === (gv = Sv.entitySpawned) || void 0 === gv || gv.call(Sv, cz.serverId(zv, Pv), cz.index(zv, Pv), cz.kind(zv, Pv)), !0);
+         case 34:
+           return 12 === hv && (null === (pv = Sv.entityDespawned) || void 0 === pv || pv.call(Sv, cz.serverId(zv, Pv), cz.index(zv, Pv), cz.kind(zv, Pv)), !0);
+         case 39:
+           return !(hv < 20) && (null === (dv = Sv.changeBlockFail) || void 0 === dv || dv.call(Sv, Gz.pos(zv, Pv, 0), Gz.pos(zv, Pv, 1), Gz.pos(zv, Pv, 2), Gz.actual(zv, Pv), Gz.dataLen(zv, Pv), Pv + 20, hv - 20), !0);
+         case 46:
+           return 0 === hv && (null === (Nv = Sv.changeBlockFailEnd) || void 0 === Nv || Nv.call(Sv), !0);
+         case 48:
+           return 20 === hv && (null === (lv = Sv.inventoryEvent) || void 0 === lv || lv.call(Sv, mz.what(zv, Pv), mz.value(zv, Pv), mz.pos(zv, Pv, 0), mz.pos(zv, Pv, 1), mz.pos(zv, Pv, 2), mz.block(zv, Pv)), !0);
+         case 49:
+ ... (39 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L3560-L3561` → after: `L835-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L835-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L835-L884) · [Before (L3560-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L3560-L3561)

```diff
-       name: "earthSky",
-       uniqueId: -1
+       SetChunkAddDistance: 2,
+       WatchEntityInfo: 66,
+       EventResync: 67,
+       WatchPromptPick: 68,
+       SetLocalDbId: 69,
+       SetAltVeto: 128,
+       EnchantOfferRequest: 130,
+       ClearPickupDelay: 131,
+       SyncOpMarker: 132,
+       SetHooks: 133,
+       SetPublicLobby: 144,
+       ClickCodeBlock: 145,
+       Send: 256,
+       Leave: 257,
+       SetPaused: 258,
+       ParticleBurst: 320,
+ ... (34 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L3563-L3571` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L886) · [Before (L3563-L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L3563-L3571)

```diff
-     class eO {
-       constructor(zz) {
-         this.resources = zz, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
-       }
-       release() {
-         for (const zz of this.instances.values()) zz.released = !0, this.resources.destroyBuffer(zz.buffer);
-         this.instances.clear()
-       }
-     }
+     let lP = new Uint8Array(0);
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L3574-L4276` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L889) · [Before (L3574-L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L3574-L4276)

```diff
-       return zz.failed && null !== zz.packGroup
-     }
-     class GO {
-       constructor(zz, tz, sz) {
-         this.device = zz, this.resources = tz, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.T6 = new TX, this.modelMeshes = new GX, this.thinBundle = void 0, this.binder = new pW, this.sc … [truncated]
-           label: "meshes-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
- ... (687 more removed lines; see GitHub link above)
+       return lP.buffer !== vv.buffer && (lP = new Uint8Array(vv.buffer)), lP
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4279-L4282` → after: `L892-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L892-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L892-L895) · [Before (L4279-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4279-L4282)

```diff
-     function TO(zz) {
-       var tz, sz;
-       const Fz = null === (tz = zz.uC) || void 0 === tz || null === (sz = tz.aShaderPackItem) || void 0 === sz ? void 0 : sz.x;
-       return void 0 !== Fz && 0 !== (Fz & vt.g)
+     function WP(vv, zv, Pv) {
+       const hv = vv.dw(66, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint8(hv + 0, Pv), !0
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4290-L4327` → after: `L898-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L898-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L898-L901) · [Before (L4290-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4290-L4327)

```diff
-     function dO(zz, tz, sz, Fz, Wz) {
-       const Xz = sz[0].width;
-       try {
-         return Wz ? function(zz, tz, sz) {
-           const Fz = (0, yO.e)(zz, sz, sz, 6);
-           for (let Wz = 0; Wz < 6; Wz++)(0, yO.g)(zz, Fz, Wz, tz[MO[Wz]], {
-             invertY: !1
-           });
-           return Fz.texture
-         }(zz, sz, Xz) : function(zz, tz, sz, Fz) {
-           const Wz = zz.createTexture({
-             label: "sink-cube",
-             size: {
-               width: sz,
-               height: sz,
-               depthOrArrayLayers: 6
- ... (22 more removed lines; see GitHub link above)
+     function wP(vv, zv, Pv) {
+       const hv = vv.dw(67, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint32(hv + 0, Pv, !0), !0
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4330-L4493` → after: `L904-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L904-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L904-L907) · [Before (L4330-L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4330-L4493)

```diff
-     function hO(zz) {
-       for (const tz of null !== zz && void 0 !== zz ? zz : []) null === tz || void 0 === tz || tz.close()
-     }
-     async function QO(zz) {
-       const tz = [],
-         sz = [];
-       if (await Promise.all(zz.map(((zz, Fz) => (tz[Fz] = null, zz.then((zz => {
-           tz[Fz] = zz
-         }), (zz => {
-           sz.push(zz)
-         })))))), sz.length > 0) throw hO(tz), sz[0];
-       return tz
-     }
-     class kO {
-       constructor(zz) {
-         this.au = zz, this.starts = [], this.lengths = [], this.used = 0, zz > 0 && (this.starts.push(0), this.lengths.push(zz))
- ... (148 more removed lines; see GitHub link above)
+     function aP(vv, zv, Pv) {
+       const hv = vv.dw(68, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint8(hv + 0, Pv), !0
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4496-L4497` → after: `L910-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L910-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L910-L914) · [Before (L4496-L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4496-L4497)

```diff
-     function lO(zz) {
-       return Array.isArray(zz) ? new Float32Array(zz) : zz
+     function sP(vv, zv, Pv, hv) {
+       const Sv = vv.dw(69, zv, 4 + hv.length);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setUint8(Sv + 0, Pv), TP(ev).set(hv, ev.byteOffset + Sv + 4), !0
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4501-L4505` → after: `L918-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L918-L921) · [Before (L4501-L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4501-L4505)

```diff
-       const Xz = jW(Wz),
-         Oz = Math.min(Wz, Fz.byteLength);
-       if (Xz === Oz && Fz.byteOffset % 4 === 0) return void zz.queue.writeBuffer(tz, sz, Fz.buffer, Fz.byteOffset, Xz);
-       const oz = new Uint8Array(Xz);
-       oz.set(new Uint8Array(Fz.buffer, Fz.byteOffset, Oz)), zz.queue.writeBuffer(tz, sz, oz)
+       const ev = vv.dw(128, zv, 4 + Sv.length);
+       if (ev < 0) return !1;
+       const gv = vv.view;
+       return gv.setUint8(ev + 0, Pv), gv.setUint16(ev + 2, hv, !0), TP(gv).set(Sv, gv.byteOffset + ev + 4), !0
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4509-L5017` → after: `L925-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L925-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L925-L927) · [Before (L4509-L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L4509-L5017)

```diff
-       const Fz = "linear",
-         Wz = "nearest";
-       let Xz = Wz,
-         Oz = Wz,
-         oz = "nearest",
-         vz = !tz;
-       switch (zz) {
-         case 11:
-           Xz = Fz, Oz = Fz;
-           break;
-         case 3:
-           Xz = Fz, Oz = Fz, oz = tz ? "linear" : "nearest";
-           break;
-         case 8:
-           oz = tz ? "linear" : "nearest";
-           break;
- ... (493 more removed lines; see GitHub link above)
+       const hv = vv.dw(131, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setInt32(hv + 0, Pv, !0), !0
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5039-L5068` → after: `L931-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L931-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L931-L933) · [Before (L5039-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5039-L5068)

```diff
-       zz.fov = tz.fov, zz.near = tz.near, zz.far = tz.far, zz.renderWidth = sz.renderWidth, zz.renderHeight = sz.renderHeight, (0, zo.p)(tz.holderRotation, 0, Wo, 0), (0, zo.e)(so, 0, Wo, 0, tz.holderPosition, 0, Xo);
-       const Fz = tz.XV;
-       Oo[0] = Fz[0], Oo[1] = Fz[1], Oo[2] = Fz[2] + 1;
-       const Wz = zz.viewMatrix;
-       (0, zo.i)(Fz, Oo, Fo, Wz), (0, zo.g)(Wz, 0, Wz), (0, zo.k)(Wz, Xo, 0, Wz), (0, zo.g)(Wz, 0, Wz);
-       const Xz = zz.worldMatrix;
-       (0, zo.g)(Wz, 0, Xz), zz.eye[0] = Xz[12], zz.eye[1] = Xz[13], zz.eye[2] = Xz[14], oo[0] = zz.fov, oo[1] = zz.renderWidth / zz.renderHeight, oo[2] = zz.near, oo[3] = zz.far, (0, zo.n)(oo, zz.projectionMatrix), (0, zo.k)(Wz, zz.projectionMatrix, 0, zz.viewProjectionMatrix), ( … [truncated]
-     }
- 
-     function Uo(zz, tz) {
-       let sz = zz.frustumPlanes;
-       sz || (sz = zz.frustumPlanes = Array.from({
-         length: 6
-       }, (() => new fO.c(0, 0, 0, 0))));
-       for (let Fz = 0; Fz < 6; Fz++) {
-         const zz = sz[Fz].normal;
- ... (14 more removed lines; see GitHub link above)
+       const hv = vv.dw(132, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint32(hv + 0, Pv, !0), !0
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5071-L5077` → after: `L936-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L936-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L936-L939) · [Before (L5071-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5071-L5077)

```diff
-     function No(zz) {
-       const tz = zz.Kg,
-         {
-           view: sz,
-           sV: Fz
-         } = zz.model;
-       return vo(sz, Fz, tz.FD()), tz.onBeforeRenderObservable.notifyObservers(tz), Uo(tz, sz.frustum), tz.onBeforeCameraRenderObservable.notifyObservers(tz.activeCamera), uo(zz)
+     function GP(vv, zv, Pv) {
+       const hv = vv.dw(133, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint32(hv + 0, Pv, !0), !0
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5083-L5331` → after: `L942-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L942-L945) · [Before (L5083-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5083-L5331)

```diff
-     function go(zz) {
-       var tz, sz;
-       const Fz = (0, Iz.$)(zz);
-       if (!Fz || Fz.diffuseTexture && (0, Do.i)(zz)) return null;
-       const Wz = null === (tz = (0, Iz.z)(Fz, mz.i.name)) || void 0 === tz ? void 0 : tz.state,
-         Xz = null === (sz = (0, Iz.z)(Fz, VX.e.name)) || void 0 === sz ? void 0 : sz.state,
-         Oz = new Float32Array(16);
-       return function(zz, tz, sz, Fz) {
-         var Wz, Xz;
-         const Oz = DF;
-         Fz.set(zz.diffuseColor, Oz.diffuse), Fz[Oz.diffuse + 3] = zz.alpha, Fz.set(zz.ambientColor, Oz.ambientAndCutoff), Fz[Oz.ambientAndCutoff + 3] = zz.alphaCutOff, Fz.set(zz.emissiveColor, Oz.emissiveAndLevel), Fz[Oz.emissiveAndLevel + 3] = null !== (Wz = null === (Xz = zz.di … [truncated]
-       }(Fz, Wz, Xz, Oz), {
-         model: Fz,
-         atlas: Wz,
-         texture: Wz ? "atlas" : Fz.diffuseTexture ? "single" : "none",
-         animated: Wz ? !!Wz.animDataPerTex : !!Xz,
- ... (233 more removed lines; see GitHub link above)
+     function mP(vv, zv, Pv) {
+       const hv = vv.dw(144, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint8(hv + 0, Pv), !0
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5335-L5421` → after: `L948-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L948-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L948-L952) · [Before (L5335-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5335-L5421)

```diff
-     function xo(zz, tz, sz, Fz, Wz) {
-       let Xz = 0;
-       for (let Oz = sz; Oz < Fz; Oz += Yo) zz.drawIndexed(6 * Math.min(Yo, Fz - Oz), 1, 0, tz + 4 * Oz, Wz), Xz++;
-       return Xz
-     }
-     class mo {
-       constructor(zz, tz) {
-         this.recordsGroup = tz, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
-         const sz = Jt.d.strideWithoutAtlas;
-         this.vertexArena = new ro(zz, sz, GPUBufferUsage.VERTEX, `terrain-vertices-${sz}`), this.quadArena = new ro(zz, wo.e, GPUBufferUsage.STORAGE, "terrain-quads", {
-           verticesPerUnit: 4,
-           twinUsage: GPUBufferUsage.STORAGE
-         });
-         const Fz = (0, It.e)(new Uint16Array(98298), Yo);
-         this.quadPattern = zz.createBuffer({
-           label: "terrain-quad-pattern",
- ... (71 more removed lines; see GitHub link above)
+     function jP(vv, zv, Pv, hv, Sv) {
+       const ev = vv.dw(145, zv, 12);
+       if (ev < 0) return !1;
+       const gv = vv.view;
+       return gv.setInt32(ev + 0, Pv, !0), gv.setInt32(ev + 4, hv, !0), gv.setInt32(ev + 8, Sv, !0), !0
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5423-L5559` → after: `L954-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L954-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L954-L959) · [Before (L5423-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5423-L5559)

```diff
-     class Jo {
-       constructor(zz, tz, sz, Fz) {
-         this.device = zz, this.splitBefore = tz, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = zz.createBu … [truncated]
-           label: "scene-depth-unproject",
-           size: 8,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const Wz = zz.createShaderModule({
-           label: "scene-depth-copy",
-           code: (Xz = sz._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Xz?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
-         });
-         var Xz;
-         zz.createRenderPipelineAsync({
-           label: "scene-depth-copy",
-           layout: "auto",
-           vertex: {
- ... (121 more removed lines; see GitHub link above)
+ 
+     function fP(vv, zv, Pv, hv) {
+       const Sv = vv.dw(256, zv, 4 + hv.length);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setUint16(Sv + 0, Pv, !0), TP(ev).set(hv, ev.byteOffset + Sv + 4), !0
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5563-L5564` → after: `L962-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L962-L965) · [Before (L5563-L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5563-L5564)

```diff
-     function Co(zz) {
-       return zz ? 15 : 1
+     function FP(vv, zv, Pv) {
+       const hv = vv.dw(258, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint8(hv + 0, Pv), !0
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5566-L5777` → after: `L967-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L967-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L967-L995) · [Before (L5566-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5566-L5777)

```diff
-     class eo {
-       constructor(zz, tz, sz, Fz) {
-         this.device = zz, this.terrain = Fz, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = tz._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = zz.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "depth"
-             }
-           }, {
-             binding: 1,
- ... (196 more removed lines; see GitHub link above)
+ 
+     function YP(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
+       const Nv = vv.dw(320, zv, 48 + dv.length);
+       if (Nv < 0) return !1;
+       const lv = vv.view;
+       lv.setUint32(Nv + 0, Pv, !0), lv.setUint16(Nv + 4, hv, !0), lv.setUint16(Nv + 6, Sv, !0), lv.setUint32(Nv + 8, ev, !0);
+       for (let Tv = 0; Tv < 3; Tv++) lv.setFloat64(Nv + 12 + 8 * Tv, gv[Tv], !0);
+       for (let Tv = 0; Tv < 3; Tv++) lv.setFloat32(Nv + 36 + 4 * Tv, pv[Tv], !0);
+       return TP(lv).set(dv, lv.byteOffset + Nv + 48), !0
+     }
+ 
+     function nP(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
+       const Nv = vv.dw(321, zv, 48 + dv.length);
+       if (Nv < 0) return !1;
+       const lv = vv.view;
+       lv.setUint32(Nv + 0, Pv, !0), lv.setInt32(Nv + 4, hv, !0), lv.setUint16(Nv + 8, Sv, !0), lv.setUint16(Nv + 10, ev, !0);
+ ... (13 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5781-L5787` → after: `L999-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L999-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L999-L1001) · [Before (L5781-L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5781-L5787)

```diff
-       let Fz = null,
-         Wz = 0;
-       for (const Xz of sz) {
-         const sz = Xz.renderable.mesh;
-         sz && !1 === sz.visible || (Xz.pipeline !== Fz && (zz.setPipeline(Xz.pipeline), Fz = Xz.pipeline), Wz += Xz.draw(zz, tz))
-       }
-       return Wz
+       const hv = vv.dw(323, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint32(hv + 0, Pv, !0), !0
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5789-L5896` → after: `L1003-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1003-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1003-L1010) · [Before (L5789-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5789-L5896)

```diff
-     const Go = 6e4,
-       To = {
-         status: "ok"
-       },
-       co = {
-         status: "skipped"
-       };
-     async function jo(zz, tz) {
-       const {
-         isCancelled: sz
-       } = zz;
-       if (sz()) return {
-         status: "ds"
-       };
-       const {
-         target: Fz
- ... (92 more removed lines; see GitHub link above)
+ 
+     function KP(vv, zv, Pv, hv, Sv, ev) {
+       const gv = vv.dw(324, zv, 32 + ev.length);
+       if (gv < 0) return !1;
+       const pv = vv.view;
+       pv.setUint32(gv + 0, Pv, !0), pv.setUint32(gv + 4, hv, !0);
+       for (let dv = 0; dv < 3; dv++) pv.setFloat64(gv + 8 + 8 * dv, Sv[dv], !0);
+       return TP(pv).set(ev, pv.byteOffset + gv + 32), !0
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5898-L5904` → after: `L1012-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1012-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1012-L1014) · [Before (L5898-L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5898-L5904)

```diff
-     async function Ao(zz) {
-       if (!zz) return [];
-       try {
-         return (await zz.getCompilationInfo()).messages.filter((zz => "error" === zz.type))
-       } catch {
-         return []
-       }
+ 
+     function VP(vv, zv) {
+       return !(vv.dw(325, zv, 0) < 0)
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5907-L5909` → after: `L1017-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1017-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1017-L1065) · [Before (L5907-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5907-L5909)

```diff
-     function yo(zz) {
-       var tz;
-       return null !== (tz = null === zz || void 0 === zz ? void 0 : zz.message) && void 0 !== tz ? tz : String(zz)
+     function UP(vv, zv, Pv, hv, Sv, ev) {
+       const gv = vv.dw(384, zv, 16);
+       if (gv < 0) return !1;
+       const pv = vv.view;
+       return pv.setUint32(gv + 0, Pv, !0), pv.setUint32(gv + 4, hv, !0), pv.setFloat32(gv + 8, Sv, !0), pv.setFloat32(gv + 12, ev, !0), !0
+     }
+ 
+     function RP(vv, zv, Pv, hv, Sv, ev, gv) {
+       const pv = vv.dw(385, zv, 36 + gv.length);
+       if (pv < 0) return !1;
+       const dv = vv.view;
+       dv.setUint32(pv + 0, Pv, !0), dv.setUint32(pv + 4, hv, !0);
+       for (let Nv = 0; Nv < 3; Nv++) dv.setFloat64(pv + 8 + 8 * Nv, Sv[Nv], !0);
+       return dv.setUint32(pv + 32, ev, !0), TP(dv).set(gv, dv.byteOffset + pv + 36), !0
+     }
+ 
+ ... (33 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5913-L5916` → after: `L1069-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1069-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1069-L1085) · [Before (L5913-L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5913-L5916)

```diff
-       NF(zz) ? Ao(sz).then((zz => {
-         const [sz] = zz;
-         RW("terrain", tz, Fz, sz ? `${sz.lineNum}:${sz.linePos} error: ${sz.message}` : null)
-       })) : RW("terrain", tz, Fz)
+       const Sv = vv.dw(390, zv, 8);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setInt32(Sv + 0, Pv, !0), ev.setFloat32(Sv + 4, hv, !0), !0
+     }
+ 
+     function ZP(vv, zv, Pv, hv, Sv, ev) {
+       const gv = vv.dw(391, zv, 12);
+       if (gv < 0) return !1;
+       const pv = vv.view;
+       return pv.setFloat32(gv + 0, Pv, !0), pv.setFloat32(gv + 4, hv, !0), pv.setUint8(gv + 8, Sv), pv.setUint8(gv + 9, ev), !0
+     }
+ 
+     function AP(vv, zv, Pv) {
+       const hv = vv.dw(392, zv, 4);
+       if (hv < 0) return !1;
+ ... (1 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5924-L5953` → after: `L1089-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1089-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1089-L1092) · [Before (L5924-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5924-L5953)

```diff
-       const Xz = Math.hypot(sz[0], sz[1], sz[2]);
-       if (!(Xz > 0)) return;
-       const Oz = [sz[0] / Xz, sz[1] / Xz, sz[2] / Xz],
-         oz = [Math.floor(tz[0]), Math.floor(tz[1]), Math.floor(tz[2])],
-         vz = [0, 0, 0],
-         Uz = [1 / 0, 1 / 0, 1 / 0],
-         Kz = [1 / 0, 1 / 0, 1 / 0];
-       for (let bz = 0; bz < 3; bz++) Oz[bz] > 0 ? (vz[bz] = 1, Uz[bz] = (oz[bz] + 1 - tz[bz]) / Oz[bz], Kz[bz] = 1 / Oz[bz]) : Oz[bz] < 0 && (vz[bz] = -1, Uz[bz] = (oz[bz] - tz[bz]) / Oz[bz], Kz[bz] = -1 / Oz[bz]);
-       const {
-         pw: uz
-       } = zz;
-       let Nz = zz.Wk(oz[0], oz[1], oz[2]);
-       for (;;) {
-         const tz = Uz[0] < Uz[1] ? Uz[0] < Uz[2] ? 0 : 2 : Uz[1] < Uz[2] ? 1 : 2;
-         if (Uz[tz] > Fz) return;
-         const sz = vz[tz] > 0 ? oz[tz] + 1 : oz[tz];
- ... (14 more removed lines; see GitHub link above)
+       const ev = vv.dw(393, zv, 12);
+       if (ev < 0) return !1;
+       const gv = vv.view;
+       return gv.setUint32(ev + 0, Pv, !0), gv.setUint16(ev + 4, hv, !0), gv.setFloat32(ev + 8, Sv, !0), !0
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5956-L5957` → after: `L1095-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1095-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1095-L1101) · [Before (L5956-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5956-L5957)

```diff
-     function no(zz, tz) {
-       return zz.group - tz.group || zz.nearest - tz.nearest
+     function HP(vv, zv, Pv, hv, Sv, ev, gv) {
+       const pv = vv.dw(394, zv, 36);
+       if (pv < 0) return !1;
+       const dv = vv.view;
+       dv.setUint32(pv + 0, Pv, !0), dv.setUint16(pv + 4, hv, !0), dv.setUint8(pv + 6, Sv);
+       for (let Nv = 0; Nv < 3; Nv++) dv.setFloat64(pv + 8 + 8 * Nv, ev[Nv], !0);
+       return dv.setFloat32(pv + 32, gv, !0), !0
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5959-L5999` → after: `L1103-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1103-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1103-L1107) · [Before (L5959-L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L5959-L5999)

```diff
-     class ao {
-       constructor(zz, tz) {
-         this.device = zz, this.YB = tz, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       allocate() {
-         var zz;
-         const tz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.next++;
-         if (8 * tz >= this.data.length) {
-           const zz = new Float32Array(2 * this.data.length);
- ... (25 more removed lines; see GitHub link above)
+ 
+     function MP(vv, zv, Pv) {
+       const hv = vv.dw(398, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setUint32(hv + 0, Pv, !0), !0
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6001-L6834` → after: `L1109-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1109-L1113) · [Before (L6001-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6001-L6834)

```diff
-     const qo = YF,
-       So = !0;
-     const Vo = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: qo.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       Ro = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
-       };
- ... (818 more removed lines; see GitHub link above)
+ 
+     function yP(vv, zv, Pv) {
+       const hv = vv.dw(448, zv, 4);
+       if (hv < 0) return !1;
+       return vv.view.setFloat32(hv + 0, Pv, !0), !0
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6838` → after: `L1117-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1117-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1117-L1121) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6838)

```diff
-       return `${cF(zz)}|${zz.atlasLayers}|${zz.fV}|${tz}|${sz}|${Fz._colorFormat}|${Fz._depthStencilFormat}|${Fz._sampleCount}`
+       const Sv = vv.dw(450, zv, 12);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       for (let gv = 0; gv < 2; gv++) ev.setFloat32(Sv + 0 + 4 * gv, Pv[gv], !0);
+       return ev.setUint8(Sv + 8, hv), !0
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6841-L6842` → after: `L1124-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1124-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1124-L1128) · [Before (L6841-L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6841-L6842)

```diff
-     function Eo(zz, tz) {
-       return zz.distance - tz.distance
+     function JP(vv, zv, Pv, hv) {
+       const Sv = vv.dw(452, zv, 8);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setFloat32(Sv + 0, Pv, !0), ev.setUint8(Sv + 4, hv), !0
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6845-L6881` → after: `L1131-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1131-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1131-L1135) · [Before (L6845-L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6845-L6881)

```diff
-     function zv(zz, tz) {
-       return tz.distance - zz.distance
-     }
-     class tv {
-       constructor() {
-         this.left = []
-       }
-       sort(zz, tz) {
-         for (let sz = 0; sz < zz.length; sz++) {
-           const tz = zz[sz].distance;
-           if (tz - tz !== 0) return !1
-         }
-         return this.sortRange(zz, 0, zz.length, tz), !0
-       }
-       sortRange(zz, tz, sz, Fz) {
-         if (sz - tz <= 16) {
- ... (21 more removed lines; see GitHub link above)
+     function EP(vv, zv, Pv, hv, Sv) {
+       const ev = vv.dw(454, zv, 4);
+       if (ev < 0) return !1;
+       const gv = vv.view;
+       return gv.setUint8(ev + 0, Pv), gv.setUint8(ev + 1, hv), gv.setUint8(ev + 2, Sv), !0
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6886-L6904` → after: `L1139-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1139-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1139-L1143) · [Before (L6886-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6886-L6904)

```diff
-       let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tz;
-       const Xz = Math.min(tz, sz),
-         Oz = new Uint32Array(ts(Fz));
-       for (let oz = 0; oz < Fz; oz++) {
-         const tz = Math.floor(oz * Xz / Fz),
-           sz = Math.max(tz + 1, Math.floor((oz + 1) * Xz / Fz));
-         for (let vz = 0; vz < Fz; vz++) {
-           const Uz = Math.floor(vz * Xz / Fz),
-             Kz = Math.max(Uz + 1, Math.floor((vz + 1) * Xz / Fz));
-           let uz = 0;
-           for (let Fz = tz; Fz < sz; Fz++)
-             for (let tz = Uz; tz < Kz; tz++) zz[Fz * Wz + tz] >= sv && uz++;
-           if (2 * uz >= (sz - tz) * (Kz - Uz)) {
-             const zz = vz + Fz * oz;
-             Oz[zz >>> 5] |= 1 << (31 & zz)
-           }
- ... (3 more removed lines; see GitHub link above)
+       const Sv = vv.dw(455, zv, 40);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       for (let gv = 0; gv < 9; gv++) ev.setInt32(Sv + 0 + 4 * gv, Pv[gv], !0);
+       return ev.setUint32(Sv + 36, hv, !0), !0
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6907-L6908` → after: `L1146-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1146-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1146-L1150) · [Before (L6907-L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6907-L6908)

```diff
-     function Wv(zz) {
-       return Math.max(1, Math.min(16, zz))
+     function bP(vv, zv, Pv, hv) {
+       const Sv = vv.dw(456, zv, 8);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setFloat32(Sv + 0, Pv, !0), ev.setUint8(Sv + 4, hv), !0
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6910-L7074` → after: `L1152-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1152-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1152-L1159) · [Before (L6910-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L6910-L7074)

```diff
-     class Xv {
-       constructor(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = zz, this.loadTexture = tz, this.warn = sz, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(zz, tz) {
-         return (zz.iG !== this.builtVersion || this.blockCaster.length !== tz) && (this.build(zz, tz), !0)
-       }
-       build(zz, tz) {
-         this.builtVersion = zz.iG;
-         const sz = new Uint16Array(tz),
-           Fz = new Map;
-         for (let Wz = 1; Wz < tz; Wz++) {
-           const tz = this.classify(zz, Wz, Fz);
-           if (null === tz || tz === Rt) {
-             sz[Wz] = null === tz ? 0 : Rt;
- ... (149 more removed lines; see GitHub link above)
+ 
+     function rP(vv, zv, Pv, hv, Sv) {
+       const ev = vv.dw(457, zv, 16);
+       if (ev < 0) return !1;
+       const gv = vv.view;
+       for (let pv = 0; pv < 3; pv++) gv.setInt32(ev + 0 + 4 * pv, Pv[pv], !0);
+       for (let pv = 0; pv < 3; pv++) gv.setInt8(ev + 12 + 1 * pv, hv[pv]);
+       return gv.setUint8(ev + 15, Sv), !0
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7078-L7079` → after: `L1162-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1162-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1162-L1166) · [Before (L7078-L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7078-L7079)

```diff
-     function ov(zz) {
-       return !zz.kD && !zz.dFz && !zz.gD
+     function kP(vv, zv, Pv, hv) {
+       const Sv = vv.dw(530, zv, 4 + hv.length);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setUint8(Sv + 0, Pv), TP(ev).set(hv, ev.byteOffset + Sv + 4), !0
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7082-L7087` → after: `L1169-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1169-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1169-L1173) · [Before (L7082-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7082-L7087)

```diff
-     function vv() {
-       return {
-         bricks: new Uint32Array(kt),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(ht)
-       }
+     function XP(vv, zv, Pv, hv, Sv, ev) {
+       const gv = vv.dw(531, zv, 12 + ev.length);
+       if (gv < 0) return !1;
+       const pv = vv.view;
+       return pv.setFloat32(gv + 0, Pv, !0), pv.setFloat32(gv + 4, hv, !0), pv.setUint32(gv + 8, Sv, !0), TP(pv).set(ev, pv.byteOffset + gv + 12), !0
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7089-L7293` → after: `L1175-L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1175-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1175-L1180) · [Before (L7089-L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7089-L7293)

```diff
-     class Uv {
-       constructor(zz, tz, sz) {
-         let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = zz, this.writeVoxels = tz, this.writePool = sz, this.warn = Fz, this.eyeChunk = null, this.slotChunk = new Array(ct).fill(null), this.slotVersion = new Float64Array(ct).fill(-1), this.slotPool = new Array(ct).fill(null), this.starved = new Uint8Array(ct), t … [truncated]
-         for (let Wz = 0; Wz < Ws; Wz++) this.freePool[Wz] = 65535 - Wz
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return Ws - this.freeCount
-       }
-       chunkAdded(zz) {
-         if (null === this.eyeChunk || !this.inRadius(zz.i, zz.j, zz.k)) return;
-         const tz = qt(zz.i, zz.j, zz.k);
-         this.slotChunk[tz] = zz, this.slotVersion[tz] = -1, this.enqueue(tz)
- ... (189 more removed lines; see GitHub link above)
+ 
+     function uP(vv, zv, Pv, hv, Sv, ev) {
+       const gv = vv.dw(532, zv, 12 + ev.length);
+       if (gv < 0) return !1;
+       const pv = vv.view;
+       return pv.setInt32(gv + 0, Pv, !0), pv.setInt32(gv + 4, hv, !0), pv.setUint32(gv + 8, Sv, !0), TP(pv).set(ev, pv.byteOffset + gv + 12), !0
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7295-L7424` → after: `L1182-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1182-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1182-L1187) · [Before (L7295-L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7295-L7424)

```diff
-     var Kv = sz(36860);
-     class uv {
-       constructor(zz) {
-         this.device = zz, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new gs, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.PN = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = zz.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = zz.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(zz, tz, sz) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
- ... (114 more removed lines; see GitHub link above)
+ 
+     function vh(vv, zv, Pv, hv, Sv) {
+       const ev = vv.dw(533, zv, 8 + Sv.length);
+       if (ev < 0) return !1;
+       const gv = vv.view;
+       return gv.setInt32(ev + 0, Pv, !0), gv.setInt32(ev + 4, hv, !0), TP(gv).set(Sv, gv.byteOffset + ev + 8), !0
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7429` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1191) · [Before (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7429)

```diff
-       return zz[0] * tz[0] + zz[1] * tz[1] + zz[2] * tz[2] < Nv
+       return !(vv.dw(576, zv, 0) < 0)
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7431-L7733` → after: `L1193-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1193-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1193-L1201) · [Before (L7431-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7431-L7733)

```diff
-     async function wv(zz) {
-       const {
-         pixels: tz,
-         width: sz,
-         height: Fz
-       } = await kW(zz), Wz = new Uint8Array(sz * Fz);
-       for (let Xz = 0; Xz < Wz.length; Xz++) Wz[Xz] = tz[4 * Xz + 3];
-       return {
-         width: sz,
-         height: Fz,
-         alpha: Wz
-       }
-     }
-     class Dv {
-       constructor(zz, tz) {
-         this.device = zz, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Ys.r), this.entities = void 0, this.entityStandIn =  … [truncated]
- ... (287 more removed lines; see GitHub link above)
+ 
+     function Ph(vv, zv, Pv, hv, Sv, ev) {
+       const gv = vv.dw(577, zv, 36 + ev.length);
+       if (gv < 0) return !1;
+       const pv = vv.view;
+       pv.setUint8(gv + 0, Pv);
+       for (let dv = 0; dv < 16; dv++) pv.setUint8(gv + 4 + 1 * dv, hv[dv]);
+       for (let dv = 0; dv < 16; dv++) pv.setUint8(gv + 20 + 1 * dv, Sv[dv]);
+       return TP(pv).set(ev, pv.byteOffset + gv + 36), !0
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7743` → after: `L1205-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1205-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1205-L1208) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7743)

```diff
-       zz.drawOffset(tz, Fz + Bv), tz[Fz + Pv] = zz.drawTime(), sz[Fz + rv] = zz.ring.drawStart(), sz[Fz + Yv] = zz.ring.drawCount()
+       const Sv = vv.dw(578, zv, 4 + hv.length);
+       if (Sv < 0) return !1;
+       const ev = vv.view;
+       return ev.setUint8(Sv + 0, Pv), TP(ev).set(hv, ev.byteOffset + Sv + 4), !0
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7745-L7815` → after: `L1210-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1210-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1210-L1215) · [Before (L7745-L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7745-L7815)

```diff
-     const mv = `\n${BF}\n\nconst MAX_STOPS = ${Hv.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Hv.b/4}>,\n\tcolor1: array<vec4f, ${Hv.b}>,\n\t … [truncated]
-     var Jv = sz(40729);
-     class Iv {
-       constructor(zz, tz, sz, Fz) {
-         this.device = zz, this.system = tz, this.frameIndex = sz, this.bindings = Fz, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Jv.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, zz * Hv.f * 4, this.system.ring.records, zz * Hv.f, (tz - zz) * Hv.f)
-         };
-         const {
-           name: Wz
-         } = tz;
-         this.ring = zz.createBuffer({
-           label: `particles-${Wz}`,
-           size: tz.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = zz.createBuffer({
-           label: `particles-uniforms-${Wz}`,
- ... (55 more removed lines; see GitHub link above)
+ 
+     function Sh(vv, zv, Pv, hv, Sv, ev, gv, pv) {
+       const dv = vv.dw(579, zv, 36);
+       if (dv < 0) return !1;
+       const Nv = vv.view;
+       return Nv.setFloat64(dv + 0, Pv, !0), Nv.setFloat64(dv + 8, hv, !0), Nv.setFloat64(dv + 16, Sv, !0), Nv.setFloat64(dv + 24, ev, !0), Nv.setUint16(dv + 32, gv, !0), Nv.setUint8(dv + 34, pv), !0
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7819-L7911` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1219) · [Before (L7819-L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7819-L7911)

```diff
-         this.device = zz, this.resources = tz, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const sz = zz.createBindGroupLayout({
-           label: "particles-system",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "read-only-storage"
-             }
-           }, {
- ... (77 more removed lines; see GitHub link above)
+         this.core = vv, this.afterCall = zv
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7913-L7914` → after: `L1221-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1221-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1221-L1223) · [Before (L7913-L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7913-L7914)

```diff
-       describePendingWork() {
-         return (0, gv.g)(this.systems.keys(), "Lite")
+       canModify(vv, zv, Pv) {
+         const hv = this.core.mSv(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7916-L7918` → after: `L1225-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1225-L1227) · [Before (L7916-L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7916-L7918)

```diff
-       tC(zz, tz) {
-         const sz = new gv.e(zz, tz, this);
-         return this.systems.set(sz, new Iv(this.device, sz, this.allocateFrameIndex(), this.bindings)), sz
+       terrainBlocked(vv, zv, Pv, hv, Sv) {
+         const ev = this.core.aev(vv, zv, Pv, hv, Sv);
+         return this.afterCall(), ev
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7920-L7921` → after: `L1229-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1229-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1229-L1231) · [Before (L7920-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7920-L7921)

```diff
-       x_(zz, tz) {
-         for (const sz of this.systems.keys()) sz.x_(zz, tz)
+       eD(vv, zv, Pv, hv) {
+         const Sv = this.core.EW(vv, zv, Pv, hv);
+         return this.afterCall(), Sv
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7923-L7934` → after: `L1233-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1233-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1233-L1235) · [Before (L7923-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7923-L7934)

```diff
-       canDraw(zz) {
-         const tz = this.systems.get(zz),
-           sz = zz.texture ? this.resources.boundTexture(zz.texture) : null;
-         if (!tz || !sz || !this.targetPipelines) return !1;
-         if (tz.texture = sz, tz.pipelines.length = 0, !aW(zz.blendMode)) return this.warnOnce(`blend:${zz.blendMode}`, `particle blend mode ${zz.blendMode} is not drawn (${zz.name})`), !0;
-         const Fz = (0, cW.l)(zz.blendMode);
-         for (const Wz of Fz) {
-           const zz = this.pipelineFor(Wz);
-           if (!1 === zz) return tz.pipelines.length = 0, !0;
-           zz && tz.pipelines.push(zz)
-         }
-         return tz.pipelines.length === Fz.length
+       blockData(vv, zv, Pv) {
+         const hv = this.core.cSv(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 62. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7936-L7937` → after: `L1237-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1237-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1237-L1239) · [Before (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7936-L7937)

```diff
-       disposeStopped(zz) {
-         zz.dispose()
+       cameraSweep(vv, zv, Pv, hv, Sv, ev, gv) {
+         const pv = this.core.ihv(vv, zv, Pv, hv, Sv, ev, gv);
+         return this.afterCall(), pv
```

#### 63. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7939-L7941` → after: `L1241-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1241-L1243) · [Before (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7939-L7941)

```diff
-       remove(zz) {
-         const tz = this.systems.get(zz);
-         tz && (this.systems.delete(zz), tz.destroy(), this.freeFrameIndices.push(tz.frameIndex))
+       hasServerTarget(vv) {
+         const zv = this.core.xSv(vv);
+         return this.afterCall(), zv
```

#### 64. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7943-L7955` → after: `L1245-L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1245-L1247) · [Before (L7943-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7943-L7955)

```diff
-       prepare(zz) {
-         const tz = zz.animationRatio || 1;
-         ot(this.renderable._worldCenter, zz, Ft), this.preparedTarget = this.target, this.draws.length = 0;
-         let sz = 0;
-         for (const Fz of this.systems.values()) {
-           const zz = Fz.system;
-           if (!zz.animateIfActive(tz)) continue;
-           if (zz.ring.takeUploads(Fz.upload), !zz.hasLiveParticles() || 0 === Fz.pipelines.length) continue;
-           Fz.writeUniforms(this.warnOnce), Fz.bind();
-           const Wz = 64 * Fz.frameIndex;
-           Fz.count = zz.ring.drawCount(), xv(zz, this.frameData, this.frameBits, Wz), sz = Math.max(sz, Wz + 64), this.draws.push(Fz)
-         }
-         sz > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, sz)
+       entityInteractable(vv) {
+         const zv = this.core.DSv(vv);
+         return this.afterCall(), zv
```

#### 65. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7957-L7964` → after: `L1249-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1249-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1249-L1251) · [Before (L7957-L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7957-L7964)

```diff
-       draw(zz) {
-         let tz = 0,
-           sz = null;
-         for (const Fz of this.draws) {
-           zz.setBindGroup(1, Fz.bindGroup), zz.setBindGroup(2, this.frameBindGroup, [256 * Fz.frameIndex]);
-           for (const Wz of Fz.pipelines) Wz !== sz && (zz.setPipeline(Wz), sz = Wz), zz.draw(4, Fz.count), tz++
-         }
-         return tz
+       entityCrouching(vv) {
+         const zv = this.core.OSv(vv);
+         return this.afterCall(), zv
```

#### 66. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7966-L7970` → after: `L1253-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1253-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1253-L1255) · [Before (L7966-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7966-L7970)

```diff
-       bindTarget(zz) {
-         this.target = zz;
-         const tz = `${zz._colorFormat}|${zz._depthStencilFormat}|${zz._depthCompare}|${zz._sampleCount}`;
-         let sz = this.pipelines.get(tz);
-         sz || (sz = new Map, this.pipelines.set(tz, sz)), this.targetPipelines = sz
+       predictServerPosition(vv, zv, Pv, hv) {
+         const Sv = this.core.BSv(vv, zv, Pv, hv);
+         return this.afterCall(), Sv
```

#### 67. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7972-L8011` → after: `L1257-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1257-L1259) · [Before (L7972-L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L7972-L8011)

```diff
-       pipelineFor(zz) {
-         var tz;
-         const sz = this.targetPipelines,
-           Fz = sz.get(zz);
-         if (void 0 !== Fz) return Fz;
-         sz.set(zz, null);
-         const Wz = this.target,
-           Xz = zz === cW.e,
-           Oz = null !== (tz = Wz._depthCompare) && void 0 !== tz ? tz : st;
-         return this.device.createRenderPipelineAsync({
-           label: `particles-${zz}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
-           },
- ... (24 more removed lines; see GitHub link above)
+       setOtherEntitySetting(vv, zv, Pv) {
+         const hv = this.core.Yhv(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 68. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8013-L8021` → after: `L1261-L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1261-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1261-L1263) · [Before (L8013-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8013-L8021)

```diff
-       allocateFrameIndex() {
-         const zz = this.freeFrameIndices.pop();
-         if (void 0 !== zz) return zz;
-         const tz = this.nextFrameIndex++;
-         if (64 * (tz + 1) > this.frameData.length) {
-           const zz = new Float32Array(2 * this.frameData.length);
-           zz.set(this.frameData), this.frameData = zz, this.frameBits = new Uint32Array(zz.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-         }
-         return tz
+       entityInfoBatch(vv) {
+         const zv = this.core.Dhv(vv);
+         return this.afterCall(), zv
```

#### 69. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8023-L8028` → after: `L1265-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1265-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1265-L1267) · [Before (L8023-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8023-L8028)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       entityName(vv) {
+         const zv = this.core.KSv(vv);
+         return this.afterCall(), zv
```

#### 70. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8030-L8041` → after: `L1269-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1269-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1269-L1271) · [Before (L8030-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8030-L8041)

```diff
-       createFrameBindGroup() {
-         return this.device.createBindGroup({
-           label: "particles-frames",
-           layout: this.frameLayout,
-           entries: [{
-             binding: 0,
-             resource: {
-               buffer: this.frameBuffer,
-               size: 32
-             }
-           }]
-         })
+       hasEffect(vv, zv) {
+         const Pv = this.core.RSv(vv, zv);
+         return this.afterCall(), Pv
```

#### 71. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8043-L8059` → after: `L1273-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1273-L1275) · [Before (L8043-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8043-L8059)

```diff
-     }
-     class ev {
-       constructor(zz, tz, sz, Fz, Wz) {
-         this.lite = zz, this.canvas = tz, this.info = sz, this.resources = Wz, this.ysz = !1, this.needPOTTextures = !1, this.uE = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = tz.width, this.renderHeight = tz.height, this.caps = {
-           maxTextureSize: Fz.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: Fz.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       getRenderWidth() {
- ... (1 more removed lines; see GitHub link above)
+       scratchPtr() {
+         const vv = this.core.ahv();
+         return this.afterCall(), vv
```

#### 72. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8061-L8062` → after: `L1277-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1277-L1279) · [Before (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8061-L8062)

```diff
-       getRenderHeight() {
-         return this.renderHeight
+       invSwap(vv, zv) {
+         const Pv = this.core.ASv(vv, zv);
+         return this.afterCall(), Pv
```

#### 73. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8064-L8065` → after: `L1281-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1281-L1283) · [Before (L8064-L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8064-L8065)

```diff
-       getHardwareScalingLevel() {
-         return 1
+       invMove(vv, zv, Pv) {
+         const hv = this.core.ISv(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 74. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8067-L8086` → after: `L1285-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1285-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1285-L1287) · [Before (L8067-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8067-L8086)

```diff
-       setSize(zz, tz) {
-         if (this.renderWidth === zz && this.renderHeight === tz) return !1;
-         const sz = this.renderWidth,
-           Fz = this.renderHeight;
-         this.renderWidth = zz, this.renderHeight = tz;
-         try {
-           (0, kz.n)(this.lite, zz, tz)
-         } catch (Wz) {
-           if (Wz instanceof DOMException && "InvalidStateError" === Wz.name) {
-             this.renderWidth = sz, this.renderHeight = Fz;
-             try {
-               (0, kz.n)(this.lite, sz, Fz)
-             } catch {
-               this.canvas.width = sz, this.canvas.height = Fz
-             }
-             return console.warn("WebGPU could not allocate render targets for resize", zz, tz, Wz.message), !1
- ... (4 more removed lines; see GitHub link above)
+       invQuickMove(vv, zv, Pv, hv) {
+         const Sv = this.core.QSv(vv, zv, Pv, hv);
+         return this.afterCall(), Sv
```

#### 75. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8088-L8090` → after: `L1289-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1289-L1291) · [Before (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8088-L8090)

```diff
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
+       invRemove(vv, zv, Pv) {
+         const hv = this.core.ZSv(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 76. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8092-L8093` → after: `L1293-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1293-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1293-L1295) · [Before (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8092-L8093)

```diff
-       getInfo() {
-         return this.info
+       invEnchant(vv, zv, Pv, hv, Sv) {
+         const ev = this.core.qSv(vv, zv, Pv, hv, Sv);
+         return this.afterCall(), ev
```

#### 77. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8095-L8097` → after: `L1297-L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1297-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1297-L1299) · [Before (L8095-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8095-L8097)

```diff
-       bY() {
-         const zz = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : zz - this.lastFrameTime, this.lastFrameTime = zz
+       craft(vv, zv, Pv) {
+         const hv = this.core.craft(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 78. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8099-L8100` → after: `L1301-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1301-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1301-L1303) · [Before (L8099-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8099-L8100)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       salvage(vv, zv, Pv) {
+         const hv = this.core.salvage(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 79. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8102-L8116` → after: `L1305-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1305-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1305-L1307) · [Before (L8102-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8102-L8116)

```diff
-       createCanvas(zz, tz) {
-         const sz = document.createElement("canvas");
-         return sz.width = zz, sz.height = tz, sz
-       }
-       yE(zz, tz) {
-         var sz;
-         return null !== (sz = this.resources.yE.get(zz)) && void 0 !== sz ? sz : new nz(this.resources, zz, tz)
-       }
-       atlasArray(zz, tz, sz) {
-         return this.resources.atlasArray(zz, tz, sz)
-       }
-     }
-     class Zv {
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       selectSlot(vv) {
+         const zv = this.core.bSv(vv);
+         return this.afterCall(), zv
```

#### 80. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8118-L8122` → after: `L1309-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1309-L1311) · [Before (L8118-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8118-L8122)

```diff
-       copyFromView(zz) {
-         this.fov = zz.fov, this.nearPlane = zz.near, this.farPlane = zz.far;
-         const tz = zz.worldMatrix;
-         for (let sz = 0; sz < 16; sz++)
-           if (this.worldMatrix[sz] !== tz[sz]) return this.worldMatrix.set(tz), void this.worldMatrixVersion++
+       closeChest() {
+         const vv = this.core.jSv();
+         return this.afterCall(), vv
```

#### 81. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8124-L8136` → after: `L1313-L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1313-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1313-L1315) · [Before (L8124-L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8124-L8136)

```diff
-     }
-     class Gv {
-       constructor(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
-         let Kz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = zz, this.Kg = tz, this.sceneTask = sz, this.gpuDevice = Fz, this.terrain = Wz, this.meshes = Xz, this.particles = Oz, this.resources = oz, this.sunShadow = Kz, this.gtz = void 0, this.backendName = "WebGPU (Lite)", this.T6 = void 0, this.modelMeshes = void 0 … [truncated]
-           po: zz => {
-             cz(zz) && oz.textureSlot(zz)
-           },
-           loaded: zz => cz(zz) ? oz.textureLoaded(zz) : null,
-           canvasUpdated: (zz, tz, sz) => {
-             cz(zz) && oz.canvasUpdated(zz, tz, sz)
-           }
-         }), this.T6 = Xz.T6, this.modelMeshes = Xz.modelMeshes, tz.camera = this.camera
+       itemAttributesBatch(vv) {
+         const zv = this.core.Ohv(vv);
+         return this.afterCall(), zv
```

#### 82. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8138-L8140` → after: `L1317-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1317-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1317-L1319) · [Before (L8138-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8138-L8140)

```diff
-       get castsEntitySunShadows() {
-         var zz, tz;
-         return null !== (zz = null === (tz = this.sunShadow) || void 0 === tz ? void 0 : tz.tracesEntities) && void 0 !== zz && zz
+       itemNames() {
+         const vv = this.core.JF();
+         return this.afterCall(), vv
```

#### 83. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8142-L8143` → after: `L1321-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1321-L1323) · [Before (L8142-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8142-L8143)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       blockProps() {
+         const vv = this.core.GSv();
+         return this.afterCall(), vv
```

#### 84. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8145-L8150` → after: `L1325-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1325-L1327) · [Before (L8145-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8145-L8150)

```diff
-       attach(zz) {
-         this.modelMeshes.attach(zz.model, zz.sceneMirror);
-         const tz = zz.Kg;
-         this.setClearColour(tz.clearColor.r, tz.clearColor.g, tz.clearColor.b), tz.draw = () => {
-           this.drawFrame(zz, tz)
-         }
+       itemProps() {
+         const vv = this.core.LSv();
+         return this.afterCall(), vv
```

#### 85. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8152-L8158` → after: `L1329-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1329-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1329-L1331) · [Before (L8152-L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8152-L8158)

```diff
-       render(zz) {
-         try {
-           this.gtz.bY(), zz.Kg.render()
-         } catch (tz) {
-           throw this.refusals.frameFailed(tz), tz
-         }
-         this.refusals.frameDrawn()
+       salvageRecipe(vv) {
+         const zv = this.core.Vhv(vv);
+         return this.afterCall(), zv
```

#### 86. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8160-L8161` → after: `L1333-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1333-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1333-L1335) · [Before (L8160-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8160-L8161)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       craftingView(vv, zv, Pv) {
+         const hv = this.core.nhv(vv, zv, Pv);
+         return this.afterCall(), hv
```

#### 87. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8163-L8171` → after: `L1337-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1337-L1339) · [Before (L8163-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8163-L8171)

```diff
-       describePendingWork() {
-         var zz, tz, sz, Fz;
-         const Wz = [...this.particles.describePendingWork(), ...null !== (zz = null === (tz = this.sunShadow) || void 0 === tz ? void 0 : tz.describePendingWork()) && void 0 !== zz ? zz : []],
-           Xz = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (sz = this.terrain.sceneDepth) && void 0 !== sz && sz.compiling ? 1 : 0) + (null !== (Fz = this.terrain.shadowMask) && void 0 !== Fz && Fz.compiling ? 1 : 0);
-         Xz > 0 && Wz.push(`${Xz} Lite pipelines compiling`);
-         const Oz = this.terrain.buffersAwaitingVerdict;
-         Oz > 0 && Wz.push(`${Oz} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const oz = this.resources.texturesLoading;
-         return oz > 0 && Wz.push(`${oz} Lite textures loading`), Wz
+       directorView() {
+         const vv = this.core.Chv();
+         return this.afterCall(), vv
```

#### 88. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8173-L8174` → after: `L1341-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1341-L1343) · [Before (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8173-L8174)

```diff
-       prepareTexture(zz) {
-         return null !== this.resources.boundTexture(zz) || this.resources.textureFailed(zz)
+       directorDefaultPose() {
+         const vv = this.core.mhv();
+         return this.afterCall(), vv
```

#### 89. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8176-L8187` → after: `L1345-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1345-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1345-L1347) · [Before (L8176-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8176-L8187)

```diff
-       drawFrame(zz, tz) {
-         var sz, Fz, Wz, Xz, Oz, oz;
-         const vz = No(zz);
-         this.camera.copyFromView(vz), this.setClearColour(vz.clearColour[0], vz.clearColour[1], vz.clearColour[2]), null === (sz = this.sunShadow) || void 0 === sz || sz.prepare(zz.CN, vz.eye, null !== (Fz = zz.CN.Cw) && void 0 !== Fz ? Fz : null), this.terrain.prepare(zz, vz), n … [truncated]
-         const Uz = performance.now();
-         this.resources.flushUploads(), null === (oz = this.sunShadow) || void 0 === oz || oz.traceEntities(this.meshes);
-         try {
-           (0, kz.l)(this.engine, this.lastFrameTime > 0 ? Uz - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = Uz
+       directorEntity(vv) {
+         const zv = this.core.jhv(vv);
+         return this.afterCall(), zv
```

#### 90. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8189-L8191` → after: `L1349-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1349-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1349-L1351) · [Before (L8189-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8189-L8191)

```diff
-       setClearColour(zz, tz, sz) {
-         const Fz = this.Kg.clearColor;
-         Fz.r = zz, Fz.g = tz, Fz.b = sz, Fz.a = 1
+       directorPose(vv, zv, Pv, hv, Sv, ev) {
+         const gv = this.core.fhv(vv, zv, Pv, hv, Sv, ev);
+         return this.afterCall(), gv
```

#### 91. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8193-L8229` → after: `L1353-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1353-L1355) · [Before (L8193-L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8193-L8229)

```diff
-     }
-     const Tv = "WebGPU device lost while Lite was starting";
- 
-     function cv(zz, tz) {
-       return "object" === typeof zz && null !== zz ? Object.assign(zz, {
-         startStep: tz
-       }) : zz
-     }
-     async function jv(zz, tz) {
-       const sz = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!sz) throw cv(new Error("No WebGPU adapter"), "no_adapter");
-       const Fz = sz.info,
-         Wz = {
-           vendor: (null === Fz || void 0 === Fz ? void 0 : Fz.vendor) || "unknown vendor",
- ... (21 more removed lines; see GitHub link above)
+       passTimings(vv) {
+         const zv = this.core.ySv(vv);
+         return this.afterCall(), zv
```

#### 92. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8231-L8276` → after: `L1357-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/261.js#L1357-L1359) · [Before (L8231-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/261.js#L8231-L8276)

```diff
-       var oz;
-       const vz = function(zz) {
-         return zz._device
-       }(Oz);
-       let Uz = null;
-       vz.lost.then((zz => {
-         Uz = zz, console.error(`WebGPU device lost (${zz.reason}): ${zz.message}`)
-       }));
-       try {
-         const sz = await async function(zz, tz, sz, Fz, Wz, Xz) {
-           const Oz = (0, iz.d)(zz),
-             oz = new SO(zz, tz),
-             vz = new po(tz),
-             Uz = new GO(tz, oz, (zz => function(zz, tz) {
-               for (const Fz of Ez(zz)) {
-                 var sz;
- ... (30 more removed lines; see GitHub link above)
+       drawCensus() {
+         const vv = this.core.nSv();
+         return this.afterCall(), vv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4-L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4-L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L4-L5779) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   40068: (zz, tz, sz) => {
+   40916: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Cv,
+       f: () => pv,
+       j: () => gv,
+       k: () => Nv
+     });
+     var hv = Pv(36745),
+       Sv = Pv(38245),
+       ev = Pv(38239);
+ 
+     function gv(vv, zv, Pv, hv) {
+       const Sv = ev.s;
+       zv.fill(0), vv.gravity.toArray(zv, Sv.gravity), vv.colorDead.toArray(zv, Sv.colorDead), Pv[Sv.ramp] = vv.useRampGradients ? 1 : 0;
+       const gv = vv.getColorGradients(),
+         pv = Wv(vv, gv, "colour", hv);
+ ... (5760 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6-L8` → after: `L5781-L7074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5781-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L5781-L7074) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L6-L8)

```diff
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(zz, tz).getContext("2d", sz);
-       const Fz = document.createElement("canvas");
-       return Fz.width = zz, Fz.height = tz, Fz.getContext("2d", sz)
+       let hv = null,
+         Sv = 0;
+       for (const ev of Pv) {
+         const Pv = ev.renderable.mesh;
+         Pv && !1 === Pv.visible || (ev.pipeline !== hv && (vv.setPipeline(ev.pipeline), hv = ev.pipeline), Sv += ev.draw(vv, zv))
+       }
+       return Sv
+     }
+     const Op = 6e4,
+       Dp = {
+         status: "ok"
+       },
+       Kp = {
+         status: "skipped"
+       };
+     async function Vp(vv, zv) {
+ ... (1278 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L11-L12` → after: `L7078-L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7078-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7078-L7087) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L11-L12)

```diff
-     function Wz(zz, tz) {
-       return zz.getContext("2d", tz)
+     function hd(vv) {
+       return !vv.gs && !vv.ehv && !vv.qa
+     }
+ 
+     function Sd() {
+       return {
+         bricks: new Uint32Array(Lz),
+         cells: new Uint16Array(32768),
+         special: new Uint8Array(Zz)
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L42-L43` → after: `L7090-L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7090-L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7090-L7093) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L42-L43)

```diff
-       constructor(zz, tz) {
-         this.memory = zz, this.access = tz, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.au = 0, this.u32 = new Xz.i(0), this.f32 = new Xz.e(0), this.u8 = new Xz.b(0), this.dataView = new Xz.g(new ArrayBuffer(0)), this.refresh()
+       constructor(vv, zv, Pv) {
+         let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
+         this.casters = vv, this.writeVoxels = zv, this.writePool = Pv, this.warn = hv, this.eyeChunk = null, this.slotChunk = new Array(Rz).fill(null), this.slotVersion = new Float64Array(Rz).fill(-1), this.slotPool = new Array(Rz).fill(null), this.starved = new Uint8Array(Rz), t … [truncated]
+         for (let Sv = 0; Sv < hP; Sv++) this.freePool[Sv] = 65535 - Sv
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L45-L46` → after: `L7095-L7096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7095-L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7095-L7096) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L45-L46)

```diff
-       refresh() {
-         this.ptr = this.access.ptr(), this.au = this.access.au(), this.buffer = (0, Xz.C)(this.memory()), this.u32 = new Xz.i(this.buffer, this.ptr, this.au >>> 2), this.f32 = new Xz.e(this.buffer, this.ptr, this.au >>> 2), this.u8 = new Xz.b(this.buffer, this.ptr, this.au), this … [truncated]
+       get queuedCount() {
+         return this.queue.length
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L48-L49` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7098-L7099) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L48-L49)

```diff
-       ensureViews() {
-         (0, Xz.C)(this.memory()) !== this.buffer && this.refresh()
+       get poolInUse() {
+         return hP - this.freeCount
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L51-L52` → after: `L7101-L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7101-L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7101-L7120) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L51-L52)

```diff
-       get view() {
-         return this.ensureViews(), this.dataView
+       chunkAdded(vv) {
+         if (null === this.eyeChunk || !this.inRadius(vv.i, vv.j, vv.k)) return;
+         const zv = Jz(vv.i, vv.j, vv.k);
+         this.slotChunk[zv] = vv, this.slotVersion[zv] = -1, this.enqueue(zv)
+       }
+       update(vv, zv, Pv) {
+         const hv = this.casters.blockCaster;
+         if (hv !== this.casterTable) {
+           this.casterTable = hv;
+           for (let vv = 0; vv < Rz; vv++) this.slotVersion[vv] = -1, this.slotChunk[vv] && this.enqueue(vv)
+         }
+         const Sv = Math.floor(vv[0] / 32),
+           ev = Math.floor(vv[1] / 32),
+           gv = Math.floor(vv[2] / 32);
+         (null === this.eyeChunk || this.eyeChunk[0] !== Sv || this.eyeChunk[1] !== ev || this.eyeChunk[2] !== gv) && (this.eyeChunk = [Sv, ev, gv], this.follow(zv), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
+         for (let pv = 0; pv < Rz; pv++) {
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L54-L55` → after: `L7122-L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7122-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7122-L7292) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L54-L55)

```diff
-       room(zz) {
-         return !!this.fits(zz) || (this.dropped++, !1)
+       writeRecord(vv, zv) {
+         this.records.set(zv, 4 * vv), this.windowTopStale = !0, this.writeVoxels(4 * vv, zv)
+       }
+       writeWindowTop() {
+         this.windowTopStale = !1;
+         const vv = this.records;
+         let zv = -1 / 0;
+         for (let hv = 0; hv < vv.length; hv += 4) {
+           const Pv = 255 & vv[hv + 3];
+           Pv !== qz && Pv !== Iz || !this.inRadius(vv[hv], vv[hv + 1], vv[hv + 2]) || (zv = Math.max(zv, vv[hv + 1] * Kz + (vv[hv + 3] >>> 8)))
+         }
+         const Pv = zv === -1 / 0 ? 1 : zv + Mz;
+         Pv !== this.windowTop[0] && (this.windowTop[0] = Pv, this.writeVoxels(Hz, this.windowTop))
+       }
+       follow(vv) {
+         const zv = this.eyeChunk,
+ ... (155 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L145-L161` → after: `L7297-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7297-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7297-L7305) · [Before (L145-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L145-L161)

```diff
-       constructor(zz, tz) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Oz(tz, {
-           ptr: () => zz.XN(),
-           au: () => zz.NXz(),
-           reserve: tz => zz.mXz(tz)
-         }), this.net = new Oz(tz, {
-           ptr: () => zz.rXz(),
-           au: () => zz.PXz(),
-           reserve: tz => zz.JXz(tz)
-         }), this.worker = new Oz(tz, {
-           ptr: () => zz.VXz(),
-           au: () => zz.SXz(),
-           reserve: tz => zz.IXz(tz)
-         }), this.cmd = new Oz(tz, {
-           ptr: () => zz.FXz(),
-           au: () => zz.tXz(),
- ... (1 more removed lines; see GitHub link above)
+       constructor(vv) {
+         this.device = vv, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new sP, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.oT = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = vv.createBuffer( … [truncated]
+           label: "sun-shadow-entities",
+           size: 589828,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         }), this.gridBuffer = vv.createBuffer({
+           label: "sun-shadow-entity-grids",
+           size: 16777216,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L164-L201` → after: `L7308-L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7308-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7308-L7422) · [Before (L164-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L164-L201)

```diff
-       reset(zz) {
-         this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(zz)
-       }
-     }
-     var Kz = sz(35805),
-       uz = sz(2277),
-       Nz = sz(4427),
-       bz = sz(40019);
-     const wz = "coreFrame",
-       Dz = "fatalStatus",
-       gz = "otherCall",
-       Hz = "coreRings",
-       Bz = "netIn",
-       Pz = "abi",
-       rz = "netOut",
-       Yz = "workerOut",
- ... (22 more removed lines; see GitHub link above)
+       update(vv, zv, Pv) {
+         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
+         const {
+           frame: hv
+         } = this;
+         hv.dw(vv, zv), Pv.forEachSunShadowCaster((vv => {
+           this.add(vv)
+         })), hv.finish();
+         const Sv = 0 === hv.parts;
+         if (Sv && this.uploadedEmpty) return;
+         this.uploadedEmpty = Sv;
+         const {
+           queue: ev
+         } = this.device, {
+           words: gv
+         } = hv;
+ ... (99 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L216-L226` → after: `L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7426) · [Before (L216-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L216-L226)

```diff
-     const yz = new Set([Dz, gz, xz, Tz]);
- 
-     function Mz(zz) {
-       return Zz.has(zz.site) ? zz.error instanceof WebAssembly.RuntimeError || (0, Wz.o)(zz.error) : !yz.has(zz.site) && zz.error instanceof Error
-     }
-     const dz = "events",
-       hz = [],
-       Qz = "debugLog",
-       kz = "terrainTextures",
-       iz = "sunShadowTextures",
-       Lz = new TextDecoder;
+     const dd = Math.cos(1 * Math.PI / 180);
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L230-L241` → after: `L7433-L7441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7433-L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7433-L7441) · [Before (L230-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L230-L241)

```diff
-         site: sz,
-         error: Wz,
-         header: Xz
-       } = zz, Oz = Xz ? (0, Fz.Wd)(Xz.lastError) : "noFrame", oz = `CORE-${sz===Dz?Oz:sz}`, vz = null === Wz || void 0 === Wz ? "" : ` ${(0,Kz.i)(Wz)}`, Uz = {
-         site: sz,
-         wasmBuild: tz.wasm,
-         clientVersion: tz.client
-       };
-       return Xz && (Uz.status = String(Xz.status), Uz.lastError = Oz, Uz.lastErrorCode = String(Xz.lastError), Uz.lastErrorDetail = String(Xz.lastErrorDetail), Uz.errorCount = String(Xz.errorCount), Uz.frameIndex = String(Xz.frameIndex), Uz.tickIndex = String(Xz.tickIndex)), {
-         code: oz,
-         message: `core ${sz}, last error ${Oz};${vz}`,
-         details: Uz
+         pixels: zv,
+         width: Pv,
+         height: hv
+       } = await QS(vv), Sv = new Uint8Array(Pv * hv);
+       for (let ev = 0; ev < Sv.length; ev++) Sv[ev] = zv[4 * ev + 3];
+       return {
+         width: Pv,
+         height: hv,
+         alpha: Sv
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L245-L252` → after: `L7445-L7487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7445-L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7445-L7487) · [Before (L245-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L245-L252)

```diff
-       constructor(zz, tz, sz) {
-         this.core = zz, this.memory = tz, this.handlers = sz, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, … [truncated]
-           ptr: 0,
-           len: 0,
-           net: hz,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Uz(zz, tz)
+       constructor(vv, zv) {
+         this.device = vv, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(mP.q), this.entities = void 0, this.entityStandIn =  … [truncated]
+           label: "sun-shadow",
+           size: 128,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         }), this.voxelBuffer = vv.createBuffer({
+           label: "sun-shadow-voxels",
+           size: 4 * yz,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         }), this.special = vv.createBuffer({
+           label: "sun-shadow-special",
+           size: 9568256,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         });
+         const [Pv, hv, Sv] = mP.t;
+         this.volume = vv.createTexture({
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L254-L255` → after: `L7489-L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7489-L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7489-L7490) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L254-L255)

```diff
-       get netKeptFrames() {
-         return this.keptFrames
+       get tracesEntities() {
+         return null !== this.entities
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L257-L258` → after: `L7492-L7497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7492-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7492-L7497) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L257-L258)

```diff
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
+       describePendingWork() {
+         var vv, zv;
+         const Pv = [];
+         !this.volumePassStarted || this.volumePass || this.volumePassFailed || Pv.push("Lite sun shadow volume pipeline compiling");
+         const hv = null !== (vv = null === (zv = this.casters) || void 0 === zv ? void 0 : zv.planesLoading) && void 0 !== vv ? vv : 0;
+         return hv > 0 && Pv.push(`${hv} Lite sun shadow plane casters loading their textures`), Pv
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L260-L261` → after: `L7499-L7533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7499-L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7499-L7533) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L260-L261)

```diff
-       hasPendingCommands() {
-         return this.rings.cmd.cursor > 0
+       entries() {
+         var vv, zv, Pv, hv;
+         const Sv = Oz.p;
+         return [{
+           binding: Sv.uniform,
+           resource: {
+             buffer: this.uniform
+           }
+         }, {
+           binding: Sv.fW,
+           resource: {
+             buffer: this.voxelBuffer
+           }
+         }, {
+           binding: Sv.special,
+           resource: {
+ ... (19 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L263-L269` → after: `L7535-L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7535-L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7535-L7556) · [Before (L263-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L263-L269)

```diff
-       framePaces(zz) {
-         if (this.stopped || this.drawsHeld) return !1;
-         try {
-           return this.core.UXz(zz)
-         } catch (tz) {
-           return this.crash(wz, tz), !1
-         }
+       prepare(vv, zv, Pv) {
+         var hv;
+         this.entitiesThisFrame = !1;
+         const Sv = null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.sunShadowReach()) && void 0 !== hv ? hv : {
+           sunShadow: !1,
+           airShadow: !1
+         };
+         if (!Pv || !Sv.sunShadow && !Sv.airShadow) return void(this.volumeHolds = null);
+         if (vv.oT.O4 !== Kz) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${vv.oT.O4}; everything is lit.`)));
+         const ev = this.start(vv);
+         this.casters.update(vv.kW, vv.kW.Pw.length);
+         const gv = vv.iW;
+         for (let Wv = 0; Wv < 3; Wv++) this.eye[Wv] = zv[Wv] + gv[Wv];
+         const pv = (0, mP.A)(this.eye);
+         this.staleNear = pv;
+         const dv = vv.oT.Ns;
+ ... (6 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L271-L272` → after: `L7558-L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7558-L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7558-L7569) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L271-L272)

```diff
-       get isStopped() {
-         return this.stopped
+       markStale(vv) {
+         const zv = this.staleNear,
+           Pv = Kz,
+           hv = [vv.i * Pv, vv.j * Pv, vv.k * Pv];
+         for (let ev = 0; ev < 3; ev++)
+           if (hv[ev] + Pv <= zv[ev] - Pv || hv[ev] >= zv[ev] + mP.t[ev] + Pv) return;
+         if (this.staleAll) return void(this.staleAllSwept = this.swept);
+         const Sv = this.stale;
+         for (let ev = 0; ev < Sv.length; ev += 4)
+           if (Sv[ev] === vv.i && Sv[ev + 1] === vv.j && Sv[ev + 2] === vv.k) return void(Sv[ev + 3] = this.swept);
+         if (16 === Sv.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
+         Sv.push(vv.i, vv.j, vv.k, this.swept)
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L274-L322` → after: `L7571-L7592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7571-L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7571-L7592) · [Before (L274-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L274-L322)

```diff
-       frame(zz, tz) {
-         var sz;
-         let Xz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.stopped) return !1;
-         if (!this.writePendingInput()) return !1;
-         const {
-           input: Oz,
-           net: oz,
-           worker: vz,
-           cmd: Uz
-         } = this.rings, Kz = oz.cursor, uz = tz && !this.drawsHeld;
-         let gz = Fz.M.Fatal;
-         const Hz = Uz.cursor;
-         let Pz = null;
-         try {
-           const tz = (uz ? Fz.ab.Draws : 0) | (Xz ? Fz.ab.NetAll : 0);
- ... (33 more removed lines; see GitHub link above)
+       writeStale() {
+         const vv = this.swept,
+           zv = this.stale;
+         this.staleAll && vv - this.staleAllSwept >= mP.j && (this.staleAll = !1, zv.length = 0);
+         let Pv = 0;
+         for (let Sv = 0; Sv < zv.length; Sv += 4)
+           if (vv - zv[Sv + 3] < mP.j) {
+             for (let vv = 0; vv < 4; vv++) zv[Pv + vv] = zv[Sv + vv];
+             Pv += 4
+           } zv.length = Pv;
+         const hv = this.uniformInts;
+         hv[3] = this.staleAll ? 5 : Pv / 4;
+         for (let Sv = 0; Sv < 4; Sv++)
+           for (let vv = 0; vv < 3; vv++) hv[16 + 4 * Sv + vv] = 4 * Sv < Pv ? zv[4 * Sv + vv] * Kz : 0
+       }
+       writeUniform() {
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L324-L331` → after: `L7594-L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7594-L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7594-L7613) · [Before (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L324-L331)

```diff
-         for (const Fz of Tz) {
-           if (this.stopped) return !1;
-           try {
-             var jz, Az;
-             null === (jz = (Az = this.handlers).onNetEvent) || void 0 === jz || jz.call(Az, Fz)
-           } catch (yz) {
-             return this.crashOn(Jz, yz), !1
-           }
+         zv ??= this.uniformWritten = new Int32Array(vv.length), zv.set(vv), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
+       }
+       traceEntities(vv) {
+         this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, vv)
+       }
+       computeVolume(vv, zv, Pv) {
+         const hv = this.buildVolumePass();
+         if (!hv) return void(this.volumeHolds = null);
+         const Sv = (0, mP.x)(this.volumeHolds, vv);
+         this.volumeHolds = vv;
+         const ev = 1 === Sv.length && Sv[0].size.every(((vv, zv) => vv === mP.t[zv])),
+           gv = this.sweptChunk,
+           pv = this.sweptLight,
+           dv = zv[0] !== pv[0] || zv[1] !== pv[1] || zv[2] !== pv[2],
+           Nv = Pv[0] !== gv[0] || Pv[1] !== gv[1] || Pv[2] !== gv[2],
+           lv = dv && Nd(zv, pv);
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L333` → after: `L7615-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7615-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7615-L7624) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L333)

```diff
-         return this.handEnvEvents()
+         if (ev ? this.swept += mP.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Sv.push(...(0, mP.E)(vv, this.slice)), this.slice = (this.slice + 1) % mP.j, this.swept++), 0 === Sv.len … [truncated]
+         const Tv = (0, mP.I)(this.workData, zv, Sv);
+         this.device.queue.writeBuffer(this.work, 0, this.workData);
+         const Wv = this.device.createCommandEncoder({
+             label: "sun-shadow-volume"
+           }),
+           wv = Wv.beginComputePass({
+             label: "sun-shadow-volume"
+           });
+         wv.setPipeline(hv.pipeline), wv.setBindGroup(FP.group, hv.bindGroup), wv.dispatchWorkgroups(Math.ceil(Tv / mP.n)), wv.end(), this.device.queue.submit([Wv.finish()])
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L335-L342` → after: `L7626-L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7626-L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7626-L7706) · [Before (L335-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L335-L342)

```diff
-       handEnvEvents() {
-         for (const Xz of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var zz, tz;
-             null === (zz = (tz = this.handlers).onReconnectGrace) || void 0 === zz || zz.call(tz, Xz)
-           } catch (Wz) {
-             return this.crashOn(Jz, Wz), !1
+       buildVolumePass() {
+         if (this.volumePass || this.volumePassStarted) return this.volumePass;
+         this.volumePassStarted = !0;
+         const vv = FP,
+           zv = GPUShaderStage.COMPUTE,
+           Pv = this.device.createBindGroupLayout({
+             label: "sun-shadow-volume",
+             entries: [{
+               binding: vv.uniform,
+               visibility: zv,
+               buffer: {
+                 type: "uniform"
+               }
+             }, {
+               binding: vv.fW,
+               visibility: zv,
+ ... (65 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L344-L351` → after: `L7708-L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7708-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7708-L7711) · [Before (L344-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L344-L351)

```diff
-         }
-         for (const Xz of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var sz, Fz;
-             null === (sz = (Fz = this.handlers).onEnvEvent) || void 0 === sz || sz.call(Fz, Xz)
-           } catch (Wz) {
-             return this.crashOn(Iz, Wz), !1
+         }).then((vv => {
+           this.volumePass = {
+             pipeline: vv,
+             bindGroup: hv
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L353-L354` → after: `L7713-L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7713-L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7713-L7715) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L353-L354)

```diff
-         }
-         return !this.stopped
+         }), (vv => {
+           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(vv)}`)
+         })), null
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L356-L357` → after: `L7717-L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7717-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7717-L7732) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L356-L357)

```diff
-       setEventWalker(zz) {
-         this.eventWalker = zz
+       start(vv) {
+         if (this.window) return this.window;
+         const zv = (vv, zv) => {
+           this.written = !0, this.device.queue.writeBuffer(this.special, 4 * vv, zv)
+         };
+         this.casters = new zd(((vv, Pv) => {
+           this.castersWritten = !0, zv(vv, Pv)
+         }), ld);
+         const Pv = new ed(this.casters, ((vv, zv) => {
+           this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * vv, zv)
+         }), zv);
+         return Pv.encoded = vv => {
+           this.markStale(vv)
+         }, vv.oT.on("chunkAdded", (vv => {
+           Pv.chunkAdded(vv)
+         })), this.window = Pv, Pv
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L359-L360` → after: `L7734-L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7734-L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7734-L7751) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L359-L360)

```diff
-       writePendingInput() {
-         if (this.stopped) return !1;
+     }
+     var Wd = Pv(38235),
+       wd = Pv(38239);
+     const ad = 0,
+       sd = 3,
+       Cd = 4,
+       cd = 5;
+ 
+     function Gd(vv, zv, Pv, hv) {
+       vv.drawOffset(zv, hv + ad), zv[hv + sd] = vv.drawTime(), Pv[hv + Cd] = vv.ring.drawStart(), Pv[hv + cd] = vv.ring.drawCount()
+     }
+     const md = `\n${sh}\n\nconst MAX_STOPS = ${wd.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${wd.c/4}>,\n\tcolor1: array<vec4f, ${wd.c}>,\n\t … [truncated]
+     var jd = Pv(40916);
+     class fd {
+       constructor(vv, zv, Pv, hv) {
+         this.device = vv, this.system = zv, this.frameIndex = Pv, this.bindings = hv, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, jd.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L362-L374` → after: `L7753-L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7753-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7753-L7790) · [Before (L362-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L362-L374)

```diff
-           input: zz
-         } = this.rings;
-         try {
-           const tz = this.unsentUiPrefs;
-           tz && zz.writeRecord(Fz.qb.UiPrefs, 0, tz.nametagCutDistance, 0, (0, Fz.pe)(tz)) && (this.unsentUiPrefs = null);
-           const sz = this.unsentEnvPrefs;
-           sz && zz.writeRecord(Fz.qb.EnvPrefs, (0, Fz._d)(sz), sz.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const Wz = this.unsentLookPrefs;
-           Wz && zz.writeRecord(Fz.qb.Sensitivity, 0, Wz.mouse, Wz.touch, (0, uz.j)(Wz.fovPercent)) && (this.unsentLookPrefs = null);
-           let Xz = 0;
-           for (const {
-               aux: Fz,
-               payload: Oz
+           name: Sv
+         } = zv;
+         this.ring = vv.createBuffer({
+           label: `particles-${Sv}`,
+           size: zv.ring.records.byteLength,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         }), this.uniforms = vv.createBuffer({
+           label: `particles-uniforms-${Sv}`,
+           size: 4 * wd.l,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         })
+       }
+       writeUniforms(vv) {
+         const zv = (0, jd.c)(this.system, this.uniformBits, vv);
+         zv && (this.uniformBits = zv, this.device.queue.writeBuffer(this.uniforms, 0, zv))
+       }
+ ... (22 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L376-L379` → after: `L7792-L7795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7792-L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7792-L7795) · [Before (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L376-L379)

```diff
-             of this.unsentOptions) {
-             if (!zz.writeOptions(Fz, Oz)) {
-               if (zz.cursor > 0) break;
-               this.optionsDropped++
+           }, {
+             binding: 1,
+             resource: {
+               buffer: this.ring
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L381-L385` → after: `L7797-L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7797-L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7797-L7904) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L381-L385)

```diff
-             Xz++
-           }
-           Xz > 0 && this.unsentOptions.splice(0, Xz)
-         } catch (tz) {
-           return this.crash(Hz, tz), !1
+           }, {
+             binding: 2,
+             resource: zv.sampler
+           }, {
+             binding: 3,
+             resource: zv.view
+           }, {
+             binding: 4,
+             resource: this.bindings.rampSampler
+           }, {
+             binding: 5,
+             resource: Pv
+           }]
+         }))
+       }
+       destroy() {
+ ... (92 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L389-L390` → after: `L7907-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7907-L7908) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L389-L390)

```diff
-       setHoldDraws(zz) {
-         this.drawsHeld = zz
+       get ghv() {
+         return this.systems.size
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L392-L394` → after: `L7910-L7932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7910-L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7910-L7932) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L392-L394)

```diff
-       setUiPrefs(zz) {
-         this.unsentUiPrefs = {
-           ...zz
+       reset() {
+         for (const vv of this.systems.keys()) vv.reset()
+       }
+       describePendingWork() {
+         return (0, Wd.d)(this.systems.keys(), "Lite")
+       }
+       vV(vv, zv) {
+         const Pv = new Wd.c(vv, zv, this);
+         return this.systems.set(Pv, new fd(this.device, Pv, this.allocateFrameIndex(), this.bindings)), Pv
+       }
+       j_(vv, zv) {
+         for (const Pv of this.systems.keys()) Pv.j_(vv, zv)
+       }
+       canDraw(vv) {
+         const zv = this.systems.get(vv),
+           Pv = vv.texture ? this.resources.boundTexture(vv.texture) : null;
+ ... (7 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L397-L399` → after: `L7936-L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7936-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7936-L7953) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L397-L399)

```diff
-       setEnvPrefs(zz) {
-         this.unsentEnvPrefs = {
-           ...zz
+       disposeStopped(vv) {
+         vv.dispose()
+       }
+       remove(vv) {
+         const zv = this.systems.get(vv);
+         zv && (this.systems.delete(vv), zv.destroy(), this.freeFrameIndices.push(zv.frameIndex))
+       }
+       prepare(vv) {
+         const zv = vv.animationRatio || 1;
+         pz(this.renderable._worldCenter, vv, hz), this.preparedTarget = this.target, this.draws.length = 0;
+         let Pv = 0;
+         for (const hv of this.systems.values()) {
+           const vv = hv.system;
+           if (!vv.animateIfActive(zv)) continue;
+           if (vv.ring.takeUploads(hv.upload), !vv.hasLiveParticles() || 0 === hv.pipelines.length) continue;
+           hv.writeUniforms(this.warnOnce), hv.bind();
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L402-L404` → after: `L7957-L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7957-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7957-L7962) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L402-L404)

```diff
-       setLookPrefs(zz) {
-         this.unsentLookPrefs = {
-           ...zz
+       draw(vv) {
+         let zv = 0,
+           Pv = null;
+         for (const hv of this.draws) {
+           vv.setBindGroup(1, hv.bindGroup), vv.setBindGroup(2, this.frameBindGroup, [256 * hv.frameIndex]);
+           for (const Sv of hv.pipelines) Sv !== Pv && (vv.setPipeline(Sv), Pv = Sv), vv.draw(4, hv.count), zv++
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L407-L411` → after: `L7966-L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7966-L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L7966-L8011) · [Before (L407-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L407-L411)

```diff
-       queueOptions(zz, tz) {
-         return !this.isStopped && (tz.byteLength > Fz.Lb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: zz,
-           payload: tz
-         }), !0))
+       bindTarget(vv) {
+         this.target = vv;
+         const zv = `${vv._colorFormat}|${vv._depthStencilFormat}|${vv._depthCompare}|${vv._sampleCount}`;
+         let Pv = this.pipelines.get(zv);
+         Pv || (Pv = new Map, this.pipelines.set(zv, Pv)), this.targetPipelines = Pv
+       }
+       pipelineFor(vv) {
+         var zv;
+         const Pv = this.targetPipelines,
+           hv = Pv.get(vv);
+         if (void 0 !== hv) return hv;
+         Pv.set(vv, null);
+         const Sv = this.target,
+           ev = vv === KS.c,
+           gv = null !== (zv = Sv._depthCompare) && void 0 !== zv ? zv : Pz;
+         return this.device.createRenderPipelineAsync({
+ ... (30 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L413-L414` → after: `L8013-L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8013-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8013-L8021) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L413-L414)

```diff
-       setChunkCap(zz) {
-         return this.callCore("setChunkCap", null, (tz => tz.AXz(zz)))
+       allocateFrameIndex() {
+         const vv = this.freeFrameIndices.pop();
+         if (void 0 !== vv) return vv;
+         const zv = this.nextFrameIndex++;
+         if (64 * (zv + 1) > this.frameData.length) {
+           const vv = new Float32Array(2 * this.frameData.length);
+           vv.set(this.frameData), this.frameData = vv, this.frameBits = new Uint32Array(vv.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
+         }
+         return zv
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L416-L418` → after: `L8023-L8028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8023-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8023-L8028) · [Before (L416-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L416-L418)

```diff
-       shedMemory(zz) {
-         const tz = this.callCore("shedMemory", null, (tz => tz.iXz(zz)));
-         return 0 === tz ? null : tz
+       createFrameBuffer() {
+         return this.device.createBuffer({
+           label: "particles-frames",
+           size: this.frameData.byteLength,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         })
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L420-L422` → after: `L8030-L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8030-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8030-L8041) · [Before (L420-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L420-L422)

```diff
-       addDistanceInUse() {
-         const zz = this.callCore("addDistanceInUse", null, (zz => zz.VWz()));
-         return 0 === zz ? null : zz
+       createFrameBindGroup() {
+         return this.device.createBindGroup({
+           label: "particles-frames",
+           layout: this.frameLayout,
+           entries: [{
+             binding: 0,
+             resource: {
+               buffer: this.frameBuffer,
+               size: 32
+             }
+           }]
+         })
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L424-L425` → after: `L8043-L8053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8043-L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8043-L8053) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L424-L425)

```diff
-       setChunkAddDistance(zz, tz) {
-         return this.callCore("setChunkAddDistance", !1, (sz => sz.TXz(zz, tz)))
+     }
+     class Yd {
+       constructor(vv, zv, Pv, hv, Sv) {
+         this.lite = vv, this.canvas = zv, this.info = Pv, this.resources = Sv, this.SPv = !1, this.needPOTTextures = !1, this.WE = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
+           reset: () => {
+             this.lastFrameTime = null
+           }
+         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = zv.width, this.renderHeight = zv.height, this.caps = {
+           maxTextureSize: hv.maxTextureDimension2D,
+           texture2DArrayMaxLayerCount: hv.maxTextureArrayLayers
+         }
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L427-L428` → after: `L8055-L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8055-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8055-L8056) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L427-L428)

```diff
-       setGameHost(zz) {
-         return this.callCore("setGameHost", !1, (tz => (tz.vXz(zz), this.gameHost = zz, !0)))
+       getCaps() {
+         return this.caps
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L430-L431` → after: `L8058-L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8058-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8058-L8059) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L430-L431)

```diff
-       setAntiCheatProbes(zz) {
-         return this.callCore("setAntiCheatProbes", !1, (tz => tz.ZXz(zz)))
+       getRenderWidth() {
+         return this.renderWidth
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L433-L436` → after: `L8061-L8062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8061-L8062) · [Before (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L433-L436)

```diff
-       setAmbientOcclusion(zz) {
-         this.callCore("setAmbientOcclusion", void 0, (tz => {
-           tz.eXz(zz)
-         }))
+       getRenderHeight() {
+         return this.renderHeight
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L438-L441` → after: `L8064-L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8064-L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8064-L8065) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L438-L441)

```diff
-       setPoseLod(zz) {
-         this.callCore("setPoseLod", void 0, (tz => {
-           tz.MXz(zz)
-         }))
+       getHardwareScalingLevel() {
+         return 1
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L443-L446` → after: `L8067-L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8067-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8067-L8086) · [Before (L443-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L443-L446)

```diff
-       setDebugLog(zz, tz) {
-         this.callCore(Qz, void 0, (sz => {
-           sz.eg(zz, tz)
-         }))
+       setSize(vv, zv) {
+         if (this.renderWidth === vv && this.renderHeight === zv) return !1;
+         const Pv = this.renderWidth,
+           hv = this.renderHeight;
+         this.renderWidth = vv, this.renderHeight = zv;
+         try {
+           (0, Lv.p)(this.lite, vv, zv)
+         } catch (Sv) {
+           if (Sv instanceof DOMException && "InvalidStateError" === Sv.name) {
+             this.renderWidth = Pv, this.renderHeight = hv;
+             try {
+               (0, Lv.p)(this.lite, Pv, hv)
+             } catch {
+               this.canvas.width = Pv, this.canvas.height = hv
+             }
+             return console.warn("WebGPU could not allocate render targets for resize", vv, zv, Sv.message), !1
+ ... (4 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L448-L449` → after: `L8088-L8090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8088-L8090) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L448-L449)

```diff
-       takeDebugLog(zz) {
-         return this.callCore(Qz, [], (tz => tz.Zg(zz)))
+       resize() {}
+       getRenderingCanvas() {
+         return this.canvas
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L451-L452` → after: `L8092-L8093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8092-L8093) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L451-L452)

```diff
-       setTextureLayers(zz) {
-         return this.callCore("setTextureLayers", !1, (tz => tz.kXz(zz)))
+       getInfo() {
+         return this.info
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L454-L460` → after: `L8095-L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8095-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8095-L8097) · [Before (L454-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L454-L460)

```diff
-       setBlockColours(zz) {
-         let {
-           blocks: tz,
-           counts: sz,
-           values: Fz
-         } = zz;
-         return this.callCore("setBlockColours", !1, (zz => zz.esz(tz, sz, Fz)))
+       Qm() {
+         const vv = performance.now();
+         this.deltaTime = null === this.lastFrameTime ? 0 : vv - this.lastFrameTime, this.lastFrameTime = vv
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L462-L463` → after: `L8099-L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8099-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8099-L8100) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L462-L463)

```diff
-       terrainTextureNames() {
-         return this.callCore(kz, [], (zz => zz.qXz()))
+       getDeltaTime() {
+         return this.deltaTime
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L465-L466` → after: `L8102-L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8102-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8102-L8104) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L465-L466)

```diff
-       setTerrainTextures(zz, tz, sz, Fz) {
-         return this.callCore(kz, !1, (Wz => Wz.QXz(zz, sz, tz, Fz)))
+       createCanvas(vv, zv) {
+         const Pv = document.createElement("canvas");
+         return Pv.width = vv, Pv.height = zv, Pv
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L468-L472` → after: `L8106-L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8106-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8106-L8108) · [Before (L468-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L468-L472)

```diff
-       setShaderPack(zz, tz, sz, Fz, Wz, Xz) {
-         return this.callCore("setShaderPack", !1, (Oz => {
-           var oz, vz;
-           return null !== (oz = null === (vz = Oz.isz) || void 0 === vz ? void 0 : vz.call(Oz, zz, tz, sz, Fz, Wz, Xz)) && void 0 !== oz && oz
-         }))
+       OE(vv, zv) {
+         var Pv;
+         return null !== (Pv = this.resources.OE.get(vv)) && void 0 !== Pv ? Pv : new Bv(this.resources, vv, zv)
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L474-L478` → after: `L8110-L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8110-L8111) · [Before (L474-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L474-L478)

```diff
-       sunShadowWantedTextures() {
-         return this.callCore(iz, null, (zz => {
-           var tz, sz;
-           return null !== (tz = null === (sz = zz.LXz) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : null
-         }))
+       atlasArray(vv, zv, Pv) {
+         return this.resources.atlasArray(vv, zv, Pv)
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L480-L484` → after: `L8113-L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8113-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8113-L8116) · [Before (L480-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L480-L484)

```diff
-       setSunShadowTexture(zz, tz, sz, Fz, Wz) {
-         this.callCore(iz, void 0, (Xz => {
-           var Oz;
-           null === (Oz = Xz.hXz) || void 0 === Oz || Oz.call(Xz, zz, tz, sz, Fz, Wz)
-         }))
+     }
+     class nd {
+       constructor() {
+         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L486-L490` → after: `L8118-L8122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8118-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8118-L8122) · [Before (L486-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L486-L490)

```diff
-       takeSunShadowWarnings() {
-         return this.callCore(iz, [], (zz => {
-           var tz, sz;
-           return null !== (tz = null === (sz = zz.nXz) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : []
-         }))
+       copyFromView(vv) {
+         this.fov = vv.fov, this.nearPlane = vv.near, this.farPlane = vv.far;
+         const zv = vv.worldMatrix;
+         for (let Pv = 0; Pv < 16; Pv++)
+           if (this.worldMatrix[Pv] !== zv[Pv]) return this.worldMatrix.set(zv), void this.worldMatrixVersion++
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L492-L496` → after: `L8124-L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8124-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8124-L8140) · [Before (L492-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L492-L496)

```diff
-       sunShadowsHeld() {
-         return this.callCore(iz, null, (zz => {
-           var tz, sz;
-           return null !== (tz = null === (sz = zz.lXz) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : null
-         }))
+     }
+     class Od {
+       constructor(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
+         let lv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
+         this.engine = vv, this.Is = zv, this.sceneTask = Pv, this.gpuDevice = hv, this.terrain = Sv, this.meshes = ev, this.particles = gv, this.resources = pv, this.sunShadow = lv, this.qvv = void 0, this.backendName = "WebGPU (Lite)", this.Vk = void 0, this.modelMeshes = void 0 … [truncated]
+           Vp: vv => {
+             Rv(vv) && pv.textureSlot(vv)
+           },
+           loaded: vv => Rv(vv) ? pv.textureLoaded(vv) : null,
+           canvasUpdated: (vv, zv, Pv) => {
+             Rv(vv) && pv.canvasUpdated(vv, zv, Pv)
+           }
+         }), this.Vk = ev.Vk, this.modelMeshes = ev.modelMeshes, zv.camera = this.camera
+       }
+       get castsEntitySunShadows() {
+         var vv, zv;
+ ... (1 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L498-L499` → after: `L8142-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8142-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8142-L8152) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L498-L499)

```diff
-       callCore(zz, tz, sz) {
-         if (this.stopped) return tz;
+       get sampleCount() {
+         return this.engine.msaaSamples
+       }
+       attach(vv) {
+         this.modelMeshes.attach(vv.model, vv.sceneMirror);
+         const zv = vv.Is;
+         this.setClearColour(zv.clearColor.r, zv.clearColor.g, zv.clearColor.b), zv.draw = () => {
+           this.drawFrame(vv, zv)
+         }
+       }
+       render(vv) {
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L501` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8154) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L501)

```diff
-           return sz(this.core)
+           this.qvv.Qm(), vv.Is.render()
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L503` → after: `L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8156) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L503)

```diff
-           return this.crash(zz, Fz), tz
+           throw this.refusals.frameFailed(zv), zv
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L506-L601` → after: `L8160-L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8160-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8160-L8161) · [Before (L506-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L506-L601)

```diff
-       readEvents(zz) {
-         this.netOffsets.length = 0;
-         const tz = this.headerView(),
-           sz = tz[Fz.ib.EventsPtr],
-           Wz = tz[Fz.ib.EventsLen];
-         if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Wz) return hz;
-         const Xz = [],
-           Oz = this.memory().buffer;
-         if (sz % 4 !== 0 || sz + Wz > Oz.byteLength) return this.crash(dz, `events of ${Wz} bytes at ${sz} outside ${Oz.byteLength} bytes of memory`), hz;
-         const oz = new DataView(Oz, sz, Wz),
-           vz = this.rings.net,
-           Uz = (tz, sz) => tz + sz <= zz ? vz.copyWritten(tz, sz) : null;
-         let Kz = 0;
-         for (; Kz < Wz;) {
-           const zz = Kz + Fz.V,
-             tz = zz <= Wz ? oz.getUint32(Kz, !0) : -1,
- ... (80 more removed lines; see GitHub link above)
+       lastFrameDrawCalls() {
+         return this.engine.drawCallCount
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L603-L607` → after: `L8163-L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8163-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8163-L8171) · [Before (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L603-L607)

```diff
-       forEachNetOut(zz) {
-         this.forEachOut(rz, "net-out", Fz.ib.NetOutPtr, Fz.ib.NetOutLen, Fz.Hb, 0, ((tz, sz, Wz, Xz) => {
-           const Oz = (0, Fz.de)(sz);
-           Oz === Fz.Ib.Frame ? zz((0, Fz.ce)(sz), Wz) : this.crash(rz, `net-out record at ${Xz} is kind ${Oz}, not a frame`)
-         }))
+       describePendingWork() {
+         var vv, zv, Pv, hv;
+         const Sv = [...this.particles.describePendingWork(), ...null !== (vv = null === (zv = this.sunShadow) || void 0 === zv ? void 0 : zv.describePendingWork()) && void 0 !== vv ? vv : []],
+           ev = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Pv = this.terrain.sceneDepth) && void 0 !== Pv && Pv.compiling ? 1 : 0) + (null !== (hv = this.terrain.shadowMask) && void 0 !== hv && hv.compiling ? 1 : 0);
+         ev > 0 && Sv.push(`${ev} Lite pipelines compiling`);
+         const gv = this.terrain.buffersAwaitingVerdict;
+         gv > 0 && Sv.push(`${gv} Lite terrain buffers awaiting their out-of-memory verdict`);
+         const pv = this.resources.texturesLoading;
+         return pv > 0 && Sv.push(`${pv} Lite textures loading`), Sv
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L609-L614` → after: `L8173-L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8173-L8174) · [Before (L609-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L609-L614)

```diff
-       forEachWorkerOut(zz) {
-         this.forEachOut(Yz, "worker-out", Fz.ib.WorkerOutPtr, Fz.ib.WorkerOutLen, Fz.zd, 4, ((tz, sz, Wz, Xz) => {
-           const Oz = 255 & tz,
-             oz = Oz === Fz.Pd.Init ? this.initOf(Wz, Xz) : Wz;
-           null !== oz && zz(Oz, tz >>> 8 & 16777215, oz)
-         }))
+       prepareTexture(vv) {
+         return null !== this.resources.boundTexture(vv) || this.resources.textureFailed(vv)
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L616-L657` → after: `L8176-L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8176-L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8176-L8185) · [Before (L616-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L616-L657)

```diff
-       initOf(zz, tz) {
-         const sz = this.memory().buffer;
-         if (zz.byteLength !== Fz.kb) return this.crash(Yz, `worker-out Init record at ${tz} is ${zz.byteLength} bytes, not a view`), null;
-         const Wz = new DataView(zz.buffer, zz.byteOffset, Fz.kb),
-           Xz = Wz.getUint32(0, !0),
-           Oz = Wz.getUint32(4, !0);
-         return Xz + Oz > sz.byteLength ? (this.crash(Yz, `worker-out Init record at ${tz} names ${Oz} bytes at ${Xz} outside ${sz.byteLength} bytes of memory`), null) : new Uint8Array(sz, Xz, Oz)
-       }
-       forEachOut(zz, tz, sz, Wz, Xz, Oz, oz) {
-         if (this.stopped || null === this.lastHeader) return;
-         const vz = this.headerView(),
-           Uz = vz[sz],
-           Kz = vz[Wz];
-         if (0 === Kz) return;
-         const uz = this.memory().buffer;
-         if (Uz % 4 !== 0 || Uz + Kz > uz.byteLength) return void this.crash(zz, `${tz} of ${Kz} bytes at ${Uz} outside ${uz.byteLength} bytes of memory`);
- ... (26 more removed lines; see GitHub link above)
+       drawFrame(vv, zv) {
+         var Pv, hv, Sv, ev, gv, pv;
+         const dv = Np(vv);
+         this.camera.copyFromView(dv), this.setClearColour(dv.clearColour[0], dv.clearColour[1], dv.clearColour[2]), null === (Pv = this.sunShadow) || void 0 === Pv || Pv.prepare(vv.vW, dv.eye, null !== (hv = vv.vW.Bw) && void 0 !== hv ? hv : null), this.terrain.prepare(vv, dv), n … [truncated]
+         const Nv = performance.now();
+         this.resources.flushUploads(), null === (pv = this.sunShadow) || void 0 === pv || pv.traceEntities(this.meshes);
+         try {
+           (0, Lv.o)(this.engine, this.lastFrameTime > 0 ? Nv - this.lastFrameTime : 0)
+         } finally {
+           this.resources.endUploadFrame()
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L660-L668` → after: `L8189-L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8189-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8189-L8191) · [Before (L660-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L660-L668)

```diff
-       crashOn(zz, tz) {
-         tz instanceof Wz.e ? this.crash(dz, tz.message) : this.crash(zz, tz)
-       }
-       crash(zz, tz) {
-         this.stopped || (this.stopped = !0, this.handlers.onCrash({
-           site: zz,
-           error: tz,
-           header: this.lastHeader
-         }))
+       setClearColour(vv, zv, Pv) {
+         const hv = this.Is.clearColor;
+         hv.r = vv, hv.g = zv, hv.b = Pv, hv.a = 1
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L670-L671` → after: `L8193-L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8193-L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8193-L8229) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L670-L671)

```diff
-       headerWord(zz) {
-         return this.stopped || null === this.lastHeader ? 0 : this.headerView()[zz]
+     }
+     const Dd = "WebGPU device lost while Lite was starting";
+ 
+     function Kd(vv, zv) {
+       return "object" === typeof vv && null !== vv ? Object.assign(vv, {
+         startStep: zv
+       }) : vv
+     }
+     async function Vd(vv, zv) {
+       const Pv = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance"
+       });
+       if (!Pv) throw Kd(new Error("No WebGPU adapter"), "no_adapter");
+       const hv = Pv.info,
+         Sv = {
+           vendor: (null === hv || void 0 === hv ? void 0 : hv.vendor) || "unknown vendor",
+ ... (21 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L673-L675` → after: `L8231-L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8231-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8231-L8276) · [Before (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L673-L675)

```diff
-       headerView() {
-         const zz = this.memory().buffer;
-         return zz !== this.headerBuffer && (this.headerBuffer = zz, this.header = new Uint32Array(zz, this.core.Lb(), Fz.hb)), this.header
+       var pv;
+       const dv = function(vv) {
+         return vv._device
+       }(gv);
+       let Nv = null;
+       dv.lost.then((vv => {
+         Nv = vv, console.error(`WebGPU device lost (${vv.reason}): ${vv.message}`)
+       }));
+       try {
+         const Pv = await async function(vv, zv, Pv, hv, Sv, ev) {
+           const gv = (0, Hv.b)(vv),
+             pv = new Bg(vv, zv),
+             dv = new Jp(zv),
+             Nv = new Og(zv, pv, (vv => function(vv, zv) {
+               for (const hv of uv(vv)) {
+                 var Pv;
+ ... (30 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L679` → after: `L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8280) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L679)

```diff
-   40019: (zz, tz, sz) => {
+   40176: (vv, zv, Pv) => {
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L682` → after: `L8284-L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8284-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8284-L8293) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L682)

```diff
-       f: () => Xz
+       d: () => hv,
+       g: () => Wv,
+       j: () => lv,
+       k: () => Cv,
+       n: () => ev,
+       p: () => pv,
+       r: () => dv,
+       s: () => gv,
+       v: () => sv,
+       z: () => wv
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L684-L687` → after: `L8295-L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8295-L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8295-L8298) · [Before (L684-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L684-L687)

```diff
-     var Fz = sz(4344);
-     let Wz = null;
- 
-     function Xz(zz) {
+     const hv = 3,
+       Sv = 0,
+       ev = 1,
+       gv = 2,
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L689-L696` → after: `L8300-L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8300-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8300-L8336) · [Before (L689-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L689-L696)

```diff
-         scanned: !1
-       };
-       try {
-         return zz()
-       } finally {
-         Wz = null
-       }
-     }
+         uniform: 3,
+         fW: 4,
+         special: 5,
+         volume: 6,
+         sampler: 7,
+         entities: 8,
+         entityGrids: 9
+       },
+       dv = 10,
+       Nv = "BloxdPackInputs",
+       lv = "bloxdPackInputs",
+       Tv = [{
+         name: "seconds",
+         type: "f32",
+         offset: 0
+       }, {
+ ... (21 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L699-L702` → after: `L8339-L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8339-L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/262.js#L8339-L8369) · [Before (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/262.js#L699-L702)

```diff
-       const zz = Wz;
-       if (null === zz) return (0, Fz.e)();
-       const tz = (0, Fz.e)(!zz.scanned);
-       return zz.scanned = !0, tz
+       const vv = Tv.map((vv => {
+         let {
+           name: zv,
+           type: Pv
+         } = vv;
+         return `    ${zv}: ${Pv},\n`
+       })).join("");
+       return `struct ${Nv} {\n${vv}}\n@group(${hv}) @binding(${Sv}) var<uniform> ${lv}: ${Nv};\n`
+     }
+ 
+     function av(vv, zv) {
+       const Pv = new DataView(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wv),
+         [hv, Sv, ev, gv, pv, dv] = Tv;
+       Pv.setFloat32(hv.offset, zv.seconds, !0), Pv.setUint32(Sv.offset, zv.lit ? 1 : 0, !0);
+       for (let Nv = 0; Nv < 3; Nv++) Pv.setInt32(ev.offset + 4 * Nv, zv.renderOffset[Nv], !0), Pv.setFloat32(gv.offset + 4 * Nv, zv.y_[Nv], !0), Pv.setFloat32(pv.offset + 4 * Nv, zv.eyePosition[Nv], !0), Pv.setFloat32(dv.offset + 4 * Nv, zv.shadowDirection[Nv], !0)
+     }
+ ... (15 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L6` → after: `L4-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/263.js#L4-L36) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/263.js#L4-L6)

```diff
-   40151: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       BloxdInformation: () => bz
+   40284: (vv, zv, Pv) => {
+     function hv(vv, zv, Pv) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(vv, zv).getContext("2d", Pv);
+       const hv = document.createElement("canvas");
+       return hv.width = vv, hv.height = zv, hv.getContext("2d", Pv)
+     }
+ 
+     function Sv(vv, zv) {
+       return vv.getContext("2d", zv)
+     }
+     Pv.d(zv, {
+       c: () => Sv,
+       d: () => hv
+     })
+   },
+   40209: (vv, zv, Pv) => {
+ ... (17 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L16` → after: `L38-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L38-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/263.js#L38-L696) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/263.js#L8-L16)

```diff
-     var Fz = sz(1173),
-       Wz = sz(65),
-       Xz = sz(106),
-       Oz = sz(1419),
-       oz = sz(133),
-       vz = sz(1036),
-       Uz = sz(1087);
-     const Kz = (0, Wz.lazy)((() => sz.e(116).then((() => sz(6100))))),
-       uz = (0, Wz.lazy)((() => sz.e(117).then((() => sz(6108)))));
+     var hv = Pv(4535),
+       Sv = Pv(39956),
+       ev = (Pv(40096), Pv(11));
+     class gv {
+       constructor(vv, zv) {
+         this.memory = vv, this.access = zv, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.GT = 0, this.u32 = new ev.m(0), this.f32 = new ev.f(0), this.u8 = new ev.b(0), this.dataView = new ev.j(new ArrayBuffer(0)), this.refresh()
+       }
+       refresh() {
+         this.ptr = this.access.ptr(), this.GT = this.access.GT(), this.buffer = (0, ev.L)(this.memory()), this.u32 = new ev.m(this.buffer, this.ptr, this.GT >>> 2), this.f32 = new ev.f(this.buffer, this.ptr, this.GT >>> 2), this.u8 = new ev.b(this.buffer, this.ptr, this.GT), this … [truncated]
+       }
+       ensureViews() {
+         (0, ev.L)(this.memory()) !== this.buffer && this.refresh()
+       }
+       get view() {
+         return this.ensureViews(), this.dataView
+       }
+ ... (643 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L19-L151` → after: `L699-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/263.js#L699-L702) · [Before (L19-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/263.js#L19-L151)

```diff
-       return (0, Uz.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, Uz.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, Uz.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, Uz.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, Uz.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, Uz.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
-           }), " ", "to report the exploit."]
- ... (117 more removed lines; see GitHub link above)
+       const vv = Sv;
+       if (null === vv) return (0, hv.h)();
+       const zv = (0, hv.h)(!vv.scanned);
+       return vv.scanned = !0, zv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/264.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/264.js#L4-L13)

```diff
-   40185: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Pz,
-       h: () => jz,
-       i: () => gz,
-       j: () => Hz,
-       k: () => Nz,
-       l: () => Dz,
-       m: () => wz,
-       q: () => bz
+   40356: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       BloxdInformation: () => wv
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L15-L359` → after: `L8-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L8-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/264.js#L8-L80) · [Before (L15-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/264.js#L15-L359)

```diff
-     var Fz = sz(36475),
-       Wz = sz(36654),
-       Xz = sz(36507),
-       Oz = sz(40190),
-       oz = sz(39374),
-       vz = sz(39179),
-       Uz = sz(39213),
-       Kz = sz(39181),
-       uz = sz(36518);
-     const Nz = Object.freeze(new Fz.h(0, 0, 0, 0)),
-       bz = Object.freeze(Fz.p.Zero()),
-       wz = Object.freeze(Fz.n.Zero()),
-       Dz = Object.freeze(vz.e.Zero()),
-       gz = Object.freeze(Wz.c.Black()),
-       Hz = Object.freeze(new Wz.d(0, 0, 0, 0)),
-       Bz = {
- ... (329 more removed lines; see GitHub link above)
+     var hv = Pv(1175),
+       Sv = Pv(52),
+       ev = Pv(73),
+       gv = Pv(1442),
+       pv = Pv(108),
+       dv = Pv(1042),
+       Nv = Pv(1082);
+     const lv = (0, Sv.lazy)((() => Pv.e(116).then((() => Pv(6237))))),
+       Tv = (0, Sv.lazy)((() => Pv.e(117).then((() => Pv(6239)))));
+ 
+     function Wv() {
+       return (0, Nv.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, Nv.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: "Security Exploit Bounty Program"
+ ... (57 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L362-L368` → after: `L83-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/264.js#L83-L122) · [Before (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/264.js#L362-L368)

```diff
-     function rz(zz, tz, sz) {
-       let Wz;
-       Wz = "object" === typeof tz ? tz : {
-         referenceFrame: tz ?? 0,
-         range: sz,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
+     function wv() {
+       const {
+         t: vv
+       } = (0, hv.x)(), [zv, Pv] = (0, Sv.useState)("partnersAndCredits"), wv = {
+         partnersAndCredits: {
+           title: ev.featureFlags.usePartnerLinks ? vv("homePage:partnersAndCredits") : vv("homePage:credits"),
+           content: (0, Nv.jsxs)(Nv.Fragment, {
+             children: [(0, Nv.jsx)("div", {
+               className: "BloxdInformationHeader FullyFancyText",
+               children: ev.featureFlags.usePartnerLinks ? vv("homePage:partnersAndCredits") : vv("homePage:credits")
+             }), ev.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+           })
+         },
+         bloxdIngameRules: {
+           title: vv("homePage:bloxdIngameRules"),
+           content: (0, Nv.jsxs)(Nv.Fragment, {
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L370-L443` → after: `L124-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L124-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/264.js#L124-L151) · [Before (L370-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/264.js#L370-L443)

```diff
-       let Xz = zz;
-       Wz.cloneOriginalAnimation && (Xz = zz.clone(), Xz.name = Wz.clonedAnimationName || Xz.name);
-       const Oz = Xz.getKeys();
-       if (!Oz.length) return Xz;
-       const oz = Wz.referenceFrame && Wz.referenceFrame >= 0 ? Wz.referenceFrame : 0;
-       let vz = 0;
-       const Uz = Oz[0];
-       let Kz = Oz.length - 1;
-       const uz = Oz[Kz],
-         Nz = {
-           referenceValue: Uz.value,
-           referencePosition: Fz.m.XD[0],
-           referenceQuaternion: Fz.m.Quaternion[0],
-           referenceScaling: Fz.m.XD[1],
-           keyPosition: Fz.m.XD[2],
-           keyQuaternion: Fz.m.Quaternion[1],
- ... (58 more removed lines; see GitHub link above)
+       return (0, Nv.jsxs)("div", {
+         className: "BloxdInformation",
+         children: [(0, Nv.jsxs)("div", {
+           className: "BloxdInformationSectionList",
+           children: [Object.keys(wv).map((hv => (0, Nv.jsx)(gv.K, {
+             active: zv === hv,
+             onClick: () => {
+               Pv(hv)
+             },
+             children: vv(wv[hv].title)
+           }, hv))), ev.featureFlags.usePartnerLinks && (0, Nv.jsx)(Nv.Fragment, {
+             children: (0, Nv.jsxs)(gv.K, {
+               onClick: () => {
+                 window.open("https://www.crazygames.com/c/io")
+               },
+               children: [(0, Nv.jsx)(dv.b, {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/265.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/265.js#L4-L5)

```diff
-   40268: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   40396: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => Gv,
+       e: () => xv,
+       h: () => Cv,
+       i: () => iv,
+       l: () => Wv,
+       p: () => sv,
+       q: () => av,
+       r: () => wv
+     });
+     var hv = Pv(36594),
+       Sv = Pv(36751),
+       ev = Pv(36620),
+       gv = Pv(40402),
+       pv = Pv(39518),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/266.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/266.js#L4-L5)

```diff
-   40274: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   40479: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/267.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/267.js#L4-L5)

```diff
-   40279: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   40483: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/268.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/268.js#L4-L5)

```diff
-   40288: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   40490: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/269.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/269.js#L4-L5)

```diff
-   40294: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   40495: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/270.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/270.js#L4-L5)

```diff
-   40302: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   40503: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/271.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/271.js#L4-L5)

```diff
-   40311: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   40509: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/272.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/272.js#L4-L5)

```diff
-   40319: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   40515: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/273.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/273.js#L4-L5)

```diff
-   40327: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   40521: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/274.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/274.js#L4-L5)

```diff
-   40336: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   40525: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/275.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   40341: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   40530: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/276.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   40349: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   40533: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/277.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   40352: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   40536: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/278.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   40361: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   40542: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/279.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   40370: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   40550: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   40379: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   40554: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/281.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/281.js#L2)

```diff
- export const ids = [281, 282];
+ export const ids = [281];
```

#### 2. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L754` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/281.js#L4-L754)

```diff
-   40397: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       CharacterCustomisationUI: () => hz
-     });
-     var Fz = sz(65),
-       Wz = sz(2735),
-       Xz = sz(1116),
-       Oz = sz(1857),
-       oz = sz(1020),
-       vz = sz.n(oz),
-       Uz = sz(1223),
-       Kz = sz(571),
-       uz = sz(1173),
-       Nz = sz(2140),
-       bz = sz(1521),
-       wz = sz(8318),
- ... (735 more removed lines; see GitHub link above)
+   40558: vv => {
+     vv.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282];
+ export const ids = [282, 283];
```

#### 2. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L4-L606) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L4)

```diff
-   40406: (zz, tz, sz) => {
+   40573: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       CharacterCustomisationUI: () => Zv
+     });
+     var hv = Pv(52),
+       Sv = Pv(2775),
+       ev = Pv(1108),
+       gv = Pv(1876),
+       pv = Pv(1035),
+       dv = Pv.n(pv),
+       Nv = Pv(1226),
+       lv = Pv(602),
+       Tv = Pv(1175),
+       Wv = Pv(2160),
+       wv = Pv(1548),
+       av = Pv(8501),
+ ... (587 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L8-L14` → after: `L610-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L610-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L610-L616) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L8-L14)

```diff
-     var Fz = sz(65),
-       Wz = sz(2537),
-       Xz = sz(1223),
-       Oz = sz(8318),
-       oz = sz(8891),
-       vz = sz(3307),
-       Uz = sz(1087);
+     var hv = Pv(52),
+       Sv = Pv(2584),
+       ev = Pv(1226),
+       gv = Pv(8501),
+       pv = Pv(9044),
+       dv = Pv(3392),
+       Nv = Pv(1082);
```

#### 4. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L23` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L625) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L23)

```diff
-           yo: Dz,
+           Fp: sv,
```

#### 5. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L71` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L673) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L71)

```diff
-                 zz(Fz, null !== (sz = tz[Fz]) && void 0 !== sz ? sz : (0, Oz.c)(Fz))
+                 vv(hv, null !== (Pv = zv[hv]) && void 0 !== Pv ? Pv : (0, gv.b)(hv))
```

#### 6. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L96-L97` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L698-L699) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L96-L97)

```diff
-           const zz = vz.d.register(Nz),
-             tz = oz.f.openCharacter(Bz.current, bz);
+           const vv = dv.c.register(Wv),
+             zv = pv.j.openCharacter(cv.current, wv);
```

#### 7. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L121` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L723) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L121)

```diff
-           Jz && Yz.current.playEmote(null !== Dz && void 0 !== Dz ? Dz : null)
+           Yv && jv.current.playEmote(null !== sv && void 0 !== sv ? sv : null)
```

#### 8. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L128` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/282.js#L730) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/282.js#L128)

```diff
-             } = oz.b[bz];
+             } = pv.e[wv];
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L4)

```diff
-   40415: (zz, tz, sz) => {
+   40581: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L6)

```diff
-       default: () => qt
+       CharacterPreview: () => Tv
```

#### 3. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L8-L260` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L8-L16) · [Before (L8-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L8-L260)

```diff
-     var Fz = sz(40422),
-       Wz = sz(40471),
-       Xz = sz(40477),
-       Oz = sz(65),
-       oz = sz(78),
-       vz = sz(40495),
-       Uz = sz(40498),
-       Kz = sz(4391),
-       uz = sz(40506),
-       Nz = sz(1831),
-       bz = sz(40514),
-       wz = sz(40527),
-       Dz = sz.n(wz),
-       gz = sz(40486),
-       Hz = sz(40493),
-       Bz = sz(1306),
- ... (237 more removed lines; see GitHub link above)
+     var hv = Pv(52),
+       Sv = Pv(2584),
+       ev = Pv(1226),
+       gv = Pv(8501),
+       pv = Pv(9044),
+       dv = Pv(3392),
+       Nv = Pv(1082);
+     const lv = .6 * Math.PI,
+       Tv = (0, hv.memo)((0, hv.forwardRef)((function(vv, zv) {
```

#### 4. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L262-L263` → after: `L18-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L18-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L18-L25) · [Before (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L262-L263)

```diff
-           text: Wz,
-           focus: Xz
+           onReady: Pv,
+           onDrawn: Tv,
+           owner: Wv = "other",
+           framing: wv = "player",
+           forcedCosmetics: av,
+           Fp: sv,
+           emotePlaySeq: Cv,
+           turntableFromYaw: iv = null
```

#### 5. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L265-L494` → after: `L27-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L27-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L27-L71) · [Before (L265-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L265-L494)

```diff
-         const Oz = zz.current,
-           oz = null !== Oz && void 0 !== Oz && Oz.dom.isConnected ? function(zz, tz) {
-             if (!Ez(zz)) return null;
-             const {
-               from: sz,
-               to: Fz
-             } = zz.selection.main, Wz = sz + tz.length;
-             return {
-               changes: {
-                 from: sz,
-                 to: Fz,
-                 insert: tz
-               },
-               selection: {
-                 anchor: Wz
-               },
- ... (214 more removed lines; see GitHub link above)
+         const cv = (0, hv.useRef)(null),
+           {
+             width: Gv,
+             height: mv
+           } = (0, Sv.d)(cv),
+           jv = (0, hv.useRef)(null),
+           fv = (0, hv.useRef)({}),
+           Fv = (0, hv.useRef)({}),
+           [Yv, nv] = (0, hv.useState)(!1),
+           Ov = (0, hv.useRef)(Pv);
+         Ov.current = Pv;
+         const Dv = (0, hv.useRef)(Tv);
+         Dv.current = Tv;
+         const Kv = (0, hv.useRef)(null),
+           Vv = (0, hv.useRef)(!1),
+           Uv = (0, hv.useRef)(!1),
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L496-L519` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L73-L92) · [Before (L496-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L496-L519)

```diff
-               of Yt) {
-               if (!sz && "explain" !== Wz) continue;
-               const Oz = document.createElement("button");
-               Oz.type = "button", Oz.textContent = Xz, "change" !== Wz && (Oz.title = Bt.c, Oz.dataset.asksAi = "true"), Oz.addEventListener("mousedown", (zz => {
-                 zz.preventDefault()
-               })), Oz.addEventListener("click", (() => {
-                 const sz = zz.state.selection.main;
-                 if (sz.empty) return;
-                 const Fz = {
-                   action: Wz,
-                   path: tz,
-                   fromLine: zz.state.doc.lineAt(sz.from).number,
-                   toLine: zz.state.doc.lineAt(sz.to > sz.from && zz.state.doc.lineAt(sz.to).from === sz.to ? sz.to - 1 : sz.to).number,
-                   text: zz.state.sliceDoc(sz.from, sz.to)
-                 };
-                 cz.o.Yg("WorldCodeAiSelection", Fz), zz.dispatch({
- ... (8 more removed lines; see GitHub link above)
+             },
+             isReady() {
+               var vv, zv;
+               return null !== (vv = null === (zv = jv.current) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
+             },
+             resetCamera() {
+               var vv;
+               null === (vv = jv.current) || void 0 === vv || vv.resetCamera()
+             },
+             setOrbit(vv) {
+               var zv;
+               null === (zv = jv.current) || void 0 === zv || zv.setOrbit(vv)
+             },
+             async ensureReadyForCapture(vv) {
+               var zv;
+               await (null === (zv = jv.current) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L522-L653` → after: `L95-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L95-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L95-L105) · [Before (L522-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L522-L653)

```diff
-         }
-       }(sz, zz, tz)))]
-     }
-     var mt = sz(1087);
-     const Jt = new Set(["(", "{", "[", "<"]),
-       It = new Set([")", "}", "]", ">"]),
-       Ct = {
-         text: "var(--codeTooltipText, white)",
-         parameterName: "var(--codeTooltipParameterName, orange)",
-         parameter: "var(--codeTooltipParameter, cyan)",
-         suffix: "var(--codeTooltipSuffix, pink)",
-         docs: "var(--codeTooltipDocs, gray)"
-       };
- 
-     function et(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
- ... (116 more removed lines; see GitHub link above)
+         }), [av, Rv]), (0, hv.useEffect)((() => {
+           const vv = dv.c.register(Wv),
+             zv = pv.j.openCharacter(cv.current, wv);
+           jv.current = zv;
+           let Pv = !0;
+           return zv.ready.then((() => {
+             Pv && (nv(!0), Ov.current())
+           })).catch((vv => {
+             console.error("Failed to set up the character preview", vv)
+           })), () => {
+             Pv = !1, vv(), zv.resetCamera(), zv.close(), jv.current = null
```

#### 8. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L655-L726` → after: `L107-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L107-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L107-L115) · [Before (L655-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L655-L726)

```diff
-         }
-       }
-     }
- 
-     function kt(zz, tz, sz) {
-       return Fz => {
-         var Wz;
-         if (!tz) return [];
-         const Xz = null === (Wz = Fz.selection.du[0]) || void 0 === Wz ? void 0 : Wz.head;
-         if (void 0 === Xz) return [];
-         const Oz = zz.languageService.getSignatureHelpItems(sz, Xz, {});
-         if (!Oz || !Oz.items.length) return [];
-         const oz = Oz.applicableSpan.start - Oz.items[0].prefixDisplayParts.map((zz => zz.text)).join("").length,
-           vz = Oz.applicableSpan.start,
-           Uz = Fz.doc.lineAt(Xz),
-           Kz = Uz.from,
- ... (56 more removed lines; see GitHub link above)
+         }), []), (0, hv.useEffect)((() => {
+           Gv <= 0 || mv <= 0 || jv.current.resize(Gv, mv)
+         }), [Gv, mv]), (0, hv.useEffect)((() => {
+           if (!Yv) return;
+           const vv = Fv.current;
+           for (const zv of ev.u) {
+             const Pv = null === av || void 0 === av ? void 0 : av[zv],
+               hv = vv[zv];
+             Pv && Pv !== hv ? jv.current.setCosmetic(zv, Pv) : !Pv && hv && fv.current[zv] && jv.current.setCosmetic(zv, fv.current[zv])
```

#### 9. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L728-L939` → after: `L117-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L117-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L117-L146) · [Before (L728-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L728-L939)

```diff
-         });
-         if (Xz.documentation) {
-           vz.push("\n\n");
-           for (const zz of Xz.documentation) vz.push({
-             str: zz.text,
-             style: {
-               color: Ct.docs
-             }
-           })
-         }
-         return [{
-           pos: Oz,
-           end: oz,
-           above: !0,
-           create: Qt(vz)
-         }]
- ... (196 more removed lines; see GitHub link above)
+           Fv.current = {
+             ...av
+           }, Uv.current = !0, Rv()
+         }), [av, Yv, Rv]), (0, hv.useEffect)((() => {
+           Yv && jv.current.playEmote(null !== sv && void 0 !== sv ? sv : null)
+         }), [sv, Cv, Yv]), (0, hv.useEffect)((() => {
+           if (!Yv || null === iv) return;
+           const vv = jv.current,
+             {
+               pitch: zv,
+               radius: Pv
+             } = pv.e[wv];
+           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return vv.setOrbit({
+             yaw: iv + lv,
+             pitch: zv,
+             radius: Pv
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L941-L1182` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/283.js#L148-L152) · [Before (L941-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/283.js#L941-L1182)

```diff
-         }), yt(zz, It, Oz), oz(Oz))
-       }));
-       const Zt = (0, Oz.useMemo)((() => {
-         if (!ot) return [];
-         const {
-           hu: zz,
-           fsMap: sz
-         } = ot;
-         ! function(zz, tz, sz, Fz) {
-           if (zz.getSourceFile(sz)) return;
-           const Wz = Fz || "\n";
-           tz.set(sz, Wz), zz.createFile(sz, Wz)
-         }(zz, sz, It, (Ez ? Jt.current : Yt.current) || "\n");
-         const Oz = tz && Mt(Ez ? null !== zt && void 0 !== zt ? zt : "index.ts" : pz),
-           oz = [(0, Wz.b)({
-             jsx: !1,
- ... (226 more removed lines; see GitHub link above)
+         }), [Yv, iv]), (0, Nv.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: cv
+         })
+       })))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L4-L12)

```diff
-   40422: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => jt,
-       d: () => Jt,
-       e: () => Bt,
-       h: () => vz,
-       j: () => At,
-       n: () => Uz,
-       o: () => Nt
+   40590: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       default: () => Jz
```

#### 2. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L14-L15800` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L8-L50) · [Before (L14-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L14-L15800)

```diff
-     var Fz = sz(40427),
-       Wz = sz(40434),
-       Xz = sz(40448);
-     class Oz {
-       constructor(zz, tz, sz, Fz) {
-         this.state = zz, this.pos = tz, this.explicit = sz, this.view = Fz, this.abortListeners = [], this.abortOnDocChange = !1
-       }
-       tokenBefore(zz) {
-         let tz = (0, Xz.mb)(this.state).resolveInner(this.pos, -1);
-         for (; tz && zz.indexOf(tz.name) < 0;) tz = tz.parent;
-         return tz ? {
-           from: tz.from,
-           to: this.pos,
-           text: this.state.sliceDoc(tz.from, this.pos),
-           type: tz.type
-         } : null
- ... (15771 more removed lines; see GitHub link above)
+     var hv = Pv(40593),
+       Sv = Pv(40648),
+       ev = Pv(40656),
+       gv = Pv(52),
+       pv = Pv(62),
+       dv = Pv(40669),
+       Nv = Pv(40672),
+       lv = Pv(4503),
+       Tv = Pv(40677),
+       Wv = Pv(1858),
+       wv = Pv(40681),
+       av = Pv(40697),
+       sv = Pv.n(av),
+       Cv = Pv(40660),
+       iv = Pv(40666),
+       cv = Pv(1327),
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15802-L15822` → after: `L52-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L52-L58) · [Before (L15802-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L15802-L15822)

```diff
-       return Wz = Xz.type.prop(oz) && (Fz = sz ? (0, vz.eb)(zz, Xz.from, 1) : (0, vz.eb)(zz, Xz.to, -1)) && Fz.matched ? sz ? Fz.end.to : Fz.end.from : sz ? Xz.to : Xz.from, Oz.l.cursor(Wz, sz ? -1 : 1)
-     }
- 
-     function Ez(zz, tz) {
-       return lz(zz, (sz => {
-         if (!sz.empty) return nz(sz, tz);
-         let Fz = zz.moveVertically(sz, tz);
-         return Fz.head != sz.head ? Fz : zz.moveToLineBoundary(sz, tz)
-       }))
-     }
-     const zt = zz => Ez(zz, !1),
-       tt = zz => Ez(zz, !0);
- 
-     function st(zz) {
-       let tz, sz = zz.scrollDOM.clientHeight < zz.scrollDOM.scrollHeight - 2,
-         Fz = 0,
- ... (5 more removed lines; see GitHub link above)
+       toDOM() {
+         const vv = document.createElement("span");
+         vv.className = "cm-remote-cursor-wrapper", vv.style.borderLeftColor = this.colour;
+         const zv = document.createElement("span");
+         if (zv.className = "cm-remote-cursor", zv.style.borderLeftColor = this.colour, vv.appendChild(zv), this.showName) {
+           const zv = document.createElement("span");
+           zv.className = "cm-remote-cursor-name", zv.style.backgroundColor = this.colour, zv.textContent = this.playerName, vv.appendChild(zv)
```

#### 4. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15824-L15830` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L60) · [Before (L15824-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L15824-L15830)

```diff
-         tz = zz.scrollDOM.clientHeight - Fz - Wz
-       } else tz = (zz.dom.ownerDocument.defaultView || window).innerHeight;
-       return {
-         marginTop: Fz,
-         marginBottom: Wz,
-         selfScroll: sz,
-         height: Math.max(zz.defaultLineHeight, tz - 5)
+         return vv
```

#### 5. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15832-L15849` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L62-L63) · [Before (L15832-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L15832-L15849)

```diff
-     }
- 
-     function Ft(zz, tz) {
-       let sz, Fz = st(zz),
-         {
-           state: Wz
-         } = zz,
-         Xz = iz(Wz.selection, (sz => sz.empty ? zz.moveVertically(sz, tz, Fz.height) : nz(sz, tz)));
-       if (Xz.eq(Wz.selection)) return !1;
-       if (Fz.selfScroll) {
-         let tz = zz.coordsAtPos(Wz.selection.main.head),
-           Oz = zz.scrollDOM.getBoundingClientRect(),
-           vz = Oz.top + Fz.marginTop,
-           Uz = Oz.bottom - Fz.marginBottom;
-         tz && tz.top > vz && tz.bottom < Uz && (sz = oz.i.scrollIntoView(Xz.main.head, {
-           y: "start",
- ... (2 more removed lines; see GitHub link above)
+       eq(vv) {
+         return this.colour === vv.colour && this.playerName === vv.playerName && this.showName === vv.showName
```

#### 6. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15851-L15863` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L65-L66) · [Before (L15851-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L15851-L15863)

```diff
-       return zz.dispatch(Lz(Wz, Xz), {
-         effects: sz
-       }), !0
-     }
-     const Wt = zz => Ft(zz, !1),
-       Xt = zz => Ft(zz, !0);
- 
-     function Ot(zz, tz, sz) {
-       let Fz = zz.lineBlockAt(tz.head),
-         Wz = zz.moveToLineBoundary(tz, sz);
-       if (Wz.head == tz.head && Wz.head != (sz ? Fz.to : Fz.from) && (Wz = zz.moveToLineBoundary(tz, sz, !1)), !sz && Wz.head == Fz.from && Fz.length) {
-         let sz = /^\s*/.exec(zz.state.sliceDoc(Fz.from, Math.min(Fz.from + 100, Fz.to)))[0].length;
-         sz && tz.head != Fz.from + sz && (Wz = Oz.l.cursor(Fz.from + sz))
+       get estimatedHeight() {
+         return -1
```

#### 7. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15865-L15963` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L68-L69) · [Before (L15865-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L15865-L15963)

```diff
-       return Wz
-     }
- 
-     function ot(zz, tz, sz) {
-       let Fz = !1,
-         Wz = iz(zz.selection, (tz => {
-           let Wz = (0, vz.eb)(zz, tz.head, -1) || (0, vz.eb)(zz, tz.head, 1) || tz.head > 0 && (0, vz.eb)(zz, tz.head - 1, 1) || tz.head < zz.doc.length && (0, vz.eb)(zz, tz.head + 1, -1);
-           if (!Wz || !Wz.end) return tz;
-           Fz = !0;
-           let Xz = Wz.start.from == tz.head ? Wz.end.to : Wz.end.from;
-           return sz ? Oz.l.range(tz.anchor, Xz) : Oz.l.cursor(Xz)
-         }));
-       return !!Fz && (tz(Lz(zz, Wz)), !0)
-     }
- 
-     function vt(zz, tz) {
- ... (83 more removed lines; see GitHub link above)
+       ignoreEvent() {
+         return !0
```

#### 8. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L15969-L16066` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L74) · [Before (L15969-L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L15969-L16066)

```diff
-       if (zz.state.readOnly) return !1;
-       let sz = "delete.selection",
-         {
-           state: Fz
-         } = zz,
-         Wz = Fz.changeByRange((Fz => {
-           let {
-             from: Wz,
-             to: Xz
-           } = Fz;
-           if (Wz == Xz) {
-             let Oz = tz(Fz);
-             Oz < Wz ? (sz = "delete.backward", Oz = It(zz, Oz, !1)) : Oz > Wz && (sz = "delete.forward", Oz = It(zz, Oz, !0)), Wz = Math.min(Wz, Oz), Xz = Math.max(Xz, Oz)
-           } else Wz = It(zz, Wz, !1), Xz = It(zz, Xz, !0);
-           return Wz == Xz ? {
-             range: Fz
- ... (82 more removed lines; see GitHub link above)
+       const Pv = [],
```

#### 9. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16068-L16081` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L76-L86) · [Before (L16068-L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16068-L16081)

```diff
-       for (let Xz of ct(zz)) {
-         if (sz ? Xz.to == zz.doc.length : 0 == Xz.from) continue;
-         let tz = zz.doc.lineAt(sz ? Xz.to + 1 : Xz.from - 1),
-           oz = tz.length + 1;
-         if (sz) {
-           Fz.push({
-             from: Xz.to,
-             to: tz.to
-           }, {
-             from: Xz.from,
-             insert: tz.text + zz.lineBreak
-           });
-           for (let tz of Xz.du) Wz.push(Oz.l.range(Math.min(zz.doc.length, tz.anchor + oz), Math.min(zz.doc.length, tz.head + oz)))
-         } else {
+       for (const [, gv] of vv) {
+         const vv = zv - gv.lastMoved < Lv;
+         if (Pv.push({
+             pos: gv.head,
+             decoration: Kv.c.widget({
+               widget: new Bv(gv.colour, gv.playerName, vv),
+               side: 1
+             })
+           }), gv.anchor !== gv.head) {
+           const vv = Math.min(gv.anchor, gv.head),
+             zv = Math.max(gv.anchor, gv.head);
```

#### 10. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16083-L16089` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L88-L96) · [Before (L16083-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16083-L16089)

```diff
-             from: tz.from,
-             to: Xz.from
-           }, {
-             from: Xz.to,
-             insert: zz.lineBreak + tz.text
-           });
-           for (let zz of Xz.du) Wz.push(Oz.l.range(zz.anchor - oz, zz.head - oz))
+             from: vv,
+             to: zv,
+             decoration: Kv.c.mark({
+               class: "cm-remote-selection",
+               attributes: {
+                 style: `background-color: ${gv.colour}33`
+               }
+             })
+           })
```

#### 11. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16092-L16103` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L99-L109) · [Before (L16092-L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16092-L16103)

```diff
-       return !!Fz.length && (tz(zz.update({
-         changes: Fz,
-         scrollIntoView: !0,
-         selection: Oz.l.create(Wz, zz.selection.mainIndex),
-         userEvent: "move.line"
-       })), !0)
-     }
- 
-     function At(zz, tz, sz) {
-       if (zz.readOnly) return !1;
-       let Fz = [];
-       for (let Xz of ct(zz)) sz ? Fz.push({
+       const Sv = new Dv.x,
+         ev = [];
+       for (const gv of Pv) ev.push({
+         bias: 1,
+         deco: gv.decoration,
+         from: gv.pos,
+         to: gv.pos
+       });
+       for (const gv of hv) ev.push({
+         bias: 0,
+         deco: gv.decoration,
```

#### 12. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16105-L16108` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L111) · [Before (L16105-L16108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16105-L16108)

```diff
-         insert: zz.doc.slice(Xz.from, Xz.to) + zz.lineBreak
-       }) : Fz.push({
-         from: Xz.to,
-         insert: zz.lineBreak + zz.doc.slice(Xz.from, Xz.to)
+         to: gv.to
```

#### 13. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16110-L16118` → after: `L113-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L113-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L113-L172) · [Before (L16110-L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16110-L16118)

```diff
-       let Wz = zz.changes(Fz);
-       return tz(zz.update({
-         changes: Wz,
-         selection: zz.selection.map(Wz, sz ? 1 : -1),
-         scrollIntoView: !0,
-         userEvent: "input.copyline"
-       })), !0
-     }
-     const yt = Mt(!1);
+       ev.sort(((vv, zv) => vv.from - zv.from || vv.deco.startSide - zv.deco.startSide || vv.bias - zv.bias));
+       for (const gv of ev) Sv.add(gv.from, gv.to, gv.deco);
+       return Sv.finish()
+     }
+     const Ev = Dv.E.define({
+       create: () => ({
+         cursors: new Map,
+         de: Kv.c.none
+       }),
+       update(vv, zv) {
+         let Pv = vv.cursors,
+           hv = !1;
+         if (zv.docChanged) {
+           const vv = new Map;
+           for (const [hv, Sv] of Pv) vv.set(hv, {
+             ...Sv,
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16121-L16169` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L175) · [Before (L16121-L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16121-L16169)

```diff
-       return tz => {
-         let {
-           state: sz,
-           dispatch: Fz
-         } = tz;
-         if (sz.readOnly) return !1;
-         let Wz = sz.changeByRange((tz => {
-           let {
-             from: Fz,
-             to: Wz
-           } = tz, Xz = sz.doc.lineAt(Fz), oz = !zz && Fz == Wz && function(zz, tz) {
-             if (/\(\)|\[\]|\{\}/.test(zz.sliceDoc(tz - 1, tz + 1))) return {
-               from: tz,
-               to: tz
-             };
-             let sz, Fz = (0, vz.mb)(zz).resolveInner(tz),
- ... (33 more removed lines; see GitHub link above)
+       return vv.field(kv)
```

#### 15. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16173-L16204` → after: `L180-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L180-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L180-L191) · [Before (L16173-L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16173-L16204)

```diff
-       let sz = -1;
-       return zz.changeByRange((Fz => {
-         let Wz = [];
-         for (let Oz = Fz.from; Oz <= Fz.to;) {
-           let Xz = zz.doc.lineAt(Oz);
-           Xz.number > sz && (Fz.empty || Fz.to > Xz.from) && (tz(Xz, Wz, Fz), sz = Xz.number), Oz = Xz.to + 1
-         }
-         let Xz = zz.changes(Wz);
-         return {
-           changes: Wz,
-           range: Oz.l.range(Xz.mapPos(Fz.anchor, 1), Xz.mapPos(Fz.head, 1))
-         }
-       }))
-     }
-     const ht = zz => {
-         let {
- ... (16 more removed lines; see GitHub link above)
+       const Pv = (0, gv.useRef)(null);
+       (0, gv.useEffect)((() => {
+         var vv;
+         (null === (vv = Pv.current) || void 0 === vv ? void 0 : vv.path) !== zv && (Pv.current = null)
+       }), [zv]);
+       const hv = vv => {
+         var hv;
+         const Sv = Pv.current;
+         if (null === vv || void 0 === vv || !vv.dom.isConnected || !Sv || Sv.path !== zv) return;
+         Pv.current = null;
+         const {
+           Yw: gv
```

#### 16. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16206-L16377` → after: `L193-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L193-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L193-L201) · [Before (L16206-L16377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16206-L16377)

```diff
-         return !tz.readOnly && (sz(tz.update(dt(tz, ((zz, sz) => {
-           let Fz = /^\s*/.exec(zz.text)[0];
-           if (!Fz) return;
-           let Wz = (0, Oz.U)(Fz, tz.tabSize),
-             Xz = 0,
-             oz = (0, vz.Y)(tz, Math.max(0, Wz - (0, vz.L)(tz)));
-           for (; Xz < Fz.length && Xz < oz.length && Fz.charCodeAt(Xz) == oz.charCodeAt(Xz);) Xz++;
-           sz.push({
-             from: zz.from + Xz,
-             to: zz.from + Fz.length,
-             insert: oz.slice(Xz)
-           })
-         })), {
-           userEvent: "delete.dedent"
-         })), !0)
-       },
- ... (156 more removed lines; see GitHub link above)
+         if (gv && null !== gv.text && performance.now() - gv.at < vz) {
+           const zv = function(vv, zv) {
+             if (vv === zv) return null;
+             const Pv = Math.min(vv.length, zv.length);
+             let hv = 0;
+             for (; hv < Pv && vv[hv] === zv[hv];) hv++;
+             let Sv = 0;
+             for (; Sv < Pv - hv && vv[vv.length - 1 - Sv] === zv[zv.length - 1 - Sv];) Sv++;
+             return {
```

#### 17. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16379` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L203-L204) · [Before (L16379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16379)

```diff
-               to: Fz
+               to: vv.length - Sv,
+               insert: zv.slice(hv, zv.length - Sv)
```

#### 18. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16381-L16390` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L206-L207) · [Before (L16381-L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16381-L16390)

```diff
-           }))), Fz = iz(tz.selection, (tz => {
-             let sz;
-             if (zz.lineWrapping) {
-               let Fz = zz.lineBlockAt(tz.head),
-                 Wz = zz.coordsAtPos(tz.head, tz.assoc || 1);
-               Wz && (sz = Fz.bottom + zz.documentTop - Wz.bottom + zz.defaultLineHeight / 2)
-             }
-             return zz.moveVertically(tz, !0, sz)
-           })).map(sz);
-           return zz.dispatch({
+           }(vv.state.doc.toString(), gv.text);
+           null !== zv && vv.dispatch({
```

#### 19. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16392-L16522` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L209-L210) · [Before (L16392-L16522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16392-L16522)

```diff
-             selection: Fz,
-             scrollIntoView: !0,
-             userEvent: "delete.line"
-           }), !0
-         }
-       }, {
-         key: "Shift-Mod-\\",
-         run: zz => {
-           let {
-             state: tz,
-             dispatch: sz
-           } = zz;
-           return ot(tz, sz, !1)
-         }
-       }, {
-         key: "Mod-/",
- ... (115 more removed lines; see GitHub link above)
+             userEvent: gv.placed ? "input" : void 0
+           })
```

#### 20. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16524-L16616` → after: `L212-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L212-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L212-L245) · [Before (L16524-L16616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16524-L16616)

```diff
-       }, {
-         key: "Backspace",
-         run: et,
-         shift: et,
-         preventDefault: !0
-       }, {
-         key: "Delete",
-         run: Zt,
-         preventDefault: !0
-       }, {
-         key: "Mod-Backspace",
-         mac: "Alt-Backspace",
-         run: Tt,
-         preventDefault: !0
-       }, {
-         key: "Mod-Delete",
- ... (77 more removed lines; see GitHub link above)
+         const {
+           doc: pv
+         } = vv.state, dv = pv.line(Math.min(Math.max(Sv.line, 1), pv.lines)), Nv = dv.from + Math.min(null !== (hv = Sv.column) && void 0 !== hv ? hv : 0, dv.length);
+         vv.dispatch({
+           selection: {
+             anchor: Nv
+           },
+           effects: ev.b.scrollIntoView(Nv, {
+             y: "center"
+           }),
+           userEvent: null !== gv && void 0 !== gv && gv.placed ? "select" : void 0
+         }), !1 !== (null === gv || void 0 === gv ? void 0 : gv.focused) && vv.focus()
+       };
+       return (0, Fv.g)("CodeEditorGoToLine", (zv => {
+         Pv.current = zv, hv(vv.current)
+       })), (0, Fv.g)("CodeEditorKeepEdits", (() => {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16618-L16633` → after: `L247-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L247-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L247-L271) · [Before (L16618-L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16618-L16633)

```diff
-       }, {
-         key: "Ctrl-t",
-         run: zz => {
-           let {
-             state: tz,
-             dispatch: sz
-           } = zz;
-           if (tz.readOnly) return !1;
-           let Fz = tz.changeByRange((zz => {
-             if (!zz.empty || 0 == zz.from || zz.from == tz.doc.length) return {
-               range: zz
-             };
-             let sz = zz.from,
-               Fz = tz.doc.lineAt(sz),
-               Wz = sz == Fz.from ? sz - 1 : (0, Oz.Y)(Fz.text, sz - Fz.from, !1) + Fz.from,
-               Xz = sz == Fz.to ? sz + 1 : (0, Oz.Y)(Fz.text, sz - Fz.from, !0) + Fz.from;
+       })), vv => {
+         var Sv;
+         const ev = Pv.current;
+         !1 === (null === ev || void 0 === ev || null === (Sv = ev.Yw) || void 0 === Sv ? void 0 : Sv.focused) && ev.path === zv || vv.focus(), hv(vv)
+       }
+     }
+     var Pz = Pv(4123),
+       hz = Pv(1175);
+ 
+     function Sz(vv, zv) {
+       const {
+         t: Pv
+       } = (0, hz.x)();
+       (0, Fv.g)("CodeEditorInsertText", (hv => {
+         let {
+           text: Sv,
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16638` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L276) · [Before (L16638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16638)

```diff
-                 insert: tz.doc.slice(sz, Xz).append(tz.doc.slice(Wz, sz))
+                 insert: zv
```

#### 23. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16640-L16676` → after: `L278-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L278-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L278-L287) · [Before (L16640-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16640-L16676)

```diff
-               range: Oz.l.cursor(Xz)
-             }
-           }));
-           return !Fz.changes.empty && (sz(tz.update(Fz, {
-             scrollIntoView: !0,
-             userEvent: "move.character"
-           })), !0)
-         }
-       }, {
-         key: "Ctrl-v",
-         run: Xt
-       }].map((zz => ({
-         mac: zz.key,
-         run: zz.run,
-         shift: zz.shift
-       }))))),
- ... (21 more removed lines; see GitHub link above)
+               selection: {
+                 anchor: Sv
+               },
+               effects: [Kv.g.scrollIntoView(Sv, {
+                 y: "center"
+               }), ov.of({
+                 from: Pv,
+                 to: Sv
+               })],
+               userEvent: "input"
```

#### 24. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16678-L16700` → after: `L289-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L289-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L289-L320) · [Before (L16678-L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16678-L16700)

```diff
-           })]
-         }()), !1 !== zz.foldGutter && Fz.push((0, vz.w)()), !1 !== zz.drawSelection && Fz.push((0, oz.x)()), !1 !== zz.dropCursor && Fz.push((0, oz.B)()), !1 !== zz.allowMultipleSelections && Fz.push(Oz.p.allowMultipleSelections.of(!0)), !1 !== zz.indentOnInput && Fz.push((0, vz. … [truncated]
-           fallback: !0
-         })), !1 !== zz.bracketMatching && Fz.push((0, vz.k)()), !1 !== zz.closeBrackets && Fz.push((0, lt.e)()), !1 !== zz.autocompletion && Fz.push((0, lt.c)()), !1 !== zz.rectangularSelection && Fz.push((0, oz.db)()), !1 !== tz && Fz.push((0, oz.t)()), !1 !== zz.highlightActive … [truncated]
-       },
-       St = sz(40463);
-     const Vt = "#e5c07b",
-       Rt = "#e06c75",
-       pt = "#56b6c2",
-       ft = "#ffffff",
-       Et = "#abb2bf",
-       zs = "#7d8799",
-       ts = "#61afef",
-       ss = "#98c379",
-       Fs = "#d19a66",
-       Ws = "#c678dd",
- ... (7 more removed lines; see GitHub link above)
+           }(gv.state, Sv) : null;
+         null !== gv && null !== pv ? (gv.dispatch(pv), ev && gv.focus(), setTimeout((() => {
+           gv.dom.isConnected && gv.dispatch({
+             effects: ov.of(null)
+           })
+         }), 1500)) : (0, Pz.b)(Sv).then((() => {
+           zv({
+             message: Pv("codeEditorWorld:pickCopied", {
+               coords: Sv
+             }),
+             type: "success"
+           })
+         }), (vv => {
+           console.error("Pick could not copy the coordinates", vv), zv({
+             message: Pv("codeEditorWorld:pickPlaceCursor", {
+               coords: Sv
+ ... (16 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16712` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L332) · [Before (L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16712)

```diff
-           backgroundColor: Us
+           backgroundColor: "#d7d8de"
```

#### 26. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16715` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L335) · [Before (L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16715)

```diff
-           backgroundColor: Xs,
+           backgroundColor: "#f0f0f1",
```

#### 27. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16719` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L339) · [Before (L16719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16719)

```diff
-           borderBottom: "2px solid black"
+           borderBottom: "2px solid #d4d4d6"
```

#### 28. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16722` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L342) · [Before (L16722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16722)

```diff
-           borderTop: "2px solid black"
+           borderTop: "2px solid #d4d4d6"
```

#### 29. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16725` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L345) · [Before (L16725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16725)

```diff
-           backgroundColor: "#72a1ff59",
+           backgroundColor: "#72a1ff40",
```

#### 30. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16732` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L352) · [Before (L16732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16732)

```diff
-           backgroundColor: "#6699ff0b"
+           backgroundColor: "#383a420a"
```

#### 31. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16735` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L355) · [Before (L16735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16735)

```diff
-           backgroundColor: "#aafe661a"
+           backgroundColor: "#50a14f26"
```

#### 32. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16738` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L358) · [Before (L16738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16738)

```diff
-           backgroundColor: "#bad0f847"
+           backgroundColor: "#4078f233"
```

#### 33. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16751` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L371) · [Before (L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16751)

```diff
-           color: "#ddd"
+           color: "#555"
```

#### 34. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16772` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L392) · [Before (L16772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16772)

```diff
-         dark: !0
+         dark: !1
```

#### 35. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16774-L16776` → after: `L394-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L394-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L394-L396) · [Before (L16774-L16776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16774-L16776)

```diff
-       Ns = vz.c.define([{
-         tag: St.j.keyword,
-         color: Ws
+       sz = Qv.d.define([{
+         tag: ez.l.keyword,
+         color: "#a626a4"
```

#### 36. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16778` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L398) · [Before (L16778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16778)

```diff
-         tag: [St.j.name, St.j.deleted, St.j.character, St.j.propertyName, St.j.macroName],
+         tag: [ez.l.name, ez.l.deleted, ez.l.character, ez.l.propertyName, ez.l.macroName],
```

#### 37. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16781-L16782` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L401-L402) · [Before (L16781-L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16781-L16782)

```diff
-         tag: [St.j.function(St.j.variableName), St.j.labelName],
-         color: ts
+         tag: [ez.l.function(ez.l.variableName), ez.l.labelName],
+         color: "#4078f2"
```

#### 38. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16784` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L404) · [Before (L16784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16784)

```diff
-         tag: [St.j.color, St.j.constant(St.j.name), St.j.standard(St.j.name)],
+         tag: [ez.l.color, ez.l.constant(ez.l.name), ez.l.standard(ez.l.name)],
```

#### 39. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16787` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L407) · [Before (L16787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16787)

```diff
-         tag: [St.j.definition(St.j.name), St.j.separator],
+         tag: [ez.l.definition(ez.l.name), ez.l.separator],
```

#### 40. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16790-L16791` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L410-L411) · [Before (L16790-L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16790-L16791)

```diff
-         tag: [St.j.typeName, St.j.className, St.j.number, St.j.changed, St.j.annotation, St.j.modifier, St.j.self, St.j.namespace],
-         color: Vt
+         tag: [ez.l.typeName, ez.l.className, ez.l.number, ez.l.changed, ez.l.annotation, ez.l.modifier, ez.l.self, ez.l.namespace],
+         color: "#c18401"
```

#### 41. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16793-L16794` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L413-L414) · [Before (L16793-L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16793-L16794)

```diff
-         tag: [St.j.operator, St.j.operatorKeyword, St.j.url, St.j.escape, St.j.regexp, St.j.link, St.j.special(St.j.string)],
-         color: pt
+         tag: [ez.l.operator, ez.l.operatorKeyword, ez.l.url, ez.l.escape, ez.l.regexp, ez.l.link, ez.l.special(ez.l.string)],
+         color: "#0184bc"
```

#### 42. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16796` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L416) · [Before (L16796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16796)

```diff
-         tag: [St.j.meta, St.j.comment],
+         tag: [ez.l.meta, ez.l.comment],
```

#### 43. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16799` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L419) · [Before (L16799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16799)

```diff
-         tag: St.j.strong,
+         tag: ez.l.strong,
```

#### 44. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16802` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L422) · [Before (L16802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16802)

```diff
-         tag: St.j.emphasis,
+         tag: ez.l.emphasis,
```

#### 45. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16805` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L425) · [Before (L16805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16805)

```diff
-         tag: St.j.strikethrough,
+         tag: ez.l.strikethrough,
```

#### 46. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16808` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L428) · [Before (L16808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16808)

```diff
-         tag: St.j.link,
+         tag: ez.l.link,
```

#### 47. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16812` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L432) · [Before (L16812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16812)

```diff
-         tag: St.j.heading,
+         tag: ez.l.heading,
```

#### 48. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16816` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L436) · [Before (L16816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16816)

```diff
-         tag: [St.j.atom, St.j.bool, St.j.special(St.j.variableName)],
+         tag: [ez.l.atom, ez.l.bool, ez.l.special(ez.l.variableName)],
```

#### 49. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16819-L16820` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L439-L440) · [Before (L16819-L16820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16819-L16820)

```diff
-         tag: [St.j.processingInstruction, St.j.string, St.j.inserted],
-         color: ss
+         tag: [ez.l.processingInstruction, ez.l.string, ez.l.inserted],
+         color: "#50a14f"
```

#### 50. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16822-L16823` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L442-L443) · [Before (L16822-L16823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16822-L16823)

```diff
-         tag: St.j.invalid,
-         color: ft
+         tag: ez.l.invalid,
+         color: "#000000"
```

#### 51. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16825-L16847` → after: `L445-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L445-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L445-L453) · [Before (L16825-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16825-L16847)

```diff
-       bs = [us, (0, vz.ib)(Ns)];
-     var ws = oz.i.theme({
-       "&": {
-         backgroundColor: "#fff"
-       }
-     }, {
-       dark: !1
-     });
-     class Ds {
-       constructor(zz, tz) {
-         this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = tz, this.timeoutMS = tz, this.callbacks.push(zz)
-       }
-       wN() {
-         if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
-           this.isTimeExhausted = !0;
-           var zz = this.callbacks.slice();
- ... (7 more removed lines; see GitHub link above)
+       Cz = [az, (0, Qv.mb)(sz)];
+     var iz = Pv(36406),
+       cz = Pv(40753);
+     const Gz = ev.h.define(),
+       mz = ev.i.define({
+         create: () => !1,
+         update(vv, zv) {
+           for (const Pv of zv.effects) Pv.is(Gz) && (vv = Pv.value);
+           return vv
```

#### 52. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16849-L16883` → after: `L455-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L455-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L455-L465) · [Before (L16849-L16883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16849-L16883)

```diff
-       }
-       cancel() {
-         this.isCancelled = !0, this.callbacks.length = 0
-       }
-       reset() {
-         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
-       }
-       get isDone() {
-         return this.isCancelled || this.isTimeExhausted
-       }
-     }
-     class gs {
-       constructor() {
-         this.interval = null, this.latches = new Set
-       }
-       add(zz) {
- ... (19 more removed lines; see GitHub link above)
+       }),
+       jz = [{
+         action: "explain",
+         label: "Explain this"
+       }, {
+         action: "fix",
+         label: "Fix this"
+       }, {
+         action: "change",
+         label: "Change this\u2026"
+       }];
```

#### 53. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16885-L16923` → after: `L467-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L467-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L467-L479) · [Before (L16885-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16885-L16923)

```diff
-     function rs(zz) {
-       var {
-         value: tz,
-         selection: sz,
-         onChange: Fz,
-         onStatistics: Wz,
-         onCreateEditor: vz,
-         onUpdate: Uz,
-         extensions: Kz = Ps,
-         autoFocus: uz,
-         theme: Nz = "light",
-         height: bz = null,
-         minHeight: wz = null,
-         maxHeight: Dz = null,
-         width: gz = null,
-         minWidth: Hz = null,
- ... (23 more removed lines; see GitHub link above)
+     function fz(vv, zv) {
+       return [mz, ev.k.fromClass(class {
+         constructor(vv) {
+           this.view = vv, this.onDown = vv => {
+             const zv = vv.target instanceof Element && null !== vv.target.closest(".cm-tooltip");
+             0 !== vv.button || zv || this.view.state.field(mz) || this.view.dispatch({
+               effects: Gz.of(!0)
+             })
+           }, this.onUp = () => {
+             this.view.state.field(mz) && this.view.dispatch({
+               effects: Gz.of(!1)
+             })
+           }, vv.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
```

#### 54. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16925-L16930` → after: `L481-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L481-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L481-L519) · [Before (L16925-L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16925-L16930)

```diff
-       }), Mz = oz.i.updateListener.of((zz => {
-         if (zz.docChanged && "function" === typeof Fz && !zz.transactions.some((zz => zz.annotation(Bs)))) {
-           jz.current ? jz.current.reset() : (jz.current = new Ds((() => {
-             if (Az.current) {
-               var zz = Az.current;
-               Az.current = null, zz()
+         destroy() {
+           this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
+         }
+       }), ev.p.compute(["selection", mz], (Pv => function(vv, zv, Pv) {
+         const hv = vv.selection.main;
+         return hv.empty || vv.field(mz) || vv.sliceDoc(hv.from, hv.to).trim().length < 2 ? null : {
+           pos: hv.from,
+           above: !0,
+           create: vv => {
+             const hv = document.createElement("div");
+             hv.className = "CodeSelectionActions", hv.setAttribute("role", "toolbar"), hv.setAttribute("aria-label", "AI Helper: picked code");
+             for (const {
+                 action: Sv,
+                 label: ev
+               }
+               of jz) {
+ ... (23 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L16999-L17000` → after: `L523-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L523-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L523-L550) · [Before (L16999-L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L16999-L17000)

```diff
-         return () => {
-           Zz && (cz(void 0), Gz(void 0))
+       }(Pv, vv, zv)))]
+     }
+     var Fz = Pv(1082);
+     const Yz = new Set(["(", "{", "[", "<"]),
+       nz = new Set([")", "}", "]", ">"]),
+       Oz = {
+         text: "var(--codeTooltipText, white)",
+         parameterName: "var(--codeTooltipParameterName, orange)",
+         parameter: "var(--codeTooltipParameter, cyan)",
+         suffix: "var(--codeTooltipSuffix, pink)",
+         docs: "var(--codeTooltipDocs, gray)"
+       };
+ 
+     function Dz(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ 
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L17002-L17027` → after: `L552-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/284.js#L552-L559) · [Before (L17002-L17027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/284.js#L17002-L17027)

```diff
-       }), [Cz, Tz]), (0, Xz.useEffect)((() => {
-         zz.container && ez(zz.container)
-       }), [zz.container]), (0, Xz.useEffect)((() => () => {
-         Zz && (Zz.destroy(), Gz(void 0)), jz.current && (jz.current.cancel(), jz.current = null)
-       }), [Zz]), (0, Xz.useEffect)((() => {
-         uz && Zz && Zz.focus()
-       }), [uz, Zz]), (0, Xz.useEffect)((() => {
-         Zz && Zz.dispatch({
-           effects: Oz.F.reconfigure.of(hz)
-         })
-       }), [Nz, Kz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Fz, Uz]), (0, Xz.useEffect)((() => {
-         if (void 0 !== tz) {
-           var zz = Zz ? Zz.state.doc.toString() : "";
-           if (Zz && tz !== zz) {
-             var sz = () => {
-               Zz && tz !== Zz.state.doc.toString() && Zz.dispatch({
- ... (10 more removed lines; see GitHub link above)
+         return hv
+       }
+       const hv = [];
+       if (hv.push(...Pv(vv.prefixDisplayParts, Oz.text)), vv.parameters.length > 0) {
+         hv.push("\n");
+         for (let Sv = 0; Sv < vv.parameters.length; Sv++) {
+           const ev = vv.parameters[Sv];
+           hv.push("\t"), hv.push(...Pv(ev.displayParts, Oz.parameter, null !== zv && Sv !== zv)), hv.push("\n")
```
