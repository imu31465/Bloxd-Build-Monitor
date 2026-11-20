# Changed — Bundle Modifications Report (Part 009 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `9 / 67` (**385** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 8. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L235-L253` → after: `L86-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L86-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L86-L122) · [Before (L235-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L235-L253)

```diff
-         t: Oz
-       } = (0, Fz.B)();
-       return (0, Yz.jsx)(Uz.Q, {
-         className: tz,
-         ariaLabel: Oz(sz ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
-           name: Wz
-         }),
-         pressed: sz,
-         analyticsClick: {
-           id: "hud_layout.children",
-           value: sz ? "close" : "open"
-         },
-         onClick: () => {
-           Xz(!sz)
-         },
-         children: (0, Yz.jsx)(Cz.c, {
- ... (3 more removed lines; see GitHub link above)
+         engine: qv,
+         Is: Iv
+       } = Uv(), Qv = Iv.onBeforeRenderObservable.add((() => {
+         var vv;
+         null === (vv = tv) || void 0 === vv || vv.render(qv.getDeltaTime())
+       })), Zv = null === Dv ? null : xv(Dv).catch((vv => (console.error(`Mob preview: could not load ${Dv}`, vv), null)));
+       return Promise.all([Rv(Sv), Zv]).then((vv => {
+         var zv, Pv, hv;
+         let [dv, Rv] = vv;
+         if (Kv) return;
+         const xv = (0, mv.g)().Ma.hK,
+           {
+             hitBoxDimensions: qv
+           } = (0, lv.c)(Sv),
+           Iv = Fv / Math.max(qv.height, qv.width);
+         if (Vv = (0, Cv.k)(Sv, Iv * nv, !0, !0), xv.setPosition(Vv, fv, -qv.height * Iv / 2, 0), xv.setRotationEulerY(Vv, Yv), dv.meshApi instanceof cv.d && Ov.length > 0)
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L257-L260` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L126-L130) · [Before (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L257-L260)

```diff
-       var sz;
-       zz.contains(document.activeElement) && tz.focus({
-         preventScroll: !0
-       }), null === (sz = (0, ez.c)()) || void 0 === sz || sz.handOverPadFocus(zz, tz)
+       return tv({
+         mobType: "NPC",
+         variation: null,
+         animation: vv.animation
+       }, vv, zv)
```

#### 10. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L264-L266` → after: `L134-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L134-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L134-L160) · [Before (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L264-L266)

```diff
-       const tz = zz.closest("[data-hud-row]"),
-         sz = null === tz || void 0 === tz ? void 0 : tz.querySelector(".HudElementRowName");
-       return !(!tz || !sz) && (az(tz, sz), !0)
+       let {
+         mobType: zv,
+         variation: Pv,
+         metaInfo: hv,
+         tamed: Sv
+       } = vv, ev = !1, gv = null, pv = 0;
+       const dv = (0, mv.g)(),
+         Nv = dv.Ma.hK,
+         lv = vv => {
+           pv += Ov * (vv / 1e3) % (2 * Math.PI), Nv.setRotationEulerY(gv, pv)
+         };
+       return Rv(zv).then((vv => {
+         if (ev) return;
+         gv = (0, Cv.k)(zv, nv, !0, !0), Nv.setPosition(gv, 0, -nv, 0), vv.meshApi.updateVariation(gv, zv, Pv);
+         const pv = {
+           wool: "Sheared" !== hv,
+ ... (11 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L268-L271` → after: `L162-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L162-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L162-L188) · [Before (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L268-L271)

```diff
-     const Sz = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
- 
-     function Vz(zz, tz) {
-       return "joystick" === zz && !tz
+     class Qv {
+       constructor(vv, zv) {
+         this.place = zv, this.remove = null;
+         const {
+           engine: Pv,
+           Is: hv,
+           canvas: Sv
+         } = Uv();
+         vv.appendChild(Sv), Pv.resize(), Pv.runRenderLoop((() => {
+           hv.render()
+         }))
+       }
+       show(vv) {
+         var zv;
+         null === (zv = this.remove) || void 0 === zv || zv.call(this), this.remove = this.place(vv)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L273-L291` → after: `L190-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L190-L212) · [Before (L273-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L273-L291)

```diff
- 
-     function Rz() {
-       const {
-         t: zz
-       } = (0, Fz.B)();
-       return (0, Yz.jsx)(Uz.Q, {
-         className: "HudFixJoystickButton",
-         analyticsClick: {
-           id: "hud_layout.fix_joystick"
-         },
-         onClick: zz => {
-           const tz = zz.currentTarget;
-           if (!qz(tz)) {
-             const zz = function(zz) {
-               var tz, sz;
-               const Fz = [zz.previousElementSibling, zz.nextElementSibling].find((zz => zz instanceof HTMLElement && zz.matches(Sz)));
- ... (3 more removed lines; see GitHub link above)
+     class Zv {
+       constructor(vv) {
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new Qv(vv, (() => () => {}))
+       }
+       show(vv) {
+         vv.figures !== this.view.figures && this.preload(vv.figures), this.view = vv, this.place()
+       }
+       resize(vv, zv) {
+         this.preview.resize(vv, zv), this.aspect = vv / zv, this.place()
+       }
+       close() {
+         this.preview.close();
+         for (const vv of this.placed) null === vv || void 0 === vv || vv.remove();
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L293-L294` → after: `L214-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L214-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L214-L229) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L293-L294)

```diff
-           Kz.b.setClientEscMenuOptions({
-             joystickMode: "fixed_shown"
+           of vv) null !== Pv && xv(Pv).catch(zv)
+       }
+       place() {
+         const {
+           figures: vv,
+           shown: zv
+         } = this.view, Pv = vv.map(((Pv, hv) => {
+           var Sv;
+           const ev = null !== (Sv = this.placed[hv]) && void 0 !== Sv ? Sv : null;
+           if (!zv[hv]) return null === ev || void 0 === ev || ev.remove(), null;
+           const gv = (pv = (hv + .5) / vv.length, dv = this.aspect, (.5 - pv) * (2 * fv * Math.tan(Uv().camera.fov / 2)) * dv);
+           var pv, dv;
+           return null !== ev && ev.figure === Pv && ev.x === gv ? ev : (null === ev || void 0 === ev || ev.remove(), {
+             figure: Pv,
+             x: gv,
+             remove: qv(Pv, gv)
```

#### 14. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L296-L319` → after: `L231-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L231-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L231-L234) · [Before (L296-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L296-L319)

```diff
-         },
-         children: zz("hudLayout:fixJoystick")
-       })
-     }
-     var pz = sz(78),
-       fz = sz(1264),
-       Ez = sz(1113),
-       zt = sz(2537),
-       tt = sz(8381),
-       st = sz(2306),
-       Ft = sz(2321),
-       Wt = sz(2873);
-     const Xt = ["J", "C", "A", "P", "U", "X", "G"],
-       Ot = Object.freeze({
-         faces: null,
-         names: Object.freeze({}),
- ... (8 more removed lines; see GitHub link above)
+         }));
+         for (const hv of this.placed.slice(vv.length)) null === hv || void 0 === hv || hv.remove();
+         this.placed = Pv
+       }
```

#### 15. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L326-L359` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L238) · [Before (L326-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L326-L359)

```diff
-       let {
-         id: tz,
-         slot: sz,
-         icon: Fz,
-         label: Xz,
-         hidden: Oz,
-         className: oz,
-         face: Uz
-       } = zz;
-       const Kz = (0, Wz.useRef)(null);
-       return (0, Wz.useLayoutEffect)((() => {
-         Uz && Kz.current && ot(Kz.current, Uz)
-       }), [Uz]), (0, Yz.jsxs)("div", {
-         className: vz()("TouchKeyHit", `TouchSlot${sz}`, oz, {
-           HudPreviewGhost: Oz.has(tz)
-         }),
- ... (18 more removed lines; see GitHub link above)
+       return new Qv(vv, tv)
```

#### 16. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L363-L375` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L242) · [Before (L363-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L363-L375)

```diff
-       let {
-         item: tz,
-         selected: sz
-       } = zz;
-       const Fz = (0, Wz.useRef)(null);
-       return (0, Wz.useLayoutEffect)((() => {
-         Fz.current && ot(Fz.current, tz)
-       }), [tz]), (0, Yz.jsx)("div", {
-         ref: Fz,
-         className: vz()("InvenItem", {
-           Selected: sz
-         })
-       })
+       return new Zv(vv)
```

#### 17. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L393-L416` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L246) · [Before (L393-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L393-L416)

```diff
-       let {
-         id: tz,
-         hidden: sz,
-         parked: Fz,
-         unslotted: Wz = !1
-       } = zz;
-       return (0, Yz.jsx)("div", {
-         className: vz()("TopRightIcon", Ft.k[tz], {
-           HudPreviewGhost: sz.has(tz),
-           [st.b]: void 0 !== Fz,
-           [st.c]: Wz
-         }),
-         ...Nt(Fz),
-         children: (0, Yz.jsx)("div", {
-           className: "UiItemIcon SmallTextBold",
-           ...vt(tz),
- ... (8 more removed lines; see GitHub link above)
+       return new Qv(vv, Iv)
```

#### 18. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L420-L466` → after: `L260-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L260-L270) · [Before (L420-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L420-L466)

```diff
-       let {
-         portraitPhone: tz,
-         icons: sz,
-         hidden: Fz,
-         moved: Wz,
-         trayState: Xz
-       } = zz;
-       const Oz = tz ? (0, st.B)(sz) : [],
-         oz = sz.filter((zz => "settings" === zz)),
-         Uz = sz.filter((zz => "settings" !== zz && !Oz.includes(zz))).reverse(),
-         Kz = Oz.length > 0 && "gone" === Xz,
-         uz = [...oz, ...Kz ? ["tray"] : [], ...Uz].filter((zz => "tray" === zz || Fz.has(zz) && !Wz.has(zz))),
-         Nz = zz => {
-           const tz = uz.indexOf(zz);
-           return tz < 0 ? void 0 : tz
-         },
- ... (31 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t${(0,pv.y)(vv,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, pv.F)(vv, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, pv.F)(vv, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, pv.n)(vv, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 19. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L469-L488` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L273-L277) · [Before (L469-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L469-L488)

```diff
-     function Dt(zz) {
-       let {
-         next: tz,
-         hidden: sz
-       } = zz;
-       return (0, Yz.jsx)("div", {
-         className: vz()("HotBarArrow", tz ? "Next" : "Previous", {
-           HudPreviewGhost: sz
-         }),
-         ...vt("arrows"),
-         children: (0, Yz.jsx)("div", {
-           className: "UiItemIcon SmallTextBold",
-           children: (0, Yz.jsx)("div", {
-             className: "ScaleOnHover",
-             children: (0, Yz.jsx)(Cz.c, {
-               name: tz ? "caret-right" : "caret-left"
- ... (4 more removed lines; see GitHub link above)
+     function Nv(vv, zv) {
+       let Pv = (0, pv.vb)(vv, "skele" + (zv - 1));
+       for (let Sv = zv - 2; Sv >= 0; Sv--) Pv = (0, pv.mb)(vv, `boneIdx == ${Sv}`, (0, pv.vb)(vv, `skele${Sv}`), Pv);
+       const hv = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,pv.F)(vv,"int","boneIdx",(0,pv.qb)(vv,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,pv.F)(vv,"vec3","bone",Pv)}\n\t\t\t\t${(0,pv.F)(vv,"vec2","pivot",(0,pv.n)(vv,"vec2","0.0",`${(0,pv.Bb)(vv,"position")}.z`))}\n\t\t\t\t${(0,pv._)(vv)?`positi … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L491-L537` → after: `L280-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L280-L281) · [Before (L491-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L491-L537)

```diff
-     function gt() {
-       return (0, Yz.jsx)("div", {
-         className: "SocialBarContainer",
-         children: (0, Yz.jsx)("div", {
-           className: "SocialBarOuter",
-           children: (0, Yz.jsx)("div", {
-             className: "SocialBar",
-             children: (0, Yz.jsx)("div", {
-               className: "CondensedSocialBarInner",
-               children: (0, Yz.jsx)("div", {
-                 className: "CondensedSectionsContainer",
-                 children: (0, Yz.jsxs)("div", {
-                   className: "CondensedSections",
-                   children: [(0, Yz.jsxs)("div", {
-                     className: "CondensedSection CondensedSectionFriendRequests",
-                     children: [(0, Yz.jsx)("div", {
- ... (31 more removed lines; see GitHub link above)
+     function lv(vv) {
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,pv.n)(vv,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 21. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L540-L546` → after: `L284-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L284-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L284-L289) · [Before (L540-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L540-L546)

```diff
-         J: "jump",
-         C: "crouch",
-         A: "attack",
-         P: "attack",
-         U: "use",
-         X: "extra",
-         G: "game"
+         x: 0,
+         y: 0,
+         z: 0,
+         Evv(vv, zv) {
+           return this.x = vv[zv], this.y = vv[zv + 1], this.z = vv[zv + 2], this
+         }
```

#### 22. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L549-L550` → after: `L292-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L292-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L292-L343) · [Before (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L549-L550)

```diff
-         J: "JumpKey",
-         C: "CrouchKey"
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (vv, zv) => ({
+           ...(0, hv.d)("CAPE"),
+           BLOXD_CAPE_BONES: `${vv}`,
+           BLOXD_CAPE_MAX_Y: (0, Sv.gb)(zv)
+         }),
+         getUniforms(vv) {
+           return (0, ev.c)(function(vv) {
+             const zv = [];
+             for (let Pv = 0; Pv < vv; Pv++) zv.push({
+               name: `skele${Pv}`,
+               type: "highp vec3"
+             });
+             return zv
+ ... (36 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L554-L558` → after: `L346-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L346-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L346-L365) · [Before (L554-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L554-L558)

```diff
-         0: "swords",
-         1: "hammer",
-         2: "cube",
-         3: "cubes",
-         5: "cookie"
+         name: "TextSampler",
+         className: "TextSamplerMaterialPlugin",
+         priority: 60,
+         defines: () => (0, hv.d)("TEXT_SAMPLER"),
+         getUniforms: vv => (0, Sv.c)(dv, "fragment", vv),
+         bind(vv) {
+           vv.updateFloat(pv, this.lodBias)
+         },
+         uniformsVersion: () => 0,
+         getCustomCode(vv, zv) {
+           if ("fragment" !== vv) return null;
+           const Pv = (0, ev.M)(zv, `vec4 ${Nv}(sampler2D s, vec2 uv, float bias)`, `fn ${Nv}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             hv = (0, ev.M)(zv, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             Sv = `${(0,ev.U)(zv,"vDiffuseUV")} + uvOffset`,
+             gv = (0, ev.M)(zv, `${Nv}(diffuseSampler, ${Sv}, ${(0,ev.vb)(zv,pv)})`, `${Nv}(diffuseSampler, diffuseSamplerSampler, ${Sv}, ${(0,ev.vb)(zv,pv)})`);
+           return {
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L561-L866` → after: `L429-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L429-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L429-L433) · [Before (L561-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L561-L866)

```diff
-     function Yt(zz) {
-       let {
-         presence: tz,
-         portraitPhone: sz,
-         hidden: Wz,
-         actionButtons: Xz,
-         joystickFixed: Oz,
-         keysAbove: oz,
-         auraBar: Uz,
-         trayState: Kz,
-         moved: Nz
-       } = zz;
-       const {
-         t: bz
-       } = (0, Fz.B)(), {
-         faces: wz,
- ... (290 more removed lines; see GitHub link above)
+     function iv(vv, zv) {
+       return Object.assign((function(vv, Pv, hv, Sv) {
+         return zv(this.featureState, vv, Pv, hv, Sv)
+       }), {
+         Ew: vv
```

#### 25. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L879-L992` → after: `L438-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L438-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L438-L443) · [Before (L879-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L879-L992)

```diff
-       var tz;
-       let {
-         selected: sz,
-         layout: Wz,
-         actionButtons: Xz,
-         keyNames: Oz,
-         overlaps: oz,
-         scaleCaps: Kz,
-         joystickFixed: uz,
-         onScale: Nz,
-         onHidden: bz,
-         onReset: wz,
-         locked: Dz,
-         lockable: gz,
-         onLocked: Hz,
-         extra: Bz
- ... (98 more removed lines; see GitHub link above)
+       const zv = class extends wv.e {
+           constructor(zv, Pv) {
+             const hv = (0, sv.bb)(zv),
+               Sv = hv && (0, sv.x)(hv, vv.name);
+             for (var ev = arguments.length, gv = new Array(ev > 2 ? ev - 2 : 0), pv = 2; pv < ev; pv++) gv[pv - 2] = arguments[pv];
+             super(zv, vv.name, vv.priority, Sv ? Sv.defines : vv.defines(...gv), !1), this.featureState = void 0, this.featureState = Pv, this._pluginManager._addPlugin(this), this._enable(!0), (0, sv.A)(this._material, vv, this.featureState, this._pluginDefineNames)
```

#### 26. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L994-L1006` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L445-L446) · [Before (L994-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L994-L1006)

```diff
-         };
-       let vz = null;
-       const Uz = () => {
-           vz !== (0 === Xz.size) && (vz = 0 === Xz.size, null === Fz || void 0 === Fz || Fz(vz))
-         },
-         Kz = zz => {
-           const tz = zz.cloneNode(!0);
-           if ("LINK" === tz.tagName) {
-             Xz.add(tz);
-             const zz = () => {
-               Xz.delete(tz), Uz()
-             };
-             tz.addEventListener("load", zz), tz.addEventListener("error", zz), sz && tz.addEventListener("load", sz)
+           getClassName() {
+             return vv.className
```

#### 27. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1008-L1021` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L448-L449) · [Before (L1008-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1008-L1021)

```diff
-           return tz
-         },
-         uz = () => {
-           const Fz = function(zz) {
-               const tz = [...zz.body.children].filter((zz => zz.matches(jt)));
-               return [...zz.head.querySelectorAll(jt), ...tz]
-             }(zz).filter(oz),
-             Oz = new Set(Fz);
-           for (const [zz, tz] of Wz) Oz.has(zz) || (tz.remove(), Wz.delete(zz), Xz.delete(tz));
-           let vz = null;
-           for (let zz = Fz.length - 1; zz >= 0; zz--) {
-             const Xz = Fz[zz];
-             let Oz = Wz.get(Xz);
-             Oz ? "STYLE" === Xz.tagName && Oz.textContent !== Xz.textContent && (Oz.textContent = Xz.textContent, null === sz || void 0 === sz || sz()) : (Oz = Kz(Xz), Wz.set(Xz, Oz), tz.head.insertBefore(Oz, vz)), vz = Oz
+           isCompatible(vv) {
+             return vv === Cv.d.GLSL || vv === Cv.d.WGSL
```

#### 28. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1023-L1034` → after: `L451-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L451-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L451-L462) · [Before (L1023-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1023-L1034)

```diff
-           Uz()
-         };
-       uz();
-       const Nz = new MutationObserver(uz);
-       return Nz.observe(zz.head, {
-         childList: !0,
-         subtree: !0,
-         characterData: !0
-       }), Nz.observe(zz.body, {
-         childList: !0
-       }), () => {
-         Nz.disconnect()
+         },
+         Pv = (0, av.g)(vv);
+       for (const [hv, Sv] of Object.entries(av.d)) {
+         const ev = vv[hv];
+         if (ev) {
+           const vv = Pv[hv];
+           Object.defineProperty(zv.prototype, Sv, {
+             value: iv(ev, vv),
+             writable: !0,
+             configurable: !0
+           })
+         }
```

#### 29. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1039-L1040` → after: `L472-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L472-L475) · [Before (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1039-L1040)

```diff
-       let {
-         keysAbove: Fz
+       let hv = fv.get(Pv);
+       hv || (hv = new Map, fv.set(Pv, hv));
+       const {
+         url: Sv
```

#### 30. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1042-L1064` → after: `L477-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L477-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L477-L508) · [Before (L1042-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1042-L1064)

```diff
-       const Wz = [...zz.documentElement.classList].filter((zz => !Gt.has(zz) && !ct.has(zz))),
-         Xz = [...tz.documentElement.classList].filter((zz => ct.has(zz))),
-         Oz = [et, Zt.hotbar, Zt.hasShop, Zt.hasBag];
-       Fz && Oz.push(Zt.keysAbove), tz.documentElement.className = [...Wz, ...Oz, ...Xz].join(" ")
-     }
-     const Mt = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
- 
-     function dt(zz, tz, sz, Fz, Wz) {
-       const Xz = (0, Zz.A)(sz, Fz, "joystick"),
-         Oz = (0, Ft.C)((0, Ft.M)(sz, Fz, Wz), Fz),
-         oz = Oz.classes.filter((zz => !Tt.has(zz))),
-         vz = tz.documentElement;
-       (0, Ft.T)({
-         ...Oz,
-         classes: oz
-       }, {
- ... (7 more removed lines; see GitHub link above)
+       let ev = hv.get(Sv);
+       return ev || (ev = async function(vv, zv, Pv) {
+         const {
+           width: hv,
+           height: Sv
+         } = vv.getSize(), ev = Math.round(Sv / hv), pv = zv && zv.byteLength === hv * hv * ev * 4 ? zv : vv._readPixelsSync();
+         return new jv.c(pv, hv, hv, ev, mv.d.TEXTUREFORMAT_RGBA, Pv, !0, !1, gv.d.NEAREST_NEAREST_MIPLINEAR)
+       }(vv, zv, Pv), hv.set(Sv, ev), ev.catch((() => {
+         hv.delete(Sv)
+       }))), ev
+     }
+     var Yv = Pv(37375);
+     class nv extends(cv(dv.g)) {
+       constructor(vv, zv) {
+         super(vv, zv), zv.textures.forEach(((vv, zv) => {
+           vv.mirror.onLoadObservable.add((vv => {
+ ... (16 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1066-L1068` → after: `L510-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L510-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L510-L526) · [Before (L1066-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1066-L1068)

```diff
- 
-     function ht() {
-       return (0, Ft.J)(Kz.b.get("notchSize"), window.innerWidth, window.innerHeight)
+     var Ov = Pv(40454),
+       Dv = Pv(39609),
+       Kv = Pv(36591),
+       Vv = Pv(40460),
+       Uv = Pv(39720),
+       Rv = Pv(39598),
+       xv = Pv(40408),
+       tv = Pv(37086),
+       qv = Pv(40469);
+     class Iv extends Ov.e {
+       getData() {
+         return null
+       }
+       _rebuild() {}
+       restore() {
+         super._rebuild()
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1070-L1072` → after: `L528-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L528-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L528-L556) · [Before (L1070-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1070-L1072)

```diff
- 
-     function Qt(zz) {
-       return (0, Ft.s)(ht(), (0, Ft.Q)(zz))
+     const Qv = {
+       Mesh: Vv.e,
+       TransformNode: xv.b,
+       Sa: Ov.e,
+       VertexBuffer: Ov.i,
+       BoundingInfo: Dv.e,
+       fa: Kv.fa,
+       ArenaBuffer: Iv,
+       SubMesh: Rv.c,
+       VertexData: Uv.d,
+       MirroredGeometry: qv.d,
+       meshFromArrays: qv.g,
+       plainMeshFromArrays: qv.i
+     };
+     (0, tv.d)(Qv);
+     var Zv = Pv(36898);
+ ... (13 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1075-L1081` → after: `L559-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L559-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L559-L589) · [Before (L1075-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1075-L1081)

```diff
-     function kt(zz, tz, sz) {
-       const Fz = zz.documentElement.style,
-         Wz = (0, Ft.H)(tz),
-         Xz = Fz.getPropertyValue(Wz);
-       try {
-         return sz((zz => {
-           Fz.setProperty(Wz, String(zz))
+     function Lv(vv, zv) {
+       if (!(zv instanceof hv.StandardMaterial) || zv.specularTexture) return;
+       const {
+         r: Pv,
+         g: Sv,
+         b: ev
+       } = zv.specularColor;
+       0 === Pv && 0 === Sv && 0 === ev && (vv.SPECULARTERM = !1)
+     }(0, lv.h)({
+       disableUnusedSpecularTerm: Lv
+     });
+     var Hv = Pv(36775),
+       Mv = Pv(37095);
+     const yv = new RegExp(`^#define ${Nv.b}\\s*$`, "m");
+     class Bv extends(cv(Nv.g)) {
+       constructor(vv, zv) {
+ ... (15 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1083-L1084` → after: `L591-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L591-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L591-L604) · [Before (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1083-L1084)

```diff
-       } finally {
-         "" === Xz ? Fz.removeProperty(Wz) : Fz.setProperty(Wz, Xz)
+       }
+       prewarmDither(vv) {
+         if (this.ea || vv.mzv()) return !1;
+         const zv = new Rv.c(0, 0, 0, 0, 0, vv, void 0, !1, !1);
+         this.featureState.prewarmingDither = !0;
+         try {
+           this._material.isReadyForSubMesh(vv, zv)
+         } finally {
+           this.featureState.prewarmingDither = !1
+         }
+         return null !== zv.effect
+       }
+       dispose(vv) {
+         this.ea = !0, super.dispose(vv)
```

#### 35. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1089-L1096` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L610) · [Before (L1089-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1089-L1096)

```diff
-       const [sz, Fz] = kt(zz, "hotbar", (tz => {
-         const sz = sz => {
-           var Fz, Wz;
-           return tz(sz), null !== (Fz = null === (Wz = zz.querySelector(".HotBarGameItemsContainer")) || void 0 === Wz ? void 0 : Wz.getBoundingClientRect().width) && void 0 !== Fz ? Fz : 0
-         };
-         return [sz(1), sz(Zz.h)]
-       }));
-       return sz <= 0 ? Zz.h : Math.min(Zz.h, Math.max(1, Math.floor(Fz / sz / tz + 1e-6) * tz))
+       Jv.set(vv, zv)
```

#### 36. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1098-L1117` → after: `L612-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L612-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L612-L652) · [Before (L1098-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1098-L1117)

```diff
-     const Lt = 3,
-       lt = .5,
-       nt = zz => zz.right - zz.left;
-     const qt = (zz, tz) => Math.abs((0, tt.c)(zz).x - (0, tt.c)(tz).x) + Math.abs((0, tt.c)(zz).y - (0, tt.c)(tz).y) + Math.abs(nt(zz) - nt(tz));
- 
-     function St(zz, tz, sz, Fz, Wz) {
-       let {
-         canKeep: Xz = () => !0,
-         passes: Oz = Lt,
-         before: oz,
-         keysAboveOf: vz
-       } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
-       const Uz = void 0 !== vz && vz(zz) !== vz(tz),
-         Kz = tz.hudLayouts[sz].hudLocked.filter((zz => Xz(zz) && !(Uz && "inventory" === zz))),
-         uz = new Set(Kz);
-       if (0 === uz.size) return tz;
- ... (4 more removed lines; see GitHub link above)
+     Ev(pv.c, Gv), Ev(dv.g, nv), Ev(Nv.g, Bv), Ev(lv.i, Av), (0, Tv.c)({
+       create: (vv, zv) => {
+         const Pv = new hv.StandardMaterial(vv.name, zv);
+         return (0, Hv.m)(vv, Pv), Pv.detailMap._pluginDefineNames
+       },
+       write: (vv, zv, Pv) => {
+         (0, Hv.M)(vv.mirror, zv, Pv)
+       },
+       addFeature: (vv, zv, Pv) => {
+         const hv = Jv.get(zv.feature);
+         if (!hv) throw new Error(`${zv.feature.name} has no plugin class (registerPluginClass)`);
+         new hv(vv.mirror, zv.state, ...Pv)
+       },
+       texture: (vv, zv, Pv) => {
+         let {
+           url: hv,
+ ... (25 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1119-L1366` → after: `L654-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L654-L656) · [Before (L1119-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1119-L1366)

```diff
-             cluster: null !== tz && void 0 !== tz ? tz : void 0
-           }
-         },
-         wz = zz => {
-           const tz = Wz(zz);
-           return tz && bz(tz)
-         },
-         Dz = oz ? bz(oz) : wz(zz);
-       let gz = Dz && wz(tz);
-       if (!Dz || !gz) return tz;
-       let Hz = tz;
-       for (let Bz = 0; Bz < Oz && uz.size > 0; Bz++) {
-         const zz = new Map;
-         for (const tz of uz) {
-           const Wz = Dz[tz],
-             Xz = gz[tz],
- ... (232 more removed lines; see GitHub link above)
+             mimeType: wv,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
```

#### 38. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1368-L1396` → after: `L658-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L658-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L658-L692) · [Before (L1368-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1368-L1396)

```diff
-           onPointerUp: zz => {
-             xz(zz, !0)
-           },
-           onPointerCancel: zz => {
-             xz(zz, !1)
-           }
-         }
-       }
-     }
- 
-     function ss(zz, tz) {
-       return Object.keys(zz).filter((zz => zz !== tz)).map((tz => zz[tz]))
-     }
- 
-     function Fs(zz) {
-       const tz = [],
- ... (13 more removed lines; see GitHub link above)
+           iv = new gv.d(null, zv, Cv);
+         Hv.q.set(iv, Tv), Object.assign(iv, Nv), iv.updateURL(hv, av);
+         const cv = iv.getInternalTexture();
+         cv && (cv.label = sv), vv.uvSet = iv.coordinatesIndex, vv.matrix.set((0, Hv.F)(iv)), (0, Wv.K)(vv, iv)
+       },
+       cube: (vv, zv, Pv) => {
+         let {
+           rootUrl: hv,
+           files: ev,
+           noMipmap: pv,
+           luminance: dv
+         } = Pv;
+         const {
+           samplingMode: Nv
+         } = vv.sampler, lv = Nv === (0, Wv.z)(pv) ? null : () => {
+           (0, Hv.C)(Tv, Nv)
+ ... (19 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1398-L1414` → after: `L694-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L694-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L694-L713) · [Before (L1398-L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1398-L1414)

```diff
-       const Fz = zz => (0, tt.B)(tz.filter((tz => {
-           let {
-             id: sz
-           } = tz;
-           return zz(sz)
-         })).map((zz => {
-           let {
-             box: tz
-           } = zz;
-           return tz
-         }))),
-         Wz = {};
-       for (const Oz of new Set(tz.map((zz => zz.id)))) Wz[Oz] = Fz((zz => zz === Oz));
-       const Xz = Fz((zz => cz.has(zz)));
-       return Xz && (Wz.cluster = Xz), {
-         boxes: Wz,
- ... (1 more removed lines; see GitHub link above)
+     })
+   },
+   40469: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => lv,
+       g: () => Tv,
+       i: () => Wv
+     });
+     var hv = Pv(40454),
+       Sv = Pv(39361),
+       ev = Pv(39609),
+       gv = Pv(39728),
+       pv = Pv(40460),
+       dv = Pv(39720),
+       Nv = Pv(36964);
+     class lv extends gv.b {
+ ... (4 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1416-L1511` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L715) · [Before (L1416-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1416-L1511)

```diff
-     }
- 
-     function Ws(zz, tz, sz) {
-       const Fz = tz.right - tz.left,
-         Wz = tz.bottom - tz.top;
-       return kt(zz, "cluster", (tz => {
-         const Xz = sz => {
-             tz(sz);
-             const Fz = [...zz.querySelectorAll(`[${dz}]:not(.HudPreviewGhost)`)].filter((zz => cz.has(zz.getAttribute(dz)))).map((zz => {
-                 const tz = zz.getBoundingClientRect();
-                 return {
-                   left: tz.left,
-                   top: tz.top,
-                   right: tz.right,
-                   bottom: tz.bottom
-                 }
- ... (80 more removed lines; see GitHub link above)
+       link(vv) {
```

#### 41. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1513-L1528` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L717) · [Before (L1513-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1513-L1528)

```diff
-         if (!Uz) return;
-         const tz = new ResizeObserver((() => {
-           vz() || mz()
-         }));
-         for (const sz of Uz.querySelectorAll(`[${dz}]`)) tz.observe(sz);
-         return null === (zz = Uz.fonts) || void 0 === zz || zz.ready.then(mz), () => {
-           tz.disconnect()
-         }
-       }), [Uz, mz, vz, Oz]), {
-         doc: Uz,
-         boxes: uz.boxes,
-         pieces: uz.pieces,
-         insets: bz,
-         keysAbove: Dz,
-         ready: Hz,
-         settled: Pz
+         (0, Nv.p)(vv), this.model = vv, null === (zv = this.onLinked) || void 0 === zv || zv.call(this, vv)
```

#### 42. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1530-L1723` → after: `L719-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L719-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L719-L774) · [Before (L1530-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1530-L1723)

```diff
-     }
-     const os = [
-         ["hotbar", "arrows"],
-         ["hotbar", "inventory"]
-       ],
-       vs = (zz, tz, sz) => {
-         const Fz = zz => (0, st.v)(zz, sz.hudElements[zz]);
-         return "cluster" === zz && cz.has(tz) || "cluster" === tz && cz.has(zz) || "menu" === zz && Fz(tz) || "menu" === tz && Fz(zz) || os.some((Fz => {
-           let [Wz, Xz] = Fz;
-           const Oz = sz.hudElements.hotbar,
-             oz = "inventory" === Xz && sz.hudLocked.includes(Xz) && void 0 !== Oz && !(0, Zz.M)(Oz);
-           return (zz === Wz && tz === Xz || zz === Xz && tz === Wz) && !oz
-         }))
-       };
-     const Us = ["Above", "Below", "Left", "Right"];
- 
- ... (178 more removed lines; see GitHub link above)
+       relink() {
+         this.release();
+         const vv = [];
+         for (const Sv of Object.values(this._vertexBuffers))
+           if (!Sv.getIsInstanced()) {
+             const {
+               byteOffset: zv,
+               byteStride: Pv,
+               type: hv,
+               normalized: ev
+             } = Sv;
+             vv.push({
+               kind: Sv.getKind(),
+               data: Sv.getData(),
+               offset: zv,
+               stride: Pv,
+ ... (40 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1725-L1742` → after: `L776-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L776-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L776-L785) · [Before (L1725-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1725-L1742)

```diff
-       }), [kz, nz]), (0, Wz.useImperativeHandle)(Bz, (() => ({
-         setScale: (zz, tz) => {
-           Ot((0, Zz.ib)(sz, Xz, zz, {
-             scale: tz
-           }))
-         },
-         setOpacity: zz => {
-           qz({
-             ...sz,
-             hudKeyOpacity: zz
-           })
-         },
-         keepLocks: (zz, tz) => (Wt(), St(zz, tz, Xz, rz, Sz, {
-           canKeep: Xt,
-           keysAboveOf: Vz
-         })),
- ... (2 more removed lines; see GitHub link above)
+         return zv._updatable = gv, zv._boundingInfo = new ev.e(this.extend.minimum, this.extend.maximum), zv.relink(), zv
+       }
+       static mergeMeshes(vv, zv, Pv, hv, Sv, ev) {
+         const dv = vv[0].rD(),
+           Nv = new pv.e(vv[0].name + "_merged", dv),
+           Tv = new lv(gv.b.RandomId(), dv, void 0, !1, Nv);
+         try {
+           if (!pv.e.MergeMeshes(vv, zv, Pv, Nv, Sv, ev)) return Nv.dispose(), null
+         } catch (Wv) {
+           throw Nv.dispose(), Wv
```

#### 44. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1744-L1886` → after: `L787-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L787-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L787-L795) · [Before (L1744-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1744-L1886)

```diff
-       })), [qz, Ot, Sz, Vz, Wt, Xt, Qz, sz, Xz, rz, yz]);
-       const Kt = new Set(Object.keys(mz.hudElements).filter((zz => (0, Zz.s)(mz.hudElements, zz)))),
-         ut = Oz ? kz[Oz] : void 0,
-         Nt = Oz ? hz(Oz, uz, Pz, Dz) : "",
-         bt = (0, It.e)(rz.width, rz.height),
-         wt = Oz ? function(zz, tz, sz, Fz) {
-           const Wz = zz => (0, Zz.s)(sz.hudElements, zz) || (0, st.u)(zz, sz, Fz);
-           if (Wz(zz)) return [];
-           const Xz = tz.filter((tz => {
-               let {
-                 id: sz
-               } = tz;
-               return "cluster" === zz ? cz.has(sz) : sz === zz
-             })),
-             Oz = new Set;
-           for (const oz of tz) oz.id === zz || Oz.has(oz.id) || vs(zz, oz.id, sz) || Wz(oz.id) || void 0 === sz.hudElements[zz] && void 0 === sz.hudElements[oz.id] || Xz.some((zz => {
- ... (127 more removed lines; see GitHub link above)
+         return Tv.relink(), Nv
+       }
+       removeVerticesData(vv) {
+         this.releaseUnlessInstanced(vv), super.removeVerticesData(vv)
+       }
+       dispose() {
+         this.release(), super.dispose()
+       }
+       releaseUnlessInstanced(vv) {
```

#### 45. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1888-L1889` → after: `L797-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L797-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L797-L801) · [Before (L1888-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1888-L1889)

```diff
-         null === (sz = zz.current) || void 0 === sz || sz.toggleAttribute("inert", tz)
-       }), [zz, tz])
+         vv && null !== (zv = this.getVertexBuffer(vv)) && void 0 !== zv && zv.getIsInstanced() || this.release()
+       }
+       release() {
+         this.model && ((0, Nv.A)(this.model), this.model = null)
+       }
```

#### 46. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1893-L1929` → after: `L804-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L804-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L804-L819) · [Before (L1893-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1893-L1929)

```diff
-     function Ds(zz) {
-       let {
-         onScale: tz,
-         onHidden: sz,
-         onReset: Xz,
-         locked: Oz,
-         lockable: oz,
-         onLocked: vz,
-         onClose: Kz,
-         ...uz
-       } = zz;
-       const {
-         t: Nz
-       } = (0, Fz.B)(), bz = (0, Wz.useRef)(null);
-       (0, fz.s)("popup", bz, Kz),
-       function(zz) {
- ... (21 more removed lines; see GitHub link above)
+     function Tv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pv.e(vv, Pv);
+       const Sv = (0, Nv.l)(zv),
+         {
+           positions: ev,
+           normals: Tv,
+           uvs: Wv,
+           indices: wv,
+           named: av = {}
+         } = zv,
+         sv = new dv.d;
+       sv.positions = ev, sv.normals = null !== Tv && void 0 !== Tv ? Tv : null, sv.uvs = null !== Wv && void 0 !== Wv ? Wv : null, sv.indices = wv;
+       const Cv = new lv(gv.b.RandomId(), Pv, sv, !1, hv);
+       for (const {
+           kind: gv,
+           components: pv
```

#### 47. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L1931-L2010` → after: `L821-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L821-L822) · [Before (L1931-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L1931-L2010)

```diff
-       }), [Kz]);
-       const {
-         selected: wz
-       } = uz, Dz = (0, Wz.useRef)(null), gz = (0, Wz.useRef)(null), [Hz, Bz] = (0, Wz.useState)(!1);
-       bs(gz, !Hz);
-       const [Pz, rz] = (0, Wz.useState)(null), [xz, mz] = (0, Wz.useState)([]), [Jz, Iz] = xt(), Cz = (0, Wz.useRef)(uz.selected);
-       Cz.current = uz.selected;
-       const ez = (0, Wz.useRef)({}),
-         Zz = (0, Wz.useCallback)((() => {
-           const zz = Dz.current;
-           zz && rz(function(zz, tz, sz) {
-             var Fz;
-             const {
-               innerWidth: Wz,
-               innerHeight: Xz
-             } = window, Oz = zz.offsetWidth, oz = zz.offsetHeight, vz = Math.max(ht()[0], 6), Uz = [];
- ... (64 more removed lines; see GitHub link above)
+         of Sv.vertexAttributes) gv in av && hv.setVerticesData(gv, av[gv], !1, pv);
+       return Cv.link(Sv), hv
```

#### 48. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2014-L2039` → after: `L825-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L825-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L825-L839) · [Before (L2014-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2014-L2039)

```diff
-     function Hs(zz) {
-       let {
-         info: tz,
-         tuple: sz,
-         props: Wz
-       } = zz;
-       const {
-         t: Xz
-       } = (0, Fz.B)();
-       return (0, Yz.jsx)(bz.g, {
-         name: Xz("hudLayout:size"),
-         min: Zz.l,
-         max: Zz.h,
-         step: mt,
-         initValue: sz[2],
-         disabled: Wz.locked.has(tz.id),
- ... (10 more removed lines; see GitHub link above)
+     function Wv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const Sv = new pv.e(vv, Pv),
+         {
+           positions: ev,
+           normals: gv,
+           uvs: Nv,
+           indices: lv
+         } = zv;
+       return Object.assign(new dv.d, {
+         positions: ev,
+         normals: gv,
+         uvs: Nv,
+         indices: lv
+       }).applyToMesh(Sv, hv), Sv
```

#### 49. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2043-L2176` → after: `L854-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L854-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L854-L861) · [Before (L2043-L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2043-L2176)

```diff
-       const {
-         t: tz
-       } = (0, Fz.B)(), {
-         present: sz,
-         elements: Xz,
-         selected: Oz,
-         onSelect: oz,
-         onHidden: Uz,
-         onReset: Kz,
-         note: uz,
-         actionButtons: Nz,
-         keyNames: bz,
-         sizeBesidePreview: wz,
-         locked: Dz,
-         lockable: gz,
-         onLocked: Hz
- ... (118 more removed lines; see GitHub link above)
+       if (!vv) return [];
+       const zv = new Set,
+         Pv = [];
+       for (const hv of vv.split(gv)) {
+         const vv = hv.trim();
+         if ((0, ev.n)(vv) && !zv.has(vv) && (zv.add(vv), Pv.push(vv), Pv.length >= Sv.m)) break
+       }
+       return Pv
```

#### 50. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2180-L2242` → after: `L865-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L865-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L865-L869) · [Before (L2180-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2180-L2242)

```diff
-       let {
-         preview: tz,
-         quick: sz,
-         onFullScreen: Xz,
-         resting: Oz,
-         onSidePanel: oz
-       } = zz;
-       const {
-         t: vz
-       } = (0, Fz.B)(), Kz = us(), uz = (0, Wz.useRef)(null), {
-         width: Nz
-       } = (0, zt.d)(uz), bz = Math.floor(Kz.width * Math.min(1, tz.maxHeight / Kz.height)), wz = Nz - bz - 12, Dz = wz >= 130, gz = Nz > 0;
-       (0, Wz.useEffect)((() => {
-         gz && oz(Dz)
-       }), [gz, Dz, oz]);
-       const Hz = (0, tt.v)(Dz ? bz : Nz, Kz.width, Kz.height, tz.maxHeight),
- ... (47 more removed lines; see GitHub link above)
+       const zv = new Set,
+         Pv = [];
+       for (const hv of vv)
+         if ((0, ev.n)(hv) && !zv.has(hv) && (zv.add(hv), Pv.push(hv), Pv.length >= Sv.m)) break;
+       return Pv.join(gv)
```

#### 51. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2252-L2254` → after: `L872-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L872-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L872-L873) · [Before (L2252-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2252-L2254)

```diff
-     function Is(zz, tz, sz) {
-       const [Fz, Wz, Xz, Oz] = zz;
-       return "sides" === tz ? [Fz, sz, Xz, sz] : [sz, Wz, sz, Oz]
+     function Nv() {
+       return dv(ev.i)
```

#### 52. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2260-L2306` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L877-L878) · [Before (L2260-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2260-L2306)

```diff
-       let {
-         safe: tz,
-         onPreview: sz,
-         onCommit: Xz
-       } = zz;
-       const {
-         t: Oz
-       } = (0, Fz.B)(), oz = (0, Ft.v)(null !== tz && void 0 !== tz ? tz : Cs, window.innerWidth, window.innerHeight, Qt(document).map(Math.round)), vz = (0, Wz.useRef)(null !== tz && void 0 !== tz ? tz : Cs);
-       vz.current = null !== tz && void 0 !== tz ? tz : Cs;
-       const Kz = zz => {
-         const tz = Math.min(ms(zz), "sides" === zz ? Math.max(oz[1], oz[3]) : Math.max(oz[0], oz[2]));
-         return (0, Yz.jsx)(bz.g, {
-           name: Oz("sides" === zz ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
-           min: 0,
-           max: ms(zz),
-           step: 2,
- ... (31 more removed lines; see GitHub link above)
+       var zv;
+       return "emote" === vv ? Nv() : null !== (zv = Tv[vv][0]) && void 0 !== zv ? zv : Wv[vv]
```

#### 53. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2308-L2432` → after: `L880-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L880-L882) · [Before (L2308-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2308-L2432)

```diff
- 
-     function Gs() {
-       const {
-         t: zz
-       } = (0, Fz.B)(), tz = (0, Zz.eb)(), {
-         clientEscMenuOptions: sz
-       } = (0, Kz.h)(["clientEscMenuOptions"]), Xz = (0, rs.i)(), Oz = tz.hudLayouts[Xz], [oz, vz] = (0, Wz.useState)(null), {
-         rowIconsOpen: uz,
-         onRowIconsOpen: Nz,
-         select: wz
-       } = function(zz, tz) {
-         const [sz, Fz] = (0, Wz.useState)((() => Zz.E.some((tz => void 0 !== zz.hudElements[tz] || zz.hudLocked.includes(tz))))), Xz = (0, Wz.useCallback)((zz => {
-           tz(zz), (0, Zz.Q)(zz) && Fz(!0)
-         }), [tz]);
-         return {
-           rowIconsOpen: sz,
- ... (109 more removed lines; see GitHub link above)
+     const Tv = Sv.u.reduce(((vv, zv) => {
+         const Pv = [];
+         for (const ev in hv.i[zv]) {
```

#### 54. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2434-L2468` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L884) · [Before (L2434-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2434-L2468)

```diff
-           null === (sz = Gz.current) || void 0 === sz || sz.setScale(zz, tz)
-         },
-         onScale: (zz, tz) => {
-           fz(zz, {
-             scale: tz
-           }), (0, Jz.reportAnalyticsClick)({
-             id: "hud_layout.edit",
-             value: `size:${zz}`
-           })
-         },
-         onHidden: (zz, tz) => {
-           fz(zz, {
-             hidden: tz
-           }), (0, Jz.reportAnalyticsClick)({
-             id: "hud_layout.edit",
-             value: `${tz?"hide":"show"}:${zz}`
- ... (19 more removed lines; see GitHub link above)
+           "default" === (null === (Sv = (0, hv.o)(zv, ev)) || void 0 === Sv ? void 0 : Sv.cosmeticPack) && Pv.push(ev)
```

#### 55. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2470-L3064` → after: `L886-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/154.js#L886-L888) · [Before (L2470-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/154.js#L2470-L3064)

```diff
-       };
-       return (0, Yz.jsxs)("div", {
-         ref: Tz,
-         className: "HudLayoutSettings",
-         children: [(0, Yz.jsxs)("div", {
-           ref: lz,
-           className: "HudLayoutBody",
-           children: [(0, Yz.jsx)("div", {
-             className: "HudLayoutOrientation",
-             children: zz("landscape" === Xz ? "hudLayout:editingLandscape" : "hudLayout:editingPortrait")
-           }), (0, Yz.jsx)(Ps, {
-             preview: {
-               layout: tz,
-               orientation: Xz,
-               selected: oz,
-               onSelect: wz,
- ... (579 more removed lines; see GitHub link above)
+         return vv[zv] = Pv, vv
+       }), {}),
+       Wv = Sv.u.reduce(((vv, zv) => (vv[zv] = Object.keys(hv.i[zv])[0], vv)), {})
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (708 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L4-L7) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L4)

```diff
-   38492: (zz, tz, sz) => {
+   38629: (vv, zv, Pv) => {
+     function hv(vv) {
+       return !(!vv.lobbyLeaderboardInfo && !vv.lobbyManage)
+     }
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L6-L7` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L9-L15) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L6-L7)

```diff
-       e: () => Xz,
-       f: () => Oz
+       d: () => hv
+     })
+   },
+   38613: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => ev,
+       e: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L9` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L17) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L9)

```diff
-     var Fz = sz(34);
+     var hv = Pv(26);
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L17` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L25) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L17)

```diff
-       Wz !== zz && (Wz = zz, Fz.o.Yg("replayViewer|videoExportChanged"))
+       Sv !== vv && (Sv = vv, hv.j.zC("replayViewer|videoExportChanged"))
```

#### 5. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L20` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L28) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L20)

```diff
-   38372: (zz, tz, sz) => {
+   38489: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L22` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L30) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L22)

```diff
-       d: () => Xz
+       b: () => ev
```

#### 7. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L24-L25` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L32-L33) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L24-L25)

```diff
-     var Fz = sz(34),
-       Wz = sz(1884);
+     var hv = Pv(26),
+       Sv = Pv(1903);
```

#### 8. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L32-L33` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L40-L41) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L32-L33)

```diff
-       const Fz = Wz.e.get("_tasks");
-       null !== Fz && void 0 !== Fz && Fz[tz] && Wz.e.apply({
+       const hv = Sv.c.get("_tasks");
+       null !== hv && void 0 !== hv && hv[zv] && Sv.c.apply({
```

#### 9. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L43` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L51) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L43)

```diff
-     Fz.o.subscribe("clientTaskProgress", (zz => {
+     hv.j.subscribe("clientTaskProgress", (vv => {
```

#### 10. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L47` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L55) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L47)

```diff
-   38514: (zz, tz, sz) => {
+   38626: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L49-L50` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L57-L58) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L49-L50)

```diff
-       d: () => Dz,
-       g: () => gz,
+       b: () => sv,
+       e: () => Cv,
```

#### 12. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L53` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L61) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L53)

```diff
-     var Fz = sz(2637);
+     var hv = Pv(2682);
```

#### 13. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L60` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L68) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L60)

```diff
-         this.width = zz, this.au = tz, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(zz * tz)
+         this.width = vv, this.GT = zv, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(vv * zv)
```

#### 14. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L66` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L74) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L66)

```diff
-         return this.next = (this.next + 1) % this.au, this.size = Math.min(this.size + 1, this.au), sz
+         return this.next = (this.next + 1) % this.GT, this.size = Math.min(this.size + 1, this.GT), Pv
```

#### 15. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L70` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L78) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L70)

```diff
-           tz = (this.next - this.size + this.au) % this.au;
+           zv = (this.next - this.size + this.GT) % this.GT;
```

#### 16. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L72` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L80) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L72)

```diff
-           const Fz = (tz + sz) % this.au * this.width;
+           const hv = (zv + Pv) % this.GT * this.width;
```

#### 17. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L88` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L96) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L88)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.Iy = 0, this.pastLimit = 0, this.lockSkips = 0, this.nb = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.Jq = 0, this.pastLimit = 0, this.lockSkips = 0, this.dC = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L98` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L106) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L98)

```diff
-             case Wz:
+             case Sv:
```

#### 19. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L100-L103` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L108-L111) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L100-L103)

```diff
-             case oz:
-               return void Pz.nb++;
-             case Oz:
-               return Pz.lockSkips++, void(0 === uz && 0 === Nz || zz.outlier(`lock skip dropped raw (${Uz(uz)}, ${Uz(Nz)}) at ${Kz(Fz)} ms`))
+             case pv:
+               return void Gv.dC++;
+             case gv:
+               return Gv.lockSkips++, void(0 === Tv && 0 === Wv || vv.outlier(`lock skip dropped raw (${Nv(Tv)}, ${Nv(Wv)}) at ${lv(hv)} ms`))
```

#### 20. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L107-L108` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L115-L116) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L107-L108)

```diff
-             Yz = `raw (${Uz(uz)}, ${Uz(Nz)}) over ${Kz(vz)} ms, limit ${Uz(Bz)}, filter v (${gz.toFixed(3)}, ${Hz.toFixed(3)}) px/ms, at ${Kz(Fz)} ms`;
-           Dz === Xz ? (Pz.Iy++, zz.outlier(`spike put right: ${Yz} -> turned (${Uz(bz)}, ${Uz(wz)})`)) : rz ? (Pz.pastLimit++, zz.outlier(`kept past limit: ${Yz}`)) : vz > 50 && (Pz.longFrames++, zz.outlier(`long frame: ${Yz}, turned in full`))
+             jv = `raw (${Nv(Tv)}, ${Nv(Wv)}) over ${lv(dv)} ms, limit ${Nv(cv)}, filter v (${Cv.toFixed(3)}, ${iv.toFixed(3)}) px/ms, at ${lv(hv)} ms`;
+           sv === ev ? (Gv.Jq++, vv.outlier(`spike put right: ${jv} -> turned (${Nv(wv)}, ${Nv(av)})`)) : mv ? (Gv.pastLimit++, vv.outlier(`kept past limit: ${jv}`)) : dv > 50 && (Gv.longFrames++, vv.outlier(`long frame: ${jv}, turned in full`))
```

#### 21. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L120` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L128) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L120)

```diff
-           Oz[0] = zz.timeStamp, Oz[1] = sz, Oz[2] = Fz, Oz[3] = Xz ? 1 : 0, this.events.push(Oz), Wz >= 200 && (tz.bigEvents++, this.eventOutlier(`big mousemove (${sz}, ${Fz}) at ${Kz(zz.timeStamp)} ms, lock ${Xz?"po":"free"}`))
+           gv[0] = vv.timeStamp, gv[1] = Pv, gv[2] = hv, gv[3] = ev ? 1 : 0, this.events.push(gv), Sv >= 200 && (zv.bigEvents++, this.eventOutlier(`big mousemove (${Pv}, ${hv}) at ${lv(vv.timeStamp)} ms, lock ${ev?"Vp":"free"}`))
```

#### 22. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L123` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L131) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L123)

```diff
-           (0, Fz.g)("look", `pointer lock ${zz?`gained (${zz.tagName.toLowerCase()})`:"lost"} at ${Kz(performance.now())} ms`)
+           (0, hv.i)("look", `pointer lock ${vv?`gained (${vv.tagName.toLowerCase()})`:"lost"} at ${lv(performance.now())} ms`)
```

#### 23. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L125` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L133) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L125)

```diff
-           (0, Fz.g)("look", `pointer lock request failed at ${Kz(performance.now())} ms`)
+           (0, hv.i)("look", `pointer lock request failed at ${lv(performance.now())} ms`)
```

#### 24. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L127` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L135) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L127)

```diff
-           (0, Fz.g)("look", `page ${document.visibilityState} at ${Kz(performance.now())} ms`)
+           (0, hv.i)("look", `page ${document.visibilityState} at ${lv(performance.now())} ms`)
```

#### 25. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L131` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L139) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L131)

```diff
-           if (this.tally = new uz, 0 === zz.events && 0 === zz.raw[0] && 0 === zz.raw[1] && 0 === zz.lockSkips && 0 === zz.Iy && 0 === zz.dropped) return;
+           if (this.tally = new Tv, 0 === vv.events && 0 === vv.raw[0] && 0 === vv.raw[1] && 0 === vv.lockSkips && 0 === vv.Jq && 0 === vv.dropped) return;
```

#### 26. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L133-L134` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L141-L142) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L133-L134)

```diff
-             sz = [`${zz.frames} frames (${zz.looked} looked, ${zz.idle} idle${"wasm"===this.client?`, ${zz.nb} carried`:""})`, `dt avg ${Kz(tz)} min ${Kz(zz.dtMin)} max ${Kz(zz.dtMax)}, ${zz.longFrames} long`, `${zz.events} mousemoves (max ${Uz(zz.eventMax)} px, ${zz.bigEvents} b … [truncated]
-           zz.dropped > 0 && sz.push(`${zz.dropped} doubled spike copies dropped`), zz.lost > 0 && sz.push(`${zz.lost} records lost`), zz.suppressed > 0 && sz.push(`${zz.suppressed} outlier lines not shown`), (0, Fz.g)("look", `1s: ${sz.join("; ")}`)
+             Pv = [`${vv.frames} frames (${vv.looked} looked, ${vv.idle} idle${"wasm"===this.client?`, ${vv.dC} carried`:""})`, `dt avg ${lv(zv)} min ${lv(vv.dtMin)} max ${lv(vv.dtMax)}, ${vv.longFrames} long`, `${vv.events} mousemoves (max ${Nv(vv.eventMax)} px, ${vv.bigEvents} b … [truncated]
+           vv.dropped > 0 && Pv.push(`${vv.dropped} doubled spike copies dropped`), vv.lost > 0 && Pv.push(`${vv.lost} records lost`), vv.suppressed > 0 && Pv.push(`${vv.suppressed} outlier lines not shown`), (0, hv.i)("look", `1s: ${Pv.join("; ")}`)
```

#### 27. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L142` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L150) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L142)

```diff
-         (0, Fz.g)("look", `start: ${zz} client, dpr ${window.devicePixelRatio}, screen ${sz.width}x${sz.height}, pointer lock ${document.pointerLockElement?"po":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+         (0, hv.i)("look", `start: ${vv} client, dpr ${window.devicePixelRatio}, screen ${Pv.width}x${Pv.height}, pointer lock ${document.pointerLockElement?"Vp":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
```

#### 28. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L149` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L157) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L149)

```diff
-         tz.outliers >= 20 ? tz.suppressed++ : (tz.outliers++, (0, Fz.g)("look", zz))
+         zv.outliers >= 20 ? zv.suppressed++ : (zv.outliers++, (0, hv.i)("look", vv))
```

#### 29. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L153` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L161) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L153)

```diff
-         tz.eventLines >= 10 ? tz.suppressed++ : (tz.eventLines++, (0, Fz.g)("look", zz))
+         zv.eventLines >= 10 ? zv.suppressed++ : (zv.eventLines++, (0, hv.i)("look", vv))
```

#### 30. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L187` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L195) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L187)

```diff
-   38364: (zz, tz, sz) => {
+   38485: (vv, zv, Pv) => {
```

#### 31. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L189-L191` → after: `L197-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L197-L199) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L189-L191)

```diff
-       d: () => Lt,
-       h: () => kt,
-       k: () => it
+       e: () => yz,
+       f: () => Hz,
+       h: () => Mz
```

#### 32. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L193-L201` → after: `L201-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L201-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L201-L209) · [Before (L193-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L193-L201)

```diff
-     var Fz = sz(3348),
-       Wz = sz(161),
-       Xz = sz(201),
-       Oz = sz(585),
-       oz = sz(44),
-       vz = sz(2555),
-       Uz = sz(3433),
-       Kz = sz(3417),
-       uz = sz(1213);
+     var hv = Pv(3438),
+       Sv = Pv(144),
+       ev = Pv(185),
+       gv = Pv(628),
+       pv = Pv(39),
+       dv = Pv(2599),
+       Nv = Pv(3539),
+       lv = Pv(3521),
+       Tv = Pv(1209);
```

#### 33. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L206` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L214) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L206)

```diff
-           bUz: !0
+           Ldv: !0
```

#### 34. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L208-L209` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L216-L217) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L208-L209)

```diff
-         this.callbacks = tz, this.options = sz, this.tsz = void 0, this.sessionId = void 0, this.Hx = [], this.wUz = !1, this.lw = !1, this.DUz = void 0, this.vx = 0, this.tWz = 0, this.gUz = (zz, tz) => {
-           if (this.lw) return;
+         this.callbacks = zv, this.options = Pv, this.jzv = void 0, this.sessionId = void 0, this.pY = [], this.Hdv = !1, this.ea = !1, this.Mdv = void 0, this.hY = 0, this.Fhv = 0, this.ydv = (vv, zv) => {
+           if (this.ea) return;
```

#### 35. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L211` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L219) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L211)

```diff
-           this.wUz ? this.HUz(sz, tz) : this.Hx.push({
+           this.Hdv ? this.Jdv(Pv, zv) : this.pY.push({
```

#### 36. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L216-L217` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L224-L225) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L216-L217)

```diff
-           this.lw || (this.lw = !0, Nz.delete(this), this.Hx.length = 0, this.DUz())
-         }, this.tsz = zz, this.sessionId = zz.sessionId, Nz.set(this, []), this.DUz = this.BUz()
+           this.ea || (this.ea = !0, Wv.delete(this), this.pY.length = 0, this.Mdv())
+         }, this.jzv = vv, this.sessionId = vv.sessionId, Wv.set(this, []), this.Mdv = this.Edv()
```

#### 37. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L219-L220` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L227-L228) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L219-L220)

```diff
-       PUz(zz) {
-         this.DUz(), this.tsz = zz, this.sessionId = zz.sessionId, this.vx = 0, this.tWz = 0, this.DUz = this.BUz()
+       odv(vv) {
+         this.Mdv(), this.jzv = vv, this.sessionId = vv.sessionId, this.hY = 0, this.Fhv = 0, this.Mdv = this.Edv()
```

#### 38. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L223` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L231) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L223)

```diff
-         return this.tWz
+         return this.Fhv
```

#### 39. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L225-L227` → after: `L233-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L233-L235) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L225-L227)

```diff
-       BUz() {
-         const zz = this.tsz.nB("*", this.gUz);
-         return this.options.bUz && this.tsz.qB(this.dispose), zz
+       Edv() {
+         const vv = this.jzv.rG("*", this.ydv);
+         return this.options.Ldv && this.jzv.Tm(this.dispose), vv
```

#### 40. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L229` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L237) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L229)

```diff
-       HUz(zz, tz) {
+       Jdv(vv, zv) {
```

#### 41. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L231` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L239) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L231)

```diff
-           (0, Uz.Zb)(zz) && (tz = (0, Uz.b)(zz, Kz.Lw.from(tz)));
+           (0, Nv.Wb)(vv) && (zv = (0, Nv.b)(vv, lv.Sa.from(zv)));
```

#### 42. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L234-L235` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L242-L243) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L234-L235)

```diff
-             if (this.callbacks.rUz) return void this.callbacks.rUz(zz, tz);
-             throw new Error(`No onMessage handler registered for message id ${zz}`)
+             if (this.callbacks.bdv) return void this.callbacks.bdv(vv, zv);
+             throw new Error(`No onMessage handler registered for message id ${vv}`)
```

#### 43. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L239` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L247) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L239)

```diff
-           this.callbacks.YUz(`Error in onMessage ${zz} with payload ${JSON.stringify(tz)}`, sz)
+           this.callbacks.rdv(`Error in onMessage ${vv} with payload ${JSON.stringify(zv)}`, Pv)
```

#### 44. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L241` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L249) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L241)

```diff
-           this.vx++
+           this.hY++
```

#### 45. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L244` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L252) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L244)

```diff
-       xUz() {
+       Xdv() {
```

#### 46. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L249-L251` → after: `L257-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L257-L259) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L249-L251)

```diff
-           of this.Hx) {
-           if (this.lw) break;
-           this.HUz(zz, tz)
+           of this.pY) {
+           if (this.ea) break;
+           this.Jdv(vv, zv)
```

#### 47. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L253` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L261) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L253)

```diff
-         this.Hx.length = 0
+         this.pY.length = 0
```

#### 48. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L255-L256` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L263-L264) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L255-L256)

```diff
-       zsz() {
-         return this.lw
+       mzv() {
+         return this.ea
```

#### 49. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L258-L259` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L266-L267) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L258-L259)

```diff
-       mUz() {
-         if (this.wUz || this.lw) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+       udv() {
+         if (this.Hdv || this.ea) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
```

#### 50. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L261-L263` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L269-L271) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L261-L263)

```diff
-           nB: (zz, tz) => {
-             if (this.wUz || this.lw) throw new Error("Trying to call onMessage after registration finished");
-             this.nB(zz, tz)
+           rG: (vv, zv) => {
+             if (this.Hdv || this.ea) throw new Error("Trying to call onMessage after registration finished");
+             this.rG(vv, zv)
```

#### 51. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L266-L267` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L274-L275) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L266-L267)

```diff
-             if (this.lw) throw new Error("Cannot finish message registration after disposal");
-             this.wUz = !0, this.xUz()
+             if (this.ea) throw new Error("Cannot finish message registration after disposal");
+             this.Hdv = !0, this.Xdv()
```

#### 52. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L273` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L281) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L273)

```diff
-         null === (sz = (Fz = this.callbacks).JUz) || void 0 === sz || sz.call(Fz);
+         null === (Pv = (hv = this.callbacks).vNv) || void 0 === Pv || Pv.call(hv);
```

#### 53. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L279` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L287) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L279)

```diff
-         this.IUz(), (0, uz.F)(tz) ? this.tsz.Om(zz, tz) : this.tsz.send(zz, tz)
+         this.zNv(), (0, Tv.J)(zv) ? this.jzv.FY(vv, zv) : this.jzv.send(vv, zv)
```

#### 54. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L281` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L289) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L281)

```diff
-       IUz() {
+       zNv() {
```

#### 55. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L283` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L291) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L283)

```diff
-         (this.tWz++, 5 === wz++) && (null === (zz = (tz = this.callbacks).JUz) || void 0 === zz || zz.call(tz), wz = 0)
+         (this.Fhv++, 5 === av++) && (null === (vv = (zv = this.callbacks).vNv) || void 0 === vv || vv.call(zv), av = 0)
```

#### 56. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L286` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L294) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L286)

```diff
-         this.dispose(), this.tsz.YH()
+         this.dispose(), this.jzv.rC()
```

#### 57. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L289` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L297) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L289)

```diff
-         this.dispose(), this.tsz.leave()
+         this.dispose(), this.jzv.leave()
```

#### 58. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L293` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L301) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L293)

```diff
-     var Dz = sz(3365);
+     var sv = Pv(3453);
```

#### 59. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L297-L298` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L305-L306) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L297-L298)

```diff
-           JUz: () => {
-             (0, oz.l)(!0) && (0, Fz.fY)()
+           vNv: () => {
+             (0, pv.m)(!0) && (0, hv.kF)()
```

#### 60. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L300` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L308) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L300)

```diff
-           YUz: (zz, tz) => {
+           rdv: (vv, zv) => {
```

#### 61. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L302` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L310) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L302)

```diff
-             null === (sz = (0, vz.e)()) || void 0 === sz || sz.aD(zz, tz)
+             null === (Pv = (0, dv.g)()) || void 0 === Pv || Pv.Ws(vv, zv)
```

#### 62. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L305-L306` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L313-L314) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L305-L306)

```diff
-           bUz: !1
-         }), (0, Dz.e)(zz)
+           Ldv: !1
+         }), (0, sv.c)(vv)
```

#### 63. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L309` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L317) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L309)

```diff
-         return !!(0, Dz.i)((0, Dz.c)(), this.tsz, zz, tz) && (this.IUz(), !0)
+         return !!(0, sv.i)((0, sv.b)(), this.jzv, vv, zv) && (this.zNv(), !0)
```

#### 64. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L311-L312` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L319-L320) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L311-L312)

```diff
-       PUz(zz) {
-         this.CUz(), super.PUz(zz), (0, Dz.e)(zz)
+       odv(vv) {
+         this.PNv(), super.odv(vv), (0, sv.c)(vv)
```

#### 65. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L315` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L323) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L315)

```diff
-         super.YH(), this.CUz()
+         super.rC(), this.PNv()
```

#### 66. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L317-L318` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L325-L326) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L317-L318)

```diff
-       CUz() {
-         this.tsz.xH.Gw.yJ = void 0
+       PNv() {
+         this.jzv.uC.ow.fD = void 0
```

#### 67. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L321-L324` → after: `L329-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L329-L332) · [Before (L321-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L321-L324)

```diff
-     var Hz = sz(34),
-       Bz = sz(1884),
-       Pz = sz(1664),
-       rz = sz(35962);
+     var iv = Pv(26),
+       cv = Pv(1903),
+       Gv = Pv(1692),
+       mv = Pv(36003);
```

#### 68. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L328-L329` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L336-L337) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L328-L329)

```diff
-       if (!zz.Qr.Rzz(zz.gC)) return console.log("Got resync inven but don't have inven component"), void tz.acknowledge(Fz);
-       Xz && console.error("Had to sync inven"), tz.x_(Fz, Wz) && sz.Yg("chestToggleFromServer", !1, !0), sz.Yg("syncedInvenFromServer")
+       if (!vv.Rm.Cvv(vv.sV)) return console.log("Got resync inven but don't have inven component"), void zv.acknowledge(hv);
+       ev && console.error("Had to sync inven"), zv.j_(hv, Sv) && Pv.zC("chestToggleFromServer", !1, !0), Pv.zC("syncedInvenFromServer")
```

#### 69. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L331-L336` → after: `L339-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L339-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L339-L344) · [Before (L331-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L331-L336)

```diff
-     var xz = sz(38372),
-       mz = sz(38379),
-       Jz = sz(37470),
-       Iz = sz(37237),
-       Cz = sz(580),
-       ez = sz(37829);
+     var fv = Pv(38489),
+       Fv = Pv(38496),
+       Yv = Pv(37569),
+       nv = Pv(37330),
+       Ov = Pv(626),
+       Dv = Pv(37932);
```

#### 70. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L340` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L348) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L340)

```diff
-           const tz = new Int32Array(zz.length * ez.f);
+           const zv = new Int32Array(vv.length * Dv.e);
```

#### 71. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L342` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L350) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L342)

```diff
-             const Fz = sz * ez.f;
+             const hv = Pv * Dv.e;
```

#### 72. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L355-L356` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L363-L364) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L355-L356)

```diff
-       zz.client.gameRecorder.isCapturing() ? (0, ez.db)(Fz, (0, ez.cb)(Fz), Wz) : zz.CN.PN.JA(Fz, {
-         Wy: Wz,
+       vv.client.gameRecorder.isCapturing() ? (0, Dv.rb)(hv, (0, Dv.ob)(hv), Sv) : vv.vW.oT.mq(hv, {
+         Iq: Sv,
```

#### 73. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L364-L368` → after: `L372-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L372-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L372-L376) · [Before (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L364-L368)

```diff
-           for (let Oz = 0; Oz < sz.length; Oz += ez.f)
-             for (let tz = (0, Cz.N)(sz[Oz]); tz <= (0, Cz.N)(sz[Oz + 3]); tz++)
-               for (let Fz = (0, Cz.N)(sz[Oz + 1]); Fz <= (0, Cz.N)(sz[Oz + 4]); Fz++)
-                 for (let oz = (0, Cz.N)(sz[Oz + 2]); oz <= (0, Cz.N)(sz[Oz + 5]); oz++) {
-                   const sz = `${tz}|${Fz}|${oz}`;
+           for (let gv = 0; gv < Pv.length; gv += Dv.e)
+             for (let zv = (0, Ov.Y)(Pv[gv]); zv <= (0, Ov.Y)(Pv[gv + 3]); zv++)
+               for (let hv = (0, Ov.Y)(Pv[gv + 1]); hv <= (0, Ov.Y)(Pv[gv + 4]); hv++)
+                 for (let pv = (0, Ov.Y)(Pv[gv + 2]); pv <= (0, Ov.Y)(Pv[gv + 5]); pv++) {
+                   const Pv = `${zv}|${hv}|${pv}`;
```

#### 74. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L373` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L381) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L373)

```diff
-       }), zz.CN.o4()
+       }), vv.vW.K9()
```

#### 75. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L375-L380` → after: `L383-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L383-L388) · [Before (L375-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L375-L380)

```diff
-     var Gz = sz(36538),
-       Tz = sz(38388),
-       cz = sz(38391),
-       jz = sz(991),
-       Az = sz(1888);
-     var yz = sz(4145);
+     var Vv = Pv(36645),
+       Uv = Pv(38502),
+       Rv = Pv(38505),
+       xv = Pv(1002),
+       tv = Pv(1908);
+     var qv = Pv(4260);
```

#### 76. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L383` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L391) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L383)

```diff
-       const tz = zz.PN;
+       const zv = vv.oT;
```

#### 77. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L393` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L401) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L393)

```diff
-         const [uz, Nz, bz] = zz.Qr.yB(zz.gC), wz = ! function(zz) {
+         const [Tv, Wv, wv] = vv.Rm.yG(vv.sV), av = ! function(vv) {
```

#### 78. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L395` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L403) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L395)

```diff
-           let sz = null === (tz = zz.Qr.Mtz(zz.gC)) || void 0 === tz ? void 0 : tz.yw;
+           let Pv = null === (zv = vv.Rm.vzv(vv.sV)) || void 0 === zv ? void 0 : zv.Xw;
```

#### 79. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L401` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L409) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L401)

```diff
-             const tz = zz.Qr.getState(sz, "smoothToServerPos"),
+             const zv = vv.Rm.getState(Pv, "smoothToServerPos"),
```

#### 80. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L404` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L412) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L404)

```diff
-               const tz = zz.Qr.yB(sz);
+               const zv = vv.Rm.yG(Pv);
```

#### 81. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L407` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L415) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L407)

```diff
-             sz = null === (Wz = zz.Qr.Mtz(sz)) || void 0 === Wz ? void 0 : Wz.yw
+             Pv = null === (Sv = vv.Rm.vzv(Pv)) || void 0 === Sv ? void 0 : Sv.Xw
```

#### 82. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L411` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L419) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L411)

```diff
-           const Wz = Xz.d.pw;
+           const Sv = ev.f.aa;
```

#### 83. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L414` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L422) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L414)

```diff
-             if (!(0, yz.g)(tz, sz, Fz, Oz[0] * Wz, Oz[1] * Wz, Oz[2] * Wz)) return !1
+             if (!(0, qv.i)(zv, Pv, hv, gv[0] * Sv, gv[1] * Sv, gv[2] * Sv)) return !1
```

#### 84. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L417-L419` → after: `L425-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L425-L427) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L417-L419)

```diff
-         }(tz.rg.nw, uz, Nz, bz), Dz = null === oz || Math.abs(uz - oz[0]) > 8 || Math.abs(Nz - oz[1]) > 8 || Math.abs(bz - oz[2]) > 8, gz = !vz || Dz || performance.now() - Oz >= 1e4;
-         vz = wz, wz && gz && (Wz = Kz, Oz = performance.now(), oz = [uz, Nz, bz], (0, Fz.sendColyMessage)(Uz.eg, {
-           LU: Kz
+         }(zv.bs.ga, Tv, Wv, wv), sv = null === pv || Math.abs(Tv - pv[0]) > 8 || Math.abs(Wv - pv[1]) > 8 || Math.abs(wv - pv[2]) > 8, Cv = !dv || sv || performance.now() - gv >= 1e4;
+         dv = av, av && Cv && (Sv = lv, gv = performance.now(), pv = [Tv, Wv, wv], (0, hv.sendColyMessage)(Nv.ig, {
+           zl: lv
```

#### 85. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L422-L423` → after: `L430-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L430-L431) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L422-L423)

```diff
-       return zz.on("wN", Kz), () => {
-         zz.off("wN", Kz)
+       return vv.on("MT", lv), () => {
+         vv.off("MT", lv)
```

#### 86. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L426-L427` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L434-L435) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L426-L427)

```diff
-     var dz = sz(36201),
-       hz = sz(330),
+     var Qv = Pv(36284),
+       Zv = Pv(327),
```

#### 87. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L429-L458` → after: `L437-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L437-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L437-L466) · [Before (L429-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L429-L458)

```diff
-       kz = sz(6057),
-       iz = sz(37508),
-       Lz = sz(37207),
-       lz = sz(37188),
-       nz = sz(4165),
-       az = sz(37543),
-       qz = sz(37340),
-       Sz = sz(36785),
-       Vz = sz(37070),
-       Rz = sz(38393),
-       pz = sz(36197),
-       fz = sz(36199),
-       Ez = sz(38399),
-       zt = sz(38402),
-       tt = sz(3319),
-       st = sz(1483),
- ... (14 more removed lines; see GitHub link above)
+       Lv = Pv(6192),
+       Hv = Pv(37609),
+       Mv = Pv(37304),
+       yv = Pv(37281),
+       Bv = Pv(4279),
+       Jv = Pv(37637),
+       Ev = Pv(37441),
+       ov = Pv(36878),
+       bv = Pv(37182),
+       rv = Pv(38509),
+       kv = Pv(36269),
+       Xv = Pv(36271),
+       uv = Pv(38511),
+       vz = Pv(38515),
+       zz = Pv(3407),
+       Pz = Pv(1492),
+ ... (14 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L461` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L469) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L461)

```diff
-         this.gameNameWithVariation = zz, this.CN = sz, this.connectionResume = Fz, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new Dt.b(tz, this.CN)
+         this.gameNameWithVariation = vv, this.vW = Pv, this.connectionResume = hv, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new sz.e(zv, this.vW)
```

#### 89. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L468-L469` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L476-L477) · [Before (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L468-L469)

```diff
-       PUz(zz) {
-         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Dt.b(zz, this.CN), this.stateReplicationHandler.setup()
+       odv(vv) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new sz.e(vv, this.vW), this.stateReplicationHandler.setup()
```

#### 90. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L472-L473` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L480-L481) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L472-L473)

```diff
-         const zz = this.CN.PN;
-         zz.ntz = new Set, zz.Stz = new Set, zz.atz = new Set, zz.Vtz = new Set, zz.qtz = [], zz.Rtz = [], zz.aG = new Set, zz.EX = [], zz.pG = []
+         const vv = this.vW.oT;
+         vv.Nzv = new Set, vv.Wzv = new Set, vv.lzv = new Set, vv.wzv = new Set, vv.Tzv = [], vv.szv = [], vv.oR = new Set, vv.nP = [], vv.bR = []
```

#### 91. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L476` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L484) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L476)

```diff
-         ot.e.reset(), (0, mz.c)()
+         pz.d.reset(), (0, Fv.b)()
```

#### 92. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L485-L489` → after: `L493-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L493-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L493-L497) · [Before (L485-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L485-L489)

```diff
-                 const Xz = Math.ceil(zz.Tm[0]),
-                   Oz = Math.ceil(zz.Tm[1]);
-                 tz && tz[0] === Xz && tz[1] === Oz || (tz = [Xz, Oz], sz = performance.now(), (0, Fz.sendColyMessage)(Uz.bg, {
-                   YO: Xz,
-                   xO: Oz
+                 const ev = Math.ceil(vv.AY[0]),
+                   gv = Math.ceil(vv.AY[1]);
+                 zv && zv[0] === ev && zv[1] === gv || (zv = [ev, gv], Pv = performance.now(), (0, hv.sendColyMessage)(Nv.fg, {
+                   Il: ev,
+                   Ql: gv
```

#### 93. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L498-L499` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L506-L507) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L498-L499)

```diff
-           }(this.CN.PN),
-           tz = Mz(this.CN);
+           }(this.vW.oT),
+           zv = Iv(this.vW);
```

#### 94. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L505` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L513) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L505)

```diff
-         (0, Vz.q)(this.CN, (0, vz.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Rz.e)), this.startChunkReports()
+         (0, bv.m)(this.vW, (0, dv.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - rv.b)), this.startChunkReports()
```

#### 95. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L508` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L516) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L508)

```diff
-         const sz = this.CN,
+         const Pv = this.vW,
```

#### 96. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L510` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L518) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L510)

```diff
-         zz.nB(Uz.ic, (zz => {
+         vv.rG(Nv.ec, (vv => {
```

#### 97. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L512-L520` → after: `L520-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L520-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L520-L528) · [Before (L512-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L512-L520)

```diff
-             YF: tz,
-             mF: Fz,
-             JF: Wz,
-             IF: Xz,
-             CF: Oz,
-             eF: oz,
-             ZF: vz,
-             GF: Uz,
-             TF: Kz
+             yh: zv,
+             Bh: hv,
+             Jh: Sv,
+             Eh: ev,
+             oh: gv,
+             bh: pv,
+             rh: dv,
+             kh: Nv,
+             Xh: lv
```

#### 98. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L522` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L530) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L522)

```diff
-           if (!sz.Qr.Xzz(tz, "itemState")) return void(0, Lz.n)(sz, tz, [Oz, oz, vz], Fz, {
+           if (!Pv.Rm.R7(zv, "itemState")) return void(0, Mv.k)(Pv, zv, [gv, pv, dv], hv, {
```

#### 99. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L525` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L533) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L525)

```diff
-             GF: Uz,
+             kh: Nv,
```

#### 100. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L528-L536` → after: `L536-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L536-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L536-L544) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L528-L536)

```diff
-           const uz = sz.Qr.getState(tz, "itemState");
-           uz.amount = Wz, uz.GF = Uz, uz.creationTime = Date.now(), (0, lz.setServerPosition)(sz.Qr.getState(tz, "smoothToServerPos"), Oz, oz, vz)
-         })), zz.nB(Uz.eb, (zz => {
-           (0, Gz.b)(sz).setCantPickUp(zz, !0), sz.Qr.Xzz(zz, "itemState") && (sz.Qr.getState(zz, "itemState").GF = !0)
-         })), zz.nB(Uz.Fd, (zz => {
-           (0, Gz.b)(sz).setCantPickUp(zz, !1), sz.Qr.Xzz(zz, "itemState") && (sz.Qr.getState(zz, "itemState").GF = !1)
-         })), zz.nB(Uz.Fc, (zz => {
-           Bz.e.applyNewClientOptions(zz)
-         })), zz.nB(Uz.Jc, (zz => {
+           const Tv = Pv.Rm.getState(zv, "itemState");
+           Tv.amount = Sv, Tv.kh = Nv, Tv.creationTime = Date.now(), (0, yv.setServerPosition)(Pv.Rm.getState(zv, "smoothToServerPos"), gv, pv, dv)
+         })), vv.rG(Nv.ab, (vv => {
+           (0, Vv.c)(Pv).setCantPickUp(vv, !0), Pv.Rm.R7(vv, "itemState") && (Pv.Rm.getState(vv, "itemState").kh = !0)
+         })), vv.rG(Nv.Gd, (vv => {
+           (0, Vv.c)(Pv).setCantPickUp(vv, !1), Pv.Rm.R7(vv, "itemState") && (Pv.Rm.getState(vv, "itemState").kh = !1)
+         })), vv.rG(Nv.Hc, (vv => {
+           cv.c.applyNewClientOptions(vv)
+         })), vv.rG(Nv.Lc, (vv => {
```

#### 101. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L541-L545` → after: `L549-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L549-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L549-L553) · [Before (L541-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L541-L545)

```diff
-           (0, Nt.g)(tz);
-           for (const sz in Fz)(0, Nt.e)(tz, sz, Fz[sz]);
-           if ("canSee" in Fz && sz.Qr.Xzz(tz, "hidingMeshManager")) {
-             const zz = sz.Qr.getState(tz, "hidingMeshManager");
-             zz.canSee = (0, bt.c)("canSee", Fz.canSee), zz._forceUpdate = !0
+           (0, Wz.f)(zv);
+           for (const Pv in hv)(0, Wz.b)(zv, Pv, hv[Pv]);
+           if ("canSee" in hv && Pv.Rm.R7(zv, "hidingMeshManager")) {
+             const vv = Pv.Rm.getState(zv, "hidingMeshManager");
+             vv.canSee = (0, wz.e)("canSee", hv.canSee), vv._forceUpdate = !0
```

#### 102. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L547` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L555) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L547)

```diff
-         })), zz.nB(Uz.Qe, (zz => {
+         })), vv.rG(Nv.Re, (vv => {
```

#### 103. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L549-L552` → after: `L557-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L557-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L557-L560) · [Before (L549-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L549-L552)

```diff
-             xs: tz,
-             Is: Wz,
-             Cs: Xz,
-             es: Oz
+             ZS: zv,
+             AS: Sv,
+             LS: ev,
+             HS: gv
```

#### 104. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L555-L558` → after: `L563-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L563-L566) · [Before (L555-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L555-L558)

```diff
-           sz.Qr.setPosition(sz.gC, oz), (0, Fz.sendColyMessage)(Uz.zg, {
-             QK: tz,
-             kK: nz.e
-           }), Hz.o.Yg("localPlayerTeleported", {
+           Pv.Rm.setPosition(Pv.sV, pv), (0, hv.sendColyMessage)(Nv.Lg, {
+             ip: zv,
+             cp: Bv.f
+           }), iv.j.zC("localPlayerTeleported", {
```

#### 105. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L562` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L570) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L562)

```diff
-         })), zz.nB(Uz.Uc, (zz => {
+         })), vv.rG(Nv.Vc, (vv => {
```

#### 106. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L564-L567` → after: `L572-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L572-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L572-L575) · [Before (L564-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L564-L567)

```diff
-             cW: tz,
-             jW: sz,
-             AW: Fz,
-             yW: Wz
+             dh: zv,
+             Nh: Pv,
+             Th: hv,
+             Wh: Sv
```

#### 107. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L571` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L579) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L571)

```diff
-           Hz.o.Yg(`otherPlayerTeleported|${tz}`, {
+           iv.j.zC(`otherPlayerTeleported|${zv}`, {
```

#### 108. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L574` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L582) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L574)

```diff
-         })), zz.nB(Uz.ld, (zz => {
+         })), vv.rG(Nv.jd, (vv => {
```

#### 109. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L576-L585` → after: `L584-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L584-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L584-L593) · [Before (L576-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L576-L585)

```diff
-             tX: tz,
-             sX: Wz,
-             FX: Xz,
-             WX: Oz,
-             XX: oz,
-             OX: vz,
-             oX: Kz,
-             UX: uz,
-             vX: Nz,
-             NX: bz
+             az: zv,
+             sz: Sv,
+             Cz: ev,
+             iz: gv,
+             Gz: pv,
+             mz: dv,
+             jz: lv,
+             Fz: Tv,
+             fz: Wv,
+             Oz: wv
```

#### 110. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L588-L594` → after: `L596-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L596-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L596-L602) · [Before (L588-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L588-L594)

```diff
-           sz.Qr.setPosition(sz.gC, wz);
-           const Dz = sz.Qr.mzz(sz.gC),
-             gz = sz.Qr.eT(sz.gC);
-           Qz().set(gz.mG, 0, 0, 0), Qz().set(gz.JG, 0, 0, 0), Qz().set(gz.hb, oz, vz, Kz), gz.yG(), Dz._flying = null !== bz, bz ? (Dz.flyAccel.bX = bz.bX, Dz.flyAccel.wX = bz.wX) : Dz.flyAccel.reset(), uz && Dz.movementType === kz.o.GLIDING && (Dz.KX = uz.KX, Qz().copy(Dz.uX, uz … [truncated]
-             QK: tz,
-             kK: nz.e
-           }), Hz.o.Yg("localPlayerTeleported", {
+           Pv.Rm.setPosition(Pv.sV, av);
+           const sv = Pv.Rm.I3(Pv.sV),
+             Cv = Pv.Rm.vx(Pv.sV);
+           Av().set(Cv.vR, 0, 0, 0), Av().set(Cv.gR, 0, 0, 0), Av().set(Cv.pC, pv, dv, lv), Cv.pR(), sv._flying = null !== wv, wv ? (sv.flyAccel.Dz = wv.Dz, sv.flyAccel.Kz = wv.Kz) : sv.flyAccel.reset(), Tv && sv.movementType === Lv.p.GLIDING && (sv.Yz = Tv.Yz, Av().copy(sv.nz, Tv … [truncated]
+             ip: zv,
+             cp: Bv.f
+           }), iv.j.zC("localPlayerTeleported", {
```

#### 111. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L601` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L609) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L601)

```diff
-           return sz.Qr.pzz(sz.gC)
+           return Pv.Rm.ivv(Pv.sV)
```

#### 112. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L603` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L611) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L603)

```diff
-         zz.nB(Uz.nb, (zz => {
+         vv.rG(Nv.nb, (vv => {
```

#### 113. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L609` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L617) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L609)

```diff
-           Hz.o.Yg("chat", {
+           iv.j.zC("chat", {
```

#### 114. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L614-L616` → after: `L622-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L622-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L622-L624) · [Before (L614-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L614-L616)

```diff
-         })), zz.nB(Uz.ad, (zz => {
-           Ft.c.onReceiveColyseusPing(zz)
-         })), zz.nB(Uz.oe, (zz => {
+         })), vv.rG(Nv.cd, (vv => {
+           hz.d.onReceiveColyseusPing(vv)
+         })), vv.rG(Nv.oe, (vv => {
```

#### 115. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L622-L623` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L630-L631) · [Before (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L622-L623)

```diff
-         })), zz.nB(Uz.te, (zz => {
-           Hz.o.Yg("setDiscordReportKey", zz)
+         })), vv.rG(Nv.re, (vv => {
+           iv.j.zC("setDiscordReportKey", vv)
```

#### 116. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L626` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L634) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L626)

```diff
-         })), zz.nB(Uz.bc, (tz => {
+         })), vv.rG(Nv.Yb, (zv => {
```

#### 117. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L628-L629` → after: `L636-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L636-L637) · [Before (L628-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L628-L629)

```diff
-             Rt: Wz,
-             ft: Xz
+             LP: Sv,
+             HP: ev
```

#### 118. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L631` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L639) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L631)

```diff
-           if ((0, Fz.setAdjustment)(Xz), this.connectionResume.onInitialInfo(tz.Et, tz.zs), Fz.offlineInputReplay.Xx(tz.Fs), this.connectionResume.isResuming()) {
+           if ((0, hv.setAdjustment)(ev), this.connectionResume.onInitialInfo(zv.MP, zv.yP), hv.offlineInputReplay.uF(zv.BP), this.connectionResume.isResuming()) {
```

#### 119. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L634` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L642) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L634)

```diff
-               null === tz.Ws && (0, vz.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Bz.e.apply({
+               null === zv.JP && (0, dv.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), cv.c.apply({
```

#### 120. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L636` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L644) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L636)

```diff
-                 _shopVersion: Az.e
+                 _shopVersion: tv.d
```

#### 121. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L638-L639` → after: `L646-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L646-L647) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L638-L639)

```diff
-               const Fz = sz.Qr.Ezz(sz.gC);
-               Fz.zF && (Fz.chestClosed(), Hz.o.Yg("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Hz.o.Yg("initInfoReceived", zz)
+               const hv = Pv.Rm.cvv(Pv.sV);
+               hv.qh && (hv.chestClosed(), iv.j.zC("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), iv.j.zC("initInfoReceived", vv)
```

#### 122. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L641` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L649) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L641)

```diff
-               const zz = null === tz.Ws ? null : {
+               const vv = null === zv.JP ? null : {
```

#### 123. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L645` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L653) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L645)

```diff
-               this.replayResume = zz, this.connectionResume.onResumeInitialInfo(tz.Ws, (() => {
+               this.replayResume = vv, this.connectionResume.onResumeInitialInfo(zv.JP, (() => {
```

#### 124. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L649-L650` → after: `L657-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L657-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L657-L658) · [Before (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L649-L650)

```diff
-           } else console.log("Local client is eId", Wz), Hz.o.Yg("loadingScreenState", "loadingPage:loadingWorld"), sz.Uzz = Wz, sz.Qr.Xzz(sz.gC, sz.Qr.names.entityName) && sz.Qr.pI(sz.gC, sz.Qr.names.entityName), (0, vz.d)().setEntityName(sz.Uzz, (0, vz.d)().getRawEntityName(sz. … [truncated]
-         })), zz.nB(Uz.Zd, (() => {
+           } else console.log("Local client is eId", Sv), iv.j.zC("loadingScreenState", "loadingPage:loadingWorld"), Pv.W8 = Sv, Pv.Rm.R7(Pv.sV, Pv.Rm.names.entityName) && Pv.Rm.bK(Pv.sV, Pv.Rm.names.entityName), (0, dv.d)().setEntityName(Pv.W8, (0, dv.d)().getRawEntityName(Pv.sV) … [truncated]
+         })), vv.rG(Nv.Xd, (() => {
```

#### 125. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L662-L663` → after: `L670-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L670-L671) · [Before (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L662-L663)

```diff
-               const Fz = null !== (Oz = zz.endSeq) && void 0 !== Oz ? Oz : tz.lastActionSeq;
-               tz.forget((zz => zz > Wz.XF && zz <= Fz || Xz.has(zz))), Yz(sz, tz, Hz.o, Wz.XF, Wz.load)
+               const hv = null !== (gv = vv.endSeq) && void 0 !== gv ? gv : zv.lastActionSeq;
+               zv.forget((vv => vv > Sv.Lh && vv <= hv || ev.has(vv))), jv(Pv, zv, iv.j, Sv.Lh, Sv.load)
```

#### 126. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L666-L668` → after: `L674-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L674-L676) · [Before (L666-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L666-L668)

```diff
-         })), zz.nB(Uz.Se, (zz => {
-           Hz.o.Yg("TopRightHelper", zz, !0)
-         })), zz.nB(Uz.pd, (zz => {
+         })), vv.rG(Nv.Te, (vv => {
+           iv.j.zC("TopRightHelper", vv, !0)
+         })), vv.rG(Nv.pd, (vv => {
```

#### 127. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L676` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L684) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L676)

```diff
-           (0, Wt.u)({
+           (0, Sz.z)({
```

#### 128. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L683` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L691) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L683)

```diff
-         })), zz.nB(Uz.Vd, (zz => {
+         })), vv.rG(Nv.Ud, (vv => {
```

#### 129. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L691` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L699) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L691)

```diff
-           (0, Wt.v)({
+           (0, Sz.D)({
```

#### 130. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L698-L716` → after: `L706-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L706-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L706-L724) · [Before (L698-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L698-L716)

```diff
-         })), zz.nB(Uz.U, (zz => {
-           sz.PN.ntz.add(zz), sz.PN.Stz.delete(zz)
-         })), zz.nB(Uz.$, (zz => {
-           sz.PN.Stz.add(zz), sz.PN.ntz.delete(zz)
-         })), zz.nB(Uz.Hd, (zz => {
-           sz.PN.Stz.delete(zz), sz.PN.ntz.delete(zz)
-         })), zz.nB(Uz.Z, (zz => {
-           sz.PN.atz.add(zz), sz.PN.Vtz.delete(zz)
-         })), zz.nB(Uz.db, (zz => {
-           sz.PN.Vtz.add(zz), sz.PN.atz.delete(zz)
-         })), zz.nB(Uz.Nd, (zz => {
-           sz.PN.Vtz.delete(zz), sz.PN.atz.delete(zz)
-         })), zz.nB(Uz.W, (zz => {
-           (0, uz.kb)(zz, sz.PN.Rtz), (0, uz.kb)(zz, sz.PN.qtz), sz.PN.qtz.push(zz)
-         })), zz.nB(Uz.ab, (zz => {
-           (0, uz.kb)(zz, sz.PN.qtz), (0, uz.kb)(zz, sz.PN.Rtz), sz.PN.Rtz.push(zz)
- ... (3 more removed lines; see GitHub link above)
+         })), vv.rG(Nv.Q, (vv => {
+           Pv.oT.Nzv.add(vv), Pv.oT.Wzv.delete(vv)
+         })), vv.rG(Nv.V, (vv => {
+           Pv.oT.Wzv.add(vv), Pv.oT.Nzv.delete(vv)
+         })), vv.rG(Nv.Id, (vv => {
+           Pv.oT.Wzv.delete(vv), Pv.oT.Nzv.delete(vv)
+         })), vv.rG(Nv.T, (vv => {
+           Pv.oT.lzv.add(vv), Pv.oT.wzv.delete(vv)
+         })), vv.rG(Nv.Z, (vv => {
+           Pv.oT.wzv.add(vv), Pv.oT.lzv.delete(vv)
+         })), vv.rG(Nv.Kd, (vv => {
+           Pv.oT.wzv.delete(vv), Pv.oT.lzv.delete(vv)
+         })), vv.rG(Nv.S, (vv => {
+           (0, Tv.ib)(vv, Pv.oT.szv), (0, Tv.ib)(vv, Pv.oT.Tzv), Pv.oT.Tzv.push(vv)
+         })), vv.rG(Nv.Y, (vv => {
+           (0, Tv.ib)(vv, Pv.oT.Tzv), (0, Tv.ib)(vv, Pv.oT.szv), Pv.oT.szv.push(vv)
+ ... (3 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L718-L719` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L726-L727) · [Before (L718-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L718-L719)

```diff
-             gF: tz,
-             HF: Fz
+             Vh: zv,
+             Uh: hv
```

#### 132. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L721-L722` → after: `L729-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L729-L730) · [Before (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L721-L722)

```diff
-           Fz ? sz.PN.aG.delete(tz) : sz.PN.aG.add(tz)
-         })), zz.nB(Uz.ff, (zz => {
+           hv ? Pv.oT.oR.delete(zv) : Pv.oT.oR.add(zv)
+         })), vv.rG(Nv.ff, (vv => {
```

#### 133. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L724-L725` → after: `L732-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L732-L733) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L724-L725)

```diff
-             EX: tz,
-             zO: Fz
+             nP: zv,
+             OP: hv
```

#### 134. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L727` → after: `L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L735) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L727)

```diff
-           Oz.updateWalkThroughRect(sz.gC, tz, Fz)
+           gv.updateWalkThroughRect(Pv.sV, zv, hv)
```

#### 135. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L730-L734` → after: `L738-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L738-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L738-L742) · [Before (L730-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L730-L734)

```diff
-         })), zz.nB(Uz.Ne, (zz => {
-           (0, xz.d)(zz)
-         })), zz.nB(Uz.Xb, (zz => {
-           Jz.c.applyServerUpdate(zz)
-         })), zz.nB(Uz.fb, (zz => {
+         })), vv.rG(Nv.Oe, (vv => {
+           (0, fv.b)(vv)
+         })), vv.rG(Nv.Ub, (vv => {
+           Yv.d.applyServerUpdate(vv)
+         })), vv.rG(Nv.eb, (vv => {
```

#### 136. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L738-L739` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L746-L747) · [Before (L738-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L738-L739)

```diff
-                   tO: sz,
-                   sO: Fz
+                   rP: Pv,
+                   kP: hv
```

#### 137. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L742` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L750) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L742)

```diff
-                 const tz = Iz.b[Fz];
+                 const zv = nv.c[hv];
```

#### 138. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L750` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L758) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L750)

```diff
-                   zz.HJ(sz[0] - Fz, sz[1] - Wz, sz[2] - Xz, Oz)
+                   vv.eD(Pv[0] - hv, Pv[1] - Sv, Pv[2] - ev, gv)
```

#### 139. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L754-L756` → after: `L762-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L762-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L762-L764) · [Before (L754-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L754-L756)

```diff
-                   tO: sz,
-                   sO: Fz,
-                   FO: Wz
+                   rP: Pv,
+                   kP: hv,
+                   XP: Sv
```

#### 140. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L760` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L768) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L760)

```diff
-           })), Hz.o.Yg("changeBlockFail", zz), Oz.client.triggerGameCallback("onChangeBlockFail", zz), Hz.o.Yg("EditBoard", {
+           })), iv.j.zC("changeBlockFail", vv), gv.client.triggerGameCallback("onChangeBlockFail", vv), iv.j.zC("EditBoard", {
```

#### 141. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L762` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L770) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L762)

```diff
-           }), Hz.o.Yg("EditCodeBlock", {
+           }), iv.j.zC("EditCodeBlock", {
```

#### 142. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L766` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L774) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L766)

```diff
-         })), zz.nB(Uz._c, (zz => {
+         })), vv.rG(Nv._c, (vv => {
```

#### 143. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L779` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L787) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L779)

```diff
-             typeObj: Lz.D[Fz],
+             typeObj: Mv.w[hv],
```

#### 144. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L783` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L791) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L783)

```diff
-         })), zz.nB(Uz.ue, (zz => {
+         })), vv.rG(Nv.ue, (vv => {
```

#### 145. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L791-L793` → after: `L799-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L799-L801) · [Before (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L791-L793)

```diff
-           const oz = sz.Qr.Ezz(sz.gC);
-           (tz < oz.playerInventory.numSlots || oz.zF || oz.inCreative) && oz.setItemSlot(tz, Fz, Wz, Xz), (0, vz.d)().client.inventoryPrediction.serverChangeApplied(Oz)
-         })), zz.nB(Uz.Ke, (zz => {
+           const pv = Pv.Rm.cvv(Pv.sV);
+           (zv < pv.playerInventory.numSlots || pv.qh || pv.inCreative) && pv.setItemSlot(zv, hv, Sv, ev), (0, dv.d)().client.inventoryPrediction.serverChangeApplied(gv)
+         })), vv.rG(Nv.Ke, (vv => {
```

#### 146. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L795-L797` → after: `L803-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L803-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L803-L805) · [Before (L795-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L795-L797)

```diff
-             fs: tz,
-             WF: Fz,
-             XF: Wz
+             Rh: zv,
+             Ah: hv,
+             Lh: Sv
```

#### 147. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L802` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L810) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L802)

```diff
-             sz.Qr.Ezz(sz.gC).loadFromString(tz)
+             Pv.Rm.cvv(Pv.sV).loadFromString(zv)
```

#### 148. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L805` → after: `L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L813) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L805)

```diff
-             XF: Wz,
+             Lh: Sv,
```

#### 149. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L807-L808` → after: `L815-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L815-L816) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L807-L808)

```diff
-           }), Yz(sz, Xz, Hz.o, Wz, Oz, Fz)
-         })), zz.nB(Uz.hc, (zz => {
+           }), jv(Pv, ev, iv.j, Sv, gv, hv)
+         })), vv.rG(Nv.bc, (vv => {
```

#### 150. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L810` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L818) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L810)

```diff
-         })), zz.nB(Uz.A, (zz => {
+         })), vv.rG(Nv.x, (vv => {
```

#### 151. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L812-L815` → after: `L820-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L820-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L820-L823) · [Before (L812-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L812-L815)

```diff
-             IX: tz,
-             CX: sz,
-             eX: Fz,
-             ZX: Wz
+             IP: zv,
+             QP: Pv,
+             ZP: hv,
+             AP: Sv
```

#### 152. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L818` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L826) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L818)

```diff
-         })), zz.nB(Uz.wb, (zz => {
+         })), vv.rG(Nv.sb, (vv => {
```

#### 153. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L820` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L828) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L820)

```diff
-         })), zz.nB(Uz.tc, (zz => {
+         })), vv.rG(Nv.qc, (vv => {
```

#### 154. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L827` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L835) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L827)

```diff
-           (0, Wt.H)({
+           (0, Sz.M)({
```

#### 155. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L833` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L841) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L833)

```diff
-         })), zz.nB(Uz.Gb, (zz => {
+         })), vv.rG(Nv.Bb, (vv => {
```

#### 156. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L840` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L848) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L840)

```diff
-           (0, Wt.r)({
+           (0, Sz.t)({
```

#### 157. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L848` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L856) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L848)

```diff
-         zz.nB(Uz.Cb, (zz => {
+         vv.rG(Nv.xb, (vv => {
```

#### 158. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L850` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L858) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L850)

```diff
-             Zz(Oz, Jz.c, zz)
+             Kv(gv, Yv.d, vv)
```

#### 159. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L852-L854` → after: `L860-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L860-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L860-L862) · [Before (L852-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L852-L854)

```diff
-         })), zz.nB(Uz.ye, (zz => {
-           Hz.o.Yg("setSelectedInventorySlotI", zz, !0)
-         })), zz.nB(Uz.sc, (zz => {
+         })), vv.rG(Nv.ve, (vv => {
+           iv.j.zC("setSelectedInventorySlotI", vv, !0)
+         })), vv.rG(Nv.nc, (vv => {
```

#### 160. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L860` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L868) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L860)

```diff
-           Hz.o.Yg("leaderboardResponse", {
+           iv.j.zC("leaderboardResponse", {
```

#### 161. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L865` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L873) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L865)

```diff
-         })), zz.nB(Uz.Q, (zz => {
+         })), vv.rG(Nv.M, (vv => {
```

#### 162. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L867-L868` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L875-L876) · [Before (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L867-L868)

```diff
-             YX: tz,
-             xX: sz
+             xz: zv,
+             tz: Pv
```

#### 163. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L870` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L878) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L870)

```diff
-           this.stateReplicationHandler.setUpIfQueued(tz), tz = (0, dz.d)(tz), (0, vz.d)().client.gameRecorder.recordBulletShot(tz, sz), Hz.o.Yg(`bulletShot|${tz}`, {
+           this.stateReplicationHandler.setUpIfQueued(zv), zv = (0, Qv.b)(zv), (0, dv.d)().client.gameRecorder.recordBulletShot(zv, Pv), iv.j.zC(`bulletShot|${zv}`, {
```

#### 164. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L873` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L881) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L873)

```diff
-         })), zz.nB(Uz.Yb, (zz => {
+         })), vv.rG(Nv.Vb, (vv => {
```

#### 165. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L875-L876` → after: `L883-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L883-L884) · [Before (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L875-L876)

```diff
-             PF: tz,
-             rF: sz
+             Je: zv,
+             Ee: Pv
```

#### 166. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L878-L879` → after: `L886-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L886-L887) · [Before (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L878-L879)

```diff
-           Hz.o.Yg("damagedByOtherPlayer", {
-             PF: tz,
+           iv.j.zC("damagedByOtherPlayer", {
+             Je: zv,
```

#### 167. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L882-L886` → after: `L890-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L890-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L890-L894) · [Before (L882-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L882-L886)

```diff
-         })), zz.nB(Uz.jd, (zz => {
-           Hz.o.Yg("playerKilled", zz, !0), (0, vz.d)().client.gameRecorder.recordPlayerKilled(zz.deadEId, zz.killerEId, zz.withItem, zz.killstreak)
-         })), zz.nB(Uz.Kb, (zz => {
-           Hz.o.Yg("customKillfeed", zz, !0), (0, vz.d)().client.gameRecorder.recordCustomKillfeed(zz.killer, zz.victim, zz.withItem)
-         })), zz.nB(Uz.sd, (zz => {
+         })), vv.rG(Nv.hd, (vv => {
+           iv.j.zC("playerKilled", vv, !0), (0, dv.d)().client.gameRecorder.recordPlayerKilled(vv.deadEId, vv.killerEId, vv.withItem, vv.killstreak)
+         })), vv.rG(Nv.Fb, (vv => {
+           iv.j.zC("customKillfeed", vv, !0), (0, dv.d)().client.gameRecorder.recordCustomKillfeed(vv.killer, vv.victim, vv.withItem)
+         })), vv.rG(Nv.td, (vv => {
```

#### 168. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L888-L889` → after: `L896-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L896-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L896-L897) · [Before (L888-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L888-L889)

```diff
-             Ps: tz,
-             Ys: Fz
+             xS: zv,
+             tS: hv
```

#### 169. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L892` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L900) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L892)

```diff
-           const Wz = sz.Qr.rtz(tz);
+           const Sv = Pv.Rm.Avv(zv);
```

#### 170. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L894-L902` → after: `L902-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L902-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L902-L910) · [Before (L894-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L894-L902)

```diff
-         })), zz.nB(Uz.He, (() => {
-           Hz.o.Yg("showShopTutorial", null, !0)
-         })), zz.nB(Uz.md, (zz => {
-           Hz.o.Yg("progressBarUpdate", zz, !0)
-         })), zz.nB(Uz.ec, (zz => {
-           Hz.o.Yg("middleScreenBarInitiate", {
-             duration: zz.cF,
-             jF: zz.jF,
-             horizBarRemOffset: zz.AF
+         })), vv.rG(Nv.Ie, (() => {
+           iv.j.zC("showShopTutorial", null, !0)
+         })), vv.rG(Nv.md, (vv => {
+           iv.j.zC("progressBarUpdate", vv, !0)
+         })), vv.rG(Nv.ac, (vv => {
+           iv.j.zC("middleScreenBarInitiate", {
+             duration: vv.Rv,
+             xv: vv.xv,
+             horizBarRemOffset: vv.tv
```

#### 171. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L904-L906` → after: `L912-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L912-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L912-L914) · [Before (L904-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L904-L906)

```diff
-         })), zz.nB(Uz.Ad, (() => {
-           Hz.o.Yg("middleScreenBarRemove", !0)
-         })), zz.nB(Uz.ce, (zz => {
+         })), vv.rG(Nv.Bd, (() => {
+           iv.j.zC("middleScreenBarRemove", !0)
+         })), vv.rG(Nv.ae, (vv => {
```

#### 172. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L908-L909` → after: `L916-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L916-L917) · [Before (L908-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L908-L909)

```diff
-             Hs: tz,
-             Bs: Fz
+             WP: zv,
+             nv: hv
```

#### 173. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L911-L913` → after: `L919-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L919-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L919-L921) · [Before (L911-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L911-L913)

```diff
-           const Wz = Fz ? (0, Ut.g)(sz, Fz) : void 0;
-           Hz.o.Yg("sendHitmarker", {
-             Hs: tz,
+           const Sv = hv ? (0, Nz.f)(Pv, hv) : void 0;
+           iv.j.zC("sendHitmarker", {
+             WP: zv,
```

#### 174. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L916` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L924) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L916)

```diff
-         })), zz.nB(Uz.pe, (zz => {
+         })), vv.rG(Nv.qe, (vv => {
```

#### 175. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L921-L922` → after: `L929-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L929-L930) · [Before (L921-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L921-L922)

```diff
-             BX: Wz,
-             rX: Xz
+             Tv: Sv,
+             sv: ev
```

#### 176. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L924` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L932) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L924)

```diff
-           Hz.o.Yg("setDirectionArrow", {
+           iv.j.zC("setDirectionArrow", {
```

#### 177. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L928-L929` → after: `L936-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L936-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L936-L937) · [Before (L928-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L928-L929)

```diff
-             text: (0, Uz.v)(Wz),
-             rX: Xz
+             text: (0, Nv.p)(Sv),
+             sv: ev
```

#### 178. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L931` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L939) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L931)

```diff
-         })), zz.nB(Uz.vb, (zz => {
+         })), vv.rG(Nv.rb, (vv => {
```

#### 179. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L935` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L943) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L935)

```diff
-           Hz.o.Yg("clearDirectionArrow", {
+           iv.j.zC("clearDirectionArrow", {
```

#### 180. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L938` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L946) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L938)

```diff
-         })), zz.nB(Uz.B, (zz => {
+         })), vv.rG(Nv.A, (vv => {
```

#### 181. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L940-L941` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L948-L949) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L940-L941)

```diff
-             GX: tz,
-             TX: Fz,
+             lS: zv,
+             WS: hv,
```

#### 182. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L943-L946` → after: `L951-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L951-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L951-L954) · [Before (L943-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L943-L946)

```diff
-             cX: Xz,
-             jX: Oz,
-             AX: oz,
-             yX: Uz
+             wS: ev,
+             aS: gv,
+             sS: pv,
+             CS: Nv
```

#### 183. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L948` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L956) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L948)

```diff
-           tz = (0, dz.d)(tz);
+           zv = (0, Qv.b)(zv);
```

#### 184. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L950-L951` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L958-L959) · [Before (L950-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L950-L951)

```diff
-           (0, vz.d)().client.gameRecorder.recordAnimateEntity(tz, Fz, Kz, Xz, Oz), (0, Gz.b)(sz).animations.animateEntity(tz, Fz, Wz, Xz, Oz, oz, Uz), null !== Wz || tz === sz.gC && Fz === ut.c.Emote && (0, vz.d)().client.cameraController.endTemporaryThirdPerson()
-         })), zz.nB(Uz.$e, (zz => {
+           (0, dv.d)().client.gameRecorder.recordAnimateEntity(zv, hv, lv, ev, gv), (0, Vv.c)(Pv).animations.animateEntity(zv, hv, Sv, ev, gv, pv, Nv), null !== Sv || zv === Pv.sV && hv === Tz.f.Emote && (0, dv.d)().client.cameraController.endTemporaryThirdPerson()
+         })), vv.rG(Nv.Ye, (vv => {
```

#### 185. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L953-L954` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L961-L962) · [Before (L953-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L953-L954)

```diff
-             uF: tz,
-             NF: sz
+             gv: zv,
+             pv: Pv
```

#### 186. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L956-L957` → after: `L964-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L964-L965) · [Before (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L956-L957)

```diff
-           if (Oz.Yk(tz[0], tz[1], tz[2])) {
-             const zz = (0, vz.d)().oB(tz[0], tz[1], tz[2]);
+           if (gv.aZ(zv[0], zv[1], zv[2])) {
+             const vv = (0, dv.d)().nG(zv[0], zv[1], zv[2]);
```

#### 187. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L960` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L968) · [Before (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L960)

```diff
-         })), zz.nB(Uz.qb, (zz => {
+         })), vv.rG(Nv.pb, (vv => {
```

#### 188. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L962-L969` → after: `L970-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L970-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L970-L977) · [Before (L962-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L962-L969)

```diff
-             WO: tz,
-             XO: Fz,
-             OO: Wz,
-             oO: Xz,
-             vO: Oz,
-             UO: oz,
-             KO: Uz,
-             uO: Kz
+             uh: zv,
+             vS: hv,
+             zS: Sv,
+             PS: ev,
+             hS: gv,
+             SS: pv,
+             eS: Nv,
+             gS: lv
```

#### 189. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L971` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L979) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L971)

```diff
-           const uz = sz.Qr.Ezz(sz.gC);
+           const Tv = Pv.Rm.cvv(Pv.sV);
```

#### 190. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L974-L975` → after: `L982-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L982-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L982-L983) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L974-L975)

```diff
-               Es: zz,
-               XF: tz
+               xh: vv,
+               Lh: zv
```

#### 191. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L977` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L985) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L977)

```diff
-             return (0, vz.d)().client.inventoryPrediction.x_(tz, (() => {
+             return (0, dv.d)().client.inventoryPrediction.j_(zv, (() => {
```

#### 192. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L979-L981` → after: `L987-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L987-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L987-L989) · [Before (L979-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L979-L981)

```diff
-             })) && Hz.o.Yg("chestToggleFromServer", !1, !0), void Hz.o.Yg("chestRefreshedFromServer")
-           }(tz || uz.zF) && (tz ? (uz.chestOpened(Fz, Wz, Xz, Oz, Uz), null !== Oz && (0, vz.d)().client.ironChestPasskeyCache.onChestOpened(Xz, Oz)) : uz.chestClosed(), Hz.o.Yg("chestToggleFromServer", tz, !0))
-         })), zz.nB(Uz.Lb, (zz => {
+             })) && iv.j.zC("chestToggleFromServer", !1, !0), void iv.j.zC("chestRefreshedFromServer")
+           }(zv || Tv.qh) && (zv ? (Tv.chestOpened(hv, Sv, ev, gv, Nv), null !== gv && (0, dv.d)().client.ironChestPasskeyCache.onChestOpened(ev, gv)) : Tv.chestClosed(), iv.j.zC("chestToggleFromServer", zv, !0))
+         })), vv.rG(Nv.Gb, (vv => {
```

#### 193. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L986` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L994) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L986)

```diff
-           tz ? Oz.craftingManager.editRecipesForPlayer(sz.gC, tz, Fz) : Oz.craftingManager.resetAllPlayerRecipes(sz.gC), Hz.o.Yg("craftingRecipesEdited", {
+           zv ? gv.craftingManager.editRecipesForPlayer(Pv.sV, zv, hv) : gv.craftingManager.resetAllPlayerRecipes(Pv.sV), iv.j.zC("craftingRecipesEdited", {
```

#### 194. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L990` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L998) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L990)

```diff
-         })), zz.nB(Uz.ze, (zz => {
+         })), vv.rG(Nv.ze, (vv => {
```

#### 195. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L996` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1004) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L996)

```diff
-         })), zz.nB(Uz.ef, (zz => {
+         })), vv.rG(Nv.bf, (vv => {
```

#### 196. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L998-L1000` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1006-L1008) · [Before (L998-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L998-L1000)

```diff
-             Bt: tz,
-             Pt: Fz,
-             rt: Wz
+             qS: zv,
+             IS: hv,
+             QS: Sv
```

#### 197. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1002-L1003` → after: `L1010-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1010-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1010-L1011) · [Before (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1002-L1003)

```diff
-           const Xz = sz.Qr.mzz(sz.gC).physicsState.type === kz.r.SLEEPING && tz === kz.r.DEFAULT;
-           (0, vz.d)().updatePositionAndPhysics(sz.gC, {
+           const ev = Pv.Rm.I3(Pv.sV).physicsState.type === Lv.s.SLEEPING && zv === Lv.s.DEFAULT;
+           (0, dv.d)().updatePositionAndPhysics(Pv.sV, {
```

#### 198. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1007` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1015) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1007)

```diff
-         })), zz.nB(Uz.jb, (zz => {
+         })), vv.rG(Nv.ib, (vv => {
```

#### 199. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1009-L1010` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1017-L1018) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1009-L1010)

```diff
-             gX: tz,
-             HX: Fz
+             Hh: zv,
+             Mh: hv
```

#### 200. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1012-L1020` → after: `L1020-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1020-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1020-L1028) · [Before (L1012-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1012-L1020)

```diff
-           sz.Qr.Vzz(sz.gC).setPose(tz, Fz)
-         })), zz.nB(Uz.be, (zz => {
-           (0, wt.e)(zz)
-         })), zz.nB(Uz.hd, (zz => {
-           for (const tz of zz)(0, az.x)(tz);
-           Hz.o.Yg("playerCosmeticsUpdated", zz, !0)
-         })), zz.nB(Uz.J, (zz => {
-           for (const tz of zz)(0, Ot.e)(sz, tz)
-         })), zz.nB(Uz.xc, (zz => {
+           Pv.Rm.svv(Pv.sV).setPose(zv, hv)
+         })), vv.rG(Nv.$d, (vv => {
+           (0, az.c)(vv)
+         })), vv.rG(Nv.gd, (vv => {
+           for (const zv of vv)(0, Jv.A)(zv);
+           iv.j.zC("playerCosmeticsUpdated", vv, !0)
+         })), vv.rG(Nv.G, (vv => {
+           for (const zv of vv)(0, gz.g)(Pv, zv)
+         })), vv.rG(Nv.vc, (vv => {
```

#### 201. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1022-L1028` → after: `L1030-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1030-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1030-L1036) · [Before (L1022-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1022-L1028)

```diff
-             hW: tz,
-             QW: Fz,
-             iW: Wz,
-             LW: Xz,
-             lW: oz,
-             nW: vz,
-             aW: Uz
+             fv: zv,
+             Fv: hv,
+             Ov: Sv,
+             Dv: ev,
+             Kv: pv,
+             Vv: dv,
+             Uv: Nv
```

#### 202. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1030-L1032` → after: `L1038-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1038-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1038-L1040) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1030-L1032)

```diff
-           this.stateReplicationHandler.setUpIfQueued(tz), tz = (0, dz.d)(tz);
-           const Kz = sz.Qr.btz(tz);
-           if (Kz && (Kz.lastHurtTime = performance.now()), (0, iz.playRigHurt)(sz, tz, vz), Hz.o.Yg("lifeformHurt", {
+           this.stateReplicationHandler.setUpIfQueued(zv), zv = (0, Qv.b)(zv);
+           const lv = Pv.Rm.Rvv(zv);
+           if (lv && (lv.lastHurtTime = performance.now()), (0, Hv.playRigHurt)(Pv, zv, dv), iv.j.zC("lifeformHurt", {
```

#### 203. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1034` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1042) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1034)

```diff
-               aW: Uz
+               Uv: Nv
```

#### 204. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1036-L1038` → after: `L1044-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1044-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1044-L1046) · [Before (L1036-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1036-L1038)

```diff
-             const zz = (0, Ut.g)(sz, Fz.Bs);
-             Hz.o.Yg("yourAttackHit", {
-               Hs: Xz,
+             const vv = (0, Nz.f)(Pv, hv.nv);
+             iv.j.zC("yourAttackHit", {
+               WP: ev,
```

#### 205. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1040` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1048) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1040)

```diff
-               hitSelf: tz === sz.gC
+               hitSelf: zv === Pv.sV
```

#### 206. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1043-L1044` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1051-L1052) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1043-L1044)

```diff
-           tz === sz.gC && (Oz.shakePlayerCamera(tz, oz / 40, 200), Hz.o.Yg("closeShopOnDamaged", null), Hz.o.Yg("damagedByOtherPlayer", {
-             PF: null,
+           zv === Pv.sV && (gv.shakePlayerCamera(zv, pv / 40, 200), iv.j.zC("closeShopOnDamaged", null), iv.j.zC("damagedByOtherPlayer", {
+             Je: null,
```

#### 207. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1046` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1054) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1046)

```diff
-             lW: oz
+             Kv: pv
```

#### 208. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1048` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1056) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1048)

```diff
-           const uz = sz.Qr.yB(tz);
+           const Tv = Pv.Rm.yG(zv);
```

#### 209. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1051` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1059) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1051)

```diff
-             Wz && (0, qz.m)(sz, qz.F, zz, 15), Xz && (0, qz.m)(sz, qz.s, zz, 10)
+             Sv && (0, Ev.i)(Pv, Ev.w, vv, 15), ev && (0, Ev.i)(Pv, Ev.o, vv, 10)
```

#### 210. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1053` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1061) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1053)

```diff
-         })), zz.nB(Uz.wc, (zz => {
+         })), vv.rG(Nv.rc, (vv => {
```

#### 211. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1055-L1057` → after: `L1063-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1063-L1065) · [Before (L1055-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1055-L1057)

```diff
-             kt: tz,
-             Lt: Fz,
-             lt: Wz
+             Vz: zv,
+             Uz: hv,
+             Rz: Sv
```

#### 212. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1059-L1062` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1067-L1070) · [Before (L1059-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1059-L1062)

```diff
-           (0, Gz.b)(sz).setHealthFrac((0, dz.d)(tz), Wz), Hz.o.Yg("lifeformHealthChanged", {
-             eId: (0, dz.d)(tz),
-             Lt: Fz,
-             lt: Wz
+           (0, Vv.c)(Pv).setHealthFrac((0, Qv.b)(zv), Sv), iv.j.zC("lifeformHealthChanged", {
+             eId: (0, Qv.b)(zv),
+             Uz: hv,
+             Rz: Sv
```

#### 213. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1064` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1072) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1064)

```diff
-         })), zz.nB(Uz.K, (zz => {
+         })), vv.rG(Nv.H, (vv => {
```

#### 214. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1066-L1067` → after: `L1074-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1074-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1074-L1075) · [Before (L1066-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1066-L1067)

```diff
-             mX: tz,
-             JX: Fz
+             Nv: zv,
+             lv: hv
```

#### 215. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1069-L1070` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1077-L1078) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1069-L1070)

```diff
-           (0, vz.d)().playerAttacked(sz.gC, tz, Fz)
-         })), zz.nB(Uz.qc, (zz => {
+           (0, dv.d)().playerAttacked(Pv.sV, zv, hv)
+         })), vv.rG(Nv.kc, (vv => {
```

#### 216. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1077` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1085) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1077)

```diff
-         })), zz.nB(Uz.yd, (zz => {
+         })), vv.rG(Nv.Ad, (vv => {
```

#### 217. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1079-L1081` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1087-L1089) · [Before (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1079-L1081)

```diff
-             qt: tz,
-             St: sz,
-             Vt: Fz
+             MS: zv,
+             yS: Pv,
+             BS: hv
```

#### 218. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1084` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1092) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1084)

```diff
-         })), zz.nB(Uz.ke, (zz => {
+         })), vv.rG(Nv.ie, (vv => {
```

#### 219. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1086-L1090` → after: `L1094-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1094-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1094-L1098) · [Before (L1086-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1086-L1090)

```diff
-             AO: tz,
-             jtz: Fz
-           } = (0, Sz.d)([zz[0], zz[1], zz[2]]);
-           gt.b.setLookDirection(sz, tz, Fz), (0, Vz.x)(tz, Fz);
-           const Wz = sz.Qr.Vzz(sz.gC);
+             fp: zv,
+             kvv: hv
+           } = (0, ov.f)([vv[0], vv[1], vv[2]]);
+           Cz.c.setLookDirection(Pv, zv, hv), (0, bv.s)(zv, hv);
+           const Sv = Pv.Rm.svv(Pv.sV);
```

#### 220. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1092` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1100) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1092)

```diff
-         })), zz.nB(Uz.me, (zz => {
+         })), vv.rG(Nv.ke, (vv => {
```

#### 221. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1094` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1102) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1094)

```diff
-         })), zz.nB(Uz.Ge, (zz => {
+         })), vv.rG(Nv.Ge, (vv => {
```

#### 222. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1096-L1097` → after: `L1104-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1104-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1104-L1105) · [Before (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1096-L1097)

```diff
-             Us: tz,
-             Ks: Fz
+             Me: zv,
+             ye: hv
```

#### 223. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1099-L1100` → after: `L1107-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1107-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1107-L1108) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1099-L1100)

```diff
-           Oz.shakePlayerCamera(sz.gC, tz, Fz)
-         })), zz.nB(Uz.Db, (zz => {
+           gv.shakePlayerCamera(Pv.sV, zv, hv)
+         })), vv.rG(Nv.yb, (vv => {
```

#### 224. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1102-L1104` → after: `L1110-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1110-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1110-L1112) · [Before (L1102-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1102-L1104)

```diff
-         })), zz.nB(Uz.ge, (zz => {
-           Hz.o.Yg("serverUpdating", Date.now() + zz, !0)
-         })), zz.nB(Uz.Dc, cz.d), zz.nB(Uz.Qc, (zz => {
+         })), vv.rG(Nv.de, (vv => {
+           iv.j.zC("serverUpdating", Date.now() + vv, !0)
+         })), vv.rG(Nv.Dc, Rv.c), vv.rG(Nv.Rc, (vv => {
```

#### 225. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1107` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1115) · [Before (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1107)

```diff
-             Gz: sz
+             qz: Pv
```

#### 226. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1115-L1117` → after: `L1123-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1123-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1123-L1125) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1115-L1117)

```diff
-           for (const Fz of vt.e) Fz in Oz && Oz[Fz] && (Oz[Fz] = (0, Uz.v)(Oz[Fz]));
-           ot.e.queueQTE(tz, Wz, Oz).getResult().then((zz => {
-             "boolean" === typeof zz && (0, Fz.sendColyMessage)(Uz.$h, {
+           for (const hv of dz.c) hv in gv && gv[hv] && (gv[hv] = (0, Nv.p)(gv[hv]));
+           pz.d.queueQTE(zv, Sv, gv).getResult().then((vv => {
+             "boolean" === typeof vv && (0, hv.sendColyMessage)(Nv.ci, {
```

#### 227. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1122-L1123` → after: `L1130-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1130-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1130-L1131) · [Before (L1122-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1122-L1123)

```diff
-         })), zz.nB(Uz.Cd, (zz => {
-           ot.e.cancelQTE(zz)
+         })), vv.rG(Nv.Ed, (vv => {
+           pz.d.cancelQTE(vv)
```

#### 228. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1125-L1126` → after: `L1133-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1133-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1133-L1134) · [Before (L1125-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1125-L1126)

```diff
-           ot.e.reset()
-         })), zz.nB(Uz.Sc, (zz => {
+           pz.d.reset()
+         })), vv.rG(Nv.Tc, (vv => {
```

#### 229. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1131-L1134` → after: `L1139-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1139-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1139-L1142) · [Before (L1131-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1131-L1134)

```diff
-           (0, mz.f)(tz, sz)
-         })), zz.nB(Uz.Ed, (zz => {
-           (0, mz.h)(zz)
-         })), zz.nB(Uz.Ye, (zz => {
+           (0, Fv.d)(zv, Pv)
+         })), vv.rG(Nv.Fd, (vv => {
+           (0, Fv.g)(vv)
+         })), vv.rG(Nv.Xe, (vv => {
```

#### 230. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1139-L1143` → after: `L1147-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1147-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1147-L1151) · [Before (L1139-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1139-L1143)

```diff
-           (0, mz.i)(sz, tz, (zz => {
-             (0, Fz.sendColyMessage)(Uz.oj, {
-               Eo: sz,
-               zv: zz,
-               tv: 5
+           (0, Fv.k)(Pv, zv, (vv => {
+             (0, hv.sendColyMessage)(Nv.Bj, {
+               Al: Pv,
+               Ll: vv,
+               Hl: 5
```

#### 231. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1146` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1154) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1146)

```diff
-         })), zz.nB(Uz.Mb, (zz => {
+         })), vv.rG(Nv.Ib, (vv => {
```

#### 232. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1148-L1153` → after: `L1156-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1156-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1156-L1161) · [Before (L1148-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1148-L1153)

```diff
-             vt: tz,
-             Ut: sz,
-             Kt: Fz,
-             ut: Wz,
-             Nt: Xz,
-             Dt: Oz
+             Cv: zv,
+             iv: Pv,
+             cv: hv,
+             Gv: Sv,
+             mv: ev,
+             jv: gv
```

#### 233. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1155` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1163) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1155)

```diff
-           tz = (0, dz.d)(tz), (0, vz.d)().client.updateEffect(tz, sz, {
+           zv = (0, Qv.b)(zv), (0, dv.d)().client.updateEffect(zv, Pv, {
```

#### 234. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1161` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1169) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1161)

```diff
-         })), zz.nB(Uz.vd, (zz => {
+         })), vv.rG(Nv.ud, (vv => {
```

#### 235. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1163-L1164` → after: `L1171-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1171-L1172) · [Before (L1163-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1163-L1164)

```diff
-             vt: tz,
-             Ut: sz
+             Cv: zv,
+             iv: Pv
```

#### 236. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1166-L1170` → after: `L1174-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1174-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1174-L1178) · [Before (L1166-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1166-L1170)

```diff
-           tz = (0, dz.d)(tz), (0, vz.d)().client.removeEffect(tz, sz)
-         })), zz.nB(Uz.mc, (zz => {
-           sz.Qr.Vzz(sz.gC).jumpMultiplier.setMultiplierType("jumpEffectAmount", zz)
-         })), zz.nB(Uz.Ue, (zz => {
-           Hz.o.Yg("ttbEffectMultiplier", zz)
+           zv = (0, Qv.b)(zv), (0, dv.d)().client.removeEffect(zv, Pv)
+         })), vv.rG(Nv.ic, (vv => {
+           Pv.Rm.svv(Pv.sV).jumpMultiplier.setMultiplierType("jumpEffectAmount", vv)
+         })), vv.rG(Nv.We, (vv => {
+           iv.j.zC("ttbEffectMultiplier", vv)
```

#### 237. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1172-L1177` → after: `L1180-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1180-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1180-L1185) · [Before (L1172-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1172-L1177)

```diff
-           sz.Qr.Vzz(sz.gC).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
-         })), zz.nB(Uz.Nc, (zz => {
-           (0, qz.o)(sz, (0, uz.t)(zz))
-         })), zz.nB(Uz.Pc, (zz => {
-           Kt.e[zz.DX] ? (0, qz.o)(sz, {
-             ...Kt.e[zz.DX],
+           Pv.Rm.svv(Pv.sV).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
+         })), vv.rG(Nv.Mc, (vv => {
+           (0, Ev.k)(Pv, (0, Tv.v)(vv))
+         })), vv.rG(Nv.Qc, (vv => {
+           lz.g[vv.He] ? (0, Ev.k)(Pv, {
+             ...lz.g[vv.He],
```

#### 238. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1180-L1181` → after: `L1188-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1188-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1188-L1189) · [Before (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1180-L1181)

```diff
-           }) : console.error(`Unknown preset id: ${zz.DX}`)
-         })), zz.nB(Uz.ed, (zz => {
+           }) : console.error(`Unknown preset id: ${vv.He}`)
+         })), vv.rG(Nv.ed, (vv => {
```

#### 239. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1184-L1187` → after: `L1192-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1192-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1192-L1195) · [Before (L1184-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1184-L1187)

```diff
-             SW: Fz,
-             VW: Wz,
-             RW: Xz,
-             pW: Oz
+             KP: hv,
+             VP: Sv,
+             UP: ev,
+             RP: gv
```

#### 240. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1189-L1191` → after: `L1197-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1197-L1199) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1189-L1191)

```diff
-             EW: oz,
-             zX: Uz
-           } = null !== Oz && void 0 !== Oz ? Oz : {};
+             tP: pv,
+             qP: Nv
+           } = null !== gv && void 0 !== gv ? gv : {};
```

#### 241. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1193-L1196` → after: `L1201-L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1201-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1201-L1204) · [Before (L1193-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1193-L1196)

```diff
-             fW: Kz
-           } = null !== Oz && void 0 !== Oz ? Oz : {};
-           oz = null !== (tz = oz) && void 0 !== tz ? tz : void 0, Uz = null !== (sz = Uz) && void 0 !== sz ? sz : void 0, "string" === typeof Kz && this.stateReplicationHandler.setUpIfQueued(Kz), (0, vz.d)().client.gameRecorder.recordPlaySound(Fz, Wz, Xz, Oz), pz.d.play((0, fz.b) … [truncated]
-         })), zz.nB(Uz.ie, (zz => {
+             xP: lv
+           } = null !== gv && void 0 !== gv ? gv : {};
+           pv = null !== (zv = pv) && void 0 !== zv ? zv : void 0, Nv = null !== (Pv = Nv) && void 0 !== Pv ? Pv : void 0, "string" === typeof lv && this.stateReplicationHandler.setUpIfQueued(lv), (0, dv.d)().client.gameRecorder.recordPlaySound(hv, Sv, ev, gv), kv.c.play((0, Xv.e) … [truncated]
+         })), vv.rG(Nv.ee, (vv => {
```

#### 242. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1201-L1202` → after: `L1209-L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1209-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1209-L1210) · [Before (L1201-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1201-L1202)

```diff
-           Oz.blockDataOwner.setBlockData(tz[0], tz[1], tz[2], sz), Oz.blockAdded(tz[0], tz[1], tz[2], Oz.oB(tz[0], tz[1], tz[2]))
-         })), zz.nB(Uz.Wc, (zz => {
+           gv.blockDataOwner.setBlockData(zv[0], zv[1], zv[2], Pv), gv.blockAdded(zv[0], zv[1], zv[2], gv.nG(zv[0], zv[1], zv[2]))
+         })), vv.rG(Nv.Yc, (vv => {
```

#### 243. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1206-L1207` → after: `L1214-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1214-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1214-L1215) · [Before (L1206-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1206-L1207)

```diff
-           Hz.o.Yg("overShopInfo", tz, !0)
-         })), zz.nB(Uz.Sb, (zz => {
+           iv.j.zC("overShopInfo", zv, !0)
+         })), vv.rG(Nv.Pb, (vv => {
```

#### 244. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1209-L1210` → after: `L1217-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1217-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1217-L1218) · [Before (L1209-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1209-L1210)

```diff
-             gt: Fz,
-             Ht: Wz
+             gz: hv,
+             pz: Sv
```

#### 245. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1212-L1220` → after: `L1220-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1220-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1220-L1228) · [Before (L1212-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1212-L1220)

```diff
-           tz.openShop(sz.gC, Fz, Wz)
-         })), zz.nB(Uz.F, (zz => {
-           sz.Qr.eT(sz.gC).applyImpulse(zz)
-         })), zz.nB(Uz.Ce, (zz => {
-           const tz = sz.Qr.eT(sz.gC);
-           Qz().set(tz.mG, 0, 0, 0), Qz().set(tz.JG, 0, 0, 0), Qz().copy(tz.hb, zz), tz.yG()
-         })), zz.nB(Uz.Ac, (zz => {
-           console.error(`[logErrorToConsole]: ${zz}`)
-         })), zz.nB(Uz.Pb, (zz => {
+           zv.openShop(Pv.sV, hv, Sv)
+         })), vv.rG(Nv.C, (vv => {
+           Pv.Rm.vx(Pv.sV).applyImpulse(vv)
+         })), vv.rG(Nv.De, (vv => {
+           const zv = Pv.Rm.vx(Pv.sV);
+           Av().set(zv.vR, 0, 0, 0), Av().set(zv.gR, 0, 0, 0), Av().copy(zv.pC, vv), zv.pR()
+         })), vv.rG(Nv.yc, (vv => {
+           console.error(`[logErrorToConsole]: ${vv}`)
+         })), vv.rG(Nv.Nb, (vv => {
```

#### 246. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1222-L1224` → after: `L1230-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1230-L1232) · [Before (L1222-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1222-L1224)

```diff
-             RX: tz,
-             pX: sz,
-             fX: Fz
+             wP: zv,
+             aP: Pv,
+             sP: hv
```

#### 247. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1226-L1229` → after: `L1234-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1234-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1234-L1237) · [Before (L1226-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1226-L1229)

```diff
-           Hz.o.Yg("flyingMiddleMessage", {
-             content: (0, Uz.v)(tz),
-             pX: sz,
-             fX: Fz
+           iv.j.zC("flyingMiddleMessage", {
+             content: (0, Nv.p)(zv),
+             aP: Pv,
+             sP: hv
```

#### 248. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1231-L1233` → after: `L1239-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1239-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1239-L1241) · [Before (L1231-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1231-L1233)

```diff
-         })), zz.nB(Uz.if, (zz => {
-           const tz = zz === jz.f ? null : {
-             message: `Currently loaded as variation: ${zz}`,
+         })), vv.rG(Nv.nf, (vv => {
+           const zv = vv === xv.g ? null : {
+             message: `Currently loaded as variation: ${vv}`,
```

#### 249. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1236-L1237` → after: `L1244-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1244-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1244-L1245) · [Before (L1236-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1236-L1237)

```diff
-           Hz.o.Yg("showPermanentBottomMessage", tz, !0)
-         })), zz.nB(Uz.Wb, (zz => {
+           iv.j.zC("showPermanentBottomMessage", zv, !0)
+         })), vv.rG(Nv.Qb, (vv => {
```

#### 250. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1242-L1244` → after: `L1250-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1250-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1250-L1252) · [Before (L1242-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1242-L1244)

```diff
-           (0, Ez.h)(tz) ? (0, Ez.e)(tz, sz) : ("freeCamPerms" === tz && Oz.client.freeCameraController.setPerms(sz.key, sz.value), Oz.client.triggerGameCallback("onReceivedMessageFromServer", tz, sz))
-         })), zz.nB(Uz.lb, (() => {
-           const zz = sz.Qr.rtz(sz.gC);
+           (0, uv.e)(zv) ? (0, uv.d)(zv, Pv) : ("freeCamPerms" === zv && gv.client.freeCameraController.setPerms(Pv.key, Pv.value), gv.client.triggerGameCallback("onReceivedMessageFromServer", zv, Pv))
+         })), vv.rG(Nv.jb, (() => {
+           const vv = Pv.Rm.Avv(Pv.sV);
```

#### 251. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1246` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1254) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1246)

```diff
-         })), zz.nB(Uz.xd, (zz => {
+         })), vv.rG(Nv.yd, (vv => {
```

#### 252. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1248` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1256) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1248)

```diff
-             qW: tz
+             DP: zv
```

#### 253. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1250` → after: `L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1258) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1250)

```diff
-           Oz.craftingManager.removeRecipes(sz.gC, tz), Hz.o.Yg("craftingRecipesEdited", {
+           gv.craftingManager.removeRecipes(Pv.sV, zv), iv.j.zC("craftingRecipesEdited", {
```

#### 254. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1254` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1262) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1254)

```diff
-         })), zz.nB(Uz.af, (zz => {
+         })), vv.rG(Nv.af, (vv => {
```

#### 255. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1260-L1261` → after: `L1268-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1268-L1269) · [Before (L1260-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1260-L1261)

```diff
-           (0, Xt.setFloatingYValue)(sz.Qr.getState(sz.gC, "physics"), sz.Qr.qL(sz.gC), null)
-         })), zz.nB(Uz.Ob, (zz => {
+           (0, ez.setFloatingYValue)(Pv.Rm.getState(Pv.sV, "physics"), Pv.Rm.rA(Pv.sV), null)
+         })), vv.rG(Nv.Lb, (vv => {
```

#### 256. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1263-L1265` → after: `L1271-L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1271-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1271-L1273) · [Before (L1263-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1263-L1265)

```diff
-             Ns: tz,
-             Ds: Fz,
-             gs: Wz
+             VS: zv,
+             US: hv,
+             RS: Sv
```

#### 257. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1267-L1274` → after: `L1275-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1275-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1275-L1282) · [Before (L1267-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1267-L1274)

```diff
-           const Xz = (0, dz.d)(tz);
-           if (Xz === sz.gC) {
-             const zz = sz.Qr.qL(sz.gC).position;
-             Wz ??= Math.floor(zz[1]) - 1, (0, Xt.setFloatingYValue)(sz.Qr.getState(sz.gC, "physics"), sz.Qr.qL(sz.gC), Fz ? Wz : null)
-           }(0, Gz.b)(sz).setFloating(Xz, Fz, Wz);
-           const Oz = sz.Qr.getState(Xz, "floating");
-           Oz && (Oz.isFloating = Fz, Oz.gs = Fz ? Wz : null)
-         })), zz.nB(Uz.Ab, zt.i)
+           const ev = (0, Qv.b)(zv);
+           if (ev === Pv.sV) {
+             const vv = Pv.Rm.rA(Pv.sV).position;
+             Sv ??= Math.floor(vv[1]) - 1, (0, ez.setFloatingYValue)(Pv.Rm.getState(Pv.sV, "physics"), Pv.Rm.rA(Pv.sV), hv ? Sv : null)
+           }(0, Vv.c)(Pv).setFloating(ev, hv, Sv);
+           const gv = Pv.Rm.getState(ev, "floating");
+           gv && (gv.isFloating = hv, gv.RS = hv ? Sv : null)
+         })), vv.rG(Nv.vb, vz.h)
```

#### 258. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1278-L1281` → after: `L1286-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1286-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1286-L1289) · [Before (L1278-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1278-L1281)

```diff
-     var Bt = sz(38455),
-       Pt = sz(38462),
-       rt = sz(624),
-       Yt = sz(2689);
+     var cz = Pv(38573),
+       Gz = Pv(38579),
+       mz = Pv(650),
+       jz = Pv(2715);
```

#### 259. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1284` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1292) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1284)

```diff
-         this.msgHandler = sz, this.listener = Fz, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Bt.d({
+         this.msgHandler = Pv, this.listener = hv, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new cz.c({
```

#### 260. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1320` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1328) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1320)

```diff
-         }(0, vz.d)().client.itemDropPrediction.onResumeReplayOffered(), Fz.offlineInputReplay.replayFrom(zz.Os, tz)
+         }(0, dv.d)().client.itemDropPrediction.onResumeReplayOffered(), hv.offlineInputReplay.replayFrom(vv.oP, zv)
```

#### 261. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1333-L1335` → after: `L1341-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1341-L1343) · [Before (L1333-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1333-L1335)

```diff
-         const tz = (0, rt.f)((() => zz.connection.isOpen));
-         zz.qB(tz);
-         const sz = new Pt.d((() => {
+         const zv = (0, mz.h)((() => vv.connection.isOpen));
+         vv.Tm(zv);
+         const Pv = new Gz.e((() => {
```

#### 262. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1344-L1345` → after: `L1352-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1352-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1352-L1353) · [Before (L1344-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1344-L1345)

```diff
-         window.addEventListener("pagehide", Fz), zz.qB(((tz, sz) => {
-           if (zz === this.attachedRoom && this.listener.isLive()) return (0, Xz.f)(tz) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${tz}, reconnecting`), this.listener.onDropped(tz, sz), void this.onConnectionDropped(zz, String(t … [truncated]
+         window.addEventListener("pagehide", hv), vv.Tm(((zv, Pv) => {
+           if (vv === this.attachedRoom && this.listener.isLive()) return (0, ev.j)(zv) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${zv}, reconnecting`), this.listener.onDropped(zv, Pv), void this.onConnectionDropped(vv, String(z … [truncated]
```

#### 263. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1361` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1369) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1361)

```diff
-         (0, Yt.f)("disconnect", "Left room", tz), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Fz.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(zz.reconnectionToken)
+         (0, jz.e)("disconnect", "Left room", zv), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), hv.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(vv.reconnectionToken)
```

#### 264. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1365` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1373) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1365)

```diff
-         console.log("Reconnected to the game server, waiting for the game to resume"), (0, wt.r)(), Fz.offlineInputReplay.onConnectionReplaced(), this.msgHandler.PUz(zz), this.listener.onReconnected(zz), this.attachRoom(zz)
+         console.log("Reconnected to the game server, waiting for the game to resume"), (0, az.m)(), hv.offlineInputReplay.onConnectionReplaced(), this.msgHandler.odv(vv), this.listener.onReconnected(vv), this.attachRoom(vv)
```

#### 265. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1368-L1381` → after: `L1376-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1376-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1376-L1390) · [Before (L1368-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1368-L1381)

```diff
-     var mt = sz(3145),
-       Jt = sz(3149),
-       It = sz(1293),
-       Ct = sz(4328),
-       et = sz(2873),
-       Zt = sz(1060),
-       Gt = sz(37111),
-       Tt = sz(38469),
-       ct = sz(8398),
-       jt = sz(38473),
-       At = sz(1750),
-       yt = sz(38480),
-       Mt = sz(1658),
-       dt = sz(2561);
+     var Fz = Pv(3218),
+       Yz = Pv(3224),
+       nz = Pv(1306),
+       Oz = Pv(1285),
+       Dz = Pv(4444),
+       Kz = Pv(2934),
+       Vz = Pv(1056),
+       Uz = Pv(37215),
+       Rz = Pv(38587),
+       xz = Pv(8572),
+       tz = Pv(38596),
+       qz = Pv(1779),
+       Iz = Pv(38604),
+       Qz = Pv(1684),
+       Zz = Pv(2607);
```

#### 266. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1390` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1399) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1390)

```diff
-         errType: null !== (tz = null === (sz = zz.constructor) || void 0 === sz ? void 0 : sz.name) && void 0 !== tz ? tz : "",
+         errType: null !== (zv = null === (Pv = vv.constructor) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : "",
```

#### 267. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1402-L1403` → after: `L1411-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1411-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1411-L1412) · [Before (L1402-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1402-L1403)

```diff
-     }(0, Dz.m)((zz => {
-       (0, Yt.f)("wasm_net", zz)
+     }(0, sv.k)((vv => {
+       (0, jz.e)("wasm_net", vv)
```

#### 268. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1412` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1421) · [Before (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1412)

```diff
-         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.CN = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWit … [truncated]
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.vW = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWit … [truncated]
```

#### 269. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1415-L1417` → after: `L1424-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1424-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1424-L1426) · [Before (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1415-L1417)

```diff
-         Bz.e.reset(), zz.bC = {
-           [zz.gC]: {}
-         }, zz.Uzz = void 0, (0, wt.r)(), (0, vz.d)().removeAllEntityNames(), (0, vz.d)().setEntityName(zz.gC, this.userContext.getPlayerName()), (0, It.q)({
+         cv.c.reset(), vv.wV = {
+           [vv.sV]: {}
+         }, vv.W8 = void 0, (0, az.m)(), (0, dv.d)().removeAllEntityNames(), (0, dv.d)().setEntityName(vv.sV, this.userContext.getPlayerName()), (0, nz.o)({
```

#### 270. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1420` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1429) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1420)

```diff
-         const Oz = (0, Mt.d)();
+         const gv = (0, Qz.g)();
```

#### 271. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1423` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1432) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1423)

```diff
-           Uz = (0, jt.f)(this.userContext, (() => {
+           Nv = (0, tz.h)(this.userContext, (() => {
```

#### 272. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1427-L1428` → after: `L1436-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1436-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1436-L1437) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1427-L1428)

```diff
-             } = (0, rz.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, tz, (zz => et.d.isUsingCustomGameTexturePack(zz)));
-             return Wz.joinAdHold = Oz, Wz.renderBackend = (0, dt.c)(zz.mD), (0, Tt.f)((() => this.colyClient.joinOrCreate(Fz, Wz)), sz)
+             } = (0, mv.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, zv, (vv => Kz.b.isUsingCustomGameTexturePack(vv)));
+             return Sv.joinAdHold = gv, Sv.renderBackend = (0, Zz.b)(vv.Ma), (0, Rz.f)((() => this.colyClient.joinOrCreate(hv, Sv)), Pv)
```

#### 273. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1430-L1433` → after: `L1439-L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1439-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1439-L1442) · [Before (L1430-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1430-L1433)

```diff
-         return Hz.o.Yg("loadingScreenState", "loadingPage:joiningLobby"), await Uz.then((tz => {
-           if (this.joinedAt = performance.now(), this.CN = zz, Oz) {
-             const zz = (0, Mt.o)((() => {
-               tz.send(Wz.i)
+         return iv.j.zC("loadingScreenState", "loadingPage:joiningLobby"), await Nv.then((zv => {
+           if (this.joinedAt = performance.now(), this.vW = vv, gv) {
+             const vv = (0, Qz.q)((() => {
+               zv.send(Sv.g), (0, Oz.m)()
```

#### 274. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1435` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1444) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1435)

```diff
-             tz.qB(zz), (0, Fz.onGameResetOnce)(zz)
+             zv.Tm(vv), (0, hv.onGameResetOnce)(vv)
```

#### 275. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1439` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1448) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1439)

```diff
-             zz.Zm(tz)
+             vv.ZY(zv)
```

#### 276. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1443` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1452) · [Before (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1443)

```diff
-               (0, Jt.h)(zz) || this.logUnrecognisedConnectionLoss(zz, void 0, {
+               (0, Yz.i)(vv) || this.logUnrecognisedConnectionLoss(vv, void 0, {
```

#### 277. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1445` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1454) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1445)

```diff
-                 closeReason: null !== tz && void 0 !== tz ? tz : "",
+                 closeReason: null !== zv && void 0 !== zv ? zv : "",
```

#### 278. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1453` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1462) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1453)

```diff
-               this.incomingMsgInitialisor.PUz(zz), this.checkSendPath = (0, Gt.h)(sz, zz, Dz.p)
+               this.incomingMsgInitialisor.odv(vv), this.checkSendPath = (0, Uz.i)(Pv, vv, sv.l)
```

#### 279. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1462-L1466` → after: `L1471-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1471-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1471-L1475) · [Before (L1462-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1462-L1466)

```diff
-             oz = sz.nB,
-             Uz = sz.tsz.send,
-             Kz = sz.tsz.nB,
-             uz = sz.HUz;
-           this.checkSendPath = (0, Gt.h)(sz, tz, Dz.p);
+             pv = Pv.rG,
+             Nv = Pv.jzv.send,
+             lv = Pv.jzv.rG,
+             Tv = Pv.Jdv;
+           this.checkSendPath = (0, Uz.i)(Pv, zv, sv.l);
```

#### 280. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1468` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1477) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1468)

```diff
-             Xz === sz.send && oz === sz.nB && Uz === sz.tsz.send && Kz === sz.tsz.nB && uz === sz.HUz || it(), this.checkSendPath()
+             ev === Pv.send && pv === Pv.rG && Nv === Pv.jzv.send && lv === Pv.jzv.rG && Tv === Pv.Jdv || Mz(), this.checkSendPath()
```

#### 281. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1477` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1486) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1477)

```diff
-           if (sz.aborted && tz === (0, At.f)(sz)) return {
+           if (Pv.aborted && zv === (0, qz.g)(Pv)) return {
```

#### 282. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1485` → after: `L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1494) · [Before (L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1485)

```diff
-           if (tz instanceof yt.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
+           if (zv instanceof Iz.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
```

#### 283. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1494` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1503) · [Before (L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1494)

```diff
-           zz.aD(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${tz.code}\n`, tz);
+           vv.Ws(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${zv.code}\n`, zv);
```

#### 284. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1513` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1522) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1513)

```diff
-               gameRefused: (0, ct.c)(tz)
+               gameRefused: (0, xz.d)(zv)
```

#### 285. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1519-L1520` → after: `L1528-L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1528-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1528-L1529) · [Before (L1519-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1519-L1520)

```diff
-         Hz.o.Yg("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Ht(this.gameNameWithVariation, tz.tsz, zz, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
-         const Wz = tz.mUz();
+         iv.j.zC("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new iz(this.gameNameWithVariation, zv.jzv, vv, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
+         const Sv = zv.udv();
```

#### 286. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1527-L1528` → after: `L1536-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1536-L1537) · [Before (L1527-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1527-L1528)

```diff
-         (0, Zt.SD)(new Error("Reconnect failed"), {
-           ...(0, mt.k)(tz),
+         (0, Vz.ws)(new Error("Reconnect failed"), {
+           ...(0, Fz.m)(zv),
```

#### 287. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1530` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1539) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1530)

```diff
-         }), (0, Yt.f)("disconnect", "Reconnect failed", tz.reason), (0, vz.d)().client.leaveGameUnwanted({
+         }), (0, jz.e)("disconnect", "Reconnect failed", zv.reason), (0, dv.d)().client.leaveGameUnwanted({
```

#### 288. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1546-L1547` → after: `L1555-L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1555-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1555-L1556) · [Before (L1546-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1546-L1547)

```diff
-         if (console.log(`Left room with code ${zz}`), zz === Xz.b.serverUpdating.code) return (0, Yt.f)("disconnect", "Left room", "serverUpdating"), (0, vz.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
-         this.CN.aD(`Kicked from server with code ${zz}`, new Error);
+         if (console.log(`Left room with code ${vv}`), vv === ev.b.serverUpdating.code) return (0, jz.e)("disconnect", "Left room", "serverUpdating"), (0, dv.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
+         this.vW.Ws(`Kicked from server with code ${vv}`, new Error);
```

#### 289. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1549` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1558) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1549)

```diff
-         (0, Yt.f)("disconnect", "Left room", null !== Fz && void 0 !== Fz ? Fz : String(zz));
+         (0, jz.e)("disconnect", "Left room", null !== hv && void 0 !== hv ? hv : String(vv));
```

#### 290. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1552` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1561) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1552)

```diff
-           closeReason: null !== tz && void 0 !== tz ? tz : "",
+           closeReason: null !== zv && void 0 !== zv ? zv : "",
```

#### 291. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1556` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1565) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1556)

```diff
-           reason: `You have disconnected from the server.\n${Wz.reason}`,
+           reason: `You have disconnected from the server.\n${Sv.reason}`,
```

#### 292. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1571` → after: `L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1580) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1571)

```diff
-         if (null !== (Fz = tz) && void 0 !== Fz && Fz.endsWith(Xz.j) && (this.userContext.invalidateTrafficCode(), tz = tz.replace(Xz.j, "")), zz === Xz.b.outdatedVersion.code) return console.error("Outdated client with version ", Oz.e, ", refreshing page"), (0, Pz.reloadBloxd)() … [truncated]
+         if (null !== (hv = zv) && void 0 !== hv && hv.endsWith(ev.l) && (this.userContext.invalidateTrafficCode(), zv = zv.replace(ev.l, "")), vv === ev.b.outdatedVersion.code) return console.error("Outdated client with version ", gv.c, ", refreshing page"), (0, Gv.reloadBloxd)() … [truncated]
```

#### 293. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1590` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1599) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1590)

```diff
-               reason: "" !== Fz ? Fz : tz || `Code: ${zz}`,
+               reason: "" !== hv ? hv : zv || `Code: ${vv}`,
```

#### 294. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1597-L1598` → after: `L1606-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1606-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1606-L1607) · [Before (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1597-L1598)

```diff
-         return console.log("Didn't match known error, leaving game"), (0, Jt.e)(zz) || Wz ? console.warn("Connection lost", zz, tz) : this.logUnrecognisedConnectionLoss(zz, tz, sz), {
-           reason: `Either your internet isn't working or this is a bug.\nCode: ${zz}`,
+         return console.log("Didn't match known error, leaving game"), (0, Yz.h)(vv) || Sv ? console.warn("Connection lost", vv, zv) : this.logUnrecognisedConnectionLoss(vv, zv, Pv), {
+           reason: `Either your internet isn't working or this is a bug.\nCode: ${vv}`,
```

#### 295. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1605` → after: `L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1614) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1605)

```diff
-         (0, Zt.SD)(new Error("Unrecognised connection loss"), {
+         (0, Vz.ws)(new Error("Unrecognised connection loss"), {
```

#### 296. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1607` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1616) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1607)

```diff
-           cause: null !== tz && void 0 !== tz ? tz : "",
+           cause: null !== zv && void 0 !== zv ? zv : "",
```

#### 297. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1610` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1619) · [Before (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1610)

```diff
-           ...(0, Jt.i)()
+           ...(0, Yz.k)()
```

#### 298. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1615` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1624) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1615)

```diff
-   38419: (zz, tz, sz) => {
+   38540: (vv, zv, Pv) => {
```

#### 299. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1617-L1618` → after: `L1626-L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1626-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1626-L1627) · [Before (L1617-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1617-L1618)

```diff
-       b: () => Rs,
-       f: () => sF
+       e: () => EP,
+       g: () => uP
```

#### 300. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1620-L1627` → after: `L1629-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1629-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1629-L1636) · [Before (L1620-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1620-L1627)

```diff
-     var Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, az, qz, Sz, Vz, Rz, pz, fz, Ez, zt, tt, st, Ft, Wt, Xt, Ot, ot, vt, Ut, Kt, ut, Nt, bt, wt, Dt, gt, Ht, Bt,  … [truncated]
-       zs = sz(36538),
-       ts = sz(38437),
-       ss = sz(38442),
-       Fs = sz(8611),
-       Ws = sz(577),
-       Xs = sz(574),
-       Os = sz(36210);
+     var hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Jv, Ev, ov, bv, rv, kv, Xv, uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, lz, Tz, Wz, wz, az, sz, Cz, iz, cz,  … [truncated]
+       uz = Pv(36645),
+       vP = Pv(38555),
+       zP = Pv(38560),
+       PP = Pv(8772),
+       hP = Pv(618),
+       SP = Pv(609),
+       eP = Pv(36310);
```

#### 301. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1630` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1639) · [Before (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1630)

```diff
-           super(...arguments), (0, ts.e)(this, "id", uz, this), (0, ts.e)(this, "amount", Nz, this), (0, ts.e)(this, "x", bz, this), (0, ts.e)(this, "y", wz, this), (0, ts.e)(this, "z", Dz, this), (0, ts.e)(this, "size", gz, this), (0, ts.e)(this, "attributes", Hz, this)
+           super(...arguments), (0, vP.b)(this, "id", Tv, this), (0, vP.b)(this, "amount", Wv, this), (0, vP.b)(this, "x", wv, this), (0, vP.b)(this, "y", av, this), (0, vP.b)(this, "z", sv, this), (0, vP.b)(this, "size", Cv, this), (0, vP.b)(this, "attributes", iv, this)
```

#### 302. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1632` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1641) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1632)

```diff
-       }, uz = (0, ss.b)(Kz.prototype, "id", [Fz], {
+       }, Tv = (0, zP.d)(lv.prototype, "id", [hv], {
```

#### 303. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1639` → after: `L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1648) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1639)

```diff
-       }), Nz = (0, ss.b)(Kz.prototype, "amount", [Wz], {
+       }), Wv = (0, zP.d)(lv.prototype, "amount", [Sv], {
```

#### 304. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1646` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1655) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1646)

```diff
-       }), bz = (0, ss.b)(Kz.prototype, "x", [Xz], {
+       }), wv = (0, zP.d)(lv.prototype, "x", [ev], {
```

#### 305. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1653` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1662) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1653)

```diff
-       }), wz = (0, ss.b)(Kz.prototype, "y", [Oz], {
+       }), av = (0, zP.d)(lv.prototype, "y", [gv], {
```

#### 306. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1660` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1669) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1660)

```diff
-       }), Dz = (0, ss.b)(Kz.prototype, "z", [oz], {
+       }), sv = (0, zP.d)(lv.prototype, "z", [pv], {
```

#### 307. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1667` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1676) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1667)

```diff
-       }), gz = (0, ss.b)(Kz.prototype, "size", [vz], {
+       }), Cv = (0, zP.d)(lv.prototype, "size", [dv], {
```

#### 308. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1674` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1683) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1674)

```diff
-       }), Hz = (0, ss.b)(Kz.prototype, "attributes", [Uz], {
+       }), iv = (0, zP.d)(lv.prototype, "attributes", [Nv], {
```

#### 309. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1684` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1693) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1684)

```diff
-           super(...arguments), (0, ts.e)(this, "itemName", Yz, this), (0, ts.e)(this, "enchantmentTier", xz, this)
+           super(...arguments), (0, vP.b)(this, "itemName", jv, this), (0, vP.b)(this, "enchantmentTier", fv, this)
```

#### 310. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1686` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1695) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1686)

```diff
-       }, Yz = (0, ss.b)(rz.prototype, "itemName", [Bz], {
+       }, jv = (0, zP.d)(mv.prototype, "itemName", [cv], {
```

#### 311. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1691` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1700) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1691)

```diff
-       }), xz = (0, ss.b)(rz.prototype, "enchantmentTier", [Pz], {
+       }), fv = (0, zP.d)(mv.prototype, "enchantmentTier", [Gv], {
```

#### 312. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1699` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1708) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1699)

```diff
-           super(...arguments), (0, ts.e)(this, "type", Mz, this), (0, ts.e)(this, "name", dz, this), (0, ts.e)(this, "x", hz, this), (0, ts.e)(this, "y", Qz, this), (0, ts.e)(this, "z", kz, this), (0, ts.e)(this, "xRotation", iz, this), (0, ts.e)(this, "yRotation", Lz, this), (0, … [truncated]
+           super(...arguments), (0, vP.b)(this, "type", Iv, this), (0, vP.b)(this, "name", Qv, this), (0, vP.b)(this, "x", Zv, this), (0, vP.b)(this, "y", Av, this), (0, vP.b)(this, "z", Lv, this), (0, vP.b)(this, "xRotation", Hv, this), (0, vP.b)(this, "yRotation", Mv, this), (0, … [truncated]
```

#### 313. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1701` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1710) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1701)

```diff
-       }, Mz = (0, ss.b)(yz.prototype, "type", [mz], {
+       }, Iv = (0, zP.d)(qv.prototype, "type", [Fv], {
```

#### 314. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1706` → after: `L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1715) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1706)

```diff
-       }), dz = (0, ss.b)(yz.prototype, "name", [Jz], {
+       }), Qv = (0, zP.d)(qv.prototype, "name", [Yv], {
```

#### 315. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1713` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1722) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1713)

```diff
-       }), hz = (0, ss.b)(yz.prototype, "x", [Iz], {
+       }), Zv = (0, zP.d)(qv.prototype, "x", [nv], {
```

#### 316. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1720` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1729) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1720)

```diff
-       }), Qz = (0, ss.b)(yz.prototype, "y", [Cz], {
+       }), Av = (0, zP.d)(qv.prototype, "y", [Ov], {
```

#### 317. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1727` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1736) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1727)

```diff
-       }), kz = (0, ss.b)(yz.prototype, "z", [ez], {
+       }), Lv = (0, zP.d)(qv.prototype, "z", [Dv], {
```

#### 318. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1734` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1743) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1734)

```diff
-       }), iz = (0, ss.b)(yz.prototype, "xRotation", [Zz], {
+       }), Hv = (0, zP.d)(qv.prototype, "xRotation", [Kv], {
```

#### 319. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1741` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1750) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1741)

```diff
-       }), Lz = (0, ss.b)(yz.prototype, "yRotation", [Gz], {
+       }), Mv = (0, zP.d)(qv.prototype, "yRotation", [Vv], {
```

#### 320. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1748` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1757) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1748)

```diff
-       }), lz = (0, ss.b)(yz.prototype, "zRotation", [Tz], {
+       }), yv = (0, zP.d)(qv.prototype, "zRotation", [Uv], {
```

#### 321. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1755` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1764) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1755)

```diff
-       }), nz = (0, ss.b)(yz.prototype, "followingEId", [cz], {
+       }), Bv = (0, zP.d)(qv.prototype, "followingEId", [Rv], {
```

#### 322. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1760` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1769) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1760)

```diff
-       }), az = (0, ss.b)(yz.prototype, "followingOffset", [jz], {
+       }), Jv = (0, zP.d)(qv.prototype, "followingOffset", [xv], {
```

#### 323. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1767` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1776) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1767)

```diff
-       }), qz = (0, ss.b)(yz.prototype, "shouldMatchFollowingEntityRotation", [Az], {
+       }), Ev = (0, zP.d)(qv.prototype, "shouldMatchFollowingEntityRotation", [tv], {
```

#### 324. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1779` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1788) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1779)

```diff
-           super(...arguments), (0, ts.e)(this, "scale", vt, this), (0, ts.e)(this, "speed", Ut, this), (0, ts.e)(this, "jumping", Kt, this), (0, ts.e)(this, "crouching", ut, this), (0, ts.e)(this, "cameraPitch", Nt, this), (0, ts.e)(this, "armSwinging", bt, this), (0, ts.e)(this, … [truncated]
+           super(...arguments), (0, vP.b)(this, "scale", dz, this), (0, vP.b)(this, "speed", Nz, this), (0, vP.b)(this, "jumping", lz, this), (0, vP.b)(this, "crouching", Tz, this), (0, vP.b)(this, "cameraPitch", Wz, this), (0, vP.b)(this, "armSwinging", wz, this), (0, vP.b)(this, … [truncated]
```

#### 325. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1781` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1790) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1781)

```diff
-       }, vt = (0, ss.b)(ot.prototype, "scale", [Sz], {
+       }, dz = (0, zP.d)(pz.prototype, "scale", [ov], {
```

#### 326. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1788` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1797) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1788)

```diff
-       }), Ut = (0, ss.b)(ot.prototype, "speed", [Vz], {
+       }), Nz = (0, zP.d)(pz.prototype, "speed", [bv], {
```

#### 327. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1795` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1804) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1795)

```diff
-       }), Kt = (0, ss.b)(ot.prototype, "jumping", [Rz], {
+       }), lz = (0, zP.d)(pz.prototype, "jumping", [rv], {
```

#### 328. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1802` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1811) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1802)

```diff
-       }), ut = (0, ss.b)(ot.prototype, "crouching", [pz], {
+       }), Tz = (0, zP.d)(pz.prototype, "crouching", [kv], {
```

#### 329. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1809` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1818) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1809)

```diff
-       }), Nt = (0, ss.b)(ot.prototype, "cameraPitch", [fz], {
+       }), Wz = (0, zP.d)(pz.prototype, "cameraPitch", [Xv], {
```

#### 330. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1816` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1825) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1816)

```diff
-       }), bt = (0, ss.b)(ot.prototype, "armSwinging", [Ez], {
+       }), wz = (0, zP.d)(pz.prototype, "armSwinging", [uv], {
```

#### 331. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1823` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1832) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1823)

```diff
-       }), wt = (0, ss.b)(ot.prototype, "heldItemName", [zt], {
+       }), az = (0, zP.d)(pz.prototype, "heldItemName", [vz], {
```

#### 332. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1828` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1837) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1828)

```diff
-       }), Dt = (0, ss.b)(ot.prototype, "heldItemEnchantmentTier", [tt], {
+       }), sz = (0, zP.d)(pz.prototype, "heldItemEnchantmentTier", [zz], {
```

#### 333. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1833` → after: `L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1842) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1833)

```diff
-       }), gt = (0, ss.b)(ot.prototype, "pose", [st], {
+       }), Cz = (0, zP.d)(pz.prototype, "pose", [Pz], {
```

#### 334. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1840` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1849) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1840)

```diff
-       }), Ht = (0, ss.b)(ot.prototype, "ridingVehicleEId", [Ft], {
+       }), iz = (0, zP.d)(pz.prototype, "ridingVehicleEId", [hz], {
```

#### 335. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1847` → after: `L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1856) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1847)

```diff
-       }), Bt = (0, ss.b)(ot.prototype, "meshOffset", [Wt], {
+       }), cz = (0, zP.d)(pz.prototype, "meshOffset", [Sz], {
```

#### 336. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1854` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1863) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1854)

```diff
-       }), Pt = (0, ss.b)(ot.prototype, "baseRenderHeading", [Xt], {
+       }), Gz = (0, zP.d)(pz.prototype, "baseRenderHeading", [ez], {
```

#### 337. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L1861` → after: `L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/155.js#L1870) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/155.js#L1861)

```diff
-       }), rt = (0, ss.b)(ot.prototype, "armour", [Ot], {
+       }), mz = (0, zP.d)(pz.prototype, "armour", [gz], {
```
