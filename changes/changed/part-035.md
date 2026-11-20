# Changed — Bundle Modifications Report (Part 035 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `35 / 67` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/75.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/75.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82)

#### 6. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L68-L140` → after: `L165-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L165-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L165-L430) · [Before (L68-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L68-L140)

```diff
-       const Hz = (0, Xz.memo)((function() {
-         const zz = (0, Uz.e)("dialogue");
-         return (0, uz.jsx)("div", {
-           className: "DialogueAnchor",
-           "data-camera-keeper": "",
-           role: "status",
-           "aria-live": "polite",
-           "aria-atomic": "true",
-           children: zz && (0, uz.jsx)(gz, {
-             display: zz
-           }, wz(zz))
-         })
-       }))
-     },
-     4356: (zz, tz, sz) => {
-         sz.r(tz), sz.d(tz, {
- ... (57 more removed lines; see GitHub link above)
+     }
+ 
+     function wz() {
+       return Tz
+     }
+     const az = Tz?.Instance.prototype,
+       sz = Tz?.Memory.prototype;
+ 
+     function Cz() {
+       return sz
+     }
+     let iz, cz;
+     try {
+       const vv = globalThis.crypto,
+         zv = vv?.subtle;
+       iz = vv ? lz(vv) : void 0, cz = zv ? lz(zv) : void 0
+ ... (250 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L263-L545` → after: `L433-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L433-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L433-L475) · [Before (L263-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L263-L545)

```diff
-           return Xz(), tz
-         }
- 
-         function Zz(zz) {
-           return "methods" === zz || "callbacks" === zz || "settings" === zz
-         }
-         const Gz = {
-             readme: {
-               icon: "code-block",
-               summary: "Code blocks, boards and World Code, and the globals your code can use.",
-               layout: "article"
-             },
-             snippets: {
-               icon: "scroll",
-               summary: "Ready-made code for common jobs, from moving players to running code every second.",
-               layout: "snippets"
- ... (267 more removed lines; see GitHub link above)
+           return !0
+         }(vv)
+       } catch {
+         return !1
+       }
+     }
+ 
+     function gP(vv) {
+       const zv = `wh:${vv.code}`;
+       if ("punished" === vv.tier) return zv;
+       try {
+         return `${zv}${uv(pP(vv))}`
+       } catch {
+         return `${zv}${uv(void 0)}`
+       }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L547-L549` → after: `L477-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L477-L479) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L547-L549)

```diff
-             if (iz(zz, Wz)) return {
-               page: zz,
-               anchor: Wz
+             for (let Pv = 0; Pv < mz.length; Pv++) {
+               const vv = mz[Pv];
+               void 0 === vv || eP(vv) || zv(gP(vv))
```

#### 9. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L551-L709` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L481) · [Before (L551-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L551-L709)

```diff
-           }
-           return {
-             page: Fz,
-             anchor: Wz
-           }
-         }
-         const lz = {
-           Examples: {
-             pageId: "snippets",
-             anchor: ""
-           },
-           Notes: {
-             pageId: "readme",
-             anchor: "Globals"
-           },
-           "Glossary-of-Referenced-Types": {
- ... (143 more removed lines; see GitHub link above)
+             zv((0, zz.l)());
```

#### 10. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L711-L728` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L483-L484) · [Before (L711-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L711-L728)

```diff
-               var Wz;
-               if (!Fz[Xz].trimStart().startsWith("/**")) continue;
-               const zz = Xz;
-               for (; Xz < Fz.length && !Fz[Xz].includes("*/");) Xz++;
-               const tz = null === (Wz = Fz[Xz + 1]) || void 0 === Wz ? void 0 : Wz.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
-               if (!tz) continue;
-               let Oz = null;
-               const oz = [];
-               let vz = "description",
-                 Uz = !1;
-               for (const sz of Fz.slice(zz, Xz + 1).join("\n").split("\n").map((zz => zz.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
-                 const zz = sz.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
-                 zz ? (Oz = zz[1].trim(), vz = "deprecation") : sz.startsWith("@") ? (vz = "otherTag", Uz = !0) : "" === sz.trim() ? Uz || (vz = "description", oz.push(sz)) : "deprecation" !== vz || /^[A-Z]/.test(sz.trim()) ? "otherTag" !== vz && (vz = "description", oz.push(sz))  … [truncated]
-               }
-               sz.set(tz[1], {
-                 deprecation: Oz,
- ... (2 more removed lines; see GitHub link above)
+               const vv = Oz[Pv];
+               void 0 === vv || eP(vv) || zv(Vz(vv))
```

#### 11. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L731-L1568` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L487-L488) · [Before (L731-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L731-L1568)

```diff
-           }(az.default), Xt
-         }
- 
-         function vt() {
-           if (!Ot) {
-             Ot = new Map;
-             for (const zz of Mz) {
-               const tz = (0, Jz.w)(kz(zz)).flatMap((zz => zz.blocks));
-               for (const zz of (0, Jz.l)(tz))
-                 if ("ts" === zz.lang || "typescript" === zz.lang)
-                   for (const [tz, sz] of ez(zz.code)) Ot.set(tz, sz)
-             }
-             for (const [zz, tz] of(Wt ??= Ft(az.default), Wt)) Ot.has(zz) || Ot.set(zz, tz)
-           }
-           return Ot
-         }
- ... (822 more removed lines; see GitHub link above)
+           }();
+           (null === PP || null !== vv && dP(vv) > dP(PP)) && (PP = vv)
```

#### 12. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L1570-L7251` → after: `L490-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L490-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/75.js#L490-L509) · [Before (L1570-L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/75.js#L1570-L7251)

```diff
- 
-         function Ks(zz) {
-           let {
-             level: tz,
-             text: sz,
-             anchor: Fz,
-             className: Wz
-           } = zz;
-           const Oz = `h${Math.min(tz,6)}`;
-           return (0, wz.jsxs)(Oz, {
-                 id: Fz,
-                 className: Xz()("DocsHeading", Wz),
-                 children: [(0, wz.jsx)(xt, {
-                       text: sz
-                     }), (0, wz.jsx)("a", {
-                         className: "DocsHeadingAnchor",
- ... (5666 more removed lines; see GitHub link above)
+       } finally {
+         Iv(vv)
+       }
+     }
+ 
+     function lP() {
+       hP = !0
+     }
+ 
+     function TP() {
+       if (hP) return "wb";
+       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && NP(), null !== PP) return PP;
+       if (void 0 === Tz) return "wn:unsupported";
+       const vv = (0, hv.p)();
+       return null === vv ? null : `wn:${vv}`
+     }
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/76.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/76.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5)

#### 1. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L2)

```diff
- export const ids = [76];
+ export const ids = [76, 92];
```

#### 2. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4-L140` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L4-L23) · [Before (L4-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L4-L140)

```diff
-   4362: zz => {
-     function tz(zz) {
-       return zz instanceof Map ? zz.clear = zz.delete = zz.set = function() {
-         throw new Error("map is read-only")
-       } : zz instanceof Set && (zz.add = zz.clear = zz.delete = function() {
-         throw new Error("set is read-only")
-       }), Object.freeze(zz), Object.getOwnPropertyNames(zz).forEach((sz => {
-         const Fz = zz[sz],
-           Wz = typeof Fz;
-         "object" !== Wz && "function" !== Wz || Object.isFrozen(Fz) || tz(Fz)
-       })), zz
-     }
-     class sz {
-       constructor(zz) {
-         void 0 === zz.data && (zz.data = {}), this.data = zz.data, this.isMatchIgnored = !1
-       }
- ... (121 more removed lines; see GitHub link above)
+     4574: (vv, zv, Pv) => {
+       Pv.d(zv, {
+         b: () => Cv,
+         f: () => iv
+       });
+       var hv = Pv(1035),
+         Sv = Pv.n(hv),
+         ev = Pv(52),
+         gv = Pv(1175),
+         pv = Pv(4582),
+         dv = Pv(1858),
+         Nv = Pv(2324),
+         lv = Pv(4589),
+         Tv = Pv(1082);
+       const Wv = new WeakMap;
+       let wv = 0;
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L142-L298` → after: `L25-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L25-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L25-L35) · [Before (L142-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L142-L298)

```diff
-     }
- 
-     function Kz(zz) {
-       return zz ? "string" === typeof zz ? zz : zz.source : null
-     }
- 
-     function uz(zz) {
-       return wz("(?=", zz, ")")
-     }
- 
-     function Nz(zz) {
-       return wz("(?:", zz, ")*")
-     }
- 
-     function bz(zz) {
-       return wz("(?:", zz, ")?")
- ... (141 more removed lines; see GitHub link above)
+ 
+       function sv(vv) {
+         let {
+           piece: zv
+         } = vv;
+         return "space" === zv.kind ? (0, Tv.jsx)(Tv.Fragment, {
+           children: zv.text
+         }) : (0, Tv.jsx)("span", {
+           className: "DialogueWord",
+           style: {
+             "--word-delay": `${zv.delayMs}ms`
```

#### 4. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L300-L302` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L37-L39) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L300-L302)

```diff
-           "on:end": (zz, tz) => {
-             tz.data._beginMatch !== zz[1] && tz.ignoreMatch()
-           }
+           children: (0, Tv.jsx)(pv.c, {
+             text: "icon" === zv.kind ? `[[${zv.icon}]]` : zv.text
+           })
```

#### 5. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L356-L370` → after: `L42-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L42-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L42-L64) · [Before (L356-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L356-L370)

```diff
-     }
- 
-     function az(zz, tz) {
-       void 0 === zz.relevance && (zz.relevance = 1)
-     }
-     const qz = (zz, tz) => {
-         if (!zz.beforeMatch) return;
-         if (zz.starts) throw new Error("beforeMatch cannot be used with starts");
-         const sz = Object.assign({}, zz);
-         Object.keys(zz).forEach((tz => {
-           delete zz[tz]
-         })), zz.keywords = sz.keywords, zz.ib = wz(sz.beforeMatch, uz(sz.ib)), zz.starts = {
-           relevance: 0,
-           contains: [Object.assign(sz, {
-             endsParent: !0
+ 
+       function Cv(vv) {
+         let {
+           display: zv
+         } = vv;
+         const {
+           selectedLanguage: Pv
+         } = (0, gv.x)(), hv = (0, ev.useMemo)((() => (0, lv.d)((0, lv.e)(zv).plan.pieces)), [zv, Pv.code]);
+         return (0, Tv.jsxs)("div", {
+           className: Sv()("Dialogue", {
+             DialogueAnimateIn: !1 !== zv.animateIn
+           }),
+           children: [zv.speakerName && (0, Tv.jsx)(dv.c, {
+             text: zv.speakerName,
+             className: "DialogueSpeaker"
+           }), (0, Tv.jsx)("p", {
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L372-L387` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L66) · [Before (L372-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L372-L387)

```diff
-         }, zz.relevance = 0, delete sz.beforeMatch
-       },
-       Sz = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
- 
-     function Vz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
-       const Fz = Object.create(null);
-       return "string" === typeof zz ? Wz(sz, zz.split(" ")) : Array.isArray(zz) ? Wz(sz, zz) : Object.keys(zz).forEach((function(sz) {
-         Object.assign(Fz, Vz(zz[sz], tz, sz))
-       })), Fz;
- 
-       function Wz(zz, sz) {
-         tz && (sz = sz.map((zz => zz.toLowerCase()))), sz.forEach((function(tz) {
-           const sz = tz.split("|");
-           Fz[sz[0]] = [zz, Rz(sz[0], sz[1])]
-         }))
+         })
```

#### 7. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L389-L450` → after: `L68-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L68-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L68-L98) · [Before (L389-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L389-L450)

```diff
-     }
- 
-     function Rz(zz, tz) {
-       return tz ? Number(tz) : function(zz) {
-         return Sz.includes(zz.toLowerCase())
-       }(zz) ? 0 : 1
-     }
-     const pz = {},
-       fz = zz => {
-         console.error(zz)
-       },
-       Ez = function(zz) {
-         for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
-         console.log(`WARN: ${zz}`, ...sz)
-       },
-       zt = (zz, tz) => {
- ... (46 more removed lines; see GitHub link above)
+       const iv = (0, ev.memo)((function() {
+         const vv = (0, Nv.i)("dialogue");
+         return (0, Tv.jsx)("div", {
+           className: "DialogueAnchor",
+           "data-camera-keeper": "",
+           role: "status",
+           "aria-live": "polite",
+           "aria-atomic": "true",
+           children: vv && (0, Tv.jsx)(Cv, {
+             display: vv
+           }, av(vv))
+         })
+       }))
+     },
+     4463: (vv, zv, Pv) => {
+         Pv.r(zv), Pv.d(zv, {
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L452-L481` → after: `L100-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L100-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L100-L128) · [Before (L452-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L452-L481)

```diff
-     function Wt(zz) {
-       function tz(tz, sz) {
-         return new RegExp(Kz(tz), "m" + (zz.case_insensitive ? "i" : "") + (zz.unicodeRegex ? "u" : "") + (sz ? "g" : ""))
-       }
-       class sz {
-         constructor() {
-           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
-         }
-         addRule(zz, tz) {
-           tz.position = this.position++, this.matchIndexes[this.matchAt] = tz, this.regexes.push([tz, zz]), this.matchAt += gz(zz) + 1
-         }
-         compile() {
-           0 === this.regexes.length && (this.exec = () => null);
-           const zz = this.regexes.map((zz => zz[1]));
-           this.matcherRe = tz(Bz(zz, {
-             joinWith: "|"
- ... (14 more removed lines; see GitHub link above)
+         function Cv(vv) {
+           let {
+             name: zv,
+             isTinted: Pv,
+             className: hv,
+             style: Sv
+           } = vv;
+           const gv = `${sv}/${zv}.png`;
+           return Pv ? (0, av.jsxs)("span", {
+             className: ev()("DocsPixelIcon", "Tinted", hv),
+             "aria-hidden": "true",
+             style: Sv,
+             children: [(0, av.jsx)("span", {
+               className: "DocsPixelIconTint",
+               style: {
+                 maskImage: `url("${gv}")`,
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L483-L489` → after: `L130-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L130-L155) · [Before (L483-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L483-L489)

```diff
-         getMatcher(zz) {
-           if (this.multiRegexes[zz]) return this.multiRegexes[zz];
-           const tz = new sz;
-           return this.rules.slice(zz).forEach((zz => {
-             let [sz, Fz] = zz;
-             return tz.addRule(sz, Fz)
-           })), tz.compile(), this.multiRegexes[zz] = tz, tz
+         const iv = 1500;
+ 
+         function cv() {
+           const [vv, zv] = (0, hv.useState)(null);
+           (0, hv.useEffect)((() => {
+             if (null === vv) return;
+             const Pv = setTimeout((() => {
+               zv(null)
+             }), iv);
+             return () => {
+               clearTimeout(Pv)
+             }
+           }), [vv]);
+           return [vv, vv => {
+             (0, wv.b)(vv).then((() => {
+               zv({
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L491-L492` → after: `L157-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L157-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L157-L180) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L491-L492)

```diff
-         resumingScanAtSamePosition() {
-           return 0 !== this.regexIndex
+ 
+         function Gv(vv) {
+           let {
+             text: zv,
+             label: Pv,
+             className: hv
+           } = vv;
+           const [Sv, gv] = cv(), pv = !1 === (null === Sv || void 0 === Sv ? void 0 : Sv.failed);
+           return (0, av.jsxs)("button", {
+             type: "button",
+             className: ev()("DocsCopyButton", hv, {
+               Copied: pv
+             }),
+             title: `Copy ${zv.length>40?"to clipboard":zv}`,
+             "aria-label": Pv ? void 0 : `Copy ${zv}`,
+             onClick: vv => {
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L494-L495` → after: `L182-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L182-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L182-L243) · [Before (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L494-L495)

```diff
-         considerAll() {
-           this.regexIndex = 0
+         lv.c.registerLanguage("javascript", Tv.c), lv.c.registerLanguage("typescript", Wv.e);
+         const mv = {
+             js: "javascript",
+             ts: "typescript",
+             javascript: "javascript",
+             typescript: "typescript"
+           },
+           jv = {
+             javascript: "JavaScript",
+             typescript: "TypeScript"
+           },
+           fv = 24;
+ 
+         function Fv(vv) {
+           let {
+             code: zv,
+ ... (46 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L497-L498` → after: `L245-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L245-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L245-L263) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L497-L498)

```diff
-         addRule(zz, tz) {
-           this.rules.push([zz, tz]), "ib" === tz.type && this.count++
+         var Yv = Pv(4491);
+         var nv = Pv(4493);
+         const Ov = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;
+ 
+         function Dv(vv) {
+           const zv = new Map;
+           let Pv, hv = [],
+             Sv = !1;
+           const ev = () => {
+             Pv && zv.set(Pv.name, Pv.lines.join("\n").trimEnd())
+           };
+           for (const gv of vv.split("\n")) {
+             const vv = gv.match(Ov);
+             Sv || gv.startsWith("/*") ? (Sv || (ev(), Pv = void 0), hv.push(gv), Sv = !gv.includes("*/")) : vv ? (ev(), Pv = {
+               name: vv[1],
+               lines: [...hv, gv]
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L500-L509` → after: `L265-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L265-L267) · [Before (L500-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L500-L509)

```diff
-         exec(zz) {
-           const tz = this.getMatcher(this.regexIndex);
-           tz.lastIndex = this.lastIndex;
-           let sz = tz.exec(zz);
-           if (this.resumingScanAtSamePosition())
-             if (sz && sz.index === this.lastIndex);
-             else {
-               const tz = this.getMatcher(0);
-               tz.lastIndex = this.lastIndex + 1, sz = tz.exec(zz)
-             } return sz && (this.regexIndex += sz.position + 1, this.regexIndex === this.count && this.considerAll()), sz
+ 
+         function Kv(vv) {
+           return "methods" === vv || "callbacks" === vv || "settings" === vv
```

#### 14. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L511-L565` → after: `L269-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L269-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L269-L379) · [Before (L511-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L511-L565)

```diff
-       }
-       if (zz.compilerExtensions || (zz.compilerExtensions = []), zz.contains && zz.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
-       return zz.classNameAliases = Wz(zz.classNameAliases || {}),
-         function sz(Xz, Oz) {
-           const oz = Xz;
-           if (Xz.isCompiled) return oz;
-           [iz, nz, Ft, qz].forEach((zz => zz(Xz, Oz))), zz.compilerExtensions.forEach((zz => zz(Xz, Oz))), Xz.__beforeBegin = null, [Lz, lz, az].forEach((zz => zz(Xz, Oz))), Xz.isCompiled = !0;
-           let vz = null;
-           return "object" === typeof Xz.keywords && Xz.keywords.$pattern && (Xz.keywords = Object.assign({}, Xz.keywords), vz = Xz.keywords.$pattern, delete Xz.keywords.$pattern), vz = vz || /\w+/, Xz.keywords && (Xz.keywords = Vz(Xz.keywords, zz.case_insensitive)), oz.keywordPat … [truncated]
-             return function(zz) {
-               zz.variants && !zz.cachedVariants && (zz.cachedVariants = zz.variants.map((function(tz) {
-                 return Wz(zz, {
-                   variants: null
-                 }, tz)
-               })));
-               if (zz.cachedVariants) return zz.cachedVariants;
- ... (39 more removed lines; see GitHub link above)
+         const Vv = {
+             readme: {
+               icon: "code-block",
+               summary: "Code blocks, boards and World Code, and the globals your code can use.",
+               layout: "article"
+             },
+             snippets: {
+               icon: "scroll",
+               summary: "Ready-made code for common jobs, from moving players to running code every second.",
+               layout: "snippets"
+             },
+             howTo: {
+               icon: "book",
+               summary: "Step-by-step guides for variations, plugins and full games.",
+               layout: "article",
+               navTitle: "All how-tos"
+ ... (95 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L567-L569` → after: `L381-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L381-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L381-L404) · [Before (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L567-L569)

```diff
-             disableAutodetect: !0,
-             name: "Plain text",
-             contains: []
+             Variations: {
+               icon: "layers",
+               summary: "Alternate versions of a custom game, and matchmaking players between them."
+             },
+             Plugins: {
+               icon: "puzzle",
+               summary: "Reusable first-party World Code features, imported from @plugins."
+             },
+             "Building a SessionBasedGame": {
+               icon: "trophy",
+               summary: "A full team game: lobby, teams, map voting, rounds and a winner."
+             },
+             "Interactable NPCs": {
+               icon: "speech-bubble",
+               summary: "Entities players talk to or use, such as shopkeepers and guards."
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L583` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L408) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L583)

```diff
-           return Kz.noHighlightRe.test(zz)
+           return vv.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
```

#### 17. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L586-L596` → after: `L411-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L411-L413) · [Before (L586-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L586-L596)

```diff
-         function Hz(zz, tz, sz) {
-           let Fz = "",
-             Wz = "";
-           "object" === typeof tz ? (Fz = zz, sz = tz.ignoreIllegals, Wz = tz.language) : (zt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), zt("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Wz … [truncated]
-           const Xz = {
-             code: Fz,
-             language: Wz
-           };
-           Cz("before:highlight", Xz);
-           const Oz = Xz.result ? Xz.result : Bz(Xz.language, Xz.code, sz);
-           return Oz.code = Xz.code, Cz("after:highlight", Oz), Oz
+         function xv(vv) {
+           let zv = !1;
+           return vv.split("\n").map((vv => (vv.startsWith("```") && (zv = !zv), !zv && /^#{3,} /.test(vv) ? vv.slice(1) : vv))).join("\n")
```

#### 18. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L599-L617` → after: `L416-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L416-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L416-L495) · [Before (L599-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L599-L617)

```diff
-         function Bz(zz, tz, Wz, Xz) {
-           const vz = Object.create(null);
- 
-           function Uz() {
-             if (!Cz.keywords) return void Zz.addText(Gz);
-             let zz = 0;
-             Cz.keywordPatternRe.lastIndex = 0;
-             let tz = Cz.keywordPatternRe.exec(Gz),
-               sz = "";
-             for (; tz;) {
-               sz += Gz.substring(zz, tz.index);
-               const Wz = xz.case_insensitive ? tz[0].toLowerCase() : tz[0],
-                 Xz = (Fz = Wz, Cz.keywords[Fz]);
-               if (Xz) {
-                 const [zz, Fz] = Xz;
-                 if (Zz.addText(sz), sz = "", vz[Wz] = (vz[Wz] || 0) + 1, vz[Wz] <= 7 && (Tz += Fz), zz.startsWith("_")) sz += tz[0];
- ... (3 more removed lines; see GitHub link above)
+         function tv(vv) {
+           return "readme" === vv ? "getting-started" : Rv(vv)
+         }
+         const qv = "## Glossary of Referenced Types";
+         const Iv = [{
+             id: "welcome",
+             slug: "",
+             title: "Welcome",
+             icon: "house",
+             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
+             layout: "article",
+             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
+           }, ...nv.d.flatMap((vv => {
+             const zv = {
+               id: vv.id,
+               slug: tv(vv.id),
+ ... (64 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L619-L620` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L497-L498) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L619-L620)

```diff
-               } else sz += tz[0];
-               zz = Cz.keywordPatternRe.lastIndex, tz = Cz.keywordPatternRe.exec(Gz)
+               }(zv);
+               return [vv, ...Pv]
```

#### 20. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L622-L624` → after: `L500-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L500-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L500-L520) · [Before (L622-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L622-L624)

```diff
-             var Fz;
-             sz += Gz.substring(zz), Zz.addText(sz)
-           }
+             return [zv]
+           }))],
+           Qv = [{
+             title: "Get started",
+             pageIds: ["welcome", "readme", "snippets", "changelog"]
+           }, {
+             title: "How-Tos",
+             pageIds: ["howTo", ...Iv.filter((vv => void 0 !== vv.sourceAnchor)).map((vv => vv.id))]
+           }, {
+             title: "Reference",
+             pageIds: ["apiReference", "callbacks", "clientOptions", "types"]
+           }, {
+             title: "Settings",
+             pageIds: ["entitySettings", "mobSettings", "vehicleSettings"]
+           }, {
+             title: "Systems",
+ ... (5 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L626-L636` → after: `L522-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L522-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L522-L525) · [Before (L626-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L626-L636)

```diff
-           function uz() {
-             null != Cz.subLanguage ? function() {
-               if ("" === Gz) return;
-               let zz = null;
-               if ("string" === typeof Cz.subLanguage) {
-                 if (!Fz[Cz.subLanguage]) return void Zz.addText(Gz);
-                 zz = Bz(Cz.subLanguage, Gz, !0, ez[Cz.subLanguage]), ez[Cz.subLanguage] = zz._top
-               } else zz = Pz(Gz, Cz.subLanguage.length ? Cz.subLanguage : null);
-               Cz.relevance > 0 && (Tz += zz.relevance), Zz.__addSublanguage(zz._emitter, zz.language)
-             }() : Uz(), Gz = ""
-           }
+         function Zv(vv) {
+           return Iv.find((zv => zv.id === vv))
+         }
+         const Av = new Map;
```

#### 22. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L638-L640` → after: `L527-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L527-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L527-L530) · [Before (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L638-L640)

```diff
-           function Nz(zz, tz) {
-             "" !== zz && (Zz.startScope(tz), Zz.addText(zz), Zz.endScope())
-           }
+         function Lv(vv) {
+           let zv = Av.get(vv.id);
+           return zv || (zv = (0, Yv.y)(vv.markdown, "changelog" === vv.layout ? 3 : 2), Av.set(vv.id, zv)), zv
+         }
```

#### 23. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L642-L652` → after: `L532-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L532-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L532-L549) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L642-L652)

```diff
-           function bz(zz, tz) {
-             let sz = 1;
-             const Fz = tz.length - 1;
-             for (; sz <= Fz;) {
-               if (!zz._emit[sz]) {
-                 sz++;
-                 continue
-               }
-               const Fz = xz.classNameAliases[zz[sz]] || zz[sz],
-                 Wz = tz[sz];
-               Fz ? Nz(Wz, Fz) : (Gz = Wz, Uz(), Gz = ""), sz++
+         function Hv(vv, zv) {
+           return Lv(vv).sections.some((vv => vv.heading.anchor === zv || vv.blocks.some((vv => "heading" === vv.kind && vv.anchor === zv))))
+         }
+ 
+         function Mv(vv) {
+           const [zv, ...Pv] = vv.replace(/^#/, "").split("-"), hv = Iv.find((vv => vv.id === zv));
+           if (!hv) return null;
+           const Sv = Pv.length > 0 ? (0, Yv.r)(Pv.join("-")) : "";
+           for (const gv of null !== (ev = hv.childPageIds) && void 0 !== ev ? ev : []) {
+             var ev;
+             const vv = Zv(gv);
+             if (vv.sourceAnchor === Sv) return {
+               page: vv,
+               anchor: ""
+             };
+             if (Hv(vv, Sv)) return {
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L655-L661` → after: `L552-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L552-L554) · [Before (L655-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L655-L661)

```diff
- 
-           function wz(zz, tz) {
-             return zz.scope && "string" === typeof zz.scope && Zz.openNode(xz.classNameAliases[zz.scope] || zz.scope), zz.beginScope && (zz.beginScope._wrap ? (Nz(Gz, xz.classNameAliases[zz.beginScope._wrap] || zz.beginScope._wrap), Gz = "") : zz.beginScope._multi && (bz(zz.begin … [truncated]
-               parent: {
-                 value: Cz
-               }
-             }), Cz
+           return {
+             page: hv,
+             anchor: Sv
```

#### 25. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L663-L679` → after: `L556-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L556-L568) · [Before (L663-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L663-L679)

```diff
- 
-           function Dz(zz, tz, Fz) {
-             let Wz = function(zz, tz) {
-               const sz = zz && zz.exec(tz);
-               return sz && 0 === sz.index
-             }(zz.endRe, Fz);
-             if (Wz) {
-               if (zz["on:end"]) {
-                 const Fz = new sz(zz);
-                 zz["on:end"](tz, Fz), Fz.isMatchIgnored && (Wz = !1)
-               }
-               if (Wz) {
-                 for (; zz.endsParent && zz.parent;) zz = zz.parent;
-                 return zz
-               }
-             }
- ... (1 more removed lines; see GitHub link above)
+         }
+         const yv = {
+           Examples: {
+             pageId: "snippets",
+             anchor: ""
+           },
+           Notes: {
+             pageId: "readme",
+             anchor: "Globals"
+           },
+           "Glossary-of-Referenced-Types": {
+             pageId: "types",
+             anchor: ""
```

#### 26. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L682-L684` → after: `L572-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L572-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L572-L580) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L682-L684)

```diff
-           function gz(zz) {
-             return 0 === Cz.matcher.regexIndex ? (Gz += zz[0], 1) : (Az = !0, 0)
-           }
+         function Bv(vv, zv) {
+           let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+           const hv = zv.slug ? `${vv}/${zv.slug}` : vv;
+           return Pv ? `${hv}#${Pv}` : hv
+         }
+         var Jv = Pv(4503);
+         const Ev = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
+           ov = new Set(["GameApi", "Console", "_TypeOf"]),
+           bv = 4;
```

#### 27. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L686-L734` → after: `L582-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L582-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L582-L589) · [Before (L686-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L686-L734)

```diff
-           function Hz(zz) {
-             const sz = zz[0],
-               Fz = tz.substring(zz.index),
-               Wz = Dz(Cz, zz, Fz);
-             if (!Wz) return Ut;
-             const Xz = Cz;
-             Cz.endScope && Cz.endScope._wrap ? (uz(), Nz(sz, Cz.endScope._wrap)) : Cz.endScope && Cz.endScope._multi ? (uz(), bz(Cz.endScope, zz)) : Xz.skip ? Gz += sz : (Xz.returnEnd || Xz.excludeEnd || (Gz += sz), uz(), Xz.excludeEnd && (Gz = sz));
-             do {
-               Cz.scope && Zz.closeNode(), Cz.skip || Cz.subLanguage || (Tz += Cz.relevance), Cz = Cz.parent
-             } while (Cz !== Wz.parent);
-             return Wz.starts && wz(Wz.starts, zz), Xz.returnEnd ? 0 : sz.length
-           }
-           let rz = {};
- 
-           function Yz(Fz, Xz) {
-             const oz = Xz && Xz[0];
- ... (33 more removed lines; see GitHub link above)
+         function rv(vv) {
+           let zv = vv.length;
+           for (; zv > 0 && "" === vv[zv - 1].trim();) zv--;
+           return vv.slice(0, zv)
+         }
+ 
+         function kv(vv) {
+           var zv;
```

#### 28. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L736-L794` → after: `L591-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L591-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L591-L601) · [Before (L736-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L736-L794)

```diff
-           let Iz = "",
-             Cz = Xz || Jz;
-           const ez = {},
-             Zz = new Kz.__emitter(Kz);
-           ! function() {
-             const zz = [];
-             for (let tz = Cz; tz !== xz; tz = tz.parent) tz.scope && zz.unshift(tz.scope);
-             zz.forEach((zz => Zz.openNode(zz)))
-           }();
-           let Gz = "",
-             Tz = 0,
-             cz = 0,
-             jz = 0,
-             Az = !1;
-           try {
-             if (xz.__emitTokens) xz.__emitTokens(tz, Zz);
- ... (43 more removed lines; see GitHub link above)
+           if (null === (zv = Pv.at(-1)) || void 0 === zv || !zv.trimEnd().endsWith("*/")) return {
+             lines: Pv,
+             doc: ""
+           };
+           const hv = Pv.findLastIndex((vv => vv.startsWith("/**")));
+           return -1 === hv ? {
+             lines: Pv,
+             doc: ""
+           } : {
+             lines: rv(Pv.slice(0, hv)),
+             doc: Pv.slice(hv).join("\n")
```

#### 29. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L799-L806` → after: `L649-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L649-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L649-L688) · [Before (L799-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L799-L806)

```diff
-           tz = tz || Kz.languages || Object.keys(Fz);
-           const sz = function(zz) {
-               const tz = {
-                 value: ot(zz),
-                 illegal: !1,
-                 relevance: 0,
-                 _top: vz,
-                 _emitter: new Kz.__emitter(Kz)
+           const Pv = function(vv, zv) {
+             return vv.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((vv, Pv) => {
+               var hv;
+               const Sv = null === (hv = zv.get(Pv)) || void 0 === hv ? void 0 : hv.object;
+               return Sv ? zz(Sv.values) : vv
+             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((vv, Pv) => {
+               var hv, Sv;
+               const ev = null === (hv = zv.get(Pv)) || void 0 === hv || null === (Sv = hv.object) || void 0 === Sv ? void 0 : Sv.values.map(uv);
+               return null !== ev && void 0 !== ev && ev.every((vv => null !== vv)) ? zz([...new Set(ev.flat())]) : vv
+             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((vv, Pv) => {
+               var hv;
+               const Sv = null === (hv = zv.get(Pv)) || void 0 === hv ? void 0 : hv.members;
+               return Sv ? zz(Sv) : vv
+             })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((vv, Pv) => {
+               var hv;
+               const Sv = null === (hv = zv.get(Pv)) || void 0 === hv ? void 0 : hv.object;
+ ... (24 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L808` → after: `L690-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L690-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L690-L697) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L808)

```diff
-               return tz._emitter.addText(zz), tz
+               for (const ev of Pv.lines.slice(1, -1)) {
+                 const vv = ev.match(/^\t([\w$]+): (.+)$/);
+                 vv ? (Sv(), hv = {
+                   name: vv[1],
+                   lines: [vv[2]]
+                 }) : hv && hv.lines.push(ev.replace(/^\t/, ""))
+               }
+               return Sv(), zv
```

#### 31. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L810-L816` → after: `L699-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L699-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L699-L723) · [Before (L810-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L810-L816)

```diff
-             Wz = tz.filter(mz).filter(Iz).map((tz => Bz(tz, zz, !1)));
-           Wz.unshift(sz);
-           const Xz = Wz.sort(((zz, tz) => {
-               if (zz.relevance !== tz.relevance) return tz.relevance - zz.relevance;
-               if (zz.language && tz.language) {
-                 if (mz(zz.language).supersetOf === tz.language) return 1;
-                 if (mz(tz.language).supersetOf === zz.language) return -1
+             hv = new Map;
+           for (const Sv of zv) ov.has(Sv.name) || hv.has(Sv.name) || hv.set(Sv.name, Pz(Sv, Pv));
+           return hv
+         }
+         let Sz, ez, gz;
+ 
+         function pz() {
+           return ez ??= function(vv) {
+             const zv = Xv(vv).find((vv => "GameApi" === vv.name)),
+               Pv = new Map,
+               hv = zv.lines;
+             for (let ev = 0; ev < hv.length; ev++) {
+               var Sv;
+               if (!hv[ev].trimStart().startsWith("/**")) continue;
+               const vv = ev;
+               for (; ev < hv.length && !hv[ev].includes("*/");) ev++;
+ ... (9 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L818-L822` → after: `L725-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L725-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L725-L731) · [Before (L818-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L818-L822)

```diff
-               return 0
-             })),
-             [Oz, oz] = Xz,
-             Uz = Oz;
-           return Uz.secondBest = oz, Uz
+               Pv.set(zv[1], {
+                 deprecation: gv,
+                 description: pv.join("\n").trim()
+               })
+             }
+             return Pv
+           }(Jv.default), ez
```

#### 33. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L825-L833` → after: `L734-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L734-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L734-L741) · [Before (L825-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L825-L833)

```diff
-         function rz(zz) {
-           let tz = null;
-           const sz = function(zz) {
-             let tz = zz.className + " ";
-             tz += zz.parentNode ? zz.parentNode.className : "";
-             const sz = Kz.languageDetectRe.exec(tz);
-             if (sz) {
-               const tz = mz(sz[1]);
-               return tz || (Ez(oz.replace("{}", sz[1])), Ez("Falling back to no-highlight mode for this block.", zz)), tz ? sz[1] : "no-highlight"
+         function dz() {
+           if (!gz) {
+             gz = new Map;
+             for (const vv of Iv) {
+               const zv = (0, Yv.u)(Lv(vv)).flatMap((vv => vv.blocks));
+               for (const vv of (0, Yv.l)(zv))
+                 if ("ts" === vv.lang || "typescript" === vv.lang)
+                   for (const [zv, Pv] of Dv(vv.code)) gz.set(zv, Pv)
```

#### 34. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L835-L843` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L743) · [Before (L835-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L835-L843)

```diff
-             return tz.split(/\s+/).find((zz => gz(zz) || mz(zz)))
-           }(zz);
-           if (gz(sz)) return;
-           if (Cz("before:highlightElement", {
-               el: zz,
-               language: sz
-             }), zz.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", zz);
-           if (zz.children.length > 0 && (Kz.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element  … [truncated]
-             throw new Ot("One of your code blocks includes unescaped HTML.", zz.innerHTML)
+             for (const [vv, zv] of(Sz ??= hz(Jv.default), Sz)) gz.has(vv) || gz.set(vv, zv)
```

#### 35. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L845-L866` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L745) · [Before (L845-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L845-L866)

```diff
-           tz = zz;
-           const Fz = tz.textContent,
-             Xz = sz ? Hz(Fz, {
-               language: sz,
-               ignoreIllegals: !0
-             }) : Pz(Fz);
-           zz.innerHTML = Xz.value, zz.dataset.highlighted = "yes",
-             function(zz, tz, sz) {
-               const Fz = tz && Wz[tz] || sz;
-               zz.classList.add("hljs"), zz.classList.add(`language-${Fz}`)
-             }(zz, sz, Xz.language), zz.result = {
-               language: Xz.language,
-               re: Xz.relevance,
-               relevance: Xz.relevance
-             }, Xz.secondBest && (zz.secondBest = {
-               language: Xz.secondBest.language,
- ... (6 more removed lines; see GitHub link above)
+           return gz
```

#### 36. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L868` → after: `L747-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L747-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L747-L764) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L868)

```diff
-         let Yz = !1;
+         const Nz = {
+           BlockName: "blockNames",
+           BlockNameOrId: "blockNames",
+           ItemName: "itemNames",
+           Song: "sounds",
+           ParticlePresetId: "particles",
+           PlayerPose: "skins",
+           IngameIconName: "icons",
+           ClientOptions: "clientOptions",
+           ClientOption: "clientOptions",
+           OtherEntitySettings: "entitySettings",
+           OtherEntitySetting: "entitySettings",
+           MobSettings: "mobSettings",
+           MobSetting: "mobSettings",
+           VehicleSetting: "vehicleSettings",
+           SettableVehicleSetting: "vehicleSettings"
+ ... (2 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L871-L874` → after: `L767-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L767-L776) · [Before (L871-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L871-L874)

```diff
-           if ("loading" === document.readyState) return Yz || window.addEventListener("DOMContentLoaded", (function() {
-             xz()
-           }), !1), void(Yz = !0);
-           document.querySelectorAll(Kz.cssSelector).forEach(rz)
+           if (!lz) {
+             lz = new Map;
+             for (const vv of Iv)
+               if (Kv(vv.layout))
+                 for (const zv of Lv(vv).sections) lz.has(zv.heading.text) || lz.set(zv.heading.text, {
+                   pageId: vv.id,
+                   anchor: zv.heading.anchor
+                 })
+           }
+           return lz
```

#### 38. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L878` → after: `L780-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L780-L781) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L878)

```diff
-           return zz = (zz || "").toLowerCase(), Fz[zz] || Fz[Wz[zz]]
+           const zv = vv.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
+           return zv ? Tz().get(zv[1]) : void 0
```

#### 39. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L881` → after: `L788-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L788-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L788-L793) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L881)

```diff
-         function Jz(zz, tz) {
+         function iz(vv) {
+           const zv = vv.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
+           return zv ? zv[1] : null
+         }
+ 
+         function cz(vv) {
```

#### 40. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L883` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L795) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L883)

```diff
-             languageName: sz
+             colour: zv
```

#### 41. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L885-L887` → after: `L797-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L797-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L797-L839) · [Before (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L885-L887)

```diff
-           "string" === typeof zz && (zz = [zz]), zz.forEach((zz => {
-             Wz[zz.toLowerCase()] = sz
-           }))
+           return (0, av.jsx)("span", {
+             className: "DocsColourSwatch",
+             style: {
+               background: zv
+             },
+             "aria-hidden": "true"
+           })
+         }
+ 
+         function Gz(vv) {
+           const zv = [];
+           let Pv = 0;
+           for (const hv of vv.matchAll(Cz)) zv.push(vv.slice(Pv, hv.index), (0, av.jsx)(cz, {
+             colour: hv[0]
+           }), hv[0]), Pv = hv.index + hv[0].length;
+           return zv.push(vv.slice(Pv)), zv
+ ... (27 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L892` → after: `L855-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L855-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L855-L866) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L892)

```diff
-           return tz && !tz.disableAutodetect
+           if (Sv) return (0, av.jsx)(gv.d, {
+             className: "DocsInlineCode DocsSymbolLink",
+             to: Bv(Pv, Zv(Sv.pageId), Sv.anchor),
+             children: zv
+           });
+           const ev = iz(zv);
+           return (0, av.jsxs)("code", {
+             className: "DocsInlineCode",
+             children: [ev && (0, av.jsx)(cz, {
+               colour: ev
+             }), zv]
+           })
```

#### 43. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L895-L899` → after: `L869-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L869-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L869-L895) · [Before (L895-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L895-L899)

```diff
-         function Cz(zz, tz) {
-           const sz = zz;
-           Xz.forEach((function(zz) {
-             zz[sz] && zz[sz](tz)
-           }))
+         function fz(vv) {
+           let {
+             text: zv
+           } = vv;
+           const Pv = [];
+           let Sv = 0;
+           for (const hv of zv.matchAll(Yv.f)) {
+             hv.index > Sv && Pv.push(...Gz(zv.slice(Sv, hv.index)));
+             const [, vv, ev, gv, pv, dv] = hv;
+             vv ? Pv.push((0, av.jsx)(jz, {
+               code: (0, Yv.n)(vv, ev)
+             })) : gv ? Pv.push((0, av.jsx)("strong", {
+               children: (0, av.jsx)(fz, {
+                 text: gv
+               })
+             })) : Pv.push((0, av.jsx)(mz, {
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L901-L924` → after: `L897-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L897-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L897-L970) · [Before (L901-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L901-L924)

```diff
-         Object.assign(zz, {
-           highlight: Hz,
-           highlightAuto: Pz,
-           highlightAll: xz,
-           highlightElement: rz,
-           highlightBlock: function(zz) {
-             return zt("10.7.0", "highlightBlock will be removed entirely in v12.0"), zt("10.7.0", "Please use highlightElement now."), rz(zz)
-           },
-           configure: function(zz) {
-             Kz = vt(Kz, zz)
-           },
-           initHighlighting: () => {
-             xz(), zt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
-           },
-           initHighlightingOnLoad: function() {
-             xz(), zt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
- ... (8 more removed lines; see GitHub link above)
+         const Fz = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
+           Yz = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
+ 
+         function nz(vv) {
+           let {
+             type: zv
+           } = vv;
+           const Pv = dz(),
+             Sv = [];
+           for (const hv of zv.trim().matchAll(Fz)) {
+             const [vv, zv, ev, gv, pv] = hv;
+             zv ? Sv.push((0, av.jsx)("span", {
+               className: "DocsTypeString",
+               children: vv
+             })) : ev && Pv.has(ev) ? Sv.push((0, av.jsx)(Uz, {
+               name: ev,
+ ... (58 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L926-L927` → after: `L972-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L972-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L972-L983) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L926-L927)

```diff
-             Wz.name || (Wz.name = tz), Fz[tz] = Wz, Wz.rawDefinition = sz.bind(null, zz), Wz.aliases && Jz(Wz.aliases, {
-               languageName: tz
+           }), [Tv]), (0, hv.useEffect)((() => () => {
+             clearTimeout(iv.current)
+           }), []), (0, hv.useLayoutEffect)((() => {
+             if (!Tv || !pv.current || !dv.current) return void sv(null);
+             const vv = pv.current.getBoundingClientRect(),
+               zv = dv.current.offsetHeight,
+               Pv = Math.min(Oz, window.innerWidth - 32),
+               hv = Math.min(Math.max(16, vv.left), window.innerWidth - Pv - 16),
+               Sv = vv.bottom + Dz + zv < window.innerHeight;
+             sv({
+               left: hv,
+               top: Sv ? vv.bottom + Dz : Math.max(16, vv.top - Dz - zv)
```

#### 46. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L930-L932` → after: `L1069-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1069-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1069-L1078) · [Before (L930-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L930-L932)

```diff
-           unregisterLanguage: function(zz) {
-             delete Fz[zz];
-             for (const tz of Object.keys(Wz)) Wz[tz] === zz && delete Wz[tz]
+           timedClick: {
+             Ez: 3e3,
+             icon: "fa-solid fa-computer-mouse",
+             label: [{
+               str: "Click to complete the QTE!"
+             }],
+             bz: !0,
+             scale: 3,
+             rotation: 15,
+             rz: !1
```

#### 47. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L934-L935` → after: `L1080-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1080-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1080-L1093) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L934-L935)

```diff
-           listLanguages: function() {
-             return Object.keys(Fz)
+           gravityBar: {
+             Az: 30,
+             Xz: .25,
+             vP: 3,
+             zP: .8,
+             gravity: 1,
+             PP: 1.5,
+             hP: 8,
+             SP: 4,
+             yz: !1,
+             description: [{
+               str: "Hold to catch!"
+             }],
+             icon: "Moonfish"
```

#### 48. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L937-L952` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1095-L1103) · [Before (L937-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L937-L952)

```diff
-           getLanguage: mz,
-           registerAliases: Jz,
-           autoDetection: Iz,
-           inherit: vt,
-           addPlugin: function(zz) {
-             ! function(zz) {
-               zz["before:highlightBlock"] && !zz["before:highlightElement"] && (zz["before:highlightElement"] = tz => {
-                 zz["before:highlightBlock"](Object.assign({
-                   block: tz.el
-                 }, tz))
-               }), zz["after:highlightBlock"] && !zz["after:highlightElement"] && (zz["after:highlightElement"] = tz => {
-                 zz["after:highlightBlock"](Object.assign({
-                   block: tz.el
-                 }, tz))
-               })
-             }(zz), Xz.push(zz)
+           precisionBar: {
+             speed: .5,
+             gP: .15,
+             label: [{
+               str: "Click when the marker is within the green zone."
+             }],
+             icon: "",
+             scale: 1,
+             rotation: 0
```

#### 49. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L954-L955` → after: `L1105-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1105-L1113) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L954-L955)

```diff
-           removePlugin: function(zz) {
-             const tz = Xz.indexOf(zz); - 1 !== tz && Xz.splice(tz, 1)
+           rhythmClick: {
+             dP: 5,
+             NP: 1200,
+             lP: .15,
+             TP: 3,
+             label: [{
+               str: "Click when the circles align!"
+             }],
+             icon: ""
```

#### 50. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L968-L1158` → after: `L1116-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1116-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1116-L1140) · [Before (L968-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L968-L1158)

```diff
-         for (const sz in Qz) "object" === typeof Qz[sz] && tz(Qz[sz]);
-         return Object.assign(zz, Qz), zz
-       },
-       ut = Kt({});
-     ut.newInstance = () => Kt({}), zz.exports = ut, ut.HighlightJS = ut, ut.default = ut
-   },
-   4359: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Fz
-     });
-     const Fz = sz(4362)
-   },
-   4367: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => uz
-     });
- ... (175 more removed lines; see GitHub link above)
+         var Qz = Pv(302),
+           Zz = Pv(1946);
+ 
+         function Az(vv) {
+           return vv.startsWith("fa-")
+         }
+         const Lz = {
+             text: "Text",
+             icon: "Icon",
+             progressBar: "Progress bar",
+             keyBinding: "Key binding",
+             other: "Other"
+           },
+           Hz = {
+             text: "Text",
+             icon: {
+ ... (9 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1160-L1172` → after: `L1142-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1142-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1142-L1153) · [Before (L1160-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1160-L1172)

```diff
-           }]
-         },
-         Tz = {
-           relevance: 0,
-           match: tz.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
-           className: "title.class",
-           keywords: {
-             _: [...Oz, ...oz]
-           }
-         },
-         cz = {
-           variants: [{
-             match: [/function/, /\s+/, sz, /(?=\s*\()/]
+           };
+ 
+         function Mz(vv) {
+           return "string" === typeof vv ? "text" : "entityName" in vv || "translationKey" in vv ? "other" : (0, Qz.qb)(vv) ? "progressBar" : (0, Qz.mb)(vv) ? "keyBinding" : "icon" in vv ? "icon" : "str" in vv && "string" === typeof vv.str ? "text" : "other"
+         }
+         const yz = [{
+             path: ["style", "color"],
+             label: "Colour",
+             field: {
+               kind: "colour"
+             },
+             defaultText: "The surrounding text's"
```

#### 52. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1174-L1268` → after: `L1155-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1155-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1155-L1160) · [Before (L1174-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1174-L1268)

```diff
-             match: [/function/, /\s*(?=\()/]
-           }],
-           className: {
-             1: "keyword",
-             3: "title.function"
-           },
-           label: "func.def",
-           contains: [Zz],
-           illegal: /%/
-         };
-       const jz = {
-         match: tz.concat(/\b/, (Az = [...vz, "super", "import"].map((zz => `${zz}\\s*\\(`)), tz.concat("(?!", Az.join("|"), ")")), sz, tz.lookahead(/\s*\(/)),
-         className: "title.function",
-         relevance: 0
-       };
-       var Az;
- ... (79 more removed lines; see GitHub link above)
+             path: ["style", "fontSize"],
+             label: "Font size",
+             field: {
+               kind: "size"
+             },
+             defaultText: "1em"
```

#### 53. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1270-L1271` → after: `L1162-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1162-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1162-L1168) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1270-L1271)

```diff
-             ib: /,/,
-             relevance: 0
+             path: ["style", "fontWeight"],
+             label: "Font weight",
+             field: {
+               kind: "choice",
+               options: ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
+             },
+             defaultText: "normal"
```

#### 54. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1273-L1274` → after: `L1170-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1170-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1170-L1176) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1273-L1274)

```diff
-             match: /\s+/,
-             relevance: 0
+             path: ["style", "fontStyle"],
+             label: "Font style",
+             field: {
+               kind: "choice",
+               options: ["normal", "italic"]
+             },
+             defaultText: "normal"
```

#### 55. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1276-L1278` → after: `L1178-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1178-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1178-L1201) · [Before (L1276-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1276-L1278)

```diff
-             variants: [{
-               ib: uz,
-               end: Nz
+             path: ["style", "opacity"],
+             label: "Opacity",
+             field: {
+               kind: "fraction"
+             },
+             defaultText: "1"
+           }],
+           Bz = {
+             text: [{
+               path: ["str"],
+               label: "Text",
+               field: {
+                 kind: "text",
+                 multiline: !0
+               },
+               isRequired: !0
+ ... (8 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1280` → after: `L1203-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1203-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1203-L1208) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1280)

```diff
-               match: /<[A-Za-z0-9\\._:-]+\s*\/>/
+               path: ["style", "color"],
+               label: "Colour",
+               field: {
+                 kind: "colour"
+               },
+               defaultText: "None, or the text's for Font Awesome"
```

#### 57. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1282-L1284` → after: `L1210-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1210-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1210-L1222) · [Before (L1282-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1282-L1284)

```diff
-               ib: bz.ib,
-               "on:begin": bz.isTrulyOpeningTag,
-               end: bz.end
+               path: ["style", "fontSize"],
+               label: "Size",
+               field: {
+                 kind: "size"
+               },
+               defaultText: "1.8em"
+             }, {
+               path: ["style", "opacity"],
+               label: "Opacity",
+               field: {
+                 kind: "fraction"
+               },
+               defaultText: "1"
```

#### 58. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1286-L1418` → after: `L1224-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1224-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1224-L1319) · [Before (L1286-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1286-L1418)

```diff
-             subLanguage: "xml",
-             contains: [{
-               ib: bz.ib,
-               end: bz.end,
-               skip: !0,
-               contains: ["self"]
-             }]
-           }]
-         }, cz, {
-           beginKeywords: "while if switch catch for"
-         }, {
-           ib: "\\b(?!function)" + zz.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
-           returnBegin: !0,
-           label: "func.def",
-           contains: [Zz, zz.inherit(zz.TITLE_MODE, {
-             ib: sz,
- ... (117 more removed lines; see GitHub link above)
+             progressBar: [{
+               path: ["progress"],
+               label: "Progress",
+               field: {
+                 kind: "fraction"
+               },
+               isRequired: !0
+             }, {
+               path: ["width"],
+               label: "Width",
+               field: {
+                 kind: "size"
+               },
+               defaultText: "4em"
+             }, {
+               path: ["height"],
+ ... (80 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1420-L1428` → after: `L1321-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1321-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1321-L1331) · [Before (L1420-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1420-L1428)

```diff
-         },
-         xz = {
-           ib: ".?gql`",
-           end: "",
-           starts: {
-             end: "`",
-             returnEnd: !1,
-             contains: [zz.BACKSLASH_ESCAPE, Pz],
-             subLanguage: "graphql"
+         }
+         const kz = /^[A-Za-z_$][\w$]*$/;
+ 
+         function Xz(vv) {
+           if (Array.isArray(vv)) return `[${vv.map(Xz).join(", ")}]`;
+           if (vv && "object" === typeof vv) {
+             const zv = Object.entries(vv).map((vv => {
+               let [zv, Pv] = vv;
+               return `${kz.test(zv)?zv:JSON.stringify(zv)}: ${Xz(Pv)}`
+             }));
+             return 0 === zv.length ? "{}" : `{ ${zv.join(", ")} }`
```

#### 60. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1430-L1498` → after: `L1333-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1333-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1333-L1358) · [Before (L1430-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1430-L1498)

```diff
-         },
-         mz = {
-           className: "string",
-           ib: "`",
-           end: "`",
-           contains: [zz.BACKSLASH_ESCAPE, Pz]
-         },
-         Jz = {
-           className: "comment",
-           variants: [zz.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
-             relevance: 0,
-             contains: [{
-               ib: "(?=@[A-Za-z]+)",
-               relevance: 0,
-               contains: [{
-                 className: "doctag",
- ... (53 more removed lines; see GitHub link above)
+           return JSON.stringify(vv)
+         }
+ 
+         function uz(vv) {
+           const zv = vv.map(Xz),
+             Pv = `[${zv.join(", ")}]`;
+           return Pv.length <= 60 ? Pv : `[\n${zv.map((vv=>`    ${vv},`)).join("\n")}\n]`
+         }
+         const vP = {
+           "\n": "\\n",
+           "\r": "\\r",
+           "\t": "\\t"
+         };
+ 
+         function zP(vv) {
+           let zv = "";
+ ... (10 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1500-L1504` → after: `L1360-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1360-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1360-L1407) · [Before (L1500-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1500-L1504)

```diff
-           }, {
-             match: [/class/, /\s+/, sz],
-             scope: {
-               1: "keyword",
-               3: "title.class"
+           }
+           return `"${zv}"`
+         }
+ 
+         function PP(vv) {
+           if ("string" === typeof vv) return !0;
+           if (!vv || "object" !== typeof vv || Array.isArray(vv)) return !1;
+           const zv = vv;
+           return "ProgressBar" === zv.type ? "number" === typeof zv.progress : "StyledKeyBinding" === zv.type ? Zz.f.includes(zv.action) : "string" === typeof zv.icon || "string" === typeof zv.str || "string" === typeof zv.entityName || "string" === typeof zv.translationKey
+         }
+ 
+         function hP(vv) {
+           let zv;
+           try {
+             zv = function(vv) {
+               let zv = "",
+ ... (32 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1515-L1681` → after: `L1410-L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1410-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1410-L1420) · [Before (L1515-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1515-L1681)

```diff
-         },
-         cz = {
-           variants: [{
-             match: [/function/, /\s+/, sz, /(?=\s*\()/]
-           }, {
-             match: [/function/, /\s*(?=\()/]
-           }],
-           className: {
-             1: "keyword",
-             3: "title.function"
-           },
-           label: "func.def",
-           contains: [Zz],
-           illegal: /%/
-         };
-       const jz = {
- ... (151 more removed lines; see GitHub link above)
+           if (!Array.isArray(zv)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
+           };
+           const Pv = zv.findIndex((vv => !PP(vv)));
+           return -1 !== Pv ? {
+             parts: null,
+             error: `Part ${Pv+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+           } : {
+             parts: zv,
+             error: null
```

#### 63. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1683-L1690` → after: `L1422-L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1422-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1422-L1429) · [Before (L1683-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1683-L1690)

```diff
-         },
-         Nz = {
-           beginKeywords: "interface",
-           end: /\{/,
-           excludeEnd: !0,
-           keywords: {
-             keyword: "interface extends",
-             built_in: oz
+         }
+         const SP = 1 / Rz.f.clientTicksPerSecond,
+           eP = 700,
+           gP = {
+             type: null,
+             parameters: null,
+             state: null,
+             isActive: !1
```

#### 64. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L1692-L1728` → after: `L1431-L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L1431-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/76.js#L1431-L7245) · [Before (L1692-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/76.js#L1692-L1728)

```diff
-           contains: [sz.exports.CLASS_REFERENCE]
-         },
-         bz = {
-           $pattern: Fz,
-           keyword: Wz.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
-           literal: Xz,
-           built_in: Kz.concat(oz),
-           "variable.language": Uz
-         },
-         wz = {
-           className: "meta",
-           ib: "@" + Oz
-         },
-         Dz = (zz, tz, sz) => {
-           const Fz = zz.contains.findIndex((zz => zz.label === tz));
-           if (-1 === Fz) throw new Error("can not find mode to replace");
- ... (21 more removed lines; see GitHub link above)
+           pP = {
+             progressBar: Iz.progressBar.Bz,
+             timedClick: Iz.timedClick.icon,
+             gravityBar: Iz.gravityBar.icon,
+             precisionBar: Iz.precisionBar.icon,
+             rhythmClick: Iz.rhythmClick.icon
+           };
+ 
+         function dP(vv) {
+           let {
+             type: zv
+           } = vv;
+           const [Pv, Sv] = (0, hv.useState)("ready"), [gv, pv] = (0, hv.useState)(1), [dv, Nv] = (0, hv.useState)(!0), lv = (0, hv.useRef)(null), Tv = (0, hv.useRef)(null), Wv = (0, hv.useRef)(null), wv = (0, hv.useRef)(new Set), sv = (0, hv.useRef)(!1), iv = pP[zv], cv = (0, hv. … [truncated]
+             getState: () => {
+               var vv, zv;
+               return null !== (vv = null === (zv = Wv.current) || void 0 === zv ? void 0 : zv.getState()) && void 0 !== vv ? vv : gP
+ ... (5799 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L4-L18)

```diff
-   4379: (zz, tz, sz) => {
-     sz.d(tz, {
-       A: () => Nz,
-       d: () => Fz,
-       e: () => Oz,
-       i: () => gz,
-       l: () => Dz,
-       n: () => oz,
-       q: () => Wz,
-       t: () => Xz,
-       w: () => wz,
-       x: () => bz
-     });
-     const Fz = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
- 
+   4472: vv => {
```

#### 2. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20-L23` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L6-L21) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L20-L23)

```diff
-       try {
-         return decodeURIComponent(zz.slice(1))
-       } catch {
-         return zz.slice(1)
+       return vv instanceof Map ? vv.clear = vv.delete = vv.set = function() {
+         throw new Error("map is read-only")
+       } : vv instanceof Set && (vv.add = vv.clear = vv.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(vv), Object.getOwnPropertyNames(vv).forEach((Pv => {
+         const hv = vv[Pv],
+           Sv = typeof hv;
+         "object" !== Sv && "function" !== Sv || Object.isFrozen(hv) || zv(hv)
+       })), vv
+     }
+     class Pv {
+       constructor(vv) {
+         void 0 === vv.data && (vv.data = {}), this.data = vv.data, this.isMatchIgnored = !1
+       }
+       ignoreMatch() {
+         this.isMatchIgnored = !0
```

#### 3. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L26) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L28)

```diff
-       return zz.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
+       return vv.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
```

#### 4. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L32-L33` → after: `L29-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L29-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L29-L141) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L32-L33)

```diff
-     function oz(zz, tz) {
-       return 2 === zz.length ? tz.replace(/^ (.*) $/, "$1") : tz
+     function Sv(vv) {
+       const zv = Object.create(null);
+       for (const ev in vv) zv[ev] = vv[ev];
+       for (var Pv = arguments.length, hv = new Array(Pv > 1 ? Pv - 1 : 0), Sv = 1; Sv < Pv; Sv++) hv[Sv - 1] = arguments[Sv];
+       return hv.forEach((function(vv) {
+         for (const Pv in vv) zv[Pv] = vv[Pv]
+       })), zv
+     }
+     const ev = vv => !!vv.scope;
+     class gv {
+       constructor(vv, zv) {
+         this.buffer = "", this.classPrefix = zv.classPrefix, vv.walk(this)
+       }
+       addText(vv) {
+         this.buffer += hv(vv)
+       }
+ ... (97 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L145) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L37)

```diff
-       return "" === zz.trim()
+       return vv ? "string" === typeof vv ? vv : vv.source : null
```

#### 6. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L41-L43` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L149) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L41-L43)

```diff
-       const tz = [];
-       for (const sz of zz.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) tz.length > 0 && tz[tz.length - 1].endsWith("\\") ? tz[tz.length - 1] += `|${sz}` : tz.push(sz);
-       return tz.map((zz => zz.trim().replaceAll("\\|", "|")))
+       return av("(?=", vv, ")")
```

#### 7. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L48-L70` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L153) · [Before (L48-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L48-L70)

```diff
-       const tz = [],
-         sz = [{
-           indent: -1,
-           items: tz
-         }];
-       let Fz = null;
-       for (const Wz of zz) {
-         const zz = Wz.match(Kz);
-         if (!zz) {
-           Fz && (Fz.text += ` ${Wz.trim()}`);
-           continue
-         }
-         const tz = zz[1].replace(/\t/g, "  ").length;
-         for (; tz <= sz[sz.length - 1].indent;) sz.pop();
-         Fz = {
-           text: zz[3].trim(),
- ... (7 more removed lines; see GitHub link above)
+       return av("(?:", vv, ")*")
```

#### 8. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L74-L149` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L157) · [Before (L74-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L74-L149)

```diff
-       const tz = zz.replace(/\r\n/g, "\n").split("\n"),
-         sz = [];
-       let Fz = 0;
-       for (; Fz < tz.length;) {
-         const zz = tz[Fz];
-         if (vz(zz)) {
-           Fz++;
-           continue
-         }
-         const Wz = zz.match(/^\s*```\s*(\w*)\s*$/);
-         if (Wz) {
-           const zz = [];
-           for (Fz++; Fz < tz.length && !/^\s*```\s*$/.test(tz[Fz]);) zz.push(tz[Fz]), Fz++;
-           Fz++, sz.push({
-             kind: "code",
-             lang: Wz[1] || "text",
- ... (60 more removed lines; see GitHub link above)
+       return av("(?:", vv, ")?")
```

#### 9. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L152-L192` → after: `L160-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L160-L162) · [Before (L152-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L152-L192)

```diff
-     function bz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const sz = Nz(zz);
-       let Fz = "";
-       const Wz = [],
-         Xz = [],
-         Oz = new Map;
-       for (const Uz of sz) {
-         if ("heading" === Uz.kind) {
-           var oz;
-           const zz = (null !== (oz = Oz.get(Uz.anchor)) && void 0 !== oz ? oz : 0) + 1;
-           Oz.set(Uz.anchor, zz), zz > 1 && (Uz.anchor = `${Uz.anchor}-${zz}`)
-         }
-         if ("heading" === Uz.kind && 1 === Uz.level && !Fz) {
-           Fz = Uz.text;
-           continue
- ... (25 more removed lines; see GitHub link above)
+     function av() {
+       for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
+       return zv.map((vv => lv(vv))).join("")
```

#### 10. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L195-L202` → after: `L165-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L165-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L165-L171) · [Before (L195-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L195-L202)

```diff
-     function wz(zz) {
-       return [{
-         heading: null,
-         blocks: zz.intro
-       }, ...zz.sections.map((zz => ({
-         heading: zz.heading,
-         blocks: zz.blocks
-       })))]
+     function sv() {
+       for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
+       const hv = function(vv) {
+         const zv = vv[vv.length - 1];
+         return "object" === typeof zv && zv.constructor === Object ? (vv.splice(vv.length - 1, 1), zv) : {}
+       }(zv);
+       return "(" + (hv.capture ? "" : "?:") + zv.map((vv => lv(vv))).join("|") + ")"
```

#### 11. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L206` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L175) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L206)

```diff
-       return zz.flatMap((zz => "code" === zz.kind ? [zz] : "quote" === zz.kind ? Dz(zz.blocks) : []))
+       return new RegExp(vv.toString() + "|").exec("").length - 1
```

#### 12. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L209-L220` → after: `L179-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L179-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L179-L194) · [Before (L209-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L209-L220)

```diff
-     function gz(zz) {
-       switch (zz.kind) {
-         case "heading":
-         case "paragraph":
-           return zz.text;
-         case "code":
-           return zz.code;
-         case "table":
-           return [zz.header, ...zz.rows].map((zz => zz.join(" "))).join(" ");
-         case "list": {
-           const tz = zz => zz.map((zz => `${zz.text} ${tz(zz.children)}`)).join(" ");
-           return tz(zz.items)
+     function cv(vv, zv) {
+       let {
+         joinWith: Pv
+       } = zv, hv = 0;
+       return vv.map((vv => {
+         hv += 1;
+         const zv = hv;
+         let Pv = lv(vv),
+           Sv = "";
+         for (; Pv.length > 0;) {
+           const vv = iv.exec(Pv);
+           if (!vv) {
+             Sv += Pv;
+             break
+           }
+           Sv += Pv.substring(0, vv.index), Pv = Pv.substring(vv.index + vv[0].length), "\\" === vv[0][0] && vv[1] ? Sv += "\\" + String(Number(vv[1]) + zv) : (Sv += vv[0], "(" === vv[0] && hv++)
```

#### 13. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L222-L226` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L196-L197) · [Before (L222-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L222-L226)

```diff
-         case "quote":
-           return zz.blocks.map(gz).join(" ");
-         case "rule":
-           return ""
-       }
+         return Sv
+       })).map((vv => `(${vv})`)).join(Pv)
```

#### 14. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L228-L233` → after: `L199-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L199-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L199-L332) · [Before (L228-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L228-L233)

```diff
-   },
-   6082: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => uz,
-       c: () => Oz,
-       e: () => oz
+     const Gv = "[a-zA-Z]\\w*",
+       mv = "[a-zA-Z_]\\w*",
+       jv = "\\b\\d+(\\.\\d+)?",
+       fv = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
+       Fv = "\\b(0b[01]+)",
+       Yv = {
+         dw: "\\\\[\\s\\S]",
+         relevance: 0
+       },
+       nv = {
+         scope: "string",
+         dw: "'",
+         end: "'",
+         illegal: "\\n",
+         contains: [Yv]
+       },
+ ... (118 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L242` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L336) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L242)

```diff
-       return zz === tz ? zz : `${zz} (${tz})`
+       "." === vv.input[vv.index - 1] && zv.ignoreMatch()
```

#### 16. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L245-L259` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L339-L340) · [Before (L245-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L245-L259)

```diff
-     function vz(zz) {
-       const tz = [];
-       let sz = 0;
-       for (const Fz of zz.matchAll(Oz)) {
-         Fz.index > sz && tz.push(zz.slice(sz, Fz.index));
-         const [, Wz, Oz, vz, Uz, Kz, uz] = Fz;
-         void 0 !== Wz ? tz.push(oz(Wz, Oz)) : void 0 !== vz || void 0 !== Uz ? tz.push((0, Xz.jsx)("strong", {
-           children: null !== vz && void 0 !== vz ? vz : Uz
-         }, Fz.index)) : void 0 !== Kz ? tz.push((0, Xz.jsx)("em", {
-           children: Kz
-         }, Fz.index)) : tz.push((0, Xz.jsx)("code", {
-           children: uz
-         }, Fz.index)), sz = Fz.index + Fz[0].length
-       }
-       return sz < zz.length && tz.push(zz.slice(sz)), tz
+     function Hv(vv, zv) {
+       void 0 !== vv.className && (vv.scope = vv.className, delete vv.className)
```

#### 17. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L263-L272` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L344) · [Before (L263-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L263-L272)

```diff
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       const Fz = zz.map(((zz, tz) => (0, Xz.jsxs)("li", {
-         children: [vz(zz.text), zz.children.length > 0 && Uz(zz.children, !1)]
-       }, tz)));
-       return tz ? (0, Xz.jsx)("ol", {
-         start: sz,
-         children: Fz
-       }) : (0, Xz.jsx)("ul", {
-         children: Fz
-       })
+       zv && vv.beginKeywords && (vv.dw = "\\b(" + vv.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", vv.__beforeBegin = Lv, vv.keywords = vv.keywords || vv.beginKeywords, delete vv.beginKeywords, void 0 === vv.relevance && (vv.relevance = 0))
```

#### 18. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L276-L318` → after: `L348-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L348-L354) · [Before (L276-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L276-L318)

```diff
-       switch (zz.kind) {
-         case "heading":
-           return zz.level <= 2 ? (0, Xz.jsx)("h3", {
-             children: vz(zz.text)
-           }, tz) : (0, Xz.jsx)("h4", {
-             children: vz(zz.text)
-           }, tz);
-         case "paragraph":
-           return (0, Xz.jsx)("p", {
-             children: vz(zz.text)
-           }, tz);
-         case "list":
-           return (0, Xz.jsx)(Fz.Fragment, {
-             children: Uz(zz.items, zz.ordered)
-           }, tz);
-         case "quote":
- ... (27 more removed lines; see GitHub link above)
+       Array.isArray(vv.illegal) && (vv.illegal = sv(...vv.illegal))
+     }
+ 
+     function Bv(vv, zv) {
+       if (vv.match) {
+         if (vv.dw || vv.end) throw new Error("begin & end are not supported with match");
+         vv.dw = vv.match, delete vv.match
```

#### 19. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L322` → after: `L358-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L358-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L358-L409) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L322)

```diff
-     function uz(zz) {
+     function Jv(vv, zv) {
+       void 0 === vv.relevance && (vv.relevance = 1)
+     }
+     const Ev = (vv, zv) => {
+         if (!vv.beforeMatch) return;
+         if (vv.starts) throw new Error("beforeMatch cannot be used with starts");
+         const Pv = Object.assign({}, vv);
+         Object.keys(vv).forEach((zv => {
+           delete vv[zv]
+         })), vv.keywords = Pv.keywords, vv.dw = av(Pv.beforeMatch, Tv(Pv.dw)), vv.starts = {
+           relevance: 0,
+           contains: [Object.assign(Pv, {
+             endsParent: !0
+           })]
+         }, vv.relevance = 0, delete Pv.beforeMatch
+       },
+ ... (36 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L324` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L411) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L324)

```diff
-         markdown: tz
+         key: hv
```

#### 21. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L326-L335` → after: `L413-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L413-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L413-L417) · [Before (L326-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L326-L335)

```diff
-       return (0, Xz.jsx)("div", {
-         className: "StudioAiAnswerText",
-         children: (0, Wz.A)(tz).map(((zz, tz) => {
-           if ("list" !== zz.kind || !zz.ordered) return sz = 0, Kz(zz, tz);
-           const Wz = sz + 1;
-           return sz += zz.items.length, (0, Xz.jsx)(Fz.Fragment, {
-             children: Uz(zz.items, !0, Wz)
-           }, tz)
-         }))
-       })
+       const ev = vv[hv],
+         gv = {},
+         pv = {};
+       for (let dv = 1; dv <= zv.length; dv++) pv[dv + Sv] = ev[dv], gv[dv + Sv] = !0, Sv += Cv(zv[dv - 1]);
+       vv[hv] = pv, vv[hv]._emit = gv, vv[hv]._multi = !0
```

#### 22. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L351` → after: `L421-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L421-L449) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L351)

```diff
-       return (0, Xz.e)(zz, Oz, (tz => !/^my/i.test(tz[0]) || !/follow $/i.test(zz.slice(0, tz.index)))).length > 0
+       ! function(vv) {
+         vv.scope && "object" === typeof vv.scope && null !== vv.scope && (vv.beginScope = vv.scope, delete vv.scope)
+       }(vv), "string" === typeof vv.beginScope && (vv.beginScope = {
+           _wrap: vv.beginScope
+         }), "string" === typeof vv.endScope && (vv.endScope = {
+           _wrap: vv.endScope
+         }),
+         function(vv) {
+           if (Array.isArray(vv.dw)) {
+             if (vv.skip || vv.excludeBegin || vv.returnBegin) throw Xv("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), zz;
+             if ("object" !== typeof vv.beginScope || null === vv.beginScope) throw Xv("beginScope must be object"), zz;
+             Pz(vv, vv.dw, {
+               key: "beginScope"
+             }), vv.dw = cv(vv.dw, {
+               joinWith: ""
+             })
+ ... (13 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L358-L368` → after: `L453-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L453-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L453-L458) · [Before (L358-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L358-L368)

```diff
-       return function(zz) {
-         const tz = [];
-         let sz = !1;
-         for (const Fz of zz.split("\n")) {
-           if (/^\s*(```|~~~)/.test(Fz)) {
-             sz = !sz;
-             continue
-           }
-           if (sz || /^\s*>/.test(Fz)) continue;
-           const zz = Fz.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-           tz.push(...(0, Wz.t)(zz))
+       function zv(zv, Pv) {
+         return new RegExp(lv(zv), "m" + (vv.case_insensitive ? "i" : "") + (vv.unicodeRegex ? "u" : "") + (Pv ? "g" : ""))
+       }
+       class Pv {
+         constructor() {
+           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
```

#### 24. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L370-L371` → after: `L460-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L460-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L460-L546) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L370-L371)

```diff
-         return tz
-       }(zz).filter((zz => oz(zz) || Uz.test(zz) && !vz.test(zz)))
+         addRule(vv, zv) {
+           zv.position = this.position++, this.matchIndexes[this.matchAt] = zv, this.regexes.push([zv, vv]), this.matchAt += Cv(vv) + 1
+         }
+         compile() {
+           0 === this.regexes.length && (this.exec = () => null);
+           const vv = this.regexes.map((vv => vv[1]));
+           this.matcherRe = zv(cv(vv, {
+             joinWith: "|"
+           }), !0), this.lastIndex = 0
+         }
+         exec(vv) {
+           this.matcherRe.lastIndex = this.lastIndex;
+           const zv = this.matcherRe.exec(vv);
+           if (!zv) return null;
+           const Pv = zv.findIndex(((vv, zv) => zv > 0 && void 0 !== vv)),
+             hv = this.matchIndexes[Pv];
+ ... (71 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L388-L389` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L550) · [Before (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L388-L389)

```diff
-       const tz = bz.findIndex((tz => tz.name === zz));
-       return -1 === tz ? bz.length : tz
+       return !!vv && (vv.endsWithParent || ez(vv.starts))
```

#### 26. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L394-L395` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L553-L554) · [Before (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L394-L395)

```diff
-       constructor(zz) {
-         super(`Studio AI chat ${zz}`), this.reason = zz
+       constructor(vv, zv) {
+         super(vv), this.name = "HTMLInjectionError", this.html = zv
```

#### 27. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L399-L410` → after: `L582-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L582-L583) · [Before (L399-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L399-L410)

```diff
-     function Bz(zz, tz) {
-       const sz = new AbortController,
-         Fz = () => {
-           sz.abort()
-         },
-         Wz = setTimeout(Fz, zz);
-       return null !== tz && void 0 !== tz && tz.aborted && Fz(), null === tz || void 0 === tz || tz.addEventListener("abort", Fz, {
-         once: !0
-       }), {
-         signal: sz.signal,
-         clear: () => {
-           clearTimeout(Wz), null === tz || void 0 === tz || tz.removeEventListener("abort", Fz)
+         function Cv(vv) {
+           return lv.noHighlightRe.test(vv)
```

#### 28. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L415-L419` → after: `L586-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L586-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L586-L592) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L415-L419)

```diff
-     function Pz(zz, tz, sz) {
-       return new Promise(((Wz, Xz) => {
-         const Oz = new AbortController,
-           oz = () => {
-             Oz.abort(), Xz((0, Fz.f)(sz))
+         function iv(vv, zv, Pv) {
+           let hv = "",
+             Sv = "";
+           "object" === typeof zv ? (hv = vv, Pv = zv.ignoreIllegals, Sv = zv.language) : (vz("10.7.0", "highlight(lang, code, ...args) has been deprecated."), vz("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Sv … [truncated]
+           const ev = {
+             code: hv,
+             language: Sv
```

#### 29. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L421-L458` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L594-L597) · [Before (L421-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L421-L458)

```diff
-         if (null !== sz && void 0 !== sz && sz.aborted) return void oz();
-         null === sz || void 0 === sz || sz.addEventListener("abort", oz, {
-           once: !0
-         });
-         const vz = bz.map((() => !1));
-         let Uz = null;
-         const Kz = bz.map((() => !1)),
-           uz = bz.map((() => !1));
-         bz.forEach(((Fz, Nz) => {
-           const wz = Bz(gz, Oz.signal);
-           xz(Fz, [{
-             role: "user",
-             content: zz
-           }], wz.signal).then((zz => {
-             Oz.signal.aborted || ("busy" === zz || "failed" === zz ? (Kz[Nz] = "busy" === zz, uz[Nz] = !0) : null !== zz && (null === Uz || Nz < Uz.rank) && (Uz = {
-               rank: Nz,
- ... (22 more removed lines; see GitHub link above)
+           Ov("before:highlight", ev);
+           const gv = ev.result ? ev.result : cv(ev.language, ev.code, Pv);
+           return gv.code = ev.code, Ov("after:highlight", gv), gv
+         }
```

#### 30. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L460-L535` → after: `L599-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L599-L600) · [Before (L460-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L460-L535)

```diff
-     function rz(zz) {
-       var tz, sz;
-       return "length" === (null === zz || void 0 === zz || null === (tz = zz.choices) || void 0 === tz || null === (sz = tz[0]) || void 0 === sz ? void 0 : sz.finish_reason)
-     }
-     async function Yz(zz, tz, sz) {
-       const Fz = bz.find((tz => tz.name === zz));
-       if (void 0 === Fz) return "failed";
-       const Wz = Bz(gz, sz);
-       try {
-         const zz = await xz(Fz, tz, Wz.signal);
-         return null !== zz && "object" === typeof zz ? zz.isCutOff ? (console.warn(`Studio AI: ${Fz.name}'s answer was cut off at the token limit`), null) : {
-           text: zz.text
-         } : zz
-       } finally {
-         Wz.clear()
-       }
- ... (60 more removed lines; see GitHub link above)
+         function cv(vv, zv, Sv, ev) {
+           const dv = Object.create(null);
```

#### 31. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L537-L539` → after: `L602-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L602-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L602-L624) · [Before (L537-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L537-L539)

```diff
-     function Oz(zz) {
-       return zz.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
-     }
+           function Nv() {
+             if (!Ov.keywords) return void Kv.addText(Vv);
+             let vv = 0;
+             Ov.keywordPatternRe.lastIndex = 0;
+             let zv = Ov.keywordPatternRe.exec(Vv),
+               Pv = "";
+             for (; zv;) {
+               Pv += Vv.substring(vv, zv.index);
+               const Sv = fv.case_insensitive ? zv[0].toLowerCase() : zv[0],
+                 ev = (hv = Sv, Ov.keywords[hv]);
+               if (ev) {
+                 const [vv, hv] = ev;
+                 if (Kv.addText(Pv), Pv = "", dv[Sv] = (dv[Sv] || 0) + 1, dv[Sv] <= 7 && (Uv += hv), vv.startsWith("_")) Pv += zv[0];
+                 else {
+                   const Pv = fv.classNameAliases[vv] || vv;
+                   Wv(zv[0], Pv)
+ ... (7 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L541-L544` → after: `L626-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L626-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L626-L636) · [Before (L541-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L541-L544)

```diff
-     function oz(zz) {
-       return zz.replace(/\$/g, "\\$")
-     }
-     const vz = /[.!?](?=\s|\*|_|$)|\n|$/g;
+           function Tv() {
+             null != Ov.subLanguage ? function() {
+               if ("" === Vv) return;
+               let vv = null;
+               if ("string" === typeof Ov.subLanguage) {
+                 if (!hv[Ov.subLanguage]) return void Kv.addText(Vv);
+                 vv = cv(Ov.subLanguage, Vv, !0, Dv[Ov.subLanguage]), Dv[Ov.subLanguage] = vv._top
+               } else vv = Gv(Vv, Ov.subLanguage.length ? Ov.subLanguage : null);
+               Ov.relevance > 0 && (Uv += vv.relevance), Kv.__addSublanguage(vv._emitter, vv.language)
+             }() : Nv(), Vv = ""
+           }
```

#### 33. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L546-L550` → after: `L638-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L638-L640) · [Before (L546-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L546-L550)

```diff
-     function Uz(zz, tz) {
-       vz.lastIndex = tz;
-       const sz = vz.exec(zz);
-       return sz.index + sz[0].length
-     }
+           function Wv(vv, zv) {
+             "" !== vv && (Kv.startScope(zv), Kv.addText(vv), Kv.endScope())
+           }
```

#### 34. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L552-L554` → after: `L642-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L642-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L642-L654) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L552-L554)

```diff
-     function Kz(zz) {
-       return (0, Fz.y)(zz, /\s+/g, (0, Fz.s)(".!?")).flatMap((zz => zz.split("\n")))
-     }
+           function wv(vv, zv) {
+             let Pv = 1;
+             const hv = zv.length - 1;
+             for (; Pv <= hv;) {
+               if (!vv._emit[Pv]) {
+                 Pv++;
+                 continue
+               }
+               const hv = fv.classNameAliases[vv[Pv]] || vv[Pv],
+                 Sv = zv[Pv];
+               hv ? Wv(Sv, hv) : (Vv = Sv, Nv(), Vv = ""), Pv++
+             }
+           }
```

#### 35. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L556-L562` → after: `L656-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L656-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L656-L662) · [Before (L556-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L556-L562)

```diff
-     function uz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz;
-       const Fz = [...zz.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((zz => zz.index)),
-         Wz = Fz.filter((zz => zz < tz)),
-         Xz = Fz.find((zz => zz >= sz));
-       return [0 === Wz.length ? 0 : Wz.at(-1) + 1, void 0 === Xz ? zz.length : Xz + 1]
-     }
+           function av(vv, zv) {
+             return vv.scope && "string" === typeof vv.scope && Kv.openNode(fv.classNameAliases[vv.scope] || vv.scope), vv.beginScope && (vv.beginScope._wrap ? (Wv(Vv, fv.classNameAliases[vv.beginScope._wrap] || vv.beginScope._wrap), Vv = "") : vv.beginScope._multi && (wv(vv.begin … [truncated]
+               parent: {
+                 value: Ov
+               }
+             }), Ov
+           }
```

#### 36. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L564-L567` → after: `L664-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L664-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L664-L680) · [Before (L564-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L564-L567)

```diff
-     function Nz(zz, tz) {
-       const sz = zz.charCodeAt(tz - 1);
-       return zz.slice(0, tz > 0 && tz < zz.length && sz >= 55296 && sz <= 56319 ? tz - 1 : tz)
-     }
+           function sv(vv, zv, hv) {
+             let Sv = function(vv, zv) {
+               const Pv = vv && vv.exec(zv);
+               return Pv && 0 === Pv.index
+             }(vv.endRe, hv);
+             if (Sv) {
+               if (vv["on:end"]) {
+                 const hv = new Pv(vv);
+                 vv["on:end"](zv, hv), hv.isMatchIgnored && (Sv = !1)
+               }
+               if (Sv) {
+                 for (; vv.endsParent && vv.parent;) vv = vv.parent;
+                 return vv
+               }
+             }
+             if (vv.endsWithParent) return sv(vv.parent, zv, hv)
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L569-L571` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L682-L684) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L569-L571)

```diff
-     function bz(zz, tz) {
-       return `${tz}${zz.replace(/\\/g,"\\\\").split(tz).join(`\\${tz}`)}${tz}`
-     }
+           function Cv(vv) {
+             return 0 === Ov.matcher.regexIndex ? (Vv += vv[0], 1) : (tv = !0, 0)
+           }
```

#### 38. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L573-L575` → after: `L686-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L686-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L686-L698) · [Before (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L573-L575)

```diff
-     function wz(zz) {
-       return zz.charAt(0).toUpperCase() + zz.slice(1)
-     }
+           function iv(vv) {
+             const Pv = vv[0],
+               hv = zv.substring(vv.index),
+               Sv = sv(Ov, vv, hv);
+             if (!Sv) return Nz;
+             const ev = Ov;
+             Ov.endScope && Ov.endScope._wrap ? (Tv(), Wv(Pv, Ov.endScope._wrap)) : Ov.endScope && Ov.endScope._multi ? (Tv(), wv(Ov.endScope, vv)) : ev.skip ? Vv += Pv : (ev.returnEnd || ev.excludeEnd || (Vv += Pv), Tv(), ev.excludeEnd && (Vv = Pv));
+             do {
+               Ov.scope && Kv.closeNode(), Ov.skip || Ov.subLanguage || (Uv += Ov.relevance), Ov = Ov.parent
+             } while (Ov !== Sv.parent);
+             return Sv.starts && av(Sv.starts, vv), ev.returnEnd ? 0 : Pv.length
+           }
+           let mv = {};
```

#### 39. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L577-L579` → after: `L700-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L700-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L700-L796) · [Before (L577-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L577-L579)

```diff
-     function Dz(zz) {
-       return Math.round(zz).toLocaleString("en-US")
-     }
+           function jv(hv, ev) {
+             const pv = ev && ev[0];
+             if (Vv += hv, null == pv) return Tv(), 0;
+             if ("dw" === mv.type && "end" === ev.type && mv.index === ev.index && "" === pv) {
+               if (Vv += zv.slice(ev.index, ev.index + 1), !gv) {
+                 const zv = new Error(`0 width match regex (${vv})`);
+                 throw zv.languageName = vv, zv.badRule = mv.rule, zv
+               }
+               return 1
+             }
+             if (mv = ev, "dw" === ev.type) return function(vv) {
+               const zv = vv[0],
+                 hv = vv.rule,
+                 Sv = new Pv(hv),
+                 ev = [hv.__beforeBegin, hv["on:begin"]];
+               for (const Pv of ev)
+ ... (81 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L581-L584` → after: `L798-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L798-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L798-L823) · [Before (L581-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L581-L584)

```diff
-     function gz(zz) {
-       return zz.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((zz => "" !== zz))
-     }
-     const Hz = 3;
+         function Gv(vv, zv) {
+           zv = zv || lv.languages || Object.keys(hv);
+           const Pv = function(vv) {
+               const zv = {
+                 value: pz(vv),
+                 illegal: !1,
+                 relevance: 0,
+                 _top: dv,
+                 _emitter: new lv.__emitter(lv)
+               };
+               return zv._emitter.addText(vv), zv
+             }(vv),
+             Sv = zv.filter(Fv).filter(nv).map((zv => cv(zv, vv, !1)));
+           Sv.unshift(Pv);
+           const ev = Sv.sort(((vv, zv) => {
+               if (vv.relevance !== zv.relevance) return zv.relevance - vv.relevance;
+ ... (10 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L586-L588` → after: `L825-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L825-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L825-L868) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L586-L588)

```diff
-     function Bz(zz, tz) {
-       return gz(zz).filter((zz => zz.length >= Hz && !/\d/.test(zz))).map((zz => `${zz} ${tz}`))
-     }
+         function mv(vv) {
+           let zv = null;
+           const Pv = function(vv) {
+             let zv = vv.className + " ";
+             zv += vv.parentNode ? vv.parentNode.className : "";
+             const Pv = lv.languageDetectRe.exec(zv);
+             if (Pv) {
+               const zv = Fv(Pv[1]);
+               return zv || (uv(pv.replace("{}", Pv[1])), uv("Falling back to no-highlight mode for this block.", vv)), zv ? Pv[1] : "no-highlight"
+             }
+             return zv.split(/\s+/).find((vv => Cv(vv) || Fv(vv)))
+           }(vv);
+           if (Cv(Pv)) return;
+           if (Ov("before:highlightElement", {
+               el: vv,
+               language: Pv
+ ... (28 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L590-L592` → after: `L870-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L870-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L870-L875) · [Before (L590-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L590-L592)

```diff
-     function Pz(zz) {
-       return zz.split(/[\s:_]+/).filter((zz => "" !== zz)).map(Oz).join("[`:_\\s]+")
-     }
+         function fv() {
+           if ("loading" === document.readyState) return jv || window.addEventListener("DOMContentLoaded", (function() {
+             fv()
+           }), !1), void(jv = !0);
+           document.querySelectorAll(lv.cssSelector).forEach(mv)
+         }
```

#### 43. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L594-L596` → after: `L877-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L877-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L877-L879) · [Before (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L594-L596)

```diff
-     function rz(zz) {
-       return gz(zz.split(".").pop())
-     }
+         function Fv(vv) {
+           return vv = (vv || "").toLowerCase(), hv[vv] || hv[Sv[vv]]
+         }
```

#### 44. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L598-L600` → after: `L881-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L881-L888) · [Before (L598-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L598-L600)

```diff
-     function Yz(zz) {
-       return zz.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
-     }
+         function Yv(vv, zv) {
+           let {
+             languageName: Pv
+           } = zv;
+           "string" === typeof vv && (vv = [vv]), vv.forEach((vv => {
+             Sv[vv.toLowerCase()] = Pv
+           }))
+         }
```

#### 45. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L602-L610` → after: `L890-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L890-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L890-L978) · [Before (L602-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L602-L610)

```diff
-     function xz(zz) {
-       let tz = null;
-       return () => {
-         const sz = tz ??= zz();
-         return sz.catch((() => {
-           tz === sz && (tz = null)
-         })), sz
-       }
-     }
+         function nv(vv) {
+           const zv = Fv(vv);
+           return zv && !zv.disableAutodetect
+         }
+ 
+         function Ov(vv, zv) {
+           const Pv = vv;
+           ev.forEach((function(vv) {
+             vv[Pv] && vv[Pv](zv)
+           }))
+         }
+         Object.assign(vv, {
+           highlight: iv,
+           highlightAuto: Gv,
+           highlightAll: fv,
+           highlightElement: mv,
+ ... (73 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L612` → after: `L980-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L980-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L980-L992) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L612)

```diff
-   4495: (zz, tz, sz) => {
+   4474: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Tv
+     });
+     const hv = "[A-Za-z$_][0-9A-Za-z$_]*",
+       Sv = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       ev = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       gv = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       pv = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       dv = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       Nv = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       lv = [].concat(dv, gv, pv);
+ 
```

#### 47. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L615` → after: `L1219-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1219-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1219-L1322) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L615)

```diff
-         notAfter: zz
+         name: "JavaScript",
+         aliases: ["js", "jsx", "mjs", "cjs"],
+         keywords: av,
+         exports: {
+           PARAMS_CONTAINS: Dv,
+           CLASS_REFERENCE: Uv
+         },
+         illegal: /#(?![$_A-z])/,
+         contains: [vv.SHEBANG({
+           label: "shebang",
+           binary: "node",
+           relevance: 5
+         }), {
+           label: "use_strict",
+           className: "meta",
+           relevance: 10,
+ ... (88 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L619-L627` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1328) · [Before (L619-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L619-L627)

```diff
-       d: () => vz,
-       e: () => Uz,
-       h: () => oz,
-       l: () => Fz,
-       n: () => Wz,
-       p: () => Xz,
-       s: () => Oz,
-       v: () => Kz,
-       y: () => uz
+       e: () => Wv
```

#### 49. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L629-L630` → after: `L1330-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1330-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1330-L1337) · [Before (L629-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L629-L630)

```diff
-     const Wz = Fz("\\w$."),
-       Xz = Fz("\\w.,");
+     const hv = "[A-Za-z$_][0-9A-Za-z$_]*",
+       Sv = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       ev = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       gv = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       pv = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       dv = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       Nv = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       lv = [].concat(dv, gv, pv);
```

#### 50. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L633` → after: `L1340-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1340-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1340-L1669) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L633)

```diff
-       return tz => vz(tz, zz)
+       const zv = vv.regex,
+         Pv = hv,
+         Tv = "<>",
+         Wv = "</>",
+         wv = {
+           dw: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (vv, zv) => {
+             const Pv = vv[0].length + vv.index,
+               hv = vv.input[Pv];
+             if ("<" === hv || "," === hv) return void zv.ignoreMatch();
+             let Sv;
+             ">" === hv && (((vv, zv) => {
+               let {
+                 after: Pv
+               } = zv;
+ ... (314 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L637-L653` → after: `L1673-L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1673-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1673-L1690) · [Before (L637-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L637-L653)

```diff
-       return tz => !zz.test(tz.input.slice(0, tz.index))
-     }
- 
-     function vz(zz, tz) {
-       return zz.index > 0 && new RegExp(`[${tz}]`).test(zz.input[zz.index - 1])
-     }
- 
-     function Uz(zz, tz, sz) {
-       return function(zz) {
-         return void 0 !== zz && "function" !== typeof zz
-       }(sz) ? function(zz, tz, sz) {
-         const Fz = tz.flags.replace(/[gy]/g, ""),
-           Wz = new RegExp(`[^${sz}](?:${tz.source})`, `${Fz}g`),
-           Xz = [],
-           Oz = sz => {
-             const Fz = sz.index + sz[0].length;
- ... (1 more removed lines; see GitHub link above)
+       const zv = vv.regex,
+         Pv = Tv(vv),
+         gv = hv,
+         pv = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
+         dv = {
+           dw: [/namespace/, /\s+/, vv.IDENT_RE],
+           beginScope: {
+             1: "keyword",
+             3: "title.class"
+           }
+         },
+         Wv = {
+           beginKeywords: "interface",
+           end: /\{/,
+           excludeEnd: !0,
+           keywords: {
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L655-L694` → after: `L1692-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1692-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1692-L1723) · [Before (L655-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L655-L694)

```diff
-           oz = new RegExp(`(?:${tz.source})`, `${Fz}y`).exec(zz);
-         if (oz) {
-           if (Xz.push(oz), !tz.global) return Xz;
-           Wz.lastIndex = Oz(oz)
-         }
-         for (let vz = Wz.exec(zz); vz; vz = Wz.exec(zz)) {
-           const sz = Nz(zz, tz, vz.index) - vz.index;
-           if (vz[0] = vz[0].slice(sz), vz.index += sz, Xz.push(vz), !tz.global) break;
-           Wz.lastIndex = Oz(vz)
-         }
-         return Xz
-       }(zz, tz, sz.notAfter) : function(zz, tz, sz) {
-         const Fz = new RegExp(tz.source, `${tz.flags.replace(/[gy]/g,"")}g`),
-           Wz = [];
-         for (let Xz = Fz.exec(zz); Xz; Xz = Fz.exec(zz))
-           if (!sz || sz(Xz)) {
- ... (24 more removed lines; see GitHub link above)
+           contains: [Pv.exports.CLASS_REFERENCE]
+         },
+         wv = {
+           $pattern: hv,
+           keyword: Sv.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
+           literal: ev,
+           built_in: lv.concat(pv),
+           "variable.language": Nv
+         },
+         av = {
+           className: "meta",
+           dw: "@" + gv
+         },
+         sv = (vv, zv, Pv) => {
+           const hv = vv.contains.findIndex((vv => vv.label === zv));
+           if (-1 === hv) throw new Error("can not find mode to replace");
+ ... (16 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L696-L697` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/77.js#L1725) · [Before (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/77.js#L696-L697)

```diff
-   },
-   6078: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/78.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/78.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521)

#### 1. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/78.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/78.js#L4)

```diff
-   4382: (zz, tz, sz) => {
+   4491: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/78.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/78.js#L6)

```diff
-       d: () => Dz
+       b: () => hv,
+       f: () => gv,
+       i: () => Cv,
+       l: () => sv,
+       n: () => pv,
+       q: () => Sv,
+       r: () => ev,
+       u: () => av,
+       y: () => wv,
+       z: () => Wv
```

#### 3. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L8-L113` → after: `L17-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L17-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/78.js#L17-L697) · [Before (L8-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/78.js#L8-L113)

```diff
-     const Fz = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       Wz = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       Xz = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       Oz = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       oz = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       vz = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var Uz = sz(4387),
-       Kz = sz(4389);
-     const uz = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       Nz = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
- 
-     function bz(zz) {
-       return zz.split("\n").filter((zz => zz.startsWith("## "))).map((zz => zz.replace(/^## (.+)$/gm, "$1").trim()))
-     }
- 
-     function wz(zz) {
- ... (90 more removed lines; see GitHub link above)
+     const hv = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function Sv(vv) {
+       try {
+         return decodeURIComponent(vv.slice(1))
+       } catch {
+         return vv.slice(1)
+       }
+     }
+ 
+     function ev(vv) {
+       return vv.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
+     }
+     const gv = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${hv.source}`, "g");
+ 
+     function pv(vv, zv) {
+ ... (665 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/79.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/79.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900)

#### 1. `bundles/bloxd.io/chunks/js/79.js` (Changed code · before: `L4-L5` → after: `L4-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f54d083bb6358651e47b544398d230d705c325b9bec276d029b098b883336900) · [After (L4-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/79.js#L4-L112) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/79.js#L4-L5)

```diff
-   4387: zz => {
-     zz.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
+   4493: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => sv
+     });
+     const hv = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       Sv = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       ev = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       gv = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       pv = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       dv = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var Nv = Pv(4496),
+       lv = Pv(4499);
+     const Tv = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       Wv = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+ 
+     function wv(vv) {
+ ... (93 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/80.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/80.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b112ff1a6dbdf96d201a514abb07f466726881ab373790e26ed025b59ab12d0e)

#### 1. `bundles/bloxd.io/chunks/js/80.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b112ff1a6dbdf96d201a514abb07f466726881ab373790e26ed025b59ab12d0eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b112ff1a6dbdf96d201a514abb07f466726881ab373790e26ed025b59ab12d0e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/80.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/80.js#L4-L5)

```diff
-   4389: zz => {
-     zz.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
+   4496: vv => {
+     vv.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/81.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/81.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d4c6518bbd2663d88eccddc31efbae262afcd75f382e56320729aa2b4828a00c)

#### 1. `bundles/bloxd.io/chunks/js/81.js` (Changed code · before: `L4-L4485` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d4c6518bbd2663d88eccddc31efbae262afcd75f382e56320729aa2b4828a00cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d4c6518bbd2663d88eccddc31efbae262afcd75f382e56320729aa2b4828a00c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/81.js#L4-L5) · [Before (L4-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/81.js#L4-L4485)

```diff
-   4391: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => Fz
-     });
-     const Fz = String.raw`export interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
- ... (4466 more removed lines; see GitHub link above)
+   4499: vv => {
+     vv.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/82.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/82.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417c)

#### 1. `bundles/bloxd.io/chunks/js/82.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/82.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/82.js#L4-L7)

```diff
-   36027: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Qz,
-       h: () => dz
+   4503: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       default: () => hv
```

#### 2. `bundles/bloxd.io/chunks/js/82.js` (Changed code · before: `L9-L23574` → after: `L8-L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0bca5612384b6a1c14f5b4d5320f4cb71e8849c25929b9bb68ac327ffa9e417c) · [After (L8-L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/82.js#L8-L4485) · [Before (L9-L23574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/82.js#L9-L23574)

```diff
-     var Fz = sz(65),
-       Wz = sz(1857),
-       Xz = sz(36033),
-       Oz = sz.n(Xz),
-       oz = sz(4180),
-       vz = sz(1831),
-       Uz = sz(1416),
-       Kz = sz(106),
-       uz = sz(119),
-       Nz = sz(321),
-       bz = sz(1020),
-       wz = sz.n(bz),
-       Dz = sz(30),
-       gz = sz(1036),
-       Hz = sz(1571),
-       Bz = sz(1664),
- ... (23550 more removed lines; see GitHub link above)
+     const hv = String.raw`export interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (4462 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/83.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/83.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4)

#### 1. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L4)

```diff
-   4411: (zz, tz, sz) => {
+   36064: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L9-L19` → after: `L18674-L19796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R18674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L18674-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L18674-L19796) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L9-L19)

```diff
-     var Fz = sz(1285),
-       Wz = sz(34);
-     var Xz = sz(321);
-     var Oz = sz(580);
-     var oz = sz(2273),
-       vz = sz(4419),
-       Uz = sz(4438),
-       Kz = sz(4450);
-     class uz {
-       constructor(zz, tz, sz, Fz, Wz, Xz) {
-         this.id = zz, this.type = tz, this.parameters = sz, this.tearDownNotification = Fz, this.onDonePromise = Wz, this.resolveRequest = Xz
+     var hv = Pv(602),
+       Sv = Pv(1175),
+       ev = Pv(1612),
+       gv = Pv(2472),
+       pv = Pv(2432),
+       dv = Pv(1442),
+       Nv = Pv(36243),
+       lv = Pv(1082);
+ 
+     function Tv(vv, zv) {
+       var Pv;
+       return {
+         isError: !1,
+         name: vv,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== zv && void 0 !== zv ? zv : {},
+ ... (1107 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L22-L25` → after: `L19799-L20857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R19799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L19799-L20857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L19799-L20857) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L22-L25)

```diff
-     const Nz = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
-     class bz {
-       constructor(zz, tz, sz, Fz, Wz, Xz) {
-         this.id = zz, this.type = tz, this.parameters = sz, this.resolveRequest = Fz, this.onDonePromise = Wz, this.tearDownNotification = Xz, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.i … [truncated]
+     const Mv = {
+         type: "array",
+         items: {
+           type: "record",
+           name: "OtherEntityDeltaEntry",
+           fields: [{
+             name: "i",
+             type: "int"
+           }, {
+             name: "v",
+             type: ["null", Hv(Cv, "boolean"), Hv(iv, "int"), Hv(cv, "double"), Hv(Gv, "string"), Hv(mv, {
+               type: "array",
+               items: "string"
+             }), Hv(jv, Lv)]
+           }]
+         }
+ ... (1043 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L27-L30` → after: `L20859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20859) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L27-L30)

```diff
-         if (!Oz) throw console.error(`No QTE implementation registered for type: ${tz}`), new Error(`No QTE implementation registered for type: ${tz}`);
-         this.implementation = new Oz(sz, (zz => {
-           this.isCompleted = !0, this.resolveRequest(zz)
-         }), this.tearDownNotification), this.setupInputHandlers()
+         zv[Pv] = void 0 === hv ? null : hv
```

#### 5. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L32-L46` → after: `L20861-L20926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20861-L20926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20861-L20926) · [Before (L32-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L32-L46)

```diff
-       setupInputHandlers() {
-         this.mouseSub = Wz.o.subscribe("QTEMouseState", (zz => {
-           let {
-             isDown: tz
-           } = zz;
-           this.isCompleted || this.implementation.handleMouseInput(tz)
-         })), this.stopInputActions = (0, Uz.k)((zz => {
-           this.isCompleted || !Nz.has(zz.action) && !(0, Uz.i)(zz) || this.implementation.handleMouseInput(zz.down)
-         })), this.tickSub = Wz.o.subscribe("noaTick", (zz => {
-           if (this.isCompleted) return;
-           const tz = zz / 1e3;
-           this.implementation.handleTick(tz)
-         })), this.stopShellTicks = (0, vz.y)((() => {
-           this.isCompleted || this.implementation.handleTick(oz.t / 1e3)
-         }))
+       return zv
+     }
+ 
+     function tz(vv) {
+       const zv = {};
+       for (const Pv in vv) {
+         const hv = vv[Pv];
+         null !== hv && void 0 !== hv && (zv[Pv] = hv)
+       }
+       return zv
+     }
+ 
+     function qz(vv, zv) {
+       return Object.prototype.hasOwnProperty.call(vv, zv)
+     }
+ 
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L48` → after: `L20928-L20932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20928-L20932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20928-L20932) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L48)

```diff
-       cleanup() {
+       if ("chunkAdded" === zv || "chunkRemoved" === zv) hv.rle = Yz(hv.rle);
+       else if ("playSound" === zv) {
+         const vv = hv.RP;
+         hv.RP = (0, Sv.N)(vv) ? null : xz(vv)
+       } else if ("customKillfeed" === zv) {
```

#### 7. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L50` → after: `L20934-L20937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20934-L20937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20934-L20937) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L50)

```diff
-         this.mouseSub && (Wz.o.unsubscribe(this.mouseSub), this.mouseSub = null), null === (zz = this.stopInputActions) || void 0 === zz || zz.call(this), this.stopInputActions = null, null === (tz = this.stopShellTicks) || void 0 === tz || tz.call(this), this.stopShellTicks = nu … [truncated]
+         hv.killer = xz(null !== (ev = hv.killer) && void 0 !== ev ? ev : {}), hv.victim = xz(null !== (gv = hv.victim) && void 0 !== gv ? gv : {})
+       }
+       return {
+         [zv]: hv
```

#### 8. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L52-L53` → after: `L20939-L20947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20939-L20947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20939-L20947) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L52-L53)

```diff
-       async waitUntilDone() {
-         await this.onDonePromise
+     }
+ 
+     function Mz(vv) {
+       const zv = Object.keys(vv)[0],
+         Pv = vv[zv],
+         hv = {};
+       for (const Sv in Pv) {
+         const vv = Pv[Sv];
+         hv[Sv] = Vz(Sv, vv)
```

#### 9. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L55-L56` → after: `L20949-L20955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20949-L20955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20949-L20955) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L55-L56)

```diff
-       getState() {
-         return this.implementation.getState()
+       if ("chunkAdded" === zv || "chunkRemoved" === zv) hv.rle = nz(hv.rle);
+       else if ("playSound" === zv) {
+         const vv = hv.RP;
+         hv.RP = (0, Sv.N)(vv) ? null : tz(vv)
+       } else if ("customKillfeed" === zv) {
+         var ev, gv;
+         hv.killer = tz(null !== (ev = hv.killer) && void 0 !== ev ? ev : {}), hv.victim = tz(null !== (gv = hv.victim) && void 0 !== gv ? gv : {})
```

#### 10. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L58-L59` → after: `L20957-L20959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20957-L20959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20957-L20959) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L58-L59)

```diff
-       tearDown() {
-         this.isCompleted = !0, this.cleanup(), this.implementation.tearDown()
+       return {
+         type: zv,
+         ...hv
```

#### 11. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L62-L71` → after: `L20962-L21096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R20962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L20962-L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L20962-L21096) · [Before (L62-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L62-L71)

```diff
-     const wz = new Fz.e,
-       Dz = new Map;
-     let gz = null;
-     const Hz = {
-       progressBar: class {
-         constructor(zz, tz, sz) {
-           var Fz, Wz, Xz, Oz;
-           this.resolveRequest = tz, this.tearDownNotification = sz, this.progress = 0, this.Mz = void 0, this.dz = void 0, this.hz = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
-           const oz = zz;
-           this.Mz = null !== (Fz = oz.Mz) && void 0 !== Fz ? Fz : .075, this.dz = null !== (Wz = oz.dz) && void 0 !== Wz ? Wz : 1, this.progress = null !== (Xz = oz.yz) && void 0 !== Xz ? Xz : 30, this.hz = null !== (Oz = oz.hz) && void 0 !== Oz && Oz, this.parameters = oz
+ 
+     function yz(vv) {
+       var zv, Pv;
+       return (0, Sv.N)(vv) ? null : {
+         name: vv.name,
+         amount: null !== (zv = vv.amount) && void 0 !== zv ? zv : null,
+         attributes: JSON.stringify(null !== (Pv = vv.attributes) && void 0 !== Pv ? Pv : {})
+       }
+     }
+ 
+     function Bz(vv) {
+       if ((0, Sv.N)(vv)) return null;
+       const zv = vv;
+       return {
+         name: zv.name,
+         amount: zv.amount,
+ ... (119 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L73-L74` → after: `L21098-L21289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21098-L21289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21098-L21289) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L73-L74)

```diff
-         handleMouseInput(zz) {
-           zz && !this.isCompleted && (this.clickCount++, this.progress += this.dz, this.progress >= 100 && this.complete(!0))
+         return gv > -NP[1] && hv.push((Sv | gv << ev) & NP[3]), TP(hv)
+       }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
+     }
+ 
+     function TP(vv) {
+       return typeof zP !== NP[9] && zP ? (new zP).decode(new PP(vv)) : typeof hP !== NP[9] && hP ? hP.from(vv).toString("utf-8") : gP(vv)
+     }
+ 
+     function WP() {}
+ 
+     function wP(vv, zv, Pv, hv = {}, Sv, ev, gv, pv, dv) {
+       if (gv || (gv = function(...vv) {
+           var zv;
+           aP(vv[NP[4]] = NP[0], zv = function(...vv) {
+             aP(vv[NP[4]] = NP[1], this.GT = vv[NP[0]], this.length = NP[0], this.map = {}, this.head = NP[25], this.tail = NP[25])
+           }, zv.prototype.get = function(...vv) {
+ ... (176 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L76-L80` → after: `L21291-L21304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21291-L21304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21291-L21304) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L76-L80)

```diff
-         handleTick() {
-           if (!this.isCompleted)
-             if (this.progress -= this.Mz, this.hz && this.progress <= 0) this.complete(!1);
-             else if (this.progress <= 0) this.progress = 0;
-           else if (this.progress >= 100) return void this.complete(!0)
+         pv = pP[vv] || (pP[vv] = Nv())
+       } else pv = dv[vv]();
+       if (Pv === ev(98) + ev(99)) {
+         function lv(...vv) {
+           for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = 'g0Loz`JNRy%:=e/Tx}|h3l7w.q+&Pdm;{_@[Z$OX#>KWQvibA(t1~Vus8Fk]B*HSCn)<D6?j9^2IcU4"5p!GM,EYfra', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[-NP[54]] = vv[NP[5]].length, vv[NP[58]] = [], vv[NP[56]] = NP[0], vv[-NP[57]] = NP[0], vv[NP[16]] … [truncated]
+             if (vv[-NP[55]] = vv[NP[1]].indexOf(vv[NP[5]][vv[NP[35]]]), vv[-NP[55]] !== -NP[1])
+               if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[-NP[55]];
+               else {
+                 aP(vv[NP[16]] += vv[-NP[55]] * NP[20], vv[NP[56]] |= vv[NP[16]] << vv[-NP[57]], vv[-NP[57]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                 do {
+                   aP(vv[NP[58]].push(vv[NP[56]] & NP[3]), vv[NP[56]] >>= NP[2], vv[-NP[57]] -= NP[2])
+                 } while (vv[-NP[57]] > NP[16]);
+                 vv[NP[16]] = -NP[1]
+               } return vv[NP[16]] > -NP[1] && vv[NP[58]].push((vv[NP[56]] | vv[NP[16]] << vv[-NP[57]]) & NP[3]), TP(vv[NP[58]])
```

#### 14. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L82-L83` → after: `L21306-L21308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21306-L21308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21306-L21308) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L82-L83)

```diff
-         complete(zz) {
-           this.isCompleted = !0, this.resolveRequest(zz)
+ 
+         function Tv(...vv) {
+           return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = lv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
```

#### 15. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L85-L93` → after: `L21310-L21324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21310-L21324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21310-L21324) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L85-L93)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               progress: this.progress,
-               clickCount: this.clickCount
-             },
-             isActive: !0
+ 
+         function Wv() {
+           function vv(...vv) {
+             return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
+               for (aP(vv[NP[4]] = NP[1], vv[NP[59]] = 'xy5<v0*9!38."T=uMDNC]GR;7Q/S&apK|l#(Y?^_>%Ud~Li{O4$o)HewXJ`:Ir6g}F+P,2Zjqbnf[m1t@BzEAscVkhW', vv[NP[45]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[45]].length, vv[NP[60]] = [], vv[NP[49]] = NP[0], vv[NP[29]] = NP[0], vv[NP[ … [truncated]
+                 if (vv[NP[32]] = vv[NP[59]].indexOf(vv[NP[45]][vv[NP[35]]]), vv[NP[32]] !== -NP[1])
+                   if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[32]];
+                   else {
+                     aP(vv[NP[16]] += vv[NP[32]] * NP[20], vv[NP[49]] |= vv[NP[16]] << vv[NP[29]], vv[NP[29]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                     do {
+                       aP(vv[NP[60]].push(vv[NP[49]] & NP[3]), vv[NP[49]] >>= NP[2], vv[NP[29]] -= NP[2])
+                     } while (vv[NP[29]] > NP[16]);
+                     vv[NP[16]] = -NP[1]
+                   } return vv[NP[16]] > -NP[1] && vv[NP[60]].push((vv[NP[49]] | vv[NP[16]] << vv[NP[29]]) & NP[3]), TP(vv[NP[60]])
+             }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
```

#### 16. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L96-L111` → after: `L21341-L21342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21341-L21342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21341-L21342) · [Before (L96-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L96-L111)

```diff
-         tearDown() {
-           this.tearDownNotification()
-         }
-       },
-       timedClick: class {
-         constructor(zz, tz, sz) {
-           var Fz;
-           this.resolveRequest = tz, this.tearDownNotification = sz, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = zz, this.timeWindowMs = null !== (Fz = this.parameters.lz) && void … [truncated]
-         }
-         handleMouseInput(zz) {
-           if (!zz || this.isCompleted) return;
-           Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
-         }
-         handleTick() {
-           if (this.isCompleted) return;
-           Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
+         return ev(100) in WP && Wv(), {
+           [ev(103) + Tv(NP[82])]: pv
```

#### 17. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L113-L114` → after: `L21344-L21375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21344-L21375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21344-L21375) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L113-L114)

```diff
-         complete(zz) {
-           this.isCompleted = !0, this.resolveRequest(zz)
+       }
+       return pv
+     }
+ 
+     function aP() {
+       aP = function() {}
+     }
+     aP(Xz = {}, uz = [';d`1YD2n#_Pj"=Ynq<k>S;Hnn|(`&', "DO(Yx/%==KLQhK~h!wR", "@V$_*?m${.B", 'Ca%!Y^4cS[Y,].~#).!Hq3S=W;isZR|d$a"o$jL7E.J<hRhvF,k]AsT&', "{/AEaZA", "t|Hv@|>7<[N52y!>cz_Fq0uhMKpp]q!", '6k,*;czQ>u"w.2C2Ics8.Zc%c@,KT^%Xp+=8vPe%r[ae/ZiaZv<~', '^$<~Zky&>O"}6ewHK|Fmx,iO … [truncated]
+       aP(vv[NP[4]] = NP[0], vv[NP[7]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+ ... (16 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L116-L118` → after: `L21377-L21418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21377-L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21377-L21418) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L116-L118)

```diff
-         getState() {
-           const zz = Date.now() - this.startTime,
-             tz = Math.max(0, this.timeWindowMs - zz);
+     }()), lP(78) in WP && function(...vv) {
+       aP(vv[NP[4]] = NP[0], vv[-NP[19]] = function(vv) {
+         var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv = vv.length;
+         if (Tv < NP[5]) return NP[0];
+         if (aP(zv = Math.max(...vv), Pv = Math.min(...vv)), zv === Pv) return NP[0];
+         for (aP(hv = Array(Tv - NP[1]).fill(Number.MAX_SAFE_INTEGER), Sv = Array(Tv - NP[1]).fill(Number.MIN_SAFE_INTEGER), ev = Math.ceil((zv - Pv) / (Tv - NP[1])), gv = NP[0]), pv = NP[0]; pv < Tv; pv++) vv[pv] !== Pv && vv[pv] !== zv && aP(gv = Math.floor((vv[pv] - Pv) / ev),  … [truncated]
+         for (aP(dv = Number.MIN_SAFE_INTEGER, Nv = Pv), lv = NP[0]; lv < Tv - NP[1]; lv++) hv[lv] === Number.MAX_SAFE_INTEGER && Sv[lv] === Number.MIN_SAFE_INTEGER || aP(dv = Math.max(dv, hv[lv] - Nv), Nv = Sv[lv]);
+         return dv = Math.max(dv, zv - Nv)
+       }, console.log(vv[-NP[19]]))
+     }(), aP(pP = Object[lP(79)](NP[25]), dP = void 0), aP(rz = vv => {
+       function zv(...vv) {
+         return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
+           for (aP(vv[NP[4]] = NP[1], vv[NP[44]] = '+gXDcrTRSAEb]o{@*B1>H~Q=5)Whe_wL3ZYv#Pxkz8V,.}/m(!"2`^64spFCJfKluq&aGn%<Ni[jOM:?|t0yU$I7;9d', vv[NP[45]] = "" + (vv[NP[0]] || ""), vv[NP[36]] = vv[NP[45]].length, vv[NP[34]] = [], vv[NP[69]] = NP[0], vv[NP[14]] = NP[0], vv[NP[68] … [truncated]
+             if (vv[NP[52]] = vv[NP[44]].indexOf(vv[NP[45]][vv[NP[67]]]), vv[NP[52]] !== -NP[1])
+               if (vv[NP[68]] < NP[0]) vv[NP[68]] = vv[NP[52]];
+               else {
+ ... (26 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L120-L124` → after: `L21420-L21423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21420-L21423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21420-L21423) · [Before (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L120-L124)

```diff
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               timeRemaining: tz,
-               lz: this.timeWindowMs
+             meta: {
+               ...vv.meta,
+               formatVersion: Fz.g,
+               variation: null !== (zv = vv.meta.variation) && void 0 !== zv ? zv : null
```

#### 20. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L126` → after: `L21425-L21431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21425-L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21425-L21431) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L126)

```diff
-             isActive: !0
+             initialChunks: vv.initialChunks.map((vv => ({
+               chunkPos: vv.chunkPos,
+               rle: Yz(vv.rle),
+               sharedBlockData: Kz("sharedBlockData", vv.sharedBlockData)
+             }))),
+             ticks: vv.ticks.map(oz),
+             editState: vv.editState
```

#### 21. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L129-L144` → after: `L21453-L21455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21453-L21455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21453-L21455) · [Before (L129-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L129-L144)

```diff
-         tearDown() {
-           this.tearDownNotification()
-         }
-       },
-       gravityBar: class {
-         constructor(zz, tz, sz) {
-           var Fz;
-           this.resolveRequest = tz, this.tearDownNotification = sz, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
-           const Wz = zz;
-           this.parameters = {
-             ...Wz,
-             Sz: Xz.c.clamp(Wz.Sz, .05, 1)
-           }, this.progress = null !== (Fz = Wz.yz) && void 0 !== Fz ? Fz : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
-         }
-         handleMouseInput(zz) {
-           this.isMouseDown = zz
+ 
+         function lv(...vv) {
+           return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = Nv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
```

#### 22. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L146-L147` → after: `L21457-L21499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21457-L21499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21457-L21499) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L146-L147)

```diff
-         handleTick(zz) {
-           this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(zz))
+ 
+         function Tv(...vv) {
+           function zv(...vv) {
+             return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
+               for (aP(vv[NP[4]] = NP[1], vv[NP[43]] = 'u0),v?fm6;r>i$"Dkx&N^%A!4#*sLVH5O]2MZq|XnoJ+Ud[{l:zCh~jBa98b1cwS=KYW@(7/`gEteTQ_p<}FG3yPI.R', vv[NP[45]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[45]].length, vv[NP[34]] = [], vv[NP[49]] = NP[0], vv[NP[72]] = NP[0], vv[NP[ … [truncated]
+                 if (vv[NP[71]] = vv[NP[43]].indexOf(vv[NP[45]][vv[NP[70]]]), vv[NP[71]] !== -NP[1])
+                   if (vv[NP[68]] < NP[0]) vv[NP[68]] = vv[NP[71]];
+                   else {
+                     aP(vv[NP[68]] += vv[NP[71]] * NP[20], vv[NP[49]] |= vv[NP[68]] << vv[NP[72]], vv[NP[72]] += (vv[NP[68]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                     do {
+                       aP(vv[NP[34]].push(vv[NP[49]] & NP[3]), vv[NP[49]] >>= NP[2], vv[NP[72]] -= NP[2])
+                     } while (vv[NP[72]] > NP[16]);
+                     vv[NP[68]] = -NP[1]
+                   } return vv[NP[68]] > -NP[1] && vv[NP[34]].push((vv[NP[49]] | vv[NP[68]] << vv[NP[72]]) & NP[3]), TP(vv[NP[34]])
+             }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
+           }
+ ... (27 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L149-L152` → after: `L21501-L21513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21501-L21513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21501-L21513) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L149-L152)

```diff
-         updateMover() {
-           this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
-           const zz = Math.sign(this.moverTarget - this.moverPosition);
-           this.moverPosition += zz * this.parameters.Vz * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
+         zv(109) in WP && Tv(), Sv = hv[lv(113)](Pv)
+       } catch (dv) {
+         function Wv(...vv) {
+           for (aP(vv[NP[4]] = NP[1], vv[NP[44]] = ',fjYhEHFMsJCLB~iuX)%`&?vgI=lZ3ke]7o[t>zqDadO_0TQ|S56}#4.<m!8VAP+Kc2rn(9RG@y/^U"w$1Nx*{:p;bW', vv[-NP[20]] = "" + (vv[NP[0]] || ""), vv[NP[75]] = vv[-NP[20]].length, vv[-NP[42]] = [], vv[-NP[78]] = NP[0], vv[NP[14]] = NP[0], vv[-N … [truncated]
+             if (vv[-NP[76]] = vv[NP[44]].indexOf(vv[-NP[20]][vv[NP[74]]]), vv[-NP[76]] !== -NP[1])
+               if (vv[-NP[77]] < NP[0]) vv[-NP[77]] = vv[-NP[76]];
+               else {
+                 aP(vv[-NP[77]] += vv[-NP[76]] * NP[20], vv[-NP[78]] |= vv[-NP[77]] << vv[NP[14]], vv[NP[14]] += (vv[-NP[77]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                 do {
+                   aP(vv[-NP[42]].push(vv[-NP[78]] & NP[3]), vv[-NP[78]] >>= NP[2], vv[NP[14]] -= NP[2])
+                 } while (vv[NP[14]] > NP[16]);
+                 vv[-NP[77]] = -NP[1]
+               } return vv[-NP[77]] > -NP[1] && vv[-NP[42]].push((vv[-NP[78]] | vv[-NP[77]] << vv[NP[14]]) & NP[3]), TP(vv[-NP[42]])
```

#### 24. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L154-L155` → after: `L21515-L21517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21515-L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21515-L21517) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L154-L155)

```diff
-         pickNewMoverTarget() {
-           this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+ 
+         function wv(vv) {
+           return typeof Xz[vv] === NP[9] ? Xz[vv] = Wv(uz[vv]) : Xz[vv]
```

#### 25. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L157-L159` → after: `L21519-L21525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21519-L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21519-L21525) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L157-L159)

```diff
-         randomNumTicksUntilDirectionChange() {
-           const zz = Xz.c.clamp(1 - .7 * this.parameters.Rz, 0, 1.4);
-           return Math.floor(60 * zz + 40 * Math.random())
+ 
+         function av(...vv) {
+           aP(vv[NP[4]] = NP[0], vv[NP[44]] = function(...vv) {
+             for (aP(vv[NP[4]] = NP[1], vv[-NP[79]] = vv[NP[0]].length, vv[-NP[70]] = [], vv[NP[6]] = NP[0]), vv[NP[58]] = NP[0]; vv[NP[58]] < vv[-NP[79]]; vv[NP[58]]++) vv[-NP[70]].push(vv[NP[58]] !== NP[0] && vv[NP[0]][vv[NP[58]]] > vv[NP[0]][vv[NP[58]] - NP[1]] ? vv[-NP[70]][vv … [truncated]
+             for (vv[NP[80]] = vv[-NP[79]] - NP[1]; vv[NP[80]] >= NP[0]; vv[NP[80]]--) vv[NP[80]] !== vv[-NP[79]] - NP[1] && vv[NP[0]][vv[NP[80]]] > vv[NP[0]][vv[NP[80]] + NP[1]] && (vv[-NP[70]][vv[NP[80]]] = Math.max(vv[-NP[70]][vv[NP[80]]], vv[-NP[70]][vv[NP[80]] + NP[1]] + NP[1 … [truncated]
+             return vv[NP[6]]
+           }, console.log(vv[NP[44]]))
```

#### 26. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L161-L166` → after: `L21527-L21560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21527-L21560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21527-L21560) · [Before (L161-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L161-L166)

```diff
-         updateCatchZone() {
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.pz : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Xz.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const zz = this.parameters.Sz / 2,
-             tz = zz,
-             sz = 1 - zz;
-           this.catchZonePosition <= tz ? (this.catchZonePosition = tz, this.catchZoneVelocity = 0) : this.catchZonePosition >= sz && (this.catchZonePosition = sz, this.catchZoneVelocity = 0)
+         throw zv(NP[11]) in WP && av(), aP(console[zv(115)](Pv), hv[wv(116)](Pv, {
+           [wv(117) + wv(118)]: (...vv) => (dP = [vv, {}], wP(wv(119)))
+         })), dv
+       }
+       const gv = gz(Fz[NP[68]], Sv),
+         pv = ev[NP[81]][zv(120)](NP[34]);
+       return pv[zv(121) + zv(122) + "E"](Fz[NP[68]]), ev[NP[81]].concat([pv, gv])
+     }, kz = vv => {
+       function zv(...vv) {
+         return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
+           for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = ';ZpOsrAWB.GS{bj"w0)?YgE&nFtmaHXh*U}`Iu,y+#c739x~1R2Pivq!oQ|/$d6[T:JKMN]CL@^<l=z>Vf%k_548(De', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[84]] = vv[NP[5]].length, vv[NP[58]] = [], vv[-NP[82]] = NP[0], vv[NP[85]] = NP[0], vv[NP[68]]  … [truncated]
+             if (vv[NP[32]] = vv[NP[1]].indexOf(vv[NP[5]][vv[-NP[83]]]), vv[NP[32]] !== -NP[1])
+               if (vv[NP[68]] < NP[0]) vv[NP[68]] = vv[NP[32]];
+               else {
+                 aP(vv[NP[68]] += vv[NP[32]] * NP[20], vv[-NP[82]] |= vv[NP[68]] << vv[NP[85]], vv[NP[85]] += (vv[NP[68]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                 do {
+ ... (18 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L168-L170` → after: `L21562-L21564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21562-L21564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21562-L21564) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L168-L170)

```diff
-         isMoverInCatchZone() {
-           const zz = this.parameters.Sz / 2;
-           return this.moverPosition >= this.catchZonePosition - zz && this.moverPosition <= this.catchZonePosition + zz
+ 
+         function Pv(...vv) {
+           return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = zv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
```

#### 28. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L172-L173` → after: `L21566-L21584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21566-L21584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21566-L21584) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L172-L173)

```diff
-         updateProgress(zz) {
-           this.isMoverInCatchZone() ? this.progress += this.parameters.fz * zz : this.progress -= this.parameters.Ez * zz, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hz && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+         vv[NP[4]] = NP[0], aP(vv[-NP[87]] = lP(124) + Pv(NP[86]) + Pv(126) + Pv(NP[88]) + Pv(NP[89]), vv[NP[90]] = Pv(129) + Pv(130) + Pv(131) + Pv(132) + Pv(133) + "?", vv[-NP[91]] = Pv(134) + Pv(NP[60]) + Pv(136) + Pv(137) + Pv(138), vv[-NP[87]].match(vv[NP[90]] + vv[-NP[91]]))
+       }();
+       const Pv = ev[NP[81]][zv(139)](vv);
+       if (Pv[zv(140) + zv(141)] >= NP[34]) {
+         function hv(vv) {
+           var zv, Pv, hv, Sv, ev, gv, pv;
+           for (aP(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = NP[0], ev = NP[0], gv = -NP[1]), pv = NP[0]; pv < Pv; pv++) {
+             var dv = '.cX|Cx"T1KRe)Y6utG%PDn[irwQ/fpIV>BZS,4$k&y30`:No{sEmv!8?]_(Wzh+d2;j9~OMqaUH@5F7l^=A#g*}<JLb'.indexOf(zv[pv]);
+             if (dv !== -NP[1])
+               if (gv < NP[0]) gv = dv;
+               else {
+                 aP(gv += dv * NP[20], Sv |= gv << ev, ev += (gv & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                 do {
+                   aP(hv.push(Sv & NP[3]), Sv >>= NP[2], ev -= NP[2])
+                 } while (ev > NP[16]);
+                 gv = -NP[1]
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L175-L176` → after: `L21586-L21588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21586-L21588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21586-L21588) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L175-L176)

```diff
-         complete(zz) {
-           this.isCompleted = !0, this.resolveRequest(zz)
+ 
+         function gv(vv) {
+           return typeof Xz[vv] === NP[9] ? Xz[vv] = hv(uz[vv]) : Xz[vv]
```

#### 30. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L178-L189` → after: `L21590-L21606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21590-L21606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21590-L21606) · [Before (L178-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L178-L189)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               catchZonePosition: this.catchZonePosition,
-               Sz: this.parameters.Sz,
-               moverPosition: this.moverPosition,
-               progress: this.progress,
-               isCatching: this.isMoverInCatchZone()
-             },
-             isActive: !0
+         const pv = Pv[gv(142) + gv(143)](NP[0]);
+         if ((0, Fz.o)(pv)) {
+           function dv(...vv) {
+             for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = '73z]0y/c%{pAFEoqgLDTYmWCV+i~Kdn1x!es^#&U;vJSR8|GtHPu,rZQ*_N=`h$9fbw:jIB.6M>5O4k)<?"[(}@2Xal', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[5]].length, vv[NP[34]] = [], vv[NP[33]] = NP[0], vv[NP[93]] = NP[0], vv[NP[90]]  … [truncated]
+               if (vv[-NP[76]] = vv[NP[1]].indexOf(vv[NP[5]][vv[-NP[92]]]), vv[-NP[76]] !== -NP[1])
+                 if (vv[NP[90]] < NP[0]) vv[NP[90]] = vv[-NP[76]];
+                 else {
+                   aP(vv[NP[90]] += vv[-NP[76]] * NP[20], vv[NP[33]] |= vv[NP[90]] << vv[NP[93]], vv[NP[93]] += (vv[NP[90]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
+                   do {
+                     aP(vv[NP[34]].push(vv[NP[33]] & NP[3]), vv[NP[33]] >>= NP[2], vv[NP[93]] -= NP[2])
+                   } while (vv[NP[93]] > NP[16]);
+                   vv[NP[90]] = -NP[1]
+                 } return vv[NP[90]] > -NP[1] && vv[NP[34]].push((vv[NP[33]] | vv[NP[90]] << vv[NP[93]]) & NP[3]), TP(vv[NP[34]])
+           }
+ 
+           function Nv(vv) {
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L192-L193` → after: `L21647-L21721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21647-L21721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21647-L21721) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L192-L193)

```diff
-         tearDown() {
-           this.tearDownNotification()
+       }
+       throw new Error(zv(148) + zv(149) + zv(150) + zv(151) + zv(152) + zv(NP[78]))
+     })
+   },
+   36489: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       A: () => lv,
+       E: () => pv,
+       c: () => gv,
+       g: () => hv,
+       j: () => Tv,
+       n: () => Wv,
+       o: () => ev,
+       q: () => Nv,
+       s: () => wv,
+       w: () => dv
+ ... (59 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L195-L201` → after: `L21723-L21733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21723-L21733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21723-L21733) · [Before (L195-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L195-L201)

```diff
-       },
-       precisionBar: class {
-         constructor(zz, tz, sz) {
-           var Fz, Wz, Oz, oz, vz;
-           this.resolveRequest = tz, this.tearDownNotification = sz, this.startTime = void 0, this.speed = void 0, this.tt = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
-           const Uz = zz;
-           this.parameters = {
+       }
+       return zv
+     }
+ 
+     function Nv(vv, zv) {
+       const Pv = {};
+       for (const Sv of Object.keys(vv)) {
+         const ev = {};
+         for (const Pv of Object.keys(vv[Sv])) {
+           const hv = vv[Sv][Pv];
+           null !== hv.endTick && hv.endTick < zv || (ev[Pv] = {
```

#### 33. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L203-L217` → after: `L21735-L21768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21735-L21768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21735-L21768) · [Before (L203-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L203-L217)

```diff
-             speed: null !== (Fz = Uz.speed) && void 0 !== Fz ? Fz : .5,
-             tt: Xz.c.clamp(Uz.tt, .05, 1),
-             label: null !== (Wz = Uz.label) && void 0 !== Wz ? Wz : [{
-               str: "Click when the marker is within the green zone."
-             }],
-             icon: null !== (Oz = Uz.icon) && void 0 !== Oz ? Oz : null,
-             scale: null !== (oz = Uz.scale) && void 0 !== oz ? oz : 1,
-             rotation: null !== (vz = Uz.rotation) && void 0 !== vz ? vz : 0
-           }, this.speed = this.parameters.speed, this.tt = this.parameters.tt, this.startTime = Date.now()
-         }
-         handleMouseInput(zz) {
-           if (zz) {
-             this.updateMarkerPosition();
-             const zz = Math.abs(this.markerPosition - .5) <= this.tt / 2;
-             this.complete(zz)
+             endTick: null === hv.endTick ? null : hv.endTick - zv
+           })
+         }(0, hv.oc)(ev) || (Pv[Sv] = ev)
+       }
+       return Pv
+     }
+ 
+     function lv(vv, zv, Pv) {
+       if (null !== vv) return Math.max(0, 1e3 * (vv - zv) / Pv)
+     }
+     class Tv {
+       constructor() {
+         this.tracked = {}
+       }
+       clear() {
+         this.tracked = {}
+ ... (18 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L220-L225` → after: `L21771-L21817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21771-L21817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21771-L21817) · [Before (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L220-L225)

```diff
-         handleTick() {
-           this.isCompleted || this.updateMarkerPosition()
-         }
-         updateMarkerPosition() {
-           const zz = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
-           this.markerPosition = zz <= .5 ? 2 * zz : 2 - 2 * zz
+       }
+       upsert(vv, zv, Pv) {
+         this.tracked[vv] || (this.tracked[vv] = {}), this.tracked[vv][zv] = Pv
+       }
+       remove(vv, zv) {
+         const Pv = this.tracked[vv];
+         Pv && (delete Pv[zv], (0, hv.oc)(Pv) && delete this.tracked[vv])
+       }
+       handleUpdate(vv) {
+         var zv;
+         0 !== vv.duration ? this.upsert(vv.Cv, vv.name, {
+           icon: vv.icon,
+           level: vv.level,
+           displayName: ev(vv.displayName),
+           showInNametag: null === (zv = vv.showInNametag) || void 0 === zv || zv,
+           endTime: void 0 !== vv.duration && null !== vv.duration ? Date.now() + vv.duration : null
+ ... (31 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L227-L228` → after: `L21819-L21846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21819-L21846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21819-L21846) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L227-L228)

```diff
-         complete(zz) {
-           this.isCompleted = !0, this.resolveRequest(zz)
+         return Sv
+       }
+     }
+ 
+     function Wv(vv, zv, Pv, hv) {
+       vv.hasEntity(zv) ? vv.updateEffect(zv, Pv, hv) : function(vv, zv, Pv) {
+         Sv.j.zC("EffectUpdate", {
+           Cv: vv,
+           name: zv,
+           ...Pv
+         }, !0)
+       }(zv, Pv, hv)
+     }
+ 
+     function wv(vv, zv, Pv) {
+       vv.hasEntity(zv) ? vv.removeEffect(zv, Pv) : function(vv, zv) {
+ ... (12 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L230-L237` → after: `L21848-L21855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21848-L21855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21848-L21855) · [Before (L230-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L230-L237)

```diff
-         getState() {
-           return this.updateMarkerPosition(), {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               markerPosition: this.markerPosition
-             },
-             isActive: !0
+       for (const sv of Object.keys(zv))
+         for (const pv of Object.keys(zv[sv])) {
+           var dv, Nv;
+           const Cv = zv[sv][pv],
+             iv = lv(Cv.endTick, ev, gv);
+           if (0 === iv) {
+             wv(vv, sv, pv), hv && sv === hv && String(Sv) !== String(sv) && wv(vv, Sv, pv);
+             continue
```

#### 37. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L240-L261` → after: `L21871-L21906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21871-L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21871-L21906) · [Before (L240-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L240-L261)

```diff
-         tearDown() {
-           this.tearDownNotification()
-         }
-       },
-       rhythmClick: class {
-         constructor(zz, tz, sz) {
-           this.resolveRequest = tz, this.tearDownNotification = sz, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = zz, this.shrinkStartT … [truncated]
-         }
-         handleMouseInput(zz) {
-           if (!zz || this.isCompleted) return;
-           const tz = this.getOuterCircleProgress();
-           if (tz <= this.parameters.Ot && tz >= -this.parameters.Ot) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Wt) return void this.complete(!0)
-           } else this.handleMiss();
-           this.shrinkStartTime = Date.now()
-         }
- ... (6 more removed lines; see GitHub link above)
+       var Tv, av
+     }
+   },
+   36467: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Nv,
+       g: () => dv,
+       k: () => Tv,
+       n: () => gv,
+       p: () => lv
+     });
+     var hv = Pv(36460),
+       Sv = Pv(36473);
+     const ev = {
+       description: "Bloxd Replay",
+       accept: {
+ ... (20 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L263-L264` → after: `L21908-L22094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R21908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L21908-L22094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L21908-L22094) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L263-L264)

```diff
-         getOuterCircleProgress() {
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Xt
+       } catch (vv) {
+         if (pv(vv)) return null;
+         throw vv
+       }
+     }
+     async function Nv(vv) {
+       if (vv && await async function(vv) {
+           const zv = {
+             mode: "readwrite"
+           };
+           return "granted" === await vv.queryPermission(zv) || "granted" === await vv.requestPermission(zv)
+         }(vv)) return vv;
+       try {
+         return await window.showSaveFilePicker({
+           suggestedName: (0, hv.g)(),
+           types: [ev]
+ ... (171 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L266-L267` → after: `L22096-L22148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22096-L22148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22096-L22148) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L266-L267)

```diff
-         complete(zz) {
-           this.isCompleted = !0, this.resolveRequest(zz)
+       }
+       async reportRtt(vv, zv, Pv) {
+         const hv = "ours" === (await this.probeHost(vv)).answer ? await this.probeHost(vv) : null;
+         "ours" === (null === hv || void 0 === hv ? void 0 : hv.answer) ? this.deps.yw("game_server_rtt", zv, hv.ms): this.deps.yw("game_server_rtt", Pv, 0)
+       }
+       probeHost(vv) {
+         return this.deps.probe(`https://${vv}/version`, 8e3)
+       }
+       stored() {
+         return function(vv) {
+           if ("object" !== typeof vv || null === vv) return null;
+           const {
+             arm: zv,
+             route: Pv,
+             until: hv,
+             aliasFailedOnce: Sv
+ ... (37 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L269-L280` → after: `L22150-L22178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22150-L22178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22150-L22178) · [Before (L269-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L269-L280)

```diff
-         getState() {
-           return {
-             type: this.type,
-             parameters: this.parameters,
-             state: {
-               outerCircleProgress: this.getOuterCircleProgress(),
-               successes: this.successes,
-               Wt: this.parameters.Wt,
-               misses: this.misses,
-               lastClickResult: this.lastClickResult
-             },
-             isActive: !0
+       },
+       yw: wv.w,
+       enabled: !(0, fv.b)(),
+       now: Date.now,
+       random: Math.random,
+       delay: vv => new Promise((zv => {
+         setTimeout(zv, vv)
+       }))
+     });
+ 
+     function Dv(vv) {
+       return async (zv, Pv, gv, pv, Nv) => {
+         let Tv;
+         if ((0, hv.N)(gv)) {
+           if (Nv.aborted) return Kv();
+           const vv = await Vv(zv, Pv, pv);
+ ... (13 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L283-L284` → after: `L22181-L22222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22181-L22222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22181-L22222) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L283-L284)

```diff
-         tearDown() {
-           this.tearDownNotification()
+         if (Nv.aborted) return Kv();
+         console.log(`Connecting to ${Tv.gameNameWithVariation} in lobby ${Tv.lobbyName} on game server ${Tv.endpoint}`), Wv.j.zC("matchmakeAndPlayStepCompleted", {
+           step: ev.o.REQUEST_TO_MATCHMAKING,
+           totalSubSteps: 1
+         }), (0, wv.j)(), av.e.markGameLoadStart(), (0, iv.o)({
+           websocketUrl: Tv.endpoint,
+           gameNameWithVariation: Tv.gameNameWithVariation,
+           lobbyName: Tv.lobbyName
+         }), Wv.j.zC("loadingScreenState", "loadingPage:loadingGame");
+         const cv = async () => {
+           const vv = await async function(vv, zv, Pv, hv) {
+             const Sv = await Vv(vv, zv, Pv);
+             if (!Sv.isError() && !hv.aborted) {
+               const {
+                 endpoint: vv,
+                 gameNameWithVariation: zv,
+ ... (26 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L287` → after: `L22232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22232) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L287)

```diff
-     };
+     }
```

#### 43. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L290-L293` → after: `L22235-L22237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22235-L22237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22235-L22237) · [Before (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L290-L293)

```diff
-       (0, Kz.k)(oz.x.Qte, gz ? oz.x.Qte : 0), gz ? Wz.o.Yg("qteStateUpdated", gz.getState()) : Wz.o.Yg("qteStateUpdated", {
-         type: null,
-         typeSpecificParameters: null,
-         isActive: !1
+       return lv.e.errorWithCode("Left the game while it loaded", ev.o.REQUEST_TO_MATCHMAKING, {
+         severity: "low",
+         ev: !0
```

#### 44. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L296-L306` → after: `L22240-L22405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22240-L22405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22240-L22405) · [Before (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L296-L306)

```diff
-     class Pz {
-       constructor(zz, tz) {
-         this.resultPromise = zz, this.tearDownQTE = tz
-       }
-       static create(zz, tz, sz) {
-         const Fz = Promise.race([zz, tz]);
-         return new Pz(Fz, sz)
-       }
-       async getResult() {
-         return await this.resultPromise
-       }
+     async function Vv(vv, zv, Pv) {
+       return (0, hv.N)(vv) || vv instanceof Sv.e || !(vv.length > Tv.U) ? await cv.e.matchmakePlayer(Pv, vv, zv, (0, mv.e)()).then((vv => {
+         if (!1 === vv.succeeded) return lv.e.errorWithCode(vv.failReason, ev.o.REQUEST_TO_MATCHMAKING, {
+           severity: "low"
+         });
+         const {
+           gameServerHost: zv,
+           lobbyName: Pv,
+           gameNameWithVariation: hv
+         } = vv, Sv = Uv(Ov.hostFor(zv));
+         return Sv.isError() ? Sv.asError().forward() : lv.e.value({
+           endpoint: Sv.getValue(),
+           gameNameWithVariation: hv,
+           lobbyName: Pv
+         })
+       })).catch((vv => (console.error("Bad response from the matchmaking server:", vv), lv.e.errorWithCode(vv.toString(), ev.o.REQUEST_TO_MATCHMAKING, {
+ ... (150 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L308-L353` → after: `L22407-L22448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22407-L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22407-L22448) · [Before (L308-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L308-L353)

```diff
-     class rz {
-       static queueQTE(zz, tz, sz) {
-         let Fz, Wz;
-         const Xz = new Promise((zz => {
-             Fz = zz
-           })),
-           Oz = new Promise((zz => {
-             Wz = () => {
-               zz("qteTornDown")
-             }
-           })),
-           oz = Promise.race([Xz, Oz]).then((() => {})),
-           vz = new uz(zz, tz, sz, Wz, oz, Fz);
-         return Dz.set(zz, vz), wz.enqueue(vz), gz || this.processNextQTE(), Pz.create(Xz, Oz, Wz)
-       }
-       static async processNextQTE() {
- ... (30 more removed lines; see GitHub link above)
+ 
+     function Gv(vv, zv, Pv, Gv, mv) {
+       const jv = (0, hv.l)(zv) ? (0, hv.q)(zv) : null,
+         fv = {
+           cookies: (0, Wv.getAllCookiesForGameNameWithVariation)(zv),
+           isMobile: (0, lv.isMobile)(),
+           isUsingCustomGameTexturePack: null !== jv && mv(jv),
+           generalCookies: {
+             joinDiscord: !!sv.h.getItem("DiscordPressed"),
+             newGo: Nv.c,
+             ...vv.getMetricsCookies(),
+             trafficCode: Gv,
+             compliance: lv.compliance
+           },
+           browserInfo: {
+             ua: window.navigator.userAgent,
+ ... (26 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L357` → after: `L22452-L22461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22452-L22461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22452-L22461) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L357)

```diff
-   4436: (zz, tz, sz) => {
+   36118: (vv, zv, Pv) => {
+     function hv(vv, zv) {
+       for (let Pv = 0; Pv < vv.length; Pv++)
+         if (vv[Pv].identifier === zv) return vv[Pv];
+       return null
+     }
+ 
+     function Sv(vv, zv) {
+       return null !== hv(vv, zv)
+     }
```

#### 47. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L359-L893` → after: `L22463-L22465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22463-L22465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22463-L22465) · [Before (L359-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L359-L893)

```diff
-       D: () => Xz,
-       Db: () => Gz,
-       G: () => wz,
-       Gb: () => bz,
-       Hb: () => xz,
-       Ib: () => Yz,
-       J: () => az,
-       Jb: () => Tz,
-       K: () => Uz,
-       Nb: () => hz,
-       O: () => Dz,
-       Ob: () => jz,
-       R: () => vz,
-       Sb: () => yz,
-       V: () => Nz,
-       Wb: () => Mz,
- ... (519 more removed lines; see GitHub link above)
+       b: () => hv,
+       f: () => Sv
+     })
```

#### 48. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L895` → after: `L22467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22467) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L895)

```diff
-   4419: (zz, tz, sz) => {
+   36387: (vv, zv, Pv) => {
```

#### 49. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L897-L899` → after: `L22469-L22471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22469-L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22469-L22471) · [Before (L897-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L897-L899)

```diff
-       C: () => Zz,
-       E: () => Bz,
-       I: () => Oz,
+       B: () => Iv,
+       F: () => Qv,
+       J: () => tv,
```

#### 50. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L904-L906` → after: `L22476-L22478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22476-L22478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22476-L22478) · [Before (L904-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L904-L906)

```diff
-       i: () => Tz,
-       k: () => Gz,
-       n: () => Hz,
+       j: () => xv,
+       m: () => Ov,
+       p: () => fv,
```

#### 51. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L913` → after: `L22484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22484) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L913)

```diff
-     var Fz = sz(4427);
+     var hv = Pv(39);
```

#### 52. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L915-L919` → after: `L22486-L22509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22486-L22509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22486-L22509) · [Before (L915-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L915-L919)

```diff
-       lockPointer: () => !1,
-       unlockPointer: () => {},
-       leaveGame: () => {}
-     };
-     let Xz = Wz;
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
+       },
+       ev = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       gv = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       pv = ev.filter((vv => "docsButton" !== vv)),
+       dv = gv.filter((vv => "aiHelperButton" !== vv)),
+       Nv = "codeEditorTutorials",
+       lv = {
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
+       },
+       Tv = {
+         welcome: "welcomeComplete",
+         docsOverview: "docsOverviewComplete",
+         aiHelperOverview: "aiHelperOverviewComplete"
+ ... (8 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L921-L922` → after: `L22511-L22514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22511-L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22511-L22514) · [Before (L921-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L921-L922)

```diff
-     function Oz(zz) {
-       Xz = null !== zz && void 0 !== zz ? zz : Wz
+     function Gv() {
+       cv.forEach((vv => {
+         vv()
+       }))
```

#### 54. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L939-L941` → after: `L22533-L22550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22533-L22550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22533-L22550) · [Before (L939-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L939-L941)

```diff
-       return vz.add(zz), () => {
-         vz.delete(zz)
-       }
+       const zv = mv();
+       zv[vv] || (Wv = {
+         ...zv,
+         [vv]: !0
+       }, hv.h.setItem(Nv, Wv))
+     }
+ 
+     function fv(vv) {
+       return "docsOverview" === vv ? ev : "aiHelperOverview" === vv ? gv : wv ? Sv[wv] : []
+     }
+ 
+     function Fv(vv) {
+       return ("worldCodeButton" !== vv || !mv().worldCodeIntroShown) && !iv.has(vv)
+     }
+ 
+     function Yv(vv) {
+ ... (2 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L945-L949` → after: `L22554-L22559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22554-L22559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22554-L22559) · [Before (L945-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L945-L949)

```diff
-       for (const Fz of vz) try {
-         Fz(zz)
-       } catch (sz) {
-         tz(sz)
-       }
+       if (! function(vv) {
+           return Cv ? Cv.name === vv : "welcome" === vv
+         }(vv) || !Fv(zv) || Yv(vv).has(zv)) return !1;
+       if (Cv) return !0;
+       const Pv = lv[zv];
+       return Pv ? !mv()[Pv] || sv.has(zv) : !mv()[Tv[vv]]
```

#### 56. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L953-L955` → after: `L22563-L22577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22563-L22577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22563-L22577) · [Before (L953-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L953-L955)

```diff
-       return Uz.add(zz), () => {
-         Uz.delete(zz)
-       }
+       var zv;
+       return null !== (zv = fv(vv).find((zv => nv(vv, zv)))) && void 0 !== zv ? zv : null
+     }
+ 
+     function Dv(vv) {
+       var zv;
+       jv(Tv[vv]), (null === (zv = Cv) || void 0 === zv ? void 0 : zv.name) === vv && (Cv = null)
+     }
+ 
+     function Kv(vv) {
+       const zv = (Cv ? [Cv.name] : ["welcome", "docsOverview"]).find((zv => Ov(zv) === vv));
+       if (!zv) return;
+       Yv(zv).add(vv);
+       const Pv = lv[vv];
+       Pv && (jv(Pv), Cv || sv.add(vv)), null === Ov(zv) && Dv(zv), Gv()
```

#### 57. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L959-L965` → after: `L22581-L22621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22581-L22621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22581-L22621) · [Before (L959-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L959-L965)

```diff
-       const sz = Kz < 0 ? 0 : zz - Kz;
-       Kz = zz;
-       for (const Wz of Uz) try {
-         Wz(sz)
-       } catch (Fz) {
-         tz(Fz)
-       }
+       const Pv = fv(vv),
+         hv = Yv(vv);
+       for (let Sv = Pv.indexOf(zv) - 1; Sv >= 0; Sv--)
+         if (hv.has(Pv[Sv]) && Fv(Pv[Sv])) return Pv[Sv];
+       return null
+     }
+ 
+     function Uv(vv, zv) {
+       return null !== Vv(vv, zv)
+     }
+ 
+     function Rv(vv, zv) {
+       const Pv = Vv(vv, zv);
+       Pv && (Yv(vv).delete(Pv), Gv())
+     }
+ 
+ ... (25 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L975-L976` → after: `L22641-L22675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22641-L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22641-L22675) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L975-L976)

```diff
-       return Nz.add(zz), () => {
-         Nz.delete(zz)
+       return 2 ** Math.floor(Math.log2(Math.max(1, vv / Sv)))
+     }
+ 
+     function gv(vv) {
+       return (vv / Sv).toFixed(1)
+     }
+   },
+   36024: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => ev,
+       i: () => pv,
+       k: () => gv,
+       m: () => dv,
+       o: () => Nv,
+       q: () => lv
+     });
+ ... (19 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L979` → after: `L22678-L22711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22678-L22711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22678-L22711) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L979)

```diff
-     let mz = 0;
+ 
+     function lv(vv, zv) {
+       const Pv = Math.max(vv, zv);
+       let hv = 0;
+       for (let Sv = -Pv; Sv <= Pv; Sv++)
+         for (let ev = -Pv; ev <= Pv; ev++)
+           for (let gv = -Pv; gv <= Pv; gv++) Tv(vv, zv, Sv, ev, gv) && hv++;
+       return hv
+     }
+ 
+     function Tv(vv, zv, Pv, hv, Sv) {
+       const ev = Pv * Pv + Sv * Sv;
+       return vv === zv ? ev + hv * hv <= vv * vv : vv > zv ? Math.abs(hv) <= zv && ev + hv * hv <= vv * vv : ev <= vv * vv && ev + hv * hv <= zv * zv
+     }
+   },
+   36016: (vv, zv, Pv) => {
+ ... (18 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L982` → after: `L22714-L22777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22714-L22777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22714-L22777) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L982)

```diff
-       mz += zz
+       return Tv + vv * Wv
+     }
+ 
+     function iv(vv, zv, Pv) {
+       var Sv, gv;
+       let {
+         footprintBytes: pv,
+         basis: Nv,
+         namesLimit: iv
+       } = function(vv) {
+         const {
+           os: zv,
+           deviceMemory: Pv
+         } = vv;
+         if ("ios" === zv) switch ((0, ev.e)(vv)) {
+           case "ipad_m":
+ ... (48 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L986-L987` → after: `L22782-L22817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22782-L22817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22782-L22817) · [Before (L986-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L986-L987)

```diff
-       const zz = mz;
-       return mz = 0, zz
+       return iv({
+         os: (0, Sv.getOperatingSystem)(),
+         deviceMemory: navigator.deviceMemory,
+         ...(0, ev.f)()
+       }, (0, gv.g)(), (0, pv.G)("wasm").length > 0)
+     }
+ 
+     function mv() {
+       return cv ??= Gv(), cv
+     }
+ 
+     function jv() {
+       var vv;
+       return (null !== (vv = cv) && void 0 !== vv ? vv : Gv()).basis
+     }
+ 
+ ... (20 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L991-L993` → after: `L22830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22830) · [Before (L991-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L991-L993)

```diff
-       return Dz.add(zz), () => {
-         Dz.delete(zz)
-       }
+       return vv.classList.contains("TouchKeyHit") && wv() ? null : vv.firstElementChild
```

#### 63. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L997-L998` → after: `L22834-L22839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22834-L22839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22834-L22839) · [Before (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L997-L998)

```diff
-       return gz.add(zz), () => {
-         gz.delete(zz)
+       return vv.classList.contains("TouchKeyHit") && !vv.classList.contains("CanvasZone") ? {
+         whole: !wv(),
+         keyBox: null
+       } : {
+         whole: !1,
+         keyBox: av(Tv(vv))
```

#### 64. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1003` → after: `L22844-L22851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22844-L22851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22844-L22851) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1003)

```diff
-       bz = 0, wz = 0, Kz = -1
+       return document.documentElement.classList.contains(pv.o)
+     }
+ 
+     function av(vv) {
+       return !(vv instanceof HTMLElement) || vv.offsetWidth <= 0 || vv.offsetHeight <= 0 ? null : {
+         width: vv.offsetWidth,
+         height: vv.offsetHeight
+       }
```

#### 65. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1007-L1010` → after: `L22855-L22856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22855-L22856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22855-L22856) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1007-L1010)

```diff
-       if ("paced" === zz) return wz += tz, null;
-       if ("drawn" !== zz && "skipped" !== zz) return null;
-       const sz = tz + wz;
-       return wz = 0, sz
+       const Pv = vv => Math.min(65535, Math.round(4 * vv));
+       return (Pv(vv) | Pv(zv) << 16) >>> 0
```

#### 66. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1013-L1028` → after: `L22859-L22863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22859-L22863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22859-L22863) · [Before (L1013-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1013-L1028)

```diff
-     function Tz(zz, tz, sz, Wz) {
-       const Xz = (0, Fz.j)(tz),
-         Oz = zz > 0 ? performance.now() : 0;
-       for (let Fz = 0; Fz < zz; Fz++)
-         for (const zz of Dz) try {
-           zz()
-         } catch (oz) {
-           Wz(oz)
-         }
-       if (zz > 0 && Jz(performance.now() - Oz), null !== sz) {
-         for (const zz of uz) try {
-           zz(sz)
-         } catch (oz) {
-           Wz(oz)
-         }
-         bz += sz
+     function Cv(vv) {
+       return {
+         x: vv.left + vv.width / 2,
+         y: vv.top + vv.height / 2,
+         radius: Math.min(vv.width, vv.height) / 2
```

#### 67. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1030-L1036` → after: `L22865-L22902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22865-L22902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22865-L22902) · [Before (L1030-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1030-L1036)

```diff
-       if ("drawn" === tz) {
-         const zz = bz;
-         bz = 0;
-         for (const tz of Nz) try {
-           tz(zz)
-         } catch (oz) {
-           Wz(oz)
+     }
+     const iv = new class {
+       constructor(vv) {
+         this.write = vv, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
+       }
+       set(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         zv ? this.elements.set(vv, {
+           element: zv,
+           hidden: Pv
+         }) : this.elements.delete(vv), this.measureOne(vv)
+       }
+       measure() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           left: this.canvasLeft,
+           top: this.canvasTop
+ ... (22 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1039-L1042` → after: `L22906-L22915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22906-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22906-L22915) · [Before (L1039-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1039-L1042)

```diff
-       for (const Fz of gz) try {
-         Fz(zz, Xz)
-       } catch (oz) {
-         Wz(oz)
+       measureOne(vv) {
+         const zv = this.shown(vv);
+         if (!zv) return void this.write(Sv.f.TouchZone, vv, 0, 0, 0);
+         const {
+           rect: Pv,
+           element: hv
+         } = zv, ev = Cv(Pv);
+         this.write(Sv.f.TouchZone, vv, ev.x - this.canvasLeft, ev.y - this.canvasTop, sv(Pv.width, Pv.height));
+         const gv = av(Tv(hv));
+         this.write(Sv.f.TouchZone, 256 | vv, 0, 0, gv ? sv(gv.width, gv.height) : 0)
```

#### 69. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1044` → after: `L22917-L22930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22917-L22930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22917-L22930) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1044)

```diff
-     }
+       shown(vv) {
+         const zv = this.elements.get(vv),
+           Pv = hv.c.get("worldPanelHud");
+         if (!zv || zv.hidden || "none" === Pv) return null;
+         const Sv = zv.element.getBoundingClientRect();
+         return Sv.width <= 0 || Sv.height <= 0 ? null : {
+           rect: Sv,
+           element: zv.element
+         }
+       }
+     }(ev.x);
+     (0, dv.l)(pv.h, (() => {
+       iv.measure()
+     }))
```

#### 70. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1046` → after: `L22932-L22935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22932-L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22932-L22935) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1046)

```diff
-   4432: (zz, tz, sz) => {
+   36360: (vv, zv, Pv) => {
+     function hv(vv) {
+       return "fetch" === vv || "timeout" === vv || "integrity" === vv ? "download" : "browser"
+     }
```

#### 71. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1098-L1138` → after: `L22938-L22942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22938-L22942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22938-L22942) · [Before (L1098-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1098-L1138)

```diff
-       de: () => Az,
-       e: () => Dz,
-       eb: () => Bz,
-       ec: () => Fz.cb,
-       ed: () => Cz,
-       h: () => wz,
-       hb: () => Fz.z,
-       he: () => jz,
-       ib: () => Fz.D,
-       ic: () => Fz.eb,
-       id: () => Fz.Xb,
-       je: () => vz,
-       kb: () => kz,
-       kd: () => Fz._b,
-       ke: () => Mz,
-       l: () => vt,
- ... (25 more removed lines; see GitHub link above)
+       g: () => gv,
+       j: () => dv,
+       k: () => pv,
+       n: () => hv,
+       p: () => ev
```

#### 72. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1140-L1144` → after: `L22944-L22978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22944-L22978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22944-L22978) · [Before (L1140-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1140-L1144)

```diff
-     var Fz = sz(4436),
-       Wz = sz(2273);
-     const Xz = Math.round(1e3 / Fz.dc),
-       Oz = 4,
-       oz = 2;
+     const Sv = "https://discord.gg/playbloxd";
+ 
+     function ev(vv) {
+       return "download" === vv ? {
+         icon: "wifi",
+         title: "wasmScreens:downloadFailedTitle",
+         help: "wasmScreens:downloadFailedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+       } : {
+         icon: "face-dizzy",
+         title: "wasmScreens:unsupportedTitle",
+         help: "wasmScreens:unsupportedHelp",
+         helpValues: {},
+ ... (19 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1147` → after: `L22981-L22989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22981-L22989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22981-L22989) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1147)

```diff
-       return crypto.getRandomValues(new Uint32Array(oz))
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
+       }
```

#### 74. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1165-L1166` → after: `L22992-L23008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R22992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L22992-L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L22992-L23008) · [Before (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1165-L1166)

```diff
-     function bz(zz) {
-       return (zz.nametagsHidden ? xz.NametagsHidden : 0) | (zz.crouchToggle ? xz.CrouchToggle : 0) | (zz.bhopDisabled ? xz.BhopDisabled : 0) | (zz.disableBobbing ? xz.DisableBobbing : 0) | (zz.ezTowering ? xz.EzTowering : 0) | (zz.ezBridging ? xz.EzBridging : 0) | (zz.showChunkBo … [truncated]
+     function dv(vv, zv, Pv) {
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+         help: Pv ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
+         helpValues: {
+           reason: vv.reason
+         },
+         discordLink: null === vv.name,
+         confirm: zv ? "general:reconnect" : vv.requiresRefresh ? "general:reload" : "general:ok",
+         cancel: null
+       }
+     }
+   },
+   36395: (vv, zv, Pv) => {
+     function hv(vv, zv) {
+ ... (1 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1205` → after: `L23012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23012) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1205)

```diff
-       return (zz.showFog ? Nz.ShowFog : 0) | (zz.lighting ? Nz.Lighting : 0) | (zz.chunkFade ? Nz.ChunkFade : 0)
+       return [vv[0] + .5, vv[1] + .5, vv[2] + .5]
```

#### 76. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1208-L1226` → after: `L23025-L23031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23025-L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23025-L23031) · [Before (L1208-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1208-L1226)

```diff
-         ResetFirst: 1,
-         AdStart: 2,
-         PreventMovement: 4,
-         AdEnd: 8,
-         PayloadMaxBytes: 1 << 20
-       },
-       xz = {
-         NametagsHidden: 1,
-         CrouchToggle: 2,
-         BhopDisabled: 4,
-         DisableBobbing: 8,
-         EzTowering: 16,
-         EzBridging: 32,
-         ShowChunkBorders: 64,
-         All: 127
-       },
- ... (3 more removed lines; see GitHub link above)
+         files: {
+           "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
+           "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
```

#### 77. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1229-L1230` → after: `L23034-L23039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23034-L23039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23034-L23039) · [Before (L1229-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1229-L1230)

```diff
-         Point: 1,
-         Stamped: 2
+         files: {
+           "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\ … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every  … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1233-L1234` → after: `L23042-L23050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23042-L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23042-L23050) · [Before (L1233-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1233-L1234)

```diff
-         Add: 1,
-         Clear: 2
+         files: {
+           "chunk.ts": 'import { setTimeout } from "./timers"\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call w … [truncated]
+           "index.ts": 'import { handleTimers } from "./timers"\n\ntick = () => {\n\thandleTimers()\n}\n\nexport { setTimeout, setInterval, clearTimeout, clearInterval } from "./timers"\nexport type { TimeoutId, IntervalId } from "./timers"\nexport { forceLoadChunk } from "./chunk … [truncated]
+           "random.ts": "/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integ … [truncated]
+           "timers.ts": 'import { PlayerId } from "@bloxd"\n\ndeclare const __brand: unique symbol\ntype Branded<T, B> = T & { [__brand]: B }\nexport type TimeoutId = Branded<number, "TimeoutId">\nexport type IntervalId = Branded<number, "IntervalId">\n\nlet nextTimeoutId: number  … [truncated]
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: 'import { PlayerId } from \'@bloxd\';\n\ndeclare const __brand: unique symbol;\ntype Branded<T, B> = T & {\n    [__brand]: B;\n};\ntype TimeoutId = Branded<number, "TimeoutId">;\ntype IntervalId = Branded<number, "IntervalId">;\n/**\n * Registers a function to be c … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1241` → after: `L23053-L23063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23053-L23063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23053-L23063) · [Before (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1241)

```diff
-         Resume: 1
+         files: {
+           "MapVoter.ts": 'import { PlayerId } from "@bloxd"\nimport { BaseMapInfo, BaseTeamInfo } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { shuffleArray, getRandomItem, setTimeout } from "@plugins/helpers"\n\nconst MAP_VOTING_CATEGORY = " … [truncated]
+           "SessionBasedGame.ts": 'import { BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions, MapSource } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { BlockName, CustomTextStyling, PlayerId, Pos } from "@bloxd"\nimport { style, getDime … [truncated]
+           "SessionBasedPlayer.ts": 'import { BaseTeamInfo, BaseMapInfo } from "./types"\nimport { ChatTags, PlayerId, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { style, getLowHigh } from "./helpers"\n\n/** Opacity a spec … [truncated]
+           "helpers.ts": 'import { CustomTextStyling, Pos, RecursiveReadonly, TranslatedText } from "@bloxd"\nimport { MapSource, MaybeRecursiveReadonly } from "./types"\n\nexport function style(msg: string | TranslatedText, colour: string): CustomTextStyling {\n\treturn [{ str: m … [truncated]
+           "index.ts": 'import { ChatTags, CustomTextStyling, EntityId, PlayerId, Pos, TranslatedText, RecursiveReadonly, BlockName } from "@bloxd"\nimport { BaseTeamInfo, BaseMapInfo, MapSource, SessionBasedGameSetupOptions } from "./types"\nimport { SessionBasedPlayer } from "./ … [truncated]
+           "types.ts": 'import { BlockName, CustomTextStyling, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\n\nexport type BaseTeamInfo = RecursiveReadonly<{\n\tname: string\n\tmaxPlayers: number\n\tcolour: string\n}>\n\n/** A w … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj … [truncated]
+         types: 'import * as _bloxd from \'@bloxd\';\nimport { PlayerId, CustomTextStyling, BlockName, ChatTags, Pos, RecursiveReadonly } from \'@bloxd\';\n\ndeclare class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends Session … [truncated]
```

#### 80. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1244` → after: `L23066-L23105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23066-L23105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23066-L23105) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1244)

```diff
-         Held: 1
+         debug: {
+           name: "debug",
+           specifier: "@plugins/debug",
+           sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
+           typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
+           files: hv.files,
+           dependencies: hv.dependencies,
+           bundledSource: hv.bundledSource,
+           types: hv.types
+         },
+         dialogue: {
+           name: "dialogue",
+           specifier: "@plugins/dialogue",
+           sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
+           typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
+           files: Sv.files,
+ ... (24 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1247-L1248` → after: `L23108-L23121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23108-L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23108-L23121) · [Before (L1247-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1247-L1248)

```diff
-     function jz(zz, tz) {
-       return (zz | tz << 8) >>> 0
+     function dv(vv) {
+       const zv = [],
+         Pv = new Set,
+         hv = vv => {
+           if (Pv.has(vv)) return;
+           const Sv = pv[vv];
+           if (Sv) {
+             Pv.add(vv);
+             for (const vv of Sv.dependencies) hv(vv);
+             zv.push(vv)
+           }
+         };
+       for (const Sv of vv) hv(Sv);
+       return zv
```

#### 82. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1252` → after: `L23140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23140) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1252)

```diff
-       return 255 & zz
+       return Sv.includes(vv)
```

#### 83. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1256` → after: `L23144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23144) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1256)

```diff
-       return zz >>> 8
+       return vv === hv.i || vv === hv.k
```

#### 84. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1259-L1260` → after: `L23147-L23148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23147-L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23147-L23148) · [Before (L1259-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1259-L1260)

```diff
-     function Mz(zz) {
-       return zz + 3 & -4
+     function pv(vv, zv) {
+       return vv === hv.i && zv === hv.k || vv === hv.k && zv === hv.i
```

#### 85. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1296` → after: `L23152-L23154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23152-L23154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23152-L23154) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1296)

```diff
-       return zz === qz.WorldgenSeed || zz === qz.Generate
+       const zv = hv.k in vv,
+         Pv = hv.i in vv;
+       return zv && Pv ? null : zv ? hv.k : Pv ? hv.i : null
```

#### 86. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1298-L1356` → after: `L23156-L23167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23156-L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23156-L23167) · [Before (L1298-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1298-L1356)

```diff
-     const Vz = 4,
-       Rz = 99,
-       pz = {
-         PAIRS_MAX: 16,
-         FIXED_WORDS: 2,
-         PAIR_WORDS: 2,
-         WORDS_MAX: 34
-       },
-       fz = {
-         BYTES: 12,
-         WEBGPU: 1,
-         GL: 2,
-         WEBGPU_LOSSES_MAX: 1,
-         LOST: 0,
-         PIPELINE_FAILED: 1
-       },
- ... (43 more removed lines; see GitHub link above)
+ 
+     function Nv(vv, zv, Pv) {
+       const hv = `${zv}/`;
+       return vv.filter((vv => vv.startsWith(hv))).map((vv => [vv, `${Pv}/${vv.slice(hv.length)}`]))
+     }
+ 
+     function lv(vv, zv) {
+       let Pv = 0;
+       for (const [hv, Sv] of Object.entries(vv)) hv !== zv && (Pv += Sv.length);
+       return Pv
+     }
+     const Tv = "@plugins/";
```

#### 87. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1359-L1361` → after: `L23170-L23174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23170-L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23170-L23174) · [Before (L1359-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1359-L1361)

```diff
-       for (const [tz, sz] of Object.entries(Fz.g))
-         if (sz === zz) return tz;
-       return `Unknown${zz}`
+       return `${Tv}${vv}`
+     }
+ 
+     function wv(vv, zv) {
+       return `/node_modules/@plugins/${vv}/${zv}`
```

#### 88. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1365-L1375` → after: `L23178-L23182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23178-L23182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23178-L23182) · [Before (L1365-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1365-L1375)

```diff
-       return {
-         status: zz[Fz.D.Status],
-         lastError: zz[Fz.D.LastError],
-         lastErrorDetail: zz[Fz.D.LastErrorDetail],
-         errorCount: zz[Fz.D.ErrorCount],
-         frameIndex: zz[Fz.D.FrameIndex],
-         tickIndex: zz[Fz.D.TickIndex],
-         renderPending: zz[Fz.D.RenderPending],
-         firstView: zz[Fz.D.FirstView],
-         chunksCancelled: zz[Fz.D.ChunksCancelled]
-       }
+       if (!vv.startsWith(Tv)) return null;
+       const zv = vv.slice(Tv.length);
+       return function(vv) {
+         return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(vv)
+       }(zv) ? zv : null
```

#### 89. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1378` → after: `L23185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23185) · [Before (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1378)

```diff
-   4427: (zz, tz, sz) => {
+   36374: (vv, zv, Pv) => {
```

#### 90. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1382` → after: `L23190-L23191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23190-L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23190-L23191) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1382)

```diff
-       j: () => Wz
+       j: () => dv,
+       m: () => ev
```

#### 91. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1384` → after: `L23193-L23196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23193-L23196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23193-L23196) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1384)

```diff
-     var Fz = sz(4432);
+     var hv = Pv(36372);
+     const Sv = 5,
+       ev = "[SCHEMATIC]",
+       gv = 1024e4;
```

#### 92. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1387-L1399` → after: `L23199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23199) · [Before (L1387-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1387-L1399)

```diff
-       return "none" !== zz
-     }
- 
-     function Xz(zz, tz) {
-       if (!zz) return "none";
-       switch (tz) {
-         case Fz.$.Drawn:
-           return "drawn";
-         case Fz.$.Paced:
-           return "paced";
-         default:
-           return "skipped"
-       }
+       return vv.endsWith(".bloxdschem") && (0, hv.r)(vv.slice(0, -11) + ".ts") && vv.length <= 64
```

#### 93. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1403` → after: `L23203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23203) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1403)

```diff
-       return "drawn" === zz
+       return Object.fromEntries(Object.keys(vv).map((vv => [vv, ev])))
```

#### 94. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1406` → after: `L23206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23206) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1406)

```diff
-   4438: (zz, tz, sz) => {
+   36372: (vv, zv, Pv) => {
```

#### 95. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1408-L1410` → after: `L23208-L23216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23208-L23216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23208-L23216) · [Before (L1408-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1408-L1410)

```diff
-       e: () => vz,
-       i: () => Xz,
-       k: () => oz
+       b: () => Sv,
+       c: () => ev,
+       d: () => Wv,
+       g: () => pv,
+       j: () => dv,
+       n: () => Nv,
+       r: () => Tv,
+       s: () => lv,
+       v: () => gv
```

#### 96. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1412-L1413` → after: `L23218-L23224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23218-L23224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23218-L23224) · [Before (L1412-L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1412-L1413)

```diff
-     var Fz = sz(2273),
-       Wz = sz(4446);
+     var hv = Pv(1226);
+     let Sv = function(vv) {
+         return vv[vv.Join = 0] = "Join", vv[vv.Leave = 1] = "Leave", vv[vv.Push = 2] = "Push", vv[vv.Cursor = 3] = "Cursor", vv[vv.Submit = 4] = "Submit", vv[vv.ReloadAsVariation = 5] = "ReloadAsVariation", vv[vv.CreateFile = 6] = "CreateFile", vv[vv.RenameFile = 7] = "RenameFile … [truncated]
+       }({}),
+       ev = function(vv) {
+         return vv[vv.Joined = 0] = "Joined", vv[vv.Updates = 1] = "Updates", vv[vv.Presence = 2] = "Presence", vv[vv.RemoteCursor = 3] = "RemoteCursor", vv[vv.ForceClose = 4] = "ForceClose", vv[vv.LobbyFilesChanged = 5] = "LobbyFilesChanged", vv[vv.EngineSettings = 6] = "EngineSe … [truncated]
+       }({});
```

#### 97. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1416-L1420` → after: `L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23227) · [Before (L1416-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1416-L1420)

```diff
-       let {
-         action: tz,
-         flags: sz
-       } = zz;
-       return "mid-fire" === tz && 0 !== (sz & Fz.b.AltLeftClick)
+       return "lobby" === vv.kind ? `lobby:${vv.path}` : `codeBlock:${vv.pos[0]},${vv.pos[1]},${vv.pos[2]}`
```

#### 98. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1425-L1426` → after: `L23231-L23240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23231-L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23231-L23240) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1425-L1426)

```diff
-       return Oz.add(zz), () => {
-         Oz.delete(zz)
+       if ("lobby" === vv) return {
+         kind: "lobby",
+         path: hv.i
+       };
+       if (vv.startsWith("lobby:")) {
+         const zv = vv.slice(6);
+         return Tv(zv) ? {
+           kind: "lobby",
+           path: zv
+         } : null
```

#### 99. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1431-L1440` → after: `L23250-L23254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23250-L23254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23250-L23254) · [Before (L1431-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1431-L1440)

```diff
-       const tz = Wz.b[255 & zz];
-       if (void 0 === tz) return;
-       const sz = zz >>> 8 & 255,
-         Xz = {
-           action: tz,
-           down: 0 !== (sz & Fz.b.Down),
-           flags: sz,
-           press: zz >>> 16
-         };
-       for (const Fz of Oz) Fz(Xz)
+       return vv.endsWith(".d.ts")
+     }
+ 
+     function Nv(vv) {
+       return vv.endsWith(".ts") && !dv(vv)
```

#### 100. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1443` → after: `L23272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23272) · [Before (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1443)

```diff
-   4446: (zz, tz, sz) => {
+   4592: (vv, zv, Pv) => {
```

#### 101. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1445` → after: `L23274-L23275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23274-L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23274-L23275) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1445)

```diff
-       b: () => Wz,
+       c: () => Sv,
+       e: () => hv,
```

#### 102. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1447-L1449` → after: `L23277-L23278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23277-L23278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23277-L23278) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1447-L1449)

```diff
-       j: () => Oz,
-       n: () => Fz,
-       q: () => oz
+       h: () => dv,
+       l: () => gv
```

#### 103. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1451-L1648` → after: `L23280-L23281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23280-L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23280-L23281) · [Before (L1451-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1451-L1648)

```diff
-     const Fz = {
-         Mouse1: 1,
-         Mouse2: 2,
-         Mouse3: 3,
-         "Alt+Left Click": 4,
-         F2: 5,
-         F4: 6,
-         F5: 7,
-         F8: 8,
-         F9: 9,
-         Digit0: 10,
-         Digit1: 11,
-         Digit2: 12,
-         Digit3: 13,
-         Digit4: 14,
-         Digit5: 15,
- ... (182 more removed lines; see GitHub link above)
+     const hv = ["sine", "triangle", "square", "sawtooth"],
+       Sv = 55,
```

#### 104. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1650-L1729` → after: `L23283-L23419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23283-L23419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23283-L23419) · [Before (L1650-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1650-L1729)

```diff
-         forward: [21, 46],
-         backward: [31, 49],
-         left: [30, 47],
-         right: [32, 48],
-         sprint: [50, 51],
-         jump: [59],
-         crouch: [52, 41, 60, 61, 62, 53],
-         "primary-fire": [1],
-         "alt-fire": [3, 22],
-         SpecialAction1: [23],
-         SpecialAction2: [33],
-         ReloadGun: [23],
-         DropItem: [20],
-         "mid-fire": [2, 4],
-         Zoom: [42],
-         SwapCameraZoom: [29, 7],
- ... (64 more removed lines; see GitHub link above)
+         soft: {
+           waveform: "sine",
+           pitchHz: 300,
+           glideSemitones: -.5,
+           durationMs: 80,
+           attackMs: 6,
+           releaseMs: 18,
+           lowpassHz: null,
+           volume: .6,
+           intonation: {
+             variationSemitones: 1.2,
+             declineSemitones: 1.5,
+             questionRiseSemitones: 3.5,
+             exclaimLiftSemitones: 1.5
+           },
+           syllableMs: 60
+ ... (121 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1732` → after: `L23422-L23426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23422-L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23422-L23426) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1732)

```diff
-       return zz instanceof HTMLElement && (!!(zz.isContentEditable || zz instanceof HTMLTextAreaElement || zz instanceof HTMLSelectElement) || zz instanceof HTMLInputElement && !Xz.has(zz.type))
+       return "string" !== typeof vv ? vv : Object.hasOwn(ev, vv) ? ev[vv] : null
+     }
+ 
+     function pv(vv, zv, Pv) {
+       return Math.min(Pv, Math.max(zv, vv))
```

#### 106. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1736-L1748` → after: `L23430-L23448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23430-L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23430-L23448) · [Before (L1736-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1736-L1748)

```diff
-       let tz = null;
-       const sz = sz => {
-           const Wz = Oz(sz);
-           Wz !== tz && (tz = Wz, zz(Fz.j.UiCapture, Fz.x.Keyboard, 0, 0, Wz ? Fz.x.Keyboard : 0))
-         },
-         Wz = zz => {
-           sz(zz.target)
-         },
-         Xz = zz => {
-           sz(zz.relatedTarget)
-         },
-         oz = () => {
-           sz(document.activeElement)
+       const zv = pv(vv.durationMs, 10, 500),
+         Pv = pv(vv.attackMs, 0, zv),
+         {
+           intonation: Sv
+         } = vv;
+       return {
+         waveform: hv.includes(vv.waveform) ? vv.waveform : "sine",
+         pitchHz: pv(vv.pitchHz, 20, 4e3),
+         glideSemitones: pv(vv.glideSemitones, -24, 24),
+         durationMs: zv,
+         attackMs: Pv,
+         releaseMs: pv(vv.releaseMs, 0, zv - Pv),
+         lowpassHz: null === vv.lowpassHz ? null : pv(vv.lowpassHz, 20, 2e4),
+         volume: pv(vv.volume, 0, 2),
+         intonation: {
+           variationSemitones: pv(Sv.variationSemitones, 0, 6),
+ ... (3 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1750-L1755` → after: `L23450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23450) · [Before (L1750-L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1750-L1755)

```diff
-         vz = {
-           capture: !0,
-           passive: !0
-         };
-       return document.addEventListener("focusin", Wz, vz), document.addEventListener("focusout", Xz, vz), document.addEventListener("keydown", oz, vz), sz(document.activeElement), () => {
-         document.removeEventListener("focusin", Wz, vz), document.removeEventListener("focusout", Xz, vz), document.removeEventListener("keydown", oz, vz)
+         syllableMs: pv(vv.syllableMs, 25, 200)
```

#### 108. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1758-L1767` → after: `L23453-L23473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R23453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L23453-L23473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/83.js#L23453-L23473) · [Before (L1758-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/83.js#L1758-L1767)

```diff
-     const vz = new Map;
- 
-     function Uz(zz, tz) {
-       var sz;
-       let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       vz.set(Fz, (null !== (sz = vz.get(Fz)) && void 0 !== sz ? sz : 0) & ~zz | tz & zz);
-       let Xz = 0;
-       for (const Wz of vz.values()) Xz |= Wz;
-       return (0, Wz.z)(zz, Xz & zz)
-     }
+   },
+   9854: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
+   },
+   18023: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm … [truncated]
+   },
+   19941: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
+   },
+   19947: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
+   },
+   19951: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
+   },
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/84.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/84.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc)

#### 1. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L4-L6)

```diff
-   39680: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       startWasmPadGameplay: () => dz
+   4525: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => mv,
+       e: () => iv
```

#### 2. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L8-L49` → after: `L9-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L9-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L9-L98) · [Before (L8-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L8-L49)

```diff
-     sz(39683);
-     var Fz = sz(39686),
-       Wz = sz(39702),
-       Xz = sz(1884),
-       Oz = sz(39714),
-       oz = sz(4436),
-       vz = sz(4419),
-       Uz = sz(39716),
-       Kz = sz(39720),
-       uz = sz(4446),
-       Nz = sz(39797),
-       bz = sz(2277),
-       wz = sz(8351),
-       Dz = sz(39688),
-       gz = sz(8325);
-     const Hz = zz => {
- ... (26 more removed lines; see GitHub link above)
+     var hv = Pv(1291),
+       Sv = Pv(26);
+     var ev = Pv(312);
+     var gv = Pv(626);
+     var pv = Pv(2304),
+       dv = Pv(4529),
+       Nv = Pv(4550),
+       lv = Pv(4561);
+     class Tv {
+       constructor(vv, zv, Pv, hv, Sv, ev) {
+         this.id = vv, this.type = zv, this.parameters = Pv, this.tearDownNotification = hv, this.onDonePromise = Sv, this.resolveRequest = ev
+       }
+     }
+     const Wv = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+     class wv {
+       constructor(vv, zv, Pv, hv, Sv, ev) {
+ ... (74 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L51-L53` → after: `L100-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L100-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L100-L131) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L51-L53)

```diff
-       Tz = () => {
-         const zz = (0, Kz.f)();
-         return null !== zz && void 0 !== zz && zz.isCoreRunning ? zz : null
+       timedClick: class {
+         constructor(vv, zv, Pv) {
+           var hv;
+           this.resolveRequest = zv, this.tearDownNotification = Pv, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = vv, this.timeWindowMs = null !== (hv = this.parameters.Ez) && void … [truncated]
+         }
+         handleMouseInput(vv) {
+           if (!vv || this.isCompleted) return;
+           Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
+         }
+         handleTick() {
+           if (this.isCompleted) return;
+           Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
+         }
+         complete(vv) {
+           this.isCompleted = !0, this.resolveRequest(vv)
+         }
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L55-L76` → after: `L133-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L133-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L133-L193) · [Before (L55-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L55-L76)

```diff
-       cz = zz => Oz.t.playerFlags(zz.api.apiView, 0),
-       jz = zz => null !== zz && Oz.t.targetBlockId(zz.api.apiView, 0) !== Oz.fd,
-       Az = () => {
-         const zz = (0, wz.b)(),
-           tz = new Dz.d;
-         let sz = !1;
-         const Fz = (zz, tz) => {
-             (0, bz.r)(oz.G.PadLook, Oz.Gd.Rate, zz, tz, 0)
-           },
-           Wz = () => {
-             sz = !1, tz.reset(), Fz(0, 0)
-           };
-         return {
-           update: (Wz, Xz, vz) => {
-             sz || (zz.discardPending(), sz = !0);
-             const Uz = (0, Dz.o)(tz, Wz, Xz, vz, performance.now());
- ... (6 more removed lines; see GitHub link above)
+       gravityBar: class {
+         constructor(vv, zv, Pv) {
+           var hv;
+           this.resolveRequest = zv, this.tearDownNotification = Pv, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
+           const Sv = vv;
+           this.parameters = {
+             ...Sv,
+             Xz: ev.d.clamp(Sv.Xz, .05, 1)
+           }, this.progress = null !== (hv = Sv.Az) && void 0 !== hv ? hv : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+         }
+         handleMouseInput(vv) {
+           this.isMouseDown = vv
+         }
+         handleTick(vv) {
+           this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(vv))
+         }
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L79-L81` → after: `L196-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L196-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L196-L242) · [Before (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L79-L81)

```diff
-       yz = () => {
-         const zz = Tz();
-         return null !== zz && 0 !== (cz(zz) & Oz.Nd.PadSneakToggled)
+       precisionBar: class {
+         constructor(vv, zv, Pv) {
+           var hv, Sv, gv, pv, dv;
+           this.resolveRequest = zv, this.tearDownNotification = Pv, this.startTime = void 0, this.speed = void 0, this.gP = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           const Nv = vv;
+           this.parameters = {
+             ...Nv,
+             speed: null !== (hv = Nv.speed) && void 0 !== hv ? hv : .5,
+             gP: ev.d.clamp(Nv.gP, .05, 1),
+             label: null !== (Sv = Nv.label) && void 0 !== Sv ? Sv : [{
+               str: "Click when the marker is within the green zone."
+             }],
+             icon: null !== (gv = Nv.icon) && void 0 !== gv ? gv : null,
+             scale: null !== (pv = Nv.scale) && void 0 !== pv ? pv : 1,
+             rotation: null !== (dv = Nv.rotation) && void 0 !== dv ? dv : 0
+           }, this.speed = this.parameters.speed, this.gP = this.parameters.gP, this.startTime = Date.now()
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L83-L87` → after: `L244-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L244-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L244-L269) · [Before (L83-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L83-L87)

```diff
-       Mz = () => {
-         const zz = (zz => {
-           const tz = zz => function() {
-             return (0, Nz.b)(), zz(...arguments)
-           };
+       rhythmClick: class {
+         constructor(vv, zv, Pv) {
+           this.resolveRequest = zv, this.tearDownNotification = Pv, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = vv, this.shrinkStartT … [truncated]
+         }
+         handleMouseInput(vv) {
+           if (!vv || this.isCompleted) return;
+           const zv = this.getOuterCircleProgress();
+           if (zv <= this.parameters.lP && zv >= -this.parameters.lP) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.dP) return void this.complete(!0)
+           } else this.handleMiss();
+           this.shrinkStartTime = Date.now()
+         }
+         handleMiss() {
+           this.misses++, this.lastClickResult = !1, !(0, gv.N)(this.parameters.TP) && this.misses > this.parameters.TP ? this.complete(!1) : this.shrinkStartTime = Date.now()
+         }
+         handleTick() {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L89-L115` → after: `L271-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L271-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L271-L280) · [Before (L89-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L89-L115)

```diff
-             primaryFireDown: tz((() => (ez(Bz), 0))),
-             primaryFireUp: tz((() => {
-               Zz(Bz)
-             })),
-             altFireDown: tz((() => (ez(Pz), 0))),
-             altFireUp: tz((() => {
-               Zz(Pz)
-             })),
-             jumpDown: tz((() => {
-               Gz(Yz)
-             })),
-             specialActionDown: tz((zz => {
-               ez(Iz[zz])
-             })),
-             specialActionUp: tz((zz => {
-               Zz(Iz[zz])
- ... (11 more removed lines; see GitHub link above)
+             type: this.type,
+             parameters: this.parameters,
+             state: {
+               outerCircleProgress: this.getOuterCircleProgress(),
+               successes: this.successes,
+               dP: this.parameters.dP,
+               misses: this.misses,
+               lastClickResult: this.lastClickResult
+             },
+             isActive: !0
```

#### 8. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L117-L190` → after: `L282-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L282-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L282-L316) · [Before (L117-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L117-L190)

```diff
-         })(Tz);
-         let tz = !1,
-           sz = null;
-         const Fz = () => {
-           var zz;
-           null === (zz = sz) || void 0 === zz || zz(), sz = null
-         };
-         return {
-           bodies: () => zz,
-           look: Az(),
-           move: (zz, sz) => {
-             var Wz;
-             Fz();
-             const {
-               bits: Xz,
-               flips: oz
- ... (58 more removed lines; see GitHub link above)
+         }
+         tearDown() {
+           this.tearDownNotification()
+         }
+       }
+     };
+ 
+     function cv() {
+       (0, lv.g)(pv.u.Qte, Cv ? pv.u.Qte : 0), Cv ? Sv.j.zC("qteStateUpdated", Cv.getState()) : Sv.j.zC("qteStateUpdated", {
+         type: null,
+         typeSpecificParameters: null,
+         isActive: !1
+       })
+     }
+     class Gv {
+       constructor(vv, zv) {
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L192-L195` → after: `L318-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L318-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L318-L333) · [Before (L192-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L192-L195)

```diff
-           },
-           pressTouchButton: zz => {
-             zz ? ez(Jz) : Zz(Jz)
-           }
+           })),
+           pv = Promise.race([ev, gv]).then((() => {})),
+           dv = new Tv(vv, zv, Pv, Sv, pv, hv);
+         return sv.set(vv, dv), av.enqueue(dv), Cv || this.processNextQTE(), Gv.create(ev, gv, Sv)
+       }
+       static async processNextQTE() {
+         if (Cv || av.kw()) return void(av.kw() && Cv && (Cv = null, cv()));
+         const vv = await av.dequeue();
+         if (!sv.has(vv.id)) return void await this.processNextQTE();
+         sv.delete(vv.id);
+         const zv = new wv(vv.id, vv.type, vv.parameters, vv.resolveRequest, vv.onDonePromise, vv.tearDownNotification);
+         Cv = zv, cv();
+         try {
+           await zv.waitUntilDone()
+         } catch (Pv) {
+           console.error("Error while waiting for QTE to resolve:", Pv.stack)
```

#### 10. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L197-L203` → after: `L335-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L335-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L335-L347) · [Before (L197-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L197-L203)

```diff
-       },
-       dz = () => {
-         const zz = (0, Wz.c)(Mz()),
-           tz = (0, Fz.c)(),
-           sz = null;
-         return () => {
-           zz(), tz(), null === sz || void 0 === sz || sz()
+         Cv === zv && (Cv.cleanup(), Cv = null, cv()), await this.processNextQTE()
+       }
+       static cancelQTE(vv) {
+         if (Cv && Cv.id === vv) return Cv.tearDown(), Cv = null, cv(), void this.processNextQTE();
+         const zv = sv.get(vv);
+         zv && (sv.delete(vv), zv.tearDownNotification())
+       }
+       static getCurrentState() {
+         return Cv ? Cv.getState() : {
+           type: null,
+           parameters: null,
+           state: null,
+           isActive: !1
```

#### 11. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L207` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L357) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L207)

```diff
-   4436: (zz, tz, sz) => {
+   4542: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L209-L212` → after: `L359-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L359-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L359-L364) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L209-L212)

```diff
-       D: () => Xz,
-       Db: () => Gz,
-       G: () => wz,
-       Gb: () => bz,
+       $: () => nv,
+       A: () => ev,
+       C: () => av,
+       Cb: () => Uv,
+       E: () => Jv,
+       Fb: () => Zv,
```

#### 13. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L214-L215` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L366) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L214-L215)

```diff
-       Ib: () => Yz,
-       J: () => az,
+       I: () => Nv,
```

#### 14. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L217-L219` → after: `L368-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L368-L370) · [Before (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L217-L219)

```diff
-       K: () => Uz,
-       Nb: () => hz,
-       O: () => Dz,
+       Kb: () => Iv,
+       M: () => sv,
+       Mb: () => Gv,
```

#### 15. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L221` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L372-L373) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L221)

```diff
-       R: () => vz,
+       P: () => dv,
+       S: () => Wv,
```

#### 16. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L224` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L376-L377) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L224)

```diff
-       Wb: () => Mz,
+       Vb: () => Sv,
+       X: () => Fv,
```

#### 17. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L226-L232` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L379-L380) · [Before (L226-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L226-L232)

```diff
-       Y: () => uz,
-       _b: () => rz,
-       ab: () => mz,
-       ac: () => kz,
-       c: () => lz,
-       cb: () => Iz,
-       dc: () => Wz,
+       bb: () => Ov,
+       d: () => yv,
```

#### 18. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L234` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L382-L383) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L234)

```diff
-       fc: () => nz,
+       f: () => Mv,
+       fb: () => Dv,
```

#### 19. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L236` → after: `L385-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L385-L386) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L236)

```diff
-       gb: () => Jz,
+       h: () => cv,
+       ib: () => Av,
```

#### 20. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L238-L240` → after: `L388-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L388-L391) · [Before (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L238-L240)

```diff
-       jb: () => ez,
-       n: () => Bz,
-       nb: () => Qz,
+       kb: () => Qv,
+       lb: () => tv,
+       m: () => iv,
+       pb: () => Kv,
```

#### 21. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L243-L247` → after: `L394-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L394-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L394-L397) · [Before (L243-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L243-L247)

```diff
-       r: () => Hz,
-       s: () => gz,
-       tb: () => Az,
-       v: () => Oz,
-       vb: () => Zz,
+       sb: () => Vv,
+       t: () => gv,
+       u: () => pv,
+       wb: () => wv,
```

#### 22. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L249` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L399) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L249)

```diff
-       z: () => Fz,
+       xb: () => fv,
```

#### 23. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L745` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L895) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L745)

```diff
-   4419: (zz, tz, sz) => {
+   4529: (vv, zv, Pv) => {
```

#### 24. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L748-L751` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L899) · [Before (L748-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L748-L751)

```diff
-       E: () => Bz,
-       I: () => Oz,
-       L: () => oz,
-       N: () => Iz,
+       c: () => Yv,
```

#### 25. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L753-L754` → after: `L901-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L901-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L901-L903) · [Before (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L753-L754)

```diff
-       h: () => rz,
-       i: () => Tz,
+       e: () => Uv,
+       g: () => Vv,
+       j: () => iv,
```

#### 26. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L756` → after: `L905-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L905-L906) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L756)

```diff
-       n: () => Hz,
+       m: () => Gv,
+       o: () => jv,
```

#### 27. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L758` → after: `L908-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L908-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L908-L909) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L758)

```diff
-       t: () => Pz,
+       u: () => Dv,
+       w: () => Kv,
```

#### 28. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L760-L761` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L911) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L760-L761)

```diff
-       y: () => Cz,
-       z: () => ez
+       y: () => gv
```

#### 29. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L763` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L913) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L763)

```diff
-     var Fz = sz(4427);
+     var hv = Pv(4531);
```

#### 30. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L772` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L922) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L772)

```diff
-       Xz = null !== zz && void 0 !== zz ? zz : Wz
+       ev = null !== vv && void 0 !== vv ? vv : Sv
```

#### 31. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L864` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1014) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L864)

```diff
-       const Xz = (0, Fz.j)(tz),
+       const ev = (0, hv.i)(zv),
```

#### 32. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L896` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1046) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L896)

```diff
-   4432: (zz, tz, sz) => {
+   4535: (vv, zv, Pv) => {
```

#### 33. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L898-L900` → after: `L1048-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1048-L1050) · [Before (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L898-L900)

```diff
-       $: () => Fz.x,
-       $b: () => Hz,
-       A: () => Oz,
+       $: () => hv.q,
+       $c: () => hv.pb,
+       $d: () => Hv,
```

#### 34. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L902-L908` → after: `L1052-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1052-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1052-L1059) · [Before (L902-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L902-L908)

```diff
-       B: () => cz,
-       Bb: () => dz,
-       Cd: () => iz,
-       Dc: () => Ft,
-       Dd: () => hz,
-       Eb: () => Gz,
-       Ec: () => Fz.vb,
+       Bb: () => hv.C,
+       Bc: () => hv.X,
+       Cd: () => hv.Kb,
+       Ce: () => tv,
+       D: () => Rv,
+       Db: () => yv,
+       Ec: () => hv.$,
+       Ee: () => xv,
```

#### 35. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L910-L917` → after: `L1061-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1061-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1061-L1069) · [Before (L910-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L910-L917)

```diff
-       Fd: () => nz,
-       Gc: () => Fz.zb,
-       Hb: () => ez,
-       I: () => pz,
-       Ib: () => Fz.O,
-       Kb: () => Tz,
-       Kc: () => Fz.Db,
-       L: () => Fz.g,
+       Fb: () => rv,
+       G: () => kv,
+       Gd: () => Ov,
+       Hc: () => hv.bb,
+       He: () => dv,
+       Ib: () => vz,
+       Jd: () => hv.Mb,
+       K: () => hv.f,
+       Kc: () => hv.eb,
```

#### 36. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L919` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1071-L1072) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L919)

```diff
-       Lc: () => fz,
+       Ld: () => hv.Ob,
+       Le: () => Iv,
```

#### 37. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L921-L927` → after: `L1074-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1074-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1074-L1082) · [Before (L921-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L921-L927)

```diff
-       Md: () => Lz,
-       Ob: () => Xt,
-       Oc: () => Fz.Hb,
-       P: () => Fz.j,
-       Pd: () => qz,
-       Rc: () => Fz.Ib,
-       S: () => Fz.n,
+       Oc: () => hv.fb,
+       Oe: () => Cz,
+       P: () => hv.g,
+       Pb: () => Sv.d,
+       Pd: () => hv.Vb,
+       Qc: () => hv.lb,
+       Qe: () => wv,
+       Rd: () => ev,
+       S: () => uv,
```

#### 38. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L930-L942` → after: `L1086-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1086-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1086-L1094) · [Before (L930-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L930-L942)

```diff
-       Tc: () => Fz.Jb,
-       Ud: () => Ot,
-       V: () => Vz,
-       Vc: () => Fz.Ob,
-       Wb: () => Kt,
-       Wd: () => wt,
-       X: () => Fz.s,
-       Y: () => Fz.v,
-       Yc: () => Fz.Sb,
-       Zb: () => Wz.m,
-       _d: () => rz,
-       ab: () => uz,
-       ad: () => Fz.Wb,
+       Td: () => dz,
+       Vb: () => Qv,
+       W: () => hv.h,
+       Wc: () => lz,
+       Xc: () => Sz,
+       Xd: () => Av,
+       Y: () => bv,
+       Zb: () => Vv,
+       ae: () => Zv,
```

#### 39. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L945-L948` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1097-L1098) · [Before (L945-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L945-L948)

```diff
-       cc: () => Fz.ab,
-       ce: () => yz,
-       d: () => zt,
-       de: () => Az,
+       cd: () => hv.qb,
+       db: () => hv.t,
```

#### 40. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L950-L958` → after: `L1100-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1100-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1100-L1108) · [Before (L950-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L950-L958)

```diff
-       eb: () => Bz,
-       ec: () => Fz.cb,
-       ed: () => Cz,
-       h: () => wz,
-       hb: () => Fz.z,
-       he: () => jz,
-       ib: () => Fz.D,
-       ic: () => Fz.eb,
-       id: () => Fz.Xb,
+       eb: () => hv.u,
+       ec: () => hv.M,
+       fc: () => Uv,
+       fd: () => hv.sb,
+       g: () => sv,
+       gb: () => Tv,
+       gd: () => Xv,
+       ge: () => Mv,
+       hc: () => jv,
```

#### 41. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L961-L965` → after: `L1112-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1112-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1112-L1117) · [Before (L961-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L961-L965)

```diff
-       kd: () => Fz._b,
-       ke: () => Mz,
-       l: () => vt,
-       lc: () => Fz.gb,
-       mb: () => Wt,
+       kc: () => gz,
+       kd: () => hv.xb,
+       le: () => Jv,
+       md: () => hv.zb,
+       n: () => Nz,
+       nc: () => Gv,
```

#### 42. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L967-L982` → after: `L1119-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1119-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1119-L1132) · [Before (L967-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L967-L982)

```diff
-       o: () => Iz,
-       od: () => Fz.dc,
-       pb: () => Kz,
-       pc: () => Fz.jb,
-       pe: () => bz,
-       qb: () => Fz.G,
-       qd: () => Xz,
-       rb: () => lz,
-       s: () => mz,
-       sb: () => Rz,
-       sd: () => gz,
-       tc: () => Fz.tb,
-       ub: () => Ez,
-       v: () => Fz.c,
-       vb: () => tt,
-       vd: () => ot,
+       ob: () => hv.x,
+       p: () => nv,
+       pc: () => Tz,
+       q: () => Fv,
+       qd: () => hv.Cb,
+       qe: () => sz,
+       sb: () => hv.A,
+       se: () => mv,
+       t: () => hv.d,
+       tb: () => Lv,
+       tc: () => Sv.i,
+       ud: () => hv.Hb,
+       vc: () => iv,
+       ve: () => ov,
```

#### 43. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L984-L985` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1134-L1135) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L984-L985)

```diff
-       wc: () => bt,
-       xb: () => Wz.f,
+       wb: () => ez,
+       xc: () => hz,
```

#### 44. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L987-L988` → after: `L1137-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1137-L1139) · [Before (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L987-L988)

```diff
-       zc: () => Ut,
-       zd: () => Qz
+       yd: () => hv.Jb,
+       z: () => gv,
+       ze: () => qv
```

#### 45. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L990-L992` → after: `L1141-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1141-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1141-L1143) · [Before (L990-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L990-L992)

```diff
-     var Fz = sz(4436),
-       Wz = sz(2273);
-     const Xz = Math.round(1e3 / Fz.dc),
+     var hv = Pv(4542),
+       Sv = Pv(2304);
+     const ev = Math.round(1e3 / hv.Vb),
```

#### 46. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1209` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1365) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1209)

```diff
-       for (const [tz, sz] of Object.entries(Fz.g))
+       for (const [zv, Pv] of Object.entries(hv.f))
```

#### 47. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1211` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1367) · [Before (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1211)

```diff
-       return `Unknown${zz}`
+       return `Unknown${vv}`
```

#### 48. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1216-L1224` → after: `L1372-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1372-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1372-L1380) · [Before (L1216-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1216-L1224)

```diff
-         status: zz[Fz.D.Status],
-         lastError: zz[Fz.D.LastError],
-         lastErrorDetail: zz[Fz.D.LastErrorDetail],
-         errorCount: zz[Fz.D.ErrorCount],
-         frameIndex: zz[Fz.D.FrameIndex],
-         tickIndex: zz[Fz.D.TickIndex],
-         renderPending: zz[Fz.D.RenderPending],
-         firstView: zz[Fz.D.FirstView],
-         chunksCancelled: zz[Fz.D.ChunksCancelled]
+         status: vv[hv.A.Status],
+         lastError: vv[hv.A.LastError],
+         lastErrorDetail: vv[hv.A.LastErrorDetail],
+         errorCount: vv[hv.A.ErrorCount],
+         frameIndex: vv[hv.A.FrameIndex],
+         tickIndex: vv[hv.A.TickIndex],
+         renderPending: vv[hv.A.RenderPending],
+         firstView: vv[hv.A.FirstView],
+         chunksCancelled: vv[hv.A.ChunksCancelled]
```

#### 49. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1228` → after: `L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1384) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1228)

```diff
-   4427: (zz, tz, sz) => {
+   4531: (vv, zv, Pv) => {
```

#### 50. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1230-L1232` → after: `L1386-L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1386-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1386-L1388) · [Before (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1230-L1232)

```diff
-       d: () => Oz,
-       h: () => Xz,
-       j: () => Wz
+       c: () => gv,
+       f: () => ev,
+       i: () => Sv
```

#### 51. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1234` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1390) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1234)

```diff
-     var Fz = sz(4432);
+     var hv = Pv(4535);
```

#### 52. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1243` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1399) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1243)

```diff
-         case Fz.$.Drawn:
+         case hv.eb.Drawn:
```

#### 53. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1245` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1401) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1245)

```diff
-         case Fz.$.Paced:
+         case hv.eb.Paced:
```

#### 54. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1256` → after: `L1412-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1412-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1412-L1449) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1256)

```diff
-   4446: (zz, tz, sz) => {
+   4550: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => dv,
+       g: () => ev,
+       h: () => pv
+     });
+     var hv = Pv(2304),
+       Sv = Pv(4555);
+ 
+     function ev(vv) {
+       let {
+         action: zv,
+         flags: Pv
+       } = vv;
+       return "mid-fire" === zv && 0 !== (Pv & hv.c.AltLeftClick)
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1260-L1262` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1454-L1455) · [Before (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1260-L1262)

```diff
-       j: () => Oz,
-       n: () => Fz,
-       q: () => oz
+       i: () => hv,
+       l: () => pv
```

#### 56. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1534-L1555` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1727) · [Before (L1534-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1534-L1555)

```diff
-   39797: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz,
-       c: () => Xz,
-       e: () => Wz
-     });
-     let Fz = null;
- 
-     function Wz(zz) {
-       Fz = zz
-     }
- 
-     function Xz(zz) {
-       Fz === zz && (Fz = null)
-     }
- 
- ... (6 more removed lines; see GitHub link above)
+   4561: (vv, zv, Pv) => {
```

#### 57. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1558-L1559` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1731) · [Before (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1558-L1559)

```diff
-       i: () => Oz,
-       k: () => Uz
+       g: () => Nv
```

#### 58. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1561-L1562` → after: `L1733-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1733-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1733-L1734) · [Before (L1561-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1561-L1562)

```diff
-     var Fz = sz(2273),
-       Wz = sz(2277);
+     var hv = Pv(2304),
+       Sv = Pv(2306);
```

#### 59. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1573` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1745) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1573)

```diff
-           Wz !== tz && (tz = Wz, zz(Fz.j.UiCapture, Fz.x.Keyboard, 0, 0, Wz ? Fz.x.Keyboard : 0))
+           Sv !== zv && (zv = Sv, vv(hv.f.UiCapture, hv.u.Keyboard, 0, 0, Sv ? hv.u.Keyboard : 0))
```

#### 60. `bundles/bloxd.io/chunks/js/84.js` (Changed code · before: `L1597` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fcR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c2779fab798453e7383fa64fe9f4281c3843eca7abfe0dd232141e0381c38fc) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/84.js#L1769) · [Before (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/84.js#L1597)

```diff
-       vz.set(Fz, (null !== (sz = vz.get(Fz)) && void 0 !== sz ? sz : 0) & ~zz | tz & zz);
+       dv.set(hv, (null !== (Pv = dv.get(hv)) && void 0 !== Pv ? Pv : 0) & ~vv | zv & vv);
```
