# Changed — Bundle Modifications Report (Part 037 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `37 / 67` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 036](part-036.md) · [Part 038 →](part-038.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (75 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 56. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1148-L1157` → after: `L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1168) · [Before (L1148-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1148-L1157)

```diff
-       let tz = null !== zz && void 0 !== zz ? zz : {};
-       if ("string" === typeof tz) try {
-         tz = JSON.parse("" === tz ? "{}" : tz)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof tz || null === tz) return null;
-       const sz = {};
-       for (const [Fz, Wz] of Object.entries(tz)) "string" === typeof Wz ? sz[Fz] = Gt.has(Fz) && Zt.test(Wz) && !Wz.includes("\n") ? jt(Wz) : Wz : "boolean" === typeof Wz || "number" === typeof Wz ? sz[Fz] = String(Wz) : "object" !== typeof Wz || null === Wz || Array.isArray(Wz)  … [truncated]
-       return sz
+       nv = vv, (0, gv.b)(vv)
```

#### 57. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1160-L1170` → after: `L1172-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1172-L1173) · [Before (L1160-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1160-L1170)

```diff
-     function yt(zz, tz) {
-       let sz = 0,
-         Fz = !1;
-       for (let Wz = tz; Wz < zz.length; Wz++) {
-         const tz = zz[Wz];
-         if (Fz) "\\" === tz ? Wz++ : '"' === tz && (Fz = !1);
-         else if ('"' === tz) Fz = !0;
-         else if ("{" === tz) sz++;
-         else if ("}" === tz && (sz--, 0 === sz)) return Wz + 1
-       }
-       return null
+     function Kv() {
+       pv.l.setItem(Dv, !0)
```

#### 58. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1173-L1180` → after: `L1176-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1176-L1177) · [Before (L1173-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1173-L1180)

```diff
-     function Mt(zz, tz) {
-       let sz = zz;
-       for (const {
-           call: Fz,
-           index: Wz
-         }
-         of tz) sz = sz.slice(0, Wz) + " ".repeat(Fz.source.length) + sz.slice(Wz + Fz.source.length);
-       return sz
+     function Vv() {
+       return !0 === pv.l.getItem(Dv)
```

#### 59. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1199-L1218` → after: `L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1180) · [Before (L1199-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1199-L1218)

```diff
-     function kt(zz) {
-       const tz = [];
-       for (const Wz of zz.matchAll(Qt)) {
-         const Xz = Tt(Wz[1]),
-           Oz = Wz.index + Wz[0].length,
-           oz = yt(zz, Oz),
-           vz = null === oz ? null : At(zz.slice(Oz, oz));
-         if (null !== Xz && null !== oz && null !== vz) {
-           var sz, Fz;
-           const Oz = null !== (sz = null === (Fz = zz.slice(oz).match(/^\s*<\|call\|>/)) || void 0 === Fz ? void 0 : Fz[0]) && void 0 !== sz ? sz : "";
-           tz.push({
-             call: {
-               name: Xz,
-               args: vz,
-               source: zz.slice(Wz.index, oz + Oz.length)
-             },
- ... (4 more removed lines; see GitHub link above)
+     function Uv() {
```

#### 60. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1222-L1248` → after: `L1184-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1184-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1184-L1185) · [Before (L1222-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1222-L1248)

```diff
-     function it(zz) {
-       var tz, sz, Fz, Wz;
-       let Xz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       if ("object" !== typeof zz || null === zz) return [];
-       const Oz = zz;
-       if (Array.isArray(Oz.tool_calls)) return Oz.tool_calls.flatMap((zz => it(zz, !0)));
-       if (void 0 !== Oz.tool_call) return it(Oz.tool_call, !0);
-       if (void 0 !== Oz.function) return it(Oz.function, !0);
-       const oz = null !== (tz = null !== (sz = null !== (Fz = null !== (Wz = Oz.arguments) && void 0 !== Wz ? Wz : Oz.params) && void 0 !== Fz ? Fz : Oz.param) && void 0 !== sz ? sz : Oz.args) && void 0 !== tz ? tz : Oz.input,
-         vz = Tt(Oz.tool);
-       if (null !== vz) {
-         const {
-           tool: zz,
-           ...tz
-         } = Oz, sz = At(null !== oz && void 0 !== oz ? oz : tz);
-         return null === sz ? [] : [{
- ... (11 more removed lines; see GitHub link above)
+     function Rv() {
+       return null === av && (pv.h.removeItem("wasmLastPick"), pv.h.removeItem("wasmGuessVerdict"), (0, gv.l)(), av = (0, dv.B)(lv.d).then((vv => (null === vv || (0, dv.o)(vv) || (sv = Tv.b[vv.backend], ev.c.followGameGpu("webgpu" === vv.backend ? vv.adapter : null), "webgpu" ===  … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1251-L1270` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1188) · [Before (L1251-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1251-L1270)

```diff
-     function Lt(zz) {
-       const tz = [];
-       let sz = zz.indexOf("{");
-       for (; - 1 !== sz;) {
-         const Fz = yt(zz, sz);
-         let Wz = [];
-         if (null !== Fz) try {
-           Wz = it(JSON.parse(zz.slice(sz, Fz)))
-         } catch {}
-         if (null !== Fz && Wz.length > 0) {
-           const Xz = zz.slice(sz, Fz);
-           tz.push(...Wz.map((zz => ({
-             call: {
-               ...zz,
-               source: Xz
-             },
- ... (4 more removed lines; see GitHub link above)
+     function xv() {
```

#### 62. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1275-L1279` → after: `L1193-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1193-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1193-L1196) · [Before (L1275-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1275-L1279)

```diff
-       if (Array.isArray(zz)) return `[${zz.map(lt).join(", ")}]`;
-       if ("object" === typeof zz && null !== zz) {
-         return `{${Object.entries(zz).map((zz=>{let[tz,sz]=zz;return`${JSON.stringify(tz)}: ${lt(sz)}`})).join(", ")}}`
-       }
-       return JSON.stringify(zz)
+       return vv ? vv.load() : Promise.resolve().then((function() {
+         var vv = new Error("Cannot find module '@bloxd/wasm/client'");
+         throw vv.code = "MODULE_NOT_FOUND", vv
+       })).then((vv => vv.bloxdWasmClient))
```

#### 63. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1335` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1200) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1335)

```diff
-       return "deepseek" === zz ? "simple" : zz
+       pv.h.setItem(wv, vv)
```

#### 64. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1337-L1369` → after: `L1202-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1202-L1206) · [Before (L1337-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1337-L1369)

```diff
-     const ts = /<\|[a-z_]+\|>/g,
-       ss = /^[ \t]*`{1,2}[ \t]*$/gm,
-       Fs = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
-       Ws = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
-       Xs = /```[\w-]*/g,
-       Os = /^[\s[\],]*$/,
-       os = {
-         use_prefab: 0,
-         add_world_code: 1,
-         write_file: 2,
-         edit_file: 3,
-         replace_function: 4,
-         insert_code: 5,
-         edit_code_in_place: 6,
-         export_game: 7,
-         switch_to_world_code: 8,
- ... (17 more removed lines; see GitHub link above)
+     async function Iv() {
+       if (null === lv.d) return tv(null);
+       const vv = pv.h.getItem(wv);
+       let zv = "none" === vv ? null : "webgl";
+       return null !== vv && "none" !== vv && ("string" === typeof vv && void 0 !== (0, hv.b)(lv.d, vv) ? zv = vv : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(vv)}, is none of this client's: guessing WebGL2's`)), null === zv ? null : lv.d[zv]()
```

#### 65. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1372-L1378` → after: `L1211-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1211-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1211-L1223) · [Before (L1372-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1372-L1378)

```diff
-     function Us(zz, tz) {
-       const sz = Tt(zz),
-         Fz = At(tz);
-       return null === sz || null === Fz ? null : {
-         name: sz,
-         args: Fz
-       }
+     function Av() {
+       return Qv ??= Rv().then((async vv => {
+         var zv;
+         const Pv = null !== vv && !(0, dv.o)(vv),
+           hv = {
+             indirectHangs: Pv && await (0, dv.E)(vv, window.location.search),
+             storagePullBreaks: Pv && (0, dv.M)(vv, window.location.search),
+             splitPassBreaks: Pv && (0, dv.J)(vv, window.location.search),
+             framesAhead: (0, dv.k)(window.location.search),
+             instancedTerrainSlow: Pv && (0, dv.F)(vv, null !== (zv = (0, Nv.i)(vv, !1)) && void 0 !== zv ? zv : (0, Sv.e)())
+           };
+         return Zv = hv.indirectHangs, hv
+       })), Qv
```

#### 66. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1381-L1393` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1226-L1227) · [Before (L1381-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1381-L1393)

```diff
-     function Ks(zz, tz) {
-       const sz = [];
-       for (const Fz of function(zz) {
-           const tz = zs(zz),
-             sz = Et.filter((zz => zz !== tz));
-           return [ft[tz], ...zz === tz ? [] : [ft[zz]], ...sz.map((zz => ft[zz])), kt, Lt]
-         }(tz)) sz.push(...Fz(Mt(zz, sz)));
-       return sz.map((zz => {
-         let {
-           call: tz
-         } = zz;
-         return tz
-       }))
+     function Lv() {
+       return Zv
```

#### 67. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1395-L1397` → after: `L1229-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1229-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1229-L1254) · [Before (L1395-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1395-L1397)

```diff
- 
-     function us(zz, tz) {
-       return Ks(zz, tz).sort(((zz, tz) => os[zz.name] - os[tz.name]))
+   },
+   40116: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => hv
+     });
+     const hv = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+   },
+   40114: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Sv,
+       d: () => hv
+     });
+ ... (10 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1400-L1423` → after: `L1257-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1257-L1258) · [Before (L1400-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1400-L1423)

```diff
-     function Ns(zz) {
-       return function(zz) {
-         const tz = [...zz.matchAll(Xs)],
-           sz = [];
-         let Fz = 0;
-         for (; Fz < tz.length;) {
-           const Wz = tz[Fz],
-             Xz = tz.at(Fz + 1);
-           void 0 !== Xz && "```" === Xz[0] ? (Os.test(zz.slice(Wz.index + Wz[0].length, Xz.index)) && sz.push({
-             from: Wz.index,
-             to: Xz.index + Xz[0].length
-           }), Fz += 2) : (sz.push({
-             from: Wz.index,
-             to: Wz.index + Wz[0].length
-           }), Fz++)
-         }
- ... (8 more removed lines; see GitHub link above)
+     function Sv() {
+       return Pv(40146)
```

#### 69. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1427` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1262) · [Before (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1427)

```diff
-       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(zz)
+       return ["pl", "ru", "tr", "uk", "vi"].includes(vv)
```

#### 70. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1429-L1443` → after: `L1264-L1276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1264-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1264-L1276) · [Before (L1429-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1429-L1443)

```diff
-     const ws = new Set(["tick", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
-       Ds = {
-         playerCommand: {
-           stopsWhen: zz => `${zz} !== undefined && ${zz} !== false`,
-           passedOn: !1
-         },
-         onPlayerChat: {
-           stopsWhen: zz => `${zz} === false || ${zz} === null`,
-           passedOn: !0
-         },
-         onPlayerDamagingOtherPlayer: {
-           stopsWhen: zz => `${zz} === "preventDamage"`,
-           passedOn: !0
-         }
-       };
+     Pv.d(zv, {
+       d: () => ev,
+       e: () => hv,
+       g: () => Sv
+     })
+   },
+   40125: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => pv,
+       d: () => dv
+     });
+     var hv = Pv(73);
+     const Sv = "webgpuPipeline";
```

#### 71. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1446-L1454` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1279) · [Before (L1446-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1446-L1454)

```diff
-       var tz;
-       const sz = Jz().createSourceFile("worldCode.js", zz, Jz().ScriptTarget.Latest, !0, Jz().ScriptKind.JS),
-         {
-           parseDiagnostics: Fz
-         } = sz;
-       return {
-         file: sz,
-         hasErrors: (null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz.length) && void 0 !== tz ? tz : 0) > 0
-       }
+       return vv.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
```

#### 72. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1457-L1458` → after: `L1283-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1283-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1283-L1290) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1457-L1458)

```diff
-     function Hs(zz) {
-       return void 0 !== zz && (Jz().isFunctionExpression(zz) || Jz().isArrowFunction(zz))
+     function pv() {
+       if (null === gv) try {
+         vv = (0, hv.getBrowserName)(), zv = (0, hv.getBrowserVersion)(), Pv = (0, hv.getOperatingSystem)(), Sv = (0, hv.getOperatingSystemVersion)(), gv = `${vv.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===zv?"unknown":ev(zv)}-${Pv}${void 0===Sv?"":`_${ev(Sv)}`}`
+       } catch (pv) {
+         console.warn("The user agent couldn't be read for its browser code", pv), gv = "unknown"
+       }
+       var vv, zv, Pv, Sv;
+       return gv
```

#### 73. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1461-L1464` → after: `L1293-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1293-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1293-L1326) · [Before (L1461-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1461-L1464)

```diff
-     function Bs(zz) {
-       if (Jz().isFunctionDeclaration(zz) && zz.name) return {
-         Zw: zz,
-         nameNode: zz.name
+     function dv() {
+       let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
+       const zv = `WGPU-${pv()}`,
+         hv = (vv, hv) => {
+           const {
+             reason: ev,
+             message: gv
+           } = hv, pv = {
+             pipeline: null !== vv && void 0 !== vv ? vv : "",
+             reason: String(ev),
+             browserMessage: String(gv)
+           };
+           Promise.all([Pv.e(263), Pv.e(87)]).then((() => Pv(40235))).then((vv => {
+             let {
+               reportCrash: Pv
+             } = vv;
+ ... (18 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1466-L1472` → after: `L1328-L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1328-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1328-L1332) · [Before (L1466-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1466-L1472)

```diff
-       if (Jz().isVariableStatement(zz) && 1 === zz.declarationList.declarations.length) {
-         const tz = zz.declarationList.declarations[0],
-           sz = tz.initializer && Ps(tz.initializer);
-         if (Jz().isIdentifier(tz.name) && Hs(sz)) return {
-           Zw: sz,
-           nameNode: tz.name
-         }
+       const gv = vv.createComputePipelineAsync;
+       vv.createComputePipelineAsync = function(vv) {
+         return gv.call(this, vv).catch((zv => {
+           throw hv(vv.label, zv), zv
+         }))
```

#### 75. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L1481-L1483` → after: `L1335-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L1335-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/88.js#L1335-L1363) · [Before (L1481-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/88.js#L1481-L1483)

```diff
- 
-     function Ps(zz) {
-       return Jz().isParenthesizedExpression(zz) ? Ps(zz.expression) : zz
+   },
+   40071: (vv, zv, Pv) => {
+     vv.exports = Pv.p + "static/media/bloxd_wasm_models_bg.a746cbd0227bcbe1c6b5.wasm"
+   },
+   40068: (vv, zv, Pv) => {
+     vv.exports = Pv.p + "static/media/bloxd_wasm_workers_bg.e7313a53d539b4250cbd.wasm"
+   },
+   40139: (vv, zv, Pv) => {
+     vv.exports = Pv.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+   40146: (vv, zv, Pv) => {
+     vv.exports = Pv.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   },
+   40065: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Sv,
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 1. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L4-L23) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L4)

```diff
-   40382: (zz, tz, sz) => {
+   40767: (vv, zv, Pv) => {
+     async function hv(vv, zv) {
+       const [{
+         clientSideServerUrls: hv
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: Sv
+       }, {
+         gameBridge: ev
+       }] = await Promise.all([Promise.resolve().then((() => Pv(1184))), Promise.resolve().then((() => Pv(1114))), Promise.resolve().then((() => Pv(1876)))]), gv = ev.latest("connectedGame").websocketUrl;
+       if (!gv) throw new Error("AI Helper: not connected to a game server");
+       const pv = `${hv.getHttpUrlFromWebSocketUrl(gv)}${vv}`;
+       return await Sv(pv, zv, {
+         retries: 0
+       })
+     }
+     Pv.r(zv), Pv.d(zv, {
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L6-L129` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L25-L26) · [Before (L6-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L6-L129)

```diff
-       DOCS_AGENT_PART_CHARS: () => Mt.c,
-       DOCS_LLMS_FULL_TXT_PATH: () => Mt.e,
-       DOCS_LLMS_TXT_PATH: () => Mt.h,
-       DOCS_LLMS_TXT_URL: () => Mt.i,
-       ROOT_LLMS_TXT_PATH: () => Mt.l,
-       allGamemodeSettings: () => Fz.e,
-       arcadeModeStaticConfig: () => Dz.b,
-       arenaStaticConfig: () => Wt,
-       backroomsStaticConfig: () => Ft.d,
-       battleBoxStaticConfig: () => vt,
-       bedwarsStaticConfig: () => Gz.b,
-       bloxdAggregatorConfig: () => oz.d,
-       bloxdPreprodAggregatorConfig: () => vz.b,
-       bloxdStagingAggregatorConfig: () => Uz.e,
-       bridgeBattleStaticConfig: () => kz.d,
-       captureTheFlagStaticConfig: () => bt,
- ... (108 more removed lines; see GitHub link above)
+       WorldCodeAiPanel: () => ET,
+       default: () => oT
```

#### 3. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L131` → after: `L28-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L28-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L28-L533) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L131)

```diff
-     var Fz = sz(725);
+     var hv = Pv(52),
+       Sv = Pv(1035),
+       ev = Pv.n(Sv),
+       gv = Pv(1082);
+ 
+     function pv(vv) {
+       let {
+         title: zv,
+         children: Pv,
+         isCalm: Sv = !1,
+         isElsewhere: pv = !1,
+         defaultOpen: dv = !1,
+         isOpen: Nv,
+         onToggle: lv,
+         className: Tv
+       } = vv;
+ ... (490 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L135-L187` → after: `L537-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L537-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L537-L586) · [Before (L135-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L135-L187)

```diff
-       return null !== (tz = null === (sz = (0, Fz.l)(zz)) || void 0 === sz ? void 0 : sz.defaultListedVariation) && void 0 !== tz ? tz : zz
-     }
-     var Xz = sz(982),
-       Oz = sz(1012),
-       oz = sz(718),
-       vz = sz(707),
-       Uz = sz(714),
-       Kz = sz(705),
-       uz = sz(701),
-       Nz = sz(732),
-       bz = sz(758),
-       wz = sz(740),
-       Dz = sz(748),
-       gz = sz(750),
-       Hz = sz(755),
-       Bz = sz(761),
- ... (37 more removed lines; see GitHub link above)
+       const hv = vv.trim().split(/\s+/).length,
+         Sv = new Set((null !== (zv = vv.match(pz)) && void 0 !== zv ? zv : []).map((vv => vv.toLowerCase().replace(/s$/, "")))).size,
+         ev = (null !== (Pv = vv.match(dz)) && void 0 !== Pv ? Pv : []).length;
+       return Sv >= 2 && ev >= 2 || hv >= 30 && ev >= 3
+     }
+ 
+     function lz(vv) {
+       const zv = vv.split(/\n|\|/).map((vv => vv.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((vv => "" !== vv)).slice(0, 5).map((vv => vv.length > 90 ? `${vv.slice(0,89).trimEnd()}\u2026` : vv));
+       return zv.length >= 2 ? zv : []
+     }
+     var Tz = Pv(4615);
+ 
+     function Wz(vv) {
+       return vv.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+     }
+ 
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L189-L288` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L588-L590) · [Before (L189-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L189-L288)

```diff
-         type: "Arena",
-         title: "Battle Arena",
-         description: "Fight for glory in a 2v2v2v2v2v2v2v2 arena!",
-         smallPicture: "battle_arena",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
-       },
-       Xt = {
-         type: "Arena",
-         title: "Goldrush",
-         description: "Who is the best miner?\nMine gold and deposit it at your spawn, but beware of others killing you",
- ... (84 more removed lines; see GitHub link above)
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
```

#### 6. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L291-L298` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L594-L595) · [Before (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L291-L298)

```diff
-         type: "Arena",
-         title: "Capture the Flag",
-         description: "Classic 'Capture the Flag' with kits.",
-         smallPicture: "ctf",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: []
+         type: "string",
+         description: "A few plain words for the creator on what this change does, under 80 characters"
```

#### 7. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L301-L317` → after: `L598-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L598-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L598-L601) · [Before (L301-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L301-L317)

```diff
-         type: "Arena",
-         title: "Conqueror",
-         description: "Make tactical choices to conquer your enemies!",
-         smallPicture: "duos_combined_pic",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:c3d095738f8bde05f02d97",
-           measurementId: "G-SCYFMGGGEW"
-         },
- ... (1 more removed lines; see GitHub link above)
+         readOnlyHint: !0,
+         destructiveHint: !1,
+         idempotentHint: !0,
+         openWorldHint: !1
```

#### 8. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L319-L330` → after: `L603-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L603-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L603-L1195) · [Before (L319-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L319-L330)

```diff
-       bt = {
-         type: "Arena",
-         title: "Capture the Flag",
-         description: "Capture the flag to win! It's that simple!",
-         smallPicture: "bloxd_capture_the_flag_thumbnail_small",
-         largePicture: "bloxd_capture_the_flag_thumbnail_large",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: []
+       Gz = [{
+         name: "write_file",
+         title: "Write a file",
+         description: "Replaces a file with new code, or makes a new file",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+               type: "string",
+               description: "The file's path, e.g. index.js"
+             },
+             why: iz,
+             content: {
+               type: "string",
+               description: "The whole new file"
+             }
+ ... (577 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L332-L341` → after: `L1197-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1197-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1197-L1287) · [Before (L332-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L332-L341)

```diff
-       wt = {
-         type: "Survival",
-         title: "Survival Royale",
-         description: "Fortnite but way better ofc ;)",
-         smallPicture: "survivalRoyale",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+       Az = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
+ 
+     function Lz(vv) {
+       const zv = [];
+       for (const Sv of vv.matchAll(Az)) {
+         const ev = Uz(Sv[1]),
+           gv = Sv.index + Sv[0].length,
+           pv = qz(vv, gv),
+           dv = null === pv ? null : tz(vv.slice(gv, pv));
+         if (null !== ev && null !== pv && null !== dv) {
+           var Pv, hv;
+           const gv = null !== (Pv = null === (hv = vv.slice(pv).match(/^\s*<\|call\|>/)) || void 0 === hv ? void 0 : hv[0]) && void 0 !== Pv ? Pv : "";
+           zv.push({
+             call: {
+               name: ev,
+               args: dv,
+ ... (75 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L344-L358` → after: `L1292-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1292-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1292-L1297) · [Before (L344-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L344-L358)

```diff
-         type: "Parkour",
-         title: "Parkour Builder",
-         description: "Race through a parkour map with a twist - each round, you get to add a new block to the course!",
-         smallPicture: "uchThumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         visibleBetweenDates: {
-           startDate: new Date("2025-10-24T14:00:00Z"),
-           endDate: new Date("2025-10-25T14:00:00Z")
-         },
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         formatCall: (vv, zv) => `<tool_call name="${vv}">\n${Object.entries(zv).flatMap((vv=>{let[zv,Pv]=vv;return void 0===Pv?[]:[`<param name="${zv}">${Ez.has(zv)?Pv:`\n${Pv}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: vv => vv,
+         callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
+         fileResult: (vv, zv, Pv) => `<tool_result name="view_file" path="${vv}"${Pv?' open_in_editor="true"':""}>\n${zv}\n</tool_result>`,
+         editFailure: (vv, zv) => `<tool_result name="${vv}" is_error="true">\n${zv}\n</tool_result>`,
+         lookupResult: (vv, zv, Pv) => `<tool_result name="${vv}" about="${zv.replace(/"/g,"'")}">\n${Pv}\n</tool_result>`
```

#### 11. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L361-L369` → after: `L1301-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1301-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1301-L1303) · [Before (L361-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L361-L369)

```diff
-         type: "Arena",
-         title: "The Pit",
-         description: "Jump in the pit, beat everyone else!",
-         smallPicture: "thePitThumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         simple: oz,
+         qwenXml: Bz,
+         deepseek: Zz
```

#### 12. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L372-L382` → after: `L1306-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1306-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1306-L1330) · [Before (L372-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L372-L382)

```diff
-         type: "Racing",
-         title: "Rush Racing",
-         description: "Compete against other players in a fast-paced racing game!",
-         smallPicture: "racing_thumbnail_compressed",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         simple: bz,
+         qwenXml: Jz,
+         deepseek: function(vv) {
+           const zv = [];
+           for (const pv of vv.matchAll(Qz)) {
+             var Pv, hv, Sv, ev, gv;
+             const dv = Uz(pv[1]),
+               Nv = pv.index + pv[0].length,
+               lv = qz(vv, Nv);
+             if (null === dv || null === lv || (null !== (Pv = null === (hv = zv.at(-1)) || void 0 === hv ? void 0 : hv.index) && void 0 !== Pv ? Pv : -1) + (null !== (Sv = null === (ev = zv.at(-1)) || void 0 === ev ? void 0 : ev.call.source.length) && void 0 !== Sv ? Sv : 0) > pv … [truncated]
+             const Tv = tz(vv.slice(Nv, lv));
+             if (null === Tv) continue;
+             const Wv = /^\s*\)/.exec(vv.slice(lv)),
+               wv = vv.slice(pv.index, lv + (null !== (gv = null === Wv || void 0 === Wv ? void 0 : Wv[0].length) && void 0 !== gv ? gv : 0));
+             zv.push({
+               call: {
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L384-L414` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1332) · [Before (L384-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L384-L414)

```diff
-       Bt = {
-         title: "Prison",
-         type: "Roleplay",
-         description: "Survive in maximum security prison!",
-         smallPicture: "prison_thumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:bd6d1461bd147389f02d97",
-           measurementId: "G-3NHZG8TJSS"
- ... (15 more removed lines; see GitHub link above)
+       Xz = ["simple", "qwenXml"];
```

#### 14. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L417` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1335) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L417)

```diff
-       return zz.map((zz => `<p>${(0,It.f)(zz)}</p>`)).join("")
+       return "deepseek" === vv ? "simple" : vv
```

#### 15. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L421` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1369) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L421)

```diff
-       return `<ul>${zz.map((zz=>`<li>${zz}</li>`)).join("")}</ul>`
+       return jz(vv.name).inputSchema.required.every((zv => void 0 !== vv.args[zv]))
```

#### 16. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L424-L425` → after: `L1372-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1372-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1372-L1378) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L424-L425)

```diff
-     function Tt(zz) {
-       return Gt(zz.map(It.f))
+     function dP(vv, zv) {
+       const Pv = Uz(vv),
+         hv = tz(zv);
+       return null === Pv || null === hv ? null : {
+         name: Pv,
+         args: hv
+       }
```

#### 17. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L428-L447` → after: `L1381-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1381-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1381-L1393) · [Before (L428-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L428-L447)

```diff
-     function ct(zz, tz) {
-       return Gt(zz.similarGames.map((zz => {
-         var sz, Wz;
-         const Xz = null !== (sz = null === (Wz = Ct.b[zz]) || void 0 === Wz ? void 0 : Wz.name) && void 0 !== sz ? sz : tz(Fz.e[zz].title);
-         return `<a href="${(0,It.f)((0,It.w)(zz))}">${(0,It.f)(Xz)}</a>`
-       })))
-     }
-     async function jt(zz, tz) {
-       const sz = (0, It.y)(zz);
-       if (!sz) return null;
-       const Fz = await (0, Ct.i)(sz),
-         Wz = (0, Ct.e)(Fz),
-         Xz = Fz.faq.map((zz => {
-           let {
-             question: tz,
-             answer: sz
- ... (4 more removed lines; see GitHub link above)
+     function NP(vv, zv) {
+       const Pv = [];
+       for (const hv of function(vv) {
+           const zv = uz(vv),
+             Pv = Xz.filter((vv => vv !== zv));
+           return [kz[zv], ...vv === zv ? [] : [kz[vv]], ...Pv.map((vv => kz[vv])), Lz, Mz]
+         }(zv)) Pv.push(...hv(Iz(vv, Pv)));
+       return Pv.map((vv => {
+         let {
+           call: zv
+         } = vv;
+         return zv
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L473-L474` → after: `L1396-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1396-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1396-L1397) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L473-L474)

```diff
-     function Uz(zz) {
-       return zz || "index"
+     function lP(vv, zv) {
+       return NP(vv, zv).sort(((vv, zv) => gP[vv.name] - gP[zv.name]))
```

#### 19. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L478` → after: `L1401-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1401-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1401-L1423) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L478)

```diff
-       return `/docs/${Uz(zz)}.md`
+       return function(vv) {
+         const zv = [...vv.matchAll(SP)],
+           Pv = [];
+         let hv = 0;
+         for (; hv < zv.length;) {
+           const Sv = zv[hv],
+             ev = zv.at(hv + 1);
+           void 0 !== ev && "```" === ev[0] ? (eP.test(vv.slice(Sv.index + Sv[0].length, ev.index)) && Pv.push({
+             from: Sv.index,
+             to: ev.index + ev[0].length
+           }), hv += 2) : (Pv.push({
+             from: Sv.index,
+             to: Sv.index + Sv[0].length
+           }), hv++)
+         }
+         let Sv = vv;
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L481-L482` → after: `L1426-L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1426-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1426-L1427) · [Before (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L481-L482)

```diff
-     function uz(zz, tz) {
-       return `/docs/${Uz(zz)}/${tz+1}.md`
+     function WP(vv) {
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(vv)
```

#### 21. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L484` → after: `L1429-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1429-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1429-L1443) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L484)

```diff
-     const Nz = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+     const wP = new Set(["tick", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
+       aP = {
+         playerCommand: {
+           stopsWhen: vv => `${vv} !== undefined && ${vv} !== false`,
+           passedOn: !1
+         },
+         onPlayerChat: {
+           stopsWhen: vv => `${vv} === false || ${vv} === null`,
+           passedOn: !0
+         },
+         onPlayerDamagingOtherPlayer: {
+           stopsWhen: vv => `${vv} === "preventDamage"`,
+           passedOn: !0
+         }
+       };
```

#### 22. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L487-L490` → after: `L1446-L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1446-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1446-L1453) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L487-L490)

```diff
-       const tz = Nz.exec(zz);
-       return null === tz ? null : {
-         name: tz[1],
-         part: void 0 === tz[2] ? null : Number(tz[2])
+       var zv;
+       const Pv = Yv().createSourceFile("worldCode.js", vv, Yv().ScriptTarget.Latest, !0, Yv().ScriptKind.JS),
+         {
+           parseDiagnostics: hv
+         } = Pv;
+       return {
+         file: Pv,
+         hasErrors: (null !== (zv = null === hv || void 0 === hv ? void 0 : hv.length) && void 0 !== zv ? zv : 0) > 0
```

#### 23. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L496-L499` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1458) · [Before (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L496-L499)

```diff
-       const tz = wz.exec(zz);
-       if (null === tz) return null;
-       const [, sz = "", Fz] = tz;
-       return void 0 === Fz ? Kz(sz) : uz(sz, Number(Fz) - 1)
+       return void 0 !== vv && (Yv().isFunctionExpression(vv) || Yv().isArrowFunction(vv))
```

#### 24. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L503` → after: `L1462-L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L1462-L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/89.js#L1462-L11108) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/89.js#L503)

```diff
-       return `/docsHtml/${Uz(zz)}.html`
+       if (Yv().isFunctionDeclaration(vv) && vv.name) return {
+         Ew: vv,
+         nameNode: vv.name
+       };
+       if (Yv().isVariableStatement(vv) && 1 === vv.declarationList.declarations.length) {
+         const zv = vv.declarationList.declarations[0],
+           Pv = zv.initializer && cP(zv.initializer);
+         if (Yv().isIdentifier(zv.name) && CP(Pv)) return {
+           Ew: Pv,
+           nameNode: zv.name
+         }
+       }
+       const zv = GP(vv),
+         Pv = zv && cP(zv.value);
+       return zv && CP(Pv) ? {
+         Ew: Pv,
+ ... (9631 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 90];
+ export const ids = [90];
```

#### 2. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5-L285` → after: `L4-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L4-L131) · [Before (L5-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L5-L285)

```diff
-   38892: () => {
-     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
-   },
-   38907: (zz, tz, sz) => {
-     var Fz = [],
-       Wz = [],
-       Xz = [],
-       Oz = [],
-       oz = [],
-       vz = [],
-       Uz = [],
-       Kz = [],
-       uz = [],
-       Nz = [],
-       bz = [],
-       wz = [],
- ... (265 more removed lines; see GitHub link above)
+   40562: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       DOCS_AGENT_PART_CHARS: () => Iz.b,
+       DOCS_LLMS_FULL_TXT_PATH: () => Iz.c,
+       DOCS_LLMS_TXT_PATH: () => Iz.d,
+       DOCS_LLMS_TXT_URL: () => Iz.h,
+       ROOT_LLMS_TXT_PATH: () => Iz.j,
+       allGamemodeSettings: () => hv.e,
+       arcadeModeStaticConfig: () => sv.e,
+       arenaStaticConfig: () => Sz,
+       backroomsStaticConfig: () => hz.b,
+       battleBoxStaticConfig: () => dz,
+       bedwarsStaticConfig: () => Vv.d,
+       bloxdAggregatorConfig: () => pv.b,
+       bloxdPreprodAggregatorConfig: () => dv.b,
+       bloxdStagingAggregatorConfig: () => Nv.e,
+ ... (112 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L288-L289` → after: `L134-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L134-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L134-L410) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L288-L289)

```diff
-       return "webm" === zz ? Kz : uz
-     }
+       var zv, Pv;
+       return null !== (zv = null === (Pv = (0, hv.n)(vv)) || void 0 === Pv ? void 0 : Pv.defaultListedVariation) && void 0 !== zv ? zv : vv
+     }
+     var ev = Pv(997),
+       gv = Pv(1024),
+       pv = Pv(757),
+       dv = Pv(746),
+       Nv = Pv(748),
+       lv = Pv(738),
+       Tv = Pv(729),
+       Wv = Pv(768),
+       wv = Pv(786),
+       av = Pv(771),
+       sv = Pv(773),
+       Cv = Pv(782),
+       iv = Pv(784),
+ ... (261 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L291-L294` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L412-L413) · [Before (L291-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L291-L294)

```diff
-     function bz(zz) {
-       for (const tz of zz)
-         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(tz)) return tz;
-       return null
+     function Dz(vv, zv, Pv) {
+       return `<${vv}><h2>${(0,nz.h)(zv)}</h2>${Pv}</${vv}>`
```

#### 5. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L298-L312` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L417) · [Before (L298-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L298-L312)

```diff
-       return null !== bz(Nz(zz))
-     }
-     var Dz = sz(1087);
-     const gz = [{
-       id: "webm",
-       label: "WebM",
-       description: "Usually less screen tearing, but may not play in all media players."
-     }, {
-       id: "mp4",
-       label: "MP4",
-       description: "Works in more players, but may show graphical glitches on some devices."
-     }];
- 
-     function Hz() {
-       return wz("webm") ? "webm" : wz("mp4") ? "mp4" : "webm"
+       return vv.map((vv => `<p>${(0,nz.h)(vv)}</p>`)).join("")
```

#### 6. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L316-L346` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L421) · [Before (L316-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L316-L346)

```diff
-       let {
-         cards: tz
-       } = zz;
-       return (0, Dz.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: tz.map((zz => (0, Dz.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, Dz.jsx)("div", {
-             className: oz()("ReplayVideoExportOptionCard", {
-               Selected: zz.selected,
-               Disabled: zz.disabled
-             }),
-             onClick: () => {
-               zz.disabled || zz.onSelect()
-             },
-             children: (0, Dz.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+       return `<ul>${vv.map((vv=>`<li>${vv}</li>`)).join("")}</ul>`
```

#### 7. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L469-L491` → after: `L424-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L424-L425) · [Before (L469-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L469-L491)

```diff
-     function Jz() {
-       return function() {
-         const zz = (0, xz.b)();
-         for (const {
-             group: tz,
-             dataAttr: sz
-           }
-           of Yz.h)
-           if (sz && zz[tz]) return !0;
-         return !1
-       }() ? function() {
-         var zz;
-         return "function" === typeof(null === (zz = navigator.mediaDevices) || void 0 === zz ? void 0 : zz.getDisplayMedia)
-       }() ? {
-         canIncludeUi: !0,
-         includeUiDisabledReason: null
- ... (7 more removed lines; see GitHub link above)
+     function Uz(vv) {
+       return Vz(vv.map(nz.h))
```

#### 8. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L508-L509` → after: `L428-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L428-L433) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L508-L509)

```diff
-     function Zz(zz) {
-       zz.holdInput(!1), (0, Cz.f)(!1)
+     function Rz(vv, zv) {
+       return Vz(vv.similarGames.map((vv => {
+         var Pv, Sv;
+         const ev = null !== (Pv = null === (Sv = Oz.b[vv]) || void 0 === Sv ? void 0 : Sv.name) && void 0 !== Pv ? Pv : zv(hv.e[vv].title);
+         return `<a href="${(0,nz.h)((0,nz.G)(vv))}">${(0,nz.h)(ev)}</a>`
+       })))
```

#### 9. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L511-L524` → after: `L435-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L435-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L435-L440) · [Before (L511-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L511-L524)

```diff
-     async function Gz(zz) {
-       var tz, sz;
-       if ((0, Cz.e)() || ez) return;
-       const Xz = zz();
-       if (!Xz) return;
-       ez = !0;
-       let Oz = null;
-       const oz = Xz.playbackMarkInTick,
-         {
-           canIncludeUi: vz,
-           includeUiDisabledReason: Uz
-         } = Jz();
-       try {
-         Oz = await async function(zz) {
+     async function xz(vv, zv) {
+       const Pv = (0, nz.M)(vv);
+       if (!Pv) return null;
+       const hv = await (0, Oz.e)(Pv),
+         Sv = (0, Oz.d)(hv),
+         ev = hv.faq.map((vv => {
```

#### 10. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L526-L528` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L442-L443) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L526-L528)

```diff
-             hasPlaybackMark: tz,
-             canIncludeUi: sz,
-             includeUiDisabledReason: Fz
+             question: zv,
+             answer: Pv
```

#### 11. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L530-L679` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L445-L447) · [Before (L530-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L530-L679)

```diff
-           const Xz = {
-               options: null
-             },
-             Oz = Wz.NotificationProvider.showCustomPopup({
-               body: zz => (0, Dz.jsx)(Pz, {
-                 hasPlaybackMark: tz,
-                 canIncludeUi: sz,
-                 includeUiDisabledReason: Fz,
-                 selectionRef: Xz,
-                 closePopup: zz
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0,
-               unlockPointerKey: "replayVideoExportOptions"
-             });
-           return "notificationTornDown" === await Oz.getResult() ? null : Xz.options
- ... (134 more removed lines; see GitHub link above)
+           return `<h3>${(0,nz.h)(zv)}</h3><p>${(0,nz.h)(Pv)}</p>`
+         })).join("");
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,nz.h)(hv.name)}</h1><p>${(0,nz.h)(hv.description)}</p></header>`,Dz("section",Sv.whatIs,Kz(hv.whatIs)),Dz("section",Sv.howToPlay,Kz(hv.howToPlay)) … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L682` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L453) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L682)

```diff
-   4479: (zz, tz, sz) => {
+   4570: (vv, zv, Pv) => {
```

#### 13. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L685-L754` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L457) · [Before (L685-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L685-L754)

```diff
-       e: () => uz
-     });
-     var Fz = sz(4488),
-       Wz = sz(30);
-     const Xz = .25,
-       Oz = .85,
-       oz = .02,
-       vz = .01;
- 
-     function Uz(zz, tz, sz, Fz, Wz, Xz, oz) {
-       const {
-         waveform: vz,
-         pitchHz: Uz,
-         attackMs: Kz,
-         releaseMs: uz,
-         lowpassHz: Nz
- ... (54 more removed lines; see GitHub link above)
+       c: () => dv,
```

#### 14. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L756-L918` → after: `L459-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L459-L464) · [Before (L756-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L756-L918)

```diff
-       f: () => wz,
-       i: () => Uz,
-       k: () => uz,
-       l: () => vz,
-       p: () => Oz,
-       r: () => Kz,
-       t: () => Dz
-     });
-     var Fz = sz(1884),
-       Wz = sz(34),
-       Xz = sz(1896);
-     const Oz = (0, Xz.g)((function() {
-         var zz, tz, sz, Wz;
-         return {
-           health: null !== (zz = Fz.e.get("_health")) && void 0 !== zz ? zz : null,
-           maxHealth: null !== (tz = Fz.e.get("_totalMaxHealth")) && void 0 !== tz ? tz : null,
- ... (147 more removed lines; see GitHub link above)
+       h: () => gv,
+       j: () => pv,
+       n: () => Cv,
+       q: () => lv,
+       t: () => Tv,
+       w: () => sv
```

#### 15. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L920-L2023` → after: `L466-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L466-L471) · [Before (L920-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L920-L2023)

```diff
-     sz(36e3);
-     var Wz = sz(38073),
-       Xz = sz(8970),
-       Oz = sz(36189),
-       oz = sz(321);
- 
-     function vz(zz, tz) {
-       return {
-         item: zz,
-         scale: tz,
-         billboard: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         thrownRole: !0
-       }
-     }
-     var Uz = sz(38143),
-       Kz = sz(8940),
- ... (1088 more removed lines; see GitHub link above)
+     var hv = Pv(1567);
+     const Sv = 24e3,
+       ev = "/docs/llms.txt",
+       gv = `${hv.d}${ev}`,
+       pv = "/llms.txt",
+       dv = "/docs/llms-full.txt";
```

#### 16. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2026-L2032` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L474) · [Before (L2026-L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L2026-L2032)

```diff
-       if (Number.isNaN(zz)) return "NaN";
-       if (!Number.isFinite(zz)) return zz > 0 ? "inf" : "-inf";
-       if (0 === zz) return Object.is(zz, -0) ? "-0.0" : "0.0";
-       const tz = Math.abs(zz);
-       if (tz >= 1e16 || tz < 1e-4) return zz.toExponential().replace("e+", "e");
-       const sz = String(zz);
-       return sz.includes(".") ? sz : sz + ".0"
+       return vv || "index"
```

#### 17. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2036-L2038` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L478) · [Before (L2036-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L2036-L2038)

```diff
-       const tz = ["dir", "base", "max", "left"][zz[0]],
-         sz = [zz[2], zz[3], zz[4]].map(Is).join(", ");
-       return "voxel sweep rejected a move it would never finish: " + tz + "[" + zz[1] + "] of [" + sz + "]"
+       return `/docs/${Nv(vv)}.md`
```

#### 18. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2042` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L482) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L2042)

```diff
-       return zz ? tz : 0
+       return `/docs/${Nv(vv)}/${zv+1}.md`
```

#### 19. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2046-L2065` → after: `L487-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L487-L490) · [Before (L2046-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L2046-L2065)

```diff
-       const tz = es(zz.rG, 1) | es(zz.vG, 2) | es(zz.preventFallOffEdge, 4) | es(zz.alwaysApplyHorizFriction, 8) | es(zz.slideOnCollision, 16) | es(zz.rolledBackLastTick, 32) | es(zz.depenetrate, 64) | es(zz.inFluid, Xs) | es(zz.cN, Os) | es(zz.yN, 512) | es(zz.wakeInFluid, vs),
-         sz = zz.YG;
-       return null === sz ? tz : "number" === typeof sz ? tz | os : null
-     }
- 
-     function Gs(zz, tz, sz, Fz, Wz) {
-       const Xz = us(sz),
-         Oz = Ns(sz),
-         oz = zz[Xz + zs];
-       Fz.ratioInFluid = zz[Xz + 8], Fz._sleepFrameCount = zz[Xz + 9];
-       const vz = Fz.resting;
-       vz[0] = zz[Xz + Et], vz[1] = zz[Xz + Et + 1], vz[2] = zz[Xz + Et + 2], Ts(Fz, "inFluid", oz & Xs), Ts(Fz, "rolledBackLastTick", 32 & oz);
-       const Uz = Fz.gN;
-       if (Uz) {
-         const {
-           base: zz,
- ... (4 more removed lines; see GitHub link above)
+       const zv = Wv.exec(vv);
+       return null === zv ? null : {
+         name: zv[1],
+         part: void 0 === zv[2] ? null : Number(zv[2])
```

#### 20. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2081-L2083` → after: `L496-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L496-L499) · [Before (L2081-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L2081-L2083)

```diff
-       var tz;
-       const sz = As(zz);
-       return 65536 * (null !== (tz = zz.iG) && void 0 !== tz ? tz : 0) + sz
+       const zv = av.exec(vv);
+       if (null === zv) return null;
+       const [, Pv = "", hv] = zv;
+       return void 0 === hv ? lv(Pv) : Tv(Pv, Number(hv) - 1)
```

#### 21. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2087-L35222` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/90.js#L503) · [Before (L2087-L35222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/90.js#L2087-L35222)

```diff
-       return Math.max(zz.jb.length, zz.Tb.length)
-     }
- 
-     function ys(zz, tz) {
-       const sz = new Uint8Array(zz + 1),
-         Fz = new Uint32Array(zz + 2),
-         Wz = [];
-       for (let Xz = 0; Xz <= zz; Xz++) {
-         const zz = tz(Xz);
-         if (sz[Xz] = Ms(zz), Array.isArray(zz)) {
-           if (zz.length % 6 !== 0) return null;
-           for (const tz of zz) {
-             if ("number" !== typeof tz) return null;
-             Wz.push(tz)
-           }
-         }
- ... (33120 more removed lines; see GitHub link above)
+       return `/docsHtml/${Nv(vv)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L2)

```diff
- export const ids = [91];
+ export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 91];
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4-L10` → after: `L5-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L5-L354) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L4-L10)

```diff
-   4488: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       Howl: () => Wz.Howl,
-       Howler: () => Wz.Howler,
-       iosAudio: () => vz,
-       musicOutput: () => gz,
-       readyAudioContext: () => Hz
+   38749: (vv, zv, Pv) => {
+     var hv = {
+       "./bedwars/bedwarsClient": 38755,
+       "./bridgeBattle/bridgeBattleClient": 38764,
+       "./buildAFactory2/buildAFactory2Client": 38015,
+       "./classic/classicClient": 38768,
+       "./clutch/clutchClient": 38770,
+       "./containmentBreach/containmentBreachClient": 38776,
+       "./cooking/cookingClient": 38877,
+       "./defusal/defusalClient": 38884,
+       "./frontline/frontlineClient": 38891,
+       "./goalRush/goalRushClient": 38900,
+       "./luckyBedwars/luckyBedwarsClient": 38905,
+       "./ninetyNineNights/ninetyNineNightsClient": 38912,
+       "./oneBlock/oneBlockClient": 38914,
+       "./plots/plotsClient": 38919,
+ ... (334 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L12-L15` → after: `L356-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L356-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L356-L473) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L12-L15)

```diff
-     var Fz, Wz = sz(4491),
-       Xz = sz(106);
-     const Oz = Wz.Howler;
-     let oz;
+     const hv = 6e3;
+ 
+     function Sv(vv, zv) {
+       return [Math.floor(vv[0] / zv) * zv, Math.floor(vv[1] / zv) * zv, Math.floor(vv[2] / zv) * zv]
+     }
+ 
+     function ev(vv) {
+       const zv = (null !== vv && void 0 !== vv ? vv : "").match(/-?\d+(?:\.\d+)?/g);
+       return zv && zv.length >= 3 ? [Number(zv[0]), Number(zv[1]), Number(zv[2])] : null
+     }
+ 
+     function gv(vv, zv) {
+       return vv === zv ? String(vv) : `${vv}-${zv}`
+     }
+ 
+     function pv(vv, zv, Pv, hv) {
+ ... (102 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L18` → after: `L476-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L476-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L476-L510) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L18)

```diff
-       return oz ??= "ios" === (0, Xz.getOperatingSystem)(), oz
+       return av("webm") ? "webm" : av("mp4") ? "mp4" : "webm"
+     }
+ 
+     function cv(vv) {
+       let {
+         cards: zv
+       } = vv;
+       return (0, sv.jsx)("div", {
+         className: "ReplayVideoExportOptionCards",
+         children: zv.map((vv => (0, sv.jsxs)("div", {
+           className: "ReplayVideoExportOptionColumn",
+           children: [(0, sv.jsx)("div", {
+             className: pv()("ReplayVideoExportOptionCard", {
+               Selected: vv.selected,
+               Disabled: vv.disabled
+             }),
+ ... (19 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L23-L26` → after: `L677-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L677-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L677-L686) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L23-L26)

```diff
-       if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
-       const sz = navigator.audioSession;
-       let Fz;
-       "auto" === (null === sz || void 0 === sz ? void 0 : sz.type) && (sz.type = "ambient");
+       if ((0, Ov.c)() || Dv) return;
+       const ev = vv();
+       if (!ev) return;
+       Dv = !0;
+       let gv = null;
+       const pv = ev.playbackMarkInTick,
+         {
+           canIncludeUi: dv,
+           includeUiDisabledReason: Nv
+         } = Yv();
```

#### 6. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L28-L29` → after: `L688-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L688-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L688-L713) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L28-L29)

```diff
-         Fz = new AudioContext({
-           sampleRate: 44100
+         gv = await async function(vv) {
+           let {
+             hasPlaybackMark: zv,
+             canIncludeUi: Pv,
+             includeUiDisabledReason: hv
+           } = vv;
+           const ev = {
+               options: null
+             },
+             gv = Sv.NotificationProvider.showCustomPopup({
+               body: vv => (0, sv.jsx)(Gv, {
+                 hasPlaybackMark: zv,
+                 canIncludeUi: Pv,
+                 includeUiDisabledReason: hv,
+                 selectionRef: ev,
+                 closePopup: vv
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L31-L32` → after: `L715-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L715-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L715-L842) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L31-L32)

```diff
-       } catch {
-         return
+       } finally {
+         Dv = !1
+       }
+       if (!gv) return;
+       const lv = null !== (zv = null === (Pv = ev.startFailure) || void 0 === Pv ? void 0 : Pv.call(ev)) && void 0 !== zv ? zv : null;
+       if (null !== lv) return void Sv.NotificationProvider.showAlertPopup({
+         title: "Video export failed",
+         subtitle: lv
+       });
+       if (! function(vv) {
+           return !(0, Ov.c)() && ((0, Ov.e)(!0), vv.holdInput(!0), !0)
+         }(ev)) return;
+       let Tv = null;
+       try {
+         Tv = await nv(gv.includeUi, (() => ev.canvas()), ev.ZD)
+       } catch (Uv) {
+ ... (112 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L37-L50` → after: `L845-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L845-L856) · [Before (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L37-L50)

```diff
-     Oz._mobileUnloaded = !0;
-     const Kz = Oz.volume.bind(Wz.Howler);
-     Oz.volume = function() {
-       return Uz(), Kz(...arguments)
-     };
-     const uz = Oz.mute.bind(Wz.Howler);
-     Oz.mute = zz => (Uz(), uz(zz));
-     const Nz = Wz.Howl.prototype,
-       bz = Nz.init;
-     Nz.init = function(zz) {
-       return Uz(), bz.call(this, zz)
-     };
-     let wz = 0;
-     const Dz = null === (Fz = Oz._autoSuspend) || void 0 === Fz ? void 0 : Fz.bind(Wz.Howler);
+   },
+   4595: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => lv,
+       e: () => Tv
+     });
+     var hv = Pv(4603),
+       Sv = Pv(22);
+     const ev = .25,
+       gv = .85,
+       pv = .02,
+       dv = .01;
```

#### 9. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L52-L53` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L858) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L52-L53)

```diff
-     function gz() {
-       Hz();
+     function Nv(vv, zv, Pv, hv, Sv, ev, pv) {
```

#### 10. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L55-L61` → after: `L860-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L860-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L860-L1212) · [Before (L55-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L55-L61)

```diff
-         ctx: zz,
-         masterGain: tz
-       } = Oz;
-       return zz && tz ? {
-         ctx: zz,
-         destination: tz,
-         holdAwake: zz => {
+         waveform: dv,
+         pitchHz: Nv,
+         attackMs: lv,
+         releaseMs: Tv,
+         lowpassHz: Wv
+       } = Pv, wv = Sv + hv.durationMs / 1e3, av = Nv * 2 ** (hv.semitones / 12), sv = vv.createOscillator();
+       sv.type = dv, sv.frequency.setValueAtTime(av, Sv), sv.frequency.exponentialRampToValueAtTime(av * 2 ** (hv.glideSemitones / 12), wv);
+       const Cv = Sv + Math.min(lv, hv.durationMs) / 1e3,
+         iv = vv.createGain();
+       iv.gain.setValueAtTime(0, Sv), iv.gain.linearRampToValueAtTime(ev, Cv), iv.gain.linearRampToValueAtTime(ev * gv, Math.max(Cv, wv - Tv / 1e3)), iv.gain.linearRampToValueAtTime(0, wv);
+       const cv = [sv];
+       if (null !== Wv) {
+         const zv = vv.createBiquadFilter();
+         zv.type = "lowpass", zv.frequency.value = Wv, cv.push(zv)
+       }
+       cv.push(iv, zv);
+ ... (337 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L63` → after: `L1214-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L1214-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L1214-L1253) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L63)

```diff
-           (wz += zz ? 1 : -1, zz) ? null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz): null === (sz = Oz._autoSuspend) || void 0 === sz || sz.call(Oz)
+           return !hv(vv) || Pv(vv).length > 0 ? null : `${null!==(zv=null===(Sv=vv.material)||void 0===Sv?void 0:Sv.uniqueId)&&void 0!==zv?zv:"none"} ${vv.getVerticesDataKinds().sort().join(",")}`
+         };
+       ! function(vv, zv, Pv) {
+         const hv = new Set,
+           Sv = vv => {
+             for (const Pv of vv) hv.add(Pv.name.toLowerCase()), Sv(zv(Pv))
+           };
+         Sv(vv);
+         const ev = new Set,
+           gv = new Map,
+           pv = [],
+           dv = vv => {
+             var zv;
+             const Pv = vv.toLowerCase();
+             let Sv, ev = null !== (zv = gv.get(Pv)) && void 0 !== zv ? zv : 1;
+             do {
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L65` → after: `L1255-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L1255-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L1255-L1262) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L65)

```diff
-         wake: () => {
+         pv = Pv(vv).map(gv);
+       return null === zv || 1 !== ev.size ? Sz(pv) : ez(pv, zv)
+     }
+     const dz = new WeakMap;
+ 
+     function Nz(vv, zv, Pv) {
+       const hv = Ev.i.itemsClient[zv],
+         Sv = function(vv) {
```

#### 13. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L67` → after: `L1264-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L1264-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L1264-L1358) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L67)

```diff
-           "running" !== zz.state && (null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz), zz.resume().catch((() => {})))
+           const Pv = (0, rv.s)(vv);
+           if (null !== Pv) return Xv.i.enabled && Xv.i.hasAnimation(Pv) ? {
+             vehicleType: Pv,
+             moved: Xv.i.bonesMoved(Pv)
+           } : null;
+           const hv = null === (zv = lv.g[vv]) || void 0 === zv ? void 0 : zv.meshEntityBones;
+           return null !== hv && void 0 !== hv && hv.length ? {
+             vehicleType: null,
+             moved: new Set(hv)
+           } : null
+         }(zv);
+       if (null === Sv || void 0 === hv) return null;
+       const ev = vv.Ma.hK;
+       let gv = dz.get(ev);
+       gv || (gv = new Map, dz.set(ev, gv));
+       let pv = gv.get(zv);
+ ... (79 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L69` → after: `L1360-L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L1360-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L1360-L2045) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L69)

```diff
-       } : null
+       }
+     }
+ 
+     function lz(vv) {
+       return vv.flatMap((vv => {
+         var zv;
+         return "string" === typeof vv ? [vv] : [vv.nodeName, ...lz(null !== (zv = vv.children) && void 0 !== zv ? zv : [])]
+       }))
+     }
+ 
+     function Tz(vv, zv, Pv) {
+       zv.name = `${Pv}SkeletalVehicleMat`;
+       const hv = (0, Ov.bb)(zv);
+       (0, Ov.M)(hv), (0, hz.b)(zv, (() => {
+         (0, Pz.d)(hv, vv), (0, yv.e)(hv, !0)
+       })), (0, hz.f)(zv)
+ ... (670 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L74` → after: `L2110-L35374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2110-L35374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/91.js#L2110-L35374) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/91.js#L74)

```diff
-       (Oz.volume(), Oz.ctx && Oz.autoUnlock) && (null === (zz = Oz._unlockAudio) || void 0 === zz || zz.call(Oz))
+       let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bz;
+       const gv = performance.now(),
+         pv = ev.get(vv);
+       if (void 0 !== pv && gv - pv < 6e4) return;
+       ev.set(vv, gv);
+       const dv = zv();
+       hv && console.error(dv), null === (Sv = Pv.yw) || void 0 === Sv || Sv.call(Pv, dv)
+     }
+ 
+     function kz(vv) {
+       return "failed" !== vv.getBloxdWasmStatus()
+     }
+ 
+     function Xz(vv, zv) {
+       if (kz(vv)) try {
+         zv.free()
+ ... (33249 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [91, 92];
+ export const ids = [92];
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L76` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/92.js#L4) · [Before (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/92.js#L4-L76)

```diff
-   35947: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       countDecodesAs: () => Kz,
-       decodedAudio: () => uz
-     });
-     var Fz = sz(4488);
-     const Wz = Fz.Howler,
-       Xz = new Map;
-     let Oz = 0;
-     const oz = {
-         song: 0,
-         sheet: 0
-       },
-       vz = new WeakMap,
-       Uz = new WeakSet;
- 
- ... (57 more removed lines; see GitHub link above)
+   4603: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L84-L85` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/92.js#L11-L12) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/92.js#L84-L85)

```diff
-     var Fz, Wz = sz(4491),
-       Xz = sz(106);
+     var hv, Sv = Pv(4611),
+       ev = Pv(4411);
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L95` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/92.js#L17) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/92.js#L95)

```diff
-       if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
+       if (gv.ctx || !gv.usingWebAudio || "undefined" === typeof AudioContext || !(0, ev.f)()) return;
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L107` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/92.js#L29) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/92.js#L107)

```diff
-       Wz.gain.setValueAtTime(Oz._muted ? 0 : null !== (zz = Oz._volume) && void 0 !== zz ? zz : 1, Fz.currentTime), Wz.connect(Fz.destination), Oz.ctx = Fz, Oz.masterGain = Wz, null === (tz = Oz._setup) || void 0 === tz || tz.call(Oz)
+       Sv.gain.setValueAtTime(gv._muted ? 0 : null !== (vv = gv._volume) && void 0 !== vv ? vv : 1, hv.currentTime), Sv.connect(hv.destination), gv.ctx = hv, gv.masterGain = Sv, null === (zv = gv._setup) || void 0 === zv || zv.call(gv)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L2)

```diff
- export const ids = [91, 93];
+ export const ids = [92, 93];
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L6` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L4-L22) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L4-L6)

```diff
-   36103: (zz, tz, sz) => {
-     function Fz(zz, tz, sz, Fz) {
-       return !(sz && !zz.aimable) && (!tz || zz.gun && "head" !== Fz)
+   35980: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       countDecodesAs: () => Tv,
+       decodedAudio: () => Wv
+     });
+     var hv = Pv(35983),
+       Sv = Pv(4603);
+     const ev = Sv.Howler,
+       gv = new Map;
+     let pv = 0;
+     const dv = {
+         song: 0,
+         sheet: 0
+       },
+       Nv = new WeakMap,
+       lv = new WeakSet;
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L9-L10` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L25-L30) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L9-L10)

```diff
-     function Wz(zz) {
-       return Math.max(.1 * zz, 1)
+     function Wv() {
+       return {
+         bytes: pv,
+         songsDecoded: dv.song,
+         sheetsDecoded: dv.sheet
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L13-L14` → after: `L33-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L33-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L33-L74) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L13-L14)

```diff
-     function Xz(zz, tz) {
-       return !zz && tz
+     function wv(vv) {
+       if (lv.has(vv)) return;
+       lv.add(vv);
+       const zv = 1 === vv.decodeAudioData.length,
+         Pv = vv.decodeAudioData.bind(vv);
+       vv.decodeAudioData = (vv, hv, Sv) => {
+         const lv = vv => {
+           const zv = ev._howls.filter((vv => "loaded" !== vv._state));
+           try {
+             null === hv || void 0 === hv || hv(vv)
+           } finally {
+             const Pv = zv.find((vv => "loaded" === vv._state));
+             void 0 !== Pv && "string" === typeof Pv._src && function(vv, zv, Pv) {
+               var hv;
+               pv += Pv - (null !== (hv = gv.get(zv)) && void 0 !== hv ? hv : 0), gv.set(zv, Pv);
+               const Sv = Nv.get(vv);
+ ... (26 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L22` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L77) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L22)

```diff
-   36112: (zz, tz, sz) => {
+   35983: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L24-L25` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L79-L80) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L24-L25)

```diff
-       e: () => oz,
-       i: () => Oz
+       c: () => ev,
+       e: () => Sv
```

#### 7. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L43-L54` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L84-L85) · [Before (L43-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L43-L54)

```diff
-     function Oz(zz, tz) {
-       const sz = {
-           hook: tz
-         },
-         Oz = Wz[zz];
-       if (Oz.push(sz), "crosshairAccuracy" === zz && null !== Fz) {
-         const zz = Fz;
-         Fz = null, Xz.crosshairAccuracy(zz)
-       }
-       return () => {
-         const zz = Oz.indexOf(sz); - 1 !== zz && Oz.splice(zz, 1)
-       }
+     function Sv(vv) {
+       hv = vv
```

#### 8. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L58` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L89) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L58)

```diff
-       return Xz
+       return null === hv ? null : hv()
```

#### 9. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L61` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L92) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L61)

```diff
-   4488: (zz, tz, sz) => {
+   4603: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L69-L70` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L99-L100) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L69-L70)

```diff
-     var Fz, Wz = sz(4491),
-       Xz = sz(106);
+     var hv, Sv = Pv(4611),
+       ev = Pv(4411);
```

#### 11. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L80` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L105) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L80)

```diff
-       if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
+       if (gv.ctx || !gv.usingWebAudio || "undefined" === typeof AudioContext || !(0, ev.f)()) return;
```

#### 12. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L92` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/93.js#L117) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/93.js#L92)

```diff
-       Wz.gain.setValueAtTime(Oz._muted ? 0 : null !== (zz = Oz._volume) && void 0 !== zz ? zz : 1, Fz.currentTime), Wz.connect(Fz.destination), Oz.ctx = Fz, Oz.masterGain = Wz, null === (tz = Oz._setup) || void 0 === tz || tz.call(Oz)
+       Sv.gain.setValueAtTime(gv._muted ? 0 : null !== (vv = gv._volume) && void 0 !== vv ? vv : 1, hv.currentTime), Sv.connect(hv.destination), gv.ctx = hv, gv.masterGain = Sv, null === (zv = gv._setup) || void 0 === zv || zv.call(gv)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L3)

```diff
- export const ids = [94];
+ export const ids = [92, 93, 94];
```

#### 2. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L5-L9` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L4-L40) · [Before (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L5-L9)

```diff
-   4491: (zz, tz, sz) => {
-     var Fz;
-     ! function() {
-       var Wz = function() {
-         this.init()
+   36151: (vv, zv, Pv) => {
+     function hv(vv, zv, Pv, hv) {
+       return !(Pv && !vv.aimable) && (!zv || vv.gun && "head" !== hv)
+     }
+ 
+     function Sv(vv) {
+       return Math.max(.1 * vv, 1)
+     }
+ 
+     function ev(vv, zv) {
+       return !vv && zv
+     }
+     Pv.d(zv, {
+       b: () => ev,
+       d: () => Sv,
+       e: () => hv
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L11-L68` → after: `L42-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L42-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L42-L97) · [Before (L11-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L11-L68)

```diff
-       Wz.prototype = {
-         init: function() {
-           var zz = this || Xz;
-           return zz._counter = 1e3, zz._html5AudioPool = [], zz.html5PoolSize = 10, zz._codecs = {}, zz._howls = [], zz._muted = !1, zz._volume = 1, zz._canPlayEvent = "canplaythrough", zz._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, z … [truncated]
-         },
-         volume: function(zz) {
-           var tz = this || Xz;
-           if (zz = parseFloat(zz), tz.ctx || bz(), "undefined" !== typeof zz && zz >= 0 && zz <= 1) {
-             if (tz._volume = zz, tz._muted) return tz;
-             tz.usingWebAudio && tz.masterGain.gain.setValueAtTime(zz, Xz.ctx.currentTime);
-             for (var sz = 0; sz < tz._howls.length; sz++)
-               if (!tz._howls[sz]._webAudio)
-                 for (var Fz = tz._howls[sz]._getSoundIds(), Wz = 0; Wz < Fz.length; Wz++) {
-                   var Oz = tz._howls[sz]._soundById(Fz[Wz]);
-                   Oz && Oz._node && (Oz._node.volume = Oz._volume * zz)
-                 }
- ... (42 more removed lines; see GitHub link above)
+ 
+     function gv(vv, zv) {
+       const Pv = {
+           hook: zv
+         },
+         gv = Sv[vv];
+       if (gv.push(Pv), "crosshairAccuracy" === vv && null !== hv) {
+         const vv = hv;
+         hv = null, ev.crosshairAccuracy(vv)
+       }
+       return () => {
+         const vv = gv.indexOf(Pv); - 1 !== vv && gv.splice(vv, 1)
+       }
+     }
+ 
+     function pv() {
+ ... (40 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L70-L125` → after: `L99-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L99-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L99-L107) · [Before (L70-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L70-L125)

```diff
-             tz = "undefined" !== typeof Audio ? new Audio : null
-           } catch (Kz) {
-             return zz
-           }
-           if (!tz || "function" !== typeof tz.canPlayType) return zz;
-           var sz = tz.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             Fz = zz._navigator ? zz._navigator.userAgent : "",
-             Wz = Fz.match(/OPR\/([0-6].)/g),
-             Oz = Wz && parseInt(Wz[0].split("/")[1], 10) < 33,
-             oz = -1 !== Fz.indexOf("Safari") && -1 === Fz.indexOf("Chrome"),
-             vz = Fz.match(/Version\/(.*?) /),
-             Uz = oz && vz && parseInt(vz[1], 10) < 15;
-           return zz._codecs = {
-             mp3: !(Oz || !sz && !tz.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!sz,
-             opus: !!tz.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (40 more removed lines; see GitHub link above)
+             null === hv || void 0 === hv || hv(vv)
+           } finally {
+             const Pv = zv.find((vv => "loaded" === vv._state));
+             void 0 !== Pv && "string" === typeof Pv._src && function(vv, zv, Pv) {
+               var hv;
+               pv += Pv - (null !== (hv = gv.get(zv)) && void 0 !== hv ? hv : 0), gv.set(zv, Pv);
+               const Sv = Nv.get(vv);
+               void 0 !== Sv && dv[Sv]++
+             }(Pv, Pv._src, vv.length * vv.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 5. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L127-L168` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L109) · [Before (L127-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L127-L168)

```diff
-         },
-         _obtainHtml5Audio: function() {
-           var zz = this || Xz;
-           if (zz._html5AudioPool.length) return zz._html5AudioPool.pop();
-           var tz = (new Audio).play();
-           return tz && "undefined" !== typeof Promise && (tz instanceof Promise || "function" === typeof tz.then) && tz.catch((function() {
-             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
-           })), new Audio
-         },
-         _releaseHtml5Audio: function(zz) {
-           var tz = this || Xz;
-           return zz._unlocked && tz._html5AudioPool.push(zz), tz
-         },
-         _autoSuspend: function() {
-           var zz = this;
-           if (zz.autoSuspend && zz.ctx && "undefined" !== typeof zz.ctx.suspend && Xz.usingWebAudio) {
- ... (26 more removed lines; see GitHub link above)
+           return vv
```

#### 6. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L170-L266` → after: `L111-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L111-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L111-L182) · [Before (L170-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L170-L266)

```diff
-       Oz.prototype = {
-         init: function(zz) {
-           var tz = this;
-           return Xz.ctx || bz(), tz._autoplay = zz.autoplay || !1, tz._format = "string" !== typeof zz.format ? zz.format : [zz.format], tz._html5 = zz.html5 || !1, tz._muted = zz.mute || !1, tz._loop = zz.loop || !1, tz._pool = zz.pool || 5, tz._preload = "boolean" !== typeof zz … [truncated]
-             method: zz.xhr && zz.xhr.method ? zz.xhr.method : "GET",
-             headers: zz.xhr && zz.xhr.headers ? zz.xhr.headers : null,
-             withCredentials: !(!zz.xhr || !zz.xhr.withCredentials) && zz.xhr.withCredentials
-           }, tz._duration = 0, tz._state = "unloaded", tz._sounds = [], tz._endTimers = {}, tz._queue = [], tz._playLock = !1, tz._onend = zz.onend ? [{
-             Zw: zz.onend
-           }] : [], tz._onfade = zz.onfade ? [{
-             Zw: zz.onfade
-           }] : [], tz._onload = zz.onload ? [{
-             Zw: zz.onload
-           }] : [], tz._onloaderror = zz.onloaderror ? [{
-             Zw: zz.onloaderror
-           }] : [], tz._onplayerror = zz.onplayerror ? [{
- ... (81 more removed lines; see GitHub link above)
+         if (!zv) return Pv(vv, lv, Sv);
+         const Tv = Pv(vv).then(lv);
+         return Tv.catch((vv => {
+           null === Sv || void 0 === Sv || Sv(vv)
+         })), Tv
+       }
+     }(0, hv.e)(Wv);
+     const av = Sv.Howl.prototype,
+       sv = av.init;
+     av.init = function(vv) {
+       return Sv.Howler.volume(), ev.ctx && wv(ev.ctx), sv.call(this, vv)
+     };
+     const Cv = av.unload;
+     av.unload = function() {
+       const vv = this._src,
+         zv = Cv.call(this);
+ ... (56 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L268-L669` → after: `L184-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L184-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L184-L230) · [Before (L268-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L268-L669)

```diff
-           if (!(Uz >= bz)) {
-             var Dz = oz._node;
-             if (sz._webAudio) {
-               var gz = function() {
-                 sz._playLock = !1, wz(), sz._refreshBuffer(oz);
-                 var zz = oz._muted || sz._muted ? 0 : oz._volume;
-                 Dz.gain.setValueAtTime(zz, Xz.ctx.currentTime), oz._playStart = Xz.ctx.currentTime, "undefined" === typeof Dz.bufferSource.start ? oz._loop ? Dz.bufferSource.noteGrainOn(0, Uz, 86400) : Dz.bufferSource.noteGrainOn(0, Uz, Kz) : oz._loop ? Dz.bufferSource.start(0, U … [truncated]
-                   sz._emit("play", oz._id), sz._loadQueue()
-                 }), 0)
-               };
-               "running" === Xz.state && "interrupted" !== Xz.ctx.state ? gz() : (sz._playLock = !0, sz.once("resume", gz), sz._clearTimer(oz._id))
-             } else {
-               var Hz = function() {
-                 Dz.currentTime = Uz, Dz.muted = oz._muted || sz._muted || Xz._muted || Dz.muted, Dz.volume = oz._volume * Xz.volume(), Dz.playbackRate = oz._rate;
-                 try {
-                   var Fz = Dz.play();
- ... (386 more removed lines; see GitHub link above)
+           gv(0)
+         }(Sv.c.get(ev).filter((vv => vv !== Pv)).flatMap((zv => {
+           const Pv = (hv = (0, Sv.f)(zv).src, ev = vv.canPlay, hv.find((vv => {
+             var zv;
+             const Pv = null === (zv = /\.([^.]+)$/.exec(vv.split("?", 1)[0])) || void 0 === zv ? void 0 : zv[1];
+             return void 0 !== Pv && ev(Pv.toLowerCase())
+           })));
+           var hv, ev;
+           return void 0 === Pv ? [] : [Pv]
+         })), vv)
+       }
+     }({
+       afterJoin: vv => {
+         (0, ev.c)(hv.c.get("gameState"), vv)
+       },
+       joining: () => (0, ev.d)(hv.c.get("gameState")),
+ ... (31 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L672-L733` → after: `L233-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L233-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L233-L294) · [Before (L672-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L672-L733)

```diff
-       var vz = {},
-         Uz = function(zz) {
-           var tz = zz._src;
-           if (vz[tz]) return zz._duration = vz[tz].duration, void Nz(zz);
-           if (/^data:[^;]+;base64,/.test(tz)) {
-             for (var sz = atob(tz.split(",")[1]), Fz = new Uint8Array(sz.length), Wz = 0; Wz < sz.length; ++Wz) Fz[Wz] = sz.charCodeAt(Wz);
-             uz(Fz.buffer, zz)
-           } else {
-             var Xz = new XMLHttpRequest;
-             Xz.open(zz._xhr.method, tz, !0), Xz.withCredentials = zz._xhr.withCredentials, Xz.responseType = "arraybuffer", zz._xhr.headers && Object.keys(zz._xhr.headers).forEach((function(tz) {
-               Xz.setRequestHeader(tz, zz._xhr.headers[tz])
-             })), Xz.onload = function() {
-               var tz = (Xz.status + "")[0];
-               "0" === tz || "2" === tz || "3" === tz ? uz(Xz.response, zz) : zz._emit("loaderror", null, "Failed loading audio file with status: " + Xz.status + ".")
-             }, Xz.onerror = function() {
-               zz._webAudio && (zz._html5 = !0, zz._webAudio = !1, zz._sounds = [], delete vz[tz], zz.load())
- ... (46 more removed lines; see GitHub link above)
+       for (const Sv of hv) vv.on(Sv, Pv);
+       Pv()
+     }
+   },
+   4603: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       Howl: () => Sv.Howl,
+       Howler: () => Sv.Howler,
+       musicOutput: () => av,
+       readyAudioContext: () => sv
+     });
+     var hv, Sv = Pv(4611),
+       ev = Pv(4411);
+     const gv = Sv.Howler;
+ 
+     function pv() {
+ ... (46 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L735-L737` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L296-L299) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L735-L737)

```diff
-       }.apply(tz, [])) || (zz.exports = Fz), tz.Howler = Xz, tz.Howl = Oz, "undefined" !== typeof sz.g ? (sz.g.HowlerGlobal = Wz, sz.g.Howler = Xz, sz.g.Howl = Oz, sz.g.Sound = oz) : "undefined" !== typeof window && (window.HowlerGlobal = Wz, window.Howler = Xz, window.Howl = Oz, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function sv() {
```

#### 10. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L739-L782` → after: `L301-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L301-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L301-L339) · [Before (L739-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L739-L782)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(zz) {
-         var tz = this;
-         if (!tz.ctx || !tz.ctx.listener) return tz;
-         for (var sz = tz._howls.length - 1; sz >= 0; sz--) tz._howls[sz].stereo(zz);
-         return tz
-       }, HowlerGlobal.prototype.pos = function(zz, tz, sz) {
-         var Fz = this;
-         return Fz.ctx && Fz.ctx.listener ? (tz = "number" !== typeof tz ? Fz._pos[1] : tz, sz = "number" !== typeof sz ? Fz._pos[2] : sz, "number" !== typeof zz ? Fz._pos : (Fz._pos = [zz, tz, sz], "undefined" !== typeof Fz.ctx.listener.positionX ? (Fz.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(zz, tz, sz, Fz, Wz, Xz) {
-         var Oz = this;
-         if (!Oz.ctx || !Oz.ctx.listener) return Oz;
-         var oz = Oz._orientation;
-         return tz = "number" !== typeof tz ? oz[1] : tz, sz = "number" !== typeof sz ? oz[2] : sz, Fz = "number" !== typeof Fz ? oz[3] : Fz, Wz = "number" !== typeof Wz ? oz[4] : Wz, Xz = "number" !== typeof Xz ? oz[5] : Xz, "number" !== typeof zz ? oz : (Oz._orientation = [zz, t … [truncated]
-       }, Howl.prototype.init = (zz = Howl.prototype.init, function(tz) {
-         var sz = this;
-         return sz._orientation = tz.orientation || [1, 0, 0], sz._stereo = tz.stereo || null, sz._pos = tz.pos || null, sz._pannerAttr = {
- ... (28 more removed lines; see GitHub link above)
+       (gv.volume(), gv.ctx && gv.autoUnlock) && (null === (vv = gv._unlockAudio) || void 0 === vv || vv.call(gv))
+     }
+     wv && (gv._autoSuspend = () => Wv > 0 ? Sv.Howler : wv())
+   },
+   36292: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => hv
+     });
+     const hv = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+   },
+   36290: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv,
+       g: () => Sv,
+       k: () => hv
+     });
+ ... (23 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L784-L789` → after: `L341-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L341-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L341-L349) · [Before (L784-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L784-L789)

```diff
-         for (var Xz = Fz._getSoundIds(sz), Oz = 0; Oz < Xz.length; Oz++) {
-           var oz = Fz._soundById(Xz[Oz]);
-           if (oz) {
-             if ("number" !== typeof zz) return oz._stereo;
-             oz._stereo = zz, oz._pos = [zz, 0, 0], oz._node && (oz._pannerAttr.panningModel = "equalpower", oz._panner && oz._panner.pan || tz(oz, Wz), "spatial" === Wz ? "undefined" !== typeof oz._panner.positionX ? (oz._panner.positionX.setValueAtTime(zz, Howler.ctx.currentTime … [truncated]
-           }
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, vv)) && (this.voices.push(vv), !0)
+       }
+       dropLeastWorth(vv, zv) {
+         let Pv = null,
+           hv = 1 / 0;
+         for (const Sv of vv) {
+           if (!Sv.canStop()) continue;
+           const vv = ev(Sv, zv.startMs);
+           vv < hv && (Pv = Sv, hv = vv)
```

#### 12. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L792-L811` → after: `L380-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L380-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L380-L392) · [Before (L792-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L792-L811)

```diff
-       }, Howl.prototype.pos = function(zz, sz, Fz, Wz) {
-         var Xz = this;
-         if (!Xz._webAudio) return Xz;
-         if ("loaded" !== Xz._state) return Xz._queue.push({
-           event: "pos",
-           action: function() {
-             Xz.pos(zz, sz, Fz, Wz)
-           }
-         }), Xz;
-         if (sz = "number" !== typeof sz ? 0 : sz, Fz = "number" !== typeof Fz ? -.5 : Fz, "undefined" === typeof Wz) {
-           if ("number" !== typeof zz) return Xz._pos;
-           Xz._pos = [zz, sz, Fz]
-         }
-         for (var Oz = Xz._getSoundIds(Wz), oz = 0; oz < Oz.length; oz++) {
-           var vz = Xz._soundById(Oz[oz]);
-           if (vz) {
- ... (4 more removed lines; see GitHub link above)
+       }
+     }
+     class Sv {
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = vv
+       }
+       setBooleanType(vv, zv) {
+         const Pv = this._getTotalBooleanVal();
+         this.booleans[vv] = !!zv;
+         const hv = this.getTotalBooleanVal();
+         var Sv;
+         hv !== Pv && (null === (Sv = this._onUpdate) || void 0 === Sv || Sv.call(this, hv, this.booleans));
```

#### 13. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L813-L832` → after: `L394-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L394-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L394-L420) · [Before (L813-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L813-L832)

```diff
-       }, Howl.prototype.orientation = function(zz, sz, Fz, Wz) {
-         var Xz = this;
-         if (!Xz._webAudio) return Xz;
-         if ("loaded" !== Xz._state) return Xz._queue.push({
-           event: "orientation",
-           action: function() {
-             Xz.orientation(zz, sz, Fz, Wz)
-           }
-         }), Xz;
-         if (sz = "number" !== typeof sz ? Xz._orientation[1] : sz, Fz = "number" !== typeof Fz ? Xz._orientation[2] : Fz, "undefined" === typeof Wz) {
-           if ("number" !== typeof zz) return Xz._orientation;
-           Xz._orientation = [zz, sz, Fz]
-         }
-         for (var Oz = Xz._getSoundIds(Wz), oz = 0; oz < Oz.length; oz++) {
-           var vz = Xz._soundById(Oz[oz]);
-           if (vz) {
- ... (4 more removed lines; see GitHub link above)
+       }
+       removeBoolean(vv) {
+         const zv = this._getTotalBooleanVal();
+         delete this.booleans[vv];
+         const Pv = this._getTotalBooleanVal();
+         var hv;
+         null !== Pv && Pv !== zv && (null === (hv = this._onUpdate) || void 0 === hv || hv.call(this, Pv, this.booleans));
+         return null !== Pv && void 0 !== Pv && Pv
+       }
+       getBooleanType(vv) {
+         return this.booleans[vv]
+       }
+       getTotalBooleanVal() {
+         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       }
+       forceUpdate() {
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L893` → after: `L423-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L423-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/94.js#L423-L452) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/94.js#L893)

```diff
-     }()
+       _getTotalBooleanVal() {
+         let vv = !1,
+           zv = !0;
+         for (const Pv in this.booleans) vv = !0, zv &&= this.booleans[Pv];
+         return vv ? zv : null
+       }
+     }
+     class gv extends Sv {
+       getTotalBooleanVal() {
+         const vv = this._getTotalBooleanVal();
+         if (null === vv) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return vv
+       }
+       _getTotalBooleanVal() {
+         let vv = !1,
+           zv = !1;
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/95.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/95.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557)

#### 1. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L4-L143` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L5-L9) · [Before (L4-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L4-L143)

```diff
-   4504: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => lz
-     });
-     var Fz = sz(65),
-       Wz = sz(1493),
-       Xz = sz(321),
-       Oz = sz(1220),
-       oz = sz(1558),
-       vz = sz(1253),
-       Uz = sz(1511),
-       Kz = sz(1466),
-       uz = sz(2472);
-     const Nz = {
-       retries: 2,
-       minTimeout: 2e3
- ... (124 more removed lines; see GitHub link above)
+   4611: (vv, zv, Pv) => {
+     var hv;
+     ! function() {
+       var Sv = function() {
+         this.init()
```

#### 2. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L145-L166` → after: `L11-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L11-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L11-L60) · [Before (L145-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L145-L166)

```diff
-       (0, hz.b)(Ft), (0, Fz.useEffect)((() => {
-         var zz;
-         if (qz) return;
-         if (!iz) return void zt({
-           status: "notFound",
-           playerKey: lz
-         });
-         const tz = "urlId" in iz && (null === (zz = Vz.current) || void 0 === zz ? void 0 : zz.urlId) === iz.urlId && Rz.current === az;
-         if (tz && pz.current) return;
-         const sz = tz ? null : Jz.c.peek(az, iz);
-         let Fz = !1;
-         const Wz = zz => "loaded" === zz.status && (zz.playerKey === lz || "urlId" in iz && zz.profile.urlId === iz.urlId);
-         return sz ? (Rz.current = az, pz.current = !1, zt({
-           status: "loaded",
-           profile: sz,
-           playerKey: lz
- ... (6 more removed lines; see GitHub link above)
+       Sv.prototype = {
+         init: function() {
+           var vv = this || ev;
+           return vv._counter = 1e3, vv._html5AudioPool = [], vv.html5PoolSize = 10, vv._codecs = {}, vv._howls = [], vv._muted = !1, vv._volume = 1, vv._canPlayEvent = "canplaythrough", vv._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, v … [truncated]
+         },
+         volume: function(vv) {
+           var zv = this || ev;
+           if (vv = parseFloat(vv), zv.ctx || wv(), "undefined" !== typeof vv && vv >= 0 && vv <= 1) {
+             if (zv._volume = vv, zv._muted) return zv;
+             zv.usingWebAudio && zv.masterGain.gain.setValueAtTime(vv, ev.ctx.currentTime);
+             for (var Pv = 0; Pv < zv._howls.length; Pv++)
+               if (!zv._howls[Pv]._webAudio)
+                 for (var hv = zv._howls[Pv]._getSoundIds(), Sv = 0; Sv < hv.length; Sv++) {
+                   var gv = zv._howls[Pv]._soundById(hv[Sv]);
+                   gv && gv._node && (gv._node.volume = gv._volume * vv)
+                 }
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L168-L171` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L62-L70) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L168-L171)

```diff
-             return {
-               status: "loaded",
-               profile: await Kz.d.getPlayerProfile(zz, tz, Nz)
-             }
+             (new Audio).muted && (vv.noAudio = !0)
+           } catch (zv) {}
+           return vv.noAudio || vv._setupCodecs(), vv
+         },
+         _setupCodecs: function() {
+           var vv = this || ev,
+             zv = null;
+           try {
+             zv = "undefined" !== typeof Audio ? new Audio : null
```

#### 4. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L173-L177` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L72) · [Before (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L173-L177)

```diff
-             return (0, uz.b)(sz) ? {
-               status: "notFound"
-             } : (console.error("Failed to load user profile", sz), {
-               status: "failed"
-             })
+             return vv
```

#### 5. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L179-L202` → after: `L74-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L74-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L74-L125) · [Before (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L179-L202)

```diff
-         }(az, iz).then((zz => {
-           Fz || ("loaded" === zz.status && (Rz.current = az, pz.current = !0), zt((tz => "failed" === zz.status && Wz(tz) ? tz : {
-             ...zz,
-             playerKey: lz
-           })))
-         })), () => {
-           Fz = !0
-         }
-       }), [qz, lz, az, tt]);
-       const Wt = "loading" === Ez.status || Ez.playerKey === lz || "loaded" === Ez.status && !!iz && "urlId" in iz && Ez.profile.urlId === iz.urlId ? Ez : {
-           status: "loading"
-         },
-         Xt = "loaded" === Wt.status ? Wt.profile : null,
-         Ot = "loading" === Wt.status ? null : function(zz) {
-           if ("loaded" === zz.status) {
-             const {
- ... (8 more removed lines; see GitHub link above)
+           if (!zv || "function" !== typeof zv.canPlayType) return vv;
+           var Pv = zv.canPlayType("audio/mpeg;").replace(/^no$/, ""),
+             hv = vv._navigator ? vv._navigator.userAgent : "",
+             Sv = hv.match(/OPR\/([0-6].)/g),
+             gv = Sv && parseInt(Sv[0].split("/")[1], 10) < 33,
+             pv = -1 !== hv.indexOf("Safari") && -1 === hv.indexOf("Chrome"),
+             dv = hv.match(/Version\/(.*?) /),
+             Nv = pv && dv && parseInt(dv[1], 10) < 15;
+           return vv._codecs = {
+             mp3: !(gv || !Pv && !zv.canPlayType("audio/mp3;").replace(/^no$/, "")),
+             mpeg: !!Pv,
+             opus: !!zv.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
+             ogg: !!zv.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             oga: !!zv.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             wav: !!(zv.canPlayType('audio/wav; codecs="1"') || zv.canPlayType("audio/wav")).replace(/^no$/, ""),
+             aac: !!zv.canPlayType("audio/aac;").replace(/^no$/, ""),
+ ... (36 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L204-L239` → after: `L127-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L127-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L127-L163) · [Before (L204-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L204-L239)

```diff
-           return "notFound" === zz.status ? (0, Uz.V)() : null
-         }(Wt),
-         ot = null !== Xt && void 0 !== Xt && Xt.urlId ? (0, Oz.h)({
-           urlId: Xt.urlId,
-           name: Xt.player.name
-         }) : null;
-       (0, wz.h)(ot);
-       const vt = null !== Xt && void 0 !== Xt && Xt.player.cosmetics.profileEffect ? Cz.f[Xt.player.cosmetics.profileEffect] : void 0,
-         Ut = null !== Xt && !qz && az.getPlayerName().toLowerCase() === Xt.player.name.toLowerCase(),
-         Kt = (0, yz.b)(null === Xt || void 0 === Xt ? void 0 : Xt.player.name),
-         ut = Ut && az.playerHasRank("youtuber");
-       Vz.current = Xt;
-       const Nt = (0, Fz.useCallback)((() => {
-           iz && (Jz.c.invalidate(iz), Jz.c.get(az, iz).then((zz => {
-             nz.current === lz && (pz.current = !0, zt({
-               status: "loaded",
- ... (20 more removed lines; see GitHub link above)
+         },
+         _obtainHtml5Audio: function() {
+           var vv = this || ev;
+           if (vv._html5AudioPool.length) return vv._html5AudioPool.pop();
+           var zv = (new Audio).play();
+           return zv && "undefined" !== typeof Promise && (zv instanceof Promise || "function" === typeof zv.then) && zv.catch((function() {
+             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
+           })), new Audio
+         },
+         _releaseHtml5Audio: function(vv) {
+           var zv = this || ev;
+           return vv._unlocked && zv._html5AudioPool.push(vv), zv
+         },
+         _autoSuspend: function() {
+           var vv = this;
+           if (vv.autoSuspend && vv.ctx && "undefined" !== typeof vv.ctx.suspend && ev.usingWebAudio) {
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L241-L252` → after: `L165-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L165-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L165-L206) · [Before (L241-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L241-L252)

```diff
-       }), [Xt, bt]), (0, Qz.jsxs)("div", {
-         className: Zz()("PlayerProfile", {
-           PlayerProfilePortrait: sz
-         }),
-         children: [Ot && (0, Qz.jsx)(oz.c, {
-           meta: Ot
-         }), (0, Qz.jsxs)("div", {
-           className: "PlayerProfileBackgroundContainer",
-           children: [vt && (0, Qz.jsx)(vt, {}), !vt && (0, Qz.jsx)("div", {
-             className: "PlayerProfileBackground",
-             style: {
-               backgroundImage: `url(${fz.current})`
+       };
+       var ev = new Sv,
+         gv = function(vv) {
+           vv.src && 0 !== vv.src.length ? this.init(vv) : console.error("An array of source files must be passed with any new Howl.")
+         };
+       gv.prototype = {
+         init: function(vv) {
+           var zv = this;
+           return ev.ctx || wv(), zv._autoplay = vv.autoplay || !1, zv._format = "string" !== typeof vv.format ? vv.format : [vv.format], zv._html5 = vv.html5 || !1, zv._muted = vv.mute || !1, zv._loop = vv.loop || !1, zv._pool = vv.pool || 5, zv._preload = "boolean" !== typeof vv … [truncated]
+             method: vv.xhr && vv.xhr.method ? vv.xhr.method : "GET",
+             headers: vv.xhr && vv.xhr.headers ? vv.xhr.headers : null,
+             withCredentials: !(!vv.xhr || !vv.xhr.withCredentials) && vv.xhr.withCredentials
+           }, zv._duration = 0, zv._state = "unloaded", zv._sounds = [], zv._endTimers = {}, zv._queue = [], zv._playLock = !1, zv._onend = vv.onend ? [{
+             Ew: vv.onend
+           }] : [], zv._onfade = vv.onfade ? [{
+             Ew: vv.onfade
+ ... (26 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L254-L426` → after: `L208-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L208-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L208-L228) · [Before (L254-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L254-L426)

```diff
-           })]
-         }), (0, Qz.jsxs)("div", {
-           className: "PlayerProfileHeader",
-           children: [(0, Qz.jsx)(Yz.e, {
-             onClick: Ft,
-             children: zz("general:back")
-           }), Xt && !qz && !Ut && dz.featureFlags.useSocialFeatures && (0, Qz.jsx)("div", {
-             className: "PlayerProfileExclusionActions",
-             children: (0, Qz.jsx)(Mz.d, {
-               playerName: Xt.player.name,
-               className: "SmallTextLight"
-             })
-           })]
-         }), "loading" === Wt.status && (0, Qz.jsx)("div", {
-           className: "PlayerProfileCentredMessage",
-           children: (0, Qz.jsx)(rz.d, {})
- ... (157 more removed lines; see GitHub link above)
+           }), zv._preload && "none" !== zv._preload && zv.load(), zv
+         },
+         load: function() {
+           var vv = this,
+             zv = null;
+           if (ev.noAudio) vv._emit("loaderror", null, "No audio support.");
+           else {
+             "string" === typeof vv._src && (vv._src = [vv._src]);
+             for (var Pv = 0; Pv < vv._src.length; Pv++) {
+               var hv, Sv;
+               if (vv._format && vv._format[Pv]) hv = vv._format[Pv];
+               else {
+                 if ("string" !== typeof(Sv = vv._src[Pv])) {
+                   vv._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
+                   continue
+                 }(hv = /^data:audio\/([^;,]+);/i.exec(Sv)) || (hv = /\.([^.]+)$/.exec(Sv.split("?", 1)[0])), hv && (hv = hv[1].toLowerCase())
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L428-L437` → after: `L230-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L230-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L230-L693) · [Before (L428-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L428-L437)

```diff
-           },
-           prefixText: Xz.p[tz],
-           placeholderText: "playBloxd",
-           initialValue: null !== (zz = null === sz || void 0 === sz ? void 0 : sz.handle) && void 0 !== zz ? zz : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: sz ? "general:remove" : void 0
-         }).getResult().then((async zz => {
-           if ("notificationTornDown" !== zz && null !== zz) try {
-             "submit" === zz.type ? await Uz.d.setSocialLink(Wz, tz, zz.value) : await Uz.d.clearSocialLink(Wz, tz), uz()
+             if (zv) return vv._src = zv, vv._state = "loading", "https:" === window.location.protocol && "http:" === zv.slice(0, 5) && (vv._html5 = !0, vv._webAudio = !1), new pv(vv), vv._webAudio && Nv(vv), vv;
+             vv._emit("loaderror", null, "No codec support for selected audio sources.")
+           }
+         },
+         play: function(vv, zv) {
+           var Pv = this,
+             hv = null;
+           if ("number" === typeof vv) hv = vv, vv = null;
+           else {
+             if ("string" === typeof vv && "loaded" === Pv._state && !Pv._sprite[vv]) return null;
+             if ("undefined" === typeof vv && (vv = "__default", !Pv._playLock)) {
+               for (var Sv = 0, gv = 0; gv < Pv._sounds.length; gv++) Pv._sounds[gv].Am && !Pv._sounds[gv]._ended && (Sv++, hv = Pv._sounds[gv]._id);
+               1 === Sv ? vv = null : hv = null
+             }
+           }
+           var pv = hv ? Pv._soundById(hv) : Pv._inactiveSound();
+ ... (448 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L439-L442` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L695) · [Before (L439-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L439-L442)

```diff
-             console.error("Failed to update social link", sz), Kz.NotificationProvider.showAlertPopup({
-               title: sz.errorMessageForUser,
-               confirmText: "general:ok"
-             })
+             vv.onerror()
```

#### 11. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L444-L474` → after: `L697-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L697-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L697-L700) · [Before (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L444-L474)

```diff
-         }))
-       }
-       if (sz) {
-         const zz = `@${sz.handle}`;
-         return (0, Nz.jsxs)("a", {
-           className: "PlayerProfileSocialLink",
-           style: {
-             background: gz.color
-           },
-           href: sz.profileUrl,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: [(0, Nz.jsxs)("div", {
-             className: "PlayerProfileSocialLinkMain",
-             children: [(0, Nz.jsx)(wz, {
-               platform: tz
- ... (15 more removed lines; see GitHub link above)
+         },
+         Tv = function(vv, zv) {
+           var Pv = function() {
+               zv._emit("loaderror", null, "Decoding audio data failed.")
```

#### 12. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L476-L511` → after: `L702-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L702-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L702-L858) · [Before (L476-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L476-L511)

```diff
-             children: (0, Nz.jsx)(oz.c, {
-               name: "pen-to-square"
-             })
-           }), !Fz && (0, Nz.jsx)("span", {
-             className: "PlayerProfileSocialLinkArrow",
-             children: (0, Nz.jsx)(oz.c, {
-               name: "arrow-up-right-from-square"
-             })
-           })]
-         })
-       }
-       return (0, Nz.jsxs)("button", {
-         type: "button",
-         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
-         style: {
-           background: gz.color
- ... (20 more removed lines; see GitHub link above)
+             hv = function(vv) {
+               vv && zv._sounds.length > 0 ? (dv[zv._src] = vv, Wv(zv, vv)) : Pv()
+             };
+           "undefined" !== typeof Promise && 1 === ev.ctx.decodeAudioData.length ? ev.ctx.decodeAudioData(vv).then(hv).catch(Pv) : ev.ctx.decodeAudioData(vv, hv, Pv)
+         },
+         Wv = function(vv, zv) {
+           zv && !vv._duration && (vv._duration = zv.duration), 0 === Object.keys(vv._sprite).length && (vv._sprite = {
+             __default: [0, 1e3 * vv._duration]
+           }), "loaded" !== vv._state && (vv._state = "loaded", vv._emit("load"), vv._loadQueue())
+         },
+         wv = function() {
+           if (ev.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? ev.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? ev.ctx = new webkitAudioContext : ev.usingWebAudio = !1
+             } catch (Sv) {
+               ev.usingWebAudio = !1
+ ... (141 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L513-L543` → after: `L860-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L860-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/95.js#L860-L893) · [Before (L513-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/95.js#L513-L543)

```diff
-         })]
-       })
-     }
- 
-     function gz(zz) {
-       let {
-         socialLinks: tz,
-         editable: sz = !1,
-         userContext: Fz,
-         onLinksUpdated: Wz
-       } = zz;
-       if (!sz && 0 === tz.length) return null;
-       const Oz = new Map(tz.map((zz => [zz.platform, zz]))),
-         oz = sz ? Xz.n : tz.map((zz => zz.platform));
-       return (0, Nz.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
- ... (15 more removed lines; see GitHub link above)
+         } else 2 === ev.length && (vv = ev[0], Pv = parseInt(ev[1], 10));
+         for (var gv = Sv._getSoundIds(Pv), pv = 0; pv < gv.length; pv++)
+           if (hv = Sv._soundById(gv[pv])) {
+             var dv = hv._pannerAttr;
+             dv = {
+               coneInnerAngle: "undefined" !== typeof vv.coneInnerAngle ? vv.coneInnerAngle : dv.coneInnerAngle,
+               coneOuterAngle: "undefined" !== typeof vv.coneOuterAngle ? vv.coneOuterAngle : dv.coneOuterAngle,
+               coneOuterGain: "undefined" !== typeof vv.coneOuterGain ? vv.coneOuterGain : dv.coneOuterGain,
+               distanceModel: "undefined" !== typeof vv.distanceModel ? vv.distanceModel : dv.distanceModel,
+               maxDistance: "undefined" !== typeof vv.maxDistance ? vv.maxDistance : dv.maxDistance,
+               refDistance: "undefined" !== typeof vv.refDistance ? vv.refDistance : dv.refDistance,
+               rolloffFactor: "undefined" !== typeof vv.rolloffFactor ? vv.rolloffFactor : dv.rolloffFactor,
+               panningModel: "undefined" !== typeof vv.panningModel ? vv.panningModel : dv.panningModel
+             };
+             var Nv = hv._panner;
+             Nv ? (Nv.coneInnerAngle = dv.coneInnerAngle, Nv.coneOuterAngle = dv.coneOuterAngle, Nv.coneOuterGain = dv.coneOuterGain, Nv.distanceModel = dv.distanceModel, Nv.maxDistance = dv.maxDistance, Nv.refDistance = dv.refDistance, Nv.rolloffFactor = dv.rolloffFactor, Nv.pann … [truncated]
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/96.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/96.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926)

#### 1. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L4)

```diff
-   8937: (zz, tz, sz) => {
+   4624: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L6-L10)

```diff
-       blockMetadata: () => Oz.j,
-       getDefaultModel: () => Kz,
-       getDefaultSkyBox: () => uz,
-       getDefaultTexture: () => Uz,
-       textureNameToIndex: () => Oz.t
+       default: () => yv
```

#### 3. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L12-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L8-L16) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L12-L16)

```diff
-     var Fz = sz(2886),
-       Wz = sz(33840),
-       Xz = sz(1191),
-       Oz = sz(8940),
-       oz = sz(577);
+     var hv = Pv(52),
+       Sv = Pv(1505),
+       ev = Pv(312),
+       gv = Pv(1221),
+       pv = Pv(1595),
+       dv = Pv(1250),
+       Nv = Pv(1534),
+       lv = Pv(1482),
+       Tv = Pv(2505);
```

#### 4. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L18-L19)

```diff
-       block: zz => sz(9040)(`./${zz}.png`),
-       item: zz => sz(16853)(`./${zz}.png`)
+       retries: 2,
+       minTimeout: 2e3
```

#### 5. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L22-L49` → after: `L49-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L49-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L49-L85) · [Before (L22-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L22-L49)

```diff
-     function Uz(zz, tz) {
-       let Wz;
-       try {
-         if (tz === Fz.e.BLOCK) Wz = {
-           type: Fz.h.BASE64,
-           url: vz.block(zz)
-         };
-         else if (tz === Fz.e.ITEM) Wz = {
-           type: Fz.h.BASE64,
-           url: vz.item(zz)
-         };
-         else if (tz === Fz.e.ICON) Wz = {
-           type: Fz.h.BASE64,
-           url: sz(26366)(`./${zz}.png`)
-         };
-         else if (tz === Fz.e.LIFEFORM_ATLAS) {
- ... (12 more removed lines; see GitHub link above)
+     function Hv(vv) {
+       let {
+         icon: zv,
+         label: Pv,
+         value: hv
+       } = vv;
+       return (0, Av.jsxs)("div", {
+         className: "PlayerProfileStat",
+         children: [(0, Av.jsx)(Vv.b, {
+           name: zv,
+           className: "PlayerProfileStatIcon"
+         }), (0, Av.jsxs)("div", {
+           className: "PlayerProfileStatText",
+           children: [(0, Av.jsx)("div", {
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: Pv
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L54` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L88-L108) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L54)

```diff
-       return Wz
+       let gv = Pv("homePage:profileUnknown");
+       return zv.accountCreatedAt && (gv = new Date(zv.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+         month: "short",
+         day: "numeric"
+       })), (0, Av.jsxs)("div", {
+         className: "PlayerProfileStats",
+         children: [(0, Av.jsx)(Hv, {
+           icon: "hourglass",
+           label: Pv("homePage:profileTimePlayed"),
+           value: (0, tv.d)(zv.totalPlayMinutes)
+         }), (0, Av.jsx)(Hv, {
+           icon: "wifi",
+           label: Pv("homePage:profileLastOnline"),
+           value: Sv
+         }), (0, Av.jsx)(Hv, {
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L57-L64` → after: `L111-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L111-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L111-L177) · [Before (L57-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L57-L64)

```diff
-     function Kz(zz, tz) {
-       let Wz;
-       try {
-         if (tz === Fz.d.BLOCK) {
-           const tz = sz(28585)(`./${zz}.glb`);
-           Wz = {
-             type: Fz.h.BASE64,
-             url: tz
+     function yv() {
+       const {
+         t: vv
+       } = (0, iv.x)(), zv = (0, fv.useNavigatePreserveSearch)(), Pv = (0, wv.i)(), {
+         playerName: nv,
+         playerUrlName: Dv
+       } = (0, Sv.B)(), tv = (0, Sv.p)(), Hv = (0, gv.f)(tv.pathname), yv = Hv && ("urlId" in Hv ? `urlId:${Hv.urlId}` : `name:${Hv.lowerCaseName}`), Bv = (0, hv.useRef)(yv);
+       Bv.current = yv;
+       const {
+         userContext: Jv,
+         isUserContextUpdating: Ev
+       } = (0, sv.d)(), ov = (0, hv.useRef)(null), bv = (0, hv.useRef)(null), rv = (0, hv.useRef)(null), kv = (0, hv.useRef)(!1), Xv = (0, hv.useRef)((0, ev.Yb)(Lv)), [uv, vz] = (0, hv.useState)((() => {
+         const vv = Hv && Yv.d.peek(Jv, Hv);
+         return vv ? {
+           status: "loaded",
+           profile: vv,
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L66-L74` → after: `L179-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L179-L202) · [Before (L66-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L66-L74)

```diff
-         } else if (tz === Fz.d.ITEM) Wz = {
-           type: Fz.h.HTTP,
-           url: `${Xz.clientSideServerUrls.staticUrl}/models/${zz}.glb`
-         };
-         else if (tz === Fz.d.LIFEFORM) {
-           const tz = sz(33054)(`./${zz}.glb`);
-           Wz = {
-             type: Fz.h.BASE64,
-             url: tz
+         }(Jv, Hv).then((vv => {
+           hv || ("loaded" === vv.status && (rv.current = Jv, kv.current = !0), vz((zv => "failed" === vv.status && Sv(zv) ? zv : {
+             ...vv,
+             playerKey: yv
+           })))
+         })), () => {
+           hv = !0
+         }
+       }), [Ev, yv, Jv, zz]);
+       const Sz = "loading" === uv.status || uv.playerKey === yv || "loaded" === uv.status && !!Hv && "urlId" in Hv && uv.profile.urlId === Hv.urlId ? uv : {
+           status: "loading"
+         },
+         ez = "loaded" === Sz.status ? Sz.profile : null,
+         gz = "loading" === Sz.status ? null : function(vv) {
+           if ("loaded" === vv.status) {
+             const {
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L77-L84` → after: `L241-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L241-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L241-L343) · [Before (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L77-L84)

```diff
-       } catch {
-         throw new Error(`Default model for ${zz} not found`)
-       }
-       return Wz
-     }
- 
-     function uz(zz) {
-       return Wz.j[zz]
+       }), [ez, wz]), (0, Av.jsxs)("div", {
+         className: Kv()("PlayerProfile", {
+           PlayerProfilePortrait: Pv
+         }),
+         children: [gz && (0, Av.jsx)(pv.e, {
+           meta: gz
+         }), (0, Av.jsxs)("div", {
+           className: "PlayerProfileBackgroundContainer",
+           children: [dz && (0, Av.jsx)(dz, {}), !dz && (0, Av.jsx)("div", {
+             className: "PlayerProfileBackground",
+             style: {
+               backgroundImage: `url(${Xv.current})`
+             }
+           })]
+         }), (0, Av.jsxs)("div", {
+           className: "PlayerProfileHeader",
+ ... (87 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L87` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L346) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L87)

```diff
-   33840: (zz, tz, sz) => {
+   4635: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L89-L93` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L348) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L89-L93)

```diff
-       d: () => Xz,
-       f: () => oz,
-       h: () => Oz,
-       i: () => Wz,
-       j: () => Fz
+       d: () => Cv
```

#### 12. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L96-L180` → after: `L361-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L361-L364) · [Before (L96-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L96-L180)

```diff
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
-         },
-         interstellar: {
-           type: "custom",
-           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
- ... (69 more removed lines; see GitHub link above)
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
```

#### 13. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L182-L795` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L366-L384) · [Before (L182-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L182-L795)

```diff
-       Wz = "/textures/dayNight/sun.png",
-       Xz = "/textures/dayNight/moon.png",
-       Oz = "/textures/dayNight/stars",
-       oz = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
-   },
-   28581: (zz, tz, sz) => {
-     var Fz = {
-       "./Player_Atlas.png": 27622,
-       "./astro_set_1_attachable.png": 27628,
-       "./astro_set_2_attachable.png": 27631,
-       "./astro_set_3_attachable.png": 27633,
-       "./astro_set_4_attachable.png": 27635,
-       "./beaver_lumberjack.png": 27640,
-       "./bee_set_1_attachable.png": 27642,
-       "./bee_set_2_attachable.png": 27648,
-       "./bee_set_3_attachable_blue.png": 27657,
- ... (598 more removed lines; see GitHub link above)
+       tiktok: {
+         icon: "tiktok",
+         color: "#0F0F0F",
+         name: "TikTok"
+       },
+       instagram: {
+         icon: "instagram",
+         color: "#E1306C",
+         name: "Instagram"
+       },
+       twitter: {
+         icon: "x-twitter",
+         color: "#0F0F0F",
+         name: "X"
+       },
+       twitch: {
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L1612-L1621` → after: `L389-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L389-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L389-L403) · [Before (L1612-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L1612-L1621)

```diff
-       var tz = Xz(zz);
-       return sz(tz)
-     }
- 
-     function Xz(zz) {
-       if (!sz.o(Fz, zz)) {
-         var tz = new Error("Cannot find module '" + zz + "'");
-         throw tz.code = "MODULE_NOT_FOUND", tz
-       }
-       return Fz[zz]
+       let {
+         platform: zv
+       } = vv;
+       const Pv = "youtube" === zv;
+       return (0, Wv.jsxs)("span", {
+         className: Sv()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: Pv
+         }),
+         children: [Pv && (0, Wv.jsx)(Tv.e, {
+           variant: "white"
+         }), !Pv && (0, Wv.jsx)(pv.b, {
+           name: wv[zv].icon,
+           kit: "brands"
+         })]
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L3046-L3048` → after: `L407-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L407-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L407-L417) · [Before (L3046-L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L3046-L3048)

```diff
-       var tz = Xz(zz);
-       return sz(tz)
-     }
+       let {
+         platform: zv,
+         link: Pv,
+         editable: hv,
+         userContext: Sv,
+         onLinksUpdated: Tv
+       } = vv;
+       const {
+         t: sv
+       } = (0, gv.x)(), Cv = wv[zv];
+       if (!Pv && !hv) return null;
```

#### 16. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L3050-L3053` → after: `L419-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L419-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L419-L444) · [Before (L3050-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L3050-L3053)

```diff
-     function Xz(zz) {
-       if (!sz.o(Fz, zz)) {
-         var tz = new Error("Cannot find module '" + zz + "'");
-         throw tz.code = "MODULE_NOT_FOUND", tz
+       function iv() {
+         var vv;
+         if (!Sv || !Tv) return;
+         lv.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: Cv.name
+             }
+           },
+           prefixText: ev.q[zv],
+           placeholderText: "playBloxd",
+           initialValue: null !== (vv = null === Pv || void 0 === Pv ? void 0 : Pv.handle) && void 0 !== vv ? vv : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: Pv ? "general:remove" : void 0
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L3055-L3169` → after: `L446-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L446-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L446-L485) · [Before (L3055-L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L3055-L3169)

```diff
-       return Fz[zz]
-     }
-     Wz.keys = function() {
-       return Object.keys(Fz)
-     }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 9040
-   },
-   26366: (zz, tz, sz) => {
-     var Fz = {
-       "./Air Walk.png": 26371,
-       "./Antlers Bonus.png": 26373,
-       "./Arrow Damage Enchantment.png": 26379,
-       "./Arrow Speed Enchantment.png": 26381,
-       "./Attack Speed Enchantment.png": 26386,
-       "./Blindness.png": 26390,
-       "./Boating.png": 26396,
-       "./Bounciness.png": 26400,
- ... (99 more removed lines; see GitHub link above)
+       if (Pv) {
+         const vv = `@${Pv.handle}`;
+         return (0, Wv.jsxs)("a", {
+           className: "PlayerProfileSocialLink",
+           style: {
+             background: Cv.color
+           },
+           href: Pv.profileUrl,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: [(0, Wv.jsxs)("div", {
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, Wv.jsx)(av, {
+               platform: zv
+             }), (0, Wv.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+ ... (24 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L3171-L4908` → after: `L487-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L487-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L487-L514) · [Before (L3171-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L3171-L4908)

```diff
-       return Fz[zz]
-     }
-     Wz.keys = function() {
-       return Object.keys(Fz)
-     }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 26366
-   },
-   16853: (zz, tz, sz) => {
-     var Fz = {
-       "./67.png": 16855,
-       "./67_projectile_base.png": 16863,
-       "./67_projectile_boosted.png": 16866,
-       "./AK-47.png": 16872,
-       "./AWP.png": 16876,
-       "./Block-19.png": 16881,
-       "./DMR.png": 16886,
-       "./Deagle.png": 16890,
- ... (1722 more removed lines; see GitHub link above)
+       return (0, Wv.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: Cv.color
+         },
+         ...(0, dv.U)(),
+         onClick: () => {
+           iv()
+         },
+         children: [(0, Wv.jsx)(av, {
+           platform: zv
+         }), (0, Wv.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, Wv.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+ ... (12 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L4912-L4916` → after: `L518-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L518-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L518-L539) · [Before (L4912-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L4912-L4916)

```diff
-       if (!sz.o(Fz, zz)) {
-         var tz = new Error("Cannot find module '" + zz + "'");
-         throw tz.code = "MODULE_NOT_FOUND", tz
-       }
-       return Fz[zz]
+       let {
+         socialLinks: zv,
+         editable: Pv = !1,
+         userContext: hv,
+         onLinksUpdated: Sv
+       } = vv;
+       if (!Pv && 0 === zv.length) return null;
+       const gv = new Map(zv.map((vv => [vv.platform, vv]))),
+         pv = Pv ? ev.n : zv.map((vv => vv.platform));
+       return (0, Wv.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, Wv.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: pv.map((vv => (0, Wv.jsx)(sv, {
+             platform: vv,
+             link: gv.get(vv),
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L5435-L17025` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/96.js#L542-L543) · [Before (L5435-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/96.js#L5435-L17025)

```diff
-   29531: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAAC4CAAAGAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzZ9LHsidHlwZSI6IlZFQzMiLCJjb21wb25lbnRUeXBlIjo1 … [truncated]
-   },
-   29536: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAACwCQAAHAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MTA4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   29543: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA8CQAAGAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NzJ9LHsidHlwZSI6IlZFQzMiLCJjb21wb25lbnRUeXBlIjo1 … [truncated]
-   },
-   29550: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAAAACAAAdAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjI4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   29558: zz => {
-     zz.exports = "data:model/gltf-binary;base64,Z2xURgIAAACUCwAAQAUAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NjU0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   29564: zz => {
- ... (11575 more removed lines; see GitHub link above)
+   4627: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/97.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/97.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8)

#### 1. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2)

```diff
- export const ids = [97, 185];
+ export const ids = [97];
```

#### 2. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4-L15` → after: `L4-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4-L110) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L4-L15)

```diff
-   8717: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       EverythingMenu: () => Fo
-     });
-     var Fz = sz(65),
-       Wz = sz(1020),
-       Xz = sz.n(Wz),
-       Oz = sz(1173),
-       oz = sz(1036),
-       vz = sz(1997),
-       Uz = sz(1106),
-       Kz = sz(1087);
+   28786: (vv, zv, Pv) => {
+     var hv = {
+       "./Player_Atlas.png": 27831,
+       "./astro_set_1_attachable.png": 27835,
+       "./astro_set_2_attachable.png": 27837,
+       "./astro_set_3_attachable.png": 27842,
+       "./astro_set_4_attachable.png": 27845,
+       "./beaver_lumberjack.png": 27849,
+       "./bee_set_1_attachable.png": 27858,
+       "./bee_set_2_attachable.png": 27861,
+       "./bee_set_3_attachable_blue.png": 27864,
+       "./bee_set_3_attachable_green.png": 27867,
+       "./bee_set_3_attachable_red.png": 27876,
+       "./bee_set_4_attachable.png": 27883,
+       "./capeTextures/cape_cow_cream.png": 27887,
+       "./capeTextures/cape_cow_normal.png": 27889,
+ ... (91 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L18-L76` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L113-L114) · [Before (L18-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L18-L76)

```diff
-       let {
-         items: tz,
-         onClick: sz,
-         selectedItemId: Fz,
-         className: Wz,
-         padStartsOnTab: uz = !0
-       } = zz;
-       const {
-         t: Nz
-       } = (0, Oz.B)(), bz = (0, Uz.i)(), wz = [];
-       for (const Xz of tz) {
-         var Dz;
-         const zz = wz[wz.length - 1];
-         var gz;
-         if (zz && zz.title === (null !== (Dz = Xz.section) && void 0 !== Dz ? Dz : null)) zz.items.push(Xz);
-         else wz.push({
- ... (43 more removed lines; see GitHub link above)
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 4. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L94-L113` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L118-L120) · [Before (L94-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L94-L113)

```diff
-       let {
-         setApplySettingsCallback: tz
-       } = zz;
-       const {
-         clientEscMenuOptions: sz
-       } = (0, Jz.h)(["clientEscMenuOptions"]), [Wz, Xz] = (0, Fz.useState)(!1), [Oz, oz] = (0, Fz.useState)(!1), [vz, Uz] = (0, Fz.useState)(6400), [uz, Nz] = (0, Fz.useState)(3600), [bz, wz] = (0, Fz.useState)(!1), [Dz, Hz] = (0, Fz.useState)(!1);
- 
-       function Bz(zz) {
-         const tz = "screenshot" === zz ? oz : Xz;
-         tz(!0);
-         const sz = bz ? "normals" : Dz ? "depth" : null;
-         Iz.devTools.downloadScene(zz, {
-           width: vz,
-           height: uz,
-           colouring: sz
-         }).catch((zz => {
- ... (4 more removed lines; see GitHub link above)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
```

#### 5. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L115-L216` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L122) · [Before (L115-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L115-L216)

```diff
-       return (0, Kz.jsxs)("div", {
-         className: "DeveloperToolsCategory",
-         children: [(0, Kz.jsx)(mz.b, {
-           label: "Disable Ambient Occlusion",
-           checked: sz.disableAmbientOcclusion,
-           onClick: zz => {
-             Jz.b.setClientEscMenuOptions({
-               disableAmbientOcclusion: zz
-             }), tz((() => mz.h))
-           },
-           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
-         }), Iz.devTools.supports("ambientLight") && (0, Kz.jsx)(mz.g, {
-           name: "Ambient Lighting Intensity",
-           min: 0,
-           max: 1,
-           step: .01,
- ... (86 more removed lines; see GitHub link above)
+       return hv[vv]
```

#### 6. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L218-L236` → after: `L124-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L124-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L124-L271) · [Before (L218-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L218-L236)

```diff
-     var ez = sz(133),
-       Zz = sz(1120),
-       Gz = sz(1191),
-       Tz = sz(2737),
-       cz = sz(1483),
-       jz = sz(1253),
-       Az = sz(1220),
-       yz = sz(2824),
-       Mz = sz(1975),
-       dz = sz(1466),
-       hz = sz(321),
-       Qz = sz(2175),
-       kz = sz(2187),
-       iz = sz(2487),
-       Lz = sz(1577),
-       lz = sz(2793),
- ... (3 more removed lines; see GitHub link above)
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 28786
+   },
+   33095: (vv, zv, Pv) => {
+     var hv = {
+       "./67/67_Model.glb": 33103,
+       "./67/67_Reconstructed.glb": 33110,
+       "./Armour Collector/Armour Collector_Model.glb": 33118,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33122,
+       "./Bear/Bear_Model.glb": 33127,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33132,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33135,
+       "./Camel/Camel_Model.glb": 33140,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 33147,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 33153,
+ ... (132 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L239-L274` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L274-L275) · [Before (L239-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L239-L274)

```diff
-       const {
-         t: tz,
-         selectedLanguage: sz
-       } = (0, Oz.B)(), {
-         userContext: Wz
-       } = (0, bz.b)(), {
-         superRankInfo: Xz
-       } = Wz, oz = zz && ((0, hz.vc)(Xz) || Wz.ranksMayChange) && (0, kz.purchasesAllowed)(), {
-         accountId: vz,
-         data: Uz
-       } = (0, iz.j)(lz.d, oz);
-       if ((0, Fz.useEffect)((() => {
-           if (oz) return lz.d.watchAccount(), Lz.d.addRefetchListener("billing", (zz => {
-             "reconnected" === zz ? lz.d.refreshAfterReconnect() : lz.d.refresh()
-           }))
-         }), [oz]), !oz || !(0, hz.vc)(Xz) || null === Uz || vz !== Wz.whamm) return null;
- ... (20 more removed lines; see GitHub link above)
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 8. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L284-L346` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L279-L281) · [Before (L284-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L284-L346)

```diff
-       let {
-         showing: tz
-       } = zz;
-       const {
-         t: sz
-       } = (0, Oz.B)(), {
-         data: Fz,
-         failed: Wz
-       } = (0, iz.j)(Ez.f, tz);
-       return 0 === (null === Fz || void 0 === Fz ? void 0 : Fz.length) || null === Fz && !Wz ? null : (0, Kz.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, Kz.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: sz("paymentHistory:title")
-         }), null === Fz && Wz && (0, Kz.jsx)("div", {
-           className: "AccountSettingsPaymentHistoryError",
- ... (47 more removed lines; see GitHub link above)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
```

#### 9. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L349-L363` → after: `L285-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L285-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L285-L601) · [Before (L349-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L349-L363)

```diff
-     var Ut = sz(308),
-       Kt = sz(2334);
-     const ut = {
-       appStore: {
-         name: "App Store",
-         ...Ut.Vb.appStore
-       },
-       googlePlay: {
-         name: "Google Play",
-         ...Ut.Vb.googlePlay
-       },
-       discord: {
-         name: "Discord",
-         ...Ut.Vb.discord
-       }
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 33095
+   },
+   27127: (vv, zv, Pv) => {
+     var hv = {
+       "./67/67_Atlas.png": 27136,
+       "./67/variations/0_67_default.png": 27143,
+       "./Armour Collector/Armour Collector_Atlas.png": 27147,
+       "./Armour Collector/variations/0_armour collector_default.png": 27154,
+       "./Bear/BearSaddle_Atlas.png": 27163,
+       "./Bear/Bear_Atlas.png": 27165,
+       "./Bear/variations/0_bear_default.png": 27173,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27181,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27189,
+       "./Camel/CamelSaddle_Atlas.png": 27198,
+ ... (301 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L367-L477` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L605-L606) · [Before (L367-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L367-L477)

```diff
-       let {
-         warning: tz,
-         subscriptions: sz
-       } = zz;
-       const {
-         t: Fz
-       } = (0, Oz.B)();
-       return null !== sz && 0 === sz.length ? (0, Kz.jsx)(Kz.Fragment, {
-         children: Fz(tz)
-       }) : (0, Kz.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [Fz(tz), null === sz && (0, Kz.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: Fz("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== sz && (0, Kz.jsxs)(Kz.Fragment, {
-           children: [(0, Kz.jsx)("div", {
- ... (95 more removed lines; see GitHub link above)
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 11. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L484-L569` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L610-L612) · [Before (L484-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L484-L569)

```diff
-       let {
-         showing: tz
-       } = zz;
-       const {
-         t: sz
-       } = (0, Oz.B)(), {
-         data: Fz,
-         failed: Wz
-       } = (0, iz.j)(wt.b, tz), Xz = null === Fz ? null : (0, wt.d)(Fz);
-       return (0, Kz.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, Kz.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: sz("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === Xz && !Wz && (0, Kz.jsx)(xz.d, {}), null === Xz && Wz && (0, Kz.jsxs)("div", {
-           className: "BlockedAndIgnoredPlayersError",
- ... (70 more removed lines; see GitHub link above)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
```

#### 12. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L571-L851` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L614) · [Before (L571-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L571-L851)

```diff
-       return (0, Fz.useEffect)((() => (!0 === sz ? (clearInterval(Xt.current), Xt.current = setInterval(wz, 1e3)) : clearInterval(Xt.current), () => {
-         clearInterval(Xt.current)
-       })), [sz, wz]), (0, Fz.useEffect)((() => {
-         var zz;
-         rz(null !== (zz = Dz.getPlayerName()) && void 0 !== zz ? zz : "")
-       }), [Dz]), (0, Fz.useEffect)((() => {
-         if (!sz || !gt || Bz) return;
-         let zz = !1;
-         return Dt(!0), Nt([]), dz.d.getPlayerProfile(Dz, {
-           lowerCaseName: Dz.getPlayerName().toLowerCase()
-         }).then((tz => {
-           zz || Nt(tz.socialLinks)
-         })).catch((zz => {
-           console.error("Failed to load social links", zz)
-         })).finally((() => {
-           zz || Dt(!1)
- ... (265 more removed lines; see GitHub link above)
+       return hv[vv]
```

#### 13. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L853-L1038` → after: `L616-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L616-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L616-L1425) · [Before (L853-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L853-L1038)

```diff
-     var rt = sz(8739),
-       Yt = sz(2862),
-       xt = sz(1237),
-       mt = sz(1401);
-     const Jt = (0, Fz.memo)((function(zz) {
-         let {
-           inGame: tz
-         } = zz;
-         const {
-           t: sz,
-           selectedLanguage: Fz
-         } = (0, Oz.B)(), {
-           clientEscMenuOptions: Wz,
-           showDebugOverlay: Xz
-         } = (0, Jz.h)(["clientEscMenuOptions", "showDebugOverlay"]), oz = (0, wz.e)("hideCoordinates");
-         let vz = "settingsMenu:showCoordinates",
- ... (170 more removed lines; see GitHub link above)
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 27127
+   },
+   28792: (vv, zv, Pv) => {
+     var hv = {
+       "./2_block.glb": 28798,
+       "./67.glb": 28806,
+       "./Artisan Bench.glb": 28811,
+       "./Aspen Door.glb": 28820,
+       "./Aspen Item Pedestal.glb": 28823,
+       "./Aspen Ladder.glb": 28828,
+       "./Aspen Trapdoor.glb": 28836,
+       "./Black Banner.glb": 28838,
+       "./Black Bed.glb": 28846,
+       "./Black Directional Arrow.glb": 28848,
+ ... (794 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L1620-L1625` → after: `L1429-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L1429-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L1429-L1430) · [Before (L1620-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L1620-L1625)

```diff
-       return {
-         backgroundImage: `url(${zz})`,
-         backgroundSize: `${Is} ${Is}`,
-         backgroundRepeat: "repeat",
-         imageRendering: "pixelated"
-       }
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 15. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L1629-L1650` → after: `L1434-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L1434-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L1434-L1436) · [Before (L1629-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L1629-L1650)

```diff
-       return {
-         ...(() => {
-           switch (zz) {
-             case "sky":
-               return {
-                 backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
-               };
-             case "grass":
-               return Cs(Ps);
-             case "stone":
-               return Cs(rs);
-             case "sand":
-               return Cs(Ys);
-             case "snow":
-               return Cs(xs);
-             case "night":
- ... (6 more removed lines; see GitHub link above)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
```

#### 16. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L1655-L1787` → after: `L2863-L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2863-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2863-L2864) · [Before (L1655-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L1655-L1787)

```diff
-       return Object.freeze({
-         ...vs.h,
-         style: "shapes",
-         outline: 1,
-         lines: !1,
-         ...zz
-       })
-     }
-     const Gs = [{
-         id: "default",
-         settings: vs.h
-       }, {
-         id: "cross",
-         settings: Zs({
-           color: 5046092,
-           lines: !0,
- ... (117 more removed lines; see GitHub link above)
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 17. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L1791-L1879` → after: `L2868-L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2868-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2868-L2870) · [Before (L1791-L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L1791-L1879)

```diff
-       let {
-         settings: tz,
-         touch: sz,
-         backdrop: Fz,
-         onChange: Wz
-       } = zz;
-       const {
-         t: oz
-       } = (0, Oz.B)(), vz = function(zz) {
-         var tz;
-         return null !== (tz = Gs.find((tz => (0, vs.v)(tz.settings, zz, Ts)))) && void 0 !== tz ? tz : null
-       }(tz);
-       return (0, Kz.jsx)("div", {
-         className: "CrosshairPresets",
-         role: "radiogroup",
-         "aria-label": oz("crosshairSettings:presets"),
- ... (73 more removed lines; see GitHub link above)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
```

#### 18. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L1882-L2374` → after: `L2874-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2874-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2874-L2975) · [Before (L1882-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L1882-L2374)

```diff
- 
-     function Qs(zz) {
-       let {
-         settings: tz,
-         touch: sz,
-         backdrop: Fz,
-         className: Wz,
-         children: Oz,
-         label: oz
-       } = zz;
-       const vz = hs(tz, ".CrosshairStageControls");
-       return (0, Kz.jsxs)("div", {
-         className: Xz()("CrosshairStage", Wz),
-         style: es(Fz),
-         ...vz.handlers,
-         children: [(0, Kz.jsx)("div", {
- ... (477 more removed lines; see GitHub link above)
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 9196
+   },
+   26562: (vv, zv, Pv) => {
+     var hv = {
+       "./Air Walk.png": 26567,
+       "./Antlers Bonus.png": 26571,
+       "./Arrow Damage Enchantment.png": 26577,
+       "./Arrow Speed Enchantment.png": 26582,
+       "./Attack Speed Enchantment.png": 26591,
+       "./Blindness.png": 26596,
+       "./Boating.png": 26603,
+       "./Bounciness.png": 26607,
+       "./Brain Rot.png": 26613,
+       "./Break Speed Enchantment.png": 26617,
+ ... (86 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2401` → after: `L2979-L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2979-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2979-L2980) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2401)

```diff
-       return zz ? "general" : "account"
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 20. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2588-L2624` → after: `L2984-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2984-L2988) · [Before (L2588-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2588-L2624)

```diff
-       let {
-         show: tz
-       } = zz;
-       const {
-         userContext: sz
-       } = (0, bz.b)(), [Wz, Xz] = (0, Fz.useState)("characters");
-       if (!tz) return null;
-       const Oz = DF.filter((zz => "cape" !== zz && "nameColour" !== zz || sz.getPlayerRanks().includes("super") || (0, kz.purchasesAllowed)())).map((zz => ({
-         id: zz,
-         faIcon: Ut.I[zz],
-         title: Ut.L[zz],
-         redDot: !1
-       })));
-       return (0, Kz.jsxs)("div", {
-         className: "Menu CharCustomisation",
-         children: [(0, Kz.jsx)("div", {
- ... (21 more removed lines; see GitHub link above)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
+       }
+       return hv[vv]
```

#### 21. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2626-L2641` → after: `L2990-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2990-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L2990-L4721) · [Before (L2626-L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2626-L2641)

```diff
-     var BF = sz(1435),
-       PF = sz(8843),
-       rF = sz(4175),
-       YF = sz(3080),
-       xF = sz(3137),
-       mF = sz(8874),
-       JF = sz(8279),
-       IF = sz(8848),
-       CF = sz(8863),
-       eF = sz(1845),
-       ZF = sz(1831),
-       GF = sz(4539),
-       TF = sz(1244),
-       cF = sz(1213),
-       jF = sz(1608),
-       AF = sz(8345);
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 26562
+   },
+   16965: (vv, zv, Pv) => {
+     var hv = {
+       "./67.png": 16973,
+       "./67_projectile_base.png": 16979,
+       "./67_projectile_boosted.png": 16982,
+       "./AK-47.png": 16989,
+       "./AWP.png": 16996,
+       "./Block-19.png": 17003,
+       "./DMR.png": 17008,
+       "./Deagle.png": 17011,
+       "./Double-barreled.png": 17015,
+       "./FMR.png": 17024,
+ ... (1716 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2644-L2648` → after: `L4724-L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4724-L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4724-L4725) · [Before (L2644-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2644-L2648)

```diff
-       return zz ? Object.keys(zz).sort(((tz, sz) => {
-         var Fz, Wz, Xz, Oz;
-         const oz = (null !== (Fz = null === (Wz = zz[sz]) || void 0 === Wz ? void 0 : Wz.sortPriority) && void 0 !== Fz ? Fz : 0) - (null !== (Xz = null === (Oz = zz[tz]) || void 0 === Oz ? void 0 : Oz.sortPriority) && void 0 !== Xz ? Xz : 0);
-         return 0 !== oz ? oz : tz.localeCompare(sz)
-       })) : []
+       var zv = ev(vv);
+       return Pv(zv)
```

#### 23. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2665-L2673` → after: `L4729-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4729-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4729-L4733) · [Before (L2665-L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2665-L2673)

```diff
-       for (const {
-           threshold: tz,
-           suffix: sz
-         }
-         of MF)
-         if (zz >= tz) {
-           const Fz = zz / tz;
-           return Fz >= 100 ? `${Math.floor(Fz)}${sz}` : Fz >= 10 ? `${Fz.toFixed(1).replace(/\.0$/,"")}${sz}` : `${Fz.toFixed(2).replace(/\.?0+$/,"")}${sz}`
-         } return String(zz)
+       if (!Pv.o(hv, vv)) {
+         var zv = new Error("Cannot find module '" + vv + "'");
+         throw zv.code = "MODULE_NOT_FOUND", zv
+       }
+       return hv[vv]
```

#### 24. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2675` → after: `L4735-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4735-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4735-L4751) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2675)

```diff
-     var hF = sz(4636);
+     Sv.keys = function() {
+       return Object.keys(hv)
+     }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 16965
+   },
+   9099: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       blockMetadata: () => gv.g,
+       getDefaultModel: () => lv,
+       getDefaultSkyBox: () => Tv,
+       getDefaultTexture: () => Nv,
+       textureNameToIndex: () => gv.r
+     });
+     var hv = Pv(2950),
+       Sv = Pv(33866),
+       ev = Pv(1184),
+       gv = Pv(9101),
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2677-L2782` → after: `L4753-L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4753-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4753-L4755) · [Before (L2677-L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2677-L2782)

```diff
-         normal: "0.8em",
-         big: "1em"
-       },
-       kF = (0, Fz.memo)((function(zz) {
-         let {
-           item: tz,
-           amount: sz = 0,
-           size: Fz = "normal",
-           tier: Wz = null
-         } = zz;
-         return (0, Kz.jsx)("div", {
-           className: Xz()("SmpSlot", `SmpSlot-${Fz}`),
-           children: tz && (0, Kz.jsx)(eF.c, {
-             itemName: tz,
-             amount: sz > 1 ? sz : 0,
-             amountFontSize: QF[Fz],
- ... (90 more removed lines; see GitHub link above)
+       block: vv => Pv(9196)(`./${vv}.png`),
+       item: vv => Pv(16965)(`./${vv}.png`)
+     };
```

#### 26. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2784-L2825` → after: `L4757-L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4757-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4757-L4762) · [Before (L2784-L2825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2784-L2825)

```diff
-     function SF(zz) {
-       let {
-         value: tz,
-         onChange: sz,
-         min: Wz = 1,
-         max: Xz,
-         step: Oz = 1,
-         label: oz
-       } = zz;
-       const vz = (0, Fz.useRef)(null),
-         Uz = (0, Fz.useRef)(tz);
-       Uz.current = tz;
-       const [uz, Nz] = (0, Fz.useState)(null), bz = zz => Math.max(Wz, Math.min(Xz, Math.floor(zz))), wz = zz => {
-         const tz = Uz.current,
-           Fz = "function" === typeof Oz ? Oz(tz, zz) : Oz,
-           Wz = bz(tz + Fz * zz);
- ... (26 more removed lines; see GitHub link above)
+     function Nv(vv, zv) {
+       let Sv;
+       try {
+         if (zv === hv.d.BLOCK) Sv = {
+           type: hv.f.BASE64,
+           url: dv.block(vv)
```

#### 27. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2827-L2858` → after: `L4764-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4764-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4764-L4780) · [Before (L2827-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2827-L2858)

```diff
-         return zz.addEventListener("blur", tz), () => {
-           zz.removeEventListener("blur", tz)
-         }
-       }), []);
-       const Dz = zz => (0, Kz.jsx)("button", {
-         type: "button",
-         className: "SmpStepButton",
-         "aria-label": `${zz>0?"More":"Less"} ${oz}`,
-         disabled: zz > 0 ? tz >= Xz : tz <= Wz,
-         onPointerDown: tz => {
-           0 === tz.button && (wz(zz), Nz(zz))
-         },
-         onKeyDown: tz => {
-           "Enter" !== tz.key && " " !== tz.key || wz(zz)
-         },
-         onContextMenu: zz => {
- ... (16 more removed lines; see GitHub link above)
+         else if (zv === hv.d.ITEM) Sv = {
+           type: hv.f.BASE64,
+           url: dv.item(vv)
+         };
+         else if (zv === hv.d.ICON) Sv = {
+           type: hv.f.BASE64,
+           url: Pv(26562)(`./${vv}.png`)
+         };
+         else if (zv === hv.d.LIFEFORM_ATLAS) {
+           let zv;
+           for (const Pv of pv.q)
+             if (vv.startsWith(Pv)) {
+               zv = Pv;
+               break
+             } Sv = {
+             type: hv.f.BASE64,
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2860-L2887` → after: `L4782-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4782-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4782-L4784) · [Before (L2860-L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2860-L2887)

```diff
-         }), Dz(1)]
-       })
-     }
- 
-     function VF(zz) {
-       return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, zz))) - 1))
-     }
-     var RF = sz(8866),
-       pF = sz(1223);
-     const fF = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
-     pF.y, hz.Cc.length;
-     new Map;
-     var EF = sz(2965);
- 
-     function zW(zz, tz) {
-       var sz;
- ... (12 more removed lines; see GitHub link above)
+         } else zv === hv.d.PLAYER_ASSET && (Sv = {
+           type: hv.f.BASE64,
+           url: Pv(28786)(`./${vv}.png`)
```

#### 29. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2894-L2964` → after: `L4793-L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4793-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4793-L4799) · [Before (L2894-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2894-L2964)

```diff
-       var sz;
-       return null !== (sz = tW(zz, tz)[0]) && void 0 !== sz ? sz : null
-     }
-     const FW = "50% 0% 50% 0%",
-       WW = [{
-         divisor: 864e5,
-         suffix: "d"
-       }, {
-         divisor: 36e5,
-         suffix: "h"
-       }, {
-         divisor: 6e4,
-         suffix: "m"
-       }, {
-         divisor: 1e3,
-         suffix: "s"
- ... (55 more removed lines; see GitHub link above)
+       let Sv;
+       try {
+         if (zv === hv.b.BLOCK) {
+           const zv = Pv(28792)(`./${vv}.glb`);
+           Sv = {
+             type: hv.f.BASE64,
+             url: zv
```

#### 30. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2966` → after: `L4801-L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4801-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4801-L4803) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2966)

```diff
-           return !0
+         } else if (zv === hv.b.ITEM) Sv = {
+           type: hv.f.HTTP,
+           url: `${ev.clientSideServerUrls.staticUrl}/models/${vv}.glb`
```

#### 31. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2968-L3028` → after: `L4805-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4805-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4805-L4809) · [Before (L2968-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L2968-L3028)

```diff
-       return zz.filter((zz => Oz(zz.lowerLabel) || Oz(zz.lowerName)))
-     }
- 
-     function UW(zz, tz) {
-       var sz;
-       return null !== (sz = null === zz || void 0 === zz ? void 0 : zz[tz]) && void 0 !== sz ? sz : tz
-     }
- 
-     function KW(zz, tz) {
-       const sz = zz.userInput;
-       return void 0 !== tz && "dropdown" === (null === sz || void 0 === sz ? void 0 : sz.type) && sz.dropdownOptions.map(JF.e).includes(tz) ? tz : function(zz) {
-         const tz = zz.userInput;
-         if ("dropdown" !== (null === tz || void 0 === tz ? void 0 : tz.type) || 0 === tz.dropdownOptions.length) return null;
-         const sz = tz.dropdownOptions.map(JF.e);
-         return tz.initialValue && sz.includes(tz.initialValue) ? tz.initialValue : sz[sz.length - 1]
-       }(zz)
- ... (45 more removed lines; see GitHub link above)
+         else if (zv === hv.b.LIFEFORM) {
+           const zv = Pv(33095)(`./${vv}.glb`);
+           Sv = {
+             type: hv.f.BASE64,
+             url: zv
```

#### 32. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3117-L3164` → after: `L4812-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4812-L4813) · [Before (L3117-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L3117-L3164)

```diff
-       }(zz, tz), oz = (0, Fz.useMemo)((() => function() {
-         var zz;
-         let tz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-           sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
-           Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         const Wz = `${(0,EF.h)()}\x1f${tz.join("\x1e")}\x1f${sz.join("\x1e")}\x1f${JSON.stringify(Fz)}`;
-         if ((null === (zz = oW) || void 0 === zz ? void 0 : zz.key) === Wz) return oW.items;
-         const Xz = new Set(sz),
-           Oz = new Set,
-           oz = [],
-           vz = (zz, tz) => {
-             var sz;
-             if (!zz || Oz.has(zz) || Xz.has(zz)) return;
-             Oz.add(zz);
-             const Wz = null !== (sz = Fz[zz]) && void 0 !== sz ? sz : zz;
-             oz.push({
- ... (32 more removed lines; see GitHub link above)
+       } catch {
+         throw new Error(`Default model for ${vv} not found`)
```

#### 33. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3169-L3435` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4819) · [Before (L3169-L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L3169-L3435)

```diff
-       let {
-         browser: tz,
-         children: sz
-       } = zz;
-       const {
-         t: Fz
-       } = (0, Oz.B)(), Wz = bW();
-       return (0, Kz.jsxs)("div", {
-         className: "SmpTopBar",
-         children: [(0, Kz.jsx)("div", {
-           className: "SmpSearch",
-           children: (0, Kz.jsx)(Yz.d, {
-             className: "SmpSearchInput",
-             placeholderText: Fz("smpShop:searchPlaceholder"),
-             defaultValue: tz.query,
-             onValueChange: zz => {
- ... (251 more removed lines; see GitHub link above)
+       return Sv.n[vv]
```

#### 34. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L3437-L4761` → after: `L4821-L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4821-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4821-L4833) · [Before (L3437-L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L3437-L4761)

```diff
-     const eW = [1, 10, 100],
-       ZW = [1, 10, 100, 999];
- 
-     function GW(zz) {
-       var tz, sz, Wz, vz, Uz, uz, Nz, bz, wz, Dz;
-       const {
-         t: Hz
-       } = (0, Oz.B)(), Bz = bW(), {
-         creator: Pz,
-         mode: rz
-       } = zz, [xz, mz] = (0, Fz.useState)(null !== (tz = null === Pz || void 0 === Pz ? void 0 : Pz.meta.item) && void 0 !== tz ? tz : null), [Jz, Iz] = (0, Fz.useState)(1), [Cz, ez] = (0, Fz.useState)(0), [Zz, Gz] = (0, Fz.useState)(""), [Tz, cz] = (0, Fz.useState)(0), jz = (0,  … [truncated]
-       (0, Fz.useEffect)((() => {
-         zz.searching || null === dz || dz === jz.current || (jz.current = dz, Az.current = !1, mz(dz), ez(0), Iz("list" === rz ? Math.max(1, hz) : 1))
-       }), [dz, zz.searching]);
-       const Qz = !!Pz && !!xz && Pz.meta.item === xz,
-         kz = Qz ? Pz.meta.po : null !== (vz = null === (Uz = zz.inventory) || void 0 === Uz || null === (uz = Uz.find((zz => zz.item === xz))) || void 0 === uz ? void 0 : uz.quantity) && void 0 !== vz ? vz : 0,
- ... (1309 more removed lines; see GitHub link above)
+   },
+   33866: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => ev,
+       g: () => pv,
+       h: () => gv,
+       l: () => Sv,
+       n: () => hv
+     });
+     const hv = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
```

#### 35. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4763-L4821` → after: `L4835-L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4835-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4835-L4842) · [Before (L4763-L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L4763-L4821)

```diff
-         kz = zz => {
-           Nz((tz => Qz(tz, zz)))
-         };
-       (0, et.g)(AF.i, (() => {
-         Nz((zz => {
-           const tz = (0, AF.k)(yF(zz.shopInfo), zz.selectedCategoryKey, (tz => (0, AF.f)(zz.shopInfo[tz].items)));
-           return tz === zz.selectedCategoryKey ? zz : Qz(zz, tz)
-         }))
-       })), (0, et.g)("showShopFromServer", (zz => {
-         let {
-           toggle: tz,
-           Ht: sz
-         } = zz;
-         sz && kz(sz), 0 === Object.keys(Uz.shopInfo).length || tz && Wz ? Jz.b.set({
-           openEverythingMenuName: null
-         }) : Jz.b.set({
- ... (43 more removed lines; see GitHub link above)
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
```

#### 36. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4823-L4959` → after: `L4844-L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4844-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4844-L4851) · [Before (L4823-L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L4823-L4959)

```diff
-         nz = (zz, tz) => {
-           var sz, Fz, Wz;
-           const Oz = qW(Lz, zz),
-             oz = Uz.shopInfo[Lz].items[zz],
-             uz = Uz.userInputsPerItem[Oz],
-             Nz = (0, JF.b)(oz, uz),
-             bz = lz(oz, Nz),
-             wz = oz.enchant,
-             Dz = wz ? (0, hz.sb)(null !== (sz = oz.customTitle) && void 0 !== sz ? sz : zz, {
-               colour: hz.lb[wz.tier]
-             }) : null !== (Fz = oz.customTitle) && void 0 !== Fz ? Fz : zz,
-             Hz = tz => {
-               const sz = null !== tz && void 0 !== tz ? tz : uz,
-                 Fz = void 0 !== tz ? (0, JF.b)(oz, tz) : Nz;
-               lz(oz, Fz) && null !== sz && dz(zz, oz, tz);
-               let Wz = Uz.redDotInfo;
- ... (121 more removed lines; see GitHub link above)
+         interstellar: {
+           type: "custom",
+           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
+           ny: "/textures/skyBoxes/interstellar/_ny.jpg",
+           nz: "/textures/skyBoxes/interstellar/_nz.jpg",
+           px: "/textures/skyBoxes/interstellar/_px.jpg",
+           py: "/textures/skyBoxes/interstellar/_py.jpg",
+           pz: "/textures/skyBoxes/interstellar/_pz.jpg"
```

#### 37. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4961-L5069` → after: `L4853-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4853-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4853-L4860) · [Before (L4961-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L4961-L5069)

```diff
-         az = function(zz) {
-           for (const tz in zz)
-             if (zz[tz].smp) return !0;
-           return !1
-         }(Uz.shopInfo),
-         qz = zW(Uz.shopInfo, Lz);
-       return (0, Kz.jsx)(YF.d, {
-         className: "Menu ShopBody",
-         show: Wz,
-         children: 0 !== Object.keys(Uz.shopInfo).length && (0, Kz.jsxs)(Kz.Fragment, {
-           children: [(0, Kz.jsxs)("div", {
-             className: "MenuSideBar",
-             children: [(0, Kz.jsx)(uz, {
-               items: yF(Uz.shopInfo).map((zz => {
-                 var tz;
-                 return {
- ... (93 more removed lines; see GitHub link above)
+         space_blue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
+           px: "/textures/skyBoxes/space_blue/_px.jpg",
+           py: "/textures/skyBoxes/space_blue/_py.jpg",
+           pz: "/textures/skyBoxes/space_blue/_pz.jpg"
```

#### 38. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5071-L5083` → after: `L4862-L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4862-L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4862-L4869) · [Before (L5071-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L5071-L5083)

```diff
-         children: (0, Kz.jsx)(GF.c, {
-           game: {
-             schematicId: Xz
-           }
-         })
-       });
-       var vz, Uz;
-       if ((0, eF.f)(Wz)) return (0, Kz.jsx)("div", {
-         className: "ShopBlock",
-         style: {
-           minWidth: `${sz}rem`,
-           height: "0",
-           minHeight: `${Fz}rem`
+         space_lightblue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
+           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
+           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
+           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
```

#### 39. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5085-L5120` → after: `L4871-L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4871-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4871-L4878) · [Before (L5085-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L5085-L5120)

```diff
-         children: (0, Kz.jsx)(eF.c, {
-           itemName: Wz,
-           amount: null !== (vz = tz.amount) && void 0 !== vz ? vz : 0,
-           amountFontSize: Fz / 4 + "rem",
-           enchantmentTier: null === (Uz = tz.enchant) || void 0 === Uz ? void 0 : Uz.tier
-         })
-       });
-       const uz = Wz.slice(-4);
-       return ".jpg" === uz || ".png" === uz ? (0, Kz.jsx)(pW, {
-         image: Wz,
-         minWidth: sz
-       }) : (0, Kz.jsx)(oz.c, {
-         name: Wz,
-         className: "SelectedItemImage",
-         style: {
-           color: Oz
- ... (20 more removed lines; see GitHub link above)
+         space_red: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red/_nz.jpg",
+           px: "/textures/skyBoxes/space_red/_px.jpg",
+           py: "/textures/skyBoxes/space_red/_py.jpg",
+           pz: "/textures/skyBoxes/space_red/_pz.jpg"
```

#### 40. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5122-L5424` → after: `L4880-L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4880-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4880-L4887) · [Before (L5122-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L5122-L5424)

```diff
-         src: `/textures/games/${(0,hz.Tb)(Fz)}/${tz}`,
-         alt: tz,
-         draggable: !1
-       })
-     }
- 
-     function fW(zz) {
-       let {
-         item: tz,
-         cost: sz,
-         currencyAmounts: Fz
-       } = zz;
-       const Wz = !isNaN(sz) && 0 !== sz && SW(Fz, tz.currency);
-       let Xz = null;
-       return tz.buyButtonText ? Xz = tz.buyButtonText : Wz ? (Xz = sz, tz.sell && (Xz = -1 * sz), Xz = Xz.toString()) : 0 === sz ? Xz = "Free" : tz.isRewardedAd && (Xz = "Watch ad"), (0, Lt.G)(Xz) || " " === Xz ? null : (0, Kz.jsxs)("div", {
-         className: "BuyItemCostAndIcon",
- ... (287 more removed lines; see GitHub link above)
+         underwater: {
+           type: "custom",
+           nx: "/textures/skyBoxes/underwater/water.jpg",
+           ny: "/textures/skyBoxes/underwater/water.jpg",
+           nz: "/textures/skyBoxes/underwater/water.jpg",
+           px: "/textures/skyBoxes/underwater/water.jpg",
+           py: "/textures/skyBoxes/underwater/water.jpg",
+           pz: "/textures/skyBoxes/underwater/water.jpg"
```

#### 41. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5426-L5433` → after: `L4889-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4889-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4889-L4896) · [Before (L5426-L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L5426-L5433)

```diff
-         choose: function(zz, tz) {
-           wz(), Wz(zz), Oz("typed" === tz ? "search" : "prefilled" === tz ? "prefilled" : "suggestion"), vz({
-             name: zz,
-             source: tz
-           }), "typed" !== tz && "prefilled" !== tz && (0, fz.reportAnalyticsClick)({
-             id: "store.gift_recipient",
-             value: tz
-           })
+         starry: {
+           type: "custom",
+           nx: "/textures/skyBoxes/starry/_nx.jpg",
+           ny: "/textures/skyBoxes/starry/_ny.jpg",
+           nz: "/textures/skyBoxes/starry/_nz.jpg",
+           px: "/textures/skyBoxes/starry/_px.jpg",
+           py: "/textures/skyBoxes/starry/_py.jpg",
+           pz: "/textures/skyBoxes/starry/_pz.jpg"
```

#### 42. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5435-L5436` → after: `L4898-L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4898-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4898-L4905) · [Before (L5435-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L5435-L5436)

```diff
-         clear: function() {
-           wz(), Wz(""), Oz("search"), vz(null)
+         space_red_2: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
+           px: "/textures/skyBoxes/space_red_2/_px.jpg",
+           py: "/textures/skyBoxes/space_red_2/_py.jpg",
+           pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
```

#### 43. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L5438-L5725` → after: `L4907-L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4907-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4907-L4914) · [Before (L5438-L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L5438-L5725)

```diff
-         recordGift: function(zz, tz) {
-           ! function(zz) {
-             PX.delete(zz.toLowerCase())
-           }(zz), Kz((sz => {
-             if (!sz || sz.name.toLowerCase() !== zz.toLowerCase() || !0 !== sz.result.giftRecipientFound || "superRank" === tz) return sz;
-             const Fz = sz.result.giftRecipientOwnedPacks;
-             return {
-               ...sz,
-               result: {
-                 ...sz.result,
-                 giftRecipientOwnedPacks: Fz.includes(tz) ? Fz : [...Fz, tz]
-               }
-             }
-           }))
-         }
-       }
- ... (272 more removed lines; see GitHub link above)
+         space_white: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_white/_nx.jpg",
+           ny: "/textures/skyBoxes/space_white/_ny.jpg",
+           nz: "/textures/skyBoxes/space_white/_nz.jpg",
+           px: "/textures/skyBoxes/space_white/_px.jpg",
+           py: "/textures/skyBoxes/space_white/_py.jpg",
+           pz: "/textures/skyBoxes/space_white/_pz.jpg"
```

#### 44. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L6234-L7610` → after: `L4917-L16866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4917-L16866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L4917-L16866) · [Before (L6234-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L6234-L7610)

```diff
-       gO = new Set(["wildSpirits"]);
- 
-     function HO(zz) {
-       var tz;
-       let {
-         tile: sz,
-         design: Wz,
-         canGoLive: vz,
-         live: Uz,
-         busy: uz,
-         highlight: Nz,
-         onLiveStart: bz,
-         onLiveEnd: wz,
-         onOpen: Dz,
-         onAct: gz,
-         onNeedRecipient: Hz,
- ... (1361 more removed lines; see GitHub link above)
+       Sv = "/textures/dayNight/sun.png",
+       ev = "/textures/dayNight/moon.png",
+       gv = "/textures/dayNight/stars",
+       pv = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
+   },
+   28798: vv => {
+     vv.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28806: vv => {
+     vv.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28811: vv => {
+     vv.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28820: vv => {
+     vv.exports = "data:model/gltf-binary;base64,Z2xURgIAAABsBwAA8AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+ ... (11934 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L7612-L7660` → after: `L16868-L16869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16868-L16869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16868-L16869) · [Before (L7612-L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L7612-L7660)

```diff
-   8848: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Xz
-     });
-     var Fz = sz(321),
-       Wz = sz(8856);
- 
-     function Xz(zz, tz, sz) {
-       const Xz = Object.entries(tz).sort(((zz, tz) => tz[1] - zz[1])),
-         Oz = (0, Fz.sb)(zz);
-       Oz.push(zz ? "\n\n" : "\n");
-       for (const [Wz, wz] of Xz) {
-         var oz, vz, Uz;
-         const zz = null !== (oz = null === sz || void 0 === sz || null === (vz = sz[Wz]) || void 0 === vz ? void 0 : vz.icon) && void 0 !== oz ? oz : `${Wz} Enchantment`;
-         Oz.push({
-           icon: zz,
- ... (33 more removed lines; see GitHub link above)
+   26257: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFTGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L7662-L7961` → after: `L16871-L16872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16871-L16872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16871-L16872) · [Before (L7662-L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L7662-L7961)

```diff
-   8863: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Uz,
-       e: () => Bz,
-       f: () => gz,
-       g: () => vz,
-       h: () => Hz,
-       i: () => Kz,
-       j: () => Nz,
-       k: () => Dz,
-       o: () => uz
-     });
-     var Fz = sz(308),
-       Wz = sz(580),
-       Xz = sz(321),
-       Oz = sz(3919),
- ... (284 more removed lines; see GitHub link above)
+   26266: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJtJREFUGJVjYCASMELp/4TUMcFYq5b6MHg66DOsWuqDwoYBFhhj/uzHDE5OTgxCQjYMDAwMDE5ORxjmz94HVwg30cnJicHQ1IZB3FySITE3i8HQ1IbByckJUyEMeJkFYnUk3Op9+yDWzJ88jYGBgYHh/OkjcDEUExNTZRn27dvH8O7d … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L7963-L8059` → after: `L16874-L16875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16874-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16874-L16875) · [Before (L7963-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L7963-L8059)

```diff
-   8739: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => bz,
-       h: () => wz,
-       k: () => Dz
-     });
-     var Fz = sz(1419),
-       Wz = sz(65),
-       Xz = sz(1287),
-       Oz = sz(4175),
-       oz = sz(2250),
-       vz = sz(1173),
-       Uz = sz(106),
-       Kz = sz(1901),
-       uz = sz(1306),
-       Nz = sz(1087);
- ... (81 more removed lines; see GitHub link above)
+   26268: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAW5JREFUeJztm6sShDAMRdMdFBrDR6D5f4lGV2PQWNbtMNBSsmQays1xu5QmZG5D+sDRBcZxXFNtuq5zV/p6Gh9tB7SpOI3ruj78tyyLmDMawCvAAqDtgDbwAWAlwdITXgh4BbgrRU5O/imohmE4fYa+76N9Vk3TcO29CvghUM3zHL0Y … [truncated]
```

#### 48. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8061-L8294` → after: `L16877-L16878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16877-L16878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16877-L16878) · [Before (L8061-L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8061-L8294)

```diff
-   8834: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Uz
-     });
-     var Fz = sz(65),
-       Wz = sz(1020),
-       Xz = sz.n(Wz),
-       Oz = sz(1901),
-       oz = sz(1087);
- 
-     function vz(zz) {
-       const tz = Math.floor(zz / 3600),
-         sz = Math.floor(zz % 3600 / 60),
-         Fz = Math.floor(zz % 60),
-         Wz = `${sz.toString().padStart(2,"0")}:${Fz.toString().padStart(2,"0")}`;
-       return tz > 0 ? `${tz}:${Wz}` : Wz
- ... (218 more removed lines; see GitHub link above)
+   26270: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAALUlEQVR4nGNgoBTYaon8h2G8inZ0BYExToXIimqjjLArpLMiZIV4FREdFMQCAD6qQQ6OuQMUAAAAAElFTkSuQmCC"
```

#### 49. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8296-L8313` → after: `L16880-L16881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16880-L16881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16880-L16881) · [Before (L8296-L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8296-L8313)

```diff
-   8843: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Xz
-     });
-     var Fz = sz(4178),
-       Wz = sz(4180);
- 
-     function Xz(zz) {
-       let {
-         children: tz,
-         showing: sz,
-         globallyUniqueKey: Xz,
-         alwaysMountChildren: Oz = !1,
-         doGameplayStartStopOnShow: oz = !0,
-         keepsMovement: vz = !1
-       } = zz;
- ... (2 more removed lines; see GitHub link above)
+   26274: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYCASMELp/wTkEQonFbhgqMqbsAeuhgkm+OrVZxTMwMDAANX8n4GBgYEFZnLLspNw64OtlRgYGBgYxMR44abDTYRawcjAwMC49ug9DGcwYYjgAEQrZMQj959IdagAALOmGaAQsMFMAAAAAElFTkSuQmCC"
```

#### 50. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8315-L8332` → after: `L16883-L16884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16883-L16884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16883-L16884) · [Before (L8315-L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8315-L8332)

```diff
-   8900: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Xz
-     });
-     var Fz = sz(65),
-       Wz = sz(3252);
- 
-     function Xz() {
-       const [zz, tz] = (0, Fz.useState)(!1);
-       return (0, Fz.useLayoutEffect)((() => {
-         let zz = !0;
-         return (0, Wz.d)().then((() => {
-           zz && tz(!0)
-         })), () => {
-           zz = !1
-         }
- ... (2 more removed lines; see GitHub link above)
+   26279: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYKAl+A/FWPlMyCoPHDgAVwBlM2BVKCgoiJWNoRAfgCn8f/HiRYb379/DJd6/f89w8eJFmFMYGJEcjg8wEpAnAwAAXrQYaLXGJNEAAAAASUVORK5CYII="
```

#### 51. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8334-L8347` → after: `L16886-L16887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16886-L16887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16886-L16887) · [Before (L8334-L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8334-L8347)

```diff
-   6151: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Xz
-     });
-     var Fz = sz(65),
-       Wz = sz(44);
- 
-     function Xz(zz, tz) {
-       var sz;
-       const [Xz, Oz] = (0, Fz.useState)(null !== (sz = Wz.f.getItem(zz)) && void 0 !== sz ? sz : tz);
-       return [Xz, tz => {
-         Wz.f.setItem(zz, tz), Oz(tz)
-       }]
-     }
+   26284: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYCASMOIQ/4+uBl3hfwYGBoapRW5wgey+XRjq/tdEmf+fWuT2H6oBGaOahqQImxOIU8SExzOMhBRiKMKmAMNNJAMA3aoc6izMGqMAAAAASUVORK5CYII="
```

#### 52. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8349-L8668` → after: `L16889-L16890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16889-L16890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16889-L16890) · [Before (L8349-L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8349-L8668)

```diff
-   8813: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Nz,
-       f: () => uz
-     });
-     sz(8821);
-     var Fz = sz(1020),
-       Wz = sz.n(Fz),
-       Xz = sz(65),
-       Oz = sz(8785);
- 
-     function oz(zz, tz) {
-       return Math.max(1, Math.round(zz * tz))
-     }
- 
-     function vz(zz, tz, sz) {
- ... (304 more removed lines; see GitHub link above)
+   26293: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYCASMELp/4TUscBYuZmZDAwMDAyTp09nmFrkBleR3bcLRcf/3MzM/1CT0TGqQhiuiTJHVoCpcGqRG1wxMhummAmbw2Hu+v8fYSA2hf9hihgZGeGC6MGDLbgYGUgBAK6tK4y/VDhYAAAAAElFTkSuQmCC"
```

#### 53. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8670-L8760` → after: `L16892-L16893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16892-L16893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16892-L16893) · [Before (L8670-L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8670-L8760)

```diff
-   8823: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Kz,
-       g: () => gz,
-       k: () => Dz
-     });
-     var Fz = sz(8785);
-     const Wz = "XH1-",
-       Xz = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       Oz = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       oz = ["color", "outlineColor"],
-       vz = 1 + 3 * oz.length + Oz.length + 1,
-       Uz = Math.ceil(8 * vz / Math.log2(62)),
-       Kz = Wz.length + Uz;
- 
-     function uz(zz) {
- ... (75 more removed lines; see GitHub link above)
+   26297: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAG5JREFUGJWNkMEJgDAMRV9dyg06hBsU8dKzM3iR4i4u9z1oS9pSMBBCkkd+EvhpblBXy7hBkxQ9AOtxA7gK3EIA4LyuTnlqKwZyTSyyxfdltnm9fIreNmwuQJ10hr8jkLqhnZT0UgI0+mOZnA96AIdzLQp2ax3XAAAAAElFTkSuQmCC … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8762-L8888` → after: `L16895-L16896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16895-L16896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16895-L16896) · [Before (L8762-L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8762-L8888)

```diff
-   8785: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Fz,
-       h: () => Wz,
-       l: () => Xz,
-       n: () => Uz,
-       q: () => vz,
-       u: () => Kz,
-       v: () => oz,
-       y: () => Oz
-     });
-     const Fz = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
- ... (111 more removed lines; see GitHub link above)
+   26303: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAG5JREFUGJWNj7ENgDAMBM8sxQYMwQYWSpOaGeiyDMs9BaA4ECRcxfb58w8/yz7mejL2saTkCYBl2wFsiMvkTnKPQP+75K5L+VaP72YgQOs8Pg8qWPLUKIVegBqPVwBFj5Jq9E5qOxlhZi/wZSceHjQHMAauCiMVAAAAAElFTkSuQmCC … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8890-L8928` → after: `L16898-L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16898-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16898-L16941) · [Before (L8890-L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8890-L8928)

```diff
-   8826: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => uz,
-       f: () => Nz
-     });
-     var Fz = sz(65),
-       Wz = sz(44),
-       Xz = sz(8823),
-       Oz = sz(8785);
-     const oz = "crosshairCode";
-     let vz = null;
-     const Uz = new Set;
- 
-     function Kz() {
-       if (null === vz) {
-         var zz;
- ... (23 more removed lines; see GitHub link above)
+   26311: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAF5JREFUGJWNjrENADEIA53Xj5Edsn/nFejZgSo13zwRUSIlbkDGOgNcqvzTT94Tm4iAZAScJERkJN+Mr7VCVdF7X6oHsbW2HLMXxALAd6T4eao2s11wrj6ppN0vMmd9U+YcBwRrO08AAAAASUVORK5CYII="
+   },
+   26319: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHZJREFUGJVjYCASMOIQ/4+uBpvC/2u6ghgYGBgYnj37xJA3YQ8DAwMDIxMuRQwMDAxSUnxwNorCYGslnG5EVvjf3lSJ4dmzT3CBkLJ1cOexIOu6duMlg5aGOMPyjRcY1h69h9UP/2uizP9DffsfXRJFISEFRAMARWgf0inTdnYAAAAA … [truncated]
+   },
+   26327: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJBJREFUGJWNjjEOgkAURN9acAAusPUaei/hGai1sfEEXoFGakoTOsId7I3UFrYcwGYsdDcsaGC6mbw/f2ChDICkjzFG/zgDYNOER/9S3bQ8L8eIOFRdKARQ3bQqcidA3gNy6010GKDT1kaQB1fjMdnuzK3cA9Ddr5PNKnIXmnwzIJsm … [truncated]
+   },
+   26330: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJWN0C0OgDAMgNFvCZfhBNwAQXA4xPwECDSnGCHzeBzhKhynCBhhEH6aNK14bdLCz1B7lS8X+a4yBoDOOayOD1EPSzAhlTGybxZAxmn2fQh9tmXyDq2OD9w3abAdIDrrcZoBKPJsmxZBqe3eAHpwRXB/z9O7FH9jBRTyMcJ5 … [truncated]
+   },
+   26332: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJVJREFUGJWNjjEOgkAURN8awwG4wNZr7L2D2c6e2oqGE3AFGntKEjqyV6G2oPUANkOhS4Ks0Z/8Yibvz3z4cwyApJcwRt84A2DzjPvjqX4ITF21Isp2XAIB1A9BTeEEKGpA7nACYB/Jqaso25Ha22T3LmUerzcu/pw8UFM49UNYKmtv … [truncated]
+   },
+   26340: vv => {
+ ... (28 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L8930-L9071` → after: `L16943-L16944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16943-L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16943-L16944) · [Before (L8930-L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L8930-L9071)

```diff
-   8381: (zz, tz, sz) => {
-     function Fz(zz) {
-       return {
-         x: (zz.left + zz.right) / 2,
-         y: (zz.top + zz.bottom) / 2
-       }
-     }
- 
-     function Wz(zz) {
-       return 0 === zz.length ? null : zz.reduce(((zz, tz) => ({
-         left: Math.min(zz.left, tz.left),
-         top: Math.min(zz.top, tz.top),
-         right: Math.max(zz.right, tz.right),
-         bottom: Math.max(zz.bottom, tz.bottom)
-       })))
-     }
- ... (126 more removed lines; see GitHub link above)
+   26398: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEVJREFUGJVjYCASMOKR+4+sjgmXokkFLgyTClzgArgUMly78ZKgc/5neOj+h1r9H6eimihzvAqIVzSpwIWgIgZC7iEJAAAMlxpWTWYUkwAAAABJRU5ErkJggg=="
```

#### 57. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9073-L9077` → after: `L16946-L16947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16946-L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16946-L16947) · [Before (L9073-L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9073-L9077)

```diff
-   8732: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Fz
-     });
-     const Fz = new Set(["chunkBorders"])
+   26401: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAIVJREFUGJVjYCASMCKx/+NTA1P4/8jWCoZvH74wcAnwMDAwMMDZNt4dDAwMDIwsMG3fPnxheHr7BQM/PxsDAwMDw8ePvxikVSXgxjIR60aYQka36Clwkz5+/MXAwMDAABVDcSPcQ1OKvRkYGBgYcnq3osij+NrK1hFF17HD+7GaiDd4 … [truncated]
```

#### 58. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9079-L9125` → after: `L16949-L16950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16949-L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16949-L16950) · [Before (L9079-L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9079-L9125)

```diff
-   8723: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       ALL_DEV_TOOLS: () => Oz,
-       coreDevTools: () => Uz,
-       devTools: () => vz
-     });
-     var Fz = sz(601),
-       Wz = sz(1279),
-       Xz = sz(8732);
-     const Oz = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function oz() {
-       const {
-         noaDevTools: zz
-       } = await sz.e(230).then((() => sz(40160)));
-       return zz
-     }
- ... (31 more removed lines; see GitHub link above)
+   26404: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYCASMCKx/+NTw4is6MDSDgZZKSG4isfP3jE4RFegGPi/Jsr8P1QDHN/dPwvGZmCCqRQT42WoiTLH5iQM8B/NnSgmsmDxyH8GBgaGu/tnMTx+9g4uCFPIUBNlziAmxsvAwMDAoGfqwsDAwIDiEUYsJmIEDUkAANxRJq39 … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9127-L9258` → after: `L16952-L16953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16952-L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16952-L16953) · [Before (L9127-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9127-L9258)

```diff
-   8897: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz,
-       d: () => Wz,
-       e: () => Kz
-     });
-     var Fz = sz(1521);
- 
-     function Wz(zz) {
-       var tz;
-       return {
-         ...Oz.store,
-         yaw: Oz.store.yaw + (null !== (tz = Fz.d[zz].previewYaw) && void 0 !== tz ? tz : 0)
-       }
-     }
-     const Xz = {
- ... (116 more removed lines; see GitHub link above)
+   26413: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFVJREFUGJVjYCASMCKx/+ORQ1U4tcgNzsnu24Uiz4JuxfMXH7FazYTLTTVR5ijOYUST/4+kiKFl2Ulsahj+10SZ/4cqhmEM8H9qkRtOSXQrCSoiCgAAk0QaJvW1tvAAAAAASUVORK5CYII="
```

#### 60. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9260-L9294` → after: `L16955-L16956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16955-L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16955-L16956) · [Before (L9260-L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9260-L9294)

```diff
-   8891: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Fz.b,
-       c: () => Fz.d,
-       f: () => Fz.e
-     });
-     var Fz = sz(8897);
-     class Wz {
-       constructor(zz) {
-         this.load = zz, this.loaded = null, this.loading = null
-       }
-       run(zz) {
-         return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
-           throw this.loading = null, zz
-         })), this.loading.then(zz))
-       }
- ... (19 more removed lines; see GitHub link above)
+   26420: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAADxJREFUGJVjYCASMKLx/+OSQ+b8n1rkBudk9+3CZhDcNDiuiTKHsXECZEU4Ff6fWuRG2CSqKWIg5B6SAADfTh/v5gI5YgAAAABJRU5ErkJggg=="
```

#### 61. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9296-L9307` → after: `L16958-L16959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16958-L16959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16958-L16959) · [Before (L9296-L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9296-L9307)

```diff
-   6237: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Wz,
-       g: () => Xz
-     });
-     var Fz = sz(44);
-     const Wz = "shaderPack";
-     async function Xz() {
-       var zz;
-       let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (zz = await Fz.e.getItem(Wz, tz)) && void 0 !== zz ? zz : null
-     }
+   26427: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAR0lEQVR4nGNgoCX4D8VYASNM0ZGtFWCGjXcHVjUsMN63D1/A9JRibwY1I0W4KrfoKSBbGOEKYSCndytcAzcvJ1FuxOtmOgIARkcT/4g+r8UAAAAASUVORK5CYII="
```

#### 62. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9309-L9315` → after: `L16961-L16962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16961-L16962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16961-L16962) · [Before (L9309-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9309-L9315)

```diff
-   8752: (zz, tz, sz) => {
-     function Fz(zz, tz) {
-       return zz && !tz
-     }
-     sz.d(tz, {
-       d: () => Fz
-     })
+   26429: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAF1JREFUGJVjYCASMKLx/+OSR1b4f2qRG4qq7L5d2Axj+I+Ma6LM/08tcoPxGZjQrGFkYGBgqIkyZ2hZdhLFFCYGVPB/apEbhiJ0hf+nFrnhdBeyIrh70NyM1SOUAwDuYiHjdCJOsgAAAABJRU5ErkJggg=="
```

#### 63. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9317-L9363` → after: `L16964-L16965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16964-L16965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16964-L16965) · [Before (L9317-L9363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9317-L9363)

```diff
-   8771: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Xz
-     });
-     var Fz = sz(1060);
- 
-     function Wz() {
-       var zz, tz;
-       return null !== (zz = null === (tz = screen.orientation) || void 0 === tz ? void 0 : tz.type) && void 0 !== zz ? zz : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
-     const Xz = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
- ... (31 more removed lines; see GitHub link above)
+   26435: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE5JREFUGJVjYCASMOIQ/4+ujgWboqlFbnBOdt8uBgYGBgYmbIqev/jI8PzFRxQJdIWMMBMIgf81Ueb/oSb/x+JWuLXIkkQpwm0lMYqIAgBYxCFvlh8iNwAAAABJRU5ErkJggg=="
```

#### 64. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9365-L9438` → after: `L16967-L16968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16967-L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16967-L16968) · [Before (L9365-L9438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9365-L9438)

```diff
-   8376: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => oz,
-       e: () => vz
-     });
-     var Fz = sz(30),
-       Wz = sz(1293),
-       Xz = sz(106);
-     const Oz = {
-       blockMined: {
-         pattern: [18],
-         priority: 1,
-         minGapMs: 120
-       },
-       hitLanded: {
-         pattern: [20],
- ... (58 more removed lines; see GitHub link above)
+   26443: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFdJREFUGJVjYCASMOKR+4+sjgmXoqlFbgxTi9zgAtgU/kdWgG413BpkRdl9u+Bq4CbWRJkzMDAwMDx/8RFDEYaVNVHm/6Gm/8emAEURkmLsCpEk8SokCABqByCJOIXmgQAAAABJRU5ErkJggg=="
```

#### 65. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9440-L9489` → after: `L16970-L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16970-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16970-L16971) · [Before (L9440-L9489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9440-L9489)

```diff
-   8744: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => bz,
-       e: () => Nz
-     });
-     var Fz = sz(30),
-       Wz = sz(1636),
-       Xz = sz(44),
-       Oz = sz(1319),
-       oz = sz(3330),
-       vz = sz(1447),
-       Uz = sz(1358);
-     const Kz = 2592e5,
-       uz = "notificationOptInLastPromptedAt";
-     async function Nz() {
-       var zz;
- ... (34 more removed lines; see GitHub link above)
+   26447: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMxSURBVFiF1ZdNSBRhGMd/fuzOzq46ukiJxB7yIATSrUt08GY3I4JOoR08GHTp0KlrUCCd8hCCEnYSOkRQdEgkkUSpQCSEkhJXU2y/3F1ndN3tsL6vM7vv7FdW9Jxmnhme/+/5v8+7+w78z2EYRs4wjNzv … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9491-L9513` → after: `L16973-L16974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16973-L16974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16973-L16974) · [Before (L9491-L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9491-L9513)

```diff
-   8755: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => oz,
-       g: () => vz
-     });
-     var Fz = sz(30);
-     const Wz = 24,
-       Xz = "farNametags",
-       Oz = 1e5;
- 
-     function oz() {
-       var zz;
-       return null === (zz = Fz.b.get("showDistantNametags")) || void 0 === zz || zz
-     }
- 
-     function vz() {
- ... (7 more removed lines; see GitHub link above)
+   26449: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAClJREFUGJVjYKAS+A/FDEz4FP3//5+wSadKT8FNGyyKoC4n6HqiFBEFAHyUIg2rIQYUAAAAAElFTkSuQmCC"
```

#### 67. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9515-L9761` → after: `L16976-L16977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16976-L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16976-L16977) · [Before (L9515-L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9515-L9761)

```diff
-   8874: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Wz,
-       f: () => Oz
-     });
-     const Fz = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
-       threshold: 10n ** 171n,
- ... (231 more removed lines; see GitHub link above)
+   26454: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAW0lEQVR4nGNgwA7+QzGMzcCETdGBw8cZFixbB2eDaGwKwSAhKgiFz4LNtAePnzNATWJYt3E7hkK4onPnLqCbyMiITdGkniawJLJKkBsJKkLxNT5FKJ5ACjfKAAAopTtqRlgRmAAAAABJRU5ErkJggg=="
```

#### 68. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9763-L9963` → after: `L16979-L16980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16979-L16980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16979-L16980) · [Before (L9763-L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9763-L9963)

```diff
-   8856: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Kz,
-       g: () => Nz,
-       k: () => uz,
-       o: () => Oz,
-       r: () => Uz,
-       u: () => vz
-     });
-     var Fz = sz(321);
-     const Wz = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       Xz = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
-         },
-         "Attack Speed": {
- ... (185 more removed lines; see GitHub link above)
+   26460: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L9965-L9998` → after: `L16982-L16983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16982-L16983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16982-L16983) · [Before (L9965-L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L9965-L9998)

```diff
-   8279: (zz, tz, sz) => {
-     function Fz(zz, tz) {
-       return !zz.hidden && (tz || !zz.isRewardedAd)
-     }
- 
-     function Wz(zz) {
-       return "object" === typeof zz ? zz.option : zz
-     }
- 
-     function Xz(zz, tz) {
-       var sz;
-       if ("dropdown" === (null === (sz = zz.userInput) || void 0 === sz ? void 0 : sz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
-         for (const sz of zz.userInput.dropdownOptions)
-           if (Wz(sz) === tz) return "object" === typeof sz ? sz.cost : zz.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", tz)
-       }
- ... (18 more removed lines; see GitHub link above)
+   26469: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 70. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L10000-L10001` → after: `L16985-L16986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16985-L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16985-L16986) · [Before (L10000-L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L10000-L10001)

```diff
-   8799: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
+   26478: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANUlEQVR4nGNgwAT/oRgv+P//xfz//y874FX8H6YIhhlwKEZRRBWFKIqJ8hAximAKiQbkmwgAbqlC6CbMsIMAAAAASUVORK5CYII="
```

#### 71. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L10003-L10004` → after: `L16988-L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16988-L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16988-L16989) · [Before (L10003-L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L10003-L10004)

```diff
-   8804: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5E … [truncated]
+   26484: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkUrDlYUUchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ttIjx4Lgf7+497t4BQq3EVNM3AaiaZSSiETGdWRX9r+jGAHzox4jETD2WXEzBdXzdw8PXuzDP … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L10006-L10007` → after: `L16991-L17025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R16991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L16991-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/97.js#L16991-L17025) · [Before (L10006-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/97.js#L10006-L10007)

```diff
-   8809: zz => {
-     zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   26487: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYKAA/IdiFMCEVeVlBwZ0xTCF/9FNQlfMCBOHSmAARt0DDAwMDIxYrcaqAclqdDfCTcOl+f//yw5YfY6hkBhFOAEA/0YaM1Y8FzcAAAAASUVORK5CYII="
+   },
+   26492: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAe0lEQVR4nGNgoBD8JwEzoPP//385H4IvO+DEMA2/XxmAMapmPBphmn+/Mvj/eZUKGCM0E9AI0/wZqhFFMwzj1PxyPk7NMIDdAGh4wOQ/49CMYgixoY0M/j9asOD/OQkJDIzLJoIaCWn+j6wR3bkENZ/DbQNhJxOjaPAA … [truncated]
+   },
+   26496: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGhJREFUGJVjYCASMOKR+4+sjgmXov9XPRn+X/UkaMr/pIzC/2imopgCk/z//6onMh/uxv/YrPn77SUDi+k5BgYGBkYWZEGj1H8MDAwMDOdmM8HZMADzDCNUJwMDAwMDMhufZ/5jYRMPAHtSLUeUdSEOAAAAAElFTkSuQmCC"
+   },
+   26501: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
+   },
+   26506: vv => {
+     vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
+   },
+   26514: vv => {
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/98.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/98.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1)

#### 1. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L2)

```diff
- export const ids = [98];
+ export const ids = [98, 185];
```

#### 2. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L4)

```diff
-   4519: (zz, tz, sz) => {
+   8880: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L6-L22` → after: `L6-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L6-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L6-L1679) · [Before (L6-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L6-L22)

```diff
-       default: () => rz
-     });
-     var Fz = sz(1493),
-       Wz = sz(65),
-       Xz = sz(1173),
-       Oz = sz(1116),
-       oz = sz(1106),
-       vz = sz(2014),
-       Uz = sz(1483),
-       Kz = sz(1306),
-       uz = sz(1100),
-       Nz = sz(30),
-       bz = sz(1419),
-       wz = sz(1036),
-       Dz = sz(2372),
-       gz = sz(1506),
- ... (1 more removed lines; see GitHub link above)
+       EverythingMenu: () => gp
+     });
+     var hv = Pv(52),
+       Sv = Pv(1035),
+       ev = Pv.n(Sv),
+       gv = Pv(1175),
+       pv = Pv(1042),
+       dv = Pv(2008),
+       Nv = Pv(1442),
+       lv = Pv(1095),
+       Tv = Pv(1082);
+ 
+     function Wv(vv) {
+       let {
+         items: zv,
+         link: Pv,
+ ... (1658 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L24-L26` → after: `L1681-L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1681-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1681-L1708) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L24-L26)

```diff
-         id: "myGames",
-         icon: "joystick",
-         title: "studio:myGames"
+         id: "default",
+         settings: pP.f
+       }, {
+         id: "cross",
+         settings: OP({
+           color: 5046092,
+           lines: !0,
+           lineLength: 7,
+           lineThickness: 2,
+           gap: 3
+         })
+       }, {
+         id: "crossDot",
+         settings: OP({
+           color: 65535,
+           lines: !0,
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L28-L30` → after: `L1710-L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1710-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1710-L1736) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L28-L30)

```diff
-         id: "leaderboard",
-         icon: "trophy",
-         title: "studio:leaderboard"
+         id: "circle",
+         settings: OP({
+           circle: !0,
+           circleRadius: 12,
+           circleThickness: 1.5,
+           dot: !0,
+           dotSize: 2
+         })
+       }, {
+         id: "tShape",
+         settings: OP({
+           color: 16731391,
+           lines: !0,
+           lineLength: 7,
+           lineThickness: 2,
+           gap: 3,
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L32-L34` → after: `L1738-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1738-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1738-L1745) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L32-L34)

```diff
-         id: "docs",
-         icon: "file-lines",
-         title: "general:docs"
+         id: "bold",
+         settings: OP({
+           lines: !0,
+           lineLength: 10,
+           lineThickness: 3,
+           gap: 0,
+           outline: 1.5
+         })
```

#### 7. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L36-L40` → after: `L1747-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1747-L1748) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L36-L40)

```diff
-       Pz = {
-         myGames: "/studio",
-         leaderboard: "/studio/leaderboard",
-         docs: "/studio/docs"
-       };
+       KP = ["growOnClick", "forGuns"];
+     var VP = Pv(8970);
```

#### 8. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L42` → after: `L1750-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1750-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1750-L1780) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L42)

```diff
-     function rz() {
+     function UP(vv) {
+       let {
+         label: zv,
+         selected: Pv,
+         onClick: hv,
+         className: Sv,
+         style: gv,
+         children: pv
+       } = vv;
+       return (0, Tv.jsx)("button", {
+         type: "button",
+         role: "radio",
+         "aria-checked": Pv,
+         title: zv,
+         "aria-label": zv,
+         "data-pad-focusable": !0,
+ ... (15 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L45-L59` → after: `L1783-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1783-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1783-L1880) · [Before (L45-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L45-L59)

```diff
-       } = (0, Xz.B)(), tz = (0, Uz.useNavigatePreserveSearch)(), sz = (0, Fz.s)(), {
-         isUserContextUpdating: rz
-       } = (0, Oz.b)(), Yz = (0, vz.c)(), xz = (0, oz.i)(), mz = (Jz = sz.pathname).startsWith(gz.p) ? null : Jz.startsWith(Pz.docs) ? "docs" : Jz.startsWith(Pz.leaderboard) ? "leaderboard" : "myGames";
-       var Jz;
-       const Iz = function(zz) {
-         if (!zz.startsWith(gz.p)) return {
-           title: "studio:leaveStudio",
-           icon: "left-from-bracket",
-           to: "/"
-         };
-         const tz = (0, Uz.getPreviousLocation)();
-         return {
-           title: "general:back",
-           icon: "arrow-left",
-           to: null !== tz && tz.startsWith(Pz.myGames) ? -1 : Pz.myGames
+       } = (0, gv.x)();
+       return (0, Tv.jsxs)("div", {
+         className: "CrosshairBackdrops",
+         role: "radiogroup",
+         "aria-label": Sv("crosshairSettings:background"),
+         children: [hv && (0, Tv.jsx)(UP, {
+           label: Sv("crosshairSettings:bg_game"),
+           selected: hv.selected,
+           onClick: hv.onSelect,
+           className: "CrosshairGameSwatch",
+           children: (0, Tv.jsx)(pv.b, {
+             name: "cube"
+           })
+         }), fP.map((vv => (0, Tv.jsx)(UP, {
+           label: Sv(`crosshairSettings:bg_${vv}`),
+           selected: !(null !== hv && void 0 !== hv && hv.selected) && vv === zv,
+ ... (82 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L61-L71` → after: `L1882-L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1882-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1882-L1991) · [Before (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L61-L71)

```diff
-       }(sz.pathname);
-       return (0, Wz.useEffect)((() => {
-         Nz.b.set({
-           gameState: "studio",
-           openEverythingMenuName: null
-         })
-       }), []), (0, Hz.jsxs)("div", {
-         className: "StudioLayout AnimFadeIn",
-         children: [Yz && (0, Hz.jsx)("aside", {
-           className: "StudioLayoutLeft",
-           children: (0, Hz.jsx)(Dz.e, {})
+       }), [gv]);
+       const Nv = Pv || gv;
+       return {
+         view: {
+           pressed: Nv,
+           spread: Nv && vv.forGuns && !vv.growOnClick ? 6 : 0
+         },
+         handlers: {
+           onPointerDown: vv => {
+             !vv.target.closest(zv) && (0, tP.b)(vv.currentTarget, vv.pointerId) && Sv(!0)
+           },
+           onPointerUp: ev,
+           onPointerCancel: ev,
+           onLostPointerCapture: ev
+         }
+       }
+ ... (94 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L73` → after: `L1993-L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1993-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1993-L1995) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L73)

```diff
-           className: "StudioLayoutRight",
+           className: ev()("CrosshairFullScreenPanel", {
+             Collapsed: !jv
+           }),
```

#### 12. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L75-L82` → after: `L1997-L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L1997-L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L1997-L2133) · [Before (L75-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L75-L82)

```diff
-             className: "StudioTop",
-             children: [(0, Hz.jsx)(uz.d, {
-               show: !0,
-               socialBarIsDocked: Yz
-             }), (0, Hz.jsxs)("nav", {
-               className: "StudioNav",
-               children: [(0, Hz.jsx)(bz.e, {
-                 icon: Iz.icon,
+             className: "CrosshairFullScreenBar",
+             children: [(0, Tv.jsx)(RP, {
+               backdrop: Sv,
+               onChange: vv => {
+                 Gv(!1), dv(vv)
+               },
+               game: lv ? {
+                 selected: mv,
+                 onSelect: () => {
+                   Gv(!0)
+                 }
+               } : void 0
+             }), (0, Tv.jsx)(Nv.K, {
+               className: "CrosshairPanelToggle",
+               ariaLabel: av(jv ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
+               onClick: () => {
+ ... (121 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L84` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L2135) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L84)

```diff
-                   tz(Iz.to)
+                   Cv(!0)
```

#### 14. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L86-L98` → after: `L2137-L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2137-L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L2137-L2229) · [Before (L86-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L86-L98)

```diff
-                 children: zz(Iz.title)
-               }), (0, Hz.jsx)("div", {
-                 className: "StudioNavTabs",
-                 children: Bz.map((sz => (0, Hz.jsxs)(bz.Q, {
-                   active: mz === sz.id,
-                   href: Pz[sz.id],
-                   onClick: () => {
-                     tz(Pz[sz.id])
-                   },
-                   children: [(0, Hz.jsx)(wz.c, {
-                     name: sz.icon
-                   }), !xz && zz(sz.title)]
-                 }, sz.id)))
+                 children: [(0, Tv.jsx)(pv.b, {
+                   name: "expand"
+                 }), " ", Pv("crosshairSettings:fullScreen")]
+               })]
+             })
+           })
+         }), (0, Tv.jsx)("div", {
+           className: "SettingBox",
+           children: (0, Tv.jsx)(xP, {
+             settings: lv,
+             touch: Sv,
+             backdrop: Wv,
+             onChange: MP.d
+           })
+         }), (0, Tv.jsx)(HP, {
+           settings: lv,
+ ... (77 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L101-L108` → after: `L2280-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L2280-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/98.js#L2280-L2300) · [Before (L101-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/98.js#L101-L108)

```diff
-           }), (0, Hz.jsxs)("main", {
-             className: "StudioBottom",
-             children: [rz && (0, Hz.jsx)("div", {
-               className: "StudioCentredMessage",
-               children: (0, Hz.jsx)(Kz.d, {})
-             }), !rz && (0, Hz.jsx)("div", {
-               className: "StudioContent",
-               children: (0, Hz.jsx)(Fz.d, {})
+           }), vv.enableClipping && !Sv && av && !zv && (0, Tv.jsx)("div", {
+             className: "ReplayViewerCategoryHint",
+             children: "Clip buffer is filling \u2014 play for a moment, then save."
+           }), zv && (0, Tv.jsx)("div", {
+             className: "ReplayViewerCategoryHint",
+             children: "Clipping pauses while a full recording is active."
+           })]
+         }), (0, Tv.jsxs)("div", {
+           className: "SettingBox",
+           children: [(0, Tv.jsxs)(Nv.d, {
+             className: "ReplayViewerCategoryButton",
+             onClick: function() {
+               (0, kP.i)(!0), Yv.c.set({
+                 openEverythingMenuName: null
+               })
+             },
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 1. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L4-L47` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/99.js#L4) · [Before (L4-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/99.js#L4-L47)

```diff
-   4539: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Nz
-     });
-     var Fz = sz(1020),
-       Wz = sz.n(Fz),
-       Xz = sz(1036),
-       Oz = sz(1306),
-       oz = sz(3169),
-       vz = sz(133),
-       Uz = sz(3215),
-       Kz = sz(3202),
-       uz = sz(1087);
- 
-     function Nz(zz) {
-       let {
- ... (28 more removed lines; see GitHub link above)
+   4641: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L51-L72` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/99.js#L8-L40) · [Before (L51-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/99.js#L51-L72)

```diff
-     sz(4531);
-     var Fz = sz(65),
-       Wz = sz(1020),
-       Xz = sz.n(Wz),
-       Oz = sz(308),
-       oz = sz(1001),
-       vz = sz(1213),
-       Uz = sz(1173),
-       Kz = sz(1116),
-       uz = sz(1466),
-       Nz = sz(4539),
-       bz = sz(1419),
-       wz = sz(4542),
-       Dz = sz(1306),
-       gz = sz(1483),
-       Hz = sz(4287),
- ... (6 more removed lines; see GitHub link above)
+     var hv = Pv(1505),
+       Sv = Pv(52),
+       ev = Pv(1175),
+       gv = Pv(1108),
+       pv = Pv(1095),
+       dv = Pv(2015),
+       Nv = Pv(1492),
+       lv = Pv(1327),
+       Tv = Pv(1089),
+       Wv = Pv(22),
+       wv = Pv(1442),
+       av = Pv(1042),
+       sv = Pv(2413),
+       Cv = Pv(1529),
+       iv = Pv(1082);
+     const cv = [{
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L77-L114` → after: `L45-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L45-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/99.js#L45-L98) · [Before (L77-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/99.js#L77-L114)

```diff
-       } = (0, Uz.B)(), tz = (0, gz.useNavigatePreserveSearch)(), sz = (0, rz.k)(), Wz = (0, Fz.useMemo)((() => [...Pz.d].sort(((tz, Fz) => {
-         var Wz, Xz;
-         const Oz = (null !== (Wz = (0, rz.c)(Fz, sz)) && void 0 !== Wz ? Wz : 0) - (null !== (Xz = (0, rz.c)(tz, sz)) && void 0 !== Xz ? Xz : 0);
-         return 0 !== Oz ? Oz : (0, xz.m)(tz, zz).localeCompare((0, xz.m)(Fz, zz))
-       }))), [sz, zz]);
-       return (0, mz.jsxs)(mz.Fragment, {
-         children: [(0, mz.jsx)("div", {
-           className: "StudioPageHeader",
-           children: (0, mz.jsx)("h1", {
-             className: "StudioPageTitle",
-             children: zz("studio:firstPartyGames")
-           })
-         }), (0, mz.jsx)(wz.c, {
-           className: "StudioTable AnimFadeIn",
-           columns: [{
-             key: "game",
- ... (22 more removed lines; see GitHub link above)
+       } = (0, ev.x)(), zv = (0, Nv.useNavigatePreserveSearch)(), Pv = (0, hv.p)(), {
+         isUserContextUpdating: mv
+       } = (0, gv.d)(), jv = (0, dv.b)(), fv = (0, pv.i)(), Fv = (Yv = Pv.pathname).startsWith(Cv.s) ? null : Yv.startsWith(Gv.docs) ? "docs" : Yv.startsWith(Gv.leaderboard) ? "leaderboard" : "myGames";
+       var Yv;
+       const nv = function(vv) {
+         if (!vv.startsWith(Cv.s)) return {
+           title: "studio:leaveStudio",
+           icon: "left-from-bracket",
+           to: "/"
+         };
+         const zv = (0, Nv.getPreviousLocation)();
+         return {
+           title: "general:back",
+           icon: "arrow-left",
+           to: null !== zv && zv.startsWith(Gv.myGames) ? -1 : Gv.myGames
+         }
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L116-L117` → after: `L100-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L100-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/99.js#L100-L110) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/99.js#L116-L117)

```diff
-             })
-           }
+             })]
+           }), (0, iv.jsxs)("main", {
+             className: "StudioBottom",
+             children: [mv && (0, iv.jsx)("div", {
+               className: "StudioCentredMessage",
+               children: (0, iv.jsx)(lv.c, {})
+             }), !mv && (0, iv.jsx)("div", {
+               className: "StudioContent",
+               children: (0, iv.jsx)(hv.d, {})
+             })]
+           })]
```

#### 5. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L121-L298` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/99.js#L114) · [Before (L121-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/99.js#L121-L298)

```diff
- 
-     function Iz() {
-       const {
-         t: zz
-       } = (0, Uz.B)(), tz = (0, gz.useNavigatePreserveSearch)(), {
-         userContext: sz,
-         isUserContextUpdating: Wz
-       } = (0, Kz.b)(), {
-         isCreating: Pz,
-         create: rz
-       } = (0, Hz.e)(), [Iz, Cz] = (0, Fz.useState)(null), [ez, Zz] = (0, Fz.useState)(null), [Gz, Tz] = (0, Fz.useState)(!1);
-       (0, Fz.useEffect)((() => {
-         Wz || (Tz(!1), uz.d.getPublishedGamePreviews(sz, {
-           searchQuery: null,
-           pageNumber: 1,
-           pageSize: 50,
- ... (162 more removed lines; see GitHub link above)
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (181 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   40204: (zz, tz, sz) => {
+   40416: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var Fz = sz(40211),
-       Wz = sz(37437);
-     class Xz extends((0, Fz.f)(Wz.b)) {}(0, Fz.h)(Wz.b, Xz);
-     var Oz = sz(36560);
-     class oz extends((0, Fz.f)(Oz.i)) {}(0, Fz.h)(Oz.i, oz);
-     var vz = sz(37277);
-     class Uz extends((0, Fz.f)(vz.g)) {}(0, Fz.h)(vz.g, Uz);
-     var Kz = sz(36800),
-       uz = sz(39427),
-       Nz = sz(36794);
-     class bz extends((0, Fz.f)(Nz.f)) {
+     var hv = Pv(40423),
+       Sv = Pv(37536);
+     class ev extends((0, hv.e)(Sv.b)) {}(0, hv.i)(Sv.b, ev);
+     var gv = Pv(36659);
+     class pv extends((0, hv.e)(gv.h)) {}(0, hv.i)(gv.h, pv);
+     var dv = Pv(37384);
+     class Nv extends((0, hv.e)(dv.e)) {}(0, hv.i)(dv.e, Nv);
+     var lv = Pv(36898),
+       Tv = Pv(39560),
+       Wv = Pv(36895);
+     class wv extends((0, hv.e)(Wv.h)) {
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(zz, tz, sz), (0, Kz.i)(zz)
+         super(vv, zv, Pv), (0, lv.j)(vv)
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29)

```diff
-     }(0, Fz.h)(Nz.f, bz), (0, Nz.g)({
-       disableUnusedSpecularTerm: Fz.c,
+     }(0, hv.i)(Wv.h, wv), (0, Wv.j)({
+       disableUnusedSpecularTerm: hv.b,
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var wz = sz(38108);
-     class Dz extends((0, Fz.f)(wz.e)) {}(0, Fz.h)(wz.e, Dz);
-     var gz = sz(38210),
-       Hz = sz(36662),
-       Bz = sz(37583),
-       Pz = sz(36608);
-     class rz extends((0, Fz.f)(gz.e)) {}(0, Fz.h)(gz.e, rz);
-     class Yz extends((0, Fz.f)(Hz.b)) {}(0, Fz.h)(Hz.b, Yz);
-     class xz extends((0, Fz.f)(Bz.l)) {}(0, Fz.h)(Bz.l, xz);
-     class mz extends((0, Fz.f)(Pz.b)) {}(0, Fz.h)(Pz.b, mz)
+     var av = Pv(38226);
+     class sv extends((0, hv.e)(av.g)) {}(0, hv.i)(av.g, sv);
+     var Cv = Pv(38330),
+       iv = Pv(36757),
+       cv = Pv(37662),
+       Gv = Pv(36708);
+     class mv extends((0, hv.e)(Cv.d)) {}(0, hv.i)(Cv.d, mv);
+     class jv extends((0, hv.e)(iv.e)) {}(0, hv.i)(iv.e, jv);
+     class fv extends((0, hv.e)(cv.q)) {}(0, hv.i)(cv.q, fv);
+     class Fv extends((0, hv.e)(Gv.c)) {}(0, hv.i)(Gv.c, Fv)
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   40668: (zz, tz, sz) => {
+   40853: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L61` → after: `L48-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L61) · [Before (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L61)

```diff
-     var Fz = sz(40674),
-       Wz = (sz(39143), sz(40201), sz(39623), sz(40689)),
-       Xz = sz(39010),
-       Oz = sz(36652),
-       oz = sz(36473),
-       vz = sz(40701),
-       Uz = sz(40706),
-       Kz = sz(36605),
-       uz = (sz(40211), sz(40717)),
-       Nz = sz(40715),
-       bz = sz(38137),
-       wz = sz(40726),
-       Dz = sz(39041),
-       gz = sz(38119);
+     var hv = Pv(40861),
+       Sv = (Pv(39275), Pv(40410), Pv(39800), Pv(40871)),
+       ev = Pv(39127),
+       gv = Pv(36745),
+       pv = Pv(36591),
+       dv = Pv(40883),
+       Nv = Pv(40892),
+       lv = Pv(36705),
+       Tv = (Pv(40423), Pv(40906)),
+       Wv = Pv(40898),
+       wv = Pv(38254),
+       av = Pv(40908),
+       sv = Pv(39162),
+       Cv = Pv(38239);
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L63)

```diff
-       Bz = gz.t,
+       cv = Cv.s,
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L65-L67` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L65-L67) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L65-L67)

```diff
-       rz = zz => `gpuParticleSystem[${zz>>2}].${"xyzw"[3&zz]}`,
-       Yz = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${gz.b}\n#define COLOR_POSITIONS ${Pz(Bz.colorPositions)}\n#define COLOR1 ${Pz(Bz.color1)}\n#define COLOR2 ${Pz(Bz.color2)}\n#define VELOCITY ${Pz(Bz.hb)}\n#define REMAP $ … [truncated]
-     Dz.e.ShadersStore[`${Hz}VertexShader`] = Yz, Dz.e.ShadersStore[`${Hz}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       mv = vv => `gpuParticleSystem[${vv>>2}].${"xyzw"[3&vv]}`,
+       jv = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Cv.c}\n#define COLOR_POSITIONS ${Gv(cv.colorPositions)}\n#define COLOR1 ${Gv(cv.color1)}\n#define COLOR2 ${Gv(cv.color2)}\n#define VELOCITY ${Gv(cv.pC)}\n#define REMAP $ … [truncated]
+     sv.d.ShadersStore[`${iv}VertexShader`] = jv, sv.d.ShadersStore[`${iv}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L70-L72` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L70-L72) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L70-L72)

```diff
-     var Jz = sz(38112),
-       Iz = sz(40729);
-     class Cz extends Jz.e {
+     var Yv = Pv(38235),
+       nv = Pv(40916);
+     class Ov extends Yv.c {
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L74)

```diff
-         super(zz, tz, sz), this.renderer = sz, this.Kg = Fz, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(gz.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), thi … [truncated]
+         super(vv, zv, Pv), this.renderer = Pv, this.Is = hv, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Cv.l), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L76-L77` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L76) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L76-L77)

```diff
-             engine: sz,
-             perRow: Fz
+             engine: Pv
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L82-L84` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L81-L83) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L82-L84)

```diff
-             const zz = Math.floor(Oz / Fz),
-               sz = Math.min(tz, (zz + 1) * Fz);
-             Wz.texSubImage2D(Wz.TEXTURE_2D, 0, Oz % Fz * 4, zz, 4 * (sz - Oz), 1, Wz.RGBA_INTEGER, Wz.UNSIGNED_INT, Xz, Oz * gz.f), Oz = sz
+             const vv = Math.floor(ev / Cv.j),
+               Pv = Math.min(zv, (vv + 1) * Cv.j);
+             hv.texSubImage2D(hv.TEXTURE_2D, 0, ev % Cv.j * 4, vv, 4 * (Pv - ev), 1, hv.RGBA_INTEGER, hv.UNSIGNED_INT, Sv, ev * Cv.d), ev = Pv
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L88` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L87) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L88)

```diff
-         const Wz = Fz.FD();
+         const Sv = hv.ma();
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L90-L91` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L90-L91)

```diff
-         const Xz = Math.max(1, tz);
-         this.perRow = Math.min(Xz, 256), this.records = Wz.createRawTexture(null, 4 * this.perRow, Math.ceil(Xz / this.perRow), uz.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, uz.e.TEXTURE_NEAREST_SAMPLINGMODE, null, uz.e.TEXTURETYPE_UNSIGNED_INTEGER)
+         const ev = Math.max(1, zv),
+           gv = Math.min(ev, Cv.j);
+         this.records = Sv.createRawTexture(null, 4 * gv, Math.ceil(ev / gv), Tv.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Tv.d.TEXTURE_NEAREST_SAMPLINGMODE, null, Tv.d.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L94-L95` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L94-L95) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L94-L95)

```diff
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Kg.getAnimationRatio() || 1;
-         const tz = this.Kg.getFrameId();
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Is.getAnimationRatio() || 1;
+         const zv = this.Is.getFrameId();
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L108)

```diff
-         (0, Iz.g)(this, this.uniforms, this.uniformBits, zz);
+         (0, nv.j)(this, this.uniforms, this.uniformBits, vv);
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L111)

```diff
-         (0, Iz.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (tz = this.ramp) || void 0 === tz || tz.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Nz.b.CreateRGBATexture(this.rampTexels.texels, gz.k, … [truncated]
+         (0, nv.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zv = this.ramp) || void 0 === zv || zv.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Wv.e.CreateRGBATexture(this.rampTexels.texels, Cv.i, … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L120)

```diff
-         this.Kg = zz, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, wz.c)(), this.engine = zz.FD(), this.effect = this.createEffec … [truncated]
+         this.Is = vv, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, av.d)(), this.engine = vv.ma(), this.effect = this.createEffec … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L123-L126` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L123-L126) · [Before (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L123-L126)

```diff
-         const sz = 256 * this.engine.getCaps().maxTextureSize;
-         tz > sz && this.warnOnce(`capacity:${zz}`, `particle system ${zz} holds ${sz} particles, not ${tz}: its records texture's limit`);
-         const Fz = new Cz(zz, Math.min(tz, sz), this, this.Kg);
-         return this.Kg.addParticleSystem(Fz), Fz
+         const Pv = Cv.j * this.engine.getCaps().maxTextureSize;
+         zv > Pv && this.warnOnce(`capacity:${vv}`, `particle system ${vv} holds ${Pv} particles, not ${zv}: its records texture's limit`);
+         const hv = new Ov(vv, Math.min(zv, Pv), this, this.Is);
+         return this.Is.addParticleSystem(hv), hv
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const Fz of (0, bz.l)(zz.blendMode))
+         for (const hv of (0, wv.i)(vv.blendMode))
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.Kg._toBeDisposed.push(zz)
+         this.Is._toBeDisposed.push(vv)
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.Kg.removeParticleSystem(zz), zz.releaseGl()
+         this.Is.removeParticleSystem(vv), vv.releaseGl()
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           Kg: Fz,
+           Is: hv,
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           oz = null !== (tz = zz.ramp) && void 0 !== tz ? tz : this.whiteRamp;
+           pv = null !== (zv = vv.ramp) && void 0 !== zv ? zv : this.whiteRamp;
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const vz of (0, bz.l)(zz.blendMode)) {
+         for (const dv of (0, wv.i)(vv.blendMode)) {
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           sz.enableEffect(tz), tz.setTexture("gpuParticleTexture", zz.texture.mirror), tz.setTexture("gpuParticleRampTexture", oz), tz._bindTexture("gpuParticleRecords", zz.records), tz.setMatrix("gpuParticleView", Fz.getViewMatrix()), tz.setMatrix("gpuParticleProjection", Fz.get … [truncated]
+           Pv.enableEffect(zv), zv.setTexture("gpuParticleTexture", vv.texture.mirror), zv.setTexture("gpuParticleRampTexture", pv), zv._bindTexture("gpuParticleRecords", vv.records), zv.setMatrix("gpuParticleView", hv.getViewMatrix()), zv.setMatrix("gpuParticleProjection", hv.get … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L158)

```diff
-         return sz.setAlphaMode(uz.e.ALPHA_DISABLE), Oz
+         return Pv.setAlphaMode(Tv.d.ALPHA_DISABLE), gv
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L166)

```diff
-         return zz === bz.e ? this.multiplyEffect : this.effect
+         return vv === wv.c ? this.multiplyEffect : this.effect
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L175-L176` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L175-L176) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L175-L176)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${zz}`);
-           for (const zz of this.Kg.lY.slice()) zz instanceof Cz && zz.disposeOnStop && zz.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${vv}`);
+           for (const vv of this.Is.mF.slice()) vv instanceof Ov && vv.disposeOnStop && vv.dispose()
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L180-L196` → after: `L180-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L180-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L180-L196) · [Before (L180-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L180-L196)

```diff
-     var Zz = sz(39353),
-       Gz = sz(40192),
-       Tz = sz(39121),
-       cz = sz(39314),
-       jz = sz(39312),
-       Az = sz(39252),
-       yz = sz(40249),
-       Mz = sz(36985),
-       dz = sz(40734),
-       hz = sz(40742),
-       Qz = sz(40746),
-       kz = sz(39270),
-       iz = sz(36879),
-       Lz = sz(36874),
-       lz = sz(39475),
-       nz = sz(36949),
- ... (1 more removed lines; see GitHub link above)
+     var Kv = Pv(39506),
+       Vv = Pv(40408),
+       Uv = Pv(39257),
+       Rv = Pv(39468),
+       xv = Pv(39459),
+       tv = Pv(39387),
+       qv = Pv(40469),
+       Iv = Pv(37100),
+       Qv = Pv(40924),
+       Zv = Pv(40929),
+       Av = Pv(40931),
+       Lv = Pv(39413),
+       Hv = Pv(36983),
+       Mv = Pv(36976),
+       yv = Pv(39611),
+       Bv = Pv(37067),
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L199-L200)

```diff
-       if (zz.visibility < 1 || !zz.isVisible || !zz.isEnabled() || zz.metadata[az.h] || !zz.isReady()) return !0;
-       const tz = zz.kY;
+       if (vv.visibility < 1 || !vv.isVisible || !vv.isEnabled() || vv.metadata[Jv.f] || !vv.isReady()) return !0;
+       const zv = vv.sF;
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L204)

```diff
-           Wz = Fz.vD();
+           Sv = hv.na();
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L211)

```diff
-         this.CN = zz, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, tz.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.vW = vv, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zv.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L221-L224` → after: `L221-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L221-L224) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L221-L224)

```diff
-           CN: Fz
-         } = this, Wz = null === (tz = Fz.AY) || void 0 === tz ? void 0 : tz.visibility;
-         if (!Wz || !zz || Fz.mD.JD) return !1;
-         if (!(Fz.PN.Ssz[0] >= nz.e)) return !1;
+           vW: hv
+         } = this, Sv = null === (zv = hv.SF) || void 0 === zv ? void 0 : zv.visibility;
+         if (!Sv || !vv || hv.Ma.ya) return !1;
+         if (!(hv.oT.CPv[0] >= Bv.g)) return !1;
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L227)

```diff
-         const Oz = Fz.nN,
+         const gv = hv.iW,
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L230)

```diff
-         return vz[0] = oz.x + Oz[0], vz[1] = oz.y + Oz[1], vz[2] = oz.z + Oz[2], !!Wz.eyeClear(vz[0], vz[1], vz[2], zz.minZ, Xz, Fz.PN) && (this.vis = Wz, this.passable.clear(), this.count = 0, !0)
+         return dv[0] = pv.x + gv[0], dv[1] = pv.y + gv[1], dv[2] = pv.z + gv[2], !!Sv.eyeClear(dv[0], dv[1], dv[2], vv.minZ, ev, hv.oT) && (this.vis = Sv, this.passable.clear(), this.count = 0, !0)
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L251-L252)

```diff
-           PN: oz
-         } = this.CN, [vz, Uz] = oz.Ssz, Kz = null !== sz && sz.update(Fz[0], Fz[1], Fz[2], oz.K9, vz, Uz, this.passable);
+           oT: pv
+         } = this.vW, [dv, Nv] = pv.CPv, lv = null !== Pv && Pv.update(hv[0], hv[1], hv[2], pv.O4, dv, Nv, this.passable);
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L263` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L263) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L263)

```diff
-           kz.h.prototype.push.call(zz, Fz)
+           Lv.g.prototype.push.call(vv, hv)
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L268-L273` → after: `L268-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L268-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L268-L273) · [Before (L268-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L268-L273)

```diff
-     var Vz = sz(36934),
-       Rz = sz(36888),
-       pz = sz(39451),
-       fz = sz(40752),
-       Ez = sz(39458),
-       zt = sz(39374);
+     var bv = Pv(37053),
+       rv = Pv(36997),
+       kv = Pv(39593),
+       Xv = Pv(40935),
+       uv = Pv(39598),
+       vz = Pv(39518);
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L287-L288` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L287-L288) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L287-L288)

```diff
-       if (!tz || !0 !== tz[Lz.p]) return;
-       const sz = tz[Lz.t],
+       if (!zv || !0 !== zv[Mv.o]) return;
+       const Pv = zv[Mv.q],
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L296)

```diff
-       const tz = zz.kY;
+       const zv = vv.sF;
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L298)

```diff
-         const zz = tz[sz].vD();
+         const vv = zv[Pv].na();
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L302)

```diff
-         const zz = tz[sz].vD();
+         const vv = zv[Pv].na();
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L312)

```diff
-       if ("function" !== typeof sz) throw new Error(`terrainDrawState: Babylon has no ${tz} to hook`);
+       if ("function" !== typeof Pv) throw new Error(`terrainDrawState: Babylon has no ${zv} to hook`);
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L317)

```diff
-       const Xz = sz.PN.K9,
+       const ev = Pv.oT.O4,
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L321)

```diff
-         Uz = new Vz.c(Xz, zz.FD());
+         Nv = new bv.e(ev, vv.ma());
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L332-L333` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L332-L333) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L332-L333)

```diff
-         const Fz = Ut(zt.e.prototype, "_syncParentEnabledState");
-         Object.assign(zt.e.prototype, {
+         const hv = Nz(vz.c.prototype, "_syncParentEnabledState");
+         Object.assign(vz.c.prototype, {
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L353` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L353) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L353)

```diff
-       }(zz.FD());
+       }(vv.ma());
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L368-L369)

```diff
-             sz = zz.tFz[0],
-             Fz = zz.tFz[1];
+             Pv = vv.YPv[0],
+             hv = vv.YPv[1];
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L385)

```diff
-             Xz = vz.ib(zz.activeCamera),
+             ev = dv.dw(vv.activeCamera),
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L388)

```diff
-             const tz = zz.FD().currentRenderPassId;
+             const zv = vv.ma().currentRenderPassId;
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L405)

```diff
-             if (!lz.c.IsInFrustum(tz.tFz, Fz)) continue;
+             if (!yv.c.IsInFrustum(zv.YPv, hv)) continue;
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L415)

```diff
-                 if (Oz && Fz[tz] === Uz) bz && 1 === Wz[tz] && qz(Nz) && 0, vz.see(Nz, 1 === Wz[tz] ? uz : -1);
+                 if (gv && hv[zv] === Nv) wv && 1 === Sv[zv] && Ev(Wv) && 0, dv.see(Wv, 1 === Sv[zv] ? Tv : -1);
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L418)

```diff
-                   const zz = !0 === Nz.metadata[Rz.h];
+                   const vv = !0 === Wv.metadata[rv.n];
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L422)

```diff
-                 } else Xz ? rz(Nz, uz, !0 === Nz.metadata[Rz.h]) : kz.h.prototype.push.call(sz, Nz)
+                 } else ev ? mv(Wv, Tv, !0 === Wv.metadata[rv.n]) : Lv.g.prototype.push.call(Pv, Wv)
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L429)

```diff
-         const Xz = tz.zFz;
+         const ev = zv.FPv;
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/babylon-backend.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/babylon-backend.js#L432)

```diff
-           tz.isEnabled() && kz.h.prototype.push.call(Fz, tz)
+           zv.isEnabled() && Lv.g.prototype.push.call(hv, zv)
```
