# Changed — Bundle Modifications Report (Part 044 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `44 / 67` (**405** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 043](part-043.md) · [Part 045 →](part-045.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (850 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 63. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1055-L1058` → after: `L911-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L911-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L911-L917) · [Before (L1055-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1055-L1058)

```diff
-         subscribe(zz) {
-           return this.listeners.add(zz), () => {
-             this.listeners.delete(zz)
-           }
+       }
+       hide() {
+         this.set(Jv)
+       }
+       subscribe(vv) {
+         return this.listeners.add(vv), () => {
+           this.listeners.delete(vv)
```

#### 64. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1060-L1061` → after: `L919-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L919-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L919-L922) · [Before (L1060-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1060-L1061)

```diff
-       },
-       it = (zz, tz) => {
+       }
+     };
+     var ov = Pv(8366);
+     const bv = (vv, zv) => {
```

#### 65. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1164` → after: `L1025-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1025-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1025-L1026) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1164)

```diff
-     var lt = sz(8207);
+     var kv = Pv(8374),
+       Xv = Pv(8368);
```

#### 66. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1261` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1123) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1261)

```diff
-         return null !== Wz && void 0 !== Wz ? Wz : Fz
+         return null !== Sv && void 0 !== Sv ? Sv : hv
```

#### 67. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1336` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1198) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1336)

```diff
-       Ps = zz => zz.hasAttribute("data-inven-idx") ? "slot" : zz.hasAttribute("data-recipe-key") ? "recipe" : zz.hasAttribute("data-craft-ingredient") || Kt(zz) ? "info" : Pt(zz) ? "textField" : "button",
+       Oz = vv => vv.hasAttribute("data-inven-idx") ? "slot" : vv.hasAttribute("data-recipe-key") ? "recipe" : vv.hasAttribute("data-craft-ingredient") || (0, Xv.v)(vv) ? "info" : (0, Bv.E)(vv) ? "textField" : "button",
```

#### 68. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1343` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1205) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1343)

```diff
-           recipe: null !== (tz = zz && (null === (sz = Ys(zz)) || void 0 === sz ? void 0 : sz.getAttribute("data-recipe-key"))) && void 0 !== tz ? tz : null
+           recipe: null !== (zv = vv && (null === (Pv = Kz(vv)) || void 0 === Pv ? void 0 : Pv.getAttribute("data-recipe-key"))) && void 0 !== zv ? zv : null
```

#### 69. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1399` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1261) · [Before (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1399)

```diff
-           Hz = null !== (Bz = oz.get(zz)) && void 0 !== Bz ? Bz : null, Hz || (Hz = {
+           iv = null !== (cv = pv.get(vv)) && void 0 !== cv ? cv : null, iv || (iv = {
```

#### 70. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1420` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1282) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1420)

```diff
-             scrollGroup: null !== (rz = null === gz || void 0 === gz ? void 0 : gz.group) && void 0 !== rz ? rz : null,
+             scrollGroup: null !== (mv = null === Cv || void 0 === Cv ? void 0 : Cv.group) && void 0 !== mv ? mv : null,
```

#### 71. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1422` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1284) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1422)

```diff
-             clip: null !== (Yz = null === gz || void 0 === gz ? void 0 : gz.box) && void 0 !== Yz ? Yz : null,
+             clip: null !== (jv = null === Cv || void 0 === Cv ? void 0 : Cv.box) && void 0 !== jv ? jv : null,
```

#### 72. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1426` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1288) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1426)

```diff
-             scrollContainer: null !== (xz = null === gz || void 0 === gz ? void 0 : gz.container) && void 0 !== xz ? xz : null
+             scrollContainer: null !== (fv = null === Cv || void 0 === Cv ? void 0 : Cv.container) && void 0 !== fv ? fv : null
```

#### 73. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1454` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1316) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1454)

```diff
-         return null !== (zz = null === (tz = this.latched) || void 0 === tz ? void 0 : tz.hold) && void 0 !== zz ? zz : null
+         return null !== (vv = null === (zv = this.latched) || void 0 === zv ? void 0 : zv.hold) && void 0 !== vv ? vv : null
```

#### 74. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1460` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1322) · [Before (L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1460)

```diff
-     var cs = sz(8214);
+     var Zz = Pv(8380);
```

#### 75. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1484` → after: `L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1346) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1484)

```diff
-           Oz = `${Wz}|${Math.round(Fz.clientX)},${Math.round(Fz.clientY)}`,
+           gv = `${Sv}|${Math.round(hv.clientX)},${Math.round(hv.clientY)}`,
```

#### 76. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1492` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1354) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1492)

```diff
-         if (oz) return void("element" === Xz.kind ? Ct(Xz.element, Xz.element, ys(Fz)) : zz.hover(null, Fz));
+         if (pv) return void("element" === ev.kind ? (0, Bv.n)(ev.element, ev.element, Lz(hv)) : vv.hover(null, hv));
```

#### 77. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1495` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1357) · [Before (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1495)

```diff
-         "element" === uz.kind ? Ct(uz.element, Nz, ys(Fz)) : Nz && Ct(null, Nz, ys(Fz))
+         "element" === Tv.kind ? (0, Bv.n)(Tv.element, Wv, Lz(hv)) : Wv && (0, Bv.n)(null, Wv, Lz(hv))
```

#### 78. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1505` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1367) · [Before (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1505)

```diff
-         "element" === zz.kind && Ct(zz.element, tz, ys(sz))
+         "element" === vv.kind && (0, Bv.n)(vv.element, zv, Lz(Pv))
```

#### 79. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1524` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1386) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1524)

```diff
-         return 0 !== (0, wz.k)(zz, .2).y
+         return 0 !== (0, av.i)(vv, .2).y
```

#### 80. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1544` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1406) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1544)

```diff
-     var ks = sz(8216);
+     var Jz = Pv(8388);
```

#### 81. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1573` → after: `L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1435) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1573)

```diff
-       as = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
+       kz = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
```

#### 82. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1575` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1437) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1575)

```diff
-       Ss = [...as, ...qs],
+       uz = [...kz, ...Xz],
```

#### 83. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1577` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1439) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1577)

```diff
-         return zz = (0, Kz.f)("inventory"), !Ss.map(Kz.f).includes(zz) && !(0, wz.H)(zz);
+         return vv = (0, lv.f)("inventory"), !uz.map(lv.f).includes(vv) && !(0, av.B)(vv);
```

#### 84. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1624` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1486) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1624)

```diff
-               for (const sz of uz.querySelectorAll(`${Ds}:first-child`)) {
+               for (const Pv of Tv.querySelectorAll(`${fz}:first-child`)) {
```

#### 85. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1642` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1504) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1642)

```diff
-                   Hz = gz && !Wz.has(gz.container) ? gz : null;
+                   iv = Cv && !Sv.has(Cv.container) ? Cv : null;
```

#### 86. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1647` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1509) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1647)

```diff
-                   scrollGroup: null !== (oz = null === Hz || void 0 === Hz ? void 0 : Hz.group) && void 0 !== oz ? oz : null,
+                   scrollGroup: null !== (pv = null === iv || void 0 === iv ? void 0 : iv.group) && void 0 !== pv ? pv : null,
```

#### 87. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1649` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1511) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1649)

```diff
-                   clip: null !== (vz = null === Hz || void 0 === Hz ? void 0 : Hz.box) && void 0 !== vz ? vz : null,
+                   clip: null !== (dv = null === iv || void 0 === iv ? void 0 : iv.box) && void 0 !== dv ? dv : null,
```

#### 88. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1653` → after: `L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1515) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1653)

```diff
-                   scrollContainer: null !== (Uz = null === Hz || void 0 === Hz ? void 0 : Hz.container) && void 0 !== Uz ? Uz : null
+                   scrollContainer: null !== (Nv = null === iv || void 0 === iv ? void 0 : iv.container) && void 0 !== Nv ? Nv : null
```

#### 89. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1701-L1702` → after: `L1563-L1564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1563-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1563-L1564) · [Before (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1701-L1702)

```diff
-           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(wz.D.map((zz => [zz, (0, Dz.e)(wz.G)]))), this.stickRepeat = new wz.c((0, Dz.e)(wz._)), this.pageUpTimer = (0, Dz.e)(wz.W … [truncated]
-             this.endInteraction((0, lt.h)()), (0, lt.i)() || this.forgetSurface()
+           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(av.x.map((vv => [vv, (0, sv.d)(av.z)]))), this.stickRepeat = new av.c((0, sv.d)(av.W)), this.pageUpTimer = (0, sv.d)(av.Q … [truncated]
+             this.endInteraction((0, kv.g)()), (0, kv.h)() || this.forgetSurface()
```

#### 90. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1705` → after: `L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1567) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1705)

```diff
-             this.reopenSlotIdx = null !== (zz = this.focused ? ms(this.focused).idx : null) && void 0 !== zz ? zz : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, lt.r)(), this.panelMemory.clear(), this. … [truncated]
+             this.reopenSlotIdx = null !== (vv = this.focused ? Uz(this.focused).idx : null) && void 0 !== vv ? vv : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, kv.v)(), this.panelMemory.clear(), this. … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1710-L1711` → after: `L1572-L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1572-L1573) · [Before (L1710-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1710-L1711)

```diff
-           }, this.shouldBlockRealPointer = zz => zz.isTrusted && !(0, Hz.r)(zz) && this.isShowing(), this.noteRealPointer = zz => {
-             zz instanceof MouseEvent && zz.isTrusted && !(0, Hz.r)(zz) && (this.lastRealPointer ??= {
+           }, this.shouldBlockRealPointer = vv => vv.isTrusted && !(0, iv.q)(vv) && this.isShowing(), this.noteRealPointer = vv => {
+             vv instanceof MouseEvent && vv.isTrusted && !(0, iv.q)(vv) && (this.lastRealPointer ??= {
```

#### 92. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1717` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1579) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1717)

```diff
-             return zz === (0, Kz.f)("inventoryClose") ? !(null !== (tz = (0, lt.h)()) && void 0 !== tz && tz.isHolding()) : !(zz !== (0, Kz.f)("inventory") || !Vs()) || ((0, wz.H)(zz) ? this.isNavButton(zz) : qs.some((tz => (0, Kz.f)(tz) === zz)))
+             return vv === (0, lv.f)("inventoryClose") ? !(null !== (zv = (0, kv.g)()) && void 0 !== zv && zv.isHolding()) : !(vv !== (0, lv.f)("inventory") || !vP()) || ((0, av.B)(vv) ? this.isNavButton(vv) : Xz.some((zv => (0, lv.f)(zv) === vv)))
```

#### 93. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1722` → after: `L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1584) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1722)

```diff
-           const Oz = (0, lt.h)();
+           const gv = (0, kv.g)();
```

#### 94. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1724` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1586) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1724)

```diff
-           this.wasShowing = !0, this.applyFocusRequest(), zz.wokeDevice && this.focusWakePointer(!(null === Oz || void 0 === Oz || !Oz.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Nz.k)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           this.wasShowing = !0, this.applyFocusRequest(), vv.wokeDevice && this.focusWakePointer(!(null === gv || void 0 === gv || !gv.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Wv.g)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1731` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1593) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1731)

```diff
-             wz = null !== (tz = null === (sz = Uz.actionElement) || void 0 === sz ? void 0 : sz.querySelector(".DoCraftItem")) && void 0 !== tz ? tz : Uz.actionElement;
+             av = null !== (zv = null === (Pv = Nv.actionElement) || void 0 === Pv ? void 0 : Pv.querySelector(".DoCraftItem")) && void 0 !== zv ? zv : Nv.actionElement;
```

#### 96. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1758` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1620) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1758)

```diff
-             pressHints: null !== (Fz = null === (Wz = Uz.press) || void 0 === Wz ? void 0 : Wz.hints) && void 0 !== Fz ? Fz : null,
+             pressHints: null !== (hv = null === (Sv = Nv.press) || void 0 === Sv ? void 0 : Sv.hints) && void 0 !== hv ? hv : null,
```

#### 97. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1770` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1632) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1770)

```diff
-           const sz = (0, bz.e)();
+           const Pv = (0, wv.c)();
```

#### 98. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1774` → after: `L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1636) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1774)

```diff
-           this.setFocus(null !== (tz = us(sz, Fz)) && void 0 !== tz ? tz : zz ? vs(sz, Fz, (zz => {
+           this.setFocus(null !== (zv = cz(Pv, hv)) && void 0 !== zv ? zv : vv ? sz(Pv, hv, (vv => {
```

#### 99. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1781` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1643) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1781)

```diff
-           })) : null, !1), "cursor" === (0, Nz.k)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, Wv.g)().inventoryNavigation && (this.pointer = {
```

#### 100. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1789` → after: `L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1651) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1789)

```diff
-           if (!zz || "keyboardMouse" !== vz.b.get("activeInputDevice")) return;
+           if (!vv || "keyboardMouse" !== dv.c.get("activeInputDevice")) return;
```

#### 101. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1791` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1653) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1791)

```diff
-           tz && Ct(null, tz, zz)
+           zv && (0, Bv.n)(null, zv, vv)
```

#### 102. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1796` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1658) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1796)

```diff
-           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(zz), this.ring.hide(), this.releasePointer(), this.publishState(cs.b)
+           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(vv), this.ring.hide(), this.releasePointer(), this.publishState(Zz.e)
```

#### 103. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1804` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1666) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1804)

```diff
-           return this.focused && null !== (zz = this.getTargets().byElement.get(this.focused)) && void 0 !== zz ? zz : null
+           return this.focused && null !== (vv = this.getTargets().byElement.get(this.focused)) && void 0 !== vv ? vv : null
```

#### 104. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1832` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1694) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1832)

```diff
-               })(tz, (0, lt.h)()),
+               })(zv, (0, kv.g)()),
```

#### 105. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1835` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1697) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1835)

```diff
-             Wz = null !== zz || void 0 !== oz, Fz = null !== (Xz = null !== (Oz = null !== zz && void 0 !== zz ? zz : oz) && void 0 !== Oz ? Oz : vz && sz.get(vz)) && void 0 !== Xz ? Xz : Ns(tz)
+             Sv = null !== vv || void 0 !== pv, hv = null !== (ev = null !== (gv = null !== vv && void 0 !== vv ? vv : pv) && void 0 !== gv ? gv : dv && Pv.get(dv)) && void 0 !== ev ? ev : Gz(zv)
```

#### 106. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1850` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1712) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1850)

```diff
-             if ("cursor" === (0, Nz.k)().inventoryNavigation) {
+             if ("cursor" === (0, Wv.g)().inventoryNavigation) {
```

#### 107. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1878` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1740) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1878)

```diff
-           this.focusTarget = tz, (null === tz || void 0 === tz ? void 0 : tz.element) !== this.focused && (this.focused = null !== (zz = null === tz || void 0 === tz ? void 0 : tz.element) && void 0 !== zz ? zz : null, tz && (this.panelMemory.set(tz.panel, tz.element), this.lastR … [truncated]
+           this.focusTarget = zv, (null === zv || void 0 === zv ? void 0 : zv.element) !== this.focused && (this.focused = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.element) && void 0 !== vv ? vv : null, zv && (this.panelMemory.set(zv.panel, zv.element), this.lastR … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1882` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1744) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1882)

```diff
-             Fz = sz && (0, Nz.k)().cursorMagnetism ? zs(Us(sz)) : null;
+             hv = Pv && (0, Wv.g)().cursorMagnetism ? pz(Cz(Pv)) : null;
```

#### 109. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1885` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1747) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1885)

```diff
-             moveDeadzone: (0, Nz.k)().moveDeadzone,
+             moveDeadzone: (0, Wv.g)().moveDeadzone,
```

#### 110. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1888` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1750) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1888)

```diff
-             cursorSpeedPercent: (0, Nz.k)().cursorSpeed,
+             cursorSpeedPercent: (0, Wv.g)().cursorSpeed,
```

#### 111. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1921` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1783) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1921)

```diff
-             return null !== (Fz = os(Wz, tz, sz)) && void 0 !== Fz ? Fz : vs(zz, tz)
+             return null !== (hv = az(Sv, zv, Pv)) && void 0 !== hv ? hv : sz(vv, zv)
```

#### 112. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1926` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1788) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1926)

```diff
-           return !as.some((tz => (0, Kz.f)(tz) === zz)) && !(zz === (0, Kz.f)("inventory") && Vs())
+           return !kz.some((zv => (0, lv.f)(zv) === vv)) && !(vv === (0, lv.f)("inventory") && vP())
```

#### 113. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1929` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1791) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1929)

```diff
-           const sz = (0, Nz.k)().inventoryNavigation,
+           const Pv = (0, Wv.g)().inventoryNavigation,
```

#### 114. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1935` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1797) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1935)

```diff
-           for (const vz of wz.D) {
+           for (const dv of av.x) {
```

#### 115. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1939` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1801) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1939)

```diff
-           const Xz = this.stickGate.update(zz.leftStick, (0, Nz.k)().moveDeadzone);
+           const ev = this.stickGate.update(vv.leftStick, (0, Wv.g)().moveDeadzone);
```

#### 116. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1941-L1942` → after: `L1803-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1803-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1803-L1804) · [Before (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1941-L1942)

```diff
-             const tz = ((zz, tz, sz, Fz) => "hybrid" !== zz ? "cursor" === zz : !Fz && (tz || sz))(sz, null !== this.pointer, Xz, null !== Wz);
-             return tz && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(zz, "cursor" === sz ? Fz : {
+             const zv = ((vv, zv, Pv, hv) => "hybrid" !== vv ? "cursor" === vv : !hv && (zv || Pv))(Pv, null !== this.pointer, ev, null !== Sv);
+             return zv && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(vv, "cursor" === Pv ? hv : {
```

#### 117. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1947-L1948` → after: `L1809-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1809-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1809-L1810) · [Before (L1947-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1947-L1948)

```diff
-           const Oz = (0, wz.k)(zz.leftStick, (0, Nz.k)().moveDeadzone),
-             oz = this.stickRepeat.update(Xz ? (0, wz.ab)(Oz) : null, tz);
+           const gv = (0, av.i)(vv.leftStick, (0, Wv.g)().moveDeadzone),
+             pv = this.stickRepeat.update(ev ? (0, av.Z)(gv) : null, zv);
```

#### 118. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1959-L1960` → after: `L1821-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1821-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1821-L1822) · [Before (L1959-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1959-L1960)

```diff
-           const zz = (0, lt.r)();
-           zz && (this.targets.invalidate(), this.setFocus((0, lt.e)(this.getTargets().targets, zz)))
+           const vv = (0, kv.v)();
+           vv && (this.targets.invalidate(), this.setFocus((0, kv.c)(this.getTargets().targets, vv)))
```

#### 119. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1977` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1839) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1977)

```diff
-           })(Oz, Bs), Uz = null !== (tz = null === (sz = this.focusTarget) || void 0 === sz ? void 0 : sz.panel) && void 0 !== tz ? tz : null, uz = Xz ? 1 : -1, 0 === vz.length ? null : vz[ts(null === Uz ? -1 : vz.indexOf(Uz), vz.length, uz)]);
+           })(gv, nz), Nv = null !== (zv = null === (Pv = this.focusTarget) || void 0 === Pv ? void 0 : Pv.panel) && void 0 !== zv ? zv : null, Tv = ev ? 1 : -1, 0 === dv.length ? null : dv[dz(null === Nv ? -1 : dv.indexOf(Nv), dv.length, Tv)]);
```

#### 120. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1982` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1844) · [Before (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1982)

```diff
-             wz = null !== (Fz = bz.find((zz => zz.element === Nz && zz.visible))) && void 0 !== Fz ? Fz : ps(bz, (0, lt.h)());
+             av = null !== (hv = wv.find((vv => vv.element === Wv && vv.visible))) && void 0 !== hv ? hv : PP(wv, (0, kv.g)());
```

#### 121. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1992` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1854) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1992)

```diff
-           if (!zz.wasPressed(Xz ? Fz : sz) && this.hasCategories) return;
+           if (!vv.wasPressed(ev ? hv : Pv) && this.hasCategories) return;
```

#### 122. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1998` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1860) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L1998)

```diff
-               return It(Fz, rt(Fz)), !0
+               return (0, Bv.m)(hv, (0, Bv.r)(hv)), !0
```

#### 123. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2002` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1864) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2002)

```diff
-             const zz = null !== (oz = null === (vz = this.focusTarget) || void 0 === vz ? void 0 : vz.scrollGroup) && void 0 !== oz ? oz : null,
+             const vv = null !== (pv = null === (dv = this.focusTarget) || void 0 === dv ? void 0 : dv.scrollGroup) && void 0 !== pv ? pv : null,
```

#### 124. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2011` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1873) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2011)

```diff
-           } = this.getTargets(), uz = this.currentTarget(), Nz = uz && Gs(uz) ? uz : Uz.find((zz => Gs(zz) && zz.visible));
+           } = this.getTargets(), Tv = this.currentTarget(), Wv = Tv && Iz(Tv) ? Tv : Nv.find((vv => Iz(vv) && vv.visible));
```

#### 125. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2017` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1879) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2017)

```diff
-               Oz = Wz.y + ("Down" === sz ? Fz : -Fz);
+               gv = Sv.y + ("Down" === Pv ? hv : -hv);
```

#### 126. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2029` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1891) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2029)

```diff
-           this.setFocus(null !== bz && void 0 !== bz ? bz : Nz)
+           this.setFocus(null !== wv && void 0 !== wv ? wv : Wv)
```

#### 127. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2036` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1898) · [Before (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2036)

```diff
-           } = this.getTargets(), vz = this.pointer, Uz = !vz && this.focusTarget && Gs(this.focusTarget) ? this.focusTarget.scrollContainer : null, Kz = vz && (null === (tz = oz.find((zz => zz.clip && Ks(zz.clip, vz)))) || void 0 === tz ? void 0 : tz.scrollContainer), uz = null ! … [truncated]
+           } = this.getTargets(), dv = this.pointer, Nv = !dv && this.focusTarget && Iz(this.focusTarget) ? this.focusTarget.scrollContainer : null, lv = dv && (null === (zv = pv.find((vv => vv.clip && iz(vv.clip, dv)))) || void 0 === zv ? void 0 : zv.scrollContainer), Tv = null ! … [truncated]
```

#### 128. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2097` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1959) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2097)

```diff
-           } = this.getTargets(), Wz = document.querySelector(Ls), Xz = null !== (tz = Wz && Fz.get(Wz)) && void 0 !== tz ? tz : sz.find((zz => "hotbar" === zz.panel));
+           } = this.getTargets(), Sv = document.querySelector(oz), ev = null !== (zv = Sv && hv.get(Sv)) && void 0 !== zv ? zv : Pv.find((vv => "hotbar" === vv.panel));
```

#### 129. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2110` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1972) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2110)

```diff
-               kind: "po"
+               kind: "Vp"
```

#### 130. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2115` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1977) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2115)

```diff
-             return void(zz && (this.dropFrom(zz, !1, sz), this.dropLatch.press(zz, this.focusKey(), tz, gz.c[(0, Nz.k)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(vv && (this.dropFrom(vv, !1, Pv), this.dropLatch.press(vv, this.focusKey(), zv, Cv.b[(0, Wv.g)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 131. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2119` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1981) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2119)

```diff
-           Xz && ((zz, tz, sz) => "po" === zz.kind ? tz : !tz && sz(zz.idx))(Xz, sz.isHolding(), sz.hasItemAt) && (this.dropFrom(Xz, !0, sz), this.afterAction())
+           ev && ((vv, zv, Pv) => "Vp" === vv.kind ? zv : !zv && Pv(vv.idx))(ev, Pv.isHolding(), Pv.hasItemAt) && (this.dropFrom(ev, !0, Pv), this.afterAction())
```

#### 132. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2122` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L1984) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2122)

```diff
-           "po" === zz.kind ? sz.dropHeld(tz, this.slotPoint()) : sz.dropSlot(zz.idx, tz)
+           "Vp" === vv.kind ? Pv.dropHeld(zv, this.slotPoint()) : Pv.dropSlot(vv.idx, zv)
```

#### 133. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2142` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2004) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2142)

```diff
-           switch (Xz && Rs.has(zz) && (0, Hz.s)(Xz), zz) {
+           switch (ev && zP.has(vv) && (0, iv.t)(ev), vv) {
```

#### 134. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2160` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2022) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2160)

```diff
-               It(Xz, rt(Xz));
+               (0, Bv.m)(ev, (0, Bv.r)(ev));
```

#### 135. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2163` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2025) · [Before (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2163)

```diff
-               Pt(Xz) && et(Xz);
+               (0, Bv.E)(ev) && (0, Bv.B)(ev);
```

#### 136. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2194` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2056) · [Before (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2194)

```diff
-           })(zz, this.state) || (this.state = zz, Uz.o.Yg(cs.f, zz))
+           })(vv, this.state) || (this.state = vv, Nv.j.zC(Zz.h, vv))
```

#### 137. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2198-L2201` → after: `L2060-L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2060-L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2060-L2063) · [Before (L2198-L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2198-L2201)

```diff
-     var tF = sz(8218),
-       sF = sz(308),
-       FF = sz(1571),
-       WF = sz(7687);
+     var gP = Pv(8393),
+       pP = Pv(302),
+       dP = Pv(1610),
+       NP = Pv(7864);
```

#### 138. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2203` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2065) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2203)

```diff
-       OF = zz => zz instanceof HTMLElement && Ut(zz) && !Kt(zz),
+       TP = vv => vv instanceof HTMLElement && (0, Xv.o)(vv) && !(0, Xv.v)(vv),
```

#### 139. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2207` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2069) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2207)

```diff
-         for (const Wz of null !== (sz = null === (Fz = zz.parentElement) || void 0 === Fz ? void 0 : Fz.children) && void 0 !== sz ? sz : []) {
+         for (const Sv of null !== (Pv = null === (hv = vv.parentElement) || void 0 === hv ? void 0 : hv.children) && void 0 !== Pv ? Pv : []) {
```

#### 140. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2266` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2128) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2266)

```diff
-           Fz[sz] && !(Wz ? Xz : Oz) || oz.add(sz)
+           hv[Pv] && !(Sv ? ev : gv) || pv.add(Pv)
```

#### 141. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2335-L2337` → after: `L2197-L2199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2197-L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2197-L2199) · [Before (L2335-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2335-L2337)

```diff
-     var xF = sz(1628),
-       mF = sz(8227),
-       JF = sz(8230);
+     var DP = Pv(1652),
+       KP = Pv(8396),
+       VP = Pv(8405);
```

#### 142. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2339` → after: `L2201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2201) · [Before (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2339)

```diff
-         if ("death" !== zz || "inGame" !== vz.b.get("gameState") || "off" === (0, Nz.k)().quickChat || null === (0, xF.c)()) return !1;
+         if ("death" !== vv || "inGame" !== dv.c.get("gameState") || "off" === (0, Wv.g)().quickChat || null === (0, DP.e)()) return !1;
```

#### 143. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2344-L2345` → after: `L2206-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2206-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2206-L2207) · [Before (L2344-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2344-L2345)

```diff
-     var eF = sz(3976),
-       ZF = sz(8238);
+     var xP = Pv(4074),
+       tP = Pv(8413);
```

#### 144. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2348` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2210) · [Before (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2348)

```diff
-         for (const sz of zz.querySelectorAll("[data-pad-tabs]")) Ut(sz) && (!tz || Number(sz.dataset.padTabs) < Number(tz.dataset.padTabs)) && (tz = sz);
+         for (const Pv of vv.querySelectorAll("[data-pad-tabs]"))(0, Xv.o)(Pv) && (!zv || Number(Pv.dataset.padTabs) < Number(zv.dataset.padTabs)) && (zv = Pv);
```

#### 145. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2357` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2219) · [Before (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2357)

```diff
-               for (const Fz of Bt(tz)) {
+               for (const hv of (0, Xv.h)(zv)) {
```

#### 146. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2373` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2235) · [Before (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2373)

```diff
-         })([...sz.querySelectorAll("[data-pad-tab]")].filter((zz => Ut(zz) && !Kt(zz))), Fz);
+         })([...Pv.querySelectorAll("[data-pad-tab]")].filter((vv => (0, Xv.o)(vv) && !(0, Xv.v)(vv))), hv);
```

#### 147. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2375` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2237) · [Before (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2375)

```diff
-         const Oz = null !== (Wz = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== Wz ? Wz : null,
+         const gv = null !== (Sv = null === vv || void 0 === vv ? void 0 : vv.getFocused()) && void 0 !== Sv ? Sv : null,
```

#### 148. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2378` → after: `L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2240) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2378)

```diff
-         Zt(Xz), zz && (vz ? TF(zz, tz, vz, sz) : zz.setFocus(Xz, {
+         (0, Bv.d)(ev), vv && (dv ? IP(vv, zv, dv, Pv) : vv.setFocus(ev, {
```

#### 149. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2384-L2385` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2246-L2247) · [Before (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2384-L2385)

```diff
-         const sz = Az(null !== (tz = ez(zz, "x")) && void 0 !== tz ? tz : zz),
-           Fz = bt(zz).filter((zz => !Kt(zz))),
+         const Pv = tv(null !== (zv = Dv(vv, "x")) && void 0 !== zv ? zv : vv),
+           hv = (0, Xv.f)(vv).filter((vv => !(0, Xv.v)(vv))),
```

#### 150. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2387` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2249) · [Before (L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2387)

```diff
-         return (Wz.length > 0 ? Wz : Fz).sort(((zz, tz) => rF(zz.getBoundingClientRect(), tz.getBoundingClientRect())))
+         return (Sv.length > 0 ? Sv : hv).sort(((vv, zv) => nP(vv.getBoundingClientRect(), zv.getBoundingClientRect())))
```

#### 151. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2390` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2252) · [Before (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2390)

```diff
-         const Fz = [...tz.querySelectorAll("[data-pad-row]")].filter(Ut),
+         const hv = [...zv.querySelectorAll("[data-pad-row]")].filter(Xv.o),
```

#### 152. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2413` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2275) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2413)

```diff
-         const Xz = null !== (Fz = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== Fz ? Fz : null,
+         const ev = null !== (hv = null === vv || void 0 === vv ? void 0 : vv.getFocused()) && void 0 !== hv ? hv : null,
```

#### 153. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2415` → after: `L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2277) · [Before (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2415)

```diff
-           oz = null !== (Wz = Xz ? ez(Xz, Oz, tz) : null) && void 0 !== Wz ? Wz : Gz(tz, Oz);
+           pv = null !== (Sv = ev ? Dv(ev, gv, zv) : null) && void 0 !== Sv ? Sv : Vv(zv, gv);
```

#### 154. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2417` → after: `L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2279) · [Before (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2417)

```diff
-         const vz = Xz ? rt(Xz) : null;
+         const dv = ev ? (0, Bv.r)(ev) : null;
```

#### 155. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2434` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2296) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2434)

```diff
-           oz = PF(rt(Xz), Oz.map((zz => zz.getBoundingClientRect()))),
+           pv = YP((0, Bv.r)(ev), gv.map((vv => vv.getBoundingClientRect()))),
```

#### 156. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2436` → after: `L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2298) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2436)

```diff
-         return zz.setFocus(null !== vz && void 0 !== vz && vz.isConnected ? vz : null !== (Fz = Oz[oz]) && void 0 !== Fz ? Fz : null, {
+         return vv.setFocus(null !== dv && void 0 !== dv && dv.isConnected ? dv : null !== (hv = gv[pv]) && void 0 !== hv ? hv : null, {
```

#### 157. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2442` → after: `L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2304) · [Before (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2442)

```diff
-         return (0, wz.H)(tz) || WF.s.some((zz => (0, Kz.f)(zz) === tz)) ? null : tz
+         return (0, av.B)(zv) || NP.p.some((vv => (0, lv.f)(vv) === zv)) ? null : zv
```

#### 158. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2452` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2314) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2452)

```diff
-             return null !== (tz = null === (sz = GF(zz)) || void 0 === sz ? void 0 : sz.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== tz ? tz : null
+             return null !== (zv = null === (Pv = qP(vv)) || void 0 === Pv ? void 0 : Pv.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== zv ? zv : null
```

#### 159. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2455` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2317) · [Before (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2455)

```diff
-         (0, tF.c)(), sz === sF.r.SETTINGS && (0, FF.m)(vz.b.get("openEverythingMenuName")) ? vz.b.set({
+         (0, gP.e)(), Pv === pP.o.SETTINGS && (0, dP.k)(dv.c.get("openEverythingMenuName")) ? dv.c.set({
```

#### 160. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2457` → after: `L2319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2319) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2457)

```diff
-         }) : (0, FF.w)(new Event("padMenuShortcut"), sz, Fz), zz && Xz && Wz && TF(zz, tz, Xz, Wz.closest("[data-pad-tabs]"))
+         }) : (0, dP.u)(new Event("padMenuShortcut"), Pv, hv), vv && ev && Sv && IP(vv, zv, ev, Sv.closest("[data-pad-tabs]"))
```

#### 161. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2461-L2462` → after: `L2323-L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2323-L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2323-L2324) · [Before (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2461-L2462)

```diff
-       lF = (0, Dz.e)(wz.W),
-       nF = (0, Dz.e)(wz.W),
+       bP = (0, sv.d)(av.Q),
+       rP = (0, sv.d)(av.Q),
```

#### 162. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2466` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2328) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2466)

```diff
-             return IF(tz) && zz.isHeld(sz) ? "hold" === CF.update(zz.wasPressed(sz), zz.isHeld(sz), performance.now(), gz.c[(0, Nz.k)().tapHoldTime].wheelMs) && (uz.c.consumeButton(sz), Uz.o.Yg(JF.o), !0) : (CF.release(), !1)
+             return UP(zv) && vv.isHeld(Pv) ? "hold" === RP.update(vv.wasPressed(Pv), vv.isHeld(Pv), performance.now(), Cv.b[(0, Wv.g)().tapHoldTime].wheelMs) && (Tv.b.consumeButton(Pv), Nv.j.zC(VP.h), !0) : (RP.release(), !1)
```

#### 163. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2490-L2493` → after: `L2352-L2355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2352-L2355) · [Before (L2490-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2490-L2493)

```diff
-         return QF(tz, "pause") ? (Xz || (0, FF.v)() && "menu" !== sz.layer.kind || kF(zz, Fz, (0, FF.v)() ? sF.r.SETTINGS : (0, eF.e)()), !0) : !!QF(tz, "leaderboard") && ("home" === sz.layer.kind ? (zz => {
-           const tz = [...zz.querySelectorAll("[data-pad-notifications]")].find(Ut);
-           tz && Zt(tz)
-         })(Fz) : Xz || kF(zz, Fz, sF.r.LOBBY_LEADERBOARD, "inGame" === vz.b.get("gameState")), !0)
+         return BP(zv, "pause") ? (ev || (0, dP.p)() && "menu" !== Pv.layer.kind || JP(vv, hv, (0, dP.p)() ? pP.o.SETTINGS : (0, xP.b)()), !0) : !!BP(zv, "leaderboard") && ("home" === Pv.layer.kind ? (vv => {
+           const zv = [...vv.querySelectorAll("[data-pad-notifications]")].find(Xv.o);
+           zv && (0, Bv.d)(zv)
+         })(hv) : ev || JP(vv, hv, pP.o.LOBBY_LEADERBOARD, "inGame" === dv.c.get("gameState")), !0)
```

#### 164. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2501` → after: `L2363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2363) · [Before (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2501)

```diff
-           if (Wz) return Zt(Wz), !0;
+           if (Sv) return (0, Bv.d)(Sv), !0;
```

#### 165. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2504` → after: `L2366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2366) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2504)

```diff
-             return tz && Ht(tz, sz.root) ? (zz.setFocus(tz, {
+             return zv && (0, Xv.r)(zv, Pv.root) ? (vv.setFocus(zv, {
```

#### 166. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2506` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2368) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2506)

```diff
-             }), Zt(tz)) : vz.b.set({
+             }), (0, Bv.d)(zv)) : dv.c.set({
```

#### 167. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2514` → after: `L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2376) · [Before (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2514)

```diff
-           if (!Wz || !Ut(Wz)) return void(0, FF.w)(new Event("padMenuShortcut"), sF.r.SOCIAL);
+           if (!Sv || !(0, Xv.o)(Sv)) return void(0, dP.u)(new Event("padMenuShortcut"), pP.o.SOCIAL);
```

#### 168. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2516` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2378) · [Before (L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2516)

```diff
-           const Xz = null !== (sz = null === (Fz = Wz.querySelector("[data-pad-friends-start]")) || void 0 === Fz ? void 0 : Fz.getBoundingClientRect().top) && void 0 !== sz ? sz : -1 / 0,
+           const ev = null !== (Pv = null === (hv = Sv.querySelector("[data-pad-friends-start]")) || void 0 === hv ? void 0 : hv.getBoundingClientRect().top) && void 0 !== Pv ? Pv : -1 / 0,
```

#### 169. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2519` → after: `L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2381) · [Before (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2519)

```diff
-             vz = oz.length > 0 ? oz : Oz,
+             dv = pv.length > 0 ? pv : gv,
```

#### 170. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2528` → after: `L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2390) · [Before (L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2528)

```diff
-         const Wz = ht(zz);
+         const Sv = (0, Bv.v)(vv);
```

#### 171. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2530-L2531` → after: `L2392-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2392-L2393) · [Before (L2530-L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2530-L2531)

```diff
-         const Xz = (null !== (tz = null !== (sz = null !== (Fz = zz.getAttribute("aria-label")) && void 0 !== Fz ? Fz : zz.getAttribute("title")) && void 0 !== sz ? sz : zz.textContent) && void 0 !== tz ? tz : "").replace(/\s+/g, " ").trim();
-         return Xz ? `${zz.tagName}:${Xz.slice(0,100)}` : null
+         const ev = (null !== (zv = null !== (Pv = null !== (hv = vv.getAttribute("aria-label")) && void 0 !== hv ? hv : vv.getAttribute("title")) && void 0 !== Pv ? Pv : vv.textContent) && void 0 !== zv ? zv : "").replace(/\s+/g, " ").trim();
+         return ev ? `${vv.tagName}:${ev.slice(0,100)}` : null
```

#### 172. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2552` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2414) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2552)

```diff
-           Xz = ht(tz),
+           ev = (0, Bv.v)(zv),
```

#### 173. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2576` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2438) · [Before (L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2576)

```diff
-         return null !== (sz = null !== (Fz = Oz[Wz.ordinal]) && void 0 !== Fz ? Fz : Oz[0]) && void 0 !== sz ? sz : null
+         return null !== (Pv = null !== (hv = gv[Sv.ordinal]) && void 0 !== hv ? hv : gv[0]) && void 0 !== Pv ? Pv : null
```

#### 174. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2582` → after: `L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2444) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2582)

```diff
-     var RF = sz(1264);
+     var zh = Pv(1265);
```

#### 175. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2597` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2459) · [Before (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2597)

```diff
-             const sz = (null !== (Fz = zz[Xz]) && void 0 !== Fz ? Fz : 0) - (null !== (Wz = tz[Xz]) && void 0 !== Wz ? Wz : 0);
+             const Pv = (null !== (hv = vv[ev]) && void 0 !== hv ? hv : 0) - (null !== (Sv = zv[ev]) && void 0 !== Sv ? Sv : 0);
```

#### 176. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2610` → after: `L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2472) · [Before (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2610)

```diff
-         return null !== (sz = fF(zz.root, tz.root)) && void 0 !== sz ? sz : zz.order > tz.order
+         return null !== (Pv = hh(vv.root, zv.root)) && void 0 !== Pv ? Pv : vv.order > zv.order
```

#### 177. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2619-L2620` → after: `L2481-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2481-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2481-L2482) · [Before (L2619-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2619-L2620)

```diff
-           sz = "number" === typeof tz ? tz : null;
-         if (null !== sz && sz === sW && FW === (0, RF.d)()) return tW;
+           Pv = "number" === typeof zv ? zv : null;
+         if (null !== Pv && Pv === ph && dh === (0, zh.b)()) return gh;
```

#### 178. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2623-L2624` → after: `L2485-L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2485-L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2485-L2486) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2623-L2624)

```diff
-           Xz = [...document.querySelectorAll("[data-pad-covers]")].filter(Ut);
-         for (const Oz of (0, RF.h)()) {
+           ev = [...document.querySelectorAll("[data-pad-covers]")].filter(Xv.o);
+         for (const gv of (0, zh.f)()) {
```

#### 179. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2626` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2488) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2626)

```diff
-             tz = !!zz && Ut(zz) && !zW(zz, Xz);
+             zv = !!vv && (0, Xv.o)(vv) && !eh(vv, ev);
```

#### 180. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2635` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2497) · [Before (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2635)

```diff
-         tW = Fz, sW = sz, FW = (0, RF.d)();
+         gh = hv, ph = Pv, dh = (0, zh.b)();
```

#### 181. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2645` → after: `L2507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2507) · [Before (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2645)

```diff
-         return null !== (zz = null === (tz = WW()) || void 0 === tz ? void 0 : tz.root) && void 0 !== zz ? zz : null
+         return null !== (vv = null === (zv = Nh()) || void 0 === zv ? void 0 : zv.root) && void 0 !== vv ? vv : null
```

#### 182. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2653` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2515) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2653)

```diff
-       KW = (0, Nz.k)().menuNavigation,
+       sh = (0, Wv.g)().menuNavigation,
```

#### 183. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2657-L2658` → after: `L2519-L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2519-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2519-L2520) · [Before (L2657-L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2657-L2658)

```diff
-     Uz.o.subscribe(Nz.h, (() => {
-       const zz = (0, Nz.k)().menuNavigation;
+     Nv.j.subscribe(Wv.e, (() => {
+       const vv = (0, Wv.g)().menuNavigation;
```

#### 184. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2663` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2525) · [Before (L2663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2663)

```diff
-         return null !== (zz = vW) && void 0 !== zz ? zz : (0, Nz.k)().menuNavigation
+         return null !== (vv = wh) && void 0 !== vv ? vv : (0, Wv.g)().menuNavigation
```

#### 185. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2690` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2552) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2690)

```diff
-           has: Dt(zz)
+           has: (0, Xv.j)(vv)
```

#### 186. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2716-L2717` → after: `L2578-L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2578-L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2578-L2579) · [Before (L2716-L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2716-L2717)

```diff
-     var mW = sz(4183),
-       JW = sz(4644);
+     var Kh = Pv(4301),
+       Vh = Pv(4773);
```

#### 187. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2719` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2581) · [Before (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2719)

```diff
-       CW = `${IW}, [data-pad-back]`,
+       Rh = `${Uh}, [data-pad-back]`,
```

#### 188. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2750-L2751` → after: `L2612-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2612-L2613) · [Before (L2750-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2750-L2751)

```diff
-         const sz = zz.querySelector(`${cW}[data-pad-selected='true']`);
-         return sz && tz.includes(sz) ? sz : null
+         const Pv = vv.querySelector(`${Qh}[data-pad-selected='true']`);
+         return Pv && zv.includes(Pv) ? Pv : null
```

#### 189. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2767` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2629) · [Before (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2767)

```diff
-         if (oz && oz !== Oz) return Oz || (this.contentReturn = new WeakRef(zz)), null !== (vz = jW(oz, sz)) && void 0 !== vz ? vz : tz;
+         if (pv && pv !== gv) return gv || (this.contentReturn = new WeakRef(vv)), null !== (dv = Zh(pv, Pv)) && void 0 !== dv ? dv : zv;
```

#### 190. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2771` → after: `L2633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2633) · [Before (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2771)

```diff
-         return Kz && Uz.contains(Kz) && sz.includes(Kz) ? Kz : null !== (Xz = this.pickRegionStart(Uz, ez(tz, "y", Fz), sz)) && void 0 !== Xz ? Xz : tz
+         return lv && Nv.contains(lv) && Pv.includes(lv) ? lv : null !== (ev = this.pickRegionStart(Nv, Dv(zv, "y", hv), Pv)) && void 0 !== ev ? ev : zv
```

#### 191. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2779` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2641) · [Before (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2779)

```diff
-         return sz.some((zz => Xz.contains(zz) && !zz.closest(CW))) || !tz.closest(CW) ? Xz : null
+         return Pv.some((vv => ev.contains(vv) && !vv.closest(Rh))) || !zv.closest(Rh) ? ev : null
```

#### 192. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2808` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2670) · [Before (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2808)

```diff
-         for (const Xz of Bt(zz)) {
+         for (const ev of (0, Xv.h)(vv)) {
```

#### 193. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2828-L2829` → after: `L2690-L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2690-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2690-L2691) · [Before (L2828-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2828-L2829)

```diff
-           if (sz) return tz === zz || tz.querySelectorAll(ot).length <= 1 ? sz : null;
-           if (tz !== zz && tz.querySelectorAll(ot).length > 1) return null
+           if (Pv) return zv === vv || zv.querySelectorAll(Xv.d).length <= 1 ? Pv : null;
+           if (zv !== vv && zv.querySelectorAll(Xv.d).length > 1) return null
```

#### 194. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2834` → after: `L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2696) · [Before (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2834)

```diff
-         Ct(zz, tz, sz);
+         (0, Bv.n)(vv, zv, Pv);
```

#### 195. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2837` → after: `L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2699) · [Before (L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2837)

```diff
-         Fz !== Wz && Ct(Fz, Wz, Wz ? rt(Wz) : sz, {
+         hv !== Sv && (0, Bv.n)(hv, Sv, Sv ? (0, Bv.r)(Sv) : Pv, {
```

#### 196. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2852` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2714) · [Before (L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2852)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new VF, this.tabStripNav = new yW, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new vh, this.tabStripNav = new Lh, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2858` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2720) · [Before (L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2858)

```diff
-         const zz = uz.c.register({
+         const vv = Tv.b.register({
```

#### 198. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2867` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2729) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2867)

```diff
-             wakePressActs: zz => (0, uz.g)(zz) || zz === (0, Kz.f)("menuConfirm") && yt((0, bz.e)())
+             wakePressActs: vv => (0, Tv.d)(vv) || vv === (0, lv.f)("menuConfirm") && (0, Bv.A)((0, wv.c)())
```

#### 199. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2870` → after: `L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2732) · [Before (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2870)

```diff
-             const tz = (0, RF.q)(zz);
+             const zv = (0, zh.p)(vv);
```

#### 200. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2874` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2736) · [Before (L2874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2874)

```diff
-         const Fz = Oz.e.onFrame((zz => {
+         const hv = gv.f.onFrame((vv => {
```

#### 201. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2878` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2740) · [Before (L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2878)

```diff
-             zz.isTrusted && zz.target instanceof Element && Oz.e.getActivePad() && this.noteChosenStop(zz.target)
+             vv.isTrusted && vv.target instanceof Element && gv.f.getActivePad() && this.noteChosenStop(vv.target)
```

#### 202. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2888` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2750) · [Before (L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2888)

```diff
-         const Wz = null !== (tz = null === (sz = zz.closest(".Dropdown-root")) || void 0 === sz ? void 0 : sz.querySelector(".Dropdown-control")) && void 0 !== tz ? tz : zz,
+         const Sv = null !== (zv = null === (Pv = vv.closest(".Dropdown-root")) || void 0 === Pv ? void 0 : Pv.querySelector(".Dropdown-control")) && void 0 !== zv ? zv : vv,
```

#### 203. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2891` → after: `L2753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2753) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2891)

```diff
-         const Oz = (0, RF.q)(Fz.layer);
+         const gv = (0, zh.p)(hv.layer);
```

#### 204. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2895` → after: `L2757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2757) · [Before (L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2895)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Xz, this.lastFocusedCentre = rt(Xz), this.rememberFocus(Xz), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = ev, this.lastFocusedCentre = (0, Bv.r)(ev), this.rememberFocus(ev), this.notify())
```

#### 205. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2916` → after: `L2778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2778) · [Before (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2916)

```diff
-           this.stickRepeat.reset(), null !== (zz = this.focused) && void 0 !== zz && zz.isConnected && LW(this.focused, null, rt(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (vv = this.focused) && void 0 !== vv && vv.isConnected && oh(this.focused, null, (0, Bv.r)(this.focused)), this.notify()
```

#### 206. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2936-L2938` → after: `L2798-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2798-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2798-L2800) · [Before (L2936-L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2936-L2938)

```diff
-           const tz = rt(zz);
-           this.lastFocusedCentre = tz, this.movedInLayer && this.rememberFocus(zz), LW(Wz, zz, tz), "false" === zz.getAttribute("aria-pressed") && zz.closest("[data-pad-select-on-focus]") && Zt(zz)
-         } else Wz && LW(Wz, null, rt(Wz));
+           const zv = (0, Bv.r)(vv);
+           this.lastFocusedCentre = zv, this.movedInLayer && this.rememberFocus(vv), oh(Sv, vv, zv), "false" === vv.getAttribute("aria-pressed") && vv.closest("[data-pad-select-on-focus]") && (0, Bv.d)(vv)
+         } else Sv && oh(Sv, null, (0, Bv.r)(Sv));
```

#### 207. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2953` → after: `L2815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2815) · [Before (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2953)

```diff
-         const Xz = (0, RF.q)(tz.layer);
+         const ev = (0, zh.p)(zv.layer);
```

#### 208. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2972` → after: `L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2834) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2972)

```diff
-         return bt(zz).filter((zz => !Kt(zz)))
+         return (0, Xv.f)(vv).filter((vv => !(0, Xv.v)(vv)))
```

#### 209. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2978` → after: `L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2840) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2978)

```diff
-         const Fz = null !== (tz = this.findOpenDropdown(sz)) && void 0 !== tz ? tz : sz,
+         const hv = null !== (zv = this.findOpenDropdown(Pv)) && void 0 !== zv ? zv : Pv,
```

#### 210. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2980` → after: `L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2842) · [Before (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2980)

```diff
-           Xz = (0, RF.q)(Fz.layer);
+           ev = (0, zh.p)(hv.layer);
```

#### 211. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2983` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2845) · [Before (L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2983)

```diff
-           if (null !== this.layerKey && Fz.root === this.layerRoot && tz && Ht(tz, Fz.root)) this.continueLayer(Xz, tz), this.wasActive || this.resume(Fz.root, Wz);
+           if (null !== this.layerKey && hv.root === this.layerRoot && zv && (0, Xv.r)(zv, hv.root)) this.continueLayer(ev, zv), this.wasActive || this.resume(hv.root, Sv);
```

#### 212. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2988` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2850) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2988)

```diff
-             "popup" !== Fz.layer.kind || Fz !== sz || oz ? "menu" === Fz.layer.kind && Oz && "inGame" === vz.b.get("gameState") && !(0, tF.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Wz + mW.c) : (this.pressGuardExtends = tz, this.pressGuardUntilMs = Wz + (t … [truncated]
+             "popup" !== hv.layer.kind || hv !== Pv || pv ? "menu" === hv.layer.kind && gv && "inGame" === dv.c.get("gameState") && !(0, gP.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Sv + Kh.d) : (this.pressGuardExtends = zv, this.pressGuardUntilMs = Sv + (z … [truncated]
```

#### 213. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2991` → after: `L2853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2853) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2991)

```diff
-         if (this.layerKind = Fz.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), zz.wokeDevice && this.focusPointedStop(Fz.root), this.validateFocus(Fz, Wz), Wz < this.pressGuardUntilMs && this.pressGuardExtends && (zz.wasPressed((0, Kz.f)("menuConfirm")) || zz … [truncated]
+         if (this.layerKind = hv.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), vv.wokeDevice && this.focusPointedStop(hv.root), this.validateFocus(hv, Sv), Sv < this.pressGuardUntilMs && this.pressGuardExtends && (vv.wasPressed((0, lv.f)("menuConfirm")) || vv … [truncated]
```

#### 214. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2995-L2996` → after: `L2857-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2857-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2857-L2858) · [Before (L2995-L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L2995-L2996)

```diff
-             return tz !== bW && (bW = tz, NW.lock()), NW.update(zz, (0, Nz.k)().moveDeadzone)
-           })(zz.leftStick)) return oz = this.getHandoff(), uW = oW(oz), UW = OW(), void uz.c.handOffHeldInput();
+             return zv !== ch && (ch = zv, ih.lock()), ih.update(vv, (0, Wv.g)().moveDeadzone)
+           })(vv.leftStick)) return pv = this.getHandoff(), Ch = Wh(pv), ah = Th(), void Tv.b.handOffHeldInput();
```

#### 215. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3002` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2864) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3002)

```diff
-         if (!tz || !Ut(tz)) return null;
+         if (!zv || !(0, Xv.o)(zv)) return null;
```

#### 216. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3009` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2871) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3009)

```diff
-             ct(tz)
+             (0, Bv.k)(zv)
```

#### 217. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3019` → after: `L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2881) · [Before (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3019)

```diff
-         const tz = (0, bz.e)(),
+         const zv = (0, wv.c)(),
```

#### 218. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3038` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2900) · [Before (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3038)

```diff
-         this.restoredFromMemory = null !== sz, this.setFocus(null !== sz && void 0 !== sz ? sz : this.pickInitial(zz, {
+         this.restoredFromMemory = null !== Pv, this.setFocus(null !== Pv && void 0 !== Pv ? Pv : this.pickInitial(vv, {
```

#### 219. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3050` → after: `L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2912) · [Before (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3050)

```diff
-         Fz && aW(Fz, zz) ? this.takeOver(zz, Fz, tz) : null !== (sz = this.focused) && void 0 !== sz && sz.isConnected && LW(null, this.focused, rt(this.focused))
+         hv && kh(hv, vv) ? this.takeOver(vv, hv, zv) : null !== (Pv = this.focused) && void 0 !== Pv && Pv.isConnected && oh(null, this.focused, (0, Bv.r)(this.focused))
```

#### 220. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3054` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2916) · [Before (L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3054)

```diff
-         return null !== (tz = this.layerKey ? this.findRemembered(zz, this.layerKey) : null) && void 0 !== tz ? tz : this.pickInitial(zz, {
+         return null !== (zv = this.layerKey ? this.findRemembered(vv, this.layerKey) : null) && void 0 !== zv ? zv : this.pickInitial(vv, {
```

#### 221. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3066` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2928) · [Before (L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3066)

```diff
-           point: Fz ? rt(Fz) : null !== (sz = this.lastFocusedCentre) && void 0 !== sz ? sz : this.getLayerStartPoint(Wz),
+           point: hv ? (0, Bv.r)(hv) : null !== (Pv = this.lastFocusedCentre) && void 0 !== Pv ? Pv : this.getLayerStartPoint(Sv),
```

#### 222. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3079` → after: `L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2941) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3079)

```diff
-         return rt(null !== tz && void 0 !== tz ? tz : zz)
+         return (0, Bv.r)(null !== zv && void 0 !== zv ? zv : vv)
```

#### 223. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3086` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2948) · [Before (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3086)

```diff
-         } = tz, Oz = Fz instanceof HTMLElement && Ht(Fz, zz) ? Fz : null;
+         } = zv, gv = hv instanceof HTMLElement && (0, Xv.r)(hv, vv) ? hv : null;
```

#### 224. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3092` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2954) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3092)

```diff
-           }) : this.focusNearest(zz, Xz), void(this.focused && this.focused === tz && this.focused.isConnected && LW(null, this.focused, rt(this.focused)))
+           }) : this.focusNearest(vv, ev), void(this.focused && this.focused === zv && this.focused.isConnected && oh(null, this.focused, (0, Bv.r)(this.focused)))
```

#### 225. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3101` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2963) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3101)

```diff
-           Kz = Uz >= 0 ? Uz : PF(Xz, vz);
+           lv = Nv >= 0 ? Nv : YP(ev, dv);
```

#### 226. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3118` → after: `L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2980) · [Before (L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3118)

```diff
-         const Fz = [...zz.querySelectorAll(MW)].filter((Fz => (null === sz || void 0 === sz || !sz.has(Fz)) && (tz ? gt(Fz, zz) : Ht(Fz, zz)))),
+         const hv = [...vv.querySelectorAll(Hh)].filter((hv => (null === Pv || void 0 === Pv || !Pv.has(hv)) && (zv ? (0, Xv.z)(hv, vv) : (0, Xv.r)(hv, vv)))),
```

#### 227. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3123-L3124` → after: `L2985-L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2985-L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L2985-L2986) · [Before (L3123-L3124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3123-L3124)

```diff
-         const sz = [...zz.querySelectorAll(kW)].filter(Ut);
-         for (const Fz of [...Bt(zz), ...sz]) {
+         const Pv = [...vv.querySelectorAll(Jh)].filter(Xv.o);
+         for (const hv of [...(0, Xv.h)(vv), ...Pv]) {
```

#### 228. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3142` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3004) · [Before (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3142)

```diff
-         const Xz = zz => tz ? bt(zz) : this.getEnabledCandidates(zz);
+         const ev = vv => zv ? (0, Xv.f)(vv) : this.getEnabledCandidates(vv);
```

#### 229. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3144` → after: `L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3006) · [Before (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3144)

```diff
-         for (const Nz of Bt(zz))
+         for (const Wv of (0, Xv.h)(vv))
```

#### 230. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3147-L3151` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3009) · [Before (L3147-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3147-L3151)

```diff
-           if (sz && performance.now() - Fz < 1e4 && (zz => {
-               for (const tz of zz.querySelectorAll("[data-pad-initial-area]"))
-                 if (!vt(tz, !1)) return !0;
-               return !1
-             })(zz)) return null;
+           if (Pv && performance.now() - hv < 1e4 && (0, Xv.n)(vv)) return null;
```

#### 231. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3157` → after: `L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3015) · [Before (L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3157)

```diff
-           Kz = Uz.length > 0 ? Uz : Oz,
+           lv = Nv.length > 0 ? Nv : gv,
```

#### 232. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3165` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3023) · [Before (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3165)

```diff
-           if (Wz && Ht(Wz, zz.root)) return this.pendingFocus = null, void this.setFocus(Wz, {
+           if (Sv && (0, Xv.r)(Sv, vv.root)) return this.pendingFocus = null, void this.setFocus(Sv, {
```

#### 233. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3171-L3172` → after: `L3029-L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3029-L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3029-L3030) · [Before (L3171-L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3171-L3172)

```diff
-           Xz = !!Wz && Ht(Wz, zz.root);
-         if (!(!Xz && Wz && Wz === this.lastActivated && tz - this.lastActivatedAtMs < 5e3 && zz.root.contains(Wz) && Ut(Wz) && Kt(Wz))) {
+           ev = !!Sv && (0, Xv.r)(Sv, vv.root);
+         if (!(!ev && Sv && Sv === this.lastActivated && zv - this.lastActivatedAtMs < 5e3 && vv.root.contains(Sv) && (0, Xv.o)(Sv) && (0, Xv.v)(Sv))) {
```

#### 234. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3177` → after: `L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3035) · [Before (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3177)

```diff
-                 Fz = null !== sz && void 0 !== sz ? sz : this.restoredFromMemory ? null : this.pickDefault(zz.root);
+                 hv = null !== Pv && void 0 !== Pv ? Pv : this.restoredFromMemory ? null : this.pickDefault(vv.root);
```

#### 235. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3191` → after: `L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3049) · [Before (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3191)

```diff
-           const zz = ct(tz.root);
+           const vv = (0, Bv.k)(zv.root);
```

#### 236. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3194` → after: `L3052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3052) · [Before (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3194)

```diff
-           }) : dF(this, tz.root) || (dt(tz.root) ? this.returnToOpener(tz.root) : this.backToStrip(tz.root) || XW()), !0
+           }) : MP(this, zv.root) || ((0, Bv.f)(zv.root) ? this.returnToOpener(zv.root) : this.backToStrip(zv.root) || lh()), !0
```

#### 237. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3198` → after: `L3056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3056) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3198)

```diff
-         zz.wasPressed(sz) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Fz = null === (Wz = this.focused) || void 0 === Wz ? void 0 : Wz.getAttribute("data-pad-repeat")) && void 0 !== Fz ? Fz : null, this.confirmRepeated = zz.wokeDevice, this.confirm … [truncated]
+         vv.wasPressed(Pv) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (hv = null === (Sv = this.focused) || void 0 === Sv ? void 0 : Sv.getAttribute("data-pad-repeat")) && void 0 !== hv ? hv : null, this.confirmRepeated = vv.wokeDevice, this.confirm … [truncated]
```

#### 238. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3201` → after: `L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3059) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3201)

```diff
-           if (this.confirmPressedOn = null, zz && !this.confirmRepeated && zz === this.focused && zz.isConnected && !Kt(zz)) {
+           if (this.confirmPressedOn = null, vv && !this.confirmRepeated && vv === this.focused && vv.isConnected && !(0, Xv.v)(vv)) {
```

#### 239. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3211` → after: `L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3069) · [Before (L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3211)

```diff
-         sz && null !== this.confirmRepeatKey && zz.isHeld(tz) && (sz === this.focused && sz.isConnected && !Kt(sz) && sz.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? sz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (thi … [truncated]
+         Pv && null !== this.confirmRepeatKey && vv.isHeld(zv) && (Pv === this.focused && Pv.isConnected && !(0, Xv.v)(Pv) && Pv.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Pv.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
```

#### 240. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3215` → after: `L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3073) · [Before (L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3215)

```diff
-         if (!(0, Nz.k)().menuBackToCategories) return !1;
+         if (!(0, Wv.g)().menuBackToCategories) return !1;
```

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3225` → after: `L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3083) · [Before (L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3225)

```diff
-           return null !== (sz = this.getEnabledCandidates(zz).find((zz => ht(zz) === tz))) && void 0 !== sz ? sz : null
+           return null !== (Pv = this.getEnabledCandidates(vv).find((vv => (0, Bv.v)(vv) === zv))) && void 0 !== Pv ? Pv : null
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3230-L3231` → after: `L3088-L3089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3088-L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3088-L3089) · [Before (L3230-L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3230-L3231)

```diff
-         if ((0, JW.e)(zz) || At(zz)) return;
-         this.lastActivatedKey = null !== (tz = ht(zz)) && void 0 !== tz ? tz : this.lastActivatedKey, this.lastActivated = zz, this.lastActivatedAtMs = performance.now(), this.rememberFocus(zz);
+         if ((0, Vh.c)(vv) || (0, Bv.z)(vv)) return;
+         this.lastActivatedKey = null !== (zv = (0, Bv.v)(vv)) && void 0 !== zv ? zv : this.lastActivatedKey, this.lastActivated = vv, this.lastActivatedAtMs = performance.now(), this.rememberFocus(vv);
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3235` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3093) · [Before (L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3235)

```diff
-             Fz = new Set(sz.querySelectorAll(`[data-pad-initial-area], ${kW}`)),
+             hv = new Set(Pv.querySelectorAll(`[data-pad-initial-area], ${Jh}`)),
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3239` → after: `L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3097) · [Before (L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3239)

```diff
-             return Ht(zz, sz) ? null : null !== (Wz = this.pickDefault(sz, {
+             return (0, Xv.r)(vv, Pv) ? null : null !== (Sv = this.pickDefault(Pv, {
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3241-L3244` → after: `L3099-L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3099-L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3099-L3101) · [Before (L3241-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3241-L3244)

```diff
-             })) && void 0 !== Wz ? Wz : this.pickNewAreaStart(sz, Fz)
-           }), 5e3, (() => zz.isConnected && Kt(zz) && performance.now() - Wz < 6e4))
-         }
-         Zt(zz), jt(zz)
+             })) && void 0 !== Sv ? Sv : this.pickNewAreaStart(Pv, hv)
+           }), 5e3, (() => vv.isConnected && (0, Xv.v)(vv) && performance.now() - Sv < 6e4))
+         }(0, Bv.d)(vv), (0, Bv.g)(vv)
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3248` → after: `L3105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3105) · [Before (L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3248)

```diff
-         for (const oz of wz.D) {
+         for (const pv of av.x) {
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3251` → after: `L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3108) · [Before (L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3251)

```diff
-         const Xz = Fz ? (0, wz.k)(zz.leftStick, (0, Nz.k)().moveDeadzone) : {
+         const ev = hv ? (0, av.i)(vv.leftStick, (0, Wv.g)().moveDeadzone) : {
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3255` → after: `L3112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3112) · [Before (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3255)

```diff
-           Oz = this.stickRepeat.update((0, wz.ab)(Xz), sz);
+           gv = this.stickRepeat.update((0, av.Z)(ev), Pv);
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3276` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3133) · [Before (L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3276)

```diff
-           vz = oz ? (0, JW.e)(Oz) : null;
+           dv = pv ? (0, Vh.c)(gv) : null;
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3370` → after: `L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3227) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3370)

```diff
-         Zt(zz), this.focusWhenFound((() => "true" !== zz.dataset.padSelected ? null : tz.isConnected ? this.tabStripNav.pickContentStart(tz, this.getEnabledCandidates(sz), sz) : Wz ? this.tabStripNav.pickReplacedContentStart(zz, Wz, this.getEnabledCandidates(sz), sz) : null), 3e3 … [truncated]
+         (0, Bv.d)(vv), this.focusWhenFound((() => "true" !== vv.dataset.padSelected ? null : zv.isConnected ? this.tabStripNav.pickContentStart(zv, this.getEnabledCandidates(Pv), Pv) : Sv ? this.tabStripNav.pickReplacedContentStart(vv, Sv, this.getEnabledCandidates(Pv), Pv) : nul … [truncated]
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3388` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3245) · [Before (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3388)

```diff
-         const sz = (0, wz.k)(zz.rightStick, .2);
+         const Pv = (0, av.i)(vv.rightStick, .2);
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3398` → after: `L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3255) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3398)

```diff
-           const Oz = null !== (Wz = ez(this.focused, Xz, tz.root)) && void 0 !== Wz ? Wz : Gz(tz.root, Xz);
+           const gv = null !== (Sv = Dv(this.focused, ev, zv.root)) && void 0 !== Sv ? Sv : Vv(zv.root, ev);
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3406-L3407` → after: `L3263-L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3263-L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3263-L3264) · [Before (L3406-L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3406-L3407)

```diff
-     var SW = sz(7731);
-     var VW = sz(8246);
+     var uh = Pv(7906);
+     var vS = Pv(8421);
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3478-L3480` → after: `L3335-L3337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3335-L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3335-L3337) · [Before (L3478-L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3478-L3480)

```diff
-           return "function" === typeof(null === tz || void 0 === tz ? void 0 : tz.playEffect) ? tz : null
-         })(Oz.e.getActiveGamepad()),
-         isVibrationOn: () => (0, Nz.k)().vibration,
+           return "function" === typeof(null === zv || void 0 === zv ? void 0 : zv.playEffect) ? zv : null
+         })(gv.f.getActiveGamepad()),
+         isVibrationOn: () => (0, Wv.g)().vibration,
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3486-L3490` → after: `L3343-L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3343-L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3343-L3347) · [Before (L3486-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3486-L3490)

```diff
-     var zX = sz(7739),
-       tX = sz(2662),
-       sX = sz(119),
-       FX = sz(44),
-       WX = sz(624);
+     var eS = Pv(7910),
+       gS = Pv(2702),
+       pS = Pv(86),
+       dS = Pv(39),
+       NS = Pv(650);
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3500` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3357) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3500)

```diff
-         return null === sz || this.deps.readReportedVisitId() === sz ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(sz), this.deps.Iw(tz, this.deps.getInputType()), "reported") : "notReady"
+         return null === Pv || this.deps.readReportedVisitId() === Pv ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Pv), this.deps.yw(zv, this.deps.getInputType()), "reported") : "notReady"
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3504-L3508` → after: `L3361-L3365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3361-L3365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3361-L3365) · [Before (L3504-L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3504-L3508)

```diff
-     var oX = sz(1319),
-       vX = sz(1664),
-       UX = sz(601),
-       KX = sz(1416),
-       uX = sz(1237);
+     var WS = Pv(1336),
+       wS = Pv(1692),
+       aS = Pv(635),
+       sS = Pv(1439),
+       CS = Pv(1234);
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3510` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3367) · [Before (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3510)

```diff
-         translationKey: `controller:${zz}`
+         translationKey: `controller:${vv}`
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3572-L3573` → after: `L3429-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3429-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3429-L3430) · [Before (L3572-L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3572-L3573)

```diff
-         const Fz = null !== (sz = wX[zz][tz]) && void 0 !== sz ? sz : bX[tz];
-         return "string" === typeof Fz ? Fz : (0, Wz.v)(uX.g.get().getCurrentLanguageCode(), Fz.translationKey)
+         const hv = null !== (Pv = GS[vv][zv]) && void 0 !== Pv ? Pv : cS[zv];
+         return "string" === typeof hv ? hv : (0, Sv.r)(CS.f.get().getCurrentLanguageCode(), hv.translationKey)
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3581-L3583` → after: `L3438-L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3438-L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3438-L3440) · [Before (L3581-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3581-L3583)

```diff
-         const Wz = (0, bz.C)(),
-           Xz = null !== sz && void 0 !== sz ? sz : Wz,
-           Oz = (0, zX.h)(Xz, tz);
+         const Sv = (0, wv.A)(),
+           ev = null !== Pv && void 0 !== Pv ? Pv : Sv,
+           gv = (0, eS.c)(ev, zv);
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3589-L3590` → after: `L3446-L3447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3446-L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3446-L3447) · [Before (L3589-L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3589-L3590)

```diff
-             "--pad-glyph-mask": `url(${Oz})`,
-             "--pad-glyph-aspect": (0, zX.e)(Xz, tz)
+             "--pad-glyph-mask": `url(${gv})`,
+             "--pad-glyph-aspect": (0, eS.b)(ev, zv)
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3594` → after: `L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3451) · [Before (L3594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3594)

```diff
-     var HX = sz(1831);
+     var fS = Pv(1858);
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3601` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3458) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3601)

```diff
-       } = (0, Wz.B)();
+       } = (0, Sv.x)();
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3613` → after: `L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3470) · [Before (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3613)

```diff
-             }, ` ${tz.description}`] : [{
+             }, ` ${zv.description}`] : [{
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3623` → after: `L3480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3480) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3623)

```diff
-     var PX = sz(8253);
+     var YS = Pv(8424);
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3631` → after: `L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3488) · [Before (L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3631)

```diff
-           "--pad-drop-stack-hold": `${tz.holdMs}ms`
+           "--pad-drop-stack-hold": `${zv.holdMs}ms`
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3638-L3641` → after: `L3495-L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3495-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3495-L3498) · [Before (L3638-L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3638-L3641)

```diff
-     var YX = sz(8263),
-       xX = sz(8266),
-       mX = sz(8271),
-       JX = sz(8261);
+     var OS = Pv(8446),
+       DS = Pv(8452),
+       KS = Pv(8461),
+       VS = Pv(8438);
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3645` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3502) · [Before (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3645)

```diff
-         } = (0, vz.h)(["gameState"]), tz = (0, bz.B)(), [Fz, Wz] = (0, Mz.useState)(!1), [Xz, Oz] = (0, Mz.useState)(!1);
+         } = (0, dv.i)(["gameState"]), zv = (0, wv.z)(), [hv, Sv] = (0, Iv.useState)(!1), [ev, gv] = (0, Iv.useState)(!1);
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3652` → after: `L3509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3509) · [Before (L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3652)

```diff
-           return (UX.p ? Promise.all([sz.e(69), sz.e(259), sz.e(199), sz.e(217), sz.e(216), sz.e(84)]).then((() => sz(39680))).then((zz => zz.startWasmPadGameplay)) : Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(94), sz.e(72), sz.e(71), sz.e(70), sz.e(218), sz.e(182), sz.e(2 … [truncated]
+           return (aS.r ? Promise.all([Pv.e(70), Pv.e(261), Pv.e(199), Pv.e(218), Pv.e(217), Pv.e(85)]).then((() => Pv(39847))).then((vv => vv.startWasmPadGameplay)) : Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(95), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(219), Pv.e(182), Pv.e(2 … [truncated]
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3678` → after: `L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3535) · [Before (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3678)

```diff
-         } = (0, Wz.B)(), tz = (0, bz.B)(), {
+         } = (0, Sv.x)(), zv = (0, wv.z)(), {
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3681` → after: `L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3538) · [Before (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3681)

```diff
-         } = (0, vz.h)(["gameState", "isUiHidden"]), {
+         } = (0, dv.i)(["gameState", "isUiHidden"]), {
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3683-L3684` → after: `L3540-L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3540-L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3540-L3541) · [Before (L3683-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3683-L3684)

```diff
-         } = (0, Nz.t)(), Oz = (0, PX.i)(), oz = (0, PX.j)(), [Uz, uz] = (0, Mz.useState)(mX.c);
-         return (0, KX.g)(JX.u, uz), !tz || Xz || Fz || "inGame" !== sz || !Oz && !Uz ? null : (0, Qz.jsxs)("div", {
+         } = (0, Wv.k)(), gv = (0, YS.j)(), pv = (0, YS.n)(), [Nv, Tv] = (0, Iv.useState)(KS.e);
+         return (0, sS.g)(VS.q, Tv), !zv || ev || hv || "inGame" !== Pv || !gv && !Nv ? null : (0, Av.jsxs)("div", {
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3709` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3566) · [Before (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3709)

```diff
-         } = (0, Wz.B)(), tz = (0, bz.B)(), {
+         } = (0, Sv.x)(), zv = (0, wv.z)(), {
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3712-L3713` → after: `L3569-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3569-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3569-L3570) · [Before (L3712-L3713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3712-L3713)

```diff
-         } = (0, vz.h)(["gameState", "isUiHidden"]), [Xz, Oz] = (0, Mz.useState)(YX.c);
-         return (0, KX.g)(JX.s, Oz), tz && !Fz && "inGame" === sz && Xz ? (0, Qz.jsxs)("div", {
+         } = (0, dv.i)(["gameState", "isUiHidden"]), [ev, gv] = (0, Iv.useState)(OS.d);
+         return (0, sS.g)(VS.m, gv), zv && !hv && "inGame" === Pv && ev ? (0, Av.jsxs)("div", {
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3725` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3582) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3725)

```diff
-         } = (0, Wz.B)(), tz = (0, bz.B)(), {
+         } = (0, Sv.x)(), zv = (0, wv.z)(), {
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3728` → after: `L3585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3585) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3728)

```diff
-         } = (0, vz.h)(["gameState", "isUiHidden"]), {
+         } = (0, dv.i)(["gameState", "isUiHidden"]), {
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3730-L3731` → after: `L3587-L3588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3587-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3587-L3588) · [Before (L3730-L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3730-L3731)

```diff
-         } = (0, Nz.t)(), [Oz, oz] = (0, Mz.useState)(xX.d);
-         return (0, KX.g)(JX.p, oz), tz && !Fz && "inGame" === sz && Oz ? (0, Qz.jsxs)("div", {
+         } = (0, Wv.k)(), [gv, pv] = (0, Iv.useState)(DS.e);
+         return (0, sS.g)(VS.j, pv), zv && !hv && "inGame" === Pv && gv ? (0, Av.jsxs)("div", {
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3740-L3744` → after: `L3597-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3597-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3597-L3601) · [Before (L3740-L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3740-L3744)

```diff
-     var GX = sz(8275),
-       TX = sz(1884),
-       cX = sz(2290),
-       jX = sz(7713);
-     const AX = zz => zz && !(0, GX.b)(TX.e.get("shopInfo")),
+     var qS = Pv(8467),
+       IS = Pv(1903),
+       QS = Pv(2324),
+       ZS = Pv(7894);
+     const AS = vv => vv && !(0, qS.b)(IS.c.get("shopInfo")),
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3746-L3748` → after: `L3603-L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3603-L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3603-L3605) · [Before (L3746-L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3746-L3748)

```diff
-         const zz = "inGame" === (0, vz.h)(["gameState"]).gameState;
-         return (0, cX.d)("shopInfo", (() => {
-           (0, jX.h)(AX(zz))
+         const vv = "inGame" === (0, dv.i)(["gameState"]).gameState;
+         return (0, QS.e)("shopInfo", (() => {
+           (0, ZS.i)(AS(vv))
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3750` → after: `L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3607) · [Before (L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3750)

```diff
-           (0, jX.h)(AX(zz))
+           (0, ZS.i)(AS(vv))
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3756` → after: `L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3613) · [Before (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3756)

```diff
-         } = (0, Wz.B)(), {
+         } = (0, Sv.x)(), {
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3758-L3760` → after: `L3615-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3615-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3615-L3617) · [Before (L3758-L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3758-L3760)

```diff
-         } = (0, Nz.t)();
-         (0, bz.C)();
-         const sz = (0, cs.i)();
+         } = (0, Wv.k)();
+         (0, wv.A)();
+         const Pv = (0, Zz.m)();
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3762` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3619) · [Before (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3762)

```diff
-           const zz = uz.c.register({
+           const vv = Tv.b.register({
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3773-L3774` → after: `L3630-L3631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3630-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3630-L3631) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3773-L3774)

```diff
-           const sz = (0, lt.j)((() => {
-               "inventory" !== uz.c.getActiveConsumerName() && Es.forgetSurface()
+           const Pv = (0, kv.k)((() => {
+               "inventory" !== Tv.b.getActiveConsumerName() && SP.forgetSurface()
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3778` → after: `L3635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3635) · [Before (L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3778)

```diff
-               (0, bz.k)() && fz(tz) && tz.closest(ws) && (0, lt.i)() && (0, lt.o)(tz)
+               (0, wv.k)() && (0, ov.g)(zv) && zv.closest(jz) && (0, kv.h)() && (0, kv.r)(zv)
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3806` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3663) · [Before (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3806)

```diff
-                   children: zz(`controller:${Wz}`)
+                   children: vv(`controller:${Sv}`)
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3891` → after: `L3748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3748) · [Before (L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3891)

```diff
-         const sz = ((zz, tz) => [...nX[zz], tz ? iX : kX])(zz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const Pv = ((vv, zv) => [...rS[vv], zv ? ES : JS])(vv, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3934` → after: `L3791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3791) · [Before (L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3934)

```diff
-         return 1 === Fz.length ? Fz : zz
+         return 1 === hv.length ? hv : vv
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3936` → after: `L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3793) · [Before (L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3936)

```diff
-     var FO = sz(8180);
+     var de = Pv(8338);
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3961` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3818) · [Before (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3961)

```diff
-       oO = ["qo", "nameTag"],
+       We = ["el", "nameTag"],
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3977` → after: `L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3834) · [Before (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L3977)

```diff
-         (0, xF.g)(zz) ? (0, xF.c)().close(): (qW.noteChosenStop(zz), zz.blur())
+         (0, DP.j)(vv) ? (0, DP.e)().close(): (Xh.noteChosenStop(vv), vv.blur())
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4000` → after: `L3857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3857) · [Before (L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4000)

```diff
-             Xt(tz.target);
+             (0, ov.e)(zv.target);
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4003` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3860) · [Before (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4003)

```diff
-             Wt(tz.target, " ");
+             (0, ov.f)(zv.target, " ");
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4006` → after: `L3863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3863) · [Before (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4006)

```diff
-             Wt(tz.target, "\n");
+             (0, ov.f)(zv.target, "\n");
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4009` → after: `L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3866) · [Before (L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4009)

```diff
-             Ot(tz.target, -1);
+             (0, ov.k)(zv.target, -1);
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4012` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3869) · [Before (L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4012)

```diff
-             Ot(tz.target, 1);
+             (0, ov.k)(zv.target, 1);
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4042` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3899) · [Before (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4042)

```diff
-             (0, xF.g)(tz.target) && (0, xF.c)().selectNextChannel()
+             (0, DP.j)(zv.target) && (0, DP.e)().selectNextChannel()
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4050` → after: `L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3907) · [Before (L4050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4050)

```diff
-         this.host.hide(), (0, xF.g)(sz) ? (0, xF.c)().submit() : (qW.noteChosenStop(sz), null === (zz = (tz = (0, xF.d)(sz)).submit) || void 0 === zz || zz.call(tz), document.activeElement === sz && sz.blur())
+         this.host.hide(), (0, DP.j)(Pv) ? (0, DP.e)().submit() : (Xh.noteChosenStop(Pv), null === (vv = (zv = (0, DP.h)(Pv)).submit) || void 0 === vv || vv.call(zv), document.activeElement === Pv && Pv.blur())
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4064` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3921) · [Before (L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4064)

```diff
-         Wt(tz, sO(zz, sz, Fz)), this.host.setState({
+         (0, ov.f)(zv, pe(vv, Pv, hv)), this.host.setState({
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4074-L4075` → after: `L3931-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3931-L3932) · [Before (L4074-L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4074-L4075)

```diff
-           sz && (tz.setSelectionRange(0, tz.value.length), Wt(tz, sz))
-         } else XO.claim(performance.now()) && (this.host.hide(), (0, xF.c)().sendLine(this.phraseTexts[zz]))
+           Pv && (zv.setSelectionRange(0, zv.value.length), (0, ov.f)(zv, Pv))
+         } else le.claim(performance.now()) && (this.host.hide(), (0, DP.e)().sendLine(this.phraseTexts[vv]))
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4088` → after: `L3946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3946) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4088)

```diff
-         this.host = zz, this.editor = tz, this.lastDirection = null, this.navRepeat = new wz.c((0, Dz.e)(NO)), this.commandRepeats = new Map(dX.filter((zz => {
+         this.host = vv, this.editor = zv, this.lastDirection = null, this.navRepeat = new av.c((0, sv.d)(ce)), this.commandRepeats = new Map(MS.filter((vv => {
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4097` → after: `L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3955) · [Before (L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4097)

```diff
-           return [tz, (0, Dz.e)(bO)]
+           return [zv, (0, sv.d)(Ge)]
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4125` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3983) · [Before (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4125)

```diff
-         if (zz.wasPressed(Fz)) return uz.c.consumeButton(Fz), void this.host.open(tz);
+         if (vv.wasPressed(hv)) return Tv.b.consumeButton(hv), void this.host.open(zv);
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4128` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3986) · [Before (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4128)

```diff
-         if (this.lastDirection = Wz, !Xz || (0, xF.g)(tz)) return;
+         if (this.lastDirection = Sv, !ev || (0, DP.j)(zv)) return;
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4130` → after: `L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3988) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4130)

```diff
-         KO(tz), Oz && uz.c.handOffHeldInput()
+         se(zv), gv && Tv.b.handOffHeldInput()
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4134` → after: `L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L3992) · [Before (L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4134)

```diff
-         if ("Up" === zz && 0 === tz.focus.row && "chat" === tz.kind) return (0, xF.c)().stepHistory(), void this.host.setState({
+         if ("Up" === vv && 0 === zv.focus.row && "chat" === zv.kind) return (0, DP.e)().stepHistory(), void this.host.setState({
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4166` → after: `L4024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4024) · [Before (L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4166)

```diff
-         for (const tz of wz.D)
+         for (const zv of av.x)
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4168` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4026) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4168)

```diff
-         return (0, wz.ab)((0, wz.k)(zz.leftStick, (0, Nz.k)().moveDeadzone))
+         return (0, av.Z)((0, av.i)(vv.leftStick, (0, Wv.g)().moveDeadzone))
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4184` → after: `L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4042) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4184)

```diff
-         tz && Uz.o.Yg(nz.d, zz.visible)
+         zv && Nv.j.zC(ie.b, vv.visible)
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4192` → after: `L4050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4050) · [Before (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4192)

```diff
-         const zz = uz.c.register({
+         const vv = Tv.b.register({
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4194` → after: `L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4052) · [Before (L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4194)

```diff
-             isActive: () => this.state.visible || fz(document.activeElement),
+             isActive: () => this.state.visible || (0, ov.g)(document.activeElement),
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4205` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4063) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4205)

```diff
-             fz(tz) && (tz === this.pendingChatInput || (0, bz.k)() ? this.open(tz) : this.state.visible && tz !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, ov.g)(zv) && (zv === this.pendingChatInput || (0, wv.k)() ? this.open(zv) : this.state.visible && zv !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4213` → after: `L4071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4071) · [Before (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4213)

```diff
-             zz.isTrusted && this.state.visible && (zz => !zz.repeat && !gO.has(zz.key) && !(0, FO.d)(zz.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(zz.key))(zz) && this.hide()
+             vv.isTrusted && this.state.visible && (vv => !vv.repeat && !fe.has(vv.key) && !(0, de.e)(vv.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(vv.key))(vv) && this.hide()
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4222` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4080) · [Before (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4222)

```diff
-         const Xz = Uz.o.subscribe(JX.d, (() => {
+         const ev = Nv.j.subscribe(VS.b, (() => {
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4225` → after: `L4083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4083) · [Before (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4225)

```diff
-           Oz = Uz.o.subscribe(nz.e, (zz => {
+           gv = Nv.j.subscribe(ie.d, (vv => {
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4229` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4087) · [Before (L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4229)

```diff
-           zz(), document.removeEventListener("focusin", tz, !0), document.removeEventListener("focusout", sz, !0), window.removeEventListener("keydown", Fz, !0), window.removeEventListener("resize", Wz), Uz.o.unsubscribe(Xz), Uz.o.unsubscribe(Oz), this.clearPendingChat(), this.hi … [truncated]
+           vv(), document.removeEventListener("focusin", zv, !0), document.removeEventListener("focusout", Pv, !0), window.removeEventListener("keydown", hv, !0), window.removeEventListener("resize", Sv), Nv.j.unsubscribe(ev), Nv.j.unsubscribe(gv), this.clearPendingChat(), this.hi … [truncated]
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4233` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4091) · [Before (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4233)

```diff
-         const zz = (0, xF.c)();
+         const vv = (0, DP.e)();
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4239` → after: `L4097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4097) · [Before (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4239)

```diff
-         fz(zz) ? (document.activeElement !== zz && zz.focus(), document.activeElement === zz && this.open(zz)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", zz)
+         (0, ov.g)(vv) ? (document.activeElement !== vv && vv.focus(), document.activeElement === vv && this.open(vv)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", vv)
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4244-L4246` → after: `L4102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4102) · [Before (L4244-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4244-L4246)

```diff
-         this.restoreInputMode(), (zz => {
-           Ez(zz) && 0 === zz.selectionStart && 0 === zz.selectionEnd && zz.setSelectionRange(zz.value.length, zz.value.length)
-         })(zz), this.savedInputMode = zz.getAttribute("inputmode"), zz.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, ov.n)(vv), this.savedInputMode = vv.getAttribute("inputmode"), vv.setAttribute("inputmode", "none");
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4251-L4252` → after: `L4107-L4108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4107-L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4107-L4108) · [Before (L4251-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4251-L4252)

```diff
-           kind: (0, xF.g)(zz) ? "chat" : null !== (tz = (0, xF.d)(zz).kind) && void 0 !== tz ? tz : null,
-           accentsFirst: (Fz = uX.g.get().getCurrentLanguageCode(), aX.has(Fz)),
+           kind: (0, DP.j)(vv) ? "chat" : null !== (zv = (0, DP.h)(vv).kind) && void 0 !== zv ? zv : null,
+           accentsFirst: (hv = CS.f.get().getCurrentLanguageCode(), kS.has(hv)),
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4279` → after: `L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4135) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4279)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(zz) : fz(tz) && this.padInput.onHiddenFrame(zz, tz)
+         this.state.visible ? this.padInput.onVisibleFrame(vv) : (0, ov.g)(zv) && this.padInput.onHiddenFrame(vv, zv)
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4295` → after: `L4151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4151) · [Before (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4295)

```diff
-     var BO = sz(8283);
+     var Ye = Pv(8474);
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4313` → after: `L4169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4169) · [Before (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4313)

```diff
-         qo: "controller:keyboardTargetBookTitle"
+         el: "controller:keyboardTargetBookTitle"
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4345` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4201) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4345)

```diff
-         } = (0, Wz.B)(), sz = (() => {
+         } = (0, Sv.x)(), Pv = (() => {
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4350-L4351` → after: `L4206-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4206-L4207) · [Before (L4350-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4350-L4351)

```diff
-         })(), Fz = (0, bz.B)(), Xz = (0, Mz.useRef)(null);
-         (0, Nz.t)(), (0, bz.C)(), (0, Mz.useEffect)((() => {
+         })(), hv = (0, wv.z)(), ev = (0, Iv.useRef)(null);
+         (0, Wv.k)(), (0, wv.A)(), (0, Iv.useEffect)((() => {
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4361` → after: `L4217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4217) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4361)

```diff
-         const vz = null !== (zz = null === oz || void 0 === oz ? void 0 : oz.value) && void 0 !== zz ? zz : "",
+         const dv = null !== (vv = null === pv || void 0 === pv ? void 0 : pv.value) && void 0 !== vv ? vv : "",
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4374` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4230) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4374)

```diff
-             return null !== (sz = Uz[tz]) && void 0 !== sz ? sz : ""
+             return null !== (Pv = Nv[zv]) && void 0 !== Pv ? Pv : ""
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4418` → after: `L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4274) · [Before (L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4418)

```diff
-           className: hz()(xF.n, "top" === sz.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: Zv()(DP.o, "top" === Pv.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4423` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4279) · [Before (L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4423)

```diff
-             "--pad-keyboard-height": `${sz.maxHeightPx}px`
+             "--pad-keyboard-height": `${Pv.maxHeightPx}px`
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4498` → after: `L4354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4354) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4498)

```diff
-         } = zt(tz), Uz = "password" === tz.type ? "\u2022".repeat(Oz.length) : Oz;
+         } = (0, ov.p)(zv), Nv = "password" === zv.type ? "\u2022".repeat(gv.length) : gv;
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4526-L4527` → after: `L4382-L4383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4382-L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4382-L4383) · [Before (L4526-L4527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4526-L4527)

```diff
-     var eO = sz(1358),
-       ZO = sz(3088);
+     var te = Pv(1374),
+       qe = Pv(3172);
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4544` → after: `L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4400) · [Before (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4544)

```diff
-         for (const sz of zz) Ut(sz) && tz.push(sz.getBoundingClientRect());
+         for (const Pv of vv)(0, Xv.o)(Pv) && zv.push(Pv.getBoundingClientRect());
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4555` → after: `L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4411) · [Before (L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4555)

```diff
-         if (((0, ZO.h)(null === tz || void 0 === tz ? void 0 : tz.layer.kind, (0, ZO.i)()) || Fz) && sz.push(...yO(document.querySelectorAll(cO.join(",")))), 0 === sz.length) return null;
+         if (((0, qe.i)(null === zv || void 0 === zv ? void 0 : zv.layer.kind, (0, qe.l)()) || hv) && Pv.push(...He(document.querySelectorAll(Ze.join(",")))), 0 === Pv.length) return null;
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4559` → after: `L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4415) · [Before (L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4559)

```diff
-         } = zz.getBoundingClientRect(), Oz = window.innerHeight - 8, oz = (0, ZO.n)(Oz, {
+         } = vv.getBoundingClientRect(), gv = window.innerHeight - 8, pv = (0, qe.o)(gv, {
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4567` → after: `L4423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4423) · [Before (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4567)

```diff
-           sz = zz ? `${Math.round(window.innerHeight-zz.getBoundingClientRect().top)}px` : "";
+           Pv = vv ? `${Math.round(window.innerHeight-vv.getBoundingClientRect().top)}px` : "";
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4573` → after: `L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4429) · [Before (L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4573)

```diff
-         } = (0, Wz.B)(), {
+         } = (0, Sv.x)(), {
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4575-L4576` → after: `L4431-L4432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4431-L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4431-L4432) · [Before (L4575-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4575-L4576)

```diff
-         } = (0, Nz.t)(), sz = (0, bz.B)(), [Fz, Xz] = (0, Mz.useState)(!1), [Oz, Uz] = (0, Mz.useState)([]), [Dz, gz] = (0, Mz.useState)(null), Hz = (0, Mz.useRef)(null), Bz = (0, Mz.useRef)(null);
-         (0, KX.g)(nz.d, (zz => {
+         } = (0, Wv.k)(), Pv = (0, wv.z)(), [hv, ev] = (0, Iv.useState)(!1), [gv, Nv] = (0, Iv.useState)([]), [sv, Cv] = (0, Iv.useState)(null), iv = (0, Iv.useRef)(null), cv = (0, Iv.useRef)(null);
+         (0, sS.g)(ie.b, (vv => {
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4578` → after: `L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4434) · [Before (L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4578)

```diff
-         })), (0, KX.g)(ZO.l, (() => {
+         })), (0, sS.g)(qe.n, (() => {
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4589-L4590` → after: `L4445-L4446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4445-L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4445-L4446) · [Before (L4589-L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4589-L4590)

```diff
-                 const tz = uz.c.getActiveConsumerName(),
-                   sz = (0, ZO.d)();
+                 const zv = Tv.b.getActiveConsumerName(),
+                   Pv = (0, qe.g)();
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4593` → after: `L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4449) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4593)

```diff
-                     tz = "emoteWheel" === sz && "wheel" === (0, Nz.k)().emoteButton || !(0, wz.I)(uz.c.getLastFrame().values, zz) ? {
+                     zv = "emoteWheel" === Pv && "wheel" === (0, Wv.g)().emoteButton || !(0, av.C)(Tv.b.getLastFrame().values, vv) ? {
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4601` → after: `L4457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4457) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4601)

```diff
-                     glyphs: [(0, Kz.r)(zz)],
+                     glyphs: [(0, lv.t)(vv)],
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4609` → after: `L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4465) · [Before (L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4609)

```diff
-                 if (!Fz || "focus" !== tz && "cursor" !== tz) return (0, ZO.b)(Kz.f);
+                 if (!hv || "focus" !== zv && "cursor" !== zv) return (0, qe.d)(lv.f);
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4615-L4616` → after: `L4471-L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4471-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4471-L4472) · [Before (L4615-L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4615-L4616)

```diff
-                   Oz = Mt(Fz.root),
-                   oz = Oz ? !Kt(Oz) : Boolean(Fz.layer.close),
+                   gv = (0, Bv.q)(hv.root),
+                   pv = gv ? !(0, Xv.v)(gv) : Boolean(hv.layer.close),
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4640` → after: `L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4496) · [Before (L4640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4640)

```diff
-                 gz && (0, JW.e)(gz) ? Wz.push({
+                 Cv && (0, Vh.c)(Cv) ? Sv.push({
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4643` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4499) · [Before (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4643)

```diff
-                 }) : gz && At(gz) ? Wz.push({
+                 }) : Cv && (0, Bv.z)(Cv) ? Sv.push({
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4666-L4667` → after: `L4522-L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4522-L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4522-L4523) · [Before (L4666-L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4666-L4667)

```diff
-                 const Pz = vz.b.get("openEverythingMenuName");
-                 return "inGame" === vz.b.get("gameState") && "popup" !== Fz.layer.kind && null !== Pz && ((0, FF.m)(Pz) ? Wz.push(...TO("leaderboard", "controller:menusClose")) : Pz !== sF.r.LOBBY_LEADERBOARD && Wz.push(...TO("leaderboard", "controller:menusLobby"))), Wz.push({
+                 const Gv = dv.c.get("openEverythingMenuName");
+                 return "inGame" === dv.c.get("gameState") && "popup" !== hv.layer.kind && null !== Gv && ((0, dP.k)(Gv) ? Sv.push(...Qe("leaderboard", "controller:menusClose")) : Gv !== pP.o.LOBBY_LEADERBOARD && Sv.push(...Qe("leaderboard", "controller:menusLobby"))), Sv.push({
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4673` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4529) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4673)

```diff
-               Fz = ((zz, tz) => `${zz.map((zz=>`${zz.glyphs.join("+")}:${zz.labelKey}`)).join("|")}@${tz}`)(tz, sz);
+               hv = ((vv, zv) => `${vv.map((vv=>`${vv.glyphs.join("+")}:${vv.labelKey}`)).join("|")}@${zv}`)(zv, Pv);
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4706-L4707` → after: `L4562-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4562-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4562-L4564) · [Before (L4706-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4706-L4707)

```diff
-       },
-       QO = [ot, "label", "[data-pad-slider]"].join(","),
+       };
+     var Je = Pv(1697);
+     const Ee = [Xv.d, "label", "[data-pad-slider]"].join(","),
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4714` → after: `L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4571) · [Before (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4714)

```diff
-           const sz = document.documentElement.classList.contains(bz.r) ? tz[tz.length - 1] : void 0;
+           const Pv = document.documentElement.classList.contains(wv.s) ? zv[zv.length - 1] : void 0;
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4742` → after: `L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4599) · [Before (L4742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4742)

```diff
-           })) && cz(sz, zz, tz) ? sz : null
+           })) && Rv(Pv, vv, zv) ? Pv : null
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4751` → after: `L4608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4608) · [Before (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4751)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4757` → after: `L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4614) · [Before (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4757)

```diff
-           const zz = uz.c.register({
+           const vv = Tv.b.register({
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4766` → after: `L4623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4623) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4766)

```diff
-               wakePressActs: zz => (0, uz.g)(zz) || zz === (0, Kz.f)("menuConfirm") && yt((0, bz.e)())
+               wakePressActs: vv => (0, Tv.d)(vv) || vv === (0, lv.f)("menuConfirm") && (0, Bv.A)((0, wv.c)())
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4772` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4629) · [Before (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4772)

```diff
-             sz = Uz.o.subscribe("appManagerUpdated|activeInputDevice", (zz => {
+             Pv = Nv.j.subscribe("appManagerUpdated|activeInputDevice", (vv => {
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4776` → after: `L4633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4633) · [Before (L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4776)

```diff
-             zz(), tz(), Uz.o.unsubscribe(sz), this.deactivate()
+             vv(), zv(), Nv.j.unsubscribe(Pv), this.deactivate()
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4792` → after: `L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4649) · [Before (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4792)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Yg()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.zC()
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4813` → after: `L4670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4670) · [Before (L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4813)

```diff
-           }, this.Yg())
+           }, this.zC())
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4820` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4677) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4820)

```diff
-           const sz = zz.wokeDevice ? (0, bz.e)() : null;
+           const Pv = vv.wokeDevice ? (0, wv.c)() : null;
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4823` → after: `L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4680) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4823)

```diff
-           if (zz.wasPressed(Fz)) return uz.c.consumeButton(Fz), void DW(this.getHandoff(null));
+           if (vv.wasPressed(hv)) return Tv.b.consumeButton(hv), void mh(this.getHandoff(null));
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4827-L4828` → after: `L4684-L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4684-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4684-L4685) · [Before (L4827-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4827-L4828)

```diff
-           if (zz.wasPressed((0, Kz.f)("menuBack"))) return ct(tz.root) || dt(tz.root) || XW(), void this.Yg();
-           if (aF(null, zz, tz)) return zz.wasReleased(Wz) && this.press && (this.updateHit(!1), this.updateConfirm(zz, Wz)), void this.Yg();
+           if (vv.wasPressed((0, lv.f)("menuBack"))) return (0, Bv.k)(zv.root) || (0, Bv.f)(zv.root) || lh(), void this.zC();
+           if (kP(null, vv, zv)) return vv.wasReleased(Sv) && this.press && (this.updateHit(!1), this.updateConfirm(vv, Sv)), void this.zC();
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4840` → after: `L4697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4697) · [Before (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4840)

```diff
-             oz = (0, Nz.k)().moveDeadzone,
+             pv = (0, Wv.g)().moveDeadzone,
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4842` → after: `L4699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4699) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4842)

```diff
-               const sz = (0, wz.k)(zz, rz(tz));
+               const Pv = (0, av.i)(vv, mv(zv));
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4848` → after: `L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4705) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4848)

```diff
-             if (!vz && !mz(zz.rightStick) && !tz && !sz && !zz.wokeDevice) return void this.Yg();
+             if (!dv && !Fv(vv.rightStick) && !zv && !Pv && !vv.wokeDevice) return void this.zC();
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4851` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4708) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4851)

```diff
-             }, zz.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Yg()
+             }, vv.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.zC()
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4860` → after: `L4717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4717) · [Before (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4860)

```diff
-             cursorSpeedPercent: (0, Nz.k)().cursorSpeed,
+             cursorSpeedPercent: (0, Wv.g)().cursorSpeed,
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4869` → after: `L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4726) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4869)

```diff
-           (Dz || gz || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Dz), this.updateConfirm(zz, Wz), this.updateSecondary(zz, Xz), this.updateScroll(zz, tz), this.Yg()
+           (sv || Cv || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(sv), this.updateConfirm(vv, Sv), this.updateSecondary(vv, ev), this.updateScroll(vv, zv), this.zC()
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4875` → after: `L4732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4732) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4875)

```diff
-               key: (0, RF.q)(zz.layer),
+               key: (0, zh.p)(vv.layer),
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4895` → after: `L4752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4752) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4895)

```diff
-           const Fz = null !== sz && void 0 !== sz ? sz : qW.pickInitial(tz.root, {
+           const hv = null !== Pv && void 0 !== Pv ? Pv : Xh.pickInitial(zv.root, {
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4900` → after: `L4757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4757) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4900)

```diff
-           Fz && (this.pendingPageStart = null, this.jumpTo(rt(Fz)))
+           hv && (this.pendingPageStart = null, this.jumpTo((0, Bv.r)(hv)))
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4910` → after: `L4767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4767) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4910)

```diff
-             Fz = sz && zz.order <= this.layerOrder ? sz : qW.getLayerStartPoint(zz.root);
+             hv = Pv && vv.order <= this.layerOrder ? Pv : Xh.getLayerStartPoint(vv.root);
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4917` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4774) · [Before (L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4917)

```diff
-             element: null !== (tz = this.interactive) && void 0 !== tz ? tz : this.findDraggedSliderNearby(),
+             element: null !== (zv = this.interactive) && void 0 !== zv ? zv : this.findDraggedSliderNearby(),
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4928` → after: `L4785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4785) · [Before (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4928)

```diff
-           return sz >= tz.top - 40 && sz <= tz.bottom + 40 ? zz : null
+           return Pv >= zv.top - 40 && Pv <= zv.bottom + 40 ? vv : null
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4932-L4933` → after: `L4789-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4789-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4789-L4790) · [Before (L4932-L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4932-L4933)

```diff
-           const tz = wz.D.find((tz => zz.wasPressed(tz)));
-           return !!tz && (sz = this.getHandoff(tz), uW = oW(sz), UW = null, NW.lock(), uz.c.handOffHeldInput(), !0);
+           const zv = av.x.find((zv => vv.wasPressed(zv)));
+           return !!zv && (Pv = this.getHandoff(zv), Ch = Wh(Pv), ah = null, ih.lock(), Tv.b.handOffHeldInput(), !0);
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4947` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4804) · [Before (L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4947)

```diff
-           const sz = (0, Nz.k)().cursorMagnetism && !(0, az.c)(zz) && !zz.closest("[data-pad-slider]"),
+           const Pv = (0, Wv.g)().cursorMagnetism && !(0, Je.c)(vv) && !vv.closest("[data-pad-slider]"),
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4965-L4966` → after: `L4822-L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4822-L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4822-L4823) · [Before (L4965-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4965-L4966)

```diff
-             })(sz) ? sz : null;
-           if (Fz !== this.hit) return Ct(this.hit, Fz, tz), this.hit = Fz, void this.setInteractive(Fz ? (zz => {
+             })(Pv) ? Pv : null;
+           if (hv !== this.hit) return (0, Bv.n)(this.hit, hv, zv), this.hit = hv, void this.setInteractive(hv ? (vv => {
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4970-L4971` → after: `L4827-L4828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4827-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4827-L4828) · [Before (L4970-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4970-L4971)

```diff
-               const zz = null !== (sz = null === (Fz = tz.parentElement) || void 0 === Fz ? void 0 : Fz.closest("[data-pad-focusable]")) && void 0 !== sz ? sz : tz;
-               return Kt(zz) ? {
+               const vv = null !== (Pv = null === (hv = zv.parentElement) || void 0 === hv ? void 0 : hv.closest("[data-pad-focusable]")) && void 0 !== Pv ? Pv : zv;
+               return (0, Xv.v)(vv) ? {
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4988` → after: `L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4845) · [Before (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4988)

```diff
-           zz && Fz && Ct(Fz, Fz, tz)
+           vv && hv && (0, Bv.n)(hv, hv, zv)
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4998` → after: `L4855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4855) · [Before (L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L4998)

```diff
-           this.hit && Ct(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
+           this.hit && (0, Bv.n)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5005` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4862) · [Before (L5005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5005)

```diff
-           if (!zz || At(zz)) return {
+           if (!vv || (0, Bv.z)(vv)) return {
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5008` → after: `L4865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4865) · [Before (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5008)

```diff
-           const tz = (0, JW.e)(zz),
+           const zv = (0, Vh.c)(vv),
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5014` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4871) · [Before (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5014)

```diff
-           } : (mt(zz, this.getPoint()), {
+           } : ((0, Bv.o)(vv, this.getPoint()), {
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5043-L5044` → after: `L4900-L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4900-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4900-L4901) · [Before (L5043-L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5043-L5044)

```diff
-             const zz = null !== Xz && void 0 !== Xz ? Xz : sz.target.isConnected ? sz.target : null;
-             zz && Jt(zz, Wz);
+             const vv = null !== ev && void 0 !== ev ? ev : Pv.target.isConnected ? Pv.target : null;
+             vv && (0, Bv.p)(vv, Sv);
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5050` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4907) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5050)

```diff
-             tz && (qW.noteCursorActivation(tz), (0, Hz.e)(tz, new MouseEvent("click", Yt(Wz, 0, 0))), jt(tz), Pt(tz) && et(tz))
+             zv && (Xh.noteCursorActivation(zv), (0, iv.d)(zv, new MouseEvent("click", (0, Bv.G)(Sv, 0, 0))), (0, Bv.g)(zv), (0, Bv.E)(zv) && (0, Bv.B)(zv))
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5055-L5056` → after: `L4912-L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4912-L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4912-L4913) · [Before (L5055-L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5055-L5056)

```diff
-           const Fz = null !== (zz = null === (tz = this.hit) || void 0 === tz ? void 0 : tz.closest("[data-pad-repeat]")) && void 0 !== zz ? zz : null;
-           this.repeatStop = Fz, this.repeatKey = null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz.getAttribute("data-pad-repeat")) && void 0 !== sz ? sz : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           const hv = null !== (vv = null === (zv = this.hit) || void 0 === zv ? void 0 : zv.closest("[data-pad-repeat]")) && void 0 !== vv ? vv : null;
+           this.repeatStop = hv, this.repeatKey = null !== (Pv = null === hv || void 0 === hv ? void 0 : hv.getAttribute("data-pad-repeat")) && void 0 !== Pv ? Pv : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5062` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4919) · [Before (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5062)

```diff
-           zz.isConnected && !Kt(zz) && zz.getAttribute("data-pad-repeat") === this.repeatKey && tz && zz.contains(tz) ? zz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, qW.noteCursorActivation(zz), (0, Hz.e)(zz, n … [truncated]
+           vv.isConnected && !(0, Xv.v)(vv) && vv.getAttribute("data-pad-repeat") === this.repeatKey && zv && vv.contains(zv) ? vv.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Xh.noteCursorActivation(vv), (0, iv.d … [truncated]
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5068` → after: `L4925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4925) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5068)

```diff
-           "slider" === zz.kind && zz.adjuster.endDrag(), "pointer" === zz.kind && zz.target.isConnected && Jt(zz.target, this.getPoint())
+           "slider" === vv.kind && vv.adjuster.endDrag(), "pointer" === vv.kind && vv.target.isConnected && (0, Bv.p)(vv.target, this.getPoint())
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5074` → after: `L4931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4931) · [Before (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5074)

```diff
-           zz.wasPressed(tz) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !zz.isHeld(tz) && (this.secondaryArmed = !1, zz.wasReleased(tz) && this.hit && It(this.hit, this.getPoint(), 2))
+           vv.wasPressed(zv) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !vv.isHeld(zv) && (this.secondaryArmed = !1, vv.wasReleased(zv) && this.hit && (0, Bv.m)(this.hit, this.getPoint(), 2))
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5122` → after: `L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4979) · [Before (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5122)

```diff
-           tz = (0, bz.B)();
+           zv = (0, wv.z)();
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5142` → after: `L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L4999) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5142)

```diff
-                 return null !== tz && void 0 !== tz && tz.isConnected ? tz : null
+                 return null !== zv && void 0 !== zv && zv.isConnected ? zv : null
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5145` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5002) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5145)

```diff
-               const oz = null !== (tz = null === Wz || void 0 === Wz ? void 0 : Wz.closest("[data-pad-reticle-box]")) && void 0 !== tz ? tz : Wz;
+               const pv = null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.closest("[data-pad-reticle-box]")) && void 0 !== zv ? zv : Sv;
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5180` → after: `L5037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5037) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5180)

```diff
-         zz.style.transform = `translate3d(${tz.x}px, ${tz.y}px, 0)`, zz.classList.toggle("Visible", tz.visible), zz.classList.toggle("Pressed", tz.pressed)
+         vv.style.transform = `translate3d(${zv.x}px, ${zv.y}px, 0)`, vv.classList.toggle("Visible", zv.visible), vv.classList.toggle("Pressed", zv.pressed)
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5233` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5090) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5233)

```diff
-                     return null !== (sz = [...zz.querySelectorAll("button")].find((zz => !zz.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== sz ? sz : null
+                     return null !== (Pv = [...vv.querySelectorAll("button")].find((vv => !vv.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Pv ? Pv : null
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5251` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5108) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5251)

```diff
-           sz = Oz.e.onFrame((() => {
+           Pv = gv.f.onFrame((() => {
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5265` → after: `L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5122) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5265)

```diff
-           const zz = (0, Hz.m)(document.body),
+           const vv = (0, iv.i)(document.body),
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5275` → after: `L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5132) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5275)

```diff
-         } = (0, Nz.t)(), tz = (0, eO.j)() && zz;
+         } = (0, Wv.k)(), zv = (0, te.m)() && vv;
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5284-L5287` → after: `L5141-L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5141-L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5141-L5144) · [Before (L5284-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5284-L5287)

```diff
-     var to = sz(8291),
-       so = sz(8310),
-       Fo = sz(8298);
-     sz(8314);
+     var dg = Pv(8484),
+       Ng = Pv(8497),
+       lg = Pv(8493);
+     Pv(8499);
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5296` → after: `L5153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5153) · [Before (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5296)

```diff
-           oz((0, Fo.z)(zz, tz, Oz.current))
+           pv((0, lg.D)(vv, zv, gv.current))
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5298-L5299` → after: `L5155-L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5155-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5155-L5156) · [Before (L5298-L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5298-L5299)

```diff
-         (0, Mz.useLayoutEffect)((() => (tz(sz), (0, ZO.s)(zz, sz), Uz.o.Yg(ZO.l), () => {
-           tz(!1), (0, ZO.s)(zz, !1), Uz.o.Yg(ZO.l)
+         (0, Iv.useLayoutEffect)((() => (zv(Pv), (0, qe.v)(vv, Pv), Nv.j.zC(qe.n), () => {
+           zv(!1), (0, qe.v)(vv, !1), Nv.j.zC(qe.n)
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5306` → after: `L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5163) · [Before (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5306)

```diff
-           (0, FF.r)() && vz()
+           (0, dP.o)() && dv()
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5334-L5335` → after: `L5191-L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5191-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5191-L5192) · [Before (L5334-L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5334-L5335)

```diff
-               width: 2 * Fo.n + "rem",
-               height: 2 * Fo.n + "rem"
+               width: 2 * lg.q + "rem",
+               height: 2 * lg.q + "rem"
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5339` → after: `L5196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5196) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5339)

```diff
-               viewBox: `0 0 ${Fo.i} ${Fo.i}`,
+               viewBox: `0 0 ${lg.o} ${lg.o}`,
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5341` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5198) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5341)

```diff
-                 d: (0, Fo.r)(zz, sz, Fo.d, Fo.e, Fo.f),
+                 d: (0, lg.r)(vv, Pv, lg.e, lg.h, lg.l),
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5348-L5350` → after: `L5205-L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5205-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5205-L5207) · [Before (L5348-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5348-L5350)

```diff
-                 cx: Fo.d,
-                 cy: Fo.d,
-                 r: Fo.f
+                 cx: lg.e,
+                 cy: lg.e,
+                 r: lg.l
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5353-L5355` → after: `L5210-L5212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5210-L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5210-L5212) · [Before (L5353-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5353-L5355)

```diff
-                 cx: Fo.d,
-                 cy: Fo.d,
-                 r: Fo.e
+                 cx: lg.e,
+                 cy: lg.e,
+                 r: lg.h
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5358` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5215) · [Before (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5358)

```diff
-                 d: (0, Fo.r)(Fz, sz, Fo.d, Fo.e, Fo.f)
+                 d: (0, lg.r)(hv, Pv, lg.e, lg.h, lg.l)
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5361` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5218) · [Before (L5361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5361)

```diff
-               const tz = (0, Fo.u)(zz, sz);
+               const zv = (0, lg.y)(vv, Pv);
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5367-L5368` → after: `L5224-L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5224-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5224-L5225) · [Before (L5367-L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5367-L5368)

```diff
-                   left: `calc(50% + ${Fo.b*Math.cos(tz)}rem)`,
-                   top: `calc(50% + ${Fo.b*Math.sin(tz)}rem)`
+                   left: `calc(50% + ${lg.d*Math.cos(zv)}rem)`,
+                   top: `calc(50% + ${lg.d*Math.sin(zv)}rem)`
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5384-L5387` → after: `L5241-L5244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5241-L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5241-L5244) · [Before (L5384-L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5384-L5387)

```diff
-         } = (0, Wz.B)(), tz = Wo("chat", JF.s), sz = (0, Mz.useMemo)((() => WO.map((tz => zz(tz)))), [zz]);
-         return (0, KX.g)(JF.o, (() => {
-           tz.open || (0, to.g)() || (0, so.n)() || "inGame" !== vz.b.get("gameState") || (0, FF.r)() || !(0, xF.c)() || tz.show()
-         })), (0, KX.g)(JF.d, (zz => {
+         } = (0, Sv.x)(), zv = Tg("chat", VP.j), Pv = (0, Iv.useMemo)((() => Ne.map((zv => vv(zv)))), [vv]);
+         return (0, sS.g)(VP.h, (() => {
+           zv.open || (0, dg.f)() || (0, Ng.p)() || "inGame" !== dv.c.get("gameState") || (0, dP.o)() || !(0, DP.e)() || zv.show()
+         })), (0, sS.g)(VP.c, (vv => {
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5389` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5246) · [Before (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5389)

```diff
-         })), (0, KX.g)(JF.k, (() => {
+         })), (0, sS.g)(VP.f, (() => {
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5393-L5394` → after: `L5250-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5250-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5250-L5251) · [Before (L5393-L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5393-L5394)

```diff
-           null !== Fz ? XO.claim(performance.now()) && (tz.close(), null === (zz = (0, xF.c)()) || void 0 === zz || zz.sendLine(sz[Fz])) : tz.close()
-         })), (0, KX.g)(JF.h, tz.close), tz.open ? (0, Qz.jsx)(Xo, {
+           null !== hv ? le.claim(performance.now()) && (zv.close(), null === (vv = (0, DP.e)()) || void 0 === vv || vv.sendLine(Pv[hv])) : zv.close()
+         })), (0, sS.g)(VP.e, zv.close), zv.open ? (0, Av.jsx)(Wg, {
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5406` → after: `L5263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5263) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5406)

```diff
-         } = (0, Wz.B)(), tz = Wo("actionButton", so.o), [sz, Fz] = (0, Mz.useState)([]);
+         } = (0, Sv.x)(), zv = Tg("actionButton", Ng.q), [Pv, hv] = (0, Iv.useState)([]);
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5408-L5409` → after: `L5265-L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5265-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5265-L5266) · [Before (L5408-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5408-L5409)

```diff
-             tz.open || (0, to.g)() || (0, JF.c)() || "inGame" !== vz.b.get("gameState") || (0, FF.r)() || (Fz(zz), tz.show())
-           })), (0, KX.g)(so.d, (zz => {
+             zv.open || (0, dg.f)() || (0, VP.b)() || "inGame" !== dv.c.get("gameState") || (0, dP.o)() || (hv(vv), zv.show())
+           })), (0, sS.g)(Ng.c, (vv => {
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5414-L5415` → after: `L5271-L5272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5271-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5271-L5272) · [Before (L5414-L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5414-L5415)

```diff
-             tz.close(), null !== zz && Uz.o.Yg(so.l, sz[zz])
-           })), (0, KX.g)(so.f, tz.close), !tz.open) return null;
+             zv.close(), null !== vv && Nv.j.zC(Ng.n, Pv[vv])
+           })), (0, sS.g)(Ng.g, zv.close), !zv.open) return null;
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5433` → after: `L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5290) · [Before (L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5433)

```diff
-     var Uo = sz(106);
+     var Cg = Pv(73);
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5436-L5437` → after: `L5293-L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5293-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5293-L5294) · [Before (L5436-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5436-L5437)

```diff
-         const sz = (0, Hz.m)(document.getElementById("root")),
-           Fz = (0, bz.g)(),
+         const Pv = (0, iv.i)(document.getElementById("root")),
+           hv = (0, wv.f)(),
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5439` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5296) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5439)

```diff
-             const zz = [Uz.o.subscribe(VW.d, (() => {
+             const vv = [Nv.j.subscribe(vS.i, (() => {
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5441` → after: `L5298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5298) · [Before (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5441)

```diff
-               })), Uz.o.subscribe("damagedByOtherPlayer", (() => {
+               })), Nv.j.subscribe("damagedByOtherPlayer", (() => {
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5443` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5300) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5443)

```diff
-               })), Uz.o.subscribe("yourAttackHit", (zz => {
+               })), Nv.j.subscribe("yourAttackHit", (vv => {
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5449` → after: `L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5306) · [Before (L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5449)

```diff
-               tz = Oz.e.onActivePadChanged((zz => {
+               zv = gv.f.onActivePadChanged((vv => {
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5453` → after: `L5310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5310) · [Before (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5453)

```diff
-               for (const tz of zz) Uz.o.unsubscribe(tz);
+               for (const zv of vv) Nv.j.unsubscribe(zv);
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5459` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5316) · [Before (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5459)

```diff
-               getVisitId: WX.e,
+               getVisitId: NS.d,
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5462-L5463` → after: `L5319-L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5319-L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5319-L5320) · [Before (L5462-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5462-L5463)

```diff
-                 const zz = FX.j.getItem(OX);
-                 return "string" === typeof zz ? zz : null
+                 const vv = dS.l.getItem(TS);
+                 return "string" === typeof vv ? vv : null
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5466` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5323) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5466)

```diff
-                 FX.j.setItem(OX, zz)
+                 dS.l.setItem(TS, vv)
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5471` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5328) · [Before (L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5471)

```diff
-                 return null !== (zz = null === (tz = Oz.e.getActivePad()) || void 0 === tz ? void 0 : tz.family) && void 0 !== zz ? zz : null
+                 return null !== (vv = null === (zv = gv.f.getActivePad()) || void 0 === zv ? void 0 : zv.family) && void 0 !== vv ? vv : null
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5473-L5475` → after: `L5330-L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5330-L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5330-L5332) · [Before (L5473-L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5473-L5475)

```diff
-               canReport: tX.i,
-               getInputType: sX.c,
-               Iw: tX.p
+               canReport: gS.k,
+               getInputType: pS.b,
+               yw: gS.q
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5484` → after: `L5341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5341) · [Before (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5484)

```diff
-               Wz = Uz.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               Sv = Nv.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5487` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5344) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5487)

```diff
-               Xz = (0, WX.g)((() => {
+               ev = (0, NS.i)((() => {
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5491` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5348) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5491)

```diff
-               Uz.o.unsubscribe(Wz), Xz(), null !== sz && clearTimeout(sz)
+               Nv.j.unsubscribe(Sv), ev(), null !== Pv && clearTimeout(Pv)
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5494` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5351) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5494)

```diff
-           oz = Oz.e.onFrame(((zz, tz) => {
+           pv = gv.f.onFrame(((vv, zv) => {
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5496` → after: `L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5353) · [Before (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5496)

```diff
-             uz.c.dispatch(zz, tz, sz)
+             Tv.b.dispatch(vv, zv, Pv)
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5498-L5499` → after: `L5355-L5356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5355-L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5355-L5356) · [Before (L5498-L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5498-L5499)

```diff
-         let Kz = null !== (zz = null === (tz = Oz.e.getActivePad()) || void 0 === tz ? void 0 : tz.family) && void 0 !== zz ? zz : null;
-         const wz = Oz.e.onActivePadChanged((zz => {
+         let lv = null !== (vv = null === (zv = gv.f.getActivePad()) || void 0 === zv ? void 0 : zv.family) && void 0 !== vv ? vv : null;
+         const av = gv.f.onActivePadChanged((vv => {
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5501-L5502` → after: `L5358-L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5358-L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5358-L5359) · [Before (L5501-L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5501-L5502)

```diff
-             (uz.c.reset(), (0, bz.t)(), Uz.o.Yg(Oz.c, zz), (null !== (tz = null === zz || void 0 === zz ? void 0 : zz.family) && void 0 !== tz ? tz : null) !== Kz) && (Kz = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.family) && void 0 !== sz ? sz : null, Uz.o.Yg(Nz. … [truncated]
-             !zz && (0, bz.k)() && (0, bz.x)(vz.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (Tv.b.reset(), (0, wv.w)(), Nv.j.zC(gv.e, vv), (null !== (zv = null === vv || void 0 === vv ? void 0 : vv.family) && void 0 !== zv ? zv : null) !== lv) && (lv = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.family) && void 0 !== Pv ? Pv : null, Nv.j.zC(Wv. … [truncated]
+             !vv && (0, wv.k)() && (0, wv.y)(dv.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5505` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5362) · [Before (L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5505)

```diff
-             "visible" !== document.visibilityState && uz.c.clear()
+             "visible" !== document.visibilityState && Tv.b.clear()
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5508` → after: `L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5365) · [Before (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5508)

```diff
-             uz.c.clear()
+             Tv.b.clear()
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5510` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5367) · [Before (L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5510)

```diff
-         document.addEventListener("visibilitychange", Dz), window.addEventListener("blur", gz), Oz.e.start(), (0, zX.k)();
+         document.addEventListener("visibilitychange", sv), window.addEventListener("blur", Cv), gv.f.start(), (0, eS.g)();
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5513` → after: `L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5370) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5513)

```diff
-           sz(), Fz(), Wz(), Xz(), oz(), wz(), document.removeEventListener("visibilitychange", Dz), window.removeEventListener("blur", gz), Oz.e.stop(), null === Bz || void 0 === Bz || Bz()
+           Pv(), hv(), Sv(), ev(), pv(), av(), document.removeEventListener("visibilitychange", sv), window.removeEventListener("blur", Cv), gv.f.stop(), null === cv || void 0 === cv || cv()
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5520-L5523` → after: `L5377-L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5377-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5377-L5380) · [Before (L5520-L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5520-L5523)

```diff
-     var No = sz(7699),
-       bo = sz(8321);
-     const wo = new Set(zX.i),
-       Do = zz => `${bo.j}${(0,Nz.o)()}/${zz}`,
+     var Gg = Pv(7879),
+       mg = Pv(8505);
+     const jg = new Set(eS.e),
+       fg = vv => `${mg.i}${(0,Wv.h)()}/${vv}`,
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5525-L5527` → after: `L5382-L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5382-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5382-L5384) · [Before (L5525-L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5525-L5527)

```diff
-         if (!(0, bo.h)(zz)) return null;
-         const [tz, sz] = zz.slice(bo.j.length).split("/");
-         return (0, No.g)(tz) && wo.has(sz) ? (0, zX.h)(tz, sz) : null
+         if (!(0, mg.g)(vv)) return null;
+         const [zv, Pv] = vv.slice(mg.i.length).split("/");
+         return (0, Gg.h)(zv) && jg.has(Pv) ? (0, eS.c)(zv, Pv) : null
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5529` → after: `L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5386) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5529)

```diff
-     var Ho = sz(8325);
+     var Yg = Pv(8513);
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5533` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5390) · [Before (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5533)

```diff
-         } = (0, Wz.B)(), tz = (0, bz.B)(), {
+         } = (0, Sv.x)(), zv = (0, wv.z)(), {
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5536` → after: `L5393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5393) · [Before (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5536)

```diff
-         } = (0, vz.h)(["gameState", "isUiHidden"]), {
+         } = (0, dv.i)(["gameState", "isUiHidden"]), {
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5539-L5540` → after: `L5396-L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5396-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5396-L5397) · [Before (L5539-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5539-L5540)

```diff
-         } = (0, Nz.t)(), [oz, Uz] = (0, Mz.useState)(Ho.c);
-         return (0, KX.g)(JX.y, Uz), tz && !Fz && "inGame" === sz && oz ? (0, Qz.jsxs)("div", {
+         } = (0, Wv.k)(), [pv, Nv] = (0, Iv.useState)(Yg.d);
+         return (0, sS.g)(VS.t, Nv), zv && !hv && "inGame" === Pv && pv ? (0, Av.jsxs)("div", {
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5593` → after: `L5450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5450) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5593)

```diff
-               Xz.style.transform = `translate3d(${Math.round(Oz)}px, ${Math.round(oz)}px, 0)`, Xz.style.visibility = "visible"
+               ev.style.transform = `translate3d(${Math.round(gv)}px, ${Math.round(pv)}px, 0)`, ev.style.visibility = "visible"
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5610-L5614` → after: `L5467-L5471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5467-L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5467-L5471) · [Before (L5610-L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5610-L5614)

```diff
-     var Yo = sz(1036),
-       xo = sz(8332),
-       mo = sz(1419),
-       Jo = sz(8337),
-       Io = sz(8345);
+     var Kg = Pv(1042),
+       Vg = Pv(8520),
+       Ug = Pv(1442),
+       Rg = Pv(8529),
+       xg = Pv(8531);
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5636` → after: `L5493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5493) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5636)

```diff
-         } = (0, Wz.B)(), tz = (0, bz.B)(), sz = (0, xo.c)(), Fz = (0, cX.e)("_tasks"), Xz = (0, cX.e)("_availableLeaderboards");
+         } = (0, Sv.x)(), zv = (0, wv.z)(), Pv = (0, Vg.d)(), hv = (0, QS.i)("_tasks"), ev = (0, QS.i)("_availableLeaderboards");
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5657` → after: `L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5514) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5657)

```diff
-             } = Co[tz], Wz = "leave" === tz ? mo.H : mo.h;
+             } = tg[zv], Sv = "leave" === zv ? Ug.A : Ug.d;
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5664-L5665` → after: `L5521-L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5521-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5521-L5522) · [Before (L5664-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5664-L5665)

```diff
-                       return Uz.o.Yg(Io.i), void vz.b.set({
-                         openEverythingMenuName: sF.r.SHOP
+                       return Nv.j.zC(xg.l), void dv.c.set({
+                         openEverythingMenuName: pP.o.SHOP
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5668` → after: `L5525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5525) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5668)

```diff
-                       return void Uz.o.Yg("toggleMenu", "retentionFeatures");
+                       return void Nv.j.zC("toggleMenu", "retentionFeatures");
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5670` → after: `L5527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5527) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5670)

```diff
-                       return void Uz.o.Yg("toggleMenu", "inviteLink");
+                       return void Nv.j.zC("toggleMenu", "inviteLink");
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5678` → after: `L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5535) · [Before (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5678)

```diff
-                 children: [(0, Qz.jsx)(Yo.c, {
+                 children: [(0, Av.jsx)(Kg.b, {
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5688-L5689` → after: `L5545-L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5545-L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5545-L5546) · [Before (L5688-L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5688-L5689)

```diff
-     var Zo = sz(1910);
-     const Go = wz.A,
+     var Ig = Pv(1934);
+     const Qg = av.w,
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5694` → after: `L5551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5551) · [Before (L5694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5694)

```diff
-         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(wz.U).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
+         this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(av.O).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5719` → after: `L5576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5576) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5719)

```diff
-           continues: (0, bz.j)(zz)
+           continues: (0, wv.g)(vv)
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5732-L5733` → after: `L5589-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5589-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5589-L5590) · [Before (L5732-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5732-L5733)

```diff
-         const Wz = (0, wz.t)(zz.values, this.previousHeld),
-           Xz = null === sz ? -1 : (0, wz.o)(sz),
+         const Sv = (0, av.r)(vv.values, this.previousHeld),
+           ev = null === Pv ? -1 : (0, av.m)(Pv),
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5754` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5611) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5754)

```diff
-     const Ao = new Set([...Zo.n, ...Zo.G]),
+     const Hg = new Set([...Ig.n, ...Ig.I]),
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5758` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5615) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5758)

```diff
-       })(zz, Zo.x, Ao),
+       })(vv, Ig.z, Hg),
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5766-L5767` → after: `L5623-L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5623-L5624) · [Before (L5766-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5766-L5767)

```diff
-             } = Fz.onKeyDown(zz, !(0, bz.F)(zz) || (0, SW.f)() || (0, FF.r)(), yo(zz.code));
-             sz && (zz.stopImmediatePropagation(), co(zz) && zz.preventDefault()), Wz && ((0, bz.x)("keyboardMouse"), tz())
+             } = hv.onKeyDown(vv, !(0, wv.E)(vv) || (0, uh.j)() || (0, dP.o)(), Mg(vv.code));
+             Pv && (vv.stopImmediatePropagation(), Ag(vv) && vv.preventDefault()), Sv && ((0, wv.y)("keyboardMouse"), zv())
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5776-L5777` → after: `L5633-L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5633-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5633-L5634) · [Before (L5776-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5776-L5777)

```diff
-         const vz = Oz.e.onFrame((zz => {
-             const Wz = uz.c.getActiveConsumerName(),
+         const dv = gv.f.onFrame((vv => {
+             const Sv = Tv.b.getActiveConsumerName(),
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5787-L5788` → after: `L5644-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5644-L5645) · [Before (L5787-L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5787-L5788)

```diff
-               const zz = (0, Nz.k)().swapSticks ? "right" : "left";
-               uz.c.consumeAllHeld(Fz.consumeLeavesMoveStick() ? zz : null)
+               const vv = (0, Wv.g)().swapSticks ? "right" : "left";
+               Tv.b.consumeAllHeld(hv.consumeLeavesMoveStick() ? vv : null)
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5792` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5649) · [Before (L5792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5792)

```diff
-           Uz = (0, SW.i)(`pressToContinue:${zz}`, (() => Fz.blocksGameplay()));
+           Nv = (0, uh.m)(`pressToContinue:${vv}`, (() => hv.blocksGameplay()));
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5802-L5805` → after: `L5659-L5662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5659-L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5659-L5662) · [Before (L5802-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5802-L5805)

```diff
-     var ho = sz(4609),
-       Qo = sz(3097),
-       ko = sz(2862),
-       io = sz(7707);
+     var Bg = Pv(4732),
+       Jg = Pv(3177),
+       Eg = Pv(2917),
+       og = Pv(7887);
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5825` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5682) · [Before (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5825)

```diff
-         } = (0, Wz.B)();
+         } = (0, Sv.x)();
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5839` → after: `L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5696) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5839)

```diff
-             }), (0, Qz.jsx)(ko.d, {
+             }), (0, Av.jsx)(Eg.e, {
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5859-L5860` → after: `L5716-L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5716-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5716-L5717) · [Before (L5859-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5859-L5860)

```diff
-         const Xz = (0, Nz.t)();
-         return (0, Qz.jsx)(ho.g, {
+         const ev = (0, Wv.k)();
+         return (0, Av.jsx)(Bg.i, {
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5869-L5870` → after: `L5726-L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5726-L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5726-L5727) · [Before (L5869-L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5869-L5870)

```diff
-             (0, Nz.q)({
-               [tz]: (0, io.y)(zz, Fz)
+             (0, Wv.i)({
+               [zv]: (0, og.v)(vv, hv)
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5875-L5876` → after: `L5732-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5732-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5732-L5733) · [Before (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5875-L5876)

```diff
-     var qo = sz(8351),
-       So = sz(8356);
+     var Xg = Pv(8536),
+       ug = Pv(8540);
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5879-L5880` → after: `L5736-L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5736-L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/controller.js#L5736-L5737) · [Before (L5879-L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/controller.js#L5879-L5880)

```diff
-         const [tz] = [...zz.controllers].sort(((zz, tz) => So.m[zz] - So.m[tz]));
-         return So.k[tz]
+         const [zv] = [...vv.controllers].sort(((vv, zv) => ug.q[vv] - ug.q[zv]));
+         return ug.o[zv]
```
