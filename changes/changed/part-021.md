# Changed — Bundle Modifications Report (Part 021 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `21 / 67` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 7. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L23-L60` → after: `L596-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L596-L599) · [Before (L23-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L23-L60)

```diff
-     var Fz = sz(38097);
-     const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
-       ...zz
-     } : null : zz.clone(tz) : null;
-     class Xz {
-       static DeepCopy(zz, tz, sz, Xz) {
-         let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const oz = function(zz) {
-           const tz = [];
-           do {
-             const sz = Object.getOwnPropertyNames(zz);
-             for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
-           } while (zz = Object.getPrototypeOf(zz));
-           return tz
-         }(zz);
-         for (const Uz of oz) {
- ... (22 more removed lines; see GitHub link above)
+     const hv = 1 / 2.2,
+       Sv = 2.2;
+     Math.sqrt(5);
+     let ev = .001
```

#### 8. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L62-L70` → after: `L601-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L601-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L601-L747) · [Before (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L62-L70)

```diff
-   37333: (zz, tz, sz) => {
-     function Fz() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
-         const tz = 16 * Math.random() | 0;
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
-       }))
-     }
-     sz.d(tz, {
-       d: () => Fz
+   36620: (vv, zv, Pv) => {
+     function hv(vv) {
+       return parseInt(vv.toString().replace(/\W/g, ""))
+     }
+ 
+     function Sv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(vv - zv) <= Pv
+     }
+ 
+     function ev(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return vv < zv - hv || vv > Pv + hv
+     }
+ 
+     function gv(vv, zv) {
+ ... (131 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L73-L290` → after: `L750-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L750-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L750-L759) · [Before (L73-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L73-L290)

```diff
-   38097: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Fz
-     });
-     class Fz {
-       static _CheckLimit(zz, tz) {
-         let sz = Fz._LogLimitOutputs[zz];
-         return sz ? sz.current++ : (sz = {
-           limit: tz,
-           current: 1
-         }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
-       }
-       static _GenerateLimitMessage(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const sz = Fz._LogLimitOutputs[zz];
-         if (!sz || !Fz.MessageLimitReached) return;
- ... (202 more removed lines; see GitHub link above)
+   36602: (vv, zv, Pv) => {
+     function hv(vv, zv) {
+       const Pv = [];
+       for (let hv = 0; hv < vv; ++hv) Pv.push(zv());
+       return Pv
+     }
+ 
+     function Sv(vv, zv) {
+       return hv(vv, zv)
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L293` → after: `L762-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L762-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L762-L791) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L293)

```diff
-       g: () => Wz
+       h: () => Sv,
+       i: () => gv
+     });
+     const ev = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function gv(vv, zv) {
+       const Pv = ev.map((Pv => function(vv, zv, Pv) {
+         const hv = vv[zv];
+         if ("function" !== typeof hv) return null;
+         const Sv = function() {
+           const hv = vv.length,
+             ev = Sv.previous.apply(vv, arguments);
+           return Pv(zv, hv), ev
+         };
+         return hv.next = Sv, Sv.previous = hv, vv[zv] = Sv, () => {
+           const Pv = Sv.previous;
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/228.js#L4-L280) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/228.js#L4)

```diff
-   60325: (zz, tz, sz) => {
+   36615: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Sv
+     });
+     var hv = Pv(36618);
+     class Sv {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     Sv.Instances = [], Sv.OnEnginesDisposedObservable = new hv.c, Sv._LastCreatedScene = null, Sv.UseFallbackTexture = !0, Sv.FallbackTexture = ""
+   },
+   38207: (vv, zv, Pv) => {
+ ... (261 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L6-L30` → after: `L282-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L282-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/228.js#L282-L295) · [Before (L6-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/228.js#L6-L30)

```diff
-       DEVTOOLS_SHADERS: () => Xz,
-       registerDevtoolsShader: () => Oz
-     });
-     var Fz = sz(39041),
-       Wz = sz(36569);
-     const Xz = {
-       devtoolsNormal: function(zz) {
-         return {
-           vertex: `\n\t\t\t${(0,Wz.f)(zz,"position","vec3")}\n\t\t\t${(0,Wz.f)(zz,"normal","vec3")}\n\t\t\t${(0,Wz.zb)(zz,"worldViewProjection","mat4")}\n\t\t\t${(0,Wz.zb)(zz,"world","mat4")}\n\t\t\t${(0,Wz.Bb)(zz,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wz.Db)(zz,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,Wz.Bb)(zz,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Wz.P)(zz,`\n\t\t\t\t\n\t\t\t\t${(0,Wz.C)(zz,"vec3","normalColor",`abs(${(0,Wz.T)(zz,"vNormal")})`)}\n\t\t\t\t${(0,Wz.M)(zz)} = ${(0,Wz.p)(zz,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(zz) {
-         return {
-           vertex: `\n\t\t\t${(0,Wz.f)(zz,"position","vec3")}\n\t\t\t${(0,Wz.zb)(zz,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Wz.Db)(zz,`\n\t\t\t\t${(0,Wz.n)(zz)} = ${(0,Wz.Ab)(zz,"worldViewProjection")} * ${(0,Wz.p)(zz,"vec4",(0,Wz.Gb)(zz,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,Wz.P)(zz,`\n\t\t\t\t${(0,Wz.M)(zz)} = ${(0,Wz.p)(zz,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
- ... (9 more removed lines; see GitHub link above)
+       AsyncLoop: () => hv.d,
+       RegisterTools: () => hv.e,
+       Tools: () => hv.h,
+       className: () => hv.i
+     });
+     var hv = Pv(39399);
+     (0, hv.e)()
+   },
+   36631: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => ev,
+       c: () => Sv
+     });
+     const hv = {};
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L33-L83` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/228.js#L298-L299) · [Before (L33-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/228.js#L33-L83)

```diff
-       const {
-         vertex: sz,
-         fragment: Wz
-       } = Xz[zz](tz), Oz = Fz.e.GetShadersStore(tz);
-       Oz[`${zz}VertexShader`] = sz, Oz[`${zz}FragmentShader`] = Wz
-     }
-   },
-   36569: (zz, tz, sz) => {
-     sz.d(tz, {
-       $: () => Wz,
-       Ab: () => Gz,
-       Bb: () => gz,
-       C: () => Kz,
-       Db: () => Pz,
-       E: () => Jz,
-       Gb: () => Cz,
- ... (35 more removed lines; see GitHub link above)
+       hv[vv] = zv
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L86-L280` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/228.js#L302-L303) · [Before (L86-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/228.js#L86-L280)

```diff
-       return zz === Fz.WGSL
-     }
- 
-     function Xz(zz, tz, sz) {
-       return Wz(zz) ? sz : tz
-     }
-     const Oz = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
-       ["vec3", "vec3f"],
-       ["vec4", "vec4f"],
-       ["mat2", "mat2x2f"],
-       ["mat3", "mat3x3f"],
-       ["mat4", "mat4x4f"]
-     ]);
- ... (179 more removed lines; see GitHub link above)
+       return hv[vv]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/229.js#L4-L40) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/229.js#L4)

```diff
-   36652: (zz, tz, sz) => {
+   60592: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       DEVTOOLS_SHADERS: () => ev,
+       registerDevtoolsShader: () => gv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(36668);
+     const ev = {
+       devtoolsNormal: function(vv) {
+         return {
+           vertex: `\n\t\t\t${(0,Sv.g)(vv,"position","vec3")}\n\t\t\t${(0,Sv.g)(vv,"normal","vec3")}\n\t\t\t${(0,Sv.ub)(vv,"worldViewProjection","mat4")}\n\t\t\t${(0,Sv.ub)(vv,"world","mat4")}\n\t\t\t${(0,Sv.xb)(vv,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Sv.yb)(vv,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,Sv.xb)(vv,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Sv.Q)(vv,`\n\t\t\t\t\n\t\t\t\t${(0,Sv.F)(vv,"vec3","normalColor",`abs(${(0,Sv.U)(vv,"vNormal")})`)}\n\t\t\t\t${(0,Sv.N)(vv)} = ${(0,Sv.n)(vv,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(vv) {
+         return {
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L7` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/229.js#L42-L78) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/229.js#L6-L7)

```diff
-       Color3: () => Fz.c,
-       c: () => Fz.d
+       $: () => xv,
+       B: () => Tv,
+       Bb: () => Ov,
+       F: () => lv,
+       Fb: () => Dv,
+       H: () => Yv,
+       J: () => Rv,
+       M: () => ev,
+       N: () => qv,
+       O: () => tv,
+       Q: () => mv,
+       U: () => Kv,
+       V: () => Uv,
+       X: () => Zv,
+       _: () => Sv,
+       ab: () => Lv,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L10` → after: `L80-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L80-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/229.js#L80-L280) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/229.js#L9-L10)

```diff
-     var Fz = sz(36654);
-     (0, Fz.e)()
+     const hv = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function Sv(vv) {
+       return vv === hv.WGSL
+     }
+ 
+     function ev(vv, zv, Pv) {
+       return Sv(vv) ? Pv : zv
+     }
+     const gv = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (185 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   40160: (zz, tz, sz) => {
+   36745: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/230.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/230.js#L6)

```diff
-       noaDevTools: () => uz
+       Color3: () => hv.b,
+       d: () => hv.e
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L555` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/230.js#L9-L10) · [Before (L8-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/230.js#L8-L555)

```diff
-     var Fz = sz(36934),
-       Wz = sz(36917),
-       Xz = sz(2555),
-       Oz = sz(1664);
- 
-     function oz(zz) {
-       const {
-         mD: tz
-       } = zz, sz = tz.engine, Fz = {
-         width: sz.getRenderWidth(),
-         height: sz.getRenderHeight()
-       };
-       return {
-         canvas: sz.getRenderingCanvas(),
-         maxTextureSize: sz.getCaps().maxTextureSize,
-         drawing: () => !zz.JY,
- ... (532 more removed lines; see GitHub link above)
+     var hv = Pv(36751);
+     (0, hv.h)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L2)

```diff
- export const ids = [231, 232];
+ export const ids = [231];
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L4)

```diff
-   39413: (zz, tz, sz) => {
+   40363: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L6-L7)

```diff
-       b: () => Kz,
-       e: () => Nz
+       noaDevTools: () => Tv
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L9-L92` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L8-L11) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L9-L92)

```diff
-     var Fz = sz(39167),
-       Wz = sz(39170),
-       Xz = sz(36475),
-       Oz = sz(36654),
-       oz = sz(39421),
-       vz = sz(39374),
-       Uz = sz(36518);
-     let Kz = (() => {
-         var zz;
-         let tz, sz, vz = oz.d,
-           Uz = [],
-           Kz = [],
-           uz = [],
-           Nz = [];
-         return zz = class extends vz {
-           constructor(zz, tz, sz, Wz) {
- ... (68 more removed lines; see GitHub link above)
+     var hv = Pv(37053),
+       Sv = Pv(37030),
+       ev = Pv(2599),
+       gv = Pv(1692);
```

#### 5. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L94-L139` → after: `L13-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L13-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L13-L32) · [Before (L94-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L94-L139)

```diff
-     function Nz() {
-       uz || (uz = !0, vz.e.AddNodeConstructor("Light_Type_3", ((zz, tz) => () => new Kz(zz, Xz.p.Zero(), tz))), (0, Uz.g)("BABYLON.HemisphericLight", Kz))
-     }
-   },
-   37191: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Wz
-     });
-     var Fz = sz(37199);
-     class Wz {
-       static GetPlanes(zz) {
-         const tz = [];
-         for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
-         return Wz.GetPlanesToRef(zz, tz), tz
-       }
-       static GetNearPlaneToRef(zz, tz) {
- ... (30 more removed lines; see GitHub link above)
+     function pv(vv) {
+       const {
+         Ma: zv
+       } = vv, Pv = zv.engine, hv = {
+         width: Pv.getRenderWidth(),
+         height: Pv.getRenderHeight()
+       };
+       return {
+         canvas: Pv.getRenderingCanvas(),
+         maxTextureSize: Pv.getCaps().maxTextureSize,
+         drawing: () => !vv.Am,
+         resize: (vv, zv) => {
+           Pv.setSize(vv, zv)
+         },
+         restoreSize: () => {
+           Pv.setSize(hv.width, hv.height), zv.resize()
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L142-L224` → after: `L35-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L35-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L35-L224) · [Before (L142-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L142-L224)

```diff
-   },
-   37199: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Wz
-     });
-     var Fz = sz(36475);
-     class Wz {
-       constructor(zz, tz, sz, Wz) {
-         this.normal = new Fz.p(zz, tz, sz), this.d = Wz
-       }
-       hsz() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (67 more removed lines; see GitHub link above)
+     var dv = Pv(40339),
+       Nv = Pv(8882);
+ 
+     function lv(vv, zv) {
+       let {
+         width: Nv,
+         height: lv,
+         colouring: Tv
+       } = zv;
+       const Wv = "normals" === Tv,
+         wv = "depth" === Tv;
+       return new Promise((zv => {
+         try {
+           const av = (0, ev.g)();
+           if (av.Ma.ya) return "screenshot" !== vv || null !== Tv ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void zv()) : void(0, dv.c)(pv(av), Nv, lv).finally(zv);
+           const sv = av.Ma.engine,
+ ... (174 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L226-L237` → after: `L226-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L226-L228) · [Before (L226-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L226-L237)

```diff
-     Wz._TmpMatrix = Fz.e.Identity()
-   },
-   37536: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Fz
-     });
-     class Fz {
-       constructor(zz, tz, sz, Fz) {
-         this.x = zz, this.y = tz, this.width = sz, this.height = Fz
-       }
-       toGlobal(zz, tz) {
-         return new Fz(this.x * zz, this.y * tz, this.width * zz, this.height * tz)
+     const Tv = new class {
+       constructor() {
+         this.tools = Nv.ALL_DEV_TOOLS
```

#### 8. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L239-L240` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L230-L231) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L239-L240)

```diff
-       toGlobalToRef(zz, tz, sz) {
-         return sz.x = this.x * zz, sz.y = this.y * tz, sz.width = this.width * zz, sz.height = this.height * tz, this
+       downloadScene(vv, zv) {
+         return lv(vv, zv)
```

#### 9. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L242-L243` → after: `L233-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L233-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L233-L237) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L242-L243)

```diff
-       clone() {
-         return new Fz(this.x, this.y, this.width, this.height)
+       async setAmbientLightIntensity(vv) {
+         const {
+           Color3: zv
+         } = await Promise.all([Pv.e(227), Pv.e(230)]).then((() => Pv(36745)));
+         (0, ev.g)().Ma.rD().ambientColor = zv.FromArray([vv, vv, vv])
```

#### 10. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L247` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L241) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L247)

```diff
-   38091: (zz, tz, sz) => {
+   40339: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L249` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L243) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L249)

```diff
-       d: () => Xz
+       c: () => dv
```

#### 12. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L251-L282` → after: `L245-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L245-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L245-L286) · [Before (L251-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L251-L282)

```diff
-     var Fz = sz(38097);
-     const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
-       ...zz
-     } : null : zz.clone(tz) : null;
-     class Xz {
-       static DeepCopy(zz, tz, sz, Xz) {
-         let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const oz = function(zz) {
-           const tz = [];
-           do {
-             const sz = Object.getOwnPropertyNames(zz);
-             for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
-           } while (zz = Object.getPrototypeOf(zz));
-           return tz
-         }(zz);
-         for (const Uz of oz) {
- ... (16 more removed lines; see GitHub link above)
+     var hv = Pv(1711);
+     const Sv = 33177600,
+       ev = 3e4;
+     let gv = !1;
+ 
+     function pv(vv, zv, Pv) {
+       if (!vv.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
+       if (gv) return Promise.reject(new Error("A screenshot is already being taken"));
+       gv = !0;
+       const hv = function(vv, zv, Pv) {
+         const hv = Math.max(1, vv),
+           ev = Math.max(1, zv),
+           gv = Math.min(1, Pv / Math.max(hv, ev), Math.sqrt(Sv / (hv * ev)));
+         return {
+           width: Math.max(1, Math.floor(hv * gv)),
+           height: Math.max(1, Math.floor(ev * gv))
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L284` → after: `L288-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L288-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L288-L290) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L284)

```diff
-             Fz.e.Warn(vz.message)
+             Pv(gv)
+           } finally {
+             dv()
```

#### 14. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L286-L294` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L292) · [Before (L286-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L286-L294)

```diff
-         }
-       }
-     }
-   },
-   37333: (zz, tz, sz) => {
-     function Fz() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
-         const tz = 16 * Math.random() | 0;
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L297-L355` → after: `L295-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L295-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L295-L300) · [Before (L297-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L297-L355)

```diff
-     sz.d(tz, {
-       d: () => Fz
-     })
-   },
-   38097: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Fz
-     });
-     class Fz {
-       static _CheckLimit(zz, tz) {
-         let sz = Fz._LogLimitOutputs[zz];
-         return sz ? sz.current++ : (sz = {
-           limit: tz,
-           current: 1
-         }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
-       }
- ... (43 more removed lines; see GitHub link above)
+     async function dv(vv, zv, Pv) {
+       try {
+         const Sv = await pv(vv, zv, Pv);
+         (0, hv.d)(Sv.blob, `bloxd-screenshot-${Sv.width}x${Sv.height}-${Date.now()}.png`)
+       } catch (Sv) {
+         console.error("Error taking screenshot:", Sv)
```

#### 16. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L372-L381` → after: `L304-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L304-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L304-L308) · [Before (L372-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L372-L381)

```diff
-   60296: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       CreateScreenshot: () => Mz,
-       CreateScreenshotAsync: () => dz,
-       CreateScreenshotForFrameGraphAsync: () => iz,
-       CreateScreenshotUsingRenderTarget: () => Qz,
-       CreateScreenshotUsingRenderTargetAsync: () => kz,
-       CreateScreenshotWithResizeAsync: () => hz,
-       RegisterScreenshotTools: () => az,
-       ScreenshotTools: () => lz
+   37053: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Nv,
+       i: () => pv,
+       k: () => gv
```

#### 17. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L383-L476` → after: `L310-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L310-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L310-L318) · [Before (L383-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L383-L476)

```diff
-     var Fz = sz(39617),
-       Wz = sz(40936),
-       Xz = sz(40909),
-       Oz = sz(39181),
-       oz = sz(40915),
-       vz = sz(36502),
-       Uz = sz(36475);
-     class Kz extends oz.f {
-       static _GetDefines(zz) {
-         if (!zz) return null;
-         return zz.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
-       }
-       _gatherImports(zz, tz) {
-         zz ? (this._webGPUReady = !0, tz.push(Promise.all([sz.e(367).then((() => sz(60654))), sz.e(368).then((() => sz(60659)))]))) : tz.push(Promise.all([sz.e(369).then((() => sz(60663))), sz.e(370).then((() => sz(60671)))]))
-       }
-       constructor(zz) {
- ... (78 more removed lines; see GitHub link above)
+     var hv = Pv(37044),
+       Sv = Pv(37055);
+     let ev = 0;
+ 
+     function gv(vv, zv) {
+       const Pv = vv;
+       Pv._noaFaceGroups = null !== zv && void 0 !== zv ? zv : null, Pv._noaFaceEpoch = -1, Pv._noaFaceMask = -1, Pv._noaFaceCount = -1, Pv._noaFaceMaterial = null;
+       const hv = vv.sF;
+       hv && 1 === hv.length && (hv[0].indexStart = 0, hv[0].indexCount = vv.getTotalIndices())
```

#### 18. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L478-L494` → after: `L320-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L320-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L320-L328) · [Before (L478-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L478-L494)

```diff
-     class Pz extends Bz {
-       static IsObjectListPass(zz) {
-         return void 0 !== zz.setObjectList
-       }
-       get objectList() {
-         return this._objectList
-       }
-       setObjectList(zz) {
-         this._objectList = zz
-       }
-       constructor(zz, tz, sz, Fz) {
-         super(zz, tz, sz), this._engine = Fz
-       }
-       _isValid() {
-         const zz = super._isValid();
-         return zz || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
- ... (1 more removed lines; see GitHub link above)
+ 
+     function pv(vv, zv) {
+       if (zv) {
+         ev++;
+         for (const zv of vv) {
+           const vv = zv._noaFaceGroups;
+           vv && gv(zv, vv)
+         }
+       } else ev = Math.max(0, ev - 1)
```

#### 19. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L496-L549` → after: `L330-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L330-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L330-L337) · [Before (L496-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L496-L549)

```diff
-     class rz extends Bz {
-       static IsRenderPass(zz) {
-         return void 0 !== zz.setRenderTarget
-       }
-       get renderTarget() {
-         return this._renderTarget
-       }
-       get renderTargetDepth() {
-         return this._renderTargetDepth
-       }
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
-       }
-       constructor(zz, tz, sz, Fz) {
-         super(zz, tz, sz), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Fz
-       }
- ... (38 more removed lines; see GitHub link above)
+ 
+     function dv(vv, zv, Pv) {
+       let Sv = -1,
+         ev = 0;
+       for (let gv = 0; gv < hv.e; gv++) {
+         const Pv = vv[gv],
+           pv = vv[gv + 1];
+         pv > Pv && zv & 1 << hv.c[gv] && (Sv < 0 && (Sv = Pv), ev = pv)
```

#### 20. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L585-L628` → after: `L343-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L343-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L343-L383) · [Before (L585-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L585-L628)

```diff
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Yz.c, this.onBeforeTaskExecute = new Yz.c, this.onAfterTaskExecute = new Yz.c, this.name = zz, this._frameGraph = tz, this._reset()
-       }
-       _reset() {
-         for (const zz of this._passes) zz._dispose();
-         for (const zz of this._passesDisabled) zz._dispose();
-         this._passes.length = 0, this._passesDisabled.length = 0
-       }
-       _addPass(zz, tz) {
-         tz ? this._passesDisabled.push(zz) : this._passes.push(zz)
-       }
-       _checkTask() {
-         let zz, tz = null,
-           sz = null;
-         for (const oz of this._passes) {
-           const Fz = oz._isValid();
-           if (Fz) throw new Error(`Pass "${oz.name}" is not valid. ${Fz}`);
- ... (28 more removed lines; see GitHub link above)
+         this.aa = vv, this.engine = zv, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(vv, zv) {
+         if (!zv) return;
+         const Pv = zv.getProjectionMatrix().m,
+           gv = 0 === ev && 0 === Pv[15],
+           pv = zv.globalPosition,
+           {
+             engine: Nv
+           } = this,
+           lv = gv ? (0, Sv.e)(Pv, Nv.getRenderWidth(), Nv.getRenderHeight()) : 0;
+         pv.x === this.eyeX && pv.y === this.eyeY && pv.z === this.eyeZ && lv === this.focalPx && gv === this.culling || (this.epoch++, this.eyeX = pv.x, this.eyeY = pv.y, this.eyeZ = pv.z, this.focalPx = lv, this.culling = gv);
+         const {
+           epoch: Tv,
+           range: Wv
+         } = this, wv = this.aa / 2, av = wv * Math.sqrt(3), sv = vv.data, Cv = vv.length;
+ ... (25 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L630-L631` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L385) · [Before (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L630-L631)

```diff
-           if (sz !== Oz && null !== Oz) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
-           if (zz !== Fz && null !== Fz) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
+           zv && 0 === vv._noaFaceCount || (sv[iv++] = vv)
```

#### 22. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L633-L706` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L387) · [Before (L633-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L633-L706)

```diff
-       }
-       _execute() {
-         const zz = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const tz of zz) tz._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
-         }
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const zz of this._passes) zz._initialize();
-           for (const zz of this._passesDisabled) zz._initialize()
- ... (58 more removed lines; see GitHub link above)
+         vv.length = iv
```

#### 23. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L709-L722` → after: `L390-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L390-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L390-L401) · [Before (L709-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L709-L722)

```diff
-     class Jz extends mz {
-       constructor(zz, tz, sz) {
-         super(zz, tz, sz || new Kz(zz, tz.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           tz = arguments.length > 1 ? arguments[1] : void 0,
-           sz = arguments.length > 2 ? arguments[2] : void 0;
-         const Fz = super.record(zz, tz, sz);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Fz
-       }
+   },
+   37030: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => dv,
+       e: () => pv
+     });
+     const hv = new WeakSet;
+     let Sv = 0;
+     const ev = new Set;
+ 
+     function gv(vv, zv) {
+       vv._data = zv
```

#### 24. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L724-L731` → after: `L403-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L403-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L403-L406) · [Before (L724-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L724-L731)

```diff
-     var Iz = sz(40942);
-     class Cz extends mz {
-       constructor(zz, tz, sz) {
-         super(zz, tz, sz || new Iz.f(zz, tz.engine))
-       }
-       getClassName() {
-         return "FrameGraphPassTask"
-       }
+ 
+     function pv(vv) {
+       var zv, Pv;
+       (null !== (zv = null === (Pv = vv.getBuffer()) || void 0 === Pv ? void 0 : Pv.GT) && void 0 !== zv ? zv : 0) > 0 && (hv.add(vv), 0 === Sv ? gv(vv, null) : ev.add(vv))
```

#### 25. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L733-L797` → after: `L408-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L408-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L408-L419) · [Before (L733-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L733-L797)

```diff
-     var ez = sz(39256),
-       Zz = sz(39328),
-       Gz = sz(39284),
-       Tz = sz(39413),
-       cz = sz(36654);
-     class jz {
-       getRenderCamera(zz) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let tz;
-           return tz = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, zz && tz && tz.isRigCamera ? tz.rigParent : tz
-         }
-       }
-       setRenderCamera(zz) {
-         this._renderCamera = zz
-       }
- ... (49 more removed lines; see GitHub link above)
+ 
+     function dv(vv) {
+       Sv++;
+       for (const Pv of function(vv) {
+           const zv = new Set;
+           for (const Sv of vv) {
+             const vv = Sv.geometry;
+             for (const Sv of Object.values(null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.getVertexBuffers()) && void 0 !== Pv ? Pv : {})) {
+               var Pv;
+               const vv = Sv.getWrapperBuffer();
+               hv.has(vv) && zv.add(vv)
+             }
```

#### 26. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L799-L812` → after: `L421-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L421-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L421-L427) · [Before (L799-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L799-L812)

```diff
-         })), this._originalPointerObserver && zz.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, sz || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((zz => {
-           this.shouldRender && zz == this.getRenderCamera() && this.render()
-         }))), this._sceneDisposeObserver = this.originalScene.qJ.add((() => {
-           this.dispose()
-         })), this._updateCamera()
-       }
-       _notifyObservers(zz, tz, sz) {
-         zz.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Zz.g(zz.type, zz.event, tz), zz.type), this._lastPointerEvents[sz.pointerId] = !0)
-       }
-       render() {
-         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
-           const zz = this.utilityLayerScene.activeCamera.aJ(),
-             tz = this.utilityLayerScene.activeCamera;
-           tz._scene = this.utilityLayerScene, tz.leftCamera && (tz.leftCamera._scene = this.utilityLayerScene), tz.rightCamera && (tz.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), tz._scene = zz, tz.leftCamera && (tz.leftCamera._scene = zz), tz. … [truncated]
+           return zv
+         }(vv)) Pv.getData() || Nv(Pv), ev.add(Pv);
+       let zv = !0;
+       return () => {
+         if (zv && (zv = !1, Sv--, 0 === Sv)) {
+           for (const vv of ev) gv(vv, null);
+           ev.clear()
```

#### 27. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L847-L886` → after: `L432-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L432-L437) · [Before (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L847-L886)

```diff
-     function Mz(zz, tz, sz, Fz) {
-       let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Oz = arguments.length > 6 ? arguments[6] : void 0,
-         oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: Uz,
-         width: Kz
-       } = Lz(zz, tz, sz);
-       if (!Uz || !Kz) return void Nz.e.Error("Invalid 'size' parameter !");
-       const uz = tz.aJ();
-       let wz = uz.activeCamera !== tz;
-       if (uz.frameGraph) {
-         const zz = Az.FindMainObjectRenderer(uz.frameGraph);
-         zz && (wz = zz.camera !== tz)
- ... (24 more removed lines; see GitHub link above)
+     function Nv(vv) {
+       const zv = vv.getBuffer();
+       if (!zv || !(zv.GT > 0)) return;
+       const Pv = vv._engine,
+         hv = new Uint8Array(zv.GT);
+       Pv.bindArrayBuffer(zv), Pv._gl.getBufferSubData(Pv._gl.ARRAY_BUFFER, 0, hv), Pv._resetVertexBufferBinding(), gv(vv, hv)
```

#### 28. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L888-L898` → after: `L439-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L439-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L439-L464) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L888-L898)

```diff
-     async function dz(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         Wz = arguments.length > 4 ? arguments[4] : void 0,
-         Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((vz, Uz) => {
-         Mz(zz, tz, sz, (zz => {
-           "undefined" !== typeof zz ? vz(zz) : Uz(new Error("Data is undefined"))
-         }), Fz, oz, Wz, Xz, Oz)
-       }))
+   },
+   37044: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv,
+       e: () => ev,
+       h: () => dv,
+       l: () => hv,
+       n: () => pv,
+       o: () => Sv,
+       r: () => Nv
+     });
+     const hv = 6,
+       Sv = [0, 2, 4, 1, 3, 5, 0, 2],
+       ev = 6,
+       gv = [1, 0, 3, 2, 5, 4];
+     for (let lv = ev; lv < Sv.length; lv++)
+ ... (10 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L900-L911` → after: `L466-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L466-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L466-L482) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L900-L911)

```diff
-     async function hz(zz, tz, sz, Fz) {
-       let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Xz = arguments.length > 5 ? arguments[5] : void 0,
-         Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((oz => {
-         Mz(zz, tz, {
-           width: sz,
-           height: Fz
-         }, (() => {
-           oz()
-         }), Wz, !0, Xz, Oz)
-       }))
+   },
+   37055: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => pv,
+       f: () => dv,
+       h: () => lv,
+       k: () => Nv,
+       m: () => av
+     });
+     var hv = Pv(37044);
+     const Sv = 1 / 16,
+       ev = 1 / 64,
+       gv = 2048;
+     hv.l;
+ 
+     function pv(vv, zv, Pv) {
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L914-L986` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L485-L486) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L914-L986)

```diff
-     function Qz(zz, tz, Xz, Oz) {
-       let oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         vz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         Uz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Kz = arguments.length > 7 ? arguments[7] : void 0,
-         bz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         Hz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         Bz = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         Pz = arguments.length > 11 ? arguments[11] : void 0,
-         rz = arguments.length > 12 ? arguments[12] : void 0,
-         Yz = arguments.length > 13 ? arguments[13] : void 0,
-         xz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         mz = arguments.length > 15 ? arguments[15] : void 0;
-       const Jz = tz.aJ();
-       if (Jz.frameGraph) return void iz(Jz.frameGraph, tz, Xz, oz, vz, Uz, Kz, Pz, Yz, !Oz).then((zz => {
-         Oz && Oz(zz)
- ... (57 more removed lines; see GitHub link above)
+     function dv(vv, zv) {
+       return Sv + ev * vv * vv / zv
```

#### 31. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L988-L1003` → after: `L488-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L488-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L488-L491) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L988-L1003)

```diff
-     async function kz(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Oz = arguments.length > 6 ? arguments[6] : void 0,
-         oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         Uz = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         Kz = arguments.length > 10 ? arguments[10] : void 0,
-         uz = arguments.length > 11 ? arguments[11] : void 0,
-         Nz = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((bz, wz) => {
-         Qz(zz, tz, sz, (zz => {
-           "undefined" !== typeof zz ? bz(zz) : wz(new Error("Data is undefined"))
-         }), Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz)
-       }))
+ 
+     function Nv(vv, zv, Pv, Sv, ev) {
+       const gv = hv.n;
+       return lv(vv[gv], vv[gv + 1], vv[gv + 2], vv[gv + 3], vv[gv + 4], vv[gv + 5], zv, Pv, Sv, ev)
```

#### 32. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L1005-L1092` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L493-L495) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L1005-L1092)

```diff
-     async function iz(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Oz = arguments.length > 6 ? arguments[6] : void 0,
-         oz = arguments.length > 7 ? arguments[7] : void 0,
-         vz = arguments.length > 8 ? arguments[8] : void 0,
-         Uz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         Kz = arguments.length > 10 ? arguments[10] : void 0;
-       const uz = zz.engine,
-         Nz = zz.textureManager,
-         {
-           height: bz,
-           width: Dz,
-           finalWidth: gz,
-           finalHeight: Bz
- ... (72 more removed lines; see GitHub link above)
+ 
+     function lv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
+       return (gv <= vv - Nv ? 0 : 1) | (gv >= zv + Nv ? 0 : 2) | (pv <= Pv - Nv ? 0 : 4) | (pv >= hv + Nv ? 0 : 8) | (dv <= Sv - Nv ? 0 : 16) | (dv >= ev + Nv ? 0 : 32)
```

#### 33. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L1095-L1109` → after: `L515-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L515-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L515-L517) · [Before (L1095-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L1095-L1109)

```diff
-     function Lz(zz, tz, sz) {
-       let Fz = 0,
-         Wz = 0,
-         Xz = 0,
-         Oz = 0;
-       if ("object" === typeof sz) {
-         const oz = sz.precision ? Math.abs(sz.precision) : 1;
-         sz.width && sz.height ? (Fz = sz.height * oz, Wz = sz.width * oz) : sz.width && !sz.height ? (Wz = sz.width * oz, Fz = Math.round(Wz / zz.getAspectRatio(tz))) : sz.height && !sz.width ? (Fz = sz.height * oz, Wz = Math.round(Fz * zz.getAspectRatio(tz))) : (Wz = Math.round( … [truncated]
-       } else isNaN(sz) || (Fz = sz, Wz = sz, Xz = sz, Oz = sz);
-       return Wz && (Wz = Math.floor(Wz)), Fz && (Fz = Math.floor(Fz)), Xz && (Xz = Math.floor(Xz)), Oz && (Oz = Math.floor(Oz)), {
-         height: 0 | Fz,
-         width: 0 | Wz,
-         finalWidth: 0 | Xz,
-         finalHeight: 0 | Oz
-       }
+     function wv(vv, zv) {
+       const Pv = hv.h[zv];
+       return vv[Pv + 1] - vv[Pv]
```

#### 34. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L1121-L1124` → after: `L520-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L520-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/231.js#L520-L554) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/231.js#L1121-L1124)

```diff
-     function az() {
-       if (nz) return;
-       nz = !0;
-       bz.j.CreateScreenshot = Mz, bz.j.CreateScreenshotAsync = dz, bz.j.CreateScreenshotUsingRenderTarget = Qz, bz.j.CreateScreenshotUsingRenderTargetAsync = kz
+     function av(vv, zv, Pv) {
+       let Sv = 0;
+       for (let gv = 0; gv < hv.l; gv++) wv(vv, gv) > 0 && (Sv |= 1 << gv);
+       if (0 === (zv &= Sv)) return 0;
+       if (zv === Sv) return Pv[0] = 0, Pv[1] = vv[hv.e], 1;
+       let ev = null,
+         pv = 1 / 0;
+       for (const Nv of function(vv) {
+           let zv = Wv[vv];
+           if (zv) return zv;
+           const Pv = new Map,
+             hv = (vv, zv) => {
+               const hv = 4 * vv + zv.length / 2;
+               Pv.has(hv) || Pv.set(hv, {
+                 tz: vv,
+                 windows: zv
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L2)

```diff
- export const ids = [232];
+ export const ids = [232, 233];
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L4)

```diff
-   37191: (zz, tz, sz) => {
+   39544: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L6)

```diff
-       e: () => Wz
+       b: () => lv,
+       c: () => Wv
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L8` → after: `L9-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L9-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L9-L102) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L8)

```diff
-     var Fz = sz(37199);
+     var hv = Pv(39295),
+       Sv = Pv(39300),
+       ev = Pv(36594),
+       gv = Pv(36751),
+       pv = Pv(39553),
+       dv = Pv(39518),
+       Nv = Pv(36631);
+     let lv = (() => {
+         var vv;
+         let zv, Pv, dv = pv.c,
+           Nv = [],
+           lv = [],
+           Tv = [],
+           Wv = [];
+         return vv = class extends dv {
+           constructor(vv, zv, Pv, Sv) {
+ ... (78 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L12` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L106) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L12)

```diff
-         for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
+         for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
```

#### 6. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L49` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L143) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L49)

```diff
-   37199: (zz, tz, sz) => {
+   37293: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L51` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L145) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L51)

```diff
-       c: () => Wz
+       b: () => Sv
```

#### 8. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L53` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L147) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L53)

```diff
-     var Fz = sz(36475);
+     var hv = Pv(36594);
```

#### 9. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L56` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L150) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L56)

```diff
-         this.normal = new Fz.p(zz, tz, sz), this.d = Wz
+         this.normal = new hv.l(vv, zv, Pv), this.d = Sv
```

#### 10. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L58` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L152) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L58)

```diff
-       hsz() {
+       pPv() {
```

#### 11. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L105` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L199) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L105)

```diff
-         return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
+         return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
```

#### 12. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L108` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L202) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L108)

```diff
-         return Fz.p.Dot(this.normal, zz) <= tz
+         return hv.l.Dot(this.normal, vv) <= zv
```

#### 13. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L111` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L205) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L111)

```diff
-         return Fz.p.Dot(zz, this.normal) + this.d
+         return hv.l.Dot(vv, this.normal) + this.d
```

#### 14. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L125` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L219) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L125)

```diff
-         return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
+         return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
```

#### 15. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L129` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L223) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L129)

```diff
-         return Fz.p.Dot(sz, tz) + Wz
+         return hv.l.Dot(Pv, zv) + Sv
```

#### 16. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L132` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L226) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L132)

```diff
-     Wz._TmpMatrix = Fz.e.Identity()
+     Sv._TmpMatrix = hv.c.Identity()
```

#### 17. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L134` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L228) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L134)

```diff
-   38091: (zz, tz, sz) => {
+   37633: (vv, zv, Pv) => {
```

#### 18. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L138` → after: `L232-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L232-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L232-L251) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L138)

```diff
-     var Fz = sz(38097);
+     class hv {
+       constructor(vv, zv, Pv, hv) {
+         this.x = vv, this.y = zv, this.width = Pv, this.height = hv
+       }
+       toGlobal(vv, zv) {
+         return new hv(this.x * vv, this.y * zv, this.width * vv, this.height * zv)
+       }
+       toGlobalToRef(vv, zv, Pv) {
+         return Pv.x = this.x * vv, Pv.y = this.y * zv, Pv.width = this.width * vv, Pv.height = this.height * zv, this
+       }
+       clone() {
+         return new hv(this.x, this.y, this.width, this.height)
+       }
+     }
+   },
+   38207: (vv, zv, Pv) => {
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L171` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L284) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L171)

```diff
-             Fz.e.Warn(vz.message)
+             hv.d.Warn(dv.message)
```

#### 20. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L177` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L290) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L177)

```diff
-   37333: (zz, tz, sz) => {
+   37431: (vv, zv, Pv) => {
```

#### 21. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L181` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L294) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L181)

```diff
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
+         return ("x" === vv ? zv : 3 & zv | 8).toString(16)
```

#### 22. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L185` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L298) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L185)

```diff
-       d: () => Fz
+       b: () => hv
```

#### 23. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L188` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L301) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L188)

```diff
-   38097: (zz, tz, sz) => {
+   38209: (vv, zv, Pv) => {
```

#### 24. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L190` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L303) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L190)

```diff
-       e: () => Fz
+       d: () => hv
```

#### 25. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L211` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L324) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L211)

```diff
-         const tz = zz => zz < 10 ? "0" + zz : "" + zz,
+         const zv = vv => vv < 10 ? "0" + vv : "" + vv,
```

#### 26. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L226` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/232.js#L339) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/232.js#L226)

```diff
-         const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
+         const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L2)

```diff
- export const ids = [232, 233];
+ export const ids = [233];
```

#### 2. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L20` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L4-L8) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L4-L20)

```diff
-   60305: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       RegisterShaderMaterial: () => Fz.e,
-       ShaderMaterial: () => Fz.s,
-       ShaderMaterialCreateFromSnippetAsync: () => Fz.h,
-       ShaderMaterialParse: () => Fz.q,
-       ShaderMaterialParseFromFileAsync: () => Fz.k,
-       ShaderMaterialParseFromSnippetAsync: () => Fz.m
-     });
-     var Fz = sz(39614);
-     (0, Fz.e)()
-   },
-   37191: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Wz
-     });
- ... (1 more removed lines; see GitHub link above)
+   37290: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Sv
+     });
+     var hv = Pv(37293);
```

#### 3. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L24` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L12) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L24)

```diff
-         for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
+         for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
```

#### 4. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L61-L65` → after: `L49-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L49-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L49-L53) · [Before (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L61-L65)

```diff
-   37199: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Wz
-     });
-     var Fz = sz(36475);
+   37293: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => Sv
+     });
+     var hv = Pv(36594);
```

#### 5. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L68-L70` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L56-L58) · [Before (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L68-L70)

```diff
-         this.normal = new Fz.p(zz, tz, sz), this.d = Wz
-       }
-       hsz() {
+         this.normal = new hv.l(vv, zv, Pv), this.d = Sv
+       }
+       pPv() {
```

#### 6. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L117` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L105) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L117)

```diff
-         return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
+         return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
```

#### 7. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L120` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L108) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L120)

```diff
-         return Fz.p.Dot(this.normal, zz) <= tz
+         return hv.l.Dot(this.normal, vv) <= zv
```

#### 8. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L123` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L111) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L123)

```diff
-         return Fz.p.Dot(zz, this.normal) + this.d
+         return hv.l.Dot(vv, this.normal) + this.d
```

#### 9. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L137` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L125) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L137)

```diff
-         return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
+         return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
```

#### 10. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L141-L150` → after: `L129-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L129-L138) · [Before (L141-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L141-L150)

```diff
-         return Fz.p.Dot(sz, tz) + Wz
-       }
-     }
-     Wz._TmpMatrix = Fz.e.Identity()
-   },
-   38091: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Xz
-     });
-     var Fz = sz(38097);
+         return hv.l.Dot(Pv, zv) + Sv
+       }
+     }
+     Sv._TmpMatrix = hv.c.Identity()
+   },
+   38207: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => ev
+     });
+     var hv = Pv(38209);
```

#### 11. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L183` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L171) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L183)

```diff
-             Fz.e.Warn(vz.message)
+             hv.d.Warn(dv.message)
```

#### 12. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L189` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L177) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L189)

```diff
-   37333: (zz, tz, sz) => {
+   37431: (vv, zv, Pv) => {
```

#### 13. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L193` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L181) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L193)

```diff
-         return ("x" === zz ? tz : 3 & tz | 8).toString(16)
+         return ("x" === vv ? zv : 3 & zv | 8).toString(16)
```

#### 14. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L223` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L211) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L223)

```diff
-         const tz = zz => zz < 10 ? "0" + zz : "" + zz,
+         const zv = vv => vv < 10 ? "0" + vv : "" + vv,
```

#### 15. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L238` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/233.js#L226) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/233.js#L238)

```diff
-         const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
+         const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 1. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/234.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/234.js#L2)

```diff
- export const ids = [234];
+ export const ids = [233, 234];
```

#### 2. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L4-L19` → after: `L4-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L4-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/234.js#L4-L189) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/234.js#L4-L19)

```diff
-   37497: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Uz,
-       h: () => Fz,
-       i: () => oz,
-       j: () => Wz,
-       l: () => Oz,
-       p: () => Xz
-     });
-     const Fz = 1.001,
-       Wz = .501,
-       Xz = .025,
-       Oz = .75,
-       oz = .08,
-       vz = 4;
- 
+   60574: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       RegisterShaderMaterial: () => hv.d,
+       ShaderMaterial: () => hv.o,
+       ShaderMaterialCreateFromSnippetAsync: () => hv.f,
+       ShaderMaterialParse: () => hv.m,
+       ShaderMaterialParseFromFileAsync: () => hv.i,
+       ShaderMaterialParseFromSnippetAsync: () => hv.k
+     });
+     var hv = Pv(39790);
+     (0, hv.d)()
+   },
+   37290: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Sv
+     });
+ ... (170 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L21-L30` → after: `L191-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L191-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/234.js#L191-L253) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/234.js#L21-L30)

```diff
-       const zz = Wz,
-         tz = Xz,
-         sz = zz - tz / 2,
-         Fz = (2 * zz - 2 * tz) / (2 * vz - 1),
-         Oz = [];
-       for (const Wz of [-sz, sz])
-         for (const Xz of [-sz, sz])
-           for (let sz = 0; sz < vz; sz++) {
-             const oz = -zz + tz + Fz * (2 * sz + .5);
-             Oz.push([Fz, tz, tz, oz, Wz, Xz]), Oz.push([tz, Fz, tz, Wz, oz, Xz]), Oz.push([tz, tz, Fz, Wz, Xz, oz])
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
+         const zv = 16 * Math.random() | 0;
+         return ("x" === vv ? zv : 3 & zv | 8).toString(16)
+       }))
+     }
+     Pv.d(zv, {
+       b: () => hv
+     })
+   },
+   38209: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => hv
+     });
+     class hv {
+       static _CheckLimit(vv, zv) {
+         let Pv = hv._LogLimitOutputs[vv];
+ ... (47 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L32-L646` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/234.js#L255-L269) · [Before (L32-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/234.js#L32-L646)

```diff
-       for (const Wz of [-sz, sz])
-         for (const zz of [-sz, sz])
-           for (const Fz of [-sz, sz]) Oz.push([tz, tz, tz, Wz, zz, Fz]);
-       return Oz
-     }
-   },
-   37849: (zz, tz, sz) => {
-     sz.d(tz, {
-       B: () => Jz,
-       D: () => Yz,
-       E: () => rz,
-       I: () => Nz,
-       J: () => Dz,
-       M: () => Hz,
-       N: () => Wz,
-       c: () => Kz,
- ... (599 more removed lines; see GitHub link above)
+       }
+     }
+     hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (82 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 1. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L4)

```diff
-   37925: (zz, tz, sz) => {
+   37330: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L120` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L6-L7) · [Before (L6-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L6-L120)

```diff
-       c: () => Oz
-     });
-     var Fz = sz(37927);
-     const Wz = [0, 0, 0];
-     class Xz {
-       constructor(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz;
-         this.pool = zz, this.origin = tz, this.count = 0, this.free = []
-       }
-       take() {
-         var zz;
-         const tz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.count++;
-         return tz >= this.pool.au && this.pool.grow(Math.max(2 * this.pool.au, tz + 1)), this.hide(tz), tz
-       }
-       release(zz) {
-         this.hide(zz), this.free.push(zz)
- ... (99 more removed lines; see GitHub link above)
+       c: () => Tv,
+       f: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L122-L624` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L9-L11) · [Before (L122-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L122-L624)

```diff
-     var Fz = sz(65);
-     const Wz = [{
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
- ... (487 more removed lines; see GitHub link above)
+     var hv = Pv(9122),
+       Sv = Pv(9101),
+       ev = Pv(312);
```

#### 4. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L626-L710` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L13-L24) · [Before (L626-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L626-L710)

```diff
-       tier: "coreTierName",
-       stage: "coreStageName",
-       atomic: "coreAtomicName"
-     };
- 
-     function Dz(zz, tz) {
-       return uz(zz) > 0 && tz < Xz
-     }
- 
-     function gz(zz) {
-       const tz = uz(zz);
-       if (tz > 0) return {
-         kind: "atomic",
-         n: tz,
-         short: `A${tz}`
-       };
- ... (69 more removed lines; see GitHub link above)
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 5. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L712-L716` → after: `L26-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L26-L37) · [Before (L712-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L712-L716)

```diff
-       dz = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
-       hz = {
-         1: 20,
-         2: 60,
-         3: 120
+       "Maple Door|meta|rot1|open": {
+         positions: [{
+           block: "Maple Door|meta|rot1|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot1|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 6. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L718-L895` → after: `L39-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L39-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L39-L50) · [Before (L718-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L718-L895)

```diff
-       Qz = "baf2farmvoid",
-       kz = "Caged ",
-       iz = " Spawner Block";
- 
-     function Lz(zz) {
-       return `lifeform:${(0,Az.ue)(zz)}`
-     }
- 
-     function lz(zz) {
-       if (!zz) return null;
-       if (zz.startsWith(kz)) {
-         const tz = zz.slice(6);
-         return dz.includes(tz) ? tz : null
-       }
-       if (zz.endsWith(iz)) {
-         const tz = zz.slice(0, -14);
- ... (162 more removed lines; see GitHub link above)
+       "Maple Door|meta|rot2|closed": {
+         positions: [{
+           block: "Maple Door|meta|rot2|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot2|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 7. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L897-L901` → after: `L52-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L52-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L52-L63) · [Before (L897-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L897-L901)

```diff
-       ct = function(zz, tz) {
-         return {
-           ...Tt(zz, tz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-           nuclear: !0
-         }
+       "Maple Door|meta|rot2|open": {
+         positions: [{
+           block: "Maple Door|meta|rot2|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot2|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 8. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L903-L1087` → after: `L65-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L65-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L65-L76) · [Before (L903-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L903-L1087)

```diff
-       jt = Zt.map((zz => ct(zz, "Biomass", 2))),
-       At = {
-         "Burner Drill": {
-           kind: "Burner Drill",
-           opMs: 4e3,
-           inputSlot: null,
-           fuelSlot: 0,
-           outputSlots: [1, 2, 3],
-           recipes: []
-         },
-         Crusher: {
-           kind: "Crusher",
-           opMs: 4e3,
-           inputSlot: 0,
-           fuelSlot: 1,
-           outputSlots: [2, 3, 4],
- ... (169 more removed lines; see GitHub link above)
+       "Maple Door|meta|rot3|closed": {
+         positions: [{
+           block: "Maple Door|meta|rot3|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot3|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 9. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1089-L1093` → after: `L78-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L78-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L78-L89) · [Before (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1089-L1093)

```diff
-       yt = {
-         Crusher: [Tt("Spent Pellet", "Glow Dust"), Tt("Wheat Seeds", "Biomass"), Tt("Wheat", "Biomass"), Tt("Dead Bush", "Biomass"), Tt("Dusk Moss", "Biomass"), Tt("Rotten Flesh", "Biomass"), Tt("Bone", "Biomass", 2)],
-         "Shatter Mill": [Tt("Spent Pellet", "Glow Dust"), Tt("Wheat Seeds", "Biomass"), Tt("Wheat", "Biomass"), Tt("Dead Bush", "Biomass"), Tt("Dusk Moss", "Biomass"), Tt("Rotten Flesh", "Biomass"), Tt("Bone", "Biomass", 2), ...Az.Pc.map((zz => Tt(zz, "Biomass")))],
-         Smelter: [Tt("Biomass", "Fertiliser", 2)],
-         Press: [Tt("Coal", "Graphite", 1, 4)]
+       "Maple Door|meta|rot3|open": {
+         positions: [{
+           block: "Maple Door|meta|rot3|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot3|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 10. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1095-L1333` → after: `L91-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L91-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L91-L102) · [Before (L1095-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1095-L1333)

```diff
-       Mt = "Power Coupler",
-       dt = "Advanced Coupler",
-       ht = "Nova Coupler",
-       Qt = [{
-         item: Mt,
-         level: 1,
-         divisor: 2,
-         powerPerS: 8
-       }, {
-         item: dt,
-         level: 2,
-         divisor: 4,
-         powerPerS: 32
-       }, {
-         item: ht,
-         level: 3,
- ... (223 more removed lines; see GitHub link above)
+       "Maple Door|meta|rot4|closed": {
+         positions: [{
+           block: "Maple Door|meta|rot4|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot4|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 11. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1335-L1342` → after: `L104-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L104-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L104-L115) · [Before (L1335-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1335-L1342)

```diff
-       os = {
-         "Coal Deposit": "Coal",
-         "Iron Deposit": "Raw Iron",
-         "Stone Deposit": "Messy Stone",
-         "Copper Deposit": "Raw Copper",
-         "Gold Deposit": "Raw Gold",
-         "Voltite Deposit": "Raw Voltite",
-         "Uranium Deposit": "Raw Uranium"
+       "Maple Door|meta|rot4|open": {
+         positions: [{
+           block: "Maple Door|meta|rot4|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot4|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 12. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1344-L1372` → after: `L117-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L117-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L117-L128) · [Before (L1344-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1344-L1372)

```diff
-       vs = {
-         "Uranium Deposit": 4e3
-       };
- 
-     function Us(zz) {
-       var tz;
-       return null !== (tz = Object.keys(os).find((tz => os[tz] === zz))) && void 0 !== tz ? tz : null
-     }
- 
-     function Ks(zz) {
-       return et.includes(zz)
-     }
- 
-     function us(zz) {
-       return !0 !== zz.nuclear || oz()
-     }
- ... (13 more removed lines; see GitHub link above)
+       "Pine Door": {
+         positions: [{
+           block: "Pine Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 13. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1374-L1378` → after: `L130-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L130-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L130-L141) · [Before (L1374-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1374-L1378)

```diff
-       xs = {
-         1: [0, 0, 1],
-         2: [1, 0, 0],
-         3: [0, 0, -1],
-         4: [-1, 0, 0]
+       "Pine Door|meta|rot1|open": {
+         positions: [{
+           block: "Pine Door|meta|rot1|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot1|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 14. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1380-L1388` → after: `L143-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L143-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L143-L154) · [Before (L1380-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1380-L1388)

```diff
-       ms = {
-         reactor: {
-           min: 4,
-           max: 12
-         },
-         battery: {
-           min: 2,
-           max: 12
-         }
+       "Pine Door|meta|rot2|closed": {
+         positions: [{
+           block: "Pine Door|meta|rot2|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot2|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 15. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1390-L1397` → after: `L156-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L156-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L156-L167) · [Before (L1390-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1390-L1397)

```diff
-       Is = "Reactor Frame",
-       Cs = "Reactor Glass",
-       es = {
-         edge: [Is],
-         cap: [Cs, Bs],
-         wall: [Cs, Bs],
-         inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
-         ctrl: [Hs]
+       "Pine Door|meta|rot2|open": {
+         positions: [{
+           block: "Pine Door|meta|rot2|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot2|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 16. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1399-L1404` → after: `L169-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L169-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L169-L180) · [Before (L1399-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1399-L1404)

```diff
-       Zs = {
-         edge: [Ps],
-         cap: [Ps],
-         wall: [Ps],
-         inside: [Ps],
-         ctrl: [Ps]
+       "Pine Door|meta|rot3|closed": {
+         positions: [{
+           block: "Pine Door|meta|rot3|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot3|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 17. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1406-L1583` → after: `L182-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L182-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L182-L193) · [Before (L1406-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1406-L1583)

```diff
-       Gs = ["edge", "cap", "wall", "inside"],
-       Ts = ["Reactor Slag"];
- 
-     function cs(zz) {
-       return Ts.includes(As(zz))
-     }
- 
-     function As(zz) {
-       const tz = zz.indexOf("|");
-       return tz < 0 ? zz : zz.slice(0, tz)
-     }
- 
-     function ys(zz) {
-       return As(zz) === Hs ? "reactor" : null
-     }
- 
- ... (162 more removed lines; see GitHub link above)
+       "Pine Door|meta|rot3|open": {
+         positions: [{
+           block: "Pine Door|meta|rot3|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot3|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 18. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1585-L1682` → after: `L195-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L195-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L195-L206) · [Before (L1585-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1585-L1682)

```diff
-       KF = "Collider",
-       uF = "Laser",
-       NF = "Star Alloy",
-       bF = "Glow Dust",
-       wF = [KF, "_Collider Focus"];
- 
-     function DF(zz) {
-       return wF.indexOf(As(zz))
-     }
- 
-     function gF(zz) {
-       return As(zz) === uF
-     }
- 
-     function HF(zz) {
-       return [
- ... (82 more removed lines; see GitHub link above)
+       "Pine Door|meta|rot4|closed": {
+         positions: [{
+           block: "Pine Door|meta|rot4|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot4|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 19. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1684-L1687` → after: `L208-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L208-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L208-L219) · [Before (L1684-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1684-L1687)

```diff
-       AF = {
-         "Mob Farm": "lookFarmEmpty",
-         "Dense Silo": "lookDenseSilo",
-         "Glow Lamp": "lookGlowLamp"
+       "Pine Door|meta|rot4|open": {
+         positions: [{
+           block: "Pine Door|meta|rot4|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Pine Door Top|meta|rot4|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 20. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1689-L1690` → after: `L221-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L221-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L221-L232) · [Before (L1689-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1689-L1690)

```diff
-       yF = {
-         "Forge Hopper": "lookForgeHopperNuclear"
+       "Plum Door": {
+         positions: [{
+           block: "Plum Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 21. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1692-L1893` → after: `L234-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L234-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L234-L245) · [Before (L1692-L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1692-L1893)

```diff
-       MF = {
-         "Loot Chest": `${TF}lookRuinChestName`
-       };
- 
-     function dF(zz) {
-       return "object" === typeof zz && null !== zz && "translationKey" in zz && "string" === typeof zz.translationKey ? zz.translationKey : null
-     }
- 
-     function hF(zz, tz) {
-       var sz;
-       return null !== (sz = dF(zz.displayName(tz))) && void 0 !== sz ? sz : `item:${(0,Az.ue)(tz)}`
-     }
- 
-     function QF(zz, tz) {
-       var sz, Fz, Wz, Xz;
-       let Oz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz;
- ... (186 more removed lines; see GitHub link above)
+       "Plum Door|meta|rot1|open": {
+         positions: [{
+           block: "Plum Door|meta|rot1|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top|meta|rot1|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 22. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1895-L1902` → after: `L247-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L247-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L247-L258) · [Before (L1895-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1895-L1902)

```diff
-       NW = (Object.values(uW), "Jet Chestplate"),
-       bW = "Nova Jet Chestplate",
-       wW = {
-         Helmet: "Nova Helmet",
-         Chestplate: "Nova Chestplate",
-         Gauntlets: "Nova Gauntlets",
-         Leggings: "Nova Leggings",
-         Boots: "Nova Boots"
+       "Plum Door|meta|rot2|closed": {
+         positions: [{
+           block: "Plum Door|meta|rot2|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top|meta|rot2|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 23. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L1904-L2244` → after: `L260-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L260-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L260-L271) · [Before (L1904-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L1904-L2244)

```diff
-       DW = Object.values(wW);
- 
-     function gW(zz, tz, sz) {
-       return Math.min(function(zz) {
-         return oz() && uz(zz) >= 5 ? 20 : 10
-       }(sz), Math.floor(function(zz, tz) {
-         return Math.max(0, zz) + (oz() ? Math.max(0, tz) : 0)
-       }(zz, tz) / 5))
-     }
- 
-     function HW(zz, tz, sz) {
-       const Fz = gW(tz, sz, zz),
-         Wz = uz(zz),
-         Xz = (Wz >= 3 ? 55 : Wz >= 1 ? 50 : zz >= 8 ? 45 : 30) + Fz,
-         Oz = Math.max(100 + Fz, 2 * Xz);
-       return {
- ... (325 more removed lines; see GitHub link above)
+       "Plum Door|meta|rot2|open": {
+         positions: [{
+           block: "Plum Door|meta|rot2|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top|meta|rot2|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 24. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L2246-L2307` → after: `L273-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L273-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L273-L284) · [Before (L2246-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L2246-L2307)

```diff
-       prize: !0
-     }, {
-       item: "Steel Bar",
-       amount: 2,
-       weight: 2,
-       fromTier: 3
-     }, {
-       item: "Logic Board",
-       amount: 1,
-       weight: 6,
-       fromTier: 3
-     }, {
-       item: "Raw Voltite",
-       amount: 2,
-       weight: 10,
-       fromTier: 3,
- ... (46 more removed lines; see GitHub link above)
+       "Plum Door|meta|rot3|closed": {
+         positions: [{
+           block: "Plum Door|meta|rot3|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top|meta|rot3|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 25. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L2309-L2561` → after: `L286-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L286-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L286-L297) · [Before (L2309-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L2309-L2561)

```diff
-       prize: !0
-     }, {
-       item: "Comet Shard",
-       amount: 2,
-       weight: 12,
-       fromTier: 5,
-       prize: !0
-     }];
- 
-     function vX(zz, tz) {
-       return [`Deposit Seed (${zz})`, {
-         item: os[`${zz} Deposit`],
-         amount: tz
-       }]
-     }
-     const UX = Object.fromEntries([vX("Coal", 8), vX("Iron", 8), vX("Copper", 8), vX("Gold", 6), vX("Voltite", 4), vX("Uranium", 4)]),
- ... (237 more removed lines; see GitHub link above)
+       "Plum Door|meta|rot3|open": {
+         positions: [{
+           block: "Plum Door|meta|rot3|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top|meta|rot3|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 26. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L2563-L13410` → after: `L299-L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L299-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L299-L2520) · [Before (L2563-L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L2563-L13410)

```diff
-       kX = {
-         "Uranium Grit": Xz,
-         "Raw Uranium": Xz
-       };
- 
-     function iX(zz) {
-       var tz;
-       return null !== (tz = kX[zz]) && void 0 !== tz ? tz : Math.max(Rz(zz), QX[zz] ? Rz(QX[zz]) : 1, function(zz) {
-         const tz = Wz.findIndex((tz => tz.cost.some((tz => tz.item === zz))));
-         return tz > Xz ? tz : 1
-       }(zz))
-     }
- 
-     function LX(zz, tz) {
-       return lX(tz) ? iX(tz) : function(zz) {
-         if (hX.has(zz)) return 1;
- ... (10832 more removed lines; see GitHub link above)
+       "Plum Door|meta|rot4|closed": {
+         positions: [{
+           block: "Plum Door|meta|rot4|closed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Plum Door Top|meta|rot4|closed",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+       },
+       "Plum Door|meta|rot4|open": {
+         positions: [{
+           block: "Plum Door|meta|rot4|open",
+ ... (2206 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L13412-L14303` → after: `L2522-L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2522-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2522-L2585) · [Before (L13412-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L13412-L14303)

```diff
-       jw = .4;
- 
-     function Aw(zz, tz) {
-       let [sz, Fz, Wz] = zz;
-       const Xz = dv([sz - .02, Fz - .02, Wz - .02], [sz + 1.02, Fz + 1.02, Wz + 1.02], .07);
-       return tz && (Xz.push([
-         [sz + .5, Fz + 1 + .7, Wz + .5],
-         [.08, 1.4, .08]
-       ]), Xz.push([
-         [sz + .5, Fz + 1 + 1.4 + .2, Wz + .5],
-         [jw, jw, jw]
-       ])), Xz
-     }
- 
-     function yw(zz, tz) {
-       let [sz, Fz, Wz] = tz;
- ... (876 more removed lines; see GitHub link above)
+       "Cyan Strongbed|meta|rot4": {
+         positions: [{
+           block: "Cyan Strongbed|meta|rot4",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Cyan Strongbed Head|meta|rot4",
+           x: 1,
+           y: 0,
+           z: 0
+         }]
+       },
+       "Purple Strongbed": {
+         positions: [{
+           block: "Purple Strongbed",
+ ... (48 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L14305-L14430` → after: `L2587-L2598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2587-L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2587-L2598) · [Before (L14305-L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L14305-L14430)

```diff
-       on: {
-         colour: [.45, 1, .35],
-         ms: 900,
-         thick: .14
-       }
-     };
- 
-     function BD(zz) {
-       return [zz[0], zz[1], zz[2]]
-     }
- 
-     function PD(zz) {
-       return `${zz[0]},${zz[1]},${zz[2]}`
-     }
-     class rD {
-       constructor(zz) {
- ... (110 more removed lines; see GitHub link above)
+       "Blue Strongbed": {
+         positions: [{
+           block: "Blue Strongbed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Blue Strongbed Head",
+           x: 0,
+           y: 0,
+           z: -1
+         }]
```

#### 29. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L14432-L14461` → after: `L2600-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2600-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2600-L2611) · [Before (L14432-L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L14432-L14461)

```diff
-       mD = {
-         ...xD,
-         size: [.25, .4],
-         count: 2
-       };
- 
-     function JD(zz) {
-       return {
-         colours: [zz, zz],
-         alpha: 1,
-         size: [.05, .08],
-         life: [.4, .7],
-         power: [.8, 1.4],
-         lift: -3,
-         spread: .6,
-         count: 2,
- ... (14 more removed lines; see GitHub link above)
+       "Blue Strongbed|meta|rot2": {
+         positions: [{
+           block: "Blue Strongbed|meta|rot2",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Blue Strongbed Head|meta|rot2",
+           x: -1,
+           y: 0,
+           z: 0
+         }]
```

#### 30. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L14463-L14582` → after: `L2613-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2613-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2613-L2624) · [Before (L14463-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L14463-L14582)

```diff
-       TD = [.2, .025, .2];
- 
-     function cD(zz, tz) {
-       const [
-         [sz, Fz, Wz],
-         [Xz, Oz, oz]
-       ] = zz.colours;
-       return {
-         texture: zz.soft ? GD : "square_particle",
-         au: tz,
-         minLifeTime: zz.life[0] / YD,
-         maxLifeTime: zz.life[1] / YD,
-         minEmitPower: zz.power[0] * YD,
-         maxEmitPower: zz.power[1] * YD,
-         minSize: zz.size[0],
-         maxSize: zz.size[1],
- ... (104 more removed lines; see GitHub link above)
+       "Blue Strongbed|meta|rot3": {
+         positions: [{
+           block: "Blue Strongbed|meta|rot3",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Blue Strongbed Head|meta|rot3",
+           x: 0,
+           y: 0,
+           z: 1
+         }]
```

#### 31. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L14584-L14977` → after: `L2626-L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2626-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2626-L2845) · [Before (L14584-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L14584-L14977)

```diff
-       MD = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 1, 0],
-         [0, -1, 0],
-         [0, 0, 1],
-         [0, 0, -1]
-       ];
- 
-     function dD(zz) {
-       return 0 === zz.spots.length ? 0 : Math.min(1 * zz.level, 4)
-     }
- 
-     function hD(zz) {
-       return 0 === zz.glass.length ? 0 : Math.min(.75 * zz.level, 3)
-     }
- ... (378 more removed lines; see GitHub link above)
+       "Blue Strongbed|meta|rot4": {
+         positions: [{
+           block: "Blue Strongbed|meta|rot4",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Blue Strongbed Head|meta|rot4",
+           x: 1,
+           y: 0,
+           z: 0
+         }]
+       },
+       "Brown Strongbed": {
+         positions: [{
+           block: "Brown Strongbed",
+ ... (204 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L14979-L14994` → after: `L2847-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2847-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2847-L2858) · [Before (L14979-L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L14979-L14994)

```diff
-       Og = {
-         count: 280,
-         fromMs: 2e3,
-         toMs: 2e4,
-         life: [10, 12],
-         size: [7, 11],
-         blend: ho.f.Standard,
-         from: [
-           [255, 190, 110, .9],
-           [200, 150, 110, .85]
-         ],
-         to: [
-           [80, 76, 72, 0],
-           [60, 58, 56, 0]
-         ],
-         gravity: .08
+       "Leaf Bed": {
+         positions: [{
+           block: "Leaf Bed",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Leaf Bed Head",
+           x: 0,
+           y: 0,
+           z: -1
+         }]
```

#### 33. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L14996-L15011` → after: `L2860-L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2860-L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2860-L2871) · [Before (L14996-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L14996-L15011)

```diff
-       og = {
-         count: 100,
-         fromMs: 0,
-         toMs: 900,
-         life: [4, 5.5],
-         size: [2, 3.5],
-         blend: ho.f.Standard,
-         from: [
-           [220, 200, 160, .85],
-           [200, 180, 140, .8]
-         ],
-         to: [
-           [170, 150, 120, 0],
-           [150, 130, 110, 0]
-         ],
-         gravity: 0
+       "Leaf Bed|meta|rot2": {
+         positions: [{
+           block: "Leaf Bed|meta|rot2",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Leaf Bed Head|meta|rot2",
+           x: -1,
+           y: 0,
+           z: 0
+         }]
```

#### 34. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15013-L15188` → after: `L2873-L2884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2873-L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2873-L2884) · [Before (L15013-L15188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15013-L15188)

```diff
-       vg = {
-         texture: GD,
-         au: Math.ceil(120) + 4,
-         minLifeTime: 1.62,
-         maxLifeTime: 1.7999999999999998,
-         minEmitPower: 33.333333333333336,
-         maxEmitPower: 33.333333333333336,
-         minSize: .6,
-         maxSize: 1,
-         emitRate: 0,
-         colorGradients: [{
-           timeFraction: 0,
-           minColor: [140, 255, 100, .95],
-           maxColor: [90, 255, 120, .9]
-         }, {
-           timeFraction: 1,
- ... (160 more removed lines; see GitHub link above)
+       "Leaf Bed|meta|rot3": {
+         positions: [{
+           block: "Leaf Bed|meta|rot3",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Leaf Bed Head|meta|rot3",
+           x: 0,
+           y: 0,
+           z: 1
+         }]
```

#### 35. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15190-L15302` → after: `L2886-L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2886-L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L2886-L3117) · [Before (L15190-L15302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15190-L15302)

```diff
-       bg = {
-         au: 320,
-         perS: 44
-       };
-     class wg {
-       constructor() {
-         this.zone = null, this.endsAt = 0
-       }
-       start(zz, tz) {
-         this.zone = {
-           centre: [...zz.centre],
-           r: zz.r,
-           band: zz.band ? [zz.band[0], zz.band[1]] : void 0
-         }, this.endsAt = tz
-       }
-       stop() {
- ... (97 more removed lines; see GitHub link above)
+       "Leaf Bed|meta|rot4": {
+         positions: [{
+           block: "Leaf Bed|meta|rot4",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Leaf Bed Head|meta|rot4",
+           x: 1,
+           y: 0,
+           z: 0
+         }]
+       },
+       "Vending Machine": {
+         positions: [{
+           block: "Vending Machine",
+ ... (216 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15304-L15305` → after: `L3119-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3119-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3119-L3122) · [Before (L15304-L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15304-L15305)

```diff
-               timeFraction: .15,
-               minColor: [Fz, Wz, Xz, Oz]
+               block: "_Lunite Auto Miner Body",
+               x: 0,
+               y: 1,
+               z: -1
```

#### 37. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15307-L15308` → after: `L3124-L3127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3124-L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3124-L3127) · [Before (L15307-L15308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15307-L15308)

```diff
-               timeFraction: .8,
-               minColor: [Fz, Wz, Xz, Oz]
+               block: "_Lunite Auto Miner Drill Front",
+               x: 0,
+               y: 1,
+               z: -2
```

#### 38. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15310-L15646` → after: `L3129-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3129-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3129-L3222) · [Before (L15310-L15646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15310-L15646)

```diff
-               timeFraction: 1,
-               minColor: [Fz, Wz, Xz, 0]
-             }],
-             blendMode: ho.f.Standard
-           };
-           return zz.createParticles(vz, {
-             pos: tz,
-             half: gg
-           })
-         })), this.systems
-       }
-     }
-     const Yg = {
-       1: [0, 0, 1],
-       2: [1, 0, 0],
-       3: [0, 0, -1],
- ... (321 more removed lines; see GitHub link above)
+               block: "_Lunite Auto Miner Drill Back",
+               x: 0,
+               y: 1,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Foot Front",
+               x: 0,
+               y: 0,
+               z: -2
+             }]
+           },
+           [`${vv}|meta|rot2`]: {
+             positions: [{
+               block: `${vv}|meta|rot2`,
+               x: 0,
+               y: 0,
+ ... (78 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15741-L15749` → after: `L3225-L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3225-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3225-L3260) · [Before (L15741-L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15741-L15749)

```diff
-       }
-       dispose(zz) {
-         this.clear(zz), this.shownKey = ""
-       }
-       check(zz, tz) {
-         const sz = pg(zz),
-           Fz = [];
-         for (const {
-             entry: Xz
+       }(),
+       ... function() {
+         const vv = {
+             1: vv => ({
+               x: 0,
+               z: vv
+             }),
+             2: vv => ({
+               x: vv,
+               z: 0
+             }),
+             3: vv => ({
+               x: 0,
+               z: -vv
+             }),
+             4: vv => ({
+ ... (20 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15754-L15777` → after: `L3263-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3263-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3263-L3288) · [Before (L15754-L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15754-L15777)

```diff
-         const Wz = fg(Fz);
-         Wz !== this.shownKey && this.show(zz, Wz, Fz)
-       }
-       preview(zz, tz) {
-         const sz = zz.getTargetedBlock(),
-           Fz = sz ? [sz.bu[0], sz.bu[1], sz.bu[2]] : null,
-           Wz = null !== Fz && Fz.every(((zz, sz) => Math.abs(zz + .5 - tz[sz]) <= 8)),
-           Xz = this.store.site(),
-           Oz = Wz && Xz ? function(zz, tz, sz) {
-             const Fz = HF(zz);
-             if (!Fz.every(tz)) return null;
-             const Wz = xF(zz, sz);
-             return {
-               column: Fz,
-               spots: zU({
-                 focus: Fz[1],
- ... (8 more removed lines; see GitHub link above)
+         return zv
+       }(),
+       ... function() {
+         const vv = {};
+         for (let zv = 1; zv <= hv.q; zv++) {
+           const Pv = (0, hv.hc)(zv),
+             Sv = hv.r[zv - 1],
+             ev = [{
+               block: Pv,
+               x: 0,
+               y: 0,
+               z: 0
+             }];
+           for (const vv of hv.l)
+             for (let zv = 1; zv <= Sv; zv++) {
+               if ("southwest" === vv && 1 === zv) continue;
+ ... (10 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15779-L15793` → after: `L3290-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3290-L3291) · [Before (L15779-L15793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15779-L15793)

```diff
-           }(Fz, pg(zz), Xz) : null,
-           oz = Oz ? [Oz.spots] : [],
-           vz = Oz ? `preview ${Fz.join(",")}|${Oz.fits}|${fg(oz)}` : "";
-         var Uz, Kz;
-         vz !== this.shownKey && this.show(zz, vz, oz, null !== (Uz = null === Oz || void 0 === Oz ? void 0 : Oz.column) && void 0 !== Uz ? Uz : [], null === (Kz = null === Oz || void 0 === Oz ? void 0 : Oz.fits) || void 0 === Kz || Kz)
-       }
-       show(zz, tz, sz) {
-         let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
-           Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         this.clear(zz), this.shownKey = tz, Fz.length > 0 && this.meshes.push(Eg(zz, Fz, Mg(Wz ? Sg : qg)));
-         for (const {
-             free: Xz,
-             blocked: Oz,
-             gaps: oz,
-             supports: vz
+           vv[Pv] = {
+             positions: ev
```

#### 42. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15893-L15912` → after: `L3294-L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3294-L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3294-L3317) · [Before (L15893-L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15893-L15912)

```diff
-       }
-       changed() {
-         this.version++;
-         for (const zz of this.listeners) zz()
-       }
-     }
-     var sH = sz(37840);
-     const FH = {
-       isBlock: zz => void 0 !== Tz.j[zz],
-       harvestType: zz => {
-         var tz;
-         return null === (tz = Tz.j[zz]) || void 0 === tz ? void 0 : tz.harvestType
-       },
-       harvestLevel: zz => {
-         var tz;
-         return null === (tz = Tz.j[zz]) || void 0 === tz ? void 0 : tz.harvestLevel
- ... (4 more removed lines; see GitHub link above)
+         return vv
+       }(),
+       "Solar Panel": {
+         positions: [{
+           block: "Solar Panel",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE",
+           x: 1,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel NW",
+           x: 0,
+ ... (8 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15914-L15916` → after: `L3319-L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3319-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3319-L3340) · [Before (L15914-L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15914-L15916)

```diff
-       displayName: zz => {
-         var tz;
-         return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.displayName
+       "Solar Panel|meta|rot2": {
+         positions: [{
+           block: "Solar Panel|meta|rot2",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE|meta|rot2",
+           x: 0,
+           y: 0,
+           z: -1
+         }, {
+           block: "_Solar Panel NW|meta|rot2",
+           x: -1,
+           y: 0,
+           z: 0
+ ... (6 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15918-L15920` → after: `L3342-L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3342-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3342-L3363) · [Before (L15918-L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15918-L15920)

```diff
-       description: zz => {
-         var tz;
-         return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.description
+       "Solar Panel|meta|rot3": {
+         positions: [{
+           block: "Solar Panel|meta|rot3",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE|meta|rot3",
+           x: -1,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel NW|meta|rot3",
+           x: 0,
+           y: 0,
+           z: 1
+ ... (6 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15922-L15924` → after: `L3365-L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3365-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3365-L3386) · [Before (L15922-L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15922-L15924)

```diff
-       harvests: zz => {
-         var tz;
-         return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.harvests
+       "Solar Panel|meta|rot4": {
+         positions: [{
+           block: "Solar Panel|meta|rot4",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE|meta|rot4",
+           x: 0,
+           y: 0,
+           z: 1
+         }, {
+           block: "_Solar Panel NW|meta|rot4",
+           x: 1,
+           y: 0,
+           z: 0
+ ... (6 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15926-L15928` → after: `L3388-L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3388-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3388-L3404) · [Before (L15926-L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15926-L15928)

```diff
-       level: zz => {
-         var tz;
-         return null === (tz = to.m[zz]) || void 0 === tz ? void 0 : tz.level
+       "Homestead Core": {
+         positions: [{
+           block: "Homestead Core",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Homestead Core Mid",
+           x: 0,
+           y: 1,
+           z: 0
+         }, {
+           block: "_Homestead Core Top",
+           x: 0,
+           y: 2,
+           z: 0
+ ... (1 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L15973-L16236` → after: `L3409-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3409-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3409-L3564) · [Before (L15973-L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L15973-L16236)

```diff
-       return zz.endsWith(" Ore")
-     }
-     const UH = {
-         mode: null,
-         detail: null,
-         next: null,
-         nextState: null
-       },
-       KH = [],
-       uH = {
-         info: null,
-         visible: !1,
-         tool: null,
-         live: null,
-         wrench: UH,
-         plan: null,
- ... (248 more removed lines; see GitHub link above)
+       return {
+         [`${vv} Banner`]: {
+           positions: [{
+             block: `${vv} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${vv} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${vv} Banner|meta|rot2|bot`]: {
+           positions: [{
+ ... (140 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16345-L16594` → after: `L3570-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3570-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3570-L3662) · [Before (L16345-L16594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16345-L16594)

```diff
-       const tz = zz.split("|")[0];
-       if (!Ks(tz)) return PH;
-       const sz = At[tz];
-       if (ss(sz)) return rH;
-       const Fz = xg(zz);
-       return Fs(sz) ? [
-         [-Fz[0], -Fz[1], -Fz[2]]
-       ] : CW(sz) ? function(zz, tz) {
-         const sz = zz[0] - 2 * tz[0],
-           Fz = zz[2] - 2 * tz[2],
-           Wz = [];
-         for (let Xz = -1; Xz <= 1; Xz++)
-           for (let tz = -1; tz <= 1; tz++) Wz.push([sz + Xz, zz[1], Fz + tz]);
-         return Wz
-       }([0, 0, 0], Fz) : PH
-     }
- ... (234 more removed lines; see GitHub link above)
+       const zv = (0, ev.Rb)(vv);
+       return {
+         [zv]: {
+           positions: [{
+             block: zv,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${zv} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${zv} Top Right`,
+             x: -1,
+ ... (77 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16626-L16639` → after: `L3667-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3667-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3667-L3742) · [Before (L16626-L16639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16626-L16639)

```diff
-     function dH(zz, tz, sz) {
-       const Fz = zz.split("|")[0];
-       return "Air" !== tz || sz || ! function(zz) {
-         const tz = zz.split("|")[0];
-         return void 0 !== os[tz] || MH.has(tz)
-       }(Fz) ? null : zz
-     }
-     class hH {
-       constructor() {
-         this.lastTapAt = -1 / 0
-       }
-       isNewPress(zz) {
-         const tz = zz - this.lastTapAt >= 300;
-         return this.lastTapAt = zz, tz
+     function Nv(vv) {
+       const zv = `_${vv} Back`,
+         Pv = `_${vv} Dish`;
+       return {
+         [vv]: {
+           positions: [{
+             block: vv,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: zv,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+ ... (60 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16642-L16655` → after: `L3745-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3745-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3745-L3766) · [Before (L16642-L16655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16642-L16655)

```diff
-     class QH {
-       constructor() {
-         this.presses = new hH, this.predicted = null
-       }
-       tap(zz, tz) {
-         const sz = this.presses.isNewPress(tz);
-         return sz && (this.predicted = {
-           station: zz,
-           at: tz
-         }), sz
-       }
-       consumeServerOpen(zz, tz) {
-         const sz = this.predicted;
-         return !(null === sz || sz.station !== zz || tz - sz.at > 2e3) && (this.predicted = null, !0)
+ 
+     function lv(vv) {
+       const zv = `Small ${vv} Pod`;
+       return {
+         [zv]: {
+           positions: [{
+             block: zv,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${vv} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+ ... (6 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16658-L16664` → after: `L3769-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3769-L3772) · [Before (L16658-L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16658-L16664)

```diff
-     class kH {
-       constructor() {
-         this.thrustAt = -1 / 0
-       }
-       lit(zz, tz) {
-         return zz && (this.thrustAt = tz), tz - this.thrustAt < 200
-       }
+     for (const Wv in gv) {
+       for (const vv of gv[Wv].positions)
+         if (vv.id = Sv.g[vv.block].id, Wv === vv.block && (0 !== vv.x || 0 !== vv.y || 0 !== vv.z)) throw new Error(`Multiblock "${Wv}" has main block "${vv.block}" at non-origin position (${vv.x}, ${vv.y}, ${vv.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       gv[Sv.g[Wv].id] = gv[Wv]
```

#### 52. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16666-L16727` → after: `L3774-L3780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3774-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3774-L3780) · [Before (L16666-L16727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16666-L16727)

```diff
-     const iH = [.1, .05, .1],
-       LH = {
-         texture: "effect_5",
-         au: Math.ceil(48),
-         minLifeTime: .35,
-         maxLifeTime: .8,
-         minEmitPower: 1,
-         maxEmitPower: 2,
-         minSize: .2,
-         maxSize: .45,
-         emitRate: 0,
-         gravity: [0, -2, 0],
-         dir1: [-.15, -1, -.15],
-         dir2: [.15, -1, .15],
-         colorGradients: [{
-           timeFraction: 0,
- ... (46 more removed lines; see GitHub link above)
+     const Tv = {};
+     for (const Wv in gv)
+       for (const {
+           block: vv,
+           x: zv,
+           y: Pv,
+           z: hv
```

#### 53. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16729-L16737` → after: `L3782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3782) · [Before (L16729-L16737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16729-L16737)

```diff
-         const oz = null !== (Fz = this.flames.get(sz)) && void 0 !== Fz ? Fz : this.create(zz, sz, Xz),
-           vz = null !== (Wz = zz.getDrawnHeading(sz)) && void 0 !== Wz ? Wz : 0,
-           Uz = this.at;
-         Uz[0] = Xz[0] - .35 * Math.sin(vz), Uz[1] = Xz[1] + 1.05, Uz[2] = Xz[2] - .35 * Math.cos(vz), oz.particles.moveTo(Uz), this.setEmitting(oz, !0)
-       }
-       setEmitting(zz, tz) {
-         zz.emitting !== tz && (zz.emitting = tz, tz || (zz.offAt = performance.now()), zz.particles.setEmitRate(tz ? 60 : 0))
-       }
-       create(zz, tz, sz) {
+         of gv[Wv].positions) {
```

#### 54. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16739-L16744` → after: `L3784-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3784-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3784-L3787) · [Before (L16739-L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16739-L16744)

```diff
-           particles: zz.createParticles(LH, {
-             pos: sz,
-             half: iH
-           }),
-           emitting: !1,
-           offAt: performance.now()
+           mainMultiblock: Wv,
+           compX: zv,
+           compY: Pv,
+           compZ: hv
```

#### 55. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16746` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3789) · [Before (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16746)

```diff
-         return this.flames.set(tz, Fz), Fz
+         Tv[vv] = ev, Tv[Sv.g[vv].id] = ev
```

#### 56. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16748-L16752` → after: `L3791-L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3791-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3791-L3806) · [Before (L16748-L16752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16748-L16752)

```diff
-     }
- 
-     function nH(zz) {
-       return "Reactor Frame" === OF("reactor", zz)
-     }
+   },
+   37757: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => dv,
+       c: () => pv
+     });
+     var hv = Pv(9101),
+       Sv = Pv(9153),
+       ev = Pv(9160);
+     const gv = Sv.t.map((vv => {
+       let {
+         dx: zv,
+         dz: Pv
+       } = vv;
+       return [zv, 0, Pv]
+     }));
```

#### 57. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16755-L16799` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3809-L3810) · [Before (L16755-L16799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16755-L16799)

```diff
-       return is("reactor", zz) && !nH(zz) && (zz.startsWith("Reactor Glass") || zz.startsWith("Reactor Port"))
-     }
-     const qH = "baf2Goal";
-     class SH {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [MW.o.subscribe("setDirectionArrow", (zz => {
-           let {
-             id: tz,
-             position: sz
-           } = zz;
-           tz === qH && (this.goal = sz, this.checkedAt = -1 / 0)
-         })), MW.o.subscribe("clearDirectionArrow", (zz => {
-           let {
-             id: tz
-           } = zz;
-           null !== tz && tz !== qH || (this.goal = null, this.open = null)
- ... (29 more removed lines; see GitHub link above)
+       const zv = hv.g[vv];
+       return !!zv && vv !== hv.b && !zv.model && !zv.zw && !1 !== zv.solid && !zv.SC
```

#### 58. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16802-L16960` → after: `L3813-L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3813-L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3813-L3814) · [Before (L16802-L16960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16802-L16960)

```diff
-       constructor() {
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
-           this.boxStale = !0
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.YB = () => {
-           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
-         }, this.sizes = new ResizeObserver((zz => {
-           for (const tz of zz) tz.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(tz.target, tz.borderBoxSize[0].inlineSize / 2)
-         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
-           this.queued = !1, this.lw || this.clear()
-         }, window.addEventListener("resize", this.YB)
-       }
-       onAfterRender(zz, tz) {
-         var sz;
-         this.api = zz, this.project = null !== (sz = null === tz || void 0 === tz ? void 0 : tz.projectWorldPosToScreenPos) && void 0 !== sz ? sz : null, this.queued || this.lw || (this.queued = !0, queueMicrotask(this.run))
-       }
-       dispose() {
- ... (143 more removed lines; see GitHub link above)
+       constructor(vv) {
+         this.model = vv, this.reshapeOffsets = [...gv, [0, -1, 0]]
```

#### 59. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16962-L16964` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3816-L3818) · [Before (L16962-L16964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16962-L16964)

```diff
-       halfWidthOf(zz) {
-         let tz = this.halfWidths.get(zz);
-         return void 0 === tz && (tz = zz.offsetWidth / 2, this.halfWidths.set(zz, tz), this.sizes.observe(zz), this.labels.add(zz)), tz
+       handles(vv) {
+         const zv = hv.g[vv];
+         return (null === zv || void 0 === zv ? void 0 : zv.model) === this.model && void 0 !== zv.attachedTop
```

#### 60. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16966-L16967` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3820-L3821) · [Before (L16966-L16967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16966-L16967)

```diff
-       forgetGoneLabels() {
-         for (const zz of this.labels) zz.isConnected || (this.sizes.unobserve(zz), this.halfWidths.delete(zz), this.labels.delete(zz))
+       affects(vv) {
+         return this.handles(vv) || pv(vv) || (0, ev.x)(hv.g[vv])
```

#### 61. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16969-L16982` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3823-L3835) · [Before (L16969-L16982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16969-L16982)

```diff
-       anchorOf(zz) {
-         const tz = zz.style.translate,
-           sz = this.anchors.get(zz);
-         if (sz && sz.translate === tz && sz.innerWidth === this.innerWidth && sz.innerHeight === this.innerHeight) return sz;
-         const Fz = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(tz);
-         if (!Fz) return null;
-         const Wz = {
-           translate: tz,
-           x: parseFloat(Fz[1]) / 100 * this.innerWidth,
-           y: parseFloat(Fz[2]) / 100 * this.innerHeight,
-           innerWidth: this.innerWidth,
-           innerHeight: this.innerHeight
-         };
-         return this.anchors.set(zz, Wz), Wz
+       shape(vv, zv, Pv, gv, dv) {
+         let Nv = this.handles(vv(zv, Pv + 1, gv)) ? Sv.l : 0;
+         return Sv.t.forEach(((dv, lv) => {
+           let {
+             dx: Tv,
+             dz: Wv
+           } = dv;
+           const wv = vv(zv + Tv, Pv, gv + Wv);
+           (this.handles(wv) || pv(wv) || function(vv, zv) {
+             const Pv = hv.g[vv];
+             return (0, ev.x)(Pv) && (0, ev.s)(Pv.meta.rot) === (0 !== Sv.t[zv].dx)
+           }(wv, lv)) && (Nv |= 1 << lv)
+         })), (0, hv.i)((0, Sv.m)(hv.g[dv].meta.rootName, Nv))
```

#### 62. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16985-L16986` → after: `L3838-L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3838-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3838-L3839) · [Before (L16985-L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16985-L16986)

```diff
-     const RH = "Baf2ArrowText";
- 
+   },
+   37531: (vv, zv, Pv) => {
```

#### 63. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16988-L16989` → after: `L3841-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3841-L3868) · [Before (L16988-L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16988-L16989)

```diff
-       const sz = zz.rows.find((zz => zz.current));
-       return jz(zz.tutorial) && null !== sz && void 0 !== sz && sz.item && qW(sz) && Zz(sz.item).includes(tz) ? sz.item : null
+       var Pv;
+       zv || (zv = {});
+       const hv = null !== (Pv = zv.customAttributes) && void 0 !== Pv ? Pv : {};
+       var Sv, ev, gv;
+       "Gun" === (null === vv || void 0 === vv ? void 0 : vv.type) && (hv.shotsLeft = null !== (Sv = null !== (ev = hv.shotsLeft) && void 0 !== ev ? ev : null === (gv = hv.gunStats) || void 0 === gv ? void 0 : gv.clipSize) && void 0 !== Sv ? Sv : vv.clipSize);
+       if (hv.enchantmentTier && (hv.enchantmentTier = hv.enchantmentTier.toString()), hv.enchantments)
+         for (const Tv in hv.enchantments) {
+           const vv = hv.enchantments[Tv];
+           if ("number" !== typeof vv) {
+             const zv = parseInt(vv);
+             isNaN(zv) || zv < 0 ? hv.enchantments[Tv] = void 0 : hv.enchantments[Tv] = zv > 1e9 ? 1e9 : zv
+           }
+         }
+       if (hv.enchantmentData)
+         for (const Tv in hv.enchantmentData) {
+           const vv = hv.enchantmentData[Tv];
+ ... (12 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L16991-L17018` → after: `L3870-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3870-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3870-L3886) · [Before (L16991-L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L16991-L17018)

```diff
-     const fH = new class {
-       constructor(zz) {
-         this.select = zz, this.picks = new Map
-       }
-       open(zz, tz, sz) {
-         const Fz = pH(tz, zz);
-         null !== Fz && this.gb(zz, Fz, sz)
-       }
-       follow(zz, tz) {
-         if (oz())
-           for (const [sz, {
-               item: Fz,
-               had: Wz
-             }] of this.picks) {
-             const Xz = pH(zz, sz);
-             Xz !== Fz && (null !== Xz && tz(Fz) > Wz ? this.gb(sz, Xz, tz) : this.picks.delete(sz))
- ... (12 more removed lines; see GitHub link above)
+     Pv.d(zv, {
+       e: () => hv
+     })
+   },
+   37753: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => Fv,
+       g: () => iv,
+       h: () => dv,
+       i: () => Tv,
+       l: () => Yv
+     });
+     var hv = Pv(9101),
+       Sv = Pv(9136),
+       ev = Pv(37757);
+     const gv = (0, hv.i)("Noticeboard"),
+ ... (1 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17021-L17025` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3889) · [Before (L17021-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17021-L17025)

```diff
-       return tz => {
-         let sz = 0;
-         for (const Fz of zz.getInventoryItems())(null === Fz || void 0 === Fz ? void 0 : Fz.name) === tz && (sz += null === Fz.amount ? 1 : Math.max(Fz.amount, 0));
-         return sz
-       }
+       return gv <= vv && vv <= pv
```

#### 66. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17028-L17029` → after: `L3897-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3897-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3897-L3899) · [Before (L17028-L17029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17028-L17029)

```diff
-     function zB(zz, tz, sz, Fz) {
-       zz.getClientOption(tz, "canCraft") && "inventory" !== xW.b.get("openInGameMenuName") && (fH.open(sz, Fz.get(), EH(zz)), MW.o.Yg("toggleMenu", `inventory|${sz}`))
+     function Cv(vv) {
+       var zv, Pv;
+       return "string" === typeof(null === vv || void 0 === vv || null === (zv = vv.persisted) || void 0 === zv || null === (Pv = zv.shared) || void 0 === Pv ? void 0 : Pv.text)
```

#### 67. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17035-L17047` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3903) · [Before (L17035-L17047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17035-L17047)

```diff
-       const tz = IX();
-       zz === tB && tz === sB || (tB = zz, sB = tz, (0, dW.q)(function(zz, tz) {
-         const sz = new Map;
-         for (let Fz = zz + 1; Fz <= Wz.length; Fz++) {
-           const Wz = SX(Fz, zz, tz);
-           if (Wz)
-             for (const tz of Hz(Fz).unlocks) sz.set(tz, {
-               ...Wz,
-               stepsAway: Fz - zz
-             })
-         }
-         return sz
-       }(zz, tz)))
+       return Cv(vv) && "" !== vv.persisted.shared.text.trim()
```

#### 68. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17050-L17053` → after: `L3906-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3906-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3906-L3909) · [Before (L17050-L17053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17050-L17053)

```diff
-     function WB() {
-       return (0, dW.y)(qX(Object.keys(ez), iX)), () => {
-         (0, dW.y)([])
-       }
+     function cv(vv, zv) {
+       let [Pv, , hv] = zv;
+       const [ev, , gv] = Sv.u[vv][wv];
+       return Pv * ev + hv * gv
```

#### 69. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17073-L17114` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3913) · [Before (L17073-L17114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17073-L17114)

```diff
-       let Fz = null,
-         Wz = () => {};
-       const Xz = Xz => {
-         var Oz;
-         let {
-           tutorial: oz,
-           tutorialKnown: vz
-         } = Xz;
-         (null === (Oz = Fz) || void 0 === Oz ? void 0 : Oz.tutorial) === oz && Fz.tutorialKnown === vz || (Fz = {
-           tutorial: oz,
-           tutorialKnown: vz
-         }, Wz = (0, rW.t)({
-           id: "baf2Tutorial",
-           order: -1,
-           labelKey: oB[oz],
-           icon: {
- ... (26 more removed lines; see GitHub link above)
+       return Pv[1] - zv[1] || cv(vv, zv) - cv(vv, Pv)
```

#### 70. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17117-L17177` → after: `L3916-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3916-L3921) · [Before (L17117-L17177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17117-L17177)

```diff
-     function KB(zz, tz, sz) {
-       var Fz, Wz;
-       const Xz = zz.getTargetedBlock();
-       if (!Xz || ! function(zz, tz, sz) {
-           if ("Chest" !== tz) return !1;
-           const Fz = zz.split("|")[0];
-           if (!Ks(Fz) || 0 === At[Fz].outputSlots.length) return !1;
-           const Wz = xg(zz);
-           return sz[0] === Wz[0] && sz[1] === Wz[1] && sz[2] === Wz[2]
-         }(sz, null === (Fz = zz.rtz(tz)) || void 0 === Fz ? void 0 : Fz.name, Xz.normal)) return !1;
-       const [Oz, oz, vz] = Xz.bu, Uz = zz.getBlockId(Oz, oz, vz);
-       return 0 === Uz || !0 === (null === (Wz = Tz.j[Uz]) || void 0 === Wz ? void 0 : Wz.canBePlacedOver)
-     }
-     var uB = sz(36199);
-     const NB = new Set(gs.b);
-     class bB {
- ... (45 more removed lines; see GitHub link above)
+     function mv(vv, zv, Pv, ev, pv) {
+       var dv;
+       let lv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : vv(zv[0], zv[1], zv[2]);
+       if (!(Nv[lv - gv] & 1 << Pv)) return null;
+       const [Tv, Wv, wv] = Sv.u[pv][Pv], av = [zv[0] + Tv, zv[1] + Wv, zv[2] + wv], sv = vv(av[0], av[1], av[2]), Cv = null === (dv = hv.g[sv]) || void 0 === dv ? void 0 : dv.meta;
+       return (null === Cv || void 0 === Cv ? void 0 : Cv.rootId) === ev && Cv.rot === pv && Nv[sv - gv] & 1 << (1 ^ Pv) ? av : null
```

#### 71. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17181-L17197` → after: `L3924-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3924-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3924-L3936) · [Before (L17181-L17197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17181-L17197)

```diff
-     function gB(zz, tz) {
-       const sz = [...zz.baf2CoreBankPaused];
-       for (const [Wz] of zz.baf2CoreBanked) sz.push(Wz);
-       for (const Oz of Wz) {
-         for (const {
-             item: zz
-           }
-           of Oz.cost) sz.push(zz);
-         for (const zz of Oz.newDeposits) sz.push(zz.block);
-         for (const zz of Oz.unlocks) sz.push(zz, Gz(zz));
-         Oz.reward && sz.push(Oz.reward);
-         for (const {
-             item: zz
-           }
-           of null !== (Fz = null === (Xz = Oz.charge) || void 0 === Xz ? void 0 : Xz.items) && void 0 !== Fz ? Fz : []) {
-           var Fz, Xz;
- ... (1 more removed lines; see GitHub link above)
+     function jv(vv, zv, Pv, ev) {
+       const gv = vv(zv, Pv, ev);
+       if (!dv(gv)) return null;
+       const {
+         rootId: pv,
+         rot: Nv
+       } = hv.g[gv].meta, Tv = (zv, Pv) => {
+         let hv = zv,
+           Sv = 1;
+         for (let ev = mv(vv, hv, Pv, pv, Nv); ev && Sv < lv; ev = mv(vv, hv, Pv, pv, Nv)) hv = ev, Sv++;
+         return {
+           end: hv,
+           cells: Sv
```

#### 72. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17199` → after: `L3938-L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3938-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3938-L3942) · [Before (L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17199)

```diff
-       }
+       }, Cv = Tv(Tv([zv, Pv, ev], Wv).end, av).end, iv = Tv(Cv, wv).cells, [cv, , Gv] = Sv.u[Nv][wv];
+       let jv = 1;
+       vv: for (; jv < lv; jv++)
+         for (let zv = 0; zv < iv; zv++)
+           if (!mv(vv, [Cv[0] + cv * zv, Cv[1] - jv + 1, Cv[2] + Gv * zv], sv, pv, Nv)) break vv;
```

#### 73. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17201-L17202` → after: `L3944-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3944-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3944-L3948) · [Before (L17201-L17202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17201-L17202)

```diff
-         message: zz,
-         itemNames: tz([...new Set(sz)])
+         anchor: Cv,
+         rootId: pv,
+         rot: Nv,
+         width: iv,
+         height: jv
```

#### 74. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17205-L17263` → after: `L3951-L3962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3951-L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3951-L3962) · [Before (L17205-L17263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17205-L17263)

```diff
-     const HB = "baf2MultiblockGuide";
-     const BB = new Map;
-     const PB = function(zz, tz, sz, Wz) {
-       let {
-         localPlayerId: Xz
-       } = Wz;
-       const Oz = new Bo,
-         oz = new sb,
-         Uz = new Ub,
-         Kz = new ob(Uz),
-         uz = (zz, tz) => {
-           tz ? Kz.observe(zz) : Kz.unobserve(zz)
-         },
-         Nz = new Ob,
-         bz = new bb(uz),
-         wz = zz => bz.covers(zz),
- ... (43 more removed lines; see GitHub link above)
+ 
+     function fv(vv, zv) {
+       for (const Pv of function(vv) {
+           let {
+             anchor: zv,
+             rot: Pv,
+             width: hv,
+             height: ev
+           } = vv;
+           const [gv, , pv] = Sv.u[Pv][wv], dv = [];
+           for (let Sv = 0; Sv < ev; Sv++)
+             for (let vv = 0; vv < hv; vv++) dv.push([zv[0] + gv * vv, zv[1] - Sv, zv[2] + pv * vv]);
```

#### 75. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17265-L17325` → after: `L3964-L3967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3964-L3967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3964-L3967) · [Before (L17265-L17325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17265-L17325)

```diff
-         }(gz, zz)), sD(Hz)),
-         Qz = new ND(jz, sD(Hz)),
-         kz = new UD,
-         iz = (zz, tz) => {
-           let [sz, Fz, Wz] = zz;
-           kz.answered(tz) || Yz.show({
-             baf2ToastText: [(0, Az.Ud)({
-               translationKey: "buildAFactory2Game:rxSizeNotTaken",
-               params: {
-                 w: sz,
-                 h: Fz,
-                 d: Wz
-               }
-             }, Az.N.whiteUiText)],
-             baf2ToastMs: 4e3,
-             baf2ToastStyle: "baf2ToastWarn"
- ... (45 more removed lines; see GitHub link above)
+         }(vv))
+         if (Cv(zv(Pv[0], Pv[1], Pv[2]))) return Pv;
+       return null
+     }
```

#### 76. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17327-L17336` → after: `L3969-L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3969-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3969-L3988) · [Before (L17327-L17336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17327-L17336)

```diff
-       function Pt(zz) {
-         var tz, sz, Fz, Wz, Xz, Oz, vz;
-         "core" === (null === (tz = oz.get()) || void 0 === tz ? void 0 : tz.kind) && "core" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Hz.send("baf2coreclose"), "power" === (null === (sz = oz.get()) || void 0 === sz ? void 0 : sz.kind) && "power" !== (null === zz || … [truncated]
-         const Uz = pz.getStatus();
-         "collider" === (null === (Oz = oz.get()) || void 0 === Oz ? void 0 : Oz.kind) && "collider" !== (null === zz || void 0 === zz ? void 0 : zz.kind) && Uz && Hz.send(kv(Uz, "close"));
-         const Kz = zz => "reactor" === zz || "battery" === zz;
-         if (Kz(null === (vz = oz.get()) || void 0 === vz ? void 0 : vz.kind) && !Kz(null === zz || void 0 === zz ? void 0 : zz.kind)) {
-           var uz, Nz, bz;
-           const zz = "reactor" === (null === (uz = oz.get()) || void 0 === uz ? void 0 : uz.kind) ? null === (Nz = hz.get()) || void 0 === Nz ? void 0 : Nz.status.baf2RxAt : null === (bz = Qz.get()) || void 0 === bz ? void 0 : bz.status.baf2BatAt;
-           zz && Hz.send(ut(zz, "close"))
+     function Fv(vv, zv, Pv, Sv, ev) {
+       const gv = vv(Pv, Sv, ev);
+       if (!dv(gv)) return null;
+       const {
+         rootId: pv,
+         rot: Nv
+       } = hv.g[gv].meta, lv = [
+         [Pv, Sv, ev]
+       ], Wv = new Set([lv[0].join()]);
+       let wv = lv[0],
+         av = null;
+       for (let hv = 0; hv < lv.length; hv++) {
+         const Pv = lv[hv];
+         if (Gv(Nv, Pv, wv) < 0 && (wv = Pv), Cv(zv(Pv[0], Pv[1], Pv[2]))) {
+           const zv = jv(vv, Pv[0], Pv[1], Pv[2]);
+           (!av || Gv(Nv, zv.anchor, av.anchor) < 0) && (av = zv)
+ ... (4 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17340-L17342` → after: `L3991-L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3991-L3995) · [Before (L17340-L17342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17340-L17342)

```diff
- 
-       function rt() {
-         (0, YW.h)(), Pt(null)
+       return av ??= jv(vv, wv[0], wv[1], wv[2]), {
+         cells: lv,
+         topLeft: wv,
+         rect: av,
+         textCell: fv(av, zv)
```

#### 78. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17735-L17768` → after: `L3998-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L3998-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L3998-L4016) · [Before (L17735-L17768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17735-L17768)

```diff
-   },
-   37934: (zz, tz, sz) => {
-     function Fz(zz, tz, sz) {
-       const Fz = new Set,
-         Wz = new ResizeObserver(sz),
-         Xz = () => {
-           const tz = new Set(document.querySelectorAll(zz));
-           let Xz = !1;
-           for (const zz of Fz) tz.has(zz) || (Wz.unobserve(zz), Fz.delete(zz), Xz = !0);
-           for (const zz of tz) Fz.has(zz) || (Wz.observe(zz), Oz.observe(zz, {
-             attributes: !0,
-             attributeFilter: ["class", "style"]
-           }), Fz.add(zz));
-           Xz && sz()
-         },
-         Oz = new MutationObserver((tz => {
- ... (18 more removed lines; see GitHub link above)
+ 
+     function Yv(vv, zv, Pv, gv, pv) {
+       if (null !== Pv && dv(Pv)) {
+         const {
+           rootName: vv,
+           rot: zv
+         } = hv.g[Pv].meta;
+         if (Sv.u[zv].some((vv => {
+             let [zv, Pv, hv] = vv;
+             return zv === gv[0] && Pv === gv[1] && hv === gv[2]
+           }))) return {
+           root: vv,
+           rot: zv
+         }
+       }
+       const [Nv, lv] = Sv.i[pv], Tv = vv(zv[0] - Nv, zv[1], zv[2] - lv);
+ ... (3 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17775` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L4020) · [Before (L17775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17775)

```diff
-   37917: (zz, tz, sz) => {
+   37764: (vv, zv, Pv) => {
```

#### 80. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17777-L17778` → after: `L4022-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L4022-L4025) · [Before (L17777-L17778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17777-L17778)

```diff
-       b: () => Oz,
-       e: () => Xz
+       d: () => ev,
+       f: () => gv,
+       h: () => Sv,
+       l: () => pv
```

#### 81. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17780` → after: `L4027-L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4027-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L4027-L4029) · [Before (L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17780)

```diff
-     const Fz = new WeakMap;
+     var hv = Pv(321);
+     const Sv = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...Pv(618).y.map((vv => `${vv} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       ev = ["Obby RPG"];
```

#### 82. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L17783-L17798` → after: `L4032-L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4032-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/235.js#L4032-L4039) · [Before (L17783-L17798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/235.js#L17783-L17798)

```diff
-       let tz = Fz.get(zz);
-       return tz || (tz = {
-         hidden: zz.hidden,
-         x: NaN,
-         y: NaN
-       }, Fz.set(zz, tz)), tz
-     }
- 
-     function Xz(zz, tz) {
-       const sz = Wz(zz);
-       sz.hidden !== tz && (sz.hidden = tz, zz.hidden = tz)
-     }
- 
-     function Oz(zz, tz, sz) {
-       const Fz = Wz(zz);
-       Fz.x === tz && Fz.y === sz || (Fz.x = tz, Fz.y = sz, zz.style.translate = `${tz}vw ${sz}vh`)
+       const zv = vv.indexOf("|");
+       return -1 === zv ? {
+         item: vv,
+         clientPredictedThrower: null
+       } : {
+         item: vv.slice(0, zv),
+         clientPredictedThrower: vv.slice(zv + 1)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L4-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/236.js#L4-L181) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/236.js#L4)

```diff
-   40180: (zz, tz, sz) => {
+   37599: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Nv,
+       f: () => hv,
+       h: () => pv,
+       k: () => Sv,
+       l: () => gv,
+       n: () => ev
+     });
+     const hv = 1.001,
+       Sv = .501,
+       ev = .025,
+       gv = .75,
+       pv = .08,
+       dv = 4;
+ 
+ ... (162 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L344-L408` → after: `L577-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L577-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/236.js#L577-L646) · [Before (L344-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/236.js#L344-L408)

```diff
-       static _CheckLimit(zz, tz) {
-         let sz = Fz._LogLimitOutputs[zz];
-         return sz ? sz.current++ : (sz = {
-           limit: tz,
-           current: 1
-         }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
-       }
-       static _GenerateLimitMessage(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const sz = Fz._LogLimitOutputs[zz];
-         if (!sz || !Fz.MessageLimitReached) return;
-         const Wz = this._Levels[tz];
-         sz.current === sz.limit && Fz[Wz.name](Fz.MessageLimitReached.replace(/%LIMIT%/g, "" + sz.limit).replace(/%TYPE%/g, Wz.name ?? ""))
-       }
-       static _AddLogEntry(zz) {
-         Fz._LogCache = zz + Fz._LogCache, Fz.OnNewCacheEntry && Fz.OnNewCacheEntry(zz)
- ... (49 more removed lines; see GitHub link above)
+       constructor() {
+         this.reshapeOffsets = Cv
+       }
+       handles(vv) {
+         return null !== mv(vv)
+       }
+       affects(vv) {
+         var zv, Pv;
+         return av.has(null !== (zv = null === (Pv = hv.g[vv]) || void 0 === Pv ? void 0 : Pv.meta.rootName) && void 0 !== zv ? zv : "")
+       }
+       placedBy(vv) {
+         var zv;
+         return (null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.meta.rootName) === ev.e ? ev.f : null
+       }
+       shape(vv, zv, Pv, Sv, pv, Nv) {
+         var lv, Tv, Wv;
+ ... (54 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L4)

```diff
-   39861: (zz, tz, sz) => {
+   38029: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L9-L13` → after: `L8-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L8-L39) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L9-L13)

```diff
-     var Fz = sz(1868);
-     let Wz = !1;
- 
-     function Xz() {
-       Wz = !0
+     var hv = Pv(38036);
+     const Sv = [0, 0, 0];
+     class ev {
+       constructor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv;
+         this.pool = vv, this.origin = zv, this.count = 0, this.free = []
+       }
+       take() {
+         var vv;
+         const zv = null !== (vv = this.free.pop()) && void 0 !== vv ? vv : this.count++;
+         return zv >= this.pool.GT && this.pool.grow(Math.max(2 * this.pool.GT, zv + 1)), this.hide(zv), zv
+       }
+       release(vv) {
+         this.hide(vv), this.free.push(vv)
+       }
+       write(vv, zv, Pv, Sv) {
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15-L17` → after: `L41-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L41-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L41-L71) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L15-L17)

```diff
- 
-     function Oz() {
-       Wz && (Wz = !1, (0, Fz.b)())
+     class gv {
+       constructor(vv, zv, Pv) {
+         this.api = vv, this.model = zv, this.initialCapacity = Pv, this.kinds = new Map, this.origin = [0, 0, 0]
+       }
+       kindOf(vv) {
+         let zv = this.kinds.get(vv);
+         if (void 0 === zv) {
+           const Pv = this.api.createInstancePool({
+             ...this.model,
+             item: vv
+           }, this.initialCapacity);
+           null === Pv || void 0 === Pv || Pv.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zv = Pv && new ev(Pv, this.origin), this.kinds.set(vv, zv)
+         }
+         return zv
+       }
+       follow(vv) {
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L20` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L74) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L20)

```diff
-   39818: (zz, tz, sz) => {
+   38051: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L23` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L77) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L23)

```diff
-       h: () => Nz,
+       g: () => pv,
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L26-L33` → after: `L80-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L80-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L80-L585) · [Before (L26-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L26-L33)

```diff
-     var Fz = sz(1875),
-       Wz = sz(1274),
-       Xz = sz(39720),
-       Oz = sz(39740),
-       oz = sz(39748),
-       vz = sz(39765);
-     const Uz = new Wz.d;
-     let Kz = !1;
+     const hv = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       Sv = [0, 1, 2, 0, 2, 3],
+       ev = [4, 5];
+ 
+     function gv(vv, zv, Pv, hv, Sv) {
+       for (let gv = 0; gv < 6; gv++) ev.includes(gv) === Sv && Nv(vv, zv, Pv, hv, gv)
+     }
+ 
+     function pv(vv, zv, Pv, hv) {
+       for (let Sv = 0; Sv < 6; Sv++) Nv(vv, zv, Pv, hv, Sv)
+     }
+ 
+     function dv(vv, zv, Pv, ev, gv) {
+       for (let pv = 0; pv < 6; pv++)
+         for (const dv of [0, 1]) {
+           const [Nv, lv, Tv] = [dv + 2, dv + 1, (dv + 3) % 4], Wv = vv.length / 3;
+ ... (490 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L36-L37` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L588) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L36-L37)

```diff
-       const tz = (0, Xz.f)();
-       return null !== tz && +zz === tz.api.localId
+       gv = vv
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L41-L59` → after: `L599-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L599-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L599-L604) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L41-L59)

```diff
-       Kz || (Kz = !0, (0, vz.l)(Oz.l, (zz => {
-         var tz, sz;
-         const Fz = (0, oz.d)(Oz.l, zz);
-         if (!(0, oz.c)(Fz)) return;
-         const Wz = Fz;
-         uz(Wz.vt) && bz(Wz.Ut, {
-           icon: Wz.ut,
-           level: Wz.Dt,
-           displayName: null !== (tz = Wz.Kt) && void 0 !== tz ? tz : null,
-           durationMs: null !== (sz = Wz.Nt) && void 0 !== sz ? sz : null
-         })
-       })), (0, vz.l)(Oz.P, (zz => {
-         const tz = (0, oz.d)(Oz.P, zz);
-         if (!(0, oz.c)(tz)) return;
-         const sz = tz;
-         uz(sz.vt) && Fz.c.remove(sz.Ut)
- ... (3 more removed lines; see GitHub link above)
+       return gv ? Sv.length : ev
+     }
+ 
+     function Tv(vv) {
+       var zv, Pv;
+       return null !== (zv = null === (Pv = Sv[vv - 1]) || void 0 === Pv ? void 0 : Pv.reactorTier) && void 0 !== zv ? zv : 0
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L63-L65` → after: `L608-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L608-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L608-L623) · [Before (L63-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L63-L65)

```diff
-       Fz.c.update(zz, tz), Uz.forEach((tz => {
-         tz(zz)
-       }))
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tv(vv) > 0;
+       return Pv && !gv ? "hidden" : vv <= zv ? "open" : Pv ? zv < 5 ? "hidden" : zv < ev ? "teaser" : "locked" : "locked"
+     }
+ 
+     function wv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const {
+         kind: hv,
+         n: Sv
+       } = Cv(vv);
+       return {
+         key: zv[hv],
+         params: {
+           [hv]: Pv ? String(Sv) : Sv
+         }
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L68-L69` → after: `L626-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L626-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L626-L652) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L68-L69)

```diff
-       localEffectUpdated: {
-         watch: zz => Uz.add(zz)
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function sv(vv, zv) {
+       return Tv(vv) > 0 && zv < ev
+     }
+ 
+     function Cv(vv) {
+       const zv = Tv(vv);
+       if (zv > 0) return {
+         kind: "atomic",
+         n: zv,
+         short: `A${zv}`
+       };
+ ... (11 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L72-L83` → after: `L655-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L655-L658) · [Before (L72-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L72-L83)

```diff
-   },
-   39820: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Kz
-     });
-     var Fz = sz(4436),
-       Wz = sz(4432),
-       Xz = sz(39754),
-       Oz = sz(39765);
-     const oz = new Set(Fz.J),
-       vz = Fz.J.map((zz => (new TextEncoder).encode(zz))),
-       Uz = new Map;
+ 
+     function iv(vv) {
+       return Sv[Math.max(1, Math.min(vv, Sv.length)) - 1]
+     }
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L87-L126` → after: `L673-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L673-L675) · [Before (L87-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L87-L126)

```diff
-       return null === (sz = Uz.get(zz)) || void 0 === sz ? void 0 : sz[tz]
-     }(0, Oz.l)(Fz.fc.NewOtherEntitySettings, (zz => {
-       zz.payloadKind === Wz.Wb.Msgpack && vz.some((tz => function(zz, tz) {
-         const sz = tz[0];
-         for (let Fz = zz.indexOf(sz); - 1 !== Fz && Fz + tz.length <= zz.length; Fz = zz.indexOf(sz, Fz + 1)) {
-           let sz = 1;
-           for (; sz < tz.length && zz[Fz + sz] === tz[sz];) sz++;
-           if (sz === tz.length) return !0
-         }
-         return !1
-       }(zz.payload, tz))) && function(zz) {
-         if (null === zz || "object" !== typeof zz || null === zz.settings || "object" !== typeof zz.settings) return;
-         const tz = String(zz.eId),
-           sz = zz.settings;
-         let Fz = Uz.get(tz);
-         for (const Wz in sz) {
- ... (24 more removed lines; see GitHub link above)
+       return null !== (zv = vv.baf2CoreOpen) && void 0 !== zv ? zv : ev
+     }
+     const Yv = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L129` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L678) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L129)

```diff
-       return Kz[zz]
+       return Yv.includes(vv)
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L131` → after: `L680-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L680-L682) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L131)

```diff
-     const Nz = new Xz.d;
+     const Ov = (vv, zv) => zv.map((zv => [zv, [vv]])),
+       Dv = Object.fromEntries([...Ov("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Ov("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Ov("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator",  … [truncated]
+     new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L134` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L685-L686) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L134)

```diff
-       return Nz.add(zz)
+       var zv;
+       return null !== (zv = Dv[vv]) && void 0 !== zv ? zv : ["Workbench"]
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L138-L186` → after: `L690-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L690-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L690-L730) · [Before (L138-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L138-L186)

```diff
-       Nz.callEach(zz, "a roster listener")
-     }(0, vz.l)(Oz.ab, (zz => {
-       const tz = (0, oz.d)(Oz.ab, zz);
-       if (void 0 === tz) return;
-       const sz = tz.yF.some((zz => {
-           let {
-             MF: tz,
-             dF: sz
-           } = zz;
-           return null !== sz && Uz.has(tz) && Uz.getName(tz) !== sz
-         })),
-         {
-           added: Fz,
-           removed: Xz,
-           settingChanges: vz
-         } = Uz.apply(tz),
- ... (33 more removed lines; see GitHub link above)
+       return Kv(vv)[0]
+     }
+     Sv.slice(1).map(((vv, zv) => `Core Tier ${zv+2}`));
+     var Uv = Pv(9101);
+     const Rv = ["on", "hud", "off"];
+ 
+     function xv(vv) {
+       return "on" === vv
+     }
+     var tv = Pv(312);
+     const qv = "Mob Farm",
+       Iv = {
+         Pig: 1,
+         Cow: 1,
+         Sheep: 1,
+         Deer: 1,
+ ... (25 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L188-L215` → after: `L732-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L732-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L732-L737) · [Before (L188-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L188-L215)

```diff
-     })), (0, vz.g)((() => {
-       Uz.clear(), Kz = {}, Wz.d.clear(), wz({
-         kind: "reset"
-       })
-     })), (0, vz.k)((() => {
-       Uz.clear(), wz({
-         kind: "reset"
-       })
-     }))
-   },
-   39838: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => ez,
-       c: () => gz,
-       d: () => cz,
-       f: () => jz
- ... (12 more removed lines; see GitHub link above)
+       if (vv.endsWith(Hv)) {
+         const zv = vv.slice(0, -14);
+         return void 0 !== Iv[zv] ? zv : null
+       }
+       return null
+     }
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L218-L234` → after: `L740-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L740-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L740-L800) · [Before (L218-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L218-L234)

```diff
-       let {
-         deadEId: tz,
-         killerEId: sz,
-         killerLifeformType: Fz,
-         withItem: Wz,
-         killstreak: Xz
-       } = zz;
-       return {
-         killer: rz({
-           eId: sz,
-           lifeformType: Fz
-         }),
-         victim: rz({
-           eId: tz
-         }),
-         withItem: Wz,
- ... (1 more removed lines; see GitHub link above)
+       return !0 === vv.mobFarm
+     }
+ 
+     function Jv(vv, zv) {
+       return Zv[Iv[zv]] * vv.opMs / 1e3
+     }
+     const Ev = new Map;
+     const ov = "baf2islands",
+       bv = "baf2islandnew";
+ 
+     function rv(vv) {
+       const zv = Sv.findIndex((zv => zv.unlocks.includes(vv)));
+       return zv < 0 ? 1 : zv + 1
+     }
+ 
+     function kv(vv) {
+ ... (45 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L245-L248` → after: `L878-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L878-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L878-L881) · [Before (L245-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L245-L248)

```diff
-         killer: rz(tz),
-         victim: rz(sz),
-         withItem: Fz,
-         killstreak: 0
+         input: Fz,
+         inputAmount: 1,
+         output: vv,
+         outputAmount: 1
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L253` → after: `L1122-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1122-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1122-L1145) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L253)

```diff
-       Jz && Cz((() => "killed" === zz.kind ? wz(zz.body) : Dz(zz.body)))
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       if (!vv.couplable) throw new Error(`${vv.kind} takes no Power Coupler`);
+       let Pv = Lz.get(vv);
+       Pv || (Pv = [], Lz.set(vv, Pv));
+       let hv = Pv[zv];
+       if (!hv) {
+         var Sv;
+         const {
+           divisor: ev,
+           powerPerS: gv
+         } = Az[zv - 1], pv = vv.opMs / ev, dv = void 0 !== vv.fluidMade || void 0 !== vv.cryoMade ? vv.powerPerOp : gv * pv / 1e3;
+         hv = {
+           ...vv,
+           fuelSlot: null,
+           couplerSlot: null !== (Sv = Hz(vv)) && void 0 !== Sv ? Sv : void 0,
+           opMs: pv,
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L255-L256` → after: `L1147-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1147-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1147-L1148) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L255-L256)

```diff
-     const Hz = "#2727f1",
-       Bz = "#912c2c";
+     const yz = new Map;
+     const Bz = new Map;
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L260` → after: `L1153-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1153-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1153-L1157) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L260)

```diff
-       return uz.g.has(zz) ? null === (sz = uz.g.getSettings(zz)) || void 0 === sz ? void 0 : sz[tz] : (0, Kz.d)(zz, tz)
+       let hv = Bz.get(zv);
+       return hv || (hv = {
+         ...vv,
+         recipes: [nz(zv)]
+       }, Bz.set(zv, hv)), hv
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L264-L300` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1161) · [Before (L264-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L264-L300)

```diff
-       var tz, sz, Oz, oz, Kz;
-       let {
-         eId: Nz,
-         name: bz,
-         colour: wz,
-         lifeformType: Dz
-       } = zz;
-       if (void 0 === Nz || null === Nz || "" === Nz) {
-         const zz = bz || null;
-         return {
-           id: null,
-           shownName: zz,
-           lifeformType: null === zz && null !== Dz && void 0 !== Dz ? Dz : null,
-           colour: wz || null,
-           local: !1,
-           realName: null
- ... (21 more removed lines; see GitHub link above)
+       return !0 === vv.synth
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L302-L306` → after: `L1163-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1163-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1163-L1307) · [Before (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L302-L306)

```diff
-     const Yz = 32;
-     let xz = [],
-       mz = null,
-       Jz = !1,
-       Iz = !1;
+     const oz = (vv, zv, Pv, hv) => ({
+         output: vv,
+         outputAmount: zv,
+         tier: Pv,
+         inputs: hv.map((vv => {
+           let [zv, Pv] = vv;
+           return {
+             item: zv,
+             amount: Pv
+           }
+         }))
+       }),
+       bz = Object.fromEntries([oz("Conveyor Belt", 4, 1, [
+         ["Iron Bar", 2]
+       ]), oz("Motor", 1, 2, [
+         ["Iron Plate", 2],
+ ... (129 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L309` → after: `L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1310) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L309)

```diff
-       null === mz ? (xz.length === Yz && xz.shift(), xz.push(zz)) : mz(zz())
+       return new Set(vv.flatMap((vv => vv.bonus ? [vv.output, vv.bonus.item] : [vv.output])).filter((vv => !Xz.includes(vv))))
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L312-L321` → after: `L1315-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1315-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1315-L1326) · [Before (L312-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L312-L321)

```diff
-     function ez() {
-       Iz || (Iz = !0, (0, bz.l)(Oz.fc.PlayerKilled, (zz => {
-         const tz = (0, Nz.f)(zz);
-         (0, Nz.c)(tz) && Cz((() => wz(tz)))
-       })), (0, bz.l)(Oz.fc.CustomKillfeed, (zz => {
-         const tz = (0, Nz.f)(zz);
-         (0, Nz.c)(tz) && (0, Nz.c)(tz.killer) && (0, Nz.c)(tz.victim) && Cz((() => Dz(tz)))
-       })), (0, bz.g)((() => {
-         xz = []
-       })))
+     function zP(vv) {
+       return null === vv.inputSlot && void 0 === vv.inputSlots && void 0 === vv.powerMade && void 0 === vv.fluidMade && !vv.treeCutter && void 0 === vv.table
+     }
+ 
+     function PP(vv) {
+       return !0 === vv.treeCutter
+     }
+     const hP = ["Voltite Cell"];
+ 
+     function SP(vv) {
+       var zv, Pv;
+       return null !== (zv = null === (Pv = vv.fuels) || void 0 === Pv ? void 0 : Pv.some((vv => hP.includes(vv)))) && void 0 !== zv && zv
```

#### 27. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L323-L325` → after: `L1328-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1328-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1328-L1334) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L323-L325)

```diff
-     const Zz = Object.freeze([0, 0, 0]),
-       Gz = [0, 0, 0],
-       Tz = [0, 0, 0],
+     const eP = {
+         Coal: 32e3,
+         Charcoal: 32e3,
+         ...Object.fromEntries(tv.Gc.map((vv => [vv, 8e3]))),
+         ...Object.fromEntries(tv.jd.map((vv => [vv, 2e3]))),
+         "Voltite Cell": 12e4
+       },
```

#### 28. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L327-L345` → after: `L1336-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1336-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1336-L1342) · [Before (L327-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L327-L345)

```diff
-         kill: {
-           watch(zz) {
-             if (Jz = !0, 0 === xz.length) return mz = zz, () => {
-               Jz = !1, mz = null
-             };
-             const tz = setTimeout((() => {
-               const tz = xz;
-               xz = [], mz = zz;
-               for (const Fz of tz) try {
-                 zz(Fz())
-               } catch (sz) {
-                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", sz)
-               }
-             }), 0);
-             return () => {
-               clearTimeout(tz), Jz = !1, mz = null
- ... (3 more removed lines; see GitHub link above)
+         "Coal Deposit": "Coal",
+         "Iron Deposit": "Raw Iron",
+         "Stone Deposit": "Messy Stone",
+         "Copper Deposit": "Raw Copper",
+         "Gold Deposit": "Raw Gold",
+         "Voltite Deposit": "Raw Voltite",
+         "Uranium Deposit": "Raw Uranium"
```

#### 29. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L348-L353` → after: `L1345-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1345-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1345-L1383) · [Before (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L348-L353)

```diff
-         localPos() {
-           const zz = (0, Uz.f)();
-           if (null === zz) return Zz;
-           const tz = zz.api.apiView;
-           for (let sz = 0; sz < 3; sz++) Gz[sz] = oz.t.localPos(tz, 0, sz);
-           return Gz
+         "Uranium Deposit": 4e3
+       };
+ 
+     function dP(vv) {
+       var zv;
+       return null !== (zv = Object.keys(gP).find((zv => gP[zv] === vv))) && void 0 !== zv ? zv : null
+     }
+ 
+     function NP(vv) {
+       return Dz.includes(vv)
+     }
+ 
+     function lP(vv) {
+       return !0 !== vv.nuclear || pv()
+     }
+     var TP = Pv(302);
+ ... (23 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L355-L390` → after: `L1385-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1385-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1385-L1387) · [Before (L355-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L355-L390)

```diff
-         targetedBlockPos() {
-           const zz = (0, Uz.f)();
-           if (null === zz || oz.t.targetBlockId(zz.api.apiView, 0) === oz.fd) return null;
-           for (let tz = 0; tz < 3; tz++) Tz[tz] = oz.t.targetBlock(zz.api.apiView, 0, tz);
-           return Tz
-         }
-       }
-   },
-   38417: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Fz
-     });
-     class Fz {
-       constructor() {
-         this.members = new Map
-       }
- ... (20 more removed lines; see GitHub link above)
+         battery: {
+           min: 2,
+           max: 12
```

#### 31. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L392-L397` → after: `L1389-L15744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1389-L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L1389-L15744) · [Before (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L392-L397)

```diff
-         for (const Fz of zz.kF) {
-           const zz = this.members.get(Fz);
-           var sz;
-           if (zz) this.members.delete(Fz), tz.removed.push({
-             playerId: Fz,
-             name: null !== (sz = zz.name) && void 0 !== sz ? sz : void 0
+       },
+       FP = "Reactor Frame",
+       YP = "Reactor Glass",
+       nP = {
+         edge: [FP],
+         cap: [YP, iP],
+         wall: [YP, iP],
+         inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
+         ctrl: [CP]
+       },
+       OP = {
+         edge: [cP],
+         cap: [cP],
+         wall: [cP],
+         inside: [cP],
+         ctrl: [cP]
+ ... (14340 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L402-L403` → after: `L16374-L16884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16374-L16884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16374-L16884) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L402-L403)

```diff
-       has(zz) {
-         return this.members.has(zz)
+       index(vv) {
+         this.indexed = !0;
+         for (const zv of Dz)
+           for (const Pv of Fi(zv)) {
+             const zv = vv.blockNameToBlockId(Pv, !0),
+               hv = Oi(Pv);
+             null !== zv && hv.length > 0 && (this.offsetsList.push(hv), this.offsetsIndexById[zv] = this.offsetsList.length)
+           }
+       }
+       onAfterRender(vv, zv) {
+         this.indexed || this.index(vv);
+         const Pv = performance.now();
+         if (Pv - this.lastCheckMs < 100) return;
+         this.lastCheckMs = Pv, this.checks++;
+         const hv = Wa.f.aa,
+           [Sv, ev, gv] = Yi(zv, hv);
+ ... (495 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L405-L406` → after: `L16886-L16911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16886-L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16886-L16911) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L405-L406)

```diff
-       ids() {
-         return [...this.members.keys()]
+       toastBox(vv) {
+         var zv;
+         const Pv = null !== (zv = this.toasts[0]) && void 0 !== zv ? zv : null;
+         if (Pv !== this.toastEl || vv && Pv) {
+           this.toastEl = Pv;
+           const vv = null === Pv || void 0 === Pv ? void 0 : Pv.getBoundingClientRect();
+           this.toast = vv && vv.width > 0 && vv.height > 0 ? {
+             left: vv.left,
+             top: vv.top,
+             right: vv.right,
+             bottom: vv.bottom
+           } : null
+         }
+         return this.toast
+       }
+       liftAbove(vv, zv, Pv) {
+ ... (10 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L408` → after: `L16913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16913) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L408)

```diff
-       getName(zz) {
+       watch(vv) {
```

#### 35. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L410` → after: `L16915-L16920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16915-L16920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16915-L16920) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L410)

```diff
-         return null !== (tz = null === (sz = this.members.get(zz)) || void 0 === sz ? void 0 : sz.name) && void 0 !== tz ? tz : void 0
+         this.tracker && this.sizes.unobserve(this.tracker), null === (zv = this.hud) || void 0 === zv || zv.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = vv, this.hud = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.closest(". … [truncated]
+           passive: !0
+         }), this.hudStyle.observe(this.hud, {
+           attributes: !0,
+           attributeFilter: ["style", "class"]
+         }))
```

#### 36. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L412` → after: `L16922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16922) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L412)

```diff
-       getSettings(zz) {
+       shiftLeftOf(vv, zv) {
```

#### 37. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L414` → after: `L16924-L16932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16924-L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16924-L16932) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L414)

```diff
-         return null === (tz = this.members.get(zz)) || void 0 === tz ? void 0 : tz.settings
+         const hv = this.anchorOf(vv);
+         if (!hv) return 0;
+         const {
+           y: Sv
+         } = hv, ev = hv.x + (null !== (Pv = this.labelOffsets.get(vv)) && void 0 !== Pv ? Pv : 0), gv = this.em, {
+           halfWidth: pv,
+           labelled: dv
+         } = this.extentOf(vv), Nv = Sv - gv, lv = ev + pv;
+         return Sv + gv * (dv ? 6.2 : 3) < zv.top || Nv > zv.bottom || lv < zv.left - 6 || ev - pv > zv.right ? 0 : Math.max(zv.left - 6 - lv, 6 - (ev - pv))
```

#### 38. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L416` → after: `L16934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16934) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L416)

```diff
-       getSetting(zz, tz) {
+       shiftOnScreen(vv) {
```

#### 39. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L418` → after: `L16936-L17013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16936-L17013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L16936-L17013) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L418)

```diff
-         return null === (sz = this.members.get(zz)) || void 0 === sz ? void 0 : sz.settings[tz]
+         const Pv = this.anchorOf(vv);
+         if (!Pv) return 0;
+         const {
+           halfWidth: hv
+         } = this.extentOf(vv), Sv = Pv.x + (null !== (zv = this.labelOffsets.get(vv)) && void 0 !== zv ? zv : 0), ev = Sv + hv - (this.innerWidth - 6);
+         return ev > 0 ? -ev : Math.max(0, 6 - (Sv - hv))
+       }
+       runLabelAside(vv, zv) {
+         var Pv;
+         let hv = null;
+         for (let gv = 0; gv < vv.children.length; gv++) vv.children[gv].classList.contains("DirectionArrowLabel") && (hv = vv.children[gv]);
+         if (!hv) return 0;
+         const Sv = vv.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(vv) : null,
+           ev = (Sv && this.api ? this.side.sideOf(this.api, {
+             x: Sv.x / this.innerWidth * 100,
+             y: Sv.y / this.innerHeight * 100
+ ... (62 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L421` → after: `L17016-L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R17016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L17016-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/237.js#L17016-L17774) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/237.js#L421)

```diff
-         this.members.clear()
+         this.picks.clear()
+       }
+       HW(vv, zv, Pv) {
+         this.picks.set(vv, {
+           item: zv,
+           had: Pv(zv)
+         }), this.select(vv, zv)
+       }
+     }(tS.q);
+ 
+     function zc(vv) {
+       return zv => {
+         let Pv = 0;
+         for (const hv of vv.getInventoryItems())(null === hv || void 0 === hv ? void 0 : hv.name) === zv && (Pv += null === hv.amount ? 1 : Math.max(hv.amount, 0));
+         return Pv
+       }
+ ... (743 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L4-L6)

```diff
-   38814: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => sF
+   40387: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv,
+       e: () => lv,
+       h: () => Nv
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L8-L144` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L10-L14) · [Before (L8-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L8-L144)

```diff
-     const Fz = [0, 90, 180, 270],
-       Wz = "plotsblueprint";
-     var Xz = sz(65),
-       Oz = sz(36086),
-       oz = sz(30),
-       vz = sz(1571),
-       Uz = sz(1664),
-       Kz = sz(34);
-     const uz = [
-         ["farm_hut", "farm_house", "farm_barn"],
-         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
-         ["market_stand", "market_stall", "market_shop"],
-         ["castle_wall", "castle_gate", "castle_tower"]
-       ],
-       Nz = {
-         farm_hut: {
- ... (121 more removed lines; see GitHub link above)
+     var hv, Sv = Pv(36620),
+       ev = Pv(36594);
+     ! function(vv) {
+       vv[vv.CW = 0] = "CW", vv[vv.CCW = 1] = "CCW"
+     }(hv || (hv = {}));
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L146-L152` → after: `L16-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L16-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L16-L24) · [Before (L146-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L146-L152)

```diff
-       constructor(zz, tz) {
-         this.api = zz, this.placement = tz, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
-           this.placement.stop(), this.Iw("journal_opened")
-         }, this.build = zz => {
-           this.Iw("placement_started"), this.placement.start(zz), (0, Oz.h)()
-         }, this.putAway = () => {
-           this.api.sendCommand(`${Wz} cancel`)
+       static Interpolate(vv, zv, Pv, hv, Sv) {
+         if (0 === vv) return 0;
+         const ev = 1 - 3 * hv + 3 * zv,
+           gv = 3 * hv - 6 * zv,
+           pv = 3 * zv;
+         let dv = vv;
+         for (let Nv = 0; Nv < 5; Nv++) {
+           const zv = dv * dv;
+           dv -= (ev * (zv * dv) + gv * zv + pv * dv - vv) * (1 / (3 * ev * zv + 2 * gv * dv + pv)), dv = Math.min(1, Math.max(0, dv))
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L154-L169` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L26) · [Before (L154-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L154-L169)

```diff
-       }
-       getPages() {
-         return this.pages
-       }
-       Sw(zz) {
-         let [, tz, sz] = zz;
-         this.pages = Bz(tz, sz), Kz.o.Yg(Pz, this.pages, !0)
-       }
-       openFromServer() {
-         this.openRequested = !0, this.wN()
-       }
-       wN() {
-         this.openRequested && !oz.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, vz.r)() || (0, Uz.isTypingInInput)() || null !== this.placement.getView() || (0, Oz.s)())
-       }
-       Iw(zz) {
-         this.reported.has(zz) || (this.reported.add(zz), this.api.sendCommand(`${Wz} report ${zz}`))
+         return 3 * Math.pow(1 - dv, 2) * dv * Pv + 3 * (1 - dv) * Math.pow(dv, 2) * Sv + Math.pow(dv, 3)
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L195-L197` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L31) · [Before (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L195-L197)

```diff
-         this.blockMetadata = zz, this.blockIdMappings = new Map, this.maxBlockId = void 0;
-         const tz = new Set(Object.keys(zz).map((tz => zz[tz].id)));
-         tz.add(0), this.maxBlockId = Math.max(...tz)
+         this._radians = vv, this._radians < 0 && (this._radians += 2 * Math.PI)
```

#### 6. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L199-L201` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L33-L34) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L199-L201)

```diff
-       static
-       for (zz) {
-         return Mz(zz)
+       degrees() {
+         return 180 * this._radians / Math.PI
```

#### 7. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L203-L206` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L36-L37) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L203-L206)

```diff
-       getBlockIdMapping(zz, tz) {
-         const sz = this.getBlockIdMappingKey(zz, tz);
-         let Fz = this.blockIdMappings.get(sz);
-         return void 0 === Fz && cz.includes(zz) && (Fz = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, zz, tz), this.blockIdMappings.set(sz, Fz)), Fz
+       radians() {
+         return this._radians
```

#### 8. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L208-L209` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L39-L42) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L208-L209)

```diff
-       turnBlockId(zz, tz, sz) {
-         return this.mapBlockId(this.blockMetadata[zz], tz, this.getRotationMapping(tz, sz), sz)
+       static BetweenTwoPoints(vv, zv) {
+         const Pv = zv.subtract(vv),
+           hv = Math.atan2(Pv.y, Pv.x);
+         return new pv(hv)
```

#### 9. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L211-L212` → after: `L44-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L44-L51) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L211-L212)

```diff
-       getBlockIdMappingKey(zz, tz) {
-         return `r${zz}|m${Number(tz)}`
+       static BetweenTwoVectors(vv, zv) {
+         let Pv = vv.lengthSquared() * zv.lengthSquared();
+         if (0 === Pv) return new pv(Math.PI / 2);
+         Pv = Math.sqrt(Pv);
+         let hv = vv.dot(zv) / Pv;
+         hv = (0, Sv.Clamp)(hv, -1, 1);
+         const ev = Math.acos(hv);
+         return new pv(ev)
```

#### 10. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L214-L221` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L53-L54) · [Before (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L214-L221)

```diff
-       createBlockIdMapping(zz, tz, sz, Fz) {
-         const Wz = new Uint16Array(tz + 1),
-           Xz = this.getRotationMapping(sz, Fz);
-         for (const Oz in zz) {
-           const tz = zz[Oz];
-           Wz[tz.id] = this.mapBlockId(tz, sz, Xz, Fz)
-         }
-         return Wz
+       static FromRadians(vv) {
+         return new pv(vv)
```

#### 11. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L223-L231` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L56-L57) · [Before (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L223-L231)

```diff
-       getRotationMapping(zz, tz) {
-         const sz = Math.round(zz / 90),
-           Fz = new Uint8Array(4);
-         for (let Wz = 0; Wz < 4; Wz++) Fz[Wz] = (4 + Wz - sz) % 4;
-         if (tz) {
-           let zz = Fz[0];
-           Fz[0] = Fz[1], Fz[1] = zz, zz = Fz[2], Fz[2] = Fz[3], Fz[3] = zz
-         }
-         return Fz
+       static FromDegrees(vv) {
+         return new pv(vv * Math.PI / 180)
```

#### 12. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L537-L549` → after: `L61-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L61-L71) · [Before (L537-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L537-L549)

```diff
-       constructor() {
-         this.samples = []
-       }
-       add(zz, tz) {
-         for (this.samples.push({
-             x: zz,
-             at: tz
-           }); tz - this.samples[0].at > 100;) this.samples.shift()
-       }
-       get() {
-         const zz = this.samples[0],
-           tz = this.samples[this.samples.length - 1];
-         return tz.at > zz.at ? (tz.x - zz.x) / (tz.at - zz.at) : 0
+       constructor(vv, zv, Pv) {
+         this.startPoint = vv, this.midPoint = zv, this.endPoint = Pv;
+         const hv = Math.pow(zv.x, 2) + Math.pow(zv.y, 2),
+           Sv = (Math.pow(vv.x, 2) + Math.pow(vv.y, 2) - hv) / 2,
+           gv = (hv - Math.pow(Pv.x, 2) - Math.pow(Pv.y, 2)) / 2,
+           dv = (vv.x - zv.x) * (zv.y - Pv.y) - (zv.x - Pv.x) * (vv.y - zv.y);
+         this.centerPoint = new ev.j((Sv * (zv.y - Pv.y) - gv * (vv.y - zv.y)) / dv, ((vv.x - zv.x) * gv - (zv.x - Pv.x) * Sv) / dv), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = pv.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         const Nv = this.startAngle.degrees();
+         let lv = pv.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
+           Tv = pv.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
+         lv - Nv > 180 && (lv -= 360), lv - Nv < -180 && (lv += 360), Tv - lv > 180 && (Tv -= 360), Tv - lv < -180 && (Tv += 360), this.orientation = lv - Nv < 0 ? 0 : 1, this.angle = pv.FromDegrees(0 === this.orientation ? Nv - Tv : Tv - Nv)
```

#### 13. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L772-L894` → after: `L75-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L75-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L75-L146) · [Before (L772-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L772-L894)

```diff
-       constructor() {
-         this.step = ["none"], this.plot = ["none"]
-       }
-       getStep() {
-         return this.step
-       }
-       receiveStep(zz) {
-         this.step = zz, Kz.o.Yg(Ut, zz, !0)
-       }
-       getPlot() {
-         return this.plot
-       }
-       receivePlot(zz) {
-         this.plot = zz, Kz.o.Yg(Kt, zz, !0)
-       }
-     }
- ... (107 more removed lines; see GitHub link above)
+       constructor(vv, zv) {
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ev.j(vv, zv))
+       }
+       addLineTo(vv, zv) {
+         if (this.closed) return this;
+         const Pv = new ev.j(vv, zv),
+           hv = this._points[this._points.length - 1];
+         return this._points.push(Pv), this._length += Pv.subtract(hv).length(), this
+       }
+       addArcTo(vv, zv, Pv, hv) {
+         let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
+         if (this.closed) return this;
+         const gv = this._points[this._points.length - 1],
+           pv = new ev.j(vv, zv),
+           Nv = new ev.j(Pv, hv),
+           lv = new dv(gv, pv, Nv);
+ ... (56 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1051-L1069` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L149) · [Before (L1051-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1051-L1069)

```diff
-         this.meshes = null, this.shown = null
-       }
-       build(zz, tz, sz) {
-         const Fz = [],
-           Wz = [];
-         for (const [Xz, Oz, oz, vz, Uz, Kz] of zz)(0, St.h)(Fz, Wz, [vz + .5, Uz + .5, Kz + .5], [Xz, Oz, oz]);
-         return this.api.createGameMesh({
-           positions: Fz,
-           indices: Wz
-         }, {
-           rgb: Vt,
-           alpha: tz,
-           onTop: !0
-         }, sz)
-       }
-     }
- ... (3 more removed lines; see GitHub link above)
+         return zv
```

#### 15. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1071-L1080` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L151-L152) · [Before (L1071-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1071-L1080)

```diff
-       watch(zz) {
-         const tz = it.d.pw;
-         this.chunks = [];
-         for (let sz = 0; sz < zz.length; sz += 3) {
-           const Fz = Math.floor(zz[sz] / tz),
-             Wz = Math.floor(zz[sz + 1] / tz),
-             Xz = Math.floor(zz[sz + 2] / tz);
-           this.watches(Fz, Wz, Xz) || this.chunks.push(Fz, Wz, Xz)
-         }
-         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
+       close() {
+         return this.closed = !0, this
```

#### 16. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1082-L1089` → after: `L154-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L154-L158) · [Before (L1082-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1082-L1089)

```diff
-       changed() {
-         const zz = performance.now();
-         if (zz - this.lastCheckMs < 100) return !1;
-         this.lastCheckMs = zz;
-         let tz = !1;
-         for (let sz = 0; sz < this.chunks.length; sz += 3) {
-           const zz = this.api.getChunkVersion(this.chunks[sz], this.chunks[sz + 1], this.chunks[sz + 2]);
-           this.versions[sz / 3] !== zz && (this.versions[sz / 3] = zz, tz = !0)
+       length() {
+         let vv = this._length;
+         if (this.closed) {
+           const zv = this._points[this._points.length - 1];
+           vv += this._points[0].subtract(zv).length()
```

#### 17. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1093-L1132` → after: `L162-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L162-L166) · [Before (L1093-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1093-L1132)

```diff
-       watches(zz, tz, sz) {
-         for (let Fz = 0; Fz < this.chunks.length; Fz += 3)
-           if (this.chunks[Fz] === zz && this.chunks[Fz + 1] === tz && this.chunks[Fz + 2] === sz) return !0;
-         return !1
-       }
-     }
-     const ft = .35,
-       Et = {
-         size: .9,
-         alpha: .35,
-         crossed: !1
-       },
-       zs = {
-         size: 1.04,
-         alpha: .45,
-         crossed: !0
- ... (24 more removed lines; see GitHub link above)
+       area() {
+         const vv = this._points.length;
+         let zv = 0;
+         for (let Pv = vv - 1, hv = 0; hv < vv; Pv = hv++) zv += this._points[Pv].x * this._points[hv].y - this._points[hv].x * this._points[Pv].y;
+         return .5 * zv
```

#### 18. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1134-L1144` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L168-L169) · [Before (L1134-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1134-L1144)

```diff
-       show(zz) {
-         const tz = [];
-         for (const sz of zz) {
-           const zz = this.shown.findIndex((zz => {
-             let {
-               group: tz
-             } = zz;
-             return Xs(tz, sz.rgb, sz.look) && Os(tz, sz)
-           })); - 1 === zz ? tz.push(this.build(sz)) : (tz.push(this.shown[zz]), this.shown.splice(zz, 1))
-         }
-         this.dispose(), this.shown = tz
+       getPoints() {
+         return this._points
```

#### 19. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1146-L1148` → after: `L171-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L171-L183) · [Before (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1146-L1148)

```diff
-       dispose() {
-         for (const {
-             meshes: zz
+       getPointAtLengthPosition(vv) {
+         if (vv < 0 || vv > 1) return ev.j.Zero();
+         const zv = vv * this.length();
+         let Pv = 0;
+         for (let hv = 0; hv < this._points.length; hv++) {
+           const vv = (hv + 1) % this._points.length,
+             Sv = this._points[hv],
+             gv = this._points[vv].subtract(Sv),
+             pv = gv.length() + Pv;
+           if (zv >= Pv && zv <= pv) {
+             const vv = gv.normalize(),
+               hv = zv - Pv;
+             return new ev.j(Sv.x + vv.x * hv, Sv.y + vv.y * hv)
```

#### 20. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1150-L1230` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L185) · [Before (L1150-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1150-L1230)

```diff
-           of this.shown)
-           for (const tz of zz) this.api.disposeGameMesh(tz);
-         this.shown = []
-       }
-       build(zz) {
-         const {
-           rgb: tz,
-           look: sz,
-           boxes: Fz
-         } = zz, Wz = [tz[0] + (1 - tz[0]) * ft, tz[1] + (1 - tz[1]) * ft, tz[2] + (1 - tz[2]) * ft], Xz = [this.buildMesh(zz.cells, tz, sz.alpha, ((zz, tz, Wz, Xz) => {
-           Ws(zz, tz, Wz, Fz[Xz], sz.size, !1)
-         })), this.buildMesh(zz.cells, Wz, sz.alpha, ((zz, tz, Wz, Xz) => {
-           Ws(zz, tz, Wz, Fz[Xz], sz.size, !0)
-         }))];
-         return sz.crossed && Xz.push(this.buildMesh(zz.cells, tz, .9, ((zz, tz, Fz) => {
-           (0, St.j)(zz, tz, Fz, sz.size + .01, .12)
- ... (65 more removed lines; see GitHub link above)
+           Pv = pv
```

#### 21. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1233-L1283` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L189-L190) · [Before (L1233-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1233-L1283)

```diff
-       filled(zz, tz) {
-         this.tap = null, this.turnFrom(zz, tz), this.retry(tz)
-       }
-       arrived(zz, tz) {
-         const {
-           tap: sz
-         } = this;
-         if (null === sz || tz - sz.ms > 1500) return null;
-         const Fz = (0, kt.c)(zz);
-         return (0, kt.e)(sz.next, zz) || sz.lines.some((zz => {
-           let [tz, sz] = zz;
-           return function(zz, tz, sz) {
-             const Fz = [sz[0] - tz[0], sz[1] - tz[1], sz[2] - tz[2]],
-               Wz = [zz[0] - tz[0], zz[1] - tz[1], zz[2] - tz[2]],
-               Xz = Fz[0] ** 2 + Fz[1] ** 2 + Fz[2] ** 2,
-               Oz = 0 === Xz ? 0 : Math.min(1, Math.max(0, (Wz[0] * Fz[0] + Wz[1] * Fz[1] + Wz[2] * Fz[2]) / Xz));
- ... (35 more removed lines; see GitHub link above)
+       static StartingAt(vv, zv) {
+         return new Nv(vv, zv)
```

#### 22. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1287-L1314` → after: `L194-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L194-L199) · [Before (L1287-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1287-L1314)

```diff
-       constructor(zz, tz, sz) {
-         this.api = zz, this.localPlayerId = tz, this.juice = sz, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
-       }
-       Sw(zz) {
-         const tz = "active" === zz[0] ? `${zz[1]}|${zz[3]}|${zz[4]}|${zz[5]}|${zz[6]}` : "";
-         if ("active" !== zz[0]) "built" === zz[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
-         else {
-           const [, , , , , , , sz, Fz, Wz, Xz] = zz;
-           tz !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = sz) : sz === this.layerY ? this.burstUnlisted(Fz) : sz > this.layerY && this.finishLayer(sz), this.layerY = sz, this.layerCells.has(sz) || this.layerCells.set(sz, Fz.filter(us)), this.ghostCells = Fz, th … [truncated]
-         }
-         tz !== this.blueprint && (this.blueprint = tz, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((zz => this.api.blockNameToBlockId(zz))), this.chunkWatch.watch([...this.ghostCells.filter(us), . … [truncated]
-       }
-       finishLayer(zz) {
-         this.burstUnlisted([]), zz > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = zz)
-       }
-       wN() {
- ... (12 more removed lines; see GitHub link above)
+       static CreateQuadraticBezier(vv, zv, Pv, hv) {
+         hv = hv > 2 ? hv : 3;
+         const Sv = [],
+           gv = (vv, zv, Pv, hv) => (1 - vv) * (1 - vv) * zv + 2 * vv * (1 - vv) * Pv + vv * vv * hv;
+         for (let pv = 0; pv <= hv; pv++) Sv.push(new ev.l(gv(pv / hv, vv.x, zv.x, Pv.x), gv(pv / hv, vv.y, zv.y, Pv.y), gv(pv / hv, vv.z, zv.z, Pv.z)));
+         return new lv(Sv)
```

#### 23. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1316-L1318` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L201-L202) · [Before (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1316-L1318)

```diff
-       burstUnlisted(zz) {
-         const tz = new Set;
-         for (let Wz = 0; Wz < zz.length; Wz += 4) tz.add(`${zz[Wz]},${zz[Wz+1]},${zz[Wz+2]}`);
+       static CreateCubicBezier(vv, zv, Pv, hv, Sv) {
+         Sv = Sv > 3 ? Sv : 4;
```

#### 24. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1320-L1327` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L204-L206) · [Before (L1320-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1320-L1327)

```diff
-           {
-             ghostCells: Fz
-           } = this;
-         for (let Wz = 0; Wz < Fz.length; Wz += 4) {
-           const zz = `${Fz[Wz]},${Fz[Wz+1]},${Fz[Wz+2]}`;
-           !tz.has(zz) && this.open.delete(zz) && sz.push(this.filledCell(Wz))
-         }
-         this.burst(sz)
+           pv = (vv, zv, Pv, hv, Sv) => (1 - vv) * (1 - vv) * (1 - vv) * zv + 3 * vv * (1 - vv) * (1 - vv) * Pv + 3 * vv * vv * (1 - vv) * hv + vv * vv * vv * Sv;
+         for (let dv = 0; dv <= Sv; dv++) gv.push(new ev.l(pv(dv / Sv, vv.x, zv.x, Pv.x, hv.x), pv(dv / Sv, vv.y, zv.y, Pv.y, hv.y), pv(dv / Sv, vv.z, zv.z, Pv.z, hv.z)));
+         return new lv(gv)
```

#### 25. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1329-L1344` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L208-L212) · [Before (L1329-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1329-L1344)

```diff
-       refresh() {
-         const {
-           ghostCells: zz,
-           palette: tz,
-           occupiedCells: sz
-         } = this, Fz = new ss, Wz = new Set, Xz = [], Oz = [];
-         for (let oz = 0; oz < zz.length; oz += 4) {
-           const [sz, vz, Uz, Kz] = [zz[oz], zz[oz + 1], zz[oz + 2], zz[oz + 3]], uz = this.api.getBlockId(sz, vz, Uz), Nz = `${sz},${vz},${Uz}`, bz = et(this.blockIds[Kz], uz);
-           !bz && Zt(uz) ? Fz.add(sz, vz, Uz, Tt(tz[Kz]), Et, Qt(tz[Kz])) : bz ? this.open.has(Nz) && Xz.push(this.filledCell(oz)) : Fz.add(sz, vz, Uz, ts, zs), !bz && this.api.isBlockInLoadedChunk(sz, vz, Uz) && (Wz.add(Nz), Oz.push(sz, vz, Uz, Zt(uz) ? 0 : 1))
-         }
-         this.open = Wz, this.nextCells = Oz;
-         for (let oz = 0; oz < sz.length; oz += 3) {
-           const [zz, tz, Wz] = [sz[oz], sz[oz + 1], sz[oz + 2]];
-           Zt(this.api.getBlockId(zz, tz, Wz)) || Fz.add(zz, tz, Wz, ts, zs)
-         }
-         this.meshes.show(Fz.toArray()), this.burst(Xz), this.showNext(), this.turn.retry(performance.now())
+       static CreateHermiteSpline(vv, zv, Pv, hv, Sv) {
+         const gv = [],
+           pv = 1 / Sv;
+         for (let dv = 0; dv <= Sv; dv++) gv.push(ev.l.Hermite(vv, zv, Pv, hv, dv * pv));
+         return new lv(gv)
```

#### 26. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1346-L1357` → after: `L214-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L214-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L214-L222) · [Before (L1346-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1346-L1357)

```diff
-       burst(zz) {
-         const tz = performance.now(),
-           sz = [];
-         for (const [Wz, Xz, Oz] of zz) {
-           const zz = [Wz, Xz, Oz];
-           this.lastSeenFilled = zz, this.foreseen.delete(zz.join()) || sz.push(zz)
-         }
-         const Fz = this.isHolding(tz);
-         for (const Wz of sz) {
-           if (this.lastFilled = Wz, Fz && this.pressFilled) {
-             this.turn.filled(Wz, tz);
-             continue
+       static CreateCatmullRomSpline(vv, zv, Pv) {
+         const hv = [],
+           Sv = 1 / zv;
+         let gv = 0;
+         if (Pv) {
+           const Pv = vv.length;
+           for (let pv = 0; pv < Pv; pv++) {
+             gv = 0;
+             for (let dv = 0; dv < zv; dv++) hv.push(ev.l.CatmullRom(vv[pv % Pv], vv[(pv + 1) % Pv], vv[(pv + 2) % Pv], vv[(pv + 3) % Pv], gv)), gv += Sv
```

#### 27. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1359-L1362` → after: `L224-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L224-L231) · [Before (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1359-L1362)

```diff
-           const zz = this.turn.arrived(Wz, tz);
-           if (null !== zz) {
-             this.pressFilled = Fz;
-             for (const [tz, sz] of this.foreseen) sz <= zz && this.foreseen.delete(tz)
+           hv.push(hv[0])
+         } else {
+           const Pv = [];
+           Pv.push(vv[0].clone()), Pv.push(...vv), Pv.push(vv[vv.length - 1].clone());
+           let pv = 0;
+           for (; pv < Pv.length - 3; pv++) {
+             gv = 0;
+             for (let vv = 0; vv < zv; vv++) hv.push(ev.l.CatmullRom(Pv[pv], Pv[pv + 1], Pv[pv + 2], Pv[pv + 3], gv)), gv += Sv
```

#### 28. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1365` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L235) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1365)

```diff
-         this.juice.filled(zz)
+         return new lv(hv)
```

#### 29. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1367-L1637` → after: `L237-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L237-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L237-L271) · [Before (L1367-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1367-L1637)

```diff
-       showNext() {
-         var zz;
-         const tz = this.api.getPositionView(this.localPlayerId);
-         this.playerCells.splice(0, 1 / 0, ...Ks(tz));
-         const sz = this.lastFilled;
-         this.nextCell = this.pickNext(null === sz ? [tz[0], tz[1] + 1, tz[2]] : (0, kt.c)(sz), (() => !1)), this.outline.show(null !== (zz = this.aimed) && void 0 !== zz ? zz : this.nextCell)
-       }
-       pickNext(zz, tz) {
-         const sz = this.api.getPositionView(this.localPlayerId),
-           Fz = [sz[0], sz[1] + it.d.jH * it.d.playerEyeToHeightRatio, sz[2]],
-           Wz = os(this.api, this.localPlayerId),
-           {
-             nextCells: Xz
-           } = this,
-           Oz = zz => [Xz[zz], Xz[zz + 1], Xz[zz + 2]],
-           oz = function(zz, tz, sz, Fz, Wz, Xz) {
- ... (255 more removed lines; see GitHub link above)
+       static ArcThru3Points(vv, zv, Pv) {
+         let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
+           Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const pv = [],
+           dv = zv.subtract(vv),
+           Nv = Pv.subtract(zv),
+           Tv = vv.subtract(Pv),
+           Wv = ev.l.Cross(dv, Nv),
+           wv = Wv.length();
+         if (wv < Math.pow(10, -8)) return new lv(pv);
+         const av = dv.lengthSquared(),
+           sv = Nv.lengthSquared(),
+           Cv = Tv.lengthSquared(),
+           iv = Wv.lengthSquared(),
+           cv = .5 * dv.length() * Nv.length() * Tv.length() / wv,
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1639-L1645` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L273-L274) · [Before (L1639-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1639-L1645)

```diff
-       Sw(zz) {
-         const tz = this.placing;
-         if (null === tz || null === tz.sent || "active" !== zz[0]) return;
-         const {
-           sent: sz
-         } = tz, [, Fz, Wz, Xz, Oz, oz, vz] = zz;
-         Wz && Fz === tz.id && vz === sz.rotation && Xz === sz.corner[0] && Oz === sz.corner[1] && oz === sz.corner[2] && this.close()
+       constructor(vv) {
+         this._length = 0, this._points = vv, this._length = this._computeLength(vv)
```

#### 31. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1647-L1648` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L276-L277) · [Before (L1647-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1647-L1648)

```diff
-       endFromServer() {
-         null !== this.placing && this.close()
+       getPoints() {
+         return this._points
```

#### 32. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1650-L1651` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L279-L280) · [Before (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1650-L1651)

```diff
-       dispose() {
-         this.meshes.dispose()
+       length() {
+         return this._length
```

#### 33. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1653-L1658` → after: `L282-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L282-L287) · [Before (L1653-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1653-L1658)

```diff
-       cornerOnTarget(zz) {
-         let [tz, , sz] = zz;
-         const Fz = this.api.getTargetedBlock();
-         if (null === Fz) return null;
-         const [Wz, , Xz] = Fz.position;
-         return [Wz - Math.floor(tz / 2), Xz - Math.floor(sz / 2)]
+       continue (vv) {
+         const zv = this._points[this._points.length - 1],
+           Pv = this._points.slice(),
+           hv = vv.getPoints();
+         for (let Sv = 1; Sv < hv.length; Sv++) Pv.push(hv[Sv].subtract(hv[0]).add(zv));
+         return new lv(Pv)
```

#### 34. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1660-L1666` → after: `L289-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L289-L291) · [Before (L1660-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1660-L1666)

```diff
-       playerLevel() {
-         var zz;
-         const [tz, sz, Fz] = this.api.yB(this.localPlayerId);
-         if (null !== (zz = this.api.getLocalPlayerMovement()) && void 0 !== zz && zz.onGround) return Math.ceil(sz - .01);
-         const [Wz, Xz, Oz] = [Math.floor(tz), Math.floor(sz), Math.floor(Fz)];
-         for (let oz = Xz; oz >= Xz - 2; oz--)
-           if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Wz, oz, Oz))) return oz + 1;
+       _computeLength(vv) {
+         let zv = 0;
+         for (let Pv = 1; Pv < vv.length; Pv++) zv += vv[Pv].subtract(vv[Pv - 1]).length();
```

#### 35. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1741-L1798` → after: `L295-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L295-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L295-L303) · [Before (L1741-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1741-L1798)

```diff
- 
-     function Ps(zz) {
-       let {
-         sent: tz
-       } = zz;
-       return null !== tz && !tz.timedOut
-     }
-     var rs = sz(3926),
-       Ys = sz(38555);
- 
-     function xs(zz, tz, sz) {
-       const Fz = [255 * zz, 255 * tz, 255 * sz],
-         [Wz, Xz, Oz] = Fz.map((zz => zz + .4 * (255 - zz)));
-       return {
-         texture: "square_particle",
-         au: 48,
- ... (42 more removed lines; see GitHub link above)
+   },
+   38207: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => ev
+     });
+     var hv = Pv(38209);
+     const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
+       ...vv
+     } : null : vv.clone(zv) : null;
```

#### 36. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L1800-L1812` → after: `L305-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L305-L333) · [Before (L1800-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L1800-L1812)

```diff
-       constructor(zz, tz) {
-         this.api = zz, this.localPlayerId = tz, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
-       }
-       filled(zz) {
-         if (this.api.particlesEnabled())
-           for (const [tz, sz, Fz, Wz, Xz, Oz] of zz.slice(0, 3)) {
-             const zz = `${Wz},${Xz},${Oz}`;
-             let oz = this.chips.get(zz);
-             void 0 === oz && (oz = this.api.createParticles(xs(Wz, Xz, Oz), {
-               pos: [tz + .5, sz + .5, Fz + .5]
-             }), this.chips.set(zz, oz));
-             for (let tz = 0; tz < 8; tz++) this.setPoint(tz, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
-             oz.emitPoints([tz + .5, sz + .5, Fz + .5], this.points, 8)
+       static DeepCopy(vv, zv, Pv, ev) {
+         let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const pv = function(vv) {
+           const zv = [];
+           do {
+             const Pv = Object.getOwnPropertyNames(vv);
+             for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
+           } while (vv = Object.getPrototypeOf(vv));
+           return zv
+         }(vv);
+         for (const Nv of pv) {
+           if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
+           if (Nv.endsWith("Observable")) continue;
+           if (Pv && -1 !== Pv.indexOf(Nv)) continue;
+           const pv = vv[Nv],
+             lv = typeof pv;
+ ... (13 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L2337` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L339) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L2337)

```diff
-   38555: (zz, tz, sz) => {
+   38209: (vv, zv, Pv) => {
```

#### 38. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L2347-L2379` → after: `L344-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L344-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/238.js#L344-L392) · [Before (L2347-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/238.js#L2347-L2379)

```diff
-       constructor(zz, tz, sz) {
-         this.style = zz, this.au = tz, this.half = sz, this.particles = null, this.lastFrame = -1
-       }
-       emit(zz, tz, sz) {
-         let Xz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
-         return sz !== this.lastFrame && (this.lastFrame = sz, this.particles || (this.particles = zz.createParticles(function(zz, tz) {
-           const [
-             [sz, Xz, Oz],
-             [oz, vz, Uz]
-           ] = zz.colours;
-           return {
-             texture: zz.soft ? Wz : "square_particle",
-             au: tz,
-             minLifeTime: zz.life[0] / Fz,
-             maxLifeTime: zz.life[1] / Fz,
-             minEmitPower: zz.power[0] * Fz,
- ... (17 more removed lines; see GitHub link above)
+       static _CheckLimit(vv, zv) {
+         let Pv = hv._LogLimitOutputs[vv];
+         return Pv ? Pv.current++ : (Pv = {
+           limit: zv,
+           current: 1
+         }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
+       }
+       static _GenerateLimitMessage(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const Pv = hv._LogLimitOutputs[vv];
+         if (!Pv || !hv.MessageLimitReached) return;
+         const Sv = this._Levels[zv];
+         Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
+       }
+       static _AddLogEntry(vv) {
+         hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
+ ... (33 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L22` → after: `L4-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/239.js#L4-L491) · [Before (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/239.js#L4-L22)

```diff
-   38990: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       playDocsSound: () => oz
-     });
-     var Fz = sz(4488),
-       Wz = sz(36199),
-       Xz = sz(1191);
-     const Oz = new Map;
- 
-     function oz(zz, tz, sz, oz, vz) {
-       let Uz, Kz = null,
-         uz = 0,
-         Nz = 0;
-       if (tz) Uz = new Fz.Howl({
-         src: [`${Xz.clientSideServerUrls.staticUrl}/sounds/music/${zz}.mp3`],
-         html5: !0,
- ... (3 more removed lines; see GitHub link above)
+   40040: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => ev,
+       h: () => gv
+     });
+     var hv = Pv(1889);
+     let Sv = !1;
+ 
+     function ev() {
+       Sv = !0
+     }
+ 
+     function gv() {
+       Sv && (Sv = !1, (0, hv.e)())
+     }
+   },
+ ... (472 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L24-L74` → after: `L493-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L493-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/239.js#L493-L500) · [Before (L24-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/239.js#L24-L74)

```diff
-         Kz = (0, Wz.h)(zz);
-         const tz = (0, Wz.e)(Kz),
-           sz = null !== (bz = tz.sprite[zz]) && void 0 !== bz ? bz : null;
-         if (!sz) throw new Error(`Docs sound ${zz} is not in sprite sheet ${Kz}`);
-         uz = sz[0] / 1e3, Nz = sz[1] / 1e3, Uz = Oz.get(Kz), Uz || (Uz = new Fz.Howl({
-           ...tz,
-           volume: 1
-         }), Oz.set(Kz, Uz))
-       }
-       const wz = tz ? Uz.play() : Uz.play(zz);
-       Uz.volume(sz, wz), oz > 0 && Uz.seek(uz + oz, wz);
-       const Dz = () => tz ? Uz.duration() : Nz;
-       let gz = !1;
-       const Hz = zz => {
-           gz || (gz = !0, Uz.off("play", Bz, wz), Uz.off("end", Pz, wz), Uz.off("loaderror", Yz), Uz.off("playerror", rz, wz), tz && Uz.unload(), vz.onEnd(zz))
-         },
- ... (35 more removed lines; see GitHub link above)
+         return null === (zv = this.members.get(vv)) || void 0 === zv ? void 0 : zv.settings
+       }
+       getSetting(vv, zv) {
+         var Pv;
+         return null === (Pv = this.members.get(vv)) || void 0 === Pv ? void 0 : Pv.settings[zv]
+       }
+       clear() {
+         this.members.clear()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L4)

```diff
-   39002: (zz, tz, sz) => {
+   38919: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L8-L33` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L8-L21) · [Before (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L8-L33)

```diff
-     sz(6042);
-     var Fz = sz(65),
-       Wz = sz(39010),
-       Xz = sz(39252),
-       Oz = sz(39353),
-       oz = sz(39408),
-       vz = sz(39427),
-       Uz = sz(36652),
-       Kz = sz(36473),
-       uz = sz(39552),
-       Nz = sz(39597),
-       bz = (sz(39623), sz(1213)),
-       wz = sz(201),
-       Dz = sz(1173),
-       gz = sz(30),
-       Hz = sz(2537),
- ... (10 more removed lines; see GitHub link above)
+     const hv = [0, 90, 180, 270],
+       Sv = "plotsblueprint";
+     var ev = Pv(52),
+       gv = Pv(36137),
+       pv = Pv(22),
+       dv = Pv(1610),
+       Nv = Pv(1692),
+       lv = Pv(26);
+     const Tv = [
+         ["farm_hut", "farm_house", "farm_barn"],
+         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
+         ["market_stand", "market_stall", "market_shop"],
+         ["castle_wall", "castle_gate", "castle_tower"]
+       ],
```

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L35-L36` → after: `L23-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L23-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L23-L94) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L35-L36)

```diff
-         ArrowLeft: -1,
-         ArrowRight: 1
+         farm_hut: {
+           displayName: {
+             translationKey: "plotsGame:blueprintFarmHut"
+           },
+           tier: "small"
+         },
+         farm_house: {
+           displayName: {
+             translationKey: "plotsGame:blueprintFarmHouse"
+           },
+           tier: "medium"
+         },
+         farm_barn: {
+           displayName: {
+             translationKey: "plotsGame:blueprintFarmBarn"
+           },
+ ... (56 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L38-L66` → after: `L96-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L96-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L96-L1475) · [Before (L38-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L38-L66)

```diff
-       Gz = "ArrowUp",
-       Tz = new Set([...Object.keys(Zz), Gz, "ArrowDown"]),
-       cz = 32,
-       jz = 1,
-       Az = 10,
-       yz = "F4",
-       Mz = "Period",
-       dz = Math.PI / 2 - .001,
-       hz = Math.PI / 6,
-       Qz = Math.PI / 6,
-       kz = 1.08,
-       iz = [{
-         name: "X",
-         direction: [1, 0, 0],
-         colour: "#e5534b"
-       }, {
- ... (13 more removed lines; see GitHub link above)
+       wv = ["small", "medium", "large"].flatMap((vv => Tv.flat().filter((zv => Wv[zv].tier === vv))));
+ 
+     function av(vv) {
+       return Wv[vv]
+     }
+     const sv = new Map(Tv.flatMap((vv => vv.slice(1).map(((zv, Pv) => [zv, vv[Pv]])))));
+ 
+     function Cv(vv) {
+       var zv;
+       return null !== (zv = sv.get(vv)) && void 0 !== zv ? zv : null
+     }
+     const iv = {
+       farm_hut: "plotsGame:journalNoteFarmHut",
+       rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
+       castle_tower: "plotsGame:journalNoteCastleTower",
+       farm_house: "plotsGame:journalNoteFarmHouse",
+ ... (1364 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L69-L81` → after: `L1478-L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1478-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1478-L1492) · [Before (L69-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L69-L81)

```diff
-       let {
-         heatmap: tz,
-         scale: sz,
-         fullyOpaqueFrom: jz,
-         bounds: hz,
-         fitBounds: Qz,
-         schematic: kz,
-         controls: iz,
-         onStepTime: Lz,
-         onShowAllTime: lz,
-         onTogglePlaying: nz,
-         getReadout: qz = null
-       } = zz;
+       const zv = new Map;
+       for (const gv of vv) {
+         var Pv;
+         if (Number.isNaN(gv)) return null;
+         zv.set(gv, (null !== (Pv = zv.get(gv)) && void 0 !== Pv ? Pv : 0) + 1)
+       }
+       let hv = NaN,
+         Sv = 0;
+       for (const [gv, pv] of zv)(pv > Sv || pv === Sv && gv < hv) && (hv = gv, Sv = pv);
+       let ev = 0;
+       for (const gv of vv) ev += Math.abs(gv - hv);
+       return ev
+     }
+ 
+     function aP(vv, zv, Pv, hv) {
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L83-L130` → after: `L1494-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1494-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1494-L1513) · [Before (L83-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L83-L130)

```diff
-         t: Sz
-       } = (0, Dz.B)(), {
-         clientEscMenuOptions: Xt
-       } = (0, gz.h)(["clientEscMenuOptions"]), vt = (0, Fz.useRef)(null), Ut = (0, Fz.useRef)(null), Kt = (0, Fz.useRef)(null), ut = (0, Hz.d)(vt), [Nt, bt] = (0, Fz.useState)(!1), [wt, Dt] = (0, Fz.useState)(!1), [gt, Ht] = (0, Fz.useState)(!0), Bt = (0, Fz.useRef)(!1), [Pt, rt] … [truncated]
-       Gt[0] === Zt[0] && Gt[1] === Zt[1] && Gt[2] === Zt[2] || (Tt(Zt), null !== Ct && et({
-         ...Ct,
-         position: Ot(Ct.position, Ot(Gt, ot(Zt, -1)))
-       }));
-       const ct = (0, Fz.useMemo)((() => function(zz) {
-           return [zz.max[0] - zz.min[0] + 1, zz.max[1] - zz.min[1] + 1, zz.max[2] - zz.min[2] + 1]
-         }(hz)), [hz]),
-         jt = (0, Fz.useMemo)((() => function(zz, tz) {
-           const sz = [],
-             Fz = [];
-           for (const [Wz, Xz] of Object.entries(zz.frequencies)) {
-             const zz = Number(Wz);
- ... (32 more removed lines; see GitHub link above)
+         eye: Sv,
+         forward: ev,
+         tanHalfFovX: gv,
+         tanHalfFovY: pv
+       } = vv, [dv, Nv] = function(vv) {
+         let [zv, Pv, hv] = vv;
+         const Sv = Math.hypot(zv, hv),
+           [ev, gv] = [hv / Sv, -zv / Sv];
+         return [
+           [ev, 0, gv],
+           [Pv * gv, hv * ev - zv * gv, -Pv * ev]
+         ]
+       }(ev), [lv, Tv] = [zv * gv, Pv * pv], Wv = ev[0] + lv * dv[0] + Tv * Nv[0], wv = ev[1] + Tv * Nv[1], av = ev[2] + lv * dv[2] + Tv * Nv[2], sv = (hv - Sv[1]) / wv;
+       return sv > 0 && sv < 1 / 0 ? [Sv[0] + sv * Wv, Sv[2] + sv * av] : null
+     }
+     const sP = "plotsBlueprintPlacementChanged",
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L132-L139` → after: `L1515-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1515-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1515-L1537) · [Before (L132-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L132-L139)

```diff
-       const kt = (0, Fz.useMemo)((() => {
-           if (!Yt) return null;
-           const zz = (zz, sz, Fz) => {
-               var Wz, Xz, Oz;
-               return null !== (Wz = null === (Xz = tz.frequencies[zz + Zt[0]]) || void 0 === Xz || null === (Oz = Xz[sz + Zt[1]]) || void 0 === Oz ? void 0 : Oz[Fz + Zt[2]]) && void 0 !== Wz ? Wz : 0
-             },
-             Fz = function(zz, tz, sz, Fz) {
-               let Wz = 0,
+     class iP {
+       constructor(vv, zv) {
+         this.api = vv, this.localPlayerId = zv, this.placing = null, this.view = null, this.camera = {
+           eye: [0, 0, 0],
+           forward: [0, 0, 1],
+           tanHalfFovX: 1,
+           tanHalfFovY: 1
+         }, this.chunkWatch = void 0, this.meshes = void 0, this.start = vv => {
+           var zv, Pv, hv, ev;
+           const gv = null !== (zv = null === (Pv = this.placing) || void 0 === Pv ? void 0 : Pv.rotation) && void 0 !== zv ? zv : 0,
+             {
+               size: pv
+             } = Mv(vv, gv),
+             dv = this.api.yG(this.localPlayerId),
+             [Nv, lv] = null !== (hv = null !== (ev = function(vv, zv, Pv) {
+               const [hv, Sv, ev] = zv, [gv, pv, dv] = [Math.floor(Pv[0]), Math.floor(Pv[1]), Math.floor(Pv[2])], Nv = 6 + Math.max(hv, ev) / 2, [lv, Tv] = [Math.ceil(Nv + hv / 2), Math.ceil(Nv + ev / 2)], [Wv, wv] = [gv - lv, dv - Tv], [av, sv] = [2 * lv + 1, 2 * Tv + 1], Cv = ne … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L141-L144` → after: `L1539-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1539-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1539-L1550) · [Before (L141-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L141-L144)

```diff
-               for (const uz of [0, 1, 2]) {
-                 if (0 === tz[uz]) {
-                   if (zz[uz] < 0 || zz[uz] > sz[uz]) return null;
-                   continue
+               for (let jv = 0; jv + hv <= av; jv++)
+                 for (let vv = 0; vv + ev <= sv; vv++) {
+                   const [zv, Sv] = [Wv + jv, wv + vv], pv = Math.hypot(zv + hv / 2 - Pv[0], Sv + ev / 2 - Pv[2]);
+                   if (pv > Nv || gv >= zv - 2 && gv < zv + hv + 2 && dv >= Sv - 2 && dv < Sv + ev + 2) continue;
+                   cv.length = 0;
+                   let lv = 0;
+                   for (let Pv = 0; Pv < hv; Pv++)
+                     for (let zv = 0; zv < ev; zv++) cv.push(Cv[(jv + Pv) * sv + vv + zv]), lv += iv[(jv + Pv) * sv + vv + zv];
+                   const Tv = wP(cv);
+                   if (null === Tv) continue;
+                   const av = pv + 3 * (Tv + lv);
+                   av < mv && (mv = av, Gv = [zv, Sv])
```

#### 9. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L146-L172` → after: `L1552-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1552-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1552-L1594) · [Before (L146-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L146-L172)

```diff
-                 const Fz = (0 - zz[uz]) / tz[uz],
-                   Oz = (sz[uz] - zz[uz]) / tz[uz];
-                 Wz = Math.max(Wz, Math.min(Fz, Oz)), Xz = Math.min(Xz, Math.max(Fz, Oz))
-               }
-               if (Wz > Xz) return null;
-               const Oz = [0, 1, 2].map((Fz => Math.min(sz[Fz] - 1, Math.max(0, Math.floor(zz[Fz] + tz[Fz] * Wz))))),
-                 oz = [0, 1, 2].map((zz => Math.sign(tz[zz]))),
-                 vz = [0, 1, 2].map((sz => {
-                   if (0 === oz[sz]) return 1 / 0;
-                   return ((oz[sz] > 0 ? Oz[sz] + 1 : Oz[sz]) - zz[sz]) / tz[sz]
-                 })),
-                 Uz = [0, 1, 2].map((zz => 0 === oz[zz] ? 1 / 0 : Math.abs(1 / tz[zz])));
-               let Kz = null;
-               for (;;) {
-                 const zz = Fz(Oz[0], Oz[1], Oz[2]);
-                 if (zz >= 1) return Oz;
- ... (11 more removed lines; see GitHub link above)
+               return Gv
+             }(this.api, pv, dv)) && void 0 !== ev ? ev : this.cornerOnTarget(pv)) && void 0 !== hv ? hv : [Math.floor(dv[0]) + 2, Math.floor(dv[2])];
+           this.placing = {
+             id: vv,
+             rotation: gv,
+             corner: [Nv, this.playerLevel(), lv],
+             sent: null,
+             refusals: 0,
+             hover: null,
+             drag: null
+           }, this.update(), this.api.sendCommand(`${Sv} preview`)
+         }, this.rotate = () => {
+           const {
+             id: vv,
+             rotation: zv,
+             corner: Pv
+ ... (27 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L174-L280` → after: `L1596-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1596-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1596-L1679) · [Before (L174-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L174-L280)

```diff
-         }), [Yt, tz, Zt, ht, ct, sz, jz]),
-         {
-           keyHandlers: it
-         } = (0, Yz.f)({
-           isEnabled: Yt,
-           claimedKeyCodes: Tz,
-           yN: zz => {
-             et((tz => function(zz, tz) {
-               const sz = [Math.sin(zz.heading), 0, Math.cos(zz.heading)],
-                 Fz = Ot(Ot(ot(sz, tz.forward), ot(tt(zz.heading), tz.right)), [0, tz.up, 0]);
-               return {
-                 ...zz,
-                 position: Ot(zz.position, Fz)
-               }
-             }(null !== tz && void 0 !== tz ? tz : Qt.current.fittedView, zz)))
-           },
- ... (91 more removed lines; see GitHub link above)
+         }, this.dragTo = (vv, zv) => {
+           const Pv = this.placing.drag,
+             hv = Pv && aP(Pv.view, vv, zv, Pv.level);
+           null !== Pv && null !== hv && this.moveTo(Pv.corner[0] + Math.round(hv[0] - Pv.ground[0]), Pv.corner[1] + Math.round(hv[1] - Pv.ground[1]))
+         }, this.endDrag = () => {
+           this.placing.drag = null
+         }, this.tap = () => {
+           const vv = this.view;
+           vv.waiting || (vv.blocked ? this.zC({
+             ...vv,
+             refusals: ++this.placing.refusals
+           }) : this.build())
+         }, this.build = () => {
+           const vv = this.placing,
+             {
+               id: zv,
+ ... (68 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L282-L387` → after: `L1681-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1681-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1681-L1716) · [Before (L282-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L282-L387)

```diff
-       }), []), (0, Fz.useEffect)((() => {
-         const zz = Kt.current;
-         null !== zz && 0 !== ut.width && 0 !== ut.height && (zz.engine.resize(), zz.needsRender = !0)
-       }), [ut.width, ut.height]), (0, Fz.useEffect)((() => {
-         const zz = Kt.current;
-         null !== zz && (zz.targetFieldOfView = At * (xt ? Iz : 1))
-       }), [At, xt]), (0, Fz.useEffect)((() => {
-         const zz = Kt.current;
-         null !== zz && function(zz, tz, sz, Fz) {
-           const Wz = [],
-             Xz = [],
-             Oz = [],
-             oz = [];
-           for (let vz = 0; vz < tz.count; vz++) {
-             const zz = tz.values[vz],
-               Uz = (0, rz.D)(zz, sz, Fz);
- ... (90 more removed lines; see GitHub link above)
+       }
+       moveTo(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+         const hv = this.placing;
+         if (cP(hv)) return;
+         const [Sv, ev, gv] = hv.corner;
+         if (this.centreOnPlot(Sv, gv) && !this.centreOnPlot(vv, zv, Pv))
+           if (this.centreOnPlot(vv, gv, Pv)) zv = gv;
+           else {
+             if (!this.centreOnPlot(Sv, zv, Pv)) return;
+             vv = Sv
+           } vv === Sv && zv === gv && Pv === hv.rotation || (hv.rotation = Pv, hv.corner = [vv, ev, zv], this.update())
+       }
+       centreOnPlot(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+         const {
+ ... (20 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L389-L425` → after: `L1718-L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1718-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1718-L1812) · [Before (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L389-L425)

```diff
-         }), Nt && (0, mz.jsx)("div", {
-           className: "StudioHeatmap3DUnavailable SmallTextLight",
-           children: Sz("3D view isn't available in this browser.")
-         }), Yt && (0, mz.jsx)("div", {
-           className: "StudioHeatmap3DCrosshair"
-         }), (0, mz.jsx)("div", {
-           className: "StudioHeatmap3DCoordinates SmallTextLight",
-           children: ht.position.map(((zz, tz) => (zz + Zt[tz]).toFixed(2))).join(" ")
-         }), Jt && (0, mz.jsx)(Vz, {
-           heading: ht.heading,
-           pitch: ht.pitch,
-           onViewFrom: zz => {
-             const tz = ot(zz, -1),
-               sz = 0 === tz[1] ? {
-                 heading: Math.atan2(tz[0], tz[2]),
-                 pitch: 0
- ... (21 more removed lines; see GitHub link above)
+           of Mv(vv, zv).cells) {
+           const [vv, zv, hv] = [Pv[0] + lv[0], Pv[1] + lv[1], Pv[2] + lv[2]];
+           ev.push(vv, zv, hv);
+           const dv = !this.api.canModifyBlockAt(vv, zv, hv),
+             Nv = this.api.getBlockId(vv, zv, hv),
+             Wv = !Kz(Nv) && !Dz(this.api.blockNameToBlockId(Tv), Nv);
+           gv ||= dv, pv += Wv ? 1 : 0, dv || Wv ? Sv.add(vv, zv, hv, vP, uz) : Sv.add(vv, zv, hv, Uz(Tv), CP, Az(Tv))
+         }
+         this.chunkWatch.watch(ev), this.meshes.show(Sv.toArray());
+         const dv = this.view,
+           Nv = cP(this.placing);
+         (null === dv || void 0 === dv ? void 0 : dv.id) === vv && dv.blocked === gv && dv.toClear === pv && dv.waiting === Nv && dv.refusals === hv || this.zC({
+           id: vv,
+           blocked: gv,
+           toClear: pv,
+           waiting: Nv,
+ ... (79 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L427-L444` → after: `L1814-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1814-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1814-L1897) · [Before (L427-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L427-L444)

```diff
-         }), null !== kt && (0, mz.jsx)("div", {
-           className: "StudioHeatmapMapReadout SmallTextLight",
-           children: null === qz ? Sz("studio:heatmapBlockReadout", {
-             x: kt.x,
-             y: kt.y,
-             z: kt.z,
-             count: (0, bz.R)(kt.value)
-           }) : qz(kt.x, kt.y, kt.z, kt.value)
-         }), (0, mz.jsxs)("div", {
-           className: "StudioHeatmapMapControls",
-           children: [iz, (0, mz.jsx)(Bz.Q, {
-             active: null === Ct,
-             onClick: () => {
-               et(null)
-             },
-             children: (0, mz.jsx)(Pz.c, {
- ... (2 more removed lines; see GitHub link above)
+       }
+       layerDone(vv) {
+         this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
+         const zv = vv.length / 3;
+         if (0 === zv || !this.api.particlesEnabled()) return;
+         const Pv = Math.min(zv, 48),
+           [hv, Sv, ev] = [vv[0] + .5, vv[1] + 1, vv[2] + .5];
+         let gv = 0;
+         for (let pv = 0; pv < Pv; pv++) {
+           const dv = 3 * Math.floor(pv * zv / Pv);
+           for (let zv = 0; zv < 2; zv++) this.setPoint(gv++, vv[dv] + Math.random() - hv, vv[dv + 1] + 1 - Sv, vv[dv + 2] + Math.random() - ev, .6 + .8 * Math.random())
+         }
+         this.sparkles ??= this.api.createParticles(fP, {
+           pos: [hv, Sv, ev]
+         }), this.sparkles.emitPoints([hv, Sv, ev], this.points, gv)
+       }
+ ... (68 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L446` → after: `L1899-L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1899-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1899-L1906) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L446)

```diff
-         })]
+         })
+       })
+     }
+ 
+     function VP(vv) {
+       return (0, Bv.jsx)(dz.e, {
+         className: "PlotsPlacementKey",
+         ...vv
```

#### 15. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L452-L456` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1960) · [Before (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L452-L456)

```diff
-         heading: tz,
-         pitch: sz,
-         onViewFrom: Wz,
-         onTurn: Xz,
-         onFlip: Oz
+         placement: zv
```

#### 16. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L458-L478` → after: `L1962-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1962-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1962-L1974) · [Before (L458-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L458-L478)

```diff
-       const {
-         t: oz
-       } = (0, Dz.B)(), vz = (0, Fz.useRef)(null), Uz = zt({
-         heading: tz,
-         pitch: sz
-       }), Kz = tt(tz), uz = Ut(Uz, Kz), Nz = Lz + lz + 2, bz = iz.flatMap((zz => [1, -1].map((tz => {
-         const sz = ot(zz.direction, tz);
-         return {
-           ...zz,
-           sign: tz,
-           direction: sz,
-           endX: Nz + vt(sz, Kz) * Lz,
-           endY: Nz - vt(sz, uz) * Lz,
-           depth: vt(sz, Uz)
-         }
-       })))).sort(((zz, tz) => tz.depth - zz.depth));
- ... (5 more removed lines; see GitHub link above)
+       return null === (0, Dv.j)(sP, zv.getView()) ? null : (0, Bv.jsx)(qP, {
+         placement: zv
+       })
+     }
+ 
+     function qP(vv) {
+       let {
+         placement: zv
+       } = vv;
+       (0, RP.e)(!0, !0, "PlotsPlacementLayer");
+       const Pv = (0, ev.useMemo)((() => new xP(zv)), [zv]);
+       return (0, Bv.jsx)("div", {
+         className: "PlotsPlacementLayer",
```

#### 17. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L480-L491` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1976) · [Before (L480-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L480-L491)

```diff
-           var tz, sz;
-           zz.currentTarget.setPointerCapture(zz.pointerId);
-           const Fz = zz.target,
-             Wz = Fz.getAttribute("data-end");
-           vz.current = {
-             pointerId: zz.pointerId,
-             x: zz.clientX,
-             y: zz.clientY,
-             travel: 0,
-             side: null === Wz ? null : null !== (tz = null === (sz = bz[Number(Wz)]) || void 0 === sz ? void 0 : sz.direction) && void 0 !== tz ? tz : null,
-             isOnMiddle: Fz.hasAttribute("data-middle")
-           }
+           "mouse" === vv.pointerType && 0 !== vv.button || !Pv.down(IP(vv)) || vv.currentTarget.setPointerCapture(vv.pointerId)
```

#### 18. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L494-L498` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1979) · [Before (L494-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L494-L498)

```diff
-           const tz = vz.current;
-           if (null === tz || tz.pointerId !== zz.pointerId) return;
-           const sz = zz.clientX - tz.x,
-             Fz = zz.clientY - tz.y;
-           tz.x = zz.clientX, tz.y = zz.clientY, tz.travel += Math.abs(sz) + Math.abs(Fz), tz.travel >= qz && Xz(sz, Fz)
+           Pv.move(IP(vv))
```

#### 19. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L501-L555` → after: `L1982-L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1982-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1982-L1993) · [Before (L501-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L501-L555)

```diff
-           const tz = vz.current;
-           vz.current = null, null === tz || tz.pointerId !== zz.pointerId || tz.travel >= qz || (null !== tz.side ? Wz(tz.side) : tz.isOnMiddle && Oz())
-         },
-         onPointerCancel: () => {
-           vz.current = null
-         },
-         children: [bz.map(((zz, tz) => {
-           const sz = zz.sign > 0;
-           return (0, mz.jsxs)("g", {
-             children: [(0, mz.jsx)("line", {
-               x1: Nz,
-               y1: Nz,
-               x2: zz.endX,
-               y2: zz.endY,
-               stroke: zz.colour,
-               strokeOpacity: sz ? 1 : .5,
- ... (39 more removed lines; see GitHub link above)
+           Pv.up(IP(vv))
+         },
+         onPointerCancel: vv => {
+           Pv.cancel(vv.pointerId)
+         },
+         onLostPointerCapture: vv => {
+           Pv.cancel(vv.pointerId)
+         },
+         onPointerLeave: vv => {
+           Pv.leave(IP(vv))
+         },
+         "aria-hidden": !0
```

#### 20. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L562-L582` → after: `L1999-L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L1999-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L1999-L2012) · [Before (L562-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L562-L582)

```diff
-         chunkGridOrigin: Wz,
-         camera: Xz
-       } = zz;
-       if (null === Wz) return;
-       const Oz = [Xz.position.x, Xz.position.y, Xz.position.z],
-         oz = [0, 2].map((zz => Math.floor((Oz[zz] + Wz[zz]) / wz.d.pw))),
-         vz = zz.chunkGridCentre;
-       if (null !== vz && vz.every(((zz, tz) => zz === oz[tz]))) return;
-       const uz = null === (tz = null === (sz = zz.chunkGrid) || void 0 === sz ? void 0 : sz.isVisible) || void 0 === tz || tz;
-       null === (Fz = zz.chunkGrid) || void 0 === Fz || Fz.dispose();
-       const [bz, Dz] = [0, 2].map(((zz, tz) => {
-         const sz = [];
-         for (let Fz = oz[tz] - Az; Fz <= oz[tz] + Az + 1; Fz++) sz.push(Fz * wz.d.pw - Wz[zz]);
-         return sz
-       })), gz = -Wz[1], Hz = [];
-       for (const Uz of Dz) Hz.push([new Kz.XD(bz[0], gz, Uz), new Kz.XD(bz[bz.length - 1], gz, Uz)]);
- ... (5 more removed lines; see GitHub link above)
+         left: zv,
+         top: Pv,
+         width: hv,
+         height: Sv
+       } = vv.currentTarget.getBoundingClientRect();
+       return {
+         id: vv.pointerId,
+         mouse: "mouse" === vv.pointerType,
+         x: vv.clientX,
+         y: vv.clientY,
+         ndcX: (vv.clientX - zv) / hv * 2 - 1,
+         ndcY: 1 - (vv.clientY - Pv) / Sv * 2,
+         atMs: vv.timeStamp
+       }
```

#### 21. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L585-L593` → after: `L2024-L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2024-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2024-L2045) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L585-L593)

```diff
-     function pz(zz, tz, sz, Fz) {
-       zz.b_("matrix", function(zz, tz) {
-         const sz = new Float32Array(16 * tz);
-         for (let Fz = 0; Fz < tz; Fz++) {
-           const tz = 16 * Fz;
-           sz[tz] = 1, sz[tz + 5] = 1, sz[tz + 10] = 1, sz[tz + 12] = zz[3 * Fz], sz[tz + 13] = zz[3 * Fz + 1], sz[tz + 14] = zz[3 * Fz + 2], sz[tz + 15] = 1
-         }
-         return sz
-       }(tz, Fz), 16, !0), zz.b_("color", sz, 4, !0), zz.isVisible = Fz > 0
+     function MP(vv) {
+       let {
+         hud: zv
+       } = vv;
+       const Pv = (0, Dv.j)(lz, zv.getPlot()),
+         [hv, Sv] = (0, ev.useState)(null),
+         gv = (0, ZP.q)(hv);
+       if ("none" === Pv[0]) return null;
+       const [, pv, dv, Nv, lv, Tv] = Pv;
+       return (0, Bv.jsx)("div", {
+         className: fv()("PlotsPlotBannerContainer", {
+           Below: gv
+         }),
+         children: (0, Bv.jsx)(yP, {
+           plotX: pv,
+           plotZ: dv,
+ ... (6 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L598-L624` → after: `L2059-L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2059-L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2059-L2095) · [Before (L598-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L598-L624)

```diff
-         camera: tz,
-         translucent: sz
-       } = zz, Fz = [tz.position.x, tz.position.y, tz.position.z], Wz = zz.translucentSortedFrom;
-       if (null !== Wz && Math.hypot(Fz[0] - Wz[0], Fz[1] - Wz[1], Fz[2] - Wz[2]) < jz) return;
-       zz.translucentSortedFrom = Fz;
-       const Xz = new Float64Array(sz.count),
-         Oz = new Uint32Array(sz.count);
-       for (let Uz = 0; Uz < sz.count; Uz++) {
-         const zz = sz.mo[3 * Uz] - Fz[0],
-           tz = sz.mo[3 * Uz + 1] - Fz[1],
-           Wz = sz.mo[3 * Uz + 2] - Fz[2];
-         Xz[Uz] = zz * zz + tz * tz + Wz * Wz, Oz[Uz] = Uz
-       }
-       Oz.sort(((zz, tz) => Xz[tz] - Xz[zz]));
-       const oz = new Float32Array(3 * sz.count),
-         vz = new Float32Array(4 * sz.count);
- ... (11 more removed lines; see GitHub link above)
+         t: Nv
+       } = (0, Vv.x)(), lv = (0, AP.h)("hiddenPlayerNames"), Tv = (0, AP.h)("players"), Wv = null === gv ? null : null !== (zv = null === (Pv = Tv.byId[gv]) || void 0 === Pv ? void 0 : Pv.cosmetics) && void 0 !== zv ? zv : null, wv = Nv("plotsGame:plotBannerCoords", {
+         x: hv,
+         z: Sv
+       }), av = "own" === pv || null !== ev;
+       return (0, Bv.jsxs)("div", {
+         ref: dv,
+         className: fv()("PlotsPlotBanner", {
+           Own: "own" === pv,
+           Shared: "shared" === pv
+         }),
+         role: "status",
+         children: [(0, Bv.jsxs)("span", {
+           className: fv()("PlotsPlotBannerSeal", {
+             Face: null !== Wv
+           }),
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L628` → after: `L2099-L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2099-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2099-L2122) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L628)

```diff
-       return [Math.sin(zz.heading) * Math.cos(zz.pitch), -Math.sin(zz.pitch), Math.cos(zz.heading) * Math.cos(zz.pitch)]
+       let {
+         progress: zv,
+         goal: Pv
+       } = vv;
+       const hv = Math.min(zv, Pv);
+       return (0, Bv.jsxs)("div", {
+         className: "PlotsProgress",
+         children: [(0, Bv.jsx)("div", {
+           className: "PlotsProgressBar",
+           role: "progressbar",
+           "aria-valuemin": 0,
+           "aria-valuemax": Pv,
+           "aria-valuenow": hv,
+           children: (0, Bv.jsx)("div", {
+             className: "PlotsProgressBarFill",
+             style: {
+ ... (8 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L655-L657` → after: `L2127-L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2127-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2127-L2128) · [Before (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L655-L657)

```diff
-         position: Ot([zz.min[0] + Wz[0] / 2, zz.min[1] + Wz[1] / 2, zz.min[2] + Wz[2] / 2], ot(Xz, -Kz * kz)),
-         heading: Fz.heading,
-         pitch: Fz.pitch
+         translationKey: `plotsGame:${vv}`,
+         actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
```

#### 25. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L662-L669` → after: `L2177-L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2177-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2177-L2187) · [Before (L662-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L662-L669)

```diff
-       const Fz = Xt(zz),
-         Wz = Xt(sz),
-         Xz = Ot(zz.position, ot(tz, -1)),
-         Oz = [0, 1, 2].reduce(((zz, tz) => Ot(zz, ot(Wz[tz], vt(Xz, Fz[tz])))), [0, 0, 0]);
-       return {
-         position: Ot(tz, Oz),
-         heading: sz.heading,
-         pitch: sz.pitch
+       const {
+         translationKey: hv,
+         actions: Sv
+       } = Pv ? zv.touch : zv.desktop;
+       if (0 === Sv.length) return vv(hv);
+       const ev = [];
+       for (const gv of Sv) {
+         const hv = (0, YP.x)(gv, Pv),
+           Sv = YP.z[gv][0];
+         if (null === hv && void 0 === Sv) return vv(zv.plainKey);
+         ev.push(null === hv ? (0, YP.p)(Sv) : vv(hv.translationKey))
```

#### 26. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L674` → after: `L2195-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2195-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2195-L2215) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L674)

```diff
-       return ot(Ot(zz.min, zz.max), .5)
+       let {
+         hud: zv
+       } = vv;
+       const Pv = (0, Dv.j)(Nz, zv.getStep()),
+         {
+           t: hv
+         } = (0, Vv.x)();
+       return (0, Bv.jsxs)(gz.g, {
+         placement: "bottom",
+         children: ["step" === Pv[0] && (0, Bv.jsx)(rP, {
+           step: Pv[1],
+           progress: Pv[2],
+           goal: Pv[3]
+         }, Pv[1]), "celebrate" === Pv[0] && (0, Bv.jsx)(kP, {
+           className: fv()("Celebrate", {
+             Gold: "house" === Pv[1]
+ ... (5 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L678-L680` → after: `L2219-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2219-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2219-L2239) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L678-L680)

```diff
-       const tz = zt(zz),
-         sz = tt(zz.heading);
-       return [tz, sz, Ut(tz, sz)]
+       let {
+         step: zv,
+         progress: Pv,
+         goal: hv
+       } = vv;
+       const {
+         isTouchScreen: Sv
+       } = (0, pv.i)(["isTouchScreen"]), {
+         t: ev
+       } = (0, Vv.x)(), gv = EP[zv];
+       return (0, Bv.jsxs)(kP, {
+         icon: gv.icon,
+         title: ev(gv.titleKey),
+         children: [(0, Bv.jsx)("div", {
+           className: "PlotsStepCardHint SmallTextLight",
+           children: oP(ev, gv, Sv)
+ ... (5 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L683-L684` → after: `L2242-L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2242-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2242-L2264) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L683-L684)

```diff
-     function Ot(zz, tz) {
-       return [zz[0] + tz[0], zz[1] + tz[1], zz[2] + tz[2]]
+     function kP(vv) {
+       let {
+         className: zv,
+         icon: Pv,
+         title: hv,
+         children: Sv
+       } = vv;
+       return (0, Bv.jsxs)("div", {
+         className: fv()("PlotsStepCard", zv),
+         role: "status",
+         children: [(0, Bv.jsx)("span", {
+           className: "PlotsStepCardIcon",
+           children: (0, Bv.jsx)(Fv.b, {
+             name: Pv
+           })
+         }), (0, Bv.jsxs)("div", {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L687-L688` → after: `L2267-L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2267-L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2267-L2274) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L687-L688)

```diff
-     function ot(zz, tz) {
-       return [zz[0] * tz, zz[1] * tz, zz[2] * tz]
+     function XP() {
+       return (0, ev.useEffect)((() => (pv.c.set({
+         backpackPointerRequested: !0
+       }), () => {
+         pv.c.set({
+           backpackPointerRequested: !1
+         })
+       })), []), null
```

#### 30. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L690-L692` → after: `L2276-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2276-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2276-L2334) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L690-L692)

```diff
- 
-     function vt(zz, tz) {
-       return zz[0] * tz[0] + zz[1] * tz[1] + zz[2] * tz[2]
+     const uP = function(vv, zv, Pv, hv) {
+       let {
+         localPlayerId: Sv
+       } = hv;
+       const pv = new Tz;
+       let dv = null,
+         Nv = null,
+         lv = null,
+         Tv = null,
+         Wv = null;
+       const wv = [];
+       return {
+         onCreate: vv => {
+           dv = new FP(vv, Sv), Nv = new dP(vv, Sv, dv), lv = new dP(vv, Sv, dv), Tv = new iP(vv, Sv), Wv = new mv(vv, Tv), wv.push((0, gv.w)((0, ev.createElement)(ev.Fragment, null, (0, ev.createElement)(MP, {
+             hud: pv
+           }), (0, ev.createElement)(bP, {
+ ... (43 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L694-L696` → after: `L2336-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L2336-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/240.js#L2336-L2389) · [Before (L694-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/240.js#L694-L696)

```diff
- 
-     function Ut(zz, tz) {
-       return [zz[1] * tz[2] - zz[2] * tz[1], zz[2] * tz[0] - zz[0] * tz[2], zz[0] * tz[1] - zz[1] * tz[0]]
+   },
+   38669: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => hv,
+       i: () => ev
+     });
+     const hv = 1 / .6,
+       Sv = {
+         kind: "smokePuff"
+       };
+     class ev {
+       constructor(vv, zv, Pv) {
+         this.style = vv, this.GT = zv, this.half = Pv, this.particles = null, this.lastFrame = -1
+       }
+       emit(vv, zv, Pv) {
+         let ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
+ ... (38 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L4-L7)

```diff
-   39370: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => gz,
-       c: () => Pz
+   39115: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       playDocsSound: () => pv
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L9-L636` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L8-L11) · [Before (L9-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L9-L636)

```diff
-     var Fz = sz(39167),
-       Wz = sz(39170),
-       Xz = sz(39270),
-       Oz = sz(36505),
-       oz = sz(36475),
-       vz = sz(39374),
-       Uz = sz(38097),
-       Kz = sz(36518),
-       uz = sz(39065),
-       Nz = sz(37536),
-       bz = sz(37191),
-       wz = sz(39132),
-       Dz = sz(39181);
-     let gz = (() => {
-       var zz;
-       let tz, sz, Kz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz = vz.e,
- ... (612 more removed lines; see GitHub link above)
+     var hv = Pv(4603),
+       Sv = Pv(36271),
+       ev = Pv(1184);
+     const gv = new Map;
```

#### 3. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L638-L858` → after: `L13-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L13-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L13-L22) · [Before (L638-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L638-L858)

```diff
-     function Pz() {
-       Bz || (Bz = !0, gz.Parse = Hz)
-     }
-   },
-   39390: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Wz
-     });
-     var Fz = sz(36475);
-     class Wz {
-       constructor(zz, tz, sz) {
-         this._cameraPosition = tz, this._behavior = sz, this.activeInput = !1, this.speed = 1, this.cL = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const zz = this._scene.FD().getDeltaTime(),
-           tz = this._getEffectiveDeltaMs(zz);
- ... (205 more removed lines; see GitHub link above)
+     function pv(vv, zv, Pv, pv, dv) {
+       let Nv, lv = null,
+         Tv = 0,
+         Wv = 0;
+       if (zv) Nv = new hv.Howl({
+         src: [`${ev.clientSideServerUrls.staticUrl}/sounds/music/${vv}.mp3`],
+         html5: !0,
+         volume: Pv
+       });
+       else {
```

#### 4. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L860-L1384` → after: `L24-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L24-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L24-L38) · [Before (L860-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L860-L1384)

```diff
-         let tz, sz, Uz, Kz, uz = Xz.b,
-           Dz = [],
-           gz = [],
-           Hz = [],
-           Bz = [],
-           Pz = [],
-           rz = [],
-           Yz = [],
-           xz = [];
-         return zz = class extends uz {
-           get inertia() {
-             return this._targetInertia
-           }
-           set inertia(zz) {
-             this._targetInertia = zz, this.movement && (this.movement.panInertia = zz, this.movement.rotationInertia = zz)
-           }
- ... (509 more removed lines; see GitHub link above)
+         lv = (0, Sv.i)(vv);
+         const zv = (0, Sv.f)(lv),
+           Pv = null !== (wv = zv.sprite[vv]) && void 0 !== wv ? wv : null;
+         if (!Pv) throw new Error(`Docs sound ${vv} is not in sprite sheet ${lv}`);
+         Tv = Pv[0] / 1e3, Wv = Pv[1] / 1e3, Nv = gv.get(lv), Nv || (Nv = new hv.Howl({
+           ...zv,
+           volume: 1
+         }), gv.set(lv, Nv))
+       }
+       const av = zv ? Nv.play() : Nv.play(vv);
+       Nv.volume(Pv, av), pv > 0 && Nv.seek(Tv + pv, av);
+       const sv = () => zv ? Nv.duration() : Wv;
+       let Cv = !1;
+       const iv = vv => {
+           Cv || (Cv = !0, Nv.off("play", cv, av), Nv.off("end", Gv, av), Nv.off("loaderror", jv), Nv.off("playerror", mv, av), zv && Nv.unload(), dv.onEnd(vv))
```

#### 5. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L1386-L1564` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L40-L41) · [Before (L1386-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L1386-L1564)

```diff
-         enumerable: !1,
-         configurable: !0
-       })
-     }();
-     var Oz = sz(39021),
-       oz = sz(38097),
-       vz = sz(39111);
-     let Uz = !1;
-     ! function() {
-       function zz(zz, tz, sz, Fz) {
-         let Wz, Xz = 1;
-         1 === Fz ? Wz = new Float32Array(tz * sz * 4) : 2 === Fz ? (Wz = new Uint16Array(tz * sz * 4), Xz = 15360) : Wz = 7 === Fz ? new Uint32Array(tz * sz * 4) : new Uint8Array(tz * sz * 4);
-         for (let Oz = 0; Oz < tz; Oz++)
-           for (let Fz = 0; Fz < sz; Fz++) {
-             const sz = 3 * (Fz * tz + Oz),
-               oz = 4 * (Fz * tz + Oz);
- ... (163 more removed lines; see GitHub link above)
+         cv = () => {
+           dv.onPlay(sv())
```

#### 6. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L1566-L1937` → after: `L43-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L43-L50) · [Before (L1566-L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L1566-L1937)

```diff
-         Wz = this._gl;
-       this._bindTextureDirectly(Wz.TEXTURE_CUBE_MAP, sz, !0), this._setupDepthStencilTexture(sz, zz, Fz.bilinearFiltering, Fz.comparisonFunction);
-       for (let Xz = 0; Xz < 6; Xz++) Fz.generateStencil ? Wz.texImage2D(Wz.TEXTURE_CUBE_MAP_POSITIVE_X + Xz, 0, Wz.DEPTH24_STENCIL8, zz, zz, 0, Wz.DEPTH_STENCIL, Wz.UNSIGNED_INT_24_8, null) : Wz.texImage2D(Wz.TEXTURE_CUBE_MAP_POSITIVE_X + Xz, 0, Wz.DEPTH_COMPONENT24, zz, zz, 0, W … [truncated]
-       return this._bindTextureDirectly(Wz.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(sz), sz
-     }, Wz.ThinEngine.prototype._setCubeMapTextureParams = function(zz, tz, sz) {
-       const Fz = this._gl;
-       Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_MAG_FILTER, Fz.LINEAR), Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_MIN_FILTER, tz ? Fz.LINEAR_MIPMAP_LINEAR : Fz.LINEAR), Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_WRAP_S, Fz.CLAMP_TO_EDGE), Fz.texParameteri(Fz.T … [truncated]
-     }, Wz.ThinEngine.prototype.createCubeTexture = function(zz, tz, sz, Fz) {
-       let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         Oz = arguments.length > 6 ? arguments[6] : void 0,
-         Uz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         Kz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-         Nz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
-         bz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
- ... (356 more removed lines; see GitHub link above)
+         Gv = () => {
+           iv(!1)
+         },
+         mv = (zv, Pv) => {
+           console.error(`Could not play docs sound ${vv}`, Pv), iv(!0)
+         },
+         jv = (vv, zv) => {
+           null !== lv && gv.get(lv) === Nv && (gv.delete(lv), Nv.unload()), mv(vv, zv)
```

#### 7. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L1939-L2221` → after: `L52-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L52-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/241.js#L52-L73) · [Before (L1939-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/241.js#L1939-L2221)

```diff
-         return Dz(Oz) ? Oz : null
-       }(zz);
-       if (tz) return tz;
-       const sz = function(zz) {
-         let tz = null;
-         try {
-           "undefined" !== typeof OffscreenCanvas ? tz = new OffscreenCanvas(64, 64) : (0, bz.g)() && "function" === typeof document.createElement && (tz = document.createElement("canvas"), tz.width = 64, tz.height = 64);
-           const sz = tz?.getContext("2d");
-           if (!sz) return null;
-           sz.font = zz;
-           const Fz = sz.measureText("Hg"),
-             Wz = Number(Fz.actualBoundingBoxAscent ?? Fz.fontBoundingBoxAscent),
-             Xz = Number(Fz.actualBoundingBoxDescent ?? Fz.fontBoundingBoxDescent),
-             Oz = {
-               ascent: Wz,
-               height: Wz + Xz,
- ... (267 more removed lines; see GitHub link above)
+       return Nv.on("play", cv, av), Nv.once("end", Gv, av), Nv.once("loaderror", jv), Nv.once("playerror", mv, av), {
+         pause: () => {
+           Nv.pause(av)
+         },
+         resume: () => {
+           Nv.play(av)
+         },
+         seek: vv => {
+           const zv = sv(),
+             Pv = Math.max(vv, 0);
+           Nv.seek(Tv + (zv > 0 ? Math.min(Pv, zv) : Pv), av)
+         },
+         yG: () => {
+           const vv = Nv.seek(av);
+           return "number" === typeof vv ? Math.max(0, vv - Tv) : 0
+         },
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L56` → after: `L4-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/242.js#L4-L249) · [Before (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/242.js#L4-L56)

```diff
-   39293: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => oz,
-       h: () => Dz,
-       j: () => Uz,
-       m: () => vz
-     });
-     var Fz = sz(39106),
-       Wz = sz(38097),
-       Xz = sz(39231),
-       Oz = sz(39140);
-     class oz {
-       get zsz() {
-         return this._isDisposed
-       }
-       constructor(zz, tz, sz) {
- ... (37 more removed lines; see GitHub link above)
+   39119: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       default: () => ov
+     });
+     Pv(6185);
+     var hv = Pv(52),
+       Sv = Pv(39127),
+       ev = Pv(39387),
+       gv = Pv(39506),
+       pv = Pv(39537),
+       dv = Pv(39560),
+       Nv = Pv(36745),
+       lv = Pv(36591),
+       Tv = Pv(39710),
+       Wv = Pv(39774),
+       wv = (Pv(39800), Pv(1209)),
+ ... (230 more added lines; see GitHub link above)
```
